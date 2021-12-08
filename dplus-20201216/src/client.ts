// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateImageAmazonTaskRequest extends $tea.Model {
  gif?: boolean;
  imgUrlList?: string[];
  templateMode?: string;
  textList?: string[];
  static names(): { [key: string]: string } {
    return {
      gif: 'Gif',
      imgUrlList: 'ImgUrlList',
      templateMode: 'TemplateMode',
      textList: 'TextList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gif: 'boolean',
      imgUrlList: { 'type': 'array', 'itemType': 'string' },
      templateMode: 'string',
      textList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageAmazonTaskShrinkRequest extends $tea.Model {
  gif?: boolean;
  imgUrlListShrink?: string;
  templateMode?: string;
  textListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      gif: 'Gif',
      imgUrlListShrink: 'ImgUrlList',
      templateMode: 'TemplateMode',
      textListShrink: 'TextList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gif: 'boolean',
      imgUrlListShrink: 'string',
      templateMode: 'string',
      textListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageAmazonTaskResponseBody extends $tea.Model {
  code?: number;
  data?: number;
  message?: string;
  requestId?: string;
  successResponse?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      successResponse: 'SuccessResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'number',
      message: 'string',
      requestId: 'string',
      successResponse: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageAmazonTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateImageAmazonTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateImageAmazonTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultRequest extends $tea.Model {
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultResponseBody extends $tea.Model {
  code?: number;
  data?: GetTaskResultResponseBodyData;
  message?: string;
  requestId?: string;
  successResponse?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      successResponse: 'SuccessResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetTaskResultResponseBodyData,
      message: 'string',
      requestId: 'string',
      successResponse: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTaskResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTaskResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusRequest extends $tea.Model {
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusResponseBody extends $tea.Model {
  code?: number;
  data?: GetTaskStatusResponseBodyData;
  message?: string;
  requestId?: string;
  successResponse?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      successResponse: 'SuccessResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetTaskStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
      successResponse: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultResponseBodyData extends $tea.Model {
  resuslt?: string;
  status?: number;
  statusName?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      resuslt: 'Resuslt',
      status: 'Status',
      statusName: 'StatusName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resuslt: 'string',
      status: 'number',
      statusName: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusResponseBodyData extends $tea.Model {
  status?: number;
  statusName?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      statusName: 'StatusName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      statusName: 'string',
      taskId: 'number',
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
    this._endpoint = this.getEndpoint("dplus", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createImageAmazonTaskWithOptions(tmpReq: CreateImageAmazonTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateImageAmazonTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateImageAmazonTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.imgUrlList)) {
      request.imgUrlListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.imgUrlList, "ImgUrlList", "json");
    }

    if (!Util.isUnset(tmpReq.textList)) {
      request.textListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.textList, "TextList", "json");
    }

    let query = { };
    query["Gif"] = request.gif;
    query["ImgUrlList"] = request.imgUrlListShrink;
    query["TemplateMode"] = request.templateMode;
    query["TextList"] = request.textListShrink;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateImageAmazonTask",
      version: "2020-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateImageAmazonTaskResponse>(await this.callApi(params, req, runtime), new CreateImageAmazonTaskResponse({}));
  }

  async createImageAmazonTask(request: CreateImageAmazonTaskRequest): Promise<CreateImageAmazonTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createImageAmazonTaskWithOptions(request, runtime);
  }

  async getTaskResultWithOptions(request: GetTaskResultRequest, runtime: $Util.RuntimeOptions): Promise<GetTaskResultResponse> {
    Util.validateModel(request);
    let query = { };
    query["TaskId"] = request.taskId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetTaskResult",
      version: "2020-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTaskResultResponse>(await this.callApi(params, req, runtime), new GetTaskResultResponse({}));
  }

  async getTaskResult(request: GetTaskResultRequest): Promise<GetTaskResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTaskResultWithOptions(request, runtime);
  }

  async getTaskStatusWithOptions(request: GetTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetTaskStatusResponse> {
    Util.validateModel(request);
    let query = { };
    query["TaskId"] = request.taskId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetTaskStatus",
      version: "2020-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTaskStatusResponse>(await this.callApi(params, req, runtime), new GetTaskStatusResponse({}));
  }

  async getTaskStatus(request: GetTaskStatusRequest): Promise<GetTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTaskStatusWithOptions(request, runtime);
  }

}
