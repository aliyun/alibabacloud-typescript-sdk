// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetMessageStatusRequest extends $tea.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageStatusResponseBody extends $tea.Model {
  code?: string;
  data?: GetMessageStatusResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetMessageStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMessageStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMessageStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendBatchMessageRequest extends $tea.Model {
  batchFlag?: string;
  extendInfo?: string;
  idType?: string;
  phoneNumberJson?: string;
  signNameJson?: string;
  specificChannel?: string;
  templateCode?: string;
  templateParamJson?: string;
  static names(): { [key: string]: string } {
    return {
      batchFlag: 'BatchFlag',
      extendInfo: 'ExtendInfo',
      idType: 'IdType',
      phoneNumberJson: 'PhoneNumberJson',
      signNameJson: 'SignNameJson',
      specificChannel: 'SpecificChannel',
      templateCode: 'TemplateCode',
      templateParamJson: 'TemplateParamJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchFlag: 'string',
      extendInfo: 'string',
      idType: 'string',
      phoneNumberJson: 'string',
      signNameJson: 'string',
      specificChannel: 'string',
      templateCode: 'string',
      templateParamJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendBatchMessageResponseBody extends $tea.Model {
  code?: string;
  data?: SendBatchMessageResponseBodyData[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': SendBatchMessageResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendBatchMessageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendBatchMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendBatchMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageStatusResponseBodyData extends $tea.Model {
  mobile?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      mobile: 'mobile',
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobile: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendBatchMessageResponseBodyData extends $tea.Model {
  mobile?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      mobile: 'mobile',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobile: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("umeng-finplus", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async getMessageStatusWithOptions(request: GetMessageStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetMessageStatusResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMessageStatus",
      version: "2021-11-25",
      protocol: "HTTPS",
      pathname: `/sms/message/status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetMessageStatusResponse>(await this.callApi(params, req, runtime), new GetMessageStatusResponse({}));
  }

  async getMessageStatus(request: GetMessageStatusRequest): Promise<GetMessageStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMessageStatusWithOptions(request, headers, runtime);
  }

  async sendBatchMessageWithOptions(request: SendBatchMessageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SendBatchMessageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.batchFlag)) {
      body["BatchFlag"] = request.batchFlag;
    }

    if (!Util.isUnset(request.extendInfo)) {
      body["ExtendInfo"] = request.extendInfo;
    }

    if (!Util.isUnset(request.idType)) {
      body["IdType"] = request.idType;
    }

    if (!Util.isUnset(request.phoneNumberJson)) {
      body["PhoneNumberJson"] = request.phoneNumberJson;
    }

    if (!Util.isUnset(request.signNameJson)) {
      body["SignNameJson"] = request.signNameJson;
    }

    if (!Util.isUnset(request.specificChannel)) {
      body["SpecificChannel"] = request.specificChannel;
    }

    if (!Util.isUnset(request.templateCode)) {
      body["TemplateCode"] = request.templateCode;
    }

    if (!Util.isUnset(request.templateParamJson)) {
      body["TemplateParamJson"] = request.templateParamJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SendBatchMessage",
      version: "2021-11-25",
      protocol: "HTTPS",
      pathname: `/sms/message/send`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendBatchMessageResponse>(await this.callApi(params, req, runtime), new SendBatchMessageResponse({}));
  }

  async sendBatchMessage(request: SendBatchMessageRequest): Promise<SendBatchMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendBatchMessageWithOptions(request, headers, runtime);
  }

}
