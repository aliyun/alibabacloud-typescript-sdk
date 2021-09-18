// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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
  status?: string;
  errorDescription?: string;
  responseCode?: string;
  receiveDate?: string;
  numberDetail?: QueryMessageResponseBodyNumberDetail;
  message?: string;
  responseDescription?: string;
  errorCode?: string;
  sendDate?: string;
  to?: string;
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      errorDescription: 'ErrorDescription',
      responseCode: 'ResponseCode',
      receiveDate: 'ReceiveDate',
      numberDetail: 'NumberDetail',
      message: 'Message',
      responseDescription: 'ResponseDescription',
      errorCode: 'ErrorCode',
      sendDate: 'SendDate',
      to: 'To',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      errorDescription: 'string',
      responseCode: 'string',
      receiveDate: 'string',
      numberDetail: QueryMessageResponseBodyNumberDetail,
      message: 'string',
      responseDescription: 'string',
      errorCode: 'string',
      sendDate: 'string',
      to: 'string',
      messageId: 'string',
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

export class BatchSendMessageToGlobeRequest extends $tea.Model {
  to?: string;
  from?: string;
  message?: string;
  type?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      to: 'To',
      from: 'From',
      message: 'Message',
      type: 'Type',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      to: 'string',
      from: 'string',
      message: 'string',
      type: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSendMessageToGlobeResponseBody extends $tea.Model {
  responseCode?: string;
  requestId?: string;
  failedList?: string;
  responseDescription?: string;
  from?: string;
  messageIdList?: string;
  successCount?: string;
  static names(): { [key: string]: string } {
    return {
      responseCode: 'ResponseCode',
      requestId: 'RequestId',
      failedList: 'FailedList',
      responseDescription: 'ResponseDescription',
      from: 'From',
      messageIdList: 'MessageIdList',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      responseCode: 'string',
      requestId: 'string',
      failedList: 'string',
      responseDescription: 'string',
      from: 'string',
      messageIdList: 'string',
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

export class SmsConversionRequest extends $tea.Model {
  messageId?: string;
  delivered?: boolean;
  conversionTime?: number;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      delivered: 'Delivered',
      conversionTime: 'ConversionTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      delivered: 'boolean',
      conversionTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmsConversionResponseBody extends $tea.Model {
  responseCode?: string;
  responseDescription?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      responseCode: 'ResponseCode',
      responseDescription: 'ResponseDescription',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      responseCode: 'string',
      responseDescription: 'string',
      requestId: 'string',
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

export class SendMessageToGlobeRequest extends $tea.Model {
  to?: string;
  from?: string;
  message?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      to: 'To',
      from: 'From',
      message: 'Message',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      to: 'string',
      from: 'string',
      message: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageToGlobeResponseBody extends $tea.Model {
  responseCode?: string;
  numberDetail?: SendMessageToGlobeResponseBodyNumberDetail;
  requestId?: string;
  segments?: string;
  responseDescription?: string;
  from?: string;
  to?: string;
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      responseCode: 'ResponseCode',
      numberDetail: 'NumberDetail',
      requestId: 'RequestId',
      segments: 'Segments',
      responseDescription: 'ResponseDescription',
      from: 'From',
      to: 'To',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      responseCode: 'string',
      numberDetail: SendMessageToGlobeResponseBodyNumberDetail,
      requestId: 'string',
      segments: 'string',
      responseDescription: 'string',
      from: 'string',
      to: 'string',
      messageId: 'string',
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

export class ConversionDataRequest extends $tea.Model {
  reportTime?: number;
  conversionRate?: string;
  static names(): { [key: string]: string } {
    return {
      reportTime: 'ReportTime',
      conversionRate: 'ConversionRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportTime: 'number',
      conversionRate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConversionDataResponseBody extends $tea.Model {
  responseCode?: string;
  responseDescription?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      responseCode: 'ResponseCode',
      responseDescription: 'ResponseDescription',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      responseCode: 'string',
      responseDescription: 'string',
      requestId: 'string',
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

export class SendMessageWithTemplateRequest extends $tea.Model {
  to?: string;
  from?: string;
  templateCode?: string;
  templateParam?: string;
  smsUpExtendCode?: string;
  static names(): { [key: string]: string } {
    return {
      to: 'To',
      from: 'From',
      templateCode: 'TemplateCode',
      templateParam: 'TemplateParam',
      smsUpExtendCode: 'SmsUpExtendCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      to: 'string',
      from: 'string',
      templateCode: 'string',
      templateParam: 'string',
      smsUpExtendCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageWithTemplateResponseBody extends $tea.Model {
  responseCode?: string;
  numberDetail?: SendMessageWithTemplateResponseBodyNumberDetail;
  responseDescription?: string;
  segments?: string;
  to?: string;
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      responseCode: 'ResponseCode',
      numberDetail: 'NumberDetail',
      responseDescription: 'ResponseDescription',
      segments: 'Segments',
      to: 'To',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      responseCode: 'string',
      numberDetail: SendMessageWithTemplateResponseBodyNumberDetail,
      responseDescription: 'string',
      segments: 'string',
      to: 'string',
      messageId: 'string',
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

export class QueryMessageResponseBodyNumberDetail extends $tea.Model {
  carrier?: string;
  region?: string;
  country?: string;
  static names(): { [key: string]: string } {
    return {
      carrier: 'Carrier',
      region: 'Region',
      country: 'Country',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrier: 'string',
      region: 'string',
      country: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageToGlobeResponseBodyNumberDetail extends $tea.Model {
  carrier?: string;
  region?: string;
  country?: string;
  static names(): { [key: string]: string } {
    return {
      carrier: 'Carrier',
      region: 'Region',
      country: 'Country',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrier: 'string',
      region: 'string',
      country: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageWithTemplateResponseBodyNumberDetail extends $tea.Model {
  carrier?: string;
  region?: string;
  country?: string;
  static names(): { [key: string]: string } {
    return {
      carrier: 'Carrier',
      region: 'Region',
      country: 'Country',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrier: 'string',
      region: 'string',
      country: 'string',
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

  async queryMessageWithOptions(request: QueryMessageRequest, runtime: $Util.RuntimeOptions): Promise<QueryMessageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryMessageResponse>(await this.doRPCRequest("QueryMessage", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new QueryMessageResponse({}));
  }

  async queryMessage(request: QueryMessageRequest): Promise<QueryMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMessageWithOptions(request, runtime);
  }

  async batchSendMessageToGlobeWithOptions(request: BatchSendMessageToGlobeRequest, runtime: $Util.RuntimeOptions): Promise<BatchSendMessageToGlobeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchSendMessageToGlobeResponse>(await this.doRPCRequest("BatchSendMessageToGlobe", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new BatchSendMessageToGlobeResponse({}));
  }

  async batchSendMessageToGlobe(request: BatchSendMessageToGlobeRequest): Promise<BatchSendMessageToGlobeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSendMessageToGlobeWithOptions(request, runtime);
  }

  async smsConversionWithOptions(request: SmsConversionRequest, runtime: $Util.RuntimeOptions): Promise<SmsConversionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SmsConversionResponse>(await this.doRPCRequest("SmsConversion", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new SmsConversionResponse({}));
  }

  async smsConversion(request: SmsConversionRequest): Promise<SmsConversionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.smsConversionWithOptions(request, runtime);
  }

  async sendMessageToGlobeWithOptions(request: SendMessageToGlobeRequest, runtime: $Util.RuntimeOptions): Promise<SendMessageToGlobeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SendMessageToGlobeResponse>(await this.doRPCRequest("SendMessageToGlobe", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new SendMessageToGlobeResponse({}));
  }

  async sendMessageToGlobe(request: SendMessageToGlobeRequest): Promise<SendMessageToGlobeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendMessageToGlobeWithOptions(request, runtime);
  }

  async conversionDataWithOptions(request: ConversionDataRequest, runtime: $Util.RuntimeOptions): Promise<ConversionDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConversionDataResponse>(await this.doRPCRequest("ConversionData", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ConversionDataResponse({}));
  }

  async conversionData(request: ConversionDataRequest): Promise<ConversionDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.conversionDataWithOptions(request, runtime);
  }

  async sendMessageWithTemplateWithOptions(request: SendMessageWithTemplateRequest, runtime: $Util.RuntimeOptions): Promise<SendMessageWithTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SendMessageWithTemplateResponse>(await this.doRPCRequest("SendMessageWithTemplate", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new SendMessageWithTemplateResponse({}));
  }

  async sendMessageWithTemplate(request: SendMessageWithTemplateRequest): Promise<SendMessageWithTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendMessageWithTemplateWithOptions(request, runtime);
  }

}
