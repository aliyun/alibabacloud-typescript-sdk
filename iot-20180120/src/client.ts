// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPCUtil from '@alicloud/rpc-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ListAnalyticsDataRequest extends $tea.Model {
  iotInstanceId: string;
  isoId?: string;
  apiPath: string;
  pageSize?: number;
  condition?: ListAnalyticsDataRequestCondition[];
  pageNum?: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      isoId: 'IsoId',
      apiPath: 'ApiPath',
      pageSize: 'PageSize',
      condition: 'Condition',
      pageNum: 'PageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      isoId: 'string',
      apiPath: 'string',
      pageSize: 'number',
      condition: { 'type': 'array', 'itemType': ListAnalyticsDataRequestCondition },
      pageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnalyticsDataResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: ListAnalyticsDataResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: ListAnalyticsDataResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindDevicesIntoProjectRequest extends $tea.Model {
  iotInstanceId?: string;
  devices: BatchBindDevicesIntoProjectRequestDevices[];
  projectId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      devices: 'Devices',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      devices: { 'type': 'array', 'itemType': BatchBindDevicesIntoProjectRequestDevices },
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindDevicesIntoProjectResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindProductsIntoProjectRequest extends $tea.Model {
  iotInstanceId?: string;
  productKeys: string[];
  projectId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKeys: 'ProductKeys',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKeys: { 'type': 'array', 'itemType': 'string' },
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindProductsIntoProjectResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindProjectDevicesRequest extends $tea.Model {
  devices: BatchUnbindProjectDevicesRequestDevices[];
  iotInstanceId?: string;
  projectId: string;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      iotInstanceId: 'IotInstanceId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: { 'type': 'array', 'itemType': BatchUnbindProjectDevicesRequestDevices },
      iotInstanceId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindProjectDevicesResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindProjectProductsRequest extends $tea.Model {
  iotInstanceId?: string;
  productKeys: string[];
  projectId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKeys: 'ProductKeys',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKeys: { 'type': 'array', 'itemType': 'string' },
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindProjectProductsResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncSpeechByCombinationRequest extends $tea.Model {
  combinationList: string[];
  iotId?: string;
  productKey?: string;
  deviceName?: string;
  iotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      combinationList: 'CombinationList',
      iotId: 'IotId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotInstanceId: 'IotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      combinationList: { 'type': 'array', 'itemType': 'string' },
      iotId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncSpeechByCombinationResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: SyncSpeechByCombinationResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: SyncSpeechByCombinationResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenIotServiceRequest extends $tea.Model {
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenIotServiceResponse extends $tea.Model {
  requestId: string;
  orderId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulengDistributeJobRequest extends $tea.Model {
  productKey: string;
  sourceInstanceId: string;
  targetInstanceId: string;
  static names(): { [key: string]: string } {
    return {
      productKey: 'ProductKey',
      sourceInstanceId: 'SourceInstanceId',
      targetInstanceId: 'TargetInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productKey: 'string',
      sourceInstanceId: 'string',
      targetInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulengDistributeJobResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskByPageRequest extends $tea.Model {
  iotInstanceId?: string;
  pageSize: string;
  pageNo: string;
  jobId?: string;
  device?: { [key: string]: any };
  status?: string;
  deviceName?: string;
  jobName?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
      jobId: 'JobId',
      device: 'Device',
      status: 'Status',
      deviceName: 'DeviceName',
      jobName: 'JobName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      pageSize: 'string',
      pageNo: 'string',
      jobId: 'string',
      device: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      status: 'string',
      deviceName: 'string',
      jobName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskByPageShrinkRequest extends $tea.Model {
  iotInstanceId?: string;
  pageSize: string;
  pageNo: string;
  jobId?: string;
  deviceShrink?: string;
  status?: string;
  deviceName?: string;
  jobName?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
      jobId: 'JobId',
      deviceShrink: 'Device',
      status: 'Status',
      deviceName: 'DeviceName',
      jobName: 'JobName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      pageSize: 'string',
      pageNo: 'string',
      jobId: 'string',
      deviceShrink: 'string',
      status: 'string',
      deviceName: 'string',
      jobName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskByPageResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  total: number;
  pageSize: number;
  pageCount: number;
  page: number;
  data: ListTaskByPageResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      total: 'Total',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      page: 'Page',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      total: 'number',
      pageSize: 'number',
      pageCount: 'number',
      page: 'number',
      data: ListTaskByPageResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskRequest extends $tea.Model {
  iotInstanceId?: string;
  limit: number;
  jobId?: string;
  nextToken?: string;
  device?: { [key: string]: any };
  status?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      limit: 'Limit',
      jobId: 'JobId',
      nextToken: 'NextToken',
      device: 'Device',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      limit: 'number',
      jobId: 'string',
      nextToken: 'string',
      device: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskShrinkRequest extends $tea.Model {
  iotInstanceId?: string;
  limit: number;
  jobId?: string;
  nextToken?: string;
  deviceShrink?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      limit: 'Limit',
      jobId: 'JobId',
      nextToken: 'NextToken',
      deviceShrink: 'Device',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      limit: 'number',
      jobId: 'string',
      nextToken: 'string',
      deviceShrink: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  nextToken: string;
  data: ListTaskResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      nextToken: 'NextToken',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      nextToken: 'string',
      data: ListTaskResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobStatisticsRequest extends $tea.Model {
  iotInstanceId?: string;
  jobId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobStatisticsResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryJobStatisticsResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryJobStatisticsResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobRequest extends $tea.Model {
  iotInstanceId?: string;
  jobId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelJobRequest extends $tea.Model {
  iotInstanceId?: string;
  jobId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelJobResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobRequest extends $tea.Model {
  iotInstanceId?: string;
  status?: string;
  pageSize: number;
  currentPage: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      status: 'Status',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      status: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  total: number;
  pageSize: number;
  page: number;
  data: ListJobResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      total: 'Total',
      pageSize: 'PageSize',
      page: 'Page',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      total: 'number',
      pageSize: 'number',
      page: 'number',
      data: ListJobResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobRequest extends $tea.Model {
  iotInstanceId?: string;
  jobId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryJobResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryJobResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJobRequest extends $tea.Model {
  iotInstanceId?: string;
  description?: string;
  timeoutConfig?: { [key: string]: any };
  rolloutConfig?: { [key: string]: any };
  jobId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      description: 'Description',
      timeoutConfig: 'TimeoutConfig',
      rolloutConfig: 'RolloutConfig',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      description: 'string',
      timeoutConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      rolloutConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJobShrinkRequest extends $tea.Model {
  iotInstanceId?: string;
  description?: string;
  timeoutConfigShrink?: string;
  rolloutConfigShrink?: string;
  jobId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      description: 'Description',
      timeoutConfigShrink: 'TimeoutConfig',
      rolloutConfigShrink: 'RolloutConfig',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      description: 'string',
      timeoutConfigShrink: 'string',
      rolloutConfigShrink: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJobResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequest extends $tea.Model {
  iotInstanceId?: string;
  description?: string;
  jobDocument: string;
  type: string;
  jobFile?: { [key: string]: any };
  jobName: string;
  timeoutConfig?: { [key: string]: any };
  rolloutConfig?: { [key: string]: any };
  targetConfig: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      description: 'Description',
      jobDocument: 'JobDocument',
      type: 'Type',
      jobFile: 'JobFile',
      jobName: 'JobName',
      timeoutConfig: 'TimeoutConfig',
      rolloutConfig: 'RolloutConfig',
      targetConfig: 'TargetConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      description: 'string',
      jobDocument: 'string',
      type: 'string',
      jobFile: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      jobName: 'string',
      timeoutConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      rolloutConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      targetConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobShrinkRequest extends $tea.Model {
  iotInstanceId?: string;
  description?: string;
  jobDocument: string;
  type: string;
  jobFileShrink?: string;
  jobName: string;
  timeoutConfigShrink?: string;
  rolloutConfigShrink?: string;
  targetConfigShrink: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      description: 'Description',
      jobDocument: 'JobDocument',
      type: 'Type',
      jobFileShrink: 'JobFile',
      jobName: 'JobName',
      timeoutConfigShrink: 'TimeoutConfig',
      rolloutConfigShrink: 'RolloutConfig',
      targetConfigShrink: 'TargetConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      description: 'string',
      jobDocument: 'string',
      type: 'string',
      jobFileShrink: 'string',
      jobName: 'string',
      timeoutConfigShrink: 'string',
      rolloutConfigShrink: 'string',
      targetConfigShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  jobId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateFileUploadURLRequest extends $tea.Model {
  iotInstanceId?: string;
  fileSuffix: string;
  bizCode: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      fileSuffix: 'FileSuffix',
      bizCode: 'BizCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      fileSuffix: 'string',
      bizCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateFileUploadURLResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: GenerateFileUploadURLResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: GenerateFileUploadURLResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductDistributeJobRequest extends $tea.Model {
  sourceInstanceId: string;
  productKey: string;
  targetInstanceId: string;
  targetUid?: string;
  targetAliyunId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceInstanceId: 'SourceInstanceId',
      productKey: 'ProductKey',
      targetInstanceId: 'TargetInstanceId',
      targetUid: 'TargetUid',
      targetAliyunId: 'TargetAliyunId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceInstanceId: 'string',
      productKey: 'string',
      targetInstanceId: 'string',
      targetUid: 'string',
      targetAliyunId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductDistributeJobResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  jobId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalPropertyDataRequest extends $tea.Model {
  iotInstanceId?: string;
  pageSize: number;
  productKey?: string;
  deviceName?: string;
  nextPageToken?: string;
  startTime: number;
  identifier: string;
  asc: number;
  iotId?: string;
  endTime: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      nextPageToken: 'NextPageToken',
      startTime: 'StartTime',
      identifier: 'Identifier',
      asc: 'Asc',
      iotId: 'IotId',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      pageSize: 'number',
      productKey: 'string',
      deviceName: 'string',
      nextPageToken: 'string',
      startTime: 'number',
      identifier: 'string',
      asc: 'number',
      iotId: 'string',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalPropertyDataResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryDeviceOriginalPropertyDataResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryDeviceOriginalPropertyDataResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalEventDataRequest extends $tea.Model {
  iotInstanceId?: string;
  pageSize: number;
  productKey?: string;
  deviceName?: string;
  nextPageToken?: string;
  startTime: number;
  identifier: string;
  asc: number;
  iotId?: string;
  endTime: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      nextPageToken: 'NextPageToken',
      startTime: 'StartTime',
      identifier: 'Identifier',
      asc: 'Asc',
      iotId: 'IotId',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      pageSize: 'number',
      productKey: 'string',
      deviceName: 'string',
      nextPageToken: 'string',
      startTime: 'number',
      identifier: 'string',
      asc: 'number',
      iotId: 'string',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalEventDataResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryDeviceOriginalEventDataResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryDeviceOriginalEventDataResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalPropertyStatusRequest extends $tea.Model {
  iotInstanceId?: string;
  pageSize: number;
  productKey?: string;
  deviceName?: string;
  nextPageToken?: string;
  iotId?: string;
  asc: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      nextPageToken: 'NextPageToken',
      iotId: 'IotId',
      asc: 'Asc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      pageSize: 'number',
      productKey: 'string',
      deviceName: 'string',
      nextPageToken: 'string',
      iotId: 'string',
      asc: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalPropertyStatusResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryDeviceOriginalPropertyStatusResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryDeviceOriginalPropertyStatusResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalServiceDataRequest extends $tea.Model {
  iotInstanceId?: string;
  pageSize: number;
  productKey?: string;
  deviceName?: string;
  nextPageToken?: string;
  startTime: number;
  identifier: string;
  asc: number;
  iotId?: string;
  endTime: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      nextPageToken: 'NextPageToken',
      startTime: 'StartTime',
      identifier: 'Identifier',
      asc: 'Asc',
      iotId: 'IotId',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      pageSize: 'number',
      productKey: 'string',
      deviceName: 'string',
      nextPageToken: 'string',
      startTime: 'number',
      identifier: 'string',
      asc: 'number',
      iotId: 'string',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalServiceDataResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryDeviceOriginalServiceDataResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryDeviceOriginalServiceDataResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateThingScriptRequest extends $tea.Model {
  scriptContent: string;
  iotInstanceId?: string;
  productKey: string;
  scriptType: string;
  static names(): { [key: string]: string } {
    return {
      scriptContent: 'ScriptContent',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      scriptType: 'ScriptType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scriptContent: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      scriptType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateThingScriptResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateThingScriptRequest extends $tea.Model {
  scriptContent: string;
  iotInstanceId?: string;
  productKey: string;
  scriptType: string;
  static names(): { [key: string]: string } {
    return {
      scriptContent: 'ScriptContent',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      scriptType: 'ScriptType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scriptContent: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
      scriptType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateThingScriptResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingScriptRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingScriptResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: GetThingScriptResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: GetThingScriptResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAModuleVersionsByDeviceRequest extends $tea.Model {
  iotInstanceId?: string;
  pageSize: number;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  currentPage: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      pageSize: 'number',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAModuleVersionsByDeviceResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  total: number;
  pageSize: number;
  pageCount: number;
  currentPage: number;
  data: ListOTAModuleVersionsByDeviceResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      total: 'Total',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      currentPage: 'CurrentPage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      total: 'number',
      pageSize: 'number',
      pageCount: 'number',
      currentPage: 'number',
      data: ListOTAModuleVersionsByDeviceResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchPubRequest extends $tea.Model {
  iotInstanceId?: string;
  deviceName: string[];
  productKey: string;
  qos?: number;
  topicShortName: string;
  messageContent: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      deviceName: 'DeviceName',
      productKey: 'ProductKey',
      qos: 'Qos',
      topicShortName: 'TopicShortName',
      messageContent: 'MessageContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      deviceName: { 'type': 'array', 'itemType': 'string' },
      productKey: 'string',
      qos: 'number',
      topicShortName: 'string',
      messageContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchPubResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SpeechByCombinationRequest extends $tea.Model {
  combinationList: string[];
  iotId?: string;
  productKey?: string;
  deviceName?: string;
  iotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      combinationList: 'CombinationList',
      iotId: 'IotId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotInstanceId: 'IotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      combinationList: { 'type': 'array', 'itemType': 'string' },
      iotId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SpeechByCombinationResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateThingModelValidationConfigRequest extends $tea.Model {
  validateType: number;
  iotInstanceId?: string;
  productKey: string;
  static names(): { [key: string]: string } {
    return {
      validateType: 'ValidateType',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      validateType: 'number',
      iotInstanceId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateThingModelValidationConfigResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceBySQLRequest extends $tea.Model {
  iotInstanceId: string;
  SQL: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      SQL: 'SQL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      SQL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceBySQLResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  totalCount: number;
  data: QueryDeviceBySQLResponseData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      totalCount: 'TotalCount',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      totalCount: 'number',
      data: { 'type': 'array', 'itemType': QueryDeviceBySQLResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAModuleByProductRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAModuleByProductResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: ListOTAModuleByProductResponseData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: { 'type': 'array', 'itemType': ListOTAModuleByProductResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOTAModuleRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  moduleName: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      moduleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOTAModuleResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDeviceNameListURLRequest extends $tea.Model {
  iotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDeviceNameListURLResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: GenerateDeviceNameListURLResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: GenerateDeviceNameListURLResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOTAModuleRequest extends $tea.Model {
  aliasName?: string;
  iotInstanceId?: string;
  moduleName: string;
  desc?: string;
  productKey: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      iotInstanceId: 'IotInstanceId',
      moduleName: 'ModuleName',
      desc: 'Desc',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      iotInstanceId: 'string',
      moduleName: 'string',
      desc: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOTAModuleResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTAModuleRequest extends $tea.Model {
  aliasName?: string;
  iotInstanceId?: string;
  moduleName: string;
  desc?: string;
  productKey: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      iotInstanceId: 'IotInstanceId',
      moduleName: 'ModuleName',
      desc: 'Desc',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      iotInstanceId: 'string',
      moduleName: 'string',
      desc: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTAModuleResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryThingModelExtendConfigPublishedRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  modelVersion?: string;
  functionBlockId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      modelVersion: 'ModelVersion',
      functionBlockId: 'FunctionBlockId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      modelVersion: 'string',
      functionBlockId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryThingModelExtendConfigPublishedResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryThingModelExtendConfigPublishedResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryThingModelExtendConfigPublishedResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingModelTslPublishedRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  resourceGroupId?: string;
  simple?: boolean;
  modelVersion?: string;
  functionBlockId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      resourceGroupId: 'ResourceGroupId',
      simple: 'Simple',
      modelVersion: 'ModelVersion',
      functionBlockId: 'FunctionBlockId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      resourceGroupId: 'string',
      simple: 'boolean',
      modelVersion: 'string',
      functionBlockId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingModelTslPublishedResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: GetThingModelTslPublishedResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: GetThingModelTslPublishedResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryThingModelPublishedRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  resourceGroupId?: string;
  modelVersion?: string;
  functionBlockId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      resourceGroupId: 'ResourceGroupId',
      modelVersion: 'ModelVersion',
      functionBlockId: 'FunctionBlockId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      resourceGroupId: 'string',
      modelVersion: 'string',
      functionBlockId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryThingModelPublishedResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  productKey: string;
  data: QueryThingModelPublishedResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      productKey: 'ProductKey',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      productKey: 'string',
      data: QueryThingModelPublishedResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryThingModelExtendConfigRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  resourceGroupId?: string;
  modelVersion?: string;
  functionBlockId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      resourceGroupId: 'ResourceGroupId',
      modelVersion: 'ModelVersion',
      functionBlockId: 'FunctionBlockId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      resourceGroupId: 'string',
      modelVersion: 'string',
      functionBlockId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryThingModelExtendConfigResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryThingModelExtendConfigResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryThingModelExtendConfigResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributedDeviceRequest extends $tea.Model {
  pageSize: number;
  productKey?: string;
  deviceName?: string;
  currentPage: number;
  targetUid?: string;
  sourceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      currentPage: 'CurrentPage',
      targetUid: 'TargetUid',
      sourceInstanceId: 'SourceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      productKey: 'string',
      deviceName: 'string',
      currentPage: 'number',
      targetUid: 'string',
      sourceInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributedDeviceResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: ListDistributedDeviceResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: ListDistributedDeviceResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributedProductRequest extends $tea.Model {
  pageSize: number;
  sourceInstanceId?: string;
  productKey?: string;
  targetInstanceId?: string;
  targetUid?: string;
  currentPage: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      sourceInstanceId: 'SourceInstanceId',
      productKey: 'ProductKey',
      targetInstanceId: 'TargetInstanceId',
      targetUid: 'TargetUid',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      sourceInstanceId: 'string',
      productKey: 'string',
      targetInstanceId: 'string',
      targetUid: 'string',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributedProductResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: ListDistributedProductResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: ListDistributedProductResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySubscribeRelationRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  type: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySubscribeRelationResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  productKey: string;
  type: string;
  deviceDataFlag: boolean;
  deviceLifeCycleFlag: boolean;
  deviceStatusChangeFlag: boolean;
  deviceTopoLifeCycleFlag: boolean;
  foundDeviceListFlag: boolean;
  otaEventFlag: boolean;
  thingHistoryFlag: boolean;
  mnsConfiguration: string;
  deviceTagFlag: boolean;
  otaVersionFlag: boolean;
  otaJobFlag: boolean;
  consumerGroupIds: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      productKey: 'ProductKey',
      type: 'Type',
      deviceDataFlag: 'DeviceDataFlag',
      deviceLifeCycleFlag: 'DeviceLifeCycleFlag',
      deviceStatusChangeFlag: 'DeviceStatusChangeFlag',
      deviceTopoLifeCycleFlag: 'DeviceTopoLifeCycleFlag',
      foundDeviceListFlag: 'FoundDeviceListFlag',
      otaEventFlag: 'OtaEventFlag',
      thingHistoryFlag: 'ThingHistoryFlag',
      mnsConfiguration: 'MnsConfiguration',
      deviceTagFlag: 'DeviceTagFlag',
      otaVersionFlag: 'OtaVersionFlag',
      otaJobFlag: 'OtaJobFlag',
      consumerGroupIds: 'ConsumerGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      productKey: 'string',
      type: 'string',
      deviceDataFlag: 'boolean',
      deviceLifeCycleFlag: 'boolean',
      deviceStatusChangeFlag: 'boolean',
      deviceTopoLifeCycleFlag: 'boolean',
      foundDeviceListFlag: 'boolean',
      otaEventFlag: 'boolean',
      thingHistoryFlag: 'boolean',
      mnsConfiguration: 'string',
      deviceTagFlag: 'boolean',
      otaVersionFlag: 'boolean',
      otaJobFlag: 'boolean',
      consumerGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupSubscribeRelationRequest extends $tea.Model {
  consumerGroupId: string;
  iotInstanceId?: string;
  productKey: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'ConsumerGroupId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupSubscribeRelationResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubscribeRelationRequest extends $tea.Model {
  deviceStatusChangeFlag?: boolean;
  iotInstanceId?: string;
  thingHistoryFlag?: boolean;
  productKey: string;
  type: string;
  deviceDataFlag?: boolean;
  consumerGroupIds?: string[];
  deviceTopoLifeCycleFlag?: boolean;
  foundDeviceListFlag?: boolean;
  otaEventFlag?: boolean;
  deviceLifeCycleFlag?: boolean;
  mnsConfiguration?: string;
  deviceTagFlag?: boolean;
  otaVersionFlag?: boolean;
  otaJobFlag?: boolean;
  static names(): { [key: string]: string } {
    return {
      deviceStatusChangeFlag: 'DeviceStatusChangeFlag',
      iotInstanceId: 'IotInstanceId',
      thingHistoryFlag: 'ThingHistoryFlag',
      productKey: 'ProductKey',
      type: 'Type',
      deviceDataFlag: 'DeviceDataFlag',
      consumerGroupIds: 'ConsumerGroupIds',
      deviceTopoLifeCycleFlag: 'DeviceTopoLifeCycleFlag',
      foundDeviceListFlag: 'FoundDeviceListFlag',
      otaEventFlag: 'OtaEventFlag',
      deviceLifeCycleFlag: 'DeviceLifeCycleFlag',
      mnsConfiguration: 'MnsConfiguration',
      deviceTagFlag: 'DeviceTagFlag',
      otaVersionFlag: 'OtaVersionFlag',
      otaJobFlag: 'OtaJobFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceStatusChangeFlag: 'boolean',
      iotInstanceId: 'string',
      thingHistoryFlag: 'boolean',
      productKey: 'string',
      type: 'string',
      deviceDataFlag: 'boolean',
      consumerGroupIds: { 'type': 'array', 'itemType': 'string' },
      deviceTopoLifeCycleFlag: 'boolean',
      foundDeviceListFlag: 'boolean',
      otaEventFlag: 'boolean',
      deviceLifeCycleFlag: 'boolean',
      mnsConfiguration: 'string',
      deviceTagFlag: 'boolean',
      otaVersionFlag: 'boolean',
      otaJobFlag: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSubscribeRelationResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerGroupSubscribeRelationRequest extends $tea.Model {
  consumerGroupId: string;
  iotInstanceId?: string;
  productKey: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'ConsumerGroupId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerGroupSubscribeRelationResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetConsumerGroupPositionRequest extends $tea.Model {
  iotInstanceId?: string;
  groupId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetConsumerGroupPositionResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorMessage: string;
  code: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConsumerGroupRequest extends $tea.Model {
  iotInstanceId?: string;
  newGroupName: string;
  groupId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      newGroupName: 'NewGroupName',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      newGroupName: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConsumerGroupResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorMessage: string;
  code: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteEdgeInstanceChannelRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  driverId: string;
  channelIds: string[];
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      driverId: 'DriverId',
      channelIds: 'ChannelIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
      driverId: 'string',
      channelIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteEdgeInstanceChannelResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetEdgeInstanceDeviceChannelRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  driverId: string;
  channelId: string;
  iotIds: string[];
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      driverId: 'DriverId',
      channelId: 'ChannelId',
      iotIds: 'IotIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
      driverId: 'string',
      channelId: 'string',
      iotIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetEdgeInstanceDeviceChannelResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceDeviceDriverRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  iotIds: string[];
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      iotIds: 'IotIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
      iotIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceDeviceDriverResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  deviceDriverList: BatchGetEdgeInstanceDeviceDriverResponseDeviceDriverList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      deviceDriverList: 'DeviceDriverList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      deviceDriverList: { 'type': 'array', 'itemType': BatchGetEdgeInstanceDeviceDriverResponseDeviceDriverList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceDeviceChannelRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  driverId: string;
  iotIds: string[];
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      driverId: 'DriverId',
      iotIds: 'IotIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
      driverId: 'string',
      iotIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceDeviceChannelResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  deviceChannelList: BatchGetEdgeInstanceDeviceChannelResponseDeviceChannelList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      deviceChannelList: 'DeviceChannelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      deviceChannelList: { 'type': 'array', 'itemType': BatchGetEdgeInstanceDeviceChannelResponseDeviceChannelList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseEdgeDriverVersionRequest extends $tea.Model {
  iotInstanceId?: string;
  driverId: string;
  driverVersion: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      driverId: 'DriverId',
      driverVersion: 'DriverVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      driverId: 'string',
      driverVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseEdgeDriverVersionResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceDeviceByDriverRequest extends $tea.Model {
  iotInstanceId?: string;
  pageSize: number;
  instanceId: string;
  channelId?: string;
  driverId: string;
  currentPage: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      instanceId: 'InstanceId',
      channelId: 'ChannelId',
      driverId: 'DriverId',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      pageSize: 'number',
      instanceId: 'string',
      channelId: 'string',
      driverId: 'string',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceDeviceByDriverResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryEdgeInstanceDeviceByDriverResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryEdgeInstanceDeviceByDriverResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSceneRuleRequest extends $tea.Model {
  iotInstanceId?: string;
  ruleId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSceneRuleResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorMessage: string;
  code: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerSceneRuleRequest extends $tea.Model {
  iotInstanceId?: string;
  ruleId: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      ruleId: 'RuleId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      ruleId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerSceneRuleResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorMessage: string;
  code: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSceneRuleFromEdgeInstanceRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  ruleId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindSceneRuleFromEdgeInstanceResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceSceneRuleRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  currentPage: number;
  pageSize: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceSceneRuleResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryEdgeInstanceSceneRuleResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryEdgeInstanceSceneRuleResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneRuleRequest extends $tea.Model {
  iotInstanceId?: string;
  ruleName: string;
  ruleContent?: string;
  ruleDescription?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      ruleName: 'RuleName',
      ruleContent: 'RuleContent',
      ruleDescription: 'RuleDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      ruleName: 'string',
      ruleContent: 'string',
      ruleDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneRuleResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  ruleId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDetailSceneRuleLogRequest extends $tea.Model {
  iotInstanceId?: string;
  ruleId: string;
  startTime: number;
  endTime: number;
  traceId: string;
  pageSize: number;
  currentPage: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      ruleId: 'RuleId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      traceId: 'TraceId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      ruleId: 'string',
      startTime: 'number',
      endTime: 'number',
      traceId: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDetailSceneRuleLogResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorMessage: string;
  code: string;
  data: QueryDetailSceneRuleLogResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
      data: QueryDetailSceneRuleLogResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSceneRuleRequest extends $tea.Model {
  iotInstanceId?: string;
  ruleId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSceneRuleResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorMessage: string;
  code: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSceneRuleRequest extends $tea.Model {
  iotInstanceId?: string;
  ruleId: string;
  ruleName?: string;
  ruleContent?: string;
  ruleDescription?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleContent: 'RuleContent',
      ruleDescription: 'RuleDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      ruleId: 'string',
      ruleName: 'string',
      ruleContent: 'string',
      ruleDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSceneRuleResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySceneRuleRequest extends $tea.Model {
  iotInstanceId?: string;
  ruleName?: string;
  pageSize: number;
  currentPage: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      ruleName: 'RuleName',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      ruleName: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySceneRuleResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QuerySceneRuleResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QuerySceneRuleResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySummarySceneRuleLogRequest extends $tea.Model {
  iotInstanceId?: string;
  ruleId: string;
  startTime: number;
  endTime: number;
  status: string;
  pageSize: number;
  currentPage: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      ruleId: 'RuleId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      status: 'Status',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      ruleId: 'string',
      startTime: 'number',
      endTime: 'number',
      status: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySummarySceneRuleLogResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorMessage: string;
  code: string;
  data: QuerySummarySceneRuleLogResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
      data: QuerySummarySceneRuleLogResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneRuleRequest extends $tea.Model {
  iotInstanceId?: string;
  ruleId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneRuleResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorMessage: string;
  code: string;
  data: GetSceneRuleResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
      data: GetSceneRuleResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSceneRuleRequest extends $tea.Model {
  iotInstanceId?: string;
  ruleId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSceneRuleResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorMessage: string;
  code: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSceneRuleToEdgeInstanceRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  ruleId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSceneRuleToEdgeInstanceResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorMessage: string;
  code: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeOssPreSignedAddressRequest extends $tea.Model {
  resourceId: string;
  fileName: string;
  iotInstanceId?: string;
  type: string;
  instanceId?: string;
  resourceVersion: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      fileName: 'FileName',
      iotInstanceId: 'IotInstanceId',
      type: 'Type',
      instanceId: 'InstanceId',
      resourceVersion: 'ResourceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      fileName: 'string',
      iotInstanceId: 'string',
      type: 'string',
      instanceId: 'string',
      resourceVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeOssPreSignedAddressResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: CreateEdgeOssPreSignedAddressResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: CreateEdgeOssPreSignedAddressResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEdgeDriverVersionRequest extends $tea.Model {
  iotInstanceId?: string;
  driverId: string;
  driverVersion: string;
  edgeVersion: string;
  description?: string;
  sourceConfig?: string;
  driverConfig?: string;
  containerConfig?: string;
  configCheckRule?: string;
  argument?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      driverId: 'DriverId',
      driverVersion: 'DriverVersion',
      edgeVersion: 'EdgeVersion',
      description: 'Description',
      sourceConfig: 'SourceConfig',
      driverConfig: 'DriverConfig',
      containerConfig: 'ContainerConfig',
      configCheckRule: 'ConfigCheckRule',
      argument: 'Argument',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      driverId: 'string',
      driverVersion: 'string',
      edgeVersion: 'string',
      description: 'string',
      sourceConfig: 'string',
      driverConfig: 'string',
      containerConfig: 'string',
      configCheckRule: 'string',
      argument: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEdgeDriverVersionResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEdgeDriverVersionRequest extends $tea.Model {
  iotInstanceId?: string;
  driverId: string;
  driverVersion: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      driverId: 'DriverId',
      driverVersion: 'DriverVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      driverId: 'string',
      driverVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEdgeDriverVersionResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeDriverVersionRequest extends $tea.Model {
  iotInstanceId?: string;
  driverId: string;
  driverVersion: string;
  edgeVersion: string;
  description?: string;
  sourceConfig?: string;
  driverConfig?: string;
  containerConfig?: string;
  configCheckRule?: string;
  argument?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      driverId: 'DriverId',
      driverVersion: 'DriverVersion',
      edgeVersion: 'EdgeVersion',
      description: 'Description',
      sourceConfig: 'SourceConfig',
      driverConfig: 'DriverConfig',
      containerConfig: 'ContainerConfig',
      configCheckRule: 'ConfigCheckRule',
      argument: 'Argument',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      driverId: 'string',
      driverVersion: 'string',
      edgeVersion: 'string',
      description: 'string',
      sourceConfig: 'string',
      driverConfig: 'string',
      containerConfig: 'string',
      configCheckRule: 'string',
      argument: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeDriverVersionResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEdgeDriverRequest extends $tea.Model {
  iotInstanceId?: string;
  driverId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      driverId: 'DriverId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      driverId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEdgeDriverResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeDriverRequest extends $tea.Model {
  iotInstanceId?: string;
  pageSize: number;
  currentPage: number;
  type: number;
  driverName?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      type: 'Type',
      driverName: 'DriverName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      pageSize: 'number',
      currentPage: 'number',
      type: 'number',
      driverName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeDriverResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryEdgeDriverResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryEdgeDriverResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeDriverRequest extends $tea.Model {
  iotInstanceId?: string;
  driverIds: string[];
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      driverIds: 'DriverIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      driverIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeDriverResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  driverList: BatchGetEdgeDriverResponseDriverList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      driverList: 'DriverList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      driverList: { 'type': 'array', 'itemType': BatchGetEdgeDriverResponseDriverList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeDriverRequest extends $tea.Model {
  iotInstanceId?: string;
  driverName: string;
  driverProtocol: string;
  runtime: string;
  cpuArch?: string;
  isBuiltIn?: boolean;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      driverName: 'DriverName',
      driverProtocol: 'DriverProtocol',
      runtime: 'Runtime',
      cpuArch: 'CpuArch',
      isBuiltIn: 'IsBuiltIn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      driverName: 'string',
      driverProtocol: 'string',
      runtime: 'string',
      cpuArch: 'string',
      isBuiltIn: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeDriverResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  driverId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      driverId: 'DriverId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      driverId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeDriverVersionRequest extends $tea.Model {
  iotInstanceId?: string;
  driverId: string;
  driverVersion: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      driverId: 'DriverId',
      driverVersion: 'DriverVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      driverId: 'string',
      driverVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeDriverVersionResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: GetEdgeDriverVersionResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: GetEdgeDriverVersionResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeDriverVersionRequest extends $tea.Model {
  iotInstanceId?: string;
  pageSize: number;
  currentPage: number;
  driverId: string;
  driverVersion?: string;
  versionState?: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      driverId: 'DriverId',
      driverVersion: 'DriverVersion',
      versionState: 'VersionState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      pageSize: 'number',
      currentPage: 'number',
      driverId: 'string',
      driverVersion: 'string',
      versionState: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeDriverVersionResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryEdgeDriverVersionResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryEdgeDriverVersionResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetDeviceBindStatusRequest extends $tea.Model {
  iotInstanceId?: string;
  iotIds: string[];
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      iotIds: 'IotIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      iotIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetDeviceBindStatusResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: BatchGetDeviceBindStatusResponseData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: { 'type': 'array', 'itemType': BatchGetDeviceBindStatusResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAJobByDeviceRequest extends $tea.Model {
  iotInstanceId?: string;
  firmwareId: string;
  pageSize: number;
  productKey: string;
  deviceName: string;
  currentPage: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      firmwareId: 'FirmwareId',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      firmwareId: 'string',
      pageSize: 'number',
      productKey: 'string',
      deviceName: 'string',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAJobByDeviceResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  total: number;
  pageSize: number;
  pageCount: number;
  currentPage: number;
  data: ListOTAJobByDeviceResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      total: 'Total',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      currentPage: 'CurrentPage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      total: 'number',
      pageSize: 'number',
      pageCount: 'number',
      currentPage: 'number',
      data: ListOTAJobByDeviceResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateThingModelRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  identifier?: string;
  thingModelJson?: string;
  functionBlockId?: string;
  functionBlockName?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      identifier: 'Identifier',
      thingModelJson: 'ThingModelJson',
      functionBlockId: 'FunctionBlockId',
      functionBlockName: 'FunctionBlockName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      identifier: 'string',
      thingModelJson: 'string',
      functionBlockId: 'string',
      functionBlockName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateThingModelResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateThingModelRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  thingModelJson?: string;
  functionBlockId?: string;
  functionBlockName?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      thingModelJson: 'ThingModelJson',
      functionBlockId: 'FunctionBlockId',
      functionBlockName: 'FunctionBlockName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      thingModelJson: 'string',
      functionBlockId: 'string',
      functionBlockName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateThingModelResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTATaskByJobRequest extends $tea.Model {
  iotInstanceId?: string;
  pageSize?: number;
  taskStatus?: string;
  jobId: string;
  currentPage?: number;
  deviceNames?: string[];
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      taskStatus: 'TaskStatus',
      jobId: 'JobId',
      currentPage: 'CurrentPage',
      deviceNames: 'DeviceNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      pageSize: 'number',
      taskStatus: 'string',
      jobId: 'string',
      currentPage: 'number',
      deviceNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTATaskByJobResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  total: number;
  pageSize: number;
  pageCount: number;
  currentPage: number;
  data: ListOTATaskByJobResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      total: 'Total',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      currentPage: 'CurrentPage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      total: 'number',
      pageSize: 'number',
      pageCount: 'number',
      currentPage: 'number',
      data: ListOTATaskByJobResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListThingTemplatesRequest extends $tea.Model {
  iotInstanceId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListThingTemplatesResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: ListThingTemplatesResponseData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: { 'type': 'array', 'itemType': ListThingTemplatesResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingTemplateRequest extends $tea.Model {
  iotInstanceId?: string;
  resourceGroupId?: string;
  categoryKey?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      resourceGroupId: 'ResourceGroupId',
      categoryKey: 'CategoryKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      resourceGroupId: 'string',
      categoryKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingTemplateResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  thingModelJSON: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      thingModelJSON: 'ThingModelJSON',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      thingModelJSON: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListThingModelVersionRequest extends $tea.Model {
  iotInstanceId?: string;
  resourceGroupId?: string;
  productKey: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      resourceGroupId: 'ResourceGroupId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      resourceGroupId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListThingModelVersionResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: ListThingModelVersionResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: ListThingModelVersionResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportThingModelTslRequest extends $tea.Model {
  iotInstanceId?: string;
  resourceGroupId?: string;
  productKey: string;
  tslStr?: string;
  tslUrl?: string;
  functionBlockId?: string;
  functionBlockName?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      resourceGroupId: 'ResourceGroupId',
      productKey: 'ProductKey',
      tslStr: 'TslStr',
      tslUrl: 'TslUrl',
      functionBlockId: 'FunctionBlockId',
      functionBlockName: 'FunctionBlockName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      resourceGroupId: 'string',
      productKey: 'string',
      tslStr: 'string',
      tslUrl: 'string',
      functionBlockId: 'string',
      functionBlockName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportThingModelTslResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishThingModelRequest extends $tea.Model {
  iotInstanceId?: string;
  resourceGroupId?: string;
  productKey: string;
  modelVersion?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      resourceGroupId: 'ResourceGroupId',
      productKey: 'ProductKey',
      modelVersion: 'ModelVersion',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      resourceGroupId: 'string',
      productKey: 'string',
      modelVersion: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishThingModelResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyThingModelRequest extends $tea.Model {
  iotInstanceId?: string;
  resourceGroupId?: string;
  sourceProductKey: string;
  targetProductKey: string;
  sourceModelVersion?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      resourceGroupId: 'ResourceGroupId',
      sourceProductKey: 'SourceProductKey',
      targetProductKey: 'TargetProductKey',
      sourceModelVersion: 'SourceModelVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      resourceGroupId: 'string',
      sourceProductKey: 'string',
      targetProductKey: 'string',
      sourceModelVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyThingModelResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingModelTslRequest extends $tea.Model {
  iotInstanceId?: string;
  resourceGroupId?: string;
  productKey: string;
  modelVersion?: string;
  simple?: boolean;
  functionBlockId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      resourceGroupId: 'ResourceGroupId',
      productKey: 'ProductKey',
      modelVersion: 'ModelVersion',
      simple: 'Simple',
      functionBlockId: 'FunctionBlockId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      resourceGroupId: 'string',
      productKey: 'string',
      modelVersion: 'string',
      simple: 'boolean',
      functionBlockId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingModelTslResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: GetThingModelTslResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: GetThingModelTslResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryThingModelRequest extends $tea.Model {
  iotInstanceId?: string;
  resourceGroupId?: string;
  productKey: string;
  modelVersion?: string;
  functionBlockId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      resourceGroupId: 'ResourceGroupId',
      productKey: 'ProductKey',
      modelVersion: 'ModelVersion',
      functionBlockId: 'FunctionBlockId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      resourceGroupId: 'string',
      productKey: 'string',
      modelVersion: 'string',
      functionBlockId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryThingModelResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  productKey: string;
  data: QueryThingModelResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      productKey: 'ProductKey',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      productKey: 'string',
      data: QueryThingModelResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteThingModelRequest extends $tea.Model {
  iotInstanceId?: string;
  resourceGroupId?: string;
  productKey: string;
  propertyIdentifier?: string[];
  serviceIdentifier?: string[];
  eventIdentifier?: string[];
  functionBlockId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      resourceGroupId: 'ResourceGroupId',
      productKey: 'ProductKey',
      propertyIdentifier: 'PropertyIdentifier',
      serviceIdentifier: 'ServiceIdentifier',
      eventIdentifier: 'EventIdentifier',
      functionBlockId: 'FunctionBlockId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      resourceGroupId: 'string',
      productKey: 'string',
      propertyIdentifier: { 'type': 'array', 'itemType': 'string' },
      serviceIdentifier: { 'type': 'array', 'itemType': 'string' },
      eventIdentifier: { 'type': 'array', 'itemType': 'string' },
      functionBlockId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteThingModelResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductFilterConfigRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  propertyTimestampFilter: boolean;
  propertyValueFilter: boolean;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      propertyTimestampFilter: 'PropertyTimestampFilter',
      propertyValueFilter: 'PropertyValueFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      propertyTimestampFilter: 'boolean',
      propertyValueFilter: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductFilterConfigResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOTAStrategyByJobRequest extends $tea.Model {
  iotInstanceId?: string;
  jobId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOTAStrategyByJobResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAJobByFirmwareRequest extends $tea.Model {
  iotInstanceId?: string;
  firmwareId: string;
  pageSize: number;
  currentPage: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      firmwareId: 'FirmwareId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      firmwareId: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAJobByFirmwareResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  total: number;
  pageSize: number;
  pageCount: number;
  currentPage: number;
  data: ListOTAJobByFirmwareResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      total: 'Total',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      currentPage: 'CurrentPage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      total: 'number',
      pageSize: 'number',
      pageCount: 'number',
      currentPage: 'number',
      data: ListOTAJobByFirmwareResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAFirmwareRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey?: string;
  pageSize: number;
  currentPage: number;
  destVersion?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      destVersion: 'DestVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      pageSize: 'number',
      currentPage: 'number',
      destVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAFirmwareResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  total: number;
  pageSize: number;
  pageCount: number;
  currentPage: number;
  firmwareInfo: ListOTAFirmwareResponseFirmwareInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      total: 'Total',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      currentPage: 'CurrentPage',
      firmwareInfo: 'FirmwareInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      total: 'number',
      pageSize: 'number',
      pageCount: 'number',
      currentPage: 'number',
      firmwareInfo: ListOTAFirmwareResponseFirmwareInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOTATaskByJobRequest extends $tea.Model {
  iotInstanceId?: string;
  jobId: string;
  cancelScheduledTask?: boolean;
  cancelQueuedTask?: boolean;
  cancelInProgressTask?: boolean;
  cancelNotifiedTask?: boolean;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      jobId: 'JobId',
      cancelScheduledTask: 'CancelScheduledTask',
      cancelQueuedTask: 'CancelQueuedTask',
      cancelInProgressTask: 'CancelInProgressTask',
      cancelNotifiedTask: 'CancelNotifiedTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      jobId: 'string',
      cancelScheduledTask: 'boolean',
      cancelQueuedTask: 'boolean',
      cancelInProgressTask: 'boolean',
      cancelNotifiedTask: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOTATaskByJobResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceDistributeJobRequest extends $tea.Model {
  deviceName: string[];
  sourceInstanceId: string;
  productKey: string;
  targetUid?: string;
  targetAliyunId?: string;
  targetInstanceConfig: CreateDeviceDistributeJobRequestTargetInstanceConfig[];
  strategy: number;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      sourceInstanceId: 'SourceInstanceId',
      productKey: 'ProductKey',
      targetUid: 'TargetUid',
      targetAliyunId: 'TargetAliyunId',
      targetInstanceConfig: 'TargetInstanceConfig',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: { 'type': 'array', 'itemType': 'string' },
      sourceInstanceId: 'string',
      productKey: 'string',
      targetUid: 'string',
      targetAliyunId: 'string',
      targetInstanceConfig: { 'type': 'array', 'itemType': CreateDeviceDistributeJobRequestTargetInstanceConfig },
      strategy: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceDistributeJobResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  jobId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceDistributeDetailRequest extends $tea.Model {
  jobId: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceDistributeDetailResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  file: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      file: 'File',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      file: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceDistributeJobRequest extends $tea.Model {
  targetUid?: string;
  currentPage: number;
  pageSize: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      targetUid: 'TargetUid',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetUid: 'string',
      currentPage: 'number',
      pageSize: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceDistributeJobResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: ListDeviceDistributeJobResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: ListDeviceDistributeJobResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceDistributeJobRequest extends $tea.Model {
  jobId: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceDistributeJobResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryDeviceDistributeJobResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryDeviceDistributeJobResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceDistributeJobRequest extends $tea.Model {
  jobId: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceDistributeJobResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceByStatusRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey?: string;
  status?: number;
  currentPage?: number;
  pageSize?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      status: 'Status',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      status: 'number',
      currentPage: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceByStatusResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
  data: QueryDeviceByStatusResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      page: 'Page',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      total: 'Total',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      page: 'number',
      pageSize: 'number',
      pageCount: 'number',
      total: 'number',
      data: QueryDeviceByStatusResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOTAUploadURLRequest extends $tea.Model {
  iotInstanceId?: string;
  fileSuffix?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      fileSuffix: 'FileSuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      fileSuffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOTAUploadURLResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: GenerateOTAUploadURLResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: GenerateOTAUploadURLResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductCertInfoRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductCertInfoResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  productCertInfo: QueryProductCertInfoResponseProductCertInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      productCertInfo: 'ProductCertInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      productCertInfo: QueryProductCertInfoResponseProductCertInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetProductCertInfoRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  issueModel: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      issueModel: 'IssueModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      issueModel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetProductCertInfoResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubscribeRelationRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  deviceDataFlag?: boolean;
  deviceLifeCycleFlag?: boolean;
  deviceStatusChangeFlag?: boolean;
  deviceTopoLifeCycleFlag?: boolean;
  foundDeviceListFlag?: boolean;
  mnsConfiguration?: string;
  type?: string;
  consumerGroupIds?: string[];
  otaEventFlag?: boolean;
  thingHistoryFlag?: boolean;
  deviceTagFlag?: boolean;
  otaVersionFlag?: boolean;
  otaJobFlag?: boolean;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceDataFlag: 'DeviceDataFlag',
      deviceLifeCycleFlag: 'DeviceLifeCycleFlag',
      deviceStatusChangeFlag: 'DeviceStatusChangeFlag',
      deviceTopoLifeCycleFlag: 'DeviceTopoLifeCycleFlag',
      foundDeviceListFlag: 'FoundDeviceListFlag',
      mnsConfiguration: 'MnsConfiguration',
      type: 'Type',
      consumerGroupIds: 'ConsumerGroupIds',
      otaEventFlag: 'OtaEventFlag',
      thingHistoryFlag: 'ThingHistoryFlag',
      deviceTagFlag: 'DeviceTagFlag',
      otaVersionFlag: 'OtaVersionFlag',
      otaJobFlag: 'OtaJobFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      deviceDataFlag: 'boolean',
      deviceLifeCycleFlag: 'boolean',
      deviceStatusChangeFlag: 'boolean',
      deviceTopoLifeCycleFlag: 'boolean',
      foundDeviceListFlag: 'boolean',
      mnsConfiguration: 'string',
      type: 'string',
      consumerGroupIds: { 'type': 'array', 'itemType': 'string' },
      otaEventFlag: 'boolean',
      thingHistoryFlag: 'boolean',
      deviceTagFlag: 'boolean',
      otaVersionFlag: 'boolean',
      otaJobFlag: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubscribeRelationResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubscribeRelationRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  type: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubscribeRelationResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConsumerGroupStatusRequest extends $tea.Model {
  iotInstanceId?: string;
  groupId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConsumerGroupStatusResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorMessage: string;
  accumulationCount: number;
  consumerSpeed: number;
  lastConsumerTime: string;
  code: string;
  clientConnectionStatusList: QueryConsumerGroupStatusResponseClientConnectionStatusList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      accumulationCount: 'AccumulationCount',
      consumerSpeed: 'ConsumerSpeed',
      lastConsumerTime: 'LastConsumerTime',
      code: 'Code',
      clientConnectionStatusList: 'ClientConnectionStatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      accumulationCount: 'number',
      consumerSpeed: 'number',
      lastConsumerTime: 'string',
      code: 'string',
      clientConnectionStatusList: QueryConsumerGroupStatusResponseClientConnectionStatusList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerGroupRequest extends $tea.Model {
  iotInstanceId?: string;
  groupId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerGroupResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorMessage: string;
  code: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConsumerGroupListRequest extends $tea.Model {
  iotInstanceId?: string;
  pageSize: number;
  currentPage: number;
  fuzzy?: boolean;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      fuzzy: 'Fuzzy',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      pageSize: 'number',
      currentPage: 'number',
      fuzzy: 'boolean',
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConsumerGroupListResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorMessage: string;
  pageSize: number;
  pageCount: number;
  total: number;
  currentPage: number;
  code: string;
  data: QueryConsumerGroupListResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      total: 'Total',
      currentPage: 'CurrentPage',
      code: 'Code',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      pageSize: 'number',
      pageCount: 'number',
      total: 'number',
      currentPage: 'number',
      code: 'string',
      data: QueryConsumerGroupListResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConsumerGroupByGroupIdRequest extends $tea.Model {
  iotInstanceId?: string;
  groupId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConsumerGroupByGroupIdResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorMessage: string;
  code: string;
  data: QueryConsumerGroupByGroupIdResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
      data: QueryConsumerGroupByGroupIdResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupRequest extends $tea.Model {
  iotInstanceId?: string;
  groupName: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorMessage: string;
  groupId: string;
  code: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      groupId: 'GroupId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      groupId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTADynamicUpgradeJobRequest extends $tea.Model {
  iotInstanceId?: string;
  firmwareId: string;
  productKey: string;
  srcVersion?: string[];
  retryInterval?: number;
  retryCount?: number;
  timeoutInMinutes?: number;
  maximumPerMinute?: number;
  overwriteMode?: number;
  dynamicMode?: number;
  tag?: CreateOTADynamicUpgradeJobRequestTag[];
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      firmwareId: 'FirmwareId',
      productKey: 'ProductKey',
      srcVersion: 'SrcVersion',
      retryInterval: 'RetryInterval',
      retryCount: 'RetryCount',
      timeoutInMinutes: 'TimeoutInMinutes',
      maximumPerMinute: 'MaximumPerMinute',
      overwriteMode: 'OverwriteMode',
      dynamicMode: 'DynamicMode',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      firmwareId: 'string',
      productKey: 'string',
      srcVersion: { 'type': 'array', 'itemType': 'string' },
      retryInterval: 'number',
      retryCount: 'number',
      timeoutInMinutes: 'number',
      maximumPerMinute: 'number',
      overwriteMode: 'number',
      dynamicMode: 'number',
      tag: { 'type': 'array', 'itemType': CreateOTADynamicUpgradeJobRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTADynamicUpgradeJobResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: CreateOTADynamicUpgradeJobResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: CreateOTADynamicUpgradeJobResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTAStaticUpgradeJobRequest extends $tea.Model {
  iotInstanceId?: string;
  firmwareId: string;
  productKey: string;
  targetSelection: string;
  srcVersion?: string[];
  scheduleTime?: number;
  retryInterval?: number;
  retryCount?: number;
  timeoutInMinutes?: number;
  maximumPerMinute?: number;
  grayPercent?: string;
  targetDeviceName?: string[];
  scheduleFinishTime?: number;
  overwriteMode?: number;
  tag?: CreateOTAStaticUpgradeJobRequestTag[];
  dnListFileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      firmwareId: 'FirmwareId',
      productKey: 'ProductKey',
      targetSelection: 'TargetSelection',
      srcVersion: 'SrcVersion',
      scheduleTime: 'ScheduleTime',
      retryInterval: 'RetryInterval',
      retryCount: 'RetryCount',
      timeoutInMinutes: 'TimeoutInMinutes',
      maximumPerMinute: 'MaximumPerMinute',
      grayPercent: 'GrayPercent',
      targetDeviceName: 'TargetDeviceName',
      scheduleFinishTime: 'ScheduleFinishTime',
      overwriteMode: 'OverwriteMode',
      tag: 'Tag',
      dnListFileUrl: 'DnListFileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      firmwareId: 'string',
      productKey: 'string',
      targetSelection: 'string',
      srcVersion: { 'type': 'array', 'itemType': 'string' },
      scheduleTime: 'number',
      retryInterval: 'number',
      retryCount: 'number',
      timeoutInMinutes: 'number',
      maximumPerMinute: 'number',
      grayPercent: 'string',
      targetDeviceName: { 'type': 'array', 'itemType': 'string' },
      scheduleFinishTime: 'number',
      overwriteMode: 'number',
      tag: { 'type': 'array', 'itemType': CreateOTAStaticUpgradeJobRequestTag },
      dnListFileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTAStaticUpgradeJobResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: CreateOTAStaticUpgradeJobResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: CreateOTAStaticUpgradeJobResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTAFirmwareRequest extends $tea.Model {
  iotInstanceId?: string;
  firmwareName: string;
  destVersion: string;
  firmwareUrl: string;
  firmwareSign?: string;
  signMethod?: string;
  firmwareSize?: number;
  productKey?: string;
  firmwareDesc?: string;
  type?: number;
  srcVersion?: string;
  moduleName?: string;
  needToVerify?: boolean;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      firmwareName: 'FirmwareName',
      destVersion: 'DestVersion',
      firmwareUrl: 'FirmwareUrl',
      firmwareSign: 'FirmwareSign',
      signMethod: 'SignMethod',
      firmwareSize: 'FirmwareSize',
      productKey: 'ProductKey',
      firmwareDesc: 'FirmwareDesc',
      type: 'Type',
      srcVersion: 'SrcVersion',
      moduleName: 'ModuleName',
      needToVerify: 'NeedToVerify',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      firmwareName: 'string',
      destVersion: 'string',
      firmwareUrl: 'string',
      firmwareSign: 'string',
      signMethod: 'string',
      firmwareSize: 'number',
      productKey: 'string',
      firmwareDesc: 'string',
      type: 'number',
      srcVersion: 'string',
      moduleName: 'string',
      needToVerify: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTAFirmwareResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: CreateOTAFirmwareResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: CreateOTAFirmwareResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTAVerifyJobRequest extends $tea.Model {
  iotInstanceId?: string;
  firmwareId: string;
  timeoutInMinutes?: number;
  productKey: string;
  targetDeviceName: string[];
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      firmwareId: 'FirmwareId',
      timeoutInMinutes: 'TimeoutInMinutes',
      productKey: 'ProductKey',
      targetDeviceName: 'TargetDeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      firmwareId: 'string',
      timeoutInMinutes: 'number',
      productKey: 'string',
      targetDeviceName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTAVerifyJobResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: CreateOTAVerifyJobResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: CreateOTAVerifyJobResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOTAJobRequest extends $tea.Model {
  iotInstanceId?: string;
  jobId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOTAJobResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryOTAJobResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryOTAJobResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOTATaskByDeviceRequest extends $tea.Model {
  iotInstanceId?: string;
  firmwareId: string;
  productKey: string;
  deviceName: string[];
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      firmwareId: 'FirmwareId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      firmwareId: 'string',
      productKey: 'string',
      deviceName: { 'type': 'array', 'itemType': 'string' },
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOTATaskByDeviceResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOTAFirmwareRequest extends $tea.Model {
  iotInstanceId?: string;
  firmwareId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      firmwareId: 'FirmwareId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      firmwareId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOTAFirmwareResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOTAFirmwareRequest extends $tea.Model {
  iotInstanceId?: string;
  firmwareId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      firmwareId: 'FirmwareId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      firmwareId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOTAFirmwareResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  firmwareInfo: QueryOTAFirmwareResponseFirmwareInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      firmwareInfo: 'FirmwareInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      firmwareInfo: QueryOTAFirmwareResponseFirmwareInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindApplicationFromEdgeInstanceRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  applicationId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      applicationId: 'ApplicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
      applicationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindApplicationFromEdgeInstanceResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindApplicationToEdgeInstanceRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  applicationId: string;
  applicationVersion: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      applicationId: 'ApplicationId',
      applicationVersion: 'ApplicationVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
      applicationId: 'string',
      applicationVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindApplicationToEdgeInstanceResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCertUrlByApplyIdRequest extends $tea.Model {
  iotInstanceId?: string;
  applyId: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      applyId: 'ApplyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      applyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCertUrlByApplyIdResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  certUrl: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      certUrl: 'CertUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      certUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceCertRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  deviceName: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceCertResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  deviceCertInfo: QueryDeviceCertResponseDeviceCertInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      deviceCertInfo: 'DeviceCertInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      deviceCertInfo: QueryDeviceCertResponseDeviceCertInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseEdgeInstanceDeploymentRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseEdgeInstanceDeploymentResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDriverFromEdgeInstanceRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  driverId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      driverId: 'DriverId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
      driverId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDriverFromEdgeInstanceResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceEdgeInstanceGatewayRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  currentGatewayId: string;
  newGatewayId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      currentGatewayId: 'CurrentGatewayId',
      newGatewayId: 'NewGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
      currentGatewayId: 'string',
      newGatewayId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceEdgeInstanceGatewayResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindDriverToEdgeInstanceRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  driverId: string;
  driverVersion?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      driverId: 'DriverId',
      driverVersion: 'DriverVersion',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
      driverId: 'string',
      driverVersion: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindDriverToEdgeInstanceResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryDeviceDetailRequest extends $tea.Model {
  deviceName: string[];
  productKey: string;
  iotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      productKey: 'ProductKey',
      iotInstanceId: 'IotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: { 'type': 'array', 'itemType': 'string' },
      productKey: 'string',
      iotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryDeviceDetailResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: BatchQueryDeviceDetailResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: BatchQueryDeviceDetailResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeInstanceDeploymentRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  deploymentId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      deploymentId: 'DeploymentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
      deploymentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeInstanceDeploymentResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: GetEdgeInstanceDeploymentResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: GetEdgeInstanceDeploymentResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskRequest extends $tea.Model {
  iotInstanceId?: string;
  taskId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryTaskResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryTaskResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataAPIServiceRequest extends $tea.Model {
  displayName: string;
  originSql: string;
  requestParam?: CreateDataAPIServiceRequestRequestParam[];
  desc?: string;
  responseParam?: CreateDataAPIServiceRequestResponseParam[];
  templateSql: string;
  apiPath: string;
  iotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      originSql: 'OriginSql',
      requestParam: 'RequestParam',
      desc: 'Desc',
      responseParam: 'ResponseParam',
      templateSql: 'TemplateSql',
      apiPath: 'ApiPath',
      iotInstanceId: 'IotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      originSql: 'string',
      requestParam: { 'type': 'array', 'itemType': CreateDataAPIServiceRequestRequestParam },
      desc: 'string',
      responseParam: { 'type': 'array', 'itemType': CreateDataAPIServiceRequestResponseParam },
      templateSql: 'string',
      apiPath: 'string',
      iotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataAPIServiceResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: CreateDataAPIServiceResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: CreateDataAPIServiceResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataAPIServiceDetailRequest extends $tea.Model {
  apiSrn: string;
  iotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiSrn: 'ApiSrn',
      iotInstanceId: 'IotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiSrn: 'string',
      iotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataAPIServiceDetailResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: GetDataAPIServiceDetailResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: GetDataAPIServiceDetailResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeDataAPIServiceRequest extends $tea.Model {
  apiSrn: string;
  param?: InvokeDataAPIServiceRequestParam[];
  iotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiSrn: 'ApiSrn',
      param: 'Param',
      iotInstanceId: 'IotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiSrn: 'string',
      param: { 'type': 'array', 'itemType': InvokeDataAPIServiceRequestParam },
      iotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeDataAPIServiceResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: InvokeDataAPIServiceResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: InvokeDataAPIServiceResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEdgeInstanceChannelRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  driverId: string;
  channelId: string;
  channelName: string;
  configs: UpdateEdgeInstanceChannelRequestConfigs[];
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      driverId: 'DriverId',
      channelId: 'ChannelId',
      channelName: 'ChannelName',
      configs: 'Configs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
      driverId: 'string',
      channelId: 'string',
      channelName: 'string',
      configs: { 'type': 'array', 'itemType': UpdateEdgeInstanceChannelRequestConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEdgeInstanceChannelResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceChannelRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  driverId: string;
  channelName?: string;
  currentPage: number;
  pageSize: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      driverId: 'DriverId',
      channelName: 'ChannelName',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
      driverId: 'string',
      channelName: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceChannelResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryEdgeInstanceChannelResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryEdgeInstanceChannelResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindDeviceFromEdgeInstanceRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  iotIds: string[];
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      iotIds: 'IotIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
      iotIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindDeviceFromEdgeInstanceResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetEdgeInstanceDriverConfigsRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  driverId: string;
  configs: SetEdgeInstanceDriverConfigsRequestConfigs[];
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      driverId: 'DriverId',
      configs: 'Configs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
      driverId: 'string',
      configs: { 'type': 'array', 'itemType': SetEdgeInstanceDriverConfigsRequestConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetEdgeInstanceDriverConfigsResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeInstanceChannelRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  driverId: string;
  channelName: string;
  configs: CreateEdgeInstanceChannelRequestConfigs[];
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      driverId: 'DriverId',
      channelName: 'ChannelName',
      configs: 'Configs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
      driverId: 'string',
      channelName: 'string',
      configs: { 'type': 'array', 'itemType': CreateEdgeInstanceChannelRequestConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeInstanceChannelResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindDeviceToEdgeInstanceWithDriverRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  driverId: string;
  iotIds: string[];
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      driverId: 'DriverId',
      iotIds: 'IotIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
      driverId: 'string',
      iotIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindDeviceToEdgeInstanceWithDriverResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceChannelRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  driverId: string;
  channelIds: string[];
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      driverId: 'DriverId',
      channelIds: 'ChannelIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
      driverId: 'string',
      channelIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceChannelResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: BatchGetEdgeInstanceChannelResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: BatchGetEdgeInstanceChannelResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetEdgeInstanceDeviceConfigRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  deviceConfigs: BatchSetEdgeInstanceDeviceConfigRequestDeviceConfigs[];
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      deviceConfigs: 'DeviceConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
      deviceConfigs: { 'type': 'array', 'itemType': BatchSetEdgeInstanceDeviceConfigRequestDeviceConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetEdgeInstanceDeviceConfigResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchClearEdgeInstanceDeviceConfigRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  iotIds: string[];
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      iotIds: 'IotIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
      iotIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchClearEdgeInstanceDeviceConfigResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceDeviceConfigRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  iotIds: string[];
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      iotIds: 'IotIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
      iotIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceDeviceConfigResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  deviceConfigList: BatchGetEdgeInstanceDeviceConfigResponseDeviceConfigList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      deviceConfigList: 'DeviceConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      deviceConfigList: { 'type': 'array', 'itemType': BatchGetEdgeInstanceDeviceConfigResponseDeviceConfigList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceDriverConfigsRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  driverIds: string[];
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      driverIds: 'DriverIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
      driverIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceDriverConfigsResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  driverConfigList: BatchGetEdgeInstanceDriverConfigsResponseDriverConfigList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      driverConfigList: 'DriverConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      driverConfigList: { 'type': 'array', 'itemType': BatchGetEdgeInstanceDriverConfigsResponseDriverConfigList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearEdgeInstanceDriverConfigsRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  driverId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      driverId: 'DriverId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
      driverId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearEdgeInstanceDriverConfigsResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoRaNodesTaskRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  deviceInfo: CreateLoRaNodesTaskRequestDeviceInfo[];
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceInfo: 'DeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      deviceInfo: { 'type': 'array', 'itemType': CreateLoRaNodesTaskRequestDeviceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoRaNodesTaskResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  taskId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoraNodesTaskRequest extends $tea.Model {
  iotInstanceId?: string;
  taskId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoraNodesTaskResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  taskId: string;
  taskState: string;
  totalCount: number;
  successCount: number;
  successDevEuis: GetLoraNodesTaskResponseSuccessDevEuis;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      taskId: 'TaskId',
      taskState: 'TaskState',
      totalCount: 'TotalCount',
      successCount: 'SuccessCount',
      successDevEuis: 'SuccessDevEuis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      taskId: 'string',
      taskState: 'string',
      totalCount: 'number',
      successCount: 'number',
      successDevEuis: GetLoraNodesTaskResponseSuccessDevEuis,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLoRaJoinPermissionsRequest extends $tea.Model {
  iotInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLoRaJoinPermissionsResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  productKey: string;
  joinPermissions: QueryLoRaJoinPermissionsResponseJoinPermissions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      productKey: 'ProductKey',
      joinPermissions: 'JoinPermissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      productKey: 'string',
      joinPermissions: QueryLoRaJoinPermissionsResponseJoinPermissions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceDriverRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  currentPage: number;
  pageSize: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceDriverResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryEdgeInstanceDriverResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryEdgeInstanceDriverResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateDeviceNicknameRequest extends $tea.Model {
  iotInstanceId?: string;
  deviceNicknameInfo: BatchUpdateDeviceNicknameRequestDeviceNicknameInfo[];
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      deviceNicknameInfo: 'DeviceNicknameInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      deviceNicknameInfo: { 'type': 'array', 'itemType': BatchUpdateDeviceNicknameRequestDeviceNicknameInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateDeviceNicknameResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceFileRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  fileId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
      fileId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceFileResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryDeviceFileResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryDeviceFileResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceFileListRequest extends $tea.Model {
  iotInstanceId?: string;
  pageSize?: number;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      pageSize: 'number',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceFileListResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  currentPage: number;
  pageCount: number;
  pageSize: number;
  total: number;
  data: QueryDeviceFileListResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      currentPage: 'CurrentPage',
      pageCount: 'PageCount',
      pageSize: 'PageSize',
      total: 'Total',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      currentPage: 'number',
      pageCount: 'number',
      pageSize: 'number',
      total: 'number',
      data: QueryDeviceFileListResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceFileRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  fileId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
      fileId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceFileResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodesAddingTaskRequest extends $tea.Model {
  iotInstanceId?: string;
  taskId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodesAddingTaskResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  taskId: string;
  taskState: string;
  totalCount: number;
  successCount: number;
  successDevEuis: GetNodesAddingTaskResponseSuccessDevEuis;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      taskId: 'TaskId',
      taskState: 'TaskState',
      totalCount: 'TotalCount',
      successCount: 'SuccessCount',
      successDevEuis: 'SuccessDevEuis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      taskId: 'string',
      taskState: 'string',
      totalCount: 'number',
      successCount: 'number',
      successDevEuis: GetNodesAddingTaskResponseSuccessDevEuis,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeviceDesiredPropertyRequest extends $tea.Model {
  iotInstanceId?: string;
  iotId?: string;
  deviceName?: string;
  productKey?: string;
  items: string;
  versions: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      iotId: 'IotId',
      deviceName: 'DeviceName',
      productKey: 'ProductKey',
      items: 'Items',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      iotId: 'string',
      deviceName: 'string',
      productKey: 'string',
      items: 'string',
      versions: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeviceDesiredPropertyResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorMessage: string;
  code: string;
  data: SetDeviceDesiredPropertyResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
      data: SetDeviceDesiredPropertyResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceDesiredPropertyRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  identifier?: string[];
  iotId?: string;
  functionBlockId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      identifier: 'Identifier',
      iotId: 'IotId',
      functionBlockId: 'FunctionBlockId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      identifier: { 'type': 'array', 'itemType': 'string' },
      iotId: 'string',
      functionBlockId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceDesiredPropertyResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryDeviceDesiredPropertyResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryDeviceDesiredPropertyResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceHistoricDeploymentRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  currentPage: number;
  pageSize: number;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
      currentPage: 'number',
      pageSize: 'number',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceHistoricDeploymentResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryEdgeInstanceHistoricDeploymentResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryEdgeInstanceHistoricDeploymentResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductTagsRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  productTag: CreateProductTagsRequestProductTag[];
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      productTag: 'ProductTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      productTag: { 'type': 'array', 'itemType': CreateProductTagsRequestProductTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductTagsResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorMessage: string;
  code: string;
  invalidProductTags: CreateProductTagsResponseInvalidProductTags;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      invalidProductTags: 'InvalidProductTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
      invalidProductTags: CreateProductTagsResponseInvalidProductTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductTagsRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  productTag: UpdateProductTagsRequestProductTag[];
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      productTag: 'ProductTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      productTag: { 'type': 'array', 'itemType': UpdateProductTagsRequestProductTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductTagsResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorMessage: string;
  code: string;
  invalidProductTags: UpdateProductTagsResponseInvalidProductTags;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      invalidProductTags: 'InvalidProductTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
      invalidProductTags: UpdateProductTagsResponseInvalidProductTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductTagsRequest extends $tea.Model {
  iotInstanceId?: string;
  productTagKey: string[];
  productKey: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productTagKey: 'ProductTagKey',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productTagKey: { 'type': 'array', 'itemType': 'string' },
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductTagsResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorMessage: string;
  code: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductTagsRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductTagsResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorMessage: string;
  code: string;
  data: ListProductTagsResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
      data: ListProductTagsResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductByTagsRequest extends $tea.Model {
  iotInstanceId?: string;
  currentPage?: number;
  pageSize?: number;
  productTag: ListProductByTagsRequestProductTag[];
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      productTag: 'ProductTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      currentPage: 'number',
      pageSize: 'number',
      productTag: { 'type': 'array', 'itemType': ListProductByTagsRequestProductTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductByTagsResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorMessage: string;
  code: string;
  productInfos: ListProductByTagsResponseProductInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      productInfos: 'ProductInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
      productInfos: ListProductByTagsResponseProductInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupByTagsRequest extends $tea.Model {
  iotInstanceId?: string;
  tag?: QueryDeviceGroupByTagsRequestTag[];
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      tag: 'Tag',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      tag: { 'type': 'array', 'itemType': QueryDeviceGroupByTagsRequestTag },
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupByTagsResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
  data: QueryDeviceGroupByTagsResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      page: 'Page',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      total: 'Total',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      page: 'number',
      pageSize: 'number',
      pageCount: 'number',
      total: 'number',
      data: QueryDeviceGroupByTagsResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddThingTopoRequest extends $tea.Model {
  iotInstanceId?: string;
  topoAddItem: BatchAddThingTopoRequestTopoAddItem[];
  gwProductKey: string;
  gwDeviceName: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      topoAddItem: 'TopoAddItem',
      gwProductKey: 'GwProductKey',
      gwDeviceName: 'GwDeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      topoAddItem: { 'type': 'array', 'itemType': BatchAddThingTopoRequestTopoAddItem },
      gwProductKey: 'string',
      gwDeviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddThingTopoResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceListByDeviceGroupRequest extends $tea.Model {
  iotInstanceId?: string;
  groupId: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      groupId: 'GroupId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      groupId: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceListByDeviceGroupResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
  data: QueryDeviceListByDeviceGroupResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      page: 'Page',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      total: 'Total',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      page: 'number',
      pageSize: 'number',
      pageCount: 'number',
      total: 'number',
      data: QueryDeviceListByDeviceGroupResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertiesDataRequest extends $tea.Model {
  iotInstanceId?: string;
  pageSize: number;
  productKey: string;
  deviceName: string;
  startTime: number;
  identifier: string[];
  asc: number;
  iotId?: string;
  endTime: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      startTime: 'StartTime',
      identifier: 'Identifier',
      asc: 'Asc',
      iotId: 'IotId',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      pageSize: 'number',
      productKey: 'string',
      deviceName: 'string',
      startTime: 'number',
      identifier: { 'type': 'array', 'itemType': 'string' },
      asc: 'number',
      iotId: 'string',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertiesDataResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  nextValid: boolean;
  nextTime: number;
  propertyDataInfos: QueryDevicePropertiesDataResponsePropertyDataInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      nextValid: 'NextValid',
      nextTime: 'NextTime',
      propertyDataInfos: 'PropertyDataInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      nextValid: 'boolean',
      nextTime: 'number',
      propertyDataInfos: QueryDevicePropertiesDataResponsePropertyDataInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindRoleFromEdgeInstanceRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindRoleFromEdgeInstanceResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEdgeInstanceRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  name: string;
  tags?: string;
  spec?: number;
  bizEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      name: 'Name',
      tags: 'Tags',
      spec: 'Spec',
      bizEnable: 'BizEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
      name: 'string',
      tags: 'string',
      spec: 'number',
      bizEnable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEdgeInstanceResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeInstanceRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeInstanceResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: GetEdgeInstanceResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: GetEdgeInstanceResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEdgeInstanceRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEdgeInstanceResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeInstanceRequest extends $tea.Model {
  iotInstanceId?: string;
  name: string;
  tags?: string;
  spec?: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      name: 'Name',
      tags: 'Tags',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      name: 'string',
      tags: 'string',
      spec: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeInstanceResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorMessage: string;
  code: string;
  instanceId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceGatewayRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceGatewayResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  gatewayList: QueryEdgeInstanceGatewayResponseGatewayList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      gatewayList: 'GatewayList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      gatewayList: { 'type': 'array', 'itemType': QueryEdgeInstanceGatewayResponseGatewayList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceDeviceRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  currentPage: number;
  pageSize: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceDeviceResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryEdgeInstanceDeviceResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryEdgeInstanceDeviceResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindGatewayToEdgeInstanceRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindGatewayToEdgeInstanceResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceRequest extends $tea.Model {
  iotInstanceId?: string;
  pageSize: number;
  currentPage: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      pageSize: 'number',
      currentPage: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryEdgeInstanceResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryEdgeInstanceResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeInstanceDeploymentRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  type: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeInstanceDeploymentResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  deploymentId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      deploymentId: 'DeploymentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      deploymentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindRoleToEdgeInstanceRequest extends $tea.Model {
  iotInstanceId?: string;
  instanceId: string;
  roleArn: string;
  roleName: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      instanceId: 'InstanceId',
      roleArn: 'RoleArn',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      instanceId: 'string',
      roleArn: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindRoleToEdgeInstanceResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySuperDeviceGroupRequest extends $tea.Model {
  iotInstanceId?: string;
  groupId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySuperDeviceGroupResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QuerySuperDeviceGroupResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QuerySuperDeviceGroupResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceByTagsRequest extends $tea.Model {
  iotInstanceId?: string;
  tag?: QueryDeviceByTagsRequestTag[];
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      tag: 'Tag',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      tag: { 'type': 'array', 'itemType': QueryDeviceByTagsRequestTag },
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceByTagsResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
  data: QueryDeviceByTagsResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      page: 'Page',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      total: 'Total',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      page: 'number',
      pageSize: 'number',
      pageCount: 'number',
      total: 'number',
      data: QueryDeviceByTagsResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDevicesPropertyRequest extends $tea.Model {
  deviceName: string[];
  iotInstanceId?: string;
  productKey: string;
  items: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: { 'type': 'array', 'itemType': 'string' },
      iotInstanceId: 'string',
      productKey: 'string',
      items: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDevicesPropertyResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorMessage: string;
  code: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeThingsServiceRequest extends $tea.Model {
  deviceName: string[];
  iotInstanceId?: string;
  productKey: string;
  identifier: string;
  args: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      identifier: 'Identifier',
      args: 'Args',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: { 'type': 'array', 'itemType': 'string' },
      iotInstanceId: 'string',
      productKey: 'string',
      identifier: 'string',
      args: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeThingsServiceResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorMessage: string;
  code: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeviceGroupTagsRequest extends $tea.Model {
  iotInstanceId?: string;
  groupId: string;
  tagString?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      groupId: 'GroupId',
      tagString: 'TagString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      groupId: 'string',
      tagString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeviceGroupTagsResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAppDeviceListRequest extends $tea.Model {
  iotInstanceId?: string;
  pageSize?: number;
  productKeyList?: string[];
  categoryKeyList?: string[];
  appKey?: string;
  tagList?: QueryAppDeviceListRequestTagList[];
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      productKeyList: 'ProductKeyList',
      categoryKeyList: 'CategoryKeyList',
      appKey: 'AppKey',
      tagList: 'TagList',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      pageSize: 'number',
      productKeyList: { 'type': 'array', 'itemType': 'string' },
      categoryKeyList: { 'type': 'array', 'itemType': 'string' },
      appKey: 'string',
      tagList: { 'type': 'array', 'itemType': QueryAppDeviceListRequestTagList },
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAppDeviceListResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorMessage: string;
  code: string;
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
  data: QueryAppDeviceListResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      page: 'Page',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      total: 'Total',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
      page: 'number',
      pageSize: 'number',
      pageCount: 'number',
      total: 'number',
      data: QueryAppDeviceListResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceGroupRequest extends $tea.Model {
  iotInstanceId?: string;
  groupId: string;
  groupDesc?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      groupId: 'GroupId',
      groupDesc: 'GroupDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      groupId: 'string',
      groupDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceGroupResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupTagListRequest extends $tea.Model {
  iotInstanceId?: string;
  groupId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupTagListResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryDeviceGroupTagListResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryDeviceGroupTagListResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupListRequest extends $tea.Model {
  iotInstanceId?: string;
  pageSize?: number;
  superGroupId?: string;
  groupName?: string;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      superGroupId: 'SuperGroupId',
      groupName: 'GroupName',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      pageSize: 'number',
      superGroupId: 'string',
      groupName: 'string',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupListResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  currentPage: number;
  pageCount: number;
  pageSize: number;
  total: number;
  data: QueryDeviceGroupListResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      currentPage: 'CurrentPage',
      pageCount: 'PageCount',
      pageSize: 'PageSize',
      total: 'Total',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      currentPage: 'number',
      pageCount: 'number',
      pageSize: 'number',
      total: 'number',
      data: QueryDeviceGroupListResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupInfoRequest extends $tea.Model {
  iotInstanceId?: string;
  groupId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupInfoResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryDeviceGroupInfoResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryDeviceGroupInfoResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupByDeviceRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  deviceName: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupByDeviceResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  groupInfos: QueryDeviceGroupByDeviceResponseGroupInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      groupInfos: 'GroupInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      groupInfos: QueryDeviceGroupByDeviceResponseGroupInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceGroupRequest extends $tea.Model {
  iotInstanceId?: string;
  groupId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceGroupResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceGroupRequest extends $tea.Model {
  iotInstanceId?: string;
  superGroupId?: string;
  groupDesc?: string;
  groupName: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      superGroupId: 'SuperGroupId',
      groupDesc: 'GroupDesc',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      superGroupId: 'string',
      groupDesc: 'string',
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceGroupResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: CreateDeviceGroupResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: CreateDeviceGroupResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteDeviceGroupRelationsRequest extends $tea.Model {
  iotInstanceId?: string;
  groupId: string;
  device?: BatchDeleteDeviceGroupRelationsRequestDevice[];
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      groupId: 'GroupId',
      device: 'Device',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      groupId: 'string',
      device: { 'type': 'array', 'itemType': BatchDeleteDeviceGroupRelationsRequestDevice },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteDeviceGroupRelationsResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  validDeviceCount: number;
  alreadyRelatedGroupDeviceCount: number;
  successDeviceCount: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      validDeviceCount: 'ValidDeviceCount',
      alreadyRelatedGroupDeviceCount: 'AlreadyRelatedGroupDeviceCount',
      successDeviceCount: 'SuccessDeviceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      validDeviceCount: 'number',
      alreadyRelatedGroupDeviceCount: 'number',
      successDeviceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddDeviceGroupRelationsRequest extends $tea.Model {
  iotInstanceId?: string;
  groupId: string;
  device?: BatchAddDeviceGroupRelationsRequestDevice[];
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      groupId: 'GroupId',
      device: 'Device',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      groupId: 'string',
      device: { 'type': 'array', 'itemType': BatchAddDeviceGroupRelationsRequestDevice },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddDeviceGroupRelationsResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  validDeviceCount: number;
  exceedTenGroupDeviceCount: number;
  alreadyRelatedGroupDeviceCount: number;
  successAddedDeviceCount: number;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      validDeviceCount: 'ValidDeviceCount',
      exceedTenGroupDeviceCount: 'ExceedTenGroupDeviceCount',
      alreadyRelatedGroupDeviceCount: 'AlreadyRelatedGroupDeviceCount',
      successAddedDeviceCount: 'SuccessAddedDeviceCount',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      validDeviceCount: 'number',
      exceedTenGroupDeviceCount: 'number',
      alreadyRelatedGroupDeviceCount: 'number',
      successAddedDeviceCount: 'number',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RRpcRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  deviceName: string;
  timeout: number;
  requestBase64Byte: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      timeout: 'Timeout',
      requestBase64Byte: 'RequestBase64Byte',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      timeout: 'number',
      requestBase64Byte: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RRpcResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  rrpcCode: string;
  payloadBase64Byte: string;
  messageId: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      rrpcCode: 'RrpcCode',
      payloadBase64Byte: 'PayloadBase64Byte',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      rrpcCode: 'string',
      payloadBase64Byte: 'string',
      messageId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPageByApplyIdRequest extends $tea.Model {
  iotInstanceId?: string;
  pageSize?: number;
  applyId: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      applyId: 'ApplyId',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      pageSize: 'number',
      applyId: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPageByApplyIdResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  pageSize: number;
  page: number;
  pageCount: number;
  total: number;
  applyDeviceList: QueryPageByApplyIdResponseApplyDeviceList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      pageSize: 'PageSize',
      page: 'Page',
      pageCount: 'PageCount',
      total: 'Total',
      applyDeviceList: 'ApplyDeviceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      pageSize: 'number',
      page: 'number',
      pageCount: 'number',
      total: 'number',
      applyDeviceList: QueryPageByApplyIdResponseApplyDeviceList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceRequest extends $tea.Model {
  iotInstanceId?: string;
  pageSize?: number;
  productKey: string;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      pageSize: 'number',
      productKey: 'string',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  total: number;
  pageSize: number;
  pageCount: number;
  page: number;
  data: QueryDeviceResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      total: 'Total',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      page: 'Page',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      total: 'number',
      pageSize: 'number',
      pageCount: 'number',
      page: 'number',
      data: QueryDeviceResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveDevicePropRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  props: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      props: 'Props',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      props: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveDevicePropResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTopicRouteTableRequest extends $tea.Model {
  iotInstanceId?: string;
  topic: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTopicRouteTableResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  dstTopics: QueryTopicRouteTableResponseDstTopics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      dstTopics: 'DstTopics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      dstTopics: QueryTopicRouteTableResponseDstTopics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTopicReverseRouteTableRequest extends $tea.Model {
  iotInstanceId?: string;
  regionId?: string;
  topic: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      regionId: 'RegionId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      regionId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTopicReverseRouteTableResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  srcTopics: QueryTopicReverseRouteTableResponseSrcTopics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      srcTopics: 'SrcTopics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      srcTopics: QueryTopicReverseRouteTableResponseSrcTopics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PubBroadcastRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  topicFullName?: string;
  messageContent: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      topicFullName: 'TopicFullName',
      messageContent: 'MessageContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      topicFullName: 'string',
      messageContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PubBroadcastResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  messageId: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      messageId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTopicRouteTableRequest extends $tea.Model {
  iotInstanceId?: string;
  dstTopic: string[];
  srcTopic: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      dstTopic: 'DstTopic',
      srcTopic: 'SrcTopic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      dstTopic: { 'type': 'array', 'itemType': 'string' },
      srcTopic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTopicRouteTableResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  isAllSucceed: boolean;
  errorMessage: string;
  failureTopics: DeleteTopicRouteTableResponseFailureTopics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      isAllSucceed: 'IsAllSucceed',
      errorMessage: 'ErrorMessage',
      failureTopics: 'FailureTopics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      isAllSucceed: 'boolean',
      errorMessage: 'string',
      failureTopics: DeleteTopicRouteTableResponseFailureTopics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDevicePropRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  propKey: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      propKey: 'PropKey',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      propKey: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDevicePropResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTopicRouteTableRequest extends $tea.Model {
  iotInstanceId?: string;
  dstTopic: string[];
  srcTopic: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      dstTopic: 'DstTopic',
      srcTopic: 'SrcTopic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      dstTopic: { 'type': 'array', 'itemType': 'string' },
      srcTopic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTopicRouteTableResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  isAllSucceed: boolean;
  errorMessage: string;
  failureTopics: CreateTopicRouteTableResponseFailureTopics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      isAllSucceed: 'IsAllSucceed',
      errorMessage: 'ErrorMessage',
      failureTopics: 'FailureTopics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      isAllSucceed: 'boolean',
      errorMessage: 'string',
      failureTopics: CreateTopicRouteTableResponseFailureTopics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetDeviceStateRequest extends $tea.Model {
  deviceName?: string[];
  iotInstanceId?: string;
  productKey?: string;
  iotId?: string[];
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: { 'type': 'array', 'itemType': 'string' },
      iotInstanceId: 'string',
      productKey: 'string',
      iotId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetDeviceStateResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  deviceStatusList: BatchGetDeviceStateResponseDeviceStatusList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      deviceStatusList: 'DeviceStatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      deviceStatusList: BatchGetDeviceStateResponseDeviceStatusList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleActionRequest extends $tea.Model {
  iotInstanceId?: string;
  actionId: number;
  type: string;
  configuration: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      actionId: 'ActionId',
      type: 'Type',
      configuration: 'Configuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      actionId: 'number',
      type: 'string',
      configuration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleActionResponse extends $tea.Model {
  requestId: string;
  code: string;
  success: boolean;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      success: 'boolean',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleRequest extends $tea.Model {
  iotInstanceId?: string;
  ruleId: number;
  select?: string;
  shortTopic?: string;
  where?: string;
  productKey?: string;
  name?: string;
  ruleDesc?: string;
  topicType?: number;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      ruleId: 'RuleId',
      select: 'Select',
      shortTopic: 'ShortTopic',
      where: 'Where',
      productKey: 'ProductKey',
      name: 'Name',
      ruleDesc: 'RuleDesc',
      topicType: 'TopicType',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      ruleId: 'number',
      select: 'string',
      shortTopic: 'string',
      where: 'string',
      productKey: 'string',
      name: 'string',
      ruleDesc: 'string',
      topicType: 'number',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductTopicRequest extends $tea.Model {
  iotInstanceId?: string;
  desc?: string;
  operation: string;
  topicShortName: string;
  topicId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      desc: 'Desc',
      operation: 'Operation',
      topicShortName: 'TopicShortName',
      topicId: 'TopicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      desc: 'string',
      operation: 'string',
      topicShortName: 'string',
      topicId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductTopicResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceShadowRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  deviceName: string;
  shadowMessage: string;
  deltaUpdate?: boolean;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      shadowMessage: 'ShadowMessage',
      deltaUpdate: 'DeltaUpdate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      shadowMessage: 'string',
      deltaUpdate: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceShadowResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopRuleRequest extends $tea.Model {
  iotInstanceId?: string;
  ruleId: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopRuleResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRuleRequest extends $tea.Model {
  iotInstanceId?: string;
  ruleId: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRuleResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductTopicRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductTopicResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryProductTopicResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryProductTopicResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  props: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      props: 'Props',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      props: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PubRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  qos?: number;
  topicFullName: string;
  messageContent: string;
  responseTopic?: string;
  correlationData?: string;
  userProp?: PubRequestUserProp[];
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      qos: 'Qos',
      topicFullName: 'TopicFullName',
      messageContent: 'MessageContent',
      responseTopic: 'ResponseTopic',
      correlationData: 'CorrelationData',
      userProp: 'UserProp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      qos: 'number',
      topicFullName: 'string',
      messageContent: 'string',
      responseTopic: 'string',
      correlationData: 'string',
      userProp: { 'type': 'array', 'itemType': PubRequestUserProp },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PubResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  messageId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleActionsRequest extends $tea.Model {
  iotInstanceId?: string;
  ruleId: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleActionsResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  ruleActionList: ListRuleActionsResponseRuleActionList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      ruleActionList: 'RuleActionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      ruleActionList: ListRuleActionsResponseRuleActionList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleRequest extends $tea.Model {
  iotInstanceId?: string;
  currentPage: number;
  pageSize: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      currentPage: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  page: number;
  total: number;
  pageSize: number;
  data: ListRuleResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      page: 'Page',
      total: 'Total',
      pageSize: 'PageSize',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      page: 'number',
      total: 'number',
      pageSize: 'number',
      data: ListRuleResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleActionRequest extends $tea.Model {
  iotInstanceId?: string;
  actionId: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      actionId: 'ActionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      actionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleActionResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  ruleActionInfo: GetRuleActionResponseRuleActionInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      ruleActionInfo: 'RuleActionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      ruleActionInfo: GetRuleActionResponseRuleActionInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleRequest extends $tea.Model {
  iotInstanceId?: string;
  ruleId: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  ruleInfo: GetRuleResponseRuleInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      ruleInfo: 'RuleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      ruleInfo: GetRuleResponseRuleInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceShadowRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  deviceName: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceShadowResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  shadowMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      shadowMessage: 'ShadowMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      shadowMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleActionRequest extends $tea.Model {
  iotInstanceId?: string;
  actionId: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      actionId: 'ActionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      actionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleActionResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleRequest extends $tea.Model {
  iotInstanceId?: string;
  ruleId: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductTopicRequest extends $tea.Model {
  iotInstanceId?: string;
  topicId: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      topicId: 'TopicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      topicId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductTopicResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleActionRequest extends $tea.Model {
  iotInstanceId?: string;
  ruleId: number;
  type: string;
  configuration: string;
  errorActionFlag?: boolean;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      ruleId: 'RuleId',
      type: 'Type',
      configuration: 'Configuration',
      errorActionFlag: 'ErrorActionFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      ruleId: 'number',
      type: 'string',
      configuration: 'string',
      errorActionFlag: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleActionResponse extends $tea.Model {
  requestId: string;
  code: string;
  success: boolean;
  errorMessage: string;
  actionId: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      actionId: 'ActionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      success: 'boolean',
      errorMessage: 'string',
      actionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequest extends $tea.Model {
  iotInstanceId?: string;
  select?: string;
  shortTopic?: string;
  where?: string;
  productKey?: string;
  name: string;
  ruleDesc?: string;
  dataType?: string;
  topicType?: number;
  resourceGroupId?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      select: 'Select',
      shortTopic: 'ShortTopic',
      where: 'Where',
      productKey: 'ProductKey',
      name: 'Name',
      ruleDesc: 'RuleDesc',
      dataType: 'DataType',
      topicType: 'TopicType',
      resourceGroupId: 'ResourceGroupId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      select: 'string',
      shortTopic: 'string',
      where: 'string',
      productKey: 'string',
      name: 'string',
      ruleDesc: 'string',
      dataType: 'string',
      topicType: 'number',
      resourceGroupId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  ruleId: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductTopicRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  topicShortName: string;
  operation: string;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      topicShortName: 'TopicShortName',
      operation: 'Operation',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      topicShortName: 'string',
      operation: 'string',
      desc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductTopicResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  topicId: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      topicId: 'TopicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      topicId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBatchRegisterDeviceStatusRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  applyId: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      applyId: 'ApplyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      applyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBatchRegisterDeviceStatusResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryBatchRegisterDeviceStatusResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryBatchRegisterDeviceStatusResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayBySubDeviceRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayBySubDeviceResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: GetGatewayBySubDeviceResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: GetGatewayBySubDeviceResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetThingRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetThingResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveThingTopoRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveThingTopoResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyAddThingTopoRequest extends $tea.Model {
  iotInstanceId?: string;
  deviceListStr?: string;
  gwIotId?: string;
  gwProductKey?: string;
  gwDeviceName?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      deviceListStr: 'DeviceListStr',
      gwIotId: 'GwIotId',
      gwProductKey: 'GwProductKey',
      gwDeviceName: 'GwDeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      deviceListStr: 'string',
      gwIotId: 'string',
      gwProductKey: 'string',
      gwDeviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyAddThingTopoResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorMessage: string;
  code: string;
  data: NotifyAddThingTopoResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
      data: NotifyAddThingTopoResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingTopoRequest extends $tea.Model {
  iotInstanceId?: string;
  pageSize: number;
  productKey?: string;
  deviceName?: string;
  pageNo: number;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      pageNo: 'PageNo',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      pageSize: 'number',
      productKey: 'string',
      deviceName: 'string',
      pageNo: 'number',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingTopoResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: GetThingTopoResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: GetThingTopoResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertyStatusRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  functionBlockId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
      functionBlockId: 'FunctionBlockId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
      functionBlockId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertyStatusResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryDevicePropertyStatusResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryDevicePropertyStatusResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertyDataRequest extends $tea.Model {
  iotInstanceId?: string;
  pageSize: number;
  productKey?: string;
  deviceName?: string;
  startTime: number;
  identifier: string;
  asc: number;
  iotId?: string;
  endTime: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      startTime: 'StartTime',
      identifier: 'Identifier',
      asc: 'Asc',
      iotId: 'IotId',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      pageSize: 'number',
      productKey: 'string',
      deviceName: 'string',
      startTime: 'number',
      identifier: 'string',
      asc: 'number',
      iotId: 'string',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertyDataResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryDevicePropertyDataResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryDevicePropertyDataResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRegisterDeviceWithApplyIdRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  applyId: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      applyId: 'ApplyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      applyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRegisterDeviceWithApplyIdResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: BatchRegisterDeviceWithApplyIdResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: BatchRegisterDeviceWithApplyIdResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRegisterDeviceRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  count: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRegisterDeviceResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: BatchRegisterDeviceResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: BatchRegisterDeviceResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCheckDeviceNamesRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  deviceName?: string[];
  deviceNameList?: BatchCheckDeviceNamesRequestDeviceNameList[];
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      deviceNameList: 'DeviceNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: { 'type': 'array', 'itemType': 'string' },
      deviceNameList: { 'type': 'array', 'itemType': BatchCheckDeviceNamesRequestDeviceNameList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCheckDeviceNamesResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: BatchCheckDeviceNamesResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: BatchCheckDeviceNamesResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductRequest extends $tea.Model {
  iotInstanceId?: string;
  description?: string;
  productKey: string;
  productName: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      description: 'Description',
      productKey: 'ProductKey',
      productName: 'ProductName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      description: 'string',
      productKey: 'string',
      productName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDevicePropertyRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  items: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
      items: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDevicePropertyResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorMessage: string;
  code: string;
  data: SetDevicePropertyResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
      data: SetDevicePropertyResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  deviceName?: string;
  devEui?: string;
  nickname?: string;
  pinCode?: string;
  joinEui?: string;
  appKey?: string;
  loraNodeType?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      devEui: 'DevEui',
      nickname: 'Nickname',
      pinCode: 'PinCode',
      joinEui: 'JoinEui',
      appKey: 'AppKey',
      loraNodeType: 'LoraNodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      devEui: 'string',
      nickname: 'string',
      pinCode: 'string',
      joinEui: 'string',
      appKey: 'string',
      loraNodeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: RegisterDeviceResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: RegisterDeviceResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductListRequest extends $tea.Model {
  iotInstanceId?: string;
  pageSize: number;
  resourceGroupId?: string;
  aliyunCommodityCode?: string;
  currentPage: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      aliyunCommodityCode: 'AliyunCommodityCode',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      pageSize: 'number',
      resourceGroupId: 'string',
      aliyunCommodityCode: 'string',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductListResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryProductListResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryProductListResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryProductResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryProductResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatisticsRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatisticsResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryDeviceStatisticsResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryDeviceStatisticsResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceServiceDataRequest extends $tea.Model {
  iotInstanceId?: string;
  pageSize?: number;
  productKey?: string;
  deviceName?: string;
  startTime: number;
  identifier?: string;
  asc?: number;
  iotId?: string;
  endTime: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      startTime: 'StartTime',
      identifier: 'Identifier',
      asc: 'Asc',
      iotId: 'IotId',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      pageSize: 'number',
      productKey: 'string',
      deviceName: 'string',
      startTime: 'number',
      identifier: 'string',
      asc: 'number',
      iotId: 'string',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceServiceDataResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryDeviceServiceDataResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryDeviceServiceDataResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventDataRequest extends $tea.Model {
  iotInstanceId?: string;
  pageSize?: number;
  productKey?: string;
  deviceName?: string;
  startTime: number;
  identifier?: string;
  eventType?: string;
  asc?: number;
  iotId?: string;
  endTime: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      startTime: 'StartTime',
      identifier: 'Identifier',
      eventType: 'EventType',
      asc: 'Asc',
      iotId: 'IotId',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      pageSize: 'number',
      productKey: 'string',
      deviceName: 'string',
      startTime: 'number',
      identifier: 'string',
      eventType: 'string',
      asc: 'number',
      iotId: 'string',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventDataResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryDeviceEventDataResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryDeviceEventDataResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceDetailRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceDetailResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: QueryDeviceDetailResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: QueryDeviceDetailResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeThingServiceRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  identifier: string;
  args: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      identifier: 'Identifier',
      args: 'Args',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      identifier: 'string',
      args: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeThingServiceResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errorMessage: string;
  code: string;
  data: InvokeThingServiceResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errorMessage: 'ErrorMessage',
      code: 'Code',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errorMessage: 'string',
      code: 'string',
      data: InvokeThingServiceResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceStatusRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceStatusResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  data: GetDeviceStatusResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      data: GetDeviceStatusResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableThingRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableThingResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableThingRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableThingResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceRequest extends $tea.Model {
  iotInstanceId?: string;
  productKey?: string;
  deviceName?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductRequest extends $tea.Model {
  iotInstanceId?: string;
  productName: string;
  nodeType: number;
  dataFormat?: number;
  description?: string;
  aliyunCommodityCode?: string;
  id2?: boolean;
  categoryId?: number;
  protocolType?: string;
  netType?: string;
  joinPermissionId?: string;
  resourceGroupId?: string;
  authType?: string;
  categoryKey?: string;
  publishAuto?: boolean;
  validateType?: number;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      productName: 'ProductName',
      nodeType: 'NodeType',
      dataFormat: 'DataFormat',
      description: 'Description',
      aliyunCommodityCode: 'AliyunCommodityCode',
      id2: 'Id2',
      categoryId: 'CategoryId',
      protocolType: 'ProtocolType',
      netType: 'NetType',
      joinPermissionId: 'JoinPermissionId',
      resourceGroupId: 'ResourceGroupId',
      authType: 'AuthType',
      categoryKey: 'CategoryKey',
      publishAuto: 'PublishAuto',
      validateType: 'ValidateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      productName: 'string',
      nodeType: 'number',
      dataFormat: 'number',
      description: 'string',
      aliyunCommodityCode: 'string',
      id2: 'boolean',
      categoryId: 'number',
      protocolType: 'string',
      netType: 'string',
      joinPermissionId: 'string',
      resourceGroupId: 'string',
      authType: 'string',
      categoryKey: 'string',
      publishAuto: 'boolean',
      validateType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  errorMessage: string;
  productKey: string;
  data: CreateProductResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      errorMessage: 'ErrorMessage',
      productKey: 'ProductKey',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      errorMessage: 'string',
      productKey: 'string',
      data: CreateProductResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnalyticsDataRequestCondition extends $tea.Model {
  fieldName: string;
  operate: string;
  value?: string;
  betweenStart?: string;
  betweenEnd?: string;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'FieldName',
      operate: 'Operate',
      value: 'Value',
      betweenStart: 'BetweenStart',
      betweenEnd: 'BetweenEnd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      operate: 'string',
      value: 'string',
      betweenStart: 'string',
      betweenEnd: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnalyticsDataResponseData extends $tea.Model {
  hasNext: boolean;
  resultJson: string;
  count: number;
  pageNum: number;
  pageSize: number;
  static names(): { [key: string]: string } {
    return {
      hasNext: 'HasNext',
      resultJson: 'ResultJson',
      count: 'Count',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasNext: 'boolean',
      resultJson: 'string',
      count: 'number',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchBindDevicesIntoProjectRequestDevices extends $tea.Model {
  productKey: string;
  deviceName: string;
  static names(): { [key: string]: string } {
    return {
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productKey: 'string',
      deviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUnbindProjectDevicesRequestDevices extends $tea.Model {
  productKey: string;
  deviceName: string;
  static names(): { [key: string]: string } {
    return {
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productKey: 'string',
      deviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncSpeechByCombinationResponseData extends $tea.Model {
  id: string;
  retryCount: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      retryCount: 'RetryCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      retryCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskByPageResponseDataData extends $tea.Model {
  jobId: string;
  jobName: string;
  taskId: string;
  productKey: string;
  deviceName: string;
  iotId: string;
  progress: number;
  utcQueueTime: string;
  utcModified: string;
  statusDetail: string;
  status: string;
  productName: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      jobName: 'JobName',
      taskId: 'TaskId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
      progress: 'Progress',
      utcQueueTime: 'UtcQueueTime',
      utcModified: 'UtcModified',
      statusDetail: 'StatusDetail',
      status: 'Status',
      productName: 'ProductName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      jobName: 'string',
      taskId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
      progress: 'number',
      utcQueueTime: 'string',
      utcModified: 'string',
      statusDetail: 'string',
      status: 'string',
      productName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskByPageResponseData extends $tea.Model {
  data: ListTaskByPageResponseDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListTaskByPageResponseDataData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskResponseDataData extends $tea.Model {
  jobId: string;
  jobName: string;
  taskId: string;
  productKey: string;
  deviceName: string;
  iotId: string;
  progress: string;
  utcQueueTime: string;
  utcModified: string;
  status: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      jobName: 'JobName',
      taskId: 'TaskId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
      progress: 'Progress',
      utcQueueTime: 'UtcQueueTime',
      utcModified: 'UtcModified',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      jobName: 'string',
      taskId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
      progress: 'string',
      utcQueueTime: 'string',
      utcModified: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskResponseData extends $tea.Model {
  data: ListTaskResponseDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListTaskResponseDataData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobStatisticsResponseData extends $tea.Model {
  total: number;
  queued: number;
  sent: number;
  inProgress: number;
  succeeded: number;
  failed: number;
  rejected: number;
  timeOut: number;
  cancelled: number;
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      queued: 'Queued',
      sent: 'Sent',
      inProgress: 'InProgress',
      succeeded: 'Succeeded',
      failed: 'Failed',
      rejected: 'Rejected',
      timeOut: 'TimeOut',
      cancelled: 'Cancelled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      queued: 'number',
      sent: 'number',
      inProgress: 'number',
      succeeded: 'number',
      failed: 'number',
      rejected: 'number',
      timeOut: 'number',
      cancelled: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseDataData extends $tea.Model {
  jobId: string;
  jobName: string;
  utcCreate: string;
  utcModified: string;
  status: string;
  description: string;
  type: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      jobName: 'JobName',
      utcCreate: 'UtcCreate',
      utcModified: 'UtcModified',
      status: 'Status',
      description: 'Description',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      jobName: 'string',
      utcCreate: 'string',
      utcModified: 'string',
      status: 'string',
      description: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobResponseData extends $tea.Model {
  data: ListJobResponseDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListJobResponseDataData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobResponseDataRolloutConfig extends $tea.Model {
  maximumPerMinute: number;
  static names(): { [key: string]: string } {
    return {
      maximumPerMinute: 'MaximumPerMinute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maximumPerMinute: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobResponseDataTimeoutConfig extends $tea.Model {
  inProgressTimeoutInMinutes: number;
  static names(): { [key: string]: string } {
    return {
      inProgressTimeoutInMinutes: 'InProgressTimeoutInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inProgressTimeoutInMinutes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobResponseDataJobFile extends $tea.Model {
  fileUrl: string;
  signMethod: string;
  sign: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      signMethod: 'SignMethod',
      sign: 'Sign',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      signMethod: 'string',
      sign: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobResponseDataTargetConfigTargetDevicesTargetDevices extends $tea.Model {
  productKey: string;
  deviceName: string;
  static names(): { [key: string]: string } {
    return {
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productKey: 'string',
      deviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobResponseDataTargetConfigTargetDevices extends $tea.Model {
  targetDevices: QueryJobResponseDataTargetConfigTargetDevicesTargetDevices[];
  static names(): { [key: string]: string } {
    return {
      targetDevices: 'targetDevices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetDevices: { 'type': 'array', 'itemType': QueryJobResponseDataTargetConfigTargetDevicesTargetDevices },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobResponseDataTargetConfig extends $tea.Model {
  targetGroup: string;
  targetProduct: string;
  targetType: string;
  targetDevices: QueryJobResponseDataTargetConfigTargetDevices;
  static names(): { [key: string]: string } {
    return {
      targetGroup: 'TargetGroup',
      targetProduct: 'TargetProduct',
      targetType: 'TargetType',
      targetDevices: 'TargetDevices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetGroup: 'string',
      targetProduct: 'string',
      targetType: 'string',
      targetDevices: QueryJobResponseDataTargetConfigTargetDevices,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobResponseData extends $tea.Model {
  jobId: string;
  jobName: string;
  utcCreate: string;
  status: string;
  description: string;
  type: string;
  jobDocument: string;
  utcModified: string;
  rolloutConfig: QueryJobResponseDataRolloutConfig;
  timeoutConfig: QueryJobResponseDataTimeoutConfig;
  jobFile: QueryJobResponseDataJobFile;
  targetConfig: QueryJobResponseDataTargetConfig;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      jobName: 'JobName',
      utcCreate: 'UtcCreate',
      status: 'Status',
      description: 'Description',
      type: 'Type',
      jobDocument: 'JobDocument',
      utcModified: 'UtcModified',
      rolloutConfig: 'RolloutConfig',
      timeoutConfig: 'TimeoutConfig',
      jobFile: 'JobFile',
      targetConfig: 'TargetConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      jobName: 'string',
      utcCreate: 'string',
      status: 'string',
      description: 'string',
      type: 'string',
      jobDocument: 'string',
      utcModified: 'string',
      rolloutConfig: QueryJobResponseDataRolloutConfig,
      timeoutConfig: QueryJobResponseDataTimeoutConfig,
      jobFile: QueryJobResponseDataJobFile,
      targetConfig: QueryJobResponseDataTargetConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateFileUploadURLResponseData extends $tea.Model {
  key: string;
  host: string;
  policy: string;
  ossAccessKeyId: string;
  signature: string;
  objectStorage: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      host: 'Host',
      policy: 'Policy',
      ossAccessKeyId: 'OssAccessKeyId',
      signature: 'Signature',
      objectStorage: 'ObjectStorage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      host: 'string',
      policy: 'string',
      ossAccessKeyId: 'string',
      signature: 'string',
      objectStorage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalPropertyDataResponseDataListPropertyInfo extends $tea.Model {
  time: string;
  value: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalPropertyDataResponseDataList extends $tea.Model {
  propertyInfo: QueryDeviceOriginalPropertyDataResponseDataListPropertyInfo[];
  static names(): { [key: string]: string } {
    return {
      propertyInfo: 'PropertyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyInfo: { 'type': 'array', 'itemType': QueryDeviceOriginalPropertyDataResponseDataListPropertyInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalPropertyDataResponseData extends $tea.Model {
  nextValid: boolean;
  nextPageToken: string;
  list: QueryDeviceOriginalPropertyDataResponseDataList;
  static names(): { [key: string]: string } {
    return {
      nextValid: 'NextValid',
      nextPageToken: 'nextPageToken',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextValid: 'boolean',
      nextPageToken: 'string',
      list: QueryDeviceOriginalPropertyDataResponseDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalEventDataResponseDataListEventInfo extends $tea.Model {
  time: string;
  identifier: string;
  name: string;
  eventType: string;
  outputData: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      identifier: 'Identifier',
      name: 'Name',
      eventType: 'EventType',
      outputData: 'OutputData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      identifier: 'string',
      name: 'string',
      eventType: 'string',
      outputData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalEventDataResponseDataList extends $tea.Model {
  eventInfo: QueryDeviceOriginalEventDataResponseDataListEventInfo[];
  static names(): { [key: string]: string } {
    return {
      eventInfo: 'EventInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventInfo: { 'type': 'array', 'itemType': QueryDeviceOriginalEventDataResponseDataListEventInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalEventDataResponseData extends $tea.Model {
  nextPageToken: string;
  nextValid: boolean;
  list: QueryDeviceOriginalEventDataResponseDataList;
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'NextPageToken',
      nextValid: 'NextValid',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'string',
      nextValid: 'boolean',
      list: QueryDeviceOriginalEventDataResponseDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalPropertyStatusResponseDataListPropertyStatusDataInfo extends $tea.Model {
  identifier: string;
  value: string;
  time: number;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      value: 'Value',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      value: 'string',
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalPropertyStatusResponseDataList extends $tea.Model {
  propertyStatusDataInfo: QueryDeviceOriginalPropertyStatusResponseDataListPropertyStatusDataInfo[];
  static names(): { [key: string]: string } {
    return {
      propertyStatusDataInfo: 'PropertyStatusDataInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyStatusDataInfo: { 'type': 'array', 'itemType': QueryDeviceOriginalPropertyStatusResponseDataListPropertyStatusDataInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalPropertyStatusResponseData extends $tea.Model {
  nextValid: boolean;
  nextPageToken: string;
  list: QueryDeviceOriginalPropertyStatusResponseDataList;
  static names(): { [key: string]: string } {
    return {
      nextValid: 'NextValid',
      nextPageToken: 'NextPageToken',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextValid: 'boolean',
      nextPageToken: 'string',
      list: QueryDeviceOriginalPropertyStatusResponseDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalServiceDataResponseDataListServiceInfo extends $tea.Model {
  time: string;
  identifier: string;
  name: string;
  inputData: string;
  outputData: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      identifier: 'Identifier',
      name: 'Name',
      inputData: 'InputData',
      outputData: 'OutputData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      identifier: 'string',
      name: 'string',
      inputData: 'string',
      outputData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalServiceDataResponseDataList extends $tea.Model {
  serviceInfo: QueryDeviceOriginalServiceDataResponseDataListServiceInfo[];
  static names(): { [key: string]: string } {
    return {
      serviceInfo: 'ServiceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceInfo: { 'type': 'array', 'itemType': QueryDeviceOriginalServiceDataResponseDataListServiceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceOriginalServiceDataResponseData extends $tea.Model {
  nextPageToken: string;
  nextValid: boolean;
  list: QueryDeviceOriginalServiceDataResponseDataList;
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'NextPageToken',
      nextValid: 'NextValid',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'string',
      nextValid: 'boolean',
      list: QueryDeviceOriginalServiceDataResponseDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingScriptResponseData extends $tea.Model {
  scriptType: string;
  scriptUrl: string;
  static names(): { [key: string]: string } {
    return {
      scriptType: 'ScriptType',
      scriptUrl: 'ScriptUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scriptType: 'string',
      scriptUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAModuleVersionsByDeviceResponseDataSimpleOTAModuleInfo extends $tea.Model {
  productKey: string;
  deviceName: string;
  iotId: string;
  moduleVersion: string;
  moduleName: string;
  static names(): { [key: string]: string } {
    return {
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
      moduleVersion: 'ModuleVersion',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
      moduleVersion: 'string',
      moduleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAModuleVersionsByDeviceResponseData extends $tea.Model {
  simpleOTAModuleInfo: ListOTAModuleVersionsByDeviceResponseDataSimpleOTAModuleInfo[];
  static names(): { [key: string]: string } {
    return {
      simpleOTAModuleInfo: 'SimpleOTAModuleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      simpleOTAModuleInfo: { 'type': 'array', 'itemType': ListOTAModuleVersionsByDeviceResponseDataSimpleOTAModuleInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceBySQLResponseDataGroups extends $tea.Model {
  groupId: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceBySQLResponseDataTags extends $tea.Model {
  tagName: string;
  tagValue: string;
  static names(): { [key: string]: string } {
    return {
      tagName: 'TagName',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagName: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceBySQLResponseDataOTAModules extends $tea.Model {
  moduleName: string;
  firmwareVersion: string;
  static names(): { [key: string]: string } {
    return {
      moduleName: 'ModuleName',
      firmwareVersion: 'FirmwareVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleName: 'string',
      firmwareVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceBySQLResponseData extends $tea.Model {
  productKey: string;
  deviceName: string;
  nickname: string;
  status: string;
  activeTime: string;
  iotId: string;
  gmtCreate: string;
  gmtModified: string;
  groups: QueryDeviceBySQLResponseDataGroups[];
  tags: QueryDeviceBySQLResponseDataTags[];
  OTAModules: QueryDeviceBySQLResponseDataOTAModules[];
  static names(): { [key: string]: string } {
    return {
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      nickname: 'Nickname',
      status: 'Status',
      activeTime: 'ActiveTime',
      iotId: 'IotId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groups: 'Groups',
      tags: 'Tags',
      OTAModules: 'OTAModules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productKey: 'string',
      deviceName: 'string',
      nickname: 'string',
      status: 'string',
      activeTime: 'string',
      iotId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      groups: { 'type': 'array', 'itemType': QueryDeviceBySQLResponseDataGroups },
      tags: { 'type': 'array', 'itemType': QueryDeviceBySQLResponseDataTags },
      OTAModules: { 'type': 'array', 'itemType': QueryDeviceBySQLResponseDataOTAModules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAModuleByProductResponseData extends $tea.Model {
  productKey: string;
  moduleName: string;
  aliasName: string;
  desc: string;
  gmtCreate: string;
  gmtModified: string;
  static names(): { [key: string]: string } {
    return {
      productKey: 'ProductKey',
      moduleName: 'ModuleName',
      aliasName: 'AliasName',
      desc: 'Desc',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productKey: 'string',
      moduleName: 'string',
      aliasName: 'string',
      desc: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDeviceNameListURLResponseData extends $tea.Model {
  key: string;
  host: string;
  policy: string;
  accessKeyId: string;
  signature: string;
  fileUrl: string;
  utcCreate: string;
  objectStorage: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      host: 'Host',
      policy: 'Policy',
      accessKeyId: 'AccessKeyId',
      signature: 'Signature',
      fileUrl: 'FileUrl',
      utcCreate: 'UtcCreate',
      objectStorage: 'ObjectStorage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      host: 'string',
      policy: 'string',
      accessKeyId: 'string',
      signature: 'string',
      fileUrl: 'string',
      utcCreate: 'string',
      objectStorage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryThingModelExtendConfigPublishedResponseData extends $tea.Model {
  configuration: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'Configuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingModelTslPublishedResponseData extends $tea.Model {
  tslStr: string;
  tslUri: string;
  static names(): { [key: string]: string } {
    return {
      tslStr: 'TslStr',
      tslUri: 'TslUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tslStr: 'string',
      tslUri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryThingModelPublishedResponseData extends $tea.Model {
  thingModelJson: string;
  static names(): { [key: string]: string } {
    return {
      thingModelJson: 'ThingModelJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thingModelJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryThingModelExtendConfigResponseData extends $tea.Model {
  configuration: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'Configuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributedDeviceResponseDataInfoItems extends $tea.Model {
  sourceUid: string;
  targetUid: string;
  productKey: string;
  deviceName: string;
  sourceInstanceId: string;
  targetInstanceId: string;
  gmtCreate: number;
  targetAliyunId: string;
  sourceRegion: string;
  targetRegion: string;
  sourceInstanceName: string;
  targetInstanceName: string;
  gmtModified: number;
  static names(): { [key: string]: string } {
    return {
      sourceUid: 'SourceUid',
      targetUid: 'TargetUid',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      sourceInstanceId: 'SourceInstanceId',
      targetInstanceId: 'TargetInstanceId',
      gmtCreate: 'GmtCreate',
      targetAliyunId: 'TargetAliyunId',
      sourceRegion: 'SourceRegion',
      targetRegion: 'TargetRegion',
      sourceInstanceName: 'SourceInstanceName',
      targetInstanceName: 'TargetInstanceName',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceUid: 'string',
      targetUid: 'string',
      productKey: 'string',
      deviceName: 'string',
      sourceInstanceId: 'string',
      targetInstanceId: 'string',
      gmtCreate: 'number',
      targetAliyunId: 'string',
      sourceRegion: 'string',
      targetRegion: 'string',
      sourceInstanceName: 'string',
      targetInstanceName: 'string',
      gmtModified: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributedDeviceResponseDataInfo extends $tea.Model {
  items: ListDistributedDeviceResponseDataInfoItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListDistributedDeviceResponseDataInfoItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributedDeviceResponseData extends $tea.Model {
  total: number;
  info: ListDistributedDeviceResponseDataInfo;
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      info: 'Info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      info: ListDistributedDeviceResponseDataInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributedProductResponseDataInfoItems extends $tea.Model {
  sourceUid: string;
  targetUid: string;
  productKey: string;
  sourceInstanceId: string;
  targetInstanceId: string;
  gmtCreate: number;
  targetAliyunId: string;
  sourceRegion: string;
  targetRegion: string;
  sourceInstanceName: string;
  targetInstanceName: string;
  static names(): { [key: string]: string } {
    return {
      sourceUid: 'SourceUid',
      targetUid: 'TargetUid',
      productKey: 'ProductKey',
      sourceInstanceId: 'SourceInstanceId',
      targetInstanceId: 'TargetInstanceId',
      gmtCreate: 'GmtCreate',
      targetAliyunId: 'TargetAliyunId',
      sourceRegion: 'SourceRegion',
      targetRegion: 'TargetRegion',
      sourceInstanceName: 'SourceInstanceName',
      targetInstanceName: 'TargetInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceUid: 'string',
      targetUid: 'string',
      productKey: 'string',
      sourceInstanceId: 'string',
      targetInstanceId: 'string',
      gmtCreate: 'number',
      targetAliyunId: 'string',
      sourceRegion: 'string',
      targetRegion: 'string',
      sourceInstanceName: 'string',
      targetInstanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributedProductResponseDataInfo extends $tea.Model {
  items: ListDistributedProductResponseDataInfoItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListDistributedProductResponseDataInfoItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributedProductResponseData extends $tea.Model {
  total: number;
  info: ListDistributedProductResponseDataInfo;
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      info: 'Info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      info: ListDistributedProductResponseDataInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceDeviceDriverResponseDeviceDriverList extends $tea.Model {
  driverId: string;
  iotId: string;
  static names(): { [key: string]: string } {
    return {
      driverId: 'DriverId',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driverId: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceDeviceChannelResponseDeviceChannelList extends $tea.Model {
  channelId: string;
  channelName: string;
  iotId: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      channelName: 'ChannelName',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      channelName: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceDeviceByDriverResponseDataDeviceList extends $tea.Model {
  iotId: string;
  static names(): { [key: string]: string } {
    return {
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceDeviceByDriverResponseData extends $tea.Model {
  total: number;
  pageSize: number;
  currentPage: number;
  deviceList: QueryEdgeInstanceDeviceByDriverResponseDataDeviceList[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      deviceList: 'DeviceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      pageSize: 'number',
      currentPage: 'number',
      deviceList: { 'type': 'array', 'itemType': QueryEdgeInstanceDeviceByDriverResponseDataDeviceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceSceneRuleResponseDataRuleList extends $tea.Model {
  ruleId: string;
  ruleName: string;
  gmtCreate: number;
  status: number;
  isExisted: number;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      gmtCreate: 'GmtCreate',
      status: 'Status',
      isExisted: 'IsExisted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
      ruleName: 'string',
      gmtCreate: 'number',
      status: 'number',
      isExisted: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceSceneRuleResponseData extends $tea.Model {
  total: number;
  pageSize: number;
  currentPage: number;
  ruleList: QueryEdgeInstanceSceneRuleResponseDataRuleList[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      pageSize: 'number',
      currentPage: 'number',
      ruleList: { 'type': 'array', 'itemType': QueryEdgeInstanceSceneRuleResponseDataRuleList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDetailSceneRuleLogResponseDataLogList extends $tea.Model {
  code: string;
  message: string;
  pkDn: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pkDn: 'PkDn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pkDn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDetailSceneRuleLogResponseData extends $tea.Model {
  total: number;
  pageSize: number;
  currentPage: number;
  logList: QueryDetailSceneRuleLogResponseDataLogList[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      logList: 'LogList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      pageSize: 'number',
      currentPage: 'number',
      logList: { 'type': 'array', 'itemType': QueryDetailSceneRuleLogResponseDataLogList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySceneRuleResponseDataRuleList extends $tea.Model {
  ruleId: string;
  gmtCreate: number;
  gmtModified: number;
  ruleName: string;
  ruleDescription: string;
  ruleStatus: number;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      ruleName: 'RuleName',
      ruleDescription: 'RuleDescription',
      ruleStatus: 'RuleStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      ruleName: 'string',
      ruleDescription: 'string',
      ruleStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySceneRuleResponseData extends $tea.Model {
  total: number;
  pageSize: number;
  currentPage: number;
  ruleList: QuerySceneRuleResponseDataRuleList[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      pageSize: 'number',
      currentPage: 'number',
      ruleList: { 'type': 'array', 'itemType': QuerySceneRuleResponseDataRuleList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySummarySceneRuleLogResponseDataLogListLogInfo extends $tea.Model {
  logTime: number;
  result: string;
  traceId: string;
  static names(): { [key: string]: string } {
    return {
      logTime: 'LogTime',
      result: 'Result',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logTime: 'number',
      result: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySummarySceneRuleLogResponseDataLogList extends $tea.Model {
  logInfo: QuerySummarySceneRuleLogResponseDataLogListLogInfo[];
  static names(): { [key: string]: string } {
    return {
      logInfo: 'LogInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logInfo: { 'type': 'array', 'itemType': QuerySummarySceneRuleLogResponseDataLogListLogInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySummarySceneRuleLogResponseData extends $tea.Model {
  total: number;
  pageSize: number;
  currentPage: number;
  logList: QuerySummarySceneRuleLogResponseDataLogList;
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      logList: 'LogList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      pageSize: 'number',
      currentPage: 'number',
      logList: QuerySummarySceneRuleLogResponseDataLogList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneRuleResponseData extends $tea.Model {
  gmtCreate: number;
  gmtModified: number;
  ruleName: string;
  ruleContent: string;
  ruleDescription: string;
  ruleStatus: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      ruleName: 'RuleName',
      ruleContent: 'RuleContent',
      ruleDescription: 'RuleDescription',
      ruleStatus: 'RuleStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      gmtModified: 'number',
      ruleName: 'string',
      ruleContent: 'string',
      ruleDescription: 'string',
      ruleStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeOssPreSignedAddressResponseData extends $tea.Model {
  ossPreSignedAddress: string;
  ossAddress: string;
  static names(): { [key: string]: string } {
    return {
      ossPreSignedAddress: 'OssPreSignedAddress',
      ossAddress: 'OssAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossPreSignedAddress: 'string',
      ossAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeDriverResponseDataDriverList extends $tea.Model {
  driverId: string;
  driverName: string;
  driverProtocol: string;
  runtime: string;
  cpuArch: string;
  type: number;
  isBuiltIn: boolean;
  gmtCreateTimestamp: number;
  gmtModifiedTimestamp: number;
  static names(): { [key: string]: string } {
    return {
      driverId: 'DriverId',
      driverName: 'DriverName',
      driverProtocol: 'DriverProtocol',
      runtime: 'Runtime',
      cpuArch: 'CpuArch',
      type: 'Type',
      isBuiltIn: 'IsBuiltIn',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      gmtModifiedTimestamp: 'GmtModifiedTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driverId: 'string',
      driverName: 'string',
      driverProtocol: 'string',
      runtime: 'string',
      cpuArch: 'string',
      type: 'number',
      isBuiltIn: 'boolean',
      gmtCreateTimestamp: 'number',
      gmtModifiedTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeDriverResponseData extends $tea.Model {
  total: number;
  pageSize: number;
  currentPage: number;
  driverList: QueryEdgeDriverResponseDataDriverList[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      driverList: 'DriverList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      pageSize: 'number',
      currentPage: 'number',
      driverList: { 'type': 'array', 'itemType': QueryEdgeDriverResponseDataDriverList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeDriverResponseDriverList extends $tea.Model {
  driverId: string;
  driverName: string;
  driverProtocol: string;
  runtime: string;
  cpuArch: string;
  type: number;
  isBuiltIn: boolean;
  gmtCreateTimestamp: number;
  gmtModifiedTimestamp: number;
  static names(): { [key: string]: string } {
    return {
      driverId: 'DriverId',
      driverName: 'DriverName',
      driverProtocol: 'DriverProtocol',
      runtime: 'Runtime',
      cpuArch: 'CpuArch',
      type: 'Type',
      isBuiltIn: 'IsBuiltIn',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      gmtModifiedTimestamp: 'GmtModifiedTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driverId: 'string',
      driverName: 'string',
      driverProtocol: 'string',
      runtime: 'string',
      cpuArch: 'string',
      type: 'number',
      isBuiltIn: 'boolean',
      gmtCreateTimestamp: 'number',
      gmtModifiedTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeDriverVersionResponseData extends $tea.Model {
  driverId: string;
  driverVersion: string;
  versionState: string;
  edgeVersion: string;
  description: string;
  sourceConfig: string;
  driverConfig: string;
  containerConfig: string;
  configCheckRule: string;
  gmtCreateTimestamp: number;
  gmtModifiedTimestamp: number;
  argument: string;
  static names(): { [key: string]: string } {
    return {
      driverId: 'DriverId',
      driverVersion: 'DriverVersion',
      versionState: 'VersionState',
      edgeVersion: 'EdgeVersion',
      description: 'Description',
      sourceConfig: 'SourceConfig',
      driverConfig: 'DriverConfig',
      containerConfig: 'ContainerConfig',
      configCheckRule: 'ConfigCheckRule',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      gmtModifiedTimestamp: 'GmtModifiedTimestamp',
      argument: 'Argument',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driverId: 'string',
      driverVersion: 'string',
      versionState: 'string',
      edgeVersion: 'string',
      description: 'string',
      sourceConfig: 'string',
      driverConfig: 'string',
      containerConfig: 'string',
      configCheckRule: 'string',
      gmtCreateTimestamp: 'number',
      gmtModifiedTimestamp: 'number',
      argument: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeDriverVersionResponseDataDriverVersionList extends $tea.Model {
  driverId: string;
  driverVersion: string;
  versionState: string;
  edgeVersion: string;
  description: string;
  sourceConfig: string;
  driverConfig: string;
  containerConfig: string;
  configCheckRule: string;
  gmtCreateTimestamp: number;
  gmtModifiedTimestamp: number;
  argument: string;
  static names(): { [key: string]: string } {
    return {
      driverId: 'DriverId',
      driverVersion: 'DriverVersion',
      versionState: 'VersionState',
      edgeVersion: 'EdgeVersion',
      description: 'Description',
      sourceConfig: 'SourceConfig',
      driverConfig: 'DriverConfig',
      containerConfig: 'ContainerConfig',
      configCheckRule: 'ConfigCheckRule',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      gmtModifiedTimestamp: 'GmtModifiedTimestamp',
      argument: 'Argument',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driverId: 'string',
      driverVersion: 'string',
      versionState: 'string',
      edgeVersion: 'string',
      description: 'string',
      sourceConfig: 'string',
      driverConfig: 'string',
      containerConfig: 'string',
      configCheckRule: 'string',
      gmtCreateTimestamp: 'number',
      gmtModifiedTimestamp: 'number',
      argument: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeDriverVersionResponseData extends $tea.Model {
  total: number;
  pageSize: number;
  currentPage: number;
  driverVersionList: QueryEdgeDriverVersionResponseDataDriverVersionList[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      driverVersionList: 'DriverVersionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      pageSize: 'number',
      currentPage: 'number',
      driverVersionList: { 'type': 'array', 'itemType': QueryEdgeDriverVersionResponseDataDriverVersionList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetDeviceBindStatusResponseData extends $tea.Model {
  iotId: string;
  bindStatus: number;
  static names(): { [key: string]: string } {
    return {
      iotId: 'IotId',
      bindStatus: 'BindStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotId: 'string',
      bindStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAJobByDeviceResponseDataSimpleOTAJobInfoTagsOtaTagDTO extends $tea.Model {
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

export class ListOTAJobByDeviceResponseDataSimpleOTAJobInfoTags extends $tea.Model {
  otaTagDTO: ListOTAJobByDeviceResponseDataSimpleOTAJobInfoTagsOtaTagDTO[];
  static names(): { [key: string]: string } {
    return {
      otaTagDTO: 'OtaTagDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      otaTagDTO: { 'type': 'array', 'itemType': ListOTAJobByDeviceResponseDataSimpleOTAJobInfoTagsOtaTagDTO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAJobByDeviceResponseDataSimpleOTAJobInfo extends $tea.Model {
  jobId: string;
  utcCreate: string;
  utcModified: string;
  productKey: string;
  firmwareId: string;
  utcStartTime: string;
  utcEndTime: string;
  jobStatus: string;
  jobType: string;
  targetSelection: string;
  selectionType: string;
  tags: ListOTAJobByDeviceResponseDataSimpleOTAJobInfoTags;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      utcCreate: 'UtcCreate',
      utcModified: 'UtcModified',
      productKey: 'ProductKey',
      firmwareId: 'FirmwareId',
      utcStartTime: 'UtcStartTime',
      utcEndTime: 'UtcEndTime',
      jobStatus: 'JobStatus',
      jobType: 'JobType',
      targetSelection: 'TargetSelection',
      selectionType: 'SelectionType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      utcCreate: 'string',
      utcModified: 'string',
      productKey: 'string',
      firmwareId: 'string',
      utcStartTime: 'string',
      utcEndTime: 'string',
      jobStatus: 'string',
      jobType: 'string',
      targetSelection: 'string',
      selectionType: 'string',
      tags: ListOTAJobByDeviceResponseDataSimpleOTAJobInfoTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAJobByDeviceResponseData extends $tea.Model {
  simpleOTAJobInfo: ListOTAJobByDeviceResponseDataSimpleOTAJobInfo[];
  static names(): { [key: string]: string } {
    return {
      simpleOTAJobInfo: 'SimpleOTAJobInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      simpleOTAJobInfo: { 'type': 'array', 'itemType': ListOTAJobByDeviceResponseDataSimpleOTAJobInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTATaskByJobResponseDataSimpleOTATaskInfo extends $tea.Model {
  taskId: string;
  utcModified: string;
  productKey: string;
  firmwareId: string;
  taskStatus: string;
  jobId: string;
  productName: string;
  deviceName: string;
  srcVersion: string;
  destVersion: string;
  taskDesc: string;
  progress: string;
  iotId: string;
  utcCreate: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      utcModified: 'UtcModified',
      productKey: 'ProductKey',
      firmwareId: 'FirmwareId',
      taskStatus: 'TaskStatus',
      jobId: 'JobId',
      productName: 'ProductName',
      deviceName: 'DeviceName',
      srcVersion: 'SrcVersion',
      destVersion: 'DestVersion',
      taskDesc: 'TaskDesc',
      progress: 'Progress',
      iotId: 'IotId',
      utcCreate: 'UtcCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      utcModified: 'string',
      productKey: 'string',
      firmwareId: 'string',
      taskStatus: 'string',
      jobId: 'string',
      productName: 'string',
      deviceName: 'string',
      srcVersion: 'string',
      destVersion: 'string',
      taskDesc: 'string',
      progress: 'string',
      iotId: 'string',
      utcCreate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTATaskByJobResponseData extends $tea.Model {
  simpleOTATaskInfo: ListOTATaskByJobResponseDataSimpleOTATaskInfo[];
  static names(): { [key: string]: string } {
    return {
      simpleOTATaskInfo: 'SimpleOTATaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      simpleOTATaskInfo: { 'type': 'array', 'itemType': ListOTATaskByJobResponseDataSimpleOTATaskInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListThingTemplatesResponseData extends $tea.Model {
  categoryKey: string;
  categoryName: string;
  static names(): { [key: string]: string } {
    return {
      categoryKey: 'CategoryKey',
      categoryName: 'CategoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryKey: 'string',
      categoryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListThingModelVersionResponseDataModelVersions extends $tea.Model {
  modelVersion: string;
  description: string;
  gmtCreate: number;
  static names(): { [key: string]: string } {
    return {
      modelVersion: 'ModelVersion',
      description: 'Description',
      gmtCreate: 'GmtCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelVersion: 'string',
      description: 'string',
      gmtCreate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListThingModelVersionResponseData extends $tea.Model {
  modelVersions: ListThingModelVersionResponseDataModelVersions[];
  static names(): { [key: string]: string } {
    return {
      modelVersions: 'ModelVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelVersions: { 'type': 'array', 'itemType': ListThingModelVersionResponseDataModelVersions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingModelTslResponseData extends $tea.Model {
  tslStr: string;
  tslUri: string;
  static names(): { [key: string]: string } {
    return {
      tslStr: 'TslStr',
      tslUri: 'TslUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tslStr: 'string',
      tslUri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryThingModelResponseData extends $tea.Model {
  thingModelJson: string;
  static names(): { [key: string]: string } {
    return {
      thingModelJson: 'ThingModelJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thingModelJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAJobByFirmwareResponseDataSimpleOTAJobInfoTagsOtaTagDTO extends $tea.Model {
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

export class ListOTAJobByFirmwareResponseDataSimpleOTAJobInfoTags extends $tea.Model {
  otaTagDTO: ListOTAJobByFirmwareResponseDataSimpleOTAJobInfoTagsOtaTagDTO[];
  static names(): { [key: string]: string } {
    return {
      otaTagDTO: 'OtaTagDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      otaTagDTO: { 'type': 'array', 'itemType': ListOTAJobByFirmwareResponseDataSimpleOTAJobInfoTagsOtaTagDTO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAJobByFirmwareResponseDataSimpleOTAJobInfo extends $tea.Model {
  jobId: string;
  utcCreate: string;
  utcModified: string;
  productKey: string;
  firmwareId: string;
  utcStartTime: string;
  utcEndTime: string;
  jobStatus: string;
  jobType: string;
  targetSelection: string;
  selectionType: string;
  tags: ListOTAJobByFirmwareResponseDataSimpleOTAJobInfoTags;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      utcCreate: 'UtcCreate',
      utcModified: 'UtcModified',
      productKey: 'ProductKey',
      firmwareId: 'FirmwareId',
      utcStartTime: 'UtcStartTime',
      utcEndTime: 'UtcEndTime',
      jobStatus: 'JobStatus',
      jobType: 'JobType',
      targetSelection: 'TargetSelection',
      selectionType: 'SelectionType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      utcCreate: 'string',
      utcModified: 'string',
      productKey: 'string',
      firmwareId: 'string',
      utcStartTime: 'string',
      utcEndTime: 'string',
      jobStatus: 'string',
      jobType: 'string',
      targetSelection: 'string',
      selectionType: 'string',
      tags: ListOTAJobByFirmwareResponseDataSimpleOTAJobInfoTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAJobByFirmwareResponseData extends $tea.Model {
  simpleOTAJobInfo: ListOTAJobByFirmwareResponseDataSimpleOTAJobInfo[];
  static names(): { [key: string]: string } {
    return {
      simpleOTAJobInfo: 'SimpleOTAJobInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      simpleOTAJobInfo: { 'type': 'array', 'itemType': ListOTAJobByFirmwareResponseDataSimpleOTAJobInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAFirmwareResponseFirmwareInfoSimpleFirmwareInfo extends $tea.Model {
  firmwareName: string;
  firmwareId: string;
  srcVersion: string;
  destVersion: string;
  utcCreate: string;
  utcModified: string;
  status: number;
  firmwareDesc: string;
  firmwareSign: string;
  firmwareSize: number;
  firmwareUrl: string;
  productKey: string;
  signMethod: string;
  productName: string;
  type: number;
  moduleName: string;
  static names(): { [key: string]: string } {
    return {
      firmwareName: 'FirmwareName',
      firmwareId: 'FirmwareId',
      srcVersion: 'SrcVersion',
      destVersion: 'DestVersion',
      utcCreate: 'UtcCreate',
      utcModified: 'UtcModified',
      status: 'Status',
      firmwareDesc: 'FirmwareDesc',
      firmwareSign: 'FirmwareSign',
      firmwareSize: 'FirmwareSize',
      firmwareUrl: 'FirmwareUrl',
      productKey: 'ProductKey',
      signMethod: 'SignMethod',
      productName: 'ProductName',
      type: 'Type',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firmwareName: 'string',
      firmwareId: 'string',
      srcVersion: 'string',
      destVersion: 'string',
      utcCreate: 'string',
      utcModified: 'string',
      status: 'number',
      firmwareDesc: 'string',
      firmwareSign: 'string',
      firmwareSize: 'number',
      firmwareUrl: 'string',
      productKey: 'string',
      signMethod: 'string',
      productName: 'string',
      type: 'number',
      moduleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOTAFirmwareResponseFirmwareInfo extends $tea.Model {
  simpleFirmwareInfo: ListOTAFirmwareResponseFirmwareInfoSimpleFirmwareInfo[];
  static names(): { [key: string]: string } {
    return {
      simpleFirmwareInfo: 'SimpleFirmwareInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      simpleFirmwareInfo: { 'type': 'array', 'itemType': ListOTAFirmwareResponseFirmwareInfoSimpleFirmwareInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceDistributeJobRequestTargetInstanceConfig extends $tea.Model {
  targetInstanceId: string;
  static names(): { [key: string]: string } {
    return {
      targetInstanceId: 'TargetInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceDistributeJobResponseDataJobInfoItemsTargetInstanceConfigsTargetInstanceConfigs extends $tea.Model {
  targetInstanceId: string;
  static names(): { [key: string]: string } {
    return {
      targetInstanceId: 'TargetInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceDistributeJobResponseDataJobInfoItemsTargetInstanceConfigs extends $tea.Model {
  targetInstanceConfigs: ListDeviceDistributeJobResponseDataJobInfoItemsTargetInstanceConfigsTargetInstanceConfigs[];
  static names(): { [key: string]: string } {
    return {
      targetInstanceConfigs: 'targetInstanceConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetInstanceConfigs: { 'type': 'array', 'itemType': ListDeviceDistributeJobResponseDataJobInfoItemsTargetInstanceConfigsTargetInstanceConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceDistributeJobResponseDataJobInfoItems extends $tea.Model {
  gmtCreate: number;
  sourceUid: string;
  targetUid: string;
  jobId: string;
  sourceInstanceId: string;
  productKey: string;
  total: number;
  status: number;
  strategy: number;
  targetInstanceConfigs: ListDeviceDistributeJobResponseDataJobInfoItemsTargetInstanceConfigs;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      sourceUid: 'SourceUid',
      targetUid: 'TargetUid',
      jobId: 'JobId',
      sourceInstanceId: 'SourceInstanceId',
      productKey: 'ProductKey',
      total: 'Total',
      status: 'Status',
      strategy: 'Strategy',
      targetInstanceConfigs: 'TargetInstanceConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      sourceUid: 'string',
      targetUid: 'string',
      jobId: 'string',
      sourceInstanceId: 'string',
      productKey: 'string',
      total: 'number',
      status: 'number',
      strategy: 'number',
      targetInstanceConfigs: ListDeviceDistributeJobResponseDataJobInfoItemsTargetInstanceConfigs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceDistributeJobResponseDataJobInfo extends $tea.Model {
  items: ListDeviceDistributeJobResponseDataJobInfoItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListDeviceDistributeJobResponseDataJobInfoItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceDistributeJobResponseData extends $tea.Model {
  total: number;
  jobInfo: ListDeviceDistributeJobResponseDataJobInfo;
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      jobInfo: 'JobInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      jobInfo: ListDeviceDistributeJobResponseDataJobInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceDistributeJobResponseDataTargetInstanceConfigsTargetInstanceConfigs extends $tea.Model {
  targetInstanceId: string;
  static names(): { [key: string]: string } {
    return {
      targetInstanceId: 'TargetInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceDistributeJobResponseDataTargetInstanceConfigs extends $tea.Model {
  targetInstanceConfigs: QueryDeviceDistributeJobResponseDataTargetInstanceConfigsTargetInstanceConfigs[];
  static names(): { [key: string]: string } {
    return {
      targetInstanceConfigs: 'targetInstanceConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetInstanceConfigs: { 'type': 'array', 'itemType': QueryDeviceDistributeJobResponseDataTargetInstanceConfigsTargetInstanceConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceDistributeJobResponseData extends $tea.Model {
  sourceUid: string;
  targetUid: string;
  sourceInstanceId: string;
  jobId: string;
  productKey: string;
  total: number;
  status: number;
  gmtCreate: number;
  strategy: number;
  targetInstanceConfigs: QueryDeviceDistributeJobResponseDataTargetInstanceConfigs;
  static names(): { [key: string]: string } {
    return {
      sourceUid: 'SourceUid',
      targetUid: 'TargetUid',
      sourceInstanceId: 'SourceInstanceId',
      jobId: 'JobId',
      productKey: 'ProductKey',
      total: 'Total',
      status: 'Status',
      gmtCreate: 'GmtCreate',
      strategy: 'Strategy',
      targetInstanceConfigs: 'TargetInstanceConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceUid: 'string',
      targetUid: 'string',
      sourceInstanceId: 'string',
      jobId: 'string',
      productKey: 'string',
      total: 'number',
      status: 'number',
      gmtCreate: 'number',
      strategy: 'number',
      targetInstanceConfigs: QueryDeviceDistributeJobResponseDataTargetInstanceConfigs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceByStatusResponseDataSimpleDeviceInfo extends $tea.Model {
  productKey: string;
  deviceName: string;
  status: string;
  iotId: string;
  nickname: string;
  gmtCreate: string;
  gmtModified: string;
  utcCreate: string;
  utcModified: string;
  deviceSecret: string;
  static names(): { [key: string]: string } {
    return {
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      status: 'Status',
      iotId: 'IotId',
      nickname: 'Nickname',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      utcCreate: 'UtcCreate',
      utcModified: 'UtcModified',
      deviceSecret: 'DeviceSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productKey: 'string',
      deviceName: 'string',
      status: 'string',
      iotId: 'string',
      nickname: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      utcCreate: 'string',
      utcModified: 'string',
      deviceSecret: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceByStatusResponseData extends $tea.Model {
  simpleDeviceInfo: QueryDeviceByStatusResponseDataSimpleDeviceInfo[];
  static names(): { [key: string]: string } {
    return {
      simpleDeviceInfo: 'SimpleDeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      simpleDeviceInfo: { 'type': 'array', 'itemType': QueryDeviceByStatusResponseDataSimpleDeviceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOTAUploadURLResponseData extends $tea.Model {
  key: string;
  host: string;
  policy: string;
  OSSAccessKeyId: string;
  signature: string;
  firmwareUrl: string;
  utcCreate: string;
  objectStorage: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      host: 'Host',
      policy: 'Policy',
      OSSAccessKeyId: 'OSSAccessKeyId',
      signature: 'Signature',
      firmwareUrl: 'FirmwareUrl',
      utcCreate: 'UtcCreate',
      objectStorage: 'ObjectStorage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      host: 'string',
      policy: 'string',
      OSSAccessKeyId: 'string',
      signature: 'string',
      firmwareUrl: 'string',
      utcCreate: 'string',
      objectStorage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductCertInfoResponseProductCertInfo extends $tea.Model {
  issueModel: number;
  static names(): { [key: string]: string } {
    return {
      issueModel: 'IssueModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issueModel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConsumerGroupStatusResponseClientConnectionStatusListConsumerGroupClientConnectionInfo extends $tea.Model {
  clientId: string;
  clientIpPort: string;
  onlineTime: number;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientIpPort: 'ClientIpPort',
      onlineTime: 'OnlineTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientIpPort: 'string',
      onlineTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConsumerGroupStatusResponseClientConnectionStatusList extends $tea.Model {
  consumerGroupClientConnectionInfo: QueryConsumerGroupStatusResponseClientConnectionStatusListConsumerGroupClientConnectionInfo[];
  static names(): { [key: string]: string } {
    return {
      consumerGroupClientConnectionInfo: 'ConsumerGroupClientConnectionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupClientConnectionInfo: { 'type': 'array', 'itemType': QueryConsumerGroupStatusResponseClientConnectionStatusListConsumerGroupClientConnectionInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConsumerGroupListResponseDataConsumerGroupDTO extends $tea.Model {
  groupId: string;
  groupName: string;
  createTime: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConsumerGroupListResponseData extends $tea.Model {
  consumerGroupDTO: QueryConsumerGroupListResponseDataConsumerGroupDTO[];
  static names(): { [key: string]: string } {
    return {
      consumerGroupDTO: 'ConsumerGroupDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupDTO: { 'type': 'array', 'itemType': QueryConsumerGroupListResponseDataConsumerGroupDTO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConsumerGroupByGroupIdResponseData extends $tea.Model {
  groupId: string;
  groupName: string;
  createTime: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTADynamicUpgradeJobRequestTag extends $tea.Model {
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

export class CreateOTADynamicUpgradeJobResponseData extends $tea.Model {
  jobId: string;
  utcCreate: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      utcCreate: 'UtcCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      utcCreate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTAStaticUpgradeJobRequestTag extends $tea.Model {
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

export class CreateOTAStaticUpgradeJobResponseData extends $tea.Model {
  jobId: string;
  utcCreate: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      utcCreate: 'UtcCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      utcCreate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTAFirmwareResponseData extends $tea.Model {
  firmwareId: string;
  utcCreate: string;
  static names(): { [key: string]: string } {
    return {
      firmwareId: 'FirmwareId',
      utcCreate: 'UtcCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firmwareId: 'string',
      utcCreate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOTAVerifyJobResponseData extends $tea.Model {
  jobId: string;
  utcCreate: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      utcCreate: 'UtcCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      utcCreate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOTAJobResponseDataTagsOtaTagDTO extends $tea.Model {
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

export class QueryOTAJobResponseDataTags extends $tea.Model {
  otaTagDTO: QueryOTAJobResponseDataTagsOtaTagDTO[];
  static names(): { [key: string]: string } {
    return {
      otaTagDTO: 'OtaTagDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      otaTagDTO: { 'type': 'array', 'itemType': QueryOTAJobResponseDataTagsOtaTagDTO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOTAJobResponseDataSrcVersions extends $tea.Model {
  srcVersion: string[];
  static names(): { [key: string]: string } {
    return {
      srcVersion: 'SrcVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      srcVersion: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOTAJobResponseData extends $tea.Model {
  jobId: string;
  utcCreate: string;
  utcModified: string;
  productKey: string;
  firmwareId: string;
  utcStartTime: string;
  utcEndTime: string;
  jobStatus: string;
  jobType: string;
  jobDesc: string;
  name: string;
  utcScheduleTime: string;
  retryInterval: number;
  retryCount: number;
  timeoutInMinutes: number;
  targetSelection: string;
  selectionType: string;
  grayPercent: string;
  maximumPerMinute: number;
  destVersion: string;
  utcScheduleFinishTime: string;
  overwriteMode: number;
  dynamicMode: number;
  tags: QueryOTAJobResponseDataTags;
  srcVersions: QueryOTAJobResponseDataSrcVersions;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      utcCreate: 'UtcCreate',
      utcModified: 'UtcModified',
      productKey: 'ProductKey',
      firmwareId: 'FirmwareId',
      utcStartTime: 'UtcStartTime',
      utcEndTime: 'UtcEndTime',
      jobStatus: 'JobStatus',
      jobType: 'JobType',
      jobDesc: 'JobDesc',
      name: 'Name',
      utcScheduleTime: 'UtcScheduleTime',
      retryInterval: 'RetryInterval',
      retryCount: 'RetryCount',
      timeoutInMinutes: 'TimeoutInMinutes',
      targetSelection: 'TargetSelection',
      selectionType: 'SelectionType',
      grayPercent: 'GrayPercent',
      maximumPerMinute: 'MaximumPerMinute',
      destVersion: 'DestVersion',
      utcScheduleFinishTime: 'UtcScheduleFinishTime',
      overwriteMode: 'OverwriteMode',
      dynamicMode: 'DynamicMode',
      tags: 'Tags',
      srcVersions: 'SrcVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      utcCreate: 'string',
      utcModified: 'string',
      productKey: 'string',
      firmwareId: 'string',
      utcStartTime: 'string',
      utcEndTime: 'string',
      jobStatus: 'string',
      jobType: 'string',
      jobDesc: 'string',
      name: 'string',
      utcScheduleTime: 'string',
      retryInterval: 'number',
      retryCount: 'number',
      timeoutInMinutes: 'number',
      targetSelection: 'string',
      selectionType: 'string',
      grayPercent: 'string',
      maximumPerMinute: 'number',
      destVersion: 'string',
      utcScheduleFinishTime: 'string',
      overwriteMode: 'number',
      dynamicMode: 'number',
      tags: QueryOTAJobResponseDataTags,
      srcVersions: QueryOTAJobResponseDataSrcVersions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOTAFirmwareResponseFirmwareInfo extends $tea.Model {
  firmwareName: string;
  firmwareId: string;
  srcVersion: string;
  destVersion: string;
  utcCreate: string;
  utcModified: string;
  status: number;
  firmwareDesc: string;
  firmwareSign: string;
  firmwareSize: number;
  firmwareUrl: string;
  productKey: string;
  signMethod: string;
  productName: string;
  type: number;
  verifyProgress: number;
  moduleName: string;
  static names(): { [key: string]: string } {
    return {
      firmwareName: 'FirmwareName',
      firmwareId: 'FirmwareId',
      srcVersion: 'SrcVersion',
      destVersion: 'DestVersion',
      utcCreate: 'UtcCreate',
      utcModified: 'UtcModified',
      status: 'Status',
      firmwareDesc: 'FirmwareDesc',
      firmwareSign: 'FirmwareSign',
      firmwareSize: 'FirmwareSize',
      firmwareUrl: 'FirmwareUrl',
      productKey: 'ProductKey',
      signMethod: 'SignMethod',
      productName: 'ProductName',
      type: 'Type',
      verifyProgress: 'VerifyProgress',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firmwareName: 'string',
      firmwareId: 'string',
      srcVersion: 'string',
      destVersion: 'string',
      utcCreate: 'string',
      utcModified: 'string',
      status: 'number',
      firmwareDesc: 'string',
      firmwareSign: 'string',
      firmwareSize: 'number',
      firmwareUrl: 'string',
      productKey: 'string',
      signMethod: 'string',
      productName: 'string',
      type: 'number',
      verifyProgress: 'number',
      moduleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceCertResponseDeviceCertInfo extends $tea.Model {
  status: number;
  certificate: string;
  privateKey: string;
  certSN: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      certificate: 'Certificate',
      privateKey: 'PrivateKey',
      certSN: 'CertSN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      certificate: 'string',
      privateKey: 'string',
      certSN: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryDeviceDetailResponseDataData extends $tea.Model {
  productKey: string;
  productName: string;
  deviceName: string;
  nickname: string;
  deviceSecret: string;
  iotId: string;
  utcCreate: string;
  gmtCreate: string;
  utcActive: string;
  gmtActive: string;
  status: string;
  firmwareVersion: string;
  nodeType: number;
  region: string;
  static names(): { [key: string]: string } {
    return {
      productKey: 'ProductKey',
      productName: 'ProductName',
      deviceName: 'DeviceName',
      nickname: 'Nickname',
      deviceSecret: 'DeviceSecret',
      iotId: 'IotId',
      utcCreate: 'UtcCreate',
      gmtCreate: 'GmtCreate',
      utcActive: 'UtcActive',
      gmtActive: 'GmtActive',
      status: 'Status',
      firmwareVersion: 'FirmwareVersion',
      nodeType: 'NodeType',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productKey: 'string',
      productName: 'string',
      deviceName: 'string',
      nickname: 'string',
      deviceSecret: 'string',
      iotId: 'string',
      utcCreate: 'string',
      gmtCreate: 'string',
      utcActive: 'string',
      gmtActive: 'string',
      status: 'string',
      firmwareVersion: 'string',
      nodeType: 'number',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryDeviceDetailResponseData extends $tea.Model {
  data: BatchQueryDeviceDetailResponseDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': BatchQueryDeviceDetailResponseDataData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeInstanceDeploymentResponseDataTaskListResourceSnapshotList extends $tea.Model {
  gmtCreate: string;
  gmtModified: string;
  gmtCompleted: string;
  snapshotId: string;
  resourceType: string;
  resourceId: string;
  resourceName: string;
  operateType: number;
  stage: number;
  status: number;
  log: string;
  gmtCreateTimestamp: number;
  gmtModifiedTimestamp: number;
  gmtCompletedTimestamp: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      gmtCompleted: 'GmtCompleted',
      snapshotId: 'SnapshotId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      operateType: 'OperateType',
      stage: 'Stage',
      status: 'Status',
      log: 'Log',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      gmtModifiedTimestamp: 'GmtModifiedTimestamp',
      gmtCompletedTimestamp: 'GmtCompletedTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      gmtCompleted: 'string',
      snapshotId: 'string',
      resourceType: 'string',
      resourceId: 'string',
      resourceName: 'string',
      operateType: 'number',
      stage: 'number',
      status: 'number',
      log: 'string',
      gmtCreateTimestamp: 'number',
      gmtModifiedTimestamp: 'number',
      gmtCompletedTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeInstanceDeploymentResponseDataTaskList extends $tea.Model {
  gmtCreate: string;
  gmtModified: string;
  gmtCompleted: string;
  gatewayId: string;
  taskId: string;
  stage: number;
  status: number;
  gmtCreateTimestamp: number;
  gmtModifiedTimestamp: number;
  gmtCompletedTimestamp: number;
  resourceSnapshotList: GetEdgeInstanceDeploymentResponseDataTaskListResourceSnapshotList[];
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      gmtCompleted: 'GmtCompleted',
      gatewayId: 'GatewayId',
      taskId: 'TaskId',
      stage: 'Stage',
      status: 'Status',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      gmtModifiedTimestamp: 'GmtModifiedTimestamp',
      gmtCompletedTimestamp: 'GmtCompletedTimestamp',
      resourceSnapshotList: 'ResourceSnapshotList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      gmtCompleted: 'string',
      gatewayId: 'string',
      taskId: 'string',
      stage: 'number',
      status: 'number',
      gmtCreateTimestamp: 'number',
      gmtModifiedTimestamp: 'number',
      gmtCompletedTimestamp: 'number',
      resourceSnapshotList: { 'type': 'array', 'itemType': GetEdgeInstanceDeploymentResponseDataTaskListResourceSnapshotList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeInstanceDeploymentResponseData extends $tea.Model {
  gmtCreate: string;
  gmtModified: string;
  gmtCompleted: string;
  deploymentId: string;
  description: string;
  status: number;
  type: string;
  gmtCreateTimestamp: number;
  gmtModifiedTimestamp: number;
  gmtCompletedTimestamp: number;
  taskList: GetEdgeInstanceDeploymentResponseDataTaskList[];
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      gmtCompleted: 'GmtCompleted',
      deploymentId: 'DeploymentId',
      description: 'Description',
      status: 'Status',
      type: 'Type',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      gmtModifiedTimestamp: 'GmtModifiedTimestamp',
      gmtCompletedTimestamp: 'GmtCompletedTimestamp',
      taskList: 'TaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      gmtCompleted: 'string',
      deploymentId: 'string',
      description: 'string',
      status: 'number',
      type: 'string',
      gmtCreateTimestamp: 'number',
      gmtModifiedTimestamp: 'number',
      gmtCompletedTimestamp: 'number',
      taskList: { 'type': 'array', 'itemType': GetEdgeInstanceDeploymentResponseDataTaskList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTaskResponseData extends $tea.Model {
  jobId: string;
  jobName: string;
  taskId: string;
  productKey: string;
  deviceName: string;
  iotId: string;
  progress: string;
  utcQueueTime: string;
  utcModified: string;
  statusDetail: string;
  status: string;
  message: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      jobName: 'JobName',
      taskId: 'TaskId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
      progress: 'Progress',
      utcQueueTime: 'UtcQueueTime',
      utcModified: 'UtcModified',
      statusDetail: 'StatusDetail',
      status: 'Status',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      jobName: 'string',
      taskId: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
      progress: 'string',
      utcQueueTime: 'string',
      utcModified: 'string',
      statusDetail: 'string',
      status: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataAPIServiceRequestRequestParam extends $tea.Model {
  name?: string;
  type?: string;
  desc?: string;
  example?: string;
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      desc: 'Desc',
      example: 'Example',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      desc: 'string',
      example: 'string',
      required: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataAPIServiceRequestResponseParam extends $tea.Model {
  name?: string;
  type?: string;
  desc?: string;
  example?: string;
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      desc: 'Desc',
      example: 'Example',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      desc: 'string',
      example: 'string',
      required: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataAPIServiceResponseData extends $tea.Model {
  apiSrn: string;
  createTime: number;
  lastUpdateTime: number;
  static names(): { [key: string]: string } {
    return {
      apiSrn: 'ApiSrn',
      createTime: 'CreateTime',
      lastUpdateTime: 'LastUpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiSrn: 'string',
      createTime: 'number',
      lastUpdateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataAPIServiceDetailResponseDataSqlTemplateDTORequestParamsRequestParams extends $tea.Model {
  name: string;
  type: string;
  desc: string;
  example: string;
  required: boolean;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      desc: 'Desc',
      example: 'Example',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      desc: 'string',
      example: 'string',
      required: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataAPIServiceDetailResponseDataSqlTemplateDTORequestParams extends $tea.Model {
  requestParams: GetDataAPIServiceDetailResponseDataSqlTemplateDTORequestParamsRequestParams[];
  static names(): { [key: string]: string } {
    return {
      requestParams: 'RequestParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParams: { 'type': 'array', 'itemType': GetDataAPIServiceDetailResponseDataSqlTemplateDTORequestParamsRequestParams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataAPIServiceDetailResponseDataSqlTemplateDTOResponseParamsResponseParams extends $tea.Model {
  name: string;
  type: string;
  desc: string;
  example: string;
  required: boolean;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      desc: 'Desc',
      example: 'Example',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      desc: 'string',
      example: 'string',
      required: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataAPIServiceDetailResponseDataSqlTemplateDTOResponseParams extends $tea.Model {
  responseParams: GetDataAPIServiceDetailResponseDataSqlTemplateDTOResponseParamsResponseParams[];
  static names(): { [key: string]: string } {
    return {
      responseParams: 'ResponseParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      responseParams: { 'type': 'array', 'itemType': GetDataAPIServiceDetailResponseDataSqlTemplateDTOResponseParamsResponseParams },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataAPIServiceDetailResponseDataSqlTemplateDTO extends $tea.Model {
  originSql: string;
  templateSql: string;
  requestParams: GetDataAPIServiceDetailResponseDataSqlTemplateDTORequestParams;
  responseParams: GetDataAPIServiceDetailResponseDataSqlTemplateDTOResponseParams;
  static names(): { [key: string]: string } {
    return {
      originSql: 'OriginSql',
      templateSql: 'TemplateSql',
      requestParams: 'RequestParams',
      responseParams: 'ResponseParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originSql: 'string',
      templateSql: 'string',
      requestParams: GetDataAPIServiceDetailResponseDataSqlTemplateDTORequestParams,
      responseParams: GetDataAPIServiceDetailResponseDataSqlTemplateDTOResponseParams,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataAPIServiceDetailResponseData extends $tea.Model {
  apiSrn: string;
  status: number;
  displayName: string;
  apiPath: string;
  createTime: number;
  lastUpdateTime: number;
  dateFormat: string;
  requestMethod: string;
  requestProtocol: string;
  description: string;
  sqlTemplateDTO: GetDataAPIServiceDetailResponseDataSqlTemplateDTO;
  static names(): { [key: string]: string } {
    return {
      apiSrn: 'ApiSrn',
      status: 'Status',
      displayName: 'DisplayName',
      apiPath: 'ApiPath',
      createTime: 'CreateTime',
      lastUpdateTime: 'LastUpdateTime',
      dateFormat: 'DateFormat',
      requestMethod: 'RequestMethod',
      requestProtocol: 'RequestProtocol',
      description: 'Description',
      sqlTemplateDTO: 'SqlTemplateDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiSrn: 'string',
      status: 'number',
      displayName: 'string',
      apiPath: 'string',
      createTime: 'number',
      lastUpdateTime: 'number',
      dateFormat: 'string',
      requestMethod: 'string',
      requestProtocol: 'string',
      description: 'string',
      sqlTemplateDTO: GetDataAPIServiceDetailResponseDataSqlTemplateDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeDataAPIServiceRequestParam extends $tea.Model {
  paramType?: string;
  listParamValue?: string[];
  listParamType?: string;
  paramName?: string;
  paramValue?: string;
  static names(): { [key: string]: string } {
    return {
      paramType: 'ParamType',
      listParamValue: 'ListParamValue',
      listParamType: 'ListParamType',
      paramName: 'ParamName',
      paramValue: 'ParamValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramType: 'string',
      listParamValue: { 'type': 'array', 'itemType': 'string' },
      listParamType: 'string',
      paramName: 'string',
      paramValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeDataAPIServiceResponseDataFieldNameList extends $tea.Model {
  fieldNameList: string[];
  static names(): { [key: string]: string } {
    return {
      fieldNameList: 'FieldNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeDataAPIServiceResponseDataResultList extends $tea.Model {
  resultList: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      resultList: 'ResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultList: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeDataAPIServiceResponseData extends $tea.Model {
  pageNo: number;
  pageSize: number;
  apiSrn: string;
  fieldNameList: InvokeDataAPIServiceResponseDataFieldNameList;
  resultList: InvokeDataAPIServiceResponseDataResultList;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      apiSrn: 'ApiSrn',
      fieldNameList: 'FieldNameList',
      resultList: 'ResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      apiSrn: 'string',
      fieldNameList: InvokeDataAPIServiceResponseDataFieldNameList,
      resultList: InvokeDataAPIServiceResponseDataResultList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEdgeInstanceChannelRequestConfigs extends $tea.Model {
  format: string;
  content: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      content: 'Content',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      content: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceChannelResponseDataChannelListChannelConfigListConfig extends $tea.Model {
  configId: string;
  format: string;
  content: string;
  key: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      format: 'Format',
      content: 'Content',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      format: 'string',
      content: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceChannelResponseDataChannelListChannelConfigList extends $tea.Model {
  config: QueryEdgeInstanceChannelResponseDataChannelListChannelConfigListConfig[];
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'array', 'itemType': QueryEdgeInstanceChannelResponseDataChannelListChannelConfigListConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceChannelResponseDataChannelListChannel extends $tea.Model {
  channelId: string;
  channelName: string;
  gmtCreate: string;
  gmtModified: string;
  gmtCreateTimestamp: number;
  gmtModifiedTimestamp: number;
  configList: QueryEdgeInstanceChannelResponseDataChannelListChannelConfigList;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      channelName: 'ChannelName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      gmtModifiedTimestamp: 'GmtModifiedTimestamp',
      configList: 'ConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      channelName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      gmtCreateTimestamp: 'number',
      gmtModifiedTimestamp: 'number',
      configList: QueryEdgeInstanceChannelResponseDataChannelListChannelConfigList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceChannelResponseDataChannelList extends $tea.Model {
  channel: QueryEdgeInstanceChannelResponseDataChannelListChannel[];
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: { 'type': 'array', 'itemType': QueryEdgeInstanceChannelResponseDataChannelListChannel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceChannelResponseData extends $tea.Model {
  total: number;
  pageSize: number;
  currentPage: number;
  channelList: QueryEdgeInstanceChannelResponseDataChannelList;
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      channelList: 'ChannelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      pageSize: 'number',
      currentPage: 'number',
      channelList: QueryEdgeInstanceChannelResponseDataChannelList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetEdgeInstanceDriverConfigsRequestConfigs extends $tea.Model {
  format: string;
  content: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      content: 'Content',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      content: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEdgeInstanceChannelRequestConfigs extends $tea.Model {
  format: string;
  content: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      content: 'Content',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      content: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceChannelResponseDataChannelConfigListConfig extends $tea.Model {
  configId: string;
  format: string;
  content: string;
  key: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      format: 'Format',
      content: 'Content',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      format: 'string',
      content: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceChannelResponseDataChannelConfigList extends $tea.Model {
  config: BatchGetEdgeInstanceChannelResponseDataChannelConfigListConfig[];
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'array', 'itemType': BatchGetEdgeInstanceChannelResponseDataChannelConfigListConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceChannelResponseDataChannel extends $tea.Model {
  channelId: string;
  channelName: string;
  configList: BatchGetEdgeInstanceChannelResponseDataChannelConfigList;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      channelName: 'ChannelName',
      configList: 'ConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      channelName: 'string',
      configList: BatchGetEdgeInstanceChannelResponseDataChannelConfigList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceChannelResponseData extends $tea.Model {
  channel: BatchGetEdgeInstanceChannelResponseDataChannel[];
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: { 'type': 'array', 'itemType': BatchGetEdgeInstanceChannelResponseDataChannel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetEdgeInstanceDeviceConfigRequestDeviceConfigs extends $tea.Model {
  iotId: string;
  content: string;
  static names(): { [key: string]: string } {
    return {
      iotId: 'IotId',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotId: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceDeviceConfigResponseDeviceConfigListConfig extends $tea.Model {
  format: string;
  content: string;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceDeviceConfigResponseDeviceConfigList extends $tea.Model {
  iotId: string;
  config: BatchGetEdgeInstanceDeviceConfigResponseDeviceConfigListConfig;
  static names(): { [key: string]: string } {
    return {
      iotId: 'IotId',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotId: 'string',
      config: BatchGetEdgeInstanceDeviceConfigResponseDeviceConfigListConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceDriverConfigsResponseDriverConfigListConfigList extends $tea.Model {
  configId: string;
  format: string;
  content: string;
  key: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      format: 'Format',
      content: 'Content',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      format: 'string',
      content: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetEdgeInstanceDriverConfigsResponseDriverConfigList extends $tea.Model {
  driverId: string;
  configList: BatchGetEdgeInstanceDriverConfigsResponseDriverConfigListConfigList[];
  static names(): { [key: string]: string } {
    return {
      driverId: 'DriverId',
      configList: 'ConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driverId: 'string',
      configList: { 'type': 'array', 'itemType': BatchGetEdgeInstanceDriverConfigsResponseDriverConfigListConfigList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoRaNodesTaskRequestDeviceInfo extends $tea.Model {
  devEui?: string;
  pinCode?: string;
  static names(): { [key: string]: string } {
    return {
      devEui: 'DevEui',
      pinCode: 'PinCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devEui: 'string',
      pinCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoraNodesTaskResponseSuccessDevEuis extends $tea.Model {
  successDevEui: string[];
  static names(): { [key: string]: string } {
    return {
      successDevEui: 'SuccessDevEui',
    };
  }

  static types(): { [key: string]: any } {
    return {
      successDevEui: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLoRaJoinPermissionsResponseJoinPermissionsJoinPermission extends $tea.Model {
  joinPermissionId: string;
  joinPermissionName: string;
  joinPermissionType: string;
  ownerAliyunPk: string;
  enabled: boolean;
  classMode: string;
  static names(): { [key: string]: string } {
    return {
      joinPermissionId: 'JoinPermissionId',
      joinPermissionName: 'JoinPermissionName',
      joinPermissionType: 'JoinPermissionType',
      ownerAliyunPk: 'OwnerAliyunPk',
      enabled: 'Enabled',
      classMode: 'ClassMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinPermissionId: 'string',
      joinPermissionName: 'string',
      joinPermissionType: 'string',
      ownerAliyunPk: 'string',
      enabled: 'boolean',
      classMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLoRaJoinPermissionsResponseJoinPermissions extends $tea.Model {
  joinPermission: QueryLoRaJoinPermissionsResponseJoinPermissionsJoinPermission[];
  static names(): { [key: string]: string } {
    return {
      joinPermission: 'JoinPermission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinPermission: { 'type': 'array', 'itemType': QueryLoRaJoinPermissionsResponseJoinPermissionsJoinPermission },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceDriverResponseDataDriverList extends $tea.Model {
  driverId: string;
  driverVersion: string;
  orderId: string;
  gmtCreate: string;
  gmtModified: string;
  static names(): { [key: string]: string } {
    return {
      driverId: 'DriverId',
      driverVersion: 'DriverVersion',
      orderId: 'OrderId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driverId: 'string',
      driverVersion: 'string',
      orderId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceDriverResponseData extends $tea.Model {
  total: number;
  pageSize: number;
  currentPage: number;
  driverList: QueryEdgeInstanceDriverResponseDataDriverList[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      driverList: 'DriverList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      pageSize: 'number',
      currentPage: 'number',
      driverList: { 'type': 'array', 'itemType': QueryEdgeInstanceDriverResponseDataDriverList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateDeviceNicknameRequestDeviceNicknameInfo extends $tea.Model {
  productKey?: string;
  deviceName?: string;
  nickname?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      nickname: 'Nickname',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productKey: 'string',
      deviceName: 'string',
      nickname: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceFileResponseData extends $tea.Model {
  fileId: string;
  name: string;
  size: string;
  utcCreatedOn: string;
  downloadUrl: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      name: 'Name',
      size: 'Size',
      utcCreatedOn: 'UtcCreatedOn',
      downloadUrl: 'DownloadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      name: 'string',
      size: 'string',
      utcCreatedOn: 'string',
      downloadUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceFileListResponseDataFileSummary extends $tea.Model {
  fileId: string;
  name: string;
  size: string;
  utcCreatedOn: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      name: 'Name',
      size: 'Size',
      utcCreatedOn: 'UtcCreatedOn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      name: 'string',
      size: 'string',
      utcCreatedOn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceFileListResponseData extends $tea.Model {
  fileSummary: QueryDeviceFileListResponseDataFileSummary[];
  static names(): { [key: string]: string } {
    return {
      fileSummary: 'FileSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSummary: { 'type': 'array', 'itemType': QueryDeviceFileListResponseDataFileSummary },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodesAddingTaskResponseSuccessDevEuis extends $tea.Model {
  successDevEui: string[];
  static names(): { [key: string]: string } {
    return {
      successDevEui: 'SuccessDevEui',
    };
  }

  static types(): { [key: string]: any } {
    return {
      successDevEui: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeviceDesiredPropertyResponseData extends $tea.Model {
  messageId: string;
  versions: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      versions: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceDesiredPropertyResponseDataListDesiredPropertyInfo extends $tea.Model {
  unit: string;
  identifier: string;
  dataType: string;
  time: string;
  value: string;
  name: string;
  version: number;
  static names(): { [key: string]: string } {
    return {
      unit: 'Unit',
      identifier: 'Identifier',
      dataType: 'DataType',
      time: 'Time',
      value: 'Value',
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unit: 'string',
      identifier: 'string',
      dataType: 'string',
      time: 'string',
      value: 'string',
      name: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceDesiredPropertyResponseDataList extends $tea.Model {
  desiredPropertyInfo: QueryDeviceDesiredPropertyResponseDataListDesiredPropertyInfo[];
  static names(): { [key: string]: string } {
    return {
      desiredPropertyInfo: 'DesiredPropertyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desiredPropertyInfo: { 'type': 'array', 'itemType': QueryDeviceDesiredPropertyResponseDataListDesiredPropertyInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceDesiredPropertyResponseData extends $tea.Model {
  list: QueryDeviceDesiredPropertyResponseDataList;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: QueryDeviceDesiredPropertyResponseDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceHistoricDeploymentResponseDataDeploymentList extends $tea.Model {
  gmtCreate: string;
  gmtModified: string;
  gmtCompleted: string;
  deploymentId: string;
  description: string;
  status: number;
  type: string;
  gmtCreateTimestamp: number;
  gmtModifiedTimestamp: number;
  gmtCompletedTimestamp: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      gmtCompleted: 'GmtCompleted',
      deploymentId: 'DeploymentId',
      description: 'Description',
      status: 'Status',
      type: 'Type',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      gmtModifiedTimestamp: 'GmtModifiedTimestamp',
      gmtCompletedTimestamp: 'GmtCompletedTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      gmtCompleted: 'string',
      deploymentId: 'string',
      description: 'string',
      status: 'number',
      type: 'string',
      gmtCreateTimestamp: 'number',
      gmtModifiedTimestamp: 'number',
      gmtCompletedTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceHistoricDeploymentResponseData extends $tea.Model {
  total: number;
  pageSize: number;
  currentPage: number;
  deploymentList: QueryEdgeInstanceHistoricDeploymentResponseDataDeploymentList[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      deploymentList: 'DeploymentList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      pageSize: 'number',
      currentPage: 'number',
      deploymentList: { 'type': 'array', 'itemType': QueryEdgeInstanceHistoricDeploymentResponseDataDeploymentList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductTagsRequestProductTag extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductTagsResponseInvalidProductTagsProductTag extends $tea.Model {
  tagKey: string;
  tagValue: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductTagsResponseInvalidProductTags extends $tea.Model {
  productTag: CreateProductTagsResponseInvalidProductTagsProductTag[];
  static names(): { [key: string]: string } {
    return {
      productTag: 'ProductTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productTag: { 'type': 'array', 'itemType': CreateProductTagsResponseInvalidProductTagsProductTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductTagsRequestProductTag extends $tea.Model {
  tagValue?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductTagsResponseInvalidProductTagsProductTag extends $tea.Model {
  tagKey: string;
  tagValue: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductTagsResponseInvalidProductTags extends $tea.Model {
  productTag: UpdateProductTagsResponseInvalidProductTagsProductTag[];
  static names(): { [key: string]: string } {
    return {
      productTag: 'ProductTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productTag: { 'type': 'array', 'itemType': UpdateProductTagsResponseInvalidProductTagsProductTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductTagsResponseDataProductTag extends $tea.Model {
  tagKey: string;
  tagValue: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductTagsResponseData extends $tea.Model {
  productTag: ListProductTagsResponseDataProductTag[];
  static names(): { [key: string]: string } {
    return {
      productTag: 'ProductTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productTag: { 'type': 'array', 'itemType': ListProductTagsResponseDataProductTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductByTagsRequestProductTag extends $tea.Model {
  tagKey: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductByTagsResponseProductInfosProductInfo extends $tea.Model {
  productName: string;
  productKey: string;
  createTime: number;
  description: string;
  nodeType: number;
  static names(): { [key: string]: string } {
    return {
      productName: 'ProductName',
      productKey: 'ProductKey',
      createTime: 'CreateTime',
      description: 'Description',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productName: 'string',
      productKey: 'string',
      createTime: 'number',
      description: 'string',
      nodeType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductByTagsResponseProductInfos extends $tea.Model {
  productInfo: ListProductByTagsResponseProductInfosProductInfo[];
  static names(): { [key: string]: string } {
    return {
      productInfo: 'ProductInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productInfo: { 'type': 'array', 'itemType': ListProductByTagsResponseProductInfosProductInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupByTagsRequestTag extends $tea.Model {
  tagKey: string;
  tagValue: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupByTagsResponseDataDeviceGroup extends $tea.Model {
  groupId: string;
  groupName: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupByTagsResponseData extends $tea.Model {
  deviceGroup: QueryDeviceGroupByTagsResponseDataDeviceGroup[];
  static names(): { [key: string]: string } {
    return {
      deviceGroup: 'DeviceGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroup: { 'type': 'array', 'itemType': QueryDeviceGroupByTagsResponseDataDeviceGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddThingTopoRequestTopoAddItem extends $tea.Model {
  productKey: string;
  deviceName: string;
  sign: string;
  signMethod: string;
  timestamp?: string;
  clientId?: string;
  static names(): { [key: string]: string } {
    return {
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      sign: 'Sign',
      signMethod: 'SignMethod',
      timestamp: 'Timestamp',
      clientId: 'ClientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productKey: 'string',
      deviceName: 'string',
      sign: 'string',
      signMethod: 'string',
      timestamp: 'string',
      clientId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceListByDeviceGroupResponseDataSimpleDeviceInfo extends $tea.Model {
  productName: string;
  productKey: string;
  deviceName: string;
  iotId: string;
  static names(): { [key: string]: string } {
    return {
      productName: 'ProductName',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productName: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceListByDeviceGroupResponseData extends $tea.Model {
  simpleDeviceInfo: QueryDeviceListByDeviceGroupResponseDataSimpleDeviceInfo[];
  static names(): { [key: string]: string } {
    return {
      simpleDeviceInfo: 'SimpleDeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      simpleDeviceInfo: { 'type': 'array', 'itemType': QueryDeviceListByDeviceGroupResponseDataSimpleDeviceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertiesDataResponsePropertyDataInfosPropertyDataInfoListPropertyInfo extends $tea.Model {
  time: number;
  value: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertiesDataResponsePropertyDataInfosPropertyDataInfoList extends $tea.Model {
  propertyInfo: QueryDevicePropertiesDataResponsePropertyDataInfosPropertyDataInfoListPropertyInfo[];
  static names(): { [key: string]: string } {
    return {
      propertyInfo: 'PropertyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyInfo: { 'type': 'array', 'itemType': QueryDevicePropertiesDataResponsePropertyDataInfosPropertyDataInfoListPropertyInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertiesDataResponsePropertyDataInfosPropertyDataInfo extends $tea.Model {
  identifier: string;
  list: QueryDevicePropertiesDataResponsePropertyDataInfosPropertyDataInfoList;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      list: QueryDevicePropertiesDataResponsePropertyDataInfosPropertyDataInfoList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertiesDataResponsePropertyDataInfos extends $tea.Model {
  propertyDataInfo: QueryDevicePropertiesDataResponsePropertyDataInfosPropertyDataInfo[];
  static names(): { [key: string]: string } {
    return {
      propertyDataInfo: 'PropertyDataInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyDataInfo: { 'type': 'array', 'itemType': QueryDevicePropertiesDataResponsePropertyDataInfosPropertyDataInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeInstanceResponseData extends $tea.Model {
  instanceId: string;
  name: string;
  tags: string;
  type: string;
  spec: number;
  bizEnable: boolean;
  gmtCreate: string;
  gmtModified: string;
  roleArn: string;
  roleName: string;
  roleAttachTime: string;
  latestDeploymentStatus: number;
  latestDeploymentType: string;
  gmtCreateTimestamp: number;
  gmtModifiedTimestamp: number;
  roleAttachTimestamp: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      tags: 'Tags',
      type: 'Type',
      spec: 'Spec',
      bizEnable: 'BizEnable',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      roleArn: 'RoleArn',
      roleName: 'RoleName',
      roleAttachTime: 'RoleAttachTime',
      latestDeploymentStatus: 'LatestDeploymentStatus',
      latestDeploymentType: 'LatestDeploymentType',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      gmtModifiedTimestamp: 'GmtModifiedTimestamp',
      roleAttachTimestamp: 'RoleAttachTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      tags: 'string',
      type: 'string',
      spec: 'number',
      bizEnable: 'boolean',
      gmtCreate: 'string',
      gmtModified: 'string',
      roleArn: 'string',
      roleName: 'string',
      roleAttachTime: 'string',
      latestDeploymentStatus: 'number',
      latestDeploymentType: 'string',
      gmtCreateTimestamp: 'number',
      gmtModifiedTimestamp: 'number',
      roleAttachTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceGatewayResponseGatewayList extends $tea.Model {
  productKey: string;
  deviceName: string;
  iotId: string;
  edgeVersion: string;
  static names(): { [key: string]: string } {
    return {
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
      edgeVersion: 'EdgeVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
      edgeVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceDeviceResponseDataDeviceList extends $tea.Model {
  iotId: string;
  productKey: string;
  deviceName: string;
  driverId: string;
  static names(): { [key: string]: string } {
    return {
      iotId: 'IotId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      driverId: 'DriverId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotId: 'string',
      productKey: 'string',
      deviceName: 'string',
      driverId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceDeviceResponseData extends $tea.Model {
  total: number;
  pageSize: number;
  currentPage: number;
  deviceList: QueryEdgeInstanceDeviceResponseDataDeviceList[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      deviceList: 'DeviceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      pageSize: 'number',
      currentPage: 'number',
      deviceList: { 'type': 'array', 'itemType': QueryEdgeInstanceDeviceResponseDataDeviceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceResponseDataInstanceList extends $tea.Model {
  instanceId: string;
  name: string;
  tags: string;
  type: number;
  gmtCreate: string;
  gmtModified: string;
  roleArn: string;
  roleName: string;
  roleAttachTime: string;
  spec: number;
  bizEnable: boolean;
  latestDeploymentStatus: number;
  latestDeploymentType: string;
  gmtCreateTimestamp: number;
  gmtModifiedTimestamp: number;
  roleAttachTimestamp: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      tags: 'Tags',
      type: 'Type',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      roleArn: 'RoleArn',
      roleName: 'RoleName',
      roleAttachTime: 'RoleAttachTime',
      spec: 'Spec',
      bizEnable: 'BizEnable',
      latestDeploymentStatus: 'LatestDeploymentStatus',
      latestDeploymentType: 'LatestDeploymentType',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      gmtModifiedTimestamp: 'GmtModifiedTimestamp',
      roleAttachTimestamp: 'RoleAttachTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      tags: 'string',
      type: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      roleArn: 'string',
      roleName: 'string',
      roleAttachTime: 'string',
      spec: 'number',
      bizEnable: 'boolean',
      latestDeploymentStatus: 'number',
      latestDeploymentType: 'string',
      gmtCreateTimestamp: 'number',
      gmtModifiedTimestamp: 'number',
      roleAttachTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEdgeInstanceResponseData extends $tea.Model {
  total: number;
  pageSize: number;
  currentPage: number;
  instanceList: QueryEdgeInstanceResponseDataInstanceList[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      instanceList: 'InstanceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      pageSize: 'number',
      currentPage: 'number',
      instanceList: { 'type': 'array', 'itemType': QueryEdgeInstanceResponseDataInstanceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySuperDeviceGroupResponseDataGroupInfo extends $tea.Model {
  groupId: string;
  groupName: string;
  groupDesc: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
      groupDesc: 'GroupDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
      groupDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySuperDeviceGroupResponseData extends $tea.Model {
  groupInfo: QuerySuperDeviceGroupResponseDataGroupInfo[];
  static names(): { [key: string]: string } {
    return {
      groupInfo: 'GroupInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupInfo: { 'type': 'array', 'itemType': QuerySuperDeviceGroupResponseDataGroupInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceByTagsRequestTag extends $tea.Model {
  tagKey: string;
  tagValue: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceByTagsResponseDataSimpleDeviceInfo extends $tea.Model {
  productName: string;
  productKey: string;
  deviceName: string;
  iotId: string;
  static names(): { [key: string]: string } {
    return {
      productName: 'ProductName',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productName: 'string',
      productKey: 'string',
      deviceName: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceByTagsResponseData extends $tea.Model {
  simpleDeviceInfo: QueryDeviceByTagsResponseDataSimpleDeviceInfo[];
  static names(): { [key: string]: string } {
    return {
      simpleDeviceInfo: 'SimpleDeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      simpleDeviceInfo: { 'type': 'array', 'itemType': QueryDeviceByTagsResponseDataSimpleDeviceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAppDeviceListRequestTagList extends $tea.Model {
  tagName?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagName: 'TagName',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagName: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAppDeviceListResponseDataData extends $tea.Model {
  productName: string;
  productKey: string;
  deviceName: string;
  nodeType: number;
  status: string;
  activeTime: string;
  lastOnlineTime: string;
  createTime: string;
  childDeviceCount: number;
  utcActiveTime: string;
  utcLastOnlineTime: string;
  utcCreateTime: string;
  static names(): { [key: string]: string } {
    return {
      productName: 'ProductName',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      nodeType: 'NodeType',
      status: 'Status',
      activeTime: 'ActiveTime',
      lastOnlineTime: 'LastOnlineTime',
      createTime: 'CreateTime',
      childDeviceCount: 'ChildDeviceCount',
      utcActiveTime: 'UtcActiveTime',
      utcLastOnlineTime: 'UtcLastOnlineTime',
      utcCreateTime: 'UtcCreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productName: 'string',
      productKey: 'string',
      deviceName: 'string',
      nodeType: 'number',
      status: 'string',
      activeTime: 'string',
      lastOnlineTime: 'string',
      createTime: 'string',
      childDeviceCount: 'number',
      utcActiveTime: 'string',
      utcLastOnlineTime: 'string',
      utcCreateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAppDeviceListResponseData extends $tea.Model {
  data: QueryAppDeviceListResponseDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryAppDeviceListResponseDataData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupTagListResponseDataGroupTagInfo extends $tea.Model {
  tagKey: string;
  tagValue: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupTagListResponseData extends $tea.Model {
  groupTagInfo: QueryDeviceGroupTagListResponseDataGroupTagInfo[];
  static names(): { [key: string]: string } {
    return {
      groupTagInfo: 'GroupTagInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupTagInfo: { 'type': 'array', 'itemType': QueryDeviceGroupTagListResponseDataGroupTagInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupListResponseDataGroupInfo extends $tea.Model {
  groupId: string;
  utcCreate: string;
  groupName: string;
  groupDesc: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      utcCreate: 'UtcCreate',
      groupName: 'GroupName',
      groupDesc: 'GroupDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      utcCreate: 'string',
      groupName: 'string',
      groupDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupListResponseData extends $tea.Model {
  groupInfo: QueryDeviceGroupListResponseDataGroupInfo[];
  static names(): { [key: string]: string } {
    return {
      groupInfo: 'GroupInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupInfo: { 'type': 'array', 'itemType': QueryDeviceGroupListResponseDataGroupInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupInfoResponseData extends $tea.Model {
  groupId: string;
  utcCreate: string;
  groupName: string;
  groupDesc: string;
  deviceCount: number;
  deviceActive: number;
  deviceOnline: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      utcCreate: 'UtcCreate',
      groupName: 'GroupName',
      groupDesc: 'GroupDesc',
      deviceCount: 'DeviceCount',
      deviceActive: 'DeviceActive',
      deviceOnline: 'DeviceOnline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      utcCreate: 'string',
      groupName: 'string',
      groupDesc: 'string',
      deviceCount: 'number',
      deviceActive: 'number',
      deviceOnline: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupByDeviceResponseGroupInfosGroupInfo extends $tea.Model {
  groupId: string;
  groupName: string;
  utcCreate: string;
  groupDesc: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
      utcCreate: 'UtcCreate',
      groupDesc: 'GroupDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
      utcCreate: 'string',
      groupDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceGroupByDeviceResponseGroupInfos extends $tea.Model {
  groupInfo: QueryDeviceGroupByDeviceResponseGroupInfosGroupInfo[];
  static names(): { [key: string]: string } {
    return {
      groupInfo: 'GroupInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupInfo: { 'type': 'array', 'itemType': QueryDeviceGroupByDeviceResponseGroupInfosGroupInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceGroupResponseData extends $tea.Model {
  groupId: string;
  utcCreate: string;
  groupName: string;
  groupDesc: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      utcCreate: 'UtcCreate',
      groupName: 'GroupName',
      groupDesc: 'GroupDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      utcCreate: 'string',
      groupName: 'string',
      groupDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteDeviceGroupRelationsRequestDevice extends $tea.Model {
  productKey: string;
  deviceName: string;
  static names(): { [key: string]: string } {
    return {
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productKey: 'string',
      deviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddDeviceGroupRelationsRequestDevice extends $tea.Model {
  productKey: string;
  deviceName: string;
  static names(): { [key: string]: string } {
    return {
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productKey: 'string',
      deviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPageByApplyIdResponseApplyDeviceListApplyDeviceInfo extends $tea.Model {
  deviceId: string;
  deviceName: string;
  deviceSecret: string;
  iotId: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      deviceName: 'DeviceName',
      deviceSecret: 'DeviceSecret',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      deviceName: 'string',
      deviceSecret: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPageByApplyIdResponseApplyDeviceList extends $tea.Model {
  applyDeviceInfo: QueryPageByApplyIdResponseApplyDeviceListApplyDeviceInfo[];
  static names(): { [key: string]: string } {
    return {
      applyDeviceInfo: 'ApplyDeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyDeviceInfo: { 'type': 'array', 'itemType': QueryPageByApplyIdResponseApplyDeviceListApplyDeviceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceResponseDataDeviceInfo extends $tea.Model {
  deviceId: string;
  deviceSecret: string;
  productKey: string;
  deviceStatus: string;
  deviceName: string;
  deviceType: string;
  gmtCreate: string;
  gmtModified: string;
  utcCreate: string;
  utcModified: string;
  iotId: string;
  nickname: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      deviceSecret: 'DeviceSecret',
      productKey: 'ProductKey',
      deviceStatus: 'DeviceStatus',
      deviceName: 'DeviceName',
      deviceType: 'DeviceType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      utcCreate: 'UtcCreate',
      utcModified: 'UtcModified',
      iotId: 'IotId',
      nickname: 'Nickname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      deviceSecret: 'string',
      productKey: 'string',
      deviceStatus: 'string',
      deviceName: 'string',
      deviceType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      utcCreate: 'string',
      utcModified: 'string',
      iotId: 'string',
      nickname: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceResponseData extends $tea.Model {
  deviceInfo: QueryDeviceResponseDataDeviceInfo[];
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: { 'type': 'array', 'itemType': QueryDeviceResponseDataDeviceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTopicRouteTableResponseDstTopics extends $tea.Model {
  topic: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topic: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTopicReverseRouteTableResponseSrcTopics extends $tea.Model {
  topic: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topic: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTopicRouteTableResponseFailureTopics extends $tea.Model {
  topic: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topic: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTopicRouteTableResponseFailureTopics extends $tea.Model {
  topic: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topic: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetDeviceStateResponseDeviceStatusListDeviceStatus extends $tea.Model {
  deviceId: string;
  deviceName: string;
  status: string;
  asAddress: string;
  lastOnlineTime: string;
  iotId: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      deviceName: 'DeviceName',
      status: 'Status',
      asAddress: 'AsAddress',
      lastOnlineTime: 'LastOnlineTime',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      deviceName: 'string',
      status: 'string',
      asAddress: 'string',
      lastOnlineTime: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetDeviceStateResponseDeviceStatusList extends $tea.Model {
  deviceStatus: BatchGetDeviceStateResponseDeviceStatusListDeviceStatus[];
  static names(): { [key: string]: string } {
    return {
      deviceStatus: 'DeviceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceStatus: { 'type': 'array', 'itemType': BatchGetDeviceStateResponseDeviceStatusListDeviceStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductTopicResponseDataProductTopicInfo extends $tea.Model {
  productKey: string;
  topicShortName: string;
  operation: string;
  desc: string;
  id: string;
  static names(): { [key: string]: string } {
    return {
      productKey: 'ProductKey',
      topicShortName: 'TopicShortName',
      operation: 'Operation',
      desc: 'Desc',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productKey: 'string',
      topicShortName: 'string',
      operation: 'string',
      desc: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductTopicResponseData extends $tea.Model {
  productTopicInfo: QueryProductTopicResponseDataProductTopicInfo[];
  static names(): { [key: string]: string } {
    return {
      productTopicInfo: 'ProductTopicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productTopicInfo: { 'type': 'array', 'itemType': QueryProductTopicResponseDataProductTopicInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PubRequestUserProp extends $tea.Model {
  key?: string;
  value?: string;
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

export class ListRuleActionsResponseRuleActionListRuleActionInfo extends $tea.Model {
  id: number;
  ruleId: number;
  type: string;
  configuration: string;
  errorActionFlag: boolean;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ruleId: 'RuleId',
      type: 'Type',
      configuration: 'Configuration',
      errorActionFlag: 'ErrorActionFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      ruleId: 'number',
      type: 'string',
      configuration: 'string',
      errorActionFlag: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleActionsResponseRuleActionList extends $tea.Model {
  ruleActionInfo: ListRuleActionsResponseRuleActionListRuleActionInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleActionInfo: 'RuleActionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleActionInfo: { 'type': 'array', 'itemType': ListRuleActionsResponseRuleActionListRuleActionInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleResponseDataRuleInfo extends $tea.Model {
  id: number;
  select: string;
  topic: string;
  shortTopic: string;
  where: string;
  status: string;
  createUserId: number;
  productKey: string;
  name: string;
  dataType: string;
  ruleDesc: string;
  created: string;
  utcCreated: string;
  modified: string;
  utcModified: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      select: 'Select',
      topic: 'Topic',
      shortTopic: 'ShortTopic',
      where: 'Where',
      status: 'Status',
      createUserId: 'CreateUserId',
      productKey: 'ProductKey',
      name: 'Name',
      dataType: 'DataType',
      ruleDesc: 'RuleDesc',
      created: 'Created',
      utcCreated: 'UtcCreated',
      modified: 'Modified',
      utcModified: 'UtcModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      select: 'string',
      topic: 'string',
      shortTopic: 'string',
      where: 'string',
      status: 'string',
      createUserId: 'number',
      productKey: 'string',
      name: 'string',
      dataType: 'string',
      ruleDesc: 'string',
      created: 'string',
      utcCreated: 'string',
      modified: 'string',
      utcModified: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRuleResponseData extends $tea.Model {
  ruleInfo: ListRuleResponseDataRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleInfo: 'RuleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleInfo: { 'type': 'array', 'itemType': ListRuleResponseDataRuleInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleActionResponseRuleActionInfo extends $tea.Model {
  id: number;
  ruleId: number;
  type: string;
  configuration: string;
  errorActionFlag: boolean;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ruleId: 'RuleId',
      type: 'Type',
      configuration: 'Configuration',
      errorActionFlag: 'ErrorActionFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      ruleId: 'number',
      type: 'string',
      configuration: 'string',
      errorActionFlag: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseRuleInfo extends $tea.Model {
  id: number;
  select: string;
  topic: string;
  shortTopic: string;
  where: string;
  status: string;
  createUserId: number;
  productKey: string;
  name: string;
  ruleDesc: string;
  dataType: string;
  created: string;
  utcCreated: string;
  modified: string;
  utcModified: string;
  topicType: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      select: 'Select',
      topic: 'Topic',
      shortTopic: 'ShortTopic',
      where: 'Where',
      status: 'Status',
      createUserId: 'CreateUserId',
      productKey: 'ProductKey',
      name: 'Name',
      ruleDesc: 'RuleDesc',
      dataType: 'DataType',
      created: 'Created',
      utcCreated: 'UtcCreated',
      modified: 'Modified',
      utcModified: 'UtcModified',
      topicType: 'TopicType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      select: 'string',
      topic: 'string',
      shortTopic: 'string',
      where: 'string',
      status: 'string',
      createUserId: 'number',
      productKey: 'string',
      name: 'string',
      ruleDesc: 'string',
      dataType: 'string',
      created: 'string',
      utcCreated: 'string',
      modified: 'string',
      utcModified: 'string',
      topicType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBatchRegisterDeviceStatusResponseDataValidList extends $tea.Model {
  name: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBatchRegisterDeviceStatusResponseDataInvalidList extends $tea.Model {
  name: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBatchRegisterDeviceStatusResponseData extends $tea.Model {
  status: string;
  validList: QueryBatchRegisterDeviceStatusResponseDataValidList;
  invalidList: QueryBatchRegisterDeviceStatusResponseDataInvalidList;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      validList: 'ValidList',
      invalidList: 'InvalidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      validList: QueryBatchRegisterDeviceStatusResponseDataValidList,
      invalidList: QueryBatchRegisterDeviceStatusResponseDataInvalidList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayBySubDeviceResponseData extends $tea.Model {
  productKey: string;
  productName: string;
  deviceSecret: string;
  deviceName: string;
  firmwareVersion: string;
  gmtCreate: string;
  utcCreate: string;
  gmtActive: string;
  utcActive: string;
  gmtOnline: string;
  utcOnline: string;
  status: string;
  ipAddress: string;
  nodeType: string;
  region: string;
  iotId: string;
  static names(): { [key: string]: string } {
    return {
      productKey: 'ProductKey',
      productName: 'ProductName',
      deviceSecret: 'DeviceSecret',
      deviceName: 'DeviceName',
      firmwareVersion: 'FirmwareVersion',
      gmtCreate: 'GmtCreate',
      utcCreate: 'UtcCreate',
      gmtActive: 'GmtActive',
      utcActive: 'UtcActive',
      gmtOnline: 'GmtOnline',
      utcOnline: 'UtcOnline',
      status: 'Status',
      ipAddress: 'IpAddress',
      nodeType: 'NodeType',
      region: 'region',
      iotId: 'iotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productKey: 'string',
      productName: 'string',
      deviceSecret: 'string',
      deviceName: 'string',
      firmwareVersion: 'string',
      gmtCreate: 'string',
      utcCreate: 'string',
      gmtActive: 'string',
      utcActive: 'string',
      gmtOnline: 'string',
      utcOnline: 'string',
      status: 'string',
      ipAddress: 'string',
      nodeType: 'string',
      region: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyAddThingTopoResponseData extends $tea.Model {
  messageId: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingTopoResponseDataListDeviceInfo extends $tea.Model {
  iotId: string;
  productKey: string;
  deviceName: string;
  static names(): { [key: string]: string } {
    return {
      iotId: 'IotId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotId: 'string',
      productKey: 'string',
      deviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingTopoResponseDataList extends $tea.Model {
  deviceInfo: GetThingTopoResponseDataListDeviceInfo[];
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'deviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: { 'type': 'array', 'itemType': GetThingTopoResponseDataListDeviceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThingTopoResponseData extends $tea.Model {
  total: number;
  currentPage: number;
  pageSize: number;
  pageCount: number;
  list: GetThingTopoResponseDataList;
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      currentPage: 'number',
      pageSize: 'number',
      pageCount: 'number',
      list: GetThingTopoResponseDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertyStatusResponseDataListPropertyStatusInfo extends $tea.Model {
  unit: string;
  identifier: string;
  dataType: string;
  time: string;
  value: string;
  name: string;
  static names(): { [key: string]: string } {
    return {
      unit: 'Unit',
      identifier: 'Identifier',
      dataType: 'DataType',
      time: 'Time',
      value: 'Value',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unit: 'string',
      identifier: 'string',
      dataType: 'string',
      time: 'string',
      value: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertyStatusResponseDataList extends $tea.Model {
  propertyStatusInfo: QueryDevicePropertyStatusResponseDataListPropertyStatusInfo[];
  static names(): { [key: string]: string } {
    return {
      propertyStatusInfo: 'PropertyStatusInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyStatusInfo: { 'type': 'array', 'itemType': QueryDevicePropertyStatusResponseDataListPropertyStatusInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertyStatusResponseData extends $tea.Model {
  list: QueryDevicePropertyStatusResponseDataList;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: QueryDevicePropertyStatusResponseDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertyDataResponseDataListPropertyInfo extends $tea.Model {
  time: string;
  value: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertyDataResponseDataList extends $tea.Model {
  propertyInfo: QueryDevicePropertyDataResponseDataListPropertyInfo[];
  static names(): { [key: string]: string } {
    return {
      propertyInfo: 'PropertyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyInfo: { 'type': 'array', 'itemType': QueryDevicePropertyDataResponseDataListPropertyInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicePropertyDataResponseData extends $tea.Model {
  nextValid: boolean;
  nextTime: number;
  list: QueryDevicePropertyDataResponseDataList;
  static names(): { [key: string]: string } {
    return {
      nextValid: 'NextValid',
      nextTime: 'NextTime',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextValid: 'boolean',
      nextTime: 'number',
      list: QueryDevicePropertyDataResponseDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRegisterDeviceWithApplyIdResponseData extends $tea.Model {
  applyId: number;
  static names(): { [key: string]: string } {
    return {
      applyId: 'ApplyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRegisterDeviceResponseData extends $tea.Model {
  applyId: number;
  static names(): { [key: string]: string } {
    return {
      applyId: 'ApplyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCheckDeviceNamesRequestDeviceNameList extends $tea.Model {
  deviceName?: string;
  deviceNickname?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      deviceNickname: 'DeviceNickname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      deviceNickname: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCheckDeviceNamesResponseDataInvalidDeviceNameList extends $tea.Model {
  invalidDeviceName: string[];
  static names(): { [key: string]: string } {
    return {
      invalidDeviceName: 'InvalidDeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invalidDeviceName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCheckDeviceNamesResponseDataInvalidDeviceNicknameList extends $tea.Model {
  invalidDeviceNickname: string[];
  static names(): { [key: string]: string } {
    return {
      invalidDeviceNickname: 'InvalidDeviceNickname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invalidDeviceNickname: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCheckDeviceNamesResponseData extends $tea.Model {
  applyId: number;
  invalidDeviceNameList: BatchCheckDeviceNamesResponseDataInvalidDeviceNameList;
  invalidDeviceNicknameList: BatchCheckDeviceNamesResponseDataInvalidDeviceNicknameList;
  static names(): { [key: string]: string } {
    return {
      applyId: 'ApplyId',
      invalidDeviceNameList: 'InvalidDeviceNameList',
      invalidDeviceNicknameList: 'InvalidDeviceNicknameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      invalidDeviceNameList: BatchCheckDeviceNamesResponseDataInvalidDeviceNameList,
      invalidDeviceNicknameList: BatchCheckDeviceNamesResponseDataInvalidDeviceNicknameList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDevicePropertyResponseData extends $tea.Model {
  messageId: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceResponseData extends $tea.Model {
  iotId: string;
  productKey: string;
  deviceName: string;
  deviceSecret: string;
  devEui: string;
  joinEui: string;
  nickname: string;
  static names(): { [key: string]: string } {
    return {
      iotId: 'IotId',
      productKey: 'ProductKey',
      deviceName: 'DeviceName',
      deviceSecret: 'DeviceSecret',
      devEui: 'DevEui',
      joinEui: 'JoinEui',
      nickname: 'Nickname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotId: 'string',
      productKey: 'string',
      deviceName: 'string',
      deviceSecret: 'string',
      devEui: 'string',
      joinEui: 'string',
      nickname: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductListResponseDataListProductInfo extends $tea.Model {
  gmtCreate: number;
  dataFormat: number;
  description: string;
  deviceCount: number;
  nodeType: number;
  productKey: string;
  productName: string;
  authType: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      dataFormat: 'DataFormat',
      description: 'Description',
      deviceCount: 'DeviceCount',
      nodeType: 'NodeType',
      productKey: 'ProductKey',
      productName: 'ProductName',
      authType: 'AuthType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      dataFormat: 'number',
      description: 'string',
      deviceCount: 'number',
      nodeType: 'number',
      productKey: 'string',
      productName: 'string',
      authType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductListResponseDataList extends $tea.Model {
  productInfo: QueryProductListResponseDataListProductInfo[];
  static names(): { [key: string]: string } {
    return {
      productInfo: 'ProductInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productInfo: { 'type': 'array', 'itemType': QueryProductListResponseDataListProductInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductListResponseData extends $tea.Model {
  currentPage: number;
  pageCount: number;
  pageSize: number;
  total: number;
  list: QueryProductListResponseDataList;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageCount: 'PageCount',
      pageSize: 'PageSize',
      total: 'Total',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageCount: 'number',
      pageSize: 'number',
      total: 'number',
      list: QueryProductListResponseDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryProductResponseData extends $tea.Model {
  gmtCreate: number;
  dataFormat: number;
  description: string;
  deviceCount: number;
  nodeType: number;
  productKey: string;
  productName: string;
  productSecret: string;
  categoryName: string;
  categoryKey: string;
  aliyunCommodityCode: string;
  id2: boolean;
  protocolType: string;
  productStatus: string;
  owner: boolean;
  netType: number;
  authType: string;
  validateType: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      dataFormat: 'DataFormat',
      description: 'Description',
      deviceCount: 'DeviceCount',
      nodeType: 'NodeType',
      productKey: 'ProductKey',
      productName: 'ProductName',
      productSecret: 'ProductSecret',
      categoryName: 'CategoryName',
      categoryKey: 'CategoryKey',
      aliyunCommodityCode: 'AliyunCommodityCode',
      id2: 'Id2',
      protocolType: 'ProtocolType',
      productStatus: 'ProductStatus',
      owner: 'Owner',
      netType: 'NetType',
      authType: 'AuthType',
      validateType: 'ValidateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      dataFormat: 'number',
      description: 'string',
      deviceCount: 'number',
      nodeType: 'number',
      productKey: 'string',
      productName: 'string',
      productSecret: 'string',
      categoryName: 'string',
      categoryKey: 'string',
      aliyunCommodityCode: 'string',
      id2: 'boolean',
      protocolType: 'string',
      productStatus: 'string',
      owner: 'boolean',
      netType: 'number',
      authType: 'string',
      validateType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatisticsResponseData extends $tea.Model {
  deviceCount: number;
  onlineCount: number;
  activeCount: number;
  static names(): { [key: string]: string } {
    return {
      deviceCount: 'deviceCount',
      onlineCount: 'onlineCount',
      activeCount: 'activeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCount: 'number',
      onlineCount: 'number',
      activeCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceServiceDataResponseDataListServiceInfo extends $tea.Model {
  time: string;
  identifier: string;
  name: string;
  inputData: string;
  outputData: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      identifier: 'Identifier',
      name: 'Name',
      inputData: 'InputData',
      outputData: 'OutputData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      identifier: 'string',
      name: 'string',
      inputData: 'string',
      outputData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceServiceDataResponseDataList extends $tea.Model {
  serviceInfo: QueryDeviceServiceDataResponseDataListServiceInfo[];
  static names(): { [key: string]: string } {
    return {
      serviceInfo: 'ServiceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceInfo: { 'type': 'array', 'itemType': QueryDeviceServiceDataResponseDataListServiceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceServiceDataResponseData extends $tea.Model {
  nextTime: number;
  nextValid: boolean;
  list: QueryDeviceServiceDataResponseDataList;
  static names(): { [key: string]: string } {
    return {
      nextTime: 'NextTime',
      nextValid: 'NextValid',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextTime: 'number',
      nextValid: 'boolean',
      list: QueryDeviceServiceDataResponseDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventDataResponseDataListEventInfo extends $tea.Model {
  time: string;
  identifier: string;
  name: string;
  eventType: string;
  outputData: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      identifier: 'Identifier',
      name: 'Name',
      eventType: 'EventType',
      outputData: 'OutputData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      identifier: 'string',
      name: 'string',
      eventType: 'string',
      outputData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventDataResponseDataList extends $tea.Model {
  eventInfo: QueryDeviceEventDataResponseDataListEventInfo[];
  static names(): { [key: string]: string } {
    return {
      eventInfo: 'EventInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventInfo: { 'type': 'array', 'itemType': QueryDeviceEventDataResponseDataListEventInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceEventDataResponseData extends $tea.Model {
  nextTime: number;
  nextValid: boolean;
  list: QueryDeviceEventDataResponseDataList;
  static names(): { [key: string]: string } {
    return {
      nextTime: 'NextTime',
      nextValid: 'NextValid',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextTime: 'number',
      nextValid: 'boolean',
      list: QueryDeviceEventDataResponseDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceDetailResponseData extends $tea.Model {
  iotId: string;
  productKey: string;
  productName: string;
  deviceName: string;
  deviceSecret: string;
  firmwareVersion: string;
  gmtCreate: string;
  utcCreate: string;
  gmtActive: string;
  utcActive: string;
  gmtOnline: string;
  utcOnline: string;
  status: string;
  ipAddress: string;
  nodeType: number;
  region: string;
  owner: boolean;
  nickname: string;
  static names(): { [key: string]: string } {
    return {
      iotId: 'IotId',
      productKey: 'ProductKey',
      productName: 'ProductName',
      deviceName: 'DeviceName',
      deviceSecret: 'DeviceSecret',
      firmwareVersion: 'FirmwareVersion',
      gmtCreate: 'GmtCreate',
      utcCreate: 'UtcCreate',
      gmtActive: 'GmtActive',
      utcActive: 'UtcActive',
      gmtOnline: 'GmtOnline',
      utcOnline: 'UtcOnline',
      status: 'Status',
      ipAddress: 'IpAddress',
      nodeType: 'NodeType',
      region: 'Region',
      owner: 'Owner',
      nickname: 'Nickname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotId: 'string',
      productKey: 'string',
      productName: 'string',
      deviceName: 'string',
      deviceSecret: 'string',
      firmwareVersion: 'string',
      gmtCreate: 'string',
      utcCreate: 'string',
      gmtActive: 'string',
      utcActive: 'string',
      gmtOnline: 'string',
      utcOnline: 'string',
      status: 'string',
      ipAddress: 'string',
      nodeType: 'number',
      region: 'string',
      owner: 'boolean',
      nickname: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeThingServiceResponseData extends $tea.Model {
  result: string;
  messageId: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceStatusResponseData extends $tea.Model {
  status: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductResponseData extends $tea.Model {
  dataFormat: number;
  description: string;
  nodeType: number;
  productKey: string;
  productName: string;
  aliyunCommodityCode: string;
  id2: boolean;
  protocolType: string;
  authType: string;
  productSecret: string;
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      description: 'Description',
      nodeType: 'NodeType',
      productKey: 'ProductKey',
      productName: 'ProductName',
      aliyunCommodityCode: 'AliyunCommodityCode',
      id2: 'Id2',
      protocolType: 'ProtocolType',
      authType: 'AuthType',
      productSecret: 'ProductSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'number',
      description: 'string',
      nodeType: 'number',
      productKey: 'string',
      productName: 'string',
      aliyunCommodityCode: 'string',
      id2: 'boolean',
      protocolType: 'string',
      authType: 'string',
      productSecret: 'string',
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
      'ap-northeast-2-pop': "iot.ap-northeast-1.aliyuncs.com",
      'ap-south-1': "iot.ap-northeast-1.aliyuncs.com",
      'ap-southeast-2': "iot.ap-northeast-1.aliyuncs.com",
      'ap-southeast-3': "iot.ap-northeast-1.aliyuncs.com",
      'ap-southeast-5': "iot.ap-northeast-1.aliyuncs.com",
      'cn-beijing': "iot.aliyuncs.com",
      'cn-beijing-finance-1': "iot.aliyuncs.com",
      'cn-beijing-finance-pop': "iot.aliyuncs.com",
      'cn-beijing-gov-1': "iot.aliyuncs.com",
      'cn-beijing-nu16-b01': "iot.aliyuncs.com",
      'cn-chengdu': "iot.aliyuncs.com",
      'cn-edge-1': "iot.aliyuncs.com",
      'cn-fujian': "iot.aliyuncs.com",
      'cn-haidian-cm12-c01': "iot.aliyuncs.com",
      'cn-hangzhou-bj-b01': "iot.aliyuncs.com",
      'cn-hangzhou-finance': "iot.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "iot.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "iot.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "iot.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "iot.aliyuncs.com",
      'cn-hangzhou-test-306': "iot.aliyuncs.com",
      'cn-hongkong': "iot.aliyuncs.com",
      'cn-hongkong-finance-pop': "iot.aliyuncs.com",
      'cn-huhehaote': "iot.aliyuncs.com",
      'cn-north-2-gov-1': "iot.aliyuncs.com",
      'cn-qingdao': "iot.aliyuncs.com",
      'cn-qingdao-nebula': "iot.aliyuncs.com",
      'cn-shanghai-et15-b01': "iot.aliyuncs.com",
      'cn-shanghai-et2-b01': "iot.aliyuncs.com",
      'cn-shanghai-finance-1': "iot.aliyuncs.com",
      'cn-shanghai-inner': "iot.aliyuncs.com",
      'cn-shanghai-internal-test-1': "iot.aliyuncs.com",
      'cn-shenzhen': "iot.aliyuncs.com",
      'cn-shenzhen-finance-1': "iot.aliyuncs.com",
      'cn-shenzhen-inner': "iot.aliyuncs.com",
      'cn-shenzhen-st4-d01': "iot.aliyuncs.com",
      'cn-shenzhen-su18-b01': "iot.aliyuncs.com",
      'cn-wuhan': "iot.aliyuncs.com",
      'cn-yushanfang': "iot.aliyuncs.com",
      'cn-zhangbei-na61-b01': "iot.aliyuncs.com",
      'cn-zhangjiakou': "iot.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "iot.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "iot.aliyuncs.com",
      'eu-west-1': "iot.ap-northeast-1.aliyuncs.com",
      'eu-west-1-oxs': "iot.ap-northeast-1.aliyuncs.com",
      'me-east-1': "iot.ap-northeast-1.aliyuncs.com",
      'rus-west-1-pop': "iot.ap-northeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("iot", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  async listAnalyticsDataWithOptions(request: ListAnalyticsDataRequest, runtime: $Util.RuntimeOptions): Promise<ListAnalyticsDataResponse> {
    Util.validateModel(request);
    return $tea.cast<ListAnalyticsDataResponse>(await this.doRequest("ListAnalyticsData", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new ListAnalyticsDataResponse({}));
  }

  async listAnalyticsData(request: ListAnalyticsDataRequest): Promise<ListAnalyticsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAnalyticsDataWithOptions(request, runtime);
  }

  async batchBindDevicesIntoProjectWithOptions(request: BatchBindDevicesIntoProjectRequest, runtime: $Util.RuntimeOptions): Promise<BatchBindDevicesIntoProjectResponse> {
    Util.validateModel(request);
    return $tea.cast<BatchBindDevicesIntoProjectResponse>(await this.doRequest("BatchBindDevicesIntoProject", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new BatchBindDevicesIntoProjectResponse({}));
  }

  async batchBindDevicesIntoProject(request: BatchBindDevicesIntoProjectRequest): Promise<BatchBindDevicesIntoProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchBindDevicesIntoProjectWithOptions(request, runtime);
  }

  async batchBindProductsIntoProjectWithOptions(request: BatchBindProductsIntoProjectRequest, runtime: $Util.RuntimeOptions): Promise<BatchBindProductsIntoProjectResponse> {
    Util.validateModel(request);
    return $tea.cast<BatchBindProductsIntoProjectResponse>(await this.doRequest("BatchBindProductsIntoProject", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new BatchBindProductsIntoProjectResponse({}));
  }

  async batchBindProductsIntoProject(request: BatchBindProductsIntoProjectRequest): Promise<BatchBindProductsIntoProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchBindProductsIntoProjectWithOptions(request, runtime);
  }

  async batchUnbindProjectDevicesWithOptions(request: BatchUnbindProjectDevicesRequest, runtime: $Util.RuntimeOptions): Promise<BatchUnbindProjectDevicesResponse> {
    Util.validateModel(request);
    return $tea.cast<BatchUnbindProjectDevicesResponse>(await this.doRequest("BatchUnbindProjectDevices", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new BatchUnbindProjectDevicesResponse({}));
  }

  async batchUnbindProjectDevices(request: BatchUnbindProjectDevicesRequest): Promise<BatchUnbindProjectDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUnbindProjectDevicesWithOptions(request, runtime);
  }

  async batchUnbindProjectProductsWithOptions(request: BatchUnbindProjectProductsRequest, runtime: $Util.RuntimeOptions): Promise<BatchUnbindProjectProductsResponse> {
    Util.validateModel(request);
    return $tea.cast<BatchUnbindProjectProductsResponse>(await this.doRequest("BatchUnbindProjectProducts", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new BatchUnbindProjectProductsResponse({}));
  }

  async batchUnbindProjectProducts(request: BatchUnbindProjectProductsRequest): Promise<BatchUnbindProjectProductsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUnbindProjectProductsWithOptions(request, runtime);
  }

  async syncSpeechByCombinationWithOptions(request: SyncSpeechByCombinationRequest, runtime: $Util.RuntimeOptions): Promise<SyncSpeechByCombinationResponse> {
    Util.validateModel(request);
    return $tea.cast<SyncSpeechByCombinationResponse>(await this.doRequest("SyncSpeechByCombination", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new SyncSpeechByCombinationResponse({}));
  }

  async syncSpeechByCombination(request: SyncSpeechByCombinationRequest): Promise<SyncSpeechByCombinationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncSpeechByCombinationWithOptions(request, runtime);
  }

  async openIotServiceWithOptions(request: OpenIotServiceRequest, runtime: $Util.RuntimeOptions): Promise<OpenIotServiceResponse> {
    Util.validateModel(request);
    return $tea.cast<OpenIotServiceResponse>(await this.doRequest("OpenIotService", "HTTPS", "POST", "2018-01-20", "AK,APP,PrivateKey,BearerToken", null, $tea.toMap(request), runtime), new OpenIotServiceResponse({}));
  }

  async openIotService(request: OpenIotServiceRequest): Promise<OpenIotServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openIotServiceWithOptions(request, runtime);
  }

  async createRulengDistributeJobWithOptions(request: CreateRulengDistributeJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateRulengDistributeJobResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateRulengDistributeJobResponse>(await this.doRequest("CreateRulengDistributeJob", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CreateRulengDistributeJobResponse({}));
  }

  async createRulengDistributeJob(request: CreateRulengDistributeJobRequest): Promise<CreateRulengDistributeJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRulengDistributeJobWithOptions(request, runtime);
  }

  async listTaskByPageWithOptions(tmp: ListTaskByPageRequest, runtime: $Util.RuntimeOptions): Promise<ListTaskByPageResponse> {
    Util.validateModel(tmp);
    let request = new ListTaskByPageShrinkRequest({ });
    RPCUtil.convert(tmp, request);
    if (!Util.isUnset(tmp.device)) {
      request.deviceShrink = Util.toJSONString(tmp.device);
    }

    return $tea.cast<ListTaskByPageResponse>(await this.doRequest("ListTaskByPage", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new ListTaskByPageResponse({}));
  }

  async listTaskByPage(request: ListTaskByPageRequest): Promise<ListTaskByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTaskByPageWithOptions(request, runtime);
  }

  async listTaskWithOptions(tmp: ListTaskRequest, runtime: $Util.RuntimeOptions): Promise<ListTaskResponse> {
    Util.validateModel(tmp);
    let request = new ListTaskShrinkRequest({ });
    RPCUtil.convert(tmp, request);
    if (!Util.isUnset(tmp.device)) {
      request.deviceShrink = Util.toJSONString(tmp.device);
    }

    return $tea.cast<ListTaskResponse>(await this.doRequest("ListTask", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new ListTaskResponse({}));
  }

  async listTask(request: ListTaskRequest): Promise<ListTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTaskWithOptions(request, runtime);
  }

  async queryJobStatisticsWithOptions(request: QueryJobStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<QueryJobStatisticsResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryJobStatisticsResponse>(await this.doRequest("QueryJobStatistics", "HTTPS", "GET", "2018-01-20", "AK", $tea.toMap(request), null, runtime), new QueryJobStatisticsResponse({}));
  }

  async queryJobStatistics(request: QueryJobStatisticsRequest): Promise<QueryJobStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryJobStatisticsWithOptions(request, runtime);
  }

  async deleteJobWithOptions(request: DeleteJobRequest, runtime: $Util.RuntimeOptions): Promise<DeleteJobResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteJobResponse>(await this.doRequest("DeleteJob", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new DeleteJobResponse({}));
  }

  async deleteJob(request: DeleteJobRequest): Promise<DeleteJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteJobWithOptions(request, runtime);
  }

  async cancelJobWithOptions(request: CancelJobRequest, runtime: $Util.RuntimeOptions): Promise<CancelJobResponse> {
    Util.validateModel(request);
    return $tea.cast<CancelJobResponse>(await this.doRequest("CancelJob", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CancelJobResponse({}));
  }

  async cancelJob(request: CancelJobRequest): Promise<CancelJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelJobWithOptions(request, runtime);
  }

  async listJobWithOptions(request: ListJobRequest, runtime: $Util.RuntimeOptions): Promise<ListJobResponse> {
    Util.validateModel(request);
    return $tea.cast<ListJobResponse>(await this.doRequest("ListJob", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new ListJobResponse({}));
  }

  async listJob(request: ListJobRequest): Promise<ListJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJobWithOptions(request, runtime);
  }

  async queryJobWithOptions(request: QueryJobRequest, runtime: $Util.RuntimeOptions): Promise<QueryJobResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryJobResponse>(await this.doRequest("QueryJob", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryJobResponse({}));
  }

  async queryJob(request: QueryJobRequest): Promise<QueryJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryJobWithOptions(request, runtime);
  }

  async updateJobWithOptions(tmp: UpdateJobRequest, runtime: $Util.RuntimeOptions): Promise<UpdateJobResponse> {
    Util.validateModel(tmp);
    let request = new UpdateJobShrinkRequest({ });
    RPCUtil.convert(tmp, request);
    if (!Util.isUnset(tmp.timeoutConfig)) {
      request.timeoutConfigShrink = Util.toJSONString(tmp.timeoutConfig);
    }

    if (!Util.isUnset(tmp.rolloutConfig)) {
      request.rolloutConfigShrink = Util.toJSONString(tmp.rolloutConfig);
    }

    return $tea.cast<UpdateJobResponse>(await this.doRequest("UpdateJob", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new UpdateJobResponse({}));
  }

  async updateJob(request: UpdateJobRequest): Promise<UpdateJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateJobWithOptions(request, runtime);
  }

  async createJobWithOptions(tmp: CreateJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateJobResponse> {
    Util.validateModel(tmp);
    let request = new CreateJobShrinkRequest({ });
    RPCUtil.convert(tmp, request);
    if (!Util.isUnset(tmp.jobFile)) {
      request.jobFileShrink = Util.toJSONString(tmp.jobFile);
    }

    if (!Util.isUnset(tmp.timeoutConfig)) {
      request.timeoutConfigShrink = Util.toJSONString(tmp.timeoutConfig);
    }

    if (!Util.isUnset(tmp.rolloutConfig)) {
      request.rolloutConfigShrink = Util.toJSONString(tmp.rolloutConfig);
    }

    if (!Util.isUnset(tmp.targetConfig)) {
      request.targetConfigShrink = Util.toJSONString(tmp.targetConfig);
    }

    return $tea.cast<CreateJobResponse>(await this.doRequest("CreateJob", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CreateJobResponse({}));
  }

  async createJob(request: CreateJobRequest): Promise<CreateJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createJobWithOptions(request, runtime);
  }

  async generateFileUploadURLWithOptions(request: GenerateFileUploadURLRequest, runtime: $Util.RuntimeOptions): Promise<GenerateFileUploadURLResponse> {
    Util.validateModel(request);
    return $tea.cast<GenerateFileUploadURLResponse>(await this.doRequest("GenerateFileUploadURL", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new GenerateFileUploadURLResponse({}));
  }

  async generateFileUploadURL(request: GenerateFileUploadURLRequest): Promise<GenerateFileUploadURLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateFileUploadURLWithOptions(request, runtime);
  }

  async createProductDistributeJobWithOptions(request: CreateProductDistributeJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateProductDistributeJobResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateProductDistributeJobResponse>(await this.doRequest("CreateProductDistributeJob", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CreateProductDistributeJobResponse({}));
  }

  async createProductDistributeJob(request: CreateProductDistributeJobRequest): Promise<CreateProductDistributeJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProductDistributeJobWithOptions(request, runtime);
  }

  async queryDeviceOriginalPropertyDataWithOptions(request: QueryDeviceOriginalPropertyDataRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceOriginalPropertyDataResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryDeviceOriginalPropertyDataResponse>(await this.doRequest("QueryDeviceOriginalPropertyData", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryDeviceOriginalPropertyDataResponse({}));
  }

  async queryDeviceOriginalPropertyData(request: QueryDeviceOriginalPropertyDataRequest): Promise<QueryDeviceOriginalPropertyDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceOriginalPropertyDataWithOptions(request, runtime);
  }

  async queryDeviceOriginalEventDataWithOptions(request: QueryDeviceOriginalEventDataRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceOriginalEventDataResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryDeviceOriginalEventDataResponse>(await this.doRequest("QueryDeviceOriginalEventData", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryDeviceOriginalEventDataResponse({}));
  }

  async queryDeviceOriginalEventData(request: QueryDeviceOriginalEventDataRequest): Promise<QueryDeviceOriginalEventDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceOriginalEventDataWithOptions(request, runtime);
  }

  async queryDeviceOriginalPropertyStatusWithOptions(request: QueryDeviceOriginalPropertyStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceOriginalPropertyStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryDeviceOriginalPropertyStatusResponse>(await this.doRequest("QueryDeviceOriginalPropertyStatus", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryDeviceOriginalPropertyStatusResponse({}));
  }

  async queryDeviceOriginalPropertyStatus(request: QueryDeviceOriginalPropertyStatusRequest): Promise<QueryDeviceOriginalPropertyStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceOriginalPropertyStatusWithOptions(request, runtime);
  }

  async queryDeviceOriginalServiceDataWithOptions(request: QueryDeviceOriginalServiceDataRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceOriginalServiceDataResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryDeviceOriginalServiceDataResponse>(await this.doRequest("QueryDeviceOriginalServiceData", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryDeviceOriginalServiceDataResponse({}));
  }

  async queryDeviceOriginalServiceData(request: QueryDeviceOriginalServiceDataRequest): Promise<QueryDeviceOriginalServiceDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceOriginalServiceDataWithOptions(request, runtime);
  }

  async createThingScriptWithOptions(request: CreateThingScriptRequest, runtime: $Util.RuntimeOptions): Promise<CreateThingScriptResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateThingScriptResponse>(await this.doRequest("CreateThingScript", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CreateThingScriptResponse({}));
  }

  async createThingScript(request: CreateThingScriptRequest): Promise<CreateThingScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createThingScriptWithOptions(request, runtime);
  }

  async updateThingScriptWithOptions(request: UpdateThingScriptRequest, runtime: $Util.RuntimeOptions): Promise<UpdateThingScriptResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateThingScriptResponse>(await this.doRequest("UpdateThingScript", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new UpdateThingScriptResponse({}));
  }

  async updateThingScript(request: UpdateThingScriptRequest): Promise<UpdateThingScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateThingScriptWithOptions(request, runtime);
  }

  async getThingScriptWithOptions(request: GetThingScriptRequest, runtime: $Util.RuntimeOptions): Promise<GetThingScriptResponse> {
    Util.validateModel(request);
    return $tea.cast<GetThingScriptResponse>(await this.doRequest("GetThingScript", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new GetThingScriptResponse({}));
  }

  async getThingScript(request: GetThingScriptRequest): Promise<GetThingScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getThingScriptWithOptions(request, runtime);
  }

  async listOTAModuleVersionsByDeviceWithOptions(request: ListOTAModuleVersionsByDeviceRequest, runtime: $Util.RuntimeOptions): Promise<ListOTAModuleVersionsByDeviceResponse> {
    Util.validateModel(request);
    return $tea.cast<ListOTAModuleVersionsByDeviceResponse>(await this.doRequest("ListOTAModuleVersionsByDevice", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new ListOTAModuleVersionsByDeviceResponse({}));
  }

  async listOTAModuleVersionsByDevice(request: ListOTAModuleVersionsByDeviceRequest): Promise<ListOTAModuleVersionsByDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOTAModuleVersionsByDeviceWithOptions(request, runtime);
  }

  async batchPubWithOptions(request: BatchPubRequest, runtime: $Util.RuntimeOptions): Promise<BatchPubResponse> {
    Util.validateModel(request);
    return $tea.cast<BatchPubResponse>(await this.doRequest("BatchPub", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new BatchPubResponse({}));
  }

  async batchPub(request: BatchPubRequest): Promise<BatchPubResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchPubWithOptions(request, runtime);
  }

  async speechByCombinationWithOptions(request: SpeechByCombinationRequest, runtime: $Util.RuntimeOptions): Promise<SpeechByCombinationResponse> {
    Util.validateModel(request);
    return $tea.cast<SpeechByCombinationResponse>(await this.doRequest("SpeechByCombination", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new SpeechByCombinationResponse({}));
  }

  async speechByCombination(request: SpeechByCombinationRequest): Promise<SpeechByCombinationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.speechByCombinationWithOptions(request, runtime);
  }

  async updateThingModelValidationConfigWithOptions(request: UpdateThingModelValidationConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateThingModelValidationConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateThingModelValidationConfigResponse>(await this.doRequest("UpdateThingModelValidationConfig", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new UpdateThingModelValidationConfigResponse({}));
  }

  async updateThingModelValidationConfig(request: UpdateThingModelValidationConfigRequest): Promise<UpdateThingModelValidationConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateThingModelValidationConfigWithOptions(request, runtime);
  }

  async queryDeviceBySQLWithOptions(request: QueryDeviceBySQLRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceBySQLResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryDeviceBySQLResponse>(await this.doRequest("QueryDeviceBySQL", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryDeviceBySQLResponse({}));
  }

  async queryDeviceBySQL(request: QueryDeviceBySQLRequest): Promise<QueryDeviceBySQLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceBySQLWithOptions(request, runtime);
  }

  async listOTAModuleByProductWithOptions(request: ListOTAModuleByProductRequest, runtime: $Util.RuntimeOptions): Promise<ListOTAModuleByProductResponse> {
    Util.validateModel(request);
    return $tea.cast<ListOTAModuleByProductResponse>(await this.doRequest("ListOTAModuleByProduct", "HTTPS", "GET", "2018-01-20", "AK", $tea.toMap(request), null, runtime), new ListOTAModuleByProductResponse({}));
  }

  async listOTAModuleByProduct(request: ListOTAModuleByProductRequest): Promise<ListOTAModuleByProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOTAModuleByProductWithOptions(request, runtime);
  }

  async deleteOTAModuleWithOptions(request: DeleteOTAModuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteOTAModuleResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteOTAModuleResponse>(await this.doRequest("DeleteOTAModule", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new DeleteOTAModuleResponse({}));
  }

  async deleteOTAModule(request: DeleteOTAModuleRequest): Promise<DeleteOTAModuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteOTAModuleWithOptions(request, runtime);
  }

  async generateDeviceNameListURLWithOptions(request: GenerateDeviceNameListURLRequest, runtime: $Util.RuntimeOptions): Promise<GenerateDeviceNameListURLResponse> {
    Util.validateModel(request);
    return $tea.cast<GenerateDeviceNameListURLResponse>(await this.doRequest("GenerateDeviceNameListURL", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new GenerateDeviceNameListURLResponse({}));
  }

  async generateDeviceNameListURL(request: GenerateDeviceNameListURLRequest): Promise<GenerateDeviceNameListURLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateDeviceNameListURLWithOptions(request, runtime);
  }

  async updateOTAModuleWithOptions(request: UpdateOTAModuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateOTAModuleResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateOTAModuleResponse>(await this.doRequest("UpdateOTAModule", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new UpdateOTAModuleResponse({}));
  }

  async updateOTAModule(request: UpdateOTAModuleRequest): Promise<UpdateOTAModuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateOTAModuleWithOptions(request, runtime);
  }

  async createOTAModuleWithOptions(request: CreateOTAModuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateOTAModuleResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateOTAModuleResponse>(await this.doRequest("CreateOTAModule", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CreateOTAModuleResponse({}));
  }

  async createOTAModule(request: CreateOTAModuleRequest): Promise<CreateOTAModuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOTAModuleWithOptions(request, runtime);
  }

  async queryThingModelExtendConfigPublishedWithOptions(request: QueryThingModelExtendConfigPublishedRequest, runtime: $Util.RuntimeOptions): Promise<QueryThingModelExtendConfigPublishedResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryThingModelExtendConfigPublishedResponse>(await this.doRequest("QueryThingModelExtendConfigPublished", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryThingModelExtendConfigPublishedResponse({}));
  }

  async queryThingModelExtendConfigPublished(request: QueryThingModelExtendConfigPublishedRequest): Promise<QueryThingModelExtendConfigPublishedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryThingModelExtendConfigPublishedWithOptions(request, runtime);
  }

  async getThingModelTslPublishedWithOptions(request: GetThingModelTslPublishedRequest, runtime: $Util.RuntimeOptions): Promise<GetThingModelTslPublishedResponse> {
    Util.validateModel(request);
    return $tea.cast<GetThingModelTslPublishedResponse>(await this.doRequest("GetThingModelTslPublished", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new GetThingModelTslPublishedResponse({}));
  }

  async getThingModelTslPublished(request: GetThingModelTslPublishedRequest): Promise<GetThingModelTslPublishedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getThingModelTslPublishedWithOptions(request, runtime);
  }

  async queryThingModelPublishedWithOptions(request: QueryThingModelPublishedRequest, runtime: $Util.RuntimeOptions): Promise<QueryThingModelPublishedResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryThingModelPublishedResponse>(await this.doRequest("QueryThingModelPublished", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryThingModelPublishedResponse({}));
  }

  async queryThingModelPublished(request: QueryThingModelPublishedRequest): Promise<QueryThingModelPublishedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryThingModelPublishedWithOptions(request, runtime);
  }

  async queryThingModelExtendConfigWithOptions(request: QueryThingModelExtendConfigRequest, runtime: $Util.RuntimeOptions): Promise<QueryThingModelExtendConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryThingModelExtendConfigResponse>(await this.doRequest("QueryThingModelExtendConfig", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryThingModelExtendConfigResponse({}));
  }

  async queryThingModelExtendConfig(request: QueryThingModelExtendConfigRequest): Promise<QueryThingModelExtendConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryThingModelExtendConfigWithOptions(request, runtime);
  }

  async listDistributedDeviceWithOptions(request: ListDistributedDeviceRequest, runtime: $Util.RuntimeOptions): Promise<ListDistributedDeviceResponse> {
    Util.validateModel(request);
    return $tea.cast<ListDistributedDeviceResponse>(await this.doRequest("ListDistributedDevice", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new ListDistributedDeviceResponse({}));
  }

  async listDistributedDevice(request: ListDistributedDeviceRequest): Promise<ListDistributedDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDistributedDeviceWithOptions(request, runtime);
  }

  async listDistributedProductWithOptions(request: ListDistributedProductRequest, runtime: $Util.RuntimeOptions): Promise<ListDistributedProductResponse> {
    Util.validateModel(request);
    return $tea.cast<ListDistributedProductResponse>(await this.doRequest("ListDistributedProduct", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new ListDistributedProductResponse({}));
  }

  async listDistributedProduct(request: ListDistributedProductRequest): Promise<ListDistributedProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDistributedProductWithOptions(request, runtime);
  }

  async querySubscribeRelationWithOptions(request: QuerySubscribeRelationRequest, runtime: $Util.RuntimeOptions): Promise<QuerySubscribeRelationResponse> {
    Util.validateModel(request);
    return $tea.cast<QuerySubscribeRelationResponse>(await this.doRequest("QuerySubscribeRelation", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QuerySubscribeRelationResponse({}));
  }

  async querySubscribeRelation(request: QuerySubscribeRelationRequest): Promise<QuerySubscribeRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySubscribeRelationWithOptions(request, runtime);
  }

  async createConsumerGroupSubscribeRelationWithOptions(request: CreateConsumerGroupSubscribeRelationRequest, runtime: $Util.RuntimeOptions): Promise<CreateConsumerGroupSubscribeRelationResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateConsumerGroupSubscribeRelationResponse>(await this.doRequest("CreateConsumerGroupSubscribeRelation", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CreateConsumerGroupSubscribeRelationResponse({}));
  }

  async createConsumerGroupSubscribeRelation(request: CreateConsumerGroupSubscribeRelationRequest): Promise<CreateConsumerGroupSubscribeRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConsumerGroupSubscribeRelationWithOptions(request, runtime);
  }

  async updateSubscribeRelationWithOptions(request: UpdateSubscribeRelationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSubscribeRelationResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateSubscribeRelationResponse>(await this.doRequest("UpdateSubscribeRelation", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new UpdateSubscribeRelationResponse({}));
  }

  async updateSubscribeRelation(request: UpdateSubscribeRelationRequest): Promise<UpdateSubscribeRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSubscribeRelationWithOptions(request, runtime);
  }

  async deleteConsumerGroupSubscribeRelationWithOptions(request: DeleteConsumerGroupSubscribeRelationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteConsumerGroupSubscribeRelationResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteConsumerGroupSubscribeRelationResponse>(await this.doRequest("DeleteConsumerGroupSubscribeRelation", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new DeleteConsumerGroupSubscribeRelationResponse({}));
  }

  async deleteConsumerGroupSubscribeRelation(request: DeleteConsumerGroupSubscribeRelationRequest): Promise<DeleteConsumerGroupSubscribeRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteConsumerGroupSubscribeRelationWithOptions(request, runtime);
  }

  async resetConsumerGroupPositionWithOptions(request: ResetConsumerGroupPositionRequest, runtime: $Util.RuntimeOptions): Promise<ResetConsumerGroupPositionResponse> {
    Util.validateModel(request);
    return $tea.cast<ResetConsumerGroupPositionResponse>(await this.doRequest("ResetConsumerGroupPosition", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new ResetConsumerGroupPositionResponse({}));
  }

  async resetConsumerGroupPosition(request: ResetConsumerGroupPositionRequest): Promise<ResetConsumerGroupPositionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetConsumerGroupPositionWithOptions(request, runtime);
  }

  async updateConsumerGroupWithOptions(request: UpdateConsumerGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateConsumerGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateConsumerGroupResponse>(await this.doRequest("UpdateConsumerGroup", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new UpdateConsumerGroupResponse({}));
  }

  async updateConsumerGroup(request: UpdateConsumerGroupRequest): Promise<UpdateConsumerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateConsumerGroupWithOptions(request, runtime);
  }

  async batchDeleteEdgeInstanceChannelWithOptions(request: BatchDeleteEdgeInstanceChannelRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeleteEdgeInstanceChannelResponse> {
    Util.validateModel(request);
    return $tea.cast<BatchDeleteEdgeInstanceChannelResponse>(await this.doRequest("BatchDeleteEdgeInstanceChannel", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new BatchDeleteEdgeInstanceChannelResponse({}));
  }

  async batchDeleteEdgeInstanceChannel(request: BatchDeleteEdgeInstanceChannelRequest): Promise<BatchDeleteEdgeInstanceChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteEdgeInstanceChannelWithOptions(request, runtime);
  }

  async batchSetEdgeInstanceDeviceChannelWithOptions(request: BatchSetEdgeInstanceDeviceChannelRequest, runtime: $Util.RuntimeOptions): Promise<BatchSetEdgeInstanceDeviceChannelResponse> {
    Util.validateModel(request);
    return $tea.cast<BatchSetEdgeInstanceDeviceChannelResponse>(await this.doRequest("BatchSetEdgeInstanceDeviceChannel", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new BatchSetEdgeInstanceDeviceChannelResponse({}));
  }

  async batchSetEdgeInstanceDeviceChannel(request: BatchSetEdgeInstanceDeviceChannelRequest): Promise<BatchSetEdgeInstanceDeviceChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSetEdgeInstanceDeviceChannelWithOptions(request, runtime);
  }

  async batchGetEdgeInstanceDeviceDriverWithOptions(request: BatchGetEdgeInstanceDeviceDriverRequest, runtime: $Util.RuntimeOptions): Promise<BatchGetEdgeInstanceDeviceDriverResponse> {
    Util.validateModel(request);
    return $tea.cast<BatchGetEdgeInstanceDeviceDriverResponse>(await this.doRequest("BatchGetEdgeInstanceDeviceDriver", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new BatchGetEdgeInstanceDeviceDriverResponse({}));
  }

  async batchGetEdgeInstanceDeviceDriver(request: BatchGetEdgeInstanceDeviceDriverRequest): Promise<BatchGetEdgeInstanceDeviceDriverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchGetEdgeInstanceDeviceDriverWithOptions(request, runtime);
  }

  async batchGetEdgeInstanceDeviceChannelWithOptions(request: BatchGetEdgeInstanceDeviceChannelRequest, runtime: $Util.RuntimeOptions): Promise<BatchGetEdgeInstanceDeviceChannelResponse> {
    Util.validateModel(request);
    return $tea.cast<BatchGetEdgeInstanceDeviceChannelResponse>(await this.doRequest("BatchGetEdgeInstanceDeviceChannel", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new BatchGetEdgeInstanceDeviceChannelResponse({}));
  }

  async batchGetEdgeInstanceDeviceChannel(request: BatchGetEdgeInstanceDeviceChannelRequest): Promise<BatchGetEdgeInstanceDeviceChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchGetEdgeInstanceDeviceChannelWithOptions(request, runtime);
  }

  async releaseEdgeDriverVersionWithOptions(request: ReleaseEdgeDriverVersionRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseEdgeDriverVersionResponse> {
    Util.validateModel(request);
    return $tea.cast<ReleaseEdgeDriverVersionResponse>(await this.doRequest("ReleaseEdgeDriverVersion", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new ReleaseEdgeDriverVersionResponse({}));
  }

  async releaseEdgeDriverVersion(request: ReleaseEdgeDriverVersionRequest): Promise<ReleaseEdgeDriverVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseEdgeDriverVersionWithOptions(request, runtime);
  }

  async queryEdgeInstanceDeviceByDriverWithOptions(request: QueryEdgeInstanceDeviceByDriverRequest, runtime: $Util.RuntimeOptions): Promise<QueryEdgeInstanceDeviceByDriverResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryEdgeInstanceDeviceByDriverResponse>(await this.doRequest("QueryEdgeInstanceDeviceByDriver", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryEdgeInstanceDeviceByDriverResponse({}));
  }

  async queryEdgeInstanceDeviceByDriver(request: QueryEdgeInstanceDeviceByDriverRequest): Promise<QueryEdgeInstanceDeviceByDriverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEdgeInstanceDeviceByDriverWithOptions(request, runtime);
  }

  async disableSceneRuleWithOptions(request: DisableSceneRuleRequest, runtime: $Util.RuntimeOptions): Promise<DisableSceneRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<DisableSceneRuleResponse>(await this.doRequest("DisableSceneRule", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new DisableSceneRuleResponse({}));
  }

  async disableSceneRule(request: DisableSceneRuleRequest): Promise<DisableSceneRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableSceneRuleWithOptions(request, runtime);
  }

  async triggerSceneRuleWithOptions(request: TriggerSceneRuleRequest, runtime: $Util.RuntimeOptions): Promise<TriggerSceneRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<TriggerSceneRuleResponse>(await this.doRequest("TriggerSceneRule", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new TriggerSceneRuleResponse({}));
  }

  async triggerSceneRule(request: TriggerSceneRuleRequest): Promise<TriggerSceneRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.triggerSceneRuleWithOptions(request, runtime);
  }

  async unbindSceneRuleFromEdgeInstanceWithOptions(request: UnbindSceneRuleFromEdgeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UnbindSceneRuleFromEdgeInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<UnbindSceneRuleFromEdgeInstanceResponse>(await this.doRequest("UnbindSceneRuleFromEdgeInstance", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new UnbindSceneRuleFromEdgeInstanceResponse({}));
  }

  async unbindSceneRuleFromEdgeInstance(request: UnbindSceneRuleFromEdgeInstanceRequest): Promise<UnbindSceneRuleFromEdgeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindSceneRuleFromEdgeInstanceWithOptions(request, runtime);
  }

  async queryEdgeInstanceSceneRuleWithOptions(request: QueryEdgeInstanceSceneRuleRequest, runtime: $Util.RuntimeOptions): Promise<QueryEdgeInstanceSceneRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryEdgeInstanceSceneRuleResponse>(await this.doRequest("QueryEdgeInstanceSceneRule", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryEdgeInstanceSceneRuleResponse({}));
  }

  async queryEdgeInstanceSceneRule(request: QueryEdgeInstanceSceneRuleRequest): Promise<QueryEdgeInstanceSceneRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEdgeInstanceSceneRuleWithOptions(request, runtime);
  }

  async createSceneRuleWithOptions(request: CreateSceneRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateSceneRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateSceneRuleResponse>(await this.doRequest("CreateSceneRule", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CreateSceneRuleResponse({}));
  }

  async createSceneRule(request: CreateSceneRuleRequest): Promise<CreateSceneRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSceneRuleWithOptions(request, runtime);
  }

  async queryDetailSceneRuleLogWithOptions(request: QueryDetailSceneRuleLogRequest, runtime: $Util.RuntimeOptions): Promise<QueryDetailSceneRuleLogResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryDetailSceneRuleLogResponse>(await this.doRequest("QueryDetailSceneRuleLog", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryDetailSceneRuleLogResponse({}));
  }

  async queryDetailSceneRuleLog(request: QueryDetailSceneRuleLogRequest): Promise<QueryDetailSceneRuleLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDetailSceneRuleLogWithOptions(request, runtime);
  }

  async enableSceneRuleWithOptions(request: EnableSceneRuleRequest, runtime: $Util.RuntimeOptions): Promise<EnableSceneRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<EnableSceneRuleResponse>(await this.doRequest("EnableSceneRule", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new EnableSceneRuleResponse({}));
  }

  async enableSceneRule(request: EnableSceneRuleRequest): Promise<EnableSceneRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableSceneRuleWithOptions(request, runtime);
  }

  async updateSceneRuleWithOptions(request: UpdateSceneRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSceneRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateSceneRuleResponse>(await this.doRequest("UpdateSceneRule", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new UpdateSceneRuleResponse({}));
  }

  async updateSceneRule(request: UpdateSceneRuleRequest): Promise<UpdateSceneRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSceneRuleWithOptions(request, runtime);
  }

  async querySceneRuleWithOptions(request: QuerySceneRuleRequest, runtime: $Util.RuntimeOptions): Promise<QuerySceneRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<QuerySceneRuleResponse>(await this.doRequest("QuerySceneRule", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QuerySceneRuleResponse({}));
  }

  async querySceneRule(request: QuerySceneRuleRequest): Promise<QuerySceneRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySceneRuleWithOptions(request, runtime);
  }

  async querySummarySceneRuleLogWithOptions(request: QuerySummarySceneRuleLogRequest, runtime: $Util.RuntimeOptions): Promise<QuerySummarySceneRuleLogResponse> {
    Util.validateModel(request);
    return $tea.cast<QuerySummarySceneRuleLogResponse>(await this.doRequest("QuerySummarySceneRuleLog", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QuerySummarySceneRuleLogResponse({}));
  }

  async querySummarySceneRuleLog(request: QuerySummarySceneRuleLogRequest): Promise<QuerySummarySceneRuleLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySummarySceneRuleLogWithOptions(request, runtime);
  }

  async getSceneRuleWithOptions(request: GetSceneRuleRequest, runtime: $Util.RuntimeOptions): Promise<GetSceneRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<GetSceneRuleResponse>(await this.doRequest("GetSceneRule", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new GetSceneRuleResponse({}));
  }

  async getSceneRule(request: GetSceneRuleRequest): Promise<GetSceneRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSceneRuleWithOptions(request, runtime);
  }

  async deleteSceneRuleWithOptions(request: DeleteSceneRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSceneRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteSceneRuleResponse>(await this.doRequest("DeleteSceneRule", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new DeleteSceneRuleResponse({}));
  }

  async deleteSceneRule(request: DeleteSceneRuleRequest): Promise<DeleteSceneRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSceneRuleWithOptions(request, runtime);
  }

  async bindSceneRuleToEdgeInstanceWithOptions(request: BindSceneRuleToEdgeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<BindSceneRuleToEdgeInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<BindSceneRuleToEdgeInstanceResponse>(await this.doRequest("BindSceneRuleToEdgeInstance", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new BindSceneRuleToEdgeInstanceResponse({}));
  }

  async bindSceneRuleToEdgeInstance(request: BindSceneRuleToEdgeInstanceRequest): Promise<BindSceneRuleToEdgeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindSceneRuleToEdgeInstanceWithOptions(request, runtime);
  }

  async createEdgeOssPreSignedAddressWithOptions(request: CreateEdgeOssPreSignedAddressRequest, runtime: $Util.RuntimeOptions): Promise<CreateEdgeOssPreSignedAddressResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateEdgeOssPreSignedAddressResponse>(await this.doRequest("CreateEdgeOssPreSignedAddress", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CreateEdgeOssPreSignedAddressResponse({}));
  }

  async createEdgeOssPreSignedAddress(request: CreateEdgeOssPreSignedAddressRequest): Promise<CreateEdgeOssPreSignedAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEdgeOssPreSignedAddressWithOptions(request, runtime);
  }

  async updateEdgeDriverVersionWithOptions(request: UpdateEdgeDriverVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEdgeDriverVersionResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateEdgeDriverVersionResponse>(await this.doRequest("UpdateEdgeDriverVersion", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new UpdateEdgeDriverVersionResponse({}));
  }

  async updateEdgeDriverVersion(request: UpdateEdgeDriverVersionRequest): Promise<UpdateEdgeDriverVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEdgeDriverVersionWithOptions(request, runtime);
  }

  async deleteEdgeDriverVersionWithOptions(request: DeleteEdgeDriverVersionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEdgeDriverVersionResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteEdgeDriverVersionResponse>(await this.doRequest("DeleteEdgeDriverVersion", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new DeleteEdgeDriverVersionResponse({}));
  }

  async deleteEdgeDriverVersion(request: DeleteEdgeDriverVersionRequest): Promise<DeleteEdgeDriverVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEdgeDriverVersionWithOptions(request, runtime);
  }

  async createEdgeDriverVersionWithOptions(request: CreateEdgeDriverVersionRequest, runtime: $Util.RuntimeOptions): Promise<CreateEdgeDriverVersionResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateEdgeDriverVersionResponse>(await this.doRequest("CreateEdgeDriverVersion", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CreateEdgeDriverVersionResponse({}));
  }

  async createEdgeDriverVersion(request: CreateEdgeDriverVersionRequest): Promise<CreateEdgeDriverVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEdgeDriverVersionWithOptions(request, runtime);
  }

  async deleteEdgeDriverWithOptions(request: DeleteEdgeDriverRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEdgeDriverResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteEdgeDriverResponse>(await this.doRequest("DeleteEdgeDriver", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new DeleteEdgeDriverResponse({}));
  }

  async deleteEdgeDriver(request: DeleteEdgeDriverRequest): Promise<DeleteEdgeDriverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEdgeDriverWithOptions(request, runtime);
  }

  async queryEdgeDriverWithOptions(request: QueryEdgeDriverRequest, runtime: $Util.RuntimeOptions): Promise<QueryEdgeDriverResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryEdgeDriverResponse>(await this.doRequest("QueryEdgeDriver", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryEdgeDriverResponse({}));
  }

  async queryEdgeDriver(request: QueryEdgeDriverRequest): Promise<QueryEdgeDriverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEdgeDriverWithOptions(request, runtime);
  }

  async batchGetEdgeDriverWithOptions(request: BatchGetEdgeDriverRequest, runtime: $Util.RuntimeOptions): Promise<BatchGetEdgeDriverResponse> {
    Util.validateModel(request);
    return $tea.cast<BatchGetEdgeDriverResponse>(await this.doRequest("BatchGetEdgeDriver", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new BatchGetEdgeDriverResponse({}));
  }

  async batchGetEdgeDriver(request: BatchGetEdgeDriverRequest): Promise<BatchGetEdgeDriverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchGetEdgeDriverWithOptions(request, runtime);
  }

  async createEdgeDriverWithOptions(request: CreateEdgeDriverRequest, runtime: $Util.RuntimeOptions): Promise<CreateEdgeDriverResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateEdgeDriverResponse>(await this.doRequest("CreateEdgeDriver", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CreateEdgeDriverResponse({}));
  }

  async createEdgeDriver(request: CreateEdgeDriverRequest): Promise<CreateEdgeDriverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEdgeDriverWithOptions(request, runtime);
  }

  async getEdgeDriverVersionWithOptions(request: GetEdgeDriverVersionRequest, runtime: $Util.RuntimeOptions): Promise<GetEdgeDriverVersionResponse> {
    Util.validateModel(request);
    return $tea.cast<GetEdgeDriverVersionResponse>(await this.doRequest("GetEdgeDriverVersion", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new GetEdgeDriverVersionResponse({}));
  }

  async getEdgeDriverVersion(request: GetEdgeDriverVersionRequest): Promise<GetEdgeDriverVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEdgeDriverVersionWithOptions(request, runtime);
  }

  async queryEdgeDriverVersionWithOptions(request: QueryEdgeDriverVersionRequest, runtime: $Util.RuntimeOptions): Promise<QueryEdgeDriverVersionResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryEdgeDriverVersionResponse>(await this.doRequest("QueryEdgeDriverVersion", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryEdgeDriverVersionResponse({}));
  }

  async queryEdgeDriverVersion(request: QueryEdgeDriverVersionRequest): Promise<QueryEdgeDriverVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEdgeDriverVersionWithOptions(request, runtime);
  }

  async batchGetDeviceBindStatusWithOptions(request: BatchGetDeviceBindStatusRequest, runtime: $Util.RuntimeOptions): Promise<BatchGetDeviceBindStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<BatchGetDeviceBindStatusResponse>(await this.doRequest("BatchGetDeviceBindStatus", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new BatchGetDeviceBindStatusResponse({}));
  }

  async batchGetDeviceBindStatus(request: BatchGetDeviceBindStatusRequest): Promise<BatchGetDeviceBindStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchGetDeviceBindStatusWithOptions(request, runtime);
  }

  async listOTAJobByDeviceWithOptions(request: ListOTAJobByDeviceRequest, runtime: $Util.RuntimeOptions): Promise<ListOTAJobByDeviceResponse> {
    Util.validateModel(request);
    return $tea.cast<ListOTAJobByDeviceResponse>(await this.doRequest("ListOTAJobByDevice", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new ListOTAJobByDeviceResponse({}));
  }

  async listOTAJobByDevice(request: ListOTAJobByDeviceRequest): Promise<ListOTAJobByDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOTAJobByDeviceWithOptions(request, runtime);
  }

  async updateThingModelWithOptions(request: UpdateThingModelRequest, runtime: $Util.RuntimeOptions): Promise<UpdateThingModelResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateThingModelResponse>(await this.doRequest("UpdateThingModel", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new UpdateThingModelResponse({}));
  }

  async updateThingModel(request: UpdateThingModelRequest): Promise<UpdateThingModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateThingModelWithOptions(request, runtime);
  }

  async createThingModelWithOptions(request: CreateThingModelRequest, runtime: $Util.RuntimeOptions): Promise<CreateThingModelResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateThingModelResponse>(await this.doRequest("CreateThingModel", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CreateThingModelResponse({}));
  }

  async createThingModel(request: CreateThingModelRequest): Promise<CreateThingModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createThingModelWithOptions(request, runtime);
  }

  async listOTATaskByJobWithOptions(request: ListOTATaskByJobRequest, runtime: $Util.RuntimeOptions): Promise<ListOTATaskByJobResponse> {
    Util.validateModel(request);
    return $tea.cast<ListOTATaskByJobResponse>(await this.doRequest("ListOTATaskByJob", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new ListOTATaskByJobResponse({}));
  }

  async listOTATaskByJob(request: ListOTATaskByJobRequest): Promise<ListOTATaskByJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOTATaskByJobWithOptions(request, runtime);
  }

  async listThingTemplatesWithOptions(request: ListThingTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListThingTemplatesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListThingTemplatesResponse>(await this.doRequest("ListThingTemplates", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new ListThingTemplatesResponse({}));
  }

  async listThingTemplates(request: ListThingTemplatesRequest): Promise<ListThingTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listThingTemplatesWithOptions(request, runtime);
  }

  async getThingTemplateWithOptions(request: GetThingTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetThingTemplateResponse> {
    Util.validateModel(request);
    return $tea.cast<GetThingTemplateResponse>(await this.doRequest("GetThingTemplate", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new GetThingTemplateResponse({}));
  }

  async getThingTemplate(request: GetThingTemplateRequest): Promise<GetThingTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getThingTemplateWithOptions(request, runtime);
  }

  async listThingModelVersionWithOptions(request: ListThingModelVersionRequest, runtime: $Util.RuntimeOptions): Promise<ListThingModelVersionResponse> {
    Util.validateModel(request);
    return $tea.cast<ListThingModelVersionResponse>(await this.doRequest("ListThingModelVersion", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new ListThingModelVersionResponse({}));
  }

  async listThingModelVersion(request: ListThingModelVersionRequest): Promise<ListThingModelVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listThingModelVersionWithOptions(request, runtime);
  }

  async importThingModelTslWithOptions(request: ImportThingModelTslRequest, runtime: $Util.RuntimeOptions): Promise<ImportThingModelTslResponse> {
    Util.validateModel(request);
    return $tea.cast<ImportThingModelTslResponse>(await this.doRequest("ImportThingModelTsl", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new ImportThingModelTslResponse({}));
  }

  async importThingModelTsl(request: ImportThingModelTslRequest): Promise<ImportThingModelTslResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importThingModelTslWithOptions(request, runtime);
  }

  async publishThingModelWithOptions(request: PublishThingModelRequest, runtime: $Util.RuntimeOptions): Promise<PublishThingModelResponse> {
    Util.validateModel(request);
    return $tea.cast<PublishThingModelResponse>(await this.doRequest("PublishThingModel", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new PublishThingModelResponse({}));
  }

  async publishThingModel(request: PublishThingModelRequest): Promise<PublishThingModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishThingModelWithOptions(request, runtime);
  }

  async copyThingModelWithOptions(request: CopyThingModelRequest, runtime: $Util.RuntimeOptions): Promise<CopyThingModelResponse> {
    Util.validateModel(request);
    return $tea.cast<CopyThingModelResponse>(await this.doRequest("CopyThingModel", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CopyThingModelResponse({}));
  }

  async copyThingModel(request: CopyThingModelRequest): Promise<CopyThingModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copyThingModelWithOptions(request, runtime);
  }

  async getThingModelTslWithOptions(request: GetThingModelTslRequest, runtime: $Util.RuntimeOptions): Promise<GetThingModelTslResponse> {
    Util.validateModel(request);
    return $tea.cast<GetThingModelTslResponse>(await this.doRequest("GetThingModelTsl", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new GetThingModelTslResponse({}));
  }

  async getThingModelTsl(request: GetThingModelTslRequest): Promise<GetThingModelTslResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getThingModelTslWithOptions(request, runtime);
  }

  async queryThingModelWithOptions(request: QueryThingModelRequest, runtime: $Util.RuntimeOptions): Promise<QueryThingModelResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryThingModelResponse>(await this.doRequest("QueryThingModel", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryThingModelResponse({}));
  }

  async queryThingModel(request: QueryThingModelRequest): Promise<QueryThingModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryThingModelWithOptions(request, runtime);
  }

  async deleteThingModelWithOptions(request: DeleteThingModelRequest, runtime: $Util.RuntimeOptions): Promise<DeleteThingModelResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteThingModelResponse>(await this.doRequest("DeleteThingModel", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new DeleteThingModelResponse({}));
  }

  async deleteThingModel(request: DeleteThingModelRequest): Promise<DeleteThingModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteThingModelWithOptions(request, runtime);
  }

  async updateProductFilterConfigWithOptions(request: UpdateProductFilterConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProductFilterConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateProductFilterConfigResponse>(await this.doRequest("UpdateProductFilterConfig", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new UpdateProductFilterConfigResponse({}));
  }

  async updateProductFilterConfig(request: UpdateProductFilterConfigRequest): Promise<UpdateProductFilterConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProductFilterConfigWithOptions(request, runtime);
  }

  async cancelOTAStrategyByJobWithOptions(request: CancelOTAStrategyByJobRequest, runtime: $Util.RuntimeOptions): Promise<CancelOTAStrategyByJobResponse> {
    Util.validateModel(request);
    return $tea.cast<CancelOTAStrategyByJobResponse>(await this.doRequest("CancelOTAStrategyByJob", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CancelOTAStrategyByJobResponse({}));
  }

  async cancelOTAStrategyByJob(request: CancelOTAStrategyByJobRequest): Promise<CancelOTAStrategyByJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelOTAStrategyByJobWithOptions(request, runtime);
  }

  async listOTAJobByFirmwareWithOptions(request: ListOTAJobByFirmwareRequest, runtime: $Util.RuntimeOptions): Promise<ListOTAJobByFirmwareResponse> {
    Util.validateModel(request);
    return $tea.cast<ListOTAJobByFirmwareResponse>(await this.doRequest("ListOTAJobByFirmware", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new ListOTAJobByFirmwareResponse({}));
  }

  async listOTAJobByFirmware(request: ListOTAJobByFirmwareRequest): Promise<ListOTAJobByFirmwareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOTAJobByFirmwareWithOptions(request, runtime);
  }

  async listOTAFirmwareWithOptions(request: ListOTAFirmwareRequest, runtime: $Util.RuntimeOptions): Promise<ListOTAFirmwareResponse> {
    Util.validateModel(request);
    return $tea.cast<ListOTAFirmwareResponse>(await this.doRequest("ListOTAFirmware", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new ListOTAFirmwareResponse({}));
  }

  async listOTAFirmware(request: ListOTAFirmwareRequest): Promise<ListOTAFirmwareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOTAFirmwareWithOptions(request, runtime);
  }

  async cancelOTATaskByJobWithOptions(request: CancelOTATaskByJobRequest, runtime: $Util.RuntimeOptions): Promise<CancelOTATaskByJobResponse> {
    Util.validateModel(request);
    return $tea.cast<CancelOTATaskByJobResponse>(await this.doRequest("CancelOTATaskByJob", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CancelOTATaskByJobResponse({}));
  }

  async cancelOTATaskByJob(request: CancelOTATaskByJobRequest): Promise<CancelOTATaskByJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelOTATaskByJobWithOptions(request, runtime);
  }

  async createDeviceDistributeJobWithOptions(request: CreateDeviceDistributeJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateDeviceDistributeJobResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateDeviceDistributeJobResponse>(await this.doRequest("CreateDeviceDistributeJob", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CreateDeviceDistributeJobResponse({}));
  }

  async createDeviceDistributeJob(request: CreateDeviceDistributeJobRequest): Promise<CreateDeviceDistributeJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDeviceDistributeJobWithOptions(request, runtime);
  }

  async queryDeviceDistributeDetailWithOptions(request: QueryDeviceDistributeDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceDistributeDetailResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryDeviceDistributeDetailResponse>(await this.doRequest("QueryDeviceDistributeDetail", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryDeviceDistributeDetailResponse({}));
  }

  async queryDeviceDistributeDetail(request: QueryDeviceDistributeDetailRequest): Promise<QueryDeviceDistributeDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceDistributeDetailWithOptions(request, runtime);
  }

  async listDeviceDistributeJobWithOptions(request: ListDeviceDistributeJobRequest, runtime: $Util.RuntimeOptions): Promise<ListDeviceDistributeJobResponse> {
    Util.validateModel(request);
    return $tea.cast<ListDeviceDistributeJobResponse>(await this.doRequest("ListDeviceDistributeJob", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new ListDeviceDistributeJobResponse({}));
  }

  async listDeviceDistributeJob(request: ListDeviceDistributeJobRequest): Promise<ListDeviceDistributeJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceDistributeJobWithOptions(request, runtime);
  }

  async queryDeviceDistributeJobWithOptions(request: QueryDeviceDistributeJobRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceDistributeJobResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryDeviceDistributeJobResponse>(await this.doRequest("QueryDeviceDistributeJob", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryDeviceDistributeJobResponse({}));
  }

  async queryDeviceDistributeJob(request: QueryDeviceDistributeJobRequest): Promise<QueryDeviceDistributeJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceDistributeJobWithOptions(request, runtime);
  }

  async deleteDeviceDistributeJobWithOptions(request: DeleteDeviceDistributeJobRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDeviceDistributeJobResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteDeviceDistributeJobResponse>(await this.doRequest("DeleteDeviceDistributeJob", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new DeleteDeviceDistributeJobResponse({}));
  }

  async deleteDeviceDistributeJob(request: DeleteDeviceDistributeJobRequest): Promise<DeleteDeviceDistributeJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDeviceDistributeJobWithOptions(request, runtime);
  }

  async queryDeviceByStatusWithOptions(request: QueryDeviceByStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceByStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryDeviceByStatusResponse>(await this.doRequest("QueryDeviceByStatus", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryDeviceByStatusResponse({}));
  }

  async queryDeviceByStatus(request: QueryDeviceByStatusRequest): Promise<QueryDeviceByStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceByStatusWithOptions(request, runtime);
  }

  async generateOTAUploadURLWithOptions(request: GenerateOTAUploadURLRequest, runtime: $Util.RuntimeOptions): Promise<GenerateOTAUploadURLResponse> {
    Util.validateModel(request);
    return $tea.cast<GenerateOTAUploadURLResponse>(await this.doRequest("GenerateOTAUploadURL", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new GenerateOTAUploadURLResponse({}));
  }

  async generateOTAUploadURL(request: GenerateOTAUploadURLRequest): Promise<GenerateOTAUploadURLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateOTAUploadURLWithOptions(request, runtime);
  }

  async queryProductCertInfoWithOptions(request: QueryProductCertInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryProductCertInfoResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryProductCertInfoResponse>(await this.doRequest("QueryProductCertInfo", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryProductCertInfoResponse({}));
  }

  async queryProductCertInfo(request: QueryProductCertInfoRequest): Promise<QueryProductCertInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryProductCertInfoWithOptions(request, runtime);
  }

  async setProductCertInfoWithOptions(request: SetProductCertInfoRequest, runtime: $Util.RuntimeOptions): Promise<SetProductCertInfoResponse> {
    Util.validateModel(request);
    return $tea.cast<SetProductCertInfoResponse>(await this.doRequest("SetProductCertInfo", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new SetProductCertInfoResponse({}));
  }

  async setProductCertInfo(request: SetProductCertInfoRequest): Promise<SetProductCertInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setProductCertInfoWithOptions(request, runtime);
  }

  async createSubscribeRelationWithOptions(request: CreateSubscribeRelationRequest, runtime: $Util.RuntimeOptions): Promise<CreateSubscribeRelationResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateSubscribeRelationResponse>(await this.doRequest("CreateSubscribeRelation", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CreateSubscribeRelationResponse({}));
  }

  async createSubscribeRelation(request: CreateSubscribeRelationRequest): Promise<CreateSubscribeRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSubscribeRelationWithOptions(request, runtime);
  }

  async deleteSubscribeRelationWithOptions(request: DeleteSubscribeRelationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSubscribeRelationResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteSubscribeRelationResponse>(await this.doRequest("DeleteSubscribeRelation", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new DeleteSubscribeRelationResponse({}));
  }

  async deleteSubscribeRelation(request: DeleteSubscribeRelationRequest): Promise<DeleteSubscribeRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSubscribeRelationWithOptions(request, runtime);
  }

  async queryConsumerGroupStatusWithOptions(request: QueryConsumerGroupStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryConsumerGroupStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryConsumerGroupStatusResponse>(await this.doRequest("QueryConsumerGroupStatus", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryConsumerGroupStatusResponse({}));
  }

  async queryConsumerGroupStatus(request: QueryConsumerGroupStatusRequest): Promise<QueryConsumerGroupStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryConsumerGroupStatusWithOptions(request, runtime);
  }

  async deleteConsumerGroupWithOptions(request: DeleteConsumerGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteConsumerGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteConsumerGroupResponse>(await this.doRequest("DeleteConsumerGroup", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new DeleteConsumerGroupResponse({}));
  }

  async deleteConsumerGroup(request: DeleteConsumerGroupRequest): Promise<DeleteConsumerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteConsumerGroupWithOptions(request, runtime);
  }

  async queryConsumerGroupListWithOptions(request: QueryConsumerGroupListRequest, runtime: $Util.RuntimeOptions): Promise<QueryConsumerGroupListResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryConsumerGroupListResponse>(await this.doRequest("QueryConsumerGroupList", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryConsumerGroupListResponse({}));
  }

  async queryConsumerGroupList(request: QueryConsumerGroupListRequest): Promise<QueryConsumerGroupListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryConsumerGroupListWithOptions(request, runtime);
  }

  async queryConsumerGroupByGroupIdWithOptions(request: QueryConsumerGroupByGroupIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryConsumerGroupByGroupIdResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryConsumerGroupByGroupIdResponse>(await this.doRequest("QueryConsumerGroupByGroupId", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryConsumerGroupByGroupIdResponse({}));
  }

  async queryConsumerGroupByGroupId(request: QueryConsumerGroupByGroupIdRequest): Promise<QueryConsumerGroupByGroupIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryConsumerGroupByGroupIdWithOptions(request, runtime);
  }

  async createConsumerGroupWithOptions(request: CreateConsumerGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateConsumerGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateConsumerGroupResponse>(await this.doRequest("CreateConsumerGroup", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CreateConsumerGroupResponse({}));
  }

  async createConsumerGroup(request: CreateConsumerGroupRequest): Promise<CreateConsumerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConsumerGroupWithOptions(request, runtime);
  }

  async createOTADynamicUpgradeJobWithOptions(request: CreateOTADynamicUpgradeJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateOTADynamicUpgradeJobResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateOTADynamicUpgradeJobResponse>(await this.doRequest("CreateOTADynamicUpgradeJob", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CreateOTADynamicUpgradeJobResponse({}));
  }

  async createOTADynamicUpgradeJob(request: CreateOTADynamicUpgradeJobRequest): Promise<CreateOTADynamicUpgradeJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOTADynamicUpgradeJobWithOptions(request, runtime);
  }

  async createOTAStaticUpgradeJobWithOptions(request: CreateOTAStaticUpgradeJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateOTAStaticUpgradeJobResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateOTAStaticUpgradeJobResponse>(await this.doRequest("CreateOTAStaticUpgradeJob", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CreateOTAStaticUpgradeJobResponse({}));
  }

  async createOTAStaticUpgradeJob(request: CreateOTAStaticUpgradeJobRequest): Promise<CreateOTAStaticUpgradeJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOTAStaticUpgradeJobWithOptions(request, runtime);
  }

  async createOTAFirmwareWithOptions(request: CreateOTAFirmwareRequest, runtime: $Util.RuntimeOptions): Promise<CreateOTAFirmwareResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateOTAFirmwareResponse>(await this.doRequest("CreateOTAFirmware", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CreateOTAFirmwareResponse({}));
  }

  async createOTAFirmware(request: CreateOTAFirmwareRequest): Promise<CreateOTAFirmwareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOTAFirmwareWithOptions(request, runtime);
  }

  async createOTAVerifyJobWithOptions(request: CreateOTAVerifyJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateOTAVerifyJobResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateOTAVerifyJobResponse>(await this.doRequest("CreateOTAVerifyJob", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CreateOTAVerifyJobResponse({}));
  }

  async createOTAVerifyJob(request: CreateOTAVerifyJobRequest): Promise<CreateOTAVerifyJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOTAVerifyJobWithOptions(request, runtime);
  }

  async queryOTAJobWithOptions(request: QueryOTAJobRequest, runtime: $Util.RuntimeOptions): Promise<QueryOTAJobResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryOTAJobResponse>(await this.doRequest("QueryOTAJob", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryOTAJobResponse({}));
  }

  async queryOTAJob(request: QueryOTAJobRequest): Promise<QueryOTAJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOTAJobWithOptions(request, runtime);
  }

  async cancelOTATaskByDeviceWithOptions(request: CancelOTATaskByDeviceRequest, runtime: $Util.RuntimeOptions): Promise<CancelOTATaskByDeviceResponse> {
    Util.validateModel(request);
    return $tea.cast<CancelOTATaskByDeviceResponse>(await this.doRequest("CancelOTATaskByDevice", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CancelOTATaskByDeviceResponse({}));
  }

  async cancelOTATaskByDevice(request: CancelOTATaskByDeviceRequest): Promise<CancelOTATaskByDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelOTATaskByDeviceWithOptions(request, runtime);
  }

  async deleteOTAFirmwareWithOptions(request: DeleteOTAFirmwareRequest, runtime: $Util.RuntimeOptions): Promise<DeleteOTAFirmwareResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteOTAFirmwareResponse>(await this.doRequest("DeleteOTAFirmware", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new DeleteOTAFirmwareResponse({}));
  }

  async deleteOTAFirmware(request: DeleteOTAFirmwareRequest): Promise<DeleteOTAFirmwareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteOTAFirmwareWithOptions(request, runtime);
  }

  async queryOTAFirmwareWithOptions(request: QueryOTAFirmwareRequest, runtime: $Util.RuntimeOptions): Promise<QueryOTAFirmwareResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryOTAFirmwareResponse>(await this.doRequest("QueryOTAFirmware", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryOTAFirmwareResponse({}));
  }

  async queryOTAFirmware(request: QueryOTAFirmwareRequest): Promise<QueryOTAFirmwareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOTAFirmwareWithOptions(request, runtime);
  }

  async unbindApplicationFromEdgeInstanceWithOptions(request: UnbindApplicationFromEdgeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UnbindApplicationFromEdgeInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<UnbindApplicationFromEdgeInstanceResponse>(await this.doRequest("UnbindApplicationFromEdgeInstance", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new UnbindApplicationFromEdgeInstanceResponse({}));
  }

  async unbindApplicationFromEdgeInstance(request: UnbindApplicationFromEdgeInstanceRequest): Promise<UnbindApplicationFromEdgeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindApplicationFromEdgeInstanceWithOptions(request, runtime);
  }

  async bindApplicationToEdgeInstanceWithOptions(request: BindApplicationToEdgeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<BindApplicationToEdgeInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<BindApplicationToEdgeInstanceResponse>(await this.doRequest("BindApplicationToEdgeInstance", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new BindApplicationToEdgeInstanceResponse({}));
  }

  async bindApplicationToEdgeInstance(request: BindApplicationToEdgeInstanceRequest): Promise<BindApplicationToEdgeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindApplicationToEdgeInstanceWithOptions(request, runtime);
  }

  async queryCertUrlByApplyIdWithOptions(request: QueryCertUrlByApplyIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryCertUrlByApplyIdResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryCertUrlByApplyIdResponse>(await this.doRequest("QueryCertUrlByApplyId", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryCertUrlByApplyIdResponse({}));
  }

  async queryCertUrlByApplyId(request: QueryCertUrlByApplyIdRequest): Promise<QueryCertUrlByApplyIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCertUrlByApplyIdWithOptions(request, runtime);
  }

  async queryDeviceCertWithOptions(request: QueryDeviceCertRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceCertResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryDeviceCertResponse>(await this.doRequest("QueryDeviceCert", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryDeviceCertResponse({}));
  }

  async queryDeviceCert(request: QueryDeviceCertRequest): Promise<QueryDeviceCertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceCertWithOptions(request, runtime);
  }

  async closeEdgeInstanceDeploymentWithOptions(request: CloseEdgeInstanceDeploymentRequest, runtime: $Util.RuntimeOptions): Promise<CloseEdgeInstanceDeploymentResponse> {
    Util.validateModel(request);
    return $tea.cast<CloseEdgeInstanceDeploymentResponse>(await this.doRequest("CloseEdgeInstanceDeployment", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CloseEdgeInstanceDeploymentResponse({}));
  }

  async closeEdgeInstanceDeployment(request: CloseEdgeInstanceDeploymentRequest): Promise<CloseEdgeInstanceDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.closeEdgeInstanceDeploymentWithOptions(request, runtime);
  }

  async unbindDriverFromEdgeInstanceWithOptions(request: UnbindDriverFromEdgeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UnbindDriverFromEdgeInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<UnbindDriverFromEdgeInstanceResponse>(await this.doRequest("UnbindDriverFromEdgeInstance", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new UnbindDriverFromEdgeInstanceResponse({}));
  }

  async unbindDriverFromEdgeInstance(request: UnbindDriverFromEdgeInstanceRequest): Promise<UnbindDriverFromEdgeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindDriverFromEdgeInstanceWithOptions(request, runtime);
  }

  async replaceEdgeInstanceGatewayWithOptions(request: ReplaceEdgeInstanceGatewayRequest, runtime: $Util.RuntimeOptions): Promise<ReplaceEdgeInstanceGatewayResponse> {
    Util.validateModel(request);
    return $tea.cast<ReplaceEdgeInstanceGatewayResponse>(await this.doRequest("ReplaceEdgeInstanceGateway", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new ReplaceEdgeInstanceGatewayResponse({}));
  }

  async replaceEdgeInstanceGateway(request: ReplaceEdgeInstanceGatewayRequest): Promise<ReplaceEdgeInstanceGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.replaceEdgeInstanceGatewayWithOptions(request, runtime);
  }

  async bindDriverToEdgeInstanceWithOptions(request: BindDriverToEdgeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<BindDriverToEdgeInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<BindDriverToEdgeInstanceResponse>(await this.doRequest("BindDriverToEdgeInstance", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new BindDriverToEdgeInstanceResponse({}));
  }

  async bindDriverToEdgeInstance(request: BindDriverToEdgeInstanceRequest): Promise<BindDriverToEdgeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindDriverToEdgeInstanceWithOptions(request, runtime);
  }

  async batchQueryDeviceDetailWithOptions(request: BatchQueryDeviceDetailRequest, runtime: $Util.RuntimeOptions): Promise<BatchQueryDeviceDetailResponse> {
    Util.validateModel(request);
    return $tea.cast<BatchQueryDeviceDetailResponse>(await this.doRequest("BatchQueryDeviceDetail", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new BatchQueryDeviceDetailResponse({}));
  }

  async batchQueryDeviceDetail(request: BatchQueryDeviceDetailRequest): Promise<BatchQueryDeviceDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchQueryDeviceDetailWithOptions(request, runtime);
  }

  async getEdgeInstanceDeploymentWithOptions(request: GetEdgeInstanceDeploymentRequest, runtime: $Util.RuntimeOptions): Promise<GetEdgeInstanceDeploymentResponse> {
    Util.validateModel(request);
    return $tea.cast<GetEdgeInstanceDeploymentResponse>(await this.doRequest("GetEdgeInstanceDeployment", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new GetEdgeInstanceDeploymentResponse({}));
  }

  async getEdgeInstanceDeployment(request: GetEdgeInstanceDeploymentRequest): Promise<GetEdgeInstanceDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEdgeInstanceDeploymentWithOptions(request, runtime);
  }

  async queryTaskWithOptions(request: QueryTaskRequest, runtime: $Util.RuntimeOptions): Promise<QueryTaskResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryTaskResponse>(await this.doRequest("QueryTask", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryTaskResponse({}));
  }

  async queryTask(request: QueryTaskRequest): Promise<QueryTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTaskWithOptions(request, runtime);
  }

  async createDataAPIServiceWithOptions(request: CreateDataAPIServiceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDataAPIServiceResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateDataAPIServiceResponse>(await this.doRequest("CreateDataAPIService", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CreateDataAPIServiceResponse({}));
  }

  async createDataAPIService(request: CreateDataAPIServiceRequest): Promise<CreateDataAPIServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataAPIServiceWithOptions(request, runtime);
  }

  async getDataAPIServiceDetailWithOptions(request: GetDataAPIServiceDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetDataAPIServiceDetailResponse> {
    Util.validateModel(request);
    return $tea.cast<GetDataAPIServiceDetailResponse>(await this.doRequest("GetDataAPIServiceDetail", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new GetDataAPIServiceDetailResponse({}));
  }

  async getDataAPIServiceDetail(request: GetDataAPIServiceDetailRequest): Promise<GetDataAPIServiceDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataAPIServiceDetailWithOptions(request, runtime);
  }

  async invokeDataAPIServiceWithOptions(request: InvokeDataAPIServiceRequest, runtime: $Util.RuntimeOptions): Promise<InvokeDataAPIServiceResponse> {
    Util.validateModel(request);
    return $tea.cast<InvokeDataAPIServiceResponse>(await this.doRequest("InvokeDataAPIService", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new InvokeDataAPIServiceResponse({}));
  }

  async invokeDataAPIService(request: InvokeDataAPIServiceRequest): Promise<InvokeDataAPIServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.invokeDataAPIServiceWithOptions(request, runtime);
  }

  async updateEdgeInstanceChannelWithOptions(request: UpdateEdgeInstanceChannelRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEdgeInstanceChannelResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateEdgeInstanceChannelResponse>(await this.doRequest("UpdateEdgeInstanceChannel", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new UpdateEdgeInstanceChannelResponse({}));
  }

  async updateEdgeInstanceChannel(request: UpdateEdgeInstanceChannelRequest): Promise<UpdateEdgeInstanceChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEdgeInstanceChannelWithOptions(request, runtime);
  }

  async queryEdgeInstanceChannelWithOptions(request: QueryEdgeInstanceChannelRequest, runtime: $Util.RuntimeOptions): Promise<QueryEdgeInstanceChannelResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryEdgeInstanceChannelResponse>(await this.doRequest("QueryEdgeInstanceChannel", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryEdgeInstanceChannelResponse({}));
  }

  async queryEdgeInstanceChannel(request: QueryEdgeInstanceChannelRequest): Promise<QueryEdgeInstanceChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEdgeInstanceChannelWithOptions(request, runtime);
  }

  async batchUnbindDeviceFromEdgeInstanceWithOptions(request: BatchUnbindDeviceFromEdgeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<BatchUnbindDeviceFromEdgeInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<BatchUnbindDeviceFromEdgeInstanceResponse>(await this.doRequest("BatchUnbindDeviceFromEdgeInstance", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new BatchUnbindDeviceFromEdgeInstanceResponse({}));
  }

  async batchUnbindDeviceFromEdgeInstance(request: BatchUnbindDeviceFromEdgeInstanceRequest): Promise<BatchUnbindDeviceFromEdgeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUnbindDeviceFromEdgeInstanceWithOptions(request, runtime);
  }

  async setEdgeInstanceDriverConfigsWithOptions(request: SetEdgeInstanceDriverConfigsRequest, runtime: $Util.RuntimeOptions): Promise<SetEdgeInstanceDriverConfigsResponse> {
    Util.validateModel(request);
    return $tea.cast<SetEdgeInstanceDriverConfigsResponse>(await this.doRequest("SetEdgeInstanceDriverConfigs", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new SetEdgeInstanceDriverConfigsResponse({}));
  }

  async setEdgeInstanceDriverConfigs(request: SetEdgeInstanceDriverConfigsRequest): Promise<SetEdgeInstanceDriverConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setEdgeInstanceDriverConfigsWithOptions(request, runtime);
  }

  async createEdgeInstanceChannelWithOptions(request: CreateEdgeInstanceChannelRequest, runtime: $Util.RuntimeOptions): Promise<CreateEdgeInstanceChannelResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateEdgeInstanceChannelResponse>(await this.doRequest("CreateEdgeInstanceChannel", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CreateEdgeInstanceChannelResponse({}));
  }

  async createEdgeInstanceChannel(request: CreateEdgeInstanceChannelRequest): Promise<CreateEdgeInstanceChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEdgeInstanceChannelWithOptions(request, runtime);
  }

  async batchBindDeviceToEdgeInstanceWithDriverWithOptions(request: BatchBindDeviceToEdgeInstanceWithDriverRequest, runtime: $Util.RuntimeOptions): Promise<BatchBindDeviceToEdgeInstanceWithDriverResponse> {
    Util.validateModel(request);
    return $tea.cast<BatchBindDeviceToEdgeInstanceWithDriverResponse>(await this.doRequest("BatchBindDeviceToEdgeInstanceWithDriver", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new BatchBindDeviceToEdgeInstanceWithDriverResponse({}));
  }

  async batchBindDeviceToEdgeInstanceWithDriver(request: BatchBindDeviceToEdgeInstanceWithDriverRequest): Promise<BatchBindDeviceToEdgeInstanceWithDriverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchBindDeviceToEdgeInstanceWithDriverWithOptions(request, runtime);
  }

  async batchGetEdgeInstanceChannelWithOptions(request: BatchGetEdgeInstanceChannelRequest, runtime: $Util.RuntimeOptions): Promise<BatchGetEdgeInstanceChannelResponse> {
    Util.validateModel(request);
    return $tea.cast<BatchGetEdgeInstanceChannelResponse>(await this.doRequest("BatchGetEdgeInstanceChannel", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new BatchGetEdgeInstanceChannelResponse({}));
  }

  async batchGetEdgeInstanceChannel(request: BatchGetEdgeInstanceChannelRequest): Promise<BatchGetEdgeInstanceChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchGetEdgeInstanceChannelWithOptions(request, runtime);
  }

  async batchSetEdgeInstanceDeviceConfigWithOptions(request: BatchSetEdgeInstanceDeviceConfigRequest, runtime: $Util.RuntimeOptions): Promise<BatchSetEdgeInstanceDeviceConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<BatchSetEdgeInstanceDeviceConfigResponse>(await this.doRequest("BatchSetEdgeInstanceDeviceConfig", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new BatchSetEdgeInstanceDeviceConfigResponse({}));
  }

  async batchSetEdgeInstanceDeviceConfig(request: BatchSetEdgeInstanceDeviceConfigRequest): Promise<BatchSetEdgeInstanceDeviceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSetEdgeInstanceDeviceConfigWithOptions(request, runtime);
  }

  async batchClearEdgeInstanceDeviceConfigWithOptions(request: BatchClearEdgeInstanceDeviceConfigRequest, runtime: $Util.RuntimeOptions): Promise<BatchClearEdgeInstanceDeviceConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<BatchClearEdgeInstanceDeviceConfigResponse>(await this.doRequest("BatchClearEdgeInstanceDeviceConfig", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new BatchClearEdgeInstanceDeviceConfigResponse({}));
  }

  async batchClearEdgeInstanceDeviceConfig(request: BatchClearEdgeInstanceDeviceConfigRequest): Promise<BatchClearEdgeInstanceDeviceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchClearEdgeInstanceDeviceConfigWithOptions(request, runtime);
  }

  async batchGetEdgeInstanceDeviceConfigWithOptions(request: BatchGetEdgeInstanceDeviceConfigRequest, runtime: $Util.RuntimeOptions): Promise<BatchGetEdgeInstanceDeviceConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<BatchGetEdgeInstanceDeviceConfigResponse>(await this.doRequest("BatchGetEdgeInstanceDeviceConfig", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new BatchGetEdgeInstanceDeviceConfigResponse({}));
  }

  async batchGetEdgeInstanceDeviceConfig(request: BatchGetEdgeInstanceDeviceConfigRequest): Promise<BatchGetEdgeInstanceDeviceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchGetEdgeInstanceDeviceConfigWithOptions(request, runtime);
  }

  async batchGetEdgeInstanceDriverConfigsWithOptions(request: BatchGetEdgeInstanceDriverConfigsRequest, runtime: $Util.RuntimeOptions): Promise<BatchGetEdgeInstanceDriverConfigsResponse> {
    Util.validateModel(request);
    return $tea.cast<BatchGetEdgeInstanceDriverConfigsResponse>(await this.doRequest("BatchGetEdgeInstanceDriverConfigs", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new BatchGetEdgeInstanceDriverConfigsResponse({}));
  }

  async batchGetEdgeInstanceDriverConfigs(request: BatchGetEdgeInstanceDriverConfigsRequest): Promise<BatchGetEdgeInstanceDriverConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchGetEdgeInstanceDriverConfigsWithOptions(request, runtime);
  }

  async clearEdgeInstanceDriverConfigsWithOptions(request: ClearEdgeInstanceDriverConfigsRequest, runtime: $Util.RuntimeOptions): Promise<ClearEdgeInstanceDriverConfigsResponse> {
    Util.validateModel(request);
    return $tea.cast<ClearEdgeInstanceDriverConfigsResponse>(await this.doRequest("ClearEdgeInstanceDriverConfigs", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new ClearEdgeInstanceDriverConfigsResponse({}));
  }

  async clearEdgeInstanceDriverConfigs(request: ClearEdgeInstanceDriverConfigsRequest): Promise<ClearEdgeInstanceDriverConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.clearEdgeInstanceDriverConfigsWithOptions(request, runtime);
  }

  async createLoRaNodesTaskWithOptions(request: CreateLoRaNodesTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateLoRaNodesTaskResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateLoRaNodesTaskResponse>(await this.doRequest("CreateLoRaNodesTask", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CreateLoRaNodesTaskResponse({}));
  }

  async createLoRaNodesTask(request: CreateLoRaNodesTaskRequest): Promise<CreateLoRaNodesTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLoRaNodesTaskWithOptions(request, runtime);
  }

  async getLoraNodesTaskWithOptions(request: GetLoraNodesTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetLoraNodesTaskResponse> {
    Util.validateModel(request);
    return $tea.cast<GetLoraNodesTaskResponse>(await this.doRequest("GetLoraNodesTask", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new GetLoraNodesTaskResponse({}));
  }

  async getLoraNodesTask(request: GetLoraNodesTaskRequest): Promise<GetLoraNodesTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLoraNodesTaskWithOptions(request, runtime);
  }

  async queryLoRaJoinPermissionsWithOptions(request: QueryLoRaJoinPermissionsRequest, runtime: $Util.RuntimeOptions): Promise<QueryLoRaJoinPermissionsResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryLoRaJoinPermissionsResponse>(await this.doRequest("QueryLoRaJoinPermissions", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryLoRaJoinPermissionsResponse({}));
  }

  async queryLoRaJoinPermissions(request: QueryLoRaJoinPermissionsRequest): Promise<QueryLoRaJoinPermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryLoRaJoinPermissionsWithOptions(request, runtime);
  }

  async queryEdgeInstanceDriverWithOptions(request: QueryEdgeInstanceDriverRequest, runtime: $Util.RuntimeOptions): Promise<QueryEdgeInstanceDriverResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryEdgeInstanceDriverResponse>(await this.doRequest("QueryEdgeInstanceDriver", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryEdgeInstanceDriverResponse({}));
  }

  async queryEdgeInstanceDriver(request: QueryEdgeInstanceDriverRequest): Promise<QueryEdgeInstanceDriverResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEdgeInstanceDriverWithOptions(request, runtime);
  }

  async batchUpdateDeviceNicknameWithOptions(request: BatchUpdateDeviceNicknameRequest, runtime: $Util.RuntimeOptions): Promise<BatchUpdateDeviceNicknameResponse> {
    Util.validateModel(request);
    return $tea.cast<BatchUpdateDeviceNicknameResponse>(await this.doRequest("BatchUpdateDeviceNickname", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new BatchUpdateDeviceNicknameResponse({}));
  }

  async batchUpdateDeviceNickname(request: BatchUpdateDeviceNicknameRequest): Promise<BatchUpdateDeviceNicknameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUpdateDeviceNicknameWithOptions(request, runtime);
  }

  async queryDeviceFileWithOptions(request: QueryDeviceFileRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceFileResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryDeviceFileResponse>(await this.doRequest("QueryDeviceFile", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryDeviceFileResponse({}));
  }

  async queryDeviceFile(request: QueryDeviceFileRequest): Promise<QueryDeviceFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceFileWithOptions(request, runtime);
  }

  async queryDeviceFileListWithOptions(request: QueryDeviceFileListRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceFileListResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryDeviceFileListResponse>(await this.doRequest("QueryDeviceFileList", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryDeviceFileListResponse({}));
  }

  async queryDeviceFileList(request: QueryDeviceFileListRequest): Promise<QueryDeviceFileListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceFileListWithOptions(request, runtime);
  }

  async deleteDeviceFileWithOptions(request: DeleteDeviceFileRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDeviceFileResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteDeviceFileResponse>(await this.doRequest("DeleteDeviceFile", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new DeleteDeviceFileResponse({}));
  }

  async deleteDeviceFile(request: DeleteDeviceFileRequest): Promise<DeleteDeviceFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDeviceFileWithOptions(request, runtime);
  }

  async getNodesAddingTaskWithOptions(request: GetNodesAddingTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetNodesAddingTaskResponse> {
    Util.validateModel(request);
    return $tea.cast<GetNodesAddingTaskResponse>(await this.doRequest("GetNodesAddingTask", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new GetNodesAddingTaskResponse({}));
  }

  async getNodesAddingTask(request: GetNodesAddingTaskRequest): Promise<GetNodesAddingTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNodesAddingTaskWithOptions(request, runtime);
  }

  async setDeviceDesiredPropertyWithOptions(request: SetDeviceDesiredPropertyRequest, runtime: $Util.RuntimeOptions): Promise<SetDeviceDesiredPropertyResponse> {
    Util.validateModel(request);
    return $tea.cast<SetDeviceDesiredPropertyResponse>(await this.doRequest("SetDeviceDesiredProperty", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new SetDeviceDesiredPropertyResponse({}));
  }

  async setDeviceDesiredProperty(request: SetDeviceDesiredPropertyRequest): Promise<SetDeviceDesiredPropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDeviceDesiredPropertyWithOptions(request, runtime);
  }

  async queryDeviceDesiredPropertyWithOptions(request: QueryDeviceDesiredPropertyRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceDesiredPropertyResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryDeviceDesiredPropertyResponse>(await this.doRequest("QueryDeviceDesiredProperty", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryDeviceDesiredPropertyResponse({}));
  }

  async queryDeviceDesiredProperty(request: QueryDeviceDesiredPropertyRequest): Promise<QueryDeviceDesiredPropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceDesiredPropertyWithOptions(request, runtime);
  }

  async queryEdgeInstanceHistoricDeploymentWithOptions(request: QueryEdgeInstanceHistoricDeploymentRequest, runtime: $Util.RuntimeOptions): Promise<QueryEdgeInstanceHistoricDeploymentResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryEdgeInstanceHistoricDeploymentResponse>(await this.doRequest("QueryEdgeInstanceHistoricDeployment", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryEdgeInstanceHistoricDeploymentResponse({}));
  }

  async queryEdgeInstanceHistoricDeployment(request: QueryEdgeInstanceHistoricDeploymentRequest): Promise<QueryEdgeInstanceHistoricDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEdgeInstanceHistoricDeploymentWithOptions(request, runtime);
  }

  async createProductTagsWithOptions(request: CreateProductTagsRequest, runtime: $Util.RuntimeOptions): Promise<CreateProductTagsResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateProductTagsResponse>(await this.doRequest("CreateProductTags", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CreateProductTagsResponse({}));
  }

  async createProductTags(request: CreateProductTagsRequest): Promise<CreateProductTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProductTagsWithOptions(request, runtime);
  }

  async updateProductTagsWithOptions(request: UpdateProductTagsRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProductTagsResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateProductTagsResponse>(await this.doRequest("UpdateProductTags", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new UpdateProductTagsResponse({}));
  }

  async updateProductTags(request: UpdateProductTagsRequest): Promise<UpdateProductTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProductTagsWithOptions(request, runtime);
  }

  async deleteProductTagsWithOptions(request: DeleteProductTagsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProductTagsResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteProductTagsResponse>(await this.doRequest("DeleteProductTags", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new DeleteProductTagsResponse({}));
  }

  async deleteProductTags(request: DeleteProductTagsRequest): Promise<DeleteProductTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProductTagsWithOptions(request, runtime);
  }

  async listProductTagsWithOptions(request: ListProductTagsRequest, runtime: $Util.RuntimeOptions): Promise<ListProductTagsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListProductTagsResponse>(await this.doRequest("ListProductTags", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new ListProductTagsResponse({}));
  }

  async listProductTags(request: ListProductTagsRequest): Promise<ListProductTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProductTagsWithOptions(request, runtime);
  }

  async listProductByTagsWithOptions(request: ListProductByTagsRequest, runtime: $Util.RuntimeOptions): Promise<ListProductByTagsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListProductByTagsResponse>(await this.doRequest("ListProductByTags", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new ListProductByTagsResponse({}));
  }

  async listProductByTags(request: ListProductByTagsRequest): Promise<ListProductByTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProductByTagsWithOptions(request, runtime);
  }

  async queryDeviceGroupByTagsWithOptions(request: QueryDeviceGroupByTagsRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceGroupByTagsResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryDeviceGroupByTagsResponse>(await this.doRequest("QueryDeviceGroupByTags", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryDeviceGroupByTagsResponse({}));
  }

  async queryDeviceGroupByTags(request: QueryDeviceGroupByTagsRequest): Promise<QueryDeviceGroupByTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceGroupByTagsWithOptions(request, runtime);
  }

  async batchAddThingTopoWithOptions(request: BatchAddThingTopoRequest, runtime: $Util.RuntimeOptions): Promise<BatchAddThingTopoResponse> {
    Util.validateModel(request);
    return $tea.cast<BatchAddThingTopoResponse>(await this.doRequest("BatchAddThingTopo", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new BatchAddThingTopoResponse({}));
  }

  async batchAddThingTopo(request: BatchAddThingTopoRequest): Promise<BatchAddThingTopoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchAddThingTopoWithOptions(request, runtime);
  }

  async queryDeviceListByDeviceGroupWithOptions(request: QueryDeviceListByDeviceGroupRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceListByDeviceGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryDeviceListByDeviceGroupResponse>(await this.doRequest("QueryDeviceListByDeviceGroup", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryDeviceListByDeviceGroupResponse({}));
  }

  async queryDeviceListByDeviceGroup(request: QueryDeviceListByDeviceGroupRequest): Promise<QueryDeviceListByDeviceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceListByDeviceGroupWithOptions(request, runtime);
  }

  async queryDevicePropertiesDataWithOptions(request: QueryDevicePropertiesDataRequest, runtime: $Util.RuntimeOptions): Promise<QueryDevicePropertiesDataResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryDevicePropertiesDataResponse>(await this.doRequest("QueryDevicePropertiesData", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryDevicePropertiesDataResponse({}));
  }

  async queryDevicePropertiesData(request: QueryDevicePropertiesDataRequest): Promise<QueryDevicePropertiesDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDevicePropertiesDataWithOptions(request, runtime);
  }

  async unbindRoleFromEdgeInstanceWithOptions(request: UnbindRoleFromEdgeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UnbindRoleFromEdgeInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<UnbindRoleFromEdgeInstanceResponse>(await this.doRequest("UnbindRoleFromEdgeInstance", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new UnbindRoleFromEdgeInstanceResponse({}));
  }

  async unbindRoleFromEdgeInstance(request: UnbindRoleFromEdgeInstanceRequest): Promise<UnbindRoleFromEdgeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindRoleFromEdgeInstanceWithOptions(request, runtime);
  }

  async updateEdgeInstanceWithOptions(request: UpdateEdgeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEdgeInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateEdgeInstanceResponse>(await this.doRequest("UpdateEdgeInstance", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new UpdateEdgeInstanceResponse({}));
  }

  async updateEdgeInstance(request: UpdateEdgeInstanceRequest): Promise<UpdateEdgeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEdgeInstanceWithOptions(request, runtime);
  }

  async getEdgeInstanceWithOptions(request: GetEdgeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetEdgeInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<GetEdgeInstanceResponse>(await this.doRequest("GetEdgeInstance", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new GetEdgeInstanceResponse({}));
  }

  async getEdgeInstance(request: GetEdgeInstanceRequest): Promise<GetEdgeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEdgeInstanceWithOptions(request, runtime);
  }

  async deleteEdgeInstanceWithOptions(request: DeleteEdgeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEdgeInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteEdgeInstanceResponse>(await this.doRequest("DeleteEdgeInstance", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new DeleteEdgeInstanceResponse({}));
  }

  async deleteEdgeInstance(request: DeleteEdgeInstanceRequest): Promise<DeleteEdgeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEdgeInstanceWithOptions(request, runtime);
  }

  async createEdgeInstanceWithOptions(request: CreateEdgeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateEdgeInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateEdgeInstanceResponse>(await this.doRequest("CreateEdgeInstance", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CreateEdgeInstanceResponse({}));
  }

  async createEdgeInstance(request: CreateEdgeInstanceRequest): Promise<CreateEdgeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEdgeInstanceWithOptions(request, runtime);
  }

  async queryEdgeInstanceGatewayWithOptions(request: QueryEdgeInstanceGatewayRequest, runtime: $Util.RuntimeOptions): Promise<QueryEdgeInstanceGatewayResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryEdgeInstanceGatewayResponse>(await this.doRequest("QueryEdgeInstanceGateway", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryEdgeInstanceGatewayResponse({}));
  }

  async queryEdgeInstanceGateway(request: QueryEdgeInstanceGatewayRequest): Promise<QueryEdgeInstanceGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEdgeInstanceGatewayWithOptions(request, runtime);
  }

  async queryEdgeInstanceDeviceWithOptions(request: QueryEdgeInstanceDeviceRequest, runtime: $Util.RuntimeOptions): Promise<QueryEdgeInstanceDeviceResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryEdgeInstanceDeviceResponse>(await this.doRequest("QueryEdgeInstanceDevice", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryEdgeInstanceDeviceResponse({}));
  }

  async queryEdgeInstanceDevice(request: QueryEdgeInstanceDeviceRequest): Promise<QueryEdgeInstanceDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEdgeInstanceDeviceWithOptions(request, runtime);
  }

  async bindGatewayToEdgeInstanceWithOptions(request: BindGatewayToEdgeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<BindGatewayToEdgeInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<BindGatewayToEdgeInstanceResponse>(await this.doRequest("BindGatewayToEdgeInstance", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new BindGatewayToEdgeInstanceResponse({}));
  }

  async bindGatewayToEdgeInstance(request: BindGatewayToEdgeInstanceRequest): Promise<BindGatewayToEdgeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindGatewayToEdgeInstanceWithOptions(request, runtime);
  }

  async queryEdgeInstanceWithOptions(request: QueryEdgeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<QueryEdgeInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryEdgeInstanceResponse>(await this.doRequest("QueryEdgeInstance", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryEdgeInstanceResponse({}));
  }

  async queryEdgeInstance(request: QueryEdgeInstanceRequest): Promise<QueryEdgeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEdgeInstanceWithOptions(request, runtime);
  }

  async createEdgeInstanceDeploymentWithOptions(request: CreateEdgeInstanceDeploymentRequest, runtime: $Util.RuntimeOptions): Promise<CreateEdgeInstanceDeploymentResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateEdgeInstanceDeploymentResponse>(await this.doRequest("CreateEdgeInstanceDeployment", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CreateEdgeInstanceDeploymentResponse({}));
  }

  async createEdgeInstanceDeployment(request: CreateEdgeInstanceDeploymentRequest): Promise<CreateEdgeInstanceDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEdgeInstanceDeploymentWithOptions(request, runtime);
  }

  async bindRoleToEdgeInstanceWithOptions(request: BindRoleToEdgeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<BindRoleToEdgeInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<BindRoleToEdgeInstanceResponse>(await this.doRequest("BindRoleToEdgeInstance", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new BindRoleToEdgeInstanceResponse({}));
  }

  async bindRoleToEdgeInstance(request: BindRoleToEdgeInstanceRequest): Promise<BindRoleToEdgeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindRoleToEdgeInstanceWithOptions(request, runtime);
  }

  async querySuperDeviceGroupWithOptions(request: QuerySuperDeviceGroupRequest, runtime: $Util.RuntimeOptions): Promise<QuerySuperDeviceGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<QuerySuperDeviceGroupResponse>(await this.doRequest("QuerySuperDeviceGroup", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QuerySuperDeviceGroupResponse({}));
  }

  async querySuperDeviceGroup(request: QuerySuperDeviceGroupRequest): Promise<QuerySuperDeviceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySuperDeviceGroupWithOptions(request, runtime);
  }

  async queryDeviceByTagsWithOptions(request: QueryDeviceByTagsRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceByTagsResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryDeviceByTagsResponse>(await this.doRequest("QueryDeviceByTags", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryDeviceByTagsResponse({}));
  }

  async queryDeviceByTags(request: QueryDeviceByTagsRequest): Promise<QueryDeviceByTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceByTagsWithOptions(request, runtime);
  }

  async setDevicesPropertyWithOptions(request: SetDevicesPropertyRequest, runtime: $Util.RuntimeOptions): Promise<SetDevicesPropertyResponse> {
    Util.validateModel(request);
    return $tea.cast<SetDevicesPropertyResponse>(await this.doRequest("SetDevicesProperty", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new SetDevicesPropertyResponse({}));
  }

  async setDevicesProperty(request: SetDevicesPropertyRequest): Promise<SetDevicesPropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDevicesPropertyWithOptions(request, runtime);
  }

  async invokeThingsServiceWithOptions(request: InvokeThingsServiceRequest, runtime: $Util.RuntimeOptions): Promise<InvokeThingsServiceResponse> {
    Util.validateModel(request);
    return $tea.cast<InvokeThingsServiceResponse>(await this.doRequest("InvokeThingsService", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new InvokeThingsServiceResponse({}));
  }

  async invokeThingsService(request: InvokeThingsServiceRequest): Promise<InvokeThingsServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.invokeThingsServiceWithOptions(request, runtime);
  }

  async setDeviceGroupTagsWithOptions(request: SetDeviceGroupTagsRequest, runtime: $Util.RuntimeOptions): Promise<SetDeviceGroupTagsResponse> {
    Util.validateModel(request);
    return $tea.cast<SetDeviceGroupTagsResponse>(await this.doRequest("SetDeviceGroupTags", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new SetDeviceGroupTagsResponse({}));
  }

  async setDeviceGroupTags(request: SetDeviceGroupTagsRequest): Promise<SetDeviceGroupTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDeviceGroupTagsWithOptions(request, runtime);
  }

  async queryAppDeviceListWithOptions(request: QueryAppDeviceListRequest, runtime: $Util.RuntimeOptions): Promise<QueryAppDeviceListResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryAppDeviceListResponse>(await this.doRequest("QueryAppDeviceList", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryAppDeviceListResponse({}));
  }

  async queryAppDeviceList(request: QueryAppDeviceListRequest): Promise<QueryAppDeviceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAppDeviceListWithOptions(request, runtime);
  }

  async updateDeviceGroupWithOptions(request: UpdateDeviceGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDeviceGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateDeviceGroupResponse>(await this.doRequest("UpdateDeviceGroup", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new UpdateDeviceGroupResponse({}));
  }

  async updateDeviceGroup(request: UpdateDeviceGroupRequest): Promise<UpdateDeviceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDeviceGroupWithOptions(request, runtime);
  }

  async queryDeviceGroupTagListWithOptions(request: QueryDeviceGroupTagListRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceGroupTagListResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryDeviceGroupTagListResponse>(await this.doRequest("QueryDeviceGroupTagList", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryDeviceGroupTagListResponse({}));
  }

  async queryDeviceGroupTagList(request: QueryDeviceGroupTagListRequest): Promise<QueryDeviceGroupTagListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceGroupTagListWithOptions(request, runtime);
  }

  async queryDeviceGroupListWithOptions(request: QueryDeviceGroupListRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceGroupListResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryDeviceGroupListResponse>(await this.doRequest("QueryDeviceGroupList", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryDeviceGroupListResponse({}));
  }

  async queryDeviceGroupList(request: QueryDeviceGroupListRequest): Promise<QueryDeviceGroupListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceGroupListWithOptions(request, runtime);
  }

  async queryDeviceGroupInfoWithOptions(request: QueryDeviceGroupInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceGroupInfoResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryDeviceGroupInfoResponse>(await this.doRequest("QueryDeviceGroupInfo", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryDeviceGroupInfoResponse({}));
  }

  async queryDeviceGroupInfo(request: QueryDeviceGroupInfoRequest): Promise<QueryDeviceGroupInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceGroupInfoWithOptions(request, runtime);
  }

  async queryDeviceGroupByDeviceWithOptions(request: QueryDeviceGroupByDeviceRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceGroupByDeviceResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryDeviceGroupByDeviceResponse>(await this.doRequest("QueryDeviceGroupByDevice", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryDeviceGroupByDeviceResponse({}));
  }

  async queryDeviceGroupByDevice(request: QueryDeviceGroupByDeviceRequest): Promise<QueryDeviceGroupByDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceGroupByDeviceWithOptions(request, runtime);
  }

  async deleteDeviceGroupWithOptions(request: DeleteDeviceGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDeviceGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteDeviceGroupResponse>(await this.doRequest("DeleteDeviceGroup", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new DeleteDeviceGroupResponse({}));
  }

  async deleteDeviceGroup(request: DeleteDeviceGroupRequest): Promise<DeleteDeviceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDeviceGroupWithOptions(request, runtime);
  }

  async createDeviceGroupWithOptions(request: CreateDeviceGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateDeviceGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateDeviceGroupResponse>(await this.doRequest("CreateDeviceGroup", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CreateDeviceGroupResponse({}));
  }

  async createDeviceGroup(request: CreateDeviceGroupRequest): Promise<CreateDeviceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDeviceGroupWithOptions(request, runtime);
  }

  async batchDeleteDeviceGroupRelationsWithOptions(request: BatchDeleteDeviceGroupRelationsRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeleteDeviceGroupRelationsResponse> {
    Util.validateModel(request);
    return $tea.cast<BatchDeleteDeviceGroupRelationsResponse>(await this.doRequest("BatchDeleteDeviceGroupRelations", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new BatchDeleteDeviceGroupRelationsResponse({}));
  }

  async batchDeleteDeviceGroupRelations(request: BatchDeleteDeviceGroupRelationsRequest): Promise<BatchDeleteDeviceGroupRelationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteDeviceGroupRelationsWithOptions(request, runtime);
  }

  async batchAddDeviceGroupRelationsWithOptions(request: BatchAddDeviceGroupRelationsRequest, runtime: $Util.RuntimeOptions): Promise<BatchAddDeviceGroupRelationsResponse> {
    Util.validateModel(request);
    return $tea.cast<BatchAddDeviceGroupRelationsResponse>(await this.doRequest("BatchAddDeviceGroupRelations", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new BatchAddDeviceGroupRelationsResponse({}));
  }

  async batchAddDeviceGroupRelations(request: BatchAddDeviceGroupRelationsRequest): Promise<BatchAddDeviceGroupRelationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchAddDeviceGroupRelationsWithOptions(request, runtime);
  }

  async RRpcWithOptions(request: RRpcRequest, runtime: $Util.RuntimeOptions): Promise<RRpcResponse> {
    Util.validateModel(request);
    return $tea.cast<RRpcResponse>(await this.doRequest("RRpc", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new RRpcResponse({}));
  }

  async RRpc(request: RRpcRequest): Promise<RRpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.RRpcWithOptions(request, runtime);
  }

  async queryPageByApplyIdWithOptions(request: QueryPageByApplyIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryPageByApplyIdResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryPageByApplyIdResponse>(await this.doRequest("QueryPageByApplyId", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryPageByApplyIdResponse({}));
  }

  async queryPageByApplyId(request: QueryPageByApplyIdRequest): Promise<QueryPageByApplyIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPageByApplyIdWithOptions(request, runtime);
  }

  async queryDeviceWithOptions(request: QueryDeviceRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryDeviceResponse>(await this.doRequest("QueryDevice", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryDeviceResponse({}));
  }

  async queryDevice(request: QueryDeviceRequest): Promise<QueryDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceWithOptions(request, runtime);
  }

  async saveDevicePropWithOptions(request: SaveDevicePropRequest, runtime: $Util.RuntimeOptions): Promise<SaveDevicePropResponse> {
    Util.validateModel(request);
    return $tea.cast<SaveDevicePropResponse>(await this.doRequest("SaveDeviceProp", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new SaveDevicePropResponse({}));
  }

  async saveDeviceProp(request: SaveDevicePropRequest): Promise<SaveDevicePropResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveDevicePropWithOptions(request, runtime);
  }

  async queryTopicRouteTableWithOptions(request: QueryTopicRouteTableRequest, runtime: $Util.RuntimeOptions): Promise<QueryTopicRouteTableResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryTopicRouteTableResponse>(await this.doRequest("QueryTopicRouteTable", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryTopicRouteTableResponse({}));
  }

  async queryTopicRouteTable(request: QueryTopicRouteTableRequest): Promise<QueryTopicRouteTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTopicRouteTableWithOptions(request, runtime);
  }

  async queryTopicReverseRouteTableWithOptions(request: QueryTopicReverseRouteTableRequest, runtime: $Util.RuntimeOptions): Promise<QueryTopicReverseRouteTableResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryTopicReverseRouteTableResponse>(await this.doRequest("QueryTopicReverseRouteTable", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryTopicReverseRouteTableResponse({}));
  }

  async queryTopicReverseRouteTable(request: QueryTopicReverseRouteTableRequest): Promise<QueryTopicReverseRouteTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTopicReverseRouteTableWithOptions(request, runtime);
  }

  async pubBroadcastWithOptions(request: PubBroadcastRequest, runtime: $Util.RuntimeOptions): Promise<PubBroadcastResponse> {
    Util.validateModel(request);
    return $tea.cast<PubBroadcastResponse>(await this.doRequest("PubBroadcast", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new PubBroadcastResponse({}));
  }

  async pubBroadcast(request: PubBroadcastRequest): Promise<PubBroadcastResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pubBroadcastWithOptions(request, runtime);
  }

  async deleteTopicRouteTableWithOptions(request: DeleteTopicRouteTableRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTopicRouteTableResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteTopicRouteTableResponse>(await this.doRequest("DeleteTopicRouteTable", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new DeleteTopicRouteTableResponse({}));
  }

  async deleteTopicRouteTable(request: DeleteTopicRouteTableRequest): Promise<DeleteTopicRouteTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTopicRouteTableWithOptions(request, runtime);
  }

  async deleteDevicePropWithOptions(request: DeleteDevicePropRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDevicePropResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteDevicePropResponse>(await this.doRequest("DeleteDeviceProp", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new DeleteDevicePropResponse({}));
  }

  async deleteDeviceProp(request: DeleteDevicePropRequest): Promise<DeleteDevicePropResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDevicePropWithOptions(request, runtime);
  }

  async createTopicRouteTableWithOptions(request: CreateTopicRouteTableRequest, runtime: $Util.RuntimeOptions): Promise<CreateTopicRouteTableResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateTopicRouteTableResponse>(await this.doRequest("CreateTopicRouteTable", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CreateTopicRouteTableResponse({}));
  }

  async createTopicRouteTable(request: CreateTopicRouteTableRequest): Promise<CreateTopicRouteTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTopicRouteTableWithOptions(request, runtime);
  }

  async batchGetDeviceStateWithOptions(request: BatchGetDeviceStateRequest, runtime: $Util.RuntimeOptions): Promise<BatchGetDeviceStateResponse> {
    Util.validateModel(request);
    return $tea.cast<BatchGetDeviceStateResponse>(await this.doRequest("BatchGetDeviceState", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new BatchGetDeviceStateResponse({}));
  }

  async batchGetDeviceState(request: BatchGetDeviceStateRequest): Promise<BatchGetDeviceStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchGetDeviceStateWithOptions(request, runtime);
  }

  async updateRuleActionWithOptions(request: UpdateRuleActionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRuleActionResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateRuleActionResponse>(await this.doRequest("UpdateRuleAction", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new UpdateRuleActionResponse({}));
  }

  async updateRuleAction(request: UpdateRuleActionRequest): Promise<UpdateRuleActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRuleActionWithOptions(request, runtime);
  }

  async updateRuleWithOptions(request: UpdateRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateRuleResponse>(await this.doRequest("UpdateRule", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new UpdateRuleResponse({}));
  }

  async updateRule(request: UpdateRuleRequest): Promise<UpdateRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRuleWithOptions(request, runtime);
  }

  async updateProductTopicWithOptions(request: UpdateProductTopicRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProductTopicResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateProductTopicResponse>(await this.doRequest("UpdateProductTopic", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new UpdateProductTopicResponse({}));
  }

  async updateProductTopic(request: UpdateProductTopicRequest): Promise<UpdateProductTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProductTopicWithOptions(request, runtime);
  }

  async updateDeviceShadowWithOptions(request: UpdateDeviceShadowRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDeviceShadowResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateDeviceShadowResponse>(await this.doRequest("UpdateDeviceShadow", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new UpdateDeviceShadowResponse({}));
  }

  async updateDeviceShadow(request: UpdateDeviceShadowRequest): Promise<UpdateDeviceShadowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDeviceShadowWithOptions(request, runtime);
  }

  async stopRuleWithOptions(request: StopRuleRequest, runtime: $Util.RuntimeOptions): Promise<StopRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<StopRuleResponse>(await this.doRequest("StopRule", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new StopRuleResponse({}));
  }

  async stopRule(request: StopRuleRequest): Promise<StopRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopRuleWithOptions(request, runtime);
  }

  async startRuleWithOptions(request: StartRuleRequest, runtime: $Util.RuntimeOptions): Promise<StartRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<StartRuleResponse>(await this.doRequest("StartRule", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new StartRuleResponse({}));
  }

  async startRule(request: StartRuleRequest): Promise<StartRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startRuleWithOptions(request, runtime);
  }

  async queryProductTopicWithOptions(request: QueryProductTopicRequest, runtime: $Util.RuntimeOptions): Promise<QueryProductTopicResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryProductTopicResponse>(await this.doRequest("QueryProductTopic", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryProductTopicResponse({}));
  }

  async queryProductTopic(request: QueryProductTopicRequest): Promise<QueryProductTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryProductTopicWithOptions(request, runtime);
  }

  async queryDevicePropWithOptions(request: QueryDevicePropRequest, runtime: $Util.RuntimeOptions): Promise<QueryDevicePropResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryDevicePropResponse>(await this.doRequest("QueryDeviceProp", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryDevicePropResponse({}));
  }

  async queryDeviceProp(request: QueryDevicePropRequest): Promise<QueryDevicePropResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDevicePropWithOptions(request, runtime);
  }

  async pubWithOptions(request: PubRequest, runtime: $Util.RuntimeOptions): Promise<PubResponse> {
    Util.validateModel(request);
    return $tea.cast<PubResponse>(await this.doRequest("Pub", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new PubResponse({}));
  }

  async pub(request: PubRequest): Promise<PubResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pubWithOptions(request, runtime);
  }

  async listRuleActionsWithOptions(request: ListRuleActionsRequest, runtime: $Util.RuntimeOptions): Promise<ListRuleActionsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListRuleActionsResponse>(await this.doRequest("ListRuleActions", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new ListRuleActionsResponse({}));
  }

  async listRuleActions(request: ListRuleActionsRequest): Promise<ListRuleActionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRuleActionsWithOptions(request, runtime);
  }

  async listRuleWithOptions(request: ListRuleRequest, runtime: $Util.RuntimeOptions): Promise<ListRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<ListRuleResponse>(await this.doRequest("ListRule", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new ListRuleResponse({}));
  }

  async listRule(request: ListRuleRequest): Promise<ListRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRuleWithOptions(request, runtime);
  }

  async getRuleActionWithOptions(request: GetRuleActionRequest, runtime: $Util.RuntimeOptions): Promise<GetRuleActionResponse> {
    Util.validateModel(request);
    return $tea.cast<GetRuleActionResponse>(await this.doRequest("GetRuleAction", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new GetRuleActionResponse({}));
  }

  async getRuleAction(request: GetRuleActionRequest): Promise<GetRuleActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRuleActionWithOptions(request, runtime);
  }

  async getRuleWithOptions(request: GetRuleRequest, runtime: $Util.RuntimeOptions): Promise<GetRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<GetRuleResponse>(await this.doRequest("GetRule", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new GetRuleResponse({}));
  }

  async getRule(request: GetRuleRequest): Promise<GetRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRuleWithOptions(request, runtime);
  }

  async getDeviceShadowWithOptions(request: GetDeviceShadowRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceShadowResponse> {
    Util.validateModel(request);
    return $tea.cast<GetDeviceShadowResponse>(await this.doRequest("GetDeviceShadow", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new GetDeviceShadowResponse({}));
  }

  async getDeviceShadow(request: GetDeviceShadowRequest): Promise<GetDeviceShadowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceShadowWithOptions(request, runtime);
  }

  async deleteRuleActionWithOptions(request: DeleteRuleActionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRuleActionResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteRuleActionResponse>(await this.doRequest("DeleteRuleAction", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new DeleteRuleActionResponse({}));
  }

  async deleteRuleAction(request: DeleteRuleActionRequest): Promise<DeleteRuleActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRuleActionWithOptions(request, runtime);
  }

  async deleteRuleWithOptions(request: DeleteRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteRuleResponse>(await this.doRequest("DeleteRule", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new DeleteRuleResponse({}));
  }

  async deleteRule(request: DeleteRuleRequest): Promise<DeleteRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRuleWithOptions(request, runtime);
  }

  async deleteProductTopicWithOptions(request: DeleteProductTopicRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProductTopicResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteProductTopicResponse>(await this.doRequest("DeleteProductTopic", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new DeleteProductTopicResponse({}));
  }

  async deleteProductTopic(request: DeleteProductTopicRequest): Promise<DeleteProductTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProductTopicWithOptions(request, runtime);
  }

  async createRuleActionWithOptions(request: CreateRuleActionRequest, runtime: $Util.RuntimeOptions): Promise<CreateRuleActionResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateRuleActionResponse>(await this.doRequest("CreateRuleAction", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CreateRuleActionResponse({}));
  }

  async createRuleAction(request: CreateRuleActionRequest): Promise<CreateRuleActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRuleActionWithOptions(request, runtime);
  }

  async createRuleWithOptions(request: CreateRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateRuleResponse>(await this.doRequest("CreateRule", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CreateRuleResponse({}));
  }

  async createRule(request: CreateRuleRequest): Promise<CreateRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRuleWithOptions(request, runtime);
  }

  async createProductTopicWithOptions(request: CreateProductTopicRequest, runtime: $Util.RuntimeOptions): Promise<CreateProductTopicResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateProductTopicResponse>(await this.doRequest("CreateProductTopic", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CreateProductTopicResponse({}));
  }

  async createProductTopic(request: CreateProductTopicRequest): Promise<CreateProductTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProductTopicWithOptions(request, runtime);
  }

  async queryBatchRegisterDeviceStatusWithOptions(request: QueryBatchRegisterDeviceStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryBatchRegisterDeviceStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryBatchRegisterDeviceStatusResponse>(await this.doRequest("QueryBatchRegisterDeviceStatus", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryBatchRegisterDeviceStatusResponse({}));
  }

  async queryBatchRegisterDeviceStatus(request: QueryBatchRegisterDeviceStatusRequest): Promise<QueryBatchRegisterDeviceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBatchRegisterDeviceStatusWithOptions(request, runtime);
  }

  async getGatewayBySubDeviceWithOptions(request: GetGatewayBySubDeviceRequest, runtime: $Util.RuntimeOptions): Promise<GetGatewayBySubDeviceResponse> {
    Util.validateModel(request);
    return $tea.cast<GetGatewayBySubDeviceResponse>(await this.doRequest("GetGatewayBySubDevice", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new GetGatewayBySubDeviceResponse({}));
  }

  async getGatewayBySubDevice(request: GetGatewayBySubDeviceRequest): Promise<GetGatewayBySubDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGatewayBySubDeviceWithOptions(request, runtime);
  }

  async resetThingWithOptions(request: ResetThingRequest, runtime: $Util.RuntimeOptions): Promise<ResetThingResponse> {
    Util.validateModel(request);
    return $tea.cast<ResetThingResponse>(await this.doRequest("ResetThing", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new ResetThingResponse({}));
  }

  async resetThing(request: ResetThingRequest): Promise<ResetThingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetThingWithOptions(request, runtime);
  }

  async removeThingTopoWithOptions(request: RemoveThingTopoRequest, runtime: $Util.RuntimeOptions): Promise<RemoveThingTopoResponse> {
    Util.validateModel(request);
    return $tea.cast<RemoveThingTopoResponse>(await this.doRequest("RemoveThingTopo", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new RemoveThingTopoResponse({}));
  }

  async removeThingTopo(request: RemoveThingTopoRequest): Promise<RemoveThingTopoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeThingTopoWithOptions(request, runtime);
  }

  async notifyAddThingTopoWithOptions(request: NotifyAddThingTopoRequest, runtime: $Util.RuntimeOptions): Promise<NotifyAddThingTopoResponse> {
    Util.validateModel(request);
    return $tea.cast<NotifyAddThingTopoResponse>(await this.doRequest("NotifyAddThingTopo", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new NotifyAddThingTopoResponse({}));
  }

  async notifyAddThingTopo(request: NotifyAddThingTopoRequest): Promise<NotifyAddThingTopoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.notifyAddThingTopoWithOptions(request, runtime);
  }

  async getThingTopoWithOptions(request: GetThingTopoRequest, runtime: $Util.RuntimeOptions): Promise<GetThingTopoResponse> {
    Util.validateModel(request);
    return $tea.cast<GetThingTopoResponse>(await this.doRequest("GetThingTopo", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new GetThingTopoResponse({}));
  }

  async getThingTopo(request: GetThingTopoRequest): Promise<GetThingTopoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getThingTopoWithOptions(request, runtime);
  }

  async queryDevicePropertyStatusWithOptions(request: QueryDevicePropertyStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryDevicePropertyStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryDevicePropertyStatusResponse>(await this.doRequest("QueryDevicePropertyStatus", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryDevicePropertyStatusResponse({}));
  }

  async queryDevicePropertyStatus(request: QueryDevicePropertyStatusRequest): Promise<QueryDevicePropertyStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDevicePropertyStatusWithOptions(request, runtime);
  }

  async queryDevicePropertyDataWithOptions(request: QueryDevicePropertyDataRequest, runtime: $Util.RuntimeOptions): Promise<QueryDevicePropertyDataResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryDevicePropertyDataResponse>(await this.doRequest("QueryDevicePropertyData", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryDevicePropertyDataResponse({}));
  }

  async queryDevicePropertyData(request: QueryDevicePropertyDataRequest): Promise<QueryDevicePropertyDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDevicePropertyDataWithOptions(request, runtime);
  }

  async batchRegisterDeviceWithApplyIdWithOptions(request: BatchRegisterDeviceWithApplyIdRequest, runtime: $Util.RuntimeOptions): Promise<BatchRegisterDeviceWithApplyIdResponse> {
    Util.validateModel(request);
    return $tea.cast<BatchRegisterDeviceWithApplyIdResponse>(await this.doRequest("BatchRegisterDeviceWithApplyId", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new BatchRegisterDeviceWithApplyIdResponse({}));
  }

  async batchRegisterDeviceWithApplyId(request: BatchRegisterDeviceWithApplyIdRequest): Promise<BatchRegisterDeviceWithApplyIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchRegisterDeviceWithApplyIdWithOptions(request, runtime);
  }

  async batchRegisterDeviceWithOptions(request: BatchRegisterDeviceRequest, runtime: $Util.RuntimeOptions): Promise<BatchRegisterDeviceResponse> {
    Util.validateModel(request);
    return $tea.cast<BatchRegisterDeviceResponse>(await this.doRequest("BatchRegisterDevice", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new BatchRegisterDeviceResponse({}));
  }

  async batchRegisterDevice(request: BatchRegisterDeviceRequest): Promise<BatchRegisterDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchRegisterDeviceWithOptions(request, runtime);
  }

  async batchCheckDeviceNamesWithOptions(request: BatchCheckDeviceNamesRequest, runtime: $Util.RuntimeOptions): Promise<BatchCheckDeviceNamesResponse> {
    Util.validateModel(request);
    return $tea.cast<BatchCheckDeviceNamesResponse>(await this.doRequest("BatchCheckDeviceNames", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new BatchCheckDeviceNamesResponse({}));
  }

  async batchCheckDeviceNames(request: BatchCheckDeviceNamesRequest): Promise<BatchCheckDeviceNamesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchCheckDeviceNamesWithOptions(request, runtime);
  }

  async updateProductWithOptions(request: UpdateProductRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProductResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateProductResponse>(await this.doRequest("UpdateProduct", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new UpdateProductResponse({}));
  }

  async updateProduct(request: UpdateProductRequest): Promise<UpdateProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProductWithOptions(request, runtime);
  }

  async setDevicePropertyWithOptions(request: SetDevicePropertyRequest, runtime: $Util.RuntimeOptions): Promise<SetDevicePropertyResponse> {
    Util.validateModel(request);
    return $tea.cast<SetDevicePropertyResponse>(await this.doRequest("SetDeviceProperty", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new SetDevicePropertyResponse({}));
  }

  async setDeviceProperty(request: SetDevicePropertyRequest): Promise<SetDevicePropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDevicePropertyWithOptions(request, runtime);
  }

  async registerDeviceWithOptions(request: RegisterDeviceRequest, runtime: $Util.RuntimeOptions): Promise<RegisterDeviceResponse> {
    Util.validateModel(request);
    return $tea.cast<RegisterDeviceResponse>(await this.doRequest("RegisterDevice", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new RegisterDeviceResponse({}));
  }

  async registerDevice(request: RegisterDeviceRequest): Promise<RegisterDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerDeviceWithOptions(request, runtime);
  }

  async queryProductListWithOptions(request: QueryProductListRequest, runtime: $Util.RuntimeOptions): Promise<QueryProductListResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryProductListResponse>(await this.doRequest("QueryProductList", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryProductListResponse({}));
  }

  async queryProductList(request: QueryProductListRequest): Promise<QueryProductListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryProductListWithOptions(request, runtime);
  }

  async queryProductWithOptions(request: QueryProductRequest, runtime: $Util.RuntimeOptions): Promise<QueryProductResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryProductResponse>(await this.doRequest("QueryProduct", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryProductResponse({}));
  }

  async queryProduct(request: QueryProductRequest): Promise<QueryProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryProductWithOptions(request, runtime);
  }

  async queryDeviceStatisticsWithOptions(request: QueryDeviceStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceStatisticsResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryDeviceStatisticsResponse>(await this.doRequest("QueryDeviceStatistics", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryDeviceStatisticsResponse({}));
  }

  async queryDeviceStatistics(request: QueryDeviceStatisticsRequest): Promise<QueryDeviceStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceStatisticsWithOptions(request, runtime);
  }

  async queryDeviceServiceDataWithOptions(request: QueryDeviceServiceDataRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceServiceDataResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryDeviceServiceDataResponse>(await this.doRequest("QueryDeviceServiceData", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryDeviceServiceDataResponse({}));
  }

  async queryDeviceServiceData(request: QueryDeviceServiceDataRequest): Promise<QueryDeviceServiceDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceServiceDataWithOptions(request, runtime);
  }

  async queryDeviceEventDataWithOptions(request: QueryDeviceEventDataRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceEventDataResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryDeviceEventDataResponse>(await this.doRequest("QueryDeviceEventData", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryDeviceEventDataResponse({}));
  }

  async queryDeviceEventData(request: QueryDeviceEventDataRequest): Promise<QueryDeviceEventDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceEventDataWithOptions(request, runtime);
  }

  async queryDeviceDetailWithOptions(request: QueryDeviceDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceDetailResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryDeviceDetailResponse>(await this.doRequest("QueryDeviceDetail", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new QueryDeviceDetailResponse({}));
  }

  async queryDeviceDetail(request: QueryDeviceDetailRequest): Promise<QueryDeviceDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceDetailWithOptions(request, runtime);
  }

  async invokeThingServiceWithOptions(request: InvokeThingServiceRequest, runtime: $Util.RuntimeOptions): Promise<InvokeThingServiceResponse> {
    Util.validateModel(request);
    return $tea.cast<InvokeThingServiceResponse>(await this.doRequest("InvokeThingService", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new InvokeThingServiceResponse({}));
  }

  async invokeThingService(request: InvokeThingServiceRequest): Promise<InvokeThingServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.invokeThingServiceWithOptions(request, runtime);
  }

  async getDeviceStatusWithOptions(request: GetDeviceStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<GetDeviceStatusResponse>(await this.doRequest("GetDeviceStatus", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new GetDeviceStatusResponse({}));
  }

  async getDeviceStatus(request: GetDeviceStatusRequest): Promise<GetDeviceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceStatusWithOptions(request, runtime);
  }

  async enableThingWithOptions(request: EnableThingRequest, runtime: $Util.RuntimeOptions): Promise<EnableThingResponse> {
    Util.validateModel(request);
    return $tea.cast<EnableThingResponse>(await this.doRequest("EnableThing", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new EnableThingResponse({}));
  }

  async enableThing(request: EnableThingRequest): Promise<EnableThingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableThingWithOptions(request, runtime);
  }

  async disableThingWithOptions(request: DisableThingRequest, runtime: $Util.RuntimeOptions): Promise<DisableThingResponse> {
    Util.validateModel(request);
    return $tea.cast<DisableThingResponse>(await this.doRequest("DisableThing", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new DisableThingResponse({}));
  }

  async disableThing(request: DisableThingRequest): Promise<DisableThingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableThingWithOptions(request, runtime);
  }

  async deleteProductWithOptions(request: DeleteProductRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProductResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteProductResponse>(await this.doRequest("DeleteProduct", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new DeleteProductResponse({}));
  }

  async deleteProduct(request: DeleteProductRequest): Promise<DeleteProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProductWithOptions(request, runtime);
  }

  async deleteDeviceWithOptions(request: DeleteDeviceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDeviceResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteDeviceResponse>(await this.doRequest("DeleteDevice", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new DeleteDeviceResponse({}));
  }

  async deleteDevice(request: DeleteDeviceRequest): Promise<DeleteDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDeviceWithOptions(request, runtime);
  }

  async createProductWithOptions(request: CreateProductRequest, runtime: $Util.RuntimeOptions): Promise<CreateProductResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateProductResponse>(await this.doRequest("CreateProduct", "HTTPS", "POST", "2018-01-20", "AK", null, $tea.toMap(request), runtime), new CreateProductResponse({}));
  }

  async createProduct(request: CreateProductRequest): Promise<CreateProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProductWithOptions(request, runtime);
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
