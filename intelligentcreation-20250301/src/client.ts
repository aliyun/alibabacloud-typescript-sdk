// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CreateLabelTaskRequest extends $dara.Model {
  /**
   * @example
   * https://example.com/callback
   */
  callbackUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://bucket-name.oss-zhangjiakou.aliyuncs.com/path/filename.jsonl
   */
  fileUrl?: string;
  /**
   * @example
   * abcdefg1234567
   */
  idempotentId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  labelTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      callbackUrl: 'CallbackUrl',
      fileUrl: 'FileUrl',
      idempotentId: 'IdempotentId',
      labelTemplateId: 'LabelTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackUrl: 'string',
      fileUrl: 'string',
      idempotentId: 'string',
      labelTemplateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLabelTaskResponseBody extends $dara.Model {
  /**
   * @example
   * ABCDEFGH-1234-5678-90AB-123456789ABC
   */
  requestId?: string;
  /**
   * @example
   * 03s1Xmp791KUMYuZVEb
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLabelTaskResponse extends $dara.Model {
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

export class CreateOssUploadTokenRequest extends $dara.Model {
  /**
   * @example
   * test-file
   */
  fileName?: string;
  /**
   * @example
   * JSONL
   */
  fileType?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileType: 'FileType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOssUploadTokenResponseBody extends $dara.Model {
  /**
   * @example
   * LTAI5tQPEXqDVu7794Bvw2xM
   */
  accessId?: string;
  /**
   * @example
   * 1740758400000
   */
  expireTime?: string;
  /**
   * @example
   * https://bucket-name.oss-zhangjiakou.aliyuncs.com
   */
  host?: string;
  /**
   * @example
   * path/filename.jsonl
   */
  key?: string;
  /**
   * @example
   * vyAnsgE0fgjYGF0W79ryhhhQmec=
   */
  policy?: string;
  /**
   * @example
   * ABCDEFGH-1234-5678-90AB-123456789ABC
   */
  requestId?: string;
  /**
   * @example
   * vyAnsgE0fgjYGF0W79ryhhhQmec=
   */
  signature?: string;
  /**
   * @example
   * https://bucket-name.oss-zhangjiakou.aliyuncs.com/path/filename.jsonl
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      expireTime: 'ExpireTime',
      host: 'Host',
      key: 'Key',
      policy: 'Policy',
      requestId: 'RequestId',
      signature: 'Signature',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      expireTime: 'string',
      host: 'string',
      key: 'string',
      policy: 'string',
      requestId: 'string',
      signature: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOssUploadTokenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateOssUploadTokenResponseBody;
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
      body: CreateOssUploadTokenResponseBody,
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

export class CreateTextLabelRequest extends $dara.Model {
  data?: string;
  /**
   * @example
   * abc
   */
  labelTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      labelTemplateId: 'LabelTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      labelTemplateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTextLabelResponseBody extends $dara.Model {
  /**
   * @example
   * {\\"tag\\": \\"tag1\\", \\"Emotion\\": \\"1\\"}
   */
  data?: string;
  /**
   * @example
   * ABCDEFGH-1234-5678-90AB-123456789ABC
   */
  requestId?: string;
  /**
   * @example
   * 1000
   */
  tokens?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      tokens: 'Tokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      tokens: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTextLabelResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTextLabelResponseBody;
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
      body: CreateTextLabelResponseBody,
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

export class GetLabelTaskResultRequest extends $dara.Model {
  /**
   * @example
   * 03s1Xmp791KUMYuZVEb
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLabelTaskResultResponseBody extends $dara.Model {
  /**
   * @example
   * ABCDEFGH-1234-5678-90AB-123456789ABC
   */
  requestId?: string;
  /**
   * @example
   * http://bucket.oss.cn-zhangjiakou.aliyuncs.com/key
   */
  resultDataUrl?: string;
  /**
   * @example
   * IN_PROGRESS
   */
  status?: string;
  /**
   * @example
   * 1000
   */
  tokens?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultDataUrl: 'ResultDataUrl',
      status: 'Status',
      tokens: 'Tokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultDataUrl: 'string',
      status: 'string',
      tokens: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLabelTaskResultResponse extends $dara.Model {
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
    this._endpoint = this.getEndpoint("intelligentcreation", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 创建模型标注任务
   * 
   * @param request - CreateLabelTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLabelTaskResponse
   */
  async createLabelTaskWithOptions(request: CreateLabelTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateLabelTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.callbackUrl)) {
      body["CallbackUrl"] = request.callbackUrl;
    }

    if (!$dara.isNull(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.idempotentId)) {
      body["IdempotentId"] = request.idempotentId;
    }

    if (!$dara.isNull(request.labelTemplateId)) {
      body["LabelTemplateId"] = request.labelTemplateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLabelTask",
      version: "2025-03-01",
      protocol: "HTTPS",
      pathname: `/tongjian/yic-tongjian/openService/v2/aitag/createLabelTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateLabelTaskResponse>(await this.callApi(params, req, runtime), new CreateLabelTaskResponse({}));
    } else {
      return $dara.cast<CreateLabelTaskResponse>(await this.execute(params, req, runtime), new CreateLabelTaskResponse({}));
    }

  }

  /**
   * 创建模型标注任务
   * 
   * @param request - CreateLabelTaskRequest
   * @returns CreateLabelTaskResponse
   */
  async createLabelTask(request: CreateLabelTaskRequest): Promise<CreateLabelTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLabelTaskWithOptions(request, headers, runtime);
  }

  /**
   * 创建OSS上传token
   * 
   * @param request - CreateOssUploadTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOssUploadTokenResponse
   */
  async createOssUploadTokenWithOptions(request: CreateOssUploadTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateOssUploadTokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileType)) {
      body["FileType"] = request.fileType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOssUploadToken",
      version: "2025-03-01",
      protocol: "HTTPS",
      pathname: `/tongjian/yic-tongjian/openService/v2/base/createOssUploadToken`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateOssUploadTokenResponse>(await this.callApi(params, req, runtime), new CreateOssUploadTokenResponse({}));
    } else {
      return $dara.cast<CreateOssUploadTokenResponse>(await this.execute(params, req, runtime), new CreateOssUploadTokenResponse({}));
    }

  }

  /**
   * 创建OSS上传token
   * 
   * @param request - CreateOssUploadTokenRequest
   * @returns CreateOssUploadTokenResponse
   */
  async createOssUploadToken(request: CreateOssUploadTokenRequest): Promise<CreateOssUploadTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createOssUploadTokenWithOptions(request, headers, runtime);
  }

  /**
   * 单条文本标注
   * 
   * @param request - CreateTextLabelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTextLabelResponse
   */
  async createTextLabelWithOptions(request: CreateTextLabelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateTextLabelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.data)) {
      body["Data"] = request.data;
    }

    if (!$dara.isNull(request.labelTemplateId)) {
      body["LabelTemplateId"] = request.labelTemplateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTextLabel",
      version: "2025-03-01",
      protocol: "HTTPS",
      pathname: `/tongjian/yic-tongjian/openService/v2/aitag/createTextLabel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateTextLabelResponse>(await this.callApi(params, req, runtime), new CreateTextLabelResponse({}));
    } else {
      return $dara.cast<CreateTextLabelResponse>(await this.execute(params, req, runtime), new CreateTextLabelResponse({}));
    }

  }

  /**
   * 单条文本标注
   * 
   * @param request - CreateTextLabelRequest
   * @returns CreateTextLabelResponse
   */
  async createTextLabel(request: CreateTextLabelRequest): Promise<CreateTextLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTextLabelWithOptions(request, headers, runtime);
  }

  /**
   * 查询模型标注任务
   * 
   * @param request - GetLabelTaskResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLabelTaskResultResponse
   */
  async getLabelTaskResultWithOptions(request: GetLabelTaskResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetLabelTaskResultResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLabelTaskResult",
      version: "2025-03-01",
      protocol: "HTTPS",
      pathname: `/tongjian/yic-tongjian/openService/v2/aitag/getLabelTaskResult`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetLabelTaskResultResponse>(await this.callApi(params, req, runtime), new GetLabelTaskResultResponse({}));
    } else {
      return $dara.cast<GetLabelTaskResultResponse>(await this.execute(params, req, runtime), new GetLabelTaskResultResponse({}));
    }

  }

  /**
   * 查询模型标注任务
   * 
   * @param request - GetLabelTaskResultRequest
   * @returns GetLabelTaskResultResponse
   */
  async getLabelTaskResult(request: GetLabelTaskResultRequest): Promise<GetLabelTaskResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLabelTaskResultWithOptions(request, headers, runtime);
  }

}
