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
   * @param request - AddBusinessCategoryRequest
   * @returns AddBusinessCategoryResponse
   */
  async addBusinessCategory(request: $_model.AddBusinessCategoryRequest): Promise<$_model.AddBusinessCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addBusinessCategoryWithOptions(request, runtime);
  }

  /**
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
   * @param request - AddRuleCategoryRequest
   * @returns AddRuleCategoryResponse
   */
  async addRuleCategory(request: $_model.AddRuleCategoryRequest): Promise<$_model.AddRuleCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addRuleCategoryWithOptions(request, runtime);
  }

  /**
   * V4创建规则
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
   * V4创建规则
   * 
   * @param request - AddRuleV4Request
   * @returns AddRuleV4Response
   */
  async addRuleV4(request: $_model.AddRuleV4Request): Promise<$_model.AddRuleV4Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addRuleV4WithOptions(request, runtime);
  }

  /**
   * 申领实时语音所需token
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
   * 申领实时语音所需token
   * 
   * @param request - ApplyWsTokenRequest
   * @returns ApplyWsTokenResponse
   */
  async applyWsToken(request: $_model.ApplyWsTokenRequest): Promise<$_model.ApplyWsTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyWsTokenWithOptions(request, runtime);
  }

  /**
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
   * @param request - AssignReviewerRequest
   * @returns AssignReviewerResponse
   */
  async assignReviewer(request: $_model.AssignReviewerRequest): Promise<$_model.AssignReviewerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.assignReviewerWithOptions(request, runtime);
  }

  /**
   * 会话组批量分配
   * 
   * @deprecated OpenAPI AssignReviewerBySessionGroup is deprecated
   * 
   * @param request - AssignReviewerBySessionGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssignReviewerBySessionGroupResponse
   */
  // Deprecated
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
   * 会话组批量分配
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
   * 批量复核
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
   * 批量复核
   * 
   * @param request - BatchSubmitReviewInfoRequest
   * @returns BatchSubmitReviewInfoResponse
   */
  async batchSubmitReviewInfo(request: $_model.BatchSubmitReviewInfoRequest): Promise<$_model.BatchSubmitReviewInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchSubmitReviewInfoWithOptions(request, runtime);
  }

  /**
   * 创建热词模型
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
   * 创建热词模型
   * 
   * @param request - CreateAsrVocabRequest
   * @returns CreateAsrVocabResponse
   */
  async createAsrVocab(request: $_model.CreateAsrVocabRequest): Promise<$_model.CreateAsrVocabResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAsrVocabWithOptions(request, runtime);
  }

  /**
   * 创建质检方案中的质检维度
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
   * 创建质检方案中的质检维度
   * 
   * @param request - CreateCheckTypeToSchemeRequest
   * @returns CreateCheckTypeToSchemeResponse
   */
  async createCheckTypeToScheme(request: $_model.CreateCheckTypeToSchemeRequest): Promise<$_model.CreateCheckTypeToSchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCheckTypeToSchemeWithOptions(request, runtime);
  }

  /**
   * 新增质检方案
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
   * 新增质检方案
   * 
   * @param request - CreateQualityCheckSchemeRequest
   * @returns CreateQualityCheckSchemeResponse
   */
  async createQualityCheckScheme(request: $_model.CreateQualityCheckSchemeRequest): Promise<$_model.CreateQualityCheckSchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createQualityCheckSchemeWithOptions(request, runtime);
  }

  /**
   * 新建质检任务
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
   * 新建质检任务
   * 
   * @param request - CreateSchemeTaskConfigRequest
   * @returns CreateSchemeTaskConfigResponse
   */
  async createSchemeTaskConfig(request: $_model.CreateSchemeTaskConfigRequest): Promise<$_model.CreateSchemeTaskConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSchemeTaskConfigWithOptions(request, runtime);
  }

  /**
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
   * @param request - CreateSkillGroupConfigRequest
   * @returns CreateSkillGroupConfigResponse
   */
  async createSkillGroupConfig(request: $_model.CreateSkillGroupConfigRequest): Promise<$_model.CreateSkillGroupConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSkillGroupConfigWithOptions(request, runtime);
  }

  /**
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
   * @param request - CreateTaskAssignRuleRequest
   * @returns CreateTaskAssignRuleResponse
   */
  async createTaskAssignRule(request: $_model.CreateTaskAssignRuleRequest): Promise<$_model.CreateTaskAssignRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTaskAssignRuleWithOptions(request, runtime);
  }

  /**
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
   * @param request - DelRuleCategoryRequest
   * @returns DelRuleCategoryResponse
   */
  async delRuleCategory(request: $_model.DelRuleCategoryRequest): Promise<$_model.DelRuleCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.delRuleCategoryWithOptions(request, runtime);
  }

  /**
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
   * @param request - DeleteAsrVocabRequest
   * @returns DeleteAsrVocabResponse
   */
  async deleteAsrVocab(request: $_model.DeleteAsrVocabRequest): Promise<$_model.DeleteAsrVocabResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAsrVocabWithOptions(request, runtime);
  }

  /**
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
   * @param request - DeleteBusinessCategoryRequest
   * @returns DeleteBusinessCategoryResponse
   */
  async deleteBusinessCategory(request: $_model.DeleteBusinessCategoryRequest): Promise<$_model.DeleteBusinessCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBusinessCategoryWithOptions(request, runtime);
  }

  /**
   * 删除质检唯独
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
   * 删除质检唯独
   * 
   * @param request - DeleteCheckTypeToSchemeRequest
   * @returns DeleteCheckTypeToSchemeResponse
   */
  async deleteCheckTypeToScheme(request: $_model.DeleteCheckTypeToSchemeRequest): Promise<$_model.DeleteCheckTypeToSchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCheckTypeToSchemeWithOptions(request, runtime);
  }

  /**
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
   * @param request - DeleteCustomizationConfigRequest
   * @returns DeleteCustomizationConfigResponse
   */
  async deleteCustomizationConfig(request: $_model.DeleteCustomizationConfigRequest): Promise<$_model.DeleteCustomizationConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomizationConfigWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI DeleteDataSet is deprecated
   * 
   * @param request - DeleteDataSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataSetResponse
   */
  // Deprecated
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
   * @param request - DeletePrecisionTaskRequest
   * @returns DeletePrecisionTaskResponse
   */
  async deletePrecisionTask(request: $_model.DeletePrecisionTaskRequest): Promise<$_model.DeletePrecisionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePrecisionTaskWithOptions(request, runtime);
  }

  /**
   * 删除质检方案
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
   * 删除质检方案
   * 
   * @param request - DeleteQualityCheckSchemeRequest
   * @returns DeleteQualityCheckSchemeResponse
   */
  async deleteQualityCheckScheme(request: $_model.DeleteQualityCheckSchemeRequest): Promise<$_model.DeleteQualityCheckSchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteQualityCheckSchemeWithOptions(request, runtime);
  }

  /**
   * 删除规则
   * 
   * @deprecated OpenAPI DeleteRule is deprecated, please use Qualitycheck::2019-01-15::DeleteRuleV4 instead.
   * 
   * @param request - DeleteRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRuleResponse
   */
  // Deprecated
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
   * 删除规则
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
   * V4删除规则
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
   * V4删除规则
   * 
   * @param request - DeleteRuleV4Request
   * @returns DeleteRuleV4Response
   */
  async deleteRuleV4(request: $_model.DeleteRuleV4Request): Promise<$_model.DeleteRuleV4Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRuleV4WithOptions(request, runtime);
  }

  /**
   * 删除质检任务
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
   * 删除质检任务
   * 
   * @param request - DeleteSchemeTaskConfigRequest
   * @returns DeleteSchemeTaskConfigResponse
   */
  async deleteSchemeTaskConfig(request: $_model.DeleteSchemeTaskConfigRequest): Promise<$_model.DeleteSchemeTaskConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSchemeTaskConfigWithOptions(request, runtime);
  }

  /**
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
   * @param request - DeleteSkillGroupConfigRequest
   * @returns DeleteSkillGroupConfigResponse
   */
  async deleteSkillGroupConfig(request: $_model.DeleteSkillGroupConfigRequest): Promise<$_model.DeleteSkillGroupConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSkillGroupConfigWithOptions(request, runtime);
  }

  /**
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
   * @param request - DeleteTaskAssignRuleRequest
   * @returns DeleteTaskAssignRuleResponse
   */
  async deleteTaskAssignRule(request: $_model.DeleteTaskAssignRuleRequest): Promise<$_model.DeleteTaskAssignRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTaskAssignRuleWithOptions(request, runtime);
  }

  /**
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
   * @param request - GetAsrVocabRequest
   * @returns GetAsrVocabResponse
   */
  async getAsrVocab(request: $_model.GetAsrVocabRequest): Promise<$_model.GetAsrVocabResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAsrVocabWithOptions(request, runtime);
  }

  /**
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
   * @param request - GetBusinessCategoryListRequest
   * @returns GetBusinessCategoryListResponse
   */
  async getBusinessCategoryList(request: $_model.GetBusinessCategoryListRequest): Promise<$_model.GetBusinessCategoryListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBusinessCategoryListWithOptions(request, runtime);
  }

  /**
   * 获取语音模型列表
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
   * 获取语音模型列表
   * 
   * @param request - GetCustomizationConfigListRequest
   * @returns GetCustomizationConfigListResponse
   */
  async getCustomizationConfigList(request: $_model.GetCustomizationConfigListRequest): Promise<$_model.GetCustomizationConfigListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCustomizationConfigListWithOptions(request, runtime);
  }

  /**
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
   * @param request - GetNextResultToVerifyRequest
   * @returns GetNextResultToVerifyResponse
   */
  async getNextResultToVerify(request: $_model.GetNextResultToVerifyRequest): Promise<$_model.GetNextResultToVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNextResultToVerifyWithOptions(request, runtime);
  }

  /**
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
   * @param request - GetPrecisionTaskRequest
   * @returns GetPrecisionTaskResponse
   */
  async getPrecisionTask(request: $_model.GetPrecisionTaskRequest): Promise<$_model.GetPrecisionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPrecisionTaskWithOptions(request, runtime);
  }

  /**
   * 获取质检方案
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
   * 获取质检方案
   * 
   * @param request - GetQualityCheckSchemeRequest
   * @returns GetQualityCheckSchemeResponse
   */
  async getQualityCheckScheme(request: $_model.GetQualityCheckSchemeRequest): Promise<$_model.GetQualityCheckSchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualityCheckSchemeWithOptions(request, runtime);
  }

  /**
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
   * @param request - GetResultRequest
   * @returns GetResultResponse
   */
  async getResult(request: $_model.GetResultRequest): Promise<$_model.GetResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResultWithOptions(request, runtime);
  }

  /**
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
   * @param request - GetResultToReviewRequest
   * @returns GetResultToReviewResponse
   */
  async getResultToReview(request: $_model.GetResultToReviewRequest): Promise<$_model.GetResultToReviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResultToReviewWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI GetRule is deprecated, please use Qualitycheck::2019-01-15::GetRuleV4 instead.
   * 
   * @param request - GetRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRuleResponse
   */
  // Deprecated
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
   * 获取规则
   * 
   * @deprecated OpenAPI GetRuleById is deprecated, please use Qualitycheck::2019-01-15::GetRuleV4 instead.
   * 
   * @param request - GetRuleByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRuleByIdResponse
   */
  // Deprecated
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
   * 获取规则
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
   * @param request - GetRuleCategoryRequest
   * @returns GetRuleCategoryResponse
   */
  async getRuleCategory(request: $_model.GetRuleCategoryRequest): Promise<$_model.GetRuleCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRuleCategoryWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI GetRuleDetail is deprecated, please use Qualitycheck::2019-01-15::GetRuleV4 instead.
   * 
   * @param request - GetRuleDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRuleDetailResponse
   */
  // Deprecated
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
   * V4获取规则
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
   * V4获取规则
   * 
   * @param request - GetRuleV4Request
   * @returns GetRuleV4Response
   */
  async getRuleV4(request: $_model.GetRuleV4Request): Promise<$_model.GetRuleV4Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRuleV4WithOptions(request, runtime);
  }

  /**
   * 获得规则列表
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
   * 获得规则列表
   * 
   * @param request - GetRulesCountListRequest
   * @returns GetRulesCountListResponse
   */
  async getRulesCountList(request: $_model.GetRulesCountListRequest): Promise<$_model.GetRulesCountListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRulesCountListWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI GetScoreInfo is deprecated
   * 
   * @param request - GetScoreInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScoreInfoResponse
   */
  // Deprecated
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
   * @param request - GetSkillGroupConfigRequest
   * @returns GetSkillGroupConfigResponse
   */
  async getSkillGroupConfig(request: $_model.GetSkillGroupConfigRequest): Promise<$_model.GetSkillGroupConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSkillGroupConfigWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI GetSyncResult is deprecated, please use Qualitycheck::2019-01-15::GetResult instead.
   * 
   * @param request - GetSyncResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSyncResultResponse
   */
  // Deprecated
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
   * @param request - HandleComplaintRequest
   * @returns HandleComplaintResponse
   */
  async handleComplaint(request: $_model.HandleComplaintRequest): Promise<$_model.HandleComplaintResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.handleComplaintWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI InvalidRule is deprecated, please use Qualitycheck::2019-01-15::DeleteRuleV4 instead.
   * 
   * @param request - InvalidRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvalidRuleResponse
   */
  // Deprecated
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
   * 获取热词模型列表
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
   * 获取热词模型列表
   * 
   * @param request - ListAsrVocabRequest
   * @returns ListAsrVocabResponse
   */
  async listAsrVocab(request: $_model.ListAsrVocabRequest): Promise<$_model.ListAsrVocabResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAsrVocabWithOptions(request, runtime);
  }

  /**
   * 获取数据集列表
   * 
   * @deprecated OpenAPI ListDataSet is deprecated
   * 
   * @param request - ListDataSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSetResponse
   */
  // Deprecated
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
   * 获取数据集列表
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
   * @param request - ListPrecisionTaskRequest
   * @returns ListPrecisionTaskResponse
   */
  async listPrecisionTask(request: $_model.ListPrecisionTaskRequest): Promise<$_model.ListPrecisionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPrecisionTaskWithOptions(request, runtime);
  }

  /**
   * 质检方案列表
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
   * 质检方案列表
   * 
   * @param request - ListQualityCheckSchemeRequest
   * @returns ListQualityCheckSchemeResponse
   */
  async listQualityCheckScheme(request: $_model.ListQualityCheckSchemeRequest): Promise<$_model.ListQualityCheckSchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQualityCheckSchemeWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI ListRules is deprecated, please use Qualitycheck::2019-01-15::ListRulesV4 instead.
   * 
   * @param request - ListRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRulesResponse
   */
  // Deprecated
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
   * V4获得规则列表
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
   * V4获得规则列表
   * 
   * @param request - ListRulesV4Request
   * @returns ListRulesV4Response
   */
  async listRulesV4(request: $_model.ListRulesV4Request): Promise<$_model.ListRulesV4Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRulesV4WithOptions(request, runtime);
  }

  /**
   * 获取质检任务列表
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
   * 获取质检任务列表
   * 
   * @param request - ListSchemeTaskConfigRequest
   * @returns ListSchemeTaskConfigResponse
   */
  async listSchemeTaskConfig(request: $_model.ListSchemeTaskConfigRequest): Promise<$_model.ListSchemeTaskConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSchemeTaskConfigWithOptions(request, runtime);
  }

  /**
   * 获取会话组列表
   * 
   * @deprecated OpenAPI ListSessionGroup is deprecated
   * 
   * @param request - ListSessionGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSessionGroupResponse
   */
  // Deprecated
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
   * 获取会话组列表
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
   * @param request - ListSkillGroupConfigRequest
   * @returns ListSkillGroupConfigResponse
   */
  async listSkillGroupConfig(request: $_model.ListSkillGroupConfigRequest): Promise<$_model.ListSkillGroupConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSkillGroupConfigWithOptions(request, runtime);
  }

  /**
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
   * @param request - ListTaskAssignRulesRequest
   * @returns ListTaskAssignRulesResponse
   */
  async listTaskAssignRules(request: $_model.ListTaskAssignRulesRequest): Promise<$_model.ListTaskAssignRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTaskAssignRulesWithOptions(request, runtime);
  }

  /**
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
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: $_model.ListUsersRequest): Promise<$_model.ListUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  /**
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
   * 批量回收
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
   * 批量回收
   * 
   * @param request - RevertAssignedSessionRequest
   * @returns RevertAssignedSessionResponse
   */
  async revertAssignedSession(request: $_model.RevertAssignedSessionRequest): Promise<$_model.RevertAssignedSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revertAssignedSessionWithOptions(request, runtime);
  }

  /**
   * 会话组批量回收
   * 
   * @deprecated OpenAPI RevertAssignedSessionGroup is deprecated
   * 
   * @param request - RevertAssignedSessionGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevertAssignedSessionGroupResponse
   */
  // Deprecated
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
   * 会话组批量回收
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
   * @deprecated OpenAPI SaveConfigDataSet is deprecated
   * 
   * @param request - SaveConfigDataSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveConfigDataSetResponse
   */
  // Deprecated
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
   * @param request - SubmitComplaintRequest
   * @returns SubmitComplaintResponse
   */
  async submitComplaint(request: $_model.SubmitComplaintRequest): Promise<$_model.SubmitComplaintResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitComplaintWithOptions(request, runtime);
  }

  /**
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
   * @param request - SubmitPrecisionTaskRequest
   * @returns SubmitPrecisionTaskResponse
   */
  async submitPrecisionTask(request: $_model.SubmitPrecisionTaskRequest): Promise<$_model.SubmitPrecisionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitPrecisionTaskWithOptions(request, runtime);
  }

  /**
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
   * @param request - SubmitQualityCheckTaskRequest
   * @returns SubmitQualityCheckTaskResponse
   */
  async submitQualityCheckTask(request: $_model.SubmitQualityCheckTaskRequest): Promise<$_model.SubmitQualityCheckTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitQualityCheckTaskWithOptions(request, runtime);
  }

  /**
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
   * @param request - SubmitReviewInfoRequest
   * @returns SubmitReviewInfoResponse
   */
  async submitReviewInfo(request: $_model.SubmitReviewInfoRequest): Promise<$_model.SubmitReviewInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitReviewInfoWithOptions(request, runtime);
  }

  /**
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
   * @param request - SyncQualityCheckRequest
   * @returns SyncQualityCheckResponse
   */
  async syncQualityCheck(request: $_model.SyncQualityCheckRequest): Promise<$_model.SyncQualityCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncQualityCheckWithOptions(request, runtime);
  }

  /**
   * 测试规则
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
   * 测试规则
   * 
   * @param request - TestRuleV4Request
   * @returns TestRuleV4Response
   */
  async testRuleV4(request: $_model.TestRuleV4Request): Promise<$_model.TestRuleV4Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.testRuleV4WithOptions(request, runtime);
  }

  /**
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
   * @param request - UpdateAsrVocabRequest
   * @returns UpdateAsrVocabResponse
   */
  async updateAsrVocab(request: $_model.UpdateAsrVocabRequest): Promise<$_model.UpdateAsrVocabResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAsrVocabWithOptions(request, runtime);
  }

  /**
   * 更新质检方案中的质检维度
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
   * 更新质检方案中的质检维度
   * 
   * @param request - UpdateCheckTypeToSchemeRequest
   * @returns UpdateCheckTypeToSchemeResponse
   */
  async updateCheckTypeToScheme(request: $_model.UpdateCheckTypeToSchemeRequest): Promise<$_model.UpdateCheckTypeToSchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCheckTypeToSchemeWithOptions(request, runtime);
  }

  /**
   * 更新会话随录数据
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
   * 更新会话随录数据
   * 
   * @param request - UpdateQualityCheckDataRequest
   * @returns UpdateQualityCheckDataResponse
   */
  async updateQualityCheckData(request: $_model.UpdateQualityCheckDataRequest): Promise<$_model.UpdateQualityCheckDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateQualityCheckDataWithOptions(request, runtime);
  }

  /**
   * 更新质检方案
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
   * 更新质检方案
   * 
   * @param request - UpdateQualityCheckSchemeRequest
   * @returns UpdateQualityCheckSchemeResponse
   */
  async updateQualityCheckScheme(request: $_model.UpdateQualityCheckSchemeRequest): Promise<$_model.UpdateQualityCheckSchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateQualityCheckSchemeWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI UpdateRule is deprecated, please use Qualitycheck::2019-01-15::UpdateRuleV4 instead.
   * 
   * @param request - UpdateRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRuleResponse
   */
  // Deprecated
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
   * 更新规则
   * 
   * @deprecated OpenAPI UpdateRuleById is deprecated, please use Qualitycheck::2019-01-15::UpdateRuleV4 instead.
   * 
   * @param request - UpdateRuleByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRuleByIdResponse
   */
  // Deprecated
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
   * 更新规则
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
   * 更新质检方案的规则
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
   * 更新质检方案的规则
   * 
   * @param request - UpdateRuleToSchemeRequest
   * @returns UpdateRuleToSchemeResponse
   */
  async updateRuleToScheme(request: $_model.UpdateRuleToSchemeRequest): Promise<$_model.UpdateRuleToSchemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRuleToSchemeWithOptions(request, runtime);
  }

  /**
   * V4更新规则
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
   * V4更新规则
   * 
   * @param request - UpdateRuleV4Request
   * @returns UpdateRuleV4Response
   */
  async updateRuleV4(request: $_model.UpdateRuleV4Request): Promise<$_model.UpdateRuleV4Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRuleV4WithOptions(request, runtime);
  }

  /**
   * 更新质检任务
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
   * 更新质检任务
   * 
   * @param request - UpdateSchemeTaskConfigRequest
   * @returns UpdateSchemeTaskConfigResponse
   */
  async updateSchemeTaskConfig(request: $_model.UpdateSchemeTaskConfigRequest): Promise<$_model.UpdateSchemeTaskConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSchemeTaskConfigWithOptions(request, runtime);
  }

  /**
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
   * @param request - UpdateSkillGroupConfigRequest
   * @returns UpdateSkillGroupConfigResponse
   */
  async updateSkillGroupConfig(request: $_model.UpdateSkillGroupConfigRequest): Promise<$_model.UpdateSkillGroupConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSkillGroupConfigWithOptions(request, runtime);
  }

  /**
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
   * @param request - UpdateSyncQualityCheckDataRequest
   * @returns UpdateSyncQualityCheckDataResponse
   */
  async updateSyncQualityCheckData(request: $_model.UpdateSyncQualityCheckDataRequest): Promise<$_model.UpdateSyncQualityCheckDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSyncQualityCheckDataWithOptions(request, runtime);
  }

  /**
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
   * @param request - UpdateTaskAssignRuleRequest
   * @returns UpdateTaskAssignRuleResponse
   */
  async updateTaskAssignRule(request: $_model.UpdateTaskAssignRuleRequest): Promise<$_model.UpdateTaskAssignRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTaskAssignRuleWithOptions(request, runtime);
  }

  /**
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
   * @param request - UpdateUserRequest
   * @returns UpdateUserResponse
   */
  async updateUser(request: $_model.UpdateUserRequest): Promise<$_model.UpdateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

  /**
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
   * @param request - UploadAudioDataRequest
   * @returns UploadAudioDataResponse
   */
  async uploadAudioData(request: $_model.UploadAudioDataRequest): Promise<$_model.UploadAudioDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadAudioDataWithOptions(request, runtime);
  }

  /**
   * 推荐使用UploadDataV4接口,支持更长的JsonStr,但仅支持POST方法.
   * 
   * @deprecated OpenAPI UploadData is deprecated, please use Qualitycheck::2019-01-15::UploadDataV4 instead.
   * 
   * @param request - UploadDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadDataResponse
   */
  // Deprecated
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
   * 推荐使用UploadDataV4接口,支持更长的JsonStr,但仅支持POST方法.
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
   * http_hsf
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
   * http_hsf
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

    if (!$dara.isNull(request.jsonStr)) {
      query["JsonStr"] = request.jsonStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
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
   * UploadDataV4
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
   * UploadDataV4
   * 
   * @param request - UploadDataV4Request
   * @returns UploadDataV4Response
   */
  async uploadDataV4(request: $_model.UploadDataV4Request): Promise<$_model.UploadDataV4Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadDataV4WithOptions(request, runtime);
  }

  /**
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
   * @param request - UploadRuleRequest
   * @returns UploadRuleResponse
   */
  async uploadRule(request: $_model.UploadRuleRequest): Promise<$_model.UploadRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadRuleWithOptions(request, runtime);
  }

  /**
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
   * @param request - VerifyFileRequest
   * @returns VerifyFileResponse
   */
  async verifyFile(request: $_model.VerifyFileRequest): Promise<$_model.VerifyFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyFileWithOptions(request, runtime);
  }

  /**
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
   * @param request - VerifySentenceRequest
   * @returns VerifySentenceResponse
   */
  async verifySentence(request: $_model.VerifySentenceRequest): Promise<$_model.VerifySentenceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifySentenceWithOptions(request, runtime);
  }

}
