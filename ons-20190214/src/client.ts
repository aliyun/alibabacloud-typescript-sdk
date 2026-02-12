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
      'ap-northeast-2-pop': "ons.ap-northeast-1.aliyuncs.com",
      'cn-beijing-finance-1': "ons.aliyuncs.com",
      'cn-beijing-finance-pop': "ons.aliyuncs.com",
      'cn-beijing-gov-1': "ons.aliyuncs.com",
      'cn-beijing-nu16-b01': "ons.aliyuncs.com",
      'cn-edge-1': "ons.aliyuncs.com",
      'cn-fujian': "ons.aliyuncs.com",
      'cn-haidian-cm12-c01': "ons.aliyuncs.com",
      'cn-hangzhou-bj-b01': "ons.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "ons.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "ons.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "ons.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "ons.aliyuncs.com",
      'cn-hangzhou-test-306': "ons.aliyuncs.com",
      'cn-hongkong-finance-pop': "ons.aliyuncs.com",
      'cn-qingdao-nebula': "ons.aliyuncs.com",
      'cn-shanghai-et15-b01': "ons.aliyuncs.com",
      'cn-shanghai-et2-b01': "ons.aliyuncs.com",
      'cn-shanghai-inner': "ons.aliyuncs.com",
      'cn-shanghai-internal-test-1': "ons.aliyuncs.com",
      'cn-shenzhen-inner': "ons.aliyuncs.com",
      'cn-shenzhen-st4-d01': "ons.aliyuncs.com",
      'cn-shenzhen-su18-b01': "ons.aliyuncs.com",
      'cn-wuhan': "ons.aliyuncs.com",
      'cn-yushanfang': "ons.aliyuncs.com",
      'cn-zhangbei-na61-b01': "ons.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "ons.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "ons.aliyuncs.com",
      'eu-west-1-oxs': "ons.ap-northeast-1.aliyuncs.com",
      'rus-west-1-pop': "ons.ap-northeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ons", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Queries the tags that are attached to a specified resource.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * When you call the **ListTagResources** operation, specify at least one of the following parameters in the request: **Key** and **ResourceId**. You can specify a resource ID to query all tags that are attached to the specified resource. You can also specify a tag key to query the tag value and resource to which the tag is attached.
   * *   If you include the **Key** parameter in a request, you can obtain the tag value and the ID of the resource to which the tag is attached.
   * *   If you include the **ResourceId** parameter in a request, you can obtain the keys and values of all tags that are attached to the specified resource.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagResourcesResponse({}));
  }

  /**
   * Queries the tags that are attached to a specified resource.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * When you call the **ListTagResources** operation, specify at least one of the following parameters in the request: **Key** and **ResourceId**. You can specify a resource ID to query all tags that are attached to the specified resource. You can also specify a tag key to query the tag value and resource to which the tag is attached.
   * *   If you include the **Key** parameter in a request, you can obtain the tag value and the ID of the resource to which the tag is attached.
   * *   If you include the **ResourceId** parameter in a request, you can obtain the keys and values of all tags that are attached to the specified resource.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the information about message accumulation in topics to which a specified consumer group subscribes. The returned information includes the number of accumulated messages and the consumption latency.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation in scenarios in which you want to know the message consumption progress of a specified consumer group in production environments. You can obtain the information about message consumption and consumption latency based on the returned information. This operation returns the total number of accumulated messages in all topics to which the specified consumer group subscribes and the number of accumulated messages in each topic.
   * 
   * @param request - OnsConsumerAccumulateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsConsumerAccumulateResponse
   */
  async onsConsumerAccumulateWithOptions(request: $_model.OnsConsumerAccumulateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsConsumerAccumulateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.detail)) {
      query["Detail"] = request.detail;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsConsumerAccumulate",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsConsumerAccumulateResponse>(await this.callApi(params, req, runtime), new $_model.OnsConsumerAccumulateResponse({}));
  }

  /**
   * Queries the information about message accumulation in topics to which a specified consumer group subscribes. The returned information includes the number of accumulated messages and the consumption latency.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation in scenarios in which you want to know the message consumption progress of a specified consumer group in production environments. You can obtain the information about message consumption and consumption latency based on the returned information. This operation returns the total number of accumulated messages in all topics to which the specified consumer group subscribes and the number of accumulated messages in each topic.
   * 
   * @param request - OnsConsumerAccumulateRequest
   * @returns OnsConsumerAccumulateResponse
   */
  async onsConsumerAccumulate(request: $_model.OnsConsumerAccumulateRequest): Promise<$_model.OnsConsumerAccumulateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsConsumerAccumulateWithOptions(request, runtime);
  }

  /**
   * Queries the client connection status of a specified consumer group.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * When messages are accumulated in a topic, you can call this operation to check whether a consumer is online.
   * 
   * @param request - OnsConsumerGetConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsConsumerGetConnectionResponse
   */
  async onsConsumerGetConnectionWithOptions(request: $_model.OnsConsumerGetConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsConsumerGetConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsConsumerGetConnection",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsConsumerGetConnectionResponse>(await this.callApi(params, req, runtime), new $_model.OnsConsumerGetConnectionResponse({}));
  }

  /**
   * Queries the client connection status of a specified consumer group.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * When messages are accumulated in a topic, you can call this operation to check whether a consumer is online.
   * 
   * @param request - OnsConsumerGetConnectionRequest
   * @returns OnsConsumerGetConnectionResponse
   */
  async onsConsumerGetConnection(request: $_model.OnsConsumerGetConnectionRequest): Promise<$_model.OnsConsumerGetConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsConsumerGetConnectionWithOptions(request, runtime);
  }

  /**
   * Resets a consumer offset to a specified timestamp for a consumer group.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation to clear accumulated messages or reset a consumer offset to a specified timestamp. You can use one of the following methods to clear accumulated messages:
   * *   Clear all accumulated messages in a specified topic.
   * *   Clear the messages that were published to the specified topic before a specified point in time.
   * 
   * @param request - OnsConsumerResetOffsetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsConsumerResetOffsetResponse
   */
  async onsConsumerResetOffsetWithOptions(request: $_model.OnsConsumerResetOffsetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsConsumerResetOffsetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.resetTimestamp)) {
      query["ResetTimestamp"] = request.resetTimestamp;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsConsumerResetOffset",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsConsumerResetOffsetResponse>(await this.callApi(params, req, runtime), new $_model.OnsConsumerResetOffsetResponse({}));
  }

  /**
   * Resets a consumer offset to a specified timestamp for a consumer group.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation to clear accumulated messages or reset a consumer offset to a specified timestamp. You can use one of the following methods to clear accumulated messages:
   * *   Clear all accumulated messages in a specified topic.
   * *   Clear the messages that were published to the specified topic before a specified point in time.
   * 
   * @param request - OnsConsumerResetOffsetRequest
   * @returns OnsConsumerResetOffsetResponse
   */
  async onsConsumerResetOffset(request: $_model.OnsConsumerResetOffsetRequest): Promise<$_model.OnsConsumerResetOffsetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsConsumerResetOffsetWithOptions(request, runtime);
  }

  /**
   * Queries the detailed information about the status of a specified consumer group. This operation returns the transactions per second (TPS) for message consumption, load balancing status, consumer connection status, and whether all consumers in the consumer group subscribe to the same topics and tags.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   You can call this operation in scenarios in which consumers are online and messages are accumulated. You can troubleshoot errors based on the information that is returned by this operation. You can check whether all consumers in the consumer group subscribe to the same topics and tags, and whether load balancing is performed as expected. You can also obtain the information about thread stack traces of online consumers.
   * *   This operation uses multiple backend operations to query and aggregate data. The system requires a long period of time to process a request. We recommend that you do not frequently call this operation.
   * 
   * @param request - OnsConsumerStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsConsumerStatusResponse
   */
  async onsConsumerStatusWithOptions(request: $_model.OnsConsumerStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsConsumerStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.detail)) {
      query["Detail"] = request.detail;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.needJstack)) {
      query["NeedJstack"] = request.needJstack;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsConsumerStatus",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsConsumerStatusResponse>(await this.callApi(params, req, runtime), new $_model.OnsConsumerStatusResponse({}));
  }

  /**
   * Queries the detailed information about the status of a specified consumer group. This operation returns the transactions per second (TPS) for message consumption, load balancing status, consumer connection status, and whether all consumers in the consumer group subscribe to the same topics and tags.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   You can call this operation in scenarios in which consumers are online and messages are accumulated. You can troubleshoot errors based on the information that is returned by this operation. You can check whether all consumers in the consumer group subscribe to the same topics and tags, and whether load balancing is performed as expected. You can also obtain the information about thread stack traces of online consumers.
   * *   This operation uses multiple backend operations to query and aggregate data. The system requires a long period of time to process a request. We recommend that you do not frequently call this operation.
   * 
   * @param request - OnsConsumerStatusRequest
   * @returns OnsConsumerStatusResponse
   */
  async onsConsumerStatus(request: $_model.OnsConsumerStatusRequest): Promise<$_model.OnsConsumerStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsConsumerStatusWithOptions(request, runtime);
  }

  /**
   * Queries the time range within which you can specify a point in time to reset the consumer offset for a specified topic. The time range is from the point in time when the earliest stored message was published to the topic to the point in time when the most recently stored message was published to the topic.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation to query the point in time when the earliest stored message was published to a specified topic and the point in time when the most recently stored message was published to the specified topic. You can also call this operation to query the most recent point in time when a message in the topic was consumed. This operation is usually used with the \\*\\*OnsConsumerAccumulate\\*\\* operation to display the overview of the consumption progress.
   * 
   * @param request - OnsConsumerTimeSpanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsConsumerTimeSpanResponse
   */
  async onsConsumerTimeSpanWithOptions(request: $_model.OnsConsumerTimeSpanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsConsumerTimeSpanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsConsumerTimeSpan",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsConsumerTimeSpanResponse>(await this.callApi(params, req, runtime), new $_model.OnsConsumerTimeSpanResponse({}));
  }

  /**
   * Queries the time range within which you can specify a point in time to reset the consumer offset for a specified topic. The time range is from the point in time when the earliest stored message was published to the topic to the point in time when the most recently stored message was published to the topic.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation to query the point in time when the earliest stored message was published to a specified topic and the point in time when the most recently stored message was published to the specified topic. You can also call this operation to query the most recent point in time when a message in the topic was consumed. This operation is usually used with the \\*\\*OnsConsumerAccumulate\\*\\* operation to display the overview of the consumption progress.
   * 
   * @param request - OnsConsumerTimeSpanRequest
   * @returns OnsConsumerTimeSpanResponse
   */
  async onsConsumerTimeSpan(request: $_model.OnsConsumerTimeSpanRequest): Promise<$_model.OnsConsumerTimeSpanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsConsumerTimeSpanWithOptions(request, runtime);
  }

  /**
   * Queries a dead-letter message based on the message ID. The queried information about the dead-letter message includes the point in time when the message is stored, the message body, and attributes such as the message tag and the message key.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * This operation uses the exact match method to query a dead-letter message based on the message ID. You can obtain the message ID that is required to query the information about a dead-letter message from the SendResult parameter that is returned after the message is sent. You can also obtain the message ID by calling the OnsDLQMessagePageQueryByGroupId operation to query multiple messages at a time. The queried information about the dead-letter message includes the point in time when the message is stored, the message body, and attributes such as the message tag and the message key.
   * 
   * @param request - OnsDLQMessageGetByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsDLQMessageGetByIdResponse
   */
  async onsDLQMessageGetByIdWithOptions(request: $_model.OnsDLQMessageGetByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsDLQMessageGetByIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.msgId)) {
      query["MsgId"] = request.msgId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsDLQMessageGetById",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsDLQMessageGetByIdResponse>(await this.callApi(params, req, runtime), new $_model.OnsDLQMessageGetByIdResponse({}));
  }

  /**
   * Queries a dead-letter message based on the message ID. The queried information about the dead-letter message includes the point in time when the message is stored, the message body, and attributes such as the message tag and the message key.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * This operation uses the exact match method to query a dead-letter message based on the message ID. You can obtain the message ID that is required to query the information about a dead-letter message from the SendResult parameter that is returned after the message is sent. You can also obtain the message ID by calling the OnsDLQMessagePageQueryByGroupId operation to query multiple messages at a time. The queried information about the dead-letter message includes the point in time when the message is stored, the message body, and attributes such as the message tag and the message key.
   * 
   * @param request - OnsDLQMessageGetByIdRequest
   * @returns OnsDLQMessageGetByIdResponse
   */
  async onsDLQMessageGetById(request: $_model.OnsDLQMessageGetByIdRequest): Promise<$_model.OnsDLQMessageGetByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsDLQMessageGetByIdWithOptions(request, runtime);
  }

  /**
   * Queries all dead-letter messages in a group within a period of time by page.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   If you do not know the ID of the dead-letter message that you want to query, you can call this operation to query all dead-letter messages that are sent to a specified consumer group within a specified time range. The results are returned by page.
   * *   We recommend that you specify a short time range to query dead-letter messages in this method. If you specify a long time range, a large number of dead-letter messages are returned. In this case, you cannot find the dead-letter message that you want to query in an efficient manner. You can perform the following steps to query dead-letter messages:
   *     1.  Perform a paged query by specifying the group ID, start time, end time, and number of entries to return on each page. If matched messages are found, the information about the dead-letter messages on the first page, total number of pages, and task ID are returned by default.
   *     2.  Specify the task ID and a page number to call this operation again to query the dead-letter messages on the specified page. In this query, the BeginTime, EndTime, and PageSize parameters do not take effect. By default, the system uses the values of these parameters that you specified in the request when you created the specified query task.
   * 
   * @param request - OnsDLQMessagePageQueryByGroupIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsDLQMessagePageQueryByGroupIdResponse
   */
  async onsDLQMessagePageQueryByGroupIdWithOptions(request: $_model.OnsDLQMessagePageQueryByGroupIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsDLQMessagePageQueryByGroupIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsDLQMessagePageQueryByGroupId",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsDLQMessagePageQueryByGroupIdResponse>(await this.callApi(params, req, runtime), new $_model.OnsDLQMessagePageQueryByGroupIdResponse({}));
  }

  /**
   * Queries all dead-letter messages in a group within a period of time by page.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   If you do not know the ID of the dead-letter message that you want to query, you can call this operation to query all dead-letter messages that are sent to a specified consumer group within a specified time range. The results are returned by page.
   * *   We recommend that you specify a short time range to query dead-letter messages in this method. If you specify a long time range, a large number of dead-letter messages are returned. In this case, you cannot find the dead-letter message that you want to query in an efficient manner. You can perform the following steps to query dead-letter messages:
   *     1.  Perform a paged query by specifying the group ID, start time, end time, and number of entries to return on each page. If matched messages are found, the information about the dead-letter messages on the first page, total number of pages, and task ID are returned by default.
   *     2.  Specify the task ID and a page number to call this operation again to query the dead-letter messages on the specified page. In this query, the BeginTime, EndTime, and PageSize parameters do not take effect. By default, the system uses the values of these parameters that you specified in the request when you created the specified query task.
   * 
   * @param request - OnsDLQMessagePageQueryByGroupIdRequest
   * @returns OnsDLQMessagePageQueryByGroupIdResponse
   */
  async onsDLQMessagePageQueryByGroupId(request: $_model.OnsDLQMessagePageQueryByGroupIdRequest): Promise<$_model.OnsDLQMessagePageQueryByGroupIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsDLQMessagePageQueryByGroupIdWithOptions(request, runtime);
  }

  /**
   * Resends a dead-letter message based on a specified message ID so that the dead-letter message can be consumed by consumers.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   A dead-letter message is a message that still fails to be consumed after the number of consumption retries reaches the upper limit. If the message still cannot be consumed after you re-send it, a message with the same message ID is added to the corresponding dead-letter queue. You can query the message ID on the Dead-letter Queues page in the ApsaraMQ for RocketMQ console or by calling API operations. You can obtain the number of consumption failures for a message based on the number of dead-letter messages with the same message ID in the dead-letter queue.
   * *   A dead-letter message is a message that fails to be consumed after the number of consumption retries reaches the upper limit. Generally, dead-letter messages are produced because of incorrect consumption logic. We recommend that you troubleshoot the consumption failures and then call this operation to send the message to the consumer group for consumption again.
   * *   ApsaraMQ for RocketMQ does not manage the status of dead-letter messages based on the consumption status of the dead-letter messages. After you call this operation to send a dead-letter message to a consumer group and the message is consumed, ApsaraMQ for RocketMQ does not remove the dead-letter message from the dead-letter queue. You must manage dead-letter messages and determine whether to send a dead-letter message to a consumer group for consumption. This way, you do not resend or reconsume the messages that are consumed.
   * 
   * @param request - OnsDLQMessageResendByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsDLQMessageResendByIdResponse
   */
  async onsDLQMessageResendByIdWithOptions(request: $_model.OnsDLQMessageResendByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsDLQMessageResendByIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.msgId)) {
      query["MsgId"] = request.msgId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsDLQMessageResendById",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsDLQMessageResendByIdResponse>(await this.callApi(params, req, runtime), new $_model.OnsDLQMessageResendByIdResponse({}));
  }

  /**
   * Resends a dead-letter message based on a specified message ID so that the dead-letter message can be consumed by consumers.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   A dead-letter message is a message that still fails to be consumed after the number of consumption retries reaches the upper limit. If the message still cannot be consumed after you re-send it, a message with the same message ID is added to the corresponding dead-letter queue. You can query the message ID on the Dead-letter Queues page in the ApsaraMQ for RocketMQ console or by calling API operations. You can obtain the number of consumption failures for a message based on the number of dead-letter messages with the same message ID in the dead-letter queue.
   * *   A dead-letter message is a message that fails to be consumed after the number of consumption retries reaches the upper limit. Generally, dead-letter messages are produced because of incorrect consumption logic. We recommend that you troubleshoot the consumption failures and then call this operation to send the message to the consumer group for consumption again.
   * *   ApsaraMQ for RocketMQ does not manage the status of dead-letter messages based on the consumption status of the dead-letter messages. After you call this operation to send a dead-letter message to a consumer group and the message is consumed, ApsaraMQ for RocketMQ does not remove the dead-letter message from the dead-letter queue. You must manage dead-letter messages and determine whether to send a dead-letter message to a consumer group for consumption. This way, you do not resend or reconsume the messages that are consumed.
   * 
   * @param request - OnsDLQMessageResendByIdRequest
   * @returns OnsDLQMessageResendByIdResponse
   */
  async onsDLQMessageResendById(request: $_model.OnsDLQMessageResendByIdRequest): Promise<$_model.OnsDLQMessageResendByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsDLQMessageResendByIdWithOptions(request, runtime);
  }

  /**
   * Configures read permissions on messages for a consumer group that is identified by a group ID.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation to configure the permissions for a consumer group to read messages based on a specified region of ApsaraMQ for RocketMQ and a specified group ID. You can call this operation in scenarios in which you want to forbid consumers in a specific group from reading messages.
   * 
   * @param request - OnsGroupConsumerUpdateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsGroupConsumerUpdateResponse
   */
  async onsGroupConsumerUpdateWithOptions(request: $_model.OnsGroupConsumerUpdateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsGroupConsumerUpdateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.readEnable)) {
      query["ReadEnable"] = request.readEnable;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsGroupConsumerUpdate",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsGroupConsumerUpdateResponse>(await this.callApi(params, req, runtime), new $_model.OnsGroupConsumerUpdateResponse({}));
  }

  /**
   * Configures read permissions on messages for a consumer group that is identified by a group ID.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation to configure the permissions for a consumer group to read messages based on a specified region of ApsaraMQ for RocketMQ and a specified group ID. You can call this operation in scenarios in which you want to forbid consumers in a specific group from reading messages.
   * 
   * @param request - OnsGroupConsumerUpdateRequest
   * @returns OnsGroupConsumerUpdateResponse
   */
  async onsGroupConsumerUpdate(request: $_model.OnsGroupConsumerUpdateRequest): Promise<$_model.OnsGroupConsumerUpdateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsGroupConsumerUpdateWithOptions(request, runtime);
  }

  /**
   * Creates a consumer group.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * When you release a new application or implement new business logic, you need new consumer groups. You can call this operation to create a consumer group.
   * 
   * @param request - OnsGroupCreateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsGroupCreateResponse
   */
  async onsGroupCreateWithOptions(request: $_model.OnsGroupCreateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsGroupCreateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsGroupCreate",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsGroupCreateResponse>(await this.callApi(params, req, runtime), new $_model.OnsGroupCreateResponse({}));
  }

  /**
   * Creates a consumer group.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * When you release a new application or implement new business logic, you need new consumer groups. You can call this operation to create a consumer group.
   * 
   * @param request - OnsGroupCreateRequest
   * @returns OnsGroupCreateResponse
   */
  async onsGroupCreate(request: $_model.OnsGroupCreateRequest): Promise<$_model.OnsGroupCreateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsGroupCreateWithOptions(request, runtime);
  }

  /**
   * Deletes a consumer group.
   * 
   * @remarks
   * > 
   * *   API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   After you delete a group, the consumers in the group immediately stop receiving messages. Exercise caution when you call this operation.
   * You can call this operation to delete a group when you need to reclaim the resources of the group. For example, after an application is brought offline, you can delete the groups that are used for the application. After you delete a group, the backend of ApsaraMQ for RocketMQ reclaims the resources of the group. The system requires a long period of time to reclaim the resources. We recommend that you do not create a group that uses the same name as a deleted group immediately after you delete the group. If the system fails to delete the specified group, troubleshoot the issue based on the error code.
   * 
   * @param request - OnsGroupDeleteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsGroupDeleteResponse
   */
  async onsGroupDeleteWithOptions(request: $_model.OnsGroupDeleteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsGroupDeleteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsGroupDelete",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsGroupDeleteResponse>(await this.callApi(params, req, runtime), new $_model.OnsGroupDeleteResponse({}));
  }

  /**
   * Deletes a consumer group.
   * 
   * @remarks
   * > 
   * *   API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   After you delete a group, the consumers in the group immediately stop receiving messages. Exercise caution when you call this operation.
   * You can call this operation to delete a group when you need to reclaim the resources of the group. For example, after an application is brought offline, you can delete the groups that are used for the application. After you delete a group, the backend of ApsaraMQ for RocketMQ reclaims the resources of the group. The system requires a long period of time to reclaim the resources. We recommend that you do not create a group that uses the same name as a deleted group immediately after you delete the group. If the system fails to delete the specified group, troubleshoot the issue based on the error code.
   * 
   * @param request - OnsGroupDeleteRequest
   * @returns OnsGroupDeleteResponse
   */
  async onsGroupDelete(request: $_model.OnsGroupDeleteRequest): Promise<$_model.OnsGroupDeleteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsGroupDeleteWithOptions(request, runtime);
  }

  /**
   * Queries one or more group IDs.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - OnsGroupListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsGroupListResponse
   */
  async onsGroupListWithOptions(request: $_model.OnsGroupListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsGroupListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsGroupList",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsGroupListResponse>(await this.callApi(params, req, runtime), new $_model.OnsGroupListResponse({}));
  }

  /**
   * Queries one or more group IDs.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - OnsGroupListRequest
   * @returns OnsGroupListResponse
   */
  async onsGroupList(request: $_model.OnsGroupListRequest): Promise<$_model.OnsGroupListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsGroupListWithOptions(request, runtime);
  }

  /**
   * Queries all topics to which a specified consumer group subscribes. If no consumer instance in the consumer group is online, no data is returned.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - OnsGroupSubDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsGroupSubDetailResponse
   */
  async onsGroupSubDetailWithOptions(request: $_model.OnsGroupSubDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsGroupSubDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsGroupSubDetail",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsGroupSubDetailResponse>(await this.callApi(params, req, runtime), new $_model.OnsGroupSubDetailResponse({}));
  }

  /**
   * Queries all topics to which a specified consumer group subscribes. If no consumer instance in the consumer group is online, no data is returned.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - OnsGroupSubDetailRequest
   * @returns OnsGroupSubDetailResponse
   */
  async onsGroupSubDetail(request: $_model.OnsGroupSubDetailRequest): Promise<$_model.OnsGroupSubDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsGroupSubDetailWithOptions(request, runtime);
  }

  /**
   * Queries the basic information of a Message Queue for Apache RocketMQ instance and the endpoint that a client uses to connect to the Message Queue for Apache RocketMQ instance to send and receive messages.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * To send and receive messages, a client must be connected to a ApsaraMQ for RocketMQ instance by using an endpoint. You can call this operation to query the endpoints of the instance.
   * 
   * @param request - OnsInstanceBaseInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsInstanceBaseInfoResponse
   */
  async onsInstanceBaseInfoWithOptions(request: $_model.OnsInstanceBaseInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsInstanceBaseInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsInstanceBaseInfo",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsInstanceBaseInfoResponse>(await this.callApi(params, req, runtime), new $_model.OnsInstanceBaseInfoResponse({}));
  }

  /**
   * Queries the basic information of a Message Queue for Apache RocketMQ instance and the endpoint that a client uses to connect to the Message Queue for Apache RocketMQ instance to send and receive messages.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * To send and receive messages, a client must be connected to a ApsaraMQ for RocketMQ instance by using an endpoint. You can call this operation to query the endpoints of the instance.
   * 
   * @param request - OnsInstanceBaseInfoRequest
   * @returns OnsInstanceBaseInfoResponse
   */
  async onsInstanceBaseInfo(request: $_model.OnsInstanceBaseInfoRequest): Promise<$_model.OnsInstanceBaseInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsInstanceBaseInfoWithOptions(request, runtime);
  }

  /**
   * Creates a Message Queue for Apache RocketMQ instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * An instance is a virtual machine (VM) that can be used to store information about the topics and groups of ApsaraMQ for RocketMQ. You can call this operation when you need to create service resources for the business that you want to launch. Before you call this operation, take note of the following limits:
   * *   A maximum of eight ApsaraMQ for RocketMQ instances can be deployed in each region.
   * *   This operation can be called to create only a Standard Edition instance. You can use the ApsaraMQ for RocketMQ console to create Standard Edition instances and Enterprise Platinum Edition instances. For information about how to create ApsaraMQ for RocketMQ instances, see [Manage instances](https://help.aliyun.com/document_detail/200153.html).
   * 
   * @param request - OnsInstanceCreateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsInstanceCreateResponse
   */
  async onsInstanceCreateWithOptions(request: $_model.OnsInstanceCreateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsInstanceCreateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsInstanceCreate",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsInstanceCreateResponse>(await this.callApi(params, req, runtime), new $_model.OnsInstanceCreateResponse({}));
  }

  /**
   * Creates a Message Queue for Apache RocketMQ instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * An instance is a virtual machine (VM) that can be used to store information about the topics and groups of ApsaraMQ for RocketMQ. You can call this operation when you need to create service resources for the business that you want to launch. Before you call this operation, take note of the following limits:
   * *   A maximum of eight ApsaraMQ for RocketMQ instances can be deployed in each region.
   * *   This operation can be called to create only a Standard Edition instance. You can use the ApsaraMQ for RocketMQ console to create Standard Edition instances and Enterprise Platinum Edition instances. For information about how to create ApsaraMQ for RocketMQ instances, see [Manage instances](https://help.aliyun.com/document_detail/200153.html).
   * 
   * @param request - OnsInstanceCreateRequest
   * @returns OnsInstanceCreateResponse
   */
  async onsInstanceCreate(request: $_model.OnsInstanceCreateRequest): Promise<$_model.OnsInstanceCreateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsInstanceCreateWithOptions(request, runtime);
  }

  /**
   * Deletes a Message Queue for Apache RocketMQ instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   You can call this operation when you need to reclaim resources. For example, after you unpublish an application, you can reclaim the resources that were used for the application. An instance can be deleted only when the instance does not contain topics and groups.
   * *   After an instance is deleted, the instance cannot be restored. Exercise caution when you call this operation.
   * 
   * @param request - OnsInstanceDeleteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsInstanceDeleteResponse
   */
  async onsInstanceDeleteWithOptions(request: $_model.OnsInstanceDeleteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsInstanceDeleteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsInstanceDelete",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsInstanceDeleteResponse>(await this.callApi(params, req, runtime), new $_model.OnsInstanceDeleteResponse({}));
  }

  /**
   * Deletes a Message Queue for Apache RocketMQ instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   You can call this operation when you need to reclaim resources. For example, after you unpublish an application, you can reclaim the resources that were used for the application. An instance can be deleted only when the instance does not contain topics and groups.
   * *   After an instance is deleted, the instance cannot be restored. Exercise caution when you call this operation.
   * 
   * @param request - OnsInstanceDeleteRequest
   * @returns OnsInstanceDeleteResponse
   */
  async onsInstanceDelete(request: $_model.OnsInstanceDeleteRequest): Promise<$_model.OnsInstanceDeleteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsInstanceDeleteWithOptions(request, runtime);
  }

  /**
   * Queries all Message Queue for Apache RocketMQ instances in a specified region within the current account.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - OnsInstanceInServiceListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsInstanceInServiceListResponse
   */
  async onsInstanceInServiceListWithOptions(request: $_model.OnsInstanceInServiceListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsInstanceInServiceListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.needResourceInfo)) {
      query["NeedResourceInfo"] = request.needResourceInfo;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsInstanceInServiceList",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsInstanceInServiceListResponse>(await this.callApi(params, req, runtime), new $_model.OnsInstanceInServiceListResponse({}));
  }

  /**
   * Queries all Message Queue for Apache RocketMQ instances in a specified region within the current account.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - OnsInstanceInServiceListRequest
   * @returns OnsInstanceInServiceListResponse
   */
  async onsInstanceInServiceList(request: $_model.OnsInstanceInServiceListRequest): Promise<$_model.OnsInstanceInServiceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsInstanceInServiceListWithOptions(request, runtime);
  }

  /**
   * Updates the name and description of a Message Queue for Apache RocketMQ instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * A maximum of eight ApsaraMQ for RocketMQ instances can be deployed in each region.
   * 
   * @param request - OnsInstanceUpdateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsInstanceUpdateResponse
   */
  async onsInstanceUpdateWithOptions(request: $_model.OnsInstanceUpdateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsInstanceUpdateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsInstanceUpdate",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsInstanceUpdateResponse>(await this.callApi(params, req, runtime), new $_model.OnsInstanceUpdateResponse({}));
  }

  /**
   * Updates the name and description of a Message Queue for Apache RocketMQ instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * A maximum of eight ApsaraMQ for RocketMQ instances can be deployed in each region.
   * 
   * @param request - OnsInstanceUpdateRequest
   * @returns OnsInstanceUpdateResponse
   */
  async onsInstanceUpdate(request: $_model.OnsInstanceUpdateRequest): Promise<$_model.OnsInstanceUpdateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsInstanceUpdateWithOptions(request, runtime);
  }

  /**
   * Queries the details of a message.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - OnsMessageDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsMessageDetailResponse
   */
  async onsMessageDetailWithOptions(request: $_model.OnsMessageDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsMessageDetailResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsMessageDetail",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsMessageDetailResponse>(await this.callApi(params, req, runtime), new $_model.OnsMessageDetailResponse({}));
  }

  /**
   * Queries the details of a message.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - OnsMessageDetailRequest
   * @returns OnsMessageDetailResponse
   */
  async onsMessageDetail(request: $_model.OnsMessageDetailRequest): Promise<$_model.OnsMessageDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsMessageDetailWithOptions(request, runtime);
  }

  /**
   * Queries messages by using a specified topic and message key.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   This operation uses the fuzzy match method to query messages based on a specified message key. The same message key may be used by multiple messages. Therefore, the returned result may contain information about multiple messages.
   * *   This operation can be used in scenarios in which you cannot obtain the IDs of the messages that you want to query. You can perform the following steps to query the information about messages:
   *     1.  Call this operation to query message IDs.
   *     2.  Call the **OnsMessageGetByMsgId** operation that uses the exact match method to query the details of a specified message. For more information about the **OnsMessageGetByMsgId** operation, see [OnsMessageGetByMsgId](https://help.aliyun.com/document_detail/29607.html).
   * 
   * @param request - OnsMessageGetByKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsMessageGetByKeyResponse
   */
  async onsMessageGetByKeyWithOptions(request: $_model.OnsMessageGetByKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsMessageGetByKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsMessageGetByKey",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsMessageGetByKeyResponse>(await this.callApi(params, req, runtime), new $_model.OnsMessageGetByKeyResponse({}));
  }

  /**
   * Queries messages by using a specified topic and message key.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   This operation uses the fuzzy match method to query messages based on a specified message key. The same message key may be used by multiple messages. Therefore, the returned result may contain information about multiple messages.
   * *   This operation can be used in scenarios in which you cannot obtain the IDs of the messages that you want to query. You can perform the following steps to query the information about messages:
   *     1.  Call this operation to query message IDs.
   *     2.  Call the **OnsMessageGetByMsgId** operation that uses the exact match method to query the details of a specified message. For more information about the **OnsMessageGetByMsgId** operation, see [OnsMessageGetByMsgId](https://help.aliyun.com/document_detail/29607.html).
   * 
   * @param request - OnsMessageGetByKeyRequest
   * @returns OnsMessageGetByKeyResponse
   */
  async onsMessageGetByKey(request: $_model.OnsMessageGetByKeyRequest): Promise<$_model.OnsMessageGetByKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsMessageGetByKeyWithOptions(request, runtime);
  }

  /**
   * Queries the information about a message by specifying the message ID and determines whether the message has been consumed.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   If a message is not consumed as expected, you can call this operation to query the information about the message for troubleshooting.
   * *   This operation uses the exact match method to query a message based on the message ID. You can obtain the message ID from the SendResult parameter that is returned after the message is sent. You must store the returned information after each message is sent. The queried information about a message includes the point in time when the message was sent, the broker on which the message is stored, and the attributes of the message such as the message key and tag.
   * 
   * @param request - OnsMessageGetByMsgIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsMessageGetByMsgIdResponse
   */
  async onsMessageGetByMsgIdWithOptions(request: $_model.OnsMessageGetByMsgIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsMessageGetByMsgIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.msgId)) {
      query["MsgId"] = request.msgId;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsMessageGetByMsgId",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsMessageGetByMsgIdResponse>(await this.callApi(params, req, runtime), new $_model.OnsMessageGetByMsgIdResponse({}));
  }

  /**
   * Queries the information about a message by specifying the message ID and determines whether the message has been consumed.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   If a message is not consumed as expected, you can call this operation to query the information about the message for troubleshooting.
   * *   This operation uses the exact match method to query a message based on the message ID. You can obtain the message ID from the SendResult parameter that is returned after the message is sent. You must store the returned information after each message is sent. The queried information about a message includes the point in time when the message was sent, the broker on which the message is stored, and the attributes of the message such as the message key and tag.
   * 
   * @param request - OnsMessageGetByMsgIdRequest
   * @returns OnsMessageGetByMsgIdResponse
   */
  async onsMessageGetByMsgId(request: $_model.OnsMessageGetByMsgIdRequest): Promise<$_model.OnsMessageGetByMsgIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsMessageGetByMsgIdWithOptions(request, runtime);
  }

  /**
   * Queries all messages that are stored in a specified topic within a specified time range by page.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   If you do not know the ID or key of a message that you want to query, you can call this operation to query all messages that are stored in the topic within a specified time range. The results are displayed by page.
   * *   We recommend that you specify a short time range to query messages. If you specify a long time range, a large number of messages are returned. In this case, you cannot find the message that you want to query in an efficient manner. You can perform the following steps to query messages:
   *     1.  Perform a paged query by specifying the topic, start time, end time, and number of entries to return on each page. If the topic contains messages, the information about the messages on the first page, total number of pages, and task ID are returned by default.
   *     2.  Specify the task ID and a page number to call this operation again to query the messages on the specified page. The BeginTime, EndTime, and PageSize parameters do not take effect. By default, the system uses the values of these parameters that you specified in the request when you created the specified query task.
   * 
   * @param request - OnsMessagePageQueryByTopicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsMessagePageQueryByTopicResponse
   */
  async onsMessagePageQueryByTopicWithOptions(request: $_model.OnsMessagePageQueryByTopicRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsMessagePageQueryByTopicResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsMessagePageQueryByTopic",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsMessagePageQueryByTopicResponse>(await this.callApi(params, req, runtime), new $_model.OnsMessagePageQueryByTopicResponse({}));
  }

  /**
   * Queries all messages that are stored in a specified topic within a specified time range by page.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   If you do not know the ID or key of a message that you want to query, you can call this operation to query all messages that are stored in the topic within a specified time range. The results are displayed by page.
   * *   We recommend that you specify a short time range to query messages. If you specify a long time range, a large number of messages are returned. In this case, you cannot find the message that you want to query in an efficient manner. You can perform the following steps to query messages:
   *     1.  Perform a paged query by specifying the topic, start time, end time, and number of entries to return on each page. If the topic contains messages, the information about the messages on the first page, total number of pages, and task ID are returned by default.
   *     2.  Specify the task ID and a page number to call this operation again to query the messages on the specified page. The BeginTime, EndTime, and PageSize parameters do not take effect. By default, the system uses the values of these parameters that you specified in the request when you created the specified query task.
   * 
   * @param request - OnsMessagePageQueryByTopicRequest
   * @returns OnsMessagePageQueryByTopicResponse
   */
  async onsMessagePageQueryByTopic(request: $_model.OnsMessagePageQueryByTopicRequest): Promise<$_model.OnsMessagePageQueryByTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsMessagePageQueryByTopicWithOptions(request, runtime);
  }

  /**
   * Pushes a message to a specified consumer.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * This operation can be used to check whether messages in a specified topic can be consumed by consumers in a specified consumer group. This operation obtains the body of the message that is specified by the MsgId parameter, re-encapsulates the message body to produce a new message, and then pushes the new message to a specified consumer. The content of the message that is sent to the consumer is the same as the content of the original message. They are not the same message because they use different message IDs.
   * 
   * @param request - OnsMessagePushRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsMessagePushResponse
   */
  async onsMessagePushWithOptions(request: $_model.OnsMessagePushRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsMessagePushResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.msgId)) {
      query["MsgId"] = request.msgId;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsMessagePush",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsMessagePushResponse>(await this.callApi(params, req, runtime), new $_model.OnsMessagePushResponse({}));
  }

  /**
   * Pushes a message to a specified consumer.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * This operation can be used to check whether messages in a specified topic can be consumed by consumers in a specified consumer group. This operation obtains the body of the message that is specified by the MsgId parameter, re-encapsulates the message body to produce a new message, and then pushes the new message to a specified consumer. The content of the message that is sent to the consumer is the same as the content of the original message. They are not the same message because they use different message IDs.
   * 
   * @param request - OnsMessagePushRequest
   * @returns OnsMessagePushResponse
   */
  async onsMessagePush(request: $_model.OnsMessagePushRequest): Promise<$_model.OnsMessagePushResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsMessagePushWithOptions(request, runtime);
  }

  /**
   * Queries the consumption status of a message by using the message ID.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   You can call this operation to check whether a specified message is consumed. If the message is not consumed, you can troubleshoot the issue based on the returned information.
   * *   This operation queries information based on the built-in offset mechanism of ApsaraMQ for RocketMQ. In most cases, the results are correct. If you have reset the consumer offset or cleared accumulated messages, the results may not be correct.
   * 
   * @param request - OnsMessageTraceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsMessageTraceResponse
   */
  async onsMessageTraceWithOptions(request: $_model.OnsMessageTraceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsMessageTraceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.msgId)) {
      query["MsgId"] = request.msgId;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsMessageTrace",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsMessageTraceResponse>(await this.callApi(params, req, runtime), new $_model.OnsMessageTraceResponse({}));
  }

  /**
   * Queries the consumption status of a message by using the message ID.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   You can call this operation to check whether a specified message is consumed. If the message is not consumed, you can troubleshoot the issue based on the returned information.
   * *   This operation queries information based on the built-in offset mechanism of ApsaraMQ for RocketMQ. In most cases, the results are correct. If you have reset the consumer offset or cleared accumulated messages, the results may not be correct.
   * 
   * @param request - OnsMessageTraceRequest
   * @returns OnsMessageTraceResponse
   */
  async onsMessageTrace(request: $_model.OnsMessageTraceRequest): Promise<$_model.OnsMessageTraceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsMessageTraceWithOptions(request, runtime);
  }

  /**
   * Queries regions where Message Queue for Apache RocketMQ is available.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * When you use an SDK to access and manage a ApsaraMQ for RocketMQ instance, you must sequentially specify the information about two regions. You can query the information about the second region by calling the OnsRegionList operation. You must apply for a public endpoint in the following scenarios:
   * *   Connect your application to ApsaraMQ for RocketMQ: Select the nearest API gateway endpoint based on the region where your application is deployed, and enter the corresponding **region ID**. The **regionId** is used to access Alibaba Cloud API Gateway because ApsaraMQ for RocketMQ instances provide API services by using the OpenAPI Explorer platform, which is also called POP.
   * *   Access a region to manage its resources: Specify a region where you want to manage ApsaraMQ for RocketMQ resources and enter the region ID. You can call the **OnsRegionList** operation to query a region ID.
   * 
   * @param request - OnsRegionListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsRegionListResponse
   */
  async onsRegionListWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.OnsRegionListResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "OnsRegionList",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsRegionListResponse>(await this.callApi(params, req, runtime), new $_model.OnsRegionListResponse({}));
  }

  /**
   * Queries regions where Message Queue for Apache RocketMQ is available.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * When you use an SDK to access and manage a ApsaraMQ for RocketMQ instance, you must sequentially specify the information about two regions. You can query the information about the second region by calling the OnsRegionList operation. You must apply for a public endpoint in the following scenarios:
   * *   Connect your application to ApsaraMQ for RocketMQ: Select the nearest API gateway endpoint based on the region where your application is deployed, and enter the corresponding **region ID**. The **regionId** is used to access Alibaba Cloud API Gateway because ApsaraMQ for RocketMQ instances provide API services by using the OpenAPI Explorer platform, which is also called POP.
   * *   Access a region to manage its resources: Specify a region where you want to manage ApsaraMQ for RocketMQ resources and enter the region ID. You can call the **OnsRegionList** operation to query a region ID.
   * @returns OnsRegionListResponse
   */
  async onsRegionList(): Promise<$_model.OnsRegionListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsRegionListWithOptions(runtime);
  }

  /**
   * Creates a topic.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * When you want to release a new application or expand your business, you can call this operation to create a topic based on your business requirements.
   * 
   * @param request - OnsTopicCreateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsTopicCreateResponse
   */
  async onsTopicCreateWithOptions(request: $_model.OnsTopicCreateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsTopicCreateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.messageType)) {
      query["MessageType"] = request.messageType;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsTopicCreate",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsTopicCreateResponse>(await this.callApi(params, req, runtime), new $_model.OnsTopicCreateResponse({}));
  }

  /**
   * Creates a topic.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * When you want to release a new application or expand your business, you can call this operation to create a topic based on your business requirements.
   * 
   * @param request - OnsTopicCreateRequest
   * @returns OnsTopicCreateResponse
   */
  async onsTopicCreate(request: $_model.OnsTopicCreateRequest): Promise<$_model.OnsTopicCreateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsTopicCreateWithOptions(request, runtime);
  }

  /**
   * Deletes a topic.
   * 
   * @remarks
   * >  API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur. - After you delete the topic, the publishing and subscription relationships that are constructed based on the topic are cleared. Exercise caution when you call this operation.
   * You can call this operation to delete a topic when you need to reclaim the resources from the topic. For example, after an application is brought offline, you can delete the topics that are used for the application. After you delete a topic, the backend of ApsaraMQ for RocketMQ reclaims the resources from the topic. The system requires a long period of time to reclaim the resources. After you delete a topic, we recommend that you do not create a topic that uses the same name as the deleted topic within a short period of time. If the system fails to delete the specified topic, troubleshoot the issue based on the error code.
   * 
   * @param request - OnsTopicDeleteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsTopicDeleteResponse
   */
  async onsTopicDeleteWithOptions(request: $_model.OnsTopicDeleteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsTopicDeleteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsTopicDelete",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsTopicDeleteResponse>(await this.callApi(params, req, runtime), new $_model.OnsTopicDeleteResponse({}));
  }

  /**
   * Deletes a topic.
   * 
   * @remarks
   * >  API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur. - After you delete the topic, the publishing and subscription relationships that are constructed based on the topic are cleared. Exercise caution when you call this operation.
   * You can call this operation to delete a topic when you need to reclaim the resources from the topic. For example, after an application is brought offline, you can delete the topics that are used for the application. After you delete a topic, the backend of ApsaraMQ for RocketMQ reclaims the resources from the topic. The system requires a long period of time to reclaim the resources. After you delete a topic, we recommend that you do not create a topic that uses the same name as the deleted topic within a short period of time. If the system fails to delete the specified topic, troubleshoot the issue based on the error code.
   * 
   * @param request - OnsTopicDeleteRequest
   * @returns OnsTopicDeleteResponse
   */
  async onsTopicDelete(request: $_model.OnsTopicDeleteRequest): Promise<$_model.OnsTopicDeleteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsTopicDeleteWithOptions(request, runtime);
  }

  /**
   * Queries the information about topics that belong to the current account.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * This operation returns the basic information about topics and does not return the details of topics.
   * 
   * @param request - OnsTopicListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsTopicListResponse
   */
  async onsTopicListWithOptions(request: $_model.OnsTopicListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsTopicListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsTopicList",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsTopicListResponse>(await this.callApi(params, req, runtime), new $_model.OnsTopicListResponse({}));
  }

  /**
   * Queries the information about topics that belong to the current account.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * This operation returns the basic information about topics and does not return the details of topics.
   * 
   * @param request - OnsTopicListRequest
   * @returns OnsTopicListResponse
   */
  async onsTopicList(request: $_model.OnsTopicListRequest): Promise<$_model.OnsTopicListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsTopicListWithOptions(request, runtime);
  }

  /**
   * Queries the total number of messages in a topic and the status of the topic.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can determine the resource usage of a topic based on the information that is returned by this operation. The returned information includes the total number of messages in the topic and the most recent point in time when a message was published to the topic.
   * 
   * @param request - OnsTopicStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsTopicStatusResponse
   */
  async onsTopicStatusWithOptions(request: $_model.OnsTopicStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsTopicStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsTopicStatus",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsTopicStatusResponse>(await this.callApi(params, req, runtime), new $_model.OnsTopicStatusResponse({}));
  }

  /**
   * Queries the total number of messages in a topic and the status of the topic.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can determine the resource usage of a topic based on the information that is returned by this operation. The returned information includes the total number of messages in the topic and the most recent point in time when a message was published to the topic.
   * 
   * @param request - OnsTopicStatusRequest
   * @returns OnsTopicStatusResponse
   */
  async onsTopicStatus(request: $_model.OnsTopicStatusRequest): Promise<$_model.OnsTopicStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsTopicStatusWithOptions(request, runtime);
  }

  /**
   * Queries the online consumer groups that subscribe to a specified topic.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation to query the online consumer groups that subscribe to a specified topic. If all consumers in a group are offline, the information about the group is not returned.
   * 
   * @param request - OnsTopicSubDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsTopicSubDetailResponse
   */
  async onsTopicSubDetailWithOptions(request: $_model.OnsTopicSubDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsTopicSubDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsTopicSubDetail",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsTopicSubDetailResponse>(await this.callApi(params, req, runtime), new $_model.OnsTopicSubDetailResponse({}));
  }

  /**
   * Queries the online consumer groups that subscribe to a specified topic.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation to query the online consumer groups that subscribe to a specified topic. If all consumers in a group are offline, the information about the group is not returned.
   * 
   * @param request - OnsTopicSubDetailRequest
   * @returns OnsTopicSubDetailResponse
   */
  async onsTopicSubDetail(request: $_model.OnsTopicSubDetailRequest): Promise<$_model.OnsTopicSubDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsTopicSubDetailWithOptions(request, runtime);
  }

  /**
   * Configures the read/write mode for a specified topic.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation to forbid read or write operations on a specific topic.
   * 
   * @deprecated OpenAPI OnsTopicUpdate is deprecated
   * 
   * @param request - OnsTopicUpdateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsTopicUpdateResponse
   */
  async onsTopicUpdateWithOptions(request: $_model.OnsTopicUpdateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsTopicUpdateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.perm)) {
      query["Perm"] = request.perm;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsTopicUpdate",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsTopicUpdateResponse>(await this.callApi(params, req, runtime), new $_model.OnsTopicUpdateResponse({}));
  }

  /**
   * Configures the read/write mode for a specified topic.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation to forbid read or write operations on a specific topic.
   * 
   * @deprecated OpenAPI OnsTopicUpdate is deprecated
   * 
   * @param request - OnsTopicUpdateRequest
   * @returns OnsTopicUpdateResponse
   */
  // Deprecated
  async onsTopicUpdate(request: $_model.OnsTopicUpdateRequest): Promise<$_model.OnsTopicUpdateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsTopicUpdateWithOptions(request, runtime);
  }

  /**
   * The tracing results are queried by specifying the ID of a trace query task.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   Before you call this operation to query the details of the trace of a message, you must create a task to query the trace of the message based on the message ID or message key and obtain the task ID. Then, you can call this operation to query the details of the message trace based on the task ID. You can call the [OnsTraceQueryByMsgId](https://help.aliyun.com/document_detail/445322.html) operation or the [OnsTraceQueryByMsgKey](https://help.aliyun.com/document_detail/445324.html) operation to create a task to query the trace of the message and obtain the task ID from the **QueryId** response parameter.
   * *   A trace query task is time-consuming. If you call this operation to query the details immediately after you create a trace query task, the results may be empty. In this case, we recommend that you try again later.
   * 
   * @param request - OnsTraceGetResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsTraceGetResultResponse
   */
  async onsTraceGetResultWithOptions(request: $_model.OnsTraceGetResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsTraceGetResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.queryId)) {
      query["QueryId"] = request.queryId;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsTraceGetResult",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsTraceGetResultResponse>(await this.callApi(params, req, runtime), new $_model.OnsTraceGetResultResponse({}));
  }

  /**
   * The tracing results are queried by specifying the ID of a trace query task.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   Before you call this operation to query the details of the trace of a message, you must create a task to query the trace of the message based on the message ID or message key and obtain the task ID. Then, you can call this operation to query the details of the message trace based on the task ID. You can call the [OnsTraceQueryByMsgId](https://help.aliyun.com/document_detail/445322.html) operation or the [OnsTraceQueryByMsgKey](https://help.aliyun.com/document_detail/445324.html) operation to create a task to query the trace of the message and obtain the task ID from the **QueryId** response parameter.
   * *   A trace query task is time-consuming. If you call this operation to query the details immediately after you create a trace query task, the results may be empty. In this case, we recommend that you try again later.
   * 
   * @param request - OnsTraceGetResultRequest
   * @returns OnsTraceGetResultResponse
   */
  async onsTraceGetResult(request: $_model.OnsTraceGetResultRequest): Promise<$_model.OnsTraceGetResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsTraceGetResultWithOptions(request, runtime);
  }

  /**
   * Creates a task to query the trace of a message based on the message ID and the name of the topic in which the message is stored. The task ID is returned.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * If you want to query the trace of a message based on the message ID, you can call this operation to create a query task. After you obtain the task ID, you can call the [OnsTraceGetResult](https://help.aliyun.com/document_detail/59832.html) operation to query the details of the message trace based on the task ID.
   * 
   * @param request - OnsTraceQueryByMsgIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsTraceQueryByMsgIdResponse
   */
  async onsTraceQueryByMsgIdWithOptions(request: $_model.OnsTraceQueryByMsgIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsTraceQueryByMsgIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.msgId)) {
      query["MsgId"] = request.msgId;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsTraceQueryByMsgId",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsTraceQueryByMsgIdResponse>(await this.callApi(params, req, runtime), new $_model.OnsTraceQueryByMsgIdResponse({}));
  }

  /**
   * Creates a task to query the trace of a message based on the message ID and the name of the topic in which the message is stored. The task ID is returned.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * If you want to query the trace of a message based on the message ID, you can call this operation to create a query task. After you obtain the task ID, you can call the [OnsTraceGetResult](https://help.aliyun.com/document_detail/59832.html) operation to query the details of the message trace based on the task ID.
   * 
   * @param request - OnsTraceQueryByMsgIdRequest
   * @returns OnsTraceQueryByMsgIdResponse
   */
  async onsTraceQueryByMsgId(request: $_model.OnsTraceQueryByMsgIdRequest): Promise<$_model.OnsTraceQueryByMsgIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsTraceQueryByMsgIdWithOptions(request, runtime);
  }

  /**
   * Creates a trace query task based on the topic name and message key and obtains the ID of the query task.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * If you want to query the trace of a message based on the message key that you obtained, you can call this operation to create a query task. After you obtain the task ID, you can call the OnsTraceGetResult operation to query the details of the message trace based on the task ID.
   * 
   * @param request - OnsTraceQueryByMsgKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsTraceQueryByMsgKeyResponse
   */
  async onsTraceQueryByMsgKeyWithOptions(request: $_model.OnsTraceQueryByMsgKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsTraceQueryByMsgKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.msgKey)) {
      query["MsgKey"] = request.msgKey;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsTraceQueryByMsgKey",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsTraceQueryByMsgKeyResponse>(await this.callApi(params, req, runtime), new $_model.OnsTraceQueryByMsgKeyResponse({}));
  }

  /**
   * Creates a trace query task based on the topic name and message key and obtains the ID of the query task.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * If you want to query the trace of a message based on the message key that you obtained, you can call this operation to create a query task. After you obtain the task ID, you can call the OnsTraceGetResult operation to query the details of the message trace based on the task ID.
   * 
   * @param request - OnsTraceQueryByMsgKeyRequest
   * @returns OnsTraceQueryByMsgKeyResponse
   */
  async onsTraceQueryByMsgKey(request: $_model.OnsTraceQueryByMsgKeyRequest): Promise<$_model.OnsTraceQueryByMsgKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsTraceQueryByMsgKeyWithOptions(request, runtime);
  }

  /**
   * Queries the statistics about messages that are consumed by a consumer group within a specific period of time.
   * 
   * @remarks
   * >  API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation to query the following statistics that are collected in a production environment:
   * *   The number of messages that are consumed during each sampling period
   * *   The transactions per second (TPS) for message consumption during each sampling period
   * If your application consumes a small number of messages and does not consume messages at specific intervals, we recommend that you query the number of messages that are consumed during each sampling period because the statistics of TPS may not show a clear change trend.
   * 
   * @param request - OnsTrendGroupOutputTpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsTrendGroupOutputTpsResponse
   */
  async onsTrendGroupOutputTpsWithOptions(request: $_model.OnsTrendGroupOutputTpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsTrendGroupOutputTpsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsTrendGroupOutputTps",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsTrendGroupOutputTpsResponse>(await this.callApi(params, req, runtime), new $_model.OnsTrendGroupOutputTpsResponse({}));
  }

  /**
   * Queries the statistics about messages that are consumed by a consumer group within a specific period of time.
   * 
   * @remarks
   * >  API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation to query the following statistics that are collected in a production environment:
   * *   The number of messages that are consumed during each sampling period
   * *   The transactions per second (TPS) for message consumption during each sampling period
   * If your application consumes a small number of messages and does not consume messages at specific intervals, we recommend that you query the number of messages that are consumed during each sampling period because the statistics of TPS may not show a clear change trend.
   * 
   * @param request - OnsTrendGroupOutputTpsRequest
   * @returns OnsTrendGroupOutputTpsResponse
   */
  async onsTrendGroupOutputTps(request: $_model.OnsTrendGroupOutputTpsRequest): Promise<$_model.OnsTrendGroupOutputTpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsTrendGroupOutputTpsWithOptions(request, runtime);
  }

  /**
   * Queries the statistics about messages that are published to a topic within a period of time.
   * 
   * @remarks
   * >  API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation to query the statistics of messages that are published to a specific topic in a production environment. You can query the number of messages that are published to the topic or the transactions per second (TPS) for message publishing within a specified time range based on your business requirements.
   * If your application publishes a small number of messages and does not publish messages at specific intervals, we recommend that you query the number of messages that are published to the topic during each sampling period because the statistics of TPS may not show a clear change trend.
   * 
   * @param request - OnsTrendTopicInputTpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsTrendTopicInputTpsResponse
   */
  async onsTrendTopicInputTpsWithOptions(request: $_model.OnsTrendTopicInputTpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnsTrendTopicInputTpsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnsTrendTopicInputTps",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnsTrendTopicInputTpsResponse>(await this.callApi(params, req, runtime), new $_model.OnsTrendTopicInputTpsResponse({}));
  }

  /**
   * Queries the statistics about messages that are published to a topic within a period of time.
   * 
   * @remarks
   * >  API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation to query the statistics of messages that are published to a specific topic in a production environment. You can query the number of messages that are published to the topic or the transactions per second (TPS) for message publishing within a specified time range based on your business requirements.
   * If your application publishes a small number of messages and does not publish messages at specific intervals, we recommend that you query the number of messages that are published to the topic during each sampling period because the statistics of TPS may not show a clear change trend.
   * 
   * @param request - OnsTrendTopicInputTpsRequest
   * @returns OnsTrendTopicInputTpsResponse
   */
  async onsTrendTopicInputTps(request: $_model.OnsTrendTopicInputTpsRequest): Promise<$_model.OnsTrendTopicInputTpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onsTrendTopicInputTpsWithOptions(request, runtime);
  }

  /**
   * Activates Message Queue for Apache RocketMQ.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation the first time you use ApsaraMQ for RocketMQ. You can use ApsaraMQ for RocketMQ only after the service is activated.
   * The ApsaraMQ for RocketMQ service can be activated only in the China (Hangzhou) region. Service activation is not billed.
   * 
   * @param request - OpenOnsServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenOnsServiceResponse
   */
  async openOnsServiceWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.OpenOnsServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "OpenOnsService",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenOnsServiceResponse>(await this.callApi(params, req, runtime), new $_model.OpenOnsServiceResponse({}));
  }

  /**
   * Activates Message Queue for Apache RocketMQ.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation the first time you use ApsaraMQ for RocketMQ. You can use ApsaraMQ for RocketMQ only after the service is activated.
   * The ApsaraMQ for RocketMQ service can be activated only in the China (Hangzhou) region. Service activation is not billed.
   * @returns OpenOnsServiceResponse
   */
  async openOnsService(): Promise<$_model.OpenOnsServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openOnsServiceWithOptions(runtime);
  }

  /**
   * Adds tags to a resource.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation to attach tags to a source. You can use tags to classify resources in ApsaraMQ for RocketMQ. This can help you aggregate and search resources in an efficient manner.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
  }

  /**
   * Adds tags to a resource.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation to attach tags to a source. You can use tags to classify resources in ApsaraMQ for RocketMQ. This can help you aggregate and search resources in an efficient manner.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Detaches tags from a specified resource and deletes the tags.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: $_model.UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UntagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UntagResourcesResponse({}));
  }

  /**
   * Detaches tags from a specified resource and deletes the tags.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
