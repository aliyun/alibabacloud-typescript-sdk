// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import GatewayClient from '@alicloud/gateway-mns';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._productId = "SMQProxy";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "regional";
  }


  /**
   * Deletes messages from a queue in a batch. A maximum of 16 messages can be deleted at a time.
   * 
   * @remarks
   * ## Request description
   * - Use this operation together with BatchReceiveMessage.
   * - The result of a batch operation may contain both successful and failed sub-requests. The HTTP status code is 204 only when all sub-requests succeed.
   * - A maximum of 16 messages can be deleted per request.
   * - Provide the list of `ReceiptHandle` values returned from the previous consumption to identify the messages to delete.
   * - This operation succeeds only when executed before `NextVisibleTime`. After the timeout, the message becomes Active again, the ReceiptHandle becomes invalid, and you must consume the message again to obtain a new handle.
   * 
   * @param request - BatchDeleteMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteMessageResponse
   */
  async batchDeleteMessageWithOptions(queueName: string, request: $_model.BatchDeleteMessageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BatchDeleteMessageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.receiptHandles)) {
      body["ReceiptHandles"] = request.receiptHandles;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchDeleteMessage",
      version: "2026-04-09",
      protocol: "HTTPS",
      pathname: `/queues/${queueName}/messages`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchDeleteMessageResponse>(await this.execute(params, req, runtime), new $_model.BatchDeleteMessageResponse({}));
  }

  /**
   * Deletes messages from a queue in a batch. A maximum of 16 messages can be deleted at a time.
   * 
   * @remarks
   * ## Request description
   * - Use this operation together with BatchReceiveMessage.
   * - The result of a batch operation may contain both successful and failed sub-requests. The HTTP status code is 204 only when all sub-requests succeed.
   * - A maximum of 16 messages can be deleted per request.
   * - Provide the list of `ReceiptHandle` values returned from the previous consumption to identify the messages to delete.
   * - This operation succeeds only when executed before `NextVisibleTime`. After the timeout, the message becomes Active again, the ReceiptHandle becomes invalid, and you must consume the message again to obtain a new handle.
   * 
   * @param request - BatchDeleteMessageRequest
   * @returns BatchDeleteMessageResponse
   */
  async batchDeleteMessage(queueName: string, request: $_model.BatchDeleteMessageRequest): Promise<$_model.BatchDeleteMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchDeleteMessageWithOptions(queueName, request, headers, runtime);
  }

  /**
   * Batch peeks at messages in a queue without changing the message status.
   * 
   * @remarks
   * ## Request description
   * - This operation batch peeks at messages in a specified queue. You can peek at up to 16 messages at a time.
   * - This operation does not change the message status. Messages remain in the Active state.
   * - Long polling is not supported.
   * - Provide `queueName` as a path parameter, and set the query parameter `peekonly=true` along with `numOfMessages` (range: 1 to 16) to specify the number of messages to peek at.
   * - A successful response returns an array containing the details of the requested messages, including but not limited to the message ID, body, and enqueue time.
   * - If the specified queue does not exist or no visible messages are in the queue, the corresponding error code is returned.
   * 
   * @param request - BatchPeekMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchPeekMessageResponse
   */
  async batchPeekMessageWithOptions(queueName: string, request: $_model.BatchPeekMessageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BatchPeekMessageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.numOfMessages)) {
      query["numOfMessages"] = request.numOfMessages;
    }

    if (!$dara.isNull(request.peekonly)) {
      query["peekonly"] = request.peekonly;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchPeekMessage",
      version: "2026-04-09",
      protocol: "HTTPS",
      pathname: `/queues/${queueName}/messages`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchPeekMessageResponse>(await this.execute(params, req, runtime), new $_model.BatchPeekMessageResponse({}));
  }

  /**
   * Batch peeks at messages in a queue without changing the message status.
   * 
   * @remarks
   * ## Request description
   * - This operation batch peeks at messages in a specified queue. You can peek at up to 16 messages at a time.
   * - This operation does not change the message status. Messages remain in the Active state.
   * - Long polling is not supported.
   * - Provide `queueName` as a path parameter, and set the query parameter `peekonly=true` along with `numOfMessages` (range: 1 to 16) to specify the number of messages to peek at.
   * - A successful response returns an array containing the details of the requested messages, including but not limited to the message ID, body, and enqueue time.
   * - If the specified queue does not exist or no visible messages are in the queue, the corresponding error code is returned.
   * 
   * @param request - BatchPeekMessageRequest
   * @returns BatchPeekMessageResponse
   */
  async batchPeekMessage(queueName: string, request: $_model.BatchPeekMessageRequest): Promise<$_model.BatchPeekMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchPeekMessageWithOptions(queueName, request, headers, runtime);
  }

  /**
   * Batch receives up to 16 messages from a specified queue for consumption.
   * 
   * @remarks
   * ## Operation description
   * - This operation changes the status of received messages to Inactive. The Inactive duration is determined by the `VisibilityTimeout` attribute of the queue.
   * - Consumers must call DeleteMessage to delete messages within the VisibilityTimeout period. Otherwise, messages become Active again.
   * - Long polling is supported: if you set `waitseconds > 0` and the queue is empty, the request waits until a message arrives or the timeout expires.
   * >Notice: After long polling is enabled, reduce the concurrency of external long polling calls and select an appropriate long polling duration. The server dynamically adjusts the concurrency limit for long polling based on factors such as the number of long polling requests, long polling wait time, and number of access IP addresses. When the queue has no messages, requests that exceed the long polling limit cannot be listened to and directly return 404 MessageNotExist (billed normally by request count). If you need to temporarily increase the long polling limit, submit a ticket promptly.
   * 
   * @param request - BatchReceiveMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchReceiveMessageResponse
   */
  async batchReceiveMessageWithOptions(queueName: string, request: $_model.BatchReceiveMessageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BatchReceiveMessageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.numOfMessages)) {
      query["numOfMessages"] = request.numOfMessages;
    }

    if (!$dara.isNull(request.waitseconds)) {
      query["waitseconds"] = request.waitseconds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchReceiveMessage",
      version: "2026-04-09",
      protocol: "HTTPS",
      pathname: `/queues/${queueName}/messages`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchReceiveMessageResponse>(await this.execute(params, req, runtime), new $_model.BatchReceiveMessageResponse({}));
  }

  /**
   * Batch receives up to 16 messages from a specified queue for consumption.
   * 
   * @remarks
   * ## Operation description
   * - This operation changes the status of received messages to Inactive. The Inactive duration is determined by the `VisibilityTimeout` attribute of the queue.
   * - Consumers must call DeleteMessage to delete messages within the VisibilityTimeout period. Otherwise, messages become Active again.
   * - Long polling is supported: if you set `waitseconds > 0` and the queue is empty, the request waits until a message arrives or the timeout expires.
   * >Notice: After long polling is enabled, reduce the concurrency of external long polling calls and select an appropriate long polling duration. The server dynamically adjusts the concurrency limit for long polling based on factors such as the number of long polling requests, long polling wait time, and number of access IP addresses. When the queue has no messages, requests that exceed the long polling limit cannot be listened to and directly return 404 MessageNotExist (billed normally by request count). If you need to temporarily increase the long polling limit, submit a ticket promptly.
   * 
   * @param request - BatchReceiveMessageRequest
   * @returns BatchReceiveMessageResponse
   */
  async batchReceiveMessage(queueName: string, request: $_model.BatchReceiveMessageRequest): Promise<$_model.BatchReceiveMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchReceiveMessageWithOptions(queueName, request, headers, runtime);
  }

  /**
   * Sends a batch of up to 16 messages to a specified queue, with a total size not exceeding 64 KB.
   * 
   * @remarks
   * ## Request description
   * - The total size of messages in a single batch request must not exceed 64 KB.
   * - `BatchSendMessage` and `SendMessage` use the same URL path. They are distinguished by the body structure: if the body contains a `Messages` array, it is a batch send operation. Otherwise, it is a single message send operation.
   * - The response of a batch operation may contain both successful and failed sub-messages.
   * - Each request can contain multiple message objects. Each message object can have a different delay time and priority.
   * - For FIFO queues, you can use the `MessageGroupId` parameter to specify a message group ID.
   * 
   * @param request - BatchSendMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchSendMessageResponse
   */
  async batchSendMessageWithOptions(queueName: string, request: $_model.BatchSendMessageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BatchSendMessageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.messages)) {
      body["Messages"] = request.messages;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchSendMessage",
      version: "2026-04-09",
      protocol: "HTTPS",
      pathname: `/queues/${queueName}/messages`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchSendMessageResponse>(await this.execute(params, req, runtime), new $_model.BatchSendMessageResponse({}));
  }

  /**
   * Sends a batch of up to 16 messages to a specified queue, with a total size not exceeding 64 KB.
   * 
   * @remarks
   * ## Request description
   * - The total size of messages in a single batch request must not exceed 64 KB.
   * - `BatchSendMessage` and `SendMessage` use the same URL path. They are distinguished by the body structure: if the body contains a `Messages` array, it is a batch send operation. Otherwise, it is a single message send operation.
   * - The response of a batch operation may contain both successful and failed sub-messages.
   * - Each request can contain multiple message objects. Each message object can have a different delay time and priority.
   * - For FIFO queues, you can use the `MessageGroupId` parameter to specify a message group ID.
   * 
   * @param request - BatchSendMessageRequest
   * @returns BatchSendMessageResponse
   */
  async batchSendMessage(queueName: string, request: $_model.BatchSendMessageRequest): Promise<$_model.BatchSendMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchSendMessageWithOptions(queueName, request, headers, runtime);
  }

  /**
   * Extends or shortens the invisibility period of a message that is in the Inactive state.
   * 
   * @remarks
   * ## Operation description
   * - This operation allows you to modify the VisibilityTimeout of a message that has been consumed and is currently in the Inactive state. The VisibilityTimeout is the countdown from the current moment until the message becomes Active again.
   * - A successful invocation returns a new `ReceiptHandle`. Use this new handle for subsequent delete or visibility timeout modification operations on this message.
   * - This operation can only be invoked successfully before `NextVisibleTime`. Otherwise, a fault is returned.
   * - Common scenarios include when a consumer requires a longer processing time and needs to extend the VisibilityTimeout to prevent the message from being consumed again.
   * 
   * @param request - ChangeMessageVisibilityRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeMessageVisibilityResponse
   */
  async changeMessageVisibilityWithOptions(queueName: string, request: $_model.ChangeMessageVisibilityRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeMessageVisibilityResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.receiptHandle)) {
      query["receiptHandle"] = request.receiptHandle;
    }

    if (!$dara.isNull(request.visibilityTimeout)) {
      query["visibilityTimeout"] = request.visibilityTimeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeMessageVisibility",
      version: "2026-04-09",
      protocol: "HTTPS",
      pathname: `/queues/${queueName}/messages`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeMessageVisibilityResponse>(await this.execute(params, req, runtime), new $_model.ChangeMessageVisibilityResponse({}));
  }

  /**
   * Extends or shortens the invisibility period of a message that is in the Inactive state.
   * 
   * @remarks
   * ## Operation description
   * - This operation allows you to modify the VisibilityTimeout of a message that has been consumed and is currently in the Inactive state. The VisibilityTimeout is the countdown from the current moment until the message becomes Active again.
   * - A successful invocation returns a new `ReceiptHandle`. Use this new handle for subsequent delete or visibility timeout modification operations on this message.
   * - This operation can only be invoked successfully before `NextVisibleTime`. Otherwise, a fault is returned.
   * - Common scenarios include when a consumer requires a longer processing time and needs to extend the VisibilityTimeout to prevent the message from being consumed again.
   * 
   * @param request - ChangeMessageVisibilityRequest
   * @returns ChangeMessageVisibilityResponse
   */
  async changeMessageVisibility(queueName: string, request: $_model.ChangeMessageVisibilityRequest): Promise<$_model.ChangeMessageVisibilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.changeMessageVisibilityWithOptions(queueName, request, headers, runtime);
  }

  /**
   * Publishes a message to a specified topic. The message is pushed to all subscribed endpoints.
   * 
   * @remarks
   * ## Operation description
   * - After a message is published, it is pushed to the endpoints of all subscriptions under the topic.
   * - You do not need to set `MessageAttributes` when pushing messages to queues or HTTP endpoints.
   * - You must set the corresponding `MessageAttributes` sub-properties when pushing messages to email, SMS, or mobile push endpoints.
   * - Base64-encode the message content beforehand to avoid special character issues.
   * 
   * @param request - PublishMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishMessageResponse
   */
  async publishMessageWithOptions(topicName: string, request: $_model.PublishMessageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PublishMessageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.messageAttributes)) {
      body["MessageAttributes"] = request.messageAttributes;
    }

    if (!$dara.isNull(request.messageBody)) {
      body["MessageBody"] = request.messageBody;
    }

    if (!$dara.isNull(request.messageGroupId)) {
      body["MessageGroupId"] = request.messageGroupId;
    }

    if (!$dara.isNull(request.messageTag)) {
      body["MessageTag"] = request.messageTag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishMessage",
      version: "2026-04-09",
      protocol: "HTTPS",
      pathname: `/topics/${topicName}/messages`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishMessageResponse>(await this.execute(params, req, runtime), new $_model.PublishMessageResponse({}));
  }

  /**
   * Publishes a message to a specified topic. The message is pushed to all subscribed endpoints.
   * 
   * @remarks
   * ## Operation description
   * - After a message is published, it is pushed to the endpoints of all subscriptions under the topic.
   * - You do not need to set `MessageAttributes` when pushing messages to queues or HTTP endpoints.
   * - You must set the corresponding `MessageAttributes` sub-properties when pushing messages to email, SMS, or mobile push endpoints.
   * - Base64-encode the message content beforehand to avoid special character issues.
   * 
   * @param request - PublishMessageRequest
   * @returns PublishMessageResponse
   */
  async publishMessage(topicName: string, request: $_model.PublishMessageRequest): Promise<$_model.PublishMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishMessageWithOptions(topicName, request, headers, runtime);
  }

  /**
   * Sends a message to a specified queue with support for delay and priority settings.
   * 
   * @remarks
   * ## Operation description
   * - The **SendMessage** operation sends a message to a specified queue.
   * - Messages can be consumed immediately or delayed by setting the `DelaySeconds` parameter.
   * - You can specify a priority for the message. A smaller value indicates a higher priority.
   * - For FIFO queues, use `MessageGroupId` to ensure ordered delivery of messages within the same group.
   * - You can also set custom attributes in `UserProperties` as a JSON-formatted string to provide additional information.
   * - When `DelaySeconds` is greater than 0, the `ReceiptHandle` returned by the API can be used to delete the delayed message before it becomes Active.
   * 
   * @param request - SendMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendMessageResponse
   */
  async sendMessageWithOptions(queueName: string, request: $_model.SendMessageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SendMessageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.delaySeconds)) {
      body["DelaySeconds"] = request.delaySeconds;
    }

    if (!$dara.isNull(request.messageBody)) {
      body["MessageBody"] = request.messageBody;
    }

    if (!$dara.isNull(request.messageGroupId)) {
      body["MessageGroupId"] = request.messageGroupId;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.userProperties)) {
      body["UserProperties"] = request.userProperties;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendMessage",
      version: "2026-04-09",
      protocol: "HTTPS",
      pathname: `/queues/${queueName}/messages`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendMessageResponse>(await this.execute(params, req, runtime), new $_model.SendMessageResponse({}));
  }

  /**
   * Sends a message to a specified queue with support for delay and priority settings.
   * 
   * @remarks
   * ## Operation description
   * - The **SendMessage** operation sends a message to a specified queue.
   * - Messages can be consumed immediately or delayed by setting the `DelaySeconds` parameter.
   * - You can specify a priority for the message. A smaller value indicates a higher priority.
   * - For FIFO queues, use `MessageGroupId` to ensure ordered delivery of messages within the same group.
   * - You can also set custom attributes in `UserProperties` as a JSON-formatted string to provide additional information.
   * - When `DelaySeconds` is greater than 0, the `ReceiptHandle` returned by the API can be used to delete the delayed message before it becomes Active.
   * 
   * @param request - SendMessageRequest
   * @returns SendMessageResponse
   */
  async sendMessage(queueName: string, request: $_model.SendMessageRequest): Promise<$_model.SendMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendMessageWithOptions(queueName, request, headers, runtime);
  }

}
