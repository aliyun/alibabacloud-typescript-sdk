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
    this._endpoint = this.getEndpoint("devops", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 添加组成员
   * 
   * @param request - AddGroupMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddGroupMemberResponse
   */
  async addGroupMemberWithOptions(groupId: string, request: $_model.AddGroupMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddGroupMemberResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessLevel)) {
      body["accessLevel"] = request.accessLevel;
    }

    if (!$dara.isNull(request.aliyunPks)) {
      body["aliyunPks"] = request.aliyunPks;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddGroupMember",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/groups/${$dara.URL.percentEncode(groupId)}/members/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddGroupMemberResponse>(await this.callApi(params, req, runtime), new $_model.AddGroupMemberResponse({}));
  }

  /**
   * 添加组成员
   * 
   * @param request - AddGroupMemberRequest
   * @returns AddGroupMemberResponse
   */
  async addGroupMember(groupId: string, request: $_model.AddGroupMemberRequest): Promise<$_model.AddGroupMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addGroupMemberWithOptions(groupId, request, headers, runtime);
  }

  /**
   * 添加流水线关联
   * 
   * @param request - AddPipelineRelationsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddPipelineRelationsResponse
   */
  async addPipelineRelationsWithOptions(organizationId: string, pipelineId: string, request: $_model.AddPipelineRelationsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddPipelineRelationsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.relObjectIds)) {
      query["relObjectIds"] = request.relObjectIds;
    }

    if (!$dara.isNull(request.relObjectType)) {
      query["relObjectType"] = request.relObjectType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddPipelineRelations",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/${$dara.URL.percentEncode(pipelineId)}/pipelineRelations`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddPipelineRelationsResponse>(await this.callApi(params, req, runtime), new $_model.AddPipelineRelationsResponse({}));
  }

  /**
   * 添加流水线关联
   * 
   * @param request - AddPipelineRelationsRequest
   * @returns AddPipelineRelationsResponse
   */
  async addPipelineRelations(organizationId: string, pipelineId: string, request: $_model.AddPipelineRelationsRequest): Promise<$_model.AddPipelineRelationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addPipelineRelationsWithOptions(organizationId, pipelineId, request, headers, runtime);
  }

  /**
   * 添加代码库成员
   * 
   * @param request - AddRepositoryMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddRepositoryMemberResponse
   */
  async addRepositoryMemberWithOptions(repositoryId: string, request: $_model.AddRepositoryMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddRepositoryMemberResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessLevel)) {
      body["accessLevel"] = request.accessLevel;
    }

    if (!$dara.isNull(request.aliyunPks)) {
      body["aliyunPks"] = request.aliyunPks;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddRepositoryMember",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/members`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddRepositoryMemberResponse>(await this.callApi(params, req, runtime), new $_model.AddRepositoryMemberResponse({}));
  }

  /**
   * 添加代码库成员
   * 
   * @param request - AddRepositoryMemberRequest
   * @returns AddRepositoryMemberResponse
   */
  async addRepositoryMember(repositoryId: string, request: $_model.AddRepositoryMemberRequest): Promise<$_model.AddRepositoryMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addRepositoryMemberWithOptions(repositoryId, request, headers, runtime);
  }

  /**
   * 添加代码库Webhook
   * 
   * @param request - AddWebhookRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddWebhookResponse
   */
  async addWebhookWithOptions(repositoryId: string, request: $_model.AddWebhookRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddWebhookResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.enableSslVerification)) {
      body["enableSslVerification"] = request.enableSslVerification;
    }

    if (!$dara.isNull(request.mergeRequestsEvents)) {
      body["mergeRequestsEvents"] = request.mergeRequestsEvents;
    }

    if (!$dara.isNull(request.noteEvents)) {
      body["noteEvents"] = request.noteEvents;
    }

    if (!$dara.isNull(request.pushEvents)) {
      body["pushEvents"] = request.pushEvents;
    }

    if (!$dara.isNull(request.secretToken)) {
      body["secretToken"] = request.secretToken;
    }

    if (!$dara.isNull(request.tagPushEvents)) {
      body["tagPushEvents"] = request.tagPushEvents;
    }

    if (!$dara.isNull(request.url)) {
      body["url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddWebhook",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/webhooks/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddWebhookResponse>(await this.callApi(params, req, runtime), new $_model.AddWebhookResponse({}));
  }

  /**
   * 添加代码库Webhook
   * 
   * @param request - AddWebhookRequest
   * @returns AddWebhookResponse
   */
  async addWebhook(repositoryId: string, request: $_model.AddWebhookRequest): Promise<$_model.AddWebhookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addWebhookWithOptions(repositoryId, request, headers, runtime);
  }

  /**
   * 取消执行研发阶段流水线
   * 
   * @param request - CancelExecutionReleaseStageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelExecutionReleaseStageResponse
   */
  async cancelExecutionReleaseStageWithOptions(appName: string, releaseWorkflowSn: string, releaseStageSn: string, executionNumber: string, request: $_model.CancelExecutionReleaseStageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CancelExecutionReleaseStageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelExecutionReleaseStage",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/appstack/apps/${$dara.URL.percentEncode(appName)}/releaseWorkflows/${$dara.URL.percentEncode(releaseWorkflowSn)}/releaseStages/${$dara.URL.percentEncode(releaseStageSn)}/executions/${$dara.URL.percentEncode(executionNumber)}%3Acancel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelExecutionReleaseStageResponse>(await this.callApi(params, req, runtime), new $_model.CancelExecutionReleaseStageResponse({}));
  }

  /**
   * 取消执行研发阶段流水线
   * 
   * @param request - CancelExecutionReleaseStageRequest
   * @returns CancelExecutionReleaseStageResponse
   */
  async cancelExecutionReleaseStage(appName: string, releaseWorkflowSn: string, releaseStageSn: string, executionNumber: string, request: $_model.CancelExecutionReleaseStageRequest): Promise<$_model.CancelExecutionReleaseStageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelExecutionReleaseStageWithOptions(appName, releaseWorkflowSn, releaseStageSn, executionNumber, request, headers, runtime);
  }

  /**
   * 关闭代码评审
   * 
   * @param request - CloseMergeRequestRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseMergeRequestResponse
   */
  async closeMergeRequestWithOptions(repositoryId: string, localId: string, request: $_model.CloseMergeRequestRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CloseMergeRequestResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloseMergeRequest",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/${$dara.URL.percentEncode(repositoryId)}/merge_requests/${$dara.URL.percentEncode(localId)}/close`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloseMergeRequestResponse>(await this.callApi(params, req, runtime), new $_model.CloseMergeRequestResponse({}));
  }

  /**
   * 关闭代码评审
   * 
   * @param request - CloseMergeRequestRequest
   * @returns CloseMergeRequestResponse
   */
  async closeMergeRequest(repositoryId: string, localId: string, request: $_model.CloseMergeRequestRequest): Promise<$_model.CloseMergeRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.closeMergeRequestWithOptions(repositoryId, localId, request, headers, runtime);
  }

  /**
   * 添加应用成员
   * 
   * @param request - CreateAppMembersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppMembersResponse
   */
  async createAppMembersWithOptions(appName: string, request: $_model.CreateAppMembersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppMembersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.playerList)) {
      body["playerList"] = request.playerList;
    }

    if (!$dara.isNull(request.roleNames)) {
      body["roleNames"] = request.roleNames;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppMembers",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/appstack/apps/${$dara.URL.percentEncode(appName)}/members`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $dara.cast<$_model.CreateAppMembersResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppMembersResponse({}));
  }

  /**
   * 添加应用成员
   * 
   * @param request - CreateAppMembersRequest
   * @returns CreateAppMembersResponse
   */
  async createAppMembers(appName: string, request: $_model.CreateAppMembersRequest): Promise<$_model.CreateAppMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAppMembersWithOptions(appName, request, headers, runtime);
  }

  /**
   * 创建分支
   * 
   * @param request - CreateBranchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBranchResponse
   */
  async createBranchWithOptions(repositoryId: string, request: $_model.CreateBranchRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBranchResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.branchName)) {
      body["branchName"] = request.branchName;
    }

    if (!$dara.isNull(request.ref)) {
      body["ref"] = request.ref;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBranch",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/branches`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBranchResponse>(await this.callApi(params, req, runtime), new $_model.CreateBranchResponse({}));
  }

  /**
   * 创建分支
   * 
   * @param request - CreateBranchRequest
   * @returns CreateBranchResponse
   */
  async createBranch(repositoryId: string, request: $_model.CreateBranchRequest): Promise<$_model.CreateBranchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createBranchWithOptions(repositoryId, request, headers, runtime);
  }

  /**
   * 创建变更
   * 
   * @param request - CreateChangeRequestRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateChangeRequestResponse
   */
  async createChangeRequestWithOptions(appName: string, request: $_model.CreateChangeRequestRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateChangeRequestResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appCodeRepoSn)) {
      body["appCodeRepoSn"] = request.appCodeRepoSn;
    }

    if (!$dara.isNull(request.autoDeleteBranchWhenEnd)) {
      body["autoDeleteBranchWhenEnd"] = request.autoDeleteBranchWhenEnd;
    }

    if (!$dara.isNull(request.branchName)) {
      body["branchName"] = request.branchName;
    }

    if (!$dara.isNull(request.createBranch)) {
      body["createBranch"] = request.createBranch;
    }

    if (!$dara.isNull(request.ownerAccountId)) {
      body["ownerAccountId"] = request.ownerAccountId;
    }

    if (!$dara.isNull(request.ownerId)) {
      body["ownerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.title)) {
      body["title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateChangeRequest",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/appstack/apps/${$dara.URL.percentEncode(appName)}/changeRequests`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateChangeRequestResponse>(await this.callApi(params, req, runtime), new $_model.CreateChangeRequestResponse({}));
  }

  /**
   * 创建变更
   * 
   * @param request - CreateChangeRequestRequest
   * @returns CreateChangeRequestResponse
   */
  async createChangeRequest(appName: string, request: $_model.CreateChangeRequestRequest): Promise<$_model.CreateChangeRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createChangeRequestWithOptions(appName, request, headers, runtime);
  }

  /**
   * 添加检查运行记录
   * 
   * @param request - CreateCheckRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCheckRunResponse
   */
  async createCheckRunWithOptions(request: $_model.CreateCheckRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCheckRunResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.repositoryIdentity)) {
      query["repositoryIdentity"] = request.repositoryIdentity;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.annotations)) {
      body["annotations"] = request.annotations;
    }

    if (!$dara.isNull(request.completedAt)) {
      body["completedAt"] = request.completedAt;
    }

    if (!$dara.isNull(request.conclusion)) {
      body["conclusion"] = request.conclusion;
    }

    if (!$dara.isNull(request.detailsUrl)) {
      body["detailsUrl"] = request.detailsUrl;
    }

    if (!$dara.isNull(request.externalId)) {
      body["externalId"] = request.externalId;
    }

    if (!$dara.isNull(request.headSha)) {
      body["headSha"] = request.headSha;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.output)) {
      body["output"] = request.output;
    }

    if (!$dara.isNull(request.startedAt)) {
      body["startedAt"] = request.startedAt;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCheckRun",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/check_runs/create_check_run`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCheckRunResponse>(await this.callApi(params, req, runtime), new $_model.CreateCheckRunResponse({}));
  }

  /**
   * 添加检查运行记录
   * 
   * @param request - CreateCheckRunRequest
   * @returns CreateCheckRunResponse
   */
  async createCheckRun(request: $_model.CreateCheckRunRequest): Promise<$_model.CreateCheckRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCheckRunWithOptions(request, headers, runtime);
  }

  /**
   * 创建评论
   * 
   * @param request - CreateCommentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCommentResponse
   */
  async createCommentWithOptions(request: $_model.CreateCommentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCommentResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.localId)) {
      query["localId"] = request.localId;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.repositoryIdentity)) {
      query["repositoryIdentity"] = request.repositoryIdentity;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.commentType)) {
      body["commentType"] = request.commentType;
    }

    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.draft)) {
      body["draft"] = request.draft;
    }

    if (!$dara.isNull(request.filePath)) {
      body["filePath"] = request.filePath;
    }

    if (!$dara.isNull(request.fromPachSetBizId)) {
      body["fromPachSetBizId"] = request.fromPachSetBizId;
    }

    if (!$dara.isNull(request.lineNumber)) {
      body["lineNumber"] = request.lineNumber;
    }

    if (!$dara.isNull(request.parentCommentBizId)) {
      body["parentCommentBizId"] = request.parentCommentBizId;
    }

    if (!$dara.isNull(request.patchSetBizId)) {
      body["patchSetBizId"] = request.patchSetBizId;
    }

    if (!$dara.isNull(request.resolved)) {
      body["resolved"] = request.resolved;
    }

    if (!$dara.isNull(request.toPatchSetBizId)) {
      body["toPatchSetBizId"] = request.toPatchSetBizId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateComment",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/code_reviews/comments/create_comment`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCommentResponse>(await this.callApi(params, req, runtime), new $_model.CreateCommentResponse({}));
  }

  /**
   * 创建评论
   * 
   * @param request - CreateCommentRequest
   * @returns CreateCommentResponse
   */
  async createComment(request: $_model.CreateCommentRequest): Promise<$_model.CreateCommentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCommentWithOptions(request, headers, runtime);
  }

  /**
   * 创建提交状态记录
   * 
   * @param request - CreateCommitStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCommitStatusResponse
   */
  async createCommitStatusWithOptions(request: $_model.CreateCommitStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCommitStatusResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.repositoryIdentity)) {
      query["repositoryIdentity"] = request.repositoryIdentity;
    }

    if (!$dara.isNull(request.sha)) {
      query["sha"] = request.sha;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.context)) {
      body["context"] = request.context;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.state)) {
      body["state"] = request.state;
    }

    if (!$dara.isNull(request.targetUrl)) {
      body["targetUrl"] = request.targetUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCommitStatus",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/repository/commit_statuses/create_commit_status`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCommitStatusResponse>(await this.callApi(params, req, runtime), new $_model.CreateCommitStatusResponse({}));
  }

  /**
   * 创建提交状态记录
   * 
   * @param request - CreateCommitStatusRequest
   * @returns CreateCommitStatusResponse
   */
  async createCommitStatus(request: $_model.CreateCommitStatusRequest): Promise<$_model.CreateCommitStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCommitStatusWithOptions(request, headers, runtime);
  }

  /**
   * 单提交变更多个文件
   * 
   * @param request - CreateCommitWithMultipleFilesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCommitWithMultipleFilesResponse
   */
  async createCommitWithMultipleFilesWithOptions(request: $_model.CreateCommitWithMultipleFilesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCommitWithMultipleFilesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.repositoryIdentity)) {
      query["repositoryIdentity"] = request.repositoryIdentity;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.actions)) {
      body["actions"] = request.actions;
    }

    if (!$dara.isNull(request.branch)) {
      body["branch"] = request.branch;
    }

    if (!$dara.isNull(request.commitMessage)) {
      body["commitMessage"] = request.commitMessage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCommitWithMultipleFiles",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/repository/commits/files`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCommitWithMultipleFilesResponse>(await this.callApi(params, req, runtime), new $_model.CreateCommitWithMultipleFilesResponse({}));
  }

  /**
   * 单提交变更多个文件
   * 
   * @param request - CreateCommitWithMultipleFilesRequest
   * @returns CreateCommitWithMultipleFilesResponse
   */
  async createCommitWithMultipleFiles(request: $_model.CreateCommitWithMultipleFilesRequest): Promise<$_model.CreateCommitWithMultipleFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCommitWithMultipleFilesWithOptions(request, headers, runtime);
  }

  /**
   * 创建部署密钥
   * 
   * @param request - CreateDeployKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDeployKeyResponse
   */
  async createDeployKeyWithOptions(repositoryId: string, request: $_model.CreateDeployKeyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDeployKeyResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.key)) {
      body["key"] = request.key;
    }

    if (!$dara.isNull(request.title)) {
      body["title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDeployKey",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/keys/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDeployKeyResponse>(await this.callApi(params, req, runtime), new $_model.CreateDeployKeyResponse({}));
  }

  /**
   * 创建部署密钥
   * 
   * @param request - CreateDeployKeyRequest
   * @returns CreateDeployKeyResponse
   */
  async createDeployKey(repositoryId: string, request: $_model.CreateDeployKeyRequest): Promise<$_model.CreateDeployKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDeployKeyWithOptions(repositoryId, request, headers, runtime);
  }

  /**
   * 创建文件
   * 
   * @param request - CreateFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFileResponse
   */
  async createFileWithOptions(repositoryId: string, request: $_model.CreateFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFileResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.branchName)) {
      body["branchName"] = request.branchName;
    }

    if (!$dara.isNull(request.commitMessage)) {
      body["commitMessage"] = request.commitMessage;
    }

    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.encoding)) {
      body["encoding"] = request.encoding;
    }

    if (!$dara.isNull(request.filePath)) {
      body["filePath"] = request.filePath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFile",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/files`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFileResponse>(await this.callApi(params, req, runtime), new $_model.CreateFileResponse({}));
  }

  /**
   * 创建文件
   * 
   * @param request - CreateFileRequest
   * @returns CreateFileResponse
   */
  async createFile(repositoryId: string, request: $_model.CreateFileRequest): Promise<$_model.CreateFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFileWithOptions(repositoryId, request, headers, runtime);
  }

  /**
   * 创建标签
   * 
   * @param request - CreateFlowTagRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFlowTagResponse
   */
  async createFlowTagWithOptions(organizationId: string, request: $_model.CreateFlowTagRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFlowTagResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.color)) {
      query["color"] = request.color;
    }

    if (!$dara.isNull(request.flowTagGroupId)) {
      query["flowTagGroupId"] = request.flowTagGroupId;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFlowTag",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/flow/tags`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFlowTagResponse>(await this.callApi(params, req, runtime), new $_model.CreateFlowTagResponse({}));
  }

  /**
   * 创建标签
   * 
   * @param request - CreateFlowTagRequest
   * @returns CreateFlowTagResponse
   */
  async createFlowTag(organizationId: string, request: $_model.CreateFlowTagRequest): Promise<$_model.CreateFlowTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFlowTagWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 创建标签分类
   * 
   * @param request - CreateFlowTagGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFlowTagGroupResponse
   */
  async createFlowTagGroupWithOptions(organizationId: string, request: $_model.CreateFlowTagGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFlowTagGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFlowTagGroup",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/flow/tagGroups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFlowTagGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateFlowTagGroupResponse({}));
  }

  /**
   * 创建标签分类
   * 
   * @param request - CreateFlowTagGroupRequest
   * @returns CreateFlowTagGroupResponse
   */
  async createFlowTagGroup(organizationId: string, request: $_model.CreateFlowTagGroupRequest): Promise<$_model.CreateFlowTagGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFlowTagGroupWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 创建主机组
   * 
   * @param request - CreateHostGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHostGroupResponse
   */
  async createHostGroupWithOptions(organizationId: string, request: $_model.CreateHostGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHostGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliyunRegion)) {
      body["aliyunRegion"] = request.aliyunRegion;
    }

    if (!$dara.isNull(request.ecsLabelKey)) {
      body["ecsLabelKey"] = request.ecsLabelKey;
    }

    if (!$dara.isNull(request.ecsLabelValue)) {
      body["ecsLabelValue"] = request.ecsLabelValue;
    }

    if (!$dara.isNull(request.ecsType)) {
      body["ecsType"] = request.ecsType;
    }

    if (!$dara.isNull(request.envId)) {
      body["envId"] = request.envId;
    }

    if (!$dara.isNull(request.machineInfos)) {
      body["machineInfos"] = request.machineInfos;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.serviceConnectionId)) {
      body["serviceConnectionId"] = request.serviceConnectionId;
    }

    if (!$dara.isNull(request.tagIds)) {
      body["tagIds"] = request.tagIds;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHostGroup",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/hostGroups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHostGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateHostGroupResponse({}));
  }

  /**
   * 创建主机组
   * 
   * @param request - CreateHostGroupRequest
   * @returns CreateHostGroupResponse
   */
  async createHostGroup(organizationId: string, request: $_model.CreateHostGroupRequest): Promise<$_model.CreateHostGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createHostGroupWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 创建代码评审
   * 
   * @param request - CreateMergeRequestRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMergeRequestResponse
   */
  async createMergeRequestWithOptions(repositoryId: string, request: $_model.CreateMergeRequestRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMergeRequestResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createFrom)) {
      body["createFrom"] = request.createFrom;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.reviewerIds)) {
      body["reviewerIds"] = request.reviewerIds;
    }

    if (!$dara.isNull(request.sourceBranch)) {
      body["sourceBranch"] = request.sourceBranch;
    }

    if (!$dara.isNull(request.sourceProjectId)) {
      body["sourceProjectId"] = request.sourceProjectId;
    }

    if (!$dara.isNull(request.targetBranch)) {
      body["targetBranch"] = request.targetBranch;
    }

    if (!$dara.isNull(request.targetProjectId)) {
      body["targetProjectId"] = request.targetProjectId;
    }

    if (!$dara.isNull(request.title)) {
      body["title"] = request.title;
    }

    if (!$dara.isNull(request.workItemIds)) {
      body["workItemIds"] = request.workItemIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMergeRequest",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/${$dara.URL.percentEncode(repositoryId)}/merge_requests`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMergeRequestResponse>(await this.callApi(params, req, runtime), new $_model.CreateMergeRequestResponse({}));
  }

  /**
   * 创建代码评审
   * 
   * @param request - CreateMergeRequestRequest
   * @returns CreateMergeRequestResponse
   */
  async createMergeRequest(repositoryId: string, request: $_model.CreateMergeRequestRequest): Promise<$_model.CreateMergeRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMergeRequestWithOptions(repositoryId, request, headers, runtime);
  }

  /**
   * 创建OAuth令牌
   * 
   * @param request - CreateOAuthTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOAuthTokenResponse
   */
  async createOAuthTokenWithOptions(request: $_model.CreateOAuthTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOAuthTokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      body["clientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientSecret)) {
      body["clientSecret"] = request.clientSecret;
    }

    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.grantType)) {
      body["grantType"] = request.grantType;
    }

    if (!$dara.isNull(request.login)) {
      body["login"] = request.login;
    }

    if (!$dara.isNull(request.scope)) {
      body["scope"] = request.scope;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOAuthToken",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/login/oauth/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOAuthTokenResponse>(await this.callApi(params, req, runtime), new $_model.CreateOAuthTokenResponse({}));
  }

  /**
   * 创建OAuth令牌
   * 
   * @param request - CreateOAuthTokenRequest
   * @returns CreateOAuthTokenResponse
   */
  async createOAuthToken(request: $_model.CreateOAuthTokenRequest): Promise<$_model.CreateOAuthTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createOAuthTokenWithOptions(request, headers, runtime);
  }

  /**
   * 创建流水线。
   * 
   * @param request - CreatePipelineRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePipelineResponse
   */
  async createPipelineWithOptions(organizationId: string, request: $_model.CreatePipelineRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePipelineResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePipeline",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipelines`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePipelineResponse>(await this.callApi(params, req, runtime), new $_model.CreatePipelineResponse({}));
  }

  /**
   * 创建流水线。
   * 
   * @param request - CreatePipelineRequest
   * @returns CreatePipelineResponse
   */
  async createPipeline(organizationId: string, request: $_model.CreatePipelineRequest): Promise<$_model.CreatePipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPipelineWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 创建流水线分组
   * 
   * @param request - CreatePipelineGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePipelineGroupResponse
   */
  async createPipelineGroupWithOptions(organizationId: string, request: $_model.CreatePipelineGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePipelineGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePipelineGroup",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipelineGroups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePipelineGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreatePipelineGroupResponse({}));
  }

  /**
   * 创建流水线分组
   * 
   * @param request - CreatePipelineGroupRequest
   * @returns CreatePipelineGroupResponse
   */
  async createPipelineGroup(organizationId: string, request: $_model.CreatePipelineGroupRequest): Promise<$_model.CreatePipelineGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPipelineGroupWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 创建项目
   * 
   * @param request - CreateProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProjectResponse
   */
  async createProjectWithOptions(organizationId: string, request: $_model.CreateProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.customCode)) {
      body["customCode"] = request.customCode;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.scope)) {
      body["scope"] = request.scope;
    }

    if (!$dara.isNull(request.templateIdentifier)) {
      body["templateIdentifier"] = request.templateIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProject",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/projects/createProject`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProjectResponse>(await this.callApi(params, req, runtime), new $_model.CreateProjectResponse({}));
  }

  /**
   * 创建项目
   * 
   * @param request - CreateProjectRequest
   * @returns CreateProjectResponse
   */
  async createProject(organizationId: string, request: $_model.CreateProjectRequest): Promise<$_model.CreateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProjectWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 创建代码库Label
   * 
   * @param request - CreateProjectLabelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProjectLabelResponse
   */
  async createProjectLabelWithOptions(request: $_model.CreateProjectLabelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProjectLabelResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.repositoryIdentity)) {
      query["repositoryIdentity"] = request.repositoryIdentity;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.color)) {
      body["color"] = request.color;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProjectLabel",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/labels`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProjectLabelResponse>(await this.callApi(params, req, runtime), new $_model.CreateProjectLabelResponse({}));
  }

  /**
   * 创建代码库Label
   * 
   * @param request - CreateProjectLabelRequest
   * @returns CreateProjectLabelResponse
   */
  async createProjectLabel(request: $_model.CreateProjectLabelRequest): Promise<$_model.CreateProjectLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProjectLabelWithOptions(request, headers, runtime);
  }

  /**
   * 创建保护分支
   * 
   * @param request - CreateProtectdBranchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProtectdBranchResponse
   */
  async createProtectdBranchWithOptions(repositoryId: string, request: $_model.CreateProtectdBranchRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProtectdBranchResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allowMergeRoles)) {
      body["allowMergeRoles"] = request.allowMergeRoles;
    }

    if (!$dara.isNull(request.allowMergeUserIds)) {
      body["allowMergeUserIds"] = request.allowMergeUserIds;
    }

    if (!$dara.isNull(request.allowPushRoles)) {
      body["allowPushRoles"] = request.allowPushRoles;
    }

    if (!$dara.isNull(request.allowPushUserIds)) {
      body["allowPushUserIds"] = request.allowPushUserIds;
    }

    if (!$dara.isNull(request.branch)) {
      body["branch"] = request.branch;
    }

    if (!$dara.isNull(request.id)) {
      body["id"] = request.id;
    }

    if (!$dara.isNull(request.mergeRequestSetting)) {
      body["mergeRequestSetting"] = request.mergeRequestSetting;
    }

    if (!$dara.isNull(request.testSettingDTO)) {
      body["testSettingDTO"] = request.testSettingDTO;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProtectdBranch",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/protect_branches`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProtectdBranchResponse>(await this.callApi(params, req, runtime), new $_model.CreateProtectdBranchResponse({}));
  }

  /**
   * 创建保护分支
   * 
   * @param request - CreateProtectdBranchRequest
   * @returns CreateProtectdBranchResponse
   */
  async createProtectdBranch(repositoryId: string, request: $_model.CreateProtectdBranchRequest): Promise<$_model.CreateProtectdBranchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProtectdBranchWithOptions(repositoryId, request, headers, runtime);
  }

  /**
   * 创建推送规则
   * 
   * @param request - CreatePushRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePushRuleResponse
   */
  async createPushRuleWithOptions(repositoryId: string, request: $_model.CreatePushRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePushRuleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ruleInfos)) {
      body["ruleInfos"] = request.ruleInfos;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePushRule",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/${$dara.URL.percentEncode(repositoryId)}/push_rule`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePushRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreatePushRuleResponse({}));
  }

  /**
   * 创建推送规则
   * 
   * @param request - CreatePushRuleRequest
   * @returns CreatePushRuleResponse
   */
  async createPushRule(repositoryId: string, request: $_model.CreatePushRuleRequest): Promise<$_model.CreatePushRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPushRuleWithOptions(repositoryId, request, headers, runtime);
  }

  /**
   * 创建(导入)代码库
   * 
   * @param request - CreateRepositoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRepositoryResponse
   */
  async createRepositoryWithOptions(request: $_model.CreateRepositoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRepositoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.createParentPath)) {
      query["createParentPath"] = request.createParentPath;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.sync)) {
      query["sync"] = request.sync;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.avatarUrl)) {
      body["avatarUrl"] = request.avatarUrl;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.gitignoreType)) {
      body["gitignoreType"] = request.gitignoreType;
    }

    if (!$dara.isNull(request.importAccount)) {
      body["importAccount"] = request.importAccount;
    }

    if (!$dara.isNull(request.importDemoProject)) {
      body["importDemoProject"] = request.importDemoProject;
    }

    if (!$dara.isNull(request.importRepoType)) {
      body["importRepoType"] = request.importRepoType;
    }

    if (!$dara.isNull(request.importToken)) {
      body["importToken"] = request.importToken;
    }

    if (!$dara.isNull(request.importTokenEncrypted)) {
      body["importTokenEncrypted"] = request.importTokenEncrypted;
    }

    if (!$dara.isNull(request.importUrl)) {
      body["importUrl"] = request.importUrl;
    }

    if (!$dara.isNull(request.initStandardService)) {
      body["initStandardService"] = request.initStandardService;
    }

    if (!$dara.isNull(request.isCryptoEnabled)) {
      body["isCryptoEnabled"] = request.isCryptoEnabled;
    }

    if (!$dara.isNull(request.localImportUrl)) {
      body["localImportUrl"] = request.localImportUrl;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.namespaceId)) {
      body["namespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.path)) {
      body["path"] = request.path;
    }

    if (!$dara.isNull(request.readmeType)) {
      body["readmeType"] = request.readmeType;
    }

    if (!$dara.isNull(request.visibilityLevel)) {
      body["visibilityLevel"] = request.visibilityLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRepository",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRepositoryResponse>(await this.callApi(params, req, runtime), new $_model.CreateRepositoryResponse({}));
  }

  /**
   * 创建(导入)代码库
   * 
   * @param request - CreateRepositoryRequest
   * @returns CreateRepositoryResponse
   */
  async createRepository(request: $_model.CreateRepositoryRequest): Promise<$_model.CreateRepositoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRepositoryWithOptions(request, headers, runtime);
  }

  /**
   * 创建代码组
   * 
   * @param request - CreateRepositoryGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRepositoryGroupResponse
   */
  async createRepositoryGroupWithOptions(request: $_model.CreateRepositoryGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRepositoryGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.avatarUrl)) {
      body["avatarUrl"] = request.avatarUrl;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.parentId)) {
      body["parentId"] = request.parentId;
    }

    if (!$dara.isNull(request.path)) {
      body["path"] = request.path;
    }

    if (!$dara.isNull(request.visibilityLevel)) {
      body["visibilityLevel"] = request.visibilityLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRepositoryGroup",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/groups/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRepositoryGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateRepositoryGroupResponse({}));
  }

  /**
   * 创建代码组
   * 
   * @param request - CreateRepositoryGroupRequest
   * @returns CreateRepositoryGroupResponse
   */
  async createRepositoryGroup(request: $_model.CreateRepositoryGroupRequest): Promise<$_model.CreateRepositoryGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRepositoryGroupWithOptions(request, headers, runtime);
  }

  /**
   * 插入资源成员
   * 
   * @param request - CreateResourceMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceMemberResponse
   */
  async createResourceMemberWithOptions(organizationId: string, resourceType: string, resourceId: string, request: $_model.CreateResourceMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateResourceMemberResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      body["accountId"] = request.accountId;
    }

    if (!$dara.isNull(request.roleName)) {
      body["roleName"] = request.roleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResourceMember",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/${$dara.URL.percentEncode(resourceType)}/${$dara.URL.percentEncode(resourceId)}/members`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateResourceMemberResponse>(await this.callApi(params, req, runtime), new $_model.CreateResourceMemberResponse({}));
  }

  /**
   * 插入资源成员
   * 
   * @param request - CreateResourceMemberRequest
   * @returns CreateResourceMemberResponse
   */
  async createResourceMember(organizationId: string, resourceType: string, resourceId: string, request: $_model.CreateResourceMemberRequest): Promise<$_model.CreateResourceMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceMemberWithOptions(organizationId, resourceType, resourceId, request, headers, runtime);
  }

  /**
   * 创建服务授权
   * 
   * @param request - CreateServiceAuthRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceAuthResponse
   */
  async createServiceAuthWithOptions(organizationId: string, request: $_model.CreateServiceAuthRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceAuthResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serviceAuthType)) {
      query["serviceAuthType"] = request.serviceAuthType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceAuth",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/serviceAuths`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServiceAuthResponse>(await this.callApi(params, req, runtime), new $_model.CreateServiceAuthResponse({}));
  }

  /**
   * 创建服务授权
   * 
   * @param request - CreateServiceAuthRequest
   * @returns CreateServiceAuthResponse
   */
  async createServiceAuth(organizationId: string, request: $_model.CreateServiceAuthRequest): Promise<$_model.CreateServiceAuthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceAuthWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 创建服务连接
   * 
   * @param request - CreateServiceConnectionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceConnectionResponse
   */
  async createServiceConnectionWithOptions(organizationId: string, request: $_model.CreateServiceConnectionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceConnectionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authType)) {
      body["authType"] = request.authType;
    }

    if (!$dara.isNull(request.connectionName)) {
      body["connectionName"] = request.connectionName;
    }

    if (!$dara.isNull(request.connectionType)) {
      body["connectionType"] = request.connectionType;
    }

    if (!$dara.isNull(request.scope)) {
      body["scope"] = request.scope;
    }

    if (!$dara.isNull(request.serviceAuthId)) {
      body["serviceAuthId"] = request.serviceAuthId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceConnection",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/createServiceConnection`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServiceConnectionResponse>(await this.callApi(params, req, runtime), new $_model.CreateServiceConnectionResponse({}));
  }

  /**
   * 创建服务连接
   * 
   * @param request - CreateServiceConnectionRequest
   * @returns CreateServiceConnectionResponse
   */
  async createServiceConnection(organizationId: string, request: $_model.CreateServiceConnectionRequest): Promise<$_model.CreateServiceConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceConnectionWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 创建用户名密码类型的证书
   * 
   * @param request - CreateServiceCredentialRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceCredentialResponse
   */
  async createServiceCredentialWithOptions(organizationId: string, request: $_model.CreateServiceCredentialRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceCredentialResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.password)) {
      body["password"] = request.password;
    }

    if (!$dara.isNull(request.scope)) {
      body["scope"] = request.scope;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    if (!$dara.isNull(request.username)) {
      body["username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceCredential",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/serviceCredentials`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServiceCredentialResponse>(await this.callApi(params, req, runtime), new $_model.CreateServiceCredentialResponse({}));
  }

  /**
   * 创建用户名密码类型的证书
   * 
   * @param request - CreateServiceCredentialRequest
   * @returns CreateServiceCredentialResponse
   */
  async createServiceCredential(organizationId: string, request: $_model.CreateServiceCredentialRequest): Promise<$_model.CreateServiceCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceCredentialWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 创建迭代
   * 
   * @param request - CreateSprintRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSprintResponse
   */
  async createSprintWithOptions(organizationId: string, request: $_model.CreateSprintRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSprintResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endDate)) {
      body["endDate"] = request.endDate;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.spaceIdentifier)) {
      body["spaceIdentifier"] = request.spaceIdentifier;
    }

    if (!$dara.isNull(request.staffIds)) {
      body["staffIds"] = request.staffIds;
    }

    if (!$dara.isNull(request.startDate)) {
      body["startDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSprint",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/sprints/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSprintResponse>(await this.callApi(params, req, runtime), new $_model.CreateSprintResponse({}));
  }

  /**
   * 创建迭代
   * 
   * @param request - CreateSprintRequest
   * @returns CreateSprintResponse
   */
  async createSprint(organizationId: string, request: $_model.CreateSprintRequest): Promise<$_model.CreateSprintResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSprintWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 创建企业公钥
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSshKeyResponse
   */
  async createSshKeyWithOptions(organizationId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSshKeyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSshKey",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/sshKey`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSshKeyResponse>(await this.callApi(params, req, runtime), new $_model.CreateSshKeyResponse({}));
  }

  /**
   * 创建企业公钥
   * @returns CreateSshKeyResponse
   */
  async createSshKey(organizationId: string): Promise<$_model.CreateSshKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSshKeyWithOptions(organizationId, headers, runtime);
  }

  /**
   * 创建标签Tag
   * 
   * @param request - CreateTagRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTagResponse
   */
  async createTagWithOptions(repositoryId: string, request: $_model.CreateTagRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTagResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.message)) {
      body["message"] = request.message;
    }

    if (!$dara.isNull(request.ref)) {
      body["ref"] = request.ref;
    }

    if (!$dara.isNull(request.tagName)) {
      body["tagName"] = request.tagName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTag",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/tags/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTagResponse>(await this.callApi(params, req, runtime), new $_model.CreateTagResponse({}));
  }

  /**
   * 创建标签Tag
   * 
   * @param request - CreateTagRequest
   * @returns CreateTagResponse
   */
  async createTag(repositoryId: string, request: $_model.CreateTagRequest): Promise<$_model.CreateTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTagWithOptions(repositoryId, request, headers, runtime);
  }

  /**
   * 创建测试用例
   * 
   * @param request - CreateTestCaseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTestCaseResponse
   */
  async createTestCaseWithOptions(organizationId: string, request: $_model.CreateTestCaseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTestCaseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assignedTo)) {
      body["assignedTo"] = request.assignedTo;
    }

    if (!$dara.isNull(request.directoryIdentifier)) {
      body["directoryIdentifier"] = request.directoryIdentifier;
    }

    if (!$dara.isNull(request.fieldValueList)) {
      body["fieldValueList"] = request.fieldValueList;
    }

    if (!$dara.isNull(request.priority)) {
      body["priority"] = request.priority;
    }

    if (!$dara.isNull(request.spaceIdentifier)) {
      body["spaceIdentifier"] = request.spaceIdentifier;
    }

    if (!$dara.isNull(request.subject)) {
      body["subject"] = request.subject;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.testcaseStepContentInfo)) {
      body["testcaseStepContentInfo"] = request.testcaseStepContentInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTestCase",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/testhub/testcase`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTestCaseResponse>(await this.callApi(params, req, runtime), new $_model.CreateTestCaseResponse({}));
  }

  /**
   * 创建测试用例
   * 
   * @param request - CreateTestCaseRequest
   * @returns CreateTestCaseResponse
   */
  async createTestCase(organizationId: string, request: $_model.CreateTestCaseRequest): Promise<$_model.CreateTestCaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTestCaseWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 创建SSH Key密钥
   * 
   * @param request - CreateUserKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserKeyResponse
   */
  async createUserKeyWithOptions(request: $_model.CreateUserKeyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserKeyResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.expireTime)) {
      body["expireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.keyScope)) {
      body["keyScope"] = request.keyScope;
    }

    if (!$dara.isNull(request.publicKey)) {
      body["publicKey"] = request.publicKey;
    }

    if (!$dara.isNull(request.title)) {
      body["title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUserKey",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v3/user/keys/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUserKeyResponse>(await this.callApi(params, req, runtime), new $_model.CreateUserKeyResponse({}));
  }

  /**
   * 创建SSH Key密钥
   * 
   * @param request - CreateUserKeyRequest
   * @returns CreateUserKeyResponse
   */
  async createUserKey(request: $_model.CreateUserKeyRequest): Promise<$_model.CreateUserKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createUserKeyWithOptions(request, headers, runtime);
  }

  /**
   * 创建变量组
   * 
   * @param request - CreateVariableGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVariableGroupResponse
   */
  async createVariableGroupWithOptions(organizationId: string, request: $_model.CreateVariableGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVariableGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.variables)) {
      body["variables"] = request.variables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVariableGroup",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/variableGroups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVariableGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateVariableGroupResponse({}));
  }

  /**
   * 创建变量组
   * 
   * @param request - CreateVariableGroupRequest
   * @returns CreateVariableGroupResponse
   */
  async createVariableGroup(organizationId: string, request: $_model.CreateVariableGroupRequest): Promise<$_model.CreateVariableGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createVariableGroupWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 新建工作项
   * 
   * @param request - CreateWorkitemRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkitemResponse
   */
  async createWorkitemWithOptions(organizationId: string, request: $_model.CreateWorkitemRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWorkitemResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assignedTo)) {
      body["assignedTo"] = request.assignedTo;
    }

    if (!$dara.isNull(request.category)) {
      body["category"] = request.category;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.descriptionFormat)) {
      body["descriptionFormat"] = request.descriptionFormat;
    }

    if (!$dara.isNull(request.fieldValueList)) {
      body["fieldValueList"] = request.fieldValueList;
    }

    if (!$dara.isNull(request.parent)) {
      body["parent"] = request.parent;
    }

    if (!$dara.isNull(request.participant)) {
      body["participant"] = request.participant;
    }

    if (!$dara.isNull(request.space)) {
      body["space"] = request.space;
    }

    if (!$dara.isNull(request.spaceIdentifier)) {
      body["spaceIdentifier"] = request.spaceIdentifier;
    }

    if (!$dara.isNull(request.spaceType)) {
      body["spaceType"] = request.spaceType;
    }

    if (!$dara.isNull(request.sprint)) {
      body["sprint"] = request.sprint;
    }

    if (!$dara.isNull(request.subject)) {
      body["subject"] = request.subject;
    }

    if (!$dara.isNull(request.tracker)) {
      body["tracker"] = request.tracker;
    }

    if (!$dara.isNull(request.verifier)) {
      body["verifier"] = request.verifier;
    }

    if (!$dara.isNull(request.workitemType)) {
      body["workitemType"] = request.workitemType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWorkitem",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/workitems/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWorkitemResponse>(await this.callApi(params, req, runtime), new $_model.CreateWorkitemResponse({}));
  }

  /**
   * 新建工作项
   * 
   * @param request - CreateWorkitemRequest
   * @returns CreateWorkitemResponse
   */
  async createWorkitem(organizationId: string, request: $_model.CreateWorkitemRequest): Promise<$_model.CreateWorkitemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createWorkitemWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 创建一个评论
   * 
   * @param request - CreateWorkitemCommentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkitemCommentResponse
   */
  async createWorkitemCommentWithOptions(organizationId: string, request: $_model.CreateWorkitemCommentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWorkitemCommentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.formatType)) {
      body["formatType"] = request.formatType;
    }

    if (!$dara.isNull(request.parentId)) {
      body["parentId"] = request.parentId;
    }

    if (!$dara.isNull(request.workitemIdentifier)) {
      body["workitemIdentifier"] = request.workitemIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWorkitemComment",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/workitems/comment`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWorkitemCommentResponse>(await this.callApi(params, req, runtime), new $_model.CreateWorkitemCommentResponse({}));
  }

  /**
   * 创建一个评论
   * 
   * @param request - CreateWorkitemCommentRequest
   * @returns CreateWorkitemCommentResponse
   */
  async createWorkitemComment(organizationId: string, request: $_model.CreateWorkitemCommentRequest): Promise<$_model.CreateWorkitemCommentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createWorkitemCommentWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 登记预计工时
   * 
   * @param request - CreateWorkitemEstimateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkitemEstimateResponse
   */
  async createWorkitemEstimateWithOptions(organizationId: string, request: $_model.CreateWorkitemEstimateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWorkitemEstimateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.recordUserIdentifier)) {
      body["recordUserIdentifier"] = request.recordUserIdentifier;
    }

    if (!$dara.isNull(request.spentTime)) {
      body["spentTime"] = request.spentTime;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    if (!$dara.isNull(request.workitemIdentifier)) {
      body["workitemIdentifier"] = request.workitemIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWorkitemEstimate",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/workitems/estimate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWorkitemEstimateResponse>(await this.callApi(params, req, runtime), new $_model.CreateWorkitemEstimateResponse({}));
  }

  /**
   * 登记预计工时
   * 
   * @param request - CreateWorkitemEstimateRequest
   * @returns CreateWorkitemEstimateResponse
   */
  async createWorkitemEstimate(organizationId: string, request: $_model.CreateWorkitemEstimateRequest): Promise<$_model.CreateWorkitemEstimateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createWorkitemEstimateWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 登记实际工时
   * 
   * @param request - CreateWorkitemRecordRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkitemRecordResponse
   */
  async createWorkitemRecordWithOptions(organizationId: string, request: $_model.CreateWorkitemRecordRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWorkitemRecordResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.actualTime)) {
      body["actualTime"] = request.actualTime;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.gmtEnd)) {
      body["gmtEnd"] = request.gmtEnd;
    }

    if (!$dara.isNull(request.gmtStart)) {
      body["gmtStart"] = request.gmtStart;
    }

    if (!$dara.isNull(request.recordUserIdentifier)) {
      body["recordUserIdentifier"] = request.recordUserIdentifier;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    if (!$dara.isNull(request.workitemIdentifier)) {
      body["workitemIdentifier"] = request.workitemIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWorkitemRecord",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/workitems/record`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWorkitemRecordResponse>(await this.callApi(params, req, runtime), new $_model.CreateWorkitemRecordResponse({}));
  }

  /**
   * 登记实际工时
   * 
   * @param request - CreateWorkitemRecordRequest
   * @returns CreateWorkitemRecordResponse
   */
  async createWorkitemRecord(organizationId: string, request: $_model.CreateWorkitemRecordRequest): Promise<$_model.CreateWorkitemRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createWorkitemRecordWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 创建工作项
   * 
   * @param request - CreateWorkitemV2Request
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkitemV2Response
   */
  async createWorkitemV2WithOptions(organizationId: string, request: $_model.CreateWorkitemV2Request, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWorkitemV2Response> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assignedTo)) {
      body["assignedTo"] = request.assignedTo;
    }

    if (!$dara.isNull(request.category)) {
      body["category"] = request.category;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.fieldValueList)) {
      body["fieldValueList"] = request.fieldValueList;
    }

    if (!$dara.isNull(request.parentIdentifier)) {
      body["parentIdentifier"] = request.parentIdentifier;
    }

    if (!$dara.isNull(request.participants)) {
      body["participants"] = request.participants;
    }

    if (!$dara.isNull(request.spaceIdentifier)) {
      body["spaceIdentifier"] = request.spaceIdentifier;
    }

    if (!$dara.isNull(request.sprintIdentifier)) {
      body["sprintIdentifier"] = request.sprintIdentifier;
    }

    if (!$dara.isNull(request.subject)) {
      body["subject"] = request.subject;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.trackers)) {
      body["trackers"] = request.trackers;
    }

    if (!$dara.isNull(request.verifier)) {
      body["verifier"] = request.verifier;
    }

    if (!$dara.isNull(request.versions)) {
      body["versions"] = request.versions;
    }

    if (!$dara.isNull(request.workitemTypeIdentifier)) {
      body["workitemTypeIdentifier"] = request.workitemTypeIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWorkitemV2",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/workitem`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWorkitemV2Response>(await this.callApi(params, req, runtime), new $_model.CreateWorkitemV2Response({}));
  }

  /**
   * 创建工作项
   * 
   * @param request - CreateWorkitemV2Request
   * @returns CreateWorkitemV2Response
   */
  async createWorkitemV2(organizationId: string, request: $_model.CreateWorkitemV2Request): Promise<$_model.CreateWorkitemV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createWorkitemV2WithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 删除应用成员
   * 
   * @param request - DeleteAppMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppMemberResponse
   */
  async deleteAppMemberWithOptions(appName: string, request: $_model.DeleteAppMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppMemberResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.subjectId)) {
      query["subjectId"] = request.subjectId;
    }

    if (!$dara.isNull(request.subjectType)) {
      query["subjectType"] = request.subjectType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppMember",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/appstack/apps/${$dara.URL.percentEncode(appName)}/members`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $dara.cast<$_model.DeleteAppMemberResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppMemberResponse({}));
  }

  /**
   * 删除应用成员
   * 
   * @param request - DeleteAppMemberRequest
   * @returns DeleteAppMemberResponse
   */
  async deleteAppMember(appName: string, request: $_model.DeleteAppMemberRequest): Promise<$_model.DeleteAppMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAppMemberWithOptions(appName, request, headers, runtime);
  }

  /**
   * 删除分支
   * 
   * @param request - DeleteBranchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBranchResponse
   */
  async deleteBranchWithOptions(repositoryId: string, request: $_model.DeleteBranchRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBranchResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.branchName)) {
      query["branchName"] = request.branchName;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBranch",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/branches/delete`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBranchResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBranchResponse({}));
  }

  /**
   * 删除分支
   * 
   * @param request - DeleteBranchRequest
   * @returns DeleteBranchResponse
   */
  async deleteBranch(repositoryId: string, request: $_model.DeleteBranchRequest): Promise<$_model.DeleteBranchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteBranchWithOptions(repositoryId, request, headers, runtime);
  }

  /**
   * 删除文件
   * 
   * @param request - DeleteFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFileResponse
   */
  async deleteFileWithOptions(repositoryId: string, request: $_model.DeleteFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFileResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.branchName)) {
      query["branchName"] = request.branchName;
    }

    if (!$dara.isNull(request.commitMessage)) {
      query["commitMessage"] = request.commitMessage;
    }

    if (!$dara.isNull(request.filePath)) {
      query["filePath"] = request.filePath;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFile",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/files/delete`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFileResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFileResponse({}));
  }

  /**
   * 删除文件
   * 
   * @param request - DeleteFileRequest
   * @returns DeleteFileResponse
   */
  async deleteFile(repositoryId: string, request: $_model.DeleteFileRequest): Promise<$_model.DeleteFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFileWithOptions(repositoryId, request, headers, runtime);
  }

  /**
   * 删除标签
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFlowTagResponse
   */
  async deleteFlowTagWithOptions(organizationId: string, id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFlowTagResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFlowTag",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/flow/tags/${$dara.URL.percentEncode(id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFlowTagResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFlowTagResponse({}));
  }

  /**
   * 删除标签
   * @returns DeleteFlowTagResponse
   */
  async deleteFlowTag(organizationId: string, id: string): Promise<$_model.DeleteFlowTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFlowTagWithOptions(organizationId, id, headers, runtime);
  }

  /**
   * 删除标签分类
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFlowTagGroupResponse
   */
  async deleteFlowTagGroupWithOptions(organizationId: string, id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFlowTagGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFlowTagGroup",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/flow/tagGroups/${$dara.URL.percentEncode(id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFlowTagGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFlowTagGroupResponse({}));
  }

  /**
   * 删除标签分类
   * @returns DeleteFlowTagGroupResponse
   */
  async deleteFlowTagGroup(organizationId: string, id: string): Promise<$_model.DeleteFlowTagGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFlowTagGroupWithOptions(organizationId, id, headers, runtime);
  }

  /**
   * 删除组成员
   * 
   * @param request - DeleteGroupMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGroupMemberResponse
   */
  async deleteGroupMemberWithOptions(groupId: string, request: $_model.DeleteGroupMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGroupMemberResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.aliyunPk)) {
      query["aliyunPk"] = request.aliyunPk;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.memberType)) {
      body["memberType"] = request.memberType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGroupMember",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/groups/${$dara.URL.percentEncode(groupId)}/members/remove/aliyun_pk`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGroupMemberResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGroupMemberResponse({}));
  }

  /**
   * 删除组成员
   * 
   * @param request - DeleteGroupMemberRequest
   * @returns DeleteGroupMemberResponse
   */
  async deleteGroupMember(groupId: string, request: $_model.DeleteGroupMemberRequest): Promise<$_model.DeleteGroupMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGroupMemberWithOptions(groupId, request, headers, runtime);
  }

  /**
   * 删除主机组
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHostGroupResponse
   */
  async deleteHostGroupWithOptions(organizationId: string, id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHostGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHostGroup",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/hostGroups/${$dara.URL.percentEncode(id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHostGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHostGroupResponse({}));
  }

  /**
   * 删除主机组
   * @returns DeleteHostGroupResponse
   */
  async deleteHostGroup(organizationId: string, id: string): Promise<$_model.DeleteHostGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteHostGroupWithOptions(organizationId, id, headers, runtime);
  }

  /**
   * 删除流水线
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePipelineResponse
   */
  async deletePipelineWithOptions(organizationId: string, pipelineId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePipelineResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePipeline",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipelines/${$dara.URL.percentEncode(pipelineId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePipelineResponse>(await this.callApi(params, req, runtime), new $_model.DeletePipelineResponse({}));
  }

  /**
   * 删除流水线
   * @returns DeletePipelineResponse
   */
  async deletePipeline(organizationId: string, pipelineId: string): Promise<$_model.DeletePipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePipelineWithOptions(organizationId, pipelineId, headers, runtime);
  }

  /**
   * 删除流水线分组
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePipelineGroupResponse
   */
  async deletePipelineGroupWithOptions(organizationId: string, groupId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePipelineGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePipelineGroup",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipelineGroups/${$dara.URL.percentEncode(groupId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePipelineGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeletePipelineGroupResponse({}));
  }

  /**
   * 删除流水线分组
   * @returns DeletePipelineGroupResponse
   */
  async deletePipelineGroup(organizationId: string, groupId: string): Promise<$_model.DeletePipelineGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePipelineGroupWithOptions(organizationId, groupId, headers, runtime);
  }

  /**
   * 删除流水线关联
   * 
   * @param request - DeletePipelineRelationsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePipelineRelationsResponse
   */
  async deletePipelineRelationsWithOptions(organizationId: string, pipelineId: string, request: $_model.DeletePipelineRelationsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePipelineRelationsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.relObjectId)) {
      query["relObjectId"] = request.relObjectId;
    }

    if (!$dara.isNull(request.relObjectType)) {
      query["relObjectType"] = request.relObjectType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePipelineRelations",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/${$dara.URL.percentEncode(pipelineId)}/pipelineRelations`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePipelineRelationsResponse>(await this.callApi(params, req, runtime), new $_model.DeletePipelineRelationsResponse({}));
  }

  /**
   * 删除流水线关联
   * 
   * @param request - DeletePipelineRelationsRequest
   * @returns DeletePipelineRelationsResponse
   */
  async deletePipelineRelations(organizationId: string, pipelineId: string, request: $_model.DeletePipelineRelationsRequest): Promise<$_model.DeletePipelineRelationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePipelineRelationsWithOptions(organizationId, pipelineId, request, headers, runtime);
  }

  /**
   * 删除项目
   * 
   * @param request - DeleteProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProjectResponse
   */
  async deleteProjectWithOptions(organizationId: string, request: $_model.DeleteProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProjectResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identifier)) {
      query["identifier"] = request.identifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProject",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/projects/delete`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteProjectResponse>(await this.callApi(params, req, runtime), new $_model.DeleteProjectResponse({}));
  }

  /**
   * 删除项目
   * 
   * @param request - DeleteProjectRequest
   * @returns DeleteProjectResponse
   */
  async deleteProject(organizationId: string, request: $_model.DeleteProjectRequest): Promise<$_model.DeleteProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProjectWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 删除代码库Label
   * 
   * @param request - DeleteProjectLabelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProjectLabelResponse
   */
  async deleteProjectLabelWithOptions(labelId: string, request: $_model.DeleteProjectLabelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProjectLabelResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.repositoryIdentity)) {
      query["repositoryIdentity"] = request.repositoryIdentity;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProjectLabel",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/labels/${$dara.URL.percentEncode(labelId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteProjectLabelResponse>(await this.callApi(params, req, runtime), new $_model.DeleteProjectLabelResponse({}));
  }

  /**
   * 删除代码库Label
   * 
   * @param request - DeleteProjectLabelRequest
   * @returns DeleteProjectLabelResponse
   */
  async deleteProjectLabel(labelId: string, request: $_model.DeleteProjectLabelRequest): Promise<$_model.DeleteProjectLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProjectLabelWithOptions(labelId, request, headers, runtime);
  }

  /**
   * 删除保护分支
   * 
   * @param request - DeleteProtectedBranchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProtectedBranchResponse
   */
  async deleteProtectedBranchWithOptions(repositoryId: string, protectedBranchId: string, request: $_model.DeleteProtectedBranchRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProtectedBranchResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProtectedBranch",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/protect_branches/${$dara.URL.percentEncode(protectedBranchId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteProtectedBranchResponse>(await this.callApi(params, req, runtime), new $_model.DeleteProtectedBranchResponse({}));
  }

  /**
   * 删除保护分支
   * 
   * @param request - DeleteProtectedBranchRequest
   * @returns DeleteProtectedBranchResponse
   */
  async deleteProtectedBranch(repositoryId: string, protectedBranchId: string, request: $_model.DeleteProtectedBranchRequest): Promise<$_model.DeleteProtectedBranchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProtectedBranchWithOptions(repositoryId, protectedBranchId, request, headers, runtime);
  }

  /**
   * 删除推送规则
   * 
   * @param request - DeletePushRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePushRuleResponse
   */
  async deletePushRuleWithOptions(repositoryId: string, pushRuleId: string, request: $_model.DeletePushRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePushRuleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePushRule",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/${$dara.URL.percentEncode(repositoryId)}/push_rule/${$dara.URL.percentEncode(pushRuleId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePushRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeletePushRuleResponse({}));
  }

  /**
   * 删除推送规则
   * 
   * @param request - DeletePushRuleRequest
   * @returns DeletePushRuleResponse
   */
  async deletePushRule(repositoryId: string, pushRuleId: string, request: $_model.DeletePushRuleRequest): Promise<$_model.DeletePushRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePushRuleWithOptions(repositoryId, pushRuleId, request, headers, runtime);
  }

  /**
   * 删除代码库
   * 
   * @param request - DeleteRepositoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRepositoryResponse
   */
  async deleteRepositoryWithOptions(repositoryId: string, request: $_model.DeleteRepositoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRepositoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.reason)) {
      body["reason"] = request.reason;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRepository",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRepositoryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRepositoryResponse({}));
  }

  /**
   * 删除代码库
   * 
   * @param request - DeleteRepositoryRequest
   * @returns DeleteRepositoryResponse
   */
  async deleteRepository(repositoryId: string, request: $_model.DeleteRepositoryRequest): Promise<$_model.DeleteRepositoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRepositoryWithOptions(repositoryId, request, headers, runtime);
  }

  /**
   * 删除代码组
   * 
   * @param request - DeleteRepositoryGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRepositoryGroupResponse
   */
  async deleteRepositoryGroupWithOptions(groupId: string, request: $_model.DeleteRepositoryGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRepositoryGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.reason)) {
      body["reason"] = request.reason;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRepositoryGroup",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/groups/${$dara.URL.percentEncode(groupId)}/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRepositoryGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRepositoryGroupResponse({}));
  }

  /**
   * 删除代码组
   * 
   * @param request - DeleteRepositoryGroupRequest
   * @returns DeleteRepositoryGroupResponse
   */
  async deleteRepositoryGroup(groupId: string, request: $_model.DeleteRepositoryGroupRequest): Promise<$_model.DeleteRepositoryGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRepositoryGroupWithOptions(groupId, request, headers, runtime);
  }

  /**
   * 删除代码库成员
   * 
   * @param request - DeleteRepositoryMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRepositoryMemberResponse
   */
  async deleteRepositoryMemberWithOptions(repositoryId: string, aliyunPk: string, request: $_model.DeleteRepositoryMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRepositoryMemberResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.memberType)) {
      body["memberType"] = request.memberType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRepositoryMember",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/members/delete/${$dara.URL.percentEncode(aliyunPk)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRepositoryMemberResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRepositoryMemberResponse({}));
  }

  /**
   * 删除代码库成员
   * 
   * @param request - DeleteRepositoryMemberRequest
   * @returns DeleteRepositoryMemberResponse
   */
  async deleteRepositoryMember(repositoryId: string, aliyunPk: string, request: $_model.DeleteRepositoryMemberRequest): Promise<$_model.DeleteRepositoryMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRepositoryMemberWithOptions(repositoryId, aliyunPk, request, headers, runtime);
  }

  /**
   * 删除代码库Webhook
   * 
   * @param request - DeleteRepositoryWebhookRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRepositoryWebhookResponse
   */
  async deleteRepositoryWebhookWithOptions(repositoryId: string, hookId: string, request: $_model.DeleteRepositoryWebhookRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRepositoryWebhookResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRepositoryWebhook",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/hooks/${$dara.URL.percentEncode(hookId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRepositoryWebhookResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRepositoryWebhookResponse({}));
  }

  /**
   * 删除代码库Webhook
   * 
   * @param request - DeleteRepositoryWebhookRequest
   * @returns DeleteRepositoryWebhookResponse
   */
  async deleteRepositoryWebhook(repositoryId: string, hookId: string, request: $_model.DeleteRepositoryWebhookRequest): Promise<$_model.DeleteRepositoryWebhookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRepositoryWebhookWithOptions(repositoryId, hookId, request, headers, runtime);
  }

  /**
   * 删除资源成员
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceMemberResponse
   */
  async deleteResourceMemberWithOptions(organizationId: string, resourceType: string, resourceId: string, accountId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteResourceMemberResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResourceMember",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/${$dara.URL.percentEncode(resourceType)}/${$dara.URL.percentEncode(resourceId)}/members/${$dara.URL.percentEncode(accountId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteResourceMemberResponse>(await this.callApi(params, req, runtime), new $_model.DeleteResourceMemberResponse({}));
  }

  /**
   * 删除资源成员
   * @returns DeleteResourceMemberResponse
   */
  async deleteResourceMember(organizationId: string, resourceType: string, resourceId: string, accountId: string): Promise<$_model.DeleteResourceMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceMemberWithOptions(organizationId, resourceType, resourceId, accountId, headers, runtime);
  }

  /**
   * 删除标签
   * 
   * @param request - DeleteTagRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTagResponse
   */
  async deleteTagWithOptions(repositoryId: string, request: $_model.DeleteTagRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTagResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.tagName)) {
      query["tagName"] = request.tagName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTag",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/tags/delete`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTagResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTagResponse({}));
  }

  /**
   * 删除标签
   * 
   * @param request - DeleteTagRequest
   * @returns DeleteTagResponse
   */
  async deleteTag(repositoryId: string, request: $_model.DeleteTagRequest): Promise<$_model.DeleteTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTagWithOptions(repositoryId, request, headers, runtime);
  }

  /**
   * 删除用户的SSH Key
   * 
   * @param request - DeleteUserKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserKeyResponse
   */
  async deleteUserKeyWithOptions(keyId: string, request: $_model.DeleteUserKeyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserKeyResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserKey",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v3/user/keys/${$dara.URL.percentEncode(keyId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUserKeyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUserKeyResponse({}));
  }

  /**
   * 删除用户的SSH Key
   * 
   * @param request - DeleteUserKeyRequest
   * @returns DeleteUserKeyResponse
   */
  async deleteUserKey(keyId: string, request: $_model.DeleteUserKeyRequest): Promise<$_model.DeleteUserKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteUserKeyWithOptions(keyId, request, headers, runtime);
  }

  /**
   * 删除变量组
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVariableGroupResponse
   */
  async deleteVariableGroupWithOptions(organizationId: string, id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVariableGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVariableGroup",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/variableGroups/${$dara.URL.percentEncode(id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVariableGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVariableGroupResponse({}));
  }

  /**
   * 删除变量组
   * @returns DeleteVariableGroupResponse
   */
  async deleteVariableGroup(organizationId: string, id: string): Promise<$_model.DeleteVariableGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteVariableGroupWithOptions(organizationId, id, headers, runtime);
  }

  /**
   * 删除工作项
   * 
   * @param request - DeleteWorkitemRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkitemResponse
   */
  async deleteWorkitemWithOptions(organizationId: string, request: $_model.DeleteWorkitemRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWorkitemResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identifier)) {
      query["identifier"] = request.identifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWorkitem",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/workitem/delete`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWorkitemResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWorkitemResponse({}));
  }

  /**
   * 删除工作项
   * 
   * @param request - DeleteWorkitemRequest
   * @returns DeleteWorkitemResponse
   */
  async deleteWorkitem(organizationId: string, request: $_model.DeleteWorkitemRequest): Promise<$_model.DeleteWorkitemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteWorkitemWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 删除所有评论
   * 
   * @param request - DeleteWorkitemAllCommentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkitemAllCommentResponse
   */
  async deleteWorkitemAllCommentWithOptions(organizationId: string, request: $_model.DeleteWorkitemAllCommentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWorkitemAllCommentResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identifier)) {
      query["identifier"] = request.identifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWorkitemAllComment",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/workitems/deleteAllComment`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWorkitemAllCommentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWorkitemAllCommentResponse({}));
  }

  /**
   * 删除所有评论
   * 
   * @param request - DeleteWorkitemAllCommentRequest
   * @returns DeleteWorkitemAllCommentResponse
   */
  async deleteWorkitemAllComment(organizationId: string, request: $_model.DeleteWorkitemAllCommentRequest): Promise<$_model.DeleteWorkitemAllCommentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteWorkitemAllCommentWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 删除单条评论
   * 
   * @param request - DeleteWorkitemCommentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkitemCommentResponse
   */
  async deleteWorkitemCommentWithOptions(organizationId: string, request: $_model.DeleteWorkitemCommentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWorkitemCommentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.commentId)) {
      body["commentId"] = request.commentId;
    }

    if (!$dara.isNull(request.identifier)) {
      body["identifier"] = request.identifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWorkitemComment",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/workitems/deleteComent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWorkitemCommentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWorkitemCommentResponse({}));
  }

  /**
   * 删除单条评论
   * 
   * @param request - DeleteWorkitemCommentRequest
   * @returns DeleteWorkitemCommentResponse
   */
  async deleteWorkitemComment(organizationId: string, request: $_model.DeleteWorkitemCommentRequest): Promise<$_model.DeleteWorkitemCommentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteWorkitemCommentWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 启用部署密钥
   * 
   * @param request - EnableDeployKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableDeployKeyResponse
   */
  async enableDeployKeyWithOptions(repositoryId: string, keyId: string, request: $_model.EnableDeployKeyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EnableDeployKeyResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableDeployKey",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/keys/${$dara.URL.percentEncode(keyId)}/enable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableDeployKeyResponse>(await this.callApi(params, req, runtime), new $_model.EnableDeployKeyResponse({}));
  }

  /**
   * 启用部署密钥
   * 
   * @param request - EnableDeployKeyRequest
   * @returns EnableDeployKeyResponse
   */
  async enableDeployKey(repositoryId: string, keyId: string, request: $_model.EnableDeployKeyRequest): Promise<$_model.EnableDeployKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableDeployKeyWithOptions(repositoryId, keyId, request, headers, runtime);
  }

  /**
   * 执行研发阶段流水线
   * 
   * @param request - ExecuteChangeRequestReleaseStageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteChangeRequestReleaseStageResponse
   */
  async executeChangeRequestReleaseStageWithOptions(appName: string, releaseWorkflowSn: string, releaseStageSn: string, request: $_model.ExecuteChangeRequestReleaseStageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteChangeRequestReleaseStageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.params)) {
      body["params"] = request.params;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteChangeRequestReleaseStage",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/appstack/apps/${$dara.URL.percentEncode(appName)}/releaseWorkflows/${$dara.URL.percentEncode(releaseWorkflowSn)}/releaseStages/${$dara.URL.percentEncode(releaseStageSn)}%3Aexecute`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteChangeRequestReleaseStageResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteChangeRequestReleaseStageResponse({}));
  }

  /**
   * 执行研发阶段流水线
   * 
   * @param request - ExecuteChangeRequestReleaseStageRequest
   * @returns ExecuteChangeRequestReleaseStageResponse
   */
  async executeChangeRequestReleaseStage(appName: string, releaseWorkflowSn: string, releaseStageSn: string, request: $_model.ExecuteChangeRequestReleaseStageRequest): Promise<$_model.ExecuteChangeRequestReleaseStageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeChangeRequestReleaseStageWithOptions(appName, releaseWorkflowSn, releaseStageSn, request, headers, runtime);
  }

  /**
   * 导出Insight custom_value表
   * 
   * @param request - ExportInsightCustomValueRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportInsightCustomValueResponse
   */
  async exportInsightCustomValueWithOptions(organizationId: string, request: $_model.ExportInsightCustomValueRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExportInsightCustomValueResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportInsightCustomValue",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/data/customValues`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportInsightCustomValueResponse>(await this.callApi(params, req, runtime), new $_model.ExportInsightCustomValueResponse({}));
  }

  /**
   * 导出Insight custom_value表
   * 
   * @param request - ExportInsightCustomValueRequest
   * @returns ExportInsightCustomValueResponse
   */
  async exportInsightCustomValue(organizationId: string, request: $_model.ExportInsightCustomValueRequest): Promise<$_model.ExportInsightCustomValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.exportInsightCustomValueWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 导出Insight expected_work_time表数据
   * 
   * @param request - ExportInsightExpectedWorkTimeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportInsightExpectedWorkTimeResponse
   */
  async exportInsightExpectedWorkTimeWithOptions(organizationId: string, request: $_model.ExportInsightExpectedWorkTimeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExportInsightExpectedWorkTimeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportInsightExpectedWorkTime",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/data/expectedWorkTimes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportInsightExpectedWorkTimeResponse>(await this.callApi(params, req, runtime), new $_model.ExportInsightExpectedWorkTimeResponse({}));
  }

  /**
   * 导出Insight expected_work_time表数据
   * 
   * @param request - ExportInsightExpectedWorkTimeRequest
   * @returns ExportInsightExpectedWorkTimeResponse
   */
  async exportInsightExpectedWorkTime(organizationId: string, request: $_model.ExportInsightExpectedWorkTimeRequest): Promise<$_model.ExportInsightExpectedWorkTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.exportInsightExpectedWorkTimeWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 导出Insight field表
   * 
   * @param request - ExportInsightFieldRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportInsightFieldResponse
   */
  async exportInsightFieldWithOptions(organizationId: string, request: $_model.ExportInsightFieldRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExportInsightFieldResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportInsightField",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/data/fields`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportInsightFieldResponse>(await this.callApi(params, req, runtime), new $_model.ExportInsightFieldResponse({}));
  }

  /**
   * 导出Insight field表
   * 
   * @param request - ExportInsightFieldRequest
   * @returns ExportInsightFieldResponse
   */
  async exportInsightField(organizationId: string, request: $_model.ExportInsightFieldRequest): Promise<$_model.ExportInsightFieldResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.exportInsightFieldWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 导出Insight space表数据
   * 
   * @param request - ExportInsightSpaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportInsightSpaceResponse
   */
  async exportInsightSpaceWithOptions(organizationId: string, request: $_model.ExportInsightSpaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExportInsightSpaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportInsightSpace",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/data/spaces`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportInsightSpaceResponse>(await this.callApi(params, req, runtime), new $_model.ExportInsightSpaceResponse({}));
  }

  /**
   * 导出Insight space表数据
   * 
   * @param request - ExportInsightSpaceRequest
   * @returns ExportInsightSpaceResponse
   */
  async exportInsightSpace(organizationId: string, request: $_model.ExportInsightSpaceRequest): Promise<$_model.ExportInsightSpaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.exportInsightSpaceWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 导出Insight space_ref表数据
   * 
   * @param request - ExportInsightSpaceRefRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportInsightSpaceRefResponse
   */
  async exportInsightSpaceRefWithOptions(organizationId: string, request: $_model.ExportInsightSpaceRefRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExportInsightSpaceRefResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportInsightSpaceRef",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/data/spaceRefs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportInsightSpaceRefResponse>(await this.callApi(params, req, runtime), new $_model.ExportInsightSpaceRefResponse({}));
  }

  /**
   * 导出Insight space_ref表数据
   * 
   * @param request - ExportInsightSpaceRefRequest
   * @returns ExportInsightSpaceRefResponse
   */
  async exportInsightSpaceRef(organizationId: string, request: $_model.ExportInsightSpaceRefRequest): Promise<$_model.ExportInsightSpaceRefResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.exportInsightSpaceRefWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 导出Insight sprint表数据
   * 
   * @param request - ExportInsightSprintRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportInsightSprintResponse
   */
  async exportInsightSprintWithOptions(organizationId: string, request: $_model.ExportInsightSprintRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExportInsightSprintResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportInsightSprint",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/data/sprints`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportInsightSprintResponse>(await this.callApi(params, req, runtime), new $_model.ExportInsightSprintResponse({}));
  }

  /**
   * 导出Insight sprint表数据
   * 
   * @param request - ExportInsightSprintRequest
   * @returns ExportInsightSprintResponse
   */
  async exportInsightSprint(organizationId: string, request: $_model.ExportInsightSprintRequest): Promise<$_model.ExportInsightSprintResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.exportInsightSprintWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 导出Insight tag_ref表数据
   * 
   * @param request - ExportInsightTagRefRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportInsightTagRefResponse
   */
  async exportInsightTagRefWithOptions(organizationId: string, request: $_model.ExportInsightTagRefRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExportInsightTagRefResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportInsightTagRef",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/data/tagRefs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportInsightTagRefResponse>(await this.callApi(params, req, runtime), new $_model.ExportInsightTagRefResponse({}));
  }

  /**
   * 导出Insight tag_ref表数据
   * 
   * @param request - ExportInsightTagRefRequest
   * @returns ExportInsightTagRefResponse
   */
  async exportInsightTagRef(organizationId: string, request: $_model.ExportInsightTagRefRequest): Promise<$_model.ExportInsightTagRefResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.exportInsightTagRefWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 导出Insight work_time表数据
   * 
   * @param request - ExportInsightWorkTimeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportInsightWorkTimeResponse
   */
  async exportInsightWorkTimeWithOptions(organizationId: string, request: $_model.ExportInsightWorkTimeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExportInsightWorkTimeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportInsightWorkTime",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/data/workTimes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportInsightWorkTimeResponse>(await this.callApi(params, req, runtime), new $_model.ExportInsightWorkTimeResponse({}));
  }

  /**
   * 导出Insight work_time表数据
   * 
   * @param request - ExportInsightWorkTimeRequest
   * @returns ExportInsightWorkTimeResponse
   */
  async exportInsightWorkTime(organizationId: string, request: $_model.ExportInsightWorkTimeRequest): Promise<$_model.ExportInsightWorkTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.exportInsightWorkTimeWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 导出Insight workitem_stauts表数据
   * 
   * @param request - ExportInsightWorkitemStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportInsightWorkitemStatusResponse
   */
  async exportInsightWorkitemStatusWithOptions(organizationId: string, request: $_model.ExportInsightWorkitemStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExportInsightWorkitemStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportInsightWorkitemStatus",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/data/workitemStatuses`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportInsightWorkitemStatusResponse>(await this.callApi(params, req, runtime), new $_model.ExportInsightWorkitemStatusResponse({}));
  }

  /**
   * 导出Insight workitem_stauts表数据
   * 
   * @param request - ExportInsightWorkitemStatusRequest
   * @returns ExportInsightWorkitemStatusResponse
   */
  async exportInsightWorkitemStatus(organizationId: string, request: $_model.ExportInsightWorkitemStatusRequest): Promise<$_model.ExportInsightWorkitemStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.exportInsightWorkitemStatusWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 导出Insight workitem_stauts表 join workitem_defect_extra表表数据
   * 
   * @param request - ExportInsightWorkitemStatusJoinWorkitemDefectExtraRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportInsightWorkitemStatusJoinWorkitemDefectExtraResponse
   */
  async exportInsightWorkitemStatusJoinWorkitemDefectExtraWithOptions(organizationId: string, request: $_model.ExportInsightWorkitemStatusJoinWorkitemDefectExtraRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExportInsightWorkitemStatusJoinWorkitemDefectExtraResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportInsightWorkitemStatusJoinWorkitemDefectExtra",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/data/workitemStatusJoinWorkitemDefectExtras`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportInsightWorkitemStatusJoinWorkitemDefectExtraResponse>(await this.callApi(params, req, runtime), new $_model.ExportInsightWorkitemStatusJoinWorkitemDefectExtraResponse({}));
  }

  /**
   * 导出Insight workitem_stauts表 join workitem_defect_extra表表数据
   * 
   * @param request - ExportInsightWorkitemStatusJoinWorkitemDefectExtraRequest
   * @returns ExportInsightWorkitemStatusJoinWorkitemDefectExtraResponse
   */
  async exportInsightWorkitemStatusJoinWorkitemDefectExtra(organizationId: string, request: $_model.ExportInsightWorkitemStatusJoinWorkitemDefectExtraRequest): Promise<$_model.ExportInsightWorkitemStatusJoinWorkitemDefectExtraResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.exportInsightWorkitemStatusJoinWorkitemDefectExtraWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 导出Insight workitem_version表数据
   * 
   * @param request - ExportInsightWorkitemVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportInsightWorkitemVersionResponse
   */
  async exportInsightWorkitemVersionWithOptions(organizationId: string, request: $_model.ExportInsightWorkitemVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExportInsightWorkitemVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportInsightWorkitemVersion",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/data/workitemVersions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportInsightWorkitemVersionResponse>(await this.callApi(params, req, runtime), new $_model.ExportInsightWorkitemVersionResponse({}));
  }

  /**
   * 导出Insight workitem_version表数据
   * 
   * @param request - ExportInsightWorkitemVersionRequest
   * @returns ExportInsightWorkitemVersionResponse
   */
  async exportInsightWorkitemVersion(organizationId: string, request: $_model.ExportInsightWorkitemVersionRequest): Promise<$_model.ExportInsightWorkitemVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.exportInsightWorkitemVersionWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 导出Insight workitem_activity表数据
   * 
   * @param request - ExportWorkitemActivityRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportWorkitemActivityResponse
   */
  async exportWorkitemActivityWithOptions(organizationId: string, request: $_model.ExportWorkitemActivityRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExportWorkitemActivityResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportWorkitemActivity",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/data/workitemActivities`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportWorkitemActivityResponse>(await this.callApi(params, req, runtime), new $_model.ExportWorkitemActivityResponse({}));
  }

  /**
   * 导出Insight workitem_activity表数据
   * 
   * @param request - ExportWorkitemActivityRequest
   * @returns ExportWorkitemActivityResponse
   */
  async exportWorkitemActivity(organizationId: string, request: $_model.ExportWorkitemActivityRequest): Promise<$_model.ExportWorkitemActivityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.exportWorkitemActivityWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 查找应用详情
   * 
   * @param request - GetApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationResponse
   */
  async getApplicationWithOptions(appName: string, request: $_model.GetApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplicationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplication",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/appstack/apps/${$dara.URL.percentEncode(appName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApplicationResponse>(await this.callApi(params, req, runtime), new $_model.GetApplicationResponse({}));
  }

  /**
   * 查找应用详情
   * 
   * @param request - GetApplicationRequest
   * @returns GetApplicationResponse
   */
  async getApplication(appName: string, request: $_model.GetApplicationRequest): Promise<$_model.GetApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getApplicationWithOptions(appName, request, headers, runtime);
  }

  /**
   * 查询单个分支
   * 
   * @param request - GetBranchInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBranchInfoResponse
   */
  async getBranchInfoWithOptions(repositoryId: string, request: $_model.GetBranchInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetBranchInfoResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.branchName)) {
      query["branchName"] = request.branchName;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBranchInfo",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/branches/detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBranchInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetBranchInfoResponse({}));
  }

  /**
   * 查询单个分支
   * 
   * @param request - GetBranchInfoRequest
   * @returns GetBranchInfoResponse
   */
  async getBranchInfo(repositoryId: string, request: $_model.GetBranchInfoRequest): Promise<$_model.GetBranchInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBranchInfoWithOptions(repositoryId, request, headers, runtime);
  }

  /**
   * 查询检查运行
   * 
   * @param request - GetCheckRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCheckRunResponse
   */
  async getCheckRunWithOptions(request: $_model.GetCheckRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCheckRunResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.checkRunId)) {
      query["checkRunId"] = request.checkRunId;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.repositoryIdentity)) {
      query["repositoryIdentity"] = request.repositoryIdentity;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCheckRun",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/check_runs/get_check_run`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCheckRunResponse>(await this.callApi(params, req, runtime), new $_model.GetCheckRunResponse({}));
  }

  /**
   * 查询检查运行
   * 
   * @param request - GetCheckRunRequest
   * @returns GetCheckRunResponse
   */
  async getCheckRun(request: $_model.GetCheckRunRequest): Promise<$_model.GetCheckRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCheckRunWithOptions(request, headers, runtime);
  }

  /**
   * 获取企业信息
   * 
   * @param request - GetCodeupOrganizationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCodeupOrganizationResponse
   */
  async getCodeupOrganizationWithOptions(identity: string, request: $_model.GetCodeupOrganizationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCodeupOrganizationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCodeupOrganization",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/organization/${$dara.URL.percentEncode(identity)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCodeupOrganizationResponse>(await this.callApi(params, req, runtime), new $_model.GetCodeupOrganizationResponse({}));
  }

  /**
   * 获取企业信息
   * 
   * @param request - GetCodeupOrganizationRequest
   * @returns GetCodeupOrganizationResponse
   */
  async getCodeupOrganization(identity: string, request: $_model.GetCodeupOrganizationRequest): Promise<$_model.GetCodeupOrganizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCodeupOrganizationWithOptions(identity, request, headers, runtime);
  }

  /**
   * 获取比较详情
   * 
   * @param request - GetCompareDetailRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCompareDetailResponse
   */
  async getCompareDetailWithOptions(repositoryId: string, request: $_model.GetCompareDetailRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCompareDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.from)) {
      query["from"] = request.from;
    }

    if (!$dara.isNull(request.maxDiffByte)) {
      query["maxDiffByte"] = request.maxDiffByte;
    }

    if (!$dara.isNull(request.maxDiffFile)) {
      query["maxDiffFile"] = request.maxDiffFile;
    }

    if (!$dara.isNull(request.mergeBase)) {
      query["mergeBase"] = request.mergeBase;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.to)) {
      query["to"] = request.to;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCompareDetail",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/commits/compare/detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCompareDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetCompareDetailResponse({}));
  }

  /**
   * 获取比较详情
   * 
   * @param request - GetCompareDetailRequest
   * @returns GetCompareDetailResponse
   */
  async getCompareDetail(repositoryId: string, request: $_model.GetCompareDetailRequest): Promise<$_model.GetCompareDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCompareDetailWithOptions(repositoryId, request, headers, runtime);
  }

  /**
   * 获取自定义字段的选项值
   * 
   * @param request - GetCustomFieldOptionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomFieldOptionResponse
   */
  async getCustomFieldOptionWithOptions(organizationId: string, fieldId: string, request: $_model.GetCustomFieldOptionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCustomFieldOptionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.spaceIdentifier)) {
      query["spaceIdentifier"] = request.spaceIdentifier;
    }

    if (!$dara.isNull(request.spaceType)) {
      query["spaceType"] = request.spaceType;
    }

    if (!$dara.isNull(request.workitemTypeIdentifier)) {
      query["workitemTypeIdentifier"] = request.workitemTypeIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCustomFieldOption",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/fields/${$dara.URL.percentEncode(fieldId)}/getCustomOption`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCustomFieldOptionResponse>(await this.callApi(params, req, runtime), new $_model.GetCustomFieldOptionResponse({}));
  }

  /**
   * 获取自定义字段的选项值
   * 
   * @param request - GetCustomFieldOptionRequest
   * @returns GetCustomFieldOptionResponse
   */
  async getCustomFieldOption(organizationId: string, fieldId: string, request: $_model.GetCustomFieldOptionRequest): Promise<$_model.GetCustomFieldOptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCustomFieldOptionWithOptions(organizationId, fieldId, request, headers, runtime);
  }

  /**
   * 查询文件
   * 
   * @param request - GetFileBlobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFileBlobsResponse
   */
  async getFileBlobsWithOptions(repositoryId: string, request: $_model.GetFileBlobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetFileBlobsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.filePath)) {
      query["filePath"] = request.filePath;
    }

    if (!$dara.isNull(request.from)) {
      query["from"] = request.from;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.ref)) {
      query["ref"] = request.ref;
    }

    if (!$dara.isNull(request.to)) {
      query["to"] = request.to;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFileBlobs",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/files/blobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFileBlobsResponse>(await this.callApi(params, req, runtime), new $_model.GetFileBlobsResponse({}));
  }

  /**
   * 查询文件
   * 
   * @param request - GetFileBlobsRequest
   * @returns GetFileBlobsResponse
   */
  async getFileBlobs(repositoryId: string, request: $_model.GetFileBlobsRequest): Promise<$_model.GetFileBlobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFileBlobsWithOptions(repositoryId, request, headers, runtime);
  }

  /**
   * 获取文件上一次提交信息
   * 
   * @param request - GetFileLastCommitRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFileLastCommitResponse
   */
  async getFileLastCommitWithOptions(repositoryId: string, request: $_model.GetFileLastCommitRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetFileLastCommitResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.filePath)) {
      query["filePath"] = request.filePath;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.sha)) {
      query["sha"] = request.sha;
    }

    if (!$dara.isNull(request.showSignature)) {
      query["showSignature"] = request.showSignature;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFileLastCommit",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/files/lastCommit`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFileLastCommitResponse>(await this.callApi(params, req, runtime), new $_model.GetFileLastCommitResponse({}));
  }

  /**
   * 获取文件上一次提交信息
   * 
   * @param request - GetFileLastCommitRequest
   * @returns GetFileLastCommitResponse
   */
  async getFileLastCommit(repositoryId: string, request: $_model.GetFileLastCommitRequest): Promise<$_model.GetFileLastCommitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFileLastCommitWithOptions(repositoryId, request, headers, runtime);
  }

  /**
   * 获取标签分类
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFlowTagGroupResponse
   */
  async getFlowTagGroupWithOptions(organizationId: string, id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetFlowTagGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFlowTagGroup",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/flow/tagGroups/${$dara.URL.percentEncode(id)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFlowTagGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetFlowTagGroupResponse({}));
  }

  /**
   * 获取标签分类
   * @returns GetFlowTagGroupResponse
   */
  async getFlowTagGroup(organizationId: string, id: string): Promise<$_model.GetFlowTagGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFlowTagGroupWithOptions(organizationId, id, headers, runtime);
  }

  /**
   * 根据路径查询代码组
   * 
   * @param request - GetGroupByPathRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGroupByPathResponse
   */
  async getGroupByPathWithOptions(request: $_model.GetGroupByPathRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetGroupByPathResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identity)) {
      query["identity"] = request.identity;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGroupByPath",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/4/groups/find_by_path`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGroupByPathResponse>(await this.callApi(params, req, runtime), new $_model.GetGroupByPathResponse({}));
  }

  /**
   * 根据路径查询代码组
   * 
   * @param request - GetGroupByPathRequest
   * @returns GetGroupByPathResponse
   */
  async getGroupByPath(request: $_model.GetGroupByPathRequest): Promise<$_model.GetGroupByPathResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGroupByPathWithOptions(request, headers, runtime);
  }

  /**
   * 查询代码组信息
   * 
   * @param request - GetGroupDetailRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGroupDetailResponse
   */
  async getGroupDetailWithOptions(request: $_model.GetGroupDetailRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetGroupDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.groupId)) {
      query["groupId"] = request.groupId;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGroupDetail",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/groups/get_detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGroupDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetGroupDetailResponse({}));
  }

  /**
   * 查询代码组信息
   * 
   * @param request - GetGroupDetailRequest
   * @returns GetGroupDetailResponse
   */
  async getGroupDetail(request: $_model.GetGroupDetailRequest): Promise<$_model.GetGroupDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGroupDetailWithOptions(request, headers, runtime);
  }

  /**
   * 获取主机组信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHostGroupResponse
   */
  async getHostGroupWithOptions(organizationId: string, id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetHostGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHostGroup",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/hostGroups/${$dara.URL.percentEncode(id)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHostGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetHostGroupResponse({}));
  }

  /**
   * 获取主机组信息
   * @returns GetHostGroupResponse
   */
  async getHostGroup(organizationId: string, id: string): Promise<$_model.GetHostGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHostGroupWithOptions(organizationId, id, headers, runtime);
  }

  /**
   * 查询合并请求详情
   * 
   * @param request - GetMergeRequestRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMergeRequestResponse
   */
  async getMergeRequestWithOptions(repositoryId: string, localId: string, request: $_model.GetMergeRequestRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMergeRequestResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMergeRequest",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/${$dara.URL.percentEncode(repositoryId)}/merge_requests/${$dara.URL.percentEncode(localId)}/detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMergeRequestResponse>(await this.callApi(params, req, runtime), new $_model.GetMergeRequestResponse({}));
  }

  /**
   * 查询合并请求详情
   * 
   * @param request - GetMergeRequestRequest
   * @returns GetMergeRequestResponse
   */
  async getMergeRequest(repositoryId: string, localId: string, request: $_model.GetMergeRequestRequest): Promise<$_model.GetMergeRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMergeRequestWithOptions(repositoryId, localId, request, headers, runtime);
  }

  /**
   * 查询合并请求的变更信息
   * 
   * @param request - GetMergeRequestChangeTreeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMergeRequestChangeTreeResponse
   */
  async getMergeRequestChangeTreeWithOptions(request: $_model.GetMergeRequestChangeTreeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMergeRequestChangeTreeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.fromPatchSetBizId)) {
      query["fromPatchSetBizId"] = request.fromPatchSetBizId;
    }

    if (!$dara.isNull(request.localId)) {
      query["localId"] = request.localId;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.repositoryIdentity)) {
      query["repositoryIdentity"] = request.repositoryIdentity;
    }

    if (!$dara.isNull(request.toPatchSetBizId)) {
      query["toPatchSetBizId"] = request.toPatchSetBizId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMergeRequestChangeTree",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/merge_requests/diffs/change_tree`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMergeRequestChangeTreeResponse>(await this.callApi(params, req, runtime), new $_model.GetMergeRequestChangeTreeResponse({}));
  }

  /**
   * 查询合并请求的变更信息
   * 
   * @param request - GetMergeRequestChangeTreeRequest
   * @returns GetMergeRequestChangeTreeResponse
   */
  async getMergeRequestChangeTree(request: $_model.GetMergeRequestChangeTreeRequest): Promise<$_model.GetMergeRequestChangeTreeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMergeRequestChangeTreeWithOptions(request, headers, runtime);
  }

  /**
   * 获取企业成员
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOrganizationMemberResponse
   */
  async getOrganizationMemberWithOptions(organizationId: string, accountId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetOrganizationMemberResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOrganizationMember",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/members/${$dara.URL.percentEncode(accountId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOrganizationMemberResponse>(await this.callApi(params, req, runtime), new $_model.GetOrganizationMemberResponse({}));
  }

  /**
   * 获取企业成员
   * @returns GetOrganizationMemberResponse
   */
  async getOrganizationMember(organizationId: string, accountId: string): Promise<$_model.GetOrganizationMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOrganizationMemberWithOptions(organizationId, accountId, headers, runtime);
  }

  /**
   * 获取流水线
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPipelineResponse
   */
  async getPipelineWithOptions(organizationId: string, pipelineId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPipelineResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPipeline",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipelines/${$dara.URL.percentEncode(pipelineId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPipelineResponse>(await this.callApi(params, req, runtime), new $_model.GetPipelineResponse({}));
  }

  /**
   * 获取流水线
   * @returns GetPipelineResponse
   */
  async getPipeline(organizationId: string, pipelineId: string): Promise<$_model.GetPipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPipelineWithOptions(organizationId, pipelineId, headers, runtime);
  }

  /**
   * 获取构建物下载链接
   * 
   * @param request - GetPipelineArtifactUrlRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPipelineArtifactUrlResponse
   */
  async getPipelineArtifactUrlWithOptions(organizationId: string, request: $_model.GetPipelineArtifactUrlRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPipelineArtifactUrlResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    if (!$dara.isNull(request.filePath)) {
      query["filePath"] = request.filePath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPipelineArtifactUrl",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipeline/getArtifactDownloadUrl`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPipelineArtifactUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetPipelineArtifactUrlResponse({}));
  }

  /**
   * 获取构建物下载链接
   * 
   * @param request - GetPipelineArtifactUrlRequest
   * @returns GetPipelineArtifactUrlResponse
   */
  async getPipelineArtifactUrl(organizationId: string, request: $_model.GetPipelineArtifactUrlRequest): Promise<$_model.GetPipelineArtifactUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPipelineArtifactUrlWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 获取emase构建物下载链接
   * 
   * @param request - GetPipelineEmasArtifactUrlRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPipelineEmasArtifactUrlResponse
   */
  async getPipelineEmasArtifactUrlWithOptions(organizationId: string, emasJobInstanceId: string, md5: string, pipelineId: string, pipelineRunId: string, request: $_model.GetPipelineEmasArtifactUrlRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPipelineEmasArtifactUrlResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serviceConnectionId)) {
      query["serviceConnectionId"] = request.serviceConnectionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPipelineEmasArtifactUrl",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipeline/${$dara.URL.percentEncode(pipelineId)}/pipelineRun/${$dara.URL.percentEncode(pipelineRunId)}/emas/artifact/${$dara.URL.percentEncode(emasJobInstanceId)}/${$dara.URL.percentEncode(md5)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPipelineEmasArtifactUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetPipelineEmasArtifactUrlResponse({}));
  }

  /**
   * 获取emase构建物下载链接
   * 
   * @param request - GetPipelineEmasArtifactUrlRequest
   * @returns GetPipelineEmasArtifactUrlResponse
   */
  async getPipelineEmasArtifactUrl(organizationId: string, emasJobInstanceId: string, md5: string, pipelineId: string, pipelineRunId: string, request: $_model.GetPipelineEmasArtifactUrlRequest): Promise<$_model.GetPipelineEmasArtifactUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPipelineEmasArtifactUrlWithOptions(organizationId, emasJobInstanceId, md5, pipelineId, pipelineRunId, request, headers, runtime);
  }

  /**
   * 获取流水线分组
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPipelineGroupResponse
   */
  async getPipelineGroupWithOptions(organizationId: string, groupId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPipelineGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPipelineGroup",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipelineGroups/${$dara.URL.percentEncode(groupId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPipelineGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetPipelineGroupResponse({}));
  }

  /**
   * 获取流水线分组
   * @returns GetPipelineGroupResponse
   */
  async getPipelineGroup(organizationId: string, groupId: string): Promise<$_model.GetPipelineGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPipelineGroupWithOptions(organizationId, groupId, headers, runtime);
  }

  /**
   * 获取流水线运行信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPipelineRunResponse
   */
  async getPipelineRunWithOptions(organizationId: string, pipelineId: string, pipelineRunId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPipelineRunResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPipelineRun",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipelines/${$dara.URL.percentEncode(pipelineId)}/pipelineRuns/${$dara.URL.percentEncode(pipelineRunId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPipelineRunResponse>(await this.callApi(params, req, runtime), new $_model.GetPipelineRunResponse({}));
  }

  /**
   * 获取流水线运行信息
   * @returns GetPipelineRunResponse
   */
  async getPipelineRun(organizationId: string, pipelineId: string, pipelineRunId: string): Promise<$_model.GetPipelineRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPipelineRunWithOptions(organizationId, pipelineId, pipelineRunId, headers, runtime);
  }

  /**
   * 获取扫描报告下载链接
   * 
   * @param request - GetPipelineScanReportUrlRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPipelineScanReportUrlResponse
   */
  async getPipelineScanReportUrlWithOptions(organizationId: string, request: $_model.GetPipelineScanReportUrlRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPipelineScanReportUrlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.reportPath)) {
      body["reportPath"] = request.reportPath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPipelineScanReportUrl",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipeline/getPipelineScanReportUrl`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPipelineScanReportUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetPipelineScanReportUrlResponse({}));
  }

  /**
   * 获取扫描报告下载链接
   * 
   * @param request - GetPipelineScanReportUrlRequest
   * @returns GetPipelineScanReportUrlResponse
   */
  async getPipelineScanReportUrl(organizationId: string, request: $_model.GetPipelineScanReportUrlRequest): Promise<$_model.GetPipelineScanReportUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPipelineScanReportUrlWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 根据id获取项目详情-Projex
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectInfoResponse
   */
  async getProjectInfoWithOptions(organizationId: string, projectId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetProjectInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProjectInfo",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/project/${$dara.URL.percentEncode(projectId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProjectInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetProjectInfoResponse({}));
  }

  /**
   * 根据id获取项目详情-Projex
   * @returns GetProjectInfoResponse
   */
  async getProjectInfo(organizationId: string, projectId: string): Promise<$_model.GetProjectInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectInfoWithOptions(organizationId, projectId, headers, runtime);
  }

  /**
   * 查询代码库成员
   * 
   * @param request - GetProjectMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectMemberResponse
   */
  async getProjectMemberWithOptions(repositoryId: string, aliyunPk: string, request: $_model.GetProjectMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetProjectMemberResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProjectMember",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/members/get/${$dara.URL.percentEncode(aliyunPk)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProjectMemberResponse>(await this.callApi(params, req, runtime), new $_model.GetProjectMemberResponse({}));
  }

  /**
   * 查询代码库成员
   * 
   * @param request - GetProjectMemberRequest
   * @returns GetProjectMemberResponse
   */
  async getProjectMember(repositoryId: string, aliyunPk: string, request: $_model.GetProjectMemberRequest): Promise<$_model.GetProjectMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectMemberWithOptions(repositoryId, aliyunPk, request, headers, runtime);
  }

  /**
   * 获取研发阶段流水线运行实例
   * 
   * @param request - GetReleaseStagePipelineRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetReleaseStagePipelineRunResponse
   */
  async getReleaseStagePipelineRunWithOptions(appName: string, releaseWorkflowSn: string, releaseStageSn: string, executionNumber: string, request: $_model.GetReleaseStagePipelineRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetReleaseStagePipelineRunResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetReleaseStagePipelineRun",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/appstack/apps/${$dara.URL.percentEncode(appName)}/releaseWorkflows/${$dara.URL.percentEncode(releaseWorkflowSn)}/releaseStages/${$dara.URL.percentEncode(releaseStageSn)}/executions/${$dara.URL.percentEncode(executionNumber)}%3AgetPipelineRun`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetReleaseStagePipelineRunResponse>(await this.callApi(params, req, runtime), new $_model.GetReleaseStagePipelineRunResponse({}));
  }

  /**
   * 获取研发阶段流水线运行实例
   * 
   * @param request - GetReleaseStagePipelineRunRequest
   * @returns GetReleaseStagePipelineRunResponse
   */
  async getReleaseStagePipelineRun(appName: string, releaseWorkflowSn: string, releaseStageSn: string, executionNumber: string, request: $_model.GetReleaseStagePipelineRunRequest): Promise<$_model.GetReleaseStagePipelineRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getReleaseStagePipelineRunWithOptions(appName, releaseWorkflowSn, releaseStageSn, executionNumber, request, headers, runtime);
  }

  /**
   * 使用代码库ID或路径查询代码库信息
   * 
   * @param request - GetRepositoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRepositoryResponse
   */
  async getRepositoryWithOptions(request: $_model.GetRepositoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRepositoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.identity)) {
      query["identity"] = request.identity;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRepository",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/get`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRepositoryResponse>(await this.callApi(params, req, runtime), new $_model.GetRepositoryResponse({}));
  }

  /**
   * 使用代码库ID或路径查询代码库信息
   * 
   * @param request - GetRepositoryRequest
   * @returns GetRepositoryResponse
   */
  async getRepository(request: $_model.GetRepositoryRequest): Promise<$_model.GetRepositoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepositoryWithOptions(request, headers, runtime);
  }

  /**
   * 查询代码库提交信息
   * 
   * @param request - GetRepositoryCommitRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRepositoryCommitResponse
   */
  async getRepositoryCommitWithOptions(repositoryId: string, sha: string, request: $_model.GetRepositoryCommitRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRepositoryCommitResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.showSignature)) {
      query["showSignature"] = request.showSignature;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRepositoryCommit",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/commits/${$dara.URL.percentEncode(sha)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRepositoryCommitResponse>(await this.callApi(params, req, runtime), new $_model.GetRepositoryCommitResponse({}));
  }

  /**
   * 查询代码库提交信息
   * 
   * @param request - GetRepositoryCommitRequest
   * @returns GetRepositoryCommitResponse
   */
  async getRepositoryCommit(repositoryId: string, sha: string, request: $_model.GetRepositoryCommitRequest): Promise<$_model.GetRepositoryCommitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepositoryCommitWithOptions(repositoryId, sha, request, headers, runtime);
  }

  /**
   * 查询单个标签
   * 
   * @param request - GetRepositoryTagRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRepositoryTagResponse
   */
  async getRepositoryTagWithOptions(repositoryId: string, request: $_model.GetRepositoryTagRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRepositoryTagResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.tagName)) {
      query["tagName"] = request.tagName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRepositoryTag",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/tag/info`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRepositoryTagResponse>(await this.callApi(params, req, runtime), new $_model.GetRepositoryTagResponse({}));
  }

  /**
   * 查询单个标签
   * 
   * @param request - GetRepositoryTagRequest
   * @returns GetRepositoryTagResponse
   */
  async getRepositoryTag(repositoryId: string, request: $_model.GetRepositoryTagRequest): Promise<$_model.GetRepositoryTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepositoryTagWithOptions(repositoryId, request, headers, runtime);
  }

  /**
   * 预览代码片段
   * 
   * @param request - GetSearchCodePreviewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSearchCodePreviewResponse
   */
  async getSearchCodePreviewWithOptions(request: $_model.GetSearchCodePreviewRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSearchCodePreviewResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docId)) {
      query["docId"] = request.docId;
    }

    if (!$dara.isNull(request.isDsl)) {
      query["isDsl"] = request.isDsl;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSearchCodePreview",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/search/code_preview`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSearchCodePreviewResponse>(await this.callApi(params, req, runtime), new $_model.GetSearchCodePreviewResponse({}));
  }

  /**
   * 预览代码片段
   * 
   * @param request - GetSearchCodePreviewRequest
   * @returns GetSearchCodePreviewResponse
   */
  async getSearchCodePreview(request: $_model.GetSearchCodePreviewRequest): Promise<$_model.GetSearchCodePreviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSearchCodePreviewWithOptions(request, headers, runtime);
  }

  /**
   * 获取迭代详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSprintInfoResponse
   */
  async getSprintInfoWithOptions(organizationId: string, sprintId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSprintInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSprintInfo",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/sprints/${$dara.URL.percentEncode(sprintId)}/getSprintinfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSprintInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetSprintInfoResponse({}));
  }

  /**
   * 获取迭代详情
   * @returns GetSprintInfoResponse
   */
  async getSprintInfo(organizationId: string, sprintId: string): Promise<$_model.GetSprintInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSprintInfoWithOptions(organizationId, sprintId, headers, runtime);
  }

  /**
   * 获取测试计划中的测试用例列表
   * 
   * @param request - GetTestResultListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTestResultListResponse
   */
  async getTestResultListWithOptions(organizationId: string, testPlanIdentifier: string, request: $_model.GetTestResultListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTestResultListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.conditions)) {
      body["conditions"] = request.conditions;
    }

    if (!$dara.isNull(request.directoryIdentifier)) {
      body["directoryIdentifier"] = request.directoryIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTestResultList",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/testhub/testplan/${$dara.URL.percentEncode(testPlanIdentifier)}/testresults`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTestResultListResponse>(await this.callApi(params, req, runtime), new $_model.GetTestResultListResponse({}));
  }

  /**
   * 获取测试计划中的测试用例列表
   * 
   * @param request - GetTestResultListRequest
   * @returns GetTestResultListResponse
   */
  async getTestResultList(organizationId: string, testPlanIdentifier: string, request: $_model.GetTestResultListRequest): Promise<$_model.GetTestResultListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTestResultListWithOptions(organizationId, testPlanIdentifier, request, headers, runtime);
  }

  /**
   * 获取测试用例列表
   * 
   * @param request - GetTestcaseListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTestcaseListResponse
   */
  async getTestcaseListWithOptions(organizationId: string, request: $_model.GetTestcaseListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTestcaseListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.conditions)) {
      body["conditions"] = request.conditions;
    }

    if (!$dara.isNull(request.directoryIdentifier)) {
      body["directoryIdentifier"] = request.directoryIdentifier;
    }

    if (!$dara.isNull(request.maxResult)) {
      body["maxResult"] = request.maxResult;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.spaceIdentifier)) {
      body["spaceIdentifier"] = request.spaceIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTestcaseList",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/testhub/testcases`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTestcaseListResponse>(await this.callApi(params, req, runtime), new $_model.GetTestcaseListResponse({}));
  }

  /**
   * 获取测试用例列表
   * 
   * @param request - GetTestcaseListRequest
   * @returns GetTestcaseListResponse
   */
  async getTestcaseList(organizationId: string, request: $_model.GetTestcaseListRequest): Promise<$_model.GetTestcaseListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTestcaseListWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 查询当前用户信息
   * 
   * @param request - GetUserInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserInfoResponse
   */
  async getUserInfoWithOptions(request: $_model.GetUserInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserInfoResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserInfo",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/users/current`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetUserInfoResponse({}));
  }

  /**
   * 查询当前用户信息
   * 
   * @param request - GetUserInfoRequest
   * @returns GetUserInfoResponse
   */
  async getUserInfo(request: $_model.GetUserInfoRequest): Promise<$_model.GetUserInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserInfoWithOptions(request, headers, runtime);
  }

  /**
   * 获取部署单信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVMDeployOrderResponse
   */
  async getVMDeployOrderWithOptions(organizationId: string, pipelineId: string, deployOrderId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetVMDeployOrderResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVMDeployOrder",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipelines/${$dara.URL.percentEncode(pipelineId)}/deploy/${$dara.URL.percentEncode(deployOrderId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVMDeployOrderResponse>(await this.callApi(params, req, runtime), new $_model.GetVMDeployOrderResponse({}));
  }

  /**
   * 获取部署单信息
   * @returns GetVMDeployOrderResponse
   */
  async getVMDeployOrder(organizationId: string, pipelineId: string, deployOrderId: string): Promise<$_model.GetVMDeployOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getVMDeployOrderWithOptions(organizationId, pipelineId, deployOrderId, headers, runtime);
  }

  /**
   * 获取变量组
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVariableGroupResponse
   */
  async getVariableGroupWithOptions(organizationId: string, id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetVariableGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVariableGroup",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/variableGroups/${$dara.URL.percentEncode(id)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVariableGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetVariableGroupResponse({}));
  }

  /**
   * 获取变量组
   * @returns GetVariableGroupResponse
   */
  async getVariableGroup(organizationId: string, id: string): Promise<$_model.GetVariableGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getVariableGroupWithOptions(organizationId, id, headers, runtime);
  }

  /**
   * 获取工作项动态
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkItemActivityResponse
   */
  async getWorkItemActivityWithOptions(organizationId: string, workitemId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkItemActivityResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkItemActivity",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/workitems/${$dara.URL.percentEncode(workitemId)}/getActivity`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkItemActivityResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkItemActivityResponse({}));
  }

  /**
   * 获取工作项动态
   * @returns GetWorkItemActivityResponse
   */
  async getWorkItemActivity(organizationId: string, workitemId: string): Promise<$_model.GetWorkItemActivityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWorkItemActivityWithOptions(organizationId, workitemId, headers, runtime);
  }

  /**
   * 根据id获取工作项详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkItemInfoResponse
   */
  async getWorkItemInfoWithOptions(organizationId: string, workitemId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkItemInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkItemInfo",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/workitems/${$dara.URL.percentEncode(workitemId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkItemInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkItemInfoResponse({}));
  }

  /**
   * 根据id获取工作项详情
   * @returns GetWorkItemInfoResponse
   */
  async getWorkItemInfo(organizationId: string, workitemId: string): Promise<$_model.GetWorkItemInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWorkItemInfoWithOptions(organizationId, workitemId, headers, runtime);
  }

  /**
   * 获取工作项工作流信息
   * 
   * @param request - GetWorkItemWorkFlowInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkItemWorkFlowInfoResponse
   */
  async getWorkItemWorkFlowInfoWithOptions(organizationId: string, workitemId: string, request: $_model.GetWorkItemWorkFlowInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkItemWorkFlowInfoResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configurationId)) {
      query["configurationId"] = request.configurationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkItemWorkFlowInfo",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/workitems/${$dara.URL.percentEncode(workitemId)}/getWorkflowInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkItemWorkFlowInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkItemWorkFlowInfoResponse({}));
  }

  /**
   * 获取工作项工作流信息
   * 
   * @param request - GetWorkItemWorkFlowInfoRequest
   * @returns GetWorkItemWorkFlowInfoResponse
   */
  async getWorkItemWorkFlowInfo(organizationId: string, workitemId: string, request: $_model.GetWorkItemWorkFlowInfoRequest): Promise<$_model.GetWorkItemWorkFlowInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWorkItemWorkFlowInfoWithOptions(organizationId, workitemId, request, headers, runtime);
  }

  /**
   * 获取附件上传的元信息
   * 
   * @param request - GetWorkitemAttachmentCreatemetaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkitemAttachmentCreatemetaResponse
   */
  async getWorkitemAttachmentCreatemetaWithOptions(organizationId: string, workitemIdentifier: string, request: $_model.GetWorkitemAttachmentCreatemetaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkitemAttachmentCreatemetaResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkitemAttachmentCreatemeta",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/workitem/${$dara.URL.percentEncode(workitemIdentifier)}/attachment/createmeta`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkitemAttachmentCreatemetaResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkitemAttachmentCreatemetaResponse({}));
  }

  /**
   * 获取附件上传的元信息
   * 
   * @param request - GetWorkitemAttachmentCreatemetaRequest
   * @returns GetWorkitemAttachmentCreatemetaResponse
   */
  async getWorkitemAttachmentCreatemeta(organizationId: string, workitemIdentifier: string, request: $_model.GetWorkitemAttachmentCreatemetaRequest): Promise<$_model.GetWorkitemAttachmentCreatemetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWorkitemAttachmentCreatemetaWithOptions(organizationId, workitemIdentifier, request, headers, runtime);
  }

  /**
   * 获得所有评论
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkitemCommentListResponse
   */
  async getWorkitemCommentListWithOptions(organizationId: string, workitemId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkitemCommentListResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkitemCommentList",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/workitems/${$dara.URL.percentEncode(workitemId)}/commentList`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkitemCommentListResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkitemCommentListResponse({}));
  }

  /**
   * 获得所有评论
   * @returns GetWorkitemCommentListResponse
   */
  async getWorkitemCommentList(organizationId: string, workitemId: string): Promise<$_model.GetWorkitemCommentListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWorkitemCommentListWithOptions(organizationId, workitemId, headers, runtime);
  }

  /**
   * 获取工作项文件信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkitemFileResponse
   */
  async getWorkitemFileWithOptions(organizationId: string, workitemIdentifier: string, fileIdentifier: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkitemFileResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkitemFile",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/workitem/${$dara.URL.percentEncode(workitemIdentifier)}/files/${$dara.URL.percentEncode(fileIdentifier)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkitemFileResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkitemFileResponse({}));
  }

  /**
   * 获取工作项文件信息
   * @returns GetWorkitemFileResponse
   */
  async getWorkitemFile(organizationId: string, workitemIdentifier: string, fileIdentifier: string): Promise<$_model.GetWorkitemFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWorkitemFileWithOptions(organizationId, workitemIdentifier, fileIdentifier, headers, runtime);
  }

  /**
   * 获得一个工作项的指定关联项
   * 
   * @param request - GetWorkitemRelationsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkitemRelationsResponse
   */
  async getWorkitemRelationsWithOptions(organizationId: string, workitemId: string, request: $_model.GetWorkitemRelationsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkitemRelationsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.relationType)) {
      query["relationType"] = request.relationType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkitemRelations",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/workitems/${$dara.URL.percentEncode(workitemId)}/getRelations`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkitemRelationsResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkitemRelationsResponse({}));
  }

  /**
   * 获得一个工作项的指定关联项
   * 
   * @param request - GetWorkitemRelationsRequest
   * @returns GetWorkitemRelationsResponse
   */
  async getWorkitemRelations(organizationId: string, workitemId: string, request: $_model.GetWorkitemRelationsRequest): Promise<$_model.GetWorkitemRelationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWorkitemRelationsWithOptions(organizationId, workitemId, request, headers, runtime);
  }

  /**
   * 获得一个企业下所有工时类型
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkitemTimeTypeListResponse
   */
  async getWorkitemTimeTypeListWithOptions(organizationId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkitemTimeTypeListResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkitemTimeTypeList",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/workitems/type/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkitemTimeTypeListResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkitemTimeTypeListResponse({}));
  }

  /**
   * 获得一个企业下所有工时类型
   * @returns GetWorkitemTimeTypeListResponse
   */
  async getWorkitemTimeTypeList(organizationId: string): Promise<$_model.GetWorkitemTimeTypeListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWorkitemTimeTypeListWithOptions(organizationId, headers, runtime);
  }

  /**
   * 加入流水线分组
   * 
   * @param request - JoinPipelineGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns JoinPipelineGroupResponse
   */
  async joinPipelineGroupWithOptions(organizationId: string, request: $_model.JoinPipelineGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.JoinPipelineGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      query["groupId"] = request.groupId;
    }

    if (!$dara.isNull(request.pipelineIds)) {
      query["pipelineIds"] = request.pipelineIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "JoinPipelineGroup",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipelineGroups/join`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.JoinPipelineGroupResponse>(await this.callApi(params, req, runtime), new $_model.JoinPipelineGroupResponse({}));
  }

  /**
   * 加入流水线分组
   * 
   * @param request - JoinPipelineGroupRequest
   * @returns JoinPipelineGroupResponse
   */
  async joinPipelineGroup(organizationId: string, request: $_model.JoinPipelineGroupRequest): Promise<$_model.JoinPipelineGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.joinPipelineGroupWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 关联合并请求Label
   * 
   * @param request - LinkMergeRequestLabelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LinkMergeRequestLabelResponse
   */
  async linkMergeRequestLabelWithOptions(request: $_model.LinkMergeRequestLabelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.LinkMergeRequestLabelResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.localId)) {
      query["localId"] = request.localId;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.repositoryIdentity)) {
      query["repositoryIdentity"] = request.repositoryIdentity;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labelIds)) {
      body["labelIds"] = request.labelIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "LinkMergeRequestLabel",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/merge_requests/link_labels`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.LinkMergeRequestLabelResponse>(await this.callApi(params, req, runtime), new $_model.LinkMergeRequestLabelResponse({}));
  }

  /**
   * 关联合并请求Label
   * 
   * @param request - LinkMergeRequestLabelRequest
   * @returns LinkMergeRequestLabelResponse
   */
  async linkMergeRequestLabel(request: $_model.LinkMergeRequestLabelRequest): Promise<$_model.LinkMergeRequestLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.linkMergeRequestLabelWithOptions(request, headers, runtime);
  }

  /**
   * 查找应用下所有的研发流程
   * 
   * @param request - ListAllReleaseWorkflowsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAllReleaseWorkflowsResponse
   */
  async listAllReleaseWorkflowsWithOptions(appName: string, request: $_model.ListAllReleaseWorkflowsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAllReleaseWorkflowsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAllReleaseWorkflows",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/appstack/apps/${$dara.URL.percentEncode(appName)}/releaseWorkflows`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $dara.cast<$_model.ListAllReleaseWorkflowsResponse>(await this.callApi(params, req, runtime), new $_model.ListAllReleaseWorkflowsResponse({}));
  }

  /**
   * 查找应用下所有的研发流程
   * 
   * @param request - ListAllReleaseWorkflowsRequest
   * @returns ListAllReleaseWorkflowsResponse
   */
  async listAllReleaseWorkflows(appName: string, request: $_model.ListAllReleaseWorkflowsRequest): Promise<$_model.ListAllReleaseWorkflowsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAllReleaseWorkflowsWithOptions(appName, request, headers, runtime);
  }

  /**
   * 查询研发阶段执行记录集成变更信息
   * 
   * @param request - ListAppReleaseStageExecutionIntegratedMetadataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppReleaseStageExecutionIntegratedMetadataResponse
   */
  async listAppReleaseStageExecutionIntegratedMetadataWithOptions(appName: string, releaseWorkflowSn: string, releaseStageSn: string, executionNumber: string, request: $_model.ListAppReleaseStageExecutionIntegratedMetadataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppReleaseStageExecutionIntegratedMetadataResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppReleaseStageExecutionIntegratedMetadata",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/appstack/apps/${$dara.URL.percentEncode(appName)}/releaseWorkflows/${$dara.URL.percentEncode(releaseWorkflowSn)}/releaseStages/${$dara.URL.percentEncode(releaseStageSn)}/executions/${$dara.URL.percentEncode(executionNumber)}/integratedMetadata`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $dara.cast<$_model.ListAppReleaseStageExecutionIntegratedMetadataResponse>(await this.callApi(params, req, runtime), new $_model.ListAppReleaseStageExecutionIntegratedMetadataResponse({}));
  }

  /**
   * 查询研发阶段执行记录集成变更信息
   * 
   * @param request - ListAppReleaseStageExecutionIntegratedMetadataRequest
   * @returns ListAppReleaseStageExecutionIntegratedMetadataResponse
   */
  async listAppReleaseStageExecutionIntegratedMetadata(appName: string, releaseWorkflowSn: string, releaseStageSn: string, executionNumber: string, request: $_model.ListAppReleaseStageExecutionIntegratedMetadataRequest): Promise<$_model.ListAppReleaseStageExecutionIntegratedMetadataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAppReleaseStageExecutionIntegratedMetadataWithOptions(appName, releaseWorkflowSn, releaseStageSn, executionNumber, request, headers, runtime);
  }

  /**
   * 批量查询研发阶段执行记录
   * 
   * @param request - ListAppReleaseStageExecutionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppReleaseStageExecutionsResponse
   */
  async listAppReleaseStageExecutionsWithOptions(appName: string, releaseWorkflowSn: string, releaseStageSn: string, request: $_model.ListAppReleaseStageExecutionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppReleaseStageExecutionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pagination)) {
      query["pagination"] = request.pagination;
    }

    if (!$dara.isNull(request.perPage)) {
      query["perPage"] = request.perPage;
    }

    if (!$dara.isNull(request.sort)) {
      query["sort"] = request.sort;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppReleaseStageExecutions",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/appstack/apps/${$dara.URL.percentEncode(appName)}/releaseWorkflows/${$dara.URL.percentEncode(releaseWorkflowSn)}/releaseStages/${$dara.URL.percentEncode(releaseStageSn)}/executions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppReleaseStageExecutionsResponse>(await this.callApi(params, req, runtime), new $_model.ListAppReleaseStageExecutionsResponse({}));
  }

  /**
   * 批量查询研发阶段执行记录
   * 
   * @param request - ListAppReleaseStageExecutionsRequest
   * @returns ListAppReleaseStageExecutionsResponse
   */
  async listAppReleaseStageExecutions(appName: string, releaseWorkflowSn: string, releaseStageSn: string, request: $_model.ListAppReleaseStageExecutionsRequest): Promise<$_model.ListAppReleaseStageExecutionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAppReleaseStageExecutionsWithOptions(appName, releaseWorkflowSn, releaseStageSn, request, headers, runtime);
  }

  /**
   * 查找应用成员列表
   * 
   * @param request - ListApplicationMembersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationMembersResponse
   */
  async listApplicationMembersWithOptions(appName: string, request: $_model.ListApplicationMembersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationMembersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplicationMembers",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/appstack/apps/${$dara.URL.percentEncode(appName)}/members`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationMembersResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationMembersResponse({}));
  }

  /**
   * 查找应用成员列表
   * 
   * @param request - ListApplicationMembersRequest
   * @returns ListApplicationMembersResponse
   */
  async listApplicationMembers(appName: string, request: $_model.ListApplicationMembersRequest): Promise<$_model.ListApplicationMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listApplicationMembersWithOptions(appName, request, headers, runtime);
  }

  /**
   * 分页查找应用详情
   * 
   * @param request - ListApplicationsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsResponse
   */
  async listApplicationsWithOptions(request: $_model.ListApplicationsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.pagination)) {
      query["pagination"] = request.pagination;
    }

    if (!$dara.isNull(request.perPage)) {
      query["perPage"] = request.perPage;
    }

    if (!$dara.isNull(request.sort)) {
      query["sort"] = request.sort;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplications",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/appstack/apps%3Asearch`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationsResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationsResponse({}));
  }

  /**
   * 分页查找应用详情
   * 
   * @param request - ListApplicationsRequest
   * @returns ListApplicationsResponse
   */
  async listApplications(request: $_model.ListApplicationsRequest): Promise<$_model.ListApplicationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listApplicationsWithOptions(request, headers, runtime);
  }

  /**
   * 查询变更研发流程运行记录
   * 
   * @param request - ListChangeRequestWorkflowExecutionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChangeRequestWorkflowExecutionsResponse
   */
  async listChangeRequestWorkflowExecutionsWithOptions(appName: string, sn: string, request: $_model.ListChangeRequestWorkflowExecutionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListChangeRequestWorkflowExecutionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.perPage)) {
      query["perPage"] = request.perPage;
    }

    if (!$dara.isNull(request.releaseStageSn)) {
      query["releaseStageSn"] = request.releaseStageSn;
    }

    if (!$dara.isNull(request.releaseWorkflowSn)) {
      query["releaseWorkflowSn"] = request.releaseWorkflowSn;
    }

    if (!$dara.isNull(request.sort)) {
      query["sort"] = request.sort;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListChangeRequestWorkflowExecutions",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/appstack/apps/${$dara.URL.percentEncode(appName)}/changeRequests/${$dara.URL.percentEncode(sn)}/executions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListChangeRequestWorkflowExecutionsResponse>(await this.callApi(params, req, runtime), new $_model.ListChangeRequestWorkflowExecutionsResponse({}));
  }

  /**
   * 查询变更研发流程运行记录
   * 
   * @param request - ListChangeRequestWorkflowExecutionsRequest
   * @returns ListChangeRequestWorkflowExecutionsResponse
   */
  async listChangeRequestWorkflowExecutions(appName: string, sn: string, request: $_model.ListChangeRequestWorkflowExecutionsRequest): Promise<$_model.ListChangeRequestWorkflowExecutionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listChangeRequestWorkflowExecutionsWithOptions(appName, sn, request, headers, runtime);
  }

  /**
   * 查询变更列表
   * 
   * @param tmpReq - ListChangeRequestsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChangeRequestsResponse
   */
  async listChangeRequestsWithOptions(appName: string, tmpReq: $_model.ListChangeRequestsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListChangeRequestsResponse> {
    tmpReq.validate();
    let request = new $_model.ListChangeRequestsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.appNameList)) {
      request.appNameListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.appNameList, "appNameList", "json");
    }

    if (!$dara.isNull(tmpReq.ownerIdList)) {
      request.ownerIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ownerIdList, "ownerIdList", "json");
    }

    if (!$dara.isNull(tmpReq.stateList)) {
      request.stateListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.stateList, "stateList", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appNameListShrink)) {
      query["appNameList"] = request.appNameListShrink;
    }

    if (!$dara.isNull(request.displayNameKeyword)) {
      query["displayNameKeyword"] = request.displayNameKeyword;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.ownerIdListShrink)) {
      query["ownerIdList"] = request.ownerIdListShrink;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pagination)) {
      query["pagination"] = request.pagination;
    }

    if (!$dara.isNull(request.perPage)) {
      query["perPage"] = request.perPage;
    }

    if (!$dara.isNull(request.sort)) {
      query["sort"] = request.sort;
    }

    if (!$dara.isNull(request.stateListShrink)) {
      query["stateList"] = request.stateListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListChangeRequests",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/appstack/apps/${$dara.URL.percentEncode(appName)}/changeRequests`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListChangeRequestsResponse>(await this.callApi(params, req, runtime), new $_model.ListChangeRequestsResponse({}));
  }

  /**
   * 查询变更列表
   * 
   * @param request - ListChangeRequestsRequest
   * @returns ListChangeRequestsResponse
   */
  async listChangeRequests(appName: string, request: $_model.ListChangeRequestsRequest): Promise<$_model.ListChangeRequestsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listChangeRequestsWithOptions(appName, request, headers, runtime);
  }

  /**
   * 查询检查运行列表
   * 
   * @param request - ListCheckRunsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCheckRunsResponse
   */
  async listCheckRunsWithOptions(request: $_model.ListCheckRunsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListCheckRunsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.ref)) {
      query["ref"] = request.ref;
    }

    if (!$dara.isNull(request.repositoryIdentity)) {
      query["repositoryIdentity"] = request.repositoryIdentity;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCheckRuns",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/check_runs/list_check_runs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCheckRunsResponse>(await this.callApi(params, req, runtime), new $_model.ListCheckRunsResponse({}));
  }

  /**
   * 查询检查运行列表
   * 
   * @param request - ListCheckRunsRequest
   * @returns ListCheckRunsResponse
   */
  async listCheckRuns(request: $_model.ListCheckRunsRequest): Promise<$_model.ListCheckRunsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCheckRunsWithOptions(request, headers, runtime);
  }

  /**
   * 查询提交状态列表
   * 
   * @param request - ListCommitStatusesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCommitStatusesResponse
   */
  async listCommitStatusesWithOptions(request: $_model.ListCommitStatusesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListCommitStatusesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.repositoryIdentity)) {
      query["repositoryIdentity"] = request.repositoryIdentity;
    }

    if (!$dara.isNull(request.sha)) {
      query["sha"] = request.sha;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCommitStatuses",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/repository/commit_statuses/list_commit_statuses`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCommitStatusesResponse>(await this.callApi(params, req, runtime), new $_model.ListCommitStatusesResponse({}));
  }

  /**
   * 查询提交状态列表
   * 
   * @param request - ListCommitStatusesRequest
   * @returns ListCommitStatusesResponse
   */
  async listCommitStatuses(request: $_model.ListCommitStatusesRequest): Promise<$_model.ListCommitStatusesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCommitStatusesWithOptions(request, headers, runtime);
  }

  /**
   * 获取标签分类列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFlowTagGroupsResponse
   */
  async listFlowTagGroupsWithOptions(organizationId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListFlowTagGroupsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFlowTagGroups",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/flow/tagGroups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFlowTagGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListFlowTagGroupsResponse({}));
  }

  /**
   * 获取标签分类列表
   * @returns ListFlowTagGroupsResponse
   */
  async listFlowTagGroups(organizationId: string): Promise<$_model.ListFlowTagGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFlowTagGroupsWithOptions(organizationId, headers, runtime);
  }

  /**
   * 查询组成员列表
   * 
   * @param request - ListGroupMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupMemberResponse
   */
  async listGroupMemberWithOptions(groupId: string, request: $_model.ListGroupMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListGroupMemberResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGroupMember",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/groups/${$dara.URL.percentEncode(groupId)}/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGroupMemberResponse>(await this.callApi(params, req, runtime), new $_model.ListGroupMemberResponse({}));
  }

  /**
   * 查询组成员列表
   * 
   * @param request - ListGroupMemberRequest
   * @returns ListGroupMemberResponse
   */
  async listGroupMember(groupId: string, request: $_model.ListGroupMemberRequest): Promise<$_model.ListGroupMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGroupMemberWithOptions(groupId, request, headers, runtime);
  }

  /**
   * 查询代码组下的库列表
   * 
   * @param request - ListGroupRepositoriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupRepositoriesResponse
   */
  async listGroupRepositoriesWithOptions(groupId: string, request: $_model.ListGroupRepositoriesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListGroupRepositoriesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.search)) {
      query["search"] = request.search;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGroupRepositories",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/groups/${$dara.URL.percentEncode(groupId)}/projects`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGroupRepositoriesResponse>(await this.callApi(params, req, runtime), new $_model.ListGroupRepositoriesResponse({}));
  }

  /**
   * 查询代码组下的库列表
   * 
   * @param request - ListGroupRepositoriesRequest
   * @returns ListGroupRepositoriesResponse
   */
  async listGroupRepositories(groupId: string, request: $_model.ListGroupRepositoriesRequest): Promise<$_model.ListGroupRepositoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGroupRepositoriesWithOptions(groupId, request, headers, runtime);
  }

  /**
   * 获取主机组列表
   * 
   * @param request - ListHostGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHostGroupsResponse
   */
  async listHostGroupsWithOptions(organizationId: string, request: $_model.ListHostGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListHostGroupsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createEndTime)) {
      query["createEndTime"] = request.createEndTime;
    }

    if (!$dara.isNull(request.createStartTime)) {
      query["createStartTime"] = request.createStartTime;
    }

    if (!$dara.isNull(request.creatorAccountIds)) {
      query["creatorAccountIds"] = request.creatorAccountIds;
    }

    if (!$dara.isNull(request.ids)) {
      query["ids"] = request.ids;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageOrder)) {
      query["pageOrder"] = request.pageOrder;
    }

    if (!$dara.isNull(request.pageSort)) {
      query["pageSort"] = request.pageSort;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHostGroups",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/hostGroups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHostGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListHostGroupsResponse({}));
  }

  /**
   * 获取主机组列表
   * 
   * @param request - ListHostGroupsRequest
   * @returns ListHostGroupsResponse
   */
  async listHostGroups(organizationId: string, request: $_model.ListHostGroupsRequest): Promise<$_model.ListHostGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listHostGroupsWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 当前用户加入的企业列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJoinedOrganizationsResponse
   */
  async listJoinedOrganizationsWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListJoinedOrganizationsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJoinedOrganizations",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/users/joinedOrgs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListJoinedOrganizationsResponse>(await this.callApi(params, req, runtime), new $_model.ListJoinedOrganizationsResponse({}));
  }

  /**
   * 当前用户加入的企业列表
   * @returns ListJoinedOrganizationsResponse
   */
  async listJoinedOrganizations(): Promise<$_model.ListJoinedOrganizationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listJoinedOrganizationsWithOptions(headers, runtime);
  }

  /**
   * 查询合并请求评论列表
   * 
   * @param request - ListMergeRequestCommentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMergeRequestCommentsResponse
   */
  async listMergeRequestCommentsWithOptions(request: $_model.ListMergeRequestCommentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMergeRequestCommentsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.localId)) {
      query["localId"] = request.localId;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.repositoryIdentity)) {
      query["repositoryIdentity"] = request.repositoryIdentity;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.commentType)) {
      body["commentType"] = request.commentType;
    }

    if (!$dara.isNull(request.filePath)) {
      body["filePath"] = request.filePath;
    }

    if (!$dara.isNull(request.patchSetBizIds)) {
      body["patchSetBizIds"] = request.patchSetBizIds;
    }

    if (!$dara.isNull(request.resolved)) {
      body["resolved"] = request.resolved;
    }

    if (!$dara.isNull(request.state)) {
      body["state"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMergeRequestComments",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/merge_requests/comments/list_comments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMergeRequestCommentsResponse>(await this.callApi(params, req, runtime), new $_model.ListMergeRequestCommentsResponse({}));
  }

  /**
   * 查询合并请求评论列表
   * 
   * @param request - ListMergeRequestCommentsRequest
   * @returns ListMergeRequestCommentsResponse
   */
  async listMergeRequestComments(request: $_model.ListMergeRequestCommentsRequest): Promise<$_model.ListMergeRequestCommentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMergeRequestCommentsWithOptions(request, headers, runtime);
  }

  /**
   * 查询合并请求文件已读列表
   * 
   * @param request - ListMergeRequestFilesReadsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMergeRequestFilesReadsResponse
   */
  async listMergeRequestFilesReadsWithOptions(request: $_model.ListMergeRequestFilesReadsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMergeRequestFilesReadsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.fromPatchSetBizId)) {
      query["fromPatchSetBizId"] = request.fromPatchSetBizId;
    }

    if (!$dara.isNull(request.localId)) {
      query["localId"] = request.localId;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.repositoryIdentity)) {
      query["repositoryIdentity"] = request.repositoryIdentity;
    }

    if (!$dara.isNull(request.toPatchSetBizId)) {
      query["toPatchSetBizId"] = request.toPatchSetBizId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMergeRequestFilesReads",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/merge_requests/diffs/files_read_infos`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMergeRequestFilesReadsResponse>(await this.callApi(params, req, runtime), new $_model.ListMergeRequestFilesReadsResponse({}));
  }

  /**
   * 查询合并请求文件已读列表
   * 
   * @param request - ListMergeRequestFilesReadsRequest
   * @returns ListMergeRequestFilesReadsResponse
   */
  async listMergeRequestFilesReads(request: $_model.ListMergeRequestFilesReadsRequest): Promise<$_model.ListMergeRequestFilesReadsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMergeRequestFilesReadsWithOptions(request, headers, runtime);
  }

  /**
   * 查询合并请求Label列表
   * 
   * @param request - ListMergeRequestLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMergeRequestLabelsResponse
   */
  async listMergeRequestLabelsWithOptions(request: $_model.ListMergeRequestLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMergeRequestLabelsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.localId)) {
      query["localId"] = request.localId;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.repositoryIdentity)) {
      query["repositoryIdentity"] = request.repositoryIdentity;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMergeRequestLabels",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/merge_requests/labels`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMergeRequestLabelsResponse>(await this.callApi(params, req, runtime), new $_model.ListMergeRequestLabelsResponse({}));
  }

  /**
   * 查询合并请求Label列表
   * 
   * @param request - ListMergeRequestLabelsRequest
   * @returns ListMergeRequestLabelsResponse
   */
  async listMergeRequestLabels(request: $_model.ListMergeRequestLabelsRequest): Promise<$_model.ListMergeRequestLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMergeRequestLabelsWithOptions(request, headers, runtime);
  }

  /**
   * 查询合并请求的版本列表
   * 
   * @param request - ListMergeRequestPatchSetsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMergeRequestPatchSetsResponse
   */
  async listMergeRequestPatchSetsWithOptions(request: $_model.ListMergeRequestPatchSetsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMergeRequestPatchSetsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.localId)) {
      query["localId"] = request.localId;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.repositoryIdentity)) {
      query["repositoryIdentity"] = request.repositoryIdentity;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMergeRequestPatchSets",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/merge_requests/diffs/list_patchsets`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMergeRequestPatchSetsResponse>(await this.callApi(params, req, runtime), new $_model.ListMergeRequestPatchSetsResponse({}));
  }

  /**
   * 查询合并请求的版本列表
   * 
   * @param request - ListMergeRequestPatchSetsRequest
   * @returns ListMergeRequestPatchSetsResponse
   */
  async listMergeRequestPatchSets(request: $_model.ListMergeRequestPatchSetsRequest): Promise<$_model.ListMergeRequestPatchSetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMergeRequestPatchSetsWithOptions(request, headers, runtime);
  }

  /**
   * 查询代码评审列表
   * 
   * @param request - ListMergeRequestsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMergeRequestsResponse
   */
  async listMergeRequestsWithOptions(request: $_model.ListMergeRequestsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMergeRequestsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.authorIds)) {
      query["authorIds"] = request.authorIds;
    }

    if (!$dara.isNull(request.createdAfter)) {
      query["createdAfter"] = request.createdAfter;
    }

    if (!$dara.isNull(request.createdBefore)) {
      query["createdBefore"] = request.createdBefore;
    }

    if (!$dara.isNull(request.filter)) {
      query["filter"] = request.filter;
    }

    if (!$dara.isNull(request.groupIds)) {
      query["groupIds"] = request.groupIds;
    }

    if (!$dara.isNull(request.labelIds)) {
      query["labelIds"] = request.labelIds;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectIds)) {
      query["projectIds"] = request.projectIds;
    }

    if (!$dara.isNull(request.reviewerIds)) {
      query["reviewerIds"] = request.reviewerIds;
    }

    if (!$dara.isNull(request.search)) {
      query["search"] = request.search;
    }

    if (!$dara.isNull(request.sort)) {
      query["sort"] = request.sort;
    }

    if (!$dara.isNull(request.state)) {
      query["state"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMergeRequests",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/merge_requests/advanced_search`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMergeRequestsResponse>(await this.callApi(params, req, runtime), new $_model.ListMergeRequestsResponse({}));
  }

  /**
   * 查询代码评审列表
   * 
   * @param request - ListMergeRequestsRequest
   * @returns ListMergeRequestsResponse
   */
  async listMergeRequests(request: $_model.ListMergeRequestsRequest): Promise<$_model.ListMergeRequestsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMergeRequestsWithOptions(request, headers, runtime);
  }

  /**
   * 获取企业成员列表
   * 
   * @param request - ListOrganizationMembersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOrganizationMembersResponse
   */
  async listOrganizationMembersWithOptions(organizationId: string, request: $_model.ListOrganizationMembersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListOrganizationMembersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.containsExternInfo)) {
      query["containsExternInfo"] = request.containsExternInfo;
    }

    if (!$dara.isNull(request.externUid)) {
      query["externUid"] = request.externUid;
    }

    if (!$dara.isNull(request.joinTimeFrom)) {
      query["joinTimeFrom"] = request.joinTimeFrom;
    }

    if (!$dara.isNull(request.joinTimeTo)) {
      query["joinTimeTo"] = request.joinTimeTo;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.organizationMemberName)) {
      query["organizationMemberName"] = request.organizationMemberName;
    }

    if (!$dara.isNull(request.provider)) {
      query["provider"] = request.provider;
    }

    if (!$dara.isNull(request.state)) {
      query["state"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOrganizationMembers",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/members`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOrganizationMembersResponse>(await this.callApi(params, req, runtime), new $_model.ListOrganizationMembersResponse({}));
  }

  /**
   * 获取企业成员列表
   * 
   * @param request - ListOrganizationMembersRequest
   * @returns ListOrganizationMembersResponse
   */
  async listOrganizationMembers(organizationId: string, request: $_model.ListOrganizationMembersRequest): Promise<$_model.ListOrganizationMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOrganizationMembersWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 查询用户企业列表
   * 
   * @param request - ListOrganizationsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOrganizationsResponse
   */
  async listOrganizationsWithOptions(request: $_model.ListOrganizationsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListOrganizationsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessLevel)) {
      query["accessLevel"] = request.accessLevel;
    }

    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.minAccessLevel)) {
      query["minAccessLevel"] = request.minAccessLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOrganizations",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organizations/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOrganizationsResponse>(await this.callApi(params, req, runtime), new $_model.ListOrganizationsResponse({}));
  }

  /**
   * 查询用户企业列表
   * 
   * @param request - ListOrganizationsRequest
   * @returns ListOrganizationsResponse
   */
  async listOrganizations(request: $_model.ListOrganizationsRequest): Promise<$_model.ListOrganizationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOrganizationsWithOptions(request, headers, runtime);
  }

  /**
   * 获取流水线分组下流水线列表列表
   * 
   * @param request - ListPipelineGroupPipelinesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPipelineGroupPipelinesResponse
   */
  async listPipelineGroupPipelinesWithOptions(organizationId: string, groupId: string, request: $_model.ListPipelineGroupPipelinesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPipelineGroupPipelinesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createEndTime)) {
      query["createEndTime"] = request.createEndTime;
    }

    if (!$dara.isNull(request.createStartTime)) {
      query["createStartTime"] = request.createStartTime;
    }

    if (!$dara.isNull(request.executeEndTime)) {
      query["executeEndTime"] = request.executeEndTime;
    }

    if (!$dara.isNull(request.executeStartTime)) {
      query["executeStartTime"] = request.executeStartTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pipelineName)) {
      query["pipelineName"] = request.pipelineName;
    }

    if (!$dara.isNull(request.resultStatusList)) {
      query["resultStatusList"] = request.resultStatusList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPipelineGroupPipelines",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipelineGroups/${$dara.URL.percentEncode(groupId)}/pipelines`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPipelineGroupPipelinesResponse>(await this.callApi(params, req, runtime), new $_model.ListPipelineGroupPipelinesResponse({}));
  }

  /**
   * 获取流水线分组下流水线列表列表
   * 
   * @param request - ListPipelineGroupPipelinesRequest
   * @returns ListPipelineGroupPipelinesResponse
   */
  async listPipelineGroupPipelines(organizationId: string, groupId: string, request: $_model.ListPipelineGroupPipelinesRequest): Promise<$_model.ListPipelineGroupPipelinesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelineGroupPipelinesWithOptions(organizationId, groupId, request, headers, runtime);
  }

  /**
   * 获取流水线分组列表
   * 
   * @param request - ListPipelineGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPipelineGroupsResponse
   */
  async listPipelineGroupsWithOptions(organizationId: string, request: $_model.ListPipelineGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPipelineGroupsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPipelineGroups",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipelineGroups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPipelineGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListPipelineGroupsResponse({}));
  }

  /**
   * 获取流水线分组列表
   * 
   * @param request - ListPipelineGroupsRequest
   * @returns ListPipelineGroupsResponse
   */
  async listPipelineGroups(organizationId: string, request: $_model.ListPipelineGroupsRequest): Promise<$_model.ListPipelineGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelineGroupsWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 获取流水线运行过的任务历史
   * 
   * @param request - ListPipelineJobHistorysRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPipelineJobHistorysResponse
   */
  async listPipelineJobHistorysWithOptions(organizationId: string, pipelineId: string, request: $_model.ListPipelineJobHistorysRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPipelineJobHistorysResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.category)) {
      query["category"] = request.category;
    }

    if (!$dara.isNull(request.identifier)) {
      query["identifier"] = request.identifier;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPipelineJobHistorys",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipeline/${$dara.URL.percentEncode(pipelineId)}/job/historys`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPipelineJobHistorysResponse>(await this.callApi(params, req, runtime), new $_model.ListPipelineJobHistorysResponse({}));
  }

  /**
   * 获取流水线运行过的任务历史
   * 
   * @param request - ListPipelineJobHistorysRequest
   * @returns ListPipelineJobHistorysResponse
   */
  async listPipelineJobHistorys(organizationId: string, pipelineId: string, request: $_model.ListPipelineJobHistorysRequest): Promise<$_model.ListPipelineJobHistorysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelineJobHistorysWithOptions(organizationId, pipelineId, request, headers, runtime);
  }

  /**
   * 获取流水线运行过的任务
   * 
   * @param request - ListPipelineJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPipelineJobsResponse
   */
  async listPipelineJobsWithOptions(organizationId: string, pipelineId: string, request: $_model.ListPipelineJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPipelineJobsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.category)) {
      query["category"] = request.category;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPipelineJobs",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipeline/${$dara.URL.percentEncode(pipelineId)}/jobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPipelineJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListPipelineJobsResponse({}));
  }

  /**
   * 获取流水线运行过的任务
   * 
   * @param request - ListPipelineJobsRequest
   * @returns ListPipelineJobsResponse
   */
  async listPipelineJobs(organizationId: string, pipelineId: string, request: $_model.ListPipelineJobsRequest): Promise<$_model.ListPipelineJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelineJobsWithOptions(organizationId, pipelineId, request, headers, runtime);
  }

  /**
   * 获取流水线关联列表
   * 
   * @param request - ListPipelineRelationsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPipelineRelationsResponse
   */
  async listPipelineRelationsWithOptions(organizationId: string, pipelineId: string, request: $_model.ListPipelineRelationsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPipelineRelationsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.relObjectType)) {
      query["relObjectType"] = request.relObjectType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPipelineRelations",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/${$dara.URL.percentEncode(pipelineId)}/pipelineRelations`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPipelineRelationsResponse>(await this.callApi(params, req, runtime), new $_model.ListPipelineRelationsResponse({}));
  }

  /**
   * 获取流水线关联列表
   * 
   * @param request - ListPipelineRelationsRequest
   * @returns ListPipelineRelationsResponse
   */
  async listPipelineRelations(organizationId: string, pipelineId: string, request: $_model.ListPipelineRelationsRequest): Promise<$_model.ListPipelineRelationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelineRelationsWithOptions(organizationId, pipelineId, request, headers, runtime);
  }

  /**
   * 获取流水线运行历史
   * 
   * @param request - ListPipelineRunsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPipelineRunsResponse
   */
  async listPipelineRunsWithOptions(organizationId: string, pipelineId: string, request: $_model.ListPipelineRunsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPipelineRunsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.triggerMode)) {
      query["triggerMode"] = request.triggerMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPipelineRuns",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipelines/${$dara.URL.percentEncode(pipelineId)}/pipelineRuns`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPipelineRunsResponse>(await this.callApi(params, req, runtime), new $_model.ListPipelineRunsResponse({}));
  }

  /**
   * 获取流水线运行历史
   * 
   * @param request - ListPipelineRunsRequest
   * @returns ListPipelineRunsResponse
   */
  async listPipelineRuns(organizationId: string, pipelineId: string, request: $_model.ListPipelineRunsRequest): Promise<$_model.ListPipelineRunsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelineRunsWithOptions(organizationId, pipelineId, request, headers, runtime);
  }

  /**
   * 获取流水线列表
   * 
   * @param request - ListPipelinesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPipelinesResponse
   */
  async listPipelinesWithOptions(organizationId: string, request: $_model.ListPipelinesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPipelinesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createEndTime)) {
      query["createEndTime"] = request.createEndTime;
    }

    if (!$dara.isNull(request.createStartTime)) {
      query["createStartTime"] = request.createStartTime;
    }

    if (!$dara.isNull(request.creatorAccountIds)) {
      query["creatorAccountIds"] = request.creatorAccountIds;
    }

    if (!$dara.isNull(request.executeAccountIds)) {
      query["executeAccountIds"] = request.executeAccountIds;
    }

    if (!$dara.isNull(request.executeEndTime)) {
      query["executeEndTime"] = request.executeEndTime;
    }

    if (!$dara.isNull(request.executeStartTime)) {
      query["executeStartTime"] = request.executeStartTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pipelineName)) {
      query["pipelineName"] = request.pipelineName;
    }

    if (!$dara.isNull(request.statusList)) {
      query["statusList"] = request.statusList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPipelines",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipelines`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPipelinesResponse>(await this.callApi(params, req, runtime), new $_model.ListPipelinesResponse({}));
  }

  /**
   * 获取流水线列表
   * 
   * @param request - ListPipelinesRequest
   * @returns ListPipelinesResponse
   */
  async listPipelines(organizationId: string, request: $_model.ListPipelinesRequest): Promise<$_model.ListPipelinesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelinesWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 查询代码库Label列表
   * 
   * @param request - ListProjectLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectLabelsResponse
   */
  async listProjectLabelsWithOptions(request: $_model.ListProjectLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectLabelsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.repositoryIdentity)) {
      query["repositoryIdentity"] = request.repositoryIdentity;
    }

    if (!$dara.isNull(request.search)) {
      query["search"] = request.search;
    }

    if (!$dara.isNull(request.sort)) {
      query["sort"] = request.sort;
    }

    if (!$dara.isNull(request.withCounts)) {
      query["withCounts"] = request.withCounts;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProjectLabels",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/labels`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProjectLabelsResponse>(await this.callApi(params, req, runtime), new $_model.ListProjectLabelsResponse({}));
  }

  /**
   * 查询代码库Label列表
   * 
   * @param request - ListProjectLabelsRequest
   * @returns ListProjectLabelsResponse
   */
  async listProjectLabels(request: $_model.ListProjectLabelsRequest): Promise<$_model.ListProjectLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectLabelsWithOptions(request, headers, runtime);
  }

  /**
   * 根据项目id获取项目所以成员
   * 
   * @param request - ListProjectMembersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectMembersResponse
   */
  async listProjectMembersWithOptions(organizationId: string, projectId: string, request: $_model.ListProjectMembersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectMembersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.targetType)) {
      query["targetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProjectMembers",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/projects/${$dara.URL.percentEncode(projectId)}/listMembers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProjectMembersResponse>(await this.callApi(params, req, runtime), new $_model.ListProjectMembersResponse({}));
  }

  /**
   * 根据项目id获取项目所以成员
   * 
   * @param request - ListProjectMembersRequest
   * @returns ListProjectMembersResponse
   */
  async listProjectMembers(organizationId: string, projectId: string, request: $_model.ListProjectMembersRequest): Promise<$_model.ListProjectMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectMembersWithOptions(organizationId, projectId, request, headers, runtime);
  }

  /**
   * 获取项目模板列表
   * 
   * @param request - ListProjectTemplatesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectTemplatesResponse
   */
  async listProjectTemplatesWithOptions(organizationId: string, request: $_model.ListProjectTemplatesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectTemplatesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.category)) {
      query["category"] = request.category;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProjectTemplates",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/projects/listTemplates`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProjectTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListProjectTemplatesResponse({}));
  }

  /**
   * 获取项目模板列表
   * 
   * @param request - ListProjectTemplatesRequest
   * @returns ListProjectTemplatesResponse
   */
  async listProjectTemplates(organizationId: string, request: $_model.ListProjectTemplatesRequest): Promise<$_model.ListProjectTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectTemplatesWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 获取项目下开启的工作项类型
   * 
   * @param request - ListProjectWorkitemTypesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectWorkitemTypesResponse
   */
  async listProjectWorkitemTypesWithOptions(organizationId: string, projectId: string, request: $_model.ListProjectWorkitemTypesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectWorkitemTypesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.category)) {
      query["category"] = request.category;
    }

    if (!$dara.isNull(request.spaceType)) {
      query["spaceType"] = request.spaceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProjectWorkitemTypes",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/projects/${$dara.URL.percentEncode(projectId)}/getWorkitemType`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProjectWorkitemTypesResponse>(await this.callApi(params, req, runtime), new $_model.ListProjectWorkitemTypesResponse({}));
  }

  /**
   * 获取项目下开启的工作项类型
   * 
   * @param request - ListProjectWorkitemTypesRequest
   * @returns ListProjectWorkitemTypesResponse
   */
  async listProjectWorkitemTypes(organizationId: string, projectId: string, request: $_model.ListProjectWorkitemTypesRequest): Promise<$_model.ListProjectWorkitemTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectWorkitemTypesWithOptions(organizationId, projectId, request, headers, runtime);
  }

  /**
   * 获取项目列表
   * 
   * @param request - ListProjectsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectsResponse
   */
  async listProjectsWithOptions(organizationId: string, request: $_model.ListProjectsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.category)) {
      query["category"] = request.category;
    }

    if (!$dara.isNull(request.conditions)) {
      query["conditions"] = request.conditions;
    }

    if (!$dara.isNull(request.extraConditions)) {
      query["extraConditions"] = request.extraConditions;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.scope)) {
      query["scope"] = request.scope;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProjects",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/listProjects`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProjectsResponse>(await this.callApi(params, req, runtime), new $_model.ListProjectsResponse({}));
  }

  /**
   * 获取项目列表
   * 
   * @param request - ListProjectsRequest
   * @returns ListProjectsResponse
   */
  async listProjects(organizationId: string, request: $_model.ListProjectsRequest): Promise<$_model.ListProjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectsWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 查询保护分支列表
   * 
   * @param request - ListProtectedBranchesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProtectedBranchesResponse
   */
  async listProtectedBranchesWithOptions(repositoryId: string, request: $_model.ListProtectedBranchesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListProtectedBranchesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProtectedBranches",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/protect_branches`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProtectedBranchesResponse>(await this.callApi(params, req, runtime), new $_model.ListProtectedBranchesResponse({}));
  }

  /**
   * 查询保护分支列表
   * 
   * @param request - ListProtectedBranchesRequest
   * @returns ListProtectedBranchesResponse
   */
  async listProtectedBranches(repositoryId: string, request: $_model.ListProtectedBranchesRequest): Promise<$_model.ListProtectedBranchesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProtectedBranchesWithOptions(repositoryId, request, headers, runtime);
  }

  /**
   * 查询推送规则列表
   * 
   * @param request - ListPushRulesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPushRulesResponse
   */
  async listPushRulesWithOptions(repositoryId: string, request: $_model.ListPushRulesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPushRulesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPushRules",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/${$dara.URL.percentEncode(repositoryId)}/push_rule/push_rules/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPushRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListPushRulesResponse({}));
  }

  /**
   * 查询推送规则列表
   * 
   * @param request - ListPushRulesRequest
   * @returns ListPushRulesResponse
   */
  async listPushRules(repositoryId: string, request: $_model.ListPushRulesRequest): Promise<$_model.ListPushRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPushRulesWithOptions(repositoryId, request, headers, runtime);
  }

  /**
   * 查询代码库列表
   * 
   * @param request - ListRepositoriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRepositoriesResponse
   */
  async listRepositoriesWithOptions(request: $_model.ListRepositoriesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRepositoriesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.archived)) {
      query["archived"] = request.archived;
    }

    if (!$dara.isNull(request.minAccessLevel)) {
      query["minAccessLevel"] = request.minAccessLevel;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.perPage)) {
      query["perPage"] = request.perPage;
    }

    if (!$dara.isNull(request.search)) {
      query["search"] = request.search;
    }

    if (!$dara.isNull(request.sort)) {
      query["sort"] = request.sort;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRepositories",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRepositoriesResponse>(await this.callApi(params, req, runtime), new $_model.ListRepositoriesResponse({}));
  }

  /**
   * 查询代码库列表
   * 
   * @param request - ListRepositoriesRequest
   * @returns ListRepositoriesResponse
   */
  async listRepositories(request: $_model.ListRepositoriesRequest): Promise<$_model.ListRepositoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRepositoriesWithOptions(request, headers, runtime);
  }

  /**
   * 查询分支列表
   * 
   * @param request - ListRepositoryBranchesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRepositoryBranchesResponse
   */
  async listRepositoryBranchesWithOptions(repositoryId: string, request: $_model.ListRepositoryBranchesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRepositoryBranchesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.search)) {
      query["search"] = request.search;
    }

    if (!$dara.isNull(request.sort)) {
      query["sort"] = request.sort;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRepositoryBranches",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/branches`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRepositoryBranchesResponse>(await this.callApi(params, req, runtime), new $_model.ListRepositoryBranchesResponse({}));
  }

  /**
   * 查询分支列表
   * 
   * @param request - ListRepositoryBranchesRequest
   * @returns ListRepositoryBranchesResponse
   */
  async listRepositoryBranches(repositoryId: string, request: $_model.ListRepositoryBranchesRequest): Promise<$_model.ListRepositoryBranchesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRepositoryBranchesWithOptions(repositoryId, request, headers, runtime);
  }

  /**
   * 查询代码库单个提交（Commit）的提交内容
   * 
   * @param request - ListRepositoryCommitDiffRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRepositoryCommitDiffResponse
   */
  async listRepositoryCommitDiffWithOptions(repositoryId: string, sha: string, request: $_model.ListRepositoryCommitDiffRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRepositoryCommitDiffResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.contextLine)) {
      query["contextLine"] = request.contextLine;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRepositoryCommitDiff",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/commits/${$dara.URL.percentEncode(sha)}/diff`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRepositoryCommitDiffResponse>(await this.callApi(params, req, runtime), new $_model.ListRepositoryCommitDiffResponse({}));
  }

  /**
   * 查询代码库单个提交（Commit）的提交内容
   * 
   * @param request - ListRepositoryCommitDiffRequest
   * @returns ListRepositoryCommitDiffResponse
   */
  async listRepositoryCommitDiff(repositoryId: string, sha: string, request: $_model.ListRepositoryCommitDiffRequest): Promise<$_model.ListRepositoryCommitDiffResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRepositoryCommitDiffWithOptions(repositoryId, sha, request, headers, runtime);
  }

  /**
   * 查询代码库提交历史
   * 
   * @param request - ListRepositoryCommitsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRepositoryCommitsResponse
   */
  async listRepositoryCommitsWithOptions(repositoryId: string, request: $_model.ListRepositoryCommitsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRepositoryCommitsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.end)) {
      query["end"] = request.end;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.path)) {
      query["path"] = request.path;
    }

    if (!$dara.isNull(request.refName)) {
      query["refName"] = request.refName;
    }

    if (!$dara.isNull(request.search)) {
      query["search"] = request.search;
    }

    if (!$dara.isNull(request.showCommentsCount)) {
      query["showCommentsCount"] = request.showCommentsCount;
    }

    if (!$dara.isNull(request.showSignature)) {
      query["showSignature"] = request.showSignature;
    }

    if (!$dara.isNull(request.start)) {
      query["start"] = request.start;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRepositoryCommits",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/commits`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRepositoryCommitsResponse>(await this.callApi(params, req, runtime), new $_model.ListRepositoryCommitsResponse({}));
  }

  /**
   * 查询代码库提交历史
   * 
   * @param request - ListRepositoryCommitsRequest
   * @returns ListRepositoryCommitsResponse
   */
  async listRepositoryCommits(repositoryId: string, request: $_model.ListRepositoryCommitsRequest): Promise<$_model.ListRepositoryCommitsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRepositoryCommitsWithOptions(repositoryId, request, headers, runtime);
  }

  /**
   * 查询代码组列表
   * 
   * @param request - ListRepositoryGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRepositoryGroupsResponse
   */
  async listRepositoryGroupsWithOptions(request: $_model.ListRepositoryGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRepositoryGroupsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.includePersonal)) {
      query["includePersonal"] = request.includePersonal;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentId)) {
      query["parentId"] = request.parentId;
    }

    if (!$dara.isNull(request.search)) {
      query["search"] = request.search;
    }

    if (!$dara.isNull(request.sort)) {
      query["sort"] = request.sort;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRepositoryGroups",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/groups/get/all`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRepositoryGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListRepositoryGroupsResponse({}));
  }

  /**
   * 查询代码组列表
   * 
   * @param request - ListRepositoryGroupsRequest
   * @returns ListRepositoryGroupsResponse
   */
  async listRepositoryGroups(request: $_model.ListRepositoryGroupsRequest): Promise<$_model.ListRepositoryGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRepositoryGroupsWithOptions(request, headers, runtime);
  }

  /**
   * 查询代码库成员列表
   * 
   * @param request - ListRepositoryMemberWithInheritedRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRepositoryMemberWithInheritedResponse
   */
  async listRepositoryMemberWithInheritedWithOptions(repositoryId: string, request: $_model.ListRepositoryMemberWithInheritedRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRepositoryMemberWithInheritedResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRepositoryMemberWithInherited",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/members/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRepositoryMemberWithInheritedResponse>(await this.callApi(params, req, runtime), new $_model.ListRepositoryMemberWithInheritedResponse({}));
  }

  /**
   * 查询代码库成员列表
   * 
   * @param request - ListRepositoryMemberWithInheritedRequest
   * @returns ListRepositoryMemberWithInheritedResponse
   */
  async listRepositoryMemberWithInherited(repositoryId: string, request: $_model.ListRepositoryMemberWithInheritedRequest): Promise<$_model.ListRepositoryMemberWithInheritedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRepositoryMemberWithInheritedWithOptions(repositoryId, request, headers, runtime);
  }

  /**
   * 查询标签列表
   * 
   * @param request - ListRepositoryTagsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRepositoryTagsResponse
   */
  async listRepositoryTagsWithOptions(repositoryId: string, request: $_model.ListRepositoryTagsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRepositoryTagsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.search)) {
      query["search"] = request.search;
    }

    if (!$dara.isNull(request.sort)) {
      query["sort"] = request.sort;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRepositoryTags",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/tag/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRepositoryTagsResponse>(await this.callApi(params, req, runtime), new $_model.ListRepositoryTagsResponse({}));
  }

  /**
   * 查询标签列表
   * 
   * @param request - ListRepositoryTagsRequest
   * @returns ListRepositoryTagsResponse
   */
  async listRepositoryTags(repositoryId: string, request: $_model.ListRepositoryTagsRequest): Promise<$_model.ListRepositoryTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRepositoryTagsWithOptions(repositoryId, request, headers, runtime);
  }

  /**
   * 查询代码库文件树
   * 
   * @param request - ListRepositoryTreeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRepositoryTreeResponse
   */
  async listRepositoryTreeWithOptions(repositoryId: string, request: $_model.ListRepositoryTreeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRepositoryTreeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.path)) {
      query["path"] = request.path;
    }

    if (!$dara.isNull(request.refName)) {
      query["refName"] = request.refName;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRepositoryTree",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/files/tree`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRepositoryTreeResponse>(await this.callApi(params, req, runtime), new $_model.ListRepositoryTreeResponse({}));
  }

  /**
   * 查询代码库文件树
   * 
   * @param request - ListRepositoryTreeRequest
   * @returns ListRepositoryTreeResponse
   */
  async listRepositoryTree(repositoryId: string, request: $_model.ListRepositoryTreeRequest): Promise<$_model.ListRepositoryTreeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRepositoryTreeWithOptions(repositoryId, request, headers, runtime);
  }

  /**
   * 查询代码库Webhook列表
   * 
   * @param request - ListRepositoryWebhookRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRepositoryWebhookResponse
   */
  async listRepositoryWebhookWithOptions(repositoryId: string, request: $_model.ListRepositoryWebhookRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRepositoryWebhookResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRepositoryWebhook",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/webhooks/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRepositoryWebhookResponse>(await this.callApi(params, req, runtime), new $_model.ListRepositoryWebhookResponse({}));
  }

  /**
   * 查询代码库Webhook列表
   * 
   * @param request - ListRepositoryWebhookRequest
   * @returns ListRepositoryWebhookResponse
   */
  async listRepositoryWebhook(repositoryId: string, request: $_model.ListRepositoryWebhookRequest): Promise<$_model.ListRepositoryWebhookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRepositoryWebhookWithOptions(repositoryId, request, headers, runtime);
  }

  /**
   * 获取资源成员列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceMembersResponse
   */
  async listResourceMembersWithOptions(organizationId: string, resourceType: string, resourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceMembersResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceMembers",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/${$dara.URL.percentEncode(resourceType)}/${$dara.URL.percentEncode(resourceId)}/members`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceMembersResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceMembersResponse({}));
  }

  /**
   * 获取资源成员列表
   * @returns ListResourceMembersResponse
   */
  async listResourceMembers(organizationId: string, resourceType: string, resourceId: string): Promise<$_model.ListResourceMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceMembersWithOptions(organizationId, resourceType, resourceId, headers, runtime);
  }

  /**
   * 搜索代码提交数据
   * 
   * @param request - ListSearchCommitRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSearchCommitResponse
   */
  async listSearchCommitWithOptions(request: $_model.ListSearchCommitRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSearchCommitResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      body["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.order)) {
      body["order"] = request.order;
    }

    if (!$dara.isNull(request.page)) {
      body["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.repoPath)) {
      body["repoPath"] = request.repoPath;
    }

    if (!$dara.isNull(request.scope)) {
      body["scope"] = request.scope;
    }

    if (!$dara.isNull(request.sort)) {
      body["sort"] = request.sort;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSearchCommit",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/search/commit`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSearchCommitResponse>(await this.callApi(params, req, runtime), new $_model.ListSearchCommitResponse({}));
  }

  /**
   * 搜索代码提交数据
   * 
   * @param request - ListSearchCommitRequest
   * @returns ListSearchCommitResponse
   */
  async listSearchCommit(request: $_model.ListSearchCommitRequest): Promise<$_model.ListSearchCommitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSearchCommitWithOptions(request, headers, runtime);
  }

  /**
   * 搜索代码仓库数据
   * 
   * @param request - ListSearchRepositoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSearchRepositoryResponse
   */
  async listSearchRepositoryWithOptions(request: $_model.ListSearchRepositoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSearchRepositoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliyunPk)) {
      body["aliyunPk"] = request.aliyunPk;
    }

    if (!$dara.isNull(request.keyword)) {
      body["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.order)) {
      body["order"] = request.order;
    }

    if (!$dara.isNull(request.page)) {
      body["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.repoPath)) {
      body["repoPath"] = request.repoPath;
    }

    if (!$dara.isNull(request.scope)) {
      body["scope"] = request.scope;
    }

    if (!$dara.isNull(request.sort)) {
      body["sort"] = request.sort;
    }

    if (!$dara.isNull(request.visibilityLevel)) {
      body["visibilityLevel"] = request.visibilityLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSearchRepository",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/search/repo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSearchRepositoryResponse>(await this.callApi(params, req, runtime), new $_model.ListSearchRepositoryResponse({}));
  }

  /**
   * 搜索代码仓库数据
   * 
   * @param request - ListSearchRepositoryRequest
   * @returns ListSearchRepositoryResponse
   */
  async listSearchRepository(request: $_model.ListSearchRepositoryRequest): Promise<$_model.ListSearchRepositoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSearchRepositoryWithOptions(request, headers, runtime);
  }

  /**
   * 搜索代码片段
   * 
   * @param request - ListSearchSourceCodeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSearchSourceCodeResponse
   */
  async listSearchSourceCodeWithOptions(request: $_model.ListSearchSourceCodeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSearchSourceCodeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filePath)) {
      body["filePath"] = request.filePath;
    }

    if (!$dara.isNull(request.isCodeBlock)) {
      body["isCodeBlock"] = request.isCodeBlock;
    }

    if (!$dara.isNull(request.keyword)) {
      body["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.language)) {
      body["language"] = request.language;
    }

    if (!$dara.isNull(request.order)) {
      body["order"] = request.order;
    }

    if (!$dara.isNull(request.page)) {
      body["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.repoPath)) {
      body["repoPath"] = request.repoPath;
    }

    if (!$dara.isNull(request.scope)) {
      body["scope"] = request.scope;
    }

    if (!$dara.isNull(request.sort)) {
      body["sort"] = request.sort;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSearchSourceCode",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/search/code`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSearchSourceCodeResponse>(await this.callApi(params, req, runtime), new $_model.ListSearchSourceCodeResponse({}));
  }

  /**
   * 搜索代码片段
   * 
   * @param request - ListSearchSourceCodeRequest
   * @returns ListSearchSourceCodeResponse
   */
  async listSearchSourceCode(request: $_model.ListSearchSourceCodeRequest): Promise<$_model.ListSearchSourceCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSearchSourceCodeWithOptions(request, headers, runtime);
  }

  /**
   * 获取服务授权列表
   * 
   * @param request - ListServiceAuthsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceAuthsResponse
   */
  async listServiceAuthsWithOptions(organizationId: string, request: $_model.ListServiceAuthsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceAuthsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serviceAuthType)) {
      query["serviceAuthType"] = request.serviceAuthType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceAuths",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/serviceAuths`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServiceAuthsResponse>(await this.callApi(params, req, runtime), new $_model.ListServiceAuthsResponse({}));
  }

  /**
   * 获取服务授权列表
   * 
   * @param request - ListServiceAuthsRequest
   * @returns ListServiceAuthsResponse
   */
  async listServiceAuths(organizationId: string, request: $_model.ListServiceAuthsRequest): Promise<$_model.ListServiceAuthsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceAuthsWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 获取服务连接列表
   * 
   * @param request - ListServiceConnectionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceConnectionsResponse
   */
  async listServiceConnectionsWithOptions(organizationId: string, request: $_model.ListServiceConnectionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceConnectionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sericeConnectionType)) {
      query["sericeConnectionType"] = request.sericeConnectionType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceConnections",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/serviceConnections`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServiceConnectionsResponse>(await this.callApi(params, req, runtime), new $_model.ListServiceConnectionsResponse({}));
  }

  /**
   * 获取服务连接列表
   * 
   * @param request - ListServiceConnectionsRequest
   * @returns ListServiceConnectionsResponse
   */
  async listServiceConnections(organizationId: string, request: $_model.ListServiceConnectionsRequest): Promise<$_model.ListServiceConnectionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceConnectionsWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 获取服务证书列表
   * 
   * @param request - ListServiceCredentialsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceCredentialsResponse
   */
  async listServiceCredentialsWithOptions(organizationId: string, request: $_model.ListServiceCredentialsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceCredentialsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serviceCredentialType)) {
      query["serviceCredentialType"] = request.serviceCredentialType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceCredentials",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/serviceCredentials`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServiceCredentialsResponse>(await this.callApi(params, req, runtime), new $_model.ListServiceCredentialsResponse({}));
  }

  /**
   * 获取服务证书列表
   * 
   * @param request - ListServiceCredentialsRequest
   * @returns ListServiceCredentialsResponse
   */
  async listServiceCredentials(organizationId: string, request: $_model.ListServiceCredentialsRequest): Promise<$_model.ListServiceCredentialsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceCredentialsWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 获取迭代列表
   * 
   * @param request - ListSprintsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSprintsResponse
   */
  async listSprintsWithOptions(organizationId: string, request: $_model.ListSprintsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSprintsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.spaceIdentifier)) {
      query["spaceIdentifier"] = request.spaceIdentifier;
    }

    if (!$dara.isNull(request.spaceType)) {
      query["spaceType"] = request.spaceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSprints",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/sprints/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSprintsResponse>(await this.callApi(params, req, runtime), new $_model.ListSprintsResponse({}));
  }

  /**
   * 获取迭代列表
   * 
   * @param request - ListSprintsRequest
   * @returns ListSprintsResponse
   */
  async listSprints(organizationId: string, request: $_model.ListSprintsRequest): Promise<$_model.ListSprintsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSprintsWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 获取测试用例全部字段
   * 
   * @param request - ListTestCaseFieldsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTestCaseFieldsResponse
   */
  async listTestCaseFieldsWithOptions(organizationId: string, request: $_model.ListTestCaseFieldsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTestCaseFieldsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.spaceIdentifier)) {
      query["spaceIdentifier"] = request.spaceIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTestCaseFields",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/testhub/testcase/fields`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTestCaseFieldsResponse>(await this.callApi(params, req, runtime), new $_model.ListTestCaseFieldsResponse({}));
  }

  /**
   * 获取测试用例全部字段
   * 
   * @param request - ListTestCaseFieldsRequest
   * @returns ListTestCaseFieldsResponse
   */
  async listTestCaseFields(organizationId: string, request: $_model.ListTestCaseFieldsRequest): Promise<$_model.ListTestCaseFieldsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTestCaseFieldsWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 测试DrawService
   * 
   * @param request - ListUserDrawRecordByPkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserDrawRecordByPkResponse
   */
  async listUserDrawRecordByPkWithOptions(request: $_model.ListUserDrawRecordByPkRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserDrawRecordByPkResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliyunPk)) {
      query["aliyunPk"] = request.aliyunPk;
    }

    if (!$dara.isNull(request.drawGroup)) {
      query["drawGroup"] = request.drawGroup;
    }

    if (!$dara.isNull(request.drawPoolName)) {
      query["drawPoolName"] = request.drawPoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserDrawRecordByPk",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/listUserDrawRecords`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserDrawRecordByPkResponse>(await this.callApi(params, req, runtime), new $_model.ListUserDrawRecordByPkResponse({}));
  }

  /**
   * 测试DrawService
   * 
   * @param request - ListUserDrawRecordByPkRequest
   * @returns ListUserDrawRecordByPkResponse
   */
  async listUserDrawRecordByPk(request: $_model.ListUserDrawRecordByPkRequest): Promise<$_model.ListUserDrawRecordByPkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUserDrawRecordByPkWithOptions(request, headers, runtime);
  }

  /**
   * 查询当前用户的SSH Key列表
   * 
   * @param request - ListUserKeysRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserKeysResponse
   */
  async listUserKeysWithOptions(request: $_model.ListUserKeysRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserKeysResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sort)) {
      query["sort"] = request.sort;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserKeys",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v3/user/keys`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserKeysResponse>(await this.callApi(params, req, runtime), new $_model.ListUserKeysResponse({}));
  }

  /**
   * 查询当前用户的SSH Key列表
   * 
   * @param request - ListUserKeysRequest
   * @returns ListUserKeysResponse
   */
  async listUserKeys(request: $_model.ListUserKeysRequest): Promise<$_model.ListUserKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUserKeysWithOptions(request, headers, runtime);
  }

  /**
   * 查询用户有权限的资源（代码库、组）
   * 
   * @param request - ListUserResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserResourcesResponse
   */
  async listUserResourcesWithOptions(request: $_model.ListUserResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.userIds)) {
      query["userIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserResources",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/user/vision/user_resources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListUserResourcesResponse({}));
  }

  /**
   * 查询用户有权限的资源（代码库、组）
   * 
   * @param request - ListUserResourcesRequest
   * @returns ListUserResourcesResponse
   */
  async listUserResources(request: $_model.ListUserResourcesRequest): Promise<$_model.ListUserResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUserResourcesWithOptions(request, headers, runtime);
  }

  /**
   * 获取变量组列表
   * 
   * @param request - ListVariableGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVariableGroupsResponse
   */
  async listVariableGroupsWithOptions(organizationId: string, request: $_model.ListVariableGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListVariableGroupsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageOrder)) {
      query["pageOrder"] = request.pageOrder;
    }

    if (!$dara.isNull(request.pageSort)) {
      query["pageSort"] = request.pageSort;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVariableGroups",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/variableGroups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVariableGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListVariableGroupsResponse({}));
  }

  /**
   * 获取变量组列表
   * 
   * @param request - ListVariableGroupsRequest
   * @returns ListVariableGroupsResponse
   */
  async listVariableGroups(organizationId: string, request: $_model.ListVariableGroupsRequest): Promise<$_model.ListVariableGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listVariableGroupsWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 获取项目下工作项的所有字段
   * 
   * @param request - ListWorkItemAllFieldsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkItemAllFieldsResponse
   */
  async listWorkItemAllFieldsWithOptions(organizationId: string, request: $_model.ListWorkItemAllFieldsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkItemAllFieldsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.spaceIdentifier)) {
      query["spaceIdentifier"] = request.spaceIdentifier;
    }

    if (!$dara.isNull(request.spaceType)) {
      query["spaceType"] = request.spaceType;
    }

    if (!$dara.isNull(request.workitemTypeIdentifier)) {
      query["workitemTypeIdentifier"] = request.workitemTypeIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkItemAllFields",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/workitems/fields/listAll`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkItemAllFieldsResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkItemAllFieldsResponse({}));
  }

  /**
   * 获取项目下工作项的所有字段
   * 
   * @param request - ListWorkItemAllFieldsRequest
   * @returns ListWorkItemAllFieldsResponse
   */
  async listWorkItemAllFields(organizationId: string, request: $_model.ListWorkItemAllFieldsRequest): Promise<$_model.ListWorkItemAllFieldsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWorkItemAllFieldsWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 查询工作项工作流的所有状态
   * 
   * @param request - ListWorkItemWorkFlowStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkItemWorkFlowStatusResponse
   */
  async listWorkItemWorkFlowStatusWithOptions(organizationId: string, request: $_model.ListWorkItemWorkFlowStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkItemWorkFlowStatusResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.spaceIdentifier)) {
      query["spaceIdentifier"] = request.spaceIdentifier;
    }

    if (!$dara.isNull(request.spaceType)) {
      query["spaceType"] = request.spaceType;
    }

    if (!$dara.isNull(request.workitemCategoryIdentifier)) {
      query["workitemCategoryIdentifier"] = request.workitemCategoryIdentifier;
    }

    if (!$dara.isNull(request.workitemTypeIdentifier)) {
      query["workitemTypeIdentifier"] = request.workitemTypeIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkItemWorkFlowStatus",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/workitems/workflow/listWorkflowStatus`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkItemWorkFlowStatusResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkItemWorkFlowStatusResponse({}));
  }

  /**
   * 查询工作项工作流的所有状态
   * 
   * @param request - ListWorkItemWorkFlowStatusRequest
   * @returns ListWorkItemWorkFlowStatusResponse
   */
  async listWorkItemWorkFlowStatus(organizationId: string, request: $_model.ListWorkItemWorkFlowStatusRequest): Promise<$_model.ListWorkItemWorkFlowStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWorkItemWorkFlowStatusWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 获取工作项的附件列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkitemAttachmentsResponse
   */
  async listWorkitemAttachmentsWithOptions(organizationId: string, workitemIdentifier: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkitemAttachmentsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkitemAttachments",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/workitem/${$dara.URL.percentEncode(workitemIdentifier)}/attachments`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkitemAttachmentsResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkitemAttachmentsResponse({}));
  }

  /**
   * 获取工作项的附件列表
   * @returns ListWorkitemAttachmentsResponse
   */
  async listWorkitemAttachments(organizationId: string, workitemIdentifier: string): Promise<$_model.ListWorkitemAttachmentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWorkitemAttachmentsWithOptions(organizationId, workitemIdentifier, headers, runtime);
  }

  /**
   * 获取工作项预计工时明细列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkitemEstimateResponse
   */
  async listWorkitemEstimateWithOptions(organizationId: string, workitemId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkitemEstimateResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkitemEstimate",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/workitems/${$dara.URL.percentEncode(workitemId)}/estimate/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkitemEstimateResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkitemEstimateResponse({}));
  }

  /**
   * 获取工作项预计工时明细列表
   * @returns ListWorkitemEstimateResponse
   */
  async listWorkitemEstimate(organizationId: string, workitemId: string): Promise<$_model.ListWorkitemEstimateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWorkitemEstimateWithOptions(organizationId, workitemId, headers, runtime);
  }

  /**
   * 获取工作项工时明细列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkitemTimeResponse
   */
  async listWorkitemTimeWithOptions(organizationId: string, workitemId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkitemTimeResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkitemTime",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/workitems/${$dara.URL.percentEncode(workitemId)}/time/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkitemTimeResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkitemTimeResponse({}));
  }

  /**
   * 获取工作项工时明细列表
   * @returns ListWorkitemTimeResponse
   */
  async listWorkitemTime(organizationId: string, workitemId: string): Promise<$_model.ListWorkitemTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWorkitemTimeWithOptions(organizationId, workitemId, headers, runtime);
  }

  /**
   * 获取工作项列表
   * 
   * @param request - ListWorkitemsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkitemsResponse
   */
  async listWorkitemsWithOptions(organizationId: string, request: $_model.ListWorkitemsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkitemsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.category)) {
      query["category"] = request.category;
    }

    if (!$dara.isNull(request.conditions)) {
      query["conditions"] = request.conditions;
    }

    if (!$dara.isNull(request.extraConditions)) {
      query["extraConditions"] = request.extraConditions;
    }

    if (!$dara.isNull(request.groupCondition)) {
      query["groupCondition"] = request.groupCondition;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.searchType)) {
      query["searchType"] = request.searchType;
    }

    if (!$dara.isNull(request.spaceIdentifier)) {
      query["spaceIdentifier"] = request.spaceIdentifier;
    }

    if (!$dara.isNull(request.spaceType)) {
      query["spaceType"] = request.spaceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkitems",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/listWorkitems`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkitemsResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkitemsResponse({}));
  }

  /**
   * 获取工作项列表
   * 
   * @param request - ListWorkitemsRequest
   * @returns ListWorkitemsResponse
   */
  async listWorkitems(organizationId: string, request: $_model.ListWorkitemsRequest): Promise<$_model.ListWorkitemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWorkitemsWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 获取流水线运行任务日志
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LogPipelineJobRunResponse
   */
  async logPipelineJobRunWithOptions(organizationId: string, pipelineId: string, jobId: string, pipelineRunId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.LogPipelineJobRunResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "LogPipelineJobRun",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipeline/${$dara.URL.percentEncode(pipelineId)}/pipelineRun/${$dara.URL.percentEncode(pipelineRunId)}/job/${$dara.URL.percentEncode(jobId)}/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.LogPipelineJobRunResponse>(await this.callApi(params, req, runtime), new $_model.LogPipelineJobRunResponse({}));
  }

  /**
   * 获取流水线运行任务日志
   * @returns LogPipelineJobRunResponse
   */
  async logPipelineJobRun(organizationId: string, pipelineId: string, jobId: string, pipelineRunId: string): Promise<$_model.LogPipelineJobRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.logPipelineJobRunWithOptions(organizationId, pipelineId, jobId, pipelineRunId, headers, runtime);
  }

  /**
   * 获取机器部署日志
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LogVMDeployMachineResponse
   */
  async logVMDeployMachineWithOptions(organizationId: string, pipelineId: string, deployOrderId: string, machineSn: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.LogVMDeployMachineResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "LogVMDeployMachine",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipelines/${$dara.URL.percentEncode(pipelineId)}/deploy/${$dara.URL.percentEncode(deployOrderId)}/machine/${$dara.URL.percentEncode(machineSn)}/log`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.LogVMDeployMachineResponse>(await this.callApi(params, req, runtime), new $_model.LogVMDeployMachineResponse({}));
  }

  /**
   * 获取机器部署日志
   * @returns LogVMDeployMachineResponse
   */
  async logVMDeployMachine(organizationId: string, pipelineId: string, deployOrderId: string, machineSn: string): Promise<$_model.LogVMDeployMachineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.logVMDeployMachineWithOptions(organizationId, pipelineId, deployOrderId, machineSn, headers, runtime);
  }

  /**
   * 合并代码评审
   * 
   * @param request - MergeMergeRequestRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MergeMergeRequestResponse
   */
  async mergeMergeRequestWithOptions(repositoryId: string, localId: string, request: $_model.MergeMergeRequestRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.MergeMergeRequestResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.mergeMessage)) {
      body["mergeMessage"] = request.mergeMessage;
    }

    if (!$dara.isNull(request.mergeType)) {
      body["mergeType"] = request.mergeType;
    }

    if (!$dara.isNull(request.removeSourceBranch)) {
      body["removeSourceBranch"] = request.removeSourceBranch;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MergeMergeRequest",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/${$dara.URL.percentEncode(repositoryId)}/merge_requests/${$dara.URL.percentEncode(localId)}/merge`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.MergeMergeRequestResponse>(await this.callApi(params, req, runtime), new $_model.MergeMergeRequestResponse({}));
  }

  /**
   * 合并代码评审
   * 
   * @param request - MergeMergeRequestRequest
   * @returns MergeMergeRequestResponse
   */
  async mergeMergeRequest(repositoryId: string, localId: string, request: $_model.MergeMergeRequestRequest): Promise<$_model.MergeMergeRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.mergeMergeRequestWithOptions(repositoryId, localId, request, headers, runtime);
  }

  /**
   * 通过人工卡点
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PassPipelineValidateResponse
   */
  async passPipelineValidateWithOptions(organizationId: string, pipelineId: string, pipelineRunId: string, jobId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PassPipelineValidateResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "PassPipelineValidate",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipelines/${$dara.URL.percentEncode(pipelineId)}/pipelineRuns/${$dara.URL.percentEncode(pipelineRunId)}/jobs/${$dara.URL.percentEncode(jobId)}/pass`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PassPipelineValidateResponse>(await this.callApi(params, req, runtime), new $_model.PassPipelineValidateResponse({}));
  }

  /**
   * 通过人工卡点
   * @returns PassPipelineValidateResponse
   */
  async passPipelineValidate(organizationId: string, pipelineId: string, pipelineRunId: string, jobId: string): Promise<$_model.PassPipelineValidateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.passPipelineValidateWithOptions(organizationId, pipelineId, pipelineRunId, jobId, headers, runtime);
  }

  /**
   * 通过人工卡点
   * 
   * @param request - PassReleaseStagePipelineValidateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PassReleaseStagePipelineValidateResponse
   */
  async passReleaseStagePipelineValidateWithOptions(appName: string, releaseWorkflowSn: string, releaseStageSn: string, executionNumber: string, request: $_model.PassReleaseStagePipelineValidateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PassReleaseStagePipelineValidateResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobId)) {
      query["jobId"] = request.jobId;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PassReleaseStagePipelineValidate",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/appstack/apps/${$dara.URL.percentEncode(appName)}/releaseWorkflows/${$dara.URL.percentEncode(releaseWorkflowSn)}/releaseStages/${$dara.URL.percentEncode(releaseStageSn)}/executions/${$dara.URL.percentEncode(executionNumber)}%3ApassPipelineValidate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PassReleaseStagePipelineValidateResponse>(await this.callApi(params, req, runtime), new $_model.PassReleaseStagePipelineValidateResponse({}));
  }

  /**
   * 通过人工卡点
   * 
   * @param request - PassReleaseStagePipelineValidateRequest
   * @returns PassReleaseStagePipelineValidateResponse
   */
  async passReleaseStagePipelineValidate(appName: string, releaseWorkflowSn: string, releaseStageSn: string, executionNumber: string, request: $_model.PassReleaseStagePipelineValidateRequest): Promise<$_model.PassReleaseStagePipelineValidateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.passReleaseStagePipelineValidateWithOptions(appName, releaseWorkflowSn, releaseStageSn, executionNumber, request, headers, runtime);
  }

  /**
   * 拒绝人工卡点
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefusePipelineValidateResponse
   */
  async refusePipelineValidateWithOptions(organizationId: string, pipelineId: string, pipelineRunId: string, jobId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RefusePipelineValidateResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RefusePipelineValidate",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipelines/${$dara.URL.percentEncode(pipelineId)}/pipelineRuns/${$dara.URL.percentEncode(pipelineRunId)}/jobs/${$dara.URL.percentEncode(jobId)}/refuse`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefusePipelineValidateResponse>(await this.callApi(params, req, runtime), new $_model.RefusePipelineValidateResponse({}));
  }

  /**
   * 拒绝人工卡点
   * @returns RefusePipelineValidateResponse
   */
  async refusePipelineValidate(organizationId: string, pipelineId: string, pipelineRunId: string, jobId: string): Promise<$_model.RefusePipelineValidateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.refusePipelineValidateWithOptions(organizationId, pipelineId, pipelineRunId, jobId, headers, runtime);
  }

  /**
   * 拒绝人工卡点
   * 
   * @param request - RefuseReleaseStagePipelineValidateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefuseReleaseStagePipelineValidateResponse
   */
  async refuseReleaseStagePipelineValidateWithOptions(appName: string, releaseWorkflowSn: string, releaseStageSn: string, executionNumber: string, request: $_model.RefuseReleaseStagePipelineValidateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RefuseReleaseStagePipelineValidateResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobId)) {
      query["jobId"] = request.jobId;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefuseReleaseStagePipelineValidate",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/appstack/apps/${$dara.URL.percentEncode(appName)}/releaseWorkflows/${$dara.URL.percentEncode(releaseWorkflowSn)}/releaseStages/${$dara.URL.percentEncode(releaseStageSn)}/executions/${$dara.URL.percentEncode(executionNumber)}%3ArefusePipelineValidate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefuseReleaseStagePipelineValidateResponse>(await this.callApi(params, req, runtime), new $_model.RefuseReleaseStagePipelineValidateResponse({}));
  }

  /**
   * 拒绝人工卡点
   * 
   * @param request - RefuseReleaseStagePipelineValidateRequest
   * @returns RefuseReleaseStagePipelineValidateResponse
   */
  async refuseReleaseStagePipelineValidate(appName: string, releaseWorkflowSn: string, releaseStageSn: string, executionNumber: string, request: $_model.RefuseReleaseStagePipelineValidateRequest): Promise<$_model.RefuseReleaseStagePipelineValidateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.refuseReleaseStagePipelineValidateWithOptions(appName, releaseWorkflowSn, releaseStageSn, executionNumber, request, headers, runtime);
  }

  /**
   * 重新打开代码评审
   * 
   * @param request - ReopenMergeRequestRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReopenMergeRequestResponse
   */
  async reopenMergeRequestWithOptions(repositoryId: string, localId: string, request: $_model.ReopenMergeRequestRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ReopenMergeRequestResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReopenMergeRequest",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/${$dara.URL.percentEncode(repositoryId)}/merge_requests/${$dara.URL.percentEncode(localId)}/reopen`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReopenMergeRequestResponse>(await this.callApi(params, req, runtime), new $_model.ReopenMergeRequestResponse({}));
  }

  /**
   * 重新打开代码评审
   * 
   * @param request - ReopenMergeRequestRequest
   * @returns ReopenMergeRequestResponse
   */
  async reopenMergeRequest(repositoryId: string, localId: string, request: $_model.ReopenMergeRequestRequest): Promise<$_model.ReopenMergeRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.reopenMergeRequestWithOptions(repositoryId, localId, request, headers, runtime);
  }

  /**
   * 重置企业公钥
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetSshKeyResponse
   */
  async resetSshKeyWithOptions(organizationId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ResetSshKeyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetSshKey",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/sshKey`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetSshKeyResponse>(await this.callApi(params, req, runtime), new $_model.ResetSshKeyResponse({}));
  }

  /**
   * 重置企业公钥
   * @returns ResetSshKeyResponse
   */
  async resetSshKey(organizationId: string): Promise<$_model.ResetSshKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resetSshKeyWithOptions(organizationId, headers, runtime);
  }

  /**
   * 继续部署
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeVMDeployOrderResponse
   */
  async resumeVMDeployOrderWithOptions(organizationId: string, pipelineId: string, deployOrderId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeVMDeployOrderResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeVMDeployOrder",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipelines/${$dara.URL.percentEncode(pipelineId)}/deploy/${$dara.URL.percentEncode(deployOrderId)}/resume`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeVMDeployOrderResponse>(await this.callApi(params, req, runtime), new $_model.ResumeVMDeployOrderResponse({}));
  }

  /**
   * 继续部署
   * @returns ResumeVMDeployOrderResponse
   */
  async resumeVMDeployOrder(organizationId: string, pipelineId: string, deployOrderId: string): Promise<$_model.ResumeVMDeployOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeVMDeployOrderWithOptions(organizationId, pipelineId, deployOrderId, headers, runtime);
  }

  /**
   * 重试流水线运行
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetryPipelineJobRunResponse
   */
  async retryPipelineJobRunWithOptions(organizationId: string, pipelineId: string, pipelineRunId: string, jobId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RetryPipelineJobRunResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RetryPipelineJobRun",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipelines/${$dara.URL.percentEncode(pipelineId)}/pipelineRuns/${$dara.URL.percentEncode(pipelineRunId)}/jobs/${$dara.URL.percentEncode(jobId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RetryPipelineJobRunResponse>(await this.callApi(params, req, runtime), new $_model.RetryPipelineJobRunResponse({}));
  }

  /**
   * 重试流水线运行
   * @returns RetryPipelineJobRunResponse
   */
  async retryPipelineJobRun(organizationId: string, pipelineId: string, pipelineRunId: string, jobId: string): Promise<$_model.RetryPipelineJobRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.retryPipelineJobRunWithOptions(organizationId, pipelineId, pipelineRunId, jobId, headers, runtime);
  }

  /**
   * 重试机器部署
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetryVMDeployMachineResponse
   */
  async retryVMDeployMachineWithOptions(organizationId: string, pipelineId: string, deployOrderId: string, machineSn: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RetryVMDeployMachineResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RetryVMDeployMachine",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipelines/${$dara.URL.percentEncode(pipelineId)}/deploy/${$dara.URL.percentEncode(deployOrderId)}/machine/${$dara.URL.percentEncode(machineSn)}/retry`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RetryVMDeployMachineResponse>(await this.callApi(params, req, runtime), new $_model.RetryVMDeployMachineResponse({}));
  }

  /**
   * 重试机器部署
   * @returns RetryVMDeployMachineResponse
   */
  async retryVMDeployMachine(organizationId: string, pipelineId: string, deployOrderId: string, machineSn: string): Promise<$_model.RetryVMDeployMachineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.retryVMDeployMachineWithOptions(organizationId, pipelineId, deployOrderId, machineSn, headers, runtime);
  }

  /**
   * 提交变更请求的评审意见
   * 
   * @param request - ReviewMergeRequestRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReviewMergeRequestResponse
   */
  async reviewMergeRequestWithOptions(repositoryId: string, localId: string, request: $_model.ReviewMergeRequestRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ReviewMergeRequestResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.draftCommentIds)) {
      body["draftCommentIds"] = request.draftCommentIds;
    }

    if (!$dara.isNull(request.reviewComment)) {
      body["reviewComment"] = request.reviewComment;
    }

    if (!$dara.isNull(request.reviewOpinion)) {
      body["reviewOpinion"] = request.reviewOpinion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReviewMergeRequest",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/${$dara.URL.percentEncode(repositoryId)}/merge_requests/${$dara.URL.percentEncode(localId)}/submit_review_opinion`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReviewMergeRequestResponse>(await this.callApi(params, req, runtime), new $_model.ReviewMergeRequestResponse({}));
  }

  /**
   * 提交变更请求的评审意见
   * 
   * @param request - ReviewMergeRequestRequest
   * @returns ReviewMergeRequestResponse
   */
  async reviewMergeRequest(repositoryId: string, localId: string, request: $_model.ReviewMergeRequestRequest): Promise<$_model.ReviewMergeRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.reviewMergeRequestWithOptions(repositoryId, localId, request, headers, runtime);
  }

  /**
   * 跳过流水线任务运行
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SkipPipelineJobRunResponse
   */
  async skipPipelineJobRunWithOptions(organizationId: string, pipelineId: string, pipelineRunId: string, jobId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SkipPipelineJobRunResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "SkipPipelineJobRun",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipelines/${$dara.URL.percentEncode(pipelineId)}/pipelineRuns/${$dara.URL.percentEncode(pipelineRunId)}/jobs/${$dara.URL.percentEncode(jobId)}/skip`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SkipPipelineJobRunResponse>(await this.callApi(params, req, runtime), new $_model.SkipPipelineJobRunResponse({}));
  }

  /**
   * 跳过流水线任务运行
   * @returns SkipPipelineJobRunResponse
   */
  async skipPipelineJobRun(organizationId: string, pipelineId: string, pipelineRunId: string, jobId: string): Promise<$_model.SkipPipelineJobRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.skipPipelineJobRunWithOptions(organizationId, pipelineId, pipelineRunId, jobId, headers, runtime);
  }

  /**
   * 跳过机器部署
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SkipVMDeployMachineResponse
   */
  async skipVMDeployMachineWithOptions(organizationId: string, pipelineId: string, deployOrderId: string, machineSn: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SkipVMDeployMachineResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "SkipVMDeployMachine",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipelines/${$dara.URL.percentEncode(pipelineId)}/deploy/${$dara.URL.percentEncode(deployOrderId)}/machine/${$dara.URL.percentEncode(machineSn)}/skip`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SkipVMDeployMachineResponse>(await this.callApi(params, req, runtime), new $_model.SkipVMDeployMachineResponse({}));
  }

  /**
   * 跳过机器部署
   * @returns SkipVMDeployMachineResponse
   */
  async skipVMDeployMachine(organizationId: string, pipelineId: string, deployOrderId: string, machineSn: string): Promise<$_model.SkipVMDeployMachineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.skipVMDeployMachineWithOptions(organizationId, pipelineId, deployOrderId, machineSn, headers, runtime);
  }

  /**
   * 运行流水线
   * 
   * @param request - StartPipelineRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartPipelineRunResponse
   */
  async startPipelineRunWithOptions(organizationId: string, pipelineId: string, request: $_model.StartPipelineRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartPipelineRunResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.params)) {
      body["params"] = request.params;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartPipelineRun",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organizations/${$dara.URL.percentEncode(organizationId)}/pipelines/${$dara.URL.percentEncode(pipelineId)}/run`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartPipelineRunResponse>(await this.callApi(params, req, runtime), new $_model.StartPipelineRunResponse({}));
  }

  /**
   * 运行流水线
   * 
   * @param request - StartPipelineRunRequest
   * @returns StartPipelineRunResponse
   */
  async startPipelineRun(organizationId: string, pipelineId: string, request: $_model.StartPipelineRunRequest): Promise<$_model.StartPipelineRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startPipelineRunWithOptions(organizationId, pipelineId, request, headers, runtime);
  }

  /**
   * 终止流水线任务运行
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopPipelineJobRunResponse
   */
  async stopPipelineJobRunWithOptions(organizationId: string, pipelineId: string, pipelineRunId: string, jobId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopPipelineJobRunResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopPipelineJobRun",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipelines/${$dara.URL.percentEncode(pipelineId)}/pipelineRuns/${$dara.URL.percentEncode(pipelineRunId)}/jobs/${$dara.URL.percentEncode(jobId)}/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopPipelineJobRunResponse>(await this.callApi(params, req, runtime), new $_model.StopPipelineJobRunResponse({}));
  }

  /**
   * 终止流水线任务运行
   * @returns StopPipelineJobRunResponse
   */
  async stopPipelineJobRun(organizationId: string, pipelineId: string, pipelineRunId: string, jobId: string): Promise<$_model.StopPipelineJobRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopPipelineJobRunWithOptions(organizationId, pipelineId, pipelineRunId, jobId, headers, runtime);
  }

  /**
   * 终止流水线运行
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopPipelineRunResponse
   */
  async stopPipelineRunWithOptions(organizationId: string, pipelineId: string, pipelineRunId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopPipelineRunResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopPipelineRun",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipelines/${$dara.URL.percentEncode(pipelineId)}/pipelineRuns/${$dara.URL.percentEncode(pipelineRunId)}/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopPipelineRunResponse>(await this.callApi(params, req, runtime), new $_model.StopPipelineRunResponse({}));
  }

  /**
   * 终止流水线运行
   * @returns StopPipelineRunResponse
   */
  async stopPipelineRun(organizationId: string, pipelineId: string, pipelineRunId: string): Promise<$_model.StopPipelineRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopPipelineRunWithOptions(organizationId, pipelineId, pipelineRunId, headers, runtime);
  }

  /**
   * 取消部署单
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopVMDeployOrderResponse
   */
  async stopVMDeployOrderWithOptions(organizationId: string, pipelineId: string, deployOrderId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopVMDeployOrderResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopVMDeployOrder",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipelines/${$dara.URL.percentEncode(pipelineId)}/deploy/${$dara.URL.percentEncode(deployOrderId)}/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopVMDeployOrderResponse>(await this.callApi(params, req, runtime), new $_model.StopVMDeployOrderResponse({}));
  }

  /**
   * 取消部署单
   * @returns StopVMDeployOrderResponse
   */
  async stopVMDeployOrder(organizationId: string, pipelineId: string, deployOrderId: string): Promise<$_model.StopVMDeployOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopVMDeployOrderWithOptions(organizationId, pipelineId, deployOrderId, headers, runtime);
  }

  /**
   * 转移代码库
   * 
   * @param request - TransferRepositoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferRepositoryResponse
   */
  async transferRepositoryWithOptions(request: $_model.TransferRepositoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TransferRepositoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.groupId)) {
      query["groupId"] = request.groupId;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.repositoryId)) {
      query["repositoryId"] = request.repositoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransferRepository",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/repository/transfer`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TransferRepositoryResponse>(await this.callApi(params, req, runtime), new $_model.TransferRepositoryResponse({}));
  }

  /**
   * 转移代码库
   * 
   * @param request - TransferRepositoryRequest
   * @returns TransferRepositoryResponse
   */
  async transferRepository(request: $_model.TransferRepositoryRequest): Promise<$_model.TransferRepositoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.transferRepositoryWithOptions(request, headers, runtime);
  }

  /**
   * 触发仓库同步
   * 
   * @param request - TriggerRepositoryMirrorSyncRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TriggerRepositoryMirrorSyncResponse
   */
  async triggerRepositoryMirrorSyncWithOptions(repositoryId: string, request: $_model.TriggerRepositoryMirrorSyncRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TriggerRepositoryMirrorSyncResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.account)) {
      query["account"] = request.account;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.token)) {
      query["token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TriggerRepositoryMirrorSync",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/mirror`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TriggerRepositoryMirrorSyncResponse>(await this.callApi(params, req, runtime), new $_model.TriggerRepositoryMirrorSyncResponse({}));
  }

  /**
   * 触发仓库同步
   * 
   * @param request - TriggerRepositoryMirrorSyncRequest
   * @returns TriggerRepositoryMirrorSyncResponse
   */
  async triggerRepositoryMirrorSync(repositoryId: string, request: $_model.TriggerRepositoryMirrorSyncRequest): Promise<$_model.TriggerRepositoryMirrorSyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.triggerRepositoryMirrorSyncWithOptions(repositoryId, request, headers, runtime);
  }

  /**
   * 更新应用成员
   * 
   * @param request - UpdateAppMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAppMemberResponse
   */
  async updateAppMemberWithOptions(appName: string, request: $_model.UpdateAppMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAppMemberResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.player)) {
      body["player"] = request.player;
    }

    if (!$dara.isNull(request.roleNames)) {
      body["roleNames"] = request.roleNames;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAppMember",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/appstack/apps/${$dara.URL.percentEncode(appName)}/members`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $dara.cast<$_model.UpdateAppMemberResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAppMemberResponse({}));
  }

  /**
   * 更新应用成员
   * 
   * @param request - UpdateAppMemberRequest
   * @returns UpdateAppMemberResponse
   */
  async updateAppMember(appName: string, request: $_model.UpdateAppMemberRequest): Promise<$_model.UpdateAppMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAppMemberWithOptions(appName, request, headers, runtime);
  }

  /**
   * 更新应用
   * 
   * @param request - UpdateApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationResponse
   */
  async updateApplicationWithOptions(appName: string, request: $_model.UpdateApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApplicationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ownerAccountId)) {
      body["ownerAccountId"] = request.ownerAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApplication",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/appstack/apps/${$dara.URL.percentEncode(appName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApplicationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApplicationResponse({}));
  }

  /**
   * 更新应用
   * 
   * @param request - UpdateApplicationRequest
   * @returns UpdateApplicationResponse
   */
  async updateApplication(appName: string, request: $_model.UpdateApplicationRequest): Promise<$_model.UpdateApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateApplicationWithOptions(appName, request, headers, runtime);
  }

  /**
   * 更新检查运行记录
   * 
   * @param request - UpdateCheckRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCheckRunResponse
   */
  async updateCheckRunWithOptions(request: $_model.UpdateCheckRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCheckRunResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.checkRunId)) {
      query["checkRunId"] = request.checkRunId;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.repositoryIdentity)) {
      query["repositoryIdentity"] = request.repositoryIdentity;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.annotations)) {
      body["annotations"] = request.annotations;
    }

    if (!$dara.isNull(request.completedAt)) {
      body["completedAt"] = request.completedAt;
    }

    if (!$dara.isNull(request.conclusion)) {
      body["conclusion"] = request.conclusion;
    }

    if (!$dara.isNull(request.detailsUrl)) {
      body["detailsUrl"] = request.detailsUrl;
    }

    if (!$dara.isNull(request.externalId)) {
      body["externalId"] = request.externalId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.output)) {
      body["output"] = request.output;
    }

    if (!$dara.isNull(request.startedAt)) {
      body["startedAt"] = request.startedAt;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCheckRun",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/check_runs/update_check_run`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCheckRunResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCheckRunResponse({}));
  }

  /**
   * 更新检查运行记录
   * 
   * @param request - UpdateCheckRunRequest
   * @returns UpdateCheckRunResponse
   */
  async updateCheckRun(request: $_model.UpdateCheckRunRequest): Promise<$_model.UpdateCheckRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateCheckRunWithOptions(request, headers, runtime);
  }

  /**
   * 更新代码库文件
   * 
   * @param request - UpdateFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFileResponse
   */
  async updateFileWithOptions(repositoryId: string, request: $_model.UpdateFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFileResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.branchName)) {
      body["branchName"] = request.branchName;
    }

    if (!$dara.isNull(request.commitMessage)) {
      body["commitMessage"] = request.commitMessage;
    }

    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.encoding)) {
      body["encoding"] = request.encoding;
    }

    if (!$dara.isNull(request.newPath)) {
      body["newPath"] = request.newPath;
    }

    if (!$dara.isNull(request.oldPath)) {
      body["oldPath"] = request.oldPath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFile",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/files/update`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFileResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFileResponse({}));
  }

  /**
   * 更新代码库文件
   * 
   * @param request - UpdateFileRequest
   * @returns UpdateFileResponse
   */
  async updateFile(repositoryId: string, request: $_model.UpdateFileRequest): Promise<$_model.UpdateFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFileWithOptions(repositoryId, request, headers, runtime);
  }

  /**
   * 更新标签
   * 
   * @param request - UpdateFlowTagRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFlowTagResponse
   */
  async updateFlowTagWithOptions(organizationId: string, id: string, request: $_model.UpdateFlowTagRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFlowTagResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.color)) {
      query["color"] = request.color;
    }

    if (!$dara.isNull(request.flowTagGroupId)) {
      query["flowTagGroupId"] = request.flowTagGroupId;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFlowTag",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/flow/tags/${$dara.URL.percentEncode(id)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFlowTagResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFlowTagResponse({}));
  }

  /**
   * 更新标签
   * 
   * @param request - UpdateFlowTagRequest
   * @returns UpdateFlowTagResponse
   */
  async updateFlowTag(organizationId: string, id: string, request: $_model.UpdateFlowTagRequest): Promise<$_model.UpdateFlowTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFlowTagWithOptions(organizationId, id, request, headers, runtime);
  }

  /**
   * 标签分类
   * 
   * @param request - UpdateFlowTagGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFlowTagGroupResponse
   */
  async updateFlowTagGroupWithOptions(organizationId: string, id: string, request: $_model.UpdateFlowTagGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFlowTagGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFlowTagGroup",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/flow/tagGroups/${$dara.URL.percentEncode(id)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFlowTagGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFlowTagGroupResponse({}));
  }

  /**
   * 标签分类
   * 
   * @param request - UpdateFlowTagGroupRequest
   * @returns UpdateFlowTagGroupResponse
   */
  async updateFlowTagGroup(organizationId: string, id: string, request: $_model.UpdateFlowTagGroupRequest): Promise<$_model.UpdateFlowTagGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFlowTagGroupWithOptions(organizationId, id, request, headers, runtime);
  }

  /**
   * 更新单个代码组信息
   * 
   * @param request - UpdateGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGroupResponse
   */
  async updateGroupWithOptions(request: $_model.UpdateGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.avatarUrl)) {
      body["avatarUrl"] = request.avatarUrl;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.path)) {
      body["path"] = request.path;
    }

    if (!$dara.isNull(request.pathWithNamespace)) {
      body["pathWithNamespace"] = request.pathWithNamespace;
    }

    if (!$dara.isNull(request.visibilityLevel)) {
      body["visibilityLevel"] = request.visibilityLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGroup",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/groups/modify`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGroupResponse({}));
  }

  /**
   * 更新单个代码组信息
   * 
   * @param request - UpdateGroupRequest
   * @returns UpdateGroupResponse
   */
  async updateGroup(request: $_model.UpdateGroupRequest): Promise<$_model.UpdateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateGroupWithOptions(request, headers, runtime);
  }

  /**
   * 修改组成员
   * 
   * @param request - UpdateGroupMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGroupMemberResponse
   */
  async updateGroupMemberWithOptions(groupId: string, request: $_model.UpdateGroupMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGroupMemberResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.aliyunPk)) {
      query["aliyunPk"] = request.aliyunPk;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessLevel)) {
      body["accessLevel"] = request.accessLevel;
    }

    if (!$dara.isNull(request.memberType)) {
      body["memberType"] = request.memberType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGroupMember",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/groups/${$dara.URL.percentEncode(groupId)}/members/update/aliyun_pk`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGroupMemberResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGroupMemberResponse({}));
  }

  /**
   * 修改组成员
   * 
   * @param request - UpdateGroupMemberRequest
   * @returns UpdateGroupMemberResponse
   */
  async updateGroupMember(groupId: string, request: $_model.UpdateGroupMemberRequest): Promise<$_model.UpdateGroupMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateGroupMemberWithOptions(groupId, request, headers, runtime);
  }

  /**
   * 更新主机组
   * 
   * @param request - UpdateHostGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHostGroupResponse
   */
  async updateHostGroupWithOptions(organizationId: string, id: string, request: $_model.UpdateHostGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateHostGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliyunRegion)) {
      body["aliyunRegion"] = request.aliyunRegion;
    }

    if (!$dara.isNull(request.ecsLabelKey)) {
      body["ecsLabelKey"] = request.ecsLabelKey;
    }

    if (!$dara.isNull(request.ecsLabelValue)) {
      body["ecsLabelValue"] = request.ecsLabelValue;
    }

    if (!$dara.isNull(request.ecsType)) {
      body["ecsType"] = request.ecsType;
    }

    if (!$dara.isNull(request.envId)) {
      body["envId"] = request.envId;
    }

    if (!$dara.isNull(request.machineInfos)) {
      body["machineInfos"] = request.machineInfos;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.serviceConnectionId)) {
      body["serviceConnectionId"] = request.serviceConnectionId;
    }

    if (!$dara.isNull(request.tagIds)) {
      body["tagIds"] = request.tagIds;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHostGroup",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/hostGroups/${$dara.URL.percentEncode(id)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateHostGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateHostGroupResponse({}));
  }

  /**
   * 更新主机组
   * 
   * @param request - UpdateHostGroupRequest
   * @returns UpdateHostGroupResponse
   */
  async updateHostGroup(organizationId: string, id: string, request: $_model.UpdateHostGroupRequest): Promise<$_model.UpdateHostGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateHostGroupWithOptions(organizationId, id, request, headers, runtime);
  }

  /**
   * 更新代码评审的标题和描述
   * 
   * @param request - UpdateMergeRequestRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMergeRequestResponse
   */
  async updateMergeRequestWithOptions(repositoryId: string, localId: string, request: $_model.UpdateMergeRequestRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMergeRequestResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.title)) {
      body["title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMergeRequest",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/${$dara.URL.percentEncode(repositoryId)}/merge_requests/${$dara.URL.percentEncode(localId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMergeRequestResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMergeRequestResponse({}));
  }

  /**
   * 更新代码评审的标题和描述
   * 
   * @param request - UpdateMergeRequestRequest
   * @returns UpdateMergeRequestResponse
   */
  async updateMergeRequest(repositoryId: string, localId: string, request: $_model.UpdateMergeRequestRequest): Promise<$_model.UpdateMergeRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMergeRequestWithOptions(repositoryId, localId, request, headers, runtime);
  }

  /**
   * 更新代码评审的干系人
   * 
   * @param request - UpdateMergeRequestPersonnelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMergeRequestPersonnelResponse
   */
  async updateMergeRequestPersonnelWithOptions(repositoryId: string, localId: string, personType: string, request: $_model.UpdateMergeRequestPersonnelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMergeRequestPersonnelResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.newUserIdList)) {
      body["newUserIdList"] = request.newUserIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMergeRequestPersonnel",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/${$dara.URL.percentEncode(repositoryId)}/merge_requests/${$dara.URL.percentEncode(localId)}/person/${$dara.URL.percentEncode(personType)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMergeRequestPersonnelResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMergeRequestPersonnelResponse({}));
  }

  /**
   * 更新代码评审的干系人
   * 
   * @param request - UpdateMergeRequestPersonnelRequest
   * @returns UpdateMergeRequestPersonnelResponse
   */
  async updateMergeRequestPersonnel(repositoryId: string, localId: string, personType: string, request: $_model.UpdateMergeRequestPersonnelRequest): Promise<$_model.UpdateMergeRequestPersonnelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMergeRequestPersonnelWithOptions(repositoryId, localId, personType, request, headers, runtime);
  }

  /**
   * 当前用户加入的企业列表
   * 
   * @param request - UpdateOrganizationMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOrganizationMemberResponse
   */
  async updateOrganizationMemberWithOptions(organizationId: string, accountId: string, request: $_model.UpdateOrganizationMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateOrganizationMemberResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.organizationMemberName)) {
      query["organizationMemberName"] = request.organizationMemberName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOrganizationMember",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/members/${$dara.URL.percentEncode(accountId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateOrganizationMemberResponse>(await this.callApi(params, req, runtime), new $_model.UpdateOrganizationMemberResponse({}));
  }

  /**
   * 当前用户加入的企业列表
   * 
   * @param request - UpdateOrganizationMemberRequest
   * @returns UpdateOrganizationMemberResponse
   */
  async updateOrganizationMember(organizationId: string, accountId: string, request: $_model.UpdateOrganizationMemberRequest): Promise<$_model.UpdateOrganizationMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateOrganizationMemberWithOptions(organizationId, accountId, request, headers, runtime);
  }

  /**
   * 更新流水线。
   * 
   * @param request - UpdatePipelineRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePipelineResponse
   */
  async updatePipelineWithOptions(organizationId: string, request: $_model.UpdatePipelineRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePipelineResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.pipelineId)) {
      body["pipelineId"] = request.pipelineId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePipeline",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipelines/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePipelineResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePipelineResponse({}));
  }

  /**
   * 更新流水线。
   * 
   * @param request - UpdatePipelineRequest
   * @returns UpdatePipelineResponse
   */
  async updatePipeline(organizationId: string, request: $_model.UpdatePipelineRequest): Promise<$_model.UpdatePipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePipelineWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 删除标签
   * 
   * @param request - UpdatePipelineBaseInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePipelineBaseInfoResponse
   */
  async updatePipelineBaseInfoWithOptions(organizationId: string, pipelineId: string, request: $_model.UpdatePipelineBaseInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePipelineBaseInfoResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.envId)) {
      query["envId"] = request.envId;
    }

    if (!$dara.isNull(request.pipelineName)) {
      query["pipelineName"] = request.pipelineName;
    }

    if (!$dara.isNull(request.tagList)) {
      query["tagList"] = request.tagList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePipelineBaseInfo",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipelines/${$dara.URL.percentEncode(pipelineId)}/baseInfo`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePipelineBaseInfoResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePipelineBaseInfoResponse({}));
  }

  /**
   * 删除标签
   * 
   * @param request - UpdatePipelineBaseInfoRequest
   * @returns UpdatePipelineBaseInfoResponse
   */
  async updatePipelineBaseInfo(organizationId: string, pipelineId: string, request: $_model.UpdatePipelineBaseInfoRequest): Promise<$_model.UpdatePipelineBaseInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePipelineBaseInfoWithOptions(organizationId, pipelineId, request, headers, runtime);
  }

  /**
   * 更新流水线分组
   * 
   * @param request - UpdatePipelineGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePipelineGroupResponse
   */
  async updatePipelineGroupWithOptions(organizationId: string, groupId: string, request: $_model.UpdatePipelineGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePipelineGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePipelineGroup",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/pipelineGroups/${$dara.URL.percentEncode(groupId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePipelineGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePipelineGroupResponse({}));
  }

  /**
   * 更新流水线分组
   * 
   * @param request - UpdatePipelineGroupRequest
   * @returns UpdatePipelineGroupResponse
   */
  async updatePipelineGroup(organizationId: string, groupId: string, request: $_model.UpdatePipelineGroupRequest): Promise<$_model.UpdatePipelineGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePipelineGroupWithOptions(organizationId, groupId, request, headers, runtime);
  }

  /**
   * 更新项目属性与字段
   * 
   * @param request - UpdateProjectFieldRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectFieldResponse
   */
  async updateProjectFieldWithOptions(organizationId: string, identifier: string, request: $_model.UpdateProjectFieldRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProjectFieldResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.statusIdentifier)) {
      body["statusIdentifier"] = request.statusIdentifier;
    }

    if (!$dara.isNull(request.updateBasicFieldRequestList)) {
      body["updateBasicFieldRequestList"] = request.updateBasicFieldRequestList;
    }

    if (!$dara.isNull(request.updateForOpenApiList)) {
      body["updateForOpenApiList"] = request.updateForOpenApiList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProjectField",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/project/${$dara.URL.percentEncode(identifier)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateProjectFieldResponse>(await this.callApi(params, req, runtime), new $_model.UpdateProjectFieldResponse({}));
  }

  /**
   * 更新项目属性与字段
   * 
   * @param request - UpdateProjectFieldRequest
   * @returns UpdateProjectFieldResponse
   */
  async updateProjectField(organizationId: string, identifier: string, request: $_model.UpdateProjectFieldRequest): Promise<$_model.UpdateProjectFieldResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProjectFieldWithOptions(organizationId, identifier, request, headers, runtime);
  }

  /**
   * 更新代码库Label
   * 
   * @param request - UpdateProjectLabelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectLabelResponse
   */
  async updateProjectLabelWithOptions(labelId: string, request: $_model.UpdateProjectLabelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProjectLabelResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.repositoryIdentity)) {
      query["repositoryIdentity"] = request.repositoryIdentity;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.color)) {
      body["color"] = request.color;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProjectLabel",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/labels/${$dara.URL.percentEncode(labelId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateProjectLabelResponse>(await this.callApi(params, req, runtime), new $_model.UpdateProjectLabelResponse({}));
  }

  /**
   * 更新代码库Label
   * 
   * @param request - UpdateProjectLabelRequest
   * @returns UpdateProjectLabelResponse
   */
  async updateProjectLabel(labelId: string, request: $_model.UpdateProjectLabelRequest): Promise<$_model.UpdateProjectLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProjectLabelWithOptions(labelId, request, headers, runtime);
  }

  /**
   * 添加项目成员
   * 
   * @param request - UpdateProjectMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectMemberResponse
   */
  async updateProjectMemberWithOptions(organizationId: string, projectId: string, request: $_model.UpdateProjectMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProjectMemberResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.roleIdentifier)) {
      body["roleIdentifier"] = request.roleIdentifier;
    }

    if (!$dara.isNull(request.targetIdentifier)) {
      body["targetIdentifier"] = request.targetIdentifier;
    }

    if (!$dara.isNull(request.targetType)) {
      body["targetType"] = request.targetType;
    }

    if (!$dara.isNull(request.userIdentifier)) {
      body["userIdentifier"] = request.userIdentifier;
    }

    if (!$dara.isNull(request.userType)) {
      body["userType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProjectMember",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/projects/${$dara.URL.percentEncode(projectId)}/updateMember`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateProjectMemberResponse>(await this.callApi(params, req, runtime), new $_model.UpdateProjectMemberResponse({}));
  }

  /**
   * 添加项目成员
   * 
   * @param request - UpdateProjectMemberRequest
   * @returns UpdateProjectMemberResponse
   */
  async updateProjectMember(organizationId: string, projectId: string, request: $_model.UpdateProjectMemberRequest): Promise<$_model.UpdateProjectMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProjectMemberWithOptions(organizationId, projectId, request, headers, runtime);
  }

  /**
   * 更改保护分支设置
   * 
   * @param request - UpdateProtectedBranchesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProtectedBranchesResponse
   */
  async updateProtectedBranchesWithOptions(repositoryId: string, id: string, request: $_model.UpdateProtectedBranchesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProtectedBranchesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allowMergeRoles)) {
      body["allowMergeRoles"] = request.allowMergeRoles;
    }

    if (!$dara.isNull(request.allowMergeUserIds)) {
      body["allowMergeUserIds"] = request.allowMergeUserIds;
    }

    if (!$dara.isNull(request.allowPushRoles)) {
      body["allowPushRoles"] = request.allowPushRoles;
    }

    if (!$dara.isNull(request.allowPushUserIds)) {
      body["allowPushUserIds"] = request.allowPushUserIds;
    }

    if (!$dara.isNull(request.branch)) {
      body["branch"] = request.branch;
    }

    if (!$dara.isNull(request.id)) {
      body["id"] = request.id;
    }

    if (!$dara.isNull(request.mergeRequestSetting)) {
      body["mergeRequestSetting"] = request.mergeRequestSetting;
    }

    if (!$dara.isNull(request.testSettingDTO)) {
      body["testSettingDTO"] = request.testSettingDTO;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProtectedBranches",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(repositoryId)}/protect_branches/${$dara.URL.percentEncode(id)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateProtectedBranchesResponse>(await this.callApi(params, req, runtime), new $_model.UpdateProtectedBranchesResponse({}));
  }

  /**
   * 更改保护分支设置
   * 
   * @param request - UpdateProtectedBranchesRequest
   * @returns UpdateProtectedBranchesResponse
   */
  async updateProtectedBranches(repositoryId: string, id: string, request: $_model.UpdateProtectedBranchesRequest): Promise<$_model.UpdateProtectedBranchesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProtectedBranchesWithOptions(repositoryId, id, request, headers, runtime);
  }

  /**
   * 推送评审模式开关
   * 
   * @param request - UpdatePushReviewOnOffRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePushReviewOnOffResponse
   */
  async updatePushReviewOnOffWithOptions(repositoryId: string, request: $_model.UpdatePushReviewOnOffRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePushReviewOnOffResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    if (!$dara.isNull(request.trunkMode)) {
      query["trunkMode"] = request.trunkMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePushReviewOnOff",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/settings/trunk_mode`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePushReviewOnOffResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePushReviewOnOffResponse({}));
  }

  /**
   * 推送评审模式开关
   * 
   * @param request - UpdatePushReviewOnOffRequest
   * @returns UpdatePushReviewOnOffResponse
   */
  async updatePushReviewOnOff(repositoryId: string, request: $_model.UpdatePushReviewOnOffRequest): Promise<$_model.UpdatePushReviewOnOffResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePushReviewOnOffWithOptions(repositoryId, request, headers, runtime);
  }

  /**
   * 更新推送规则
   * 
   * @param request - UpdatePushRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePushRuleResponse
   */
  async updatePushRuleWithOptions(repositoryId: string, pushRuleId: string, request: $_model.UpdatePushRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePushRuleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ruleInfos)) {
      body["ruleInfos"] = request.ruleInfos;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePushRule",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/api/v4/projects/${$dara.URL.percentEncode(repositoryId)}/push_rule/${$dara.URL.percentEncode(pushRuleId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePushRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePushRuleResponse({}));
  }

  /**
   * 更新推送规则
   * 
   * @param request - UpdatePushRuleRequest
   * @returns UpdatePushRuleResponse
   */
  async updatePushRule(repositoryId: string, pushRuleId: string, request: $_model.UpdatePushRuleRequest): Promise<$_model.UpdatePushRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePushRuleWithOptions(repositoryId, pushRuleId, request, headers, runtime);
  }

  /**
   * 更新代码库名称、路径、描述、默认分支等设置
   * 
   * @param request - UpdateRepositoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRepositoryResponse
   */
  async updateRepositoryWithOptions(repositoryId: string, request: $_model.UpdateRepositoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRepositoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.adminSettingLanguage)) {
      body["adminSettingLanguage"] = request.adminSettingLanguage;
    }

    if (!$dara.isNull(request.avatar)) {
      body["avatar"] = request.avatar;
    }

    if (!$dara.isNull(request.buildsEnabled)) {
      body["buildsEnabled"] = request.buildsEnabled;
    }

    if (!$dara.isNull(request.checkEmail)) {
      body["checkEmail"] = request.checkEmail;
    }

    if (!$dara.isNull(request.defaultBranch)) {
      body["defaultBranch"] = request.defaultBranch;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.id)) {
      body["id"] = request.id;
    }

    if (!$dara.isNull(request.issuesEnabled)) {
      body["issuesEnabled"] = request.issuesEnabled;
    }

    if (!$dara.isNull(request.mergeRequestsEnabled)) {
      body["mergeRequestsEnabled"] = request.mergeRequestsEnabled;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.openCloneDownloadControl)) {
      body["openCloneDownloadControl"] = request.openCloneDownloadControl;
    }

    if (!$dara.isNull(request.path)) {
      body["path"] = request.path;
    }

    if (!$dara.isNull(request.projectCloneDownloadMethodList)) {
      body["projectCloneDownloadMethodList"] = request.projectCloneDownloadMethodList;
    }

    if (!$dara.isNull(request.projectCloneDownloadRoleList)) {
      body["projectCloneDownloadRoleList"] = request.projectCloneDownloadRoleList;
    }

    if (!$dara.isNull(request.snippetsEnabled)) {
      body["snippetsEnabled"] = request.snippetsEnabled;
    }

    if (!$dara.isNull(request.visibilityLevel)) {
      body["visibilityLevel"] = request.visibilityLevel;
    }

    if (!$dara.isNull(request.wikiEnabled)) {
      body["wikiEnabled"] = request.wikiEnabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRepository",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRepositoryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRepositoryResponse({}));
  }

  /**
   * 更新代码库名称、路径、描述、默认分支等设置
   * 
   * @param request - UpdateRepositoryRequest
   * @returns UpdateRepositoryResponse
   */
  async updateRepository(repositoryId: string, request: $_model.UpdateRepositoryRequest): Promise<$_model.UpdateRepositoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRepositoryWithOptions(repositoryId, request, headers, runtime);
  }

  /**
   * 修改代码库成员的权限（角色）
   * 
   * @param request - UpdateRepositoryMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRepositoryMemberResponse
   */
  async updateRepositoryMemberWithOptions(repositoryId: string, aliyunPk: string, request: $_model.UpdateRepositoryMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRepositoryMemberResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessToken)) {
      query["accessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.organizationId)) {
      query["organizationId"] = request.organizationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessLevel)) {
      body["accessLevel"] = request.accessLevel;
    }

    if (!$dara.isNull(request.expireAt)) {
      body["expireAt"] = request.expireAt;
    }

    if (!$dara.isNull(request.memberType)) {
      body["memberType"] = request.memberType;
    }

    if (!$dara.isNull(request.relatedId)) {
      body["relatedId"] = request.relatedId;
    }

    if (!$dara.isNull(request.relatedInfos)) {
      body["relatedInfos"] = request.relatedInfos;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRepositoryMember",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/repository/${$dara.URL.percentEncode(repositoryId)}/members/${$dara.URL.percentEncode(aliyunPk)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRepositoryMemberResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRepositoryMemberResponse({}));
  }

  /**
   * 修改代码库成员的权限（角色）
   * 
   * @param request - UpdateRepositoryMemberRequest
   * @returns UpdateRepositoryMemberResponse
   */
  async updateRepositoryMember(repositoryId: string, aliyunPk: string, request: $_model.UpdateRepositoryMemberRequest): Promise<$_model.UpdateRepositoryMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRepositoryMemberWithOptions(repositoryId, aliyunPk, request, headers, runtime);
  }

  /**
   * 更新资源成员
   * 
   * @param request - UpdateResourceMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceMemberResponse
   */
  async updateResourceMemberWithOptions(organizationId: string, resourceType: string, resourceId: string, accountId: string, request: $_model.UpdateResourceMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateResourceMemberResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.roleName)) {
      body["roleName"] = request.roleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResourceMember",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/${$dara.URL.percentEncode(resourceType)}/${$dara.URL.percentEncode(resourceId)}/members/${$dara.URL.percentEncode(accountId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateResourceMemberResponse>(await this.callApi(params, req, runtime), new $_model.UpdateResourceMemberResponse({}));
  }

  /**
   * 更新资源成员
   * 
   * @param request - UpdateResourceMemberRequest
   * @returns UpdateResourceMemberResponse
   */
  async updateResourceMember(organizationId: string, resourceType: string, resourceId: string, accountId: string, request: $_model.UpdateResourceMemberRequest): Promise<$_model.UpdateResourceMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceMemberWithOptions(organizationId, resourceType, resourceId, accountId, request, headers, runtime);
  }

  /**
   * 更新测试用例字段
   * 
   * @param request - UpdateTestCaseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTestCaseResponse
   */
  async updateTestCaseWithOptions(organizationId: string, testcaseIdentifier: string, request: $_model.UpdateTestCaseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTestCaseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateWorkitemPropertyRequest)) {
      body["updateWorkitemPropertyRequest"] = request.updateWorkitemPropertyRequest;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTestCase",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/testhub/testcase/${$dara.URL.percentEncode(testcaseIdentifier)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTestCaseResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTestCaseResponse({}));
  }

  /**
   * 更新测试用例字段
   * 
   * @param request - UpdateTestCaseRequest
   * @returns UpdateTestCaseResponse
   */
  async updateTestCase(organizationId: string, testcaseIdentifier: string, request: $_model.UpdateTestCaseRequest): Promise<$_model.UpdateTestCaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTestCaseWithOptions(organizationId, testcaseIdentifier, request, headers, runtime);
  }

  /**
   * 更新了测试计划中测试用例的执行人与状态
   * 
   * @param request - UpdateTestResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTestResultResponse
   */
  async updateTestResultWithOptions(organizationId: string, testPlanIdentifier: string, testcaseIdentifier: string, request: $_model.UpdateTestResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTestResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.executor)) {
      body["executor"] = request.executor;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTestResult",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/testhub/testplan/${$dara.URL.percentEncode(testPlanIdentifier)}/testresult/${$dara.URL.percentEncode(testcaseIdentifier)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTestResultResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTestResultResponse({}));
  }

  /**
   * 更新了测试计划中测试用例的执行人与状态
   * 
   * @param request - UpdateTestResultRequest
   * @returns UpdateTestResultResponse
   */
  async updateTestResult(organizationId: string, testPlanIdentifier: string, testcaseIdentifier: string, request: $_model.UpdateTestResultRequest): Promise<$_model.UpdateTestResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTestResultWithOptions(organizationId, testPlanIdentifier, testcaseIdentifier, request, headers, runtime);
  }

  /**
   * 更新变量组
   * 
   * @param request - UpdateVariableGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVariableGroupResponse
   */
  async updateVariableGroupWithOptions(organizationId: string, id: string, request: $_model.UpdateVariableGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateVariableGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.variables)) {
      body["variables"] = request.variables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVariableGroup",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/variableGroups/${$dara.URL.percentEncode(id)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateVariableGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateVariableGroupResponse({}));
  }

  /**
   * 更新变量组
   * 
   * @param request - UpdateVariableGroupRequest
   * @returns UpdateVariableGroupResponse
   */
  async updateVariableGroup(organizationId: string, id: string, request: $_model.UpdateVariableGroupRequest): Promise<$_model.UpdateVariableGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateVariableGroupWithOptions(organizationId, id, request, headers, runtime);
  }

  /**
   * 更新工作项信息
   * 
   * @param request - UpdateWorkItemRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkItemResponse
   */
  async updateWorkItemWithOptions(organizationId: string, request: $_model.UpdateWorkItemRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWorkItemResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fieldType)) {
      body["fieldType"] = request.fieldType;
    }

    if (!$dara.isNull(request.identifier)) {
      body["identifier"] = request.identifier;
    }

    if (!$dara.isNull(request.propertyKey)) {
      body["propertyKey"] = request.propertyKey;
    }

    if (!$dara.isNull(request.propertyValue)) {
      body["propertyValue"] = request.propertyValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorkItem",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/workitems/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWorkItemResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWorkItemResponse({}));
  }

  /**
   * 更新工作项信息
   * 
   * @param request - UpdateWorkItemRequest
   * @returns UpdateWorkItemResponse
   */
  async updateWorkItem(organizationId: string, request: $_model.UpdateWorkItemRequest): Promise<$_model.UpdateWorkItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateWorkItemWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 更新工作项评论
   * 
   * @param request - UpdateWorkitemCommentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkitemCommentResponse
   */
  async updateWorkitemCommentWithOptions(organizationId: string, request: $_model.UpdateWorkitemCommentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWorkitemCommentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.commentId)) {
      body["commentId"] = request.commentId;
    }

    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.formatType)) {
      body["formatType"] = request.formatType;
    }

    if (!$dara.isNull(request.workitemIdentifier)) {
      body["workitemIdentifier"] = request.workitemIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorkitemComment",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/workitems/commentUpdate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWorkitemCommentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWorkitemCommentResponse({}));
  }

  /**
   * 更新工作项评论
   * 
   * @param request - UpdateWorkitemCommentRequest
   * @returns UpdateWorkitemCommentResponse
   */
  async updateWorkitemComment(organizationId: string, request: $_model.UpdateWorkitemCommentRequest): Promise<$_model.UpdateWorkitemCommentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateWorkitemCommentWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 批量更新工作项字段信息
   * 
   * @param request - UpdateWorkitemFieldRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkitemFieldResponse
   */
  async updateWorkitemFieldWithOptions(organizationId: string, request: $_model.UpdateWorkitemFieldRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWorkitemFieldResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateWorkitemPropertyRequest)) {
      body["updateWorkitemPropertyRequest"] = request.updateWorkitemPropertyRequest;
    }

    if (!$dara.isNull(request.workitemIdentifier)) {
      body["workitemIdentifier"] = request.workitemIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorkitemField",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/workitems/updateWorkitemField`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWorkitemFieldResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWorkitemFieldResponse({}));
  }

  /**
   * 批量更新工作项字段信息
   * 
   * @param request - UpdateWorkitemFieldRequest
   * @returns UpdateWorkitemFieldResponse
   */
  async updateWorkitemField(organizationId: string, request: $_model.UpdateWorkitemFieldRequest): Promise<$_model.UpdateWorkitemFieldResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateWorkitemFieldWithOptions(organizationId, request, headers, runtime);
  }

  /**
   * 工作项附件创建
   * 
   * @param request - WorkitemAttachmentCreateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns WorkitemAttachmentCreateResponse
   */
  async workitemAttachmentCreateWithOptions(organizationId: string, workitemIdentifier: string, request: $_model.WorkitemAttachmentCreateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.WorkitemAttachmentCreateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileKey)) {
      body["fileKey"] = request.fileKey;
    }

    if (!$dara.isNull(request.originalFilename)) {
      body["originalFilename"] = request.originalFilename;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "WorkitemAttachmentCreate",
      version: "2021-06-25",
      protocol: "HTTPS",
      pathname: `/organization/${$dara.URL.percentEncode(organizationId)}/workitem/${$dara.URL.percentEncode(workitemIdentifier)}/attachment`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.WorkitemAttachmentCreateResponse>(await this.callApi(params, req, runtime), new $_model.WorkitemAttachmentCreateResponse({}));
  }

  /**
   * 工作项附件创建
   * 
   * @param request - WorkitemAttachmentCreateRequest
   * @returns WorkitemAttachmentCreateResponse
   */
  async workitemAttachmentCreate(organizationId: string, workitemIdentifier: string, request: $_model.WorkitemAttachmentCreateRequest): Promise<$_model.WorkitemAttachmentCreateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.workitemAttachmentCreateWithOptions(organizationId, workitemIdentifier, request, headers, runtime);
  }

}
