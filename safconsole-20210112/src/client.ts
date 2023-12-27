// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class RevokeFeedbackRequest extends $tea.Model {
  sampleType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      sampleType: 'SampleType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sampleType: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeFeedbackResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeFeedbackResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RevokeFeedbackResponseBody;
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
      body: RevokeFeedbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendFeedbackRequest extends $tea.Model {
  riskLabel?: string;
  sampleType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      riskLabel: 'RiskLabel',
      sampleType: 'SampleType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLabel: 'string',
      sampleType: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendFeedbackResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendFeedbackResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SendFeedbackResponseBody;
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
      body: SendFeedbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadSampleApiRequest extends $tea.Model {
  dataType?: string;
  dataValue?: string;
  sampleType?: string;
  service?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      dataValue: 'DataValue',
      sampleType: 'SampleType',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      dataValue: 'string',
      sampleType: 'string',
      service: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadSampleApiResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadSampleApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UploadSampleApiResponseBody;
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
      body: UploadSampleApiResponseBody,
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
    this._endpoint = this.getEndpoint("safconsole", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async revokeFeedbackWithOptions(request: RevokeFeedbackRequest, runtime: $Util.RuntimeOptions): Promise<RevokeFeedbackResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.sampleType)) {
      body["SampleType"] = request.sampleType;
    }

    if (!Util.isUnset(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RevokeFeedback",
      version: "2021-01-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevokeFeedbackResponse>(await this.callApi(params, req, runtime), new RevokeFeedbackResponse({}));
  }

  async revokeFeedback(request: RevokeFeedbackRequest): Promise<RevokeFeedbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeFeedbackWithOptions(request, runtime);
  }

  async sendFeedbackWithOptions(request: SendFeedbackRequest, runtime: $Util.RuntimeOptions): Promise<SendFeedbackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.riskLabel)) {
      query["RiskLabel"] = request.riskLabel;
    }

    if (!Util.isUnset(request.sampleType)) {
      query["SampleType"] = request.sampleType;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendFeedback",
      version: "2021-01-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendFeedbackResponse>(await this.callApi(params, req, runtime), new SendFeedbackResponse({}));
  }

  async sendFeedback(request: SendFeedbackRequest): Promise<SendFeedbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendFeedbackWithOptions(request, runtime);
  }

  async uploadSampleApiWithOptions(request: UploadSampleApiRequest, runtime: $Util.RuntimeOptions): Promise<UploadSampleApiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!Util.isUnset(request.dataValue)) {
      query["DataValue"] = request.dataValue;
    }

    if (!Util.isUnset(request.sampleType)) {
      query["SampleType"] = request.sampleType;
    }

    if (!Util.isUnset(request.service)) {
      query["Service"] = request.service;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadSampleApi",
      version: "2021-01-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadSampleApiResponse>(await this.callApi(params, req, runtime), new UploadSampleApiResponse({}));
  }

  async uploadSampleApi(request: UploadSampleApiRequest): Promise<UploadSampleApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadSampleApiWithOptions(request, runtime);
  }

}
