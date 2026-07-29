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
      'us-west-1': "mns-open.us-west-1.aliyuncs.com",
      'us-east-1': "mns-open.us-east-1.aliyuncs.com",
      'me-east-1': "mns-open.me-east-1.aliyuncs.com",
      'me-central-1': "mns-open.me-central-1.aliyuncs.com",
      'eu-west-1': "mns-open.eu-west-1.aliyuncs.com",
      'eu-central-1': "mns-open.eu-central-1.aliyuncs.com",
      'cn-zhengzhou-jva': "mns-open.cn-zhengzhou-jva.aliyuncs.com",
      'cn-zhangjiakou': "mns-open.cn-zhangjiakou.aliyuncs.com",
      'cn-wulanchabu': "mns-open.cn-wulanchabu.aliyuncs.com",
      'cn-shenzhen-finance-1': "mns-open.cn-shenzhen-finance-1.aliyuncs.com",
      'cn-shenzhen': "mns-open.cn-shenzhen.aliyuncs.com",
      'cn-shanghai-finance-1': "mns-open.cn-shanghai-finance-1.aliyuncs.com",
      'cn-shanghai': "mns-open.cn-shanghai.aliyuncs.com",
      'cn-qingdao': "mns-open.cn-qingdao.aliyuncs.com",
      'cn-huhehaote': "mns-open.cn-huhehaote.aliyuncs.com",
      'cn-hongkong': "mns-open.cn-hongkong.aliyuncs.com",
      'cn-heyuan-acdr-1': "mns-open.cn-heyuan-acdr-1.aliyuncs.com",
      'cn-heyuan': "mns-open.cn-heyuan.aliyuncs.com",
      'cn-hangzhou-finance': "mns-open.cn-hangzhou-finance.aliyuncs.com",
      'cn-hangzhou': "mns-open.cn-hangzhou.aliyuncs.com",
      'cn-guangzhou': "mns-open.cn-guangzhou.aliyuncs.com",
      'cn-chengdu': "mns-open.cn-chengdu.aliyuncs.com",
      'cn-beijing': "mns-open.cn-beijing.aliyuncs.com",
      'ap-southeast-7': "mns-open.ap-southeast-7.aliyuncs.com",
      'ap-southeast-5': "mns-open.ap-southeast-5.aliyuncs.com",
      'ap-southeast-3': "mns-open.ap-southeast-3.aliyuncs.com",
      'ap-southeast-1': "mns-open.ap-southeast-1.aliyuncs.com",
      'ap-northeast-2': "mns-open.ap-northeast-2.aliyuncs.com",
      'ap-northeast-1': "mns-open.ap-northeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("mns-open", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds one or more Access Control List (ACL) rules to an endpoint of a specified type.
   * 
   * @param tmpReq - AuthorizeEndpointAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeEndpointAclResponse
   */
  async authorizeEndpointAclWithOptions(tmpReq: $_model.AuthorizeEndpointAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AuthorizeEndpointAclResponse> {
    tmpReq.validate();
    let request = new $_model.AuthorizeEndpointAclShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.cidrList)) {
      request.cidrListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.cidrList, "CidrList", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.aclStrategy)) {
      query["AclStrategy"] = request.aclStrategy;
    }

    if (!$dara.isNull(request.cidrListShrink)) {
      query["CidrList"] = request.cidrListShrink;
    }

    if (!$dara.isNull(request.endpointType)) {
      query["EndpointType"] = request.endpointType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthorizeEndpointAcl",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthorizeEndpointAclResponse>(await this.callApi(params, req, runtime), new $_model.AuthorizeEndpointAclResponse({}));
  }

  /**
   * Adds one or more Access Control List (ACL) rules to an endpoint of a specified type.
   * 
   * @param request - AuthorizeEndpointAclRequest
   * @returns AuthorizeEndpointAclResponse
   */
  async authorizeEndpointAcl(request: $_model.AuthorizeEndpointAclRequest): Promise<$_model.AuthorizeEndpointAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authorizeEndpointAclWithOptions(request, runtime);
  }

  /**
   * Creates an event rule.
   * 
   * @param tmpReq - CreateEventRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEventRuleResponse
   */
  async createEventRuleWithOptions(tmpReq: $_model.CreateEventRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEventRuleResponse> {
    tmpReq.validate();
    let request = new $_model.CreateEventRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.endpoint)) {
      request.endpointShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.endpoint, "Endpoint", "json");
    }

    if (!$dara.isNull(tmpReq.endpoints)) {
      request.endpointsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.endpoints, "Endpoints", "json");
    }

    if (!$dara.isNull(tmpReq.eventTypes)) {
      request.eventTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.eventTypes, "EventTypes", "json");
    }

    if (!$dara.isNull(tmpReq.matchRules)) {
      request.matchRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.matchRules, "MatchRules", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.deliveryMode)) {
      query["DeliveryMode"] = request.deliveryMode;
    }

    if (!$dara.isNull(request.endpointShrink)) {
      query["Endpoint"] = request.endpointShrink;
    }

    if (!$dara.isNull(request.endpointsShrink)) {
      query["Endpoints"] = request.endpointsShrink;
    }

    if (!$dara.isNull(request.eventTypesShrink)) {
      query["EventTypes"] = request.eventTypesShrink;
    }

    if (!$dara.isNull(request.matchRulesShrink)) {
      query["MatchRules"] = request.matchRulesShrink;
    }

    if (!$dara.isNull(request.productName)) {
      query["ProductName"] = request.productName;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEventRule",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEventRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateEventRuleResponse({}));
  }

  /**
   * Creates an event rule.
   * 
   * @param request - CreateEventRuleRequest
   * @returns CreateEventRuleResponse
   */
  async createEventRule(request: $_model.CreateEventRuleRequest): Promise<$_model.CreateEventRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEventRuleWithOptions(request, runtime);
  }

  /**
   * Creates a queue.
   * 
   * @param tmpReq - CreateQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQueueResponse
   */
  async createQueueWithOptions(tmpReq: $_model.CreateQueueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateQueueResponse> {
    tmpReq.validate();
    let request = new $_model.CreateQueueShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dlqPolicy)) {
      request.dlqPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dlqPolicy, "DlqPolicy", "json");
    }

    if (!$dara.isNull(tmpReq.tenantRateLimitPolicy)) {
      request.tenantRateLimitPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantRateLimitPolicy, "TenantRateLimitPolicy", "json");
    }

    let query = { };
    if (!$dara.isNull(request.delaySeconds)) {
      query["DelaySeconds"] = request.delaySeconds;
    }

    if (!$dara.isNull(request.dlqPolicyShrink)) {
      query["DlqPolicy"] = request.dlqPolicyShrink;
    }

    if (!$dara.isNull(request.enableLogging)) {
      query["EnableLogging"] = request.enableLogging;
    }

    if (!$dara.isNull(request.enableSSE)) {
      query["EnableSSE"] = request.enableSSE;
    }

    if (!$dara.isNull(request.kmsKeyId)) {
      query["KmsKeyId"] = request.kmsKeyId;
    }

    if (!$dara.isNull(request.maximumMessageSize)) {
      query["MaximumMessageSize"] = request.maximumMessageSize;
    }

    if (!$dara.isNull(request.messageRetentionPeriod)) {
      query["MessageRetentionPeriod"] = request.messageRetentionPeriod;
    }

    if (!$dara.isNull(request.pollingWaitSeconds)) {
      query["PollingWaitSeconds"] = request.pollingWaitSeconds;
    }

    if (!$dara.isNull(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    if (!$dara.isNull(request.queueType)) {
      query["QueueType"] = request.queueType;
    }

    if (!$dara.isNull(request.sseAlgorithm)) {
      query["SseAlgorithm"] = request.sseAlgorithm;
    }

    if (!$dara.isNull(request.sseType)) {
      query["SseType"] = request.sseType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.tenantRateLimitPolicyShrink)) {
      query["TenantRateLimitPolicy"] = request.tenantRateLimitPolicyShrink;
    }

    if (!$dara.isNull(request.visibilityTimeout)) {
      query["VisibilityTimeout"] = request.visibilityTimeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQueue",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateQueueResponse>(await this.callApi(params, req, runtime), new $_model.CreateQueueResponse({}));
  }

  /**
   * Creates a queue.
   * 
   * @param request - CreateQueueRequest
   * @returns CreateQueueResponse
   */
  async createQueue(request: $_model.CreateQueueRequest): Promise<$_model.CreateQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createQueueWithOptions(request, runtime);
  }

  /**
   * Calls the CreateTopic operation to create a topic.
   * 
   * @param request - CreateTopicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTopicResponse
   */
  async createTopicWithOptions(request: $_model.CreateTopicRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTopicResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.topicType)) {
      query["TopicType"] = request.topicType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enableLogging)) {
      body["EnableLogging"] = request.enableLogging;
    }

    if (!$dara.isNull(request.enableSSE)) {
      body["EnableSSE"] = request.enableSSE;
    }

    if (!$dara.isNull(request.kmsKeyId)) {
      body["KmsKeyId"] = request.kmsKeyId;
    }

    if (!$dara.isNull(request.maxMessageSize)) {
      body["MaxMessageSize"] = request.maxMessageSize;
    }

    if (!$dara.isNull(request.sseAlgorithm)) {
      body["SseAlgorithm"] = request.sseAlgorithm;
    }

    if (!$dara.isNull(request.sseType)) {
      body["SseType"] = request.sseType;
    }

    if (!$dara.isNull(request.topicName)) {
      body["TopicName"] = request.topicName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTopic",
      version: "2022-01-19",
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
   * Calls the CreateTopic operation to create a topic.
   * 
   * @param request - CreateTopicRequest
   * @returns CreateTopicResponse
   */
  async createTopic(request: $_model.CreateTopicRequest): Promise<$_model.CreateTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTopicWithOptions(request, runtime);
  }

  /**
   * Deletes an event rule.
   * 
   * @param request - DeleteEventRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEventRuleResponse
   */
  async deleteEventRuleWithOptions(request: $_model.DeleteEventRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEventRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.productName)) {
      query["ProductName"] = request.productName;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEventRule",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEventRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEventRuleResponse({}));
  }

  /**
   * Deletes an event rule.
   * 
   * @param request - DeleteEventRuleRequest
   * @returns DeleteEventRuleResponse
   */
  async deleteEventRule(request: $_model.DeleteEventRuleRequest): Promise<$_model.DeleteEventRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEventRuleWithOptions(request, runtime);
  }

  /**
   * Calls the DeleteQueue operation to delete a created queue.
   * 
   * @param request - DeleteQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQueueResponse
   */
  async deleteQueueWithOptions(request: $_model.DeleteQueueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteQueueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQueue",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteQueueResponse>(await this.callApi(params, req, runtime), new $_model.DeleteQueueResponse({}));
  }

  /**
   * Calls the DeleteQueue operation to delete a created queue.
   * 
   * @param request - DeleteQueueRequest
   * @returns DeleteQueueResponse
   */
  async deleteQueue(request: $_model.DeleteQueueRequest): Promise<$_model.DeleteQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteQueueWithOptions(request, runtime);
  }

  /**
   * Calls the DeleteTopic operation to delete a topic.
   * 
   * @param request - DeleteTopicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTopicResponse
   */
  async deleteTopicWithOptions(request: $_model.DeleteTopicRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTopicResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTopic",
      version: "2022-01-19",
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
   * Calls the DeleteTopic operation to delete a topic.
   * 
   * @param request - DeleteTopicRequest
   * @returns DeleteTopicResponse
   */
  async deleteTopic(request: $_model.DeleteTopicRequest): Promise<$_model.DeleteTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTopicWithOptions(request, runtime);
  }

  /**
   * This operation disables an endpoint of a specified type, blocking all subsequent requests from the endpoint and returning an error.
   * 
   * @param request - DisableEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableEndpointResponse
   */
  async disableEndpointWithOptions(request: $_model.DisableEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endpointType)) {
      query["EndpointType"] = request.endpointType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableEndpoint",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableEndpointResponse>(await this.callApi(params, req, runtime), new $_model.DisableEndpointResponse({}));
  }

  /**
   * This operation disables an endpoint of a specified type, blocking all subsequent requests from the endpoint and returning an error.
   * 
   * @param request - DisableEndpointRequest
   * @returns DisableEndpointResponse
   */
  async disableEndpoint(request: $_model.DisableEndpointRequest): Promise<$_model.DisableEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableEndpointWithOptions(request, runtime);
  }

  /**
   * This operation enables an endpoint of a specified type. After the endpoint is enabled, requests that originate from the endpoint and are on the Access Control List (ACL) whitelist are not blocked.
   * 
   * @param request - EnableEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableEndpointResponse
   */
  async enableEndpointWithOptions(request: $_model.EnableEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endpointType)) {
      query["EndpointType"] = request.endpointType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableEndpoint",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableEndpointResponse>(await this.callApi(params, req, runtime), new $_model.EnableEndpointResponse({}));
  }

  /**
   * This operation enables an endpoint of a specified type. After the endpoint is enabled, requests that originate from the endpoint and are on the Access Control List (ACL) whitelist are not blocked.
   * 
   * @param request - EnableEndpointRequest
   * @returns EnableEndpointResponse
   */
  async enableEndpoint(request: $_model.EnableEndpointRequest): Promise<$_model.EnableEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableEndpointWithOptions(request, runtime);
  }

  /**
   * Retrieves the log configuration of a user.
   * 
   * @param request - GetAccountAttributesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccountAttributesResponse
   */
  async getAccountAttributesWithOptions(request: $_model.GetAccountAttributesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAccountAttributesResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetAccountAttributes",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAccountAttributesResponse>(await this.callApi(params, req, runtime), new $_model.GetAccountAttributesResponse({}));
  }

  /**
   * Retrieves the log configuration of a user.
   * 
   * @param request - GetAccountAttributesRequest
   * @returns GetAccountAttributesResponse
   */
  async getAccountAttributes(request: $_model.GetAccountAttributesRequest): Promise<$_model.GetAccountAttributesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccountAttributesWithOptions(request, runtime);
  }

  /**
   * Queries the attributes of an endpoint.
   * 
   * @param request - GetEndpointAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEndpointAttributeResponse
   */
  async getEndpointAttributeWithOptions(request: $_model.GetEndpointAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEndpointAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endpointType)) {
      query["EndpointType"] = request.endpointType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEndpointAttribute",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEndpointAttributeResponse>(await this.callApi(params, req, runtime), new $_model.GetEndpointAttributeResponse({}));
  }

  /**
   * Queries the attributes of an endpoint.
   * 
   * @param request - GetEndpointAttributeRequest
   * @returns GetEndpointAttributeResponse
   */
  async getEndpointAttribute(request: $_model.GetEndpointAttributeRequest): Promise<$_model.GetEndpointAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEndpointAttributeWithOptions(request, runtime);
  }

  /**
   * Retrieves an event notification rule.
   * 
   * @param request - GetEventRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEventRuleResponse
   */
  async getEventRuleWithOptions(request: $_model.GetEventRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEventRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.productName)) {
      query["ProductName"] = request.productName;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEventRule",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEventRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetEventRuleResponse({}));
  }

  /**
   * Retrieves an event notification rule.
   * 
   * @param request - GetEventRuleRequest
   * @returns GetEventRuleResponse
   */
  async getEventRule(request: $_model.GetEventRuleRequest): Promise<$_model.GetEventRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEventRuleWithOptions(request, runtime);
  }

  /**
   * Retrieves the attributes of a created queue.
   * 
   * @remarks
   * >Warning: 
   * <p>For optimization of service performance, Simple Message Queue (formerly MNS) will offline the return values of the following fields (the default value will be 0):
   *     - ActiveMessages
   *     - InactiveMessages
   *     - DelayMessages 
   *   </p>
   *   <p>Use the following alternatives to obtain replacement solutions:</p>
   *   <ul>
   *     <li>Use the CloudMonitor OpenAPI to retrieve queue monitoring metrics. For more information, see <a href="https://api.aliyun.com/api/Cms/2019-01-01/DescribeMetricLast?RegionId=ap-southeast-1&params={%22Namespace%22:%22acs_smq%22,%22MetricName%22:%22NumberOfMessagesVisible%22}&tab=DEBUG">CloudMonitor OpenAPI documentation</a></li>
   *     <li> <a href="https://cloudmonitornext.console.aliyun.com/metric-meta/acs_smq/smq/all?spm=5176.2020520111.0.0.5d0c66102s05T4">CloudMonitor monitoring metrics documentation</a>. The mapping between deprecated fields and monitoring metrics:
   *       <ul>
   *         <li>ActiveMessages → monitoring metric NumberOfMessagesVisible</li>
   *         <li>InactiveMessages → monitoring metric NumberOfMessagesInvisible</li>
   *         <li>DelayMessages → monitoring metric NumberOfMessagesDelayed</li>
   *       </ul>
   *     </li>
   *   </ul>
   * </warning>
   * 
   * @param request - GetQueueAttributesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQueueAttributesResponse
   */
  async getQueueAttributesWithOptions(request: $_model.GetQueueAttributesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQueueAttributesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQueueAttributes",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQueueAttributesResponse>(await this.callApi(params, req, runtime), new $_model.GetQueueAttributesResponse({}));
  }

  /**
   * Retrieves the attributes of a created queue.
   * 
   * @remarks
   * >Warning: 
   * <p>For optimization of service performance, Simple Message Queue (formerly MNS) will offline the return values of the following fields (the default value will be 0):
   *     - ActiveMessages
   *     - InactiveMessages
   *     - DelayMessages 
   *   </p>
   *   <p>Use the following alternatives to obtain replacement solutions:</p>
   *   <ul>
   *     <li>Use the CloudMonitor OpenAPI to retrieve queue monitoring metrics. For more information, see <a href="https://api.aliyun.com/api/Cms/2019-01-01/DescribeMetricLast?RegionId=ap-southeast-1&params={%22Namespace%22:%22acs_smq%22,%22MetricName%22:%22NumberOfMessagesVisible%22}&tab=DEBUG">CloudMonitor OpenAPI documentation</a></li>
   *     <li> <a href="https://cloudmonitornext.console.aliyun.com/metric-meta/acs_smq/smq/all?spm=5176.2020520111.0.0.5d0c66102s05T4">CloudMonitor monitoring metrics documentation</a>. The mapping between deprecated fields and monitoring metrics:
   *       <ul>
   *         <li>ActiveMessages → monitoring metric NumberOfMessagesVisible</li>
   *         <li>InactiveMessages → monitoring metric NumberOfMessagesInvisible</li>
   *         <li>DelayMessages → monitoring metric NumberOfMessagesDelayed</li>
   *       </ul>
   *     </li>
   *   </ul>
   * </warning>
   * 
   * @param request - GetQueueAttributesRequest
   * @returns GetQueueAttributesResponse
   */
  async getQueueAttributes(request: $_model.GetQueueAttributesRequest): Promise<$_model.GetQueueAttributesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQueueAttributesWithOptions(request, runtime);
  }

  /**
   * Retrieves the properties of a subscription.
   * 
   * @param request - GetSubscriptionAttributesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSubscriptionAttributesResponse
   */
  async getSubscriptionAttributesWithOptions(request: $_model.GetSubscriptionAttributesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSubscriptionAttributesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.subscriptionName)) {
      query["SubscriptionName"] = request.subscriptionName;
    }

    if (!$dara.isNull(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSubscriptionAttributes",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSubscriptionAttributesResponse>(await this.callApi(params, req, runtime), new $_model.GetSubscriptionAttributesResponse({}));
  }

  /**
   * Retrieves the properties of a subscription.
   * 
   * @param request - GetSubscriptionAttributesRequest
   * @returns GetSubscriptionAttributesResponse
   */
  async getSubscriptionAttributes(request: $_model.GetSubscriptionAttributesRequest): Promise<$_model.GetSubscriptionAttributesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSubscriptionAttributesWithOptions(request, runtime);
  }

  /**
   * Queries the attributes of a topic.
   * 
   * @param request - GetTopicAttributesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTopicAttributesResponse
   */
  async getTopicAttributesWithOptions(request: $_model.GetTopicAttributesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTopicAttributesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTopicAttributes",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTopicAttributesResponse>(await this.callApi(params, req, runtime), new $_model.GetTopicAttributesResponse({}));
  }

  /**
   * Queries the attributes of a topic.
   * 
   * @param request - GetTopicAttributesRequest
   * @returns GetTopicAttributesResponse
   */
  async getTopicAttributes(request: $_model.GetTopicAttributesRequest): Promise<$_model.GetTopicAttributesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTopicAttributesWithOptions(request, runtime);
  }

  /**
   * Queries a list of event notification rules.
   * 
   * @param tmpReq - ListEventRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEventRulesResponse
   */
  async listEventRulesWithOptions(tmpReq: $_model.ListEventRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEventRulesResponse> {
    tmpReq.validate();
    let request = new $_model.ListEventRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.subscription)) {
      request.subscriptionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.subscription, "Subscription", "json");
    }

    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productName)) {
      query["ProductName"] = request.productName;
    }

    if (!$dara.isNull(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.subscriptionShrink)) {
      query["Subscription"] = request.subscriptionShrink;
    }

    if (!$dara.isNull(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEventRules",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEventRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListEventRulesResponse({}));
  }

  /**
   * Queries a list of event notification rules.
   * 
   * @param request - ListEventRulesRequest
   * @returns ListEventRulesResponse
   */
  async listEventRules(request: $_model.ListEventRulesRequest): Promise<$_model.ListEventRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEventRulesWithOptions(request, runtime);
  }

  /**
   * Lists all queues under a specified Alibaba Cloud account with pagination support.
   * 
   * @param request - ListQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQueueResponse
   */
  async listQueueWithOptions(request: $_model.ListQueueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListQueueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    if (!$dara.isNull(request.queueType)) {
      query["QueueType"] = request.queueType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQueue",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQueueResponse>(await this.callApi(params, req, runtime), new $_model.ListQueueResponse({}));
  }

  /**
   * Lists all queues under a specified Alibaba Cloud account with pagination support.
   * 
   * @param request - ListQueueRequest
   * @returns ListQueueResponse
   */
  async listQueue(request: $_model.ListQueueRequest): Promise<$_model.ListQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQueueWithOptions(request, runtime);
  }

  /**
   * You can call the ListSubscriptionByTopic operation to retrieve a paginated list of subscriptions for a topic.
   * 
   * @param request - ListSubscriptionByTopicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSubscriptionByTopicResponse
   */
  async listSubscriptionByTopicWithOptions(request: $_model.ListSubscriptionByTopicRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSubscriptionByTopicResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endpointType)) {
      query["EndpointType"] = request.endpointType;
    }

    if (!$dara.isNull(request.endpointValue)) {
      query["EndpointValue"] = request.endpointValue;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.subscriptionName)) {
      query["SubscriptionName"] = request.subscriptionName;
    }

    if (!$dara.isNull(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSubscriptionByTopic",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSubscriptionByTopicResponse>(await this.callApi(params, req, runtime), new $_model.ListSubscriptionByTopicResponse({}));
  }

  /**
   * You can call the ListSubscriptionByTopic operation to retrieve a paginated list of subscriptions for a topic.
   * 
   * @param request - ListSubscriptionByTopicRequest
   * @returns ListSubscriptionByTopicResponse
   */
  async listSubscriptionByTopic(request: $_model.ListSubscriptionByTopicRequest): Promise<$_model.ListSubscriptionByTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSubscriptionByTopicWithOptions(request, runtime);
  }

  /**
   * Queries the list of topics under an Alibaba Cloud account with paginated results.
   * 
   * @param request - ListTopicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTopicResponse
   */
  async listTopicWithOptions(request: $_model.ListTopicRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTopicResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    if (!$dara.isNull(request.topicType)) {
      query["TopicType"] = request.topicType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTopic",
      version: "2022-01-19",
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
   * Queries the list of topics under an Alibaba Cloud account with paginated results.
   * 
   * @param request - ListTopicRequest
   * @returns ListTopicResponse
   */
  async listTopic(request: $_model.ListTopicRequest): Promise<$_model.ListTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTopicWithOptions(request, runtime);
  }

  /**
   * Revokes one or more Access Control List (ACL) rules for a specified endpoint type.
   * 
   * @param tmpReq - RevokeEndpointAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeEndpointAclResponse
   */
  async revokeEndpointAclWithOptions(tmpReq: $_model.RevokeEndpointAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeEndpointAclResponse> {
    tmpReq.validate();
    let request = new $_model.RevokeEndpointAclShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.cidrList)) {
      request.cidrListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.cidrList, "CidrList", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.aclStrategy)) {
      query["AclStrategy"] = request.aclStrategy;
    }

    if (!$dara.isNull(request.cidrListShrink)) {
      query["CidrList"] = request.cidrListShrink;
    }

    if (!$dara.isNull(request.endpointType)) {
      query["EndpointType"] = request.endpointType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeEndpointAcl",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeEndpointAclResponse>(await this.callApi(params, req, runtime), new $_model.RevokeEndpointAclResponse({}));
  }

  /**
   * Revokes one or more Access Control List (ACL) rules for a specified endpoint type.
   * 
   * @param request - RevokeEndpointAclRequest
   * @returns RevokeEndpointAclResponse
   */
  async revokeEndpointAcl(request: $_model.RevokeEndpointAclRequest): Promise<$_model.RevokeEndpointAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeEndpointAclWithOptions(request, runtime);
  }

  /**
   * SetAccountAttributes
   * 
   * @param request - SetAccountAttributesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetAccountAttributesResponse
   */
  async setAccountAttributesWithOptions(request: $_model.SetAccountAttributesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetAccountAttributesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.logEnabled)) {
      query["LogEnabled"] = request.logEnabled;
    }

    if (!$dara.isNull(request.logStoreName)) {
      query["LogStoreName"] = request.logStoreName;
    }

    if (!$dara.isNull(request.messageTraceEnabled)) {
      query["MessageTraceEnabled"] = request.messageTraceEnabled;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetAccountAttributes",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetAccountAttributesResponse>(await this.callApi(params, req, runtime), new $_model.SetAccountAttributesResponse({}));
  }

  /**
   * SetAccountAttributes
   * 
   * @param request - SetAccountAttributesRequest
   * @returns SetAccountAttributesResponse
   */
  async setAccountAttributes(request: $_model.SetAccountAttributesRequest): Promise<$_model.SetAccountAttributesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setAccountAttributesWithOptions(request, runtime);
  }

  /**
   * Calls the SetQueueAttributes operation to modify queue attributes.
   * 
   * @param tmpReq - SetQueueAttributesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetQueueAttributesResponse
   */
  async setQueueAttributesWithOptions(tmpReq: $_model.SetQueueAttributesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetQueueAttributesResponse> {
    tmpReq.validate();
    let request = new $_model.SetQueueAttributesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dlqPolicy)) {
      request.dlqPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dlqPolicy, "DlqPolicy", "json");
    }

    if (!$dara.isNull(tmpReq.tenantRateLimitPolicy)) {
      request.tenantRateLimitPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantRateLimitPolicy, "TenantRateLimitPolicy", "json");
    }

    let query = { };
    if (!$dara.isNull(request.delaySeconds)) {
      query["DelaySeconds"] = request.delaySeconds;
    }

    if (!$dara.isNull(request.dlqPolicyShrink)) {
      query["DlqPolicy"] = request.dlqPolicyShrink;
    }

    if (!$dara.isNull(request.enableLogging)) {
      query["EnableLogging"] = request.enableLogging;
    }

    if (!$dara.isNull(request.enableSSE)) {
      query["EnableSSE"] = request.enableSSE;
    }

    if (!$dara.isNull(request.kmsKeyId)) {
      query["KmsKeyId"] = request.kmsKeyId;
    }

    if (!$dara.isNull(request.maximumMessageSize)) {
      query["MaximumMessageSize"] = request.maximumMessageSize;
    }

    if (!$dara.isNull(request.messageRetentionPeriod)) {
      query["MessageRetentionPeriod"] = request.messageRetentionPeriod;
    }

    if (!$dara.isNull(request.pollingWaitSeconds)) {
      query["PollingWaitSeconds"] = request.pollingWaitSeconds;
    }

    if (!$dara.isNull(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    if (!$dara.isNull(request.sseAlgorithm)) {
      query["SseAlgorithm"] = request.sseAlgorithm;
    }

    if (!$dara.isNull(request.sseType)) {
      query["SseType"] = request.sseType;
    }

    if (!$dara.isNull(request.tenantRateLimitPolicyShrink)) {
      query["TenantRateLimitPolicy"] = request.tenantRateLimitPolicyShrink;
    }

    if (!$dara.isNull(request.visibilityTimeout)) {
      query["VisibilityTimeout"] = request.visibilityTimeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetQueueAttributes",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetQueueAttributesResponse>(await this.callApi(params, req, runtime), new $_model.SetQueueAttributesResponse({}));
  }

  /**
   * Calls the SetQueueAttributes operation to modify queue attributes.
   * 
   * @param request - SetQueueAttributesRequest
   * @returns SetQueueAttributesResponse
   */
  async setQueueAttributes(request: $_model.SetQueueAttributesRequest): Promise<$_model.SetQueueAttributesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setQueueAttributesWithOptions(request, runtime);
  }

  /**
   * Call the SetSubscriptionAttributes operation to modify a subscription\\"s attributes.
   * 
   * @param tmpReq - SetSubscriptionAttributesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetSubscriptionAttributesResponse
   */
  async setSubscriptionAttributesWithOptions(tmpReq: $_model.SetSubscriptionAttributesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetSubscriptionAttributesResponse> {
    tmpReq.validate();
    let request = new $_model.SetSubscriptionAttributesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dlqPolicy)) {
      request.dlqPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dlqPolicy, "DlqPolicy", "json");
    }

    if (!$dara.isNull(tmpReq.tenantRateLimitPolicy)) {
      request.tenantRateLimitPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantRateLimitPolicy, "TenantRateLimitPolicy", "json");
    }

    let query = { };
    if (!$dara.isNull(request.dlqPolicyShrink)) {
      query["DlqPolicy"] = request.dlqPolicyShrink;
    }

    if (!$dara.isNull(request.notifyStrategy)) {
      query["NotifyStrategy"] = request.notifyStrategy;
    }

    if (!$dara.isNull(request.stsRoleArn)) {
      query["StsRoleArn"] = request.stsRoleArn;
    }

    if (!$dara.isNull(request.subscriptionName)) {
      query["SubscriptionName"] = request.subscriptionName;
    }

    if (!$dara.isNull(request.tenantRateLimitPolicyShrink)) {
      query["TenantRateLimitPolicy"] = request.tenantRateLimitPolicyShrink;
    }

    if (!$dara.isNull(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetSubscriptionAttributes",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetSubscriptionAttributesResponse>(await this.callApi(params, req, runtime), new $_model.SetSubscriptionAttributesResponse({}));
  }

  /**
   * Call the SetSubscriptionAttributes operation to modify a subscription\\"s attributes.
   * 
   * @param request - SetSubscriptionAttributesRequest
   * @returns SetSubscriptionAttributesResponse
   */
  async setSubscriptionAttributes(request: $_model.SetSubscriptionAttributesRequest): Promise<$_model.SetSubscriptionAttributesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setSubscriptionAttributesWithOptions(request, runtime);
  }

  /**
   * Calls the SetTopicAttributes operation to modify the attributes of a topic.
   * 
   * @param request - SetTopicAttributesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetTopicAttributesResponse
   */
  async setTopicAttributesWithOptions(request: $_model.SetTopicAttributesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetTopicAttributesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enableLogging)) {
      query["EnableLogging"] = request.enableLogging;
    }

    if (!$dara.isNull(request.enableSSE)) {
      query["EnableSSE"] = request.enableSSE;
    }

    if (!$dara.isNull(request.kmsKeyId)) {
      query["KmsKeyId"] = request.kmsKeyId;
    }

    if (!$dara.isNull(request.maxMessageSize)) {
      query["MaxMessageSize"] = request.maxMessageSize;
    }

    if (!$dara.isNull(request.sseAlgorithm)) {
      query["SseAlgorithm"] = request.sseAlgorithm;
    }

    if (!$dara.isNull(request.sseType)) {
      query["SseType"] = request.sseType;
    }

    if (!$dara.isNull(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetTopicAttributes",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetTopicAttributesResponse>(await this.callApi(params, req, runtime), new $_model.SetTopicAttributesResponse({}));
  }

  /**
   * Calls the SetTopicAttributes operation to modify the attributes of a topic.
   * 
   * @param request - SetTopicAttributesRequest
   * @returns SetTopicAttributesResponse
   */
  async setTopicAttributes(request: $_model.SetTopicAttributesRequest): Promise<$_model.SetTopicAttributesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setTopicAttributesWithOptions(request, runtime);
  }

  /**
   * Calls the Subscribe operation to create a subscription for a topic.
   * 
   * @param tmpReq - SubscribeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubscribeResponse
   */
  async subscribeWithOptions(tmpReq: $_model.SubscribeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubscribeResponse> {
    tmpReq.validate();
    let request = new $_model.SubscribeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dlqPolicy)) {
      request.dlqPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dlqPolicy, "DlqPolicy", "json");
    }

    if (!$dara.isNull(tmpReq.dmAttributes)) {
      request.dmAttributesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dmAttributes, "DmAttributes", "json");
    }

    if (!$dara.isNull(tmpReq.dysmsAttributes)) {
      request.dysmsAttributesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dysmsAttributes, "DysmsAttributes", "json");
    }

    if (!$dara.isNull(tmpReq.kafkaAttributes)) {
      request.kafkaAttributesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.kafkaAttributes, "KafkaAttributes", "json");
    }

    if (!$dara.isNull(tmpReq.tenantRateLimitPolicy)) {
      request.tenantRateLimitPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantRateLimitPolicy, "TenantRateLimitPolicy", "json");
    }

    let query = { };
    if (!$dara.isNull(request.dlqPolicyShrink)) {
      query["DlqPolicy"] = request.dlqPolicyShrink;
    }

    if (!$dara.isNull(request.dmAttributesShrink)) {
      query["DmAttributes"] = request.dmAttributesShrink;
    }

    if (!$dara.isNull(request.dysmsAttributesShrink)) {
      query["DysmsAttributes"] = request.dysmsAttributesShrink;
    }

    if (!$dara.isNull(request.endpoint)) {
      query["Endpoint"] = request.endpoint;
    }

    if (!$dara.isNull(request.kafkaAttributesShrink)) {
      query["KafkaAttributes"] = request.kafkaAttributesShrink;
    }

    if (!$dara.isNull(request.messageTag)) {
      query["MessageTag"] = request.messageTag;
    }

    if (!$dara.isNull(request.notifyContentFormat)) {
      query["NotifyContentFormat"] = request.notifyContentFormat;
    }

    if (!$dara.isNull(request.notifyStrategy)) {
      query["NotifyStrategy"] = request.notifyStrategy;
    }

    if (!$dara.isNull(request.pushType)) {
      query["PushType"] = request.pushType;
    }

    if (!$dara.isNull(request.stsRoleArn)) {
      query["StsRoleArn"] = request.stsRoleArn;
    }

    if (!$dara.isNull(request.subscriptionName)) {
      query["SubscriptionName"] = request.subscriptionName;
    }

    if (!$dara.isNull(request.tenantRateLimitPolicyShrink)) {
      query["TenantRateLimitPolicy"] = request.tenantRateLimitPolicyShrink;
    }

    if (!$dara.isNull(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Subscribe",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubscribeResponse>(await this.callApi(params, req, runtime), new $_model.SubscribeResponse({}));
  }

  /**
   * Calls the Subscribe operation to create a subscription for a topic.
   * 
   * @param request - SubscribeRequest
   * @returns SubscribeResponse
   */
  async subscribe(request: $_model.SubscribeRequest): Promise<$_model.SubscribeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.subscribeWithOptions(request, runtime);
  }

  /**
   * You can call Unsubscribe to cancel an existing subscription.
   * 
   * @param request - UnsubscribeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnsubscribeResponse
   */
  async unsubscribeWithOptions(request: $_model.UnsubscribeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnsubscribeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.subscriptionName)) {
      query["SubscriptionName"] = request.subscriptionName;
    }

    if (!$dara.isNull(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Unsubscribe",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnsubscribeResponse>(await this.callApi(params, req, runtime), new $_model.UnsubscribeResponse({}));
  }

  /**
   * You can call Unsubscribe to cancel an existing subscription.
   * 
   * @param request - UnsubscribeRequest
   * @returns UnsubscribeResponse
   */
  async unsubscribe(request: $_model.UnsubscribeRequest): Promise<$_model.UnsubscribeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unsubscribeWithOptions(request, runtime);
  }

}
