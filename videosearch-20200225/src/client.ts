// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateBatchTaskRequest extends $tea.Model {
  batchTaskType?: number;
  ossBucketName?: string;
  ossDataPath?: string;
  ossMetaFile?: string;
  fileUrl?: string;
  roleArn?: string;
  instanceId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      batchTaskType: 'BatchTaskType',
      ossBucketName: 'OssBucketName',
      ossDataPath: 'OssDataPath',
      ossMetaFile: 'OssMetaFile',
      fileUrl: 'FileUrl',
      roleArn: 'RoleArn',
      instanceId: 'InstanceId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchTaskType: 'number',
      ossBucketName: 'string',
      ossDataPath: 'string',
      ossMetaFile: 'string',
      fileUrl: 'string',
      roleArn: 'string',
      instanceId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchTaskResponse extends $tea.Model {
  requestId: string;
  taskId: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListBatchTaskRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  clientToken?: string;
  batchTaskType?: string;
  status?: string;
  instanceId?: string;
  bucketName?: string;
  dataPath?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      clientToken: 'ClientToken',
      batchTaskType: 'BatchTaskType',
      status: 'Status',
      instanceId: 'InstanceId',
      bucketName: 'BucketName',
      dataPath: 'DataPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      clientToken: 'string',
      batchTaskType: 'string',
      status: 'string',
      instanceId: 'string',
      bucketName: 'string',
      dataPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBatchTaskResponse extends $tea.Model {
  requestId: string;
  data: ListBatchTaskResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ListBatchTaskResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $tea.Model {
  clientToken?: string;
  instanceName?: string;
  pageNumber?: number;
  pageSize?: number;
  tags?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceName: 'InstanceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tags: 'Tags',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      tags: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponse extends $tea.Model {
  requestId: string;
  data: ListInstancesResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ListInstancesResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStorageVideoTasksRequest extends $tea.Model {
  clientToken?: string;
  taskId?: string;
  videoName?: string;
  videoId?: string;
  pageNumber?: number;
  pageSize?: number;
  instanceId: string;
  statusList?: string;
  description?: string;
  storageInfoList?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      taskId: 'TaskId',
      videoName: 'VideoName',
      videoId: 'VideoId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      instanceId: 'InstanceId',
      statusList: 'StatusList',
      description: 'Description',
      storageInfoList: 'StorageInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      taskId: 'string',
      videoName: 'string',
      videoId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      instanceId: 'string',
      statusList: 'string',
      description: 'string',
      storageInfoList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStorageVideoTasksResponse extends $tea.Model {
  requestId: string;
  data: ListStorageVideoTasksResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ListStorageVideoTasksResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchVideoTasksRequest extends $tea.Model {
  clientToken?: string;
  taskId?: string;
  videoName?: string;
  videoId?: string;
  pageNumber?: number;
  pageSize?: number;
  instanceId: string;
  statusList?: string;
  searchTypeList?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      taskId: 'TaskId',
      videoName: 'VideoName',
      videoId: 'VideoId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      instanceId: 'InstanceId',
      statusList: 'StatusList',
      searchTypeList: 'SearchTypeList',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      taskId: 'string',
      videoName: 'string',
      videoId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      instanceId: 'string',
      statusList: 'string',
      searchTypeList: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchVideoTasksResponse extends $tea.Model {
  requestId: string;
  data: ListSearchVideoTasksResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ListSearchVideoTasksResponseData,
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

export class GetInstanceRequest extends $tea.Model {
  clientToken?: string;
  instanceId: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponse extends $tea.Model {
  requestId: string;
  data: GetInstanceResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetInstanceResponseData,
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

export class ListBatchTaskResponseDataList extends $tea.Model {
  taskId: number;
  status: number;
  taskType: number;
  regionId: string;
  bucketName: string;
  dataPath: string;
  metaFile: string;
  modifiedTime: number;
  processMessage: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      status: 'Status',
      taskType: 'TaskType',
      regionId: 'RegionId',
      bucketName: 'BucketName',
      dataPath: 'DataPath',
      metaFile: 'MetaFile',
      modifiedTime: 'ModifiedTime',
      processMessage: 'ProcessMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
      status: 'number',
      taskType: 'number',
      regionId: 'string',
      bucketName: 'string',
      dataPath: 'string',
      metaFile: 'string',
      modifiedTime: 'number',
      processMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBatchTaskResponseData extends $tea.Model {
  count: number;
  pageNumber: number;
  pageSize: number;
  list: ListBatchTaskResponseDataList[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      list: { 'type': 'array', 'itemType': ListBatchTaskResponseDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseDataListTags extends $tea.Model {
  key: string;
  value: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseDataList extends $tea.Model {
  instanceId: string;
  instanceName: string;
  instanceStatus: number;
  createTime: number;
  expiredTime: string;
  tags: ListInstancesResponseDataListTags[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      createTime: 'CreateTime',
      expiredTime: 'ExpiredTime',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'number',
      createTime: 'number',
      expiredTime: 'string',
      tags: { 'type': 'array', 'itemType': ListInstancesResponseDataListTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  count: number;
  list: ListInstancesResponseDataList[];
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
      list: { 'type': 'array', 'itemType': ListInstancesResponseDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStorageVideoTasksResponseDataTaskList extends $tea.Model {
  taskId: number;
  videoId: string;
  videoName: string;
  processTime: number;
  storageInfo: number;
  modifiedTime: number;
  status: string;
  errorDetail: string;
  remoteTaskId: string;
  description: string;
  videoUrl: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      videoId: 'VideoId',
      videoName: 'VideoName',
      processTime: 'ProcessTime',
      storageInfo: 'StorageInfo',
      modifiedTime: 'ModifiedTime',
      status: 'Status',
      errorDetail: 'ErrorDetail',
      remoteTaskId: 'RemoteTaskId',
      description: 'Description',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
      videoId: 'string',
      videoName: 'string',
      processTime: 'number',
      storageInfo: 'number',
      modifiedTime: 'number',
      status: 'string',
      errorDetail: 'string',
      remoteTaskId: 'string',
      description: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStorageVideoTasksResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  count: number;
  taskList: ListStorageVideoTasksResponseDataTaskList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      count: 'Count',
      taskList: 'TaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      count: 'number',
      taskList: { 'type': 'array', 'itemType': ListStorageVideoTasksResponseDataTaskList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchVideoTasksResponseDataTaskList extends $tea.Model {
  taskId: string;
  videoId: string;
  videoName: string;
  processTime: number;
  status: number;
  modifiedTime: number;
  processResultUrl: string;
  storageType: number;
  storageInfo: number;
  videoUrl: string;
  errorDetail: string;
  replaceStorageThreshold: string;
  queryTags: string;
  remoteTaskId: string;
  videoTags: string;
  searchType: number;
  description: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      videoId: 'VideoId',
      videoName: 'VideoName',
      processTime: 'ProcessTime',
      status: 'Status',
      modifiedTime: 'ModifiedTime',
      processResultUrl: 'ProcessResultUrl',
      storageType: 'StorageType',
      storageInfo: 'StorageInfo',
      videoUrl: 'VideoUrl',
      errorDetail: 'ErrorDetail',
      replaceStorageThreshold: 'ReplaceStorageThreshold',
      queryTags: 'QueryTags',
      remoteTaskId: 'RemoteTaskId',
      videoTags: 'VideoTags',
      searchType: 'SearchType',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      videoId: 'string',
      videoName: 'string',
      processTime: 'number',
      status: 'number',
      modifiedTime: 'number',
      processResultUrl: 'string',
      storageType: 'number',
      storageInfo: 'number',
      videoUrl: 'string',
      errorDetail: 'string',
      replaceStorageThreshold: 'string',
      queryTags: 'string',
      remoteTaskId: 'string',
      videoTags: 'string',
      searchType: 'number',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchVideoTasksResponseData extends $tea.Model {
  count: number;
  pageNumber: number;
  pageSize: number;
  taskList: ListSearchVideoTasksResponseDataTaskList[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      taskList: 'TaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      taskList: { 'type': 'array', 'itemType': ListSearchVideoTasksResponseDataTaskList },
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

export class GetInstanceResponseData extends $tea.Model {
  instanceId: string;
  instanceName: string;
  createTime: number;
  regionId: string;
  instanceStatus: number;
  videoNumber: number;
  expireTime: number;
  concurrencyNumber: number;
  maxVideoCapacity: string;
  currentVideoCapacity: string;
  videoInfoUpdateTime: number;
  bundlingType: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      createTime: 'CreateTime',
      regionId: 'RegionId',
      instanceStatus: 'InstanceStatus',
      videoNumber: 'VideoNumber',
      expireTime: 'ExpireTime',
      concurrencyNumber: 'ConcurrencyNumber',
      maxVideoCapacity: 'MaxVideoCapacity',
      currentVideoCapacity: 'CurrentVideoCapacity',
      videoInfoUpdateTime: 'VideoInfoUpdateTime',
      bundlingType: 'BundlingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      createTime: 'number',
      regionId: 'string',
      instanceStatus: 'number',
      videoNumber: 'number',
      expireTime: 'number',
      concurrencyNumber: 'number',
      maxVideoCapacity: 'string',
      currentVideoCapacity: 'string',
      videoInfoUpdateTime: 'number',
      bundlingType: 'string',
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


  async createBatchTaskWithOptions(request: CreateBatchTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateBatchTaskResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateBatchTaskResponse>(await this.doRequest("CreateBatchTask", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new CreateBatchTaskResponse({}));
  }

  async createBatchTask(request: CreateBatchTaskRequest): Promise<CreateBatchTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBatchTaskWithOptions(request, runtime);
  }

  async getStorageHistoryWithOptions(request: GetStorageHistoryRequest, runtime: $Util.RuntimeOptions): Promise<GetStorageHistoryResponse> {
    Util.validateModel(request);
    return $tea.cast<GetStorageHistoryResponse>(await this.doRequest("GetStorageHistory", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new GetStorageHistoryResponse({}));
  }

  async getStorageHistory(request: GetStorageHistoryRequest): Promise<GetStorageHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStorageHistoryWithOptions(request, runtime);
  }

  async listBatchTaskWithOptions(request: ListBatchTaskRequest, runtime: $Util.RuntimeOptions): Promise<ListBatchTaskResponse> {
    Util.validateModel(request);
    return $tea.cast<ListBatchTaskResponse>(await this.doRequest("ListBatchTask", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new ListBatchTaskResponse({}));
  }

  async listBatchTask(request: ListBatchTaskRequest): Promise<ListBatchTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBatchTaskWithOptions(request, runtime);
  }

  async listInstancesWithOptions(request: ListInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListInstancesResponse>(await this.doRequest("ListInstances", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new ListInstancesResponse({}));
  }

  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  async listStorageVideoTasksWithOptions(request: ListStorageVideoTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListStorageVideoTasksResponse> {
    Util.validateModel(request);
    return $tea.cast<ListStorageVideoTasksResponse>(await this.doRequest("ListStorageVideoTasks", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new ListStorageVideoTasksResponse({}));
  }

  async listStorageVideoTasks(request: ListStorageVideoTasksRequest): Promise<ListStorageVideoTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStorageVideoTasksWithOptions(request, runtime);
  }

  async listSearchVideoTasksWithOptions(request: ListSearchVideoTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListSearchVideoTasksResponse> {
    Util.validateModel(request);
    return $tea.cast<ListSearchVideoTasksResponse>(await this.doRequest("ListSearchVideoTasks", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new ListSearchVideoTasksResponse({}));
  }

  async listSearchVideoTasks(request: ListSearchVideoTasksRequest): Promise<ListSearchVideoTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSearchVideoTasksWithOptions(request, runtime);
  }

  async addStorageVideoTaskWithOptions(request: AddStorageVideoTaskRequest, runtime: $Util.RuntimeOptions): Promise<AddStorageVideoTaskResponse> {
    Util.validateModel(request);
    return $tea.cast<AddStorageVideoTaskResponse>(await this.doRequest("AddStorageVideoTask", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new AddStorageVideoTaskResponse({}));
  }

  async addStorageVideoTask(request: AddStorageVideoTaskRequest): Promise<AddStorageVideoTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addStorageVideoTaskWithOptions(request, runtime);
  }

  async getInstanceWithOptions(request: GetInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<GetInstanceResponse>(await this.doRequest("GetInstance", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new GetInstanceResponse({}));
  }

  async getInstance(request: GetInstanceRequest): Promise<GetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceWithOptions(request, runtime);
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
