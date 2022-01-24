// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetTaskResultRequest extends $tea.Model {
  debug?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      debug: 'Debug',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debug: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultResponseBody extends $tea.Model {
  bizDuration?: number;
  requestId?: string;
  result?: GetTaskResultResponseBodyResult;
  solveTime?: number;
  statusCode?: number;
  statusText?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      bizDuration: 'BizDuration',
      requestId: 'RequestId',
      result: 'Result',
      solveTime: 'SolveTime',
      statusCode: 'StatusCode',
      statusText: 'StatusText',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDuration: 'number',
      requestId: 'string',
      result: GetTaskResultResponseBodyResult,
      solveTime: 'number',
      statusCode: 'number',
      statusText: 'string',
      taskId: 'string',
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

export class SubmitTaskRequest extends $tea.Model {
  debug?: boolean;
  task?: string;
  static names(): { [key: string]: string } {
    return {
      debug: 'Debug',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debug: 'boolean',
      task: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTaskResponseBody extends $tea.Model {
  requestId?: string;
  statusCode?: number;
  statusText?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statusCode: 'StatusCode',
      statusText: 'StatusText',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statusCode: 'number',
      statusText: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultResponseBodyResultParagraphs extends $tea.Model {
  beginTIme?: number;
  channelId?: number;
  endTime?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      beginTIme: 'BeginTIme',
      channelId: 'ChannelId',
      endTime: 'EndTime',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTIme: 'number',
      channelId: 'number',
      endTime: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultResponseBodyResultSentences extends $tea.Model {
  beginTime?: number;
  channelId?: number;
  emotionValue?: number;
  endTime?: number;
  silenceDuration?: number;
  speakerId?: string;
  speechRate?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      channelId: 'ChannelId',
      emotionValue: 'EmotionValue',
      endTime: 'EndTime',
      silenceDuration: 'SilenceDuration',
      speakerId: 'SpeakerId',
      speechRate: 'SpeechRate',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      channelId: 'number',
      emotionValue: 'number',
      endTime: 'number',
      silenceDuration: 'number',
      speakerId: 'string',
      speechRate: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultResponseBodyResultWords extends $tea.Model {
  beginTime?: number;
  channelId?: number;
  endTime?: number;
  word?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      channelId: 'ChannelId',
      endTime: 'EndTime',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      channelId: 'number',
      endTime: 'number',
      word: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResultResponseBodyResult extends $tea.Model {
  paragraphs?: GetTaskResultResponseBodyResultParagraphs[];
  sentences?: GetTaskResultResponseBodyResultSentences[];
  words?: GetTaskResultResponseBodyResultWords[];
  static names(): { [key: string]: string } {
    return {
      paragraphs: 'Paragraphs',
      sentences: 'Sentences',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paragraphs: { 'type': 'array', 'itemType': GetTaskResultResponseBodyResultParagraphs },
      sentences: { 'type': 'array', 'itemType': GetTaskResultResponseBodyResultSentences },
      words: { 'type': 'array', 'itemType': GetTaskResultResponseBodyResultWords },
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
    this._endpoint = this.getEndpoint("speechfiletranscriberlite", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async getTaskResultWithOptions(request: GetTaskResultRequest, runtime: $Util.RuntimeOptions): Promise<GetTaskResultResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTaskResult",
      version: "2021-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTaskResultResponse>(await this.callApi(params, req, runtime), new GetTaskResultResponse({}));
  }

  async getTaskResult(request: GetTaskResultRequest): Promise<GetTaskResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTaskResultWithOptions(request, runtime);
  }

  async submitTaskWithOptions(request: SubmitTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.debug)) {
      query["Debug"] = request.debug;
    }

    if (!Util.isUnset(request.task)) {
      query["Task"] = request.task;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitTask",
      version: "2021-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitTaskResponse>(await this.callApi(params, req, runtime), new SubmitTaskResponse({}));
  }

  async submitTask(request: SubmitTaskRequest): Promise<SubmitTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitTaskWithOptions(request, runtime);
  }

}
