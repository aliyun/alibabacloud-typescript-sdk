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
    this._endpoint = this.getEndpoint("rai", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * BatchContentAsyncDetect
   * 
   * @param request - BatchContentAsyncDetectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchContentAsyncDetectResponse
   */
  async batchContentAsyncDetectWithOptions(request: $_model.BatchContentAsyncDetectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchContentAsyncDetectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sceneName)) {
      query["SceneName"] = request.sceneName;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serviceParameterList)) {
      body["serviceParameterList"] = request.serviceParameterList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchContentAsyncDetect",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchContentAsyncDetectResponse>(await this.callApi(params, req, runtime), new $_model.BatchContentAsyncDetectResponse({}));
  }

  /**
   * BatchContentAsyncDetect
   * 
   * @param request - BatchContentAsyncDetectRequest
   * @returns BatchContentAsyncDetectResponse
   */
  async batchContentAsyncDetect(request: $_model.BatchContentAsyncDetectRequest): Promise<$_model.BatchContentAsyncDetectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchContentAsyncDetectWithOptions(request, runtime);
  }

  /**
   * BatchContentSyncDetect
   * 
   * @param request - BatchContentSyncDetectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchContentSyncDetectResponse
   */
  async batchContentSyncDetectWithOptions(request: $_model.BatchContentSyncDetectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchContentSyncDetectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sceneName)) {
      query["SceneName"] = request.sceneName;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serviceParameterList)) {
      body["serviceParameterList"] = request.serviceParameterList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchContentSyncDetect",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchContentSyncDetectResponse>(await this.callApi(params, req, runtime), new $_model.BatchContentSyncDetectResponse({}));
  }

  /**
   * BatchContentSyncDetect
   * 
   * @param request - BatchContentSyncDetectRequest
   * @returns BatchContentSyncDetectResponse
   */
  async batchContentSyncDetect(request: $_model.BatchContentSyncDetectRequest): Promise<$_model.BatchContentSyncDetectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchContentSyncDetectWithOptions(request, runtime);
  }

  /**
   * 检查用户是否开通RAI服务
   * 
   * @param request - CheckAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckAccountResponse
   */
  async checkAccountWithOptions(request: $_model.CheckAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckAccount",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckAccountResponse>(await this.callApi(params, req, runtime), new $_model.CheckAccountResponse({}));
  }

  /**
   * 检查用户是否开通RAI服务
   * 
   * @param request - CheckAccountRequest
   * @returns CheckAccountResponse
   */
  async checkAccount(request: $_model.CheckAccountRequest): Promise<$_model.CheckAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkAccountWithOptions(request, runtime);
  }

  /**
   * ContentAsyncDetect
   * 
   * @param request - ContentAsyncDetectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ContentAsyncDetectResponse
   */
  async contentAsyncDetectWithOptions(request: $_model.ContentAsyncDetectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ContentAsyncDetectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sceneName)) {
      query["SceneName"] = request.sceneName;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serviceParameter)) {
      body["serviceParameter"] = request.serviceParameter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ContentAsyncDetect",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ContentAsyncDetectResponse>(await this.callApi(params, req, runtime), new $_model.ContentAsyncDetectResponse({}));
  }

  /**
   * ContentAsyncDetect
   * 
   * @param request - ContentAsyncDetectRequest
   * @returns ContentAsyncDetectResponse
   */
  async contentAsyncDetect(request: $_model.ContentAsyncDetectRequest): Promise<$_model.ContentAsyncDetectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.contentAsyncDetectWithOptions(request, runtime);
  }

  /**
   * ContentSyncDetect
   * 
   * @param request - ContentSyncDetectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ContentSyncDetectResponse
   */
  async contentSyncDetectWithOptions(request: $_model.ContentSyncDetectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ContentSyncDetectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sceneName)) {
      query["SceneName"] = request.sceneName;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serviceParameter)) {
      body["serviceParameter"] = request.serviceParameter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ContentSyncDetect",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ContentSyncDetectResponse>(await this.callApi(params, req, runtime), new $_model.ContentSyncDetectResponse({}));
  }

  /**
   * ContentSyncDetect
   * 
   * @param request - ContentSyncDetectRequest
   * @returns ContentSyncDetectResponse
   */
  async contentSyncDetect(request: $_model.ContentSyncDetectRequest): Promise<$_model.ContentSyncDetectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.contentSyncDetectWithOptions(request, runtime);
  }

  /**
   * CreateModelInstance
   * 
   * @param request - CreateModelInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModelInstanceResponse
   */
  async createModelInstanceWithOptions(request: $_model.CreateModelInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateModelInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.easServiceId)) {
      query["EasServiceId"] = request.easServiceId;
    }

    if (!$dara.isNull(request.easServiceName)) {
      query["EasServiceName"] = request.easServiceName;
    }

    if (!$dara.isNull(request.modelCallName)) {
      query["ModelCallName"] = request.modelCallName;
    }

    if (!$dara.isNull(request.modelCategoryId)) {
      query["ModelCategoryId"] = request.modelCategoryId;
    }

    if (!$dara.isNull(request.modelToken)) {
      query["ModelToken"] = request.modelToken;
    }

    if (!$dara.isNull(request.modelUrl)) {
      query["ModelUrl"] = request.modelUrl;
    }

    if (!$dara.isNull(request.modelVpcUrl)) {
      query["ModelVpcUrl"] = request.modelVpcUrl;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateModelInstance",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateModelInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateModelInstanceResponse({}));
  }

  /**
   * CreateModelInstance
   * 
   * @param request - CreateModelInstanceRequest
   * @returns CreateModelInstanceResponse
   */
  async createModelInstance(request: $_model.CreateModelInstanceRequest): Promise<$_model.CreateModelInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createModelInstanceWithOptions(request, runtime);
  }

  /**
   * CreatePolicy
   * 
   * @param tmpReq - CreatePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePolicyResponse
   */
  async createPolicyWithOptions(tmpReq: $_model.CreatePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePolicyResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.harmfulCategoryConfigInfoList)) {
      request.harmfulCategoryConfigInfoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.harmfulCategoryConfigInfoList, "HarmfulCategoryConfigInfoList", "json");
    }

    if (!$dara.isNull(tmpReq.promptAttackInfo)) {
      request.promptAttackInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.promptAttackInfo, "PromptAttackInfo", "json");
    }

    if (!$dara.isNull(tmpReq.promptAttackInfoList)) {
      request.promptAttackInfoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.promptAttackInfoList, "PromptAttackInfoList", "json");
    }

    if (!$dara.isNull(tmpReq.regularExpressList)) {
      request.regularExpressListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.regularExpressList, "RegularExpressList", "json");
    }

    if (!$dara.isNull(tmpReq.sensitiveConfigList)) {
      request.sensitiveConfigListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sensitiveConfigList, "SensitiveConfigList", "json");
    }

    if (!$dara.isNull(tmpReq.sensitiveTopicList)) {
      request.sensitiveTopicListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sensitiveTopicList, "SensitiveTopicList", "json");
    }

    if (!$dara.isNull(tmpReq.sensitiveWordList)) {
      request.sensitiveWordListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sensitiveWordList, "SensitiveWordList", "json");
    }

    if (!$dara.isNull(tmpReq.topicConfigInfoList)) {
      request.topicConfigInfoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.topicConfigInfoList, "TopicConfigInfoList", "json");
    }

    if (!$dara.isNull(tmpReq.wordGroupInfoList)) {
      request.wordGroupInfoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.wordGroupInfoList, "WordGroupInfoList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.contentSafeModelInstanceId)) {
      query["ContentSafeModelInstanceId"] = request.contentSafeModelInstanceId;
    }

    if (!$dara.isNull(request.enableSensitiveInputCheck)) {
      query["EnableSensitiveInputCheck"] = request.enableSensitiveInputCheck;
    }

    if (!$dara.isNull(request.enableSensitiveOutputCheck)) {
      query["EnableSensitiveOutputCheck"] = request.enableSensitiveOutputCheck;
    }

    if (!$dara.isNull(request.harmfulCategoryConfigInfoListShrink)) {
      query["HarmfulCategoryConfigInfoList"] = request.harmfulCategoryConfigInfoListShrink;
    }

    if (!$dara.isNull(request.inputSafeAnswer)) {
      query["InputSafeAnswer"] = request.inputSafeAnswer;
    }

    if (!$dara.isNull(request.inputSafeAnswerSwitch)) {
      query["InputSafeAnswerSwitch"] = request.inputSafeAnswerSwitch;
    }

    if (!$dara.isNull(request.isSidecarPolicy)) {
      query["IsSidecarPolicy"] = request.isSidecarPolicy;
    }

    if (!$dara.isNull(request.outputSafeAnswer)) {
      query["OutputSafeAnswer"] = request.outputSafeAnswer;
    }

    if (!$dara.isNull(request.outputSafeAnswerSwitch)) {
      query["OutputSafeAnswerSwitch"] = request.outputSafeAnswerSwitch;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.promptAttackInfoShrink)) {
      query["PromptAttackInfo"] = request.promptAttackInfoShrink;
    }

    if (!$dara.isNull(request.promptAttackInfoListShrink)) {
      query["PromptAttackInfoList"] = request.promptAttackInfoListShrink;
    }

    if (!$dara.isNull(request.promptAttackModelInstanceId)) {
      query["PromptAttackModelInstanceId"] = request.promptAttackModelInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regularExpressListShrink)) {
      query["RegularExpressList"] = request.regularExpressListShrink;
    }

    if (!$dara.isNull(request.sceneType)) {
      query["SceneType"] = request.sceneType;
    }

    if (!$dara.isNull(request.sensitiveConfigListShrink)) {
      query["SensitiveConfigList"] = request.sensitiveConfigListShrink;
    }

    if (!$dara.isNull(request.sensitiveTopicListShrink)) {
      query["SensitiveTopicList"] = request.sensitiveTopicListShrink;
    }

    if (!$dara.isNull(request.sensitiveTopicModelInstanceId)) {
      query["SensitiveTopicModelInstanceId"] = request.sensitiveTopicModelInstanceId;
    }

    if (!$dara.isNull(request.sensitiveWordListShrink)) {
      query["SensitiveWordList"] = request.sensitiveWordListShrink;
    }

    if (!$dara.isNull(request.topicConfigInfoListShrink)) {
      query["TopicConfigInfoList"] = request.topicConfigInfoListShrink;
    }

    if (!$dara.isNull(request.wordGroupInfoListShrink)) {
      query["WordGroupInfoList"] = request.wordGroupInfoListShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePolicy",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreatePolicyResponse({}));
  }

  /**
   * CreatePolicy
   * 
   * @param request - CreatePolicyRequest
   * @returns CreatePolicyResponse
   */
  async createPolicy(request: $_model.CreatePolicyRequest): Promise<$_model.CreatePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPolicyWithOptions(request, runtime);
  }

  /**
   * CreateTopic
   * 
   * @param tmpReq - CreateTopicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTopicResponse
   */
  async createTopicWithOptions(tmpReq: $_model.CreateTopicRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTopicResponse> {
    tmpReq.validate();
    let request = new $_model.CreateTopicShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bodyData)) {
      request.bodyDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bodyData, "BodyData", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.topicDefinition)) {
      query["TopicDefinition"] = request.topicDefinition;
    }

    if (!$dara.isNull(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyDataShrink)) {
      body["BodyData"] = request.bodyDataShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTopic",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTopicResponse>(await this.callApi(params, req, runtime), new $_model.CreateTopicResponse({}));
  }

  /**
   * CreateTopic
   * 
   * @param request - CreateTopicRequest
   * @returns CreateTopicResponse
   */
  async createTopic(request: $_model.CreateTopicRequest): Promise<$_model.CreateTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTopicWithOptions(request, runtime);
  }

  /**
   * CreateWordGroup
   * 
   * @param tmpReq - CreateWordGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWordGroupResponse
   */
  async createWordGroupWithOptions(tmpReq: $_model.CreateWordGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWordGroupResponse> {
    tmpReq.validate();
    let request = new $_model.CreateWordGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bodyData)) {
      request.bodyDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bodyData, "BodyData", "json");
    }

    let query = { };
    if (!$dara.isNull(request.commit)) {
      query["Commit"] = request.commit;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyDataShrink)) {
      body["BodyData"] = request.bodyDataShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWordGroup",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWordGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateWordGroupResponse({}));
  }

  /**
   * CreateWordGroup
   * 
   * @param request - CreateWordGroupRequest
   * @returns CreateWordGroupResponse
   */
  async createWordGroup(request: $_model.CreateWordGroupRequest): Promise<$_model.CreateWordGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWordGroupWithOptions(request, runtime);
  }

  /**
   * DeleteModelInstance
   * 
   * @param tmpReq - DeleteModelInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModelInstanceResponse
   */
  async deleteModelInstanceWithOptions(tmpReq: $_model.DeleteModelInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteModelInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteModelInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.modelInstanceIdList)) {
      request.modelInstanceIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.modelInstanceIdList, "ModelInstanceIdList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.modelInstanceIdListShrink)) {
      query["ModelInstanceIdList"] = request.modelInstanceIdListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteModelInstance",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteModelInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteModelInstanceResponse({}));
  }

  /**
   * DeleteModelInstance
   * 
   * @param request - DeleteModelInstanceRequest
   * @returns DeleteModelInstanceResponse
   */
  async deleteModelInstance(request: $_model.DeleteModelInstanceRequest): Promise<$_model.DeleteModelInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteModelInstanceWithOptions(request, runtime);
  }

  /**
   * DeletePolicy
   * 
   * @param tmpReq - DeletePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyResponse
   */
  async deletePolicyWithOptions(tmpReq: $_model.DeletePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePolicyResponse> {
    tmpReq.validate();
    let request = new $_model.DeletePolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.policyIdList)) {
      request.policyIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.policyIdList, "PolicyIdList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.policyIdListShrink)) {
      query["PolicyIdList"] = request.policyIdListShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePolicy",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeletePolicyResponse({}));
  }

  /**
   * DeletePolicy
   * 
   * @param request - DeletePolicyRequest
   * @returns DeletePolicyResponse
   */
  async deletePolicy(request: $_model.DeletePolicyRequest): Promise<$_model.DeletePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePolicyWithOptions(request, runtime);
  }

  /**
   * DeleteTopic
   * 
   * @param tmpReq - DeleteTopicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTopicResponse
   */
  async deleteTopicWithOptions(tmpReq: $_model.DeleteTopicRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTopicResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteTopicShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.topicIdList)) {
      request.topicIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.topicIdList, "TopicIdList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.topicIdListShrink)) {
      query["TopicIdList"] = request.topicIdListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTopic",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTopicResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTopicResponse({}));
  }

  /**
   * DeleteTopic
   * 
   * @param request - DeleteTopicRequest
   * @returns DeleteTopicResponse
   */
  async deleteTopic(request: $_model.DeleteTopicRequest): Promise<$_model.DeleteTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTopicWithOptions(request, runtime);
  }

  /**
   * DeleteWordGroup
   * 
   * @param tmpReq - DeleteWordGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWordGroupResponse
   */
  async deleteWordGroupWithOptions(tmpReq: $_model.DeleteWordGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWordGroupResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteWordGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.groupIdList)) {
      request.groupIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIdList, "GroupIdList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.groupIdListShrink)) {
      query["GroupIdList"] = request.groupIdListShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWordGroup",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWordGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWordGroupResponse({}));
  }

  /**
   * DeleteWordGroup
   * 
   * @param request - DeleteWordGroupRequest
   * @returns DeleteWordGroupResponse
   */
  async deleteWordGroup(request: $_model.DeleteWordGroupRequest): Promise<$_model.DeleteWordGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWordGroupWithOptions(request, runtime);
  }

  /**
   * GetContentDetectResult
   * 
   * @param request - GetContentDetectResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetContentDetectResultResponse
   */
  async getContentDetectResultWithOptions(request: $_model.GetContentDetectResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetContentDetectResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetContentDetectResult",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetContentDetectResultResponse>(await this.callApi(params, req, runtime), new $_model.GetContentDetectResultResponse({}));
  }

  /**
   * GetContentDetectResult
   * 
   * @param request - GetContentDetectResultRequest
   * @returns GetContentDetectResultResponse
   */
  async getContentDetectResult(request: $_model.GetContentDetectResultRequest): Promise<$_model.GetContentDetectResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getContentDetectResultWithOptions(request, runtime);
  }

  /**
   * GetModelInputContentDetectResult
   * 
   * @param request - GetModelInputContentDetectResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModelInputContentDetectResultResponse
   */
  async getModelInputContentDetectResultWithOptions(request: $_model.GetModelInputContentDetectResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetModelInputContentDetectResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetModelInputContentDetectResult",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetModelInputContentDetectResultResponse>(await this.callApi(params, req, runtime), new $_model.GetModelInputContentDetectResultResponse({}));
  }

  /**
   * GetModelInputContentDetectResult
   * 
   * @param request - GetModelInputContentDetectResultRequest
   * @returns GetModelInputContentDetectResultResponse
   */
  async getModelInputContentDetectResult(request: $_model.GetModelInputContentDetectResultRequest): Promise<$_model.GetModelInputContentDetectResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getModelInputContentDetectResultWithOptions(request, runtime);
  }

  /**
   * GetModelInstanceInfo
   * 
   * @param request - GetModelInstanceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModelInstanceInfoResponse
   */
  async getModelInstanceInfoWithOptions(request: $_model.GetModelInstanceInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetModelInstanceInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.modelInstanceId)) {
      query["ModelInstanceId"] = request.modelInstanceId;
    }

    if (!$dara.isNull(request.sceneType)) {
      query["SceneType"] = request.sceneType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetModelInstanceInfo",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetModelInstanceInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetModelInstanceInfoResponse({}));
  }

  /**
   * GetModelInstanceInfo
   * 
   * @param request - GetModelInstanceInfoRequest
   * @returns GetModelInstanceInfoResponse
   */
  async getModelInstanceInfo(request: $_model.GetModelInstanceInfoRequest): Promise<$_model.GetModelInstanceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getModelInstanceInfoWithOptions(request, runtime);
  }

  /**
   * GetModelOutputContentDetectResult
   * 
   * @param request - GetModelOutputContentDetectResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModelOutputContentDetectResultResponse
   */
  async getModelOutputContentDetectResultWithOptions(request: $_model.GetModelOutputContentDetectResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetModelOutputContentDetectResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetModelOutputContentDetectResult",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetModelOutputContentDetectResultResponse>(await this.callApi(params, req, runtime), new $_model.GetModelOutputContentDetectResultResponse({}));
  }

  /**
   * GetModelOutputContentDetectResult
   * 
   * @param request - GetModelOutputContentDetectResultRequest
   * @returns GetModelOutputContentDetectResultResponse
   */
  async getModelOutputContentDetectResult(request: $_model.GetModelOutputContentDetectResultRequest): Promise<$_model.GetModelOutputContentDetectResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getModelOutputContentDetectResultWithOptions(request, runtime);
  }

  /**
   * GetPolicyDefaultOptions
   * 
   * @param request - GetPolicyDefaultOptionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPolicyDefaultOptionsResponse
   */
  async getPolicyDefaultOptionsWithOptions(request: $_model.GetPolicyDefaultOptionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPolicyDefaultOptionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPolicyDefaultOptions",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPolicyDefaultOptionsResponse>(await this.callApi(params, req, runtime), new $_model.GetPolicyDefaultOptionsResponse({}));
  }

  /**
   * GetPolicyDefaultOptions
   * 
   * @param request - GetPolicyDefaultOptionsRequest
   * @returns GetPolicyDefaultOptionsResponse
   */
  async getPolicyDefaultOptions(request: $_model.GetPolicyDefaultOptionsRequest): Promise<$_model.GetPolicyDefaultOptionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPolicyDefaultOptionsWithOptions(request, runtime);
  }

  /**
   * GetPolicyInfo
   * 
   * @param request - GetPolicyInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPolicyInfoResponse
   */
  async getPolicyInfoWithOptions(request: $_model.GetPolicyInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPolicyInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPolicyInfo",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPolicyInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetPolicyInfoResponse({}));
  }

  /**
   * GetPolicyInfo
   * 
   * @param request - GetPolicyInfoRequest
   * @returns GetPolicyInfoResponse
   */
  async getPolicyInfo(request: $_model.GetPolicyInfoRequest): Promise<$_model.GetPolicyInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPolicyInfoWithOptions(request, runtime);
  }

  /**
   * GetTopic
   * 
   * @param request - GetTopicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTopicResponse
   */
  async getTopicWithOptions(request: $_model.GetTopicRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTopicResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.topicId)) {
      query["TopicId"] = request.topicId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTopic",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTopicResponse>(await this.callApi(params, req, runtime), new $_model.GetTopicResponse({}));
  }

  /**
   * GetTopic
   * 
   * @param request - GetTopicRequest
   * @returns GetTopicResponse
   */
  async getTopic(request: $_model.GetTopicRequest): Promise<$_model.GetTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTopicWithOptions(request, runtime);
  }

  /**
   * GetWordGroup
   * 
   * @param request - GetWordGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWordGroupResponse
   */
  async getWordGroupWithOptions(request: $_model.GetWordGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWordGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWordGroup",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWordGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetWordGroupResponse({}));
  }

  /**
   * GetWordGroup
   * 
   * @param request - GetWordGroupRequest
   * @returns GetWordGroupResponse
   */
  async getWordGroup(request: $_model.GetWordGroupRequest): Promise<$_model.GetWordGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWordGroupWithOptions(request, runtime);
  }

  /**
   * ListModelCategory
   * 
   * @param request - ListModelCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModelCategoryResponse
   */
  async listModelCategoryWithOptions(request: $_model.ListModelCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListModelCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contentSafeImageSupported)) {
      query["ContentSafeImageSupported"] = request.contentSafeImageSupported;
    }

    if (!$dara.isNull(request.contentSafeTextSupported)) {
      query["ContentSafeTextSupported"] = request.contentSafeTextSupported;
    }

    if (!$dara.isNull(request.modelCategoryName)) {
      query["ModelCategoryName"] = request.modelCategoryName;
    }

    if (!$dara.isNull(request.modelSource)) {
      query["ModelSource"] = request.modelSource;
    }

    if (!$dara.isNull(request.promptAttackTextSupported)) {
      query["PromptAttackTextSupported"] = request.promptAttackTextSupported;
    }

    if (!$dara.isNull(request.sensitiveTopicTextSupported)) {
      query["SensitiveTopicTextSupported"] = request.sensitiveTopicTextSupported;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListModelCategory",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListModelCategoryResponse>(await this.callApi(params, req, runtime), new $_model.ListModelCategoryResponse({}));
  }

  /**
   * ListModelCategory
   * 
   * @param request - ListModelCategoryRequest
   * @returns ListModelCategoryResponse
   */
  async listModelCategory(request: $_model.ListModelCategoryRequest): Promise<$_model.ListModelCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listModelCategoryWithOptions(request, runtime);
  }

  /**
   * ListModelInstance
   * 
   * @param request - ListModelInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModelInstanceResponse
   */
  async listModelInstanceWithOptions(request: $_model.ListModelInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListModelInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.easServiceName)) {
      query["EasServiceName"] = request.easServiceName;
    }

    if (!$dara.isNull(request.isSidecarPolicy)) {
      query["IsSidecarPolicy"] = request.isSidecarPolicy;
    }

    if (!$dara.isNull(request.isSupportContentSafe)) {
      query["IsSupportContentSafe"] = request.isSupportContentSafe;
    }

    if (!$dara.isNull(request.isSupportPromptAttack)) {
      query["IsSupportPromptAttack"] = request.isSupportPromptAttack;
    }

    if (!$dara.isNull(request.isSupportSensitiveTopic)) {
      query["IsSupportSensitiveTopic"] = request.isSupportSensitiveTopic;
    }

    if (!$dara.isNull(request.modelSource)) {
      query["ModelSource"] = request.modelSource;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListModelInstance",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListModelInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ListModelInstanceResponse({}));
  }

  /**
   * ListModelInstance
   * 
   * @param request - ListModelInstanceRequest
   * @returns ListModelInstanceResponse
   */
  async listModelInstance(request: $_model.ListModelInstanceRequest): Promise<$_model.ListModelInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listModelInstanceWithOptions(request, runtime);
  }

  /**
   * ListPolicy
   * 
   * @param request - ListPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPolicyResponse
   */
  async listPolicyWithOptions(request: $_model.ListPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.isSidecarPolicy)) {
      query["IsSidecarPolicy"] = request.isSidecarPolicy;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.policyIdentifier)) {
      query["PolicyIdentifier"] = request.policyIdentifier;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sceneType)) {
      query["SceneType"] = request.sceneType;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPolicy",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ListPolicyResponse({}));
  }

  /**
   * ListPolicy
   * 
   * @param request - ListPolicyRequest
   * @returns ListPolicyResponse
   */
  async listPolicy(request: $_model.ListPolicyRequest): Promise<$_model.ListPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPolicyWithOptions(request, runtime);
  }

  /**
   * ListTopic
   * 
   * @param request - ListTopicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTopicResponse
   */
  async listTopicWithOptions(request: $_model.ListTopicRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTopicResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTopic",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTopicResponse>(await this.callApi(params, req, runtime), new $_model.ListTopicResponse({}));
  }

  /**
   * ListTopic
   * 
   * @param request - ListTopicRequest
   * @returns ListTopicResponse
   */
  async listTopic(request: $_model.ListTopicRequest): Promise<$_model.ListTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTopicWithOptions(request, runtime);
  }

  /**
   * ListWordGroup
   * 
   * @param request - ListWordGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWordGroupResponse
   */
  async listWordGroupWithOptions(request: $_model.ListWordGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWordGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWordGroup",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWordGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListWordGroupResponse({}));
  }

  /**
   * ListWordGroup
   * 
   * @param request - ListWordGroupRequest
   * @returns ListWordGroupResponse
   */
  async listWordGroup(request: $_model.ListWordGroupRequest): Promise<$_model.ListWordGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWordGroupWithOptions(request, runtime);
  }

  /**
   * ModelInputContentAsyncDetect
   * 
   * @param tmpReq - ModelInputContentAsyncDetectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelInputContentAsyncDetectResponse
   */
  async modelInputContentAsyncDetectWithOptions(tmpReq: $_model.ModelInputContentAsyncDetectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModelInputContentAsyncDetectResponse> {
    tmpReq.validate();
    let request = new $_model.ModelInputContentAsyncDetectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bodyData)) {
      request.bodyDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bodyData, "BodyData", "json");
    }

    let query = { };
    if (!$dara.isNull(request.policyIdentifier)) {
      query["PolicyIdentifier"] = request.policyIdentifier;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sceneName)) {
      query["SceneName"] = request.sceneName;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyDataShrink)) {
      body["BodyData"] = request.bodyDataShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelInputContentAsyncDetect",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelInputContentAsyncDetectResponse>(await this.callApi(params, req, runtime), new $_model.ModelInputContentAsyncDetectResponse({}));
  }

  /**
   * ModelInputContentAsyncDetect
   * 
   * @param request - ModelInputContentAsyncDetectRequest
   * @returns ModelInputContentAsyncDetectResponse
   */
  async modelInputContentAsyncDetect(request: $_model.ModelInputContentAsyncDetectRequest): Promise<$_model.ModelInputContentAsyncDetectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modelInputContentAsyncDetectWithOptions(request, runtime);
  }

  /**
   * ModelInputContentSyncDetect
   * 
   * @param tmpReq - ModelInputContentSyncDetectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelInputContentSyncDetectResponse
   */
  async modelInputContentSyncDetectWithOptions(tmpReq: $_model.ModelInputContentSyncDetectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModelInputContentSyncDetectResponse> {
    tmpReq.validate();
    let request = new $_model.ModelInputContentSyncDetectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bodyData)) {
      request.bodyDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bodyData, "BodyData", "json");
    }

    let query = { };
    if (!$dara.isNull(request.policyIdentifier)) {
      query["PolicyIdentifier"] = request.policyIdentifier;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sceneName)) {
      query["SceneName"] = request.sceneName;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyDataShrink)) {
      body["BodyData"] = request.bodyDataShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelInputContentSyncDetect",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelInputContentSyncDetectResponse>(await this.callApi(params, req, runtime), new $_model.ModelInputContentSyncDetectResponse({}));
  }

  /**
   * ModelInputContentSyncDetect
   * 
   * @param request - ModelInputContentSyncDetectRequest
   * @returns ModelInputContentSyncDetectResponse
   */
  async modelInputContentSyncDetect(request: $_model.ModelInputContentSyncDetectRequest): Promise<$_model.ModelInputContentSyncDetectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modelInputContentSyncDetectWithOptions(request, runtime);
  }

  /**
   * ModelOutputContentAsyncDetect
   * 
   * @param tmpReq - ModelOutputContentAsyncDetectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelOutputContentAsyncDetectResponse
   */
  async modelOutputContentAsyncDetectWithOptions(tmpReq: $_model.ModelOutputContentAsyncDetectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModelOutputContentAsyncDetectResponse> {
    tmpReq.validate();
    let request = new $_model.ModelOutputContentAsyncDetectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bodyData)) {
      request.bodyDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bodyData, "BodyData", "json");
    }

    let query = { };
    if (!$dara.isNull(request.policyIdentifier)) {
      query["PolicyIdentifier"] = request.policyIdentifier;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sceneName)) {
      query["SceneName"] = request.sceneName;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyDataShrink)) {
      body["BodyData"] = request.bodyDataShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelOutputContentAsyncDetect",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelOutputContentAsyncDetectResponse>(await this.callApi(params, req, runtime), new $_model.ModelOutputContentAsyncDetectResponse({}));
  }

  /**
   * ModelOutputContentAsyncDetect
   * 
   * @param request - ModelOutputContentAsyncDetectRequest
   * @returns ModelOutputContentAsyncDetectResponse
   */
  async modelOutputContentAsyncDetect(request: $_model.ModelOutputContentAsyncDetectRequest): Promise<$_model.ModelOutputContentAsyncDetectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modelOutputContentAsyncDetectWithOptions(request, runtime);
  }

  /**
   * ModelOutputContentSyncDetect
   * 
   * @param tmpReq - ModelOutputContentSyncDetectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModelOutputContentSyncDetectResponse
   */
  async modelOutputContentSyncDetectWithOptions(tmpReq: $_model.ModelOutputContentSyncDetectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModelOutputContentSyncDetectResponse> {
    tmpReq.validate();
    let request = new $_model.ModelOutputContentSyncDetectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bodyData)) {
      request.bodyDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bodyData, "BodyData", "json");
    }

    let query = { };
    if (!$dara.isNull(request.policyIdentifier)) {
      query["PolicyIdentifier"] = request.policyIdentifier;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sceneName)) {
      query["SceneName"] = request.sceneName;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyDataShrink)) {
      body["BodyData"] = request.bodyDataShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModelOutputContentSyncDetect",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModelOutputContentSyncDetectResponse>(await this.callApi(params, req, runtime), new $_model.ModelOutputContentSyncDetectResponse({}));
  }

  /**
   * ModelOutputContentSyncDetect
   * 
   * @param request - ModelOutputContentSyncDetectRequest
   * @returns ModelOutputContentSyncDetectResponse
   */
  async modelOutputContentSyncDetect(request: $_model.ModelOutputContentSyncDetectRequest): Promise<$_model.ModelOutputContentSyncDetectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modelOutputContentSyncDetectWithOptions(request, runtime);
  }

  /**
   * 注册RAI账号
   * 
   * @param request - RegisterAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterAccountResponse
   */
  async registerAccountWithOptions(request: $_model.RegisterAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RegisterAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.memo)) {
      query["Memo"] = request.memo;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterAccount",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RegisterAccountResponse>(await this.callApi(params, req, runtime), new $_model.RegisterAccountResponse({}));
  }

  /**
   * 注册RAI账号
   * 
   * @param request - RegisterAccountRequest
   * @returns RegisterAccountResponse
   */
  async registerAccount(request: $_model.RegisterAccountRequest): Promise<$_model.RegisterAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerAccountWithOptions(request, runtime);
  }

  /**
   * UpdateModelInstance
   * 
   * @param request - UpdateModelInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateModelInstanceResponse
   */
  async updateModelInstanceWithOptions(request: $_model.UpdateModelInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateModelInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.easServiceId)) {
      query["EasServiceId"] = request.easServiceId;
    }

    if (!$dara.isNull(request.easServiceName)) {
      query["EasServiceName"] = request.easServiceName;
    }

    if (!$dara.isNull(request.modelCallName)) {
      query["ModelCallName"] = request.modelCallName;
    }

    if (!$dara.isNull(request.modelCategoryId)) {
      query["ModelCategoryId"] = request.modelCategoryId;
    }

    if (!$dara.isNull(request.modelInstanceId)) {
      query["ModelInstanceId"] = request.modelInstanceId;
    }

    if (!$dara.isNull(request.modelToken)) {
      query["ModelToken"] = request.modelToken;
    }

    if (!$dara.isNull(request.modelUrl)) {
      query["ModelUrl"] = request.modelUrl;
    }

    if (!$dara.isNull(request.modelVpcUrl)) {
      query["ModelVpcUrl"] = request.modelVpcUrl;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateModelInstance",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateModelInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateModelInstanceResponse({}));
  }

  /**
   * UpdateModelInstance
   * 
   * @param request - UpdateModelInstanceRequest
   * @returns UpdateModelInstanceResponse
   */
  async updateModelInstance(request: $_model.UpdateModelInstanceRequest): Promise<$_model.UpdateModelInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateModelInstanceWithOptions(request, runtime);
  }

  /**
   * UpdatePolicy
   * 
   * @param tmpReq - UpdatePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePolicyResponse
   */
  async updatePolicyWithOptions(tmpReq: $_model.UpdatePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePolicyResponse> {
    tmpReq.validate();
    let request = new $_model.UpdatePolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.harmfulCategoryConfigInfoList)) {
      request.harmfulCategoryConfigInfoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.harmfulCategoryConfigInfoList, "HarmfulCategoryConfigInfoList", "json");
    }

    if (!$dara.isNull(tmpReq.promptAttackInfo)) {
      request.promptAttackInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.promptAttackInfo, "PromptAttackInfo", "json");
    }

    if (!$dara.isNull(tmpReq.promptAttackInfoList)) {
      request.promptAttackInfoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.promptAttackInfoList, "PromptAttackInfoList", "json");
    }

    if (!$dara.isNull(tmpReq.regularExpressList)) {
      request.regularExpressListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.regularExpressList, "RegularExpressList", "json");
    }

    if (!$dara.isNull(tmpReq.sensitiveConfigList)) {
      request.sensitiveConfigListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sensitiveConfigList, "SensitiveConfigList", "json");
    }

    if (!$dara.isNull(tmpReq.sensitiveTopicList)) {
      request.sensitiveTopicListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sensitiveTopicList, "SensitiveTopicList", "json");
    }

    if (!$dara.isNull(tmpReq.sensitiveWordList)) {
      request.sensitiveWordListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sensitiveWordList, "SensitiveWordList", "json");
    }

    if (!$dara.isNull(tmpReq.topicConfigInfoList)) {
      request.topicConfigInfoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.topicConfigInfoList, "TopicConfigInfoList", "json");
    }

    if (!$dara.isNull(tmpReq.wordGroupInfoList)) {
      request.wordGroupInfoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.wordGroupInfoList, "WordGroupInfoList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.contentSafeModelInstanceId)) {
      query["ContentSafeModelInstanceId"] = request.contentSafeModelInstanceId;
    }

    if (!$dara.isNull(request.enableSensitiveInputCheck)) {
      query["EnableSensitiveInputCheck"] = request.enableSensitiveInputCheck;
    }

    if (!$dara.isNull(request.enableSensitiveOutputCheck)) {
      query["EnableSensitiveOutputCheck"] = request.enableSensitiveOutputCheck;
    }

    if (!$dara.isNull(request.harmfulCategoryConfigInfoListShrink)) {
      query["HarmfulCategoryConfigInfoList"] = request.harmfulCategoryConfigInfoListShrink;
    }

    if (!$dara.isNull(request.inputSafeAnswer)) {
      query["InputSafeAnswer"] = request.inputSafeAnswer;
    }

    if (!$dara.isNull(request.inputSafeAnswerSwitch)) {
      query["InputSafeAnswerSwitch"] = request.inputSafeAnswerSwitch;
    }

    if (!$dara.isNull(request.isSidecarPolicy)) {
      query["IsSidecarPolicy"] = request.isSidecarPolicy;
    }

    if (!$dara.isNull(request.outputSafeAnswer)) {
      query["OutputSafeAnswer"] = request.outputSafeAnswer;
    }

    if (!$dara.isNull(request.outputSafeAnswerSwitch)) {
      query["OutputSafeAnswerSwitch"] = request.outputSafeAnswerSwitch;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.promptAttackInfoShrink)) {
      query["PromptAttackInfo"] = request.promptAttackInfoShrink;
    }

    if (!$dara.isNull(request.promptAttackInfoListShrink)) {
      query["PromptAttackInfoList"] = request.promptAttackInfoListShrink;
    }

    if (!$dara.isNull(request.promptAttackModelInstanceId)) {
      query["PromptAttackModelInstanceId"] = request.promptAttackModelInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regularExpressListShrink)) {
      query["RegularExpressList"] = request.regularExpressListShrink;
    }

    if (!$dara.isNull(request.sceneType)) {
      query["SceneType"] = request.sceneType;
    }

    if (!$dara.isNull(request.sensitiveConfigListShrink)) {
      query["SensitiveConfigList"] = request.sensitiveConfigListShrink;
    }

    if (!$dara.isNull(request.sensitiveTopicListShrink)) {
      query["SensitiveTopicList"] = request.sensitiveTopicListShrink;
    }

    if (!$dara.isNull(request.sensitiveTopicModelInstanceId)) {
      query["SensitiveTopicModelInstanceId"] = request.sensitiveTopicModelInstanceId;
    }

    if (!$dara.isNull(request.sensitiveWordListShrink)) {
      query["SensitiveWordList"] = request.sensitiveWordListShrink;
    }

    if (!$dara.isNull(request.topicConfigInfoListShrink)) {
      query["TopicConfigInfoList"] = request.topicConfigInfoListShrink;
    }

    if (!$dara.isNull(request.wordGroupInfoListShrink)) {
      query["WordGroupInfoList"] = request.wordGroupInfoListShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePolicy",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePolicyResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePolicyResponse({}));
  }

  /**
   * UpdatePolicy
   * 
   * @param request - UpdatePolicyRequest
   * @returns UpdatePolicyResponse
   */
  async updatePolicy(request: $_model.UpdatePolicyRequest): Promise<$_model.UpdatePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePolicyWithOptions(request, runtime);
  }

  /**
   * UpdateTopic
   * 
   * @param tmpReq - UpdateTopicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTopicResponse
   */
  async updateTopicWithOptions(tmpReq: $_model.UpdateTopicRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTopicResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateTopicShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bodyData)) {
      request.bodyDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bodyData, "BodyData", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.topicDefinition)) {
      query["TopicDefinition"] = request.topicDefinition;
    }

    if (!$dara.isNull(request.topicId)) {
      query["TopicId"] = request.topicId;
    }

    if (!$dara.isNull(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyDataShrink)) {
      body["BodyData"] = request.bodyDataShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTopic",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTopicResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTopicResponse({}));
  }

  /**
   * UpdateTopic
   * 
   * @param request - UpdateTopicRequest
   * @returns UpdateTopicResponse
   */
  async updateTopic(request: $_model.UpdateTopicRequest): Promise<$_model.UpdateTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTopicWithOptions(request, runtime);
  }

  /**
   * UpdateWordGroup
   * 
   * @param tmpReq - UpdateWordGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWordGroupResponse
   */
  async updateWordGroupWithOptions(tmpReq: $_model.UpdateWordGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWordGroupResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateWordGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bodyData)) {
      request.bodyDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bodyData, "BodyData", "json");
    }

    let query = { };
    if (!$dara.isNull(request.commit)) {
      query["Commit"] = request.commit;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.wordInfoListModified)) {
      query["WordInfoListModified"] = request.wordInfoListModified;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyDataShrink)) {
      body["BodyData"] = request.bodyDataShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWordGroup",
      version: "2024-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWordGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWordGroupResponse({}));
  }

  /**
   * UpdateWordGroup
   * 
   * @param request - UpdateWordGroupRequest
   * @returns UpdateWordGroupResponse
   */
  async updateWordGroup(request: $_model.UpdateWordGroupRequest): Promise<$_model.UpdateWordGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWordGroupWithOptions(request, runtime);
  }

}
