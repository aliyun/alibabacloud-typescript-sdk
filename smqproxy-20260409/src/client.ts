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
    this._endpointMap = {
      'cn-hangzhou': "mns.cn-hangzhou.aliyuncs.com",
    };
  }


  /**
   * 批量删除消息
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
   * 批量删除消息
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
   * 批量查看消息
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
   * 批量查看消息
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
   * 批量消费消息
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
   * 批量消费消息
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
   * 批量发送消息
   * 
   * @remarks
   * ## 请求说明
   * - 一次 Batch 请求的消息总大小不得超过 64 KB。
   * - `BatchSendMessage` 与 `SendMessage` 使用相同的 URL 路径，通过 Body 结构区分：包含 `Messages` 数组即为批量发送，否则为单条发送。
   * - 批量操作的返回结果可能同时包含成功和失败的子消息。
   * - 每次请求中可以包含多个消息对象，每个消息对象可以设置不同的延迟时间和优先级。
   * - 对于 FIFO 队列，可以通过 `MessageGroupId` 参数来指定消息分组 ID。
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
   * 批量发送消息
   * 
   * @remarks
   * ## 请求说明
   * - 一次 Batch 请求的消息总大小不得超过 64 KB。
   * - `BatchSendMessage` 与 `SendMessage` 使用相同的 URL 路径，通过 Body 结构区分：包含 `Messages` 数组即为批量发送，否则为单条发送。
   * - 批量操作的返回结果可能同时包含成功和失败的子消息。
   * - 每次请求中可以包含多个消息对象，每个消息对象可以设置不同的延迟时间和优先级。
   * - 对于 FIFO 队列，可以通过 `MessageGroupId` 参数来指定消息分组 ID。
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
   * 修改消息下次可消费时间
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
   * 修改消息下次可消费时间
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
   * 删除已消费消息
   * 
   * @param request - DeleteMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMessageResponse
   */
  async deleteMessageWithOptions(queueName: string, request: $_model.DeleteMessageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMessageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.receiptHandle)) {
      query["ReceiptHandle"] = request.receiptHandle;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMessage",
      version: "2026-04-09",
      protocol: "HTTPS",
      pathname: `/queues/${queueName}/messages`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMessageResponse>(await this.execute(params, req, runtime), new $_model.DeleteMessageResponse({}));
  }

  /**
   * 删除已消费消息
   * 
   * @param request - DeleteMessageRequest
   * @returns DeleteMessageResponse
   */
  async deleteMessage(queueName: string, request: $_model.DeleteMessageRequest): Promise<$_model.DeleteMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMessageWithOptions(queueName, request, headers, runtime);
  }

  /**
   * 查看消息
   * 
   * @param request - PeekMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PeekMessageResponse
   */
  async peekMessageWithOptions(queueName: string, request: $_model.PeekMessageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PeekMessageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.peekonly)) {
      query["peekonly"] = request.peekonly;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PeekMessage",
      version: "2026-04-09",
      protocol: "HTTPS",
      pathname: `/queues/${queueName}/messages`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PeekMessageResponse>(await this.execute(params, req, runtime), new $_model.PeekMessageResponse({}));
  }

  /**
   * 查看消息
   * 
   * @param request - PeekMessageRequest
   * @returns PeekMessageResponse
   */
  async peekMessage(queueName: string, request: $_model.PeekMessageRequest): Promise<$_model.PeekMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.peekMessageWithOptions(queueName, request, headers, runtime);
  }

  /**
   * 发布消息
   * 
   * @remarks
   * ## 请求说明
   * - 消息发布后会被推送到该 Topic 下所有 Subscription 的 Endpoint。
   * - 推送到 Queue 和 HTTP Endpoint 时不需要设置 `MessageAttributes`。
   * - 推送到邮件、短信或移动推送时需要设置对应的 `MessageAttributes` 子属性。
   * - 消息内容建议事先进行 Base64 编码以避免特殊字符问题。
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
   * 发布消息
   * 
   * @remarks
   * ## 请求说明
   * - 消息发布后会被推送到该 Topic 下所有 Subscription 的 Endpoint。
   * - 推送到 Queue 和 HTTP Endpoint 时不需要设置 `MessageAttributes`。
   * - 推送到邮件、短信或移动推送时需要设置对应的 `MessageAttributes` 子属性。
   * - 消息内容建议事先进行 Base64 编码以避免特殊字符问题。
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
   * 消费消息
   * 
   * @param request - ReceiveMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReceiveMessageResponse
   */
  async receiveMessageWithOptions(queueName: string, request: $_model.ReceiveMessageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ReceiveMessageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.waitseconds)) {
      query["waitseconds"] = request.waitseconds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReceiveMessage",
      version: "2026-04-09",
      protocol: "HTTPS",
      pathname: `/queues/${queueName}/messages`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReceiveMessageResponse>(await this.execute(params, req, runtime), new $_model.ReceiveMessageResponse({}));
  }

  /**
   * 消费消息
   * 
   * @param request - ReceiveMessageRequest
   * @returns ReceiveMessageResponse
   */
  async receiveMessage(queueName: string, request: $_model.ReceiveMessageRequest): Promise<$_model.ReceiveMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.receiveMessageWithOptions(queueName, request, headers, runtime);
  }

  /**
   * 发送消息
   * 
   * @remarks
   * ## 请求说明
   * - **SendMessage** 接口用于将消息发送至指定队列。
   * - 消息可以立即被消费或通过设置 `DelaySeconds` 参数来延迟消费。
   * - 发送的消息可以指定优先级，数值越小表示优先级越高。
   * - 对于 FIFO 队列，可以通过 `MessageGroupId` 来保证同一分组内消息的顺序投递。
   * - 用户还可以自定义属性 `UserProperties`，以 JSON 格式字符串形式提供额外信息。
   * - 当 `DelaySeconds` 大于 0 时，API 返回的 `ReceiptHandle` 可用来在消息变为 Active 状态前删除该延迟消息。
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
   * 发送消息
   * 
   * @remarks
   * ## 请求说明
   * - **SendMessage** 接口用于将消息发送至指定队列。
   * - 消息可以立即被消费或通过设置 `DelaySeconds` 参数来延迟消费。
   * - 发送的消息可以指定优先级，数值越小表示优先级越高。
   * - 对于 FIFO 队列，可以通过 `MessageGroupId` 来保证同一分组内消息的顺序投递。
   * - 用户还可以自定义属性 `UserProperties`，以 JSON 格式字符串形式提供额外信息。
   * - 当 `DelaySeconds` 大于 0 时，API 返回的 `ReceiptHandle` 可用来在消息变为 Active 状态前删除该延迟消息。
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
