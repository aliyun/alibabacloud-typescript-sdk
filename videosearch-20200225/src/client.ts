// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPCUtil from '@alicloud/rpc-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class AddDeletionAudioTaskRequest extends $tea.Model {
  clientToken?: string;
  audioId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      audioId: 'AudioId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      audioId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDeletionAudioTaskResponse extends $tea.Model {
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

export class GetAudioTaskStatusRequest extends $tea.Model {
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

export class GetAudioTaskStatusResponse extends $tea.Model {
  requestId: string;
  data: number;
  taskInfo: GetAudioTaskStatusResponseTaskInfo;
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
      taskInfo: GetAudioTaskStatusResponseTaskInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelBatchTaskRequest extends $tea.Model {
  batchTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      batchTaskId: 'BatchTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchTaskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelBatchTaskResponse extends $tea.Model {
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

export class GetAudioStorageHistoryRequest extends $tea.Model {
  clientToken?: string;
  instanceId: string;
  audioId: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      audioId: 'AudioId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      audioId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAudioStorageHistoryResponse extends $tea.Model {
  requestId: string;
  data: GetAudioStorageHistoryResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetAudioStorageHistoryResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPriorityRequest extends $tea.Model {
  clientToken?: string;
  taskId: string;
  sort: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      taskId: 'TaskId',
      sort: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      taskId: 'string',
      sort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPriorityResponse extends $tea.Model {
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

export class GetAudioInstanceRequest extends $tea.Model {
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

export class GetAudioInstanceResponse extends $tea.Model {
  requestId: string;
  data: GetAudioInstanceResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetAudioInstanceResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskRequest extends $tea.Model {
  clientToken?: string;
  batchTaskId: number;
  instanceId: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      batchTaskId: 'BatchTaskId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      batchTaskId: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskResponse extends $tea.Model {
  requestId: string;
  batchTaskId: number;
  status: number;
  modifiedTime: number;
  processMessage: string;
  subTaskDetail: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      batchTaskId: 'BatchTaskId',
      status: 'Status',
      modifiedTime: 'ModifiedTime',
      processMessage: 'ProcessMessage',
      subTaskDetail: 'SubTaskDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      batchTaskId: 'number',
      status: 'number',
      modifiedTime: 'number',
      processMessage: 'string',
      subTaskDetail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSearchAudioTaskRequest extends $tea.Model {
  clientToken?: string;
  audioUrl?: string;
  returnAudioNumber?: number;
  queryTags?: string;
  callbackUrl?: string;
  instanceId: string;
  description?: string;
  contentSource?: number;
  audioFile?: string;
  sort?: number;
  needFeatureFile?: number;
  resourceType?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      audioUrl: 'AudioUrl',
      returnAudioNumber: 'ReturnAudioNumber',
      queryTags: 'QueryTags',
      callbackUrl: 'CallbackUrl',
      instanceId: 'InstanceId',
      description: 'Description',
      contentSource: 'ContentSource',
      audioFile: 'AudioFile',
      sort: 'Sort',
      needFeatureFile: 'NeedFeatureFile',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      audioUrl: 'string',
      returnAudioNumber: 'number',
      queryTags: 'string',
      callbackUrl: 'string',
      instanceId: 'string',
      description: 'string',
      contentSource: 'number',
      audioFile: 'string',
      sort: 'number',
      needFeatureFile: 'number',
      resourceType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSearchAudioTaskResponse extends $tea.Model {
  requestId: string;
  data: AddSearchAudioTaskResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AddSearchAudioTaskResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSearchAudioTaskAdvanceRequest extends $tea.Model {
  audioFileObject: Readable;
  clientToken?: string;
  audioUrl?: string;
  returnAudioNumber?: number;
  queryTags?: string;
  callbackUrl?: string;
  instanceId: string;
  description?: string;
  contentSource?: number;
  sort?: number;
  needFeatureFile?: number;
  resourceType?: number;
  static names(): { [key: string]: string } {
    return {
      audioFileObject: 'AudioFileObject',
      clientToken: 'ClientToken',
      audioUrl: 'AudioUrl',
      returnAudioNumber: 'ReturnAudioNumber',
      queryTags: 'QueryTags',
      callbackUrl: 'CallbackUrl',
      instanceId: 'InstanceId',
      description: 'Description',
      contentSource: 'ContentSource',
      sort: 'Sort',
      needFeatureFile: 'NeedFeatureFile',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioFileObject: 'Readable',
      clientToken: 'string',
      audioUrl: 'string',
      returnAudioNumber: 'number',
      queryTags: 'string',
      callbackUrl: 'string',
      instanceId: 'string',
      description: 'string',
      contentSource: 'number',
      sort: 'number',
      needFeatureFile: 'number',
      resourceType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddStorageAudioTaskRequest extends $tea.Model {
  instanceId: string;
  audioUrl?: string;
  audioId: string;
  audioTags?: string;
  callbackUrl?: string;
  description?: string;
  clientToken?: string;
  contentSource?: number;
  audioFile?: string;
  sort?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      audioUrl: 'AudioUrl',
      audioId: 'AudioId',
      audioTags: 'AudioTags',
      callbackUrl: 'CallbackUrl',
      description: 'Description',
      clientToken: 'ClientToken',
      contentSource: 'ContentSource',
      audioFile: 'AudioFile',
      sort: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      audioUrl: 'string',
      audioId: 'string',
      audioTags: 'string',
      callbackUrl: 'string',
      description: 'string',
      clientToken: 'string',
      contentSource: 'number',
      audioFile: 'string',
      sort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddStorageAudioTaskResponse extends $tea.Model {
  requestId: string;
  data: AddStorageAudioTaskResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AddStorageAudioTaskResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddStorageAudioTaskAdvanceRequest extends $tea.Model {
  audioFileObject: Readable;
  instanceId: string;
  audioUrl?: string;
  audioId: string;
  audioTags?: string;
  callbackUrl?: string;
  description?: string;
  clientToken?: string;
  contentSource?: number;
  sort?: number;
  static names(): { [key: string]: string } {
    return {
      audioFileObject: 'AudioFileObject',
      instanceId: 'InstanceId',
      audioUrl: 'AudioUrl',
      audioId: 'AudioId',
      audioTags: 'AudioTags',
      callbackUrl: 'CallbackUrl',
      description: 'Description',
      clientToken: 'ClientToken',
      contentSource: 'ContentSource',
      sort: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioFileObject: 'Readable',
      instanceId: 'string',
      audioUrl: 'string',
      audioId: 'string',
      audioTags: 'string',
      callbackUrl: 'string',
      description: 'string',
      clientToken: 'string',
      contentSource: 'number',
      sort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStorageAudioTasksRequest extends $tea.Model {
  clientToken?: string;
  taskId?: string;
  audioId?: string;
  pageNumber?: number;
  pageSize?: number;
  instanceId: string;
  statusList?: string;
  description?: string;
  storageInfoList?: string;
  sortList?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      taskId: 'TaskId',
      audioId: 'AudioId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      instanceId: 'InstanceId',
      statusList: 'StatusList',
      description: 'Description',
      storageInfoList: 'StorageInfoList',
      sortList: 'SortList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      taskId: 'string',
      audioId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      instanceId: 'string',
      statusList: 'string',
      description: 'string',
      storageInfoList: 'string',
      sortList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStorageAudioTasksResponse extends $tea.Model {
  requestId: string;
  data: ListStorageAudioTasksResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ListStorageAudioTasksResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchAudioTasksRequest extends $tea.Model {
  clientToken?: string;
  taskId?: string;
  pageNumber?: number;
  pageSize?: number;
  instanceId: string;
  statusList?: string;
  description?: string;
  sortList?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      taskId: 'TaskId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      instanceId: 'InstanceId',
      statusList: 'StatusList',
      description: 'Description',
      sortList: 'SortList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      taskId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      instanceId: 'string',
      statusList: 'string',
      description: 'string',
      sortList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchAudioTasksResponse extends $tea.Model {
  requestId: string;
  data: ListSearchAudioTasksResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ListSearchAudioTasksResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchTaskRequest extends $tea.Model {
  batchTaskType?: number;
  ossBucketName?: string;
  ossDataPath?: string;
  ossMetaFile?: string;
  fileUrl?: string;
  roleArn?: string;
  instanceId?: string;
  clientToken?: string;
  callbackUrl?: string;
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
      callbackUrl: 'CallbackUrl',
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
      callbackUrl: 'string',
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

export class CreateBatchTaskAdvanceRequest extends $tea.Model {
  fileUrlObject: Readable;
  batchTaskType?: number;
  ossBucketName?: string;
  ossDataPath?: string;
  ossMetaFile?: string;
  roleArn?: string;
  instanceId?: string;
  clientToken?: string;
  callbackUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrlObject: 'FileUrlObject',
      batchTaskType: 'BatchTaskType',
      ossBucketName: 'OssBucketName',
      ossDataPath: 'OssDataPath',
      ossMetaFile: 'OssMetaFile',
      roleArn: 'RoleArn',
      instanceId: 'InstanceId',
      clientToken: 'ClientToken',
      callbackUrl: 'CallbackUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrlObject: 'Readable',
      batchTaskType: 'number',
      ossBucketName: 'string',
      ossDataPath: 'string',
      ossMetaFile: 'string',
      roleArn: 'string',
      instanceId: 'string',
      clientToken: 'string',
      callbackUrl: 'string',
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
  instanceType?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceName: 'InstanceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tags: 'Tags',
      status: 'Status',
      instanceType: 'InstanceType',
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
      instanceType: 'number',
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
  sortList?: string;
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
      sortList: 'SortList',
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
      sortList: 'string',
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
  pageNumber?: number;
  pageSize?: number;
  instanceId: string;
  statusList?: string;
  searchTypeList?: string;
  description?: string;
  sortList?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      taskId: 'TaskId',
      videoName: 'VideoName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      instanceId: 'InstanceId',
      statusList: 'StatusList',
      searchTypeList: 'SearchTypeList',
      description: 'Description',
      sortList: 'SortList',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      taskId: 'string',
      videoName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      instanceId: 'string',
      statusList: 'string',
      searchTypeList: 'string',
      description: 'string',
      sortList: 'string',
      videoId: 'string',
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
  videoUrl?: string;
  videoId: string;
  videoTags?: string;
  callbackUrl?: string;
  description?: string;
  storageInfo?: number;
  clientToken?: string;
  sort?: number;
  videoFile?: string;
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
      sort: 'Sort',
      videoFile: 'VideoFile',
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
      sort: 'number',
      videoFile: 'string',
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

export class AddStorageVideoTaskAdvanceRequest extends $tea.Model {
  videoFileObject: Readable;
  instanceId: string;
  videoUrl?: string;
  videoId: string;
  videoTags?: string;
  callbackUrl?: string;
  description?: string;
  storageInfo?: number;
  clientToken?: string;
  sort?: number;
  static names(): { [key: string]: string } {
    return {
      videoFileObject: 'VideoFileObject',
      instanceId: 'InstanceId',
      videoUrl: 'VideoUrl',
      videoId: 'VideoId',
      videoTags: 'VideoTags',
      callbackUrl: 'CallbackUrl',
      description: 'Description',
      storageInfo: 'StorageInfo',
      clientToken: 'ClientToken',
      sort: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoFileObject: 'Readable',
      instanceId: 'string',
      videoUrl: 'string',
      videoId: 'string',
      videoTags: 'string',
      callbackUrl: 'string',
      description: 'string',
      storageInfo: 'number',
      clientToken: 'string',
      sort: 'number',
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
  videoUrl?: string;
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
  videoFile?: string;
  sort?: number;
  needFeatureFile?: number;
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
      videoFile: 'VideoFile',
      sort: 'Sort',
      needFeatureFile: 'NeedFeatureFile',
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
      videoFile: 'string',
      sort: 'number',
      needFeatureFile: 'number',
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

export class AddSearchVideoTaskAdvanceRequest extends $tea.Model {
  videoFileObject: Readable;
  clientToken?: string;
  videoUrl?: string;
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
  sort?: number;
  needFeatureFile?: number;
  static names(): { [key: string]: string } {
    return {
      videoFileObject: 'VideoFileObject',
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
      sort: 'Sort',
      needFeatureFile: 'NeedFeatureFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoFileObject: 'Readable',
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
      sort: 'number',
      needFeatureFile: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAudioTaskStatusResponseTaskInfo extends $tea.Model {
  analysisUseTime: number;
  duration: number;
  processResultOss: string;
  status: number;
  submitTime: number;
  finishTime: number;
  taskId: number;
  errorInfo: string;
  storageInfo: number;
  description: string;
  audioId: string;
  audioTags: string;
  audioUrl: string;
  queryTags: string;
  resourceType: string;
  replaceStorageThreshold: string;
  static names(): { [key: string]: string } {
    return {
      analysisUseTime: 'AnalysisUseTime',
      duration: 'Duration',
      processResultOss: 'ProcessResultOss',
      status: 'Status',
      submitTime: 'SubmitTime',
      finishTime: 'FinishTime',
      taskId: 'TaskId',
      errorInfo: 'ErrorInfo',
      storageInfo: 'StorageInfo',
      description: 'Description',
      audioId: 'AudioId',
      audioTags: 'AudioTags',
      audioUrl: 'AudioUrl',
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
      status: 'number',
      submitTime: 'number',
      finishTime: 'number',
      taskId: 'number',
      errorInfo: 'string',
      storageInfo: 'number',
      description: 'string',
      audioId: 'string',
      audioTags: 'string',
      audioUrl: 'string',
      queryTags: 'string',
      resourceType: 'string',
      replaceStorageThreshold: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAudioStorageHistoryResponseDataList extends $tea.Model {
  audioId: string;
  description: string;
  storageType: number;
  storageInfo: number;
  modifiedTime: number;
  audioUrl: string;
  static names(): { [key: string]: string } {
    return {
      audioId: 'AudioId',
      description: 'Description',
      storageType: 'StorageType',
      storageInfo: 'StorageInfo',
      modifiedTime: 'ModifiedTime',
      audioUrl: 'AudioUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioId: 'string',
      description: 'string',
      storageType: 'number',
      storageInfo: 'number',
      modifiedTime: 'number',
      audioUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAudioStorageHistoryResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  count: number;
  list: GetAudioStorageHistoryResponseDataList[];
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
      list: { 'type': 'array', 'itemType': GetAudioStorageHistoryResponseDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAudioInstanceResponseData extends $tea.Model {
  instanceId: string;
  instanceName: string;
  createTime: number;
  regionId: string;
  instanceStatus: number;
  audioNumber: number;
  expireTime: number;
  concurrencyNumber: number;
  maxAudioCapacity: string;
  currentAudioCapacity: string;
  audioInfoUpdateTime: number;
  bundlingType: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      createTime: 'CreateTime',
      regionId: 'RegionId',
      instanceStatus: 'InstanceStatus',
      audioNumber: 'AudioNumber',
      expireTime: 'ExpireTime',
      concurrencyNumber: 'ConcurrencyNumber',
      maxAudioCapacity: 'MaxAudioCapacity',
      currentAudioCapacity: 'CurrentAudioCapacity',
      audioInfoUpdateTime: 'AudioInfoUpdateTime',
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
      audioNumber: 'number',
      expireTime: 'number',
      concurrencyNumber: 'number',
      maxAudioCapacity: 'string',
      currentAudioCapacity: 'string',
      audioInfoUpdateTime: 'number',
      bundlingType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSearchAudioTaskResponseData extends $tea.Model {
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

export class AddStorageAudioTaskResponseData extends $tea.Model {
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

export class ListStorageAudioTasksResponseDataTaskList extends $tea.Model {
  taskId: number;
  audioId: string;
  processTime: number;
  storageInfo: number;
  updateTime: number;
  status: string;
  errorDetail: string;
  remoteTaskId: string;
  description: string;
  audioUrl: string;
  sort: number;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      audioId: 'AudioId',
      processTime: 'ProcessTime',
      storageInfo: 'StorageInfo',
      updateTime: 'UpdateTime',
      status: 'Status',
      errorDetail: 'ErrorDetail',
      remoteTaskId: 'RemoteTaskId',
      description: 'Description',
      audioUrl: 'AudioUrl',
      sort: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
      audioId: 'string',
      processTime: 'number',
      storageInfo: 'number',
      updateTime: 'number',
      status: 'string',
      errorDetail: 'string',
      remoteTaskId: 'string',
      description: 'string',
      audioUrl: 'string',
      sort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStorageAudioTasksResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  count: number;
  taskList: ListStorageAudioTasksResponseDataTaskList[];
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
      taskList: { 'type': 'array', 'itemType': ListStorageAudioTasksResponseDataTaskList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchAudioTasksResponseDataTaskList extends $tea.Model {
  taskId: string;
  audioId: string;
  processTime: number;
  status: number;
  modifiedTime: number;
  processResultUrl: string;
  storageInfo: number;
  audioUrl: string;
  errorDetail: string;
  remoteTaskId: string;
  audioTags: string;
  description: string;
  sort: number;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      audioId: 'AudioId',
      processTime: 'ProcessTime',
      status: 'Status',
      modifiedTime: 'ModifiedTime',
      processResultUrl: 'ProcessResultUrl',
      storageInfo: 'StorageInfo',
      audioUrl: 'AudioUrl',
      errorDetail: 'ErrorDetail',
      remoteTaskId: 'RemoteTaskId',
      audioTags: 'AudioTags',
      description: 'Description',
      sort: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      audioId: 'string',
      processTime: 'number',
      status: 'number',
      modifiedTime: 'number',
      processResultUrl: 'string',
      storageInfo: 'number',
      audioUrl: 'string',
      errorDetail: 'string',
      remoteTaskId: 'string',
      audioTags: 'string',
      description: 'string',
      sort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchAudioTasksResponseData extends $tea.Model {
  count: number;
  pageNumber: number;
  pageSize: number;
  taskList: ListSearchAudioTasksResponseDataTaskList[];
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
      taskList: { 'type': 'array', 'itemType': ListSearchAudioTasksResponseDataTaskList },
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
  taskId: string;
  status: number;
  taskType: number;
  regionId: string;
  bucketName: string;
  dataPath: string;
  metaFile: string;
  modifiedTime: number;
  processMessage: string;
  subTaskDetail: string;
  arn: string;
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
      subTaskDetail: 'SubTaskDetail',
      arn: 'Arn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      status: 'number',
      taskType: 'number',
      regionId: 'string',
      bucketName: 'string',
      dataPath: 'string',
      metaFile: 'string',
      modifiedTime: 'number',
      processMessage: 'string',
      subTaskDetail: 'string',
      arn: 'string',
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
  createTime: string;
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
      createTime: 'string',
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
  sort: number;
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
      sort: 'Sort',
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
      sort: 'number',
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
  sort: number;
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
      sort: 'Sort',
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
      sort: 'number',
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
  storageType: number;
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
      storageType: 'StorageType',
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
      storageType: 'number',
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


  async addDeletionAudioTask(request: AddDeletionAudioTaskRequest, runtime: $Util.RuntimeOptions): Promise<AddDeletionAudioTaskResponse> {
    Util.validateModel(request);
    return $tea.cast<AddDeletionAudioTaskResponse>(await this.doRequest("AddDeletionAudioTask", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new AddDeletionAudioTaskResponse({}));
  }

  async addDeletionAudioTaskSimply(request: AddDeletionAudioTaskRequest): Promise<AddDeletionAudioTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDeletionAudioTask(request, runtime);
  }

  async getAudioTaskStatus(request: GetAudioTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetAudioTaskStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<GetAudioTaskStatusResponse>(await this.doRequest("GetAudioTaskStatus", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new GetAudioTaskStatusResponse({}));
  }

  async getAudioTaskStatusSimply(request: GetAudioTaskStatusRequest): Promise<GetAudioTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAudioTaskStatus(request, runtime);
  }

  async cancelBatchTask(request: CancelBatchTaskRequest, runtime: $Util.RuntimeOptions): Promise<CancelBatchTaskResponse> {
    Util.validateModel(request);
    return $tea.cast<CancelBatchTaskResponse>(await this.doRequest("CancelBatchTask", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new CancelBatchTaskResponse({}));
  }

  async cancelBatchTaskSimply(request: CancelBatchTaskRequest): Promise<CancelBatchTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelBatchTask(request, runtime);
  }

  async getAudioStorageHistory(request: GetAudioStorageHistoryRequest, runtime: $Util.RuntimeOptions): Promise<GetAudioStorageHistoryResponse> {
    Util.validateModel(request);
    return $tea.cast<GetAudioStorageHistoryResponse>(await this.doRequest("GetAudioStorageHistory", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new GetAudioStorageHistoryResponse({}));
  }

  async getAudioStorageHistorySimply(request: GetAudioStorageHistoryRequest): Promise<GetAudioStorageHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAudioStorageHistory(request, runtime);
  }

  async modifyPriority(request: ModifyPriorityRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPriorityResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyPriorityResponse>(await this.doRequest("ModifyPriority", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new ModifyPriorityResponse({}));
  }

  async modifyPrioritySimply(request: ModifyPriorityRequest): Promise<ModifyPriorityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPriority(request, runtime);
  }

  async getAudioInstance(request: GetAudioInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetAudioInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<GetAudioInstanceResponse>(await this.doRequest("GetAudioInstance", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new GetAudioInstanceResponse({}));
  }

  async getAudioInstanceSimply(request: GetAudioInstanceRequest): Promise<GetAudioInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAudioInstance(request, runtime);
  }

  async getBatchTask(request: GetBatchTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetBatchTaskResponse> {
    Util.validateModel(request);
    return $tea.cast<GetBatchTaskResponse>(await this.doRequest("GetBatchTask", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new GetBatchTaskResponse({}));
  }

  async getBatchTaskSimply(request: GetBatchTaskRequest): Promise<GetBatchTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBatchTask(request, runtime);
  }

  async addSearchAudioTask(request: AddSearchAudioTaskRequest, runtime: $Util.RuntimeOptions): Promise<AddSearchAudioTaskResponse> {
    Util.validateModel(request);
    return $tea.cast<AddSearchAudioTaskResponse>(await this.doRequest("AddSearchAudioTask", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new AddSearchAudioTaskResponse({}));
  }

  async addSearchAudioTaskSimply(request: AddSearchAudioTaskRequest): Promise<AddSearchAudioTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSearchAudioTask(request, runtime);
  }

  async addSearchAudioTaskAdvance(request: AddSearchAudioTaskAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<AddSearchAudioTaskResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "videosearch",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    RPCUtil.convert(runtime, ossRuntime);
    let addSearchAudioTaskReq = new AddSearchAudioTaskRequest({ });
    RPCUtil.convert(request, addSearchAudioTaskReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = RPCUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.audioFileObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    addSearchAudioTaskReq.audioFile = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let addSearchAudioTaskResp = await this.addSearchAudioTask(addSearchAudioTaskReq, runtime);
    return addSearchAudioTaskResp;
  }

  async addStorageAudioTask(request: AddStorageAudioTaskRequest, runtime: $Util.RuntimeOptions): Promise<AddStorageAudioTaskResponse> {
    Util.validateModel(request);
    return $tea.cast<AddStorageAudioTaskResponse>(await this.doRequest("AddStorageAudioTask", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new AddStorageAudioTaskResponse({}));
  }

  async addStorageAudioTaskSimply(request: AddStorageAudioTaskRequest): Promise<AddStorageAudioTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addStorageAudioTask(request, runtime);
  }

  async addStorageAudioTaskAdvance(request: AddStorageAudioTaskAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<AddStorageAudioTaskResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "videosearch",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    RPCUtil.convert(runtime, ossRuntime);
    let addStorageAudioTaskReq = new AddStorageAudioTaskRequest({ });
    RPCUtil.convert(request, addStorageAudioTaskReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = RPCUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.audioFileObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    addStorageAudioTaskReq.audioFile = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let addStorageAudioTaskResp = await this.addStorageAudioTask(addStorageAudioTaskReq, runtime);
    return addStorageAudioTaskResp;
  }

  async listStorageAudioTasks(request: ListStorageAudioTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListStorageAudioTasksResponse> {
    Util.validateModel(request);
    return $tea.cast<ListStorageAudioTasksResponse>(await this.doRequest("ListStorageAudioTasks", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new ListStorageAudioTasksResponse({}));
  }

  async listStorageAudioTasksSimply(request: ListStorageAudioTasksRequest): Promise<ListStorageAudioTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStorageAudioTasks(request, runtime);
  }

  async listSearchAudioTasks(request: ListSearchAudioTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListSearchAudioTasksResponse> {
    Util.validateModel(request);
    return $tea.cast<ListSearchAudioTasksResponse>(await this.doRequest("ListSearchAudioTasks", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new ListSearchAudioTasksResponse({}));
  }

  async listSearchAudioTasksSimply(request: ListSearchAudioTasksRequest): Promise<ListSearchAudioTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSearchAudioTasks(request, runtime);
  }

  async createBatchTask(request: CreateBatchTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateBatchTaskResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateBatchTaskResponse>(await this.doRequest("CreateBatchTask", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new CreateBatchTaskResponse({}));
  }

  async createBatchTaskSimply(request: CreateBatchTaskRequest): Promise<CreateBatchTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBatchTask(request, runtime);
  }

  async createBatchTaskAdvance(request: CreateBatchTaskAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateBatchTaskResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "videosearch",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    RPCUtil.convert(runtime, ossRuntime);
    let createBatchTaskReq = new CreateBatchTaskRequest({ });
    RPCUtil.convert(request, createBatchTaskReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = RPCUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.fileUrlObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    createBatchTaskReq.fileUrl = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let createBatchTaskResp = await this.createBatchTask(createBatchTaskReq, runtime);
    return createBatchTaskResp;
  }

  async getStorageHistory(request: GetStorageHistoryRequest, runtime: $Util.RuntimeOptions): Promise<GetStorageHistoryResponse> {
    Util.validateModel(request);
    return $tea.cast<GetStorageHistoryResponse>(await this.doRequest("GetStorageHistory", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new GetStorageHistoryResponse({}));
  }

  async getStorageHistorySimply(request: GetStorageHistoryRequest): Promise<GetStorageHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStorageHistory(request, runtime);
  }

  async listBatchTask(request: ListBatchTaskRequest, runtime: $Util.RuntimeOptions): Promise<ListBatchTaskResponse> {
    Util.validateModel(request);
    return $tea.cast<ListBatchTaskResponse>(await this.doRequest("ListBatchTask", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new ListBatchTaskResponse({}));
  }

  async listBatchTaskSimply(request: ListBatchTaskRequest): Promise<ListBatchTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBatchTask(request, runtime);
  }

  async listInstances(request: ListInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListInstancesResponse>(await this.doRequest("ListInstances", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new ListInstancesResponse({}));
  }

  async listInstancesSimply(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstances(request, runtime);
  }

  async listStorageVideoTasks(request: ListStorageVideoTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListStorageVideoTasksResponse> {
    Util.validateModel(request);
    return $tea.cast<ListStorageVideoTasksResponse>(await this.doRequest("ListStorageVideoTasks", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new ListStorageVideoTasksResponse({}));
  }

  async listStorageVideoTasksSimply(request: ListStorageVideoTasksRequest): Promise<ListStorageVideoTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStorageVideoTasks(request, runtime);
  }

  async listSearchVideoTasks(request: ListSearchVideoTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListSearchVideoTasksResponse> {
    Util.validateModel(request);
    return $tea.cast<ListSearchVideoTasksResponse>(await this.doRequest("ListSearchVideoTasks", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new ListSearchVideoTasksResponse({}));
  }

  async listSearchVideoTasksSimply(request: ListSearchVideoTasksRequest): Promise<ListSearchVideoTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSearchVideoTasks(request, runtime);
  }

  async addStorageVideoTask(request: AddStorageVideoTaskRequest, runtime: $Util.RuntimeOptions): Promise<AddStorageVideoTaskResponse> {
    Util.validateModel(request);
    return $tea.cast<AddStorageVideoTaskResponse>(await this.doRequest("AddStorageVideoTask", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new AddStorageVideoTaskResponse({}));
  }

  async addStorageVideoTaskSimply(request: AddStorageVideoTaskRequest): Promise<AddStorageVideoTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addStorageVideoTask(request, runtime);
  }

  async addStorageVideoTaskAdvance(request: AddStorageVideoTaskAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<AddStorageVideoTaskResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "videosearch",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    RPCUtil.convert(runtime, ossRuntime);
    let addStorageVideoTaskReq = new AddStorageVideoTaskRequest({ });
    RPCUtil.convert(request, addStorageVideoTaskReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = RPCUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.videoFileObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    addStorageVideoTaskReq.videoFile = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let addStorageVideoTaskResp = await this.addStorageVideoTask(addStorageVideoTaskReq, runtime);
    return addStorageVideoTaskResp;
  }

  async getInstance(request: GetInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<GetInstanceResponse>(await this.doRequest("GetInstance", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new GetInstanceResponse({}));
  }

  async getInstanceSimply(request: GetInstanceRequest): Promise<GetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstance(request, runtime);
  }

  async addDeletionVideoTask(request: AddDeletionVideoTaskRequest, runtime: $Util.RuntimeOptions): Promise<AddDeletionVideoTaskResponse> {
    Util.validateModel(request);
    return $tea.cast<AddDeletionVideoTaskResponse>(await this.doRequest("AddDeletionVideoTask", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new AddDeletionVideoTaskResponse({}));
  }

  async addDeletionVideoTaskSimply(request: AddDeletionVideoTaskRequest): Promise<AddDeletionVideoTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDeletionVideoTask(request, runtime);
  }

  async getTaskStatus(request: GetTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetTaskStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<GetTaskStatusResponse>(await this.doRequest("GetTaskStatus", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new GetTaskStatusResponse({}));
  }

  async getTaskStatusSimply(request: GetTaskStatusRequest): Promise<GetTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTaskStatus(request, runtime);
  }

  async addSearchVideoTask(request: AddSearchVideoTaskRequest, runtime: $Util.RuntimeOptions): Promise<AddSearchVideoTaskResponse> {
    Util.validateModel(request);
    return $tea.cast<AddSearchVideoTaskResponse>(await this.doRequest("AddSearchVideoTask", "HTTPS", "POST", "2020-02-25", "AK", null, $tea.toMap(request), runtime), new AddSearchVideoTaskResponse({}));
  }

  async addSearchVideoTaskSimply(request: AddSearchVideoTaskRequest): Promise<AddSearchVideoTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSearchVideoTask(request, runtime);
  }

  async addSearchVideoTaskAdvance(request: AddSearchVideoTaskAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<AddSearchVideoTaskResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    let authConfig = new $RPC.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "videosearch",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    RPCUtil.convert(runtime, ossRuntime);
    let addSearchVideoTaskReq = new AddSearchVideoTaskRequest({ });
    RPCUtil.convert(request, addSearchVideoTaskReq);
    authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
    ossConfig.accessKeyId = authResponse.accessKeyId;
    ossConfig.endpoint = RPCUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
    ossClient = new OSS(ossConfig);
    fileObj = new $FileForm.FileField({
      filename: authResponse.objectKey,
      content: request.videoFileObject,
      contentType: "",
    });
    ossHeader = new $OSS.PostObjectRequestHeader({
      accessKeyId: authResponse.accessKeyId,
      policy: authResponse.encodedPolicy,
      signature: authResponse.signature,
      key: authResponse.objectKey,
      file: fileObj,
      successActionStatus: "201",
    });
    uploadRequest = new $OSS.PostObjectRequest({
      bucketName: authResponse.bucket,
      header: ossHeader,
    });
    await ossClient.postObject(uploadRequest, ossRuntime);
    addSearchVideoTaskReq.videoFile = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    let addSearchVideoTaskResp = await this.addSearchVideoTask(addSearchVideoTaskReq, runtime);
    return addSearchVideoTaskResp;
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
