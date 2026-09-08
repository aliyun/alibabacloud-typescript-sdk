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
      'ap-northeast-1': "ccc.aliyuncs.com",
      'ap-south-1': "ccc.aliyuncs.com",
      'ap-southeast-1': "ccc.aliyuncs.com",
      'ap-southeast-2': "ccc.aliyuncs.com",
      'ap-southeast-3': "ccc.aliyuncs.com",
      'ap-southeast-5': "ccc.aliyuncs.com",
      'cn-beijing': "ccc.aliyuncs.com",
      'cn-chengdu': "ccc.aliyuncs.com",
      'cn-hongkong': "ccc.aliyuncs.com",
      'cn-huhehaote': "ccc.aliyuncs.com",
      'cn-qingdao': "ccc.aliyuncs.com",
      'cn-shenzhen': "ccc.aliyuncs.com",
      'cn-zhangjiakou': "ccc.aliyuncs.com",
      'eu-central-1': "ccc.aliyuncs.com",
      'eu-west-1': "ccc.aliyuncs.com",
      'me-east-1': "ccc.aliyuncs.com",
      'us-east-1': "ccc.aliyuncs.com",
      'us-west-1': "ccc.aliyuncs.com",
      'cn-hangzhou-finance': "ccc.aliyuncs.com",
      'cn-shenzhen-finance-1': "ccc.aliyuncs.com",
      'cn-shanghai-finance-1': "ccc.aliyuncs.com",
      'cn-north-2-gov-1': "ccc.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ccc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Invoke AbortCampaign to stop the predictive outbound calling Activity corresponding to the specified Activity ID under the specified instance.
   * 
   * @param request - AbortCampaignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AbortCampaignResponse
   */
  async abortCampaignWithOptions(request: $_model.AbortCampaignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AbortCampaignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AbortCampaign",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AbortCampaignResponse>(await this.callApi(params, req, runtime), new $_model.AbortCampaignResponse({}));
  }

  /**
   * Invoke AbortCampaign to stop the predictive outbound calling Activity corresponding to the specified Activity ID under the specified instance.
   * 
   * @param request - AbortCampaignRequest
   * @returns AbortCampaignResponse
   */
  async abortCampaign(request: $_model.AbortCampaignRequest): Promise<$_model.AbortCampaignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.abortCampaignWithOptions(request, runtime);
  }

  /**
   * Call this operation to accept a chat.
   * 
   * @param request - AcceptChatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AcceptChatResponse
   */
  async acceptChatWithOptions(request: $_model.AcceptChatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AcceptChatResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AcceptChat",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AcceptChatResponse>(await this.callApi(params, req, runtime), new $_model.AcceptChatResponse({}));
  }

  /**
   * Call this operation to accept a chat.
   * 
   * @param request - AcceptChatRequest
   * @returns AcceptChatResponse
   */
  async acceptChat(request: $_model.AcceptChatRequest): Promise<$_model.AcceptChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.acceptChatWithOptions(request, runtime);
  }

  /**
   * Adds a blacklist tag to a specified phone number. You can use this feature with your Interactive Voice Response (IVR) settings to block frequent harassing calls.
   * 
   * @param request - AddBlacklistCallTaggingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddBlacklistCallTaggingResponse
   */
  async addBlacklistCallTaggingWithOptions(request: $_model.AddBlacklistCallTaggingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddBlacklistCallTaggingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.number)) {
      query["Number"] = request.number;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddBlacklistCallTagging",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddBlacklistCallTaggingResponse>(await this.callApi(params, req, runtime), new $_model.AddBlacklistCallTaggingResponse({}));
  }

  /**
   * Adds a blacklist tag to a specified phone number. You can use this feature with your Interactive Voice Response (IVR) settings to block frequent harassing calls.
   * 
   * @param request - AddBlacklistCallTaggingRequest
   * @returns AddBlacklistCallTaggingResponse
   */
  async addBlacklistCallTagging(request: $_model.AddBlacklistCallTaggingRequest): Promise<$_model.AddBlacklistCallTaggingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addBlacklistCallTaggingWithOptions(request, runtime);
  }

  /**
   * Invoke AddCases to add an outbound call list to a predictive dialing activity identified by a specified ID under a specified instance.
   * 
   * @param tmpReq - AddCasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCasesResponse
   */
  async addCasesWithOptions(tmpReq: $_model.AddCasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddCasesResponse> {
    tmpReq.validate();
    let request = new $_model.AddCasesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.caseList)) {
      request.caseListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.caseList, "CaseList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!$dara.isNull(request.caseListShrink)) {
      query["CaseList"] = request.caseListShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddCases",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddCasesResponse>(await this.callApi(params, req, runtime), new $_model.AddCasesResponse({}));
  }

  /**
   * Invoke AddCases to add an outbound call list to a predictive dialing activity identified by a specified ID under a specified instance.
   * 
   * @param request - AddCasesRequest
   * @returns AddCasesResponse
   */
  async addCases(request: $_model.AddCasesRequest): Promise<$_model.AddCasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addCasesWithOptions(request, runtime);
  }

  /**
   * You can use the AddFeedback API to evaluate and rate AI features.
   * 
   * @param request - AddFeedbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddFeedbackResponse
   */
  async addFeedbackWithOptions(request: $_model.AddFeedbackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddFeedbackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.feedback)) {
      query["Feedback"] = request.feedback;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.rating)) {
      query["Rating"] = request.rating;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddFeedback",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddFeedbackResponse>(await this.callApi(params, req, runtime), new $_model.AddFeedbackResponse({}));
  }

  /**
   * You can use the AddFeedback API to evaluate and rate AI features.
   * 
   * @param request - AddFeedbackRequest
   * @returns AddFeedbackResponse
   */
  async addFeedback(request: $_model.AddFeedbackRequest): Promise<$_model.AddFeedbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addFeedbackWithOptions(request, runtime);
  }

  /**
   * Adds one or more phone numbers to a skill group by calling AddNumbersToSkillGroup.
   * 
   * @param request - AddNumbersToSkillGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddNumbersToSkillGroupResponse
   */
  async addNumbersToSkillGroupWithOptions(request: $_model.AddNumbersToSkillGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddNumbersToSkillGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instNumberGroupIdList)) {
      query["InstNumberGroupIdList"] = request.instNumberGroupIdList;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.numberList)) {
      query["NumberList"] = request.numberList;
    }

    if (!$dara.isNull(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddNumbersToSkillGroup",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddNumbersToSkillGroupResponse>(await this.callApi(params, req, runtime), new $_model.AddNumbersToSkillGroupResponse({}));
  }

  /**
   * Adds one or more phone numbers to a skill group by calling AddNumbersToSkillGroup.
   * 
   * @param request - AddNumbersToSkillGroupRequest
   * @returns AddNumbersToSkillGroupResponse
   */
  async addNumbersToSkillGroup(request: $_model.AddNumbersToSkillGroupRequest): Promise<$_model.AddNumbersToSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addNumbersToSkillGroupWithOptions(request, runtime);
  }

  /**
   * You can invoke AddPersonalNumbersToUser to add one or more personal outbound numbers to a specified agent under a specified instance.
   * 
   * @param request - AddPersonalNumbersToUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddPersonalNumbersToUserResponse
   */
  async addPersonalNumbersToUserWithOptions(request: $_model.AddPersonalNumbersToUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddPersonalNumbersToUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.numberList)) {
      query["NumberList"] = request.numberList;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddPersonalNumbersToUser",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddPersonalNumbersToUserResponse>(await this.callApi(params, req, runtime), new $_model.AddPersonalNumbersToUserResponse({}));
  }

  /**
   * You can invoke AddPersonalNumbersToUser to add one or more personal outbound numbers to a specified agent under a specified instance.
   * 
   * @param request - AddPersonalNumbersToUserRequest
   * @returns AddPersonalNumbersToUserResponse
   */
  async addPersonalNumbersToUser(request: $_model.AddPersonalNumbersToUserRequest): Promise<$_model.AddPersonalNumbersToUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addPersonalNumbersToUserWithOptions(request, runtime);
  }

  /**
   * You can invoke AddPhoneNumberToSkillGroups to associate a phone number with one or more skill groups under a specified instance.
   * 
   * @param request - AddPhoneNumberToSkillGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddPhoneNumberToSkillGroupsResponse
   */
  async addPhoneNumberToSkillGroupsWithOptions(request: $_model.AddPhoneNumberToSkillGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddPhoneNumberToSkillGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.number)) {
      query["Number"] = request.number;
    }

    if (!$dara.isNull(request.skillGroupIdList)) {
      query["SkillGroupIdList"] = request.skillGroupIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddPhoneNumberToSkillGroups",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddPhoneNumberToSkillGroupsResponse>(await this.callApi(params, req, runtime), new $_model.AddPhoneNumberToSkillGroupsResponse({}));
  }

  /**
   * You can invoke AddPhoneNumberToSkillGroups to associate a phone number with one or more skill groups under a specified instance.
   * 
   * @param request - AddPhoneNumberToSkillGroupsRequest
   * @returns AddPhoneNumberToSkillGroupsResponse
   */
  async addPhoneNumberToSkillGroups(request: $_model.AddPhoneNumberToSkillGroupsRequest): Promise<$_model.AddPhoneNumberToSkillGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addPhoneNumberToSkillGroupsWithOptions(request, runtime);
  }

  /**
   * You can invoke AddPhoneNumbers to add one or more phone numbers to a specified instance.
   * 
   * @param request - AddPhoneNumbersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddPhoneNumbersResponse
   */
  async addPhoneNumbersWithOptions(request: $_model.AddPhoneNumbersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddPhoneNumbersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactFlowId)) {
      query["ContactFlowId"] = request.contactFlowId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.numberGroupId)) {
      query["NumberGroupId"] = request.numberGroupId;
    }

    if (!$dara.isNull(request.numberList)) {
      query["NumberList"] = request.numberList;
    }

    if (!$dara.isNull(request.usage)) {
      query["Usage"] = request.usage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddPhoneNumbers",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddPhoneNumbersResponse>(await this.callApi(params, req, runtime), new $_model.AddPhoneNumbersResponse({}));
  }

  /**
   * You can invoke AddPhoneNumbers to add one or more phone numbers to a specified instance.
   * 
   * @param request - AddPhoneNumbersRequest
   * @returns AddPhoneNumbersResponse
   */
  async addPhoneNumbers(request: $_model.AddPhoneNumbersRequest): Promise<$_model.AddPhoneNumbersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addPhoneNumbersWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - AddSchemaPropertyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddSchemaPropertyResponse
   */
  async addSchemaPropertyWithOptions(tmpReq: $_model.AddSchemaPropertyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddSchemaPropertyResponse> {
    tmpReq.validate();
    let request = new $_model.AddSchemaPropertyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.property)) {
      request.propertyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.property, "Property", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.propertyShrink)) {
      body["Property"] = request.propertyShrink;
    }

    if (!$dara.isNull(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.schemaId)) {
      body["SchemaId"] = request.schemaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddSchemaProperty",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddSchemaPropertyResponse>(await this.callApi(params, req, runtime), new $_model.AddSchemaPropertyResponse({}));
  }

  /**
   * @param request - AddSchemaPropertyRequest
   * @returns AddSchemaPropertyResponse
   */
  async addSchemaProperty(request: $_model.AddSchemaPropertyRequest): Promise<$_model.AddSchemaPropertyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addSchemaPropertyWithOptions(request, runtime);
  }

  /**
   * You can invoke AddSkillGroupsToUser to add one or more skill groups to a specified agent under a specified instance.
   * 
   * @param request - AddSkillGroupsToUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddSkillGroupsToUserResponse
   */
  async addSkillGroupsToUserWithOptions(request: $_model.AddSkillGroupsToUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddSkillGroupsToUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.skillLevelList)) {
      query["SkillLevelList"] = request.skillLevelList;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddSkillGroupsToUser",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddSkillGroupsToUserResponse>(await this.callApi(params, req, runtime), new $_model.AddSkillGroupsToUserResponse({}));
  }

  /**
   * You can invoke AddSkillGroupsToUser to add one or more skill groups to a specified agent under a specified instance.
   * 
   * @param request - AddSkillGroupsToUserRequest
   * @returns AddSkillGroupsToUserResponse
   */
  async addSkillGroupsToUser(request: $_model.AddSkillGroupsToUserRequest): Promise<$_model.AddSkillGroupsToUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addSkillGroupsToUserWithOptions(request, runtime);
  }

  /**
   * Use AddTicketTask to add a signature and assign an assignee.
   * 
   * @param request - AddTicketTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTicketTaskResponse
   */
  async addTicketTaskWithOptions(request: $_model.AddTicketTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddTicketTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.assignee)) {
      query["Assignee"] = request.assignee;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.position)) {
      query["Position"] = request.position;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.ticketId)) {
      query["TicketId"] = request.ticketId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddTicketTask",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddTicketTaskResponse>(await this.callApi(params, req, runtime), new $_model.AddTicketTaskResponse({}));
  }

  /**
   * Use AddTicketTask to add a signature and assign an assignee.
   * 
   * @param request - AddTicketTaskRequest
   * @returns AddTicketTaskResponse
   */
  async addTicketTask(request: $_model.AddTicketTaskRequest): Promise<$_model.AddTicketTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addTicketTaskWithOptions(request, runtime);
  }

  /**
   * You can invoke AddUsersToSkillGroup to add one or more agents to the same skill group.
   * 
   * @param request - AddUsersToSkillGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUsersToSkillGroupResponse
   */
  async addUsersToSkillGroupWithOptions(request: $_model.AddUsersToSkillGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddUsersToSkillGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    if (!$dara.isNull(request.userSkillLevelList)) {
      query["UserSkillLevelList"] = request.userSkillLevelList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUsersToSkillGroup",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddUsersToSkillGroupResponse>(await this.callApi(params, req, runtime), new $_model.AddUsersToSkillGroupResponse({}));
  }

  /**
   * You can invoke AddUsersToSkillGroup to add one or more agents to the same skill group.
   * 
   * @param request - AddUsersToSkillGroupRequest
   * @returns AddUsersToSkillGroupResponse
   */
  async addUsersToSkillGroup(request: $_model.AddUsersToSkillGroupRequest): Promise<$_model.AddUsersToSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUsersToSkillGroupWithOptions(request, runtime);
  }

  /**
   * Analyze the specified text-based conversation content and extract summary-related information, such as the title, keywords, summary, and other specified details.
   * 
   * @remarks
   * This API can be used for both online chat sessions and voice sessions. When used for voice sessions, the real-time speech-to-text transcription feature must be enabled.
   * 
   * @param request - AnalyzeConversationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AnalyzeConversationResponse
   */
  async analyzeConversationWithOptions(request: $_model.AnalyzeConversationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AnalyzeConversationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.fieldListJson)) {
      query["FieldListJson"] = request.fieldListJson;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.taskListJson)) {
      query["TaskListJson"] = request.taskListJson;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AnalyzeConversation",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AnalyzeConversationResponse>(await this.callApi(params, req, runtime), new $_model.AnalyzeConversationResponse({}));
  }

  /**
   * Analyze the specified text-based conversation content and extract summary-related information, such as the title, keywords, summary, and other specified details.
   * 
   * @remarks
   * This API can be used for both online chat sessions and voice sessions. When used for voice sessions, the real-time speech-to-text transcription feature must be enabled.
   * 
   * @param request - AnalyzeConversationRequest
   * @returns AnalyzeConversationResponse
   */
  async analyzeConversation(request: $_model.AnalyzeConversationRequest): Promise<$_model.AnalyzeConversationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.analyzeConversationWithOptions(request, runtime);
  }

  /**
   * You can invoke AnswerCall to answer the call associated with a specified call ID under a specified instance.
   * 
   * @param request - AnswerCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AnswerCallResponse
   */
  async answerCallWithOptions(request: $_model.AnswerCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AnswerCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AnswerCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AnswerCallResponse>(await this.callApi(params, req, runtime), new $_model.AnswerCallResponse({}));
  }

  /**
   * You can invoke AnswerCall to answer the call associated with a specified call ID under a specified instance.
   * 
   * @param request - AnswerCallRequest
   * @returns AnswerCallResponse
   */
  async answerCall(request: $_model.AnswerCallRequest): Promise<$_model.AnswerCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.answerCallWithOptions(request, runtime);
  }

  /**
   * Adds cases to a predictive campaign in a specified instance.
   * 
   * @param tmpReq - AppendCasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AppendCasesResponse
   */
  async appendCasesWithOptions(tmpReq: $_model.AppendCasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AppendCasesResponse> {
    tmpReq.validate();
    let request = new $_model.AppendCasesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query = { };
    if (!$dara.isNull(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AppendCases",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AppendCasesResponse>(await this.callApi(params, req, runtime), new $_model.AppendCasesResponse({}));
  }

  /**
   * Adds cases to a predictive campaign in a specified instance.
   * 
   * @param request - AppendCasesRequest
   * @returns AppendCasesResponse
   */
  async appendCases(request: $_model.AppendCasesRequest): Promise<$_model.AppendCasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.appendCasesWithOptions(request, runtime);
  }

  /**
   * Call AssignUsers to import one or more RAM users into a specified instance. After the import, the RAM users become agents in the instance.
   * 
   * @remarks
   * Accounts with RAM permissions can view all RAM users under an Alibaba Cloud account in the RAM console. You can access the RAM console at https\\://ram.console.aliyun.com/users.
   * 
   * @deprecated OpenAPI AssignUsers is deprecated, please use CCC::2020-07-01::ImportRamUsers instead.
   * 
   * @param request - AssignUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssignUsersResponse
   */
  async assignUsersWithOptions(request: $_model.AssignUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssignUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.async)) {
      query["Async"] = request.async;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ramIdList)) {
      query["RamIdList"] = request.ramIdList;
    }

    if (!$dara.isNull(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    if (!$dara.isNull(request.skillLevelList)) {
      query["SkillLevelList"] = request.skillLevelList;
    }

    if (!$dara.isNull(request.workMode)) {
      query["WorkMode"] = request.workMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssignUsers",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssignUsersResponse>(await this.callApi(params, req, runtime), new $_model.AssignUsersResponse({}));
  }

  /**
   * Call AssignUsers to import one or more RAM users into a specified instance. After the import, the RAM users become agents in the instance.
   * 
   * @remarks
   * Accounts with RAM permissions can view all RAM users under an Alibaba Cloud account in the RAM console. You can access the RAM console at https\\://ram.console.aliyun.com/users.
   * 
   * @deprecated OpenAPI AssignUsers is deprecated, please use CCC::2020-07-01::ImportRamUsers instead.
   * 
   * @param request - AssignUsersRequest
   * @returns AssignUsersResponse
   */
  // Deprecated
  async assignUsers(request: $_model.AssignUsersRequest): Promise<$_model.AssignUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.assignUsersWithOptions(request, runtime);
  }

  /**
   * You can invoke BargeInCall to forcibly insert into an ongoing call associated with a specified call ID under a specified instance. After the forced insertion succeeds, the original two-party call becomes a three-party conference call.
   * 
   * @param request - BargeInCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BargeInCallResponse
   */
  async bargeInCallWithOptions(request: $_model.BargeInCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BargeInCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bargedUserId)) {
      query["BargedUserId"] = request.bargedUserId;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.timeoutSeconds)) {
      query["TimeoutSeconds"] = request.timeoutSeconds;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BargeInCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BargeInCallResponse>(await this.callApi(params, req, runtime), new $_model.BargeInCallResponse({}));
  }

  /**
   * You can invoke BargeInCall to forcibly insert into an ongoing call associated with a specified call ID under a specified instance. After the forced insertion succeeds, the original two-party call becomes a three-party conference call.
   * 
   * @param request - BargeInCallRequest
   * @returns BargeInCallResponse
   */
  async bargeInCall(request: $_model.BargeInCallRequest): Promise<$_model.BargeInCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bargeInCallWithOptions(request, runtime);
  }

  /**
   * Directly transfer a call to another agent, a skill group queue, or an external number. Direct transfer is also known as blind transfer or single-step transfer.
   * 
   * @param request - BlindTransferRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BlindTransferResponse
   */
  async blindTransferWithOptions(request: $_model.BlindTransferRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BlindTransferResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callPriority)) {
      query["CallPriority"] = request.callPriority;
    }

    if (!$dara.isNull(request.contactFlowVariables)) {
      query["ContactFlowVariables"] = request.contactFlowVariables;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.queuingOverflowThreshold)) {
      query["QueuingOverflowThreshold"] = request.queuingOverflowThreshold;
    }

    if (!$dara.isNull(request.queuingTimeoutSeconds)) {
      query["QueuingTimeoutSeconds"] = request.queuingTimeoutSeconds;
    }

    if (!$dara.isNull(request.routingType)) {
      query["RoutingType"] = request.routingType;
    }

    if (!$dara.isNull(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    if (!$dara.isNull(request.strategyName)) {
      query["StrategyName"] = request.strategyName;
    }

    if (!$dara.isNull(request.strategyParams)) {
      query["StrategyParams"] = request.strategyParams;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.timeoutSeconds)) {
      query["TimeoutSeconds"] = request.timeoutSeconds;
    }

    if (!$dara.isNull(request.transferee)) {
      query["Transferee"] = request.transferee;
    }

    if (!$dara.isNull(request.transfereeType)) {
      query["TransfereeType"] = request.transfereeType;
    }

    if (!$dara.isNull(request.transferor)) {
      query["Transferor"] = request.transferor;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BlindTransfer",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BlindTransferResponse>(await this.callApi(params, req, runtime), new $_model.BlindTransferResponse({}));
  }

  /**
   * Directly transfer a call to another agent, a skill group queue, or an external number. Direct transfer is also known as blind transfer or single-step transfer.
   * 
   * @param request - BlindTransferRequest
   * @returns BlindTransferResponse
   */
  async blindTransfer(request: $_model.BlindTransferRequest): Promise<$_model.BlindTransferResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.blindTransferWithOptions(request, runtime);
  }

  /**
   * BridgeRtcCall
   * 
   * @param request - BridgeRtcCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BridgeRtcCallResponse
   */
  async bridgeRtcCallWithOptions(request: $_model.BridgeRtcCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BridgeRtcCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callee)) {
      query["Callee"] = request.callee;
    }

    if (!$dara.isNull(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.serviceProvider)) {
      query["ServiceProvider"] = request.serviceProvider;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.timeoutSeconds)) {
      query["TimeoutSeconds"] = request.timeoutSeconds;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.videoEnabled)) {
      query["VideoEnabled"] = request.videoEnabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BridgeRtcCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BridgeRtcCallResponse>(await this.callApi(params, req, runtime), new $_model.BridgeRtcCallResponse({}));
  }

  /**
   * BridgeRtcCall
   * 
   * @param request - BridgeRtcCallRequest
   * @returns BridgeRtcCallResponse
   */
  async bridgeRtcCall(request: $_model.BridgeRtcCallRequest): Promise<$_model.BridgeRtcCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bridgeRtcCallWithOptions(request, runtime);
  }

  /**
   * You can invoke the CancelAttendedTransfer API to cancel an attended transfer. You can call this API at any time after initiating the attended transfer and before completing it, even if the transferee has already answered the call.
   * 
   * @param request - CancelAttendedTransferRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelAttendedTransferResponse
   */
  async cancelAttendedTransferWithOptions(request: $_model.CancelAttendedTransferRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelAttendedTransferResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelAttendedTransfer",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelAttendedTransferResponse>(await this.callApi(params, req, runtime), new $_model.CancelAttendedTransferResponse({}));
  }

  /**
   * You can invoke the CancelAttendedTransfer API to cancel an attended transfer. You can call this API at any time after initiating the attended transfer and before completing it, even if the transferee has already answered the call.
   * 
   * @param request - CancelAttendedTransferRequest
   * @returns CancelAttendedTransferResponse
   */
  async cancelAttendedTransfer(request: $_model.CancelAttendedTransferRequest): Promise<$_model.CancelAttendedTransferResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelAttendedTransferWithOptions(request, runtime);
  }

  /**
   * Changes an agent\\"s status to invisible. This is equivalent to the outbound-only mode.
   * 
   * @param request - ChangeVisibilityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeVisibilityResponse
   */
  async changeVisibilityWithOptions(request: $_model.ChangeVisibilityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeVisibilityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.invisible)) {
      query["Invisible"] = request.invisible;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeVisibility",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeVisibilityResponse>(await this.callApi(params, req, runtime), new $_model.ChangeVisibilityResponse({}));
  }

  /**
   * Changes an agent\\"s status to invisible. This is equivalent to the outbound-only mode.
   * 
   * @param request - ChangeVisibilityRequest
   * @returns ChangeVisibilityResponse
   */
  async changeVisibility(request: $_model.ChangeVisibilityRequest): Promise<$_model.ChangeVisibilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeVisibilityWithOptions(request, runtime);
  }

  /**
   * You can invoke ChangeWorkMode to change the agent\\"s work mode.
   * 
   * @param request - ChangeWorkModeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeWorkModeResponse
   */
  async changeWorkModeWithOptions(request: $_model.ChangeWorkModeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeWorkModeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.signedSkillGroupIdList)) {
      query["SignedSkillGroupIdList"] = request.signedSkillGroupIdList;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.workMode)) {
      query["WorkMode"] = request.workMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeWorkMode",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeWorkModeResponse>(await this.callApi(params, req, runtime), new $_model.ChangeWorkModeResponse({}));
  }

  /**
   * You can invoke ChangeWorkMode to change the agent\\"s work mode.
   * 
   * @param request - ChangeWorkModeRequest
   * @returns ChangeWorkModeResponse
   */
  async changeWorkMode(request: $_model.ChangeWorkModeRequest): Promise<$_model.ChangeWorkModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeWorkModeWithOptions(request, runtime);
  }

  /**
   * Call the `ClaimCall` API to assign a call to an agent.
   * 
   * @param request - ClaimCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClaimCallResponse
   */
  async claimCallWithOptions(request: $_model.ClaimCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClaimCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.candidateUserListJson)) {
      query["CandidateUserListJson"] = request.candidateUserListJson;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClaimCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClaimCallResponse>(await this.callApi(params, req, runtime), new $_model.ClaimCallResponse({}));
  }

  /**
   * Call the `ClaimCall` API to assign a call to an agent.
   * 
   * @param request - ClaimCallRequest
   * @returns ClaimCallResponse
   */
  async claimCall(request: $_model.ClaimCallRequest): Promise<$_model.ClaimCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.claimCallWithOptions(request, runtime);
  }

  /**
   * You can call ClaimChat to claim the chat for a specified Job ID in a specified instance.
   * 
   * @param request - ClaimChatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClaimChatResponse
   */
  async claimChatWithOptions(request: $_model.ClaimChatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClaimChatResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClaimChat",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClaimChatResponse>(await this.callApi(params, req, runtime), new $_model.ClaimChatResponse({}));
  }

  /**
   * You can call ClaimChat to claim the chat for a specified Job ID in a specified instance.
   * 
   * @param request - ClaimChatRequest
   * @returns ClaimChatResponse
   */
  async claimChat(request: $_model.ClaimChatRequest): Promise<$_model.ClaimChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.claimChatWithOptions(request, runtime);
  }

  /**
   * You can invoke CoachCall to coach a specified agent in a specified call (identified by a call ID) under a specified instance. During the coaching session, the coached agent can hear the coach\\"s voice, but the customer cannot hear the coach\\"s voice.
   * 
   * @param request - CoachCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CoachCallResponse
   */
  async coachCallWithOptions(request: $_model.CoachCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CoachCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.coachedUserId)) {
      query["CoachedUserId"] = request.coachedUserId;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.timeoutSeconds)) {
      query["TimeoutSeconds"] = request.timeoutSeconds;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CoachCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CoachCallResponse>(await this.callApi(params, req, runtime), new $_model.CoachCallResponse({}));
  }

  /**
   * You can invoke CoachCall to coach a specified agent in a specified call (identified by a call ID) under a specified instance. During the coaching session, the coached agent can hear the coach\\"s voice, but the customer cannot hear the coach\\"s voice.
   * 
   * @param request - CoachCallRequest
   * @returns CoachCallResponse
   */
  async coachCall(request: $_model.CoachCallRequest): Promise<$_model.CoachCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.coachCallWithOptions(request, runtime);
  }

  /**
   * Commits a contact flow.
   * 
   * @param request - CommitContactFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CommitContactFlowResponse
   */
  async commitContactFlowWithOptions(request: $_model.CommitContactFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CommitContactFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactFlowId)) {
      query["ContactFlowId"] = request.contactFlowId;
    }

    if (!$dara.isNull(request.definition)) {
      query["Definition"] = request.definition;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.draftId)) {
      query["DraftId"] = request.draftId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CommitContactFlow",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CommitContactFlowResponse>(await this.callApi(params, req, runtime), new $_model.CommitContactFlowResponse({}));
  }

  /**
   * Commits a contact flow.
   * 
   * @param request - CommitContactFlowRequest
   * @returns CommitContactFlowResponse
   */
  async commitContactFlow(request: $_model.CommitContactFlowRequest): Promise<$_model.CommitContactFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.commitContactFlowWithOptions(request, runtime);
  }

  /**
   * You can invoke CompleteAttendedTransfer to complete a consultative transfer.
   * 
   * @param request - CompleteAttendedTransferRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompleteAttendedTransferResponse
   */
  async completeAttendedTransferWithOptions(request: $_model.CompleteAttendedTransferRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CompleteAttendedTransferResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CompleteAttendedTransfer",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CompleteAttendedTransferResponse>(await this.callApi(params, req, runtime), new $_model.CompleteAttendedTransferResponse({}));
  }

  /**
   * You can invoke CompleteAttendedTransfer to complete a consultative transfer.
   * 
   * @param request - CompleteAttendedTransferRequest
   * @returns CompleteAttendedTransferResponse
   */
  async completeAttendedTransfer(request: $_model.CompleteAttendedTransferRequest): Promise<$_model.CompleteAttendedTransferResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.completeAttendedTransferWithOptions(request, runtime);
  }

  /**
   * You can invoke CreateAudioFile to create an audio resource under a specified instance. The created audio resource can be used in the instance, such as selecting the audio file for playback during IVR.
   * 
   * @param request - CreateAudioFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAudioFileResponse
   */
  async createAudioFileWithOptions(request: $_model.CreateAudioFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAudioFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.audioFileName)) {
      query["AudioFileName"] = request.audioFileName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ossFileKey)) {
      query["OssFileKey"] = request.ossFileKey;
    }

    if (!$dara.isNull(request.usage)) {
      query["Usage"] = request.usage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAudioFile",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAudioFileResponse>(await this.callApi(params, req, runtime), new $_model.CreateAudioFileResponse({}));
  }

  /**
   * You can invoke CreateAudioFile to create an audio resource under a specified instance. The created audio resource can be used in the instance, such as selecting the audio file for playback during IVR.
   * 
   * @param request - CreateAudioFileRequest
   * @returns CreateAudioFileResponse
   */
  async createAudioFile(request: $_model.CreateAudioFileRequest): Promise<$_model.CreateAudioFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAudioFileWithOptions(request, runtime);
  }

  /**
   * Use the CreateCallSummary operation to create a call summary.
   * 
   * @param request - CreateCallSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCallSummaryResponse
   */
  async createCallSummaryWithOptions(request: $_model.CreateCallSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCallSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.context)) {
      query["Context"] = request.context;
    }

    if (!$dara.isNull(request.customerId)) {
      query["CustomerId"] = request.customerId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCallSummary",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCallSummaryResponse>(await this.callApi(params, req, runtime), new $_model.CreateCallSummaryResponse({}));
  }

  /**
   * Use the CreateCallSummary operation to create a call summary.
   * 
   * @param request - CreateCallSummaryRequest
   * @returns CreateCallSummaryResponse
   */
  async createCallSummary(request: $_model.CreateCallSummaryRequest): Promise<$_model.CreateCallSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCallSummaryWithOptions(request, runtime);
  }

  /**
   * You can invoke CreateCallTags to create multiple call tags under a specified instance.
   * 
   * @param request - CreateCallTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCallTagsResponse
   */
  async createCallTagsWithOptions(request: $_model.CreateCallTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCallTagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callTagNameList)) {
      query["CallTagNameList"] = request.callTagNameList;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCallTags",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCallTagsResponse>(await this.callApi(params, req, runtime), new $_model.CreateCallTagsResponse({}));
  }

  /**
   * You can invoke CreateCallTags to create multiple call tags under a specified instance.
   * 
   * @param request - CreateCallTagsRequest
   * @returns CreateCallTagsResponse
   */
  async createCallTags(request: $_model.CreateCallTagsRequest): Promise<$_model.CreateCallTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCallTagsWithOptions(request, runtime);
  }

  /**
   * You can invoke CreateCampaign to create a predictive outbound calling activity under a specified instance.
   * 
   * @param tmpReq - CreateCampaignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCampaignResponse
   */
  async createCampaignWithOptions(tmpReq: $_model.CreateCampaignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCampaignResponse> {
    tmpReq.validate();
    let request = new $_model.CreateCampaignShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.caseList)) {
      request.caseListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.caseList, "CaseList", "json");
    }

    if (!$dara.isNull(tmpReq.numberList)) {
      request.numberListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.numberList, "NumberList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.callableTime)) {
      query["CallableTime"] = request.callableTime;
    }

    if (!$dara.isNull(request.caseFileKey)) {
      query["CaseFileKey"] = request.caseFileKey;
    }

    if (!$dara.isNull(request.caseListShrink)) {
      query["CaseList"] = request.caseListShrink;
    }

    if (!$dara.isNull(request.contactFlowId)) {
      query["ContactFlowId"] = request.contactFlowId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.executingUntilTimeout)) {
      query["ExecutingUntilTimeout"] = request.executingUntilTimeout;
    }

    if (!$dara.isNull(request.flashSmsParameters)) {
      query["FlashSmsParameters"] = request.flashSmsParameters;
    }

    if (!$dara.isNull(request.instGroupId)) {
      query["InstGroupId"] = request.instGroupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxAttemptCount)) {
      query["MaxAttemptCount"] = request.maxAttemptCount;
    }

    if (!$dara.isNull(request.minAttemptInterval)) {
      query["MinAttemptInterval"] = request.minAttemptInterval;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.numberListShrink)) {
      query["NumberList"] = request.numberListShrink;
    }

    if (!$dara.isNull(request.queueId)) {
      query["QueueId"] = request.queueId;
    }

    if (!$dara.isNull(request.simulation)) {
      query["Simulation"] = request.simulation;
    }

    if (!$dara.isNull(request.simulationParameters)) {
      query["SimulationParameters"] = request.simulationParameters;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.strategyParameters)) {
      query["StrategyParameters"] = request.strategyParameters;
    }

    if (!$dara.isNull(request.strategyType)) {
      query["StrategyType"] = request.strategyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCampaign",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCampaignResponse>(await this.callApi(params, req, runtime), new $_model.CreateCampaignResponse({}));
  }

  /**
   * You can invoke CreateCampaign to create a predictive outbound calling activity under a specified instance.
   * 
   * @param request - CreateCampaignRequest
   * @returns CreateCampaignResponse
   */
  async createCampaign(request: $_model.CreateCampaignRequest): Promise<$_model.CreateCampaignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCampaignWithOptions(request, runtime);
  }

  /**
   * @param request - CreateChatMediaUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateChatMediaUrlResponse
   */
  async createChatMediaUrlWithOptions(request: $_model.CreateChatMediaUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateChatMediaUrlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mimeType)) {
      body["MimeType"] = request.mimeType;
    }

    if (!$dara.isNull(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateChatMediaUrl",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateChatMediaUrlResponse>(await this.callApi(params, req, runtime), new $_model.CreateChatMediaUrlResponse({}));
  }

  /**
   * @param request - CreateChatMediaUrlRequest
   * @returns CreateChatMediaUrlResponse
   */
  async createChatMediaUrl(request: $_model.CreateChatMediaUrlRequest): Promise<$_model.CreateChatMediaUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createChatMediaUrlWithOptions(request, runtime);
  }

  /**
   * Creates an IVR flow.
   * 
   * @param request - CreateContactFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateContactFlowResponse
   */
  async createContactFlowWithOptions(request: $_model.CreateContactFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateContactFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.definition)) {
      query["Definition"] = request.definition;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "CreateContactFlow",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateContactFlowResponse>(await this.callApi(params, req, runtime), new $_model.CreateContactFlowResponse({}));
  }

  /**
   * Creates an IVR flow.
   * 
   * @param request - CreateContactFlowRequest
   * @returns CreateContactFlowResponse
   */
  async createContactFlow(request: $_model.CreateContactFlowRequest): Promise<$_model.CreateContactFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createContactFlowWithOptions(request, runtime);
  }

  /**
   * You can invoke CreateCustomCallTagging to create one or more inbound number tags under a specified instance.
   * 
   * @deprecated OpenAPI CreateCustomCallTagging is deprecated, please use CCC::2020-07-01::CreateCustomCallTaggings instead.
   * 
   * @param request - CreateCustomCallTaggingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomCallTaggingResponse
   */
  async createCustomCallTaggingWithOptions(request: $_model.CreateCustomCallTaggingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustomCallTaggingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customNumberList)) {
      query["CustomNumberList"] = request.customNumberList;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCustomCallTagging",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCustomCallTaggingResponse>(await this.callApi(params, req, runtime), new $_model.CreateCustomCallTaggingResponse({}));
  }

  /**
   * You can invoke CreateCustomCallTagging to create one or more inbound number tags under a specified instance.
   * 
   * @deprecated OpenAPI CreateCustomCallTagging is deprecated, please use CCC::2020-07-01::CreateCustomCallTaggings instead.
   * 
   * @param request - CreateCustomCallTaggingRequest
   * @returns CreateCustomCallTaggingResponse
   */
  // Deprecated
  async createCustomCallTagging(request: $_model.CreateCustomCallTaggingRequest): Promise<$_model.CreateCustomCallTaggingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomCallTaggingWithOptions(request, runtime);
  }

  /**
   * Invoke CreateInstance to create a Cloud Contact Center instance.
   * 
   * @param request - CreateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: $_model.CreateInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adminRamIdList)) {
      query["AdminRamIdList"] = request.adminRamIdList;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.numberList)) {
      query["NumberList"] = request.numberList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstance",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceResponse({}));
  }

  /**
   * Invoke CreateInstance to create a Cloud Contact Center instance.
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: $_model.CreateInstanceRequest): Promise<$_model.CreateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - CreateSchemaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSchemaResponse
   */
  async createSchemaWithOptions(tmpReq: $_model.CreateSchemaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSchemaResponse> {
    tmpReq.validate();
    let request = new $_model.CreateSchemaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.properties)) {
      request.propertiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.properties, "Properties", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.propertiesShrink)) {
      body["Properties"] = request.propertiesShrink;
    }

    if (!$dara.isNull(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSchema",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSchemaResponse>(await this.callApi(params, req, runtime), new $_model.CreateSchemaResponse({}));
  }

  /**
   * @param request - CreateSchemaRequest
   * @returns CreateSchemaResponse
   */
  async createSchema(request: $_model.CreateSchemaRequest): Promise<$_model.CreateSchemaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSchemaWithOptions(request, runtime);
  }

  /**
   * You can call CreateSkillGroup to create a skill group under a specified instance.
   * 
   * @param request - CreateSkillGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSkillGroupResponse
   */
  async createSkillGroupWithOptions(request: $_model.CreateSkillGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSkillGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSkillGroup",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSkillGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateSkillGroupResponse({}));
  }

  /**
   * You can call CreateSkillGroup to create a skill group under a specified instance.
   * 
   * @param request - CreateSkillGroupRequest
   * @returns CreateSkillGroupResponse
   */
  async createSkillGroup(request: $_model.CreateSkillGroupRequest): Promise<$_model.CreateSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSkillGroupWithOptions(request, runtime);
  }

  /**
   * Use CreateTicket to create a ticket.
   * 
   * @param request - CreateTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTicketResponse
   */
  async createTicketWithOptions(request: $_model.CreateTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.context)) {
      query["Context"] = request.context;
    }

    if (!$dara.isNull(request.customerId)) {
      query["CustomerId"] = request.customerId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTicket",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTicketResponse>(await this.callApi(params, req, runtime), new $_model.CreateTicketResponse({}));
  }

  /**
   * Use CreateTicket to create a ticket.
   * 
   * @param request - CreateTicketRequest
   * @returns CreateTicketResponse
   */
  async createTicket(request: $_model.CreateTicketRequest): Promise<$_model.CreateTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTicketWithOptions(request, runtime);
  }

  /**
   * Call the CreateUser operation to create a new agent in a specified instance.
   * 
   * @remarks
   * Creating an agent is equivalent to creating a Resource Access Management (RAM) sub-account. Agents in Cloud Contact Center are mapped to RAM sub-accounts. Therefore, the parameters for creating an agent are similar to those for creating a RAM account. For example, LoginName is the logon name for the RAM account. Email is the email address associated with the RAM account. This email address receives an email containing the initial logon password for the RAM account.
   * 
   * @param request - CreateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserResponse
   */
  async createUserWithOptions(request: $_model.CreateUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.avatarUrl)) {
      query["AvatarUrl"] = request.avatarUrl;
    }

    if (!$dara.isNull(request.displayId)) {
      query["DisplayId"] = request.displayId;
    }

    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.loginName)) {
      query["LoginName"] = request.loginName;
    }

    if (!$dara.isNull(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.needEmailNotification)) {
      query["NeedEmailNotification"] = request.needEmailNotification;
    }

    if (!$dara.isNull(request.nickname)) {
      query["Nickname"] = request.nickname;
    }

    if (!$dara.isNull(request.resetPassword)) {
      query["ResetPassword"] = request.resetPassword;
    }

    if (!$dara.isNull(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    if (!$dara.isNull(request.skillLevelList)) {
      query["SkillLevelList"] = request.skillLevelList;
    }

    if (!$dara.isNull(request.workMode)) {
      query["WorkMode"] = request.workMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUser",
      version: "2020-07-01",
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
   * Call the CreateUser operation to create a new agent in a specified instance.
   * 
   * @remarks
   * Creating an agent is equivalent to creating a Resource Access Management (RAM) sub-account. Agents in Cloud Contact Center are mapped to RAM sub-accounts. Therefore, the parameters for creating an agent are similar to those for creating a RAM account. For example, LoginName is the logon name for the RAM account. Email is the email address associated with the RAM account. This email address receives an email containing the initial logon password for the RAM account.
   * 
   * @param request - CreateUserRequest
   * @returns CreateUserResponse
   */
  async createUser(request: $_model.CreateUserRequest): Promise<$_model.CreateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

  /**
   * You can invoke DeleteAudioFile to delete the audio file associated with a specified audio resource ID under a specified instance.
   * 
   * @param request - DeleteAudioFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAudioFileResponse
   */
  async deleteAudioFileWithOptions(request: $_model.DeleteAudioFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAudioFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.audioResourceId)) {
      query["AudioResourceId"] = request.audioResourceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAudioFile",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAudioFileResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAudioFileResponse({}));
  }

  /**
   * You can invoke DeleteAudioFile to delete the audio file associated with a specified audio resource ID under a specified instance.
   * 
   * @param request - DeleteAudioFileRequest
   * @returns DeleteAudioFileResponse
   */
  async deleteAudioFile(request: $_model.DeleteAudioFileRequest): Promise<$_model.DeleteAudioFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAudioFileWithOptions(request, runtime);
  }

  /**
   * You can invoke DeleteCallTag to delete a phone number tag under a specified instance.
   * 
   * @param request - DeleteCallTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCallTagResponse
   */
  async deleteCallTagWithOptions(request: $_model.DeleteCallTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCallTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCallTag",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCallTagResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCallTagResponse({}));
  }

  /**
   * You can invoke DeleteCallTag to delete a phone number tag under a specified instance.
   * 
   * @param request - DeleteCallTagRequest
   * @returns DeleteCallTagResponse
   */
  async deleteCallTag(request: $_model.DeleteCallTagRequest): Promise<$_model.DeleteCallTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCallTagWithOptions(request, runtime);
  }

  /**
   * Deletes the specified contact flow.
   * 
   * @param request - DeleteContactFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteContactFlowResponse
   */
  async deleteContactFlowWithOptions(request: $_model.DeleteContactFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteContactFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactFlowId)) {
      query["ContactFlowId"] = request.contactFlowId;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteContactFlow",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteContactFlowResponse>(await this.callApi(params, req, runtime), new $_model.DeleteContactFlowResponse({}));
  }

  /**
   * Deletes the specified contact flow.
   * 
   * @param request - DeleteContactFlowRequest
   * @returns DeleteContactFlowResponse
   */
  async deleteContactFlow(request: $_model.DeleteContactFlowRequest): Promise<$_model.DeleteContactFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteContactFlowWithOptions(request, runtime);
  }

  /**
   * You can invoke DeleteCustomCallTagging to delete the inbound number tag associated with a specified number under a specified instance.
   * 
   * @param request - DeleteCustomCallTaggingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomCallTaggingResponse
   */
  async deleteCustomCallTaggingWithOptions(request: $_model.DeleteCustomCallTaggingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomCallTaggingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.number)) {
      query["Number"] = request.number;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomCallTagging",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomCallTaggingResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomCallTaggingResponse({}));
  }

  /**
   * You can invoke DeleteCustomCallTagging to delete the inbound number tag associated with a specified number under a specified instance.
   * 
   * @param request - DeleteCustomCallTaggingRequest
   * @returns DeleteCustomCallTaggingResponse
   */
  async deleteCustomCallTagging(request: $_model.DeleteCustomCallTaggingRequest): Promise<$_model.DeleteCustomCallTaggingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomCallTaggingWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteDocumentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDocumentResponse
   */
  async deleteDocumentWithOptions(request: $_model.DeleteDocumentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDocumentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.documentId)) {
      body["DocumentId"] = request.documentId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.schemaId)) {
      body["SchemaId"] = request.schemaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDocument",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDocumentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDocumentResponse({}));
  }

  /**
   * @param request - DeleteDocumentRequest
   * @returns DeleteDocumentResponse
   */
  async deleteDocument(request: $_model.DeleteDocumentRequest): Promise<$_model.DeleteDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDocumentWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - DeleteDocumentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDocumentsResponse
   */
  async deleteDocumentsWithOptions(tmpReq: $_model.DeleteDocumentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDocumentsResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteDocumentsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.documentIds)) {
      request.documentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.documentIds, "DocumentIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.documentIdsShrink)) {
      body["DocumentIds"] = request.documentIdsShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.schemaId)) {
      body["SchemaId"] = request.schemaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDocuments",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDocumentsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDocumentsResponse({}));
  }

  /**
   * @param request - DeleteDocumentsRequest
   * @returns DeleteDocumentsResponse
   */
  async deleteDocuments(request: $_model.DeleteDocumentsRequest): Promise<$_model.DeleteDocumentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDocumentsWithOptions(request, runtime);
  }

  /**
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
      version: "2020-07-01",
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
   * @param request - DeleteInstanceRequest
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(request: $_model.DeleteInstanceRequest): Promise<$_model.DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteSchemaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSchemaResponse
   */
  async deleteSchemaWithOptions(request: $_model.DeleteSchemaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSchemaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.schemaId)) {
      body["SchemaId"] = request.schemaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSchema",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSchemaResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSchemaResponse({}));
  }

  /**
   * @param request - DeleteSchemaRequest
   * @returns DeleteSchemaResponse
   */
  async deleteSchema(request: $_model.DeleteSchemaRequest): Promise<$_model.DeleteSchemaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSchemaWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteSchemaPropertyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSchemaPropertyResponse
   */
  async deleteSchemaPropertyWithOptions(request: $_model.DeleteSchemaPropertyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSchemaPropertyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.propertyName)) {
      body["PropertyName"] = request.propertyName;
    }

    if (!$dara.isNull(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.schemaId)) {
      body["SchemaId"] = request.schemaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSchemaProperty",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSchemaPropertyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSchemaPropertyResponse({}));
  }

  /**
   * @param request - DeleteSchemaPropertyRequest
   * @returns DeleteSchemaPropertyResponse
   */
  async deleteSchemaProperty(request: $_model.DeleteSchemaPropertyRequest): Promise<$_model.DeleteSchemaPropertyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSchemaPropertyWithOptions(request, runtime);
  }

  /**
   * Invoke DeleteSkillGroup to delete the skill group associated with the specified skill group ID under the specified instance.
   * 
   * @param request - DeleteSkillGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSkillGroupResponse
   */
  async deleteSkillGroupWithOptions(request: $_model.DeleteSkillGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSkillGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSkillGroup",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSkillGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSkillGroupResponse({}));
  }

  /**
   * Invoke DeleteSkillGroup to delete the skill group associated with the specified skill group ID under the specified instance.
   * 
   * @param request - DeleteSkillGroupRequest
   * @returns DeleteSkillGroupResponse
   */
  async deleteSkillGroup(request: $_model.DeleteSkillGroupRequest): Promise<$_model.DeleteSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSkillGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a specified ticket.
   * 
   * @param request - DeleteTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTicketResponse
   */
  async deleteTicketWithOptions(request: $_model.DeleteTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ticketId)) {
      query["TicketId"] = request.ticketId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTicket",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTicketResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTicketResponse({}));
  }

  /**
   * Deletes a specified ticket.
   * 
   * @param request - DeleteTicketRequest
   * @returns DeleteTicketResponse
   */
  async deleteTicket(request: $_model.DeleteTicketRequest): Promise<$_model.DeleteTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTicketWithOptions(request, runtime);
  }

  /**
   * Deletes a specified ticket template.
   * 
   * @param request - DeleteTicketTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTicketTemplateResponse
   */
  async deleteTicketTemplateWithOptions(request: $_model.DeleteTicketTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTicketTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTicketTemplate",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTicketTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTicketTemplateResponse({}));
  }

  /**
   * Deletes a specified ticket template.
   * 
   * @param request - DeleteTicketTemplateRequest
   * @returns DeleteTicketTemplateResponse
   */
  async deleteTicketTemplate(request: $_model.DeleteTicketTemplateRequest): Promise<$_model.DeleteTicketTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTicketTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - DisableSchemaPropertyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableSchemaPropertyResponse
   */
  async disableSchemaPropertyWithOptions(request: $_model.DisableSchemaPropertyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableSchemaPropertyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.propertyName)) {
      body["PropertyName"] = request.propertyName;
    }

    if (!$dara.isNull(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.schemaId)) {
      body["SchemaId"] = request.schemaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableSchemaProperty",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableSchemaPropertyResponse>(await this.callApi(params, req, runtime), new $_model.DisableSchemaPropertyResponse({}));
  }

  /**
   * @param request - DisableSchemaPropertyRequest
   * @returns DisableSchemaPropertyResponse
   */
  async disableSchemaProperty(request: $_model.DisableSchemaPropertyRequest): Promise<$_model.DisableSchemaPropertyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableSchemaPropertyWithOptions(request, runtime);
  }

  /**
   * Use the DisableTicketTemplate operation to disable a ticket template. A disabled template cannot be selected when you create a new ticket.
   * 
   * @param request - DisableTicketTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableTicketTemplateResponse
   */
  async disableTicketTemplateWithOptions(request: $_model.DisableTicketTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableTicketTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableTicketTemplate",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableTicketTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DisableTicketTemplateResponse({}));
  }

  /**
   * Use the DisableTicketTemplate operation to disable a ticket template. A disabled template cannot be selected when you create a new ticket.
   * 
   * @param request - DisableTicketTemplateRequest
   * @returns DisableTicketTemplateResponse
   */
  async disableTicketTemplate(request: $_model.DisableTicketTemplateRequest): Promise<$_model.DisableTicketTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableTicketTemplateWithOptions(request, runtime);
  }

  /**
   * Revoke contact flow editing and discard the associated draft.
   * 
   * @param request - DiscardEditingContactFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DiscardEditingContactFlowResponse
   */
  async discardEditingContactFlowWithOptions(request: $_model.DiscardEditingContactFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DiscardEditingContactFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactFlowId)) {
      query["ContactFlowId"] = request.contactFlowId;
    }

    if (!$dara.isNull(request.draftId)) {
      query["DraftId"] = request.draftId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DiscardEditingContactFlow",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DiscardEditingContactFlowResponse>(await this.callApi(params, req, runtime), new $_model.DiscardEditingContactFlowResponse({}));
  }

  /**
   * Revoke contact flow editing and discard the associated draft.
   * 
   * @param request - DiscardEditingContactFlowRequest
   * @returns DiscardEditingContactFlowResponse
   */
  async discardEditingContactFlow(request: $_model.DiscardEditingContactFlowRequest): Promise<$_model.DiscardEditingContactFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.discardEditingContactFlowWithOptions(request, runtime);
  }

  /**
   * @param request - EnableSchemaPropertyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableSchemaPropertyResponse
   */
  async enableSchemaPropertyWithOptions(request: $_model.EnableSchemaPropertyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableSchemaPropertyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.propertyName)) {
      body["PropertyName"] = request.propertyName;
    }

    if (!$dara.isNull(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.schemaId)) {
      body["SchemaId"] = request.schemaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableSchemaProperty",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableSchemaPropertyResponse>(await this.callApi(params, req, runtime), new $_model.EnableSchemaPropertyResponse({}));
  }

  /**
   * @param request - EnableSchemaPropertyRequest
   * @returns EnableSchemaPropertyResponse
   */
  async enableSchemaProperty(request: $_model.EnableSchemaPropertyRequest): Promise<$_model.EnableSchemaPropertyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableSchemaPropertyWithOptions(request, runtime);
  }

  /**
   * The EnableTicketTemplate operation publishes a ticket template. Published ticket templates can be used to create tickets.
   * 
   * @param request - EnableTicketTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableTicketTemplateResponse
   */
  async enableTicketTemplateWithOptions(request: $_model.EnableTicketTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableTicketTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableTicketTemplate",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableTicketTemplateResponse>(await this.callApi(params, req, runtime), new $_model.EnableTicketTemplateResponse({}));
  }

  /**
   * The EnableTicketTemplate operation publishes a ticket template. Published ticket templates can be used to create tickets.
   * 
   * @param request - EnableTicketTemplateRequest
   * @returns EnableTicketTemplateResponse
   */
  async enableTicketTemplate(request: $_model.EnableTicketTemplateRequest): Promise<$_model.EnableTicketTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableTicketTemplateWithOptions(request, runtime);
  }

  /**
   * You can invoke EndConference to make the specified agent exit the call associated with the specified call ID under the specified instance. The call must be in a conference state.
   * 
   * @param request - EndConferenceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EndConferenceResponse
   */
  async endConferenceWithOptions(request: $_model.EndConferenceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EndConferenceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EndConference",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EndConferenceResponse>(await this.callApi(params, req, runtime), new $_model.EndConferenceResponse({}));
  }

  /**
   * You can invoke EndConference to make the specified agent exit the call associated with the specified call ID under the specified instance. The call must be in a conference state.
   * 
   * @param request - EndConferenceRequest
   * @returns EndConferenceResponse
   */
  async endConference(request: $_model.EndConferenceRequest): Promise<$_model.EndConferenceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.endConferenceWithOptions(request, runtime);
  }

  /**
   * @param request - ExportContactFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportContactFlowResponse
   */
  async exportContactFlowWithOptions(request: $_model.ExportContactFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportContactFlowResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.flowId)) {
      body["FlowId"] = request.flowId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportContactFlow",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportContactFlowResponse>(await this.callApi(params, req, runtime), new $_model.ExportContactFlowResponse({}));
  }

  /**
   * @param request - ExportContactFlowRequest
   * @returns ExportContactFlowResponse
   */
  async exportContactFlow(request: $_model.ExportContactFlowRequest): Promise<$_model.ExportContactFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportContactFlowWithOptions(request, runtime);
  }

  /**
   * You can invoke ExportCustomCallTagging to export all inbound number tags under a specified instance.
   * 
   * @deprecated OpenAPI ExportCustomCallTagging is deprecated, please use CCC::2020-07-01::ExportCustomCallTaggings instead.
   * 
   * @param request - ExportCustomCallTaggingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportCustomCallTaggingResponse
   */
  async exportCustomCallTaggingWithOptions(request: $_model.ExportCustomCallTaggingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportCustomCallTaggingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportCustomCallTagging",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportCustomCallTaggingResponse>(await this.callApi(params, req, runtime), new $_model.ExportCustomCallTaggingResponse({}));
  }

  /**
   * You can invoke ExportCustomCallTagging to export all inbound number tags under a specified instance.
   * 
   * @deprecated OpenAPI ExportCustomCallTagging is deprecated, please use CCC::2020-07-01::ExportCustomCallTaggings instead.
   * 
   * @param request - ExportCustomCallTaggingRequest
   * @returns ExportCustomCallTaggingResponse
   */
  // Deprecated
  async exportCustomCallTagging(request: $_model.ExportCustomCallTaggingRequest): Promise<$_model.ExportCustomCallTaggingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportCustomCallTaggingWithOptions(request, runtime);
  }

  /**
   * The ExportDoNotCallNumbers operation exports a filtered list of do-not-call numbers from a specified instance.
   * 
   * @param request - ExportDoNotCallNumbersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportDoNotCallNumbersResponse
   */
  async exportDoNotCallNumbersWithOptions(request: $_model.ExportDoNotCallNumbersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportDoNotCallNumbersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.searchPattern)) {
      query["SearchPattern"] = request.searchPattern;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportDoNotCallNumbers",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportDoNotCallNumbersResponse>(await this.callApi(params, req, runtime), new $_model.ExportDoNotCallNumbersResponse({}));
  }

  /**
   * The ExportDoNotCallNumbers operation exports a filtered list of do-not-call numbers from a specified instance.
   * 
   * @param request - ExportDoNotCallNumbersRequest
   * @returns ExportDoNotCallNumbersResponse
   */
  async exportDoNotCallNumbers(request: $_model.ExportDoNotCallNumbersRequest): Promise<$_model.ExportDoNotCallNumbersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportDoNotCallNumbersWithOptions(request, runtime);
  }

  /**
   * Use the FinishTicketTask operation to process tickets.
   * 
   * @param request - FinishTicketTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FinishTicketTaskResponse
   */
  async finishTicketTaskWithOptions(request: $_model.FinishTicketTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FinishTicketTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.ticketId)) {
      query["TicketId"] = request.ticketId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FinishTicketTask",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FinishTicketTaskResponse>(await this.callApi(params, req, runtime), new $_model.FinishTicketTaskResponse({}));
  }

  /**
   * Use the FinishTicketTask operation to process tickets.
   * 
   * @param request - FinishTicketTaskRequest
   * @returns FinishTicketTaskResponse
   */
  async finishTicketTask(request: $_model.FinishTicketTaskRequest): Promise<$_model.FinishTicketTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.finishTicketTaskWithOptions(request, runtime);
  }

  /**
   * 获取指定Chat渠道配置
   * 
   * @param request - GetAccessChannelOfStagingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccessChannelOfStagingResponse
   */
  async getAccessChannelOfStagingWithOptions(request: $_model.GetAccessChannelOfStagingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAccessChannelOfStagingResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAccessChannelOfStaging",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAccessChannelOfStagingResponse>(await this.callApi(params, req, runtime), new $_model.GetAccessChannelOfStagingResponse({}));
  }

  /**
   * 获取指定Chat渠道配置
   * 
   * @param request - GetAccessChannelOfStagingRequest
   * @returns GetAccessChannelOfStagingResponse
   */
  async getAccessChannelOfStaging(request: $_model.GetAccessChannelOfStagingRequest): Promise<$_model.GetAccessChannelOfStagingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccessChannelOfStagingWithOptions(request, runtime);
  }

  /**
   * Invoke GetAudioFile to obtain the audio file information corresponding to a specified audio resource ID under a specified instance.
   * 
   * @param request - GetAudioFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAudioFileResponse
   */
  async getAudioFileWithOptions(request: $_model.GetAudioFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAudioFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.audioResourceId)) {
      query["AudioResourceId"] = request.audioResourceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAudioFile",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAudioFileResponse>(await this.callApi(params, req, runtime), new $_model.GetAudioFileResponse({}));
  }

  /**
   * Invoke GetAudioFile to obtain the audio file information corresponding to a specified audio resource ID under a specified instance.
   * 
   * @param request - GetAudioFileRequest
   * @returns GetAudioFileResponse
   */
  async getAudioFile(request: $_model.GetAudioFileRequest): Promise<$_model.GetAudioFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAudioFileWithOptions(request, runtime);
  }

  /**
   * Invoke GetAudioFileDownloadUrl to obtain the OSS download link for a specified audio resource under a specified instance.
   * 
   * @param request - GetAudioFileDownloadUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAudioFileDownloadUrlResponse
   */
  async getAudioFileDownloadUrlWithOptions(request: $_model.GetAudioFileDownloadUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAudioFileDownloadUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.audioResourceId)) {
      query["AudioResourceId"] = request.audioResourceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAudioFileDownloadUrl",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAudioFileDownloadUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetAudioFileDownloadUrlResponse({}));
  }

  /**
   * Invoke GetAudioFileDownloadUrl to obtain the OSS download link for a specified audio resource under a specified instance.
   * 
   * @param request - GetAudioFileDownloadUrlRequest
   * @returns GetAudioFileDownloadUrlResponse
   */
  async getAudioFileDownloadUrl(request: $_model.GetAudioFileDownloadUrlRequest): Promise<$_model.GetAudioFileDownloadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAudioFileDownloadUrlWithOptions(request, runtime);
  }

  /**
   * Invoke the GetAudioFileUploadParameters API to obtain audio file upload parameters. Before creating an audio file, you must first call this API to retrieve the upload parameters and then call CreateAudioFile to create the audio file. This API is typically invoked by the default public cloud CRM system provided by Cloud Contact Center. It is not recommended for integration customers to call this API directly, because file upload must be performed through a Page operation first; only after the upload is complete can the GetAudioFileUploadParameters API be called.
   * 
   * @param request - GetAudioFileUploadParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAudioFileUploadParametersResponse
   */
  async getAudioFileUploadParametersWithOptions(request: $_model.GetAudioFileUploadParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAudioFileUploadParametersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.audioFileName)) {
      query["AudioFileName"] = request.audioFileName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAudioFileUploadParameters",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAudioFileUploadParametersResponse>(await this.callApi(params, req, runtime), new $_model.GetAudioFileUploadParametersResponse({}));
  }

  /**
   * Invoke the GetAudioFileUploadParameters API to obtain audio file upload parameters. Before creating an audio file, you must first call this API to retrieve the upload parameters and then call CreateAudioFile to create the audio file. This API is typically invoked by the default public cloud CRM system provided by Cloud Contact Center. It is not recommended for integration customers to call this API directly, because file upload must be performed through a Page operation first; only after the upload is complete can the GetAudioFileUploadParameters API be called.
   * 
   * @param request - GetAudioFileUploadParametersRequest
   * @returns GetAudioFileUploadParametersResponse
   */
  async getAudioFileUploadParameters(request: $_model.GetAudioFileUploadParametersRequest): Promise<$_model.GetAudioFileUploadParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAudioFileUploadParametersWithOptions(request, runtime);
  }

  /**
   * You can invoke the GetCallDetailRecord operation to retrieve call details for a specific call ID within a specific instance.
   * 
   * @param request - GetCallDetailRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCallDetailRecordResponse
   */
  async getCallDetailRecordWithOptions(request: $_model.GetCallDetailRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCallDetailRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCallDetailRecord",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCallDetailRecordResponse>(await this.callApi(params, req, runtime), new $_model.GetCallDetailRecordResponse({}));
  }

  /**
   * You can invoke the GetCallDetailRecord operation to retrieve call details for a specific call ID within a specific instance.
   * 
   * @param request - GetCallDetailRecordRequest
   * @returns GetCallDetailRecordResponse
   */
  async getCallDetailRecord(request: $_model.GetCallDetailRecordRequest): Promise<$_model.GetCallDetailRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCallDetailRecordWithOptions(request, runtime);
  }

  /**
   * Gets a predictive outbound campaign by its ID from a specified instance.
   * 
   * @param request - GetCampaignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCampaignResponse
   */
  async getCampaignWithOptions(request: $_model.GetCampaignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCampaignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCampaign",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCampaignResponse>(await this.callApi(params, req, runtime), new $_model.GetCampaignResponse({}));
  }

  /**
   * Gets a predictive outbound campaign by its ID from a specified instance.
   * 
   * @param request - GetCampaignRequest
   * @returns GetCampaignResponse
   */
  async getCampaign(request: $_model.GetCampaignRequest): Promise<$_model.GetCampaignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCampaignWithOptions(request, runtime);
  }

  /**
   * Invoke GetCaseFileUploadUrl to obtain the OSS upload parameters for a predictive outbound calling list file under a specified instance. When creating a predictive outbound calling Activity by importing a file, you must first invoke this API to retrieve the file upload parameters and then invoke the CreateCampaign API.
   * 
   * @param request - GetCaseFileUploadUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCaseFileUploadUrlResponse
   */
  async getCaseFileUploadUrlWithOptions(request: $_model.GetCaseFileUploadUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCaseFileUploadUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCaseFileUploadUrl",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCaseFileUploadUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetCaseFileUploadUrlResponse({}));
  }

  /**
   * Invoke GetCaseFileUploadUrl to obtain the OSS upload parameters for a predictive outbound calling list file under a specified instance. When creating a predictive outbound calling Activity by importing a file, you must first invoke this API to retrieve the file upload parameters and then invoke the CreateCampaign API.
   * 
   * @param request - GetCaseFileUploadUrlRequest
   * @returns GetCaseFileUploadUrlResponse
   */
  async getCaseFileUploadUrl(request: $_model.GetCaseFileUploadUrlRequest): Promise<$_model.GetCaseFileUploadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCaseFileUploadUrlWithOptions(request, runtime);
  }

  /**
   * @param request - GetChatMediaUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChatMediaUrlResponse
   */
  async getChatMediaUrlWithOptions(request: $_model.GetChatMediaUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetChatMediaUrlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mediaId)) {
      body["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetChatMediaUrl",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetChatMediaUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetChatMediaUrlResponse({}));
  }

  /**
   * @param request - GetChatMediaUrlRequest
   * @returns GetChatMediaUrlResponse
   */
  async getChatMediaUrl(request: $_model.GetChatMediaUrlRequest): Promise<$_model.GetChatMediaUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getChatMediaUrlWithOptions(request, runtime);
  }

  /**
   * Use GetChatRoutingProfile to retrieve the chat routing configuration.
   * 
   * @param request - GetChatRoutingProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChatRoutingProfileResponse
   */
  async getChatRoutingProfileWithOptions(request: $_model.GetChatRoutingProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetChatRoutingProfileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetChatRoutingProfile",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetChatRoutingProfileResponse>(await this.callApi(params, req, runtime), new $_model.GetChatRoutingProfileResponse({}));
  }

  /**
   * Use GetChatRoutingProfile to retrieve the chat routing configuration.
   * 
   * @param request - GetChatRoutingProfileRequest
   * @returns GetChatRoutingProfileResponse
   */
  async getChatRoutingProfile(request: $_model.GetChatRoutingProfileRequest): Promise<$_model.GetChatRoutingProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getChatRoutingProfileWithOptions(request, runtime);
  }

  /**
   * Retrieve a specified contact flow.
   * 
   * @param request - GetContactFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetContactFlowResponse
   */
  async getContactFlowWithOptions(request: $_model.GetContactFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetContactFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactFlowId)) {
      query["ContactFlowId"] = request.contactFlowId;
    }

    if (!$dara.isNull(request.draftId)) {
      query["DraftId"] = request.draftId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetContactFlow",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetContactFlowResponse>(await this.callApi(params, req, runtime), new $_model.GetContactFlowResponse({}));
  }

  /**
   * Retrieve a specified contact flow.
   * 
   * @param request - GetContactFlowRequest
   * @returns GetContactFlowResponse
   */
  async getContactFlow(request: $_model.GetContactFlowRequest): Promise<$_model.GetContactFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getContactFlowWithOptions(request, runtime);
  }

  /**
   * Call GetConversationDetail to obtain the conversation details for the call corresponding to the specified contact ID within the specified instance. The instance and skill group must have quality inspection push enabled to obtain these details.
   * 
   * @param request - GetConversationDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConversationDetailResponse
   */
  async getConversationDetailWithOptions(request: $_model.GetConversationDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetConversationDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConversationDetail",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConversationDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetConversationDetailResponse({}));
  }

  /**
   * Call GetConversationDetail to obtain the conversation details for the call corresponding to the specified contact ID within the specified instance. The instance and skill group must have quality inspection push enabled to obtain these details.
   * 
   * @param request - GetConversationDetailRequest
   * @returns GetConversationDetailResponse
   */
  async getConversationDetail(request: $_model.GetConversationDetailRequest): Promise<$_model.GetConversationDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConversationDetailWithOptions(request, runtime);
  }

  /**
   * 获取DataChannel通道的Token信息
   * 
   * @param request - GetDataChannelCredentialsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataChannelCredentialsResponse
   */
  async getDataChannelCredentialsWithOptions(request: $_model.GetDataChannelCredentialsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataChannelCredentialsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataChannelCredentials",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataChannelCredentialsResponse>(await this.callApi(params, req, runtime), new $_model.GetDataChannelCredentialsResponse({}));
  }

  /**
   * 获取DataChannel通道的Token信息
   * 
   * @param request - GetDataChannelCredentialsRequest
   * @returns GetDataChannelCredentialsResponse
   */
  async getDataChannelCredentials(request: $_model.GetDataChannelCredentialsRequest): Promise<$_model.GetDataChannelCredentialsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataChannelCredentialsWithOptions(request, runtime);
  }

  /**
   * Invoke GetDoNotCallFileUploadParameters to obtain the upload parameters for a do-not-call file. When importing prohibited outbound call numbers through a file, you must first invoke this API to upload the do-not-call number file to the public OSS space of Cloud Contact Center, and then invoke ImportDoNotCallNumbers to execute the import.
   * 
   * @param request - GetDoNotCallFileUploadParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDoNotCallFileUploadParametersResponse
   */
  async getDoNotCallFileUploadParametersWithOptions(request: $_model.GetDoNotCallFileUploadParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDoNotCallFileUploadParametersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDoNotCallFileUploadParameters",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDoNotCallFileUploadParametersResponse>(await this.callApi(params, req, runtime), new $_model.GetDoNotCallFileUploadParametersResponse({}));
  }

  /**
   * Invoke GetDoNotCallFileUploadParameters to obtain the upload parameters for a do-not-call file. When importing prohibited outbound call numbers through a file, you must first invoke this API to upload the do-not-call number file to the public OSS space of Cloud Contact Center, and then invoke ImportDoNotCallNumbers to execute the import.
   * 
   * @param request - GetDoNotCallFileUploadParametersRequest
   * @returns GetDoNotCallFileUploadParametersResponse
   */
  async getDoNotCallFileUploadParameters(request: $_model.GetDoNotCallFileUploadParametersRequest): Promise<$_model.GetDoNotCallFileUploadParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDoNotCallFileUploadParametersWithOptions(request, runtime);
  }

  /**
   * @param request - GetDocumentUploadParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentUploadParametersResponse
   */
  async getDocumentUploadParametersWithOptions(request: $_model.GetDocumentUploadParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDocumentUploadParametersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocumentUploadParameters",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDocumentUploadParametersResponse>(await this.callApi(params, req, runtime), new $_model.GetDocumentUploadParametersResponse({}));
  }

  /**
   * @param request - GetDocumentUploadParametersRequest
   * @returns GetDocumentUploadParametersResponse
   */
  async getDocumentUploadParameters(request: $_model.GetDocumentUploadParametersRequest): Promise<$_model.GetDocumentUploadParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDocumentUploadParametersWithOptions(request, runtime);
  }

  /**
   * Retrieve early-media audio recordings for a call in a specified Cloud Contact Center instance.
   * 
   * @param request - GetEarlyMediaRecordingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEarlyMediaRecordingResponse
   */
  async getEarlyMediaRecordingWithOptions(request: $_model.GetEarlyMediaRecordingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEarlyMediaRecordingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEarlyMediaRecording",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEarlyMediaRecordingResponse>(await this.callApi(params, req, runtime), new $_model.GetEarlyMediaRecordingResponse({}));
  }

  /**
   * Retrieve early-media audio recordings for a call in a specified Cloud Contact Center instance.
   * 
   * @param request - GetEarlyMediaRecordingRequest
   * @returns GetEarlyMediaRecordingResponse
   */
  async getEarlyMediaRecording(request: $_model.GetEarlyMediaRecordingRequest): Promise<$_model.GetEarlyMediaRecordingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEarlyMediaRecordingWithOptions(request, runtime);
  }

  /**
   * Invoke GetHistoricalCallerReport to retrieve the historical inbound call report for a specified calling number under a specified instance.
   * 
   * @param request - GetHistoricalCallerReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHistoricalCallerReportResponse
   */
  async getHistoricalCallerReportWithOptions(request: $_model.GetHistoricalCallerReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHistoricalCallerReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.stopTime)) {
      query["StopTime"] = request.stopTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHistoricalCallerReport",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHistoricalCallerReportResponse>(await this.callApi(params, req, runtime), new $_model.GetHistoricalCallerReportResponse({}));
  }

  /**
   * Invoke GetHistoricalCallerReport to retrieve the historical inbound call report for a specified calling number under a specified instance.
   * 
   * @param request - GetHistoricalCallerReportRequest
   * @returns GetHistoricalCallerReportResponse
   */
  async getHistoricalCallerReport(request: $_model.GetHistoricalCallerReportRequest): Promise<$_model.GetHistoricalCallerReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHistoricalCallerReportWithOptions(request, runtime);
  }

  /**
   * You can invoke the GetHistoricalCampaignReport API to retrieve the historical data report of a predictive outbound calling activity corresponding to a specified ID under a specified instance.
   * 
   * @param request - GetHistoricalCampaignReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHistoricalCampaignReportResponse
   */
  async getHistoricalCampaignReportWithOptions(request: $_model.GetHistoricalCampaignReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHistoricalCampaignReportResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHistoricalCampaignReport",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHistoricalCampaignReportResponse>(await this.callApi(params, req, runtime), new $_model.GetHistoricalCampaignReportResponse({}));
  }

  /**
   * You can invoke the GetHistoricalCampaignReport API to retrieve the historical data report of a predictive outbound calling activity corresponding to a specified ID under a specified instance.
   * 
   * @param request - GetHistoricalCampaignReportRequest
   * @returns GetHistoricalCampaignReportResponse
   */
  async getHistoricalCampaignReport(request: $_model.GetHistoricalCampaignReportRequest): Promise<$_model.GetHistoricalCampaignReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHistoricalCampaignReportWithOptions(request, runtime);
  }

  /**
   * You can invoke GetHistoricalInstanceReport to obtain the historical data report for a specified instance.
   * 
   * @param request - GetHistoricalInstanceReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHistoricalInstanceReportResponse
   */
  async getHistoricalInstanceReportWithOptions(request: $_model.GetHistoricalInstanceReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHistoricalInstanceReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHistoricalInstanceReport",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHistoricalInstanceReportResponse>(await this.callApi(params, req, runtime), new $_model.GetHistoricalInstanceReportResponse({}));
  }

  /**
   * You can invoke GetHistoricalInstanceReport to obtain the historical data report for a specified instance.
   * 
   * @param request - GetHistoricalInstanceReportRequest
   * @returns GetHistoricalInstanceReportResponse
   */
  async getHistoricalInstanceReport(request: $_model.GetHistoricalInstanceReportRequest): Promise<$_model.GetHistoricalInstanceReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHistoricalInstanceReportWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a Cloud Contact Center instance.
   * 
   * @param request - GetInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResponse
   */
  async getInstanceWithOptions(request: $_model.GetInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstance",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceResponse({}));
  }

  /**
   * Retrieves the details of a Cloud Contact Center instance.
   * 
   * @param request - GetInstanceRequest
   * @returns GetInstanceResponse
   */
  async getInstance(request: $_model.GetInstanceRequest): Promise<$_model.GetInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceWithOptions(request, runtime);
  }

  /**
   * You can call GetInstanceTrendingReport to retrieve the trend report for a specified instance.
   * 
   * @param request - GetInstanceTrendingReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceTrendingReportResponse
   */
  async getInstanceTrendingReportWithOptions(request: $_model.GetInstanceTrendingReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceTrendingReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceTrendingReport",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceTrendingReportResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceTrendingReportResponse({}));
  }

  /**
   * You can call GetInstanceTrendingReport to retrieve the trend report for a specified instance.
   * 
   * @param request - GetInstanceTrendingReportRequest
   * @returns GetInstanceTrendingReportResponse
   */
  async getInstanceTrendingReport(request: $_model.GetInstanceTrendingReportRequest): Promise<$_model.GetInstanceTrendingReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceTrendingReportWithOptions(request, runtime);
  }

  /**
   * Retrieve the IVR tracking summary.
   * 
   * @param request - GetIvrTrackingSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIvrTrackingSummaryResponse
   */
  async getIvrTrackingSummaryWithOptions(request: $_model.GetIvrTrackingSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIvrTrackingSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIvrTrackingSummary",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIvrTrackingSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetIvrTrackingSummaryResponse({}));
  }

  /**
   * Retrieve the IVR tracking summary.
   * 
   * @param request - GetIvrTrackingSummaryRequest
   * @returns GetIvrTrackingSummaryResponse
   */
  async getIvrTrackingSummary(request: $_model.GetIvrTrackingSummaryRequest): Promise<$_model.GetIvrTrackingSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIvrTrackingSummaryWithOptions(request, runtime);
  }

  /**
   * Invoke GetLoginDetails to obtain the agent\\"s logon information, including basic agent information, server address information, authentication information, and more. This API can only be invoked by the agent themselves; administrators are not permitted to invoke it on behalf of others.
   * 
   * @param request - GetLoginDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLoginDetailsResponse
   */
  async getLoginDetailsWithOptions(request: $_model.GetLoginDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLoginDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.chatDeviceId)) {
      query["ChatDeviceId"] = request.chatDeviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLoginDetails",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLoginDetailsResponse>(await this.callApi(params, req, runtime), new $_model.GetLoginDetailsResponse({}));
  }

  /**
   * Invoke GetLoginDetails to obtain the agent\\"s logon information, including basic agent information, server address information, authentication information, and more. This API can only be invoked by the agent themselves; administrators are not permitted to invoke it on behalf of others.
   * 
   * @param request - GetLoginDetailsRequest
   * @returns GetLoginDetailsResponse
   */
  async getLoginDetails(request: $_model.GetLoginDetailsRequest): Promise<$_model.GetLoginDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLoginDetailsWithOptions(request, runtime);
  }

  /**
   * You can invoke GetMonoRecording to obtain the single-track recording of a specified call under a specified instance. A single-track recording contains only one audio track, with both the agent-side and customer-side recordings merged into the same track in WAV format.
   * 
   * @param request - GetMonoRecordingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMonoRecordingResponse
   */
  async getMonoRecordingWithOptions(request: $_model.GetMonoRecordingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMonoRecordingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.expireSeconds)) {
      query["ExpireSeconds"] = request.expireSeconds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMonoRecording",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMonoRecordingResponse>(await this.callApi(params, req, runtime), new $_model.GetMonoRecordingResponse({}));
  }

  /**
   * You can invoke GetMonoRecording to obtain the single-track recording of a specified call under a specified instance. A single-track recording contains only one audio track, with both the agent-side and customer-side recordings merged into the same track in WAV format.
   * 
   * @param request - GetMonoRecordingRequest
   * @returns GetMonoRecordingResponse
   */
  async getMonoRecording(request: $_model.GetMonoRecordingRequest): Promise<$_model.GetMonoRecordingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMonoRecordingWithOptions(request, runtime);
  }

  /**
   * You can invoke GetMultiChannelRecording to obtain the multi-track recording of a specified call under a specified instance. In the multi-track recording, the agent\\"s and customer\\"s audio are distributed across different sound channels. During each playback, only one sound channel can be played, meaning you can hear only one party\\"s voice. The format is MKV.
   * 
   * @param request - GetMultiChannelRecordingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMultiChannelRecordingResponse
   */
  async getMultiChannelRecordingWithOptions(request: $_model.GetMultiChannelRecordingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMultiChannelRecordingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMultiChannelRecording",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMultiChannelRecordingResponse>(await this.callApi(params, req, runtime), new $_model.GetMultiChannelRecordingResponse({}));
  }

  /**
   * You can invoke GetMultiChannelRecording to obtain the multi-track recording of a specified call under a specified instance. In the multi-track recording, the agent\\"s and customer\\"s audio are distributed across different sound channels. During each playback, only one sound channel can be played, meaning you can hear only one party\\"s voice. The format is MKV.
   * 
   * @param request - GetMultiChannelRecordingRequest
   * @returns GetMultiChannelRecordingResponse
   */
  async getMultiChannelRecording(request: $_model.GetMultiChannelRecordingRequest): Promise<$_model.GetMultiChannelRecordingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMultiChannelRecordingWithOptions(request, runtime);
  }

  /**
   * Invoke the GetNumberLocation API to obtain number location information.
   * 
   * @param request - GetNumberLocationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNumberLocationResponse
   */
  async getNumberLocationWithOptions(request: $_model.GetNumberLocationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNumberLocationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.number)) {
      query["Number"] = request.number;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNumberLocation",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNumberLocationResponse>(await this.callApi(params, req, runtime), new $_model.GetNumberLocationResponse({}));
  }

  /**
   * Invoke the GetNumberLocation API to obtain number location information.
   * 
   * @param request - GetNumberLocationRequest
   * @returns GetNumberLocationResponse
   */
  async getNumberLocation(request: $_model.GetNumberLocationRequest): Promise<$_model.GetNumberLocationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNumberLocationWithOptions(request, runtime);
  }

  /**
   * You can invoke GetRealtimeCampaignStats to retrieve real-time agent status data for a predictive outbound calling Activity with a specified ID under a specified instance.
   * 
   * @param request - GetRealtimeCampaignStatsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRealtimeCampaignStatsResponse
   */
  async getRealtimeCampaignStatsWithOptions(request: $_model.GetRealtimeCampaignStatsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRealtimeCampaignStatsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRealtimeCampaignStats",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRealtimeCampaignStatsResponse>(await this.callApi(params, req, runtime), new $_model.GetRealtimeCampaignStatsResponse({}));
  }

  /**
   * You can invoke GetRealtimeCampaignStats to retrieve real-time agent status data for a predictive outbound calling Activity with a specified ID under a specified instance.
   * 
   * @param request - GetRealtimeCampaignStatsRequest
   * @returns GetRealtimeCampaignStatsResponse
   */
  async getRealtimeCampaignStats(request: $_model.GetRealtimeCampaignStatsRequest): Promise<$_model.GetRealtimeCampaignStatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRealtimeCampaignStatsWithOptions(request, runtime);
  }

  /**
   * You can invoke GetRealtimeInstanceStates to obtain the real-time status of a specified instance.
   * 
   * @param request - GetRealtimeInstanceStatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRealtimeInstanceStatesResponse
   */
  async getRealtimeInstanceStatesWithOptions(request: $_model.GetRealtimeInstanceStatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRealtimeInstanceStatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRealtimeInstanceStates",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRealtimeInstanceStatesResponse>(await this.callApi(params, req, runtime), new $_model.GetRealtimeInstanceStatesResponse({}));
  }

  /**
   * You can invoke GetRealtimeInstanceStates to obtain the real-time status of a specified instance.
   * 
   * @param request - GetRealtimeInstanceStatesRequest
   * @returns GetRealtimeInstanceStatesResponse
   */
  async getRealtimeInstanceStates(request: $_model.GetRealtimeInstanceStatesRequest): Promise<$_model.GetRealtimeInstanceStatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRealtimeInstanceStatesWithOptions(request, runtime);
  }

  /**
   * @param request - GetSchemaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSchemaResponse
   */
  async getSchemaWithOptions(request: $_model.GetSchemaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSchemaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.schemaId)) {
      body["SchemaId"] = request.schemaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSchema",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSchemaResponse>(await this.callApi(params, req, runtime), new $_model.GetSchemaResponse({}));
  }

  /**
   * @param request - GetSchemaRequest
   * @returns GetSchemaResponse
   */
  async getSchema(request: $_model.GetSchemaRequest): Promise<$_model.GetSchemaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSchemaWithOptions(request, runtime);
  }

  /**
   * You can invoke GetSkillGroup to obtain information about the skill group corresponding to a specified skill group ID under a specified instance.
   * 
   * @param request - GetSkillGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSkillGroupResponse
   */
  async getSkillGroupWithOptions(request: $_model.GetSkillGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSkillGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSkillGroup",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSkillGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetSkillGroupResponse({}));
  }

  /**
   * You can invoke GetSkillGroup to obtain information about the skill group corresponding to a specified skill group ID under a specified instance.
   * 
   * @param request - GetSkillGroupRequest
   * @returns GetSkillGroupResponse
   */
  async getSkillGroup(request: $_model.GetSkillGroupRequest): Promise<$_model.GetSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSkillGroupWithOptions(request, runtime);
  }

  /**
   * Retrieves the content of a session summary template.
   * 
   * @param request - GetSummaryTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSummaryTemplateResponse
   */
  async getSummaryTemplateWithOptions(request: $_model.GetSummaryTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSummaryTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSummaryTemplate",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSummaryTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetSummaryTemplateResponse({}));
  }

  /**
   * Retrieves the content of a session summary template.
   * 
   * @param request - GetSummaryTemplateRequest
   * @returns GetSummaryTemplateResponse
   */
  async getSummaryTemplate(request: $_model.GetSummaryTemplateRequest): Promise<$_model.GetSummaryTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSummaryTemplateWithOptions(request, runtime);
  }

  /**
   * Retrieves information about a specific ticket.
   * 
   * @param request - GetTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTicketResponse
   */
  async getTicketWithOptions(request: $_model.GetTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ticketId)) {
      query["TicketId"] = request.ticketId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTicket",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTicketResponse>(await this.callApi(params, req, runtime), new $_model.GetTicketResponse({}));
  }

  /**
   * Retrieves information about a specific ticket.
   * 
   * @param request - GetTicketRequest
   * @returns GetTicketResponse
   */
  async getTicket(request: $_model.GetTicketRequest): Promise<$_model.GetTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTicketWithOptions(request, runtime);
  }

  /**
   * You can call GetTicketSummaryReport to retrieve a summary of ticket statuses.
   * 
   * @param request - GetTicketSummaryReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTicketSummaryReportResponse
   */
  async getTicketSummaryReportWithOptions(request: $_model.GetTicketSummaryReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTicketSummaryReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.assignee)) {
      query["Assignee"] = request.assignee;
    }

    if (!$dara.isNull(request.assigneeType)) {
      query["AssigneeType"] = request.assigneeType;
    }

    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.creator)) {
      query["Creator"] = request.creator;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.participant)) {
      query["Participant"] = request.participant;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTicketSummaryReport",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTicketSummaryReportResponse>(await this.callApi(params, req, runtime), new $_model.GetTicketSummaryReportResponse({}));
  }

  /**
   * You can call GetTicketSummaryReport to retrieve a summary of ticket statuses.
   * 
   * @param request - GetTicketSummaryReportRequest
   * @returns GetTicketSummaryReportResponse
   */
  async getTicketSummaryReport(request: $_model.GetTicketSummaryReportRequest): Promise<$_model.GetTicketSummaryReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTicketSummaryReportWithOptions(request, runtime);
  }

  /**
   * Call GetTicketTemplate to retrieve ticket template definitions.
   * 
   * @param request - GetTicketTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTicketTemplateResponse
   */
  async getTicketTemplateWithOptions(request: $_model.GetTicketTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTicketTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTicketTemplate",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTicketTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetTicketTemplateResponse({}));
  }

  /**
   * Call GetTicketTemplate to retrieve ticket template definitions.
   * 
   * @param request - GetTicketTemplateRequest
   * @returns GetTicketTemplateResponse
   */
  async getTicketTemplate(request: $_model.GetTicketTemplateRequest): Promise<$_model.GetTicketTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTicketTemplateWithOptions(request, runtime);
  }

  /**
   * Call GetTurnCredentials to get the connection credentials for a Cloud Contact Center Point of Presence (PoP). These credentials include a username and password for authentication. Connecting to Cloud Contact Center through a PoP improves network quality and stability.
   * 
   * @param request - GetTurnCredentialsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTurnCredentialsResponse
   */
  async getTurnCredentialsWithOptions(request: $_model.GetTurnCredentialsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTurnCredentialsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTurnCredentials",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTurnCredentialsResponse>(await this.callApi(params, req, runtime), new $_model.GetTurnCredentialsResponse({}));
  }

  /**
   * Call GetTurnCredentials to get the connection credentials for a Cloud Contact Center Point of Presence (PoP). These credentials include a username and password for authentication. Connecting to Cloud Contact Center through a PoP improves network quality and stability.
   * 
   * @param request - GetTurnCredentialsRequest
   * @returns GetTurnCredentialsResponse
   */
  async getTurnCredentials(request: $_model.GetTurnCredentialsRequest): Promise<$_model.GetTurnCredentialsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTurnCredentialsWithOptions(request, runtime);
  }

  /**
   * Call GetTurnServerList to get a list of front-end access points for Alibaba Cloud Contact Center. Connecting through these access points improves network quality and stability.
   * 
   * @param request - GetTurnServerListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTurnServerListResponse
   */
  async getTurnServerListWithOptions(request: $_model.GetTurnServerListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTurnServerListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTurnServerList",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTurnServerListResponse>(await this.callApi(params, req, runtime), new $_model.GetTurnServerListResponse({}));
  }

  /**
   * Call GetTurnServerList to get a list of front-end access points for Alibaba Cloud Contact Center. Connecting through these access points improves network quality and stability.
   * 
   * @param request - GetTurnServerListRequest
   * @returns GetTurnServerListResponse
   */
  async getTurnServerList(request: $_model.GetTurnServerListRequest): Promise<$_model.GetTurnServerListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTurnServerListWithOptions(request, runtime);
  }

  /**
   * Obtain the parameters related to offline quality inspection audio files. Normally, if the Customer has configured the quality inspection feature in Cloud Contact Center, the audio files requiring offline quality inspection and their corresponding parameters are automatically passed to Intelligent Quality Inspection. You only need to invoke this API to obtain the parameters for pushing quality inspection recordings when the Customer has not configured the quality inspection feature in Cloud Contact Center and wishes to manually push Cloud Contact Center call recordings to the quality inspection system.
   * 
   * @param request - GetUploadAudioDataParamsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUploadAudioDataParamsResponse
   */
  async getUploadAudioDataParamsWithOptions(request: $_model.GetUploadAudioDataParamsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUploadAudioDataParamsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUploadAudioDataParams",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUploadAudioDataParamsResponse>(await this.callApi(params, req, runtime), new $_model.GetUploadAudioDataParamsResponse({}));
  }

  /**
   * Obtain the parameters related to offline quality inspection audio files. Normally, if the Customer has configured the quality inspection feature in Cloud Contact Center, the audio files requiring offline quality inspection and their corresponding parameters are automatically passed to Intelligent Quality Inspection. You only need to invoke this API to obtain the parameters for pushing quality inspection recordings when the Customer has not configured the quality inspection feature in Cloud Contact Center and wishes to manually push Cloud Contact Center call recordings to the quality inspection system.
   * 
   * @param request - GetUploadAudioDataParamsRequest
   * @returns GetUploadAudioDataParamsResponse
   */
  async getUploadAudioDataParams(request: $_model.GetUploadAudioDataParamsRequest): Promise<$_model.GetUploadAudioDataParamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUploadAudioDataParamsWithOptions(request, runtime);
  }

  /**
   * You can invoke GetUser to obtain the agent information corresponding to a specified agent ID under a specified instance.
   * 
   * @param request - GetUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserResponse
   */
  async getUserWithOptions(request: $_model.GetUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.extension)) {
      query["Extension"] = request.extension;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUser",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserResponse>(await this.callApi(params, req, runtime), new $_model.GetUserResponse({}));
  }

  /**
   * You can invoke GetUser to obtain the agent information corresponding to a specified agent ID under a specified instance.
   * 
   * @param request - GetUserRequest
   * @returns GetUserResponse
   */
  async getUser(request: $_model.GetUserRequest): Promise<$_model.GetUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserWithOptions(request, runtime);
  }

  /**
   * 获取视频
   * 
   * @param request - GetVideoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVideoResponse
   */
  async getVideoWithOptions(request: $_model.GetVideoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVideoResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVideo",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVideoResponse>(await this.callApi(params, req, runtime), new $_model.GetVideoResponse({}));
  }

  /**
   * 获取视频
   * 
   * @param request - GetVideoRequest
   * @returns GetVideoResponse
   */
  async getVideo(request: $_model.GetVideoRequest): Promise<$_model.GetVideoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVideoWithOptions(request, runtime);
  }

  /**
   * Call GetVisitorLoginDetails to retrieve login, server address, and authentication information for network service visitors.
   * 
   * @param request - GetVisitorLoginDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVisitorLoginDetailsResponse
   */
  async getVisitorLoginDetailsWithOptions(request: $_model.GetVisitorLoginDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVisitorLoginDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.chatDeviceId)) {
      query["ChatDeviceId"] = request.chatDeviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    if (!$dara.isNull(request.visitorId)) {
      query["VisitorId"] = request.visitorId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVisitorLoginDetails",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVisitorLoginDetailsResponse>(await this.callApi(params, req, runtime), new $_model.GetVisitorLoginDetailsResponse({}));
  }

  /**
   * Call GetVisitorLoginDetails to retrieve login, server address, and authentication information for network service visitors.
   * 
   * @param request - GetVisitorLoginDetailsRequest
   * @returns GetVisitorLoginDetailsResponse
   */
  async getVisitorLoginDetails(request: $_model.GetVisitorLoginDetailsRequest): Promise<$_model.GetVisitorLoginDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVisitorLoginDetailsWithOptions(request, runtime);
  }

  /**
   * You can invoke GetVoicemailRecording to obtain the voicemail recording of a specified call under a specified instance. The recording is single-track and in WAV format.
   * 
   * @param request - GetVoicemailRecordingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVoicemailRecordingResponse
   */
  async getVoicemailRecordingWithOptions(request: $_model.GetVoicemailRecordingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVoicemailRecordingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVoicemailRecording",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVoicemailRecordingResponse>(await this.callApi(params, req, runtime), new $_model.GetVoicemailRecordingResponse({}));
  }

  /**
   * You can invoke GetVoicemailRecording to obtain the voicemail recording of a specified call under a specified instance. The recording is single-track and in WAV format.
   * 
   * @param request - GetVoicemailRecordingRequest
   * @returns GetVoicemailRecordingResponse
   */
  async getVoicemailRecording(request: $_model.GetVoicemailRecordingRequest): Promise<$_model.GetVoicemailRecordingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVoicemailRecordingWithOptions(request, runtime);
  }

  /**
   * You can invoke HoldCall to hold the call associated with a specified call ID under a specified instance. After the call is held, it will be temporarily suspended, and the held party will hear hold music.
   * 
   * @param request - HoldCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HoldCallResponse
   */
  async holdCallWithOptions(request: $_model.HoldCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.HoldCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.music)) {
      query["Music"] = request.music;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "HoldCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.HoldCallResponse>(await this.callApi(params, req, runtime), new $_model.HoldCallResponse({}));
  }

  /**
   * You can invoke HoldCall to hold the call associated with a specified call ID under a specified instance. After the call is held, it will be temporarily suspended, and the held party will hear hold music.
   * 
   * @param request - HoldCallRequest
   * @returns HoldCallResponse
   */
  async holdCall(request: $_model.HoldCallRequest): Promise<$_model.HoldCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.holdCallWithOptions(request, runtime);
  }

  /**
   * Imports one or more admins to a specified instance. The caller must have the `AliyunCCCFullAccess` permission, which you can grant in the RAM console.
   * 
   * @param request - ImportAdminsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportAdminsResponse
   */
  async importAdminsWithOptions(request: $_model.ImportAdminsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportAdminsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ramIdList)) {
      query["RamIdList"] = request.ramIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportAdmins",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportAdminsResponse>(await this.callApi(params, req, runtime), new $_model.ImportAdminsResponse({}));
  }

  /**
   * Imports one or more admins to a specified instance. The caller must have the `AliyunCCCFullAccess` permission, which you can grant in the RAM console.
   * 
   * @param request - ImportAdminsRequest
   * @returns ImportAdminsResponse
   */
  async importAdmins(request: $_model.ImportAdminsRequest): Promise<$_model.ImportAdminsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importAdminsWithOptions(request, runtime);
  }

  /**
   * @param request - ImportContactFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportContactFlowResponse
   */
  async importContactFlowWithOptions(request: $_model.ImportContactFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportContactFlowResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.flowPackageData)) {
      body["FlowPackageData"] = request.flowPackageData;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportContactFlow",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportContactFlowResponse>(await this.callApi(params, req, runtime), new $_model.ImportContactFlowResponse({}));
  }

  /**
   * @param request - ImportContactFlowRequest
   * @returns ImportContactFlowResponse
   */
  async importContactFlow(request: $_model.ImportContactFlowRequest): Promise<$_model.ImportContactFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importContactFlowWithOptions(request, runtime);
  }

  /**
   * Imports your organization’s telephone line numbers. Before performing the first import, contact Cloud Contact Center technical support to add the numbers to the allowlist.
   * 
   * @param request - ImportCorpNumbersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportCorpNumbersResponse
   */
  async importCorpNumbersWithOptions(request: $_model.ImportCorpNumbersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportCorpNumbersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.city)) {
      query["City"] = request.city;
    }

    if (!$dara.isNull(request.corpName)) {
      query["CorpName"] = request.corpName;
    }

    if (!$dara.isNull(request.numberList)) {
      query["NumberList"] = request.numberList;
    }

    if (!$dara.isNull(request.provider)) {
      query["Provider"] = request.provider;
    }

    if (!$dara.isNull(request.province)) {
      query["Province"] = request.province;
    }

    if (!$dara.isNull(request.tagList)) {
      query["TagList"] = request.tagList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportCorpNumbers",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportCorpNumbersResponse>(await this.callApi(params, req, runtime), new $_model.ImportCorpNumbersResponse({}));
  }

  /**
   * Imports your organization’s telephone line numbers. Before performing the first import, contact Cloud Contact Center technical support to add the numbers to the allowlist.
   * 
   * @param request - ImportCorpNumbersRequest
   * @returns ImportCorpNumbersResponse
   */
  async importCorpNumbers(request: $_model.ImportCorpNumbersRequest): Promise<$_model.ImportCorpNumbersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importCorpNumbersWithOptions(request, runtime);
  }

  /**
   * You can invoke ImportCustomCallTagging to import multiple inbound number tags into a specified instance.
   * 
   * @deprecated OpenAPI ImportCustomCallTagging is deprecated, please use CCC::2020-07-01::ImportCustomCallTaggings instead.
   * 
   * @param request - ImportCustomCallTaggingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportCustomCallTaggingResponse
   */
  async importCustomCallTaggingWithOptions(request: $_model.ImportCustomCallTaggingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportCustomCallTaggingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportCustomCallTagging",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportCustomCallTaggingResponse>(await this.callApi(params, req, runtime), new $_model.ImportCustomCallTaggingResponse({}));
  }

  /**
   * You can invoke ImportCustomCallTagging to import multiple inbound number tags into a specified instance.
   * 
   * @deprecated OpenAPI ImportCustomCallTagging is deprecated, please use CCC::2020-07-01::ImportCustomCallTaggings instead.
   * 
   * @param request - ImportCustomCallTaggingRequest
   * @returns ImportCustomCallTaggingResponse
   */
  // Deprecated
  async importCustomCallTagging(request: $_model.ImportCustomCallTaggingRequest): Promise<$_model.ImportCustomCallTaggingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importCustomCallTaggingWithOptions(request, runtime);
  }

  /**
   * Imports one or more do-not-call numbers to a specified instance. You can import numbers by manual entry or file upload.
   * 
   * @param request - ImportDoNotCallNumbersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportDoNotCallNumbersResponse
   */
  async importDoNotCallNumbersWithOptions(request: $_model.ImportDoNotCallNumbersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportDoNotCallNumbersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.numberList)) {
      query["NumberList"] = request.numberList;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportDoNotCallNumbers",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportDoNotCallNumbersResponse>(await this.callApi(params, req, runtime), new $_model.ImportDoNotCallNumbersResponse({}));
  }

  /**
   * Imports one or more do-not-call numbers to a specified instance. You can import numbers by manual entry or file upload.
   * 
   * @param request - ImportDoNotCallNumbersRequest
   * @returns ImportDoNotCallNumbersResponse
   */
  async importDoNotCallNumbers(request: $_model.ImportDoNotCallNumbersRequest): Promise<$_model.ImportDoNotCallNumbersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importDoNotCallNumbersWithOptions(request, runtime);
  }

  /**
   * @param request - ImportDocumentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportDocumentsResponse
   */
  async importDocumentsWithOptions(request: $_model.ImportDocumentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportDocumentsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ossFileKey)) {
      body["OssFileKey"] = request.ossFileKey;
    }

    if (!$dara.isNull(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.schemaId)) {
      body["SchemaId"] = request.schemaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportDocuments",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportDocumentsResponse>(await this.callApi(params, req, runtime), new $_model.ImportDocumentsResponse({}));
  }

  /**
   * @param request - ImportDocumentsRequest
   * @returns ImportDocumentsResponse
   */
  async importDocuments(request: $_model.ImportDocumentsRequest): Promise<$_model.ImportDocumentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importDocumentsWithOptions(request, runtime);
  }

  /**
   * Import existing RAM users as contact center agents.
   * 
   * @param request - ImportRamUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportRamUsersResponse
   */
  async importRamUsersWithOptions(request: $_model.ImportRamUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportRamUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ramIdList)) {
      query["RamIdList"] = request.ramIdList;
    }

    if (!$dara.isNull(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    if (!$dara.isNull(request.skillLevelList)) {
      query["SkillLevelList"] = request.skillLevelList;
    }

    if (!$dara.isNull(request.workMode)) {
      query["WorkMode"] = request.workMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportRamUsers",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportRamUsersResponse>(await this.callApi(params, req, runtime), new $_model.ImportRamUsersResponse({}));
  }

  /**
   * Import existing RAM users as contact center agents.
   * 
   * @param request - ImportRamUsersRequest
   * @returns ImportRamUsersResponse
   */
  async importRamUsers(request: $_model.ImportRamUsersRequest): Promise<$_model.ImportRamUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importRamUsersWithOptions(request, runtime);
  }

  /**
   * Consultation transfer refers to transferring a call to another agent, a skill group queue, or an external number. It is also known as follow transfer or two-step transfer.
   * 
   * @param request - InitiateAttendedTransferRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitiateAttendedTransferResponse
   */
  async initiateAttendedTransferWithOptions(request: $_model.InitiateAttendedTransferRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InitiateAttendedTransferResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callPriority)) {
      query["CallPriority"] = request.callPriority;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.queuingOverflowThreshold)) {
      query["QueuingOverflowThreshold"] = request.queuingOverflowThreshold;
    }

    if (!$dara.isNull(request.queuingTimeoutSeconds)) {
      query["QueuingTimeoutSeconds"] = request.queuingTimeoutSeconds;
    }

    if (!$dara.isNull(request.routingType)) {
      query["RoutingType"] = request.routingType;
    }

    if (!$dara.isNull(request.strategyName)) {
      query["StrategyName"] = request.strategyName;
    }

    if (!$dara.isNull(request.strategyParams)) {
      query["StrategyParams"] = request.strategyParams;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.timeoutSeconds)) {
      query["TimeoutSeconds"] = request.timeoutSeconds;
    }

    if (!$dara.isNull(request.transferee)) {
      query["Transferee"] = request.transferee;
    }

    if (!$dara.isNull(request.transfereeType)) {
      query["TransfereeType"] = request.transfereeType;
    }

    if (!$dara.isNull(request.transferor)) {
      query["Transferor"] = request.transferor;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InitiateAttendedTransfer",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InitiateAttendedTransferResponse>(await this.callApi(params, req, runtime), new $_model.InitiateAttendedTransferResponse({}));
  }

  /**
   * Consultation transfer refers to transferring a call to another agent, a skill group queue, or an external number. It is also known as follow transfer or two-step transfer.
   * 
   * @param request - InitiateAttendedTransferRequest
   * @returns InitiateAttendedTransferResponse
   */
  async initiateAttendedTransfer(request: $_model.InitiateAttendedTransferRequest): Promise<$_model.InitiateAttendedTransferResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initiateAttendedTransferWithOptions(request, runtime);
  }

  /**
   * You can invoke InterceptCall to forcibly disconnect the call associated with a specified call ID under a given instance. The call must be in the listener state, and the forced disconnection must be initiated by the listener. After the forced disconnection succeeds, the agent who was originally talking with the customer will be disconnected, and the agent who initiated the forced disconnection will replace the original agent and continue the conversation with the customer.
   * 
   * @param request - InterceptCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InterceptCallResponse
   */
  async interceptCallWithOptions(request: $_model.InterceptCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InterceptCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.interceptedUserId)) {
      query["InterceptedUserId"] = request.interceptedUserId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.timeoutSeconds)) {
      query["TimeoutSeconds"] = request.timeoutSeconds;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InterceptCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InterceptCallResponse>(await this.callApi(params, req, runtime), new $_model.InterceptCallResponse({}));
  }

  /**
   * You can invoke InterceptCall to forcibly disconnect the call associated with a specified call ID under a given instance. The call must be in the listener state, and the forced disconnection must be initiated by the listener. After the forced disconnection succeeds, the agent who was originally talking with the customer will be disconnected, and the agent who initiated the forced disconnection will replace the original agent and continue the conversation with the customer.
   * 
   * @param request - InterceptCallRequest
   * @returns InterceptCallResponse
   */
  async interceptCall(request: $_model.InterceptCallRequest): Promise<$_model.InterceptCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.interceptCallWithOptions(request, runtime);
  }

  /**
   * You can invoke LaunchAuthentication to temporarily transfer a call into a specified IVR flow. After invoking this API, the call enters an IVR interaction phase, which is commonly used for identity verification operations.
   * 
   * @param request - LaunchAuthenticationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LaunchAuthenticationResponse
   */
  async launchAuthenticationWithOptions(request: $_model.LaunchAuthenticationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LaunchAuthenticationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactFlowId)) {
      query["ContactFlowId"] = request.contactFlowId;
    }

    if (!$dara.isNull(request.contactFlowVariables)) {
      query["ContactFlowVariables"] = request.contactFlowVariables;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LaunchAuthentication",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LaunchAuthenticationResponse>(await this.callApi(params, req, runtime), new $_model.LaunchAuthenticationResponse({}));
  }

  /**
   * You can invoke LaunchAuthentication to temporarily transfer a call into a specified IVR flow. After invoking this API, the call enters an IVR interaction phase, which is commonly used for identity verification operations.
   * 
   * @param request - LaunchAuthenticationRequest
   * @returns LaunchAuthenticationResponse
   */
  async launchAuthentication(request: $_model.LaunchAuthenticationRequest): Promise<$_model.LaunchAuthenticationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.launchAuthenticationWithOptions(request, runtime);
  }

  /**
   * Invoke LaunchSurvey to send a satisfaction survey. This operation causes the agent to hang up. If it is a voice-based satisfaction survey, the customer enters the IVR satisfaction survey flow after the agent hangs up and completes the satisfaction collection within the IVR flow. If it is an SMS-based satisfaction survey, the call ends and the customer receives a satisfaction survey text message.
   * 
   * @param request - LaunchSurveyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LaunchSurveyResponse
   */
  async launchSurveyWithOptions(request: $_model.LaunchSurveyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LaunchSurveyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactFlowId)) {
      query["ContactFlowId"] = request.contactFlowId;
    }

    if (!$dara.isNull(request.contactFlowVariables)) {
      query["ContactFlowVariables"] = request.contactFlowVariables;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.smsMetadataId)) {
      query["SmsMetadataId"] = request.smsMetadataId;
    }

    if (!$dara.isNull(request.surveyChannel)) {
      query["SurveyChannel"] = request.surveyChannel;
    }

    if (!$dara.isNull(request.surveyTemplateId)) {
      query["SurveyTemplateId"] = request.surveyTemplateId;
    }

    if (!$dara.isNull(request.surveyTemplateVariables)) {
      query["SurveyTemplateVariables"] = request.surveyTemplateVariables;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LaunchSurvey",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LaunchSurveyResponse>(await this.callApi(params, req, runtime), new $_model.LaunchSurveyResponse({}));
  }

  /**
   * Invoke LaunchSurvey to send a satisfaction survey. This operation causes the agent to hang up. If it is a voice-based satisfaction survey, the customer enters the IVR satisfaction survey flow after the agent hangs up and completes the satisfaction collection within the IVR flow. If it is an SMS-based satisfaction survey, the call ends and the customer receives a satisfaction survey text message.
   * 
   * @param request - LaunchSurveyRequest
   * @returns LaunchSurveyResponse
   */
  async launchSurvey(request: $_model.LaunchSurveyRequest): Promise<$_model.LaunchSurveyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.launchSurveyWithOptions(request, runtime);
  }

  /**
   * Invoke ListAgentStateLogs to obtain the status log list of a specified agent under a specified instance. Note that this API will soon expire. Use the override API ListRealtimeAgentStates instead.
   * 
   * @param request - ListAgentStateLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAgentStateLogsResponse
   */
  async listAgentStateLogsWithOptions(request: $_model.ListAgentStateLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAgentStateLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAgentStateLogs",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAgentStateLogsResponse>(await this.callApi(params, req, runtime), new $_model.ListAgentStateLogsResponse({}));
  }

  /**
   * Invoke ListAgentStateLogs to obtain the status log list of a specified agent under a specified instance. Note that this API will soon expire. Use the override API ListRealtimeAgentStates instead.
   * 
   * @param request - ListAgentStateLogsRequest
   * @returns ListAgentStateLogsResponse
   */
  async listAgentStateLogs(request: $_model.ListAgentStateLogsRequest): Promise<$_model.ListAgentStateLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAgentStateLogsWithOptions(request, runtime);
  }

  /**
   * You can invoke the ListAgentStates API to retrieve a list of agent statuses under a specified instance, filtered by specified conditions. This API is available only to specific Users. Other Customers are not recommended to invoke it.
   * 
   * @deprecated OpenAPI ListAgentStates is deprecated, please use CCC::2020-07-01::ListRealtimeAgentStates instead.
   * 
   * @param request - ListAgentStatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAgentStatesResponse
   */
  async listAgentStatesWithOptions(request: $_model.ListAgentStatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAgentStatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentIds)) {
      query["AgentIds"] = request.agentIds;
    }

    if (!$dara.isNull(request.excludeOfflineUsers)) {
      query["ExcludeOfflineUsers"] = request.excludeOfflineUsers;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAgentStates",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAgentStatesResponse>(await this.callApi(params, req, runtime), new $_model.ListAgentStatesResponse({}));
  }

  /**
   * You can invoke the ListAgentStates API to retrieve a list of agent statuses under a specified instance, filtered by specified conditions. This API is available only to specific Users. Other Customers are not recommended to invoke it.
   * 
   * @deprecated OpenAPI ListAgentStates is deprecated, please use CCC::2020-07-01::ListRealtimeAgentStates instead.
   * 
   * @param request - ListAgentStatesRequest
   * @returns ListAgentStatesResponse
   */
  // Deprecated
  async listAgentStates(request: $_model.ListAgentStatesRequest): Promise<$_model.ListAgentStatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAgentStatesWithOptions(request, runtime);
  }

  /**
   * You can invoke the ListAgentSummaryReportsSinceMidnight API to retrieve agent historical data reports under a specified instance, filtered by given conditions. The statistics cover data from 00:00 of the current day up to the current time. This API is available only to specific users; other customers are not recommended to invoke it.
   * 
   * @deprecated OpenAPI ListAgentSummaryReportsSinceMidnight is deprecated, please use CCC::2020-07-01::ListHistoricalAgentReport instead.
   * 
   * @param request - ListAgentSummaryReportsSinceMidnightRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAgentSummaryReportsSinceMidnightResponse
   */
  async listAgentSummaryReportsSinceMidnightWithOptions(request: $_model.ListAgentSummaryReportsSinceMidnightRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAgentSummaryReportsSinceMidnightResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAgentSummaryReportsSinceMidnight",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAgentSummaryReportsSinceMidnightResponse>(await this.callApi(params, req, runtime), new $_model.ListAgentSummaryReportsSinceMidnightResponse({}));
  }

  /**
   * You can invoke the ListAgentSummaryReportsSinceMidnight API to retrieve agent historical data reports under a specified instance, filtered by given conditions. The statistics cover data from 00:00 of the current day up to the current time. This API is available only to specific users; other customers are not recommended to invoke it.
   * 
   * @deprecated OpenAPI ListAgentSummaryReportsSinceMidnight is deprecated, please use CCC::2020-07-01::ListHistoricalAgentReport instead.
   * 
   * @param request - ListAgentSummaryReportsSinceMidnightRequest
   * @returns ListAgentSummaryReportsSinceMidnightResponse
   */
  // Deprecated
  async listAgentSummaryReportsSinceMidnight(request: $_model.ListAgentSummaryReportsSinceMidnightRequest): Promise<$_model.ListAgentSummaryReportsSinceMidnightResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAgentSummaryReportsSinceMidnightWithOptions(request, runtime);
  }

  /**
   * You can invoke ListAttempts to obtain the list of contact dialing records for a specified predictive outbound calling Activity under a specified instance.
   * 
   * @param request - ListAttemptsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAttemptsResponse
   */
  async listAttemptsWithOptions(request: $_model.ListAttemptsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAttemptsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAttempts",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAttemptsResponse>(await this.callApi(params, req, runtime), new $_model.ListAttemptsResponse({}));
  }

  /**
   * You can invoke ListAttempts to obtain the list of contact dialing records for a specified predictive outbound calling Activity under a specified instance.
   * 
   * @param request - ListAttemptsRequest
   * @returns ListAttemptsResponse
   */
  async listAttempts(request: $_model.ListAttemptsRequest): Promise<$_model.ListAttemptsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAttemptsWithOptions(request, runtime);
  }

  /**
   * Invoke ListAudioFiles to obtain the list of audio files under a specified instance.
   * 
   * @param request - ListAudioFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAudioFilesResponse
   */
  async listAudioFilesWithOptions(request: $_model.ListAudioFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAudioFilesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.usage)) {
      query["Usage"] = request.usage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAudioFiles",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAudioFilesResponse>(await this.callApi(params, req, runtime), new $_model.ListAudioFilesResponse({}));
  }

  /**
   * Invoke ListAudioFiles to obtain the list of audio files under a specified instance.
   * 
   * @param request - ListAudioFilesRequest
   * @returns ListAudioFilesResponse
   */
  async listAudioFiles(request: $_model.ListAudioFilesRequest): Promise<$_model.ListAudioFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAudioFilesWithOptions(request, runtime);
  }

  /**
   * Queries the blacklist tag status of specified numbers in a batch.
   * 
   * @param request - ListBlacklistCallTaggingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBlacklistCallTaggingsResponse
   */
  async listBlacklistCallTaggingsWithOptions(request: $_model.ListBlacklistCallTaggingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBlacklistCallTaggingsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.numberList)) {
      query["NumberList"] = request.numberList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBlacklistCallTaggings",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBlacklistCallTaggingsResponse>(await this.callApi(params, req, runtime), new $_model.ListBlacklistCallTaggingsResponse({}));
  }

  /**
   * Queries the blacklist tag status of specified numbers in a batch.
   * 
   * @param request - ListBlacklistCallTaggingsRequest
   * @returns ListBlacklistCallTaggingsResponse
   */
  async listBlacklistCallTaggings(request: $_model.ListBlacklistCallTaggingsRequest): Promise<$_model.ListBlacklistCallTaggingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBlacklistCallTaggingsWithOptions(request, runtime);
  }

  /**
   * You can invoke ListBriefSkillGroups to obtain the list of skill group summary information under a specified instance.
   * 
   * @param request - ListBriefSkillGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBriefSkillGroupsResponse
   */
  async listBriefSkillGroupsWithOptions(request: $_model.ListBriefSkillGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBriefSkillGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchPattern)) {
      query["SearchPattern"] = request.searchPattern;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBriefSkillGroups",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBriefSkillGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListBriefSkillGroupsResponse({}));
  }

  /**
   * You can invoke ListBriefSkillGroups to obtain the list of skill group summary information under a specified instance.
   * 
   * @param request - ListBriefSkillGroupsRequest
   * @returns ListBriefSkillGroupsResponse
   */
  async listBriefSkillGroups(request: $_model.ListBriefSkillGroupsRequest): Promise<$_model.ListBriefSkillGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBriefSkillGroupsWithOptions(request, runtime);
  }

  /**
   * You can invoke ListCallDetailRecords to obtain a list of call details filtered by specified search conditions under a specified instance. This API is no longer iteratively updated. We recommend that you use the ListCallDetailRecordsV2 API instead.
   * 
   * @remarks
   * To ensure query efficiency, the TotalCount field in the response data is populated only when the first page is queried. For other pages, this field returns 0.
   * 
   * @param request - ListCallDetailRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCallDetailRecordsResponse
   */
  async listCallDetailRecordsWithOptions(request: $_model.ListCallDetailRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCallDetailRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!$dara.isNull(request.contactDisposition)) {
      query["ContactDisposition"] = request.contactDisposition;
    }

    if (!$dara.isNull(request.contactDispositionList)) {
      query["ContactDispositionList"] = request.contactDispositionList;
    }

    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.contactType)) {
      query["ContactType"] = request.contactType;
    }

    if (!$dara.isNull(request.contactTypeList)) {
      query["ContactTypeList"] = request.contactTypeList;
    }

    if (!$dara.isNull(request.criteria)) {
      query["Criteria"] = request.criteria;
    }

    if (!$dara.isNull(request.earlyMediaStateList)) {
      query["EarlyMediaStateList"] = request.earlyMediaStateList;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.orderByField)) {
      query["OrderByField"] = request.orderByField;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.satisfactionDescriptionList)) {
      query["SatisfactionDescriptionList"] = request.satisfactionDescriptionList;
    }

    if (!$dara.isNull(request.satisfactionList)) {
      query["SatisfactionList"] = request.satisfactionList;
    }

    if (!$dara.isNull(request.satisfactionSurveyChannel)) {
      query["SatisfactionSurveyChannel"] = request.satisfactionSurveyChannel;
    }

    if (!$dara.isNull(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCallDetailRecords",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCallDetailRecordsResponse>(await this.callApi(params, req, runtime), new $_model.ListCallDetailRecordsResponse({}));
  }

  /**
   * You can invoke ListCallDetailRecords to obtain a list of call details filtered by specified search conditions under a specified instance. This API is no longer iteratively updated. We recommend that you use the ListCallDetailRecordsV2 API instead.
   * 
   * @remarks
   * To ensure query efficiency, the TotalCount field in the response data is populated only when the first page is queried. For other pages, this field returns 0.
   * 
   * @param request - ListCallDetailRecordsRequest
   * @returns ListCallDetailRecordsResponse
   */
  async listCallDetailRecords(request: $_model.ListCallDetailRecordsRequest): Promise<$_model.ListCallDetailRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCallDetailRecordsWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of call detail records that match the specified filter criteria for a specified instance.
   * 
   * @remarks
   * ListCallDetailRecordsV2 is used to override the ListCallDetailRecords operation. New fields and query conditions will undergo continuous optimization in ListCallDetailRecordsV2. To ensure query efficiency, the TotalCount field in the response is populated only when you query the first page. For other pages, the value 0 is returned.
   * 
   * @param request - ListCallDetailRecordsV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCallDetailRecordsV2Response
   */
  async listCallDetailRecordsV2WithOptions(request: $_model.ListCallDetailRecordsV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.ListCallDetailRecordsV2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessChannelTypeList)) {
      query["AccessChannelTypeList"] = request.accessChannelTypeList;
    }

    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.analyticsReportReady)) {
      query["AnalyticsReportReady"] = request.analyticsReportReady;
    }

    if (!$dara.isNull(request.broker)) {
      query["Broker"] = request.broker;
    }

    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!$dara.isNull(request.contactDispositionList)) {
      query["ContactDispositionList"] = request.contactDispositionList;
    }

    if (!$dara.isNull(request.contactIdList)) {
      query["ContactIdList"] = request.contactIdList;
    }

    if (!$dara.isNull(request.contactTypeList)) {
      query["ContactTypeList"] = request.contactTypeList;
    }

    if (!$dara.isNull(request.earlyMediaStateList)) {
      query["EarlyMediaStateList"] = request.earlyMediaStateList;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.firstAgentId)) {
      query["FirstAgentId"] = request.firstAgentId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.number)) {
      query["Number"] = request.number;
    }

    if (!$dara.isNull(request.orderByField)) {
      query["OrderByField"] = request.orderByField;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.releaseInitiatorList)) {
      query["ReleaseInitiatorList"] = request.releaseInitiatorList;
    }

    if (!$dara.isNull(request.releaseReasonList)) {
      query["ReleaseReasonList"] = request.releaseReasonList;
    }

    if (!$dara.isNull(request.satisfactionDescriptionList)) {
      query["SatisfactionDescriptionList"] = request.satisfactionDescriptionList;
    }

    if (!$dara.isNull(request.satisfactionRateList)) {
      query["SatisfactionRateList"] = request.satisfactionRateList;
    }

    if (!$dara.isNull(request.satisfactionSurveyChannel)) {
      query["SatisfactionSurveyChannel"] = request.satisfactionSurveyChannel;
    }

    if (!$dara.isNull(request.searchPattern)) {
      query["SearchPattern"] = request.searchPattern;
    }

    if (!$dara.isNull(request.skillGroupIdList)) {
      query["SkillGroupIdList"] = request.skillGroupIdList;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCallDetailRecordsV2",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCallDetailRecordsV2Response>(await this.callApi(params, req, runtime), new $_model.ListCallDetailRecordsV2Response({}));
  }

  /**
   * Retrieves a list of call detail records that match the specified filter criteria for a specified instance.
   * 
   * @remarks
   * ListCallDetailRecordsV2 is used to override the ListCallDetailRecords operation. New fields and query conditions will undergo continuous optimization in ListCallDetailRecordsV2. To ensure query efficiency, the TotalCount field in the response is populated only when you query the first page. For other pages, the value 0 is returned.
   * 
   * @param request - ListCallDetailRecordsV2Request
   * @returns ListCallDetailRecordsV2Response
   */
  async listCallDetailRecordsV2(request: $_model.ListCallDetailRecordsV2Request): Promise<$_model.ListCallDetailRecordsV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCallDetailRecordsV2WithOptions(request, runtime);
  }

  /**
   * Use the ListCallSummaries operation to retrieve call summaries.
   * 
   * @param tmpReq - ListCallSummariesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCallSummariesResponse
   */
  async listCallSummariesWithOptions(tmpReq: $_model.ListCallSummariesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCallSummariesResponse> {
    tmpReq.validate();
    let request = new $_model.ListCallSummariesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.contactIdList)) {
      request.contactIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contactIdList, "ContactIdList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.contactIdListShrink)) {
      query["ContactIdList"] = request.contactIdListShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCallSummaries",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCallSummariesResponse>(await this.callApi(params, req, runtime), new $_model.ListCallSummariesResponse({}));
  }

  /**
   * Use the ListCallSummaries operation to retrieve call summaries.
   * 
   * @param request - ListCallSummariesRequest
   * @returns ListCallSummariesResponse
   */
  async listCallSummaries(request: $_model.ListCallSummariesRequest): Promise<$_model.ListCallSummariesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCallSummariesWithOptions(request, runtime);
  }

  /**
   * You can invoke ListCallTags to obtain all number tags under a specified instance.
   * 
   * @param request - ListCallTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCallTagsResponse
   */
  async listCallTagsWithOptions(request: $_model.ListCallTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCallTagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCallTags",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCallTagsResponse>(await this.callApi(params, req, runtime), new $_model.ListCallTagsResponse({}));
  }

  /**
   * You can invoke ListCallTags to obtain all number tags under a specified instance.
   * 
   * @param request - ListCallTagsRequest
   * @returns ListCallTagsResponse
   */
  async listCallTags(request: $_model.ListCallTagsRequest): Promise<$_model.ListCallTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCallTagsWithOptions(request, runtime);
  }

  /**
   * Obtain the trend report of the predictive outbound calling activity with the specified ID under the specified instance.
   * 
   * @param request - ListCampaignTrendingReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCampaignTrendingReportResponse
   */
  async listCampaignTrendingReportWithOptions(request: $_model.ListCampaignTrendingReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCampaignTrendingReportResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCampaignTrendingReport",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCampaignTrendingReportResponse>(await this.callApi(params, req, runtime), new $_model.ListCampaignTrendingReportResponse({}));
  }

  /**
   * Obtain the trend report of the predictive outbound calling activity with the specified ID under the specified instance.
   * 
   * @param request - ListCampaignTrendingReportRequest
   * @returns ListCampaignTrendingReportResponse
   */
  async listCampaignTrendingReport(request: $_model.ListCampaignTrendingReportRequest): Promise<$_model.ListCampaignTrendingReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCampaignTrendingReportWithOptions(request, runtime);
  }

  /**
   * Calls ListCampaigns to obtain the list of predictive dialing campaigns under a specified instance.
   * 
   * @param request - ListCampaignsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCampaignsResponse
   */
  async listCampaignsWithOptions(request: $_model.ListCampaignsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCampaignsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actualStartTimeFrom)) {
      query["ActualStartTimeFrom"] = request.actualStartTimeFrom;
    }

    if (!$dara.isNull(request.actualStartTimeTo)) {
      query["ActualStartTimeTo"] = request.actualStartTimeTo;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.planedStartTimeFrom)) {
      query["PlanedStartTimeFrom"] = request.planedStartTimeFrom;
    }

    if (!$dara.isNull(request.planedStartTimeTo)) {
      query["PlanedStartTimeTo"] = request.planedStartTimeTo;
    }

    if (!$dara.isNull(request.queueId)) {
      query["QueueId"] = request.queueId;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCampaigns",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCampaignsResponse>(await this.callApi(params, req, runtime), new $_model.ListCampaignsResponse({}));
  }

  /**
   * Calls ListCampaigns to obtain the list of predictive dialing campaigns under a specified instance.
   * 
   * @param request - ListCampaignsRequest
   * @returns ListCampaignsResponse
   */
  async listCampaigns(request: $_model.ListCampaignsRequest): Promise<$_model.ListCampaignsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCampaignsWithOptions(request, runtime);
  }

  /**
   * Invoke ListCases to obtain the execution details list of the outbound contact list for the predictive dialing Activity corresponding to the specified ID under the specified instance.
   * 
   * @param request - ListCasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCasesResponse
   */
  async listCasesWithOptions(request: $_model.ListCasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCasesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCases",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCasesResponse>(await this.callApi(params, req, runtime), new $_model.ListCasesResponse({}));
  }

  /**
   * Invoke ListCases to obtain the execution details list of the outbound contact list for the predictive dialing Activity corresponding to the specified ID under the specified instance.
   * 
   * @param request - ListCasesRequest
   * @returns ListCasesResponse
   */
  async listCases(request: $_model.ListCasesRequest): Promise<$_model.ListCasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCasesWithOptions(request, runtime);
  }

  /**
   * You can use ListCategories to retrieve category information.
   * 
   * @param request - ListCategoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCategoriesResponse
   */
  async listCategoriesWithOptions(request: $_model.ListCategoriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCategoriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCategories",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCategoriesResponse>(await this.callApi(params, req, runtime), new $_model.ListCategoriesResponse({}));
  }

  /**
   * You can use ListCategories to retrieve category information.
   * 
   * @param request - ListCategoriesRequest
   * @returns ListCategoriesResponse
   */
  async listCategories(request: $_model.ListCategoriesRequest): Promise<$_model.ListCategoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCategoriesWithOptions(request, runtime);
  }

  /**
   * Retrieves the ticket field types that are defined for an instance.
   * 
   * @param request - ListCommonTicketFieldsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCommonTicketFieldsResponse
   */
  async listCommonTicketFieldsWithOptions(request: $_model.ListCommonTicketFieldsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCommonTicketFieldsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCommonTicketFields",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCommonTicketFieldsResponse>(await this.callApi(params, req, runtime), new $_model.ListCommonTicketFieldsResponse({}));
  }

  /**
   * Retrieves the ticket field types that are defined for an instance.
   * 
   * @param request - ListCommonTicketFieldsRequest
   * @returns ListCommonTicketFieldsResponse
   */
  async listCommonTicketFields(request: $_model.ListCommonTicketFieldsRequest): Promise<$_model.ListCommonTicketFieldsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCommonTicketFieldsWithOptions(request, runtime);
  }

  /**
   * Retrieves the config items for a specified instance.
   * 
   * @param request - ListConfigItemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConfigItemsResponse
   */
  async listConfigItemsWithOptions(request: $_model.ListConfigItemsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListConfigItemsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.objectId)) {
      query["ObjectId"] = request.objectId;
    }

    if (!$dara.isNull(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConfigItems",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConfigItemsResponse>(await this.callApi(params, req, runtime), new $_model.ListConfigItemsResponse({}));
  }

  /**
   * Retrieves the config items for a specified instance.
   * 
   * @param request - ListConfigItemsRequest
   * @returns ListConfigItemsResponse
   */
  async listConfigItems(request: $_model.ListConfigItemsRequest): Promise<$_model.ListConfigItemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listConfigItemsWithOptions(request, runtime);
  }

  /**
   * Call ListContactFlows to retrieve the IVR contact flows for a specified instance.
   * 
   * @param request - ListContactFlowsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListContactFlowsResponse
   */
  async listContactFlowsWithOptions(request: $_model.ListContactFlowsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListContactFlowsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.orderByField)) {
      query["OrderByField"] = request.orderByField;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchPattern)) {
      query["SearchPattern"] = request.searchPattern;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListContactFlows",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListContactFlowsResponse>(await this.callApi(params, req, runtime), new $_model.ListContactFlowsResponse({}));
  }

  /**
   * Call ListContactFlows to retrieve the IVR contact flows for a specified instance.
   * 
   * @param request - ListContactFlowsRequest
   * @returns ListContactFlowsResponse
   */
  async listContactFlows(request: $_model.ListContactFlowsRequest): Promise<$_model.ListContactFlowsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listContactFlowsWithOptions(request, runtime);
  }

  /**
   * You can invoke ListCustomCallTagging to obtain the list of inbound number marks under a specified instance.
   * 
   * @deprecated OpenAPI ListCustomCallTagging is deprecated, please use CCC::2020-07-01::ListCustomCallTaggings instead.
   * 
   * @param request - ListCustomCallTaggingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomCallTaggingResponse
   */
  async listCustomCallTaggingWithOptions(request: $_model.ListCustomCallTaggingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomCallTaggingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callTagNameList)) {
      query["CallTagNameList"] = request.callTagNameList;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchPattern)) {
      query["SearchPattern"] = request.searchPattern;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomCallTagging",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCustomCallTaggingResponse>(await this.callApi(params, req, runtime), new $_model.ListCustomCallTaggingResponse({}));
  }

  /**
   * You can invoke ListCustomCallTagging to obtain the list of inbound number marks under a specified instance.
   * 
   * @deprecated OpenAPI ListCustomCallTagging is deprecated, please use CCC::2020-07-01::ListCustomCallTaggings instead.
   * 
   * @param request - ListCustomCallTaggingRequest
   * @returns ListCustomCallTaggingResponse
   */
  // Deprecated
  async listCustomCallTagging(request: $_model.ListCustomCallTaggingRequest): Promise<$_model.ListCustomCallTaggingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCustomCallTaggingWithOptions(request, runtime);
  }

  /**
   * Obtain the device list of a specified agent under a specified instance.
   * 
   * @param request - ListDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDevicesResponse
   */
  async listDevicesWithOptions(request: $_model.ListDevicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDevices",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDevicesResponse>(await this.callApi(params, req, runtime), new $_model.ListDevicesResponse({}));
  }

  /**
   * Obtain the device list of a specified agent under a specified instance.
   * 
   * @param request - ListDevicesRequest
   * @returns ListDevicesResponse
   */
  async listDevices(request: $_model.ListDevicesRequest): Promise<$_model.ListDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDevicesWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of prohibited outbound call numbers under a specified instance, filtered by specified search conditions.
   * 
   * @param request - ListDoNotCallNumbersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDoNotCallNumbersResponse
   */
  async listDoNotCallNumbersWithOptions(request: $_model.ListDoNotCallNumbersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDoNotCallNumbersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.searchPattern)) {
      query["SearchPattern"] = request.searchPattern;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDoNotCallNumbers",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDoNotCallNumbersResponse>(await this.callApi(params, req, runtime), new $_model.ListDoNotCallNumbersResponse({}));
  }

  /**
   * Retrieves the list of prohibited outbound call numbers under a specified instance, filtered by specified search conditions.
   * 
   * @param request - ListDoNotCallNumbersRequest
   * @returns ListDoNotCallNumbersResponse
   */
  async listDoNotCallNumbers(request: $_model.ListDoNotCallNumbersRequest): Promise<$_model.ListDoNotCallNumbersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDoNotCallNumbersWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - ListDocumentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDocumentsResponse
   */
  async listDocumentsWithOptions(tmpReq: $_model.ListDocumentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDocumentsResponse> {
    tmpReq.validate();
    let request = new $_model.ListDocumentsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sorts)) {
      request.sortsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sorts, "Sorts", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nextPageToken)) {
      body["NextPageToken"] = request.nextPageToken;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.schemaId)) {
      body["SchemaId"] = request.schemaId;
    }

    if (!$dara.isNull(request.searchPattern)) {
      body["SearchPattern"] = request.searchPattern;
    }

    if (!$dara.isNull(request.sortsShrink)) {
      body["Sorts"] = request.sortsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDocuments",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDocumentsResponse>(await this.callApi(params, req, runtime), new $_model.ListDocumentsResponse({}));
  }

  /**
   * @param request - ListDocumentsRequest
   * @returns ListDocumentsResponse
   */
  async listDocuments(request: $_model.ListDocumentsRequest): Promise<$_model.ListDocumentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDocumentsWithOptions(request, runtime);
  }

  /**
   * Queries feedback records.
   * 
   * @param request - ListFeedbacksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFeedbacksResponse
   */
  async listFeedbacksWithOptions(request: $_model.ListFeedbacksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFeedbacksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.taskIdList)) {
      query["TaskIdList"] = request.taskIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFeedbacks",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFeedbacksResponse>(await this.callApi(params, req, runtime), new $_model.ListFeedbacksResponse({}));
  }

  /**
   * Queries feedback records.
   * 
   * @param request - ListFeedbacksRequest
   * @returns ListFeedbacksResponse
   */
  async listFeedbacks(request: $_model.ListFeedbacksRequest): Promise<$_model.ListFeedbacksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFeedbacksWithOptions(request, runtime);
  }

  /**
   * You can use ListFlashSmsApplication to obtain third-party flash SMS configuration information.
   * 
   * @param request - ListFlashSmsApplicationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFlashSmsApplicationsResponse
   */
  async listFlashSmsApplicationsWithOptions(request: $_model.ListFlashSmsApplicationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFlashSmsApplicationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.providerId)) {
      query["ProviderId"] = request.providerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFlashSmsApplications",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFlashSmsApplicationsResponse>(await this.callApi(params, req, runtime), new $_model.ListFlashSmsApplicationsResponse({}));
  }

  /**
   * You can use ListFlashSmsApplication to obtain third-party flash SMS configuration information.
   * 
   * @param request - ListFlashSmsApplicationsRequest
   * @returns ListFlashSmsApplicationsResponse
   */
  async listFlashSmsApplications(request: $_model.ListFlashSmsApplicationsRequest): Promise<$_model.ListFlashSmsApplicationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFlashSmsApplicationsWithOptions(request, runtime);
  }

  /**
   * Call the ListFlashSmsSettings operation to retrieve the flash SMS configurations for a specified skill group.
   * 
   * @param tmpReq - ListFlashSmsSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFlashSmsSettingsResponse
   */
  async listFlashSmsSettingsWithOptions(tmpReq: $_model.ListFlashSmsSettingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFlashSmsSettingsResponse> {
    tmpReq.validate();
    let request = new $_model.ListFlashSmsSettingsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.skillGroupIdList)) {
      request.skillGroupIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.skillGroupIdList, "SkillGroupIdList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.skillGroupIdListShrink)) {
      query["SkillGroupIdList"] = request.skillGroupIdListShrink;
    }

    if (!$dara.isNull(request.skillGroupName)) {
      query["SkillGroupName"] = request.skillGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFlashSmsSettings",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFlashSmsSettingsResponse>(await this.callApi(params, req, runtime), new $_model.ListFlashSmsSettingsResponse({}));
  }

  /**
   * Call the ListFlashSmsSettings operation to retrieve the flash SMS configurations for a specified skill group.
   * 
   * @param request - ListFlashSmsSettingsRequest
   * @returns ListFlashSmsSettingsResponse
   */
  async listFlashSmsSettings(request: $_model.ListFlashSmsSettingsRequest): Promise<$_model.ListFlashSmsSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFlashSmsSettingsWithOptions(request, runtime);
  }

  /**
   * Use ListFlashSmsTemplates to retrieve flash SMS template information.
   * 
   * @param request - ListFlashSmsTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFlashSmsTemplatesResponse
   */
  async listFlashSmsTemplatesWithOptions(request: $_model.ListFlashSmsTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFlashSmsTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.providerId)) {
      query["ProviderId"] = request.providerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFlashSmsTemplates",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFlashSmsTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListFlashSmsTemplatesResponse({}));
  }

  /**
   * Use ListFlashSmsTemplates to retrieve flash SMS template information.
   * 
   * @param request - ListFlashSmsTemplatesRequest
   * @returns ListFlashSmsTemplatesResponse
   */
  async listFlashSmsTemplates(request: $_model.ListFlashSmsTemplatesRequest): Promise<$_model.ListFlashSmsTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFlashSmsTemplatesWithOptions(request, runtime);
  }

  /**
   * Retrieves the records of group chat messages.
   * 
   * @param request - ListGroupChatMessagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupChatMessagesResponse
   */
  async listGroupChatMessagesWithOptions(request: $_model.ListGroupChatMessagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGroupChatMessagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGroupChatMessages",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGroupChatMessagesResponse>(await this.callApi(params, req, runtime), new $_model.ListGroupChatMessagesResponse({}));
  }

  /**
   * Retrieves the records of group chat messages.
   * 
   * @param request - ListGroupChatMessagesRequest
   * @returns ListGroupChatMessagesResponse
   */
  async listGroupChatMessages(request: $_model.ListGroupChatMessagesRequest): Promise<$_model.ListGroupChatMessagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGroupChatMessagesWithOptions(request, runtime);
  }

  /**
   * Retrieves historical data reports for one or more agents in a specified instance.
   * 
   * @param request - ListHistoricalAgentReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHistoricalAgentReportResponse
   */
  async listHistoricalAgentReportWithOptions(request: $_model.ListHistoricalAgentReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHistoricalAgentReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.stopTime)) {
      query["StopTime"] = request.stopTime;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentIdList)) {
      body["AgentIdList"] = request.agentIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHistoricalAgentReport",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHistoricalAgentReportResponse>(await this.callApi(params, req, runtime), new $_model.ListHistoricalAgentReportResponse({}));
  }

  /**
   * Retrieves historical data reports for one or more agents in a specified instance.
   * 
   * @param request - ListHistoricalAgentReportRequest
   * @returns ListHistoricalAgentReportResponse
   */
  async listHistoricalAgentReport(request: $_model.ListHistoricalAgentReportRequest): Promise<$_model.ListHistoricalAgentReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHistoricalAgentReportWithOptions(request, runtime);
  }

  /**
   * You can call ListHistoricalAgentSkillGroupReport to retrieve historical skill group reports for one or more agents in a specified instance.
   * 
   * @param request - ListHistoricalAgentSkillGroupReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHistoricalAgentSkillGroupReportResponse
   */
  async listHistoricalAgentSkillGroupReportWithOptions(request: $_model.ListHistoricalAgentSkillGroupReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHistoricalAgentSkillGroupReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.skillGroupIdList)) {
      query["SkillGroupIdList"] = request.skillGroupIdList;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentIdList)) {
      body["AgentIdList"] = request.agentIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHistoricalAgentSkillGroupReport",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHistoricalAgentSkillGroupReportResponse>(await this.callApi(params, req, runtime), new $_model.ListHistoricalAgentSkillGroupReportResponse({}));
  }

  /**
   * You can call ListHistoricalAgentSkillGroupReport to retrieve historical skill group reports for one or more agents in a specified instance.
   * 
   * @param request - ListHistoricalAgentSkillGroupReportRequest
   * @returns ListHistoricalAgentSkillGroupReportResponse
   */
  async listHistoricalAgentSkillGroupReport(request: $_model.ListHistoricalAgentSkillGroupReportRequest): Promise<$_model.ListHistoricalAgentSkillGroupReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHistoricalAgentSkillGroupReportWithOptions(request, runtime);
  }

  /**
   * You can invoke ListHistoricalSkillGroupReport to obtain historical data reports for one or more skill groups under a specified instance.
   * 
   * @param request - ListHistoricalSkillGroupReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHistoricalSkillGroupReportResponse
   */
  async listHistoricalSkillGroupReportWithOptions(request: $_model.ListHistoricalSkillGroupReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHistoricalSkillGroupReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.skillGroupIdList)) {
      body["SkillGroupIdList"] = request.skillGroupIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHistoricalSkillGroupReport",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHistoricalSkillGroupReportResponse>(await this.callApi(params, req, runtime), new $_model.ListHistoricalSkillGroupReportResponse({}));
  }

  /**
   * You can invoke ListHistoricalSkillGroupReport to obtain historical data reports for one or more skill groups under a specified instance.
   * 
   * @param request - ListHistoricalSkillGroupReportRequest
   * @returns ListHistoricalSkillGroupReportResponse
   */
  async listHistoricalSkillGroupReport(request: $_model.ListHistoricalSkillGroupReportRequest): Promise<$_model.ListHistoricalSkillGroupReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHistoricalSkillGroupReportWithOptions(request, runtime);
  }

  /**
   * Invoke the ListInstances API to obtain the list of Cloud Contact Center instances under the current Alibaba Cloud account.
   * 
   * @remarks
   * If a RAM user needs to invoke this API, the RAM user must have the "Manage Cloud Call Center (CCC)" permission (AliyunCCCFullAccess).
   * 
   * @param request - ListInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(request: $_model.ListInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2020-07-01",
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
   * Invoke the ListInstances API to obtain the list of Cloud Contact Center instances under the current Alibaba Cloud account.
   * 
   * @remarks
   * If a RAM user needs to invoke this API, the RAM user must have the "Manage Cloud Call Center (CCC)" permission (AliyunCCCFullAccess).
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: $_model.ListInstancesRequest): Promise<$_model.ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  /**
   * You can invoke ListInstancesOfUser to obtain the list of Cloud Contact Center instances to which the User belongs.
   * 
   * @param request - ListInstancesOfUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesOfUserResponse
   */
  async listInstancesOfUserWithOptions(request: $_model.ListInstancesOfUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancesOfUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstancesOfUser",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancesOfUserResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancesOfUserResponse({}));
  }

  /**
   * You can invoke ListInstancesOfUser to obtain the list of Cloud Contact Center instances to which the User belongs.
   * 
   * @param request - ListInstancesOfUserRequest
   * @returns ListInstancesOfUserResponse
   */
  async listInstancesOfUser(request: $_model.ListInstancesOfUserRequest): Promise<$_model.ListInstancesOfUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstancesOfUserWithOptions(request, runtime);
  }

  /**
   * You can invoke ListIntervalAgentReport to obtain the segment statistical report of a specified agent under a specified instance.
   * 
   * @param request - ListIntervalAgentReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIntervalAgentReportResponse
   */
  async listIntervalAgentReportWithOptions(request: $_model.ListIntervalAgentReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIntervalAgentReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIntervalAgentReport",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIntervalAgentReportResponse>(await this.callApi(params, req, runtime), new $_model.ListIntervalAgentReportResponse({}));
  }

  /**
   * You can invoke ListIntervalAgentReport to obtain the segment statistical report of a specified agent under a specified instance.
   * 
   * @param request - ListIntervalAgentReportRequest
   * @returns ListIntervalAgentReportResponse
   */
  async listIntervalAgentReport(request: $_model.ListIntervalAgentReportRequest): Promise<$_model.ListIntervalAgentReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIntervalAgentReportWithOptions(request, runtime);
  }

  /**
   * Retrieves the interval-based statistical report for a specified agent in a specified instance.
   * 
   * @param request - ListIntervalAgentSkillGroupReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIntervalAgentSkillGroupReportResponse
   */
  async listIntervalAgentSkillGroupReportWithOptions(request: $_model.ListIntervalAgentSkillGroupReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIntervalAgentSkillGroupReportResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIntervalAgentSkillGroupReport",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIntervalAgentSkillGroupReportResponse>(await this.callApi(params, req, runtime), new $_model.ListIntervalAgentSkillGroupReportResponse({}));
  }

  /**
   * Retrieves the interval-based statistical report for a specified agent in a specified instance.
   * 
   * @param request - ListIntervalAgentSkillGroupReportRequest
   * @returns ListIntervalAgentSkillGroupReportResponse
   */
  async listIntervalAgentSkillGroupReport(request: $_model.ListIntervalAgentSkillGroupReportRequest): Promise<$_model.ListIntervalAgentSkillGroupReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIntervalAgentSkillGroupReportWithOptions(request, runtime);
  }

  /**
   * You can invoke ListIntervalInstanceReport to obtain the segment statistical report for a specified instance.
   * 
   * @param request - ListIntervalInstanceReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIntervalInstanceReportResponse
   */
  async listIntervalInstanceReportWithOptions(request: $_model.ListIntervalInstanceReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIntervalInstanceReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIntervalInstanceReport",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIntervalInstanceReportResponse>(await this.callApi(params, req, runtime), new $_model.ListIntervalInstanceReportResponse({}));
  }

  /**
   * You can invoke ListIntervalInstanceReport to obtain the segment statistical report for a specified instance.
   * 
   * @param request - ListIntervalInstanceReportRequest
   * @returns ListIntervalInstanceReportResponse
   */
  async listIntervalInstanceReport(request: $_model.ListIntervalInstanceReportRequest): Promise<$_model.ListIntervalInstanceReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIntervalInstanceReportWithOptions(request, runtime);
  }

  /**
   * You can invoke ListIntervalSkillGroupReport to obtain the segment-based statistical report of a specified skill group under a specified instance.
   * 
   * @param request - ListIntervalSkillGroupReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIntervalSkillGroupReportResponse
   */
  async listIntervalSkillGroupReportWithOptions(request: $_model.ListIntervalSkillGroupReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIntervalSkillGroupReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIntervalSkillGroupReport",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIntervalSkillGroupReportResponse>(await this.callApi(params, req, runtime), new $_model.ListIntervalSkillGroupReportResponse({}));
  }

  /**
   * You can invoke ListIntervalSkillGroupReport to obtain the segment-based statistical report of a specified skill group under a specified instance.
   * 
   * @param request - ListIntervalSkillGroupReportRequest
   * @returns ListIntervalSkillGroupReportResponse
   */
  async listIntervalSkillGroupReport(request: $_model.ListIntervalSkillGroupReportRequest): Promise<$_model.ListIntervalSkillGroupReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIntervalSkillGroupReportWithOptions(request, runtime);
  }

  /**
   * Invoke ListIvrTrackingDetails to obtain the IVR tracking details of a specified call under a specified instance.
   * 
   * @param request - ListIvrTrackingDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIvrTrackingDetailsResponse
   */
  async listIvrTrackingDetailsWithOptions(request: $_model.ListIvrTrackingDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIvrTrackingDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIvrTrackingDetails",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIvrTrackingDetailsResponse>(await this.callApi(params, req, runtime), new $_model.ListIvrTrackingDetailsResponse({}));
  }

  /**
   * Invoke ListIvrTrackingDetails to obtain the IVR tracking details of a specified call under a specified instance.
   * 
   * @param request - ListIvrTrackingDetailsRequest
   * @returns ListIvrTrackingDetailsResponse
   */
  async listIvrTrackingDetails(request: $_model.ListIvrTrackingDetailsRequest): Promise<$_model.ListIvrTrackingDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIvrTrackingDetailsWithOptions(request, runtime);
  }

  /**
   * You can invoke ListLegacyAgentEventLogs to obtain the list of 1.0 legacy agent event logs. This API is available only to specific Users, and other Customers are not recommended to invoke it.
   * 
   * @deprecated OpenAPI ListLegacyAgentEventLogs is deprecated, please use CCC::2020-07-01::ListAgentStateLogs instead.
   * 
   * @param request - ListLegacyAgentEventLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLegacyAgentEventLogsResponse
   */
  async listLegacyAgentEventLogsWithOptions(request: $_model.ListLegacyAgentEventLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLegacyAgentEventLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLegacyAgentEventLogs",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLegacyAgentEventLogsResponse>(await this.callApi(params, req, runtime), new $_model.ListLegacyAgentEventLogsResponse({}));
  }

  /**
   * You can invoke ListLegacyAgentEventLogs to obtain the list of 1.0 legacy agent event logs. This API is available only to specific Users, and other Customers are not recommended to invoke it.
   * 
   * @deprecated OpenAPI ListLegacyAgentEventLogs is deprecated, please use CCC::2020-07-01::ListAgentStateLogs instead.
   * 
   * @param request - ListLegacyAgentEventLogsRequest
   * @returns ListLegacyAgentEventLogsResponse
   */
  // Deprecated
  async listLegacyAgentEventLogs(request: $_model.ListLegacyAgentEventLogsRequest): Promise<$_model.ListLegacyAgentEventLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLegacyAgentEventLogsWithOptions(request, runtime);
  }

  /**
   * You can invoke ListLegacyAgentStatusLogs to obtain the list of legacy agent status logs for version 1.0. This API is available only to specific Users, and other Customers are not recommended to invoke it.
   * 
   * @deprecated OpenAPI ListLegacyAgentStatusLogs is deprecated, please use CCC::2020-07-01::ListAgentStateLogs instead.
   * 
   * @param request - ListLegacyAgentStatusLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLegacyAgentStatusLogsResponse
   */
  async listLegacyAgentStatusLogsWithOptions(request: $_model.ListLegacyAgentStatusLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLegacyAgentStatusLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLegacyAgentStatusLogs",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLegacyAgentStatusLogsResponse>(await this.callApi(params, req, runtime), new $_model.ListLegacyAgentStatusLogsResponse({}));
  }

  /**
   * You can invoke ListLegacyAgentStatusLogs to obtain the list of legacy agent status logs for version 1.0. This API is available only to specific Users, and other Customers are not recommended to invoke it.
   * 
   * @deprecated OpenAPI ListLegacyAgentStatusLogs is deprecated, please use CCC::2020-07-01::ListAgentStateLogs instead.
   * 
   * @param request - ListLegacyAgentStatusLogsRequest
   * @returns ListLegacyAgentStatusLogsResponse
   */
  // Deprecated
  async listLegacyAgentStatusLogs(request: $_model.ListLegacyAgentStatusLogsRequest): Promise<$_model.ListLegacyAgentStatusLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLegacyAgentStatusLogsWithOptions(request, runtime);
  }

  /**
   * ListLegacyAppraiseLogs
   * 
   * @param request - ListLegacyAppraiseLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLegacyAppraiseLogsResponse
   */
  async listLegacyAppraiseLogsWithOptions(request: $_model.ListLegacyAppraiseLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLegacyAppraiseLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLegacyAppraiseLogs",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLegacyAppraiseLogsResponse>(await this.callApi(params, req, runtime), new $_model.ListLegacyAppraiseLogsResponse({}));
  }

  /**
   * ListLegacyAppraiseLogs
   * 
   * @param request - ListLegacyAppraiseLogsRequest
   * @returns ListLegacyAppraiseLogsResponse
   */
  async listLegacyAppraiseLogs(request: $_model.ListLegacyAppraiseLogsRequest): Promise<$_model.ListLegacyAppraiseLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLegacyAppraiseLogsWithOptions(request, runtime);
  }

  /**
   * You can invoke ListLegacyQueueEventLogs to obtain the list of 1.0 legacy queue event logs. This API is available only to specific Users, and other Customers are not recommended to invoke it.
   * 
   * @param request - ListLegacyQueueEventLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLegacyQueueEventLogsResponse
   */
  async listLegacyQueueEventLogsWithOptions(request: $_model.ListLegacyQueueEventLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLegacyQueueEventLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLegacyQueueEventLogs",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLegacyQueueEventLogsResponse>(await this.callApi(params, req, runtime), new $_model.ListLegacyQueueEventLogsResponse({}));
  }

  /**
   * You can invoke ListLegacyQueueEventLogs to obtain the list of 1.0 legacy queue event logs. This API is available only to specific Users, and other Customers are not recommended to invoke it.
   * 
   * @param request - ListLegacyQueueEventLogsRequest
   * @returns ListLegacyQueueEventLogsResponse
   */
  async listLegacyQueueEventLogs(request: $_model.ListLegacyQueueEventLogsRequest): Promise<$_model.ListLegacyQueueEventLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLegacyQueueEventLogsWithOptions(request, runtime);
  }

  /**
   * Call ListMonoRecordings to retrieve single-track recordings for each party in a specified call under a specified instance. During a call, each party has a channel, and each channel generates a combined track recording in WAV format.
   * 
   * @param request - ListMonoRecordingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMonoRecordingsResponse
   */
  async listMonoRecordingsWithOptions(request: $_model.ListMonoRecordingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMonoRecordingsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentChannelId)) {
      query["AgentChannelId"] = request.agentChannelId;
    }

    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMonoRecordings",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMonoRecordingsResponse>(await this.callApi(params, req, runtime), new $_model.ListMonoRecordingsResponse({}));
  }

  /**
   * Call ListMonoRecordings to retrieve single-track recordings for each party in a specified call under a specified instance. During a call, each party has a channel, and each channel generates a combined track recording in WAV format.
   * 
   * @param request - ListMonoRecordingsRequest
   * @returns ListMonoRecordingsResponse
   */
  async listMonoRecordings(request: $_model.ListMonoRecordingsRequest): Promise<$_model.ListMonoRecordingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMonoRecordingsWithOptions(request, runtime);
  }

  /**
   * Call ListMultiChannelRecordings to retrieve the multi-channel recordings for each party in a specified call and instance. Each party has a call channel that corresponds to a multi-channel recording in MKV format.
   * 
   * @param request - ListMultiChannelRecordingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMultiChannelRecordingsResponse
   */
  async listMultiChannelRecordingsWithOptions(request: $_model.ListMultiChannelRecordingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMultiChannelRecordingsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentChannelId)) {
      query["AgentChannelId"] = request.agentChannelId;
    }

    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMultiChannelRecordings",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMultiChannelRecordingsResponse>(await this.callApi(params, req, runtime), new $_model.ListMultiChannelRecordingsResponse({}));
  }

  /**
   * Call ListMultiChannelRecordings to retrieve the multi-channel recordings for each party in a specified call and instance. Each party has a call channel that corresponds to a multi-channel recording in MKV format.
   * 
   * @param request - ListMultiChannelRecordingsRequest
   * @returns ListMultiChannelRecordingsResponse
   */
  async listMultiChannelRecordings(request: $_model.ListMultiChannelRecordingsRequest): Promise<$_model.ListMultiChannelRecordingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMultiChannelRecordingsWithOptions(request, runtime);
  }

  /**
   * Query notification records that were not sent using Message Queue (MQ).
   * 
   * @param request - ListNotificationRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNotificationRecordsResponse
   */
  async listNotificationRecordsWithOptions(request: $_model.ListNotificationRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNotificationRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.notificationKeys)) {
      query["NotificationKeys"] = request.notificationKeys;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNotificationRecords",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNotificationRecordsResponse>(await this.callApi(params, req, runtime), new $_model.ListNotificationRecordsResponse({}));
  }

  /**
   * Query notification records that were not sent using Message Queue (MQ).
   * 
   * @param request - ListNotificationRecordsRequest
   * @returns ListNotificationRecordsResponse
   */
  async listNotificationRecords(request: $_model.ListNotificationRecordsRequest): Promise<$_model.ListNotificationRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNotificationRecordsWithOptions(request, runtime);
  }

  /**
   * `ListOutboundNumbersOfUser` retrieves the outbound numbers for a specified agent in a specified instance.
   * 
   * @param request - ListOutboundNumbersOfUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOutboundNumbersOfUserResponse
   */
  async listOutboundNumbersOfUserWithOptions(request: $_model.ListOutboundNumbersOfUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOutboundNumbersOfUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.skillGroupIdList)) {
      query["SkillGroupIdList"] = request.skillGroupIdList;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOutboundNumbersOfUser",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOutboundNumbersOfUserResponse>(await this.callApi(params, req, runtime), new $_model.ListOutboundNumbersOfUserResponse({}));
  }

  /**
   * `ListOutboundNumbersOfUser` retrieves the outbound numbers for a specified agent in a specified instance.
   * 
   * @param request - ListOutboundNumbersOfUserRequest
   * @returns ListOutboundNumbersOfUserResponse
   */
  async listOutboundNumbersOfUser(request: $_model.ListOutboundNumbersOfUserRequest): Promise<$_model.ListOutboundNumbersOfUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOutboundNumbersOfUserWithOptions(request, runtime);
  }

  /**
   * You can invoke ListPersonalNumbersOfUser to obtain the list of personal outbound numbers for a specified agent under a specified instance. You can also use this API to retrieve the list of numbers that can be added as personal outbound numbers for an agent.
   * 
   * @remarks
   * Note: If a number is already attached to a skill group, it will not appear in the list of numbers available as personal outbound numbers.
   * 
   * @param request - ListPersonalNumbersOfUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPersonalNumbersOfUserResponse
   */
  async listPersonalNumbersOfUserWithOptions(request: $_model.ListPersonalNumbersOfUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPersonalNumbersOfUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isMember)) {
      query["IsMember"] = request.isMember;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchPattern)) {
      query["SearchPattern"] = request.searchPattern;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPersonalNumbersOfUser",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPersonalNumbersOfUserResponse>(await this.callApi(params, req, runtime), new $_model.ListPersonalNumbersOfUserResponse({}));
  }

  /**
   * You can invoke ListPersonalNumbersOfUser to obtain the list of personal outbound numbers for a specified agent under a specified instance. You can also use this API to retrieve the list of numbers that can be added as personal outbound numbers for an agent.
   * 
   * @remarks
   * Note: If a number is already attached to a skill group, it will not appear in the list of numbers available as personal outbound numbers.
   * 
   * @param request - ListPersonalNumbersOfUserRequest
   * @returns ListPersonalNumbersOfUserResponse
   */
  async listPersonalNumbersOfUser(request: $_model.ListPersonalNumbersOfUserRequest): Promise<$_model.ListPersonalNumbersOfUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPersonalNumbersOfUserWithOptions(request, runtime);
  }

  /**
   * You can invoke ListPhoneNumbers to obtain the phone number list under a specified instance.
   * 
   * @param request - ListPhoneNumbersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPhoneNumbersResponse
   */
  async listPhoneNumbersWithOptions(request: $_model.ListPhoneNumbersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPhoneNumbersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.active)) {
      query["Active"] = request.active;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchPattern)) {
      query["SearchPattern"] = request.searchPattern;
    }

    if (!$dara.isNull(request.usage)) {
      query["Usage"] = request.usage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPhoneNumbers",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPhoneNumbersResponse>(await this.callApi(params, req, runtime), new $_model.ListPhoneNumbersResponse({}));
  }

  /**
   * You can invoke ListPhoneNumbers to obtain the phone number list under a specified instance.
   * 
   * @param request - ListPhoneNumbersRequest
   * @returns ListPhoneNumbersResponse
   */
  async listPhoneNumbers(request: $_model.ListPhoneNumbersRequest): Promise<$_model.ListPhoneNumbersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPhoneNumbersWithOptions(request, runtime);
  }

  /**
   * You can invoke the ListPhoneNumbersOfSkillGroup API to obtain the list of phone numbers associated with a specified skill group under a specified instance. You can also use this API to query phone numbers that are not currently associated with the skill group but can be associated with it.
   * 
   * @remarks
   * Note: If a phone number is already used as a personal outbound number, it will not appear in the list of numbers available for association with a skill group.
   * 
   * @param request - ListPhoneNumbersOfSkillGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPhoneNumbersOfSkillGroupResponse
   */
  async listPhoneNumbersOfSkillGroupWithOptions(request: $_model.ListPhoneNumbersOfSkillGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPhoneNumbersOfSkillGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.active)) {
      query["Active"] = request.active;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isMember)) {
      query["IsMember"] = request.isMember;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchPattern)) {
      query["SearchPattern"] = request.searchPattern;
    }

    if (!$dara.isNull(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPhoneNumbersOfSkillGroup",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPhoneNumbersOfSkillGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListPhoneNumbersOfSkillGroupResponse({}));
  }

  /**
   * You can invoke the ListPhoneNumbersOfSkillGroup API to obtain the list of phone numbers associated with a specified skill group under a specified instance. You can also use this API to query phone numbers that are not currently associated with the skill group but can be associated with it.
   * 
   * @remarks
   * Note: If a phone number is already used as a personal outbound number, it will not appear in the list of numbers available for association with a skill group.
   * 
   * @param request - ListPhoneNumbersOfSkillGroupRequest
   * @returns ListPhoneNumbersOfSkillGroupResponse
   */
  async listPhoneNumbersOfSkillGroup(request: $_model.ListPhoneNumbersOfSkillGroupRequest): Promise<$_model.ListPhoneNumbersOfSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPhoneNumbersOfSkillGroupWithOptions(request, runtime);
  }

  /**
   * Invoke ListPrivilegesOfUser to obtain the permissions owned by the current User.
   * 
   * @param request - ListPrivilegesOfUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrivilegesOfUserResponse
   */
  async listPrivilegesOfUserWithOptions(request: $_model.ListPrivilegesOfUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPrivilegesOfUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrivilegesOfUser",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPrivilegesOfUserResponse>(await this.callApi(params, req, runtime), new $_model.ListPrivilegesOfUserResponse({}));
  }

  /**
   * Invoke ListPrivilegesOfUser to obtain the permissions owned by the current User.
   * 
   * @param request - ListPrivilegesOfUserRequest
   * @returns ListPrivilegesOfUserResponse
   */
  async listPrivilegesOfUser(request: $_model.ListPrivilegesOfUserRequest): Promise<$_model.ListPrivilegesOfUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPrivilegesOfUserWithOptions(request, runtime);
  }

  /**
   * Lists RAM users that have not been imported into a specified instance.
   * 
   * @remarks
   * A Resource Access Management (RAM) user can be imported as an agent into multiple Cloud Contact Center (CCC) instances. However, an agent can be associated with only one RAM account. When you create an agent in a CCC instance, a corresponding RAM account is also created. To avoid creating redundant RAM accounts when you set up a new instance, you can call the ListRamUsers operation to list RAM users that have not been imported into the instance. You can then call the operation that imports RAM users to add them to the new instance. This prevents creating unnecessary RAM accounts and conserves resources.
   * 
   * @param request - ListRamUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRamUsersResponse
   */
  async listRamUsersWithOptions(request: $_model.ListRamUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRamUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchPattern)) {
      query["SearchPattern"] = request.searchPattern;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRamUsers",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRamUsersResponse>(await this.callApi(params, req, runtime), new $_model.ListRamUsersResponse({}));
  }

  /**
   * Lists RAM users that have not been imported into a specified instance.
   * 
   * @remarks
   * A Resource Access Management (RAM) user can be imported as an agent into multiple Cloud Contact Center (CCC) instances. However, an agent can be associated with only one RAM account. When you create an agent in a CCC instance, a corresponding RAM account is also created. To avoid creating redundant RAM accounts when you set up a new instance, you can call the ListRamUsers operation to list RAM users that have not been imported into the instance. You can then call the operation that imports RAM users to add them to the new instance. This prevents creating unnecessary RAM accounts and conserves resources.
   * 
   * @param request - ListRamUsersRequest
   * @returns ListRamUsersResponse
   */
  async listRamUsers(request: $_model.ListRamUsersRequest): Promise<$_model.ListRamUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRamUsersWithOptions(request, runtime);
  }

  /**
   * You can invoke ListRealtimeAgentStates to obtain a real-time status data report for one or more specified agents in a specified instance.
   * 
   * @param request - ListRealtimeAgentStatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRealtimeAgentStatesResponse
   */
  async listRealtimeAgentStatesWithOptions(request: $_model.ListRealtimeAgentStatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRealtimeAgentStatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentName)) {
      query["AgentName"] = request.agentName;
    }

    if (!$dara.isNull(request.callTypeList)) {
      query["CallTypeList"] = request.callTypeList;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.outboundScenario)) {
      query["OutboundScenario"] = request.outboundScenario;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    if (!$dara.isNull(request.workModeList)) {
      query["WorkModeList"] = request.workModeList;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentIdList)) {
      body["AgentIdList"] = request.agentIdList;
    }

    if (!$dara.isNull(request.stateList)) {
      body["StateList"] = request.stateList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRealtimeAgentStates",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRealtimeAgentStatesResponse>(await this.callApi(params, req, runtime), new $_model.ListRealtimeAgentStatesResponse({}));
  }

  /**
   * You can invoke ListRealtimeAgentStates to obtain a real-time status data report for one or more specified agents in a specified instance.
   * 
   * @param request - ListRealtimeAgentStatesRequest
   * @returns ListRealtimeAgentStatesResponse
   */
  async listRealtimeAgentStates(request: $_model.ListRealtimeAgentStatesRequest): Promise<$_model.ListRealtimeAgentStatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRealtimeAgentStatesWithOptions(request, runtime);
  }

  /**
   * You can invoke ListRealtimeSkillGroupStates to obtain the real-time skill group status report for a specified instance.
   * 
   * @param request - ListRealtimeSkillGroupStatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRealtimeSkillGroupStatesResponse
   */
  async listRealtimeSkillGroupStatesWithOptions(request: $_model.ListRealtimeSkillGroupStatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRealtimeSkillGroupStatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.skillGroupIdList)) {
      body["SkillGroupIdList"] = request.skillGroupIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRealtimeSkillGroupStates",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRealtimeSkillGroupStatesResponse>(await this.callApi(params, req, runtime), new $_model.ListRealtimeSkillGroupStatesResponse({}));
  }

  /**
   * You can invoke ListRealtimeSkillGroupStates to obtain the real-time skill group status report for a specified instance.
   * 
   * @param request - ListRealtimeSkillGroupStatesRequest
   * @returns ListRealtimeSkillGroupStatesResponse
   */
  async listRealtimeSkillGroupStates(request: $_model.ListRealtimeSkillGroupStatesRequest): Promise<$_model.ListRealtimeSkillGroupStatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRealtimeSkillGroupStatesWithOptions(request, runtime);
  }

  /**
   * You can invoke ListRecentCallDetailRecords to obtain the list of recent call detail records for agents mapped to the current Resource Access Management (RAM) user under the specified instance.
   * 
   * @param request - ListRecentCallDetailRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRecentCallDetailRecordsResponse
   */
  async listRecentCallDetailRecordsWithOptions(request: $_model.ListRecentCallDetailRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRecentCallDetailRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.criteria)) {
      query["Criteria"] = request.criteria;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRecentCallDetailRecords",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRecentCallDetailRecordsResponse>(await this.callApi(params, req, runtime), new $_model.ListRecentCallDetailRecordsResponse({}));
  }

  /**
   * You can invoke ListRecentCallDetailRecords to obtain the list of recent call detail records for agents mapped to the current Resource Access Management (RAM) user under the specified instance.
   * 
   * @param request - ListRecentCallDetailRecordsRequest
   * @returns ListRecentCallDetailRecordsResponse
   */
  async listRecentCallDetailRecords(request: $_model.ListRecentCallDetailRecordsRequest): Promise<$_model.ListRecentCallDetailRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRecentCallDetailRecordsWithOptions(request, runtime);
  }

  /**
   * You can invoke ListRoles to obtain all roles under a specified instance.
   * 
   * @param request - ListRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRolesResponse
   */
  async listRolesWithOptions(request: $_model.ListRolesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRolesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRoles",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRolesResponse>(await this.callApi(params, req, runtime), new $_model.ListRolesResponse({}));
  }

  /**
   * You can invoke ListRoles to obtain all roles under a specified instance.
   * 
   * @param request - ListRolesRequest
   * @returns ListRolesResponse
   */
  async listRoles(request: $_model.ListRolesRequest): Promise<$_model.ListRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRolesWithOptions(request, runtime);
  }

  /**
   * You can invoke the ListSkillgroupStates API to obtain the status list of specified skill groups under a specified instance. This API is only available to specific Users, and other Customers are not recommended to invoke it.
   * 
   * @deprecated OpenAPI ListSkillGroupStates is deprecated, please use CCC::2020-07-01::ListRealtimeSkillGroupStates instead.
   * 
   * @param request - ListSkillGroupStatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSkillGroupStatesResponse
   */
  async listSkillGroupStatesWithOptions(request: $_model.ListSkillGroupStatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSkillGroupStatesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSkillGroupStates",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSkillGroupStatesResponse>(await this.callApi(params, req, runtime), new $_model.ListSkillGroupStatesResponse({}));
  }

  /**
   * You can invoke the ListSkillgroupStates API to obtain the status list of specified skill groups under a specified instance. This API is only available to specific Users, and other Customers are not recommended to invoke it.
   * 
   * @deprecated OpenAPI ListSkillGroupStates is deprecated, please use CCC::2020-07-01::ListRealtimeSkillGroupStates instead.
   * 
   * @param request - ListSkillGroupStatesRequest
   * @returns ListSkillGroupStatesResponse
   */
  // Deprecated
  async listSkillGroupStates(request: $_model.ListSkillGroupStatesRequest): Promise<$_model.ListSkillGroupStatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSkillGroupStatesWithOptions(request, runtime);
  }

  /**
   * The `ListSkillgroupSummaryReportsSinceMidnight` operation retrieves historical summary reports, filtered by specified conditions, for skill groups in a specified instance. The report contains data from 00:00 (midnight) today to the time of the request. This operation is available to specific users only.
   * 
   * @deprecated OpenAPI ListSkillGroupSummaryReportsSinceMidnight is deprecated, please use CCC::2020-07-01::ListHistoricalSkillGroupReport instead.
   * 
   * @param request - ListSkillGroupSummaryReportsSinceMidnightRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSkillGroupSummaryReportsSinceMidnightResponse
   */
  async listSkillGroupSummaryReportsSinceMidnightWithOptions(request: $_model.ListSkillGroupSummaryReportsSinceMidnightRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSkillGroupSummaryReportsSinceMidnightResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSkillGroupSummaryReportsSinceMidnight",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSkillGroupSummaryReportsSinceMidnightResponse>(await this.callApi(params, req, runtime), new $_model.ListSkillGroupSummaryReportsSinceMidnightResponse({}));
  }

  /**
   * The `ListSkillgroupSummaryReportsSinceMidnight` operation retrieves historical summary reports, filtered by specified conditions, for skill groups in a specified instance. The report contains data from 00:00 (midnight) today to the time of the request. This operation is available to specific users only.
   * 
   * @deprecated OpenAPI ListSkillGroupSummaryReportsSinceMidnight is deprecated, please use CCC::2020-07-01::ListHistoricalSkillGroupReport instead.
   * 
   * @param request - ListSkillGroupSummaryReportsSinceMidnightRequest
   * @returns ListSkillGroupSummaryReportsSinceMidnightResponse
   */
  // Deprecated
  async listSkillGroupSummaryReportsSinceMidnight(request: $_model.ListSkillGroupSummaryReportsSinceMidnightRequest): Promise<$_model.ListSkillGroupSummaryReportsSinceMidnightResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSkillGroupSummaryReportsSinceMidnightWithOptions(request, runtime);
  }

  /**
   * You can invoke ListSkillGroups to obtain the list of skill groups under a specified instance.
   * 
   * @param request - ListSkillGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSkillGroupsResponse
   */
  async listSkillGroupsWithOptions(request: $_model.ListSkillGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSkillGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchPattern)) {
      query["SearchPattern"] = request.searchPattern;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSkillGroups",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSkillGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListSkillGroupsResponse({}));
  }

  /**
   * You can invoke ListSkillGroups to obtain the list of skill groups under a specified instance.
   * 
   * @param request - ListSkillGroupsRequest
   * @returns ListSkillGroupsResponse
   */
  async listSkillGroups(request: $_model.ListSkillGroupsRequest): Promise<$_model.ListSkillGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSkillGroupsWithOptions(request, runtime);
  }

  /**
   * You can use this API to retrieve the list of skill levels for skill groups associated with a specified agent under a specified instance. You can also use this API to query the list of skill groups that the agent can be associated with but is not currently associated with.
   * 
   * @param request - ListSkillLevelsOfUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSkillLevelsOfUserResponse
   */
  async listSkillLevelsOfUserWithOptions(request: $_model.ListSkillLevelsOfUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSkillLevelsOfUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isMember)) {
      query["IsMember"] = request.isMember;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchPattern)) {
      query["SearchPattern"] = request.searchPattern;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSkillLevelsOfUser",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSkillLevelsOfUserResponse>(await this.callApi(params, req, runtime), new $_model.ListSkillLevelsOfUserResponse({}));
  }

  /**
   * You can use this API to retrieve the list of skill levels for skill groups associated with a specified agent under a specified instance. You can also use this API to query the list of skill groups that the agent can be associated with but is not currently associated with.
   * 
   * @param request - ListSkillLevelsOfUserRequest
   * @returns ListSkillLevelsOfUserResponse
   */
  async listSkillLevelsOfUser(request: $_model.ListSkillLevelsOfUserRequest): Promise<$_model.ListSkillLevelsOfUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSkillLevelsOfUserWithOptions(request, runtime);
  }

  /**
   * Queries the details of SMS configurations.
   * 
   * @param request - ListSmsMetadataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSmsMetadataResponse
   */
  async listSmsMetadataWithOptions(request: $_model.ListSmsMetadataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSmsMetadataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.scenarioListJson)) {
      query["ScenarioListJson"] = request.scenarioListJson;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSmsMetadata",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSmsMetadataResponse>(await this.callApi(params, req, runtime), new $_model.ListSmsMetadataResponse({}));
  }

  /**
   * Queries the details of SMS configurations.
   * 
   * @param request - ListSmsMetadataRequest
   * @returns ListSmsMetadataResponse
   */
  async listSmsMetadata(request: $_model.ListSmsMetadataRequest): Promise<$_model.ListSmsMetadataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSmsMetadataWithOptions(request, runtime);
  }

  /**
   * @param request - ListTicketTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTicketTasksResponse
   */
  async listTicketTasksWithOptions(request: $_model.ListTicketTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTicketTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ticketId)) {
      query["TicketId"] = request.ticketId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTicketTasks",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTicketTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListTicketTasksResponse({}));
  }

  /**
   * @param request - ListTicketTasksRequest
   * @returns ListTicketTasksResponse
   */
  async listTicketTasks(request: $_model.ListTicketTasksRequest): Promise<$_model.ListTicketTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTicketTasksWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of ticket templates.
   * 
   * @param request - ListTicketTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTicketTemplatesResponse
   */
  async listTicketTemplatesWithOptions(request: $_model.ListTicketTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTicketTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchPattern)) {
      query["SearchPattern"] = request.searchPattern;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTicketTemplates",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTicketTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListTicketTemplatesResponse({}));
  }

  /**
   * Retrieves a list of ticket templates.
   * 
   * @param request - ListTicketTemplatesRequest
   * @returns ListTicketTemplatesResponse
   */
  async listTicketTemplates(request: $_model.ListTicketTemplatesRequest): Promise<$_model.ListTicketTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTicketTemplatesWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of tickets for an instance.
   * 
   * @param request - ListTicketsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTicketsResponse
   */
  async listTicketsWithOptions(request: $_model.ListTicketsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTicketsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.assignee)) {
      query["Assignee"] = request.assignee;
    }

    if (!$dara.isNull(request.assigneeType)) {
      query["AssigneeType"] = request.assigneeType;
    }

    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.creator)) {
      query["Creator"] = request.creator;
    }

    if (!$dara.isNull(request.customerId)) {
      query["CustomerId"] = request.customerId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobIdList)) {
      query["JobIdList"] = request.jobIdList;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.participant)) {
      query["Participant"] = request.participant;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.ticketId)) {
      query["TicketId"] = request.ticketId;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTickets",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTicketsResponse>(await this.callApi(params, req, runtime), new $_model.ListTicketsResponse({}));
  }

  /**
   * Retrieves a list of tickets for an instance.
   * 
   * @param request - ListTicketsRequest
   * @returns ListTicketsResponse
   */
  async listTickets(request: $_model.ListTicketsRequest): Promise<$_model.ListTicketsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTicketsWithOptions(request, runtime);
  }

  /**
   * You can invoke ListUnassignedNumbers to obtain the list of numbers under your Alibaba Cloud account that have not been assigned to an instance.
   * 
   * @param request - ListUnassignedNumbersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUnassignedNumbersResponse
   */
  async listUnassignedNumbersWithOptions(request: $_model.ListUnassignedNumbersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUnassignedNumbersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchPattern)) {
      query["SearchPattern"] = request.searchPattern;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUnassignedNumbers",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUnassignedNumbersResponse>(await this.callApi(params, req, runtime), new $_model.ListUnassignedNumbersResponse({}));
  }

  /**
   * You can invoke ListUnassignedNumbers to obtain the list of numbers under your Alibaba Cloud account that have not been assigned to an instance.
   * 
   * @param request - ListUnassignedNumbersRequest
   * @returns ListUnassignedNumbersResponse
   */
  async listUnassignedNumbers(request: $_model.ListUnassignedNumbersRequest): Promise<$_model.ListUnassignedNumbersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUnassignedNumbersWithOptions(request, runtime);
  }

  /**
   * You can invoke the ListUserLevelsOfSkillGroup API to retrieve the list of agent skill levels under a specified skill group in a given instance. You can also use this API to retrieve the list of agents who can be associated with but are not currently associated with the specified skill group.
   * 
   * @param request - ListUserLevelsOfSkillGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserLevelsOfSkillGroupResponse
   */
  async listUserLevelsOfSkillGroupWithOptions(request: $_model.ListUserLevelsOfSkillGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserLevelsOfSkillGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isMember)) {
      query["IsMember"] = request.isMember;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchPattern)) {
      query["SearchPattern"] = request.searchPattern;
    }

    if (!$dara.isNull(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserLevelsOfSkillGroup",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserLevelsOfSkillGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListUserLevelsOfSkillGroupResponse({}));
  }

  /**
   * You can invoke the ListUserLevelsOfSkillGroup API to retrieve the list of agent skill levels under a specified skill group in a given instance. You can also use this API to retrieve the list of agents who can be associated with but are not currently associated with the specified skill group.
   * 
   * @param request - ListUserLevelsOfSkillGroupRequest
   * @returns ListUserLevelsOfSkillGroupResponse
   */
  async listUserLevelsOfSkillGroup(request: $_model.ListUserLevelsOfSkillGroupRequest): Promise<$_model.ListUserLevelsOfSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserLevelsOfSkillGroupWithOptions(request, runtime);
  }

  /**
   * Invoke ListUsers to obtain the agent list under a specified instance.
   * 
   * @param request - ListUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersResponse
   */
  async listUsersWithOptions(request: $_model.ListUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchPattern)) {
      query["SearchPattern"] = request.searchPattern;
    }

    if (!$dara.isNull(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsers",
      version: "2020-07-01",
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
   * Invoke ListUsers to obtain the agent list under a specified instance.
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: $_model.ListUsersRequest): Promise<$_model.ListUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  /**
   * You can use ListVisitorChatMessages to retrieve visitor chat records.
   * 
   * @param request - ListVisitorChatMessagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVisitorChatMessagesResponse
   */
  async listVisitorChatMessagesWithOptions(request: $_model.ListVisitorChatMessagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVisitorChatMessagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessChannelId)) {
      query["AccessChannelId"] = request.accessChannelId;
    }

    if (!$dara.isNull(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.visitorId)) {
      query["VisitorId"] = request.visitorId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVisitorChatMessages",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVisitorChatMessagesResponse>(await this.callApi(params, req, runtime), new $_model.ListVisitorChatMessagesResponse({}));
  }

  /**
   * You can use ListVisitorChatMessages to retrieve visitor chat records.
   * 
   * @param request - ListVisitorChatMessagesRequest
   * @returns ListVisitorChatMessagesResponse
   */
  async listVisitorChatMessages(request: $_model.ListVisitorChatMessagesRequest): Promise<$_model.ListVisitorChatMessagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVisitorChatMessagesWithOptions(request, runtime);
  }

  /**
   * You can call the ListVoicemails operation to retrieve a list of voicemails for a specified instance.
   * 
   * @param request - ListVoicemailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVoicemailsResponse
   */
  async listVoicemailsWithOptions(request: $_model.ListVoicemailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVoicemailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVoicemails",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVoicemailsResponse>(await this.callApi(params, req, runtime), new $_model.ListVoicemailsResponse({}));
  }

  /**
   * You can call the ListVoicemails operation to retrieve a list of voicemails for a specified instance.
   * 
   * @param request - ListVoicemailsRequest
   * @returns ListVoicemailsResponse
   */
  async listVoicemails(request: $_model.ListVoicemailsRequest): Promise<$_model.ListVoicemailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVoicemailsWithOptions(request, runtime);
  }

  /**
   * The ListWaitingChats operation allows agents to retrieve chats that are waiting in a queue to be assigned or claimed.
   * 
   * @param request - ListWaitingChatsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWaitingChatsResponse
   */
  async listWaitingChatsWithOptions(request: $_model.ListWaitingChatsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWaitingChatsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.skillGroupIdList)) {
      query["SkillGroupIdList"] = request.skillGroupIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWaitingChats",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWaitingChatsResponse>(await this.callApi(params, req, runtime), new $_model.ListWaitingChatsResponse({}));
  }

  /**
   * The ListWaitingChats operation allows agents to retrieve chats that are waiting in a queue to be assigned or claimed.
   * 
   * @param request - ListWaitingChatsRequest
   * @returns ListWaitingChatsResponse
   */
  async listWaitingChats(request: $_model.ListWaitingChatsRequest): Promise<$_model.ListWaitingChatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWaitingChatsWithOptions(request, runtime);
  }

  /**
   * You can invoke MakeCall to initiate a call. The callee can be an internal agent or an external customer.
   * 
   * @param request - MakeCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MakeCallResponse
   */
  async makeCallWithOptions(request: $_model.MakeCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MakeCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callee)) {
      query["Callee"] = request.callee;
    }

    if (!$dara.isNull(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.flashSmsVariables)) {
      query["FlashSmsVariables"] = request.flashSmsVariables;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maskedCallee)) {
      query["MaskedCallee"] = request.maskedCallee;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.timeoutSeconds)) {
      query["TimeoutSeconds"] = request.timeoutSeconds;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MakeCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MakeCallResponse>(await this.callApi(params, req, runtime), new $_model.MakeCallResponse({}));
  }

  /**
   * You can invoke MakeCall to initiate a call. The callee can be an internal agent or an external customer.
   * 
   * @param request - MakeCallRequest
   * @returns MakeCallResponse
   */
  async makeCall(request: $_model.MakeCallRequest): Promise<$_model.MakeCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.makeCallWithOptions(request, runtime);
  }

  /**
   * You can invoke ModifyAudioFile to modify the audio file associated with a specified audio resource ID under a given instance. You can update the audio file name, display name, and the OSS key of the audio file.
   * 
   * @param request - ModifyAudioFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAudioFileResponse
   */
  async modifyAudioFileWithOptions(request: $_model.ModifyAudioFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAudioFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.audioFileName)) {
      query["AudioFileName"] = request.audioFileName;
    }

    if (!$dara.isNull(request.audioResourceId)) {
      query["AudioResourceId"] = request.audioResourceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ossFileKey)) {
      query["OssFileKey"] = request.ossFileKey;
    }

    if (!$dara.isNull(request.usage)) {
      query["Usage"] = request.usage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAudioFile",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAudioFileResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAudioFileResponse({}));
  }

  /**
   * You can invoke ModifyAudioFile to modify the audio file associated with a specified audio resource ID under a given instance. You can update the audio file name, display name, and the OSS key of the audio file.
   * 
   * @param request - ModifyAudioFileRequest
   * @returns ModifyAudioFileResponse
   */
  async modifyAudioFile(request: $_model.ModifyAudioFileRequest): Promise<$_model.ModifyAudioFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAudioFileWithOptions(request, runtime);
  }

  /**
   * Modifies the calling numbers for a batch prediction outbound campaign.
   * 
   * @param tmpReq - ModifyCampaignNumbersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCampaignNumbersResponse
   */
  async modifyCampaignNumbersWithOptions(tmpReq: $_model.ModifyCampaignNumbersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCampaignNumbersResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyCampaignNumbersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.numberList)) {
      request.numberListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.numberList, "NumberList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!$dara.isNull(request.instGroupId)) {
      query["InstGroupId"] = request.instGroupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.numberListShrink)) {
      query["NumberList"] = request.numberListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCampaignNumbers",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCampaignNumbersResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCampaignNumbersResponse({}));
  }

  /**
   * Modifies the calling numbers for a batch prediction outbound campaign.
   * 
   * @param request - ModifyCampaignNumbersRequest
   * @returns ModifyCampaignNumbersResponse
   */
  async modifyCampaignNumbers(request: $_model.ModifyCampaignNumbersRequest): Promise<$_model.ModifyCampaignNumbersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCampaignNumbersWithOptions(request, runtime);
  }

  /**
   * You can invoke ModifyCustomCallTagging to modify the description and attached number tags of an inbound number mark for a specified number under a specified instance.
   * 
   * @param request - ModifyCustomCallTaggingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCustomCallTaggingResponse
   */
  async modifyCustomCallTaggingWithOptions(request: $_model.ModifyCustomCallTaggingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCustomCallTaggingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callTagNameList)) {
      query["CallTagNameList"] = request.callTagNameList;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.number)) {
      query["Number"] = request.number;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCustomCallTagging",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCustomCallTaggingResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCustomCallTaggingResponse({}));
  }

  /**
   * You can invoke ModifyCustomCallTagging to modify the description and attached number tags of an inbound number mark for a specified number under a specified instance.
   * 
   * @param request - ModifyCustomCallTaggingRequest
   * @returns ModifyCustomCallTaggingResponse
   */
  async modifyCustomCallTagging(request: $_model.ModifyCustomCallTaggingRequest): Promise<$_model.ModifyCustomCallTaggingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCustomCallTaggingWithOptions(request, runtime);
  }

  /**
   * You can invoke ModifyInstance to modify a Cloud Contact Center instance.
   * 
   * @param request - ModifyInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceResponse
   */
  async modifyInstanceWithOptions(request: $_model.ModifyInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstance",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceResponse({}));
  }

  /**
   * You can invoke ModifyInstance to modify a Cloud Contact Center instance.
   * 
   * @param request - ModifyInstanceRequest
   * @returns ModifyInstanceResponse
   */
  async modifyInstance(request: $_model.ModifyInstanceRequest): Promise<$_model.ModifyInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceWithOptions(request, runtime);
  }

  /**
   * You can invoke ModifyPhoneNumber to modify the information of a specified phone number under a specified instance, primarily to update the number\\"s usage and the attached contact flow ID.
   * 
   * @param request - ModifyPhoneNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPhoneNumberResponse
   */
  async modifyPhoneNumberWithOptions(request: $_model.ModifyPhoneNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPhoneNumberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactFlowId)) {
      query["ContactFlowId"] = request.contactFlowId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.number)) {
      query["Number"] = request.number;
    }

    if (!$dara.isNull(request.usage)) {
      query["Usage"] = request.usage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPhoneNumber",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyPhoneNumberResponse>(await this.callApi(params, req, runtime), new $_model.ModifyPhoneNumberResponse({}));
  }

  /**
   * You can invoke ModifyPhoneNumber to modify the information of a specified phone number under a specified instance, primarily to update the number\\"s usage and the attached contact flow ID.
   * 
   * @param request - ModifyPhoneNumberRequest
   * @returns ModifyPhoneNumberResponse
   */
  async modifyPhoneNumber(request: $_model.ModifyPhoneNumberRequest): Promise<$_model.ModifyPhoneNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPhoneNumberWithOptions(request, runtime);
  }

  /**
   * You can invoke ModifySkillGroup to modify the information of a skill group associated with a specified skill group ID under a specified instance, primarily updating the skill group\\"s display name and description.
   * 
   * @param request - ModifySkillGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySkillGroupResponse
   */
  async modifySkillGroupWithOptions(request: $_model.ModifySkillGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySkillGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySkillGroup",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySkillGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifySkillGroupResponse({}));
  }

  /**
   * You can invoke ModifySkillGroup to modify the information of a skill group associated with a specified skill group ID under a specified instance, primarily updating the skill group\\"s display name and description.
   * 
   * @param request - ModifySkillGroupRequest
   * @returns ModifySkillGroupResponse
   */
  async modifySkillGroup(request: $_model.ModifySkillGroupRequest): Promise<$_model.ModifySkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySkillGroupWithOptions(request, runtime);
  }

  /**
   * Modify the skill level of a specified agent in one or more skill groups under a specified instance.
   * 
   * @param request - ModifySkillLevelsOfUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySkillLevelsOfUserResponse
   */
  async modifySkillLevelsOfUserWithOptions(request: $_model.ModifySkillLevelsOfUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySkillLevelsOfUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.skillLevelList)) {
      query["SkillLevelList"] = request.skillLevelList;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySkillLevelsOfUser",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySkillLevelsOfUserResponse>(await this.callApi(params, req, runtime), new $_model.ModifySkillLevelsOfUserResponse({}));
  }

  /**
   * Modify the skill level of a specified agent in one or more skill groups under a specified instance.
   * 
   * @param request - ModifySkillLevelsOfUserRequest
   * @returns ModifySkillLevelsOfUserResponse
   */
  async modifySkillLevelsOfUser(request: $_model.ModifySkillLevelsOfUserRequest): Promise<$_model.ModifySkillLevelsOfUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySkillLevelsOfUserWithOptions(request, runtime);
  }

  /**
   * You can invoke ModifyUser to modify the information of a specified agent under a specified instance. You can modify the phone number, work mode, role, and agent ID.
   * 
   * @param request - ModifyUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyUserResponse
   */
  async modifyUserWithOptions(request: $_model.ModifyUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.avatarUrl)) {
      query["AvatarUrl"] = request.avatarUrl;
    }

    if (!$dara.isNull(request.displayId)) {
      query["DisplayId"] = request.displayId;
    }

    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.nickname)) {
      query["Nickname"] = request.nickname;
    }

    if (!$dara.isNull(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.workMode)) {
      query["WorkMode"] = request.workMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyUser",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyUserResponse>(await this.callApi(params, req, runtime), new $_model.ModifyUserResponse({}));
  }

  /**
   * You can invoke ModifyUser to modify the information of a specified agent under a specified instance. You can modify the phone number, work mode, role, and agent ID.
   * 
   * @param request - ModifyUserRequest
   * @returns ModifyUserResponse
   */
  async modifyUser(request: $_model.ModifyUserRequest): Promise<$_model.ModifyUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyUserWithOptions(request, runtime);
  }

  /**
   * You can invoke ModifyUserLevelsOfSkillGroup to modify the skill levels of one or more agents under a specified skill group in a specified instance.
   * 
   * @param request - ModifyUserLevelsOfSkillGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyUserLevelsOfSkillGroupResponse
   */
  async modifyUserLevelsOfSkillGroupWithOptions(request: $_model.ModifyUserLevelsOfSkillGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyUserLevelsOfSkillGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    if (!$dara.isNull(request.userLevelList)) {
      query["UserLevelList"] = request.userLevelList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyUserLevelsOfSkillGroup",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyUserLevelsOfSkillGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyUserLevelsOfSkillGroupResponse({}));
  }

  /**
   * You can invoke ModifyUserLevelsOfSkillGroup to modify the skill levels of one or more agents under a specified skill group in a specified instance.
   * 
   * @param request - ModifyUserLevelsOfSkillGroupRequest
   * @returns ModifyUserLevelsOfSkillGroupResponse
   */
  async modifyUserLevelsOfSkillGroup(request: $_model.ModifyUserLevelsOfSkillGroupRequest): Promise<$_model.ModifyUserLevelsOfSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyUserLevelsOfSkillGroupWithOptions(request, runtime);
  }

  /**
   * You can invoke MonitorCall to listen to a call associated with a specified call ID under a specified instance. The call must be in a state where both the agent and the customer are normally connected, and the agent initiating the listening must have permission to monitor the target agent.
   * 
   * @param request - MonitorCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MonitorCallResponse
   */
  async monitorCallWithOptions(request: $_model.MonitorCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MonitorCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.monitoredUserId)) {
      query["MonitoredUserId"] = request.monitoredUserId;
    }

    if (!$dara.isNull(request.timeoutSeconds)) {
      query["TimeoutSeconds"] = request.timeoutSeconds;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MonitorCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MonitorCallResponse>(await this.callApi(params, req, runtime), new $_model.MonitorCallResponse({}));
  }

  /**
   * You can invoke MonitorCall to listen to a call associated with a specified call ID under a specified instance. The call must be in a state where both the agent and the customer are normally connected, and the agent initiating the listening must have permission to monitor the target agent.
   * 
   * @param request - MonitorCallRequest
   * @returns MonitorCallResponse
   */
  async monitorCall(request: $_model.MonitorCallRequest): Promise<$_model.MonitorCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.monitorCallWithOptions(request, runtime);
  }

  /**
   * You can invoke MuteCall to mute the call associated with a specified call ID under a specified instance. This operation can only be invoked by an agent who is in a talking state, and the agent can only mute themselves. After the agent mutes themselves, the customer will no longer hear the agent\\"s voice.
   * 
   * @param request - MuteCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MuteCallResponse
   */
  async muteCallWithOptions(request: $_model.MuteCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MuteCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MuteCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MuteCallResponse>(await this.callApi(params, req, runtime), new $_model.MuteCallResponse({}));
  }

  /**
   * You can invoke MuteCall to mute the call associated with a specified call ID under a specified instance. This operation can only be invoked by an agent who is in a talking state, and the agent can only mute themselves. After the agent mutes themselves, the customer will no longer hear the agent\\"s voice.
   * 
   * @param request - MuteCallRequest
   * @returns MuteCallResponse
   */
  async muteCall(request: $_model.MuteCallRequest): Promise<$_model.MuteCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.muteCallWithOptions(request, runtime);
  }

  /**
   * Invoke PauseCampaign to pause the predictive outbound calling Activity corresponding to the specified ID under the specified instance.
   * 
   * @param request - PauseCampaignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PauseCampaignResponse
   */
  async pauseCampaignWithOptions(request: $_model.PauseCampaignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PauseCampaignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PauseCampaign",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PauseCampaignResponse>(await this.callApi(params, req, runtime), new $_model.PauseCampaignResponse({}));
  }

  /**
   * Invoke PauseCampaign to pause the predictive outbound calling Activity corresponding to the specified ID under the specified instance.
   * 
   * @param request - PauseCampaignRequest
   * @returns PauseCampaignResponse
   */
  async pauseCampaign(request: $_model.PauseCampaignRequest): Promise<$_model.PauseCampaignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pauseCampaignWithOptions(request, runtime);
  }

  /**
   * You can invoke PickOutboundNumbers to select an appropriate caller number based on the provided callee number. The number selection logic is controlled by an Intelligent algorithm.
   * 
   * @param request - PickOutboundNumbersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PickOutboundNumbersResponse
   */
  async pickOutboundNumbersWithOptions(request: $_model.PickOutboundNumbersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PickOutboundNumbersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.count)) {
      query["Count"] = request.count;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.skillGroupIdList)) {
      query["SkillGroupIdList"] = request.skillGroupIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PickOutboundNumbers",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PickOutboundNumbersResponse>(await this.callApi(params, req, runtime), new $_model.PickOutboundNumbersResponse({}));
  }

  /**
   * You can invoke PickOutboundNumbers to select an appropriate caller number based on the provided callee number. The number selection logic is controlled by an Intelligent algorithm.
   * 
   * @param request - PickOutboundNumbersRequest
   * @returns PickOutboundNumbersResponse
   */
  async pickOutboundNumbers(request: $_model.PickOutboundNumbersRequest): Promise<$_model.PickOutboundNumbersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pickOutboundNumbersWithOptions(request, runtime);
  }

  /**
   * Polls the agent status of a specified agent under a specified instance. This operation is typically invoked by the frontend agent Workbench to synchronize agent status.
   * 
   * @param request - PollUserStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PollUserStatusResponse
   */
  async pollUserStatusWithOptions(request: $_model.PollUserStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PollUserStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PollUserStatus",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PollUserStatusResponse>(await this.callApi(params, req, runtime), new $_model.PollUserStatusResponse({}));
  }

  /**
   * Polls the agent status of a specified agent under a specified instance. This operation is typically invoked by the frontend agent Workbench to synchronize agent status.
   * 
   * @param request - PollUserStatusRequest
   * @returns PollUserStatusResponse
   */
  async pollUserStatus(request: $_model.PollUserStatusRequest): Promise<$_model.PollUserStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pollUserStatusWithOptions(request, runtime);
  }

  /**
   * ProcessAliMeCallbackOfStaging
   * 
   * @param request - ProcessAliMeCallbackOfStagingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ProcessAliMeCallbackOfStagingResponse
   */
  async processAliMeCallbackOfStagingWithOptions(request: $_model.ProcessAliMeCallbackOfStagingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ProcessAliMeCallbackOfStagingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.data)) {
      query["Data"] = request.data;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ProcessAliMeCallbackOfStaging",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ProcessAliMeCallbackOfStagingResponse>(await this.callApi(params, req, runtime), new $_model.ProcessAliMeCallbackOfStagingResponse({}));
  }

  /**
   * ProcessAliMeCallbackOfStaging
   * 
   * @param request - ProcessAliMeCallbackOfStagingRequest
   * @returns ProcessAliMeCallbackOfStagingResponse
   */
  async processAliMeCallbackOfStaging(request: $_model.ProcessAliMeCallbackOfStagingRequest): Promise<$_model.ProcessAliMeCallbackOfStagingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.processAliMeCallbackOfStagingWithOptions(request, runtime);
  }

  /**
   * @param request - ProcessCustomIMCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ProcessCustomIMCallbackResponse
   */
  async processCustomIMCallbackWithOptions(request: $_model.ProcessCustomIMCallbackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ProcessCustomIMCallbackResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessChannelId)) {
      body["AccessChannelId"] = request.accessChannelId;
    }

    if (!$dara.isNull(request.conversationId)) {
      body["ConversationId"] = request.conversationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.messageContent)) {
      body["MessageContent"] = request.messageContent;
    }

    if (!$dara.isNull(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.senderAvatarMediaId)) {
      body["SenderAvatarMediaId"] = request.senderAvatarMediaId;
    }

    if (!$dara.isNull(request.senderId)) {
      body["SenderId"] = request.senderId;
    }

    if (!$dara.isNull(request.senderName)) {
      body["SenderName"] = request.senderName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ProcessCustomIMCallback",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ProcessCustomIMCallbackResponse>(await this.callApi(params, req, runtime), new $_model.ProcessCustomIMCallbackResponse({}));
  }

  /**
   * @param request - ProcessCustomIMCallbackRequest
   * @returns ProcessCustomIMCallbackResponse
   */
  async processCustomIMCallback(request: $_model.ProcessCustomIMCallbackRequest): Promise<$_model.ProcessCustomIMCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.processCustomIMCallbackWithOptions(request, runtime);
  }

  /**
   * Publishes a contact flow.
   * 
   * @param request - PublishContactFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishContactFlowResponse
   */
  async publishContactFlowWithOptions(request: $_model.PublishContactFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishContactFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactFlowId)) {
      query["ContactFlowId"] = request.contactFlowId;
    }

    if (!$dara.isNull(request.draftId)) {
      query["DraftId"] = request.draftId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishContactFlow",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishContactFlowResponse>(await this.callApi(params, req, runtime), new $_model.PublishContactFlowResponse({}));
  }

  /**
   * Publishes a contact flow.
   * 
   * @param request - PublishContactFlowRequest
   * @returns PublishContactFlowResponse
   */
  async publishContactFlow(request: $_model.PublishContactFlowRequest): Promise<$_model.PublishContactFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishContactFlowWithOptions(request, runtime);
  }

  /**
   * You can invoke ReadyForService to make a specified agent under a specified instance ready. After becoming ready, the agent enters the idle status.
   * 
   * @param request - ReadyForServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReadyForServiceResponse
   */
  async readyForServiceWithOptions(request: $_model.ReadyForServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReadyForServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.outboundScenario)) {
      query["OutboundScenario"] = request.outboundScenario;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReadyForService",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReadyForServiceResponse>(await this.callApi(params, req, runtime), new $_model.ReadyForServiceResponse({}));
  }

  /**
   * You can invoke ReadyForService to make a specified agent under a specified instance ready. After becoming ready, the agent enters the idle status.
   * 
   * @param request - ReadyForServiceRequest
   * @returns ReadyForServiceResponse
   */
  async readyForService(request: $_model.ReadyForServiceRequest): Promise<$_model.ReadyForServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readyForServiceWithOptions(request, runtime);
  }

  /**
   * Redial the number in the desensitized call record
   * 
   * @param request - RedialCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RedialCallResponse
   */
  async redialCallWithOptions(request: $_model.RedialCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RedialCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callee)) {
      query["Callee"] = request.callee;
    }

    if (!$dara.isNull(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.timeoutSeconds)) {
      query["TimeoutSeconds"] = request.timeoutSeconds;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RedialCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RedialCallResponse>(await this.callApi(params, req, runtime), new $_model.RedialCallResponse({}));
  }

  /**
   * Redial the number in the desensitized call record
   * 
   * @param request - RedialCallRequest
   * @returns RedialCallResponse
   */
  async redialCall(request: $_model.RedialCallRequest): Promise<$_model.RedialCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.redialCallWithOptions(request, runtime);
  }

  /**
   * Registers a Session Initiation Protocol (SIP) device with a specified agent in an instance. A SIP device can be a physical SIP phone or a softphone.
   * 
   * @param request - RegisterDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterDeviceResponse
   */
  async registerDeviceWithOptions(request: $_model.RegisterDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RegisterDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterDevice",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RegisterDeviceResponse>(await this.callApi(params, req, runtime), new $_model.RegisterDeviceResponse({}));
  }

  /**
   * Registers a Session Initiation Protocol (SIP) device with a specified agent in an instance. A SIP device can be a physical SIP phone or a softphone.
   * 
   * @param request - RegisterDeviceRequest
   * @returns RegisterDeviceResponse
   */
  async registerDevice(request: $_model.RegisterDeviceRequest): Promise<$_model.RegisterDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerDeviceWithOptions(request, runtime);
  }

  /**
   * Registers one or more SIP devices to specified agents in an instance. A SIP device can be a SIP phone or a SIP softphone.
   * 
   * @param request - RegisterDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterDevicesResponse
   */
  async registerDevicesWithOptions(request: $_model.RegisterDevicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RegisterDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.userIdListJson)) {
      query["UserIdListJson"] = request.userIdListJson;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterDevices",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RegisterDevicesResponse>(await this.callApi(params, req, runtime), new $_model.RegisterDevicesResponse({}));
  }

  /**
   * Registers one or more SIP devices to specified agents in an instance. A SIP device can be a SIP phone or a SIP softphone.
   * 
   * @param request - RegisterDevicesRequest
   * @returns RegisterDevicesResponse
   */
  async registerDevices(request: $_model.RegisterDevicesRequest): Promise<$_model.RegisterDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerDevicesWithOptions(request, runtime);
  }

  /**
   * Rejects a chat assigned to an agent.
   * 
   * @param request - RejectChatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RejectChatResponse
   */
  async rejectChatWithOptions(request: $_model.RejectChatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RejectChatResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RejectChat",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RejectChatResponse>(await this.callApi(params, req, runtime), new $_model.RejectChatResponse({}));
  }

  /**
   * Rejects a chat assigned to an agent.
   * 
   * @param request - RejectChatRequest
   * @returns RejectChatResponse
   */
  async rejectChat(request: $_model.RejectChatRequest): Promise<$_model.RejectChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rejectChatWithOptions(request, runtime);
  }

  /**
   * Use the RejectTicket operation to reject a ticket. The ticket creator can add information to a rejected ticket and then resubmit it.
   * 
   * @param request - RejectTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RejectTicketResponse
   */
  async rejectTicketWithOptions(request: $_model.RejectTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RejectTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ticketId)) {
      query["TicketId"] = request.ticketId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RejectTicket",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RejectTicketResponse>(await this.callApi(params, req, runtime), new $_model.RejectTicketResponse({}));
  }

  /**
   * Use the RejectTicket operation to reject a ticket. The ticket creator can add information to a rejected ticket and then resubmit it.
   * 
   * @param request - RejectTicketRequest
   * @returns RejectTicketResponse
   */
  async rejectTicket(request: $_model.RejectTicketRequest): Promise<$_model.RejectTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rejectTicketWithOptions(request, runtime);
  }

  /**
   * You can invoke ReleaseCall to hang up the call associated with a specified call ID under a specified instance. The invoker must be an agent and currently in a call.
   * 
   * @param request - ReleaseCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseCallResponse
   */
  async releaseCallWithOptions(request: $_model.ReleaseCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseCallResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseCallResponse({}));
  }

  /**
   * You can invoke ReleaseCall to hang up the call associated with a specified call ID under a specified instance. The invoker must be an agent and currently in a call.
   * 
   * @param request - ReleaseCallRequest
   * @returns ReleaseCallResponse
   */
  async releaseCall(request: $_model.ReleaseCallRequest): Promise<$_model.ReleaseCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseCallWithOptions(request, runtime);
  }

  /**
   * The ReleaseChat operation ends the current chat.
   * 
   * @param request - ReleaseChatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseChatResponse
   */
  async releaseChatWithOptions(request: $_model.ReleaseChatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseChatResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseChat",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseChatResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseChatResponse({}));
  }

  /**
   * The ReleaseChat operation ends the current chat.
   * 
   * @param request - ReleaseChatRequest
   * @returns ReleaseChatResponse
   */
  async releaseChat(request: $_model.ReleaseChatRequest): Promise<$_model.ReleaseChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseChatWithOptions(request, runtime);
  }

  /**
   * Removes the blacklist tag from a specified phone number.
   * 
   * @param request - RemoveBlacklistCallTaggingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveBlacklistCallTaggingResponse
   */
  async removeBlacklistCallTaggingWithOptions(request: $_model.RemoveBlacklistCallTaggingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveBlacklistCallTaggingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.number)) {
      query["Number"] = request.number;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveBlacklistCallTagging",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveBlacklistCallTaggingResponse>(await this.callApi(params, req, runtime), new $_model.RemoveBlacklistCallTaggingResponse({}));
  }

  /**
   * Removes the blacklist tag from a specified phone number.
   * 
   * @param request - RemoveBlacklistCallTaggingRequest
   * @returns RemoveBlacklistCallTaggingResponse
   */
  async removeBlacklistCallTagging(request: $_model.RemoveBlacklistCallTaggingRequest): Promise<$_model.RemoveBlacklistCallTaggingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeBlacklistCallTaggingWithOptions(request, runtime);
  }

  /**
   * You can invoke RemoveDoNotCallNumbers to delete one or more Do Not Call number configuration items under a specified instance.
   * 
   * @param request - RemoveDoNotCallNumbersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveDoNotCallNumbersResponse
   */
  async removeDoNotCallNumbersWithOptions(request: $_model.RemoveDoNotCallNumbersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveDoNotCallNumbersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.numberList)) {
      query["NumberList"] = request.numberList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveDoNotCallNumbers",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveDoNotCallNumbersResponse>(await this.callApi(params, req, runtime), new $_model.RemoveDoNotCallNumbersResponse({}));
  }

  /**
   * You can invoke RemoveDoNotCallNumbers to delete one or more Do Not Call number configuration items under a specified instance.
   * 
   * @param request - RemoveDoNotCallNumbersRequest
   * @returns RemoveDoNotCallNumbersResponse
   */
  async removeDoNotCallNumbers(request: $_model.RemoveDoNotCallNumbersRequest): Promise<$_model.RemoveDoNotCallNumbersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeDoNotCallNumbersWithOptions(request, runtime);
  }

  /**
   * You can invoke RemovePersonalNumbersFromUser to delete one or more personal outbound numbers associated with a specified agent under a specified instance.
   * 
   * @param request - RemovePersonalNumbersFromUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemovePersonalNumbersFromUserResponse
   */
  async removePersonalNumbersFromUserWithOptions(request: $_model.RemovePersonalNumbersFromUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemovePersonalNumbersFromUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.numberList)) {
      query["NumberList"] = request.numberList;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemovePersonalNumbersFromUser",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemovePersonalNumbersFromUserResponse>(await this.callApi(params, req, runtime), new $_model.RemovePersonalNumbersFromUserResponse({}));
  }

  /**
   * You can invoke RemovePersonalNumbersFromUser to delete one or more personal outbound numbers associated with a specified agent under a specified instance.
   * 
   * @param request - RemovePersonalNumbersFromUserRequest
   * @returns RemovePersonalNumbersFromUserResponse
   */
  async removePersonalNumbersFromUser(request: $_model.RemovePersonalNumbersFromUserRequest): Promise<$_model.RemovePersonalNumbersFromUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removePersonalNumbersFromUserWithOptions(request, runtime);
  }

  /**
   * You can invoke RemovePhoneNumberFromSkillGroups to delete the binding relationship between a specified phone number and one or more skill groups under a given instance. This operation removes only the association between the phone number and the skill groups, not the actual phone number itself.
   * 
   * @param request - RemovePhoneNumberFromSkillGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemovePhoneNumberFromSkillGroupsResponse
   */
  async removePhoneNumberFromSkillGroupsWithOptions(request: $_model.RemovePhoneNumberFromSkillGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemovePhoneNumberFromSkillGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.number)) {
      query["Number"] = request.number;
    }

    if (!$dara.isNull(request.skillGroupIdList)) {
      query["SkillGroupIdList"] = request.skillGroupIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemovePhoneNumberFromSkillGroups",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemovePhoneNumberFromSkillGroupsResponse>(await this.callApi(params, req, runtime), new $_model.RemovePhoneNumberFromSkillGroupsResponse({}));
  }

  /**
   * You can invoke RemovePhoneNumberFromSkillGroups to delete the binding relationship between a specified phone number and one or more skill groups under a given instance. This operation removes only the association between the phone number and the skill groups, not the actual phone number itself.
   * 
   * @param request - RemovePhoneNumberFromSkillGroupsRequest
   * @returns RemovePhoneNumberFromSkillGroupsResponse
   */
  async removePhoneNumberFromSkillGroups(request: $_model.RemovePhoneNumberFromSkillGroupsRequest): Promise<$_model.RemovePhoneNumberFromSkillGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removePhoneNumberFromSkillGroupsWithOptions(request, runtime);
  }

  /**
   * Removes one or more numbers from an instance. This action disassociates the numbers from the instance but does not permanently delete them. It also disassociates all associated resources, such as skill groups, contact flows, and agents.
   * 
   * @param request - RemovePhoneNumbersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemovePhoneNumbersResponse
   */
  async removePhoneNumbersWithOptions(request: $_model.RemovePhoneNumbersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemovePhoneNumbersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.numberList)) {
      query["NumberList"] = request.numberList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemovePhoneNumbers",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemovePhoneNumbersResponse>(await this.callApi(params, req, runtime), new $_model.RemovePhoneNumbersResponse({}));
  }

  /**
   * Removes one or more numbers from an instance. This action disassociates the numbers from the instance but does not permanently delete them. It also disassociates all associated resources, such as skill groups, contact flows, and agents.
   * 
   * @param request - RemovePhoneNumbersRequest
   * @returns RemovePhoneNumbersResponse
   */
  async removePhoneNumbers(request: $_model.RemovePhoneNumbersRequest): Promise<$_model.RemovePhoneNumbersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removePhoneNumbersWithOptions(request, runtime);
  }

  /**
   * You can invoke RemovePhoneNumbersFromSkillGroup to delete the association between one or more phone numbers and a specified skill group under a given instance.
   * 
   * @param request - RemovePhoneNumbersFromSkillGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemovePhoneNumbersFromSkillGroupResponse
   */
  async removePhoneNumbersFromSkillGroupWithOptions(request: $_model.RemovePhoneNumbersFromSkillGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemovePhoneNumbersFromSkillGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.numberList)) {
      query["NumberList"] = request.numberList;
    }

    if (!$dara.isNull(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemovePhoneNumbersFromSkillGroup",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemovePhoneNumbersFromSkillGroupResponse>(await this.callApi(params, req, runtime), new $_model.RemovePhoneNumbersFromSkillGroupResponse({}));
  }

  /**
   * You can invoke RemovePhoneNumbersFromSkillGroup to delete the association between one or more phone numbers and a specified skill group under a given instance.
   * 
   * @param request - RemovePhoneNumbersFromSkillGroupRequest
   * @returns RemovePhoneNumbersFromSkillGroupResponse
   */
  async removePhoneNumbersFromSkillGroup(request: $_model.RemovePhoneNumbersFromSkillGroupRequest): Promise<$_model.RemovePhoneNumbersFromSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removePhoneNumbersFromSkillGroupWithOptions(request, runtime);
  }

  /**
   * You can invoke RemoveSkillGroupsFromUser to delete the association between one or more skill groups and a specified agent under a specified instance.
   * 
   * @param request - RemoveSkillGroupsFromUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveSkillGroupsFromUserResponse
   */
  async removeSkillGroupsFromUserWithOptions(request: $_model.RemoveSkillGroupsFromUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveSkillGroupsFromUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.skillGroupIdList)) {
      query["SkillGroupIdList"] = request.skillGroupIdList;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveSkillGroupsFromUser",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveSkillGroupsFromUserResponse>(await this.callApi(params, req, runtime), new $_model.RemoveSkillGroupsFromUserResponse({}));
  }

  /**
   * You can invoke RemoveSkillGroupsFromUser to delete the association between one or more skill groups and a specified agent under a specified instance.
   * 
   * @param request - RemoveSkillGroupsFromUserRequest
   * @returns RemoveSkillGroupsFromUserResponse
   */
  async removeSkillGroupsFromUser(request: $_model.RemoveSkillGroupsFromUserRequest): Promise<$_model.RemoveSkillGroupsFromUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeSkillGroupsFromUserWithOptions(request, runtime);
  }

  /**
   * You can invoke RemoveUsers to delete one or more agents from a specified instance. This operation only detaches the RAM accounts from the instance and removes the agents mapped to those RAM accounts from the instance. It does not delete the RAM accounts themselves.
   * 
   * @param request - RemoveUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUsersResponse
   */
  async removeUsersWithOptions(request: $_model.RemoveUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.notificationEmail)) {
      query["NotificationEmail"] = request.notificationEmail;
    }

    if (!$dara.isNull(request.userIdList)) {
      query["UserIdList"] = request.userIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveUsers",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveUsersResponse>(await this.callApi(params, req, runtime), new $_model.RemoveUsersResponse({}));
  }

  /**
   * You can invoke RemoveUsers to delete one or more agents from a specified instance. This operation only detaches the RAM accounts from the instance and removes the agents mapped to those RAM accounts from the instance. It does not delete the RAM accounts themselves.
   * 
   * @param request - RemoveUsersRequest
   * @returns RemoveUsersResponse
   */
  async removeUsers(request: $_model.RemoveUsersRequest): Promise<$_model.RemoveUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeUsersWithOptions(request, runtime);
  }

  /**
   * You can invoke RemoveUsersFromSkillGroup to delete the association between one or more agents and a specified skill group under a specified instance. This operation only removes the association between the skill group and the agents and does not delete the agents themselves.
   * 
   * @param request - RemoveUsersFromSkillGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUsersFromSkillGroupResponse
   */
  async removeUsersFromSkillGroupWithOptions(request: $_model.RemoveUsersFromSkillGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveUsersFromSkillGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    if (!$dara.isNull(request.userIdList)) {
      query["UserIdList"] = request.userIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveUsersFromSkillGroup",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveUsersFromSkillGroupResponse>(await this.callApi(params, req, runtime), new $_model.RemoveUsersFromSkillGroupResponse({}));
  }

  /**
   * You can invoke RemoveUsersFromSkillGroup to delete the association between one or more agents and a specified skill group under a specified instance. This operation only removes the association between the skill group and the agents and does not delete the agents themselves.
   * 
   * @param request - RemoveUsersFromSkillGroupRequest
   * @returns RemoveUsersFromSkillGroupResponse
   */
  async removeUsersFromSkillGroup(request: $_model.RemoveUsersFromSkillGroupRequest): Promise<$_model.RemoveUsersFromSkillGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeUsersFromSkillGroupWithOptions(request, runtime);
  }

  /**
   * Resets the state of a specific agent in a specific instance.
   * 
   * @param request - ResetAgentStateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetAgentStateResponse
   */
  async resetAgentStateWithOptions(request: $_model.ResetAgentStateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetAgentStateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetAgentState",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetAgentStateResponse>(await this.callApi(params, req, runtime), new $_model.ResetAgentStateResponse({}));
  }

  /**
   * Resets the state of a specific agent in a specific instance.
   * 
   * @param request - ResetAgentStateRequest
   * @returns ResetAgentStateResponse
   */
  async resetAgentState(request: $_model.ResetAgentStateRequest): Promise<$_model.ResetAgentStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetAgentStateWithOptions(request, runtime);
  }

  /**
   * Invoke ResetUserPassword to reset the logon password of a specified agent under a specified instance. In practice, agents do not have logon passwords; this operation actually modifies the logon password of the RAM account associated with the agent. This is typically used in scenarios where a customer service representative forgets the logon password of their RAM account.
   * 
   * @param request - ResetUserPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetUserPasswordResponse
   */
  async resetUserPasswordWithOptions(request: $_model.ResetUserPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetUserPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetUserPassword",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetUserPasswordResponse>(await this.callApi(params, req, runtime), new $_model.ResetUserPasswordResponse({}));
  }

  /**
   * Invoke ResetUserPassword to reset the logon password of a specified agent under a specified instance. In practice, agents do not have logon passwords; this operation actually modifies the logon password of the RAM account associated with the agent. This is typically used in scenarios where a customer service representative forgets the logon password of their RAM account.
   * 
   * @param request - ResetUserPasswordRequest
   * @returns ResetUserPasswordResponse
   */
  async resetUserPassword(request: $_model.ResetUserPasswordRequest): Promise<$_model.ResetUserPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetUserPasswordWithOptions(request, runtime);
  }

  /**
   * Restores call recordings for the specified instance.
   * 
   * @param request - RestoreArchivedRecordingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestoreArchivedRecordingsResponse
   */
  async restoreArchivedRecordingsWithOptions(request: $_model.RestoreArchivedRecordingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestoreArchivedRecordingsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactIds)) {
      query["ContactIds"] = request.contactIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestoreArchivedRecordings",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestoreArchivedRecordingsResponse>(await this.callApi(params, req, runtime), new $_model.RestoreArchivedRecordingsResponse({}));
  }

  /**
   * Restores call recordings for the specified instance.
   * 
   * @param request - RestoreArchivedRecordingsRequest
   * @returns RestoreArchivedRecordingsResponse
   */
  async restoreArchivedRecordings(request: $_model.RestoreArchivedRecordingsRequest): Promise<$_model.RestoreArchivedRecordingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restoreArchivedRecordingsWithOptions(request, runtime);
  }

  /**
   * You can use the ResubmitTicket API to resubmit a rejected or returned ticket.
   * 
   * @param request - ResubmitTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResubmitTicketResponse
   */
  async resubmitTicketWithOptions(request: $_model.ResubmitTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResubmitTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ticketId)) {
      query["TicketId"] = request.ticketId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResubmitTicket",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResubmitTicketResponse>(await this.callApi(params, req, runtime), new $_model.ResubmitTicketResponse({}));
  }

  /**
   * You can use the ResubmitTicket API to resubmit a rejected or returned ticket.
   * 
   * @param request - ResubmitTicketRequest
   * @returns ResubmitTicketResponse
   */
  async resubmitTicket(request: $_model.ResubmitTicketRequest): Promise<$_model.ResubmitTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resubmitTicketWithOptions(request, runtime);
  }

  /**
   * Invoke ResumeCampaign to recover the predictive outbound calling Activity corresponding to the specified ID under the specified instance.
   * 
   * @param request - ResumeCampaignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeCampaignResponse
   */
  async resumeCampaignWithOptions(request: $_model.ResumeCampaignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeCampaignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeCampaign",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeCampaignResponse>(await this.callApi(params, req, runtime), new $_model.ResumeCampaignResponse({}));
  }

  /**
   * Invoke ResumeCampaign to recover the predictive outbound calling Activity corresponding to the specified ID under the specified instance.
   * 
   * @param request - ResumeCampaignRequest
   * @returns ResumeCampaignResponse
   */
  async resumeCampaign(request: $_model.ResumeCampaignRequest): Promise<$_model.ResumeCampaignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resumeCampaignWithOptions(request, runtime);
  }

  /**
   * You can invoke RetrieveCall to retrieve a call associated with a specified call ID under a specified instance. The call must be on hold for the retrieve operation to be performed.
   * 
   * @param request - RetrieveCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetrieveCallResponse
   */
  async retrieveCallWithOptions(request: $_model.RetrieveCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RetrieveCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RetrieveCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RetrieveCallResponse>(await this.callApi(params, req, runtime), new $_model.RetrieveCallResponse({}));
  }

  /**
   * You can invoke RetrieveCall to retrieve a call associated with a specified call ID under a specified instance. The call must be on hold for the retrieve operation to be performed.
   * 
   * @param request - RetrieveCallRequest
   * @returns RetrieveCallResponse
   */
  async retrieveCall(request: $_model.RetrieveCallRequest): Promise<$_model.RetrieveCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.retrieveCallWithOptions(request, runtime);
  }

  /**
   * @param request - SaveDocumentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveDocumentResponse
   */
  async saveDocumentWithOptions(request: $_model.SaveDocumentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveDocumentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.documentId)) {
      body["DocumentId"] = request.documentId;
    }

    if (!$dara.isNull(request.documentJson)) {
      body["DocumentJson"] = request.documentJson;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.schemaId)) {
      body["SchemaId"] = request.schemaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveDocument",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveDocumentResponse>(await this.callApi(params, req, runtime), new $_model.SaveDocumentResponse({}));
  }

  /**
   * @param request - SaveDocumentRequest
   * @returns SaveDocumentResponse
   */
  async saveDocument(request: $_model.SaveDocumentRequest): Promise<$_model.SaveDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveDocumentWithOptions(request, runtime);
  }

  /**
   * Invoke SaveRTCStatsV2 to report Web Real-Time Communication (WebRTC) voice transmission statistics information from the agent side. This API is not relevant for regular customers.
   * 
   * @param request - SaveRTCStatsV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveRTCStatsV2Response
   */
  async saveRTCStatsV2WithOptions(request: $_model.SaveRTCStatsV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.SaveRTCStatsV2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.generalInfo)) {
      query["GeneralInfo"] = request.generalInfo;
    }

    if (!$dara.isNull(request.googAddress)) {
      query["GoogAddress"] = request.googAddress;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.receiverReport)) {
      query["ReceiverReport"] = request.receiverReport;
    }

    if (!$dara.isNull(request.senderReport)) {
      query["SenderReport"] = request.senderReport;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveRTCStatsV2",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveRTCStatsV2Response>(await this.callApi(params, req, runtime), new $_model.SaveRTCStatsV2Response({}));
  }

  /**
   * Invoke SaveRTCStatsV2 to report Web Real-Time Communication (WebRTC) voice transmission statistics information from the agent side. This API is not relevant for regular customers.
   * 
   * @param request - SaveRTCStatsV2Request
   * @returns SaveRTCStatsV2Response
   */
  async saveRTCStatsV2(request: $_model.SaveRTCStatsV2Request): Promise<$_model.SaveRTCStatsV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveRTCStatsV2WithOptions(request, runtime);
  }

  /**
   * Invoke the SaveTerminalLog API to report agent-side log information. Regular customers do not need to be concerned with this API.
   * 
   * @param request - SaveTerminalLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveTerminalLogResponse
   */
  async saveTerminalLogWithOptions(request: $_model.SaveTerminalLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveTerminalLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.methodName)) {
      query["MethodName"] = request.methodName;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.uniqueRequestId)) {
      query["UniqueRequestId"] = request.uniqueRequestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveTerminalLog",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveTerminalLogResponse>(await this.callApi(params, req, runtime), new $_model.SaveTerminalLogResponse({}));
  }

  /**
   * Invoke the SaveTerminalLog API to report agent-side log information. Regular customers do not need to be concerned with this API.
   * 
   * @param request - SaveTerminalLogRequest
   * @returns SaveTerminalLogResponse
   */
  async saveTerminalLog(request: $_model.SaveTerminalLogRequest): Promise<$_model.SaveTerminalLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveTerminalLogWithOptions(request, runtime);
  }

  /**
   * Invoke the SaveWebRTCStats API to report Web Real-Time Communication (WebRTC) voice transmission statistics information from the agent side. Regular customers do not need to concern themselves with this API.
   * 
   * @param request - SaveWebRTCStatsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveWebRTCStatsResponse
   */
  async saveWebRTCStatsWithOptions(request: $_model.SaveWebRTCStatsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveWebRTCStatsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.generalInfo)) {
      query["GeneralInfo"] = request.generalInfo;
    }

    if (!$dara.isNull(request.googAddress)) {
      query["GoogAddress"] = request.googAddress;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.receiverReport)) {
      query["ReceiverReport"] = request.receiverReport;
    }

    if (!$dara.isNull(request.senderReport)) {
      query["SenderReport"] = request.senderReport;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveWebRTCStats",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveWebRTCStatsResponse>(await this.callApi(params, req, runtime), new $_model.SaveWebRTCStatsResponse({}));
  }

  /**
   * Invoke the SaveWebRTCStats API to report Web Real-Time Communication (WebRTC) voice transmission statistics information from the agent side. Regular customers do not need to concern themselves with this API.
   * 
   * @param request - SaveWebRTCStatsRequest
   * @returns SaveWebRTCStatsResponse
   */
  async saveWebRTCStats(request: $_model.SaveWebRTCStatsRequest): Promise<$_model.SaveWebRTCStatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveWebRTCStatsWithOptions(request, runtime);
  }

  /**
   * Invoke the SaveWebRtcInfo API to report WebRTC call status information from the agent side, including call quality monitoring data, for backend statistics and monitoring. Customers do not need to concern themselves with this API.
   * 
   * @param request - SaveWebRtcInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveWebRtcInfoResponse
   */
  async saveWebRtcInfoWithOptions(request: $_model.SaveWebRtcInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveWebRtcInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.contentType)) {
      query["ContentType"] = request.contentType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveWebRtcInfo",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveWebRtcInfoResponse>(await this.callApi(params, req, runtime), new $_model.SaveWebRtcInfoResponse({}));
  }

  /**
   * Invoke the SaveWebRtcInfo API to report WebRTC call status information from the agent side, including call quality monitoring data, for backend statistics and monitoring. Customers do not need to concern themselves with this API.
   * 
   * @param request - SaveWebRtcInfoRequest
   * @returns SaveWebRtcInfoResponse
   */
  async saveWebRtcInfo(request: $_model.SaveWebRtcInfoRequest): Promise<$_model.SaveWebRtcInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveWebRtcInfoWithOptions(request, runtime);
  }

  /**
   * You can invoke SendDtmfSignaling to send DTMF keypress information during a call.
   * 
   * @param request - SendDtmfSignalingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendDtmfSignalingResponse
   */
  async sendDtmfSignalingWithOptions(request: $_model.SendDtmfSignalingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendDtmfSignalingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.dtmf)) {
      query["Dtmf"] = request.dtmf;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendDtmfSignaling",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendDtmfSignalingResponse>(await this.callApi(params, req, runtime), new $_model.SendDtmfSignalingResponse({}));
  }

  /**
   * You can invoke SendDtmfSignaling to send DTMF keypress information during a call.
   * 
   * @param request - SendDtmfSignalingRequest
   * @returns SendDtmfSignalingResponse
   */
  async sendDtmfSignaling(request: $_model.SendDtmfSignalingRequest): Promise<$_model.SendDtmfSignalingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendDtmfSignalingWithOptions(request, runtime);
  }

  /**
   * 推送消息
   * 
   * @param request - SendNotificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendNotificationResponse
   */
  async sendNotificationWithOptions(request: $_model.SendNotificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendNotificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.messageBody)) {
      query["MessageBody"] = request.messageBody;
    }

    if (!$dara.isNull(request.notificationTarget)) {
      query["NotificationTarget"] = request.notificationTarget;
    }

    if (!$dara.isNull(request.notificationType)) {
      query["NotificationType"] = request.notificationType;
    }

    if (!$dara.isNull(request.shardingKey)) {
      query["ShardingKey"] = request.shardingKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendNotification",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendNotificationResponse>(await this.callApi(params, req, runtime), new $_model.SendNotificationResponse({}));
  }

  /**
   * 推送消息
   * 
   * @param request - SendNotificationRequest
   * @returns SendNotificationResponse
   */
  async sendNotification(request: $_model.SendNotificationRequest): Promise<$_model.SendNotificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendNotificationWithOptions(request, runtime);
  }

  /**
   * You can invoke SignInGroup to sign an agent into a specified skill group under a specified instance, which is the operation for publishing the agent online.
   * 
   * @param request - SignInGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SignInGroupResponse
   */
  async signInGroupWithOptions(request: $_model.SignInGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SignInGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.additivity)) {
      query["Additivity"] = request.additivity;
    }

    if (!$dara.isNull(request.chatDeviceId)) {
      query["ChatDeviceId"] = request.chatDeviceId;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.signedSkillGroupIdList)) {
      query["SignedSkillGroupIdList"] = request.signedSkillGroupIdList;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SignInGroup",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SignInGroupResponse>(await this.callApi(params, req, runtime), new $_model.SignInGroupResponse({}));
  }

  /**
   * You can invoke SignInGroup to sign an agent into a specified skill group under a specified instance, which is the operation for publishing the agent online.
   * 
   * @param request - SignInGroupRequest
   * @returns SignInGroupResponse
   */
  async signInGroup(request: $_model.SignInGroupRequest): Promise<$_model.SignInGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.signInGroupWithOptions(request, runtime);
  }

  /**
   * You can call SignOutGroup to check out an agent from the skill group they are currently signed into, which is equivalent to performing an unpublish operation for the agent.
   * 
   * @param request - SignOutGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SignOutGroupResponse
   */
  async signOutGroupWithOptions(request: $_model.SignOutGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SignOutGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SignOutGroup",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SignOutGroupResponse>(await this.callApi(params, req, runtime), new $_model.SignOutGroupResponse({}));
  }

  /**
   * You can call SignOutGroup to check out an agent from the skill group they are currently signed into, which is equivalent to performing an unpublish operation for the agent.
   * 
   * @param request - SignOutGroupRequest
   * @returns SignOutGroupResponse
   */
  async signOutGroup(request: $_model.SignOutGroupRequest): Promise<$_model.SignOutGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.signOutGroupWithOptions(request, runtime);
  }

  /**
   * You can invoke StartBack2BackCall to initiate a back-to-back call.
   * 
   * @remarks
   * A back-to-back call differs from a traditional two-party call in that the caller does not directly call the callee. Instead, a Back-to-Back Agent is used. The Back-to-Back Agent first calls the caller, and after the connection is established, it calls the callee and then joins both parties into a single conference. In this mode, because all message streams of each call pass through the Back-to-Back Agent, the service provider (SP) can offer value-added services such as call timing, call recording, and number masking.
   * 
   * @param request - StartBack2BackCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartBack2BackCallResponse
   */
  async startBack2BackCallWithOptions(request: $_model.StartBack2BackCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartBack2BackCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.additionalBroker)) {
      query["AdditionalBroker"] = request.additionalBroker;
    }

    if (!$dara.isNull(request.broker)) {
      query["Broker"] = request.broker;
    }

    if (!$dara.isNull(request.callee)) {
      query["Callee"] = request.callee;
    }

    if (!$dara.isNull(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.timeoutSeconds)) {
      query["TimeoutSeconds"] = request.timeoutSeconds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartBack2BackCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartBack2BackCallResponse>(await this.callApi(params, req, runtime), new $_model.StartBack2BackCallResponse({}));
  }

  /**
   * You can invoke StartBack2BackCall to initiate a back-to-back call.
   * 
   * @remarks
   * A back-to-back call differs from a traditional two-party call in that the caller does not directly call the callee. Instead, a Back-to-Back Agent is used. The Back-to-Back Agent first calls the caller, and after the connection is established, it calls the callee and then joins both parties into a single conference. In this mode, because all message streams of each call pass through the Back-to-Back Agent, the service provider (SP) can offer value-added services such as call timing, call recording, and number masking.
   * 
   * @param request - StartBack2BackCallRequest
   * @returns StartBack2BackCallResponse
   */
  async startBack2BackCall(request: $_model.StartBack2BackCallRequest): Promise<$_model.StartBack2BackCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startBack2BackCallWithOptions(request, runtime);
  }

  /**
   * Starts a chat session.
   * 
   * @param tmpReq - StartChatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartChatResponse
   */
  async startChatWithOptions(tmpReq: $_model.StartChatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartChatResponse> {
    tmpReq.validate();
    let request = new $_model.StartChatShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userList)) {
      request.userListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userList, "UserList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.accessChannelId)) {
      query["AccessChannelId"] = request.accessChannelId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    if (!$dara.isNull(request.userListShrink)) {
      query["UserList"] = request.userListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartChat",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartChatResponse>(await this.callApi(params, req, runtime), new $_model.StartChatResponse({}));
  }

  /**
   * Starts a chat session.
   * 
   * @param request - StartChatRequest
   * @returns StartChatResponse
   */
  async startChat(request: $_model.StartChatRequest): Promise<$_model.StartChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startChatWithOptions(request, runtime);
  }

  /**
   * You can invoke StartConference to initiate a conference.
   * 
   * @param request - StartConferenceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartConferenceResponse
   */
  async startConferenceWithOptions(request: $_model.StartConferenceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartConferenceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.participantListJson)) {
      query["ParticipantListJson"] = request.participantListJson;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.timeoutSeconds)) {
      query["TimeoutSeconds"] = request.timeoutSeconds;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartConference",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartConferenceResponse>(await this.callApi(params, req, runtime), new $_model.StartConferenceResponse({}));
  }

  /**
   * You can invoke StartConference to initiate a conference.
   * 
   * @param request - StartConferenceRequest
   * @returns StartConferenceResponse
   */
  async startConference(request: $_model.StartConferenceRequest): Promise<$_model.StartConferenceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startConferenceWithOptions(request, runtime);
  }

  /**
   * Start editing a contact flow and generate a draft version.
   * 
   * @param request - StartEditContactFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartEditContactFlowResponse
   */
  async startEditContactFlowWithOptions(request: $_model.StartEditContactFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartEditContactFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactFlowId)) {
      query["ContactFlowId"] = request.contactFlowId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartEditContactFlow",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartEditContactFlowResponse>(await this.callApi(params, req, runtime), new $_model.StartEditContactFlowResponse({}));
  }

  /**
   * Start editing a contact flow and generate a draft version.
   * 
   * @param request - StartEditContactFlowRequest
   * @returns StartEditContactFlowResponse
   */
  async startEditContactFlow(request: $_model.StartEditContactFlowRequest): Promise<$_model.StartEditContactFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startEditContactFlowWithOptions(request, runtime);
  }

  /**
   * Invoke StartPredictiveCall to initiate predictive outbound calling.
   * 
   * @remarks
   * In addition to supporting agents initiating outbound calls from the agent Workbench, Cloud Call Center also enables your Operational System backend to initiate outbound calls and transfer the call to an agent after it is answered. This allows you to seamlessly embed Cloud Call Center features into your Business Process.
   * For example, your Customer can enter their phone number on your WeChat Official Account and click a button to inquire about a product. Your backend system then invokes this API to call the Customer’s Phone. After the call is connected, the system plays back the message: “We have received your inquiry about our product via the Official Account. We are now connecting you to an advisor. Please wait.” The call is then transferred to an appropriate agent.
   * Compared with the DialEX API in version 1.0, this API offers greater flexibility in configuration. In addition to customizing the IVR for transfer-in, you can also pass custom parameters, which can be played back by voice within the IVR to support notification scenarios.
   * 
   * @param request - StartPredictiveCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartPredictiveCallResponse
   */
  async startPredictiveCallWithOptions(request: $_model.StartPredictiveCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartPredictiveCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callee)) {
      query["Callee"] = request.callee;
    }

    if (!$dara.isNull(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!$dara.isNull(request.contactFlowId)) {
      query["ContactFlowId"] = request.contactFlowId;
    }

    if (!$dara.isNull(request.contactFlowVariables)) {
      query["ContactFlowVariables"] = request.contactFlowVariables;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maskedCallee)) {
      query["MaskedCallee"] = request.maskedCallee;
    }

    if (!$dara.isNull(request.skillGroupId)) {
      query["SkillGroupId"] = request.skillGroupId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.timeoutSeconds)) {
      query["TimeoutSeconds"] = request.timeoutSeconds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartPredictiveCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartPredictiveCallResponse>(await this.callApi(params, req, runtime), new $_model.StartPredictiveCallResponse({}));
  }

  /**
   * Invoke StartPredictiveCall to initiate predictive outbound calling.
   * 
   * @remarks
   * In addition to supporting agents initiating outbound calls from the agent Workbench, Cloud Call Center also enables your Operational System backend to initiate outbound calls and transfer the call to an agent after it is answered. This allows you to seamlessly embed Cloud Call Center features into your Business Process.
   * For example, your Customer can enter their phone number on your WeChat Official Account and click a button to inquire about a product. Your backend system then invokes this API to call the Customer’s Phone. After the call is connected, the system plays back the message: “We have received your inquiry about our product via the Official Account. We are now connecting you to an advisor. Please wait.” The call is then transferred to an appropriate agent.
   * Compared with the DialEX API in version 1.0, this API offers greater flexibility in configuration. In addition to customizing the IVR for transfer-in, you can also pass custom parameters, which can be played back by voice within the IVR to support notification scenarios.
   * 
   * @param request - StartPredictiveCallRequest
   * @returns StartPredictiveCallResponse
   */
  async startPredictiveCall(request: $_model.StartPredictiveCallRequest): Promise<$_model.StartPredictiveCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startPredictiveCallWithOptions(request, runtime);
  }

  /**
   * Starts a privacy call.
   * 
   * @param request - StartPrivacyCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartPrivacyCallResponse
   */
  async startPrivacyCallWithOptions(request: $_model.StartPrivacyCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartPrivacyCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.callee)) {
      query["Callee"] = request.callee;
    }

    if (!$dara.isNull(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartPrivacyCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartPrivacyCallResponse>(await this.callApi(params, req, runtime), new $_model.StartPrivacyCallResponse({}));
  }

  /**
   * Starts a privacy call.
   * 
   * @param request - StartPrivacyCallRequest
   * @returns StartPrivacyCallResponse
   */
  async startPrivacyCall(request: $_model.StartPrivacyCallRequest): Promise<$_model.StartPrivacyCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startPrivacyCallWithOptions(request, runtime);
  }

  /**
   * Invoke SubmitCampaign to start the predictive outbound calling activity corresponding to the specified ID under the specified instance.
   * 
   * @param request - SubmitCampaignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitCampaignResponse
   */
  async submitCampaignWithOptions(request: $_model.SubmitCampaignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitCampaignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitCampaign",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitCampaignResponse>(await this.callApi(params, req, runtime), new $_model.SubmitCampaignResponse({}));
  }

  /**
   * Invoke SubmitCampaign to start the predictive outbound calling activity corresponding to the specified ID under the specified instance.
   * 
   * @param request - SubmitCampaignRequest
   * @returns SubmitCampaignResponse
   */
  async submitCampaign(request: $_model.SubmitCampaignRequest): Promise<$_model.SubmitCampaignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitCampaignWithOptions(request, runtime);
  }

  /**
   * You can invoke SwitchToConference to switch the status of a specified call under a specified instance to a three-party conference. This is typically used in scenarios where a consultation is converted into a conference.
   * 
   * @param request - SwitchToConferenceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchToConferenceResponse
   */
  async switchToConferenceWithOptions(request: $_model.SwitchToConferenceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchToConferenceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchToConference",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchToConferenceResponse>(await this.callApi(params, req, runtime), new $_model.SwitchToConferenceResponse({}));
  }

  /**
   * You can invoke SwitchToConference to switch the status of a specified call under a specified instance to a three-party conference. This is typically used in scenarios where a consultation is converted into a conference.
   * 
   * @param request - SwitchToConferenceRequest
   * @returns SwitchToConferenceResponse
   */
  async switchToConference(request: $_model.SwitchToConferenceRequest): Promise<$_model.SwitchToConferenceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchToConferenceWithOptions(request, runtime);
  }

  /**
   * You can invoke TakeBreak to set a specified agent in a specified instance to the break state.
   * 
   * @param request - TakeBreakRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TakeBreakResponse
   */
  async takeBreakWithOptions(request: $_model.TakeBreakRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TakeBreakResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.code)) {
      query["Code"] = request.code;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TakeBreak",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TakeBreakResponse>(await this.callApi(params, req, runtime), new $_model.TakeBreakResponse({}));
  }

  /**
   * You can invoke TakeBreak to set a specified agent in a specified instance to the break state.
   * 
   * @param request - TakeBreakRequest
   * @returns TakeBreakResponse
   */
  async takeBreak(request: $_model.TakeBreakRequest): Promise<$_model.TakeBreakResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.takeBreakWithOptions(request, runtime);
  }

  /**
   * Closes a ticket.
   * 
   * @param request - TerminateTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TerminateTicketResponse
   */
  async terminateTicketWithOptions(request: $_model.TerminateTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TerminateTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ticketId)) {
      query["TicketId"] = request.ticketId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TerminateTicket",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TerminateTicketResponse>(await this.callApi(params, req, runtime), new $_model.TerminateTicketResponse({}));
  }

  /**
   * Closes a ticket.
   * 
   * @param request - TerminateTicketRequest
   * @returns TerminateTicketResponse
   */
  async terminateTicket(request: $_model.TerminateTicketRequest): Promise<$_model.TerminateTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.terminateTicketWithOptions(request, runtime);
  }

  /**
   * You can call TransferTicketTask to transfer a ticket to another user.
   * 
   * @param request - TransferTicketTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferTicketTaskResponse
   */
  async transferTicketTaskWithOptions(request: $_model.TransferTicketTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TransferTicketTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.assignee)) {
      query["Assignee"] = request.assignee;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.ticketId)) {
      query["TicketId"] = request.ticketId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransferTicketTask",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TransferTicketTaskResponse>(await this.callApi(params, req, runtime), new $_model.TransferTicketTaskResponse({}));
  }

  /**
   * You can call TransferTicketTask to transfer a ticket to another user.
   * 
   * @param request - TransferTicketTaskRequest
   * @returns TransferTicketTaskResponse
   */
  async transferTicketTask(request: $_model.TransferTicketTaskRequest): Promise<$_model.TransferTicketTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.transferTicketTaskWithOptions(request, runtime);
  }

  /**
   * [responses_200_schema_properties_Data_properties_UserContext_properties_UserState_type]string
   * 
   * @param request - UnmuteCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnmuteCallResponse
   */
  async unmuteCallWithOptions(request: $_model.UnmuteCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnmuteCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnmuteCall",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnmuteCallResponse>(await this.callApi(params, req, runtime), new $_model.UnmuteCallResponse({}));
  }

  /**
   * [responses_200_schema_properties_Data_properties_UserContext_properties_UserState_type]string
   * 
   * @param request - UnmuteCallRequest
   * @returns UnmuteCallResponse
   */
  async unmuteCall(request: $_model.UnmuteCallRequest): Promise<$_model.UnmuteCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unmuteCallWithOptions(request, runtime);
  }

  /**
   * You can invoke UnregisterDevice to delete the device registration record of a specified agent under a specified instance. After deletion, the SIP phone or SIP softphone associated with the agent becomes inactive.
   * 
   * @param request - UnregisterDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnregisterDeviceResponse
   */
  async unregisterDeviceWithOptions(request: $_model.UnregisterDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnregisterDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnregisterDevice",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnregisterDeviceResponse>(await this.callApi(params, req, runtime), new $_model.UnregisterDeviceResponse({}));
  }

  /**
   * You can invoke UnregisterDevice to delete the device registration record of a specified agent under a specified instance. After deletion, the SIP phone or SIP softphone associated with the agent becomes inactive.
   * 
   * @param request - UnregisterDeviceRequest
   * @returns UnregisterDeviceResponse
   */
  async unregisterDevice(request: $_model.UnregisterDeviceRequest): Promise<$_model.UnregisterDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unregisterDeviceWithOptions(request, runtime);
  }

  /**
   * Updates a call summary.
   * 
   * @param request - UpdateCallSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCallSummaryResponse
   */
  async updateCallSummaryWithOptions(request: $_model.UpdateCallSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCallSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.context)) {
      query["Context"] = request.context;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ticketId)) {
      query["TicketId"] = request.ticketId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCallSummary",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCallSummaryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCallSummaryResponse({}));
  }

  /**
   * Updates a call summary.
   * 
   * @param request - UpdateCallSummaryRequest
   * @returns UpdateCallSummaryResponse
   */
  async updateCallSummary(request: $_model.UpdateCallSummaryRequest): Promise<$_model.UpdateCallSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCallSummaryWithOptions(request, runtime);
  }

  /**
   * Updates outbound campaign parameters.
   * 
   * @param request - UpdateCampaignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCampaignResponse
   */
  async updateCampaignWithOptions(request: $_model.UpdateCampaignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCampaignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callableTime)) {
      query["CallableTime"] = request.callableTime;
    }

    if (!$dara.isNull(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!$dara.isNull(request.contactFlowId)) {
      query["ContactFlowId"] = request.contactFlowId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.strategyParameters)) {
      query["StrategyParameters"] = request.strategyParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCampaign",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCampaignResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCampaignResponse({}));
  }

  /**
   * Updates outbound campaign parameters.
   * 
   * @param request - UpdateCampaignRequest
   * @returns UpdateCampaignResponse
   */
  async updateCampaign(request: $_model.UpdateCampaignRequest): Promise<$_model.UpdateCampaignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCampaignWithOptions(request, runtime);
  }

  /**
   * You can use UpdateChatRoutingProfile to configure session transfers.
   * 
   * @param request - UpdateChatRoutingProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateChatRoutingProfileResponse
   */
  async updateChatRoutingProfileWithOptions(request: $_model.UpdateChatRoutingProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateChatRoutingProfileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.routingProfiles)) {
      query["RoutingProfiles"] = request.routingProfiles;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateChatRoutingProfile",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateChatRoutingProfileResponse>(await this.callApi(params, req, runtime), new $_model.UpdateChatRoutingProfileResponse({}));
  }

  /**
   * You can use UpdateChatRoutingProfile to configure session transfers.
   * 
   * @param request - UpdateChatRoutingProfileRequest
   * @returns UpdateChatRoutingProfileResponse
   */
  async updateChatRoutingProfile(request: $_model.UpdateChatRoutingProfileRequest): Promise<$_model.UpdateChatRoutingProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateChatRoutingProfileWithOptions(request, runtime);
  }

  /**
   * Use the UpdateConfigItems operation to add or modify configuration items for an instance, such as hiding the caller ID for inbound calls or allowing agents to hang up.
   * 
   * @param request - UpdateConfigItemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConfigItemsResponse
   */
  async updateConfigItemsWithOptions(request: $_model.UpdateConfigItemsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConfigItemsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configItems)) {
      query["ConfigItems"] = request.configItems;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.objectId)) {
      query["ObjectId"] = request.objectId;
    }

    if (!$dara.isNull(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConfigItems",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateConfigItemsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateConfigItemsResponse({}));
  }

  /**
   * Use the UpdateConfigItems operation to add or modify configuration items for an instance, such as hiding the caller ID for inbound calls or allowing agents to hang up.
   * 
   * @param request - UpdateConfigItemsRequest
   * @returns UpdateConfigItemsResponse
   */
  async updateConfigItems(request: $_model.UpdateConfigItemsRequest): Promise<$_model.UpdateConfigItemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateConfigItemsWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - UpdateSchemaPropertyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSchemaPropertyResponse
   */
  async updateSchemaPropertyWithOptions(tmpReq: $_model.UpdateSchemaPropertyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSchemaPropertyResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateSchemaPropertyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.property)) {
      request.propertyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.property, "Property", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.propertyShrink)) {
      body["Property"] = request.propertyShrink;
    }

    if (!$dara.isNull(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!$dara.isNull(request.schemaId)) {
      body["SchemaId"] = request.schemaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSchemaProperty",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSchemaPropertyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSchemaPropertyResponse({}));
  }

  /**
   * @param request - UpdateSchemaPropertyRequest
   * @returns UpdateSchemaPropertyResponse
   */
  async updateSchemaProperty(request: $_model.UpdateSchemaPropertyRequest): Promise<$_model.UpdateSchemaPropertyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSchemaPropertyWithOptions(request, runtime);
  }

  /**
   * Use the UpdateSubscription operation to configure message subscriptions.
   * 
   * @param request - UpdateSubscriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSubscriptionResponse
   */
  async updateSubscriptionWithOptions(request: $_model.UpdateSubscriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSubscriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessPoint)) {
      query["AccessPoint"] = request.accessPoint;
    }

    if (!$dara.isNull(request.aliyunUid)) {
      query["AliyunUid"] = request.aliyunUid;
    }

    if (!$dara.isNull(request.defaultTopic)) {
      query["DefaultTopic"] = request.defaultTopic;
    }

    if (!$dara.isNull(request.eventSubscriptionsJson)) {
      query["EventSubscriptionsJson"] = request.eventSubscriptionsJson;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mqInstanceId)) {
      query["MqInstanceId"] = request.mqInstanceId;
    }

    if (!$dara.isNull(request.mqType)) {
      query["MqType"] = request.mqType;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.producerId)) {
      query["ProducerId"] = request.producerId;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSubscription",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSubscriptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSubscriptionResponse({}));
  }

  /**
   * Use the UpdateSubscription operation to configure message subscriptions.
   * 
   * @param request - UpdateSubscriptionRequest
   * @returns UpdateSubscriptionResponse
   */
  async updateSubscription(request: $_model.UpdateSubscriptionRequest): Promise<$_model.UpdateSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSubscriptionWithOptions(request, runtime);
  }

  /**
   * UpdateTicket updates the content of a ticket.
   * 
   * @param request - UpdateTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTicketResponse
   */
  async updateTicketWithOptions(request: $_model.UpdateTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.context)) {
      query["Context"] = request.context;
    }

    if (!$dara.isNull(request.customerId)) {
      query["CustomerId"] = request.customerId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ticketId)) {
      query["TicketId"] = request.ticketId;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTicket",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTicketResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTicketResponse({}));
  }

  /**
   * UpdateTicket updates the content of a ticket.
   * 
   * @param request - UpdateTicketRequest
   * @returns UpdateTicketResponse
   */
  async updateTicket(request: $_model.UpdateTicketRequest): Promise<$_model.UpdateTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTicketWithOptions(request, runtime);
  }

  /**
   * You can use WithdrawTicket to withdraw a ticket.
   * 
   * @param request - WithdrawTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns WithdrawTicketResponse
   */
  async withdrawTicketWithOptions(request: $_model.WithdrawTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.WithdrawTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ticketId)) {
      query["TicketId"] = request.ticketId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "WithdrawTicket",
      version: "2020-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.WithdrawTicketResponse>(await this.callApi(params, req, runtime), new $_model.WithdrawTicketResponse({}));
  }

  /**
   * You can use WithdrawTicket to withdraw a ticket.
   * 
   * @param request - WithdrawTicketRequest
   * @returns WithdrawTicketResponse
   */
  async withdrawTicket(request: $_model.WithdrawTicketRequest): Promise<$_model.WithdrawTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.withdrawTicketWithOptions(request, runtime);
  }

}
