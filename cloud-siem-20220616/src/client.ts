// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BatchJobCheckRequest extends $tea.Model {
  regionId?: string;
  submitId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      submitId: 'SubmitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      submitId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJobCheckResponseBody extends $tea.Model {
  code?: number;
  data?: BatchJobCheckResponseBodyData;
  errCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: BatchJobCheckResponseBodyData,
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJobCheckResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchJobCheckResponseBody;
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
      body: BatchJobCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJobSubmitRequest extends $tea.Model {
  jsonConfig?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      jsonConfig: 'JsonConfig',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jsonConfig: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJobSubmitResponseBody extends $tea.Model {
  code?: number;
  data?: BatchJobSubmitResponseBodyData;
  errCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: BatchJobSubmitResponseBodyData,
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJobSubmitResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchJobSubmitResponseBody;
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
      body: BatchJobSubmitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageRequest extends $tea.Model {
  channelType?: number;
  receiveUid?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      receiveUid: 'ReceiveUid',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'number',
      receiveUid: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  errCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SendMessageResponseBody;
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
      body: SendMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJobCheckResponseBodyDataErrTaskListProductListLogList extends $tea.Model {
  errorCode?: string;
  logCode?: string;
  logStoreNamePattern?: string;
  productCode?: string;
  projectNamePattern?: string;
  regionCode?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      logCode: 'LogCode',
      logStoreNamePattern: 'LogStoreNamePattern',
      productCode: 'ProductCode',
      projectNamePattern: 'ProjectNamePattern',
      regionCode: 'RegionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      logCode: 'string',
      logStoreNamePattern: 'string',
      productCode: 'string',
      projectNamePattern: 'string',
      regionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJobCheckResponseBodyDataErrTaskListProductList extends $tea.Model {
  logList?: BatchJobCheckResponseBodyDataErrTaskListProductListLogList[];
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      logList: 'LogList',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logList: { 'type': 'array', 'itemType': BatchJobCheckResponseBodyDataErrTaskListProductListLogList },
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJobCheckResponseBodyDataErrTaskList extends $tea.Model {
  productList?: BatchJobCheckResponseBodyDataErrTaskListProductList[];
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      productList: 'ProductList',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productList: { 'type': 'array', 'itemType': BatchJobCheckResponseBodyDataErrTaskListProductList },
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJobCheckResponseBodyData extends $tea.Model {
  configId?: string;
  errTaskList?: BatchJobCheckResponseBodyDataErrTaskList[];
  failedCount?: number;
  finishCount?: number;
  folderId?: string;
  taskCount?: number;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      errTaskList: 'ErrTaskList',
      failedCount: 'FailedCount',
      finishCount: 'FinishCount',
      folderId: 'FolderId',
      taskCount: 'TaskCount',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      errTaskList: { 'type': 'array', 'itemType': BatchJobCheckResponseBodyDataErrTaskList },
      failedCount: 'number',
      finishCount: 'number',
      folderId: 'string',
      taskCount: 'number',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJobSubmitResponseBodyDataConfigListProductListLogList extends $tea.Model {
  errorCode?: string;
  logCode?: string;
  logStoreNamePattern?: string;
  productCode?: string;
  projectNamePattern?: string;
  regionCode?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      logCode: 'LogCode',
      logStoreNamePattern: 'LogStoreNamePattern',
      productCode: 'ProductCode',
      projectNamePattern: 'ProjectNamePattern',
      regionCode: 'RegionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      logCode: 'string',
      logStoreNamePattern: 'string',
      productCode: 'string',
      projectNamePattern: 'string',
      regionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJobSubmitResponseBodyDataConfigListProductList extends $tea.Model {
  logList?: BatchJobSubmitResponseBodyDataConfigListProductListLogList[];
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      logList: 'LogList',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logList: { 'type': 'array', 'itemType': BatchJobSubmitResponseBodyDataConfigListProductListLogList },
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJobSubmitResponseBodyDataConfigList extends $tea.Model {
  productList?: BatchJobSubmitResponseBodyDataConfigListProductList[];
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      productList: 'ProductList',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productList: { 'type': 'array', 'itemType': BatchJobSubmitResponseBodyDataConfigListProductList },
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchJobSubmitResponseBodyData extends $tea.Model {
  configId?: string;
  configList?: BatchJobSubmitResponseBodyDataConfigList[];
  submitId?: string;
  taskCount?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      configList: 'ConfigList',
      submitId: 'SubmitId',
      taskCount: 'TaskCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      configList: { 'type': 'array', 'itemType': BatchJobSubmitResponseBodyDataConfigList },
      submitId: 'string',
      taskCount: 'number',
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
    this._endpoint = this.getEndpoint("cloud-siem", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async batchJobCheckWithOptions(request: BatchJobCheckRequest, runtime: $Util.RuntimeOptions): Promise<BatchJobCheckResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.submitId)) {
      body["SubmitId"] = request.submitId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchJobCheck",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchJobCheckResponse>(await this.callApi(params, req, runtime), new BatchJobCheckResponse({}));
  }

  async batchJobCheck(request: BatchJobCheckRequest): Promise<BatchJobCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchJobCheckWithOptions(request, runtime);
  }

  async batchJobSubmitWithOptions(request: BatchJobSubmitRequest, runtime: $Util.RuntimeOptions): Promise<BatchJobSubmitResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jsonConfig)) {
      body["JsonConfig"] = request.jsonConfig;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchJobSubmit",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchJobSubmitResponse>(await this.callApi(params, req, runtime), new BatchJobSubmitResponse({}));
  }

  async batchJobSubmit(request: BatchJobSubmitRequest): Promise<BatchJobSubmitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchJobSubmitWithOptions(request, runtime);
  }

  async sendMessageWithOptions(request: SendMessageRequest, runtime: $Util.RuntimeOptions): Promise<SendMessageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.channelType)) {
      body["ChannelType"] = request.channelType;
    }

    if (!Util.isUnset(request.receiveUid)) {
      body["ReceiveUid"] = request.receiveUid;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SendMessage",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendMessageResponse>(await this.callApi(params, req, runtime), new SendMessageResponse({}));
  }

  async sendMessage(request: SendMessageRequest): Promise<SendMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendMessageWithOptions(request, runtime);
  }

}
