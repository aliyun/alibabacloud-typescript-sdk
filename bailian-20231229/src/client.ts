// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddFileRequest extends $tea.Model {
  categoryId?: string;
  leaseId?: string;
  parser?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      leaseId: 'LeaseId',
      parser: 'Parser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      leaseId: 'string',
      parser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFileResponseBody extends $tea.Model {
  code?: string;
  data?: AddFileResponseBodyData;
  message?: string;
  requestId?: string;
  status?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AddFileResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddFileResponseBody;
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
      body: AddFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyFileUploadLeaseRequest extends $tea.Model {
  fileName?: string;
  md5?: string;
  sizeInBytes?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      md5: 'Md5',
      sizeInBytes: 'SizeInBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      md5: 'string',
      sizeInBytes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyFileUploadLeaseResponseBody extends $tea.Model {
  code?: string;
  data?: ApplyFileUploadLeaseResponseBodyData;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ApplyFileUploadLeaseResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyFileUploadLeaseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApplyFileUploadLeaseResponseBody;
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
      body: ApplyFileUploadLeaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeFileResponseBodyData;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeFileResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFileResponseBody;
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
      body: DescribeFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFileResponseBodyData extends $tea.Model {
  fileId?: string;
  parser?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      parser: 'Parser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      parser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyFileUploadLeaseResponseBodyDataParam extends $tea.Model {
  headers?: any;
  method?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      method: 'Method',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: 'any',
      method: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyFileUploadLeaseResponseBodyData extends $tea.Model {
  fileUploadLeaseId?: string;
  param?: ApplyFileUploadLeaseResponseBodyDataParam;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileUploadLeaseId: 'FileUploadLeaseId',
      param: 'Param',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUploadLeaseId: 'string',
      param: ApplyFileUploadLeaseResponseBodyDataParam,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileResponseBodyData extends $tea.Model {
  categoryId?: string;
  createTime?: string;
  fileId?: string;
  fileName?: string;
  fileType?: string;
  parser?: string;
  sizeInBytes?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      createTime: 'CreateTime',
      fileId: 'FileId',
      fileName: 'FileName',
      fileType: 'FileType',
      parser: 'Parser',
      sizeInBytes: 'SizeInBytes',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      createTime: 'string',
      fileId: 'string',
      fileName: 'string',
      fileType: 'string',
      parser: 'string',
      sizeInBytes: 'number',
      status: 'string',
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
    this._endpoint = this.getEndpoint("bailian", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @summary 将临时上传的文档导入百炼数据中心，导入成功之后会自动触发文档解析。
   *
   * @param request AddFileRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return AddFileResponse
   */
  async addFileWithOptions(WorkspaceId: string, request: AddFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.leaseId)) {
      body["LeaseId"] = request.leaseId;
    }

    if (!Util.isUnset(request.parser)) {
      body["Parser"] = request.parser;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddFile",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(WorkspaceId)}/datacenter/file`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddFileResponse>(await this.callApi(params, req, runtime), new AddFileResponse({}));
  }

  /**
   * @summary 将临时上传的文档导入百炼数据中心，导入成功之后会自动触发文档解析。
   *
   * @param request AddFileRequest
   * @return AddFileResponse
   */
  async addFile(WorkspaceId: string, request: AddFileRequest): Promise<AddFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addFileWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * @summary 请求文档上传租约，进行文档上传。
   *
   * @param request ApplyFileUploadLeaseRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ApplyFileUploadLeaseResponse
   */
  async applyFileUploadLeaseWithOptions(CategoryId: string, WorkspaceId: string, request: ApplyFileUploadLeaseRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ApplyFileUploadLeaseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.md5)) {
      body["Md5"] = request.md5;
    }

    if (!Util.isUnset(request.sizeInBytes)) {
      body["SizeInBytes"] = request.sizeInBytes;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ApplyFileUploadLease",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(WorkspaceId)}/datacenter/category/${OpenApiUtil.getEncodeParam(CategoryId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyFileUploadLeaseResponse>(await this.callApi(params, req, runtime), new ApplyFileUploadLeaseResponse({}));
  }

  /**
   * @summary 请求文档上传租约，进行文档上传。
   *
   * @param request ApplyFileUploadLeaseRequest
   * @return ApplyFileUploadLeaseResponse
   */
  async applyFileUploadLease(CategoryId: string, WorkspaceId: string, request: ApplyFileUploadLeaseRequest): Promise<ApplyFileUploadLeaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.applyFileUploadLeaseWithOptions(CategoryId, WorkspaceId, request, headers, runtime);
  }

  /**
   * @summary 获取文档基本信息，包括文档名称、类型、状态等。
   *
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeFileResponse
   */
  async describeFileWithOptions(WorkspaceId: string, FileId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeFileResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeFile",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(WorkspaceId)}/datacenter/file/${OpenApiUtil.getEncodeParam(FileId)}/`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeFileResponse>(await this.callApi(params, req, runtime), new DescribeFileResponse({}));
  }

  /**
   * @summary 获取文档基本信息，包括文档名称、类型、状态等。
   *
   * @return DescribeFileResponse
   */
  async describeFile(WorkspaceId: string, FileId: string): Promise<DescribeFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeFileWithOptions(WorkspaceId, FileId, headers, runtime);
  }

}
