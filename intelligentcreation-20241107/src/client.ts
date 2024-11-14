// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateLabelTaskRequest extends $tea.Model {
  /**
   * @example
   * oss://test/test
   */
  fileUrl?: string;
  /**
   * @example
   * 7caa09aa60204086909ba3958810a567
   */
  idempotentId?: string;
  /**
   * @example
   * 1_for_7_label_v1
   */
  labelTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'fileUrl',
      idempotentId: 'idempotentId',
      labelTemplateId: 'labelTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      idempotentId: 'string',
      labelTemplateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLabelTaskResponseBody extends $tea.Model {
  /**
   * @example
   * PARAM_ERROR
   */
  errorCode?: string;
  errorMessage?: string;
  /**
   * @example
   * 56AC346B-AF40-5E4F-AFFE-FD8BA5E6FB3A
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 829682927337963520
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLabelTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateLabelTaskResponseBody;
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
      body: CreateLabelTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLabelTaskResultRequest extends $tea.Model {
  /**
   * @example
   * 313123123
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
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

export class GetLabelTaskResultResponseBody extends $tea.Model {
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * D5798660-1531-5D12-9C20-16FEE9D22351
   */
  requestId?: string;
  /**
   * @example
   * https://yic-pre.oss-cn-hangzhou.aliyuncs.com/ai_tag_algo_log/1539704706413278/829593441691238400/merge_label_final_result?Expires=1732083305&OSSAccessKeyId=LTAI5tPHLyFPhh4UoRias4Zg&Signature=Am3cBxlc6hYFKtdGlw9o1R26Vsk%3D
   */
  resultDataUrl?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * 20023
   */
  tokens?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      requestId: 'requestId',
      resultDataUrl: 'resultDataUrl',
      status: 'status',
      tokens: 'tokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      resultDataUrl: 'string',
      status: 'string',
      tokens: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLabelTaskResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLabelTaskResultResponseBody;
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
      body: GetLabelTaskResultResponseBody,
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
    this._endpoint = this.getEndpoint("intelligentcreation", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  /**
   * 创建模型标注任务
   * 
   * @param request - CreateLabelTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLabelTaskResponse
   */
  async createLabelTaskWithOptions(request: CreateLabelTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateLabelTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileUrl)) {
      body["fileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.idempotentId)) {
      body["idempotentId"] = request.idempotentId;
    }

    if (!Util.isUnset(request.labelTemplateId)) {
      body["labelTemplateId"] = request.labelTemplateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateLabelTask",
      version: "2024-11-07",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/aitag/createLabelTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateLabelTaskResponse>(await this.callApi(params, req, runtime), new CreateLabelTaskResponse({}));
  }

  /**
   * 创建模型标注任务
   * 
   * @param request - CreateLabelTaskRequest
   * @returns CreateLabelTaskResponse
   */
  async createLabelTask(request: CreateLabelTaskRequest): Promise<CreateLabelTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLabelTaskWithOptions(request, headers, runtime);
  }

  /**
   * 查询模型标注任务结果
   * 
   * @param request - GetLabelTaskResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLabelTaskResultResponse
   */
  async getLabelTaskResultWithOptions(request: GetLabelTaskResultRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetLabelTaskResultResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLabelTaskResult",
      version: "2024-11-07",
      protocol: "HTTPS",
      pathname: `/yic/yic-console/openService/v1/aitag/getLabelTask`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetLabelTaskResultResponse>(await this.callApi(params, req, runtime), new GetLabelTaskResultResponse({}));
  }

  /**
   * 查询模型标注任务结果
   * 
   * @param request - GetLabelTaskResultRequest
   * @returns GetLabelTaskResultResponse
   */
  async getLabelTaskResult(request: GetLabelTaskResultRequest): Promise<GetLabelTaskResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLabelTaskResultWithOptions(request, headers, runtime);
  }

}
