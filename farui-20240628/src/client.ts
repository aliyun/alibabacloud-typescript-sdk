// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class CreateTextFileRequest extends $tea.Model {
  clientToken?: string;
  createTime?: string;
  textFileName?: string;
  textFileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      createTime: 'CreateTime',
      textFileName: 'TextFileName',
      textFileUrl: 'TextFileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      createTime: 'string',
      textFileName: 'string',
      textFileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTextFileAdvanceRequest extends $tea.Model {
  clientToken?: string;
  createTime?: string;
  textFileName?: string;
  textFileUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      createTime: 'CreateTime',
      textFileName: 'TextFileName',
      textFileUrlObject: 'TextFileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      createTime: 'string',
      textFileName: 'string',
      textFileUrlObject: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTextFileResponseBody extends $tea.Model {
  code?: string;
  data?: CreateTextFileResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateTextFileResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTextFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTextFileResponseBody;
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
      body: CreateTextFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLegalAdviceConsultationRequest extends $tea.Model {
  appId?: string;
  assistant?: RunLegalAdviceConsultationRequestAssistant;
  stream?: boolean;
  thread?: RunLegalAdviceConsultationRequestThread;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      assistant: 'assistant',
      stream: 'stream',
      thread: 'thread',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      assistant: RunLegalAdviceConsultationRequestAssistant,
      stream: 'boolean',
      thread: RunLegalAdviceConsultationRequestThread,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLegalAdviceConsultationShrinkRequest extends $tea.Model {
  appId?: string;
  assistantShrink?: string;
  stream?: boolean;
  threadShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      assistantShrink: 'assistant',
      stream: 'stream',
      threadShrink: 'thread',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      assistantShrink: 'string',
      stream: 'boolean',
      threadShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLegalAdviceConsultationResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  responseMarkdown?: string;
  round?: number;
  status?: string;
  success?: boolean;
  usage?: RunLegalAdviceConsultationResponseBodyUsage;
  httpStatusCode?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      responseMarkdown: 'ResponseMarkdown',
      round: 'Round',
      status: 'Status',
      success: 'Success',
      usage: 'Usage',
      httpStatusCode: 'httpStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      responseMarkdown: 'string',
      round: 'number',
      status: 'string',
      success: 'boolean',
      usage: RunLegalAdviceConsultationResponseBodyUsage,
      httpStatusCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLegalAdviceConsultationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunLegalAdviceConsultationResponseBody;
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
      body: RunLegalAdviceConsultationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTextFileResponseBodyData extends $tea.Model {
  textFileId?: string;
  textFileName?: string;
  textFileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      textFileId: 'TextFileId',
      textFileName: 'TextFileName',
      textFileUrl: 'TextFileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      textFileId: 'string',
      textFileName: 'string',
      textFileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLegalAdviceConsultationRequestAssistant extends $tea.Model {
  id?: string;
  metaData?: { [key: string]: string };
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      metaData: 'metaData',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLegalAdviceConsultationRequestThreadMessages extends $tea.Model {
  content?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLegalAdviceConsultationRequestThread extends $tea.Model {
  messages?: RunLegalAdviceConsultationRequestThreadMessages[];
  static names(): { [key: string]: string } {
    return {
      messages: 'messages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': RunLegalAdviceConsultationRequestThreadMessages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLegalAdviceConsultationResponseBodyUsage extends $tea.Model {
  inputTokens?: number;
  outputTokens?: number;
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      totalTokens: 'TotalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
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
    this._endpoint = this.getEndpoint("farui", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @summary 上传合同文件
   *
   * @param request CreateTextFileRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateTextFileResponse
   */
  async createTextFileWithOptions(WorkspaceId: string, request: CreateTextFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTextFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.createTime)) {
      body["CreateTime"] = request.createTime;
    }

    if (!Util.isUnset(request.textFileName)) {
      body["TextFileName"] = request.textFileName;
    }

    if (!Util.isUnset(request.textFileUrl)) {
      body["TextFileUrl"] = request.textFileUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTextFile",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(WorkspaceId)}/data/textFile`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTextFileResponse>(await this.callApi(params, req, runtime), new CreateTextFileResponse({}));
  }

  /**
   * @summary 上传合同文件
   *
   * @param request CreateTextFileRequest
   * @return CreateTextFileResponse
   */
  async createTextFile(WorkspaceId: string, request: CreateTextFileRequest): Promise<CreateTextFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTextFileWithOptions(WorkspaceId, request, headers, runtime);
  }

  async createTextFileAdvance(WorkspaceId: string, request: CreateTextFileAdvanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTextFileResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.empty(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "FaRui",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let createTextFileReq = new CreateTextFileRequest({ });
    OpenApiUtil.convert(request, createTextFileReq);
    if (!Util.isUnset(request.textFileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.textFileUrlObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      createTextFileReq.textFileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let createTextFileResp = await this.createTextFileWithOptions(WorkspaceId, createTextFileReq, headers, runtime);
    return createTextFileResp;
  }

  /**
   * @summary 法律咨询
   *
   * @param tmpReq RunLegalAdviceConsultationRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return RunLegalAdviceConsultationResponse
   */
  async runLegalAdviceConsultationWithOptions(workspaceId: string, tmpReq: RunLegalAdviceConsultationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RunLegalAdviceConsultationResponse> {
    Util.validateModel(tmpReq);
    let request = new RunLegalAdviceConsultationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.assistant)) {
      request.assistantShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assistant, "assistant", "json");
    }

    if (!Util.isUnset(tmpReq.thread)) {
      request.threadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.thread, "thread", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!Util.isUnset(request.assistantShrink)) {
      body["assistant"] = request.assistantShrink;
    }

    if (!Util.isUnset(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!Util.isUnset(request.threadShrink)) {
      body["thread"] = request.threadShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunLegalAdviceConsultation",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/farui/legalAdvice/consult`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunLegalAdviceConsultationResponse>(await this.callApi(params, req, runtime), new RunLegalAdviceConsultationResponse({}));
  }

  /**
   * @summary 法律咨询
   *
   * @param request RunLegalAdviceConsultationRequest
   * @return RunLegalAdviceConsultationResponse
   */
  async runLegalAdviceConsultation(workspaceId: string, request: RunLegalAdviceConsultationRequest): Promise<RunLegalAdviceConsultationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runLegalAdviceConsultationWithOptions(workspaceId, request, headers, runtime);
  }

}
