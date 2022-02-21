// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class SendMessageRequest extends $tea.Model {
  groupId?: string;
  outIds?: string[];
  phoneNumbers?: string[];
  scheduleId?: string;
  signName?: string;
  signatureId?: string;
  smsUpExtendCodes?: string[];
  templateCode?: string;
  templateId?: string;
  templateParams?: string[];
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      outIds: 'OutIds',
      phoneNumbers: 'PhoneNumbers',
      scheduleId: 'ScheduleId',
      signName: 'SignName',
      signatureId: 'SignatureId',
      smsUpExtendCodes: 'SmsUpExtendCodes',
      templateCode: 'TemplateCode',
      templateId: 'TemplateId',
      templateParams: 'TemplateParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      outIds: { 'type': 'array', 'itemType': 'string' },
      phoneNumbers: { 'type': 'array', 'itemType': 'string' },
      scheduleId: 'string',
      signName: 'string',
      signatureId: 'string',
      smsUpExtendCodes: { 'type': 'array', 'itemType': 'string' },
      templateCode: 'string',
      templateId: 'string',
      templateParams: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageResponseBody extends $tea.Model {
  data?: string;
  errorCode?: number;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'number',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SendMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SendMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("paiplugin", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async sendMessage(request: SendMessageRequest): Promise<SendMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendMessageWithOptions(request, headers, runtime);
  }

  async sendMessageWithOptions(request: SendMessageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SendMessageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.outIds)) {
      body["OutIds"] = request.outIds;
    }

    if (!Util.isUnset(request.phoneNumbers)) {
      body["PhoneNumbers"] = request.phoneNumbers;
    }

    if (!Util.isUnset(request.scheduleId)) {
      body["ScheduleId"] = request.scheduleId;
    }

    if (!Util.isUnset(request.signName)) {
      body["SignName"] = request.signName;
    }

    if (!Util.isUnset(request.signatureId)) {
      body["SignatureId"] = request.signatureId;
    }

    if (!Util.isUnset(request.smsUpExtendCodes)) {
      body["SmsUpExtendCodes"] = request.smsUpExtendCodes;
    }

    if (!Util.isUnset(request.templateCode)) {
      body["TemplateCode"] = request.templateCode;
    }

    if (!Util.isUnset(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateParams)) {
      body["TemplateParams"] = request.templateParams;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SendMessage",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/messages`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SendMessageResponse>(await this.callApi(params, req, runtime), new SendMessageResponse({}));
  }

}
