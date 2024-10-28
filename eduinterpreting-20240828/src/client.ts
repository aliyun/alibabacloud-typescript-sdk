// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class RecognizeAudioRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://xx.com/abc.mp3
   */
  audioFileUrl?: string;
  /**
   * @example
   * https://abc.edu.org.cn/en/callback
   */
  callbackUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableCallBack?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 433c1361-0f6e-48fc-ad51
   */
  outerBizId?: string;
  static names(): { [key: string]: string } {
    return {
      audioFileUrl: 'AudioFileUrl',
      callbackUrl: 'CallbackUrl',
      enableCallBack: 'EnableCallBack',
      outerBizId: 'OuterBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioFileUrl: 'string',
      callbackUrl: 'string',
      enableCallBack: 'boolean',
      outerBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAudioResponseBody extends $tea.Model {
  itemList?: RecognizeAudioResponseBodyItemList[];
  /**
   * @example
   * 38CD0881-BC7B-5ADB-A3EB-FF813927D09A
   */
  requestId?: string;
  /**
   * @example
   * 3ab5c082-2c0e-4f39-b12f-057dd5e373ff
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      itemList: 'ItemList',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemList: { 'type': 'array', 'itemType': RecognizeAudioResponseBodyItemList },
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAudioResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecognizeAudioResponseBody;
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
      body: RecognizeAudioResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEvaluationTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://xx.com/abc.mp3
   */
  audioUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://abc.edu.org.cn/en/callback
   */
  callbackUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * As flame of fire we gather, as skyful of stars we scatter.
   */
  materialText?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 433c1361-0f6e-48fc-ad51
   */
  outerBizId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  suggestedAnswer?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  text?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * EN_TO_ZH
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      audioUrl: 'AudioUrl',
      callbackUrl: 'CallbackUrl',
      materialText: 'MaterialText',
      outerBizId: 'OuterBizId',
      suggestedAnswer: 'SuggestedAnswer',
      text: 'Text',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioUrl: 'string',
      callbackUrl: 'string',
      materialText: 'string',
      outerBizId: 'string',
      suggestedAnswer: 'string',
      text: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEvaluationTaskResponseBody extends $tea.Model {
  /**
   * @example
   * BA3BB7D0-E098-5F0C-AF25-0BEFAEE7D1F0
   */
  requestId?: string;
  /**
   * @example
   * 8fb75c55-98b5-4b82-ae67-5dbb9a0646cc
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitEvaluationTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitEvaluationTaskResponseBody;
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
      body: SubmitEvaluationTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeAudioResponseBodyItemList extends $tea.Model {
  /**
   * @example
   * 0
   */
  beginTime?: string;
  /**
   * @example
   * 1230
   */
  endTime?: string;
  /**
   * @example
   * How are you
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
      text: 'string',
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
    this._endpoint = this.getEndpoint("eduinterpreting", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 英语口译语音文件识别成英文内容
   * 
   * @param request - RecognizeAudioRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecognizeAudioResponse
   */
  async recognizeAudioWithOptions(request: RecognizeAudioRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeAudioResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.enableCallBack)) {
      query["EnableCallBack"] = request.enableCallBack;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.audioFileUrl)) {
      body["AudioFileUrl"] = request.audioFileUrl;
    }

    if (!Util.isUnset(request.callbackUrl)) {
      body["CallbackUrl"] = request.callbackUrl;
    }

    if (!Util.isUnset(request.outerBizId)) {
      body["OuterBizId"] = request.outerBizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeAudio",
      version: "2024-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeAudioResponse>(await this.callApi(params, req, runtime), new RecognizeAudioResponse({}));
  }

  /**
   * 英语口译语音文件识别成英文内容
   * 
   * @param request - RecognizeAudioRequest
   * @returns RecognizeAudioResponse
   */
  async recognizeAudio(request: RecognizeAudioRequest): Promise<RecognizeAudioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeAudioWithOptions(request, runtime);
  }

  /**
   * 口译评测任务
   * 
   * @param request - SubmitEvaluationTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitEvaluationTaskResponse
   */
  async submitEvaluationTaskWithOptions(request: SubmitEvaluationTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitEvaluationTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.audioUrl)) {
      body["AudioUrl"] = request.audioUrl;
    }

    if (!Util.isUnset(request.callbackUrl)) {
      body["CallbackUrl"] = request.callbackUrl;
    }

    if (!Util.isUnset(request.materialText)) {
      body["MaterialText"] = request.materialText;
    }

    if (!Util.isUnset(request.outerBizId)) {
      body["OuterBizId"] = request.outerBizId;
    }

    if (!Util.isUnset(request.suggestedAnswer)) {
      body["SuggestedAnswer"] = request.suggestedAnswer;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitEvaluationTask",
      version: "2024-08-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitEvaluationTaskResponse>(await this.callApi(params, req, runtime), new SubmitEvaluationTaskResponse({}));
  }

  /**
   * 口译评测任务
   * 
   * @param request - SubmitEvaluationTaskRequest
   * @returns SubmitEvaluationTaskResponse
   */
  async submitEvaluationTask(request: SubmitEvaluationTaskRequest): Promise<SubmitEvaluationTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitEvaluationTaskWithOptions(request, runtime);
  }

}
