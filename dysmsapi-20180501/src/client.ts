// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BatchSendMessageToGlobeRequest extends $tea.Model {
  from?: string;
  message?: string;
  taskId?: string;
  to?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      message: 'Message',
      taskId: 'TaskId',
      to: 'To',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      message: 'string',
      taskId: 'string',
      to: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSendMessageToGlobeResponseBody extends $tea.Model {
  failedList?: string;
  from?: string;
  messageIdList?: string;
  requestId?: string;
  responseCode?: string;
  responseDescription?: string;
  successCount?: string;
  static names(): { [key: string]: string } {
    return {
      failedList: 'FailedList',
      from: 'From',
      messageIdList: 'MessageIdList',
      requestId: 'RequestId',
      responseCode: 'ResponseCode',
      responseDescription: 'ResponseDescription',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedList: 'string',
      from: 'string',
      messageIdList: 'string',
      requestId: 'string',
      responseCode: 'string',
      responseDescription: 'string',
      successCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSendMessageToGlobeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchSendMessageToGlobeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchSendMessageToGlobeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConversionDataRequest extends $tea.Model {
  conversionRate?: string;
  reportTime?: number;
  static names(): { [key: string]: string } {
    return {
      conversionRate: 'ConversionRate',
      reportTime: 'ReportTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversionRate: 'string',
      reportTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConversionDataResponseBody extends $tea.Model {
  requestId?: string;
  responseCode?: string;
  responseDescription?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responseCode: 'ResponseCode',
      responseDescription: 'ResponseDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      responseCode: 'string',
      responseDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConversionDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConversionDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConversionDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMessageRequest extends $tea.Model {
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMessageResponseBody extends $tea.Model {
  errorCode?: string;
  errorDescription?: string;
  message?: string;
  messageId?: string;
  numberDetail?: QueryMessageResponseBodyNumberDetail;
  receiveDate?: string;
  requestId?: string;
  responseCode?: string;
  responseDescription?: string;
  sendDate?: string;
  status?: string;
  to?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorDescription: 'ErrorDescription',
      message: 'Message',
      messageId: 'MessageId',
      numberDetail: 'NumberDetail',
      receiveDate: 'ReceiveDate',
      requestId: 'RequestId',
      responseCode: 'ResponseCode',
      responseDescription: 'ResponseDescription',
      sendDate: 'SendDate',
      status: 'Status',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorDescription: 'string',
      message: 'string',
      messageId: 'string',
      numberDetail: QueryMessageResponseBodyNumberDetail,
      receiveDate: 'string',
      requestId: 'string',
      responseCode: 'string',
      responseDescription: 'string',
      sendDate: 'string',
      status: 'string',
      to: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageToGlobeRequest extends $tea.Model {
  from?: string;
  message?: string;
  taskId?: string;
  to?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      message: 'Message',
      taskId: 'TaskId',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      message: 'string',
      taskId: 'string',
      to: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageToGlobeResponseBody extends $tea.Model {
  from?: string;
  messageId?: string;
  numberDetail?: SendMessageToGlobeResponseBodyNumberDetail;
  requestId?: string;
  responseCode?: string;
  responseDescription?: string;
  segments?: string;
  to?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      messageId: 'MessageId',
      numberDetail: 'NumberDetail',
      requestId: 'RequestId',
      responseCode: 'ResponseCode',
      responseDescription: 'ResponseDescription',
      segments: 'Segments',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      messageId: 'string',
      numberDetail: SendMessageToGlobeResponseBodyNumberDetail,
      requestId: 'string',
      responseCode: 'string',
      responseDescription: 'string',
      segments: 'string',
      to: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageToGlobeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SendMessageToGlobeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SendMessageToGlobeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageWithTemplateRequest extends $tea.Model {
  from?: string;
  smsUpExtendCode?: string;
  templateCode?: string;
  templateParam?: string;
  to?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      smsUpExtendCode: 'SmsUpExtendCode',
      templateCode: 'TemplateCode',
      templateParam: 'TemplateParam',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      smsUpExtendCode: 'string',
      templateCode: 'string',
      templateParam: 'string',
      to: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageWithTemplateResponseBody extends $tea.Model {
  messageId?: string;
  numberDetail?: SendMessageWithTemplateResponseBodyNumberDetail;
  requestId?: string;
  responseCode?: string;
  responseDescription?: string;
  segments?: string;
  to?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      numberDetail: 'NumberDetail',
      requestId: 'RequestId',
      responseCode: 'ResponseCode',
      responseDescription: 'ResponseDescription',
      segments: 'Segments',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      numberDetail: SendMessageWithTemplateResponseBodyNumberDetail,
      requestId: 'string',
      responseCode: 'string',
      responseDescription: 'string',
      segments: 'string',
      to: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageWithTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SendMessageWithTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SendMessageWithTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmsConversionRequest extends $tea.Model {
  conversionTime?: number;
  delivered?: boolean;
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      conversionTime: 'ConversionTime',
      delivered: 'Delivered',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversionTime: 'number',
      delivered: 'boolean',
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmsConversionResponseBody extends $tea.Model {
  requestId?: string;
  responseCode?: string;
  responseDescription?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responseCode: 'ResponseCode',
      responseDescription: 'ResponseDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      responseCode: 'string',
      responseDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmsConversionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SmsConversionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SmsConversionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMessageResponseBodyNumberDetail extends $tea.Model {
  carrier?: string;
  country?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      carrier: 'Carrier',
      country: 'Country',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrier: 'string',
      country: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageToGlobeResponseBodyNumberDetail extends $tea.Model {
  carrier?: string;
  country?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      carrier: 'Carrier',
      country: 'Country',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrier: 'string',
      country: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageWithTemplateResponseBodyNumberDetail extends $tea.Model {
  carrier?: string;
  country?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      carrier: 'Carrier',
      country: 'Country',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrier: 'string',
      country: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this._endpointMap = {
      'ap-southeast-1': "dysmsapi.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "dysmsapi-xman.ap-southeast-5.aliyuncs.com",
      'cn-beijing': "dysmsapi-proxy.cn-beijing.aliyuncs.com",
      'cn-hongkong': "dysmsapi-xman.cn-hongkong.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dysmsapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async batchSendMessageToGlobeWithOptions(request: BatchSendMessageToGlobeRequest, runtime: $Util.RuntimeOptions): Promise<BatchSendMessageToGlobeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.from)) {
      query["From"] = request.from;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.to)) {
      query["To"] = request.to;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<BatchSendMessageToGlobeResponse>(await this.callApi(params, req, runtime), new BatchSendMessageToGlobeResponse({}));
  }

  async batchSendMessageToGlobe(request: BatchSendMessageToGlobeRequest): Promise<BatchSendMessageToGlobeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSendMessageToGlobeWithOptions(request, runtime);
  }

  async conversionDataWithOptions(request: ConversionDataRequest, runtime: $Util.RuntimeOptions): Promise<ConversionDataResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.conversionRate)) {
      body["ConversionRate"] = request.conversionRate;
    }

    if (!Util.isUnset(request.reportTime)) {
      body["ReportTime"] = request.reportTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ConversionDataResponse>(await this.callApi(params, req, runtime), new ConversionDataResponse({}));
  }

  async conversionData(request: ConversionDataRequest): Promise<ConversionDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.conversionDataWithOptions(request, runtime);
  }

  async queryMessageWithOptions(request: QueryMessageRequest, runtime: $Util.RuntimeOptions): Promise<QueryMessageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryMessageResponse>(await this.callApi(params, req, runtime), new QueryMessageResponse({}));
  }

  async queryMessage(request: QueryMessageRequest): Promise<QueryMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMessageWithOptions(request, runtime);
  }

  async sendMessageToGlobeWithOptions(request: SendMessageToGlobeRequest, runtime: $Util.RuntimeOptions): Promise<SendMessageToGlobeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.from)) {
      query["From"] = request.from;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.to)) {
      query["To"] = request.to;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<SendMessageToGlobeResponse>(await this.callApi(params, req, runtime), new SendMessageToGlobeResponse({}));
  }

  async sendMessageToGlobe(request: SendMessageToGlobeRequest): Promise<SendMessageToGlobeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendMessageToGlobeWithOptions(request, runtime);
  }

  async sendMessageWithTemplateWithOptions(request: SendMessageWithTemplateRequest, runtime: $Util.RuntimeOptions): Promise<SendMessageWithTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.from)) {
      query["From"] = request.from;
    }

    if (!Util.isUnset(request.smsUpExtendCode)) {
      query["SmsUpExtendCode"] = request.smsUpExtendCode;
    }

    if (!Util.isUnset(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!Util.isUnset(request.templateParam)) {
      query["TemplateParam"] = request.templateParam;
    }

    if (!Util.isUnset(request.to)) {
      query["To"] = request.to;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<SendMessageWithTemplateResponse>(await this.callApi(params, req, runtime), new SendMessageWithTemplateResponse({}));
  }

  async sendMessageWithTemplate(request: SendMessageWithTemplateRequest): Promise<SendMessageWithTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendMessageWithTemplateWithOptions(request, runtime);
  }

  async smsConversionWithOptions(request: SmsConversionRequest, runtime: $Util.RuntimeOptions): Promise<SmsConversionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.conversionTime)) {
      query["ConversionTime"] = request.conversionTime;
    }

    if (!Util.isUnset(request.delivered)) {
      query["Delivered"] = request.delivered;
    }

    if (!Util.isUnset(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<SmsConversionResponse>(await this.callApi(params, req, runtime), new SmsConversionResponse({}));
  }

  async smsConversion(request: SmsConversionRequest): Promise<SmsConversionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.smsConversionWithOptions(request, runtime);
  }

}
