// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetStorageHistoryRequest extends $tea.Model {
  clientToken?: string;
  instanceId: string;
  videoId: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      videoId: 'VideoId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      videoId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStorageHistoryResponse extends $tea.Model {
  requestId: string;
  data: GetStorageHistoryResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetStorageHistoryResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddStorageVideoTaskRequest extends $tea.Model {
  instanceId: string;
  videoUrl: string;
  videoId: string;
  videoTags?: string;
  callbackUrl?: string;
  description?: string;
  storageInfo?: number;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      videoUrl: 'VideoUrl',
      videoId: 'VideoId',
      videoTags: 'VideoTags',
      callbackUrl: 'CallbackUrl',
      description: 'Description',
      storageInfo: 'StorageInfo',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      videoUrl: 'string',
      videoId: 'string',
      videoTags: 'string',
      callbackUrl: 'string',
      description: 'string',
      storageInfo: 'number',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddStorageVideoTaskResponse extends $tea.Model {
  requestId: string;
  data: AddStorageVideoTaskResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AddStorageVideoTaskResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDeletionVideoTaskRequest extends $tea.Model {
  clientToken?: string;
  videoId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      videoId: 'VideoId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      videoId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDeletionVideoTaskResponse extends $tea.Model {
  requestId: string;
  data: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusRequest extends $tea.Model {
  clientToken?: string;
  taskId: string;
  instanceId: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      taskId: 'TaskId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      taskId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusResponse extends $tea.Model {
  requestId: string;
  data: number;
  taskInfo: GetTaskStatusResponseTaskInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      taskInfo: 'TaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'number',
      taskInfo: GetTaskStatusResponseTaskInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSearchVideoTaskRequest extends $tea.Model {
  clientToken?: string;
  videoUrl: string;
  videoId?: string;
  videoTags?: string;
  returnVideoNumber?: number;
  queryTags?: string;
  storageType?: number;
  callbackUrl?: string;
  replaceStorageThreshold?: number;
  instanceId: string;
  description?: string;
  searchType?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      videoUrl: 'VideoUrl',
      videoId: 'VideoId',
      videoTags: 'VideoTags',
      returnVideoNumber: 'ReturnVideoNumber',
      queryTags: 'QueryTags',
      storageType: 'StorageType',
      callbackUrl: 'CallbackUrl',
      replaceStorageThreshold: 'ReplaceStorageThreshold',
      instanceId: 'InstanceId',
      description: 'Description',
      searchType: 'SearchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      videoUrl: 'string',
      videoId: 'string',
      videoTags: 'string',
      returnVideoNumber: 'number',
      queryTags: 'string',
      storageType: 'number',
      callbackUrl: 'string',
      replaceStorageThreshold: 'number',
      instanceId: 'string',
      description: 'string',
      searchType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSearchVideoTaskResponse extends $tea.Model {
  requestId: string;
  data: AddSearchVideoTaskResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AddSearchVideoTaskResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStorageHistoryResponseDataList extends $tea.Model {
  videoId: string;
  description: string;
  storageType: number;
  storageInfo: number;
  modifiedTime: number;
  videoUrl: string;
  static names(): { [key: string]: string } {
    return {
      videoId: 'VideoId',
      description: 'Description',
      storageType: 'StorageType',
      storageInfo: 'StorageInfo',
      modifiedTime: 'ModifiedTime',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoId: 'string',
      description: 'string',
      storageType: 'number',
      storageInfo: 'number',
      modifiedTime: 'number',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStorageHistoryResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  count: number;
  list: GetStorageHistoryResponseDataList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      count: 'Count',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      count: 'number',
      list: { 'type': 'array', 'itemType': GetStorageHistoryResponseDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddStorageVideoTaskResponseData extends $tea.Model {
  taskId: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusResponseTaskInfo extends $tea.Model {
  analysisUseTime: number;
  duration: number;
  processResultOss: string;
  resolution: string;
  status: number;
  submitTime: number;
  finishTime: number;
  taskId: number;
  errorInfo: string;
  storageInfo: number;
  description: string;
  videoId: string;
  videoTags: string;
  videoUrl: string;
  queryTags: string;
  resourceType: string;
  replaceStorageThreshold: string;
  static names(): { [key: string]: string } {
    return {
      analysisUseTime: 'AnalysisUseTime',
      duration: 'Duration',
      processResultOss: 'ProcessResultOss',
      resolution: 'Resolution',
      status: 'Status',
      submitTime: 'SubmitTime',
      finishTime: 'FinishTime',
      taskId: 'TaskId',
      errorInfo: 'ErrorInfo',
      storageInfo: 'StorageInfo',
      description: 'Description',
      videoId: 'VideoId',
      videoTags: 'VideoTags',
      videoUrl: 'VideoUrl',
      queryTags: 'QueryTags',
      resourceType: 'ResourceType',
      replaceStorageThreshold: 'ReplaceStorageThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisUseTime: 'number',
      duration: 'number',
      processResultOss: 'string',
      resolution: 'string',
      status: 'number',
      submitTime: 'number',
      finishTime: 'number',
      taskId: 'number',
      errorInfo: 'string',
      storageInfo: 'number',
      description: 'string',
      videoId: 'string',
      videoTags: 'string',
      videoUrl: 'string',
      queryTags: 'string',
      resourceType: 'string',
      replaceStorageThreshold: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSearchVideoTaskResponseData extends $tea.Model {
  taskId: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends RPC {

  constructor(config: $RPC.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-beijing': "multisearch.cn-beijing.aliyuncs.com",
      'cn-hangzhou': "multisearch.cn-hangzhou.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("videosearch", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  async getStorageHistoryWithOptions(request: GetStorageHistoryRequest, runtime: $Util.RuntimeOptions): Promise<GetStorageHistoryResponse> {
    Util.validateModel(request);
    return $tea.cast<GetStorageHistoryResponse>(await this.doRequest("GetStorageHistory", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new GetStorageHistoryResponse({}));
  }

  async getStorageHistory(request: GetStorageHistoryRequest): Promise<GetStorageHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStorageHistoryWithOptions(request, runtime);
  }

  async addStorageVideoTaskWithOptions(request: AddStorageVideoTaskRequest, runtime: $Util.RuntimeOptions): Promise<AddStorageVideoTaskResponse> {
    Util.validateModel(request);
    return $tea.cast<AddStorageVideoTaskResponse>(await this.doRequest("AddStorageVideoTask", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new AddStorageVideoTaskResponse({}));
  }

  async addStorageVideoTask(request: AddStorageVideoTaskRequest): Promise<AddStorageVideoTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addStorageVideoTaskWithOptions(request, runtime);
  }

  async addDeletionVideoTaskWithOptions(request: AddDeletionVideoTaskRequest, runtime: $Util.RuntimeOptions): Promise<AddDeletionVideoTaskResponse> {
    Util.validateModel(request);
    return $tea.cast<AddDeletionVideoTaskResponse>(await this.doRequest("AddDeletionVideoTask", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new AddDeletionVideoTaskResponse({}));
  }

  async addDeletionVideoTask(request: AddDeletionVideoTaskRequest): Promise<AddDeletionVideoTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDeletionVideoTaskWithOptions(request, runtime);
  }

  async getTaskStatusWithOptions(request: GetTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetTaskStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<GetTaskStatusResponse>(await this.doRequest("GetTaskStatus", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new GetTaskStatusResponse({}));
  }

  async getTaskStatus(request: GetTaskStatusRequest): Promise<GetTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTaskStatusWithOptions(request, runtime);
  }

  async addSearchVideoTaskWithOptions(request: AddSearchVideoTaskRequest, runtime: $Util.RuntimeOptions): Promise<AddSearchVideoTaskResponse> {
    Util.validateModel(request);
    return $tea.cast<AddSearchVideoTaskResponse>(await this.doRequest("AddSearchVideoTask", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new AddSearchVideoTaskResponse({}));
  }

  async addSearchVideoTask(request: AddSearchVideoTaskRequest): Promise<AddSearchVideoTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSearchVideoTaskWithOptions(request, runtime);
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

}
