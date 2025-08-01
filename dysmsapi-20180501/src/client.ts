// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "central";
    this._endpointMap = {
      'ap-southeast-1': "dysmsapi.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "dysmsapi.ap-southeast-5.aliyuncs.com",
      'cn-beijing': "dysmsapi-proxy.cn-beijing.aliyuncs.com",
      'cn-hongkong': "dysmsapi-xman.cn-hongkong.aliyuncs.com",
      'eu-central-1': "dysmsapi.eu-central-1.aliyuncs.com",
      'us-east-1': "dysmsapi.us-east-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dysmsapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Sends a message to multiple recipients in countries or regions outside the Chinese mainland.
   * 
   * @remarks
   * ## Usage notes
   * *   You cannot call the BatchSendMessageToGlobe operation to send messages to the Chinese mainland.
   * *   You can call the BatchSendMessageToGlobe operation to send notifications and promotional messages to a small number of mobile phone numbers at a time. To send messages to a large number of mobile phone numbers at a time, use the mass messaging feature of the SMS console.
   * *   To ensure that messages can be sent on time, call the [SendMessageToGlobe](https://help.aliyun.com/document_detail/406238.html) operation.
   * *   In each request, you can send messages to up to 1,000 mobile phone numbers.
   * 
   * @param request - BatchSendMessageToGlobeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchSendMessageToGlobeResponse
   */
  async batchSendMessageToGlobeWithOptions(request: $_model.BatchSendMessageToGlobeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchSendMessageToGlobeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.from)) {
      query["From"] = request.from;
    }

    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.to)) {
      query["To"] = request.to;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.validityPeriod)) {
      query["ValidityPeriod"] = request.validityPeriod;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchSendMessageToGlobe",
      version: "2018-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchSendMessageToGlobeResponse>(await this.callApi(params, req, runtime), new $_model.BatchSendMessageToGlobeResponse({}));
  }

  /**
   * Sends a message to multiple recipients in countries or regions outside the Chinese mainland.
   * 
   * @remarks
   * ## Usage notes
   * *   You cannot call the BatchSendMessageToGlobe operation to send messages to the Chinese mainland.
   * *   You can call the BatchSendMessageToGlobe operation to send notifications and promotional messages to a small number of mobile phone numbers at a time. To send messages to a large number of mobile phone numbers at a time, use the mass messaging feature of the SMS console.
   * *   To ensure that messages can be sent on time, call the [SendMessageToGlobe](https://help.aliyun.com/document_detail/406238.html) operation.
   * *   In each request, you can send messages to up to 1,000 mobile phone numbers.
   * 
   * @param request - BatchSendMessageToGlobeRequest
   * @returns BatchSendMessageToGlobeResponse
   */
  async batchSendMessageToGlobe(request: $_model.BatchSendMessageToGlobeRequest): Promise<$_model.BatchSendMessageToGlobeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchSendMessageToGlobeWithOptions(request, runtime);
  }

  /**
   * This API, sends conversion data to the Alibaba SMS service.
   * 
   * @remarks
   * Metrics:
   * *   Requested OTP messages
   * *   Verified OTP messages
   * An OTP conversion rate is calculated based on the following formula: OTP conversion rate = Number of verified OTP messages/Number of requested OTP messages.
   * 
   * @param request - ConversionDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConversionDataResponse
   */
  async conversionDataWithOptions(request: $_model.ConversionDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConversionDataResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.conversionRate)) {
      body["ConversionRate"] = request.conversionRate;
    }

    if (!$dara.isNull(request.reportTime)) {
      body["ReportTime"] = request.reportTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConversionData",
      version: "2018-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConversionDataResponse>(await this.callApi(params, req, runtime), new $_model.ConversionDataResponse({}));
  }

  /**
   * This API, sends conversion data to the Alibaba SMS service.
   * 
   * @remarks
   * Metrics:
   * *   Requested OTP messages
   * *   Verified OTP messages
   * An OTP conversion rate is calculated based on the following formula: OTP conversion rate = Number of verified OTP messages/Number of requested OTP messages.
   * 
   * @param request - ConversionDataRequest
   * @returns ConversionDataResponse
   */
  async conversionData(request: $_model.ConversionDataRequest): Promise<$_model.ConversionDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.conversionDataWithOptions(request, runtime);
  }

  /**
   * Queries the delivery report of a message.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 300 times per second. If the number of the calls per second exceeds a limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limits when you call this operation.
   * 
   * @param request - QueryMessageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMessageResponse
   */
  async queryMessageWithOptions(request: $_model.QueryMessageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMessageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMessage",
      version: "2018-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMessageResponse>(await this.callApi(params, req, runtime), new $_model.QueryMessageResponse({}));
  }

  /**
   * Queries the delivery report of a message.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to 300 times per second. If the number of the calls per second exceeds a limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limits when you call this operation.
   * 
   * @param request - QueryMessageRequest
   * @returns QueryMessageResponse
   */
  async queryMessage(request: $_model.QueryMessageRequest): Promise<$_model.QueryMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMessageWithOptions(request, runtime);
  }

  /**
   * Sends a message to regions outside the Chinese mainland.
   * 
   * @remarks
   * ### [](#)
   * The SendMessageToGlobe API operation does not support message delivery to the Chinese mainland.
   * ### [](#qps-)QPS limit
   * You can call this operation up to 2,000 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - SendMessageToGlobeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendMessageToGlobeResponse
   */
  async sendMessageToGlobeWithOptions(request: $_model.SendMessageToGlobeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendMessageToGlobeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.from)) {
      query["From"] = request.from;
    }

    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.to)) {
      query["To"] = request.to;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.validityPeriod)) {
      query["ValidityPeriod"] = request.validityPeriod;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendMessageToGlobe",
      version: "2018-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendMessageToGlobeResponse>(await this.callApi(params, req, runtime), new $_model.SendMessageToGlobeResponse({}));
  }

  /**
   * Sends a message to regions outside the Chinese mainland.
   * 
   * @remarks
   * ### [](#)
   * The SendMessageToGlobe API operation does not support message delivery to the Chinese mainland.
   * ### [](#qps-)QPS limit
   * You can call this operation up to 2,000 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - SendMessageToGlobeRequest
   * @returns SendMessageToGlobeResponse
   */
  async sendMessageToGlobe(request: $_model.SendMessageToGlobeRequest): Promise<$_model.SendMessageToGlobeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendMessageToGlobeWithOptions(request, runtime);
  }

  /**
   * Sends a message to the Chinese mainland by using a message template.
   * 
   * @remarks
   * ### Usage notes
   * You can call the SendMessageWithTemplate operation to send messages only to the Chinese mainland.
   * 
   * @param request - SendMessageWithTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendMessageWithTemplateResponse
   */
  async sendMessageWithTemplateWithOptions(request: $_model.SendMessageWithTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendMessageWithTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.from)) {
      query["From"] = request.from;
    }

    if (!$dara.isNull(request.smsUpExtendCode)) {
      query["SmsUpExtendCode"] = request.smsUpExtendCode;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.templateParam)) {
      query["TemplateParam"] = request.templateParam;
    }

    if (!$dara.isNull(request.to)) {
      query["To"] = request.to;
    }

    if (!$dara.isNull(request.validityPeriod)) {
      query["ValidityPeriod"] = request.validityPeriod;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendMessageWithTemplate",
      version: "2018-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendMessageWithTemplateResponse>(await this.callApi(params, req, runtime), new $_model.SendMessageWithTemplateResponse({}));
  }

  /**
   * Sends a message to the Chinese mainland by using a message template.
   * 
   * @remarks
   * ### Usage notes
   * You can call the SendMessageWithTemplate operation to send messages only to the Chinese mainland.
   * 
   * @param request - SendMessageWithTemplateRequest
   * @returns SendMessageWithTemplateResponse
   */
  async sendMessageWithTemplate(request: $_model.SendMessageWithTemplateRequest): Promise<$_model.SendMessageWithTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendMessageWithTemplateWithOptions(request, runtime);
  }

  /**
   * Delivers one-time password (OTP) message statuses to Alibaba Cloud, which calculates and monitors OTP conversion rates.
   * 
   * @remarks
   * Metrics:
   * *   Requested OTP messages
   * *   Verified OTP messages
   * An OTP conversion rate is calculated based on the following formula: OTP conversion rate = Number of verified OTP messages/Number of requested OTP messages.
   * > If you call the SmsConversion operation to query OTP conversion rates, your business may be affected. We recommend that you perform the following operations:
   * >*   Call the SmsConversion operation in an asynchronous manner by configuring queues or events.
   * >*   Manually degrade your services or use a circuit breaker to automatically degrade services.
   * 
   * @param request - SmsConversionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SmsConversionResponse
   */
  async smsConversionWithOptions(request: $_model.SmsConversionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SmsConversionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.conversionTime)) {
      query["ConversionTime"] = request.conversionTime;
    }

    if (!$dara.isNull(request.delivered)) {
      query["Delivered"] = request.delivered;
    }

    if (!$dara.isNull(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    if (!$dara.isNull(request.to)) {
      query["To"] = request.to;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SmsConversion",
      version: "2018-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SmsConversionResponse>(await this.callApi(params, req, runtime), new $_model.SmsConversionResponse({}));
  }

  /**
   * Delivers one-time password (OTP) message statuses to Alibaba Cloud, which calculates and monitors OTP conversion rates.
   * 
   * @remarks
   * Metrics:
   * *   Requested OTP messages
   * *   Verified OTP messages
   * An OTP conversion rate is calculated based on the following formula: OTP conversion rate = Number of verified OTP messages/Number of requested OTP messages.
   * > If you call the SmsConversion operation to query OTP conversion rates, your business may be affected. We recommend that you perform the following operations:
   * >*   Call the SmsConversion operation in an asynchronous manner by configuring queues or events.
   * >*   Manually degrade your services or use a circuit breaker to automatically degrade services.
   * 
   * @param request - SmsConversionRequest
   * @returns SmsConversionResponse
   */
  async smsConversion(request: $_model.SmsConversionRequest): Promise<$_model.SmsConversionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.smsConversionWithOptions(request, runtime);
  }

}
