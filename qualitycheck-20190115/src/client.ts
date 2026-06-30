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
      'cn-hangzhou': "qualitycheck.cn-hangzhou.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("qualitycheck", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds a business category.
   * 
   * @param request - AddBusinessCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddBusinessCategoryResponse
   */
  async addBusinessCategoryWithOptions(request: $_model.AddBusinessCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddBusinessCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddBusinessCategory",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddBusinessCategoryResponse>(await this.callApi(params, req, runtime), new $_model.AddBusinessCategoryResponse({}));
  }

  /**
   * Adds a business category.
   * 
   * @param request - AddBusinessCategoryRequest
   * @returns AddBusinessCategoryResponse
   */
  async addBusinessCategory(request: $_model.AddBusinessCategoryRequest): Promise<$_model.AddBusinessCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addBusinessCategoryWithOptions(request, runtime);
  }

  /**
   * Add a rule category.
   * 
   * @param request - AddRuleCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddRuleCategoryResponse
   */
  async addRuleCategoryWithOptions(request: $_model.AddRuleCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddRuleCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddRuleCategory",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddRuleCategoryResponse>(await this.callApi(params, req, runtime), new $_model.AddRuleCategoryResponse({}));
  }

  /**
   * Add a rule category.
   * 
   * @param request - AddRuleCategoryRequest
   * @returns AddRuleCategoryResponse
   */
  async addRuleCategory(request: $_model.AddRuleCategoryRequest): Promise<$_model.AddRuleCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addRuleCategoryWithOptions(request, runtime);
  }

  /**
   * This operation creates a rule on the Quality Inspection Rule Configuration page. For Apsara Stack, the URL is ip:port/api/client/UpdateRuleById.json.
   * 
   * @param request - AddRuleV4Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddRuleV4Response
   */
  async addRuleV4WithOptions(request: $_model.AddRuleV4Request, runtime: $dara.RuntimeOptions): Promise<$_model.AddRuleV4Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isCopy)) {
      body["IsCopy"] = request.isCopy;
    }

    if (!$dara.isNull(request.jsonStrForRule)) {
      body["JsonStrForRule"] = request.jsonStrForRule;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddRuleV4",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddRuleV4Response>(await this.callApi(params, req, runtime), new $_model.AddRuleV4Response({}));
  }

  /**
   * This operation creates a rule on the Quality Inspection Rule Configuration page. For Apsara Stack, the URL is ip:port/api/client/UpdateRuleById.json.
   * 
   * @param request - AddRuleV4Request
   * @returns AddRuleV4Response
   */
  async addRuleV4(request: $_model.AddRuleV4Request): Promise<$_model.AddRuleV4Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addRuleV4WithOptions(request, runtime);
  }

  /**
   * Performs tag categorization.
   * 
   * @param request - AnalyzeLabelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AnalyzeLabelResponse
   */
  async analyzeLabelWithOptions(request: $_model.AnalyzeLabelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AnalyzeLabelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AnalyzeLabel",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AnalyzeLabelResponse>(await this.callApi(params, req, runtime), new $_model.AnalyzeLabelResponse({}));
  }

  /**
   * Performs tag categorization.
   * 
   * @param request - AnalyzeLabelRequest
   * @returns AnalyzeLabelResponse
   */
  async analyzeLabel(request: $_model.AnalyzeLabelRequest): Promise<$_model.AnalyzeLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.analyzeLabelWithOptions(request, runtime);
  }

  /**
   * Apply for the token required for real-time speech processing.
   * 
   * @param request - ApplyWsTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyWsTokenResponse
   */
  async applyWsTokenWithOptions(request: $_model.ApplyWsTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyWsTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyWsToken",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyWsTokenResponse>(await this.callApi(params, req, runtime), new $_model.ApplyWsTokenResponse({}));
  }

  /**
   * Apply for the token required for real-time speech processing.
   * 
   * @param request - ApplyWsTokenRequest
   * @returns ApplyWsTokenResponse
   */
  async applyWsToken(request: $_model.ApplyWsTokenRequest): Promise<$_model.ApplyWsTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyWsTokenWithOptions(request, runtime);
  }

  /**
   * Manually assign quality reviewers.
   * 
   * @remarks
   * You can manually assign files that have completed quality inspection to reviewers. Assignments can be made one file at a time or in batches:
   * Single-file assignment: Assign a specific file to a specified reviewer.
   * Batch assignment: Assign multiple filtered files to one or more reviewers. You can specify how many files each reviewer receives, or let the system distribute the files evenly among reviewers.
   * 
   * @param request - AssignReviewerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssignReviewerResponse
   */
  async assignReviewerWithOptions(request: $_model.AssignReviewerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssignReviewerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssignReviewer",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssignReviewerResponse>(await this.callApi(params, req, runtime), new $_model.AssignReviewerResponse({}));
  }

  /**
   * Manually assign quality reviewers.
   * 
   * @remarks
   * You can manually assign files that have completed quality inspection to reviewers. Assignments can be made one file at a time or in batches:
   * Single-file assignment: Assign a specific file to a specified reviewer.
   * Batch assignment: Assign multiple filtered files to one or more reviewers. You can specify how many files each reviewer receives, or let the system distribute the files evenly among reviewers.
   * 
   * @param request - AssignReviewerRequest
   * @returns AssignReviewerResponse
   */
  async assignReviewer(request: $_model.AssignReviewerRequest): Promise<$_model.AssignReviewerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.assignReviewerWithOptions(request, runtime);
  }

  /**
   * Frontend location: Quality Check Plan Management > Task Results > Session Groups > Batch Assign. Apsara Stack URL: ip:port/api/job/AssignReviewerBySessionGroup.json.
   * 
   * @deprecated OpenAPI AssignReviewerBySessionGroup is deprecated
   * 
   * @param request - AssignReviewerBySessionGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssignReviewerBySessionGroupResponse
   */
  async assignReviewerBySessionGroupWithOptions(request: $_model.AssignReviewerBySessionGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssignReviewerBySessionGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssignReviewerBySessionGroup",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssignReviewerBySessionGroupResponse>(await this.callApi(params, req, runtime), new $_model.AssignReviewerBySessionGroupResponse({}));
  }

  /**
   * Frontend location: Quality Check Plan Management > Task Results > Session Groups > Batch Assign. Apsara Stack URL: ip:port/api/job/AssignReviewerBySessionGroup.json.
   * 
   * @deprecated OpenAPI AssignReviewerBySessionGroup is deprecated
   * 
   * @param request - AssignReviewerBySessionGroupRequest
   * @returns AssignReviewerBySessionGroupResponse
   */
  // Deprecated
  async assignReviewerBySessionGroup(request: $_model.AssignReviewerBySessionGroupRequest): Promise<$_model.AssignReviewerBySessionGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.assignReviewerBySessionGroupWithOptions(request, runtime);
  }

  /**
   * This operation implements the Batch Review feature, which is available in the frontend under Task Management > Task Result.
   * For private cloud deployments, use the URL: ip:port/api/qcsBatchSubmitReviewInfo.json.
   * You can use this operation to perform a batch review on all filtered data.
   * Note: This operation updates a large volume of data. The changes may take some time to appear.
   * 
   * @param request - BatchSubmitReviewInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchSubmitReviewInfoResponse
   */
  async batchSubmitReviewInfoWithOptions(request: $_model.BatchSubmitReviewInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchSubmitReviewInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchSubmitReviewInfo",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchSubmitReviewInfoResponse>(await this.callApi(params, req, runtime), new $_model.BatchSubmitReviewInfoResponse({}));
  }

  /**
   * This operation implements the Batch Review feature, which is available in the frontend under Task Management > Task Result.
   * For private cloud deployments, use the URL: ip:port/api/qcsBatchSubmitReviewInfo.json.
   * You can use this operation to perform a batch review on all filtered data.
   * Note: This operation updates a large volume of data. The changes may take some time to appear.
   * 
   * @param request - BatchSubmitReviewInfoRequest
   * @returns BatchSubmitReviewInfoResponse
   */
  async batchSubmitReviewInfo(request: $_model.BatchSubmitReviewInfoRequest): Promise<$_model.BatchSubmitReviewInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchSubmitReviewInfoWithOptions(request, runtime);
  }

  /**
   * Creates an agent.
   * 
   * @param request - CreateAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAgentResponse
   */
  async createAgentWithOptions(request: $_model.CreateAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAgentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      body["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      body["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAgent",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAgentResponse>(await this.callApi(params, req, runtime), new $_model.CreateAgentResponse({}));
  }

  /**
   * Creates an agent.
   * 
   * @param request - CreateAgentRequest
   * @returns CreateAgentResponse
   */
  async createAgent(request: $_model.CreateAgentRequest): Promise<$_model.CreateAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAgentWithOptions(request, runtime);
  }

  /**
   * Creates an Agent batch task for conversation analysis. The application call supports HTTP calls to complete the customer response.
   * 
   * @param request - CreateAgentTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAgentTaskResponse
   */
  async createAgentTaskWithOptions(request: $_model.CreateAgentTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAgentTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      body["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      body["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAgentTask",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAgentTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateAgentTaskResponse({}));
  }

  /**
   * Creates an Agent batch task for conversation analysis. The application call supports HTTP calls to complete the customer response.
   * 
   * @param request - CreateAgentTaskRequest
   * @returns CreateAgentTaskResponse
   */
  async createAgentTask(request: $_model.CreateAgentTaskRequest): Promise<$_model.CreateAgentTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAgentTaskWithOptions(request, runtime);
  }

  /**
   * Uploads a set of speech hotwords to the server and obtains the hotword ID in the response.
   * 
   * @remarks
   * > Hotwords help improve recognition accuracy for specific terms, such as names, place names, or technical terms. [Learn more](https://help.aliyun.com/document_detail/213249.html).
   * 
   * @param request - CreateAsrVocabRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAsrVocabResponse
   */
  async createAsrVocabWithOptions(request: $_model.CreateAsrVocabRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAsrVocabResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAsrVocab",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAsrVocabResponse>(await this.callApi(params, req, runtime), new $_model.CreateAsrVocabResponse({}));
  }

  /**
   * Uploads a set of speech hotwords to the server and obtains the hotword ID in the response.
   * 
   * @remarks
   * > Hotwords help improve recognition accuracy for specific terms, such as names, place names, or technical terms. [Learn more](https://help.aliyun.com/document_detail/213249.html).
   * 
   * @param request - CreateAsrVocabRequest
   * @returns CreateAsrVocabResponse
   */
  async createAsrVocab(request: $_model.CreateAsrVocabRequest): Promise<$_model.CreateAsrVocabResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAsrVocabWithOptions(request, runtime);
  }

  /**
   * UI path: Quality Check Plan Management > Add or Edit Quality Check Dimension > Add Quality Check Dimension. Apsara Stack API endpoint: ip:port/api/qcs/CreateCheckTypeToScheme.json.
   * 
   * @param request - CreateCheckTypeToSchemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCheckTypeToSchemeResponse
   */
  async createCheckTypeToSchemeWithOptions(request: $_model.CreateCheckTypeToSchemeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCheckTypeToSchemeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCheckTypeToScheme",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCheckTypeToSchemeResponse>(await this.callApi(params, req, runtime), new $_model.CreateCheckTypeToSchemeResponse({}));
  }

  /**
   * UI path: Quality Check Plan Management > Add or Edit Quality Check Dimension > Add Quality Check Dimension. Apsara Stack API endpoint: ip:port/api/qcs/CreateCheckTypeToScheme.json.
   * 
   * @param request - CreateCheckTypeToSchemeRequest
   * @returns CreateCheckTypeToSchemeResponse
   */
  async createCheckTypeToScheme(request: $_model.CreateCheckTypeToSchemeRequest): Promise<$_model.CreateCheckTypeToSchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCheckTypeToSchemeWithOptions(request, runtime);
  }

  /**
   * Creates a label mining task.
   * 
   * @param request - CreateMiningTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMiningTaskResponse
   */
  async createMiningTaskWithOptions(request: $_model.CreateMiningTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMiningTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.callbackUrl)) {
      body["CallbackUrl"] = request.callbackUrl;
    }

    if (!$dara.isNull(request.filePath)) {
      body["FilePath"] = request.filePath;
    }

    if (!$dara.isNull(request.param)) {
      body["Param"] = request.param;
    }

    if (!$dara.isNull(request.taskType)) {
      body["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMiningTask",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMiningTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateMiningTaskResponse({}));
  }

  /**
   * Creates a label mining task.
   * 
   * @param request - CreateMiningTaskRequest
   * @returns CreateMiningTaskResponse
   */
  async createMiningTask(request: $_model.CreateMiningTaskRequest): Promise<$_model.CreateMiningTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMiningTaskWithOptions(request, runtime);
  }

  /**
   * You can access this operation from the Quality Check Plan Management page in the console. The Apsara Stack endpoint is ip:port/api/qcs/CreateQualityCheckScheme.json.
   * 
   * @param request - CreateQualityCheckSchemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQualityCheckSchemeResponse
   */
  async createQualityCheckSchemeWithOptions(request: $_model.CreateQualityCheckSchemeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateQualityCheckSchemeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQualityCheckScheme",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateQualityCheckSchemeResponse>(await this.callApi(params, req, runtime), new $_model.CreateQualityCheckSchemeResponse({}));
  }

  /**
   * You can access this operation from the Quality Check Plan Management page in the console. The Apsara Stack endpoint is ip:port/api/qcs/CreateQualityCheckScheme.json.
   * 
   * @param request - CreateQualityCheckSchemeRequest
   * @returns CreateQualityCheckSchemeResponse
   */
  async createQualityCheckScheme(request: $_model.CreateQualityCheckSchemeRequest): Promise<$_model.CreateQualityCheckSchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createQualityCheckSchemeWithOptions(request, runtime);
  }

  /**
   * Corresponding frontend feature location: Plan Management > Create Quality Inspection Job. Apsara Stack URL: ip:port/api/task/CreateSchemeTaskConfig.json.
   * 
   * @param request - CreateSchemeTaskConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSchemeTaskConfigResponse
   */
  async createSchemeTaskConfigWithOptions(request: $_model.CreateSchemeTaskConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSchemeTaskConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSchemeTaskConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSchemeTaskConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreateSchemeTaskConfigResponse({}));
  }

  /**
   * Corresponding frontend feature location: Plan Management > Create Quality Inspection Job. Apsara Stack URL: ip:port/api/task/CreateSchemeTaskConfig.json.
   * 
   * @param request - CreateSchemeTaskConfigRequest
   * @returns CreateSchemeTaskConfigResponse
   */
  async createSchemeTaskConfig(request: $_model.CreateSchemeTaskConfigRequest): Promise<$_model.CreateSchemeTaskConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSchemeTaskConfigWithOptions(request, runtime);
  }

  /**
   * Create a configuration.
   * 
   * @deprecated OpenAPI CreateSkillGroupConfig is deprecated
   * 
   * @param request - CreateSkillGroupConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSkillGroupConfigResponse
   */
  async createSkillGroupConfigWithOptions(request: $_model.CreateSkillGroupConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSkillGroupConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSkillGroupConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSkillGroupConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreateSkillGroupConfigResponse({}));
  }

  /**
   * Create a configuration.
   * 
   * @deprecated OpenAPI CreateSkillGroupConfig is deprecated
   * 
   * @param request - CreateSkillGroupConfigRequest
   * @returns CreateSkillGroupConfigResponse
   */
  // Deprecated
  async createSkillGroupConfig(request: $_model.CreateSkillGroupConfigRequest): Promise<$_model.CreateSkillGroupConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSkillGroupConfigWithOptions(request, runtime);
  }

  /**
   * Creates a label node.
   * 
   * @param request - CreateTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTagResponse
   */
  async createTagWithOptions(request: $_model.CreateTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTag",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTagResponse>(await this.callApi(params, req, runtime), new $_model.CreateTagResponse({}));
  }

  /**
   * Creates a label node.
   * 
   * @param request - CreateTagRequest
   * @returns CreateTagResponse
   */
  async createTag(request: $_model.CreateTagRequest): Promise<$_model.CreateTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTagWithOptions(request, runtime);
  }

  /**
   * Creates an automatic allocation rule for quality review tasks.
   * 
   * @param request - CreateTaskAssignRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTaskAssignRuleResponse
   */
  async createTaskAssignRuleWithOptions(request: $_model.CreateTaskAssignRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTaskAssignRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTaskAssignRule",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTaskAssignRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateTaskAssignRuleResponse({}));
  }

  /**
   * Creates an automatic allocation rule for quality review tasks.
   * 
   * @param request - CreateTaskAssignRuleRequest
   * @returns CreateTaskAssignRuleResponse
   */
  async createTaskAssignRule(request: $_model.CreateTaskAssignRuleRequest): Promise<$_model.CreateTaskAssignRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTaskAssignRuleWithOptions(request, runtime);
  }

  /**
   * Create a user
   * 
   * @remarks
   * Alibaba Cloud uses Resource Access Management (RAM) for unified account management. Before you create a user in Smart Conversation Analysis, first create the user in [RAM](https://ram.console.aliyun.com). Then, obtain the user’s UID, username, and display name. Finally, add the RAM user to Smart Conversation Analysis to grant them access to the Smart Conversation Analysis service.
   * 
   * @param request - CreateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserResponse
   */
  async createUserWithOptions(request: $_model.CreateUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      body["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      body["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUser",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUserResponse>(await this.callApi(params, req, runtime), new $_model.CreateUserResponse({}));
  }

  /**
   * Create a user
   * 
   * @remarks
   * Alibaba Cloud uses Resource Access Management (RAM) for unified account management. Before you create a user in Smart Conversation Analysis, first create the user in [RAM](https://ram.console.aliyun.com). Then, obtain the user’s UID, username, and display name. Finally, add the RAM user to Smart Conversation Analysis to grant them access to the Smart Conversation Analysis service.
   * 
   * @param request - CreateUserRequest
   * @returns CreateUserResponse
   */
  async createUser(request: $_model.CreateUserRequest): Promise<$_model.CreateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

  /**
   * Create a warning configuration.
   * 
   * @param request - CreateWarningConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWarningConfigResponse
   */
  async createWarningConfigWithOptions(request: $_model.CreateWarningConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWarningConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWarningConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWarningConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreateWarningConfigResponse({}));
  }

  /**
   * Create a warning configuration.
   * 
   * @param request - CreateWarningConfigRequest
   * @returns CreateWarningConfigResponse
   */
  async createWarningConfig(request: $_model.CreateWarningConfigRequest): Promise<$_model.CreateWarningConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWarningConfigWithOptions(request, runtime);
  }

  /**
   * 预警策略-新增
   * 
   * @param request - CreateWarningStrategyConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWarningStrategyConfigResponse
   */
  async createWarningStrategyConfigWithOptions(request: $_model.CreateWarningStrategyConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWarningStrategyConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWarningStrategyConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWarningStrategyConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreateWarningStrategyConfigResponse({}));
  }

  /**
   * 预警策略-新增
   * 
   * @param request - CreateWarningStrategyConfigRequest
   * @returns CreateWarningStrategyConfigResponse
   */
  async createWarningStrategyConfig(request: $_model.CreateWarningStrategyConfigRequest): Promise<$_model.CreateWarningStrategyConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWarningStrategyConfigWithOptions(request, runtime);
  }

  /**
   * Deletes a rule category.
   * 
   * @param request - DelRuleCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DelRuleCategoryResponse
   */
  async delRuleCategoryWithOptions(request: $_model.DelRuleCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DelRuleCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DelRuleCategory",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DelRuleCategoryResponse>(await this.callApi(params, req, runtime), new $_model.DelRuleCategoryResponse({}));
  }

  /**
   * Deletes a rule category.
   * 
   * @param request - DelRuleCategoryRequest
   * @returns DelRuleCategoryResponse
   */
  async delRuleCategory(request: $_model.DelRuleCategoryRequest): Promise<$_model.DelRuleCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.delRuleCategoryWithOptions(request, runtime);
  }

  /**
   * Deletes an agent.
   * 
   * @param request - DeleteAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAgentResponse
   */
  async deleteAgentWithOptions(request: $_model.DeleteAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAgentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      body["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      body["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAgent",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAgentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAgentResponse({}));
  }

  /**
   * Deletes an agent.
   * 
   * @param request - DeleteAgentRequest
   * @returns DeleteAgentResponse
   */
  async deleteAgent(request: $_model.DeleteAgentRequest): Promise<$_model.DeleteAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAgentWithOptions(request, runtime);
  }

  /**
   * Deletes a hotword group.
   * 
   * @param request - DeleteAsrVocabRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAsrVocabResponse
   */
  async deleteAsrVocabWithOptions(request: $_model.DeleteAsrVocabRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAsrVocabResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAsrVocab",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAsrVocabResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAsrVocabResponse({}));
  }

  /**
   * Deletes a hotword group.
   * 
   * @param request - DeleteAsrVocabRequest
   * @returns DeleteAsrVocabResponse
   */
  async deleteAsrVocab(request: $_model.DeleteAsrVocabRequest): Promise<$_model.DeleteAsrVocabResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAsrVocabWithOptions(request, runtime);
  }

  /**
   * Deletes a business category.
   * 
   * @param request - DeleteBusinessCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBusinessCategoryResponse
   */
  async deleteBusinessCategoryWithOptions(request: $_model.DeleteBusinessCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBusinessCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBusinessCategory",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBusinessCategoryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBusinessCategoryResponse({}));
  }

  /**
   * Deletes a business category.
   * 
   * @param request - DeleteBusinessCategoryRequest
   * @returns DeleteBusinessCategoryResponse
   */
  async deleteBusinessCategory(request: $_model.DeleteBusinessCategoryRequest): Promise<$_model.DeleteBusinessCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBusinessCategoryWithOptions(request, runtime);
  }

  /**
   * Deletes a dimension from a quality inspection scheme.
   * 
   * @param request - DeleteCheckTypeToSchemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCheckTypeToSchemeResponse
   */
  async deleteCheckTypeToSchemeWithOptions(request: $_model.DeleteCheckTypeToSchemeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCheckTypeToSchemeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCheckTypeToScheme",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCheckTypeToSchemeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCheckTypeToSchemeResponse({}));
  }

  /**
   * Deletes a dimension from a quality inspection scheme.
   * 
   * @param request - DeleteCheckTypeToSchemeRequest
   * @returns DeleteCheckTypeToSchemeResponse
   */
  async deleteCheckTypeToScheme(request: $_model.DeleteCheckTypeToSchemeRequest): Promise<$_model.DeleteCheckTypeToSchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCheckTypeToSchemeWithOptions(request, runtime);
  }

  /**
   * Deletes a language model.
   * 
   * @param request - DeleteCustomizationConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomizationConfigResponse
   */
  async deleteCustomizationConfigWithOptions(request: $_model.DeleteCustomizationConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomizationConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomizationConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomizationConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomizationConfigResponse({}));
  }

  /**
   * Deletes a language model.
   * 
   * @param request - DeleteCustomizationConfigRequest
   * @returns DeleteCustomizationConfigResponse
   */
  async deleteCustomizationConfig(request: $_model.DeleteCustomizationConfigRequest): Promise<$_model.DeleteCustomizationConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomizationConfigWithOptions(request, runtime);
  }

  /**
   * Deletes a dataset.
   * 
   * @deprecated OpenAPI DeleteDataSet is deprecated
   * 
   * @param request - DeleteDataSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataSetResponse
   */
  async deleteDataSetWithOptions(request: $_model.DeleteDataSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataSetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataSet",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataSetResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataSetResponse({}));
  }

  /**
   * Deletes a dataset.
   * 
   * @deprecated OpenAPI DeleteDataSet is deprecated
   * 
   * @param request - DeleteDataSetRequest
   * @returns DeleteDataSetResponse
   */
  // Deprecated
  async deleteDataSet(request: $_model.DeleteDataSetRequest): Promise<$_model.DeleteDataSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataSetWithOptions(request, runtime);
  }

  /**
   * Delete a speech recognition quality check task.
   * 
   * @param request - DeletePrecisionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePrecisionTaskResponse
   */
  async deletePrecisionTaskWithOptions(request: $_model.DeletePrecisionTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePrecisionTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePrecisionTask",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePrecisionTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeletePrecisionTaskResponse({}));
  }

  /**
   * Delete a speech recognition quality check task.
   * 
   * @param request - DeletePrecisionTaskRequest
   * @returns DeletePrecisionTaskResponse
   */
  async deletePrecisionTask(request: $_model.DeletePrecisionTaskRequest): Promise<$_model.DeletePrecisionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePrecisionTaskWithOptions(request, runtime);
  }

  /**
   * You can delete a quality check plan from the Quality Check Plan Management page by clicking the Delete button on the right side of the plan. The Apsara Stack API endpoint is ip:port/api/qcs/DeleteQualityCheckScheme.json.
   * 
   * @param request - DeleteQualityCheckSchemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQualityCheckSchemeResponse
   */
  async deleteQualityCheckSchemeWithOptions(request: $_model.DeleteQualityCheckSchemeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteQualityCheckSchemeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQualityCheckScheme",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteQualityCheckSchemeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteQualityCheckSchemeResponse({}));
  }

  /**
   * You can delete a quality check plan from the Quality Check Plan Management page by clicking the Delete button on the right side of the plan. The Apsara Stack API endpoint is ip:port/api/qcs/DeleteQualityCheckScheme.json.
   * 
   * @param request - DeleteQualityCheckSchemeRequest
   * @returns DeleteQualityCheckSchemeResponse
   */
  async deleteQualityCheckScheme(request: $_model.DeleteQualityCheckSchemeRequest): Promise<$_model.DeleteQualityCheckSchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteQualityCheckSchemeWithOptions(request, runtime);
  }

  /**
   * This operation deletes a quality check rule. You can access it from the Quality Check Rule Configuration page in the Apsara Stack console. The API endpoint is ip:port/api/client/DeleteRule.json.
   * 
   * @deprecated OpenAPI DeleteRule is deprecated, please use Qualitycheck::2019-01-15::DeleteRuleV4 instead.
   * 
   * @param request - DeleteRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRuleResponse
   */
  async deleteRuleWithOptions(request: $_model.DeleteRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.forceDelete)) {
      body["ForceDelete"] = request.forceDelete;
    }

    if (!$dara.isNull(request.isSchemeData)) {
      body["IsSchemeData"] = request.isSchemeData;
    }

    if (!$dara.isNull(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRule",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRuleResponse({}));
  }

  /**
   * This operation deletes a quality check rule. You can access it from the Quality Check Rule Configuration page in the Apsara Stack console. The API endpoint is ip:port/api/client/DeleteRule.json.
   * 
   * @deprecated OpenAPI DeleteRule is deprecated, please use Qualitycheck::2019-01-15::DeleteRuleV4 instead.
   * 
   * @param request - DeleteRuleRequest
   * @returns DeleteRuleResponse
   */
  // Deprecated
  async deleteRule(request: $_model.DeleteRuleRequest): Promise<$_model.DeleteRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRuleWithOptions(request, runtime);
  }

  /**
   * Frontend feature location: Quality Inspection Rule Configuration — Delete. Apsara Stack URL: ip:port/api/client/DeleteRule.json.
   * 
   * @param request - DeleteRuleV4Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRuleV4Response
   */
  async deleteRuleV4WithOptions(request: $_model.DeleteRuleV4Request, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRuleV4Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.forceDelete)) {
      body["ForceDelete"] = request.forceDelete;
    }

    if (!$dara.isNull(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRuleV4",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRuleV4Response>(await this.callApi(params, req, runtime), new $_model.DeleteRuleV4Response({}));
  }

  /**
   * Frontend feature location: Quality Inspection Rule Configuration — Delete. Apsara Stack URL: ip:port/api/client/DeleteRule.json.
   * 
   * @param request - DeleteRuleV4Request
   * @returns DeleteRuleV4Response
   */
  async deleteRuleV4(request: $_model.DeleteRuleV4Request): Promise<$_model.DeleteRuleV4Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRuleV4WithOptions(request, runtime);
  }

  /**
   * This feature is not available on the frontend. The Apsara Stack API endpoint is ip:port/api/task/DeleteSchemeTaskConfig.json.
   * 
   * @param request - DeleteSchemeTaskConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSchemeTaskConfigResponse
   */
  async deleteSchemeTaskConfigWithOptions(request: $_model.DeleteSchemeTaskConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSchemeTaskConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSchemeTaskConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSchemeTaskConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSchemeTaskConfigResponse({}));
  }

  /**
   * This feature is not available on the frontend. The Apsara Stack API endpoint is ip:port/api/task/DeleteSchemeTaskConfig.json.
   * 
   * @param request - DeleteSchemeTaskConfigRequest
   * @returns DeleteSchemeTaskConfigResponse
   */
  async deleteSchemeTaskConfig(request: $_model.DeleteSchemeTaskConfigRequest): Promise<$_model.DeleteSchemeTaskConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSchemeTaskConfigWithOptions(request, runtime);
  }

  /**
   * Delete a configuration.
   * 
   * @deprecated OpenAPI DeleteSkillGroupConfig is deprecated
   * 
   * @param request - DeleteSkillGroupConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSkillGroupConfigResponse
   */
  async deleteSkillGroupConfigWithOptions(request: $_model.DeleteSkillGroupConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSkillGroupConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSkillGroupConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSkillGroupConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSkillGroupConfigResponse({}));
  }

  /**
   * Delete a configuration.
   * 
   * @deprecated OpenAPI DeleteSkillGroupConfig is deprecated
   * 
   * @param request - DeleteSkillGroupConfigRequest
   * @returns DeleteSkillGroupConfigResponse
   */
  // Deprecated
  async deleteSkillGroupConfig(request: $_model.DeleteSkillGroupConfigRequest): Promise<$_model.DeleteSkillGroupConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSkillGroupConfigWithOptions(request, runtime);
  }

  /**
   * Deletes a label node.
   * 
   * @param request - DeleteTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTagResponse
   */
  async deleteTagWithOptions(request: $_model.DeleteTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTag",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTagResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTagResponse({}));
  }

  /**
   * Deletes a label node.
   * 
   * @param request - DeleteTagRequest
   * @returns DeleteTagResponse
   */
  async deleteTag(request: $_model.DeleteTagRequest): Promise<$_model.DeleteTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTagWithOptions(request, runtime);
  }

  /**
   * Deletes an automatic allocation rule for review tasks.
   * 
   * @param request - DeleteTaskAssignRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTaskAssignRuleResponse
   */
  async deleteTaskAssignRuleWithOptions(request: $_model.DeleteTaskAssignRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTaskAssignRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTaskAssignRule",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTaskAssignRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTaskAssignRuleResponse({}));
  }

  /**
   * Deletes an automatic allocation rule for review tasks.
   * 
   * @param request - DeleteTaskAssignRuleRequest
   * @returns DeleteTaskAssignRuleResponse
   */
  async deleteTaskAssignRule(request: $_model.DeleteTaskAssignRuleRequest): Promise<$_model.DeleteTaskAssignRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTaskAssignRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a warning configuration.
   * 
   * @param request - DeleteWarningConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWarningConfigResponse
   */
  async deleteWarningConfigWithOptions(request: $_model.DeleteWarningConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWarningConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWarningConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWarningConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWarningConfigResponse({}));
  }

  /**
   * Deletes a warning configuration.
   * 
   * @param request - DeleteWarningConfigRequest
   * @returns DeleteWarningConfigResponse
   */
  async deleteWarningConfig(request: $_model.DeleteWarningConfigRequest): Promise<$_model.DeleteWarningConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWarningConfigWithOptions(request, runtime);
  }

  /**
   * 预警策略-删除
   * 
   * @param request - DeleteWarningStrategyConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWarningStrategyConfigResponse
   */
  async deleteWarningStrategyConfigWithOptions(request: $_model.DeleteWarningStrategyConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWarningStrategyConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWarningStrategyConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWarningStrategyConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWarningStrategyConfigResponse({}));
  }

  /**
   * 预警策略-删除
   * 
   * @param request - DeleteWarningStrategyConfigRequest
   * @returns DeleteWarningStrategyConfigResponse
   */
  async deleteWarningStrategyConfig(request: $_model.DeleteWarningStrategyConfigRequest): Promise<$_model.DeleteWarningStrategyConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWarningStrategyConfigWithOptions(request, runtime);
  }

  /**
   * Runs an agent.
   * 
   * @param request - ExecuteAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteAgentResponse
   */
  async *executeAgentWithSSE(request: $_model.ExecuteAgentRequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.ExecuteAgentResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      body["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      body["JsonStr"] = request.jsonStr;
    }

    if (!$dara.isNull(request.stream)) {
      body["Stream"] = request.stream;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteAgent",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.ExecuteAgentResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.ExecuteAgentResponse({}));
      }

    }
  }

  /**
   * Runs an agent.
   * 
   * @param request - ExecuteAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteAgentResponse
   */
  async executeAgentWithOptions(request: $_model.ExecuteAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteAgentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      body["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      body["JsonStr"] = request.jsonStr;
    }

    if (!$dara.isNull(request.stream)) {
      body["Stream"] = request.stream;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteAgent",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteAgentResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteAgentResponse({}));
  }

  /**
   * Runs an agent.
   * 
   * @param request - ExecuteAgentRequest
   * @returns ExecuteAgentResponse
   */
  async executeAgent(request: $_model.ExecuteAgentRequest): Promise<$_model.ExecuteAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executeAgentWithOptions(request, runtime);
  }

  /**
   * Generates labels.
   * 
   * @param request - GenerateLabelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateLabelResponse
   */
  async generateLabelWithOptions(request: $_model.GenerateLabelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateLabelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateLabel",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateLabelResponse>(await this.callApi(params, req, runtime), new $_model.GenerateLabelResponse({}));
  }

  /**
   * Generates labels.
   * 
   * @param request - GenerateLabelRequest
   * @returns GenerateLabelResponse
   */
  async generateLabel(request: $_model.GenerateLabelRequest): Promise<$_model.GenerateLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateLabelWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of an agent.
   * 
   * @param request - GetAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentResponse
   */
  async getAgentWithOptions(request: $_model.GetAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      body["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      body["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgent",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgentResponse>(await this.callApi(params, req, runtime), new $_model.GetAgentResponse({}));
  }

  /**
   * Retrieves the details of an agent.
   * 
   * @param request - GetAgentRequest
   * @returns GetAgentResponse
   */
  async getAgent(request: $_model.GetAgentRequest): Promise<$_model.GetAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentWithOptions(request, runtime);
  }

  /**
   * Retrieves the task result of an agent node.
   * 
   * @param request - GetAgentTaskResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentTaskResultResponse
   */
  async getAgentTaskResultWithOptions(request: $_model.GetAgentTaskResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentTaskResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      body["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      body["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgentTaskResult",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgentTaskResultResponse>(await this.callApi(params, req, runtime), new $_model.GetAgentTaskResultResponse({}));
  }

  /**
   * Retrieves the task result of an agent node.
   * 
   * @param request - GetAgentTaskResultRequest
   * @returns GetAgentTaskResultResponse
   */
  async getAgentTaskResult(request: $_model.GetAgentTaskResultRequest): Promise<$_model.GetAgentTaskResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentTaskResultWithOptions(request, runtime);
  }

  /**
   * Retrieves details for a specified hotword group.
   * 
   * @param request - GetAsrVocabRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAsrVocabResponse
   */
  async getAsrVocabWithOptions(request: $_model.GetAsrVocabRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAsrVocabResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAsrVocab",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAsrVocabResponse>(await this.callApi(params, req, runtime), new $_model.GetAsrVocabResponse({}));
  }

  /**
   * Retrieves details for a specified hotword group.
   * 
   * @param request - GetAsrVocabRequest
   * @returns GetAsrVocabResponse
   */
  async getAsrVocab(request: $_model.GetAsrVocabRequest): Promise<$_model.GetAsrVocabResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAsrVocabWithOptions(request, runtime);
  }

  /**
   * Obtain the list of applicable businesses.
   * 
   * @param request - GetBusinessCategoryListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBusinessCategoryListResponse
   */
  async getBusinessCategoryListWithOptions(request: $_model.GetBusinessCategoryListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBusinessCategoryListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBusinessCategoryList",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBusinessCategoryListResponse>(await this.callApi(params, req, runtime), new $_model.GetBusinessCategoryListResponse({}));
  }

  /**
   * Obtain the list of applicable businesses.
   * 
   * @param request - GetBusinessCategoryListRequest
   * @returns GetBusinessCategoryListResponse
   */
  async getBusinessCategoryList(request: $_model.GetBusinessCategoryListRequest): Promise<$_model.GetBusinessCategoryListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBusinessCategoryListWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of language models.
   * 
   * @param request - GetCustomizationConfigListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomizationConfigListResponse
   */
  async getCustomizationConfigListWithOptions(request: $_model.GetCustomizationConfigListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCustomizationConfigListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCustomizationConfigList",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCustomizationConfigListResponse>(await this.callApi(params, req, runtime), new $_model.GetCustomizationConfigListResponse({}));
  }

  /**
   * Retrieves a list of language models.
   * 
   * @param request - GetCustomizationConfigListRequest
   * @returns GetCustomizationConfigListResponse
   */
  async getCustomizationConfigList(request: $_model.GetCustomizationConfigListRequest): Promise<$_model.GetCustomizationConfigListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCustomizationConfigListWithOptions(request, runtime);
  }

  /**
   * Queries the results of tag categorization analysis.
   * 
   * @param request - GetLabelAnalysisResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLabelAnalysisResultResponse
   */
  async getLabelAnalysisResultWithOptions(request: $_model.GetLabelAnalysisResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLabelAnalysisResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLabelAnalysisResult",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLabelAnalysisResultResponse>(await this.callApi(params, req, runtime), new $_model.GetLabelAnalysisResultResponse({}));
  }

  /**
   * Queries the results of tag categorization analysis.
   * 
   * @param request - GetLabelAnalysisResultRequest
   * @returns GetLabelAnalysisResultResponse
   */
  async getLabelAnalysisResult(request: $_model.GetLabelAnalysisResultRequest): Promise<$_model.GetLabelAnalysisResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLabelAnalysisResultWithOptions(request, runtime);
  }

  /**
   * Queries the result of a label generation task.
   * 
   * @param request - GetLabelGeneratedResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLabelGeneratedResultResponse
   */
  async getLabelGeneratedResultWithOptions(request: $_model.GetLabelGeneratedResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLabelGeneratedResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLabelGeneratedResult",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLabelGeneratedResultResponse>(await this.callApi(params, req, runtime), new $_model.GetLabelGeneratedResultResponse({}));
  }

  /**
   * Queries the result of a label generation task.
   * 
   * @param request - GetLabelGeneratedResultRequest
   * @returns GetLabelGeneratedResultResponse
   */
  async getLabelGeneratedResult(request: $_model.GetLabelGeneratedResultRequest): Promise<$_model.GetLabelGeneratedResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLabelGeneratedResultWithOptions(request, runtime);
  }

  /**
   * Retrieve the result of a tag mining task.
   * 
   * @param request - GetMiningTaskResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMiningTaskResultResponse
   */
  async getMiningTaskResultWithOptions(request: $_model.GetMiningTaskResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMiningTaskResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMiningTaskResult",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMiningTaskResultResponse>(await this.callApi(params, req, runtime), new $_model.GetMiningTaskResultResponse({}));
  }

  /**
   * Retrieve the result of a tag mining task.
   * 
   * @param request - GetMiningTaskResultRequest
   * @returns GetMiningTaskResultResponse
   */
  async getMiningTaskResult(request: $_model.GetMiningTaskResultRequest): Promise<$_model.GetMiningTaskResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMiningTaskResultWithOptions(request, runtime);
  }

  /**
   * Retrieve the next file details for manual verification.
   * 
   * @param request - GetNextResultToVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNextResultToVerifyResponse
   */
  async getNextResultToVerifyWithOptions(request: $_model.GetNextResultToVerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNextResultToVerifyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNextResultToVerify",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNextResultToVerifyResponse>(await this.callApi(params, req, runtime), new $_model.GetNextResultToVerifyResponse({}));
  }

  /**
   * Retrieve the next file details for manual verification.
   * 
   * @param request - GetNextResultToVerifyRequest
   * @returns GetNextResultToVerifyResponse
   */
  async getNextResultToVerify(request: $_model.GetNextResultToVerifyRequest): Promise<$_model.GetNextResultToVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNextResultToVerifyWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a (speech recognition) detection task.
   * 
   * @param request - GetPrecisionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPrecisionTaskResponse
   */
  async getPrecisionTaskWithOptions(request: $_model.GetPrecisionTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPrecisionTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPrecisionTask",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPrecisionTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetPrecisionTaskResponse({}));
  }

  /**
   * Retrieves the details of a (speech recognition) detection task.
   * 
   * @param request - GetPrecisionTaskRequest
   * @returns GetPrecisionTaskResponse
   */
  async getPrecisionTask(request: $_model.GetPrecisionTaskRequest): Promise<$_model.GetPrecisionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPrecisionTaskWithOptions(request, runtime);
  }

  /**
   * This operation implements the query feature in quality check plan management on the frontend. The Apsara Stack URL is ip:port/api/qcs/GetQualityCheckScheme.json.
   * 
   * @param request - GetQualityCheckSchemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualityCheckSchemeResponse
   */
  async getQualityCheckSchemeWithOptions(request: $_model.GetQualityCheckSchemeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQualityCheckSchemeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualityCheckScheme",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQualityCheckSchemeResponse>(await this.callApi(params, req, runtime), new $_model.GetQualityCheckSchemeResponse({}));
  }

  /**
   * This operation implements the query feature in quality check plan management on the frontend. The Apsara Stack URL is ip:port/api/qcs/GetQualityCheckScheme.json.
   * 
   * @param request - GetQualityCheckSchemeRequest
   * @returns GetQualityCheckSchemeResponse
   */
  async getQualityCheckScheme(request: $_model.GetQualityCheckSchemeRequest): Promise<$_model.GetQualityCheckSchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualityCheckSchemeWithOptions(request, runtime);
  }

  /**
   * Query quality inspection results. Some fields require the requiredFields parameter to be explicitly specified in the request. Set the service endpoint (Region) to Hangzhou (cn-hangzhou).
   * 
   * @remarks
   * You can query data uploaded using [UploadAudioData](https://help.aliyun.com/document_detail/139399.html) or [UploadData](https://help.aliyun.com/document_detail/111394.html). You can also query data from dataset-based quality inspection tasks created with [SubmitQualityCheckTask](https://help.aliyun.com/document_detail/158890.html). You can search by task ID (taskId) or by time range.
   * 
   * @param request - GetResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResultResponse
   */
  async getResultWithOptions(request: $_model.GetResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResult",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResultResponse>(await this.callApi(params, req, runtime), new $_model.GetResultResponse({}));
  }

  /**
   * Query quality inspection results. Some fields require the requiredFields parameter to be explicitly specified in the request. Set the service endpoint (Region) to Hangzhou (cn-hangzhou).
   * 
   * @remarks
   * You can query data uploaded using [UploadAudioData](https://help.aliyun.com/document_detail/139399.html) or [UploadData](https://help.aliyun.com/document_detail/111394.html). You can also query data from dataset-based quality inspection tasks created with [SubmitQualityCheckTask](https://help.aliyun.com/document_detail/158890.html). You can search by task ID (taskId) or by time range.
   * 
   * @param request - GetResultRequest
   * @returns GetResultResponse
   */
  async getResult(request: $_model.GetResultRequest): Promise<$_model.GetResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResultWithOptions(request, runtime);
  }

  /**
   * Retrieves the quality inspection results for a specified file. The response includes the transcript, audio URL, and details of detected rule hits. You can use this information to review the file by listening to the audio, reading the transcript, and locating where rules were triggered.
   * 
   * @param request - GetResultToReviewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResultToReviewResponse
   */
  async getResultToReviewWithOptions(request: $_model.GetResultToReviewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResultToReviewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResultToReview",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResultToReviewResponse>(await this.callApi(params, req, runtime), new $_model.GetResultToReviewResponse({}));
  }

  /**
   * Retrieves the quality inspection results for a specified file. The response includes the transcript, audio URL, and details of detected rule hits. You can use this information to review the file by listening to the audio, reading the transcript, and locating where rules were triggered.
   * 
   * @param request - GetResultToReviewRequest
   * @returns GetResultToReviewResponse
   */
  async getResultToReview(request: $_model.GetResultToReviewRequest): Promise<$_model.GetResultToReviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResultToReviewWithOptions(request, runtime);
  }

  /**
   * Retrieves basic information about rules.
   * 
   * @remarks
   * > This operation returns basic rule information such as the **id** and **name**. You can use this information with [GetRuleDetails](https://help.aliyun.com/document_detail/142310.html).
   * 
   * @deprecated OpenAPI GetRule is deprecated, please use Qualitycheck::2019-01-15::GetRuleV4 instead.
   * 
   * @param request - GetRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRuleResponse
   */
  async getRuleWithOptions(request: $_model.GetRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRule",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetRuleResponse({}));
  }

  /**
   * Retrieves basic information about rules.
   * 
   * @remarks
   * > This operation returns basic rule information such as the **id** and **name**. You can use this information with [GetRuleDetails](https://help.aliyun.com/document_detail/142310.html).
   * 
   * @deprecated OpenAPI GetRule is deprecated, please use Qualitycheck::2019-01-15::GetRuleV4 instead.
   * 
   * @param request - GetRuleRequest
   * @returns GetRuleResponse
   */
  // Deprecated
  async getRule(request: $_model.GetRuleRequest): Promise<$_model.GetRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRuleWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a specific quality inspection rule. It corresponds to the **Edit** action on the **Quality Inspection Rule Configuration** page. The URL for this operation in a private cloud is `ip:port/api/client/GetRuleById.json`.
   * 
   * @deprecated OpenAPI GetRuleById is deprecated, please use Qualitycheck::2019-01-15::GetRuleV4 instead.
   * 
   * @param request - GetRuleByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRuleByIdResponse
   */
  async getRuleByIdWithOptions(request: $_model.GetRuleByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRuleByIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRuleById",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRuleByIdResponse>(await this.callApi(params, req, runtime), new $_model.GetRuleByIdResponse({}));
  }

  /**
   * Retrieves the details of a specific quality inspection rule. It corresponds to the **Edit** action on the **Quality Inspection Rule Configuration** page. The URL for this operation in a private cloud is `ip:port/api/client/GetRuleById.json`.
   * 
   * @deprecated OpenAPI GetRuleById is deprecated, please use Qualitycheck::2019-01-15::GetRuleV4 instead.
   * 
   * @param request - GetRuleByIdRequest
   * @returns GetRuleByIdResponse
   */
  // Deprecated
  async getRuleById(request: $_model.GetRuleByIdRequest): Promise<$_model.GetRuleByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRuleByIdWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of rule types.
   * 
   * @param request - GetRuleCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRuleCategoryResponse
   */
  async getRuleCategoryWithOptions(request: $_model.GetRuleCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRuleCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRuleCategory",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRuleCategoryResponse>(await this.callApi(params, req, runtime), new $_model.GetRuleCategoryResponse({}));
  }

  /**
   * Retrieves a list of rule types.
   * 
   * @param request - GetRuleCategoryRequest
   * @returns GetRuleCategoryResponse
   */
  async getRuleCategory(request: $_model.GetRuleCategoryRequest): Promise<$_model.GetRuleCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRuleCategoryWithOptions(request, runtime);
  }

  /**
   * Retrieves the detailed information of a rule.
   * 
   * @remarks
   * > This operation is used in conjunction with [Get basic rule information](https://help.aliyun.com/document_detail/142333.html). First, call the GetRule operation to obtain the rule ID. Then, use the rule ID as a parameter to call the **GetRuleDetail** operation.
   * 
   * @deprecated OpenAPI GetRuleDetail is deprecated, please use Qualitycheck::2019-01-15::GetRuleV4 instead.
   * 
   * @param request - GetRuleDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRuleDetailResponse
   */
  async getRuleDetailWithOptions(request: $_model.GetRuleDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRuleDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRuleDetail",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRuleDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetRuleDetailResponse({}));
  }

  /**
   * Retrieves the detailed information of a rule.
   * 
   * @remarks
   * > This operation is used in conjunction with [Get basic rule information](https://help.aliyun.com/document_detail/142333.html). First, call the GetRule operation to obtain the rule ID. Then, use the rule ID as a parameter to call the **GetRuleDetail** operation.
   * 
   * @deprecated OpenAPI GetRuleDetail is deprecated, please use Qualitycheck::2019-01-15::GetRuleV4 instead.
   * 
   * @param request - GetRuleDetailRequest
   * @returns GetRuleDetailResponse
   */
  // Deprecated
  async getRuleDetail(request: $_model.GetRuleDetailRequest): Promise<$_model.GetRuleDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRuleDetailWithOptions(request, runtime);
  }

  /**
   * This API is located in the frontend at Quality Check Rule Configuration > Query. The Apsara Stack URL is ip:port/api/client/GetRuleById.json.
   * 
   * @param request - GetRuleV4Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRuleV4Response
   */
  async getRuleV4WithOptions(request: $_model.GetRuleV4Request, runtime: $dara.RuntimeOptions): Promise<$_model.GetRuleV4Response> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRuleV4",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRuleV4Response>(await this.callApi(params, req, runtime), new $_model.GetRuleV4Response({}));
  }

  /**
   * This API is located in the frontend at Quality Check Rule Configuration > Query. The Apsara Stack URL is ip:port/api/client/GetRuleById.json.
   * 
   * @param request - GetRuleV4Request
   * @returns GetRuleV4Response
   */
  async getRuleV4(request: $_model.GetRuleV4Request): Promise<$_model.GetRuleV4Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRuleV4WithOptions(request, runtime);
  }

  /**
   * Corresponds to the frontend feature location: Quality Inspection Rule Configuration > List. Apsara Stack URL: ip:port/api/rule/GetRulesCountList.json.
   * 
   * @param request - GetRulesCountListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRulesCountListResponse
   */
  async getRulesCountListWithOptions(request: $_model.GetRulesCountListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRulesCountListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessName)) {
      body["BusinessName"] = request.businessName;
    }

    if (!$dara.isNull(request.businessRange)) {
      body["BusinessRange"] = request.businessRange;
    }

    if (!$dara.isNull(request.categoryName)) {
      body["CategoryName"] = request.categoryName;
    }

    if (!$dara.isNull(request.countTotal)) {
      body["CountTotal"] = request.countTotal;
    }

    if (!$dara.isNull(request.createEmpid)) {
      body["CreateEmpid"] = request.createEmpid;
    }

    if (!$dara.isNull(request.createUserId)) {
      body["CreateUserId"] = request.createUserId;
    }

    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lastUpdateEmpid)) {
      body["LastUpdateEmpid"] = request.lastUpdateEmpid;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.requireInfos)) {
      body["RequireInfos"] = request.requireInfos;
    }

    if (!$dara.isNull(request.rid)) {
      body["Rid"] = request.rid;
    }

    if (!$dara.isNull(request.ruleIdOrRuleName)) {
      body["RuleIdOrRuleName"] = request.ruleIdOrRuleName;
    }

    if (!$dara.isNull(request.ruleScoreSingleType)) {
      body["RuleScoreSingleType"] = request.ruleScoreSingleType;
    }

    if (!$dara.isNull(request.ruleType)) {
      body["RuleType"] = request.ruleType;
    }

    if (!$dara.isNull(request.schemeId)) {
      body["SchemeId"] = request.schemeId;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.typeName)) {
      body["TypeName"] = request.typeName;
    }

    if (!$dara.isNull(request.updateEndTime)) {
      body["UpdateEndTime"] = request.updateEndTime;
    }

    if (!$dara.isNull(request.updateStartTime)) {
      body["UpdateStartTime"] = request.updateStartTime;
    }

    if (!$dara.isNull(request.updateUserId)) {
      body["UpdateUserId"] = request.updateUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRulesCountList",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRulesCountListResponse>(await this.callApi(params, req, runtime), new $_model.GetRulesCountListResponse({}));
  }

  /**
   * Corresponds to the frontend feature location: Quality Inspection Rule Configuration > List. Apsara Stack URL: ip:port/api/rule/GetRulesCountList.json.
   * 
   * @param request - GetRulesCountListRequest
   * @returns GetRulesCountListResponse
   */
  async getRulesCountList(request: $_model.GetRulesCountListRequest): Promise<$_model.GetRulesCountListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRulesCountListWithOptions(request, runtime);
  }

  /**
   * Obtain the configuration details of a quality inspection task.
   * 
   * @param request - GetSchemeTaskConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSchemeTaskConfigResponse
   */
  async getSchemeTaskConfigWithOptions(request: $_model.GetSchemeTaskConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSchemeTaskConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSchemeTaskConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSchemeTaskConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetSchemeTaskConfigResponse({}));
  }

  /**
   * Obtain the configuration details of a quality inspection task.
   * 
   * @param request - GetSchemeTaskConfigRequest
   * @returns GetSchemeTaskConfigResponse
   */
  async getSchemeTaskConfig(request: $_model.GetSchemeTaskConfigRequest): Promise<$_model.GetSchemeTaskConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSchemeTaskConfigWithOptions(request, runtime);
  }

  /**
   * Retrieves information about all scoring items.
   * 
   * @deprecated OpenAPI GetScoreInfo is deprecated
   * 
   * @param request - GetScoreInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScoreInfoResponse
   */
  async getScoreInfoWithOptions(request: $_model.GetScoreInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetScoreInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetScoreInfo",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetScoreInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetScoreInfoResponse({}));
  }

  /**
   * Retrieves information about all scoring items.
   * 
   * @deprecated OpenAPI GetScoreInfo is deprecated
   * 
   * @param request - GetScoreInfoRequest
   * @returns GetScoreInfoResponse
   */
  // Deprecated
  async getScoreInfo(request: $_model.GetScoreInfoRequest): Promise<$_model.GetScoreInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getScoreInfoWithOptions(request, runtime);
  }

  /**
   * Retrieves the configuration that is specified by its ID.
   * 
   * @deprecated OpenAPI GetSkillGroupConfig is deprecated
   * 
   * @param request - GetSkillGroupConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSkillGroupConfigResponse
   */
  async getSkillGroupConfigWithOptions(request: $_model.GetSkillGroupConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSkillGroupConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSkillGroupConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSkillGroupConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetSkillGroupConfigResponse({}));
  }

  /**
   * Retrieves the configuration that is specified by its ID.
   * 
   * @deprecated OpenAPI GetSkillGroupConfig is deprecated
   * 
   * @param request - GetSkillGroupConfigRequest
   * @returns GetSkillGroupConfigResponse
   */
  // Deprecated
  async getSkillGroupConfig(request: $_model.GetSkillGroupConfigRequest): Promise<$_model.GetSkillGroupConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSkillGroupConfigWithOptions(request, runtime);
  }

  /**
   * You can obtain the real-time quality inspection result of the hotline.
   * 
   * @deprecated OpenAPI GetSyncResult is deprecated, please use Qualitycheck::2019-01-15::GetResult instead.
   * 
   * @param request - GetSyncResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSyncResultResponse
   */
  async getSyncResultWithOptions(request: $_model.GetSyncResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSyncResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSyncResult",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSyncResultResponse>(await this.callApi(params, req, runtime), new $_model.GetSyncResultResponse({}));
  }

  /**
   * You can obtain the real-time quality inspection result of the hotline.
   * 
   * @deprecated OpenAPI GetSyncResult is deprecated, please use Qualitycheck::2019-01-15::GetResult instead.
   * 
   * @param request - GetSyncResultRequest
   * @returns GetSyncResultResponse
   */
  // Deprecated
  async getSyncResult(request: $_model.GetSyncResultRequest): Promise<$_model.GetSyncResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSyncResultWithOptions(request, runtime);
  }

  /**
   * Queries the details of a label node.
   * 
   * @param request - GetTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTagResponse
   */
  async getTagWithOptions(request: $_model.GetTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTag",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTagResponse>(await this.callApi(params, req, runtime), new $_model.GetTagResponse({}));
  }

  /**
   * Queries the details of a label node.
   * 
   * @param request - GetTagRequest
   * @returns GetTagResponse
   */
  async getTag(request: $_model.GetTagRequest): Promise<$_model.GetTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTagWithOptions(request, runtime);
  }

  /**
   * 预警策略-详情
   * 
   * @param request - GetWarningStrategyConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWarningStrategyConfigResponse
   */
  async getWarningStrategyConfigWithOptions(request: $_model.GetWarningStrategyConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWarningStrategyConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWarningStrategyConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWarningStrategyConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetWarningStrategyConfigResponse({}));
  }

  /**
   * 预警策略-详情
   * 
   * @param request - GetWarningStrategyConfigRequest
   * @returns GetWarningStrategyConfigResponse
   */
  async getWarningStrategyConfig(request: $_model.GetWarningStrategyConfigRequest): Promise<$_model.GetWarningStrategyConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWarningStrategyConfigWithOptions(request, runtime);
  }

  /**
   * Handles a complaint.
   * 
   * @remarks
   * Only quality checkers or administrators can call this operation.
   * 
   * @param request - HandleComplaintRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HandleComplaintResponse
   */
  async handleComplaintWithOptions(request: $_model.HandleComplaintRequest, runtime: $dara.RuntimeOptions): Promise<$_model.HandleComplaintResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "HandleComplaint",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.HandleComplaintResponse>(await this.callApi(params, req, runtime), new $_model.HandleComplaintResponse({}));
  }

  /**
   * Handles a complaint.
   * 
   * @remarks
   * Only quality checkers or administrators can call this operation.
   * 
   * @param request - HandleComplaintRequest
   * @returns HandleComplaintResponse
   */
  async handleComplaint(request: $_model.HandleComplaintRequest): Promise<$_model.HandleComplaintResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.handleComplaintWithOptions(request, runtime);
  }

  /**
   * Delete rules.
   * 
   * @deprecated OpenAPI InvalidRule is deprecated, please use Qualitycheck::2019-01-15::DeleteRuleV4 instead.
   * 
   * @param request - InvalidRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvalidRuleResponse
   */
  async invalidRuleWithOptions(request: $_model.InvalidRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InvalidRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InvalidRule",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InvalidRuleResponse>(await this.callApi(params, req, runtime), new $_model.InvalidRuleResponse({}));
  }

  /**
   * Delete rules.
   * 
   * @deprecated OpenAPI InvalidRule is deprecated, please use Qualitycheck::2019-01-15::DeleteRuleV4 instead.
   * 
   * @param request - InvalidRuleRequest
   * @returns InvalidRuleResponse
   */
  // Deprecated
  async invalidRule(request: $_model.InvalidRuleRequest): Promise<$_model.InvalidRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.invalidRuleWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of vocabulary groups without their specific content.
   * 
   * @param request - ListAsrVocabRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAsrVocabResponse
   */
  async listAsrVocabWithOptions(request: $_model.ListAsrVocabRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAsrVocabResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAsrVocab",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAsrVocabResponse>(await this.callApi(params, req, runtime), new $_model.ListAsrVocabResponse({}));
  }

  /**
   * Retrieves a list of vocabulary groups without their specific content.
   * 
   * @param request - ListAsrVocabRequest
   * @returns ListAsrVocabResponse
   */
  async listAsrVocab(request: $_model.ListAsrVocabRequest): Promise<$_model.ListAsrVocabResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAsrVocabWithOptions(request, runtime);
  }

  /**
   * This feature is located in the Dataset management section of the frontend. The Apsara Stack URL is ip:port/api/dataset/ListDataSet.json.
   * 
   * @deprecated OpenAPI ListDataSet is deprecated
   * 
   * @param request - ListDataSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSetResponse
   */
  async listDataSetWithOptions(request: $_model.ListDataSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataSetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataSet",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataSetResponse>(await this.callApi(params, req, runtime), new $_model.ListDataSetResponse({}));
  }

  /**
   * This feature is located in the Dataset management section of the frontend. The Apsara Stack URL is ip:port/api/dataset/ListDataSet.json.
   * 
   * @deprecated OpenAPI ListDataSet is deprecated
   * 
   * @param request - ListDataSetRequest
   * @returns ListDataSetResponse
   */
  // Deprecated
  async listDataSet(request: $_model.ListDataSetRequest): Promise<$_model.ListDataSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataSetWithOptions(request, runtime);
  }

  /**
   * Retrieve the list of speech recognition precision tasks. Set the service endpoint to Hangzhou (cn-hangzhou).
   * 
   * @param request - ListPrecisionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrecisionTaskResponse
   */
  async listPrecisionTaskWithOptions(request: $_model.ListPrecisionTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPrecisionTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrecisionTask",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPrecisionTaskResponse>(await this.callApi(params, req, runtime), new $_model.ListPrecisionTaskResponse({}));
  }

  /**
   * Retrieve the list of speech recognition precision tasks. Set the service endpoint to Hangzhou (cn-hangzhou).
   * 
   * @param request - ListPrecisionTaskRequest
   * @returns ListPrecisionTaskResponse
   */
  async listPrecisionTask(request: $_model.ListPrecisionTaskRequest): Promise<$_model.ListPrecisionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPrecisionTaskWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of quality check schemes.
   * 
   * @param request - ListQualityCheckSchemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQualityCheckSchemeResponse
   */
  async listQualityCheckSchemeWithOptions(request: $_model.ListQualityCheckSchemeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListQualityCheckSchemeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQualityCheckScheme",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQualityCheckSchemeResponse>(await this.callApi(params, req, runtime), new $_model.ListQualityCheckSchemeResponse({}));
  }

  /**
   * Retrieves a list of quality check schemes.
   * 
   * @param request - ListQualityCheckSchemeRequest
   * @returns ListQualityCheckSchemeResponse
   */
  async listQualityCheckScheme(request: $_model.ListQualityCheckSchemeRequest): Promise<$_model.ListQualityCheckSchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQualityCheckSchemeWithOptions(request, runtime);
  }

  /**
   * Lists rules.
   * 
   * @deprecated OpenAPI ListRules is deprecated, please use Qualitycheck::2019-01-15::ListRulesV4 instead.
   * 
   * @param request - ListRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRulesResponse
   */
  async listRulesWithOptions(request: $_model.ListRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRules",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListRulesResponse({}));
  }

  /**
   * Lists rules.
   * 
   * @deprecated OpenAPI ListRules is deprecated, please use Qualitycheck::2019-01-15::ListRulesV4 instead.
   * 
   * @param request - ListRulesRequest
   * @returns ListRulesResponse
   */
  // Deprecated
  async listRules(request: $_model.ListRulesRequest): Promise<$_model.ListRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRulesWithOptions(request, runtime);
  }

  /**
   * Frontend location: Quality inspection rule configuration — List. Apsara Stack URL: ip:port/api/rule/GetRulesCountList.json.
   * 
   * @param request - ListRulesV4Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRulesV4Response
   */
  async listRulesV4WithOptions(request: $_model.ListRulesV4Request, runtime: $dara.RuntimeOptions): Promise<$_model.ListRulesV4Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessName)) {
      body["BusinessName"] = request.businessName;
    }

    if (!$dara.isNull(request.businessRange)) {
      body["BusinessRange"] = request.businessRange;
    }

    if (!$dara.isNull(request.categoryName)) {
      body["CategoryName"] = request.categoryName;
    }

    if (!$dara.isNull(request.countTotal)) {
      body["CountTotal"] = request.countTotal;
    }

    if (!$dara.isNull(request.createEmpid)) {
      body["CreateEmpid"] = request.createEmpid;
    }

    if (!$dara.isNull(request.createUserId)) {
      body["CreateUserId"] = request.createUserId;
    }

    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lastUpdateEmpid)) {
      body["LastUpdateEmpid"] = request.lastUpdateEmpid;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.requireInfos)) {
      body["RequireInfos"] = request.requireInfos;
    }

    if (!$dara.isNull(request.rid)) {
      body["Rid"] = request.rid;
    }

    if (!$dara.isNull(request.ruleIdOrRuleName)) {
      body["RuleIdOrRuleName"] = request.ruleIdOrRuleName;
    }

    if (!$dara.isNull(request.ruleScoreSingleType)) {
      body["RuleScoreSingleType"] = request.ruleScoreSingleType;
    }

    if (!$dara.isNull(request.ruleType)) {
      body["RuleType"] = request.ruleType;
    }

    if (!$dara.isNull(request.schemeId)) {
      body["SchemeId"] = request.schemeId;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.typeName)) {
      body["TypeName"] = request.typeName;
    }

    if (!$dara.isNull(request.updateEndTime)) {
      body["UpdateEndTime"] = request.updateEndTime;
    }

    if (!$dara.isNull(request.updateStartTime)) {
      body["UpdateStartTime"] = request.updateStartTime;
    }

    if (!$dara.isNull(request.updateUserId)) {
      body["UpdateUserId"] = request.updateUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRulesV4",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRulesV4Response>(await this.callApi(params, req, runtime), new $_model.ListRulesV4Response({}));
  }

  /**
   * Frontend location: Quality inspection rule configuration — List. Apsara Stack URL: ip:port/api/rule/GetRulesCountList.json.
   * 
   * @param request - ListRulesV4Request
   * @returns ListRulesV4Response
   */
  async listRulesV4(request: $_model.ListRulesV4Request): Promise<$_model.ListRulesV4Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRulesV4WithOptions(request, runtime);
  }

  /**
   * This operation is used for the Task Management feature on the frontend. The Apsara Stack URL is ip:port/api/task/ListSchemeTaskInfo.json.
   * 
   * @param request - ListSchemeTaskConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSchemeTaskConfigResponse
   */
  async listSchemeTaskConfigWithOptions(request: $_model.ListSchemeTaskConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSchemeTaskConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSchemeTaskConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSchemeTaskConfigResponse>(await this.callApi(params, req, runtime), new $_model.ListSchemeTaskConfigResponse({}));
  }

  /**
   * This operation is used for the Task Management feature on the frontend. The Apsara Stack URL is ip:port/api/task/ListSchemeTaskInfo.json.
   * 
   * @param request - ListSchemeTaskConfigRequest
   * @returns ListSchemeTaskConfigResponse
   */
  async listSchemeTaskConfig(request: $_model.ListSchemeTaskConfigRequest): Promise<$_model.ListSchemeTaskConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSchemeTaskConfigWithOptions(request, runtime);
  }

  /**
   * This API corresponds to the frontend location: Task Management > View Results > Task Result > Session Group Results tab. The Apsara Stack URL is: ip:port/api/session/group/ListSessionGroup.json. It aggregates multi-turn sessions by their session group ID for unified management. You must pass the `sessionGroupId` field. For more information, see the UploadData and UploadAudioData API documentation.
   * 
   * @deprecated OpenAPI ListSessionGroup is deprecated
   * 
   * @param request - ListSessionGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSessionGroupResponse
   */
  async listSessionGroupWithOptions(request: $_model.ListSessionGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSessionGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSessionGroup",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSessionGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListSessionGroupResponse({}));
  }

  /**
   * This API corresponds to the frontend location: Task Management > View Results > Task Result > Session Group Results tab. The Apsara Stack URL is: ip:port/api/session/group/ListSessionGroup.json. It aggregates multi-turn sessions by their session group ID for unified management. You must pass the `sessionGroupId` field. For more information, see the UploadData and UploadAudioData API documentation.
   * 
   * @deprecated OpenAPI ListSessionGroup is deprecated
   * 
   * @param request - ListSessionGroupRequest
   * @returns ListSessionGroupResponse
   */
  // Deprecated
  async listSessionGroup(request: $_model.ListSessionGroupRequest): Promise<$_model.ListSessionGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSessionGroupWithOptions(request, runtime);
  }

  /**
   * You can call ListSkillGroupConfig to obtain the configuration list.
   * 
   * @deprecated OpenAPI ListSkillGroupConfig is deprecated
   * 
   * @param request - ListSkillGroupConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSkillGroupConfigResponse
   */
  async listSkillGroupConfigWithOptions(request: $_model.ListSkillGroupConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSkillGroupConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSkillGroupConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSkillGroupConfigResponse>(await this.callApi(params, req, runtime), new $_model.ListSkillGroupConfigResponse({}));
  }

  /**
   * You can call ListSkillGroupConfig to obtain the configuration list.
   * 
   * @deprecated OpenAPI ListSkillGroupConfig is deprecated
   * 
   * @param request - ListSkillGroupConfigRequest
   * @returns ListSkillGroupConfigResponse
   */
  // Deprecated
  async listSkillGroupConfig(request: $_model.ListSkillGroupConfigRequest): Promise<$_model.ListSkillGroupConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSkillGroupConfigWithOptions(request, runtime);
  }

  /**
   * Queries the list of label nodes.
   * 
   * @param request - ListTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResponse
   */
  async listTagWithOptions(request: $_model.ListTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTag",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagResponse>(await this.callApi(params, req, runtime), new $_model.ListTagResponse({}));
  }

  /**
   * Queries the list of label nodes.
   * 
   * @param request - ListTagRequest
   * @returns ListTagResponse
   */
  async listTag(request: $_model.ListTagRequest): Promise<$_model.ListTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagWithOptions(request, runtime);
  }

  /**
   * Lists automatic allocation rules for review tasks.
   * 
   * @param request - ListTaskAssignRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTaskAssignRulesResponse
   */
  async listTaskAssignRulesWithOptions(request: $_model.ListTaskAssignRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTaskAssignRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTaskAssignRules",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTaskAssignRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListTaskAssignRulesResponse({}));
  }

  /**
   * Lists automatic allocation rules for review tasks.
   * 
   * @param request - ListTaskAssignRulesRequest
   * @returns ListTaskAssignRulesResponse
   */
  async listTaskAssignRules(request: $_model.ListTaskAssignRulesRequest): Promise<$_model.ListTaskAssignRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTaskAssignRulesWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of users. Set the service endpoint to China (Hangzhou) (cn-hangzhou).
   * 
   * @param request - ListUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersResponse
   */
  async listUsersWithOptions(request: $_model.ListUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsers",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUsersResponse>(await this.callApi(params, req, runtime), new $_model.ListUsersResponse({}));
  }

  /**
   * Retrieves a list of users. Set the service endpoint to China (Hangzhou) (cn-hangzhou).
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: $_model.ListUsersRequest): Promise<$_model.ListUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  /**
   * Lists warning configurations.
   * 
   * @param request - ListWarningConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWarningConfigResponse
   */
  async listWarningConfigWithOptions(request: $_model.ListWarningConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWarningConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWarningConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWarningConfigResponse>(await this.callApi(params, req, runtime), new $_model.ListWarningConfigResponse({}));
  }

  /**
   * Lists warning configurations.
   * 
   * @param request - ListWarningConfigRequest
   * @returns ListWarningConfigResponse
   */
  async listWarningConfig(request: $_model.ListWarningConfigRequest): Promise<$_model.ListWarningConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWarningConfigWithOptions(request, runtime);
  }

  /**
   * 预警策略-列表
   * 
   * @param request - ListWarningStrategyConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWarningStrategyConfigResponse
   */
  async listWarningStrategyConfigWithOptions(request: $_model.ListWarningStrategyConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWarningStrategyConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWarningStrategyConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWarningStrategyConfigResponse>(await this.callApi(params, req, runtime), new $_model.ListWarningStrategyConfigResponse({}));
  }

  /**
   * 预警策略-列表
   * 
   * @param request - ListWarningStrategyConfigRequest
   * @returns ListWarningStrategyConfigResponse
   */
  async listWarningStrategyConfig(request: $_model.ListWarningStrategyConfigRequest): Promise<$_model.ListWarningStrategyConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWarningStrategyConfigWithOptions(request, runtime);
  }

  /**
   * Frontend location: Task Management > Task Results > Batch Revoke. Apsara Stack URL: ip:port/api/job/RevertAssignedSession.json.
   * 
   * @param request - RevertAssignedSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevertAssignedSessionResponse
   */
  async revertAssignedSessionWithOptions(request: $_model.RevertAssignedSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevertAssignedSessionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevertAssignedSession",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevertAssignedSessionResponse>(await this.callApi(params, req, runtime), new $_model.RevertAssignedSessionResponse({}));
  }

  /**
   * Frontend location: Task Management > Task Results > Batch Revoke. Apsara Stack URL: ip:port/api/job/RevertAssignedSession.json.
   * 
   * @param request - RevertAssignedSessionRequest
   * @returns RevertAssignedSessionResponse
   */
  async revertAssignedSession(request: $_model.RevertAssignedSessionRequest): Promise<$_model.RevertAssignedSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revertAssignedSessionWithOptions(request, runtime);
  }

  /**
   * You can use this feature in the frontend console under Plan Management > Task Result > Session Group > Batch Revoke. The Apsara Stack URL for this operation is `ip:port/api/job/RevertAssignedSessionGroup.json`.
   * 
   * @deprecated OpenAPI RevertAssignedSessionGroup is deprecated
   * 
   * @param request - RevertAssignedSessionGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevertAssignedSessionGroupResponse
   */
  async revertAssignedSessionGroupWithOptions(request: $_model.RevertAssignedSessionGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevertAssignedSessionGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevertAssignedSessionGroup",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevertAssignedSessionGroupResponse>(await this.callApi(params, req, runtime), new $_model.RevertAssignedSessionGroupResponse({}));
  }

  /**
   * You can use this feature in the frontend console under Plan Management > Task Result > Session Group > Batch Revoke. The Apsara Stack URL for this operation is `ip:port/api/job/RevertAssignedSessionGroup.json`.
   * 
   * @deprecated OpenAPI RevertAssignedSessionGroup is deprecated
   * 
   * @param request - RevertAssignedSessionGroupRequest
   * @returns RevertAssignedSessionGroupResponse
   */
  // Deprecated
  async revertAssignedSessionGroup(request: $_model.RevertAssignedSessionGroupRequest): Promise<$_model.RevertAssignedSessionGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revertAssignedSessionGroupWithOptions(request, runtime);
  }

  /**
   * This operation calls a large model using the message protocol to generate a response. You can make calls using standard HTTP for a complete response or use Server-Sent Events (SSE) for a streaming response.
   * 
   * @param tmpReq - RunCompletionMessageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunCompletionMessageResponse
   */
  async *runCompletionMessageWithSSE(tmpReq: $_model.RunCompletionMessageRequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.RunCompletionMessageResponse, any, unknown> {
    tmpReq.validate();
    let request = new $_model.RunCompletionMessageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.messages)) {
      request.messagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.messages, "Messages", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.messagesShrink)) {
      body["Messages"] = request.messagesShrink;
    }

    if (!$dara.isNull(request.modelCode)) {
      body["ModelCode"] = request.modelCode;
    }

    if (!$dara.isNull(request.stream)) {
      body["Stream"] = request.stream;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunCompletionMessage",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.RunCompletionMessageResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.RunCompletionMessageResponse({}));
      }

    }
  }

  /**
   * This operation calls a large model using the message protocol to generate a response. You can make calls using standard HTTP for a complete response or use Server-Sent Events (SSE) for a streaming response.
   * 
   * @param tmpReq - RunCompletionMessageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunCompletionMessageResponse
   */
  async runCompletionMessageWithOptions(tmpReq: $_model.RunCompletionMessageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunCompletionMessageResponse> {
    tmpReq.validate();
    let request = new $_model.RunCompletionMessageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.messages)) {
      request.messagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.messages, "Messages", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.messagesShrink)) {
      body["Messages"] = request.messagesShrink;
    }

    if (!$dara.isNull(request.modelCode)) {
      body["ModelCode"] = request.modelCode;
    }

    if (!$dara.isNull(request.stream)) {
      body["Stream"] = request.stream;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunCompletionMessage",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunCompletionMessageResponse>(await this.callApi(params, req, runtime), new $_model.RunCompletionMessageResponse({}));
  }

  /**
   * This operation calls a large model using the message protocol to generate a response. You can make calls using standard HTTP for a complete response or use Server-Sent Events (SSE) for a streaming response.
   * 
   * @param request - RunCompletionMessageRequest
   * @returns RunCompletionMessageResponse
   */
  async runCompletionMessage(request: $_model.RunCompletionMessageRequest): Promise<$_model.RunCompletionMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runCompletionMessageWithOptions(request, runtime);
  }

  /**
   * Saves the speaker role configuration for a dataset.
   * 
   * @deprecated OpenAPI SaveConfigDataSet is deprecated
   * 
   * @param request - SaveConfigDataSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveConfigDataSetResponse
   */
  async saveConfigDataSetWithOptions(request: $_model.SaveConfigDataSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveConfigDataSetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveConfigDataSet",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveConfigDataSetResponse>(await this.callApi(params, req, runtime), new $_model.SaveConfigDataSetResponse({}));
  }

  /**
   * Saves the speaker role configuration for a dataset.
   * 
   * @deprecated OpenAPI SaveConfigDataSet is deprecated
   * 
   * @param request - SaveConfigDataSetRequest
   * @returns SaveConfigDataSetResponse
   */
  // Deprecated
  async saveConfigDataSet(request: $_model.SaveConfigDataSetRequest): Promise<$_model.SaveConfigDataSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveConfigDataSetWithOptions(request, runtime);
  }

  /**
   * Submits a complaint.
   * 
   * @param request - SubmitComplaintRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitComplaintResponse
   */
  async submitComplaintWithOptions(request: $_model.SubmitComplaintRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitComplaintResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitComplaint",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitComplaintResponse>(await this.callApi(params, req, runtime), new $_model.SubmitComplaintResponse({}));
  }

  /**
   * Submits a complaint.
   * 
   * @param request - SubmitComplaintRequest
   * @returns SubmitComplaintResponse
   */
  async submitComplaint(request: $_model.SubmitComplaintRequest): Promise<$_model.SubmitComplaintResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitComplaintWithOptions(request, runtime);
  }

  /**
   * Creates a speech recognition evaluation task. The service endpoint is China East 1 (Hangzhou) (cn-hangzhou).
   * 
   * @param request - SubmitPrecisionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitPrecisionTaskResponse
   */
  async submitPrecisionTaskWithOptions(request: $_model.SubmitPrecisionTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitPrecisionTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitPrecisionTask",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitPrecisionTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitPrecisionTaskResponse({}));
  }

  /**
   * Creates a speech recognition evaluation task. The service endpoint is China East 1 (Hangzhou) (cn-hangzhou).
   * 
   * @param request - SubmitPrecisionTaskRequest
   * @returns SubmitPrecisionTaskResponse
   */
  async submitPrecisionTask(request: $_model.SubmitPrecisionTaskRequest): Promise<$_model.SubmitPrecisionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitPrecisionTaskWithOptions(request, runtime);
  }

  /**
   * Create a new dataset quality check task.
   * 
   * @param request - SubmitQualityCheckTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitQualityCheckTaskResponse
   */
  async submitQualityCheckTaskWithOptions(request: $_model.SubmitQualityCheckTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitQualityCheckTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitQualityCheckTask",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitQualityCheckTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitQualityCheckTaskResponse({}));
  }

  /**
   * Create a new dataset quality check task.
   * 
   * @param request - SubmitQualityCheckTaskRequest
   * @returns SubmitQualityCheckTaskResponse
   */
  async submitQualityCheckTask(request: $_model.SubmitQualityCheckTaskRequest): Promise<$_model.SubmitQualityCheckTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitQualityCheckTaskWithOptions(request, runtime);
  }

  /**
   * Save review results. This is only supported by the legacy Smart Conversation Analysis.
   * 
   * @remarks
   * You can manually review files after quality inspection. After completing the review, call this API to save the review results. This involves manually reviewing rules identified by the system as hits to determine if they are true hits or false positives. Refer to the file review feature on the console page. For more information, see [File Review](https://help.aliyun.com/document_detail/139653.html#h2-u6587u4EF6u590Du68385).
   * 
   * @param request - SubmitReviewInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitReviewInfoResponse
   */
  async submitReviewInfoWithOptions(request: $_model.SubmitReviewInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitReviewInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitReviewInfo",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitReviewInfoResponse>(await this.callApi(params, req, runtime), new $_model.SubmitReviewInfoResponse({}));
  }

  /**
   * Save review results. This is only supported by the legacy Smart Conversation Analysis.
   * 
   * @remarks
   * You can manually review files after quality inspection. After completing the review, call this API to save the review results. This involves manually reviewing rules identified by the system as hits to determine if they are true hits or false positives. Refer to the file review feature on the console page. For more information, see [File Review](https://help.aliyun.com/document_detail/139653.html#h2-u6587u4EF6u590Du68385).
   * 
   * @param request - SubmitReviewInfoRequest
   * @returns SubmitReviewInfoResponse
   */
  async submitReviewInfo(request: $_model.SubmitReviewInfoRequest): Promise<$_model.SubmitReviewInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitReviewInfoWithOptions(request, runtime);
  }

  /**
   * Review quality inspection results
   * 
   * @param request - SubmitReviewInfoV4Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitReviewInfoV4Response
   */
  async submitReviewInfoV4WithOptions(request: $_model.SubmitReviewInfoV4Request, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitReviewInfoV4Response> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      body["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      body["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitReviewInfoV4",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitReviewInfoV4Response>(await this.callApi(params, req, runtime), new $_model.SubmitReviewInfoV4Response({}));
  }

  /**
   * Review quality inspection results
   * 
   * @param request - SubmitReviewInfoV4Request
   * @returns SubmitReviewInfoV4Response
   */
  async submitReviewInfoV4(request: $_model.SubmitReviewInfoV4Request): Promise<$_model.SubmitReviewInfoV4Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitReviewInfoV4WithOptions(request, runtime);
  }

  /**
   * Perform real-time quality inspection for hotlines.
   * 
   * @remarks
   * Real-time hotline quality inspection transcribes spoken dialogue into text during a call. It sends the text to the Smart Conversation Analysis system for real-time quality inspection to detect potential issues or risks. You can display the dialogue text and inspection results in real time on the customer service representative\\"s workbench (a third-party system). This differs from offline quality inspection, which uses UploadAudioData for inspection or dataset inspection. For details, see the developer guide. Offline quality inspection occurs after the call ends and the recording file is generated.
   * **Usage Flow**
   * You can implement real-time transcription of audio streams to text during calls, or use Alibaba Cloud Call Center (CC) directly. CC integrates deeply with Smart Conversation Analysis, enabling real-time quality inspection during calls without API integration.
   * If you implement audio-to-text conversion yourself, invoke the SyncQualityCheck API for real-time quality inspection after a speaker finishes a sentence and generates dialogue text. This returns the inspection result for that sentence synchronously.
   * You should include skill group information when uploading data. Then, you can use the Call Center Quality Inspection - Configuration Management feature to configure different quality inspection rules for calls from different skill groups.
   * After the call ends, you can store the recording file on a storage server accessible over the public network. You can invoke the recording information maintenance API: UpdateSyncQualityCheckData. You can submit the recording name, recording file URL, and other details to the Smart Conversation Analysis service. This lets quality inspectors play back the recording during review.
   * After the call ends, you can view the quality inspection results in Call Center Quality Inspection - Result Display - Real-time Quality Inspection Results. You can also invoke the real-time quality inspection result query API: GetSyncResult to retrieve the results. You can use Score Dashboard - Real-time Dashboard to view data charts for customer service representatives, skill groups, and scoring items.
   * **Full-Text Quality Inspection**
   * Quality inspection rules include dozens of operators. Some operators require dialogue context (multi-turn conversations between customer service representatives and customers) for analysis. However, real-time quality inspection occurs during a call and typically uses text from only one sentence spoken by a single speaker. Some operators are not suitable for real-time quality inspection. Therefore, quality inspection rules are divided into real-time quality inspection rules and full-text quality inspection rules:
   * **Real-time quality inspection rules**: Rules used for real-time quality inspection. They support a limited number of operator types. They do not support specifying the detection range for operators.
   * **Full-text quality inspection rules**: Rules used for offline quality inspection. They support all operator types. They support custom detection ranges for operators.
   * For calls that underwent real-time quality inspection, you can apply full-text quality inspection rules to the complete dialogue text after the call ends. To enable full-text quality inspection after real-time inspection, see the full-text quality inspection description in Call Center Quality Inspection - Configuration Management.
   * 
   * @param request - SyncQualityCheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncQualityCheckResponse
   */
  async syncQualityCheckWithOptions(request: $_model.SyncQualityCheckRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SyncQualityCheckResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncQualityCheck",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncQualityCheckResponse>(await this.callApi(params, req, runtime), new $_model.SyncQualityCheckResponse({}));
  }

  /**
   * Perform real-time quality inspection for hotlines.
   * 
   * @remarks
   * Real-time hotline quality inspection transcribes spoken dialogue into text during a call. It sends the text to the Smart Conversation Analysis system for real-time quality inspection to detect potential issues or risks. You can display the dialogue text and inspection results in real time on the customer service representative\\"s workbench (a third-party system). This differs from offline quality inspection, which uses UploadAudioData for inspection or dataset inspection. For details, see the developer guide. Offline quality inspection occurs after the call ends and the recording file is generated.
   * **Usage Flow**
   * You can implement real-time transcription of audio streams to text during calls, or use Alibaba Cloud Call Center (CC) directly. CC integrates deeply with Smart Conversation Analysis, enabling real-time quality inspection during calls without API integration.
   * If you implement audio-to-text conversion yourself, invoke the SyncQualityCheck API for real-time quality inspection after a speaker finishes a sentence and generates dialogue text. This returns the inspection result for that sentence synchronously.
   * You should include skill group information when uploading data. Then, you can use the Call Center Quality Inspection - Configuration Management feature to configure different quality inspection rules for calls from different skill groups.
   * After the call ends, you can store the recording file on a storage server accessible over the public network. You can invoke the recording information maintenance API: UpdateSyncQualityCheckData. You can submit the recording name, recording file URL, and other details to the Smart Conversation Analysis service. This lets quality inspectors play back the recording during review.
   * After the call ends, you can view the quality inspection results in Call Center Quality Inspection - Result Display - Real-time Quality Inspection Results. You can also invoke the real-time quality inspection result query API: GetSyncResult to retrieve the results. You can use Score Dashboard - Real-time Dashboard to view data charts for customer service representatives, skill groups, and scoring items.
   * **Full-Text Quality Inspection**
   * Quality inspection rules include dozens of operators. Some operators require dialogue context (multi-turn conversations between customer service representatives and customers) for analysis. However, real-time quality inspection occurs during a call and typically uses text from only one sentence spoken by a single speaker. Some operators are not suitable for real-time quality inspection. Therefore, quality inspection rules are divided into real-time quality inspection rules and full-text quality inspection rules:
   * **Real-time quality inspection rules**: Rules used for real-time quality inspection. They support a limited number of operator types. They do not support specifying the detection range for operators.
   * **Full-text quality inspection rules**: Rules used for offline quality inspection. They support all operator types. They support custom detection ranges for operators.
   * For calls that underwent real-time quality inspection, you can apply full-text quality inspection rules to the complete dialogue text after the call ends. To enable full-text quality inspection after real-time inspection, see the full-text quality inspection description in Call Center Quality Inspection - Configuration Management.
   * 
   * @param request - SyncQualityCheckRequest
   * @returns SyncQualityCheckResponse
   */
  async syncQualityCheck(request: $_model.SyncQualityCheckRequest): Promise<$_model.SyncQualityCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncQualityCheckWithOptions(request, runtime);
  }

  /**
   * Frontend location: Quality Check Rule Configuration > Test. Apsara Stack URL: http://<ip>:<port>/api/client/TestRule.json.
   * 
   * @param request - TestRuleV4Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TestRuleV4Response
   */
  async testRuleV4WithOptions(request: $_model.TestRuleV4Request, runtime: $dara.RuntimeOptions): Promise<$_model.TestRuleV4Response> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isSchemeData)) {
      body["IsSchemeData"] = request.isSchemeData;
    }

    if (!$dara.isNull(request.testJson)) {
      body["TestJson"] = request.testJson;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TestRuleV4",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TestRuleV4Response>(await this.callApi(params, req, runtime), new $_model.TestRuleV4Response({}));
  }

  /**
   * Frontend location: Quality Check Rule Configuration > Test. Apsara Stack URL: http://<ip>:<port>/api/client/TestRule.json.
   * 
   * @param request - TestRuleV4Request
   * @returns TestRuleV4Response
   */
  async testRuleV4(request: $_model.TestRuleV4Request): Promise<$_model.TestRuleV4Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.testRuleV4WithOptions(request, runtime);
  }

  /**
   * Modifies an agent.
   * 
   * @param request - UpdateAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAgentResponse
   */
  async updateAgentWithOptions(request: $_model.UpdateAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAgentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      body["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      body["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAgent",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAgentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAgentResponse({}));
  }

  /**
   * Modifies an agent.
   * 
   * @param request - UpdateAgentRequest
   * @returns UpdateAgentResponse
   */
  async updateAgent(request: $_model.UpdateAgentRequest): Promise<$_model.UpdateAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAgentWithOptions(request, runtime);
  }

  /**
   * Updates the hotword vocabulary.
   * 
   * @param request - UpdateAsrVocabRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAsrVocabResponse
   */
  async updateAsrVocabWithOptions(request: $_model.UpdateAsrVocabRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAsrVocabResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAsrVocab",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAsrVocabResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAsrVocabResponse({}));
  }

  /**
   * Updates the hotword vocabulary.
   * 
   * @param request - UpdateAsrVocabRequest
   * @returns UpdateAsrVocabResponse
   */
  async updateAsrVocab(request: $_model.UpdateAsrVocabRequest): Promise<$_model.UpdateAsrVocabResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAsrVocabWithOptions(request, runtime);
  }

  /**
   * You can access this operation from the frontend by navigating to Plan Management > Create Quality Inspection Task or Edit > Edit icon next to the quality inspection dimension name. The Apsara Stack endpoint is ip:port/api/qcs/UpdateCheckTypeToScheme.json.
   * 
   * @param request - UpdateCheckTypeToSchemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCheckTypeToSchemeResponse
   */
  async updateCheckTypeToSchemeWithOptions(request: $_model.UpdateCheckTypeToSchemeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCheckTypeToSchemeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCheckTypeToScheme",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCheckTypeToSchemeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCheckTypeToSchemeResponse({}));
  }

  /**
   * You can access this operation from the frontend by navigating to Plan Management > Create Quality Inspection Task or Edit > Edit icon next to the quality inspection dimension name. The Apsara Stack endpoint is ip:port/api/qcs/UpdateCheckTypeToScheme.json.
   * 
   * @param request - UpdateCheckTypeToSchemeRequest
   * @returns UpdateCheckTypeToSchemeResponse
   */
  async updateCheckTypeToScheme(request: $_model.UpdateCheckTypeToSchemeRequest): Promise<$_model.UpdateCheckTypeToSchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCheckTypeToSchemeWithOptions(request, runtime);
  }

  /**
   * Update session recording data (third-party business fields) to facilitate statistics and queries across more business dimensions.
   * 
   * @param request - UpdateQualityCheckDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateQualityCheckDataResponse
   */
  async updateQualityCheckDataWithOptions(request: $_model.UpdateQualityCheckDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateQualityCheckDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateQualityCheckData",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateQualityCheckDataResponse>(await this.callApi(params, req, runtime), new $_model.UpdateQualityCheckDataResponse({}));
  }

  /**
   * Update session recording data (third-party business fields) to facilitate statistics and queries across more business dimensions.
   * 
   * @param request - UpdateQualityCheckDataRequest
   * @returns UpdateQualityCheckDataResponse
   */
  async updateQualityCheckData(request: $_model.UpdateQualityCheckDataRequest): Promise<$_model.UpdateQualityCheckDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateQualityCheckDataWithOptions(request, runtime);
  }

  /**
   * Updates a quality check scheme.
   * 
   * @param request - UpdateQualityCheckSchemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateQualityCheckSchemeResponse
   */
  async updateQualityCheckSchemeWithOptions(request: $_model.UpdateQualityCheckSchemeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateQualityCheckSchemeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateQualityCheckScheme",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateQualityCheckSchemeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateQualityCheckSchemeResponse({}));
  }

  /**
   * Updates a quality check scheme.
   * 
   * @param request - UpdateQualityCheckSchemeRequest
   * @returns UpdateQualityCheckSchemeResponse
   */
  async updateQualityCheckScheme(request: $_model.UpdateQualityCheckSchemeRequest): Promise<$_model.UpdateQualityCheckSchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateQualityCheckSchemeWithOptions(request, runtime);
  }

  /**
   * Update rule information.
   * 
   * @remarks
   * > Update an existing rule. You can modify its conditions and operators as needed. The rule ID (rid) remains unchanged, but condition IDs and operator IDs may change.
   * 
   * @deprecated OpenAPI UpdateRule is deprecated, please use Qualitycheck::2019-01-15::UpdateRuleV4 instead.
   * 
   * @param request - UpdateRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRuleResponse
   */
  async updateRuleWithOptions(request: $_model.UpdateRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRule",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRuleResponse({}));
  }

  /**
   * Update rule information.
   * 
   * @remarks
   * > Update an existing rule. You can modify its conditions and operators as needed. The rule ID (rid) remains unchanged, but condition IDs and operator IDs may change.
   * 
   * @deprecated OpenAPI UpdateRule is deprecated, please use Qualitycheck::2019-01-15::UpdateRuleV4 instead.
   * 
   * @param request - UpdateRuleRequest
   * @returns UpdateRuleResponse
   */
  // Deprecated
  async updateRule(request: $_model.UpdateRuleRequest): Promise<$_model.UpdateRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRuleWithOptions(request, runtime);
  }

  /**
   * This API maps to the frontend function location: Quality Inspection Rule Configuration - Create & Update. The Apsara Stack URL is: ip:port/api/client/UpdateRuleById.json.
   * 
   * @deprecated OpenAPI UpdateRuleById is deprecated, please use Qualitycheck::2019-01-15::UpdateRuleV4 instead.
   * 
   * @param request - UpdateRuleByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRuleByIdResponse
   */
  async updateRuleByIdWithOptions(request: $_model.UpdateRuleByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRuleByIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isCopy)) {
      body["IsCopy"] = request.isCopy;
    }

    if (!$dara.isNull(request.jsonStrForRule)) {
      body["JsonStrForRule"] = request.jsonStrForRule;
    }

    if (!$dara.isNull(request.returnRelatedSchemes)) {
      body["ReturnRelatedSchemes"] = request.returnRelatedSchemes;
    }

    if (!$dara.isNull(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRuleById",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRuleByIdResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRuleByIdResponse({}));
  }

  /**
   * This API maps to the frontend function location: Quality Inspection Rule Configuration - Create & Update. The Apsara Stack URL is: ip:port/api/client/UpdateRuleById.json.
   * 
   * @deprecated OpenAPI UpdateRuleById is deprecated, please use Qualitycheck::2019-01-15::UpdateRuleV4 instead.
   * 
   * @param request - UpdateRuleByIdRequest
   * @returns UpdateRuleByIdResponse
   */
  // Deprecated
  async updateRuleById(request: $_model.UpdateRuleByIdRequest): Promise<$_model.UpdateRuleByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRuleByIdWithOptions(request, runtime);
  }

  /**
   * Frontend location: Quality Check Plan Management > Create or edit a quality check task > Associate quality check rules. Apsara Stack URL: ip:port/api/qcs/UpdateRuleToScheme.json.
   * 
   * @param request - UpdateRuleToSchemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRuleToSchemeResponse
   */
  async updateRuleToSchemeWithOptions(request: $_model.UpdateRuleToSchemeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRuleToSchemeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRuleToScheme",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRuleToSchemeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRuleToSchemeResponse({}));
  }

  /**
   * Frontend location: Quality Check Plan Management > Create or edit a quality check task > Associate quality check rules. Apsara Stack URL: ip:port/api/qcs/UpdateRuleToScheme.json.
   * 
   * @param request - UpdateRuleToSchemeRequest
   * @returns UpdateRuleToSchemeResponse
   */
  async updateRuleToScheme(request: $_model.UpdateRuleToSchemeRequest): Promise<$_model.UpdateRuleToSchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRuleToSchemeWithOptions(request, runtime);
  }

  /**
   * Corresponding frontend feature location: Rule Configuration - Update. Apsara Stack URL: ip:port/api/client/UpdateRuleById.json.
   * 
   * @param request - UpdateRuleV4Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRuleV4Response
   */
  async updateRuleV4WithOptions(request: $_model.UpdateRuleV4Request, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRuleV4Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jsonStrForRule)) {
      body["JsonStrForRule"] = request.jsonStrForRule;
    }

    if (!$dara.isNull(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRuleV4",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRuleV4Response>(await this.callApi(params, req, runtime), new $_model.UpdateRuleV4Response({}));
  }

  /**
   * Corresponding frontend feature location: Rule Configuration - Update. Apsara Stack URL: ip:port/api/client/UpdateRuleById.json.
   * 
   * @param request - UpdateRuleV4Request
   * @returns UpdateRuleV4Response
   */
  async updateRuleV4(request: $_model.UpdateRuleV4Request): Promise<$_model.UpdateRuleV4Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRuleV4WithOptions(request, runtime);
  }

  /**
   * Frontend path: Task Management > Edit any data on the right. Apsara Stack URL: ip:port/api/task/UpdateSchemeTaskConfig.json.
   * 
   * @remarks
   * Updates quality inspection task information.
   * 
   * @param request - UpdateSchemeTaskConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSchemeTaskConfigResponse
   */
  async updateSchemeTaskConfigWithOptions(request: $_model.UpdateSchemeTaskConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSchemeTaskConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["jsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSchemeTaskConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSchemeTaskConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSchemeTaskConfigResponse({}));
  }

  /**
   * Frontend path: Task Management > Edit any data on the right. Apsara Stack URL: ip:port/api/task/UpdateSchemeTaskConfig.json.
   * 
   * @remarks
   * Updates quality inspection task information.
   * 
   * @param request - UpdateSchemeTaskConfigRequest
   * @returns UpdateSchemeTaskConfigResponse
   */
  async updateSchemeTaskConfig(request: $_model.UpdateSchemeTaskConfigRequest): Promise<$_model.UpdateSchemeTaskConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSchemeTaskConfigWithOptions(request, runtime);
  }

  /**
   * You can call UpdateSkillGroupConfig to update a configuration.
   * 
   * @deprecated OpenAPI UpdateSkillGroupConfig is deprecated
   * 
   * @param request - UpdateSkillGroupConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSkillGroupConfigResponse
   */
  async updateSkillGroupConfigWithOptions(request: $_model.UpdateSkillGroupConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSkillGroupConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSkillGroupConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSkillGroupConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSkillGroupConfigResponse({}));
  }

  /**
   * You can call UpdateSkillGroupConfig to update a configuration.
   * 
   * @deprecated OpenAPI UpdateSkillGroupConfig is deprecated
   * 
   * @param request - UpdateSkillGroupConfigRequest
   * @returns UpdateSkillGroupConfigResponse
   */
  // Deprecated
  async updateSkillGroupConfig(request: $_model.UpdateSkillGroupConfigRequest): Promise<$_model.UpdateSkillGroupConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSkillGroupConfigWithOptions(request, runtime);
  }

  /**
   * Maintain the recording information after real-time quality inspection is completed, which is used to play back the recording during review. After the recording information is maintained, the task status will change to Succeeded.
   * 
   * @param request - UpdateSyncQualityCheckDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSyncQualityCheckDataResponse
   */
  async updateSyncQualityCheckDataWithOptions(request: $_model.UpdateSyncQualityCheckDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSyncQualityCheckDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSyncQualityCheckData",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSyncQualityCheckDataResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSyncQualityCheckDataResponse({}));
  }

  /**
   * Maintain the recording information after real-time quality inspection is completed, which is used to play back the recording during review. After the recording information is maintained, the task status will change to Succeeded.
   * 
   * @param request - UpdateSyncQualityCheckDataRequest
   * @returns UpdateSyncQualityCheckDataResponse
   */
  async updateSyncQualityCheckData(request: $_model.UpdateSyncQualityCheckDataRequest): Promise<$_model.UpdateSyncQualityCheckDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSyncQualityCheckDataWithOptions(request, runtime);
  }

  /**
   * Updates a label node.
   * 
   * @param request - UpdateTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTagResponse
   */
  async updateTagWithOptions(request: $_model.UpdateTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTag",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTagResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTagResponse({}));
  }

  /**
   * Updates a label node.
   * 
   * @param request - UpdateTagRequest
   * @returns UpdateTagResponse
   */
  async updateTag(request: $_model.UpdateTagRequest): Promise<$_model.UpdateTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTagWithOptions(request, runtime);
  }

  /**
   * Update the automatic allocation rule for quality review tasks.
   * 
   * @param request - UpdateTaskAssignRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTaskAssignRuleResponse
   */
  async updateTaskAssignRuleWithOptions(request: $_model.UpdateTaskAssignRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTaskAssignRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTaskAssignRule",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTaskAssignRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTaskAssignRuleResponse({}));
  }

  /**
   * Update the automatic allocation rule for quality review tasks.
   * 
   * @param request - UpdateTaskAssignRuleRequest
   * @returns UpdateTaskAssignRuleResponse
   */
  async updateTaskAssignRule(request: $_model.UpdateTaskAssignRuleRequest): Promise<$_model.UpdateTaskAssignRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTaskAssignRuleWithOptions(request, runtime);
  }

  /**
   * Update users by modifying their roles in batches.
   * 
   * @remarks
   * When you update users, you can modify only their roles. You cannot modify other account information because all Alibaba Cloud products use a unified account management system. Smart Conversation Analysis uses these accounts. To modify account information, go to [Resource Access Management (RAM)](https://ram.console.aliyun.com/).
   * 
   * @param request - UpdateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserResponse
   */
  async updateUserWithOptions(request: $_model.UpdateUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUser",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserResponse({}));
  }

  /**
   * Update users by modifying their roles in batches.
   * 
   * @remarks
   * When you update users, you can modify only their roles. You cannot modify other account information because all Alibaba Cloud products use a unified account management system. Smart Conversation Analysis uses these accounts. To modify account information, go to [Resource Access Management (RAM)](https://ram.console.aliyun.com/).
   * 
   * @param request - UpdateUserRequest
   * @returns UpdateUserResponse
   */
  async updateUser(request: $_model.UpdateUserRequest): Promise<$_model.UpdateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

  /**
   * Updates the warning configuration.
   * 
   * @param request - UpdateWarningConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWarningConfigResponse
   */
  async updateWarningConfigWithOptions(request: $_model.UpdateWarningConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWarningConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWarningConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWarningConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWarningConfigResponse({}));
  }

  /**
   * Updates the warning configuration.
   * 
   * @param request - UpdateWarningConfigRequest
   * @returns UpdateWarningConfigResponse
   */
  async updateWarningConfig(request: $_model.UpdateWarningConfigRequest): Promise<$_model.UpdateWarningConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWarningConfigWithOptions(request, runtime);
  }

  /**
   * 预警策略-更新
   * 
   * @param request - UpdateWarningStrategyConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWarningStrategyConfigResponse
   */
  async updateWarningStrategyConfigWithOptions(request: $_model.UpdateWarningStrategyConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWarningStrategyConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWarningStrategyConfig",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWarningStrategyConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWarningStrategyConfigResponse({}));
  }

  /**
   * 预警策略-更新
   * 
   * @param request - UpdateWarningStrategyConfigRequest
   * @returns UpdateWarningStrategyConfigResponse
   */
  async updateWarningStrategyConfig(request: $_model.UpdateWarningStrategyConfigRequest): Promise<$_model.UpdateWarningStrategyConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWarningStrategyConfigWithOptions(request, runtime);
  }

  /**
   * Uploads offline audio data—such as recorded call session files—for quality inspection. This operation supports two call center agent scenarios.
   * Scenario 1: Native integration with Alibaba Cloud Call Center (CC). No development is required. You can push call data to Smart Conversation Analysis (SCA) with a single click.
   * Scenario 2: Integration with your own call center system. Each time a recording is generated, the call center pushes it to SCA for analysis.
   * 
   * @remarks
   * ### Process description
   * The process is as follows: An API call uploads the audio file for quality inspection → The audio file is converted to text → The transcribed text is separated by speaker role (agent and customer), based on the specified channel separation method → The role-separated text is analyzed using quality inspection rules → Quality inspection completes.
   * ### Task execution efficiency
   * Task execution speed depends on how quickly the audio file is transcribed. A 5-minute audio file is typically transcribed in about 2 minutes. However, if the transcription service queue is long, a waiting period occurs. Transcription usually completes within 6 hours, except when large volumes of data are uploaded simultaneously—more than 500 hours of audio within 30 minutes. After transcription, quality inspection analysis completes in milliseconds.
   * ### Audio file URL requirements
   * - Supports single-channel or dual-channel audio files in WAV or MP3 format. File size must be less than 512 MB.
   * - The URL must be accessible over HTTP. Local files are not supported. The audio file must have public access permissions.
   * - The URL must use a domain name, not an IP address. The URL cannot contain spaces or Chinese characters.
   * - After transcription, the system deletes the downloaded audio file. No copy of the recording is retained.
   * - If your audio URL has an expiration period—such as a presigned URL for an audio file stored in Alibaba Cloud Object Storage Service (OSS)—set the validity period to at least 12 hours. Ideally, set it to 24 hours. Because transcription may involve queuing, the audio file is downloaded only when transcription begins. A longer validity period prevents the URL from expiring before download starts.
   * - After quality inspection completes, the provided URL is used for playback when you review the file in the console. Ensure the URL remains valid long-term. Otherwise, audio playback fails.
   * ### Role separation
   * After transcription, the system automatically separates the text into two speaker roles but cannot determine which role corresponds to the agent and which to the customer. You must define rules for role separation. Role separation accuracy is critical because many quality inspection rules apply to a specific role—for example, checking only agent or only customer utterances. Incorrect role separation significantly reduces quality inspection accuracy.
   * Audio files are typically either single-channel (mono) or dual-channel (stereo):
   * - Single-channel recording: The voices of the agent and customer are mixed on one channel. After transcription, the system uses a built-in algorithm to separate dialogue into two roles. You can provide a list of keywords commonly spoken by agents. The system analyzes the transcribed text sentence by sentence. When a sentence contains a keyword, that speaker is identified as the agent, and the other speaker is identified as the customer. For more information, see the recognizeRoleDataSetId and serviceChannelKeywords request parameters. Because conversations can be unpredictable—for example, speakers may talk over each other—role separation for single-channel recordings cannot achieve 100% accuracy. We strongly recommend saving recordings as dual-channel audio.
   * - Dual-channel recording: The voices of the agent and customer are stored on separate channels. Even if speakers talk over each other, transcription accurately distinguishes between them. Specify the agent and customer channels using the serviceChannel and clientChannel request parameters.
   * ### Retrieve quality inspection results
   * Because audio analysis is asynchronous, you must retrieve results asynchronously. You can retrieve results in one of the following three ways:
   * - Message notification: For more information, see [Message Queue](https://help.aliyun.com/document_detail/213237.html). After you receive a message, call the GetResult operation to retrieve detailed results. (Recommended)
   * - Callback: Specify a callbackUrl in the request parameters. The system initiates a callback after the task completes. After you receive the callback, call the GetResult operation to retrieve detailed results.
   * - Polling: The operation returns a task ID (taskId). Use the taskId to poll the getResult operation and retrieve the result asynchronously. Check the `status` parameter in the response to determine whether the task is complete. We recommend a polling interval of 30 seconds or longer because analysis typically completes within a few minutes. (Not recommended)
   * 
   * @param request - UploadAudioDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadAudioDataResponse
   */
  async uploadAudioDataWithOptions(request: $_model.UploadAudioDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadAudioDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadAudioData",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadAudioDataResponse>(await this.callApi(params, req, runtime), new $_model.UploadAudioDataResponse({}));
  }

  /**
   * Uploads offline audio data—such as recorded call session files—for quality inspection. This operation supports two call center agent scenarios.
   * Scenario 1: Native integration with Alibaba Cloud Call Center (CC). No development is required. You can push call data to Smart Conversation Analysis (SCA) with a single click.
   * Scenario 2: Integration with your own call center system. Each time a recording is generated, the call center pushes it to SCA for analysis.
   * 
   * @remarks
   * ### Process description
   * The process is as follows: An API call uploads the audio file for quality inspection → The audio file is converted to text → The transcribed text is separated by speaker role (agent and customer), based on the specified channel separation method → The role-separated text is analyzed using quality inspection rules → Quality inspection completes.
   * ### Task execution efficiency
   * Task execution speed depends on how quickly the audio file is transcribed. A 5-minute audio file is typically transcribed in about 2 minutes. However, if the transcription service queue is long, a waiting period occurs. Transcription usually completes within 6 hours, except when large volumes of data are uploaded simultaneously—more than 500 hours of audio within 30 minutes. After transcription, quality inspection analysis completes in milliseconds.
   * ### Audio file URL requirements
   * - Supports single-channel or dual-channel audio files in WAV or MP3 format. File size must be less than 512 MB.
   * - The URL must be accessible over HTTP. Local files are not supported. The audio file must have public access permissions.
   * - The URL must use a domain name, not an IP address. The URL cannot contain spaces or Chinese characters.
   * - After transcription, the system deletes the downloaded audio file. No copy of the recording is retained.
   * - If your audio URL has an expiration period—such as a presigned URL for an audio file stored in Alibaba Cloud Object Storage Service (OSS)—set the validity period to at least 12 hours. Ideally, set it to 24 hours. Because transcription may involve queuing, the audio file is downloaded only when transcription begins. A longer validity period prevents the URL from expiring before download starts.
   * - After quality inspection completes, the provided URL is used for playback when you review the file in the console. Ensure the URL remains valid long-term. Otherwise, audio playback fails.
   * ### Role separation
   * After transcription, the system automatically separates the text into two speaker roles but cannot determine which role corresponds to the agent and which to the customer. You must define rules for role separation. Role separation accuracy is critical because many quality inspection rules apply to a specific role—for example, checking only agent or only customer utterances. Incorrect role separation significantly reduces quality inspection accuracy.
   * Audio files are typically either single-channel (mono) or dual-channel (stereo):
   * - Single-channel recording: The voices of the agent and customer are mixed on one channel. After transcription, the system uses a built-in algorithm to separate dialogue into two roles. You can provide a list of keywords commonly spoken by agents. The system analyzes the transcribed text sentence by sentence. When a sentence contains a keyword, that speaker is identified as the agent, and the other speaker is identified as the customer. For more information, see the recognizeRoleDataSetId and serviceChannelKeywords request parameters. Because conversations can be unpredictable—for example, speakers may talk over each other—role separation for single-channel recordings cannot achieve 100% accuracy. We strongly recommend saving recordings as dual-channel audio.
   * - Dual-channel recording: The voices of the agent and customer are stored on separate channels. Even if speakers talk over each other, transcription accurately distinguishes between them. Specify the agent and customer channels using the serviceChannel and clientChannel request parameters.
   * ### Retrieve quality inspection results
   * Because audio analysis is asynchronous, you must retrieve results asynchronously. You can retrieve results in one of the following three ways:
   * - Message notification: For more information, see [Message Queue](https://help.aliyun.com/document_detail/213237.html). After you receive a message, call the GetResult operation to retrieve detailed results. (Recommended)
   * - Callback: Specify a callbackUrl in the request parameters. The system initiates a callback after the task completes. After you receive the callback, call the GetResult operation to retrieve detailed results.
   * - Polling: The operation returns a task ID (taskId). Use the taskId to poll the getResult operation and retrieve the result asynchronously. Check the `status` parameter in the response to determine whether the task is complete. We recommend a polling interval of 30 seconds or longer because analysis typically completes within a few minutes. (Not recommended)
   * 
   * @param request - UploadAudioDataRequest
   * @returns UploadAudioDataResponse
   */
  async uploadAudioData(request: $_model.UploadAudioDataRequest): Promise<$_model.UploadAudioDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadAudioDataWithOptions(request, runtime);
  }

  /**
   * Upload offline plain text quality inspection data (plain text sessions). This applies to online agent scenarios. Use the UploadDataV4 API. Differences between UploadDataV4 and UploadData include the following: UploadDataV4 supports only POST requests, and it supports longer JsonStr values.
   * 
   * @remarks
   * You can call UploadData.json to upload text-based quality inspection data. Text typically originates from online customer service interactions or tickets. The API returns a task ID. You can retrieve results in one of three ways:
   * - Message notification: For details, see [message queues](https://help.aliyun.com/document_detail/213237.html). After you receive a message, call the GetResult API to retrieve detailed results. (Recommended)
   * - Callback: Specify a callback URL in your request parameters. After the task completes, the system sends a callback to that URL. Then call the GetResult API to retrieve detailed results.
   * - Polling: Use the returned task ID to poll the GetResult API asynchronously. Check whether the status field in the response indicates completion. (Not recommended)
   * 
   * @deprecated OpenAPI UploadData is deprecated, please use Qualitycheck::2019-01-15::UploadDataV4 instead.
   * 
   * @param request - UploadDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadDataResponse
   */
  async uploadDataWithOptions(request: $_model.UploadDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadData",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadDataResponse>(await this.callApi(params, req, runtime), new $_model.UploadDataResponse({}));
  }

  /**
   * Upload offline plain text quality inspection data (plain text sessions). This applies to online agent scenarios. Use the UploadDataV4 API. Differences between UploadDataV4 and UploadData include the following: UploadDataV4 supports only POST requests, and it supports longer JsonStr values.
   * 
   * @remarks
   * You can call UploadData.json to upload text-based quality inspection data. Text typically originates from online customer service interactions or tickets. The API returns a task ID. You can retrieve results in one of three ways:
   * - Message notification: For details, see [message queues](https://help.aliyun.com/document_detail/213237.html). After you receive a message, call the GetResult API to retrieve detailed results. (Recommended)
   * - Callback: Specify a callback URL in your request parameters. After the task completes, the system sends a callback to that URL. Then call the GetResult API to retrieve detailed results.
   * - Polling: Use the returned task ID to poll the GetResult API asynchronously. Check whether the status field in the response indicates completion. (Not recommended)
   * 
   * @deprecated OpenAPI UploadData is deprecated, please use Qualitycheck::2019-01-15::UploadDataV4 instead.
   * 
   * @param request - UploadDataRequest
   * @returns UploadDataResponse
   */
  // Deprecated
  async uploadData(request: $_model.UploadDataRequest): Promise<$_model.UploadDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadDataWithOptions(request, runtime);
  }

  /**
   * Real-time text quality check
   * 
   * @remarks
   * This API pushes text data to SCA for real-time quality inspection based on specified rules and synchronously returns the analysis results. Unlike post-call quality inspection, which requires uploading the full transcript after a dialogue ends, real-time quality inspection offers lower latency by analyzing text immediately after a speaker completes one or more utterances.
   * - If you push a single utterance from one speaker, some rule operators may fail because the required dialogue context is missing. Examples include the context repetition check, speech interruption check, and call mute check.
   * - SCA returns analysis results synchronously and does not save call records, so you cannot query the results later via an API.
   * 
   * @param request - UploadDataSyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadDataSyncResponse
   */
  async uploadDataSyncWithOptions(request: $_model.UploadDataSyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadDataSyncResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadDataSync",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadDataSyncResponse>(await this.callApi(params, req, runtime), new $_model.UploadDataSyncResponse({}));
  }

  /**
   * Real-time text quality check
   * 
   * @remarks
   * This API pushes text data to SCA for real-time quality inspection based on specified rules and synchronously returns the analysis results. Unlike post-call quality inspection, which requires uploading the full transcript after a dialogue ends, real-time quality inspection offers lower latency by analyzing text immediately after a speaker completes one or more utterances.
   * - If you push a single utterance from one speaker, some rule operators may fail because the required dialogue context is missing. Examples include the context repetition check, speech interruption check, and call mute check.
   * - SCA returns analysis results synchronously and does not save call records, so you cannot query the results later via an API.
   * 
   * @param request - UploadDataSyncRequest
   * @returns UploadDataSyncResponse
   */
  async uploadDataSync(request: $_model.UploadDataSyncRequest): Promise<$_model.UploadDataSyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadDataSyncWithOptions(request, runtime);
  }

  /**
   * http_hsf
   * 
   * @param request - UploadDataSyncForLLMRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadDataSyncForLLMResponse
   */
  async uploadDataSyncForLLMWithOptions(request: $_model.UploadDataSyncForLLMRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadDataSyncForLLMResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jsonStr)) {
      body["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadDataSyncForLLM",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadDataSyncForLLMResponse>(await this.callApi(params, req, runtime), new $_model.UploadDataSyncForLLMResponse({}));
  }

  /**
   * http_hsf
   * 
   * @param request - UploadDataSyncForLLMRequest
   * @returns UploadDataSyncForLLMResponse
   */
  async uploadDataSyncForLLM(request: $_model.UploadDataSyncForLLMRequest): Promise<$_model.UploadDataSyncForLLMResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadDataSyncForLLMWithOptions(request, runtime);
  }

  /**
   * Uploads offline plain text conversation data for quality inspection in online agent scenarios. We recommend that you use the UploadDataV4 API. Compared to the UploadData API, UploadDataV4 supports only POST requests and allows a longer JsonStr.
   * 
   * @remarks
   * You can call the UploadData.json operation to upload text data for quality inspection. The text usually comes from sources such as online customer service and tickets. The API returns a task ID. You can retrieve the results in one of the following three ways:
   * - Message notifications: After you receive a notification, call the GetResult API to obtain the detailed results. For more information, see [Message Queue](https://help.aliyun.com/document_detail/213237.html). (Recommended)
   * - Callbacks: Specify a callbackUrl in the request parameters. The system automatically initiates a callback after the task is complete. After you receive the callback, call the GetResult API to retrieve the detailed results.
   * - Polling: Use the task ID returned by this API to poll the GetResult API and asynchronously retrieve the results. Check the status in the response to determine whether the task is complete. (Not recommended)
   * 
   * @param request - UploadDataV4Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadDataV4Response
   */
  async uploadDataV4WithOptions(request: $_model.UploadDataV4Request, runtime: $dara.RuntimeOptions): Promise<$_model.UploadDataV4Response> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      body["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      body["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadDataV4",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadDataV4Response>(await this.callApi(params, req, runtime), new $_model.UploadDataV4Response({}));
  }

  /**
   * Uploads offline plain text conversation data for quality inspection in online agent scenarios. We recommend that you use the UploadDataV4 API. Compared to the UploadData API, UploadDataV4 supports only POST requests and allows a longer JsonStr.
   * 
   * @remarks
   * You can call the UploadData.json operation to upload text data for quality inspection. The text usually comes from sources such as online customer service and tickets. The API returns a task ID. You can retrieve the results in one of the following three ways:
   * - Message notifications: After you receive a notification, call the GetResult API to obtain the detailed results. For more information, see [Message Queue](https://help.aliyun.com/document_detail/213237.html). (Recommended)
   * - Callbacks: Specify a callbackUrl in the request parameters. The system automatically initiates a callback after the task is complete. After you receive the callback, call the GetResult API to retrieve the detailed results.
   * - Polling: Use the task ID returned by this API to poll the GetResult API and asynchronously retrieve the results. Check the status in the response to determine whether the task is complete. (Not recommended)
   * 
   * @param request - UploadDataV4Request
   * @returns UploadDataV4Response
   */
  async uploadDataV4(request: $_model.UploadDataV4Request): Promise<$_model.UploadDataV4Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadDataV4WithOptions(request, runtime);
  }

  /**
   * Creates a rule. You can use this operation to provide your own rule editing interface.
   * 
   * @remarks
   * > For more information, see [Rule configuration](https://help.aliyun.com/document_detail/213225.html).
   * 
   * @param request - UploadRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadRuleResponse
   */
  async uploadRuleWithOptions(request: $_model.UploadRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadRule",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadRuleResponse>(await this.callApi(params, req, runtime), new $_model.UploadRuleResponse({}));
  }

  /**
   * Creates a rule. You can use this operation to provide your own rule editing interface.
   * 
   * @remarks
   * > For more information, see [Rule configuration](https://help.aliyun.com/document_detail/213225.html).
   * 
   * @param request - UploadRuleRequest
   * @returns UploadRuleResponse
   */
  async uploadRule(request: $_model.UploadRuleRequest): Promise<$_model.UploadRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadRuleWithOptions(request, runtime);
  }

  /**
   * Saves the verification result of a single file.
   * 
   * @param request - VerifyFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyFileResponse
   */
  async verifyFileWithOptions(request: $_model.VerifyFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyFile",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifyFileResponse>(await this.callApi(params, req, runtime), new $_model.VerifyFileResponse({}));
  }

  /**
   * Saves the verification result of a single file.
   * 
   * @param request - VerifyFileRequest
   * @returns VerifyFileResponse
   */
  async verifyFile(request: $_model.VerifyFileRequest): Promise<$_model.VerifyFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyFileWithOptions(request, runtime);
  }

  /**
   * Save the verification result for a single sentence.
   * 
   * @param request - VerifySentenceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifySentenceResponse
   */
  async verifySentenceWithOptions(request: $_model.VerifySentenceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifySentenceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseMeAgentId)) {
      query["BaseMeAgentId"] = request.baseMeAgentId;
    }

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifySentence",
      version: "2019-01-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifySentenceResponse>(await this.callApi(params, req, runtime), new $_model.VerifySentenceResponse({}));
  }

  /**
   * Save the verification result for a single sentence.
   * 
   * @param request - VerifySentenceRequest
   * @returns VerifySentenceResponse
   */
  async verifySentence(request: $_model.VerifySentenceRequest): Promise<$_model.VerifySentenceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifySentenceWithOptions(request, runtime);
  }

}
