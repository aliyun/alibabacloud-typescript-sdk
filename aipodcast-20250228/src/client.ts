// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class PodcastTaskResultQueryResponseBodyData extends $dara.Model {
  /**
   * @example
   * {
   *             "audio": "http://note-ai-file.oss-cn-beijing.aliyuncs.com/202503241702148295/audio.mp3?OSSAccessKeyId=LTAI5tPLWJfJHNkZbfnQv245&Expires=1742810788&Signature=b5p83nh443Gr7foqdvgrI4%2FKZVM%3D",
   *             "script": "http://note-ai-file.oss-cn-beijing.aliyuncs.com/202503241702148295/script.txt?OSSAccessKeyId=LTAI5tPLWJfJHNkZbfnQv245&Expires=1742810622&Signature=TBBdikHzOWW3YqDw3sNMTXiMo6A%3D"
   * }
   */
  resultUrl?: any;
  script?: string;
  /**
   * @example
   * 63c4e0eaab3b4c0db208ecafa990e8d1
   */
  taskId?: string;
  /**
   * @example
   * SUCCEEDED
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      resultUrl: 'resultUrl',
      script: 'script',
      taskId: 'taskId',
      taskStatus: 'taskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultUrl: 'any',
      script: 'string',
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PodcastTaskSubmitResponseBodyData extends $dara.Model {
  /**
   * @example
   * 63c4e0eaab3b4c0db208ecafa990e8d1
   */
  taskId?: string;
  /**
   * @example
   * SUCCEEDED
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
      taskStatus: 'taskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PodcastTaskResultQueryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 63c4e0eaab3b4c0db208ecafa990e8d1
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-ep8ba0dr6seiddri
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PodcastTaskResultQueryResponseBody extends $dara.Model {
  /**
   * @example
   * "success"
   */
  code?: string;
  data?: PodcastTaskResultQueryResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @example
   * "success"
   */
  message?: string;
  /**
   * @example
   * C38F034D-7F36-531C-95AC-0C752F80E840
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: PodcastTaskResultQueryResponseBodyData,
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PodcastTaskResultQueryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PodcastTaskResultQueryResponseBody;
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
      body: PodcastTaskResultQueryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PodcastTaskSubmitRequest extends $dara.Model {
  /**
   * @example
   * 2
   */
  counts?: number;
  fileUrls?: string[];
  text?: string;
  topic?: string;
  voices?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-ep8ba0dr6seiddxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      counts: 'counts',
      fileUrls: 'fileUrls',
      text: 'text',
      topic: 'topic',
      voices: 'voices',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      counts: 'number',
      fileUrls: { 'type': 'array', 'itemType': 'string' },
      text: 'string',
      topic: 'string',
      voices: { 'type': 'array', 'itemType': 'string' },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileUrls)) {
      $dara.Model.validateArray(this.fileUrls);
    }
    if(Array.isArray(this.voices)) {
      $dara.Model.validateArray(this.voices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PodcastTaskSubmitShrinkRequest extends $dara.Model {
  /**
   * @example
   * 2
   */
  counts?: number;
  fileUrlsShrink?: string;
  text?: string;
  topic?: string;
  voicesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-ep8ba0dr6seiddxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      counts: 'counts',
      fileUrlsShrink: 'fileUrls',
      text: 'text',
      topic: 'topic',
      voicesShrink: 'voices',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      counts: 'number',
      fileUrlsShrink: 'string',
      text: 'string',
      topic: 'string',
      voicesShrink: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PodcastTaskSubmitResponseBody extends $dara.Model {
  /**
   * @example
   * "success"
   */
  code?: string;
  data?: PodcastTaskSubmitResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @example
   * "success"
   */
  message?: string;
  /**
   * @example
   * 9CE5B91A-6E6B-55FB-A1AF-037DF01C84B3
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: PodcastTaskSubmitResponseBodyData,
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PodcastTaskSubmitResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PodcastTaskSubmitResponseBody;
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
      body: PodcastTaskSubmitResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("aipodcast", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * ai播客生成任务结果查询
   * 
   * @param request - PodcastTaskResultQueryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PodcastTaskResultQueryResponse
   */
  async podcastTaskResultQueryWithOptions(request: PodcastTaskResultQueryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<PodcastTaskResultQueryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PodcastTaskResultQuery",
      version: "2025-02-28",
      protocol: "HTTPS",
      pathname: `/podcast/task`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PodcastTaskResultQueryResponse>(await this.callApi(params, req, runtime), new PodcastTaskResultQueryResponse({}));
    } else {
      return $dara.cast<PodcastTaskResultQueryResponse>(await this.execute(params, req, runtime), new PodcastTaskResultQueryResponse({}));
    }

  }

  /**
   * ai播客生成任务结果查询
   * 
   * @param request - PodcastTaskResultQueryRequest
   * @returns PodcastTaskResultQueryResponse
   */
  async podcastTaskResultQuery(request: PodcastTaskResultQueryRequest): Promise<PodcastTaskResultQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.podcastTaskResultQueryWithOptions(request, headers, runtime);
  }

  /**
   * ai播客生成任务提交
   * 
   * @param tmpReq - PodcastTaskSubmitRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PodcastTaskSubmitResponse
   */
  async podcastTaskSubmitWithOptions(tmpReq: PodcastTaskSubmitRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<PodcastTaskSubmitResponse> {
    tmpReq.validate();
    let request = new PodcastTaskSubmitShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.fileUrls)) {
      request.fileUrlsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fileUrls, "fileUrls", "json");
    }

    if (!$dara.isNull(tmpReq.voices)) {
      request.voicesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.voices, "voices", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.counts)) {
      body["counts"] = request.counts;
    }

    if (!$dara.isNull(request.fileUrlsShrink)) {
      body["fileUrls"] = request.fileUrlsShrink;
    }

    if (!$dara.isNull(request.text)) {
      body["text"] = request.text;
    }

    if (!$dara.isNull(request.topic)) {
      body["topic"] = request.topic;
    }

    if (!$dara.isNull(request.voicesShrink)) {
      body["voices"] = request.voicesShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PodcastTaskSubmit",
      version: "2025-02-28",
      protocol: "HTTPS",
      pathname: `/podcast/task/submit`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PodcastTaskSubmitResponse>(await this.callApi(params, req, runtime), new PodcastTaskSubmitResponse({}));
    } else {
      return $dara.cast<PodcastTaskSubmitResponse>(await this.execute(params, req, runtime), new PodcastTaskSubmitResponse({}));
    }

  }

  /**
   * ai播客生成任务提交
   * 
   * @param request - PodcastTaskSubmitRequest
   * @returns PodcastTaskSubmitResponse
   */
  async podcastTaskSubmit(request: PodcastTaskSubmitRequest): Promise<PodcastTaskSubmitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.podcastTaskSubmitWithOptions(request, headers, runtime);
  }

}
