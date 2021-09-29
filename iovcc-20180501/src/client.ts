// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ListDeviceBrandsRequest extends $tea.Model {
  projectId?: string;
  deviceBrandId?: number;
  deviceBrand?: string;
  start?: string;
  length?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      deviceBrandId: 'DeviceBrandId',
      deviceBrand: 'DeviceBrand',
      start: 'Start',
      length: 'Length',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      deviceBrandId: 'number',
      deviceBrand: 'string',
      start: 'string',
      length: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceBrandsResponseBody extends $tea.Model {
  deviceBrands?: ListDeviceBrandsResponseBodyDeviceBrands[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceBrands: 'DeviceBrands',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceBrands: { 'type': 'array', 'itemType': ListDeviceBrandsResponseBodyDeviceBrands },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceBrandsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDeviceBrandsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDeviceBrandsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionExecuteLogRequest extends $tea.Model {
  projectId?: string;
  fileId?: number;
  functionName?: string;
  env?: number;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      fileId: 'FileId',
      functionName: 'FunctionName',
      env: 'Env',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      fileId: 'number',
      functionName: 'string',
      env: 'number',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionExecuteLogResponseBody extends $tea.Model {
  logList?: ListFunctionExecuteLogResponseBodyLogList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logList: 'LogList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logList: ListFunctionExecuteLogResponseBodyLogList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionExecuteLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFunctionExecuteLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFunctionExecuteLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceModelsRequest extends $tea.Model {
  deviceModelId?: number;
  length?: string;
  deviceModel?: string;
  deviceBrand?: string;
  start?: string;
  projectId?: string;
  deviceBrandId?: number;
  static names(): { [key: string]: string } {
    return {
      deviceModelId: 'DeviceModelId',
      length: 'Length',
      deviceModel: 'DeviceModel',
      deviceBrand: 'DeviceBrand',
      start: 'Start',
      projectId: 'ProjectId',
      deviceBrandId: 'DeviceBrandId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceModelId: 'number',
      length: 'string',
      deviceModel: 'string',
      deviceBrand: 'string',
      start: 'string',
      projectId: 'string',
      deviceBrandId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceModelsResponseBody extends $tea.Model {
  deviceModels?: ListDeviceModelsResponseBodyDeviceModels[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceModels: 'DeviceModels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceModels: { 'type': 'array', 'itemType': ListDeviceModelsResponseBodyDeviceModels },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceModelsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDeviceModelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDeviceModelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttMessageLogsRequest extends $tea.Model {
  appKey?: string;
  projectId?: string;
  topic?: string;
  mid?: string;
  clientId?: string;
  startTime?: number;
  endTime?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      projectId: 'ProjectId',
      topic: 'Topic',
      mid: 'Mid',
      clientId: 'ClientId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      projectId: 'string',
      topic: 'string',
      mid: 'string',
      clientId: 'string',
      startTime: 'number',
      endTime: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttMessageLogsResponseBody extends $tea.Model {
  requestId?: string;
  traces?: ListMqttMessageLogsResponseBodyTraces;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      traces: 'Traces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      traces: ListMqttMessageLogsResponseBodyTraces,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttMessageLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMqttMessageLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMqttMessageLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceRequest extends $tea.Model {
  projectId?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfflineMessagesRequest extends $tea.Model {
  pageSize?: number;
  projectId?: string;
  type?: string;
  value?: string;
  pageIndex?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      type: 'Type',
      value: 'Value',
      pageIndex: 'PageIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      projectId: 'string',
      type: 'string',
      value: 'string',
      pageIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfflineMessagesResponseBody extends $tea.Model {
  requestId?: string;
  offlineMessages?: ListOfflineMessagesResponseBodyOfflineMessages;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      offlineMessages: 'OfflineMessages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      offlineMessages: ListOfflineMessagesResponseBodyOfflineMessages,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfflineMessagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOfflineMessagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOfflineMessagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMessageRequest extends $tea.Model {
  appPackage?: string;
  desc?: string;
  act?: string;
  uri?: string;
  pkgContent?: string;
  customContent?: string;
  receiverType?: string;
  receiverValues?: string;
  expiredTime?: number;
  title?: string;
  projectId?: string;
  appKey?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      appPackage: 'AppPackage',
      desc: 'Desc',
      act: 'Act',
      uri: 'Uri',
      pkgContent: 'PkgContent',
      customContent: 'CustomContent',
      receiverType: 'ReceiverType',
      receiverValues: 'ReceiverValues',
      expiredTime: 'ExpiredTime',
      title: 'Title',
      projectId: 'ProjectId',
      appKey: 'AppKey',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appPackage: 'string',
      desc: 'string',
      act: 'string',
      uri: 'string',
      pkgContent: 'string',
      customContent: 'string',
      receiverType: 'string',
      receiverValues: 'string',
      expiredTime: 'number',
      title: 'string',
      projectId: 'string',
      appKey: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMessageResponseBody extends $tea.Model {
  requestId?: string;
  mid?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      mid: 'Mid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      mid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PushMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PushMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomizedFilterRequest extends $tea.Model {
  projectId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomizedFilterResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomizedFilterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCustomizedFilterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCustomizedFilterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMqttClientStatusRequest extends $tea.Model {
  appKey?: string;
  clientId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      clientId: 'ClientId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      clientId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMqttClientStatusResponseBody extends $tea.Model {
  clientStatus?: DescribeMqttClientStatusResponseBodyClientStatus;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientStatus: 'ClientStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientStatus: DescribeMqttClientStatusResponseBodyClientStatus,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMqttClientStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMqttClientStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMqttClientStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceRequest extends $tea.Model {
  deviceId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceModelRequest extends $tea.Model {
  initUsageType?: string;
  modelName?: string;
  id?: string;
  brandName?: string;
  description?: string;
  deviceType?: string;
  canCreateDeviceId?: string;
  projectId?: string;
  hardwareType?: string;
  securityChip?: string;
  osPlatform?: string;
  objectKey?: string;
  deviceName?: string;
  static names(): { [key: string]: string } {
    return {
      initUsageType: 'InitUsageType',
      modelName: 'ModelName',
      id: 'Id',
      brandName: 'BrandName',
      description: 'Description',
      deviceType: 'DeviceType',
      canCreateDeviceId: 'CanCreateDeviceId',
      projectId: 'ProjectId',
      hardwareType: 'HardwareType',
      securityChip: 'SecurityChip',
      osPlatform: 'OsPlatform',
      objectKey: 'ObjectKey',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      initUsageType: 'string',
      modelName: 'string',
      id: 'string',
      brandName: 'string',
      description: 'string',
      deviceType: 'string',
      canCreateDeviceId: 'string',
      projectId: 'string',
      hardwareType: 'string',
      securityChip: 'string',
      osPlatform: 'string',
      objectKey: 'string',
      deviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceModelResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDeviceModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDeviceModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApiGatewayAppStatusRequest extends $tea.Model {
  projectId?: string;
  gatewayAppId?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      gatewayAppId: 'GatewayAppId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      gatewayAppId: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApiGatewayAppStatusResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApiGatewayAppStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateApiGatewayAppStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateApiGatewayAppStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCameraShootingAttachmentsRequest extends $tea.Model {
  projectId?: string;
  edgeDeviceId?: string;
  shootingRecordId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      edgeDeviceId: 'EdgeDeviceId',
      shootingRecordId: 'ShootingRecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      edgeDeviceId: 'string',
      shootingRecordId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCameraShootingAttachmentsResponseBody extends $tea.Model {
  requestId?: string;
  attachments?: ListCameraShootingAttachmentsResponseBodyAttachments[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      attachments: 'Attachments',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      attachments: { 'type': 'array', 'itemType': ListCameraShootingAttachmentsResponseBodyAttachments },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCameraShootingAttachmentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCameraShootingAttachmentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCameraShootingAttachmentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistHistoriesRequest extends $tea.Model {
  perPage?: number;
  pageIndex?: number;
  condition?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      perPage: 'PerPage',
      pageIndex: 'PageIndex',
      condition: 'Condition',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      perPage: 'number',
      pageIndex: 'number',
      condition: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistHistoriesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  perPage?: number;
  histories?: ListAssistHistoriesResponseBodyHistories[];
  pageIndex?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      perPage: 'PerPage',
      histories: 'Histories',
      pageIndex: 'PageIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      perPage: 'number',
      histories: { 'type': 'array', 'itemType': ListAssistHistoriesResponseBodyHistories },
      pageIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistHistoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAssistHistoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAssistHistoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceSystemUpdateFunnelEventsRequest extends $tea.Model {
  originalId?: string;
  projectId?: string;
  targetVersion?: string;
  idType?: string;
  static names(): { [key: string]: string } {
    return {
      originalId: 'OriginalId',
      projectId: 'ProjectId',
      targetVersion: 'TargetVersion',
      idType: 'IdType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalId: 'string',
      projectId: 'string',
      targetVersion: 'string',
      idType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceSystemUpdateFunnelEventsResponseBody extends $tea.Model {
  requestId?: string;
  eventList?: GetDeviceSystemUpdateFunnelEventsResponseBodyEventList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      eventList: 'EventList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      eventList: { 'type': 'array', 'itemType': GetDeviceSystemUpdateFunnelEventsResponseBodyEventList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceSystemUpdateFunnelEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDeviceSystemUpdateFunnelEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDeviceSystemUpdateFunnelEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAllCustomizedFiltersRequest extends $tea.Model {
  projectId?: string;
  versionId?: string;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionId: 'VersionId',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionId: 'string',
      versionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAllCustomizedFiltersResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAllCustomizedFiltersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAllCustomizedFiltersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAllCustomizedFiltersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAssistFileUploadUrlRequest extends $tea.Model {
  filename?: string;
  projectId?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      filename: 'Filename',
      projectId: 'ProjectId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filename: 'string',
      projectId: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAssistFileUploadUrlResponseBody extends $tea.Model {
  fileKey?: string;
  uploadUrl?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fileKey: 'FileKey',
      uploadUrl: 'UploadUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileKey: 'string',
      uploadUrl: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAssistFileUploadUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateAssistFileUploadUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateAssistFileUploadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssistWSServerAddressRequest extends $tea.Model {
  projectId?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssistWSServerAddressResponseBody extends $tea.Model {
  requestId?: string;
  wsServer?: string;
  OTP?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      wsServer: 'WsServer',
      OTP: 'OTP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      wsServer: 'string',
      OTP: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssistWSServerAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAssistWSServerAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAssistWSServerAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindPrepublishesByVersionIdRequest extends $tea.Model {
  projectId?: string;
  versionId?: number;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionId: 'VersionId',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionId: 'number',
      versionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindPrepublishesByVersionIdResponseBody extends $tea.Model {
  requestId?: string;
  prepublishList?: FindPrepublishesByVersionIdResponseBodyPrepublishList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      prepublishList: 'PrepublishList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      prepublishList: { 'type': 'array', 'itemType': FindPrepublishesByVersionIdResponseBodyPrepublishList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindPrepublishesByVersionIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FindPrepublishesByVersionIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FindPrepublishesByVersionIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionMessagesRequest extends $tea.Model {
  projectId?: string;
  pageIndex?: number;
  pageSize?: number;
  messageType?: string;
  testId?: string;
  versionId?: string;
  sendRecordId?: string;
  deviceId?: string;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      messageType: 'MessageType',
      testId: 'TestId',
      versionId: 'VersionId',
      sendRecordId: 'SendRecordId',
      deviceId: 'DeviceId',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      messageType: 'string',
      testId: 'string',
      versionId: 'string',
      sendRecordId: 'string',
      deviceId: 'string',
      versionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionMessagesResponseBody extends $tea.Model {
  requestId?: string;
  messageList?: FindVersionMessagesResponseBodyMessageList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      messageList: 'MessageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      messageList: FindVersionMessagesResponseBodyMessageList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionMessagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FindVersionMessagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FindVersionMessagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUpstreamAppServerRequest extends $tea.Model {
  id?: number;
  name?: string;
  tags?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      tags: 'Tags',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      tags: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUpstreamAppServerResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUpstreamAppServerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateUpstreamAppServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateUpstreamAppServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVehicleTrackRequest extends $tea.Model {
  projectId?: string;
  deviceId?: string;
  startTime?: number;
  endTime?: number;
  vin?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      deviceId: 'DeviceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      vin: 'Vin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      deviceId: 'string',
      startTime: 'number',
      endTime: 'number',
      vin: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVehicleTrackResponseBody extends $tea.Model {
  requestId?: string;
  points?: GetVehicleTrackResponseBodyPoints[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      points: 'Points',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      points: { 'type': 'array', 'itemType': GetVehicleTrackResponseBodyPoints },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVehicleTrackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetVehicleTrackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetVehicleTrackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVersionTestRequest extends $tea.Model {
  deviceGroupId?: string;
  description?: string;
  versionId?: string;
  versionType?: string;
  name?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceGroupId: 'DeviceGroupId',
      description: 'Description',
      versionId: 'VersionId',
      versionType: 'VersionType',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroupId: 'string',
      description: 'string',
      versionId: 'string',
      versionType: 'string',
      name: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVersionTestResponseBody extends $tea.Model {
  testId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      testId: 'TestId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      testId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVersionTestResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateVersionTestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVersionTestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployedFunctionsRequest extends $tea.Model {
  projectId?: string;
  fileId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      fileId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployedFunctionsResponseBody extends $tea.Model {
  requestId?: string;
  functions?: ListDeployedFunctionsResponseBodyFunctions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      functions: 'Functions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      functions: { 'type': 'array', 'itemType': ListDeployedFunctionsResponseBodyFunctions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployedFunctionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDeployedFunctionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDeployedFunctionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceModelRequest extends $tea.Model {
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceModelResponseBody extends $tea.Model {
  modelList?: ListDeviceModelResponseBodyModelList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      modelList: 'ModelList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelList: { 'type': 'array', 'itemType': ListDeviceModelResponseBodyModelList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDeviceModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDeviceModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchemaSubscribeRequest extends $tea.Model {
  deviceModel?: string;
  subscribeList?: string;
  projectId?: string;
  schemaVersion?: string;
  static names(): { [key: string]: string } {
    return {
      deviceModel: 'DeviceModel',
      subscribeList: 'SubscribeList',
      projectId: 'ProjectId',
      schemaVersion: 'SchemaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceModel: 'string',
      subscribeList: 'string',
      projectId: 'string',
      schemaVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchemaSubscribeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchemaSubscribeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSchemaSubscribeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSchemaSubscribeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssistRTMPServerAddressRequest extends $tea.Model {
  projectId?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssistRTMPServerAddressResponseBody extends $tea.Model {
  requestId?: string;
  RTMPServer?: string;
  OTP?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      RTMPServer: 'RTMPServer',
      OTP: 'OTP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      RTMPServer: 'string',
      OTP: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssistRTMPServerAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAssistRTMPServerAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAssistRTMPServerAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteShadowSchemaRequest extends $tea.Model {
  id?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteShadowSchemaResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteShadowSchemaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteShadowSchemaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteShadowSchemaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectAppSecurityRequest extends $tea.Model {
  projectId?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectAppSecurityResponseBody extends $tea.Model {
  requestId?: string;
  projectAppSecurity?: DescribeProjectAppSecurityResponseBodyProjectAppSecurity;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      projectAppSecurity: 'ProjectAppSecurity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      projectAppSecurity: DescribeProjectAppSecurityResponseBodyProjectAppSecurity,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectAppSecurityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeProjectAppSecurityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeProjectAppSecurityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceBrandRequest extends $tea.Model {
  projectId?: string;
  brandName?: string;
  manufacture?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      brandName: 'BrandName',
      manufacture: 'Manufacture',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      brandName: 'string',
      manufacture: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceBrandResponseBody extends $tea.Model {
  requestId?: string;
  brandId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      brandId: 'BrandId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      brandId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceBrandResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDeviceBrandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDeviceBrandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMqttRootTopicRequest extends $tea.Model {
  appKey?: string;
  rootTopic?: string;
  projectId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      rootTopic: 'RootTopic',
      projectId: 'ProjectId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      rootTopic: 'string',
      projectId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMqttRootTopicResponseBody extends $tea.Model {
  requestId?: string;
  queueName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      queueName: 'QueueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      queueName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMqttRootTopicResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMqttRootTopicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMqttRootTopicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelayPublishOsVersionRequest extends $tea.Model {
  versionId?: string;
  projectId?: string;
  prepubTime?: number;
  publishTime?: number;
  downTime?: number;
  email?: string;
  description?: string;
  sendMessage?: string;
  prepublishCount?: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'VersionId',
      projectId: 'ProjectId',
      prepubTime: 'PrepubTime',
      publishTime: 'PublishTime',
      downTime: 'DownTime',
      email: 'Email',
      description: 'Description',
      sendMessage: 'SendMessage',
      prepublishCount: 'PrepublishCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: 'string',
      projectId: 'string',
      prepubTime: 'number',
      publishTime: 'number',
      downTime: 'number',
      email: 'string',
      description: 'string',
      sendMessage: 'string',
      prepublishCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelayPublishOsVersionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelayPublishOsVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DelayPublishOsVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DelayPublishOsVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreChecksResponseBody extends $tea.Model {
  requestId?: string;
  preChecks?: ListPreChecksResponseBodyPreChecks[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      preChecks: 'PreChecks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      preChecks: { 'type': 'array', 'itemType': ListPreChecksResponseBodyPreChecks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreChecksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPreChecksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPreChecksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsRequest extends $tea.Model {
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBody extends $tea.Model {
  requestId?: string;
  apps?: ListAppsResponseBodyApps[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      apps: 'Apps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      apps: { 'type': 'array', 'itemType': ListAppsResponseBodyApps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCameraShootingRecordRequest extends $tea.Model {
  projectId?: string;
  edgeDeviceId?: string;
  shootingRecordId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      edgeDeviceId: 'EdgeDeviceId',
      shootingRecordId: 'ShootingRecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      edgeDeviceId: 'string',
      shootingRecordId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCameraShootingRecordResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCameraShootingRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCameraShootingRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCameraShootingRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceRequest extends $tea.Model {
  projectId?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceResponseBody extends $tea.Model {
  requestId?: string;
  deviceInfo?: DescribeDeviceResponseBodyDeviceInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceInfo: 'DeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceInfo: DescribeDeviceResponseBodyDeviceInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVersionGroupDevicesRequest extends $tea.Model {
  deviceIdType?: string;
  projectId?: string;
  deviceIds?: string;
  deviceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceIdType: 'DeviceIdType',
      projectId: 'ProjectId',
      deviceIds: 'DeviceIds',
      deviceGroupId: 'DeviceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceIdType: 'string',
      projectId: 'string',
      deviceIds: 'string',
      deviceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVersionGroupDevicesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVersionGroupDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddVersionGroupDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddVersionGroupDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectAppsRequest extends $tea.Model {
  projectId?: string;
  pageIndex?: number;
  pageSize?: number;
  keywords?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      keywords: 'Keywords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      keywords: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectAppsResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListProjectAppsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListProjectAppsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListProjectAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListProjectAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectAssistDeviceRequest extends $tea.Model {
  hardwareId?: string;
  allowCommandExtension?: boolean;
  deviceId?: string;
  serialNumber?: string;
  VIN?: string;
  UUID?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      hardwareId: 'HardwareId',
      allowCommandExtension: 'AllowCommandExtension',
      deviceId: 'DeviceId',
      serialNumber: 'SerialNumber',
      VIN: 'VIN',
      UUID: 'UUID',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hardwareId: 'string',
      allowCommandExtension: 'boolean',
      deviceId: 'string',
      serialNumber: 'string',
      VIN: 'string',
      UUID: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectAssistDeviceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectAssistDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConnectAssistDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConnectAssistDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiGatewayAppsRequest extends $tea.Model {
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiGatewayAppsResponseBody extends $tea.Model {
  apiGatewayApps?: ListApiGatewayAppsResponseBodyApiGatewayApps[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiGatewayApps: 'ApiGatewayApps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiGatewayApps: { 'type': 'array', 'itemType': ListApiGatewayAppsResponseBodyApiGatewayApps },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiGatewayAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListApiGatewayAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListApiGatewayAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRpcServiceRequest extends $tea.Model {
  id?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRpcServiceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRpcServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRpcServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRpcServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindPrepublishPassedDevicesRequest extends $tea.Model {
  prepublishId?: string;
  projectId?: string;
  pageIndex?: number;
  pageSize?: number;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      prepublishId: 'PrepublishId',
      projectId: 'ProjectId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prepublishId: 'string',
      projectId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindPrepublishPassedDevicesResponseBody extends $tea.Model {
  requestId?: string;
  deviceList?: FindPrepublishPassedDevicesResponseBodyDeviceList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceList: 'DeviceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceList: FindPrepublishPassedDevicesResponseBodyDeviceList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindPrepublishPassedDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FindPrepublishPassedDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FindPrepublishPassedDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionBlackDevicesByIdRequest extends $tea.Model {
  ids?: string;
  projectId?: string;
  versionType?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      projectId: 'ProjectId',
      versionType: 'VersionType',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      projectId: 'string',
      versionType: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionBlackDevicesByIdResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionBlackDevicesByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVersionBlackDevicesByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVersionBlackDevicesByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenAccountRequest extends $tea.Model {
  projectId?: string;
  identityId?: string;
  idp?: string;
  idToken?: string;
  openId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      identityId: 'IdentityId',
      idp: 'Idp',
      idToken: 'IdToken',
      openId: 'OpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      identityId: 'string',
      idp: 'string',
      idToken: 'string',
      openId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenAccountResponseBody extends $tea.Model {
  openAccount?: DescribeOpenAccountResponseBodyOpenAccount;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      openAccount: 'OpenAccount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openAccount: DescribeOpenAccountResponseBodyOpenAccount,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeOpenAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeOpenAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindCustomizedFiltersRequest extends $tea.Model {
  projectId?: string;
  versionId?: string;
  pageIndex?: number;
  pageSize?: number;
  name?: string;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionId: 'VersionId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      name: 'Name',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      name: 'string',
      versionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindCustomizedFiltersResponseBody extends $tea.Model {
  customizedFilterList?: FindCustomizedFiltersResponseBodyCustomizedFilterList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      customizedFilterList: 'CustomizedFilterList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customizedFilterList: FindCustomizedFiltersResponseBodyCustomizedFilterList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindCustomizedFiltersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FindCustomizedFiltersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FindCustomizedFiltersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployFunctionFileRequest extends $tea.Model {
  projectId?: string;
  fileId?: string;
  deployEnv?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      fileId: 'FileId',
      deployEnv: 'DeployEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      fileId: 'string',
      deployEnv: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployFunctionFileResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployFunctionFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeployFunctionFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeployFunctionFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistActionDetailsRequest extends $tea.Model {
  actionTimestamp?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      actionTimestamp: 'ActionTimestamp',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionTimestamp: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistActionDetailsResponseBody extends $tea.Model {
  requestId?: string;
  results?: ListAssistActionDetailsResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': ListAssistActionDetailsResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistActionDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAssistActionDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAssistActionDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMqttTopicSubscriptionRequest extends $tea.Model {
  appKey?: string;
  topic?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      topic: 'Topic',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      topic: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMqttTopicSubscriptionResponseBody extends $tea.Model {
  requestId?: string;
  subscription?: DescribeMqttTopicSubscriptionResponseBodySubscription;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      subscription: 'Subscription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      subscription: DescribeMqttTopicSubscriptionResponseBodySubscription,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMqttTopicSubscriptionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMqttTopicSubscriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMqttTopicSubscriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushVersionMessageRequest extends $tea.Model {
  projectId?: string;
  versionId?: string;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionId: 'VersionId',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionId: 'string',
      versionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushVersionMessageResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushVersionMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PushVersionMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PushVersionMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountDeviceModelsRequest extends $tea.Model {
  projectId?: string;
  deviceModelId?: number;
  deviceModel?: string;
  deviceBrand?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      deviceModelId: 'DeviceModelId',
      deviceModel: 'DeviceModel',
      deviceBrand: 'DeviceBrand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      deviceModelId: 'number',
      deviceModel: 'string',
      deviceBrand: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountDeviceModelsResponseBody extends $tea.Model {
  requestId?: string;
  modelCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      modelCount: 'ModelCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      modelCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountDeviceModelsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CountDeviceModelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CountDeviceModelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceRequest extends $tea.Model {
  modelName?: string;
  projectId?: string;
  hardwareId?: string;
  static names(): { [key: string]: string } {
    return {
      modelName: 'ModelName',
      projectId: 'ProjectId',
      hardwareId: 'HardwareId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelName: 'string',
      projectId: 'string',
      hardwareId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceResponseBody extends $tea.Model {
  requestId?: string;
  deviceId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceRequest extends $tea.Model {
  projectId?: string;
  authType?: string;
  name?: string;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      authType: 'AuthType',
      name: 'Name',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      authType: 'string',
      name: 'string',
      desc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceResponseBody extends $tea.Model {
  requestId?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionDeviceGroupsRequest extends $tea.Model {
  deviceId?: string;
  originalId?: string;
  pageIndex?: number;
  pageSize?: number;
  name?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      originalId: 'OriginalId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      originalId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      name: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionDeviceGroupsResponseBody extends $tea.Model {
  requestId?: string;
  deviceGroupList?: FindVersionDeviceGroupsResponseBodyDeviceGroupList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceGroupList: 'DeviceGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceGroupList: FindVersionDeviceGroupsResponseBodyDeviceGroupList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionDeviceGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FindVersionDeviceGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FindVersionDeviceGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteRemoteCommandRequest extends $tea.Model {
  projectId?: string;
  clientId?: string;
  command?: number;
  params?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      clientId: 'ClientId',
      command: 'Command',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      clientId: 'string',
      command: 'number',
      params: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteRemoteCommandResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteRemoteCommandResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExecuteRemoteCommandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExecuteRemoteCommandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVersionDeviceGroupRequest extends $tea.Model {
  maxCount?: string;
  projectId?: string;
  name?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      maxCount: 'MaxCount',
      projectId: 'ProjectId',
      name: 'Name',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCount: 'string',
      projectId: 'string',
      name: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVersionDeviceGroupResponseBody extends $tea.Model {
  requestId?: string;
  deviceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceGroupId: 'DeviceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVersionDeviceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateVersionDeviceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVersionDeviceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssistReportRequest extends $tea.Model {
  projectId?: string;
  assistId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      assistId: 'AssistId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      assistId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssistReportResponseBody extends $tea.Model {
  requestId?: string;
  assistResult?: string;
  assistReason?: string;
  assistId?: string;
  assistDescription?: string;
  assistTag?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      assistResult: 'AssistResult',
      assistReason: 'AssistReason',
      assistId: 'AssistId',
      assistDescription: 'AssistDescription',
      assistTag: 'AssistTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      assistResult: 'string',
      assistReason: 'string',
      assistId: 'string',
      assistDescription: 'string',
      assistTag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssistReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAssistReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAssistReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectLogsRequest extends $tea.Model {
  pageSize?: number;
  projectId?: string;
  deviceId?: string;
  startTime?: number;
  endTime?: number;
  pageIndex?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      deviceId: 'DeviceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageIndex: 'PageIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      projectId: 'string',
      deviceId: 'string',
      startTime: 'number',
      endTime: 'number',
      pageIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectLogsResponseBody extends $tea.Model {
  requestId?: string;
  logs?: ListConnectLogsResponseBodyLogs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      logs: 'Logs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      logs: ListConnectLogsResponseBodyLogs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListConnectLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListConnectLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientPluginsRequest extends $tea.Model {
  osType?: string;
  static names(): { [key: string]: string } {
    return {
      osType: 'OsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      osType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientPluginsResponseBody extends $tea.Model {
  requestId?: string;
  clientPlugins?: ListClientPluginsResponseBodyClientPlugins[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clientPlugins: 'ClientPlugins',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clientPlugins: { 'type': 'array', 'itemType': ListClientPluginsResponseBodyClientPlugins },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientPluginsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClientPluginsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClientPluginsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShadowSchemaRequest extends $tea.Model {
  deviceModel?: string;
  isSimple?: boolean;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceModel: 'DeviceModel',
      isSimple: 'IsSimple',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceModel: 'string',
      isSimple: 'boolean',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShadowSchemaResponseBody extends $tea.Model {
  requestId?: string;
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      schema: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShadowSchemaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeShadowSchemaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeShadowSchemaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionBlackDevicesRequest extends $tea.Model {
  projectId?: string;
  versionId?: string;
  versionType?: string;
  deviceId?: string;
  originalId?: string;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionId: 'VersionId',
      versionType: 'VersionType',
      deviceId: 'DeviceId',
      originalId: 'OriginalId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionId: 'string',
      versionType: 'string',
      deviceId: 'string',
      originalId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionBlackDevicesResponseBody extends $tea.Model {
  requestId?: string;
  deviceList?: FindVersionBlackDevicesResponseBodyDeviceList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceList: 'DeviceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceList: FindVersionBlackDevicesResponseBodyDeviceList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionBlackDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FindVersionBlackDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FindVersionBlackDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionFilesRequest extends $tea.Model {
  projectId?: string;
  fileType?: number;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      fileType: 'FileType',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      fileType: 'number',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionFilesResponseBody extends $tea.Model {
  requestId?: string;
  fileList?: ListFunctionFilesResponseBodyFileList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      fileList: 'FileList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      fileList: ListFunctionFilesResponseBodyFileList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFunctionFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFunctionFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceDataRequest extends $tea.Model {
  projectId?: string;
  namespace?: string;
  authType?: string;
  deviceIdType?: string;
  deviceId?: string;
  accountType?: string;
  accountId?: string;
  path?: string;
  oldData?: string;
  newData?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      namespace: 'Namespace',
      authType: 'AuthType',
      deviceIdType: 'DeviceIdType',
      deviceId: 'DeviceId',
      accountType: 'AccountType',
      accountId: 'AccountId',
      path: 'Path',
      oldData: 'OldData',
      newData: 'NewData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      namespace: 'string',
      authType: 'string',
      deviceIdType: 'string',
      deviceId: 'string',
      accountType: 'string',
      accountId: 'string',
      path: 'string',
      oldData: 'string',
      newData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceDataResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateNamespaceDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateNamespaceDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeDevicesRequest extends $tea.Model {
  projectId?: string;
  pageIndex?: number;
  pageSize?: number;
  hostDeviceId?: string;
  edgeDeviceType?: number;
  edgeDeviceName?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      hostDeviceId: 'HostDeviceId',
      edgeDeviceType: 'EdgeDeviceType',
      edgeDeviceName: 'EdgeDeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      hostDeviceId: 'string',
      edgeDeviceType: 'number',
      edgeDeviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeDevicesResponseBody extends $tea.Model {
  requestId?: string;
  edgeDevices?: ListEdgeDevicesResponseBodyEdgeDevices;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      edgeDevices: 'EdgeDevices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      edgeDevices: ListEdgeDevicesResponseBodyEdgeDevices,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListEdgeDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEdgeDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomizedPropertyRequest extends $tea.Model {
  projectId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomizedPropertyResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomizedPropertyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCustomizedPropertyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCustomizedPropertyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppVersionReleaseNoteRequest extends $tea.Model {
  projectId?: string;
  versionId?: string;
  releaseNote?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionId: 'VersionId',
      releaseNote: 'ReleaseNote',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionId: 'string',
      releaseNote: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppVersionReleaseNoteResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppVersionReleaseNoteResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAppVersionReleaseNoteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAppVersionReleaseNoteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTriggerRequest extends $tea.Model {
  projectId?: string;
  namespace?: string;
  source?: string;
  fileIds?: string;
  functionIds?: string;
  invocationMode?: number;
  sandbox?: number;
  production?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      namespace: 'Namespace',
      source: 'Source',
      fileIds: 'FileIds',
      functionIds: 'FunctionIds',
      invocationMode: 'InvocationMode',
      sandbox: 'Sandbox',
      production: 'Production',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      namespace: 'string',
      source: 'string',
      fileIds: 'string',
      functionIds: 'string',
      invocationMode: 'number',
      sandbox: 'number',
      production: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTriggerResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiagnosisVersionRequest extends $tea.Model {
  originalId?: string;
  projectId?: string;
  versionType?: string;
  versionId?: string;
  idType?: string;
  diagnoseStyle?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      originalId: 'OriginalId',
      projectId: 'ProjectId',
      versionType: 'VersionType',
      versionId: 'VersionId',
      idType: 'IdType',
      diagnoseStyle: 'DiagnoseStyle',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalId: 'string',
      projectId: 'string',
      versionType: 'string',
      versionId: 'string',
      idType: 'string',
      diagnoseStyle: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiagnosisVersionResponseBody extends $tea.Model {
  requestId?: string;
  diagnosisResult?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      diagnosisResult: 'DiagnosisResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      diagnosisResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiagnosisVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DiagnosisVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DiagnosisVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShadowSchemaDeviceModelsRequest extends $tea.Model {
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShadowSchemaDeviceModelsResponseBody extends $tea.Model {
  modelList?: ListShadowSchemaDeviceModelsResponseBodyModelList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      modelList: 'ModelList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelList: { 'type': 'array', 'itemType': ListShadowSchemaDeviceModelsResponseBodyModelList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShadowSchemaDeviceModelsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListShadowSchemaDeviceModelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListShadowSchemaDeviceModelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushConfigInfoRequest extends $tea.Model {
  projectId?: string;
  hostDeviceId?: string;
  config?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      hostDeviceId: 'HostDeviceId',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      hostDeviceId: 'string',
      config: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushConfigInfoResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushConfigInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PushConfigInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PushConfigInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOssUploadMetaRequest extends $tea.Model {
  projectId?: string;
  ext?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      ext: 'Ext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      ext: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOssUploadMetaResponseBody extends $tea.Model {
  requestId?: string;
  ossUploadMeta?: GenerateOssUploadMetaResponseBodyOssUploadMeta;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ossUploadMeta: 'OssUploadMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ossUploadMeta: GenerateOssUploadMetaResponseBodyOssUploadMeta,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOssUploadMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateOssUploadMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateOssUploadMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVersionBlackDevicesRequest extends $tea.Model {
  deviceIds?: string;
  projectId?: string;
  versionType?: string;
  deviceIdType?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceIds: 'DeviceIds',
      projectId: 'ProjectId',
      versionType: 'VersionType',
      deviceIdType: 'DeviceIdType',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceIds: 'string',
      projectId: 'string',
      versionType: 'string',
      deviceIdType: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVersionBlackDevicesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVersionBlackDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddVersionBlackDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddVersionBlackDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomizedFilterRequest extends $tea.Model {
  projectId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomizedFilterResponseBody extends $tea.Model {
  customizedFilter?: DescribeCustomizedFilterResponseBodyCustomizedFilter;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      customizedFilter: 'CustomizedFilter',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customizedFilter: DescribeCustomizedFilterResponseBodyCustomizedFilter,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomizedFilterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCustomizedFilterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCustomizedFilterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceIdByOuterInfoRequest extends $tea.Model {
  projectId?: string;
  queryType?: string;
  queryValue?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      queryType: 'QueryType',
      queryValue: 'QueryValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      queryType: 'string',
      queryValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceIdByOuterInfoResponseBody extends $tea.Model {
  requestId?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceIdByOuterInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDeviceIdByOuterInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDeviceIdByOuterInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppVersionRequest extends $tea.Model {
  isForceUpgrade?: string;
  isAllowNewInstall?: string;
  projectId?: string;
  appId?: string;
  appVersion?: string;
  versionCode?: string;
  installType?: string;
  remark?: string;
  releaseNote?: string;
  isSilentUpgrade?: string;
  packageUrl?: string;
  isNeedRestart?: string;
  blackVersionList?: string;
  whiteVersionList?: string;
  restartType?: string;
  restartAppType?: string;
  restartAppParam?: string;
  deviceAdapterList?: string;
  apkMd5?: string;
  static names(): { [key: string]: string } {
    return {
      isForceUpgrade: 'IsForceUpgrade',
      isAllowNewInstall: 'IsAllowNewInstall',
      projectId: 'ProjectId',
      appId: 'AppId',
      appVersion: 'AppVersion',
      versionCode: 'VersionCode',
      installType: 'InstallType',
      remark: 'Remark',
      releaseNote: 'ReleaseNote',
      isSilentUpgrade: 'IsSilentUpgrade',
      packageUrl: 'PackageUrl',
      isNeedRestart: 'IsNeedRestart',
      blackVersionList: 'BlackVersionList',
      whiteVersionList: 'WhiteVersionList',
      restartType: 'RestartType',
      restartAppType: 'RestartAppType',
      restartAppParam: 'RestartAppParam',
      deviceAdapterList: 'DeviceAdapterList',
      apkMd5: 'ApkMd5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isForceUpgrade: 'string',
      isAllowNewInstall: 'string',
      projectId: 'string',
      appId: 'string',
      appVersion: 'string',
      versionCode: 'string',
      installType: 'string',
      remark: 'string',
      releaseNote: 'string',
      isSilentUpgrade: 'string',
      packageUrl: 'string',
      isNeedRestart: 'string',
      blackVersionList: 'string',
      whiteVersionList: 'string',
      restartType: 'string',
      restartAppType: 'string',
      restartAppParam: 'string',
      deviceAdapterList: 'string',
      apkMd5: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppVersionResponseBody extends $tea.Model {
  versionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'VersionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAppVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAppVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountActivatedOrNewRegistrationDeviceRequest extends $tea.Model {
  projectId?: string;
  deviceType?: string;
  deviceBrandId?: string;
  deviceBrand?: string;
  deviceModelId?: string;
  deviceModel?: string;
  deviceCountStatType?: string;
  isQueryNewRegistrationDevice?: string;
  startTime?: string;
  endTime?: string;
  isQueryYearlyActivate?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      deviceType: 'DeviceType',
      deviceBrandId: 'DeviceBrandId',
      deviceBrand: 'DeviceBrand',
      deviceModelId: 'DeviceModelId',
      deviceModel: 'DeviceModel',
      deviceCountStatType: 'DeviceCountStatType',
      isQueryNewRegistrationDevice: 'IsQueryNewRegistrationDevice',
      startTime: 'StartTime',
      endTime: 'EndTime',
      isQueryYearlyActivate: 'IsQueryYearlyActivate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      deviceType: 'string',
      deviceBrandId: 'string',
      deviceBrand: 'string',
      deviceModelId: 'string',
      deviceModel: 'string',
      deviceCountStatType: 'string',
      isQueryNewRegistrationDevice: 'string',
      startTime: 'string',
      endTime: 'string',
      isQueryYearlyActivate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountActivatedOrNewRegistrationDeviceResponseBody extends $tea.Model {
  requestId?: string;
  statistics?: CountActivatedOrNewRegistrationDeviceResponseBodyStatistics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistics: CountActivatedOrNewRegistrationDeviceResponseBodyStatistics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountActivatedOrNewRegistrationDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CountActivatedOrNewRegistrationDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CountActivatedOrNewRegistrationDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesRequest extends $tea.Model {
  projectId?: string;
  deviceModelId?: number;
  deviceModel?: string;
  start?: string;
  length?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      deviceModelId: 'DeviceModelId',
      deviceModel: 'DeviceModel',
      start: 'Start',
      length: 'Length',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      deviceModelId: 'number',
      deviceModel: 'string',
      start: 'string',
      length: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponseBody extends $tea.Model {
  requestId?: string;
  devices?: ListDevicesResponseBodyDevices[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      devices: 'Devices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      devices: { 'type': 'array', 'itemType': ListDevicesResponseBodyDevices },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionTestsRequest extends $tea.Model {
  projectId?: string;
  pageIndex?: number;
  pageSize?: number;
  versionId?: string;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      versionId: 'VersionId',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      versionId: 'string',
      versionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionTestsResponseBody extends $tea.Model {
  requestId?: string;
  versionTestList?: FindVersionTestsResponseBodyVersionTestList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      versionTestList: 'VersionTestList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      versionTestList: FindVersionTestsResponseBodyVersionTestList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionTestsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FindVersionTestsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FindVersionTestsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishOsVersionRequest extends $tea.Model {
  projectId?: string;
  versionId?: string;
  sendMessage?: boolean;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionId: 'VersionId',
      sendMessage: 'SendMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionId: 'string',
      sendMessage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishOsVersionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishOsVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PublishOsVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PublishOsVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUpstreamAppKeyRelationsRequest extends $tea.Model {
  appKeys?: string;
  appServerId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      appKeys: 'AppKeys',
      appServerId: 'AppServerId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKeys: 'string',
      appServerId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUpstreamAppKeyRelationsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUpstreamAppKeyRelationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUpstreamAppKeyRelationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUpstreamAppKeyRelationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOsVersionReleaseNoteRequest extends $tea.Model {
  projectId?: string;
  versionId?: string;
  releaseNote?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionId: 'VersionId',
      releaseNote: 'ReleaseNote',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionId: 'string',
      releaseNote: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOsVersionReleaseNoteResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOsVersionReleaseNoteResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateOsVersionReleaseNoteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateOsVersionReleaseNoteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishAppVersionRequest extends $tea.Model {
  projectId?: string;
  versionId?: string;
  sendMessage?: boolean;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionId: 'VersionId',
      sendMessage: 'SendMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionId: 'string',
      sendMessage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishAppVersionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishAppVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PublishAppVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PublishAppVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishMqttMessageRequest extends $tea.Model {
  appKey?: string;
  topic?: string;
  projectId?: string;
  message?: string;
  qoS?: number;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      topic: 'Topic',
      projectId: 'ProjectId',
      message: 'Message',
      qoS: 'QoS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      topic: 'string',
      projectId: 'string',
      message: 'string',
      qoS: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishMqttMessageResponseBody extends $tea.Model {
  requestId?: string;
  mid?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      mid: 'Mid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      mid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishMqttMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PublishMqttMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PublishMqttMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionGroupDeviceRequest extends $tea.Model {
  deviceIds?: string;
  projectId?: string;
  deviceGroupId?: string;
  deviceIdType?: string;
  static names(): { [key: string]: string } {
    return {
      deviceIds: 'DeviceIds',
      projectId: 'ProjectId',
      deviceGroupId: 'DeviceGroupId',
      deviceIdType: 'DeviceIdType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceIds: 'string',
      projectId: 'string',
      deviceGroupId: 'string',
      deviceIdType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionGroupDeviceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionGroupDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVersionGroupDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVersionGroupDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionFileRequest extends $tea.Model {
  projectId?: string;
  fileName?: string;
  fileType?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      fileName: 'FileName',
      fileType: 'FileType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      fileName: 'string',
      fileType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionFileResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFunctionFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFunctionFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVersionWhiteDevicesRequest extends $tea.Model {
  deviceIds?: string;
  projectId?: string;
  versionType?: string;
  deviceIdType?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceIds: 'DeviceIds',
      projectId: 'ProjectId',
      versionType: 'VersionType',
      deviceIdType: 'DeviceIdType',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceIds: 'string',
      projectId: 'string',
      versionType: 'string',
      deviceIdType: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVersionWhiteDevicesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVersionWhiteDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddVersionWhiteDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddVersionWhiteDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistHistoryDetailsRequest extends $tea.Model {
  projectId?: string;
  assistId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      assistId: 'AssistId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      assistId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistHistoryDetailsResponseBody extends $tea.Model {
  requestId?: string;
  actions?: ListAssistHistoryDetailsResponseBodyActions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      actions: 'Actions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      actions: { 'type': 'array', 'itemType': ListAssistHistoryDetailsResponseBodyActions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistHistoryDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAssistHistoryDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAssistHistoryDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomizedFilterRequest extends $tea.Model {
  versionType?: string;
  blackWhiteType?: string;
  value?: string;
  projectId?: string;
  valueCompareType?: string;
  name?: string;
  valueType?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      versionType: 'VersionType',
      blackWhiteType: 'BlackWhiteType',
      value: 'Value',
      projectId: 'ProjectId',
      valueCompareType: 'ValueCompareType',
      name: 'Name',
      valueType: 'ValueType',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionType: 'string',
      blackWhiteType: 'string',
      value: 'string',
      projectId: 'string',
      valueCompareType: 'string',
      name: 'string',
      valueType: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomizedFilterResponseBody extends $tea.Model {
  customizedFilterId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      customizedFilterId: 'CustomizedFilterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customizedFilterId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomizedFilterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCustomizedFilterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCustomizedFilterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUpstreamAppKeyRelationRequest extends $tea.Model {
  id?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUpstreamAppKeyRelationResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUpstreamAppKeyRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteUpstreamAppKeyRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUpstreamAppKeyRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppVersionRequest extends $tea.Model {
  projectId?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppVersionResponseBody extends $tea.Model {
  appVersion?: DescribeAppVersionResponseBodyAppVersion;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: DescribeAppVersionResponseBodyAppVersion,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAppVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAppVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleRequest extends $tea.Model {
  deviceId?: string;
  vin?: string;
  projectId?: string;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      vin: 'Vin',
      projectId: 'ProjectId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      vin: 'string',
      projectId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleResponseBody extends $tea.Model {
  requestId?: string;
  vehicles?: ListVehicleResponseBodyVehicles;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vehicles: 'Vehicles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vehicles: ListVehicleResponseBodyVehicles,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVehicleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVehicleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteCameraShootingCommandRequest extends $tea.Model {
  projectId?: string;
  edgeDeviceId?: string;
  shootingType?: number;
  number?: number;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      edgeDeviceId: 'EdgeDeviceId',
      shootingType: 'ShootingType',
      number: 'Number',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      edgeDeviceId: 'string',
      shootingType: 'number',
      number: 'number',
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteCameraShootingCommandResponseBody extends $tea.Model {
  requestId?: string;
  shootingRecord?: ExecuteCameraShootingCommandResponseBodyShootingRecord;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      shootingRecord: 'ShootingRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      shootingRecord: ExecuteCameraShootingCommandResponseBodyShootingRecord,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteCameraShootingCommandResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExecuteCameraShootingCommandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExecuteCameraShootingCommandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionDeviceGroupRequest extends $tea.Model {
  projectId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionDeviceGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionDeviceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVersionDeviceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVersionDeviceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionFilesByProjectIdRequest extends $tea.Model {
  projectId?: string;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionFilesByProjectIdResponseBody extends $tea.Model {
  requestId?: string;
  files?: ListFunctionFilesByProjectIdResponseBodyFiles[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      files: 'Files',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      files: { 'type': 'array', 'itemType': ListFunctionFilesByProjectIdResponseBodyFiles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionFilesByProjectIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFunctionFilesByProjectIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFunctionFilesByProjectIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionWhiteDevicesRequest extends $tea.Model {
  projectId?: string;
  versionId?: string;
  versionType?: string;
  deviceId?: string;
  originalId?: string;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionId: 'VersionId',
      versionType: 'VersionType',
      deviceId: 'DeviceId',
      originalId: 'OriginalId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionId: 'string',
      versionType: 'string',
      deviceId: 'string',
      originalId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionWhiteDevicesResponseBody extends $tea.Model {
  requestId?: string;
  deviceList?: FindVersionWhiteDevicesResponseBodyDeviceList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceList: 'DeviceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceList: FindVersionWhiteDevicesResponseBodyDeviceList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionWhiteDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FindVersionWhiteDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FindVersionWhiteDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUpstreamAppServerRequest extends $tea.Model {
  projectId?: string;
  name?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      name: 'Name',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      name: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUpstreamAppServerResponseBody extends $tea.Model {
  requestId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUpstreamAppServerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUpstreamAppServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUpstreamAppServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVersionDeviceGroupRequest extends $tea.Model {
  projectId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVersionDeviceGroupResponseBody extends $tea.Model {
  requestId?: string;
  deviceGroup?: DescribeVersionDeviceGroupResponseBodyDeviceGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceGroup: 'DeviceGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceGroup: DescribeVersionDeviceGroupResponseBodyDeviceGroup,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVersionDeviceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVersionDeviceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVersionDeviceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppVersionRequest extends $tea.Model {
  blackVersionList?: string;
  isAllowNewInstall?: string;
  projectId?: string;
  appId?: string;
  appVersion?: string;
  versionCode?: string;
  installType?: string;
  remark?: string;
  isForceUpgrade?: string;
  isSilentUpgrade?: string;
  isNeedRestart?: string;
  packageUrl?: string;
  releaseNote?: string;
  whiteVersionList?: string;
  restartType?: string;
  restartAppType?: string;
  restartAppParam?: string;
  deviceAdapterList?: string;
  versionId?: string;
  apkMd5?: string;
  static names(): { [key: string]: string } {
    return {
      blackVersionList: 'BlackVersionList',
      isAllowNewInstall: 'IsAllowNewInstall',
      projectId: 'ProjectId',
      appId: 'AppId',
      appVersion: 'AppVersion',
      versionCode: 'VersionCode',
      installType: 'InstallType',
      remark: 'Remark',
      isForceUpgrade: 'IsForceUpgrade',
      isSilentUpgrade: 'IsSilentUpgrade',
      isNeedRestart: 'IsNeedRestart',
      packageUrl: 'PackageUrl',
      releaseNote: 'ReleaseNote',
      whiteVersionList: 'WhiteVersionList',
      restartType: 'RestartType',
      restartAppType: 'RestartAppType',
      restartAppParam: 'RestartAppParam',
      deviceAdapterList: 'DeviceAdapterList',
      versionId: 'VersionId',
      apkMd5: 'ApkMd5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackVersionList: 'string',
      isAllowNewInstall: 'string',
      projectId: 'string',
      appId: 'string',
      appVersion: 'string',
      versionCode: 'string',
      installType: 'string',
      remark: 'string',
      isForceUpgrade: 'string',
      isSilentUpgrade: 'string',
      isNeedRestart: 'string',
      packageUrl: 'string',
      releaseNote: 'string',
      whiteVersionList: 'string',
      restartType: 'string',
      restartAppType: 'string',
      restartAppParam: 'string',
      deviceAdapterList: 'string',
      versionId: 'string',
      apkMd5: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppVersionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAppVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAppVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomizedPropertyRequest extends $tea.Model {
  versionId?: string;
  projectId?: string;
  name?: string;
  value?: string;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'VersionId',
      projectId: 'ProjectId',
      name: 'Name',
      value: 'Value',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: 'string',
      projectId: 'string',
      name: 'string',
      value: 'string',
      versionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomizedPropertyResponseBody extends $tea.Model {
  requestId?: string;
  customizedPropertyId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      customizedPropertyId: 'CustomizedPropertyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      customizedPropertyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomizedPropertyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCustomizedPropertyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCustomizedPropertyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemaSubscribesRequest extends $tea.Model {
  projectId?: string;
  deviceModel?: string;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      deviceModel: 'DeviceModel',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      deviceModel: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemaSubscribesResponseBody extends $tea.Model {
  requestId?: string;
  pageList?: ListSchemaSubscribesResponseBodyPageList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageList: 'PageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageList: { 'type': 'array', 'itemType': ListSchemaSubscribesResponseBodyPageList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemaSubscribesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSchemaSubscribesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSchemaSubscribesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSchemaSubscribeRequest extends $tea.Model {
  deviceModel?: string;
  subscribeList?: string;
  projectId?: string;
  schemaVersion?: string;
  static names(): { [key: string]: string } {
    return {
      deviceModel: 'DeviceModel',
      subscribeList: 'SubscribeList',
      projectId: 'ProjectId',
      schemaVersion: 'SchemaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceModel: 'string',
      subscribeList: 'string',
      projectId: 'string',
      schemaVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSchemaSubscribeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSchemaSubscribeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSchemaSubscribeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSchemaSubscribeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAllVersionGroupDevicesRequest extends $tea.Model {
  projectId?: string;
  deviceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      deviceGroupId: 'DeviceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      deviceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAllVersionGroupDevicesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAllVersionGroupDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAllVersionGroupDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAllVersionGroupDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionWhiteDevicesByIdRequest extends $tea.Model {
  ids?: string;
  projectId?: string;
  versionType?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      projectId: 'ProjectId',
      versionType: 'VersionType',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      projectId: 'string',
      versionType: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionWhiteDevicesByIdResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionWhiteDevicesByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVersionWhiteDevicesByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVersionWhiteDevicesByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOsVersionRequest extends $tea.Model {
  isMilestone?: string;
  isForceNightUpgrade?: string;
  projectId?: string;
  deviceModelId?: string;
  systemVersion?: string;
  releaseNote?: string;
  remark?: string;
  isForceUpgrade?: string;
  blackVersionList?: string;
  whiteVersionList?: string;
  maxClientVersion?: string;
  minClientVersion?: string;
  nightUpgradeDownloadType?: string;
  nightUpgradeIsShowTip?: string;
  nightUpgradeIsAllowedCancel?: string;
  romList?: string;
  id?: string;
  enableMobileDownload?: string;
  mobileDownloadMaxSize?: string;
  static names(): { [key: string]: string } {
    return {
      isMilestone: 'IsMilestone',
      isForceNightUpgrade: 'IsForceNightUpgrade',
      projectId: 'ProjectId',
      deviceModelId: 'DeviceModelId',
      systemVersion: 'SystemVersion',
      releaseNote: 'ReleaseNote',
      remark: 'Remark',
      isForceUpgrade: 'IsForceUpgrade',
      blackVersionList: 'BlackVersionList',
      whiteVersionList: 'WhiteVersionList',
      maxClientVersion: 'MaxClientVersion',
      minClientVersion: 'MinClientVersion',
      nightUpgradeDownloadType: 'NightUpgradeDownloadType',
      nightUpgradeIsShowTip: 'NightUpgradeIsShowTip',
      nightUpgradeIsAllowedCancel: 'NightUpgradeIsAllowedCancel',
      romList: 'RomList',
      id: 'Id',
      enableMobileDownload: 'EnableMobileDownload',
      mobileDownloadMaxSize: 'MobileDownloadMaxSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isMilestone: 'string',
      isForceNightUpgrade: 'string',
      projectId: 'string',
      deviceModelId: 'string',
      systemVersion: 'string',
      releaseNote: 'string',
      remark: 'string',
      isForceUpgrade: 'string',
      blackVersionList: 'string',
      whiteVersionList: 'string',
      maxClientVersion: 'string',
      minClientVersion: 'string',
      nightUpgradeDownloadType: 'string',
      nightUpgradeIsShowTip: 'string',
      nightUpgradeIsAllowedCancel: 'string',
      romList: 'string',
      id: 'string',
      enableMobileDownload: 'string',
      mobileDownloadMaxSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOsVersionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOsVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateOsVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateOsVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOssPostPolicyRequest extends $tea.Model {
  projectId?: string;
  ext?: string;
  accessId?: string;
  accessKey?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      ext: 'Ext',
      accessId: 'AccessId',
      accessKey: 'AccessKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      ext: 'string',
      accessId: 'string',
      accessKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOssPostPolicyResponseBody extends $tea.Model {
  requestId?: string;
  ossPostPolicy?: GenerateOssPostPolicyResponseBodyOssPostPolicy;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ossPostPolicy: 'OssPostPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ossPostPolicy: GenerateOssPostPolicyResponseBodyOssPostPolicy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOssPostPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateOssPostPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateOssPostPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionGroupDevicesRequest extends $tea.Model {
  projectId?: string;
  originalId?: string;
  pageIndex?: number;
  pageSize?: number;
  deviceGroupId?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      originalId: 'OriginalId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      deviceGroupId: 'DeviceGroupId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      originalId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      deviceGroupId: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionGroupDevicesResponseBody extends $tea.Model {
  requestId?: string;
  groupDeviceList?: FindVersionGroupDevicesResponseBodyGroupDeviceList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      groupDeviceList: 'GroupDeviceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      groupDeviceList: FindVersionGroupDevicesResponseBodyGroupDeviceList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionGroupDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FindVersionGroupDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FindVersionGroupDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOpenAccountRequest extends $tea.Model {
  identityId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      identityId: 'IdentityId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOpenAccountResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOpenAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteOpenAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteOpenAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefaultSchemaRequest extends $tea.Model {
  projectId?: string;
  deviceModelId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      deviceModelId: 'DeviceModelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      deviceModelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefaultSchemaResponseBody extends $tea.Model {
  requestId?: string;
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      schema: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefaultSchemaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDefaultSchemaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDefaultSchemaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpstreamAppServersRequest extends $tea.Model {
  projectId?: string;
  pageIndex?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      pageIndex: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpstreamAppServersResponseBody extends $tea.Model {
  requestId?: string;
  appServers?: ListUpstreamAppServersResponseBodyAppServers;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      appServers: 'AppServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      appServers: ListUpstreamAppServersResponseBodyAppServers,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpstreamAppServersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUpstreamAppServersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUpstreamAppServersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionTestRequest extends $tea.Model {
  projectId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionTestResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionTestResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVersionTestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVersionTestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUpstreamAppKeyRelationRequest extends $tea.Model {
  appKey?: string;
  PAppKey?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      PAppKey: 'PAppKey',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      PAppKey: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUpstreamAppKeyRelationResponseBody extends $tea.Model {
  requestId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUpstreamAppKeyRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUpstreamAppKeyRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUpstreamAppKeyRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindAppVersionsRequest extends $tea.Model {
  status?: string;
  projectId?: string;
  pageSize?: number;
  versionId?: string;
  deviceModelId?: string;
  pageIndex?: number;
  appId?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      projectId: 'ProjectId',
      pageSize: 'PageSize',
      versionId: 'VersionId',
      deviceModelId: 'DeviceModelId',
      pageIndex: 'PageIndex',
      appId: 'AppId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      projectId: 'string',
      pageSize: 'number',
      versionId: 'string',
      deviceModelId: 'string',
      pageIndex: 'number',
      appId: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindAppVersionsResponseBody extends $tea.Model {
  appVersionList?: FindAppVersionsResponseBodyAppVersionList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appVersionList: 'AppVersionList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersionList: FindAppVersionsResponseBodyAppVersionList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindAppVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FindAppVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FindAppVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttRootTopicsRequest extends $tea.Model {
  appKey?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttRootTopicsResponseBody extends $tea.Model {
  requestId?: string;
  rootTopics?: ListMqttRootTopicsResponseBodyRootTopics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rootTopics: 'RootTopics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rootTopics: ListMqttRootTopicsResponseBodyRootTopics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttRootTopicsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMqttRootTopicsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMqttRootTopicsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistDevicesRequest extends $tea.Model {
  projectId?: string;
  pageIndex?: number;
  condition?: string;
  perPage?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      pageIndex: 'PageIndex',
      condition: 'Condition',
      perPage: 'PerPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      pageIndex: 'number',
      condition: 'string',
      perPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistDevicesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  perPage?: number;
  pageIndex?: number;
  devices?: ListAssistDevicesResponseBodyDevices[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      perPage: 'PerPage',
      pageIndex: 'PageIndex',
      devices: 'Devices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      perPage: 'number',
      pageIndex: 'number',
      devices: { 'type': 'array', 'itemType': ListAssistDevicesResponseBodyDevices },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAssistDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAssistDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUpstreamAppServerRequest extends $tea.Model {
  projectId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUpstreamAppServerResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUpstreamAppServerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteUpstreamAppServerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUpstreamAppServerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVersionDeviceGroupRequest extends $tea.Model {
  projectId?: string;
  name?: string;
  description?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      name: 'Name',
      description: 'Description',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      name: 'string',
      description: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVersionDeviceGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVersionDeviceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateVersionDeviceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateVersionDeviceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenAccountsRequest extends $tea.Model {
  length?: number;
  start?: number;
  mobile?: string;
  email?: string;
  displayName?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      length: 'Length',
      start: 'Start',
      mobile: 'Mobile',
      email: 'Email',
      displayName: 'DisplayName',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      length: 'number',
      start: 'number',
      mobile: 'string',
      email: 'string',
      displayName: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenAccountsResponseBody extends $tea.Model {
  requestId?: string;
  openAccounts?: ListOpenAccountsResponseBodyOpenAccounts[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      openAccounts: 'OpenAccounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      openAccounts: { 'type': 'array', 'itemType': ListOpenAccountsResponseBodyOpenAccounts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenAccountsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOpenAccountsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOpenAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOsVersionStatusRequest extends $tea.Model {
  projectId?: string;
  id?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOsVersionStatusResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOsVersionStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateOsVersionStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateOsVersionStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountProjectsResponseBody extends $tea.Model {
  requestId?: string;
  projectCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      projectCount: 'ProjectCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      projectCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountProjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CountProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CountProjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommercialVehicleDevicesRequest extends $tea.Model {
  projectId?: string;
  pageIndex?: number;
  pageSize?: number;
  hardwareId?: string;
  clientId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      hardwareId: 'HardwareId',
      clientId: 'ClientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      hardwareId: 'string',
      clientId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommercialVehicleDevicesResponseBody extends $tea.Model {
  requestId?: string;
  vehicleDevices?: ListCommercialVehicleDevicesResponseBodyVehicleDevices;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vehicleDevices: 'VehicleDevices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vehicleDevices: ListCommercialVehicleDevicesResponseBodyVehicleDevices,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommercialVehicleDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCommercialVehicleDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCommercialVehicleDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageReceiversRequest extends $tea.Model {
  projectId?: string;
  messageId?: string;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      messageId: 'MessageId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      messageId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageReceiversResponseBody extends $tea.Model {
  messageReceivers?: ListMessageReceiversResponseBodyMessageReceivers;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      messageReceivers: 'MessageReceivers',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageReceivers: ListMessageReceiversResponseBodyMessageReceivers,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageReceiversResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMessageReceiversResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMessageReceiversResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountDevicesRequest extends $tea.Model {
  projectId?: string;
  deviceModelId?: number;
  deviceModel?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      deviceModelId: 'DeviceModelId',
      deviceModel: 'DeviceModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      deviceModelId: 'number',
      deviceModel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountDevicesResponseBody extends $tea.Model {
  requestId?: string;
  deviceCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceCount: 'DeviceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CountDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CountDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOsBlackWhiteVersionsRequest extends $tea.Model {
  whiteVersions?: string;
  projectId?: string;
  versionId?: string;
  blackVersions?: string;
  static names(): { [key: string]: string } {
    return {
      whiteVersions: 'WhiteVersions',
      projectId: 'ProjectId',
      versionId: 'VersionId',
      blackVersions: 'BlackVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      whiteVersions: 'string',
      projectId: 'string',
      versionId: 'string',
      blackVersions: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOsBlackWhiteVersionsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOsBlackWhiteVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateOsBlackWhiteVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateOsBlackWhiteVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNamespaceDataRequest extends $tea.Model {
  projectId?: string;
  namespace?: string;
  authType?: string;
  deviceIdType?: string;
  deviceId?: string;
  accountType?: string;
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      namespace: 'Namespace',
      authType: 'AuthType',
      deviceIdType: 'DeviceIdType',
      deviceId: 'DeviceId',
      accountType: 'AccountType',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      namespace: 'string',
      authType: 'string',
      deviceIdType: 'string',
      deviceId: 'string',
      accountType: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNamespaceDataResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNamespaceDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetNamespaceDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetNamespaceDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOsVersionRemarkRequest extends $tea.Model {
  projectId?: string;
  versionId?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionId: 'VersionId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionId: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOsVersionRemarkResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOsVersionRemarkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateOsVersionRemarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateOsVersionRemarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPrepublishPassedDeviceCountRequest extends $tea.Model {
  projectId?: string;
  prepublishId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      prepublishId: 'PrepublishId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      prepublishId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPrepublishPassedDeviceCountResponseBody extends $tea.Model {
  requestId?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPrepublishPassedDeviceCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryPrepublishPassedDeviceCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryPrepublishPassedDeviceCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequest extends $tea.Model {
  projectName?: string;
  projectDesc?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      projectDesc: 'ProjectDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      projectDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesRequest extends $tea.Model {
  projectId?: string;
  authType?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      authType: 'AuthType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      authType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesResponseBody extends $tea.Model {
  namespaces?: ListNamespacesResponseBodyNamespaces[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaces: 'Namespaces',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaces: { 'type': 'array', 'itemType': ListNamespacesResponseBodyNamespaces },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNamespacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNamespacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupportFeaturesResponseBody extends $tea.Model {
  requestId?: string;
  supportFeatures?: ListSupportFeaturesResponseBodySupportFeatures[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      supportFeatures: 'SupportFeatures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      supportFeatures: { 'type': 'array', 'itemType': ListSupportFeaturesResponseBodySupportFeatures },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupportFeaturesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSupportFeaturesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSupportFeaturesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMqttRootTopicRequest extends $tea.Model {
  appKey?: string;
  rootTopic?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      rootTopic: 'RootTopic',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      rootTopic: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMqttRootTopicResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMqttRootTopicResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteMqttRootTopicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteMqttRootTopicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionGroupDeviceByIdRequest extends $tea.Model {
  projectId?: string;
  deviceGroupId?: string;
  ids?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      deviceGroupId: 'DeviceGroupId',
      ids: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      deviceGroupId: 'string',
      ids: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionGroupDeviceByIdResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionGroupDeviceByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVersionGroupDeviceByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVersionGroupDeviceByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientPluginVersionsRequest extends $tea.Model {
  osType?: string;
  pkgName?: string;
  static names(): { [key: string]: string } {
    return {
      osType: 'OsType',
      pkgName: 'PkgName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      osType: 'string',
      pkgName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientPluginVersionsResponseBody extends $tea.Model {
  clientPluginVersions?: ListClientPluginVersionsResponseBodyClientPluginVersions[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientPluginVersions: 'ClientPluginVersions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientPluginVersions: { 'type': 'array', 'itemType': ListClientPluginVersionsResponseBodyClientPluginVersions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientPluginVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClientPluginVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClientPluginVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionMessageSendRecordsRequest extends $tea.Model {
  versionType?: string;
  projectId?: string;
  pageIndex?: number;
  pageSize?: number;
  messageType?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      versionType: 'VersionType',
      projectId: 'ProjectId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      messageType: 'MessageType',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionType: 'string',
      projectId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      messageType: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionMessageSendRecordsResponseBody extends $tea.Model {
  messageSendRecordList?: FindVersionMessageSendRecordsResponseBodyMessageSendRecordList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      messageSendRecordList: 'MessageSendRecordList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageSendRecordList: FindVersionMessageSendRecordsResponseBodyMessageSendRecordList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionMessageSendRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FindVersionMessageSendRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FindVersionMessageSendRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateSysAppDownloadInfoRequest extends $tea.Model {
  plugins?: string;
  signMode?: string;
  osType?: number;
  pkgName?: string;
  projectId?: string;
  certFileObjectKey?: string;
  static names(): { [key: string]: string } {
    return {
      plugins: 'Plugins',
      signMode: 'SignMode',
      osType: 'OsType',
      pkgName: 'PkgName',
      projectId: 'ProjectId',
      certFileObjectKey: 'CertFileObjectKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      plugins: 'string',
      signMode: 'string',
      osType: 'number',
      pkgName: 'string',
      projectId: 'string',
      certFileObjectKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateSysAppDownloadInfoResponseBody extends $tea.Model {
  requestId?: string;
  sysAppDownloadInfo?: GenerateSysAppDownloadInfoResponseBodySysAppDownloadInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sysAppDownloadInfo: 'SysAppDownloadInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sysAppDownloadInfo: GenerateSysAppDownloadInfoResponseBodySysAppDownloadInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateSysAppDownloadInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateSysAppDownloadInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateSysAppDownloadInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTriggerRequest extends $tea.Model {
  projectId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTriggerResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceInfoRequest extends $tea.Model {
  deviceId?: string;
  deviceToken?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      deviceToken: 'DeviceToken',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      deviceToken: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceInfoResponseBody extends $tea.Model {
  requestId?: string;
  deviceInfo?: DescribeDeviceInfoResponseBodyDeviceInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceInfo: 'DeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceInfo: DescribeDeviceInfoResponseBodyDeviceInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDeviceInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDeviceInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceModelRequest extends $tea.Model {
  initUsageType?: string;
  canCreateDeviceId?: string;
  modelName?: string;
  hardwareType?: string;
  brandName?: string;
  description?: string;
  deviceType?: string;
  projectId?: string;
  securityChip?: string;
  osPlatform?: string;
  objectKey?: string;
  deviceName?: string;
  static names(): { [key: string]: string } {
    return {
      initUsageType: 'InitUsageType',
      canCreateDeviceId: 'CanCreateDeviceId',
      modelName: 'ModelName',
      hardwareType: 'HardwareType',
      brandName: 'BrandName',
      description: 'Description',
      deviceType: 'DeviceType',
      projectId: 'ProjectId',
      securityChip: 'SecurityChip',
      osPlatform: 'OsPlatform',
      objectKey: 'ObjectKey',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      initUsageType: 'string',
      canCreateDeviceId: 'string',
      modelName: 'string',
      hardwareType: 'string',
      brandName: 'string',
      description: 'string',
      deviceType: 'string',
      projectId: 'string',
      securityChip: 'string',
      osPlatform: 'string',
      objectKey: 'string',
      deviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceModelResponseBody extends $tea.Model {
  requestId?: string;
  deviceModelId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceModelId: 'DeviceModelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceModelId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeviceModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDeviceModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDeviceModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppVersionStatusRequest extends $tea.Model {
  projectId?: string;
  id?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppVersionStatusResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppVersionStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAppVersionStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAppVersionStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateShadowSchemaRequest extends $tea.Model {
  deviceModelId?: string;
  authType?: string;
  namespace?: string;
  projectId?: string;
  schema?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      deviceModelId: 'DeviceModelId',
      authType: 'AuthType',
      namespace: 'Namespace',
      projectId: 'ProjectId',
      schema: 'Schema',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceModelId: 'string',
      authType: 'string',
      namespace: 'string',
      projectId: 'string',
      schema: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateShadowSchemaResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateShadowSchemaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateShadowSchemaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateShadowSchemaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceShadowRequest extends $tea.Model {
  projectId?: string;
  deviceId?: string;
  deviceModel?: string;
  path?: string;
  viewSubscribed?: boolean;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      deviceId: 'DeviceId',
      deviceModel: 'DeviceModel',
      path: 'Path',
      viewSubscribed: 'ViewSubscribed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      deviceId: 'string',
      deviceModel: 'string',
      path: 'string',
      viewSubscribed: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceShadowResponseBody extends $tea.Model {
  requestId?: string;
  deviceShadow?: DescribeDeviceShadowResponseBodyDeviceShadow;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceShadow: 'DeviceShadow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceShadow: DescribeDeviceShadowResponseBodyDeviceShadow,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceShadowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDeviceShadowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDeviceShadowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTriggersRequest extends $tea.Model {
  projectId?: string;
  namespace?: string;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      namespace: 'Namespace',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      namespace: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTriggersResponseBody extends $tea.Model {
  requestId?: string;
  triggerList?: ListTriggersResponseBodyTriggerList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      triggerList: 'TriggerList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      triggerList: ListTriggersResponseBodyTriggerList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTriggersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTriggersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTriggersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomizedFilterRequest extends $tea.Model {
  blackWhiteType?: string;
  projectId?: string;
  name?: string;
  value?: string;
  valueType?: string;
  valueCompareType?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      blackWhiteType: 'BlackWhiteType',
      projectId: 'ProjectId',
      name: 'Name',
      value: 'Value',
      valueType: 'ValueType',
      valueCompareType: 'ValueCompareType',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackWhiteType: 'string',
      projectId: 'string',
      name: 'string',
      value: 'string',
      valueType: 'string',
      valueCompareType: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomizedFilterResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomizedFilterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateCustomizedFilterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateCustomizedFilterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVersionPrepublishRequest extends $tea.Model {
  isTotalPrepublish?: string;
  versionId?: string;
  versionType?: string;
  name?: string;
  projectId?: string;
  barrierCount?: string;
  static names(): { [key: string]: string } {
    return {
      isTotalPrepublish: 'IsTotalPrepublish',
      versionId: 'VersionId',
      versionType: 'VersionType',
      name: 'Name',
      projectId: 'ProjectId',
      barrierCount: 'BarrierCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTotalPrepublish: 'string',
      versionId: 'string',
      versionType: 'string',
      name: 'string',
      projectId: 'string',
      barrierCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVersionPrepublishResponseBody extends $tea.Model {
  requestId?: string;
  prepublishId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      prepublishId: 'PrepublishId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      prepublishId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVersionPrepublishResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateVersionPrepublishResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVersionPrepublishResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppVersionRemarkRequest extends $tea.Model {
  projectId?: string;
  versionId?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionId: 'VersionId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionId: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppVersionRemarkResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppVersionRemarkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAppVersionRemarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAppVersionRemarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceModelRequest extends $tea.Model {
  deviceModelId?: number;
  deviceModel?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceModelId: 'DeviceModelId',
      deviceModel: 'DeviceModel',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceModelId: 'number',
      deviceModel: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceModelResponseBody extends $tea.Model {
  deviceModel?: DescribeDeviceModelResponseBodyDeviceModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceModel: 'DeviceModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceModel: DescribeDeviceModelResponseBodyDeviceModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceModelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDeviceModelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDeviceModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceTypesRequest extends $tea.Model {
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceTypesResponseBody extends $tea.Model {
  requestId?: string;
  deviceTypes?: ListDeviceTypesResponseBodyDeviceTypes[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceTypes: 'DeviceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceTypes: { 'type': 'array', 'itemType': ListDeviceTypesResponseBodyDeviceTypes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDeviceTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDeviceTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateSdkDownloadInfoRequest extends $tea.Model {
  sdks?: string;
  appId?: string;
  osType?: number;
  pkgName?: string;
  projectId?: string;
  certFileObjectKey?: string;
  static names(): { [key: string]: string } {
    return {
      sdks: 'Sdks',
      appId: 'AppId',
      osType: 'OsType',
      pkgName: 'PkgName',
      projectId: 'ProjectId',
      certFileObjectKey: 'CertFileObjectKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sdks: 'string',
      appId: 'string',
      osType: 'number',
      pkgName: 'string',
      projectId: 'string',
      certFileObjectKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateSdkDownloadInfoResponseBody extends $tea.Model {
  requestId?: string;
  sdkDownloadInfo?: GenerateSdkDownloadInfoResponseBodySdkDownloadInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sdkDownloadInfo: 'SdkDownloadInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sdkDownloadInfo: GenerateSdkDownloadInfoResponseBodySdkDownloadInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateSdkDownloadInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateSdkDownloadInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateSdkDownloadInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteVehicleControlRequest extends $tea.Model {
  deviceId?: string;
  command?: string;
  commandParam?: string;
  vin?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      command: 'Command',
      commandParam: 'CommandParam',
      vin: 'Vin',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      command: 'string',
      commandParam: 'string',
      vin: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteVehicleControlResponseBody extends $tea.Model {
  requestId?: string;
  executionInfo?: ExecuteVehicleControlResponseBodyExecutionInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      executionInfo: 'ExecutionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      executionInfo: ExecuteVehicleControlResponseBodyExecutionInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteVehicleControlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExecuteVehicleControlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExecuteVehicleControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGatewayAppSecurityRequest extends $tea.Model {
  projectId?: string;
  gatewayAppId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      gatewayAppId: 'GatewayAppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      gatewayAppId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGatewayAppSecurityResponseBody extends $tea.Model {
  requestId?: string;
  apiGatewayAppSecurity?: DescribeApiGatewayAppSecurityResponseBodyApiGatewayAppSecurity;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      apiGatewayAppSecurity: 'ApiGatewayAppSecurity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      apiGatewayAppSecurity: DescribeApiGatewayAppSecurityResponseBodyApiGatewayAppSecurity,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGatewayAppSecurityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApiGatewayAppSecurityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApiGatewayAppSecurityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceOnlineInfoRequest extends $tea.Model {
  projectId?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceOnlineInfoResponseBody extends $tea.Model {
  requestId?: string;
  devices?: DescribeDeviceOnlineInfoResponseBodyDevices[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      devices: 'Devices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      devices: { 'type': 'array', 'itemType': DescribeDeviceOnlineInfoResponseBodyDevices },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceOnlineInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDeviceOnlineInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDeviceOnlineInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRpcServiceRequest extends $tea.Model {
  projectId?: string;
  appKey?: string;
  interfaceName?: string;
  invokeType?: string;
  params?: string;
  groupName?: string;
  methodName?: string;
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      appKey: 'AppKey',
      interfaceName: 'InterfaceName',
      invokeType: 'InvokeType',
      params: 'Params',
      groupName: 'GroupName',
      methodName: 'MethodName',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      appKey: 'string',
      interfaceName: 'string',
      invokeType: 'string',
      params: 'string',
      groupName: 'string',
      methodName: 'string',
      versionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRpcServiceResponseBody extends $tea.Model {
  requestId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRpcServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRpcServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRpcServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionWhiteDevicesRequest extends $tea.Model {
  deviceIds?: string;
  projectId?: string;
  versionType?: string;
  versionId?: string;
  deviceIdType?: string;
  static names(): { [key: string]: string } {
    return {
      deviceIds: 'DeviceIds',
      projectId: 'ProjectId',
      versionType: 'VersionType',
      versionId: 'VersionId',
      deviceIdType: 'DeviceIdType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceIds: 'string',
      projectId: 'string',
      versionType: 'string',
      versionId: 'string',
      deviceIdType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionWhiteDevicesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionWhiteDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVersionWhiteDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVersionWhiteDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBody extends $tea.Model {
  requestId?: string;
  projects?: ListProjectsResponseBodyProjects[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      projects: 'Projects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      projects: { 'type': 'array', 'itemType': ListProjectsResponseBodyProjects },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListProjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateFunctionFileUploadMetaRequest extends $tea.Model {
  projectId?: string;
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateFunctionFileUploadMetaResponseBody extends $tea.Model {
  requestId?: string;
  uploadMeta?: GenerateFunctionFileUploadMetaResponseBodyUploadMeta;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      uploadMeta: 'UploadMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      uploadMeta: GenerateFunctionFileUploadMetaResponseBodyUploadMeta,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateFunctionFileUploadMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateFunctionFileUploadMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateFunctionFileUploadMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectRequest extends $tea.Model {
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBody extends $tea.Model {
  project?: DescribeProjectResponseBodyProject;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: DescribeProjectResponseBodyProject,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMqttMessageRequest extends $tea.Model {
  appKey?: string;
  mid?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      mid: 'Mid',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      mid: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMqttMessageResponseBody extends $tea.Model {
  requestId?: string;
  message?: DescribeMqttMessageResponseBodyMessage;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: DescribeMqttMessageResponseBodyMessage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMqttMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMqttMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMqttMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCameraShootingRecordsRequest extends $tea.Model {
  projectId?: string;
  edgeDeviceId?: string;
  shootingType?: number;
  startTime?: number;
  endTime?: number;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      edgeDeviceId: 'EdgeDeviceId',
      shootingType: 'ShootingType',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      edgeDeviceId: 'string',
      shootingType: 'number',
      startTime: 'number',
      endTime: 'number',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCameraShootingRecordsResponseBody extends $tea.Model {
  requestId?: string;
  shootingRecords?: ListCameraShootingRecordsResponseBodyShootingRecords;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      shootingRecords: 'ShootingRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      shootingRecords: ListCameraShootingRecordsResponseBodyShootingRecords,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCameraShootingRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCameraShootingRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCameraShootingRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionBlackDevicesRequest extends $tea.Model {
  deviceIds?: string;
  projectId?: string;
  versionType?: string;
  versionId?: string;
  deviceIdType?: string;
  static names(): { [key: string]: string } {
    return {
      deviceIds: 'DeviceIds',
      projectId: 'ProjectId',
      versionType: 'VersionType',
      versionId: 'VersionId',
      deviceIdType: 'DeviceIdType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceIds: 'string',
      projectId: 'string',
      versionType: 'string',
      versionId: 'string',
      deviceIdType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionBlackDevicesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionBlackDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVersionBlackDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVersionBlackDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOsVersionRequest extends $tea.Model {
  projectId?: string;
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOsVersionResponseBody extends $tea.Model {
  requestId?: string;
  osVersion?: DescribeOsVersionResponseBodyOsVersion;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      osVersion: 'OsVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      osVersion: DescribeOsVersionResponseBodyOsVersion,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOsVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeOsVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeOsVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRpcServicesRequest extends $tea.Model {
  projectId?: string;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRpcServicesResponseBody extends $tea.Model {
  requestId?: string;
  rpcServices?: ListRpcServicesResponseBodyRpcServices;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rpcServices: 'RpcServices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rpcServices: ListRpcServicesResponseBodyRpcServices,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRpcServicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRpcServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRpcServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSchemaSubscribeRequest extends $tea.Model {
  id?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSchemaSubscribeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSchemaSubscribeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSchemaSubscribeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSchemaSubscribeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUploadedFunctionFileInfoRequest extends $tea.Model {
  projectId?: string;
  objectKey?: string;
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      objectKey: 'ObjectKey',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      objectKey: 'string',
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUploadedFunctionFileInfoResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUploadedFunctionFileInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddUploadedFunctionFileInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddUploadedFunctionFileInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectAppRequest extends $tea.Model {
  projectId?: string;
  appName?: string;
  appPkgName?: string;
  osType?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      appName: 'AppName',
      appPkgName: 'AppPkgName',
      osType: 'OsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      appName: 'string',
      appPkgName: 'string',
      osType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectAppResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateProjectAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateProjectAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBody extends $tea.Model {
  requestId?: string;
  serviceList?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceList: 'ServiceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindOsVersionsRequest extends $tea.Model {
  projectId?: string;
  pageIndex?: number;
  pageSize?: number;
  versionId?: string;
  deviceModelId?: string;
  systemVersion?: string;
  status?: string;
  isMilestone?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      versionId: 'VersionId',
      deviceModelId: 'DeviceModelId',
      systemVersion: 'SystemVersion',
      status: 'Status',
      isMilestone: 'IsMilestone',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      versionId: 'string',
      deviceModelId: 'string',
      systemVersion: 'string',
      status: 'string',
      isMilestone: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindOsVersionsResponseBody extends $tea.Model {
  requestId?: string;
  osVersionList?: FindOsVersionsResponseBodyOsVersionList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      osVersionList: 'OsVersionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      osVersionList: FindOsVersionsResponseBodyOsVersionList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindOsVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FindOsVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FindOsVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVersionPrepublishActiveStatusRequest extends $tea.Model {
  projectId?: string;
  prepublishId?: string;
  isActive?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      prepublishId: 'PrepublishId',
      isActive: 'IsActive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      prepublishId: 'string',
      isActive: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVersionPrepublishActiveStatusResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVersionPrepublishActiveStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateVersionPrepublishActiveStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateVersionPrepublishActiveStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOsVersionRequest extends $tea.Model {
  isForceNightUpgrade?: string;
  maxClientVersion?: string;
  projectId?: string;
  deviceModelId?: string;
  systemVersion?: string;
  releaseNote?: string;
  remark?: string;
  blackVersionList?: string;
  isMilestone?: string;
  minClientVersion?: string;
  whiteVersionList?: string;
  isForceUpgrade?: string;
  nightUpgradeDownloadType?: string;
  nightUpgradeIsShowTip?: string;
  nightUpgradeIsAllowedCancel?: string;
  romList?: string;
  enableMobileDownload?: string;
  mobileDownloadMaxSize?: string;
  static names(): { [key: string]: string } {
    return {
      isForceNightUpgrade: 'IsForceNightUpgrade',
      maxClientVersion: 'MaxClientVersion',
      projectId: 'ProjectId',
      deviceModelId: 'DeviceModelId',
      systemVersion: 'SystemVersion',
      releaseNote: 'ReleaseNote',
      remark: 'Remark',
      blackVersionList: 'BlackVersionList',
      isMilestone: 'IsMilestone',
      minClientVersion: 'MinClientVersion',
      whiteVersionList: 'WhiteVersionList',
      isForceUpgrade: 'IsForceUpgrade',
      nightUpgradeDownloadType: 'NightUpgradeDownloadType',
      nightUpgradeIsShowTip: 'NightUpgradeIsShowTip',
      nightUpgradeIsAllowedCancel: 'NightUpgradeIsAllowedCancel',
      romList: 'RomList',
      enableMobileDownload: 'EnableMobileDownload',
      mobileDownloadMaxSize: 'MobileDownloadMaxSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isForceNightUpgrade: 'string',
      maxClientVersion: 'string',
      projectId: 'string',
      deviceModelId: 'string',
      systemVersion: 'string',
      releaseNote: 'string',
      remark: 'string',
      blackVersionList: 'string',
      isMilestone: 'string',
      minClientVersion: 'string',
      whiteVersionList: 'string',
      isForceUpgrade: 'string',
      nightUpgradeDownloadType: 'string',
      nightUpgradeIsShowTip: 'string',
      nightUpgradeIsAllowedCancel: 'string',
      romList: 'string',
      enableMobileDownload: 'string',
      mobileDownloadMaxSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOsVersionResponseBody extends $tea.Model {
  versionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'VersionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOsVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateOsVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateOsVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountDeviceBrandsRequest extends $tea.Model {
  deviceBrandId?: number;
  deviceBrand?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceBrandId: 'DeviceBrandId',
      deviceBrand: 'DeviceBrand',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceBrandId: 'number',
      deviceBrand: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountDeviceBrandsResponseBody extends $tea.Model {
  requestId?: string;
  brandCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      brandCount: 'BrandCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      brandCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountDeviceBrandsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CountDeviceBrandsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CountDeviceBrandsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceBrandRequest extends $tea.Model {
  projectId?: string;
  deviceBrandId?: number;
  deviceBrand?: string;
  start?: string;
  length?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      deviceBrandId: 'DeviceBrandId',
      deviceBrand: 'DeviceBrand',
      start: 'Start',
      length: 'Length',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      deviceBrandId: 'number',
      deviceBrand: 'string',
      start: 'string',
      length: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceBrandResponseBody extends $tea.Model {
  requestId?: string;
  deviceBrand?: DescribeDeviceBrandResponseBodyDeviceBrand;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceBrand: 'DeviceBrand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceBrand: DescribeDeviceBrandResponseBodyDeviceBrand,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceBrandResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDeviceBrandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDeviceBrandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShadowSchemaRequest extends $tea.Model {
  deviceModelId?: string;
  authType?: string;
  namespace?: string;
  projectId?: string;
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      deviceModelId: 'DeviceModelId',
      authType: 'AuthType',
      namespace: 'Namespace',
      projectId: 'ProjectId',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceModelId: 'string',
      authType: 'string',
      namespace: 'string',
      projectId: 'string',
      schema: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShadowSchemaResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShadowSchemaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateShadowSchemaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateShadowSchemaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceValiditySchemaRequest extends $tea.Model {
  deviceModel?: string;
  schemaVersion?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceModel: 'DeviceModel',
      schemaVersion: 'SchemaVersion',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceModel: 'string',
      schemaVersion: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceValiditySchemaResponseBody extends $tea.Model {
  requestId?: string;
  itemList?: DescribeDeviceValiditySchemaResponseBodyItemList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      itemList: 'ItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      itemList: { 'type': 'array', 'itemType': DescribeDeviceValiditySchemaResponseBodyItemList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceValiditySchemaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDeviceValiditySchemaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDeviceValiditySchemaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssUploadMetaRequest extends $tea.Model {
  projectId?: string;
  ext?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      ext: 'Ext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      ext: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssUploadMetaResponseBody extends $tea.Model {
  requestId?: string;
  ossUploadMeta?: GetOssUploadMetaResponseBodyOssUploadMeta;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ossUploadMeta: 'OssUploadMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ossUploadMeta: GetOssUploadMetaResponseBodyOssUploadMeta,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssUploadMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOssUploadMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOssUploadMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpstreamAppKeyRelationsRequest extends $tea.Model {
  pageSize?: number;
  projectId?: string;
  appServerId?: number;
  pageIndex?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      appServerId: 'AppServerId',
      pageIndex: 'PageIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      projectId: 'string',
      appServerId: 'number',
      pageIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpstreamAppKeyRelationsResponseBody extends $tea.Model {
  requestId?: string;
  relationList?: ListUpstreamAppKeyRelationsResponseBodyRelationList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      relationList: 'RelationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      relationList: ListUpstreamAppKeyRelationsResponseBodyRelationList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpstreamAppKeyRelationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUpstreamAppKeyRelationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUpstreamAppKeyRelationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShadowSchemasRequest extends $tea.Model {
  projectId?: string;
  queryType?: string;
  queryValue?: string;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      queryType: 'QueryType',
      queryValue: 'QueryValue',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      queryType: 'string',
      queryValue: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShadowSchemasResponseBody extends $tea.Model {
  requestId?: string;
  pageList?: ListShadowSchemasResponseBodyPageList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageList: 'PageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageList: ListShadowSchemasResponseBodyPageList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShadowSchemasResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListShadowSchemasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListShadowSchemasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectAppRequest extends $tea.Model {
  projectId?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectAppResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteProjectAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteProjectAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountYunIdInfoResponseBody extends $tea.Model {
  requestId?: string;
  yunIdInfo?: CountYunIdInfoResponseBodyYunIdInfo[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      yunIdInfo: 'YunIdInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      yunIdInfo: { 'type': 'array', 'itemType': CountYunIdInfoResponseBodyYunIdInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountYunIdInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CountYunIdInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CountYunIdInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindPrepublishesByParentIdRequest extends $tea.Model {
  projectId?: string;
  parentId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      parentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindPrepublishesByParentIdResponseBody extends $tea.Model {
  requestId?: string;
  prepublishList?: FindPrepublishesByParentIdResponseBodyPrepublishList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      prepublishList: 'PrepublishList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      prepublishList: FindPrepublishesByParentIdResponseBodyPrepublishList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindPrepublishesByParentIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FindPrepublishesByParentIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FindPrepublishesByParentIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVehicleControlResultRequest extends $tea.Model {
  deviceId?: string;
  executionId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      executionId: 'ExecutionId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      executionId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVehicleControlResultResponseBody extends $tea.Model {
  requestId?: string;
  executionInfo?: GetVehicleControlResultResponseBodyExecutionInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      executionInfo: 'ExecutionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      executionInfo: GetVehicleControlResultResponseBodyExecutionInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVehicleControlResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetVehicleControlResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetVehicleControlResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTriggerRequest extends $tea.Model {
  projectId?: string;
  id?: number;
  sandbox?: number;
  production?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
      sandbox: 'Sandbox',
      production: 'Production',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'number',
      sandbox: 'number',
      production: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTriggerResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientSdksRequest extends $tea.Model {
  osType?: string;
  static names(): { [key: string]: string } {
    return {
      osType: 'OsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      osType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientSdksResponseBody extends $tea.Model {
  clientSdks?: ListClientSdksResponseBodyClientSdks[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientSdks: 'ClientSdks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientSdks: { 'type': 'array', 'itemType': ListClientSdksResponseBodyClientSdks },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientSdksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClientSdksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClientSdksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVersionDeviceGroupsRequest extends $tea.Model {
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVersionDeviceGroupsResponseBody extends $tea.Model {
  requestId?: string;
  deviceGroupList?: ListVersionDeviceGroupsResponseBodyDeviceGroupList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceGroupList: 'DeviceGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceGroupList: { 'type': 'array', 'itemType': ListVersionDeviceGroupsResponseBodyDeviceGroupList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVersionDeviceGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVersionDeviceGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVersionDeviceGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommercialVehicleDeviceRequest extends $tea.Model {
  projectId?: string;
  clientId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      clientId: 'ClientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      clientId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommercialVehicleDeviceResponseBody extends $tea.Model {
  requestId?: string;
  vehicleDevice?: GetCommercialVehicleDeviceResponseBodyVehicleDevice;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vehicleDevice: 'VehicleDevice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vehicleDevice: GetCommercialVehicleDeviceResponseBodyVehicleDevice,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommercialVehicleDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCommercialVehicleDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCommercialVehicleDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAssistReportRequest extends $tea.Model {
  projectId?: string;
  assistId?: string;
  assistDescription?: string;
  assistResult?: string;
  assistTag?: string;
  assistReason?: string;
  deviceModel?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      assistId: 'AssistId',
      assistDescription: 'AssistDescription',
      assistResult: 'AssistResult',
      assistTag: 'AssistTag',
      assistReason: 'AssistReason',
      deviceModel: 'DeviceModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      assistId: 'string',
      assistDescription: 'string',
      assistResult: 'string',
      assistTag: 'string',
      assistReason: 'string',
      deviceModel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAssistReportResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAssistReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitAssistReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitAssistReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionAllBlackDevicesRequest extends $tea.Model {
  projectId?: string;
  versionType?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionType: 'VersionType',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionType: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionAllBlackDevicesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionAllBlackDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVersionAllBlackDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVersionAllBlackDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenAccountLinksRequest extends $tea.Model {
  projectId?: string;
  identityId?: string;
  idp?: string;
  openId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      identityId: 'IdentityId',
      idp: 'Idp',
      openId: 'OpenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      identityId: 'string',
      idp: 'string',
      openId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenAccountLinksResponseBody extends $tea.Model {
  requestId?: string;
  openAccounts?: ListOpenAccountLinksResponseBodyOpenAccounts[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      openAccounts: 'OpenAccounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      openAccounts: { 'type': 'array', 'itemType': ListOpenAccountLinksResponseBodyOpenAccounts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenAccountLinksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOpenAccountLinksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOpenAccountLinksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVersionWhiteDevicesByDeviceGroupsRequest extends $tea.Model {
  projectId?: string;
  versionType?: string;
  groupIds?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionType: 'VersionType',
      groupIds: 'GroupIds',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionType: 'string',
      groupIds: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVersionWhiteDevicesByDeviceGroupsResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVersionWhiteDevicesByDeviceGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddVersionWhiteDevicesByDeviceGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddVersionWhiteDevicesByDeviceGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindCustomizedPropertiesRequest extends $tea.Model {
  projectId?: string;
  versionId?: string;
  pageIndex?: number;
  pageSize?: number;
  name?: string;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionId: 'VersionId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      name: 'Name',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      name: 'string',
      versionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindCustomizedPropertiesResponseBody extends $tea.Model {
  requestId?: string;
  customizedPropertyList?: FindCustomizedPropertiesResponseBodyCustomizedPropertyList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      customizedPropertyList: 'CustomizedPropertyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      customizedPropertyList: FindCustomizedPropertiesResponseBodyCustomizedPropertyList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindCustomizedPropertiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FindCustomizedPropertiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FindCustomizedPropertiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageAcksRequest extends $tea.Model {
  pageSize?: number;
  projectId?: string;
  deviceId?: string;
  messageId?: number;
  pageIndex?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      deviceId: 'DeviceId',
      messageId: 'MessageId',
      pageIndex: 'PageIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      projectId: 'string',
      deviceId: 'string',
      messageId: 'number',
      pageIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageAcksResponseBody extends $tea.Model {
  requestId?: string;
  messageAcks?: ListMessageAcksResponseBodyMessageAcks;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      messageAcks: 'MessageAcks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      messageAcks: ListMessageAcksResponseBodyMessageAcks,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageAcksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMessageAcksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMessageAcksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommercialVehicleTrackRequest extends $tea.Model {
  projectId?: string;
  clientId?: string;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      clientId: 'ClientId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      clientId: 'string',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommercialVehicleTrackResponseBody extends $tea.Model {
  requestId?: string;
  points?: GetCommercialVehicleTrackResponseBodyPoints[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      points: 'Points',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      points: { 'type': 'array', 'itemType': GetCommercialVehicleTrackResponseBodyPoints },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommercialVehicleTrackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCommercialVehicleTrackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCommercialVehicleTrackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostDevicesRequest extends $tea.Model {
  projectId?: string;
  pageIndex?: number;
  pageSize?: number;
  deviceId?: string;
  serialNumber?: string;
  deviceName?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      deviceId: 'DeviceId',
      serialNumber: 'SerialNumber',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      deviceId: 'string',
      serialNumber: 'string',
      deviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostDevicesResponseBody extends $tea.Model {
  requestId?: string;
  hostDevices?: ListHostDevicesResponseBodyHostDevices;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      hostDevices: 'HostDevices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      hostDevices: ListHostDevicesResponseBodyHostDevices,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListHostDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListHostDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttClientSubscriptionsRequest extends $tea.Model {
  appKey?: string;
  clientId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      clientId: 'ClientId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      clientId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttClientSubscriptionsResponseBody extends $tea.Model {
  requestId?: string;
  clientSubscriptions?: ListMqttClientSubscriptionsResponseBodyClientSubscriptions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clientSubscriptions: 'ClientSubscriptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clientSubscriptions: ListMqttClientSubscriptionsResponseBodyClientSubscriptions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttClientSubscriptionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMqttClientSubscriptionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMqttClientSubscriptionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeFunctionRequest extends $tea.Model {
  projectId?: string;
  fileId?: number;
  functionName?: string;
  env?: number;
  parameters?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      fileId: 'FileId',
      functionName: 'FunctionName',
      env: 'Env',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      fileId: 'number',
      functionName: 'string',
      env: 'number',
      parameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeFunctionResponseBody extends $tea.Model {
  requestId?: string;
  result?: InvokeFunctionResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: InvokeFunctionResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeFunctionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InvokeFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InvokeFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionAllWhiteDevicesRequest extends $tea.Model {
  projectId?: string;
  versionType?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      versionType: 'VersionType',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      versionType: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionAllWhiteDevicesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVersionAllWhiteDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVersionAllWhiteDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVersionAllWhiteDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMessageRequest extends $tea.Model {
  projectId?: string;
  messageId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      messageId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMessageResponseBody extends $tea.Model {
  requestId?: string;
  message?: DescribeMessageResponseBodyMessage;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: DescribeMessageResponseBodyMessage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectRequest extends $tea.Model {
  projectId?: string;
  name?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      name: 'Name',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      name: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppBlackWhiteVersionsRequest extends $tea.Model {
  whiteAppVersions?: string;
  projectId?: string;
  versionId?: string;
  blackAppVersions?: string;
  static names(): { [key: string]: string } {
    return {
      whiteAppVersions: 'WhiteAppVersions',
      projectId: 'ProjectId',
      versionId: 'VersionId',
      blackAppVersions: 'BlackAppVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      whiteAppVersions: 'string',
      projectId: 'string',
      versionId: 'string',
      blackAppVersions: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppBlackWhiteVersionsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppBlackWhiteVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAppBlackWhiteVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAppBlackWhiteVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceAppUpdateFunnelEventsRequest extends $tea.Model {
  packageName?: string;
  projectId?: string;
  targetVersionCode?: string;
  idType?: string;
  originalId?: string;
  static names(): { [key: string]: string } {
    return {
      packageName: 'PackageName',
      projectId: 'ProjectId',
      targetVersionCode: 'TargetVersionCode',
      idType: 'IdType',
      originalId: 'OriginalId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageName: 'string',
      projectId: 'string',
      targetVersionCode: 'string',
      idType: 'string',
      originalId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceAppUpdateFunnelEventsResponseBody extends $tea.Model {
  requestId?: string;
  eventList?: GetDeviceAppUpdateFunnelEventsResponseBodyEventList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      eventList: 'EventList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      eventList: { 'type': 'array', 'itemType': GetDeviceAppUpdateFunnelEventsResponseBodyEventList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceAppUpdateFunnelEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDeviceAppUpdateFunnelEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDeviceAppUpdateFunnelEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNamespaceStatisticsDataRequest extends $tea.Model {
  projectId?: string;
  namespace?: string;
  dimensionType?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      namespace: 'Namespace',
      dimensionType: 'DimensionType',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      namespace: 'string',
      dimensionType: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNamespaceStatisticsDataResponseBody extends $tea.Model {
  requestId?: string;
  statistics?: GetNamespaceStatisticsDataResponseBodyStatistics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistics: GetNamespaceStatisticsDataResponseBodyStatistics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNamespaceStatisticsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetNamespaceStatisticsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetNamespaceStatisticsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceBrandsResponseBodyDeviceBrands extends $tea.Model {
  deviceBrandId?: number;
  description?: string;
  projectId?: string;
  manufacture?: string;
  deviceBrand?: string;
  static names(): { [key: string]: string } {
    return {
      deviceBrandId: 'DeviceBrandId',
      description: 'Description',
      projectId: 'ProjectId',
      manufacture: 'Manufacture',
      deviceBrand: 'DeviceBrand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceBrandId: 'number',
      description: 'string',
      projectId: 'string',
      manufacture: 'string',
      deviceBrand: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionExecuteLogResponseBodyLogListPagination extends $tea.Model {
  pageIndex?: number;
  pageSize?: number;
  hasNextPage?: boolean;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      hasNextPage: 'HasNextPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
      hasNextPage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionExecuteLogResponseBodyLogListLogs extends $tea.Model {
  message?: string;
  backEndRequestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      backEndRequestId: 'BackEndRequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      backEndRequestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionExecuteLogResponseBodyLogList extends $tea.Model {
  pagination?: ListFunctionExecuteLogResponseBodyLogListPagination;
  logs?: ListFunctionExecuteLogResponseBodyLogListLogs[];
  static names(): { [key: string]: string } {
    return {
      pagination: 'Pagination',
      logs: 'Logs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagination: ListFunctionExecuteLogResponseBodyLogListPagination,
      logs: { 'type': 'array', 'itemType': ListFunctionExecuteLogResponseBodyLogListLogs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceModelsResponseBodyDeviceModels extends $tea.Model {
  deviceModelId?: number;
  hardwareType?: string;
  deviceName?: string;
  deviceType?: string;
  canCreateDeviceId?: number;
  projectId?: string;
  osPlatform?: string;
  deviceModel?: string;
  securityChip?: string;
  deviceLogoUrl?: string;
  description?: string;
  objectKey?: string;
  initUsageTypeDesc?: string;
  initUsageType?: number;
  deviceBrand?: string;
  static names(): { [key: string]: string } {
    return {
      deviceModelId: 'DeviceModelId',
      hardwareType: 'HardwareType',
      deviceName: 'DeviceName',
      deviceType: 'DeviceType',
      canCreateDeviceId: 'CanCreateDeviceId',
      projectId: 'ProjectId',
      osPlatform: 'OsPlatform',
      deviceModel: 'DeviceModel',
      securityChip: 'SecurityChip',
      deviceLogoUrl: 'DeviceLogoUrl',
      description: 'Description',
      objectKey: 'ObjectKey',
      initUsageTypeDesc: 'InitUsageTypeDesc',
      initUsageType: 'InitUsageType',
      deviceBrand: 'DeviceBrand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceModelId: 'number',
      hardwareType: 'string',
      deviceName: 'string',
      deviceType: 'string',
      canCreateDeviceId: 'number',
      projectId: 'string',
      osPlatform: 'string',
      deviceModel: 'string',
      securityChip: 'string',
      deviceLogoUrl: 'string',
      description: 'string',
      objectKey: 'string',
      initUsageTypeDesc: 'string',
      initUsageType: 'number',
      deviceBrand: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttMessageLogsResponseBodyTracesPagination extends $tea.Model {
  pageIndex?: number;
  totalPageCount?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      totalPageCount: 'TotalPageCount',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      totalPageCount: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttMessageLogsResponseBodyTracesList extends $tea.Model {
  type?: string;
  time?: number;
  action?: string;
  topic?: string;
  mid?: string;
  clientMid?: string;
  clientId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      time: 'Time',
      action: 'Action',
      topic: 'Topic',
      mid: 'Mid',
      clientMid: 'ClientMid',
      clientId: 'ClientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      time: 'number',
      action: 'string',
      topic: 'string',
      mid: 'string',
      clientMid: 'string',
      clientId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttMessageLogsResponseBodyTraces extends $tea.Model {
  pagination?: ListMqttMessageLogsResponseBodyTracesPagination;
  list?: ListMqttMessageLogsResponseBodyTracesList[];
  static names(): { [key: string]: string } {
    return {
      pagination: 'Pagination',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagination: ListMqttMessageLogsResponseBodyTracesPagination,
      list: { 'type': 'array', 'itemType': ListMqttMessageLogsResponseBodyTracesList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfflineMessagesResponseBodyOfflineMessagesPagination extends $tea.Model {
  pageIndex?: number;
  totalPageCount?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      totalPageCount: 'TotalPageCount',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      totalPageCount: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfflineMessagesResponseBodyOfflineMessagesList extends $tea.Model {
  expiredTime?: number;
  mid?: number;
  gmtCreate?: number;
  static names(): { [key: string]: string } {
    return {
      expiredTime: 'ExpiredTime',
      mid: 'Mid',
      gmtCreate: 'GmtCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTime: 'number',
      mid: 'number',
      gmtCreate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfflineMessagesResponseBodyOfflineMessages extends $tea.Model {
  pagination?: ListOfflineMessagesResponseBodyOfflineMessagesPagination;
  list?: ListOfflineMessagesResponseBodyOfflineMessagesList[];
  static names(): { [key: string]: string } {
    return {
      pagination: 'Pagination',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagination: ListOfflineMessagesResponseBodyOfflineMessagesPagination,
      list: { 'type': 'array', 'itemType': ListOfflineMessagesResponseBodyOfflineMessagesList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMqttClientStatusResponseBodyClientStatus extends $tea.Model {
  status?: number;
  cleanSession?: string;
  lastUpdate?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      cleanSession: 'CleanSession',
      lastUpdate: 'LastUpdate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      cleanSession: 'string',
      lastUpdate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCameraShootingAttachmentsResponseBodyAttachments extends $tea.Model {
  id?: number;
  fileId?: string;
  fileType?: number;
  fileName?: string;
  fileLength?: number;
  shootingTime?: number;
  downloadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      fileId: 'FileId',
      fileType: 'FileType',
      fileName: 'FileName',
      fileLength: 'FileLength',
      shootingTime: 'ShootingTime',
      downloadUrl: 'DownloadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      fileId: 'string',
      fileType: 'number',
      fileName: 'string',
      fileLength: 'number',
      shootingTime: 'number',
      downloadUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistHistoriesResponseBodyHistories extends $tea.Model {
  serialNumber?: string;
  endTime?: number;
  startTime?: number;
  UNAME?: string;
  hardwareId?: string;
  deviceName?: string;
  UUID?: string;
  deviceId?: string;
  VIN?: string;
  UID?: string;
  ID?: string;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
      endTime: 'EndTime',
      startTime: 'StartTime',
      UNAME: 'UNAME',
      hardwareId: 'HardwareId',
      deviceName: 'DeviceName',
      UUID: 'UUID',
      deviceId: 'DeviceId',
      VIN: 'VIN',
      UID: 'UID',
      ID: 'ID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
      endTime: 'number',
      startTime: 'number',
      UNAME: 'string',
      hardwareId: 'string',
      deviceName: 'string',
      UUID: 'string',
      deviceId: 'string',
      VIN: 'string',
      UID: 'string',
      ID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceSystemUpdateFunnelEventsResponseBodyEventList extends $tea.Model {
  deviceId?: string;
  targetVersion?: string;
  event?: string;
  reportTimestamp?: number;
  reportTime?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      targetVersion: 'TargetVersion',
      event: 'Event',
      reportTimestamp: 'ReportTimestamp',
      reportTime: 'ReportTime',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      targetVersion: 'string',
      event: 'string',
      reportTimestamp: 'number',
      reportTime: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindPrepublishesByVersionIdResponseBodyPrepublishList extends $tea.Model {
  gmtCreateTimestamp?: number;
  deviceModelId?: string;
  gmtModify?: string;
  isActive?: string;
  versionId?: string;
  barrierCount?: string;
  deviceModelName?: string;
  isTotalPrepublish?: string;
  gmtModifyTimestamp?: number;
  parentId?: string;
  gmtCreate?: string;
  name?: string;
  id?: string;
  versionType?: string;
  passedCount?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      deviceModelId: 'DeviceModelId',
      gmtModify: 'GmtModify',
      isActive: 'IsActive',
      versionId: 'VersionId',
      barrierCount: 'BarrierCount',
      deviceModelName: 'DeviceModelName',
      isTotalPrepublish: 'IsTotalPrepublish',
      gmtModifyTimestamp: 'GmtModifyTimestamp',
      parentId: 'ParentId',
      gmtCreate: 'GmtCreate',
      name: 'Name',
      id: 'Id',
      versionType: 'VersionType',
      passedCount: 'PassedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTimestamp: 'number',
      deviceModelId: 'string',
      gmtModify: 'string',
      isActive: 'string',
      versionId: 'string',
      barrierCount: 'string',
      deviceModelName: 'string',
      isTotalPrepublish: 'string',
      gmtModifyTimestamp: 'number',
      parentId: 'string',
      gmtCreate: 'string',
      name: 'string',
      id: 'string',
      versionType: 'string',
      passedCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionMessagesResponseBodyMessageListItems extends $tea.Model {
  gmtModifyTimestamp?: number;
  gmtCreateTimestamp?: number;
  status?: string;
  gmtModify?: string;
  messageId?: string;
  deviceId?: string;
  gmtCreate?: string;
  versionId?: string;
  statusDesc?: string;
  testId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      gmtModifyTimestamp: 'GmtModifyTimestamp',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      status: 'Status',
      gmtModify: 'GmtModify',
      messageId: 'MessageId',
      deviceId: 'DeviceId',
      gmtCreate: 'GmtCreate',
      versionId: 'VersionId',
      statusDesc: 'StatusDesc',
      testId: 'TestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtModifyTimestamp: 'number',
      gmtCreateTimestamp: 'number',
      status: 'string',
      gmtModify: 'string',
      messageId: 'string',
      deviceId: 'string',
      gmtCreate: 'string',
      versionId: 'string',
      statusDesc: 'string',
      testId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionMessagesResponseBodyMessageList extends $tea.Model {
  items?: FindVersionMessagesResponseBodyMessageListItems[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': FindVersionMessagesResponseBodyMessageListItems },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVehicleTrackResponseBodyPoints extends $tea.Model {
  longitude?: number;
  latitude?: number;
  altitude?: number;
  speed?: number;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      longitude: 'Longitude',
      latitude: 'Latitude',
      altitude: 'Altitude',
      speed: 'Speed',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      longitude: 'number',
      latitude: 'number',
      altitude: 'number',
      speed: 'number',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeployedFunctionsResponseBodyFunctions extends $tea.Model {
  projectId?: string;
  gmtCreate?: number;
  name?: string;
  gmtModified?: number;
  id?: number;
  fileId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      gmtCreate: 'GmtCreate',
      name: 'Name',
      gmtModified: 'GmtModified',
      id: 'Id',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      gmtCreate: 'number',
      name: 'string',
      gmtModified: 'number',
      id: 'number',
      fileId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceModelResponseBodyModelList extends $tea.Model {
  deviceModelId?: number;
  hardwareType?: string;
  deviceType?: string;
  canCreateDeviceId?: number;
  projectId?: string;
  osPlatform?: string;
  deviceModel?: string;
  securityChip?: string;
  description?: string;
  initUsageTypeDesc?: string;
  initUsageType?: number;
  deviceBrand?: string;
  static names(): { [key: string]: string } {
    return {
      deviceModelId: 'DeviceModelId',
      hardwareType: 'HardwareType',
      deviceType: 'DeviceType',
      canCreateDeviceId: 'CanCreateDeviceId',
      projectId: 'ProjectId',
      osPlatform: 'OsPlatform',
      deviceModel: 'DeviceModel',
      securityChip: 'SecurityChip',
      description: 'Description',
      initUsageTypeDesc: 'InitUsageTypeDesc',
      initUsageType: 'InitUsageType',
      deviceBrand: 'DeviceBrand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceModelId: 'number',
      hardwareType: 'string',
      deviceType: 'string',
      canCreateDeviceId: 'number',
      projectId: 'string',
      osPlatform: 'string',
      deviceModel: 'string',
      securityChip: 'string',
      description: 'string',
      initUsageTypeDesc: 'string',
      initUsageType: 'number',
      deviceBrand: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectAppSecurityResponseBodyProjectAppSecurity extends $tea.Model {
  appSecret?: string;
  appKey?: string;
  appId?: string;
  gmtCreate?: number;
  gmtModified?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      appSecret: 'AppSecret',
      appKey: 'AppKey',
      appId: 'AppId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSecret: 'string',
      appKey: 'string',
      appId: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreChecksResponseBodyPreChecks extends $tea.Model {
  key?: string;
  link?: string;
  price?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      link: 'Link',
      price: 'Price',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      link: 'string',
      price: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBodyApps extends $tea.Model {
  appName?: string;
  appKey?: string;
  osType?: number;
  appPackage?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appKey: 'AppKey',
      osType: 'OsType',
      appPackage: 'AppPackage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appKey: 'string',
      osType: 'number',
      appPackage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceResponseBodyDeviceInfo extends $tea.Model {
  serialNumber?: string;
  status?: string;
  deviceModelId?: number;
  macAddress?: string;
  deviceId?: string;
  deviceType?: string;
  projectId?: string;
  osPlatform?: string;
  deviceModel?: string;
  usageType?: number;
  vin?: string;
  usageTypeDesc?: string;
  uuid?: string;
  hardwareId?: string;
  deviceBrandId?: number;
  region?: string;
  attributes?: string;
  softwareId?: string;
  name?: string;
  deviceBrand?: string;
  deviceProduct?: string;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
      status: 'Status',
      deviceModelId: 'DeviceModelId',
      macAddress: 'MacAddress',
      deviceId: 'DeviceId',
      deviceType: 'DeviceType',
      projectId: 'ProjectId',
      osPlatform: 'OsPlatform',
      deviceModel: 'DeviceModel',
      usageType: 'UsageType',
      vin: 'Vin',
      usageTypeDesc: 'UsageTypeDesc',
      uuid: 'Uuid',
      hardwareId: 'HardwareId',
      deviceBrandId: 'DeviceBrandId',
      region: 'Region',
      attributes: 'Attributes',
      softwareId: 'SoftwareId',
      name: 'Name',
      deviceBrand: 'DeviceBrand',
      deviceProduct: 'DeviceProduct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
      status: 'string',
      deviceModelId: 'number',
      macAddress: 'string',
      deviceId: 'string',
      deviceType: 'string',
      projectId: 'string',
      osPlatform: 'string',
      deviceModel: 'string',
      usageType: 'number',
      vin: 'string',
      usageTypeDesc: 'string',
      uuid: 'string',
      hardwareId: 'string',
      deviceBrandId: 'number',
      region: 'string',
      attributes: 'string',
      softwareId: 'string',
      name: 'string',
      deviceBrand: 'string',
      deviceProduct: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectAppsResponseBodyResultProjectApps extends $tea.Model {
  status?: number;
  projectId?: string;
  userId?: string;
  gmtModified?: number;
  appPkgName?: string;
  appName?: string;
  appSecret?: string;
  appKey?: string;
  appId?: string;
  osType?: number;
  gmtCreate?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      projectId: 'ProjectId',
      userId: 'UserId',
      gmtModified: 'GmtModified',
      appPkgName: 'AppPkgName',
      appName: 'AppName',
      appSecret: 'AppSecret',
      appKey: 'AppKey',
      appId: 'AppId',
      osType: 'OsType',
      gmtCreate: 'GmtCreate',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      projectId: 'string',
      userId: 'string',
      gmtModified: 'number',
      appPkgName: 'string',
      appName: 'string',
      appSecret: 'string',
      appKey: 'string',
      appId: 'string',
      osType: 'number',
      gmtCreate: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectAppsResponseBodyResult extends $tea.Model {
  projectApps?: ListProjectAppsResponseBodyResultProjectApps[];
  totalPage?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      projectApps: 'ProjectApps',
      totalPage: 'TotalPage',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectApps: { 'type': 'array', 'itemType': ListProjectAppsResponseBodyResultProjectApps },
      totalPage: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiGatewayAppsResponseBodyApiGatewayApps extends $tea.Model {
  gatewayAppKey?: string;
  status?: number;
  gatewayAppSecret?: string;
  gatewayAppId?: string;
  userId?: string;
  projectId?: string;
  gmtCreate?: number;
  gmtModified?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      gatewayAppKey: 'GatewayAppKey',
      status: 'Status',
      gatewayAppSecret: 'GatewayAppSecret',
      gatewayAppId: 'GatewayAppId',
      userId: 'UserId',
      projectId: 'ProjectId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayAppKey: 'string',
      status: 'number',
      gatewayAppSecret: 'string',
      gatewayAppId: 'string',
      userId: 'string',
      projectId: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindPrepublishPassedDevicesResponseBodyDeviceListItems extends $tea.Model {
  gmtCreateTimestamp?: number;
  deviceId?: string;
  gmtCreate?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      deviceId: 'DeviceId',
      gmtCreate: 'GmtCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTimestamp: 'number',
      deviceId: 'string',
      gmtCreate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindPrepublishPassedDevicesResponseBodyDeviceList extends $tea.Model {
  items?: FindPrepublishPassedDevicesResponseBodyDeviceListItems[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': FindPrepublishPassedDevicesResponseBodyDeviceListItems },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenAccountResponseBodyOpenAccount extends $tea.Model {
  status?: number;
  type?: number;
  displayName?: string;
  createAccessKey?: string;
  openId?: string;
  mobile?: string;
  region?: string;
  identityId?: string;
  loginId?: string;
  idp?: string;
  aliyunId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      displayName: 'DisplayName',
      createAccessKey: 'CreateAccessKey',
      openId: 'OpenId',
      mobile: 'Mobile',
      region: 'Region',
      identityId: 'IdentityId',
      loginId: 'LoginId',
      idp: 'Idp',
      aliyunId: 'AliyunId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      type: 'number',
      displayName: 'string',
      createAccessKey: 'string',
      openId: 'string',
      mobile: 'string',
      region: 'string',
      identityId: 'string',
      loginId: 'string',
      idp: 'string',
      aliyunId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindCustomizedFiltersResponseBodyCustomizedFilterListItems extends $tea.Model {
  gmtModifyTimestamp?: number;
  gmtCreateTimestamp?: number;
  value?: string;
  gmtModify?: string;
  valueCompareType?: string;
  gmtCreate?: string;
  blackWhiteType?: string;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      gmtModifyTimestamp: 'GmtModifyTimestamp',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      value: 'Value',
      gmtModify: 'GmtModify',
      valueCompareType: 'ValueCompareType',
      gmtCreate: 'GmtCreate',
      blackWhiteType: 'BlackWhiteType',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtModifyTimestamp: 'number',
      gmtCreateTimestamp: 'number',
      value: 'string',
      gmtModify: 'string',
      valueCompareType: 'string',
      gmtCreate: 'string',
      blackWhiteType: 'string',
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindCustomizedFiltersResponseBodyCustomizedFilterList extends $tea.Model {
  items?: FindCustomizedFiltersResponseBodyCustomizedFilterListItems[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': FindCustomizedFiltersResponseBodyCustomizedFilterListItems },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistActionDetailsResponseBodyResults extends $tea.Model {
  type?: string;
  action?: string;
  data?: string;
  deviceId?: string;
  createdAt?: number;
  updatedAt?: number;
  timestamp?: string;
  ID?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      action: 'Action',
      data: 'Data',
      deviceId: 'DeviceId',
      createdAt: 'CreatedAt',
      updatedAt: 'UpdatedAt',
      timestamp: 'Timestamp',
      ID: 'ID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      action: 'string',
      data: 'string',
      deviceId: 'string',
      createdAt: 'number',
      updatedAt: 'number',
      timestamp: 'string',
      ID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMqttTopicSubscriptionResponseBodySubscription extends $tea.Model {
  topic?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      topic: 'Topic',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topic: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionDeviceGroupsResponseBodyDeviceGroupListItems extends $tea.Model {
  gmtModifyTimestamp?: number;
  gmtCreateTimestamp?: number;
  gmtModify?: string;
  description?: string;
  gmtCreate?: string;
  name?: string;
  id?: number;
  maxCount?: string;
  static names(): { [key: string]: string } {
    return {
      gmtModifyTimestamp: 'GmtModifyTimestamp',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      gmtModify: 'GmtModify',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      name: 'Name',
      id: 'Id',
      maxCount: 'MaxCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtModifyTimestamp: 'number',
      gmtCreateTimestamp: 'number',
      gmtModify: 'string',
      description: 'string',
      gmtCreate: 'string',
      name: 'string',
      id: 'number',
      maxCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionDeviceGroupsResponseBodyDeviceGroupList extends $tea.Model {
  items?: FindVersionDeviceGroupsResponseBodyDeviceGroupListItems[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': FindVersionDeviceGroupsResponseBodyDeviceGroupListItems },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectLogsResponseBodyLogsPagination extends $tea.Model {
  pageIndex?: number;
  totalPageCount?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      totalPageCount: 'TotalPageCount',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      totalPageCount: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectLogsResponseBodyLogsList extends $tea.Model {
  sid?: string;
  status?: string;
  time?: number;
  deviceId?: string;
  systemVersion?: string;
  ip?: string;
  netWorking?: string;
  terminal?: string;
  static names(): { [key: string]: string } {
    return {
      sid: 'Sid',
      status: 'Status',
      time: 'Time',
      deviceId: 'DeviceId',
      systemVersion: 'SystemVersion',
      ip: 'Ip',
      netWorking: 'NetWorking',
      terminal: 'Terminal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sid: 'string',
      status: 'string',
      time: 'number',
      deviceId: 'string',
      systemVersion: 'string',
      ip: 'string',
      netWorking: 'string',
      terminal: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectLogsResponseBodyLogs extends $tea.Model {
  pagination?: ListConnectLogsResponseBodyLogsPagination;
  list?: ListConnectLogsResponseBodyLogsList[];
  static names(): { [key: string]: string } {
    return {
      pagination: 'Pagination',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagination: ListConnectLogsResponseBodyLogsPagination,
      list: { 'type': 'array', 'itemType': ListConnectLogsResponseBodyLogsList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientPluginsResponseBodyClientPlugins extends $tea.Model {
  pkgName?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      pkgName: 'PkgName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pkgName: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionBlackDevicesResponseBodyDeviceListItems extends $tea.Model {
  gmtCreateTimestamp?: number;
  originalId?: string;
  deviceId?: string;
  idType?: string;
  gmtCreate?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      originalId: 'OriginalId',
      deviceId: 'DeviceId',
      idType: 'IdType',
      gmtCreate: 'GmtCreate',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTimestamp: 'number',
      originalId: 'string',
      deviceId: 'string',
      idType: 'string',
      gmtCreate: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionBlackDevicesResponseBodyDeviceList extends $tea.Model {
  items?: FindVersionBlackDevicesResponseBodyDeviceListItems[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': FindVersionBlackDevicesResponseBodyDeviceListItems },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionFilesResponseBodyFileListPagination extends $tea.Model {
  pageIndex?: number;
  totalPageCount?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      totalPageCount: 'TotalPageCount',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      totalPageCount: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionFilesResponseBodyFileListFiles extends $tea.Model {
  status?: number;
  productionDeployTime?: number;
  productionDeployStatus?: number;
  description?: string;
  sandboxDeployTime?: number;
  gmtCreate?: number;
  sandboxDeployStatus?: number;
  gmtModified?: number;
  name?: string;
  contentId?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      productionDeployTime: 'ProductionDeployTime',
      productionDeployStatus: 'ProductionDeployStatus',
      description: 'Description',
      sandboxDeployTime: 'SandboxDeployTime',
      gmtCreate: 'GmtCreate',
      sandboxDeployStatus: 'SandboxDeployStatus',
      gmtModified: 'GmtModified',
      name: 'Name',
      contentId: 'ContentId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      productionDeployTime: 'number',
      productionDeployStatus: 'number',
      description: 'string',
      sandboxDeployTime: 'number',
      gmtCreate: 'number',
      sandboxDeployStatus: 'number',
      gmtModified: 'number',
      name: 'string',
      contentId: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionFilesResponseBodyFileList extends $tea.Model {
  pagination?: ListFunctionFilesResponseBodyFileListPagination;
  files?: ListFunctionFilesResponseBodyFileListFiles[];
  static names(): { [key: string]: string } {
    return {
      pagination: 'Pagination',
      files: 'Files',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagination: ListFunctionFilesResponseBodyFileListPagination,
      files: { 'type': 'array', 'itemType': ListFunctionFilesResponseBodyFileListFiles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeDevicesResponseBodyEdgeDevicesPagination extends $tea.Model {
  totalCount?: number;
  totalPageCount?: number;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      totalPageCount: 'TotalPageCount',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      totalPageCount: 'number',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeDevicesResponseBodyEdgeDevicesList extends $tea.Model {
  edgeDeviceId?: string;
  edgeDeviceType?: number;
  edgeDeviceName?: string;
  onlineStatus?: number;
  activateTime?: number;
  lastOnlineTime?: number;
  static names(): { [key: string]: string } {
    return {
      edgeDeviceId: 'EdgeDeviceId',
      edgeDeviceType: 'EdgeDeviceType',
      edgeDeviceName: 'EdgeDeviceName',
      onlineStatus: 'OnlineStatus',
      activateTime: 'ActivateTime',
      lastOnlineTime: 'LastOnlineTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edgeDeviceId: 'string',
      edgeDeviceType: 'number',
      edgeDeviceName: 'string',
      onlineStatus: 'number',
      activateTime: 'number',
      lastOnlineTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeDevicesResponseBodyEdgeDevices extends $tea.Model {
  pagination?: ListEdgeDevicesResponseBodyEdgeDevicesPagination;
  list?: ListEdgeDevicesResponseBodyEdgeDevicesList[];
  static names(): { [key: string]: string } {
    return {
      pagination: 'Pagination',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagination: ListEdgeDevicesResponseBodyEdgeDevicesPagination,
      list: { 'type': 'array', 'itemType': ListEdgeDevicesResponseBodyEdgeDevicesList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShadowSchemaDeviceModelsResponseBodyModelList extends $tea.Model {
  deviceModelId?: number;
  hardwareType?: string;
  deviceType?: string;
  canCreateDeviceId?: number;
  projectId?: string;
  osPlatform?: string;
  deviceModel?: string;
  securityChip?: number;
  description?: string;
  initUsageTypeDesc?: string;
  initUsageType?: number;
  deviceBrand?: string;
  static names(): { [key: string]: string } {
    return {
      deviceModelId: 'DeviceModelId',
      hardwareType: 'HardwareType',
      deviceType: 'DeviceType',
      canCreateDeviceId: 'CanCreateDeviceId',
      projectId: 'ProjectId',
      osPlatform: 'OsPlatform',
      deviceModel: 'DeviceModel',
      securityChip: 'SecurityChip',
      description: 'Description',
      initUsageTypeDesc: 'InitUsageTypeDesc',
      initUsageType: 'InitUsageType',
      deviceBrand: 'DeviceBrand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceModelId: 'number',
      hardwareType: 'string',
      deviceType: 'string',
      canCreateDeviceId: 'number',
      projectId: 'string',
      osPlatform: 'string',
      deviceModel: 'string',
      securityChip: 'number',
      description: 'string',
      initUsageTypeDesc: 'string',
      initUsageType: 'number',
      deviceBrand: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOssUploadMetaResponseBodyOssUploadMeta extends $tea.Model {
  securityToken?: string;
  objectKey?: string;
  accessKeySecret?: string;
  accessKeyId?: string;
  bucket?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      objectKey: 'ObjectKey',
      accessKeySecret: 'AccessKeySecret',
      accessKeyId: 'AccessKeyId',
      bucket: 'Bucket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      objectKey: 'string',
      accessKeySecret: 'string',
      accessKeyId: 'string',
      bucket: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomizedFilterResponseBodyCustomizedFilter extends $tea.Model {
  gmtCreateTimestamp?: number;
  gmtModify?: string;
  valueCompareType?: string;
  versionId?: number;
  gmtModifyTimestamp?: number;
  value?: string;
  valueType?: string;
  gmtCreate?: string;
  blackWhiteType?: string;
  name?: string;
  versionType?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      gmtModify: 'GmtModify',
      valueCompareType: 'ValueCompareType',
      versionId: 'VersionId',
      gmtModifyTimestamp: 'GmtModifyTimestamp',
      value: 'Value',
      valueType: 'ValueType',
      gmtCreate: 'GmtCreate',
      blackWhiteType: 'BlackWhiteType',
      name: 'Name',
      versionType: 'VersionType',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTimestamp: 'number',
      gmtModify: 'string',
      valueCompareType: 'string',
      versionId: 'number',
      gmtModifyTimestamp: 'number',
      value: 'string',
      valueType: 'string',
      gmtCreate: 'string',
      blackWhiteType: 'string',
      name: 'string',
      versionType: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountActivatedOrNewRegistrationDeviceResponseBodyStatisticsSeries extends $tea.Model {
  data?: string[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountActivatedOrNewRegistrationDeviceResponseBodyStatistics extends $tea.Model {
  categories?: string[];
  series?: CountActivatedOrNewRegistrationDeviceResponseBodyStatisticsSeries[];
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      series: 'Series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      series: { 'type': 'array', 'itemType': CountActivatedOrNewRegistrationDeviceResponseBodyStatisticsSeries },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponseBodyDevices extends $tea.Model {
  serialNumber?: string;
  status?: string;
  deviceModelId?: number;
  macAddress?: string;
  deviceId?: string;
  deviceType?: string;
  projectId?: string;
  deviceModel?: string;
  usageType?: number;
  vin?: string;
  usageTypeDesc?: string;
  uuid?: string;
  hardwareId?: string;
  region?: string;
  softwareId?: string;
  name?: string;
  deviceBrand?: string;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
      status: 'Status',
      deviceModelId: 'DeviceModelId',
      macAddress: 'MacAddress',
      deviceId: 'DeviceId',
      deviceType: 'DeviceType',
      projectId: 'ProjectId',
      deviceModel: 'DeviceModel',
      usageType: 'UsageType',
      vin: 'Vin',
      usageTypeDesc: 'UsageTypeDesc',
      uuid: 'Uuid',
      hardwareId: 'HardwareId',
      region: 'Region',
      softwareId: 'SoftwareId',
      name: 'Name',
      deviceBrand: 'DeviceBrand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
      status: 'string',
      deviceModelId: 'number',
      macAddress: 'string',
      deviceId: 'string',
      deviceType: 'string',
      projectId: 'string',
      deviceModel: 'string',
      usageType: 'number',
      vin: 'string',
      usageTypeDesc: 'string',
      uuid: 'string',
      hardwareId: 'string',
      region: 'string',
      softwareId: 'string',
      name: 'string',
      deviceBrand: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionTestsResponseBodyVersionTestListItems extends $tea.Model {
  gmtCreateTimestamp?: number;
  gmtModify?: string;
  versionId?: string;
  gmtModifyTimestamp?: number;
  failedCount?: string;
  deviceGroupId?: string;
  skippedCount?: string;
  description?: string;
  succeededCount?: string;
  deviceGroupName?: string;
  gmtCreate?: string;
  name?: string;
  id?: number;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      gmtModify: 'GmtModify',
      versionId: 'VersionId',
      gmtModifyTimestamp: 'GmtModifyTimestamp',
      failedCount: 'FailedCount',
      deviceGroupId: 'DeviceGroupId',
      skippedCount: 'SkippedCount',
      description: 'Description',
      succeededCount: 'SucceededCount',
      deviceGroupName: 'DeviceGroupName',
      gmtCreate: 'GmtCreate',
      name: 'Name',
      id: 'Id',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTimestamp: 'number',
      gmtModify: 'string',
      versionId: 'string',
      gmtModifyTimestamp: 'number',
      failedCount: 'string',
      deviceGroupId: 'string',
      skippedCount: 'string',
      description: 'string',
      succeededCount: 'string',
      deviceGroupName: 'string',
      gmtCreate: 'string',
      name: 'string',
      id: 'number',
      versionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionTestsResponseBodyVersionTestList extends $tea.Model {
  items?: FindVersionTestsResponseBodyVersionTestListItems[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': FindVersionTestsResponseBodyVersionTestListItems },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistHistoryDetailsResponseBodyActions extends $tea.Model {
  action?: string;
  createdAt?: number;
  timestamp?: string;
  updatedAt?: number;
  assistId?: string;
  ID?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      createdAt: 'CreatedAt',
      timestamp: 'Timestamp',
      updatedAt: 'UpdatedAt',
      assistId: 'AssistId',
      ID: 'ID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      createdAt: 'number',
      timestamp: 'string',
      updatedAt: 'number',
      assistId: 'string',
      ID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppVersionResponseBodyAppVersionAdapters extends $tea.Model {
  deviceModelId?: string;
  maxOsVersion?: string;
  minOsVersion?: string;
  versionId?: number;
  id?: number;
  deviceModelName?: string;
  static names(): { [key: string]: string } {
    return {
      deviceModelId: 'DeviceModelId',
      maxOsVersion: 'MaxOsVersion',
      minOsVersion: 'MinOsVersion',
      versionId: 'VersionId',
      id: 'Id',
      deviceModelName: 'DeviceModelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceModelId: 'string',
      maxOsVersion: 'string',
      minOsVersion: 'string',
      versionId: 'number',
      id: 'number',
      deviceModelName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppVersionResponseBodyAppVersion extends $tea.Model {
  status?: string;
  isAllowNewInstall?: string;
  releaseNote?: string;
  packageName?: string;
  remark?: string;
  statusName?: string;
  apkMd5?: string;
  restartAppParam?: string;
  whiteVersionList?: string;
  appName?: string;
  appId?: string;
  restartAppType?: string;
  versionCode?: number;
  blackVersionList?: string;
  gmtModify?: string;
  downloadUrl?: string;
  adapters?: DescribeAppVersionResponseBodyAppVersionAdapters[];
  isSilentUpgrade?: string;
  installType?: string;
  isNeedRestart?: string;
  size?: string;
  restartType?: string;
  gmtCreate?: string;
  md5?: string;
  appVersion?: string;
  isForceUpgrade?: string;
  id?: number;
  originalUrl?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      isAllowNewInstall: 'IsAllowNewInstall',
      releaseNote: 'ReleaseNote',
      packageName: 'PackageName',
      remark: 'Remark',
      statusName: 'StatusName',
      apkMd5: 'ApkMd5',
      restartAppParam: 'RestartAppParam',
      whiteVersionList: 'WhiteVersionList',
      appName: 'AppName',
      appId: 'AppId',
      restartAppType: 'RestartAppType',
      versionCode: 'VersionCode',
      blackVersionList: 'BlackVersionList',
      gmtModify: 'GmtModify',
      downloadUrl: 'DownloadUrl',
      adapters: 'Adapters',
      isSilentUpgrade: 'IsSilentUpgrade',
      installType: 'InstallType',
      isNeedRestart: 'IsNeedRestart',
      size: 'Size',
      restartType: 'RestartType',
      gmtCreate: 'GmtCreate',
      md5: 'Md5',
      appVersion: 'AppVersion',
      isForceUpgrade: 'IsForceUpgrade',
      id: 'Id',
      originalUrl: 'OriginalUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      isAllowNewInstall: 'string',
      releaseNote: 'string',
      packageName: 'string',
      remark: 'string',
      statusName: 'string',
      apkMd5: 'string',
      restartAppParam: 'string',
      whiteVersionList: 'string',
      appName: 'string',
      appId: 'string',
      restartAppType: 'string',
      versionCode: 'number',
      blackVersionList: 'string',
      gmtModify: 'string',
      downloadUrl: 'string',
      adapters: { 'type': 'array', 'itemType': DescribeAppVersionResponseBodyAppVersionAdapters },
      isSilentUpgrade: 'string',
      installType: 'string',
      isNeedRestart: 'string',
      size: 'string',
      restartType: 'string',
      gmtCreate: 'string',
      md5: 'string',
      appVersion: 'string',
      isForceUpgrade: 'string',
      id: 'number',
      originalUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleResponseBodyVehiclesPagination extends $tea.Model {
  pageIndex?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleResponseBodyVehiclesList extends $tea.Model {
  connectionStatus?: string;
  createTime?: number;
  deviceId?: string;
  vin?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'ConnectionStatus',
      createTime: 'CreateTime',
      deviceId: 'DeviceId',
      vin: 'Vin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStatus: 'string',
      createTime: 'number',
      deviceId: 'string',
      vin: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleResponseBodyVehicles extends $tea.Model {
  pagination?: ListVehicleResponseBodyVehiclesPagination;
  list?: ListVehicleResponseBodyVehiclesList[];
  static names(): { [key: string]: string } {
    return {
      pagination: 'Pagination',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagination: ListVehicleResponseBodyVehiclesPagination,
      list: { 'type': 'array', 'itemType': ListVehicleResponseBodyVehiclesList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteCameraShootingCommandResponseBodyShootingRecord extends $tea.Model {
  id?: number;
  shootingType?: number;
  number?: number;
  time?: number;
  recordTime?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      shootingType: 'ShootingType',
      number: 'Number',
      time: 'Time',
      recordTime: 'RecordTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      shootingType: 'number',
      number: 'number',
      time: 'number',
      recordTime: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionFilesByProjectIdResponseBodyFiles extends $tea.Model {
  type?: number;
  status?: number;
  gmtCreate?: number;
  gmtModified?: number;
  name?: string;
  id?: number;
  contentId?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      name: 'Name',
      id: 'Id',
      contentId: 'ContentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      status: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      name: 'string',
      id: 'number',
      contentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionWhiteDevicesResponseBodyDeviceListItems extends $tea.Model {
  gmtCreateTimestamp?: number;
  originalId?: string;
  deviceId?: string;
  idType?: string;
  gmtCreate?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      originalId: 'OriginalId',
      deviceId: 'DeviceId',
      idType: 'IdType',
      gmtCreate: 'GmtCreate',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTimestamp: 'number',
      originalId: 'string',
      deviceId: 'string',
      idType: 'string',
      gmtCreate: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionWhiteDevicesResponseBodyDeviceList extends $tea.Model {
  items?: FindVersionWhiteDevicesResponseBodyDeviceListItems[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': FindVersionWhiteDevicesResponseBodyDeviceListItems },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVersionDeviceGroupResponseBodyDeviceGroup extends $tea.Model {
  gmtModify?: string;
  description?: string;
  gmtCreate?: string;
  name?: string;
  id?: number;
  maxCount?: string;
  static names(): { [key: string]: string } {
    return {
      gmtModify: 'GmtModify',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      name: 'Name',
      id: 'Id',
      maxCount: 'MaxCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtModify: 'string',
      description: 'string',
      gmtCreate: 'string',
      name: 'string',
      id: 'number',
      maxCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemaSubscribesResponseBodyPageListPagination extends $tea.Model {
  pageIndex?: number;
  totalPageCount?: number;
  pageSize?: number;
  totalCount?: number;
  simpleSign?: boolean;
  hasNextPage?: boolean;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      totalPageCount: 'TotalPageCount',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      simpleSign: 'SimpleSign',
      hasNextPage: 'HasNextPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      totalPageCount: 'number',
      pageSize: 'number',
      totalCount: 'number',
      simpleSign: 'boolean',
      hasNextPage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemaSubscribesResponseBodyPageListList extends $tea.Model {
  deviceModelId?: number;
  version?: string;
  projectId?: string;
  gmtCreate?: number;
  namespace?: string;
  validitySchema?: string;
  deviceModel?: string;
  gmtModified?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      deviceModelId: 'DeviceModelId',
      version: 'Version',
      projectId: 'ProjectId',
      gmtCreate: 'GmtCreate',
      namespace: 'Namespace',
      validitySchema: 'ValiditySchema',
      deviceModel: 'DeviceModel',
      gmtModified: 'GmtModified',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceModelId: 'number',
      version: 'string',
      projectId: 'string',
      gmtCreate: 'number',
      namespace: 'string',
      validitySchema: 'string',
      deviceModel: 'string',
      gmtModified: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchemaSubscribesResponseBodyPageList extends $tea.Model {
  pagination?: ListSchemaSubscribesResponseBodyPageListPagination;
  list?: ListSchemaSubscribesResponseBodyPageListList[];
  static names(): { [key: string]: string } {
    return {
      pagination: 'Pagination',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagination: ListSchemaSubscribesResponseBodyPageListPagination,
      list: { 'type': 'array', 'itemType': ListSchemaSubscribesResponseBodyPageListList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOssPostPolicyResponseBodyOssPostPolicy extends $tea.Model {
  signature?: string;
  host?: string;
  policy?: string;
  expire?: string;
  accessId?: string;
  static names(): { [key: string]: string } {
    return {
      signature: 'Signature',
      host: 'Host',
      policy: 'Policy',
      expire: 'Expire',
      accessId: 'AccessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signature: 'string',
      host: 'string',
      policy: 'string',
      expire: 'string',
      accessId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionGroupDevicesResponseBodyGroupDeviceListItems extends $tea.Model {
  gmtCreateTimestamp?: number;
  originalId?: string;
  deviceId?: string;
  idType?: string;
  gmtCreate?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      originalId: 'OriginalId',
      deviceId: 'DeviceId',
      idType: 'IdType',
      gmtCreate: 'GmtCreate',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTimestamp: 'number',
      originalId: 'string',
      deviceId: 'string',
      idType: 'string',
      gmtCreate: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionGroupDevicesResponseBodyGroupDeviceList extends $tea.Model {
  items?: FindVersionGroupDevicesResponseBodyGroupDeviceListItems[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': FindVersionGroupDevicesResponseBodyGroupDeviceListItems },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpstreamAppServersResponseBodyAppServersPagination extends $tea.Model {
  pageIndex?: number;
  totalPageCount?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      totalPageCount: 'TotalPageCount',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      totalPageCount: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpstreamAppServersResponseBodyAppServersList extends $tea.Model {
  projectId?: string;
  gmtCreate?: number;
  tags?: string;
  queueNameList?: string;
  PAppKey?: string;
  gmtModified?: number;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      gmtCreate: 'GmtCreate',
      tags: 'Tags',
      queueNameList: 'QueueNameList',
      PAppKey: 'PAppKey',
      gmtModified: 'GmtModified',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      gmtCreate: 'number',
      tags: 'string',
      queueNameList: 'string',
      PAppKey: 'string',
      gmtModified: 'number',
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpstreamAppServersResponseBodyAppServers extends $tea.Model {
  pagination?: ListUpstreamAppServersResponseBodyAppServersPagination;
  list?: ListUpstreamAppServersResponseBodyAppServersList[];
  static names(): { [key: string]: string } {
    return {
      pagination: 'Pagination',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagination: ListUpstreamAppServersResponseBodyAppServersPagination,
      list: { 'type': 'array', 'itemType': ListUpstreamAppServersResponseBodyAppServersList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindAppVersionsResponseBodyAppVersionListItems extends $tea.Model {
  status?: string;
  gmtCreateTimestamp?: number;
  gmtModify?: string;
  isAllowNewInstall?: string;
  statusName?: string;
  restartAppParam?: string;
  isSilentUpgrade?: string;
  appPackageName?: string;
  gmtModifyTimestamp?: number;
  appName?: string;
  installType?: string;
  isNeedRestart?: string;
  restartAppType?: string;
  appId?: string;
  restartType?: string;
  gmtCreate?: string;
  appVersion?: string;
  versionCode?: string;
  isForceUpgrade?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      gmtModify: 'GmtModify',
      isAllowNewInstall: 'IsAllowNewInstall',
      statusName: 'StatusName',
      restartAppParam: 'RestartAppParam',
      isSilentUpgrade: 'IsSilentUpgrade',
      appPackageName: 'AppPackageName',
      gmtModifyTimestamp: 'GmtModifyTimestamp',
      appName: 'AppName',
      installType: 'InstallType',
      isNeedRestart: 'IsNeedRestart',
      restartAppType: 'RestartAppType',
      appId: 'AppId',
      restartType: 'RestartType',
      gmtCreate: 'GmtCreate',
      appVersion: 'AppVersion',
      versionCode: 'VersionCode',
      isForceUpgrade: 'IsForceUpgrade',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      gmtCreateTimestamp: 'number',
      gmtModify: 'string',
      isAllowNewInstall: 'string',
      statusName: 'string',
      restartAppParam: 'string',
      isSilentUpgrade: 'string',
      appPackageName: 'string',
      gmtModifyTimestamp: 'number',
      appName: 'string',
      installType: 'string',
      isNeedRestart: 'string',
      restartAppType: 'string',
      appId: 'string',
      restartType: 'string',
      gmtCreate: 'string',
      appVersion: 'string',
      versionCode: 'string',
      isForceUpgrade: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindAppVersionsResponseBodyAppVersionList extends $tea.Model {
  items?: FindAppVersionsResponseBodyAppVersionListItems[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': FindAppVersionsResponseBodyAppVersionListItems },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttRootTopicsResponseBodyRootTopicsPagination extends $tea.Model {
  pageIndex?: number;
  totalPageCount?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      totalPageCount: 'TotalPageCount',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      totalPageCount: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttRootTopicsResponseBodyRootTopicsList extends $tea.Model {
  type?: string;
  appKey?: string;
  queueName?: string;
  createTime?: number;
  rootTopic?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      appKey: 'AppKey',
      queueName: 'QueueName',
      createTime: 'CreateTime',
      rootTopic: 'RootTopic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      appKey: 'string',
      queueName: 'string',
      createTime: 'number',
      rootTopic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttRootTopicsResponseBodyRootTopics extends $tea.Model {
  pagination?: ListMqttRootTopicsResponseBodyRootTopicsPagination;
  list?: ListMqttRootTopicsResponseBodyRootTopicsList[];
  static names(): { [key: string]: string } {
    return {
      pagination: 'Pagination',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagination: ListMqttRootTopicsResponseBodyRootTopicsPagination,
      list: { 'type': 'array', 'itemType': ListMqttRootTopicsResponseBodyRootTopicsList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssistDevicesResponseBodyDevices extends $tea.Model {
  serialNumber?: string;
  hardwareId?: string;
  deviceName?: string;
  accessTime?: number;
  deviceId?: string;
  UUID?: string;
  VIN?: string;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
      hardwareId: 'HardwareId',
      deviceName: 'DeviceName',
      accessTime: 'AccessTime',
      deviceId: 'DeviceId',
      UUID: 'UUID',
      VIN: 'VIN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
      hardwareId: 'string',
      deviceName: 'string',
      accessTime: 'number',
      deviceId: 'string',
      UUID: 'string',
      VIN: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenAccountsResponseBodyOpenAccounts extends $tea.Model {
  status?: number;
  type?: number;
  displayName?: string;
  createAccessKey?: string;
  openId?: string;
  mobile?: string;
  region?: string;
  identityId?: string;
  loginId?: string;
  idp?: string;
  aliyunId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      displayName: 'DisplayName',
      createAccessKey: 'CreateAccessKey',
      openId: 'OpenId',
      mobile: 'Mobile',
      region: 'Region',
      identityId: 'IdentityId',
      loginId: 'LoginId',
      idp: 'Idp',
      aliyunId: 'AliyunId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      type: 'number',
      displayName: 'string',
      createAccessKey: 'string',
      openId: 'string',
      mobile: 'string',
      region: 'string',
      identityId: 'string',
      loginId: 'string',
      idp: 'string',
      aliyunId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommercialVehicleDevicesResponseBodyVehicleDevicesPagination extends $tea.Model {
  totalCount?: number;
  totalPageCount?: number;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      totalPageCount: 'TotalPageCount',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      totalPageCount: 'number',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommercialVehicleDevicesResponseBodyVehicleDevicesList extends $tea.Model {
  createTime?: number;
  modifiedTime?: number;
  hardwareId?: string;
  clientId?: number;
  deviceModel?: string;
  onlineStatus?: number;
  plateNumber?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      hardwareId: 'HardwareId',
      clientId: 'ClientId',
      deviceModel: 'DeviceModel',
      onlineStatus: 'OnlineStatus',
      plateNumber: 'PlateNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      modifiedTime: 'number',
      hardwareId: 'string',
      clientId: 'number',
      deviceModel: 'string',
      onlineStatus: 'number',
      plateNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommercialVehicleDevicesResponseBodyVehicleDevices extends $tea.Model {
  pagination?: ListCommercialVehicleDevicesResponseBodyVehicleDevicesPagination;
  list?: ListCommercialVehicleDevicesResponseBodyVehicleDevicesList[];
  static names(): { [key: string]: string } {
    return {
      pagination: 'Pagination',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagination: ListCommercialVehicleDevicesResponseBodyVehicleDevicesPagination,
      list: { 'type': 'array', 'itemType': ListCommercialVehicleDevicesResponseBodyVehicleDevicesList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageReceiversResponseBodyMessageReceiversPagination extends $tea.Model {
  pageIndex?: number;
  totalPageCount?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      totalPageCount: 'TotalPageCount',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      totalPageCount: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageReceiversResponseBodyMessageReceiversList extends $tea.Model {
  type?: string;
  value?: string;
  mid?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
      mid: 'Mid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
      mid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageReceiversResponseBodyMessageReceivers extends $tea.Model {
  pagination?: ListMessageReceiversResponseBodyMessageReceiversPagination;
  list?: ListMessageReceiversResponseBodyMessageReceiversList[];
  static names(): { [key: string]: string } {
    return {
      pagination: 'Pagination',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagination: ListMessageReceiversResponseBodyMessageReceiversPagination,
      list: { 'type': 'array', 'itemType': ListMessageReceiversResponseBodyMessageReceiversList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesResponseBodyNamespaces extends $tea.Model {
  authType?: number;
  description?: string;
  userId?: string;
  projectId?: string;
  gmtCreate?: number;
  namespace?: string;
  gmtModified?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      description: 'Description',
      userId: 'UserId',
      projectId: 'ProjectId',
      gmtCreate: 'GmtCreate',
      namespace: 'Namespace',
      gmtModified: 'GmtModified',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'number',
      description: 'string',
      userId: 'string',
      projectId: 'string',
      gmtCreate: 'number',
      namespace: 'string',
      gmtModified: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupportFeaturesResponseBodySupportFeatures extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientPluginVersionsResponseBodyClientPluginVersions extends $tea.Model {
  version?: string;
  downloadUrl?: string;
  size?: number;
  pkgName?: string;
  versionCode?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      downloadUrl: 'DownloadUrl',
      size: 'Size',
      pkgName: 'PkgName',
      versionCode: 'VersionCode',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      downloadUrl: 'string',
      size: 'number',
      pkgName: 'string',
      versionCode: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionMessageSendRecordsResponseBodyMessageSendRecordListItems extends $tea.Model {
  gmtCreateTimestamp?: number;
  messageType?: string;
  failedCount?: string;
  skippedCount?: string;
  result?: string;
  succeededCount?: string;
  gmtCreate?: string;
  versionId?: string;
  resultDesc?: string;
  targetId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      messageType: 'MessageType',
      failedCount: 'FailedCount',
      skippedCount: 'SkippedCount',
      result: 'Result',
      succeededCount: 'SucceededCount',
      gmtCreate: 'GmtCreate',
      versionId: 'VersionId',
      resultDesc: 'ResultDesc',
      targetId: 'TargetId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTimestamp: 'number',
      messageType: 'string',
      failedCount: 'string',
      skippedCount: 'string',
      result: 'string',
      succeededCount: 'string',
      gmtCreate: 'string',
      versionId: 'string',
      resultDesc: 'string',
      targetId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindVersionMessageSendRecordsResponseBodyMessageSendRecordList extends $tea.Model {
  items?: FindVersionMessageSendRecordsResponseBodyMessageSendRecordListItems[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': FindVersionMessageSendRecordsResponseBodyMessageSendRecordListItems },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateSysAppDownloadInfoResponseBodySysAppDownloadInfo extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceInfoResponseBodyDeviceInfo extends $tea.Model {
  serialNumber?: string;
  status?: string;
  deviceModelId?: number;
  macAddress?: string;
  deviceId?: string;
  deviceType?: string;
  projectId?: string;
  deviceModel?: string;
  usageType?: number;
  vin?: string;
  usageTypeDesc?: string;
  uuid?: string;
  hardwareId?: string;
  region?: string;
  softwareId?: string;
  name?: string;
  deviceBrand?: string;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
      status: 'Status',
      deviceModelId: 'DeviceModelId',
      macAddress: 'MacAddress',
      deviceId: 'DeviceId',
      deviceType: 'DeviceType',
      projectId: 'ProjectId',
      deviceModel: 'DeviceModel',
      usageType: 'UsageType',
      vin: 'Vin',
      usageTypeDesc: 'UsageTypeDesc',
      uuid: 'Uuid',
      hardwareId: 'HardwareId',
      region: 'Region',
      softwareId: 'SoftwareId',
      name: 'Name',
      deviceBrand: 'DeviceBrand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
      status: 'string',
      deviceModelId: 'number',
      macAddress: 'string',
      deviceId: 'string',
      deviceType: 'string',
      projectId: 'string',
      deviceModel: 'string',
      usageType: 'number',
      vin: 'string',
      usageTypeDesc: 'string',
      uuid: 'string',
      hardwareId: 'string',
      region: 'string',
      softwareId: 'string',
      name: 'string',
      deviceBrand: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceShadowResponseBodyDeviceShadow extends $tea.Model {
  deviceShadow?: string;
  deviceInfo?: string;
  static names(): { [key: string]: string } {
    return {
      deviceShadow: 'DeviceShadow',
      deviceInfo: 'DeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceShadow: 'string',
      deviceInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTriggersResponseBodyTriggerListPagination extends $tea.Model {
  pageIndex?: number;
  totalPageCount?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      totalPageCount: 'TotalPageCount',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      totalPageCount: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTriggersResponseBodyTriggerListTriggersFunctions extends $tea.Model {
  gmtCreate?: number;
  fileName?: string;
  name?: string;
  gmtModified?: number;
  id?: number;
  fileId?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      fileName: 'FileName',
      name: 'Name',
      gmtModified: 'GmtModified',
      id: 'Id',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      fileName: 'string',
      name: 'string',
      gmtModified: 'number',
      id: 'number',
      fileId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTriggersResponseBodyTriggerListTriggers extends $tea.Model {
  status?: number;
  type?: number;
  production?: number;
  functions?: ListTriggersResponseBodyTriggerListTriggersFunctions[];
  sandbox?: number;
  namespace?: string;
  gmtModified?: number;
  source?: string;
  chainedFunctionIds?: string;
  gmtCreate?: number;
  invocationMode?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      production: 'Production',
      functions: 'Functions',
      sandbox: 'Sandbox',
      namespace: 'Namespace',
      gmtModified: 'GmtModified',
      source: 'Source',
      chainedFunctionIds: 'ChainedFunctionIds',
      gmtCreate: 'GmtCreate',
      invocationMode: 'InvocationMode',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      type: 'number',
      production: 'number',
      functions: { 'type': 'array', 'itemType': ListTriggersResponseBodyTriggerListTriggersFunctions },
      sandbox: 'number',
      namespace: 'string',
      gmtModified: 'number',
      source: 'string',
      chainedFunctionIds: 'string',
      gmtCreate: 'number',
      invocationMode: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTriggersResponseBodyTriggerList extends $tea.Model {
  pagination?: ListTriggersResponseBodyTriggerListPagination;
  triggers?: ListTriggersResponseBodyTriggerListTriggers[];
  static names(): { [key: string]: string } {
    return {
      pagination: 'Pagination',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagination: ListTriggersResponseBodyTriggerListPagination,
      triggers: { 'type': 'array', 'itemType': ListTriggersResponseBodyTriggerListTriggers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceModelResponseBodyDeviceModel extends $tea.Model {
  deviceModelId?: number;
  hardwareType?: string;
  deviceName?: string;
  deviceType?: string;
  canCreateDeviceId?: number;
  projectId?: string;
  osPlatform?: string;
  deviceModel?: string;
  securityChip?: string;
  deviceLogoUrl?: string;
  description?: string;
  objectKey?: string;
  initUsageTypeDesc?: string;
  initUsageType?: number;
  deviceBrand?: string;
  static names(): { [key: string]: string } {
    return {
      deviceModelId: 'DeviceModelId',
      hardwareType: 'HardwareType',
      deviceName: 'DeviceName',
      deviceType: 'DeviceType',
      canCreateDeviceId: 'CanCreateDeviceId',
      projectId: 'ProjectId',
      osPlatform: 'OsPlatform',
      deviceModel: 'DeviceModel',
      securityChip: 'SecurityChip',
      deviceLogoUrl: 'DeviceLogoUrl',
      description: 'Description',
      objectKey: 'ObjectKey',
      initUsageTypeDesc: 'InitUsageTypeDesc',
      initUsageType: 'InitUsageType',
      deviceBrand: 'DeviceBrand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceModelId: 'number',
      hardwareType: 'string',
      deviceName: 'string',
      deviceType: 'string',
      canCreateDeviceId: 'number',
      projectId: 'string',
      osPlatform: 'string',
      deviceModel: 'string',
      securityChip: 'string',
      deviceLogoUrl: 'string',
      description: 'string',
      objectKey: 'string',
      initUsageTypeDesc: 'string',
      initUsageType: 'number',
      deviceBrand: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceTypesResponseBodyDeviceTypes extends $tea.Model {
  deviceType?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      deviceType: 'DeviceType',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceType: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateSdkDownloadInfoResponseBodySdkDownloadInfo extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteVehicleControlResponseBodyExecutionInfo extends $tea.Model {
  executionId?: string;
  static names(): { [key: string]: string } {
    return {
      executionId: 'ExecutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiGatewayAppSecurityResponseBodyApiGatewayAppSecurity extends $tea.Model {
  gatewayAppKey?: string;
  gatewayAppSecret?: string;
  gatewayAppId?: string;
  gmtCreate?: number;
  gmtModified?: number;
  static names(): { [key: string]: string } {
    return {
      gatewayAppKey: 'GatewayAppKey',
      gatewayAppSecret: 'GatewayAppSecret',
      gatewayAppId: 'GatewayAppId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayAppKey: 'string',
      gatewayAppSecret: 'string',
      gatewayAppId: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceOnlineInfoResponseBodyDevices extends $tea.Model {
  loginTime?: number;
  deviceId?: string;
  online?: number;
  projectId?: string;
  iasId?: string;
  systemVersion?: string;
  terminal?: string;
  clientVersion?: string;
  static names(): { [key: string]: string } {
    return {
      loginTime: 'LoginTime',
      deviceId: 'DeviceId',
      online: 'Online',
      projectId: 'ProjectId',
      iasId: 'IasId',
      systemVersion: 'SystemVersion',
      terminal: 'Terminal',
      clientVersion: 'ClientVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginTime: 'number',
      deviceId: 'string',
      online: 'number',
      projectId: 'string',
      iasId: 'string',
      systemVersion: 'string',
      terminal: 'string',
      clientVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyProjects extends $tea.Model {
  status?: number;
  description?: string;
  userId?: string;
  projectId?: string;
  gmtCreate?: number;
  gmtModified?: number;
  name?: string;
  id?: number;
  creator?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      description: 'Description',
      userId: 'UserId',
      projectId: 'ProjectId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      name: 'Name',
      id: 'Id',
      creator: 'Creator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      description: 'string',
      userId: 'string',
      projectId: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      name: 'string',
      id: 'number',
      creator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateFunctionFileUploadMetaResponseBodyUploadMetaPostObjectPolicy extends $tea.Model {
  signature?: string;
  host?: string;
  policy?: string;
  expire?: string;
  accessId?: string;
  static names(): { [key: string]: string } {
    return {
      signature: 'Signature',
      host: 'Host',
      policy: 'Policy',
      expire: 'Expire',
      accessId: 'AccessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signature: 'string',
      host: 'string',
      policy: 'string',
      expire: 'string',
      accessId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateFunctionFileUploadMetaResponseBodyUploadMeta extends $tea.Model {
  postObjectPolicy?: GenerateFunctionFileUploadMetaResponseBodyUploadMetaPostObjectPolicy;
  securityToken?: string;
  objectKey?: string;
  static names(): { [key: string]: string } {
    return {
      postObjectPolicy: 'PostObjectPolicy',
      securityToken: 'SecurityToken',
      objectKey: 'ObjectKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postObjectPolicy: GenerateFunctionFileUploadMetaResponseBodyUploadMetaPostObjectPolicy,
      securityToken: 'string',
      objectKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyProject extends $tea.Model {
  status?: number;
  description?: string;
  userId?: string;
  projectId?: string;
  gmtCreate?: number;
  gmtModified?: number;
  name?: string;
  id?: number;
  creator?: string;
  vehicleCommunicationProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      description: 'Description',
      userId: 'UserId',
      projectId: 'ProjectId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      name: 'Name',
      id: 'Id',
      creator: 'Creator',
      vehicleCommunicationProtocol: 'VehicleCommunicationProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      description: 'string',
      userId: 'string',
      projectId: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      name: 'string',
      id: 'number',
      creator: 'string',
      vehicleCommunicationProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMqttMessageResponseBodyMessage extends $tea.Model {
  time?: number;
  appKey?: string;
  mid?: string;
  topic?: string;
  payload?: string;
  qoS?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      appKey: 'AppKey',
      mid: 'Mid',
      topic: 'Topic',
      payload: 'Payload',
      qoS: 'QoS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      appKey: 'string',
      mid: 'string',
      topic: 'string',
      payload: 'string',
      qoS: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCameraShootingRecordsResponseBodyShootingRecordsPagination extends $tea.Model {
  totalCount?: number;
  totalPageCount?: number;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      totalPageCount: 'TotalPageCount',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      totalPageCount: 'number',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCameraShootingRecordsResponseBodyShootingRecordsList extends $tea.Model {
  id?: number;
  shootingType?: number;
  number?: number;
  time?: number;
  recordTime?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      shootingType: 'ShootingType',
      number: 'Number',
      time: 'Time',
      recordTime: 'RecordTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      shootingType: 'number',
      number: 'number',
      time: 'number',
      recordTime: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCameraShootingRecordsResponseBodyShootingRecords extends $tea.Model {
  pagination?: ListCameraShootingRecordsResponseBodyShootingRecordsPagination;
  list?: ListCameraShootingRecordsResponseBodyShootingRecordsList[];
  static names(): { [key: string]: string } {
    return {
      pagination: 'Pagination',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagination: ListCameraShootingRecordsResponseBodyShootingRecordsPagination,
      list: { 'type': 'array', 'itemType': ListCameraShootingRecordsResponseBodyShootingRecordsList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOsVersionResponseBodyOsVersionRomList extends $tea.Model {
  gmtModify?: string;
  splitNum?: string;
  downloadUrl?: string;
  size?: string;
  gmtCreate?: string;
  versionId?: number;
  md5?: string;
  baseVersion?: string;
  id?: number;
  originalUrl?: string;
  static names(): { [key: string]: string } {
    return {
      gmtModify: 'GmtModify',
      splitNum: 'SplitNum',
      downloadUrl: 'DownloadUrl',
      size: 'Size',
      gmtCreate: 'GmtCreate',
      versionId: 'VersionId',
      md5: 'Md5',
      baseVersion: 'BaseVersion',
      id: 'Id',
      originalUrl: 'OriginalUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtModify: 'string',
      splitNum: 'string',
      downloadUrl: 'string',
      size: 'string',
      gmtCreate: 'string',
      versionId: 'number',
      md5: 'string',
      baseVersion: 'string',
      id: 'number',
      originalUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOsVersionResponseBodyOsVersionNightUpgradeOption extends $tea.Model {
  downloadType?: string;
  isAllowedCancel?: string;
  isShowTip?: string;
  static names(): { [key: string]: string } {
    return {
      downloadType: 'DownloadType',
      isAllowedCancel: 'IsAllowedCancel',
      isShowTip: 'IsShowTip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadType: 'string',
      isAllowedCancel: 'string',
      isShowTip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOsVersionResponseBodyOsVersion extends $tea.Model {
  status?: string;
  deviceModelId?: string;
  blackVersionList?: string;
  isMilestone?: string;
  gmtModify?: string;
  releaseNote?: string;
  remark?: string;
  systemVersion?: string;
  statusName?: string;
  deviceModelName?: string;
  whiteVersionList?: string;
  maxClientVersion?: string;
  romList?: DescribeOsVersionResponseBodyOsVersionRomList[];
  minClientVersion?: string;
  nightUpgradeOption?: DescribeOsVersionResponseBodyOsVersionNightUpgradeOption;
  gmtCreate?: string;
  isForceNightUpgrade?: string;
  mobileDownloadMaxSize?: string;
  enableMobileDownload?: string;
  isForceUpgrade?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      deviceModelId: 'DeviceModelId',
      blackVersionList: 'BlackVersionList',
      isMilestone: 'IsMilestone',
      gmtModify: 'GmtModify',
      releaseNote: 'ReleaseNote',
      remark: 'Remark',
      systemVersion: 'SystemVersion',
      statusName: 'StatusName',
      deviceModelName: 'DeviceModelName',
      whiteVersionList: 'WhiteVersionList',
      maxClientVersion: 'MaxClientVersion',
      romList: 'RomList',
      minClientVersion: 'MinClientVersion',
      nightUpgradeOption: 'NightUpgradeOption',
      gmtCreate: 'GmtCreate',
      isForceNightUpgrade: 'IsForceNightUpgrade',
      mobileDownloadMaxSize: 'MobileDownloadMaxSize',
      enableMobileDownload: 'EnableMobileDownload',
      isForceUpgrade: 'IsForceUpgrade',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      deviceModelId: 'string',
      blackVersionList: 'string',
      isMilestone: 'string',
      gmtModify: 'string',
      releaseNote: 'string',
      remark: 'string',
      systemVersion: 'string',
      statusName: 'string',
      deviceModelName: 'string',
      whiteVersionList: 'string',
      maxClientVersion: 'string',
      romList: { 'type': 'array', 'itemType': DescribeOsVersionResponseBodyOsVersionRomList },
      minClientVersion: 'string',
      nightUpgradeOption: DescribeOsVersionResponseBodyOsVersionNightUpgradeOption,
      gmtCreate: 'string',
      isForceNightUpgrade: 'string',
      mobileDownloadMaxSize: 'string',
      enableMobileDownload: 'string',
      isForceUpgrade: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRpcServicesResponseBodyRpcServicesPagination extends $tea.Model {
  pageIndex?: number;
  totalPageCount?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      totalPageCount: 'TotalPageCount',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      totalPageCount: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRpcServicesResponseBodyRpcServicesList extends $tea.Model {
  methodName?: string;
  type?: string;
  interfaceName?: string;
  params?: string;
  appKey?: string;
  groupName?: string;
  gmtCreate?: number;
  isDelete?: string;
  versionCode?: string;
  gmtModified?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      methodName: 'MethodName',
      type: 'Type',
      interfaceName: 'InterfaceName',
      params: 'Params',
      appKey: 'AppKey',
      groupName: 'GroupName',
      gmtCreate: 'GmtCreate',
      isDelete: 'IsDelete',
      versionCode: 'VersionCode',
      gmtModified: 'GmtModified',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      methodName: 'string',
      type: 'string',
      interfaceName: 'string',
      params: 'string',
      appKey: 'string',
      groupName: 'string',
      gmtCreate: 'number',
      isDelete: 'string',
      versionCode: 'string',
      gmtModified: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRpcServicesResponseBodyRpcServices extends $tea.Model {
  pagination?: ListRpcServicesResponseBodyRpcServicesPagination;
  list?: ListRpcServicesResponseBodyRpcServicesList[];
  static names(): { [key: string]: string } {
    return {
      pagination: 'Pagination',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagination: ListRpcServicesResponseBodyRpcServicesPagination,
      list: { 'type': 'array', 'itemType': ListRpcServicesResponseBodyRpcServicesList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindOsVersionsResponseBodyOsVersionListItems extends $tea.Model {
  status?: string;
  gmtCreateTimestamp?: number;
  deviceModelId?: string;
  gmtModify?: string;
  isMilestone?: string;
  remark?: string;
  systemVersion?: string;
  statusName?: string;
  isForceReboot?: string;
  deviceModelName?: string;
  isSilentUpgrade?: string;
  gmtModifyTimestamp?: number;
  isForceNightUpgrade?: string;
  gmtCreate?: string;
  isForceUpgrade?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      deviceModelId: 'DeviceModelId',
      gmtModify: 'GmtModify',
      isMilestone: 'IsMilestone',
      remark: 'Remark',
      systemVersion: 'SystemVersion',
      statusName: 'StatusName',
      isForceReboot: 'IsForceReboot',
      deviceModelName: 'DeviceModelName',
      isSilentUpgrade: 'IsSilentUpgrade',
      gmtModifyTimestamp: 'GmtModifyTimestamp',
      isForceNightUpgrade: 'IsForceNightUpgrade',
      gmtCreate: 'GmtCreate',
      isForceUpgrade: 'IsForceUpgrade',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      gmtCreateTimestamp: 'number',
      deviceModelId: 'string',
      gmtModify: 'string',
      isMilestone: 'string',
      remark: 'string',
      systemVersion: 'string',
      statusName: 'string',
      isForceReboot: 'string',
      deviceModelName: 'string',
      isSilentUpgrade: 'string',
      gmtModifyTimestamp: 'number',
      isForceNightUpgrade: 'string',
      gmtCreate: 'string',
      isForceUpgrade: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindOsVersionsResponseBodyOsVersionList extends $tea.Model {
  items?: FindOsVersionsResponseBodyOsVersionListItems[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': FindOsVersionsResponseBodyOsVersionListItems },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceBrandResponseBodyDeviceBrand extends $tea.Model {
  deviceBrandId?: number;
  description?: string;
  projectId?: string;
  manufacture?: string;
  deviceBrand?: string;
  static names(): { [key: string]: string } {
    return {
      deviceBrandId: 'DeviceBrandId',
      description: 'Description',
      projectId: 'ProjectId',
      manufacture: 'Manufacture',
      deviceBrand: 'DeviceBrand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceBrandId: 'number',
      description: 'string',
      projectId: 'string',
      manufacture: 'string',
      deviceBrand: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceValiditySchemaResponseBodyItemList extends $tea.Model {
  minimum?: number;
  type?: string;
  maximum?: number;
  itemType?: string;
  enumListStr?: string;
  exclusiveMinimum?: boolean;
  maxLength?: number;
  required?: string;
  description?: string;
  exclusiveMaximum?: boolean;
  path?: string;
  minLength?: number;
  static names(): { [key: string]: string } {
    return {
      minimum: 'Minimum',
      type: 'Type',
      maximum: 'Maximum',
      itemType: 'ItemType',
      enumListStr: 'EnumListStr',
      exclusiveMinimum: 'ExclusiveMinimum',
      maxLength: 'MaxLength',
      required: 'Required',
      description: 'Description',
      exclusiveMaximum: 'ExclusiveMaximum',
      path: 'Path',
      minLength: 'MinLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minimum: 'number',
      type: 'string',
      maximum: 'number',
      itemType: 'string',
      enumListStr: 'string',
      exclusiveMinimum: 'boolean',
      maxLength: 'number',
      required: 'string',
      description: 'string',
      exclusiveMaximum: 'boolean',
      path: 'string',
      minLength: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssUploadMetaResponseBodyOssUploadMeta extends $tea.Model {
  accessKey?: string;
  signature?: string;
  host?: string;
  policy?: string;
  securityToken?: string;
  objectKey?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      signature: 'Signature',
      host: 'Host',
      policy: 'Policy',
      securityToken: 'SecurityToken',
      objectKey: 'ObjectKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      signature: 'string',
      host: 'string',
      policy: 'string',
      securityToken: 'string',
      objectKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpstreamAppKeyRelationsResponseBodyRelationListPagination extends $tea.Model {
  pageIndex?: number;
  totalPageCount?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      totalPageCount: 'TotalPageCount',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      totalPageCount: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpstreamAppKeyRelationsResponseBodyRelationListList extends $tea.Model {
  appName?: string;
  appKey?: string;
  appPackage?: string;
  projectId?: string;
  gmtCreate?: number;
  PAppKey?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appKey: 'AppKey',
      appPackage: 'AppPackage',
      projectId: 'ProjectId',
      gmtCreate: 'GmtCreate',
      PAppKey: 'PAppKey',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appKey: 'string',
      appPackage: 'string',
      projectId: 'string',
      gmtCreate: 'number',
      PAppKey: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpstreamAppKeyRelationsResponseBodyRelationList extends $tea.Model {
  pagination?: ListUpstreamAppKeyRelationsResponseBodyRelationListPagination;
  list?: ListUpstreamAppKeyRelationsResponseBodyRelationListList[];
  static names(): { [key: string]: string } {
    return {
      pagination: 'Pagination',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagination: ListUpstreamAppKeyRelationsResponseBodyRelationListPagination,
      list: { 'type': 'array', 'itemType': ListUpstreamAppKeyRelationsResponseBodyRelationListList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShadowSchemasResponseBodyPageListPagination extends $tea.Model {
  pageIndex?: number;
  totalPageCount?: number;
  pageSize?: number;
  totalCount?: number;
  simpleSign?: boolean;
  hasNextPage?: boolean;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      totalPageCount: 'TotalPageCount',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      simpleSign: 'SimpleSign',
      hasNextPage: 'HasNextPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      totalPageCount: 'number',
      pageSize: 'number',
      totalCount: 'number',
      simpleSign: 'boolean',
      hasNextPage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShadowSchemasResponseBodyPageListList extends $tea.Model {
  authTypeDesc?: string;
  deviceModelId?: number;
  authType?: number;
  projectId?: string;
  gmtCreate?: number;
  namespace?: string;
  deviceModel?: string;
  gmtModified?: number;
  moduleSchema?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      authTypeDesc: 'AuthTypeDesc',
      deviceModelId: 'DeviceModelId',
      authType: 'AuthType',
      projectId: 'ProjectId',
      gmtCreate: 'GmtCreate',
      namespace: 'Namespace',
      deviceModel: 'DeviceModel',
      gmtModified: 'GmtModified',
      moduleSchema: 'ModuleSchema',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authTypeDesc: 'string',
      deviceModelId: 'number',
      authType: 'number',
      projectId: 'string',
      gmtCreate: 'number',
      namespace: 'string',
      deviceModel: 'string',
      gmtModified: 'number',
      moduleSchema: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShadowSchemasResponseBodyPageList extends $tea.Model {
  pagination?: ListShadowSchemasResponseBodyPageListPagination;
  list?: ListShadowSchemasResponseBodyPageListList[];
  static names(): { [key: string]: string } {
    return {
      pagination: 'Pagination',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagination: ListShadowSchemasResponseBodyPageListPagination,
      list: { 'type': 'array', 'itemType': ListShadowSchemasResponseBodyPageListList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountYunIdInfoResponseBodyYunIdInfo extends $tea.Model {
  totalBrandCount?: number;
  totalDeviceCount?: number;
  totalDeviceModelCount?: number;
  static names(): { [key: string]: string } {
    return {
      totalBrandCount: 'TotalBrandCount',
      totalDeviceCount: 'TotalDeviceCount',
      totalDeviceModelCount: 'TotalDeviceModelCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalBrandCount: 'number',
      totalDeviceCount: 'number',
      totalDeviceModelCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindPrepublishesByParentIdResponseBodyPrepublishListItems extends $tea.Model {
  gmtCreateTimestamp?: number;
  deviceModelId?: string;
  gmtModify?: string;
  isActive?: string;
  versionId?: string;
  barrierCount?: string;
  isTotalPrepublish?: string;
  gmtModifyTimestamp?: number;
  parentId?: string;
  gmtCreate?: string;
  name?: string;
  id?: number;
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      deviceModelId: 'DeviceModelId',
      gmtModify: 'GmtModify',
      isActive: 'IsActive',
      versionId: 'VersionId',
      barrierCount: 'BarrierCount',
      isTotalPrepublish: 'IsTotalPrepublish',
      gmtModifyTimestamp: 'GmtModifyTimestamp',
      parentId: 'ParentId',
      gmtCreate: 'GmtCreate',
      name: 'Name',
      id: 'Id',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTimestamp: 'number',
      deviceModelId: 'string',
      gmtModify: 'string',
      isActive: 'string',
      versionId: 'string',
      barrierCount: 'string',
      isTotalPrepublish: 'string',
      gmtModifyTimestamp: 'number',
      parentId: 'string',
      gmtCreate: 'string',
      name: 'string',
      id: 'number',
      versionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindPrepublishesByParentIdResponseBodyPrepublishList extends $tea.Model {
  items?: FindPrepublishesByParentIdResponseBodyPrepublishListItems[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': FindPrepublishesByParentIdResponseBodyPrepublishListItems },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVehicleControlResultResponseBodyExecutionInfo extends $tea.Model {
  status?: string;
  subStatus?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      subStatus: 'SubStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      subStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientSdksResponseBodyClientSdks extends $tea.Model {
  osType?: number;
  gmtCreate?: number;
  gmtModified?: number;
  name?: string;
  pkgName?: string;
  pkgType?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      osType: 'OsType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      name: 'Name',
      pkgName: 'PkgName',
      pkgType: 'PkgType',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      osType: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      name: 'string',
      pkgName: 'string',
      pkgType: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVersionDeviceGroupsResponseBodyDeviceGroupList extends $tea.Model {
  gmtModify?: string;
  description?: string;
  gmtCreate?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      gmtModify: 'GmtModify',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtModify: 'string',
      description: 'string',
      gmtCreate: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommercialVehicleDeviceResponseBodyVehicleDevice extends $tea.Model {
  createTime?: number;
  modifiedTime?: number;
  hardwareId?: string;
  clientId?: string;
  manufacturerId?: string;
  deviceModel?: string;
  onlineStatus?: number;
  plateColor?: number;
  plateNumber?: string;
  vin?: string;
  imei?: string;
  softVersion?: string;
  lastAuthTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      hardwareId: 'HardwareId',
      clientId: 'ClientId',
      manufacturerId: 'ManufacturerId',
      deviceModel: 'DeviceModel',
      onlineStatus: 'OnlineStatus',
      plateColor: 'PlateColor',
      plateNumber: 'PlateNumber',
      vin: 'Vin',
      imei: 'Imei',
      softVersion: 'SoftVersion',
      lastAuthTime: 'LastAuthTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      modifiedTime: 'number',
      hardwareId: 'string',
      clientId: 'string',
      manufacturerId: 'string',
      deviceModel: 'string',
      onlineStatus: 'number',
      plateColor: 'number',
      plateNumber: 'string',
      vin: 'string',
      imei: 'string',
      softVersion: 'string',
      lastAuthTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenAccountLinksResponseBodyOpenAccounts extends $tea.Model {
  status?: number;
  type?: number;
  displayName?: string;
  createAccessKey?: string;
  openId?: string;
  mobile?: string;
  region?: string;
  identityId?: string;
  loginId?: string;
  idp?: string;
  aliyunId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      displayName: 'DisplayName',
      createAccessKey: 'CreateAccessKey',
      openId: 'OpenId',
      mobile: 'Mobile',
      region: 'Region',
      identityId: 'IdentityId',
      loginId: 'LoginId',
      idp: 'Idp',
      aliyunId: 'AliyunId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      type: 'number',
      displayName: 'string',
      createAccessKey: 'string',
      openId: 'string',
      mobile: 'string',
      region: 'string',
      identityId: 'string',
      loginId: 'string',
      idp: 'string',
      aliyunId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindCustomizedPropertiesResponseBodyCustomizedPropertyListItems extends $tea.Model {
  gmtCreateTimestamp?: number;
  value?: string;
  gmtCreate?: string;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTimestamp: 'GmtCreateTimestamp',
      value: 'Value',
      gmtCreate: 'GmtCreate',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTimestamp: 'number',
      value: 'string',
      gmtCreate: 'string',
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindCustomizedPropertiesResponseBodyCustomizedPropertyList extends $tea.Model {
  items?: FindCustomizedPropertiesResponseBodyCustomizedPropertyListItems[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': FindCustomizedPropertiesResponseBodyCustomizedPropertyListItems },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageAcksResponseBodyMessageAcksPagination extends $tea.Model {
  pageIndex?: number;
  totalPageCount?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      totalPageCount: 'TotalPageCount',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      totalPageCount: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageAcksResponseBodyMessageAcksList extends $tea.Model {
  deviceId?: string;
  ackTime?: number;
  mid?: number;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      ackTime: 'AckTime',
      mid: 'Mid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      ackTime: 'number',
      mid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageAcksResponseBodyMessageAcks extends $tea.Model {
  pagination?: ListMessageAcksResponseBodyMessageAcksPagination;
  list?: ListMessageAcksResponseBodyMessageAcksList[];
  static names(): { [key: string]: string } {
    return {
      pagination: 'Pagination',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagination: ListMessageAcksResponseBodyMessageAcksPagination,
      list: { 'type': 'array', 'itemType': ListMessageAcksResponseBodyMessageAcksList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommercialVehicleTrackResponseBodyPoints extends $tea.Model {
  longitude?: string;
  latitude?: string;
  altitude?: string;
  speed?: number;
  direction?: number;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      longitude: 'Longitude',
      latitude: 'Latitude',
      altitude: 'Altitude',
      speed: 'Speed',
      direction: 'Direction',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      longitude: 'string',
      latitude: 'string',
      altitude: 'string',
      speed: 'number',
      direction: 'number',
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostDevicesResponseBodyHostDevicesPagination extends $tea.Model {
  totalCount?: number;
  totalPageCount?: number;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      totalPageCount: 'TotalPageCount',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      totalPageCount: 'number',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostDevicesResponseBodyHostDevicesList extends $tea.Model {
  deviceId?: string;
  serialNumber?: string;
  deviceName?: string;
  status?: number;
  deviceModel?: string;
  ip?: string;
  activateTime?: number;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      serialNumber: 'SerialNumber',
      deviceName: 'DeviceName',
      status: 'Status',
      deviceModel: 'DeviceModel',
      ip: 'Ip',
      activateTime: 'ActivateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      serialNumber: 'string',
      deviceName: 'string',
      status: 'number',
      deviceModel: 'string',
      ip: 'string',
      activateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHostDevicesResponseBodyHostDevices extends $tea.Model {
  pagination?: ListHostDevicesResponseBodyHostDevicesPagination;
  list?: ListHostDevicesResponseBodyHostDevicesList[];
  static names(): { [key: string]: string } {
    return {
      pagination: 'Pagination',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagination: ListHostDevicesResponseBodyHostDevicesPagination,
      list: { 'type': 'array', 'itemType': ListHostDevicesResponseBodyHostDevicesList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttClientSubscriptionsResponseBodyClientSubscriptionsPagination extends $tea.Model {
  pageIndex?: number;
  totalPageCount?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      totalPageCount: 'TotalPageCount',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      totalPageCount: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttClientSubscriptionsResponseBodyClientSubscriptionsList extends $tea.Model {
  topic?: string;
  qoS?: number;
  static names(): { [key: string]: string } {
    return {
      topic: 'Topic',
      qoS: 'QoS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topic: 'string',
      qoS: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMqttClientSubscriptionsResponseBodyClientSubscriptions extends $tea.Model {
  pagination?: ListMqttClientSubscriptionsResponseBodyClientSubscriptionsPagination;
  list?: ListMqttClientSubscriptionsResponseBodyClientSubscriptionsList[];
  static names(): { [key: string]: string } {
    return {
      pagination: 'Pagination',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagination: ListMqttClientSubscriptionsResponseBodyClientSubscriptionsPagination,
      list: { 'type': 'array', 'itemType': ListMqttClientSubscriptionsResponseBodyClientSubscriptionsList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeFunctionResponseBodyResult extends $tea.Model {
  output?: string;
  backEndRequestId?: string;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      backEndRequestId: 'BackEndRequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
      backEndRequestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMessageResponseBodyMessage extends $tea.Model {
  type?: number;
  action?: string;
  projectId?: string;
  predictSendCnt?: number;
  uri?: string;
  desc?: string;
  auditMsg?: string;
  appName?: string;
  appKey?: string;
  gmtCreateTime?: number;
  exipiredTime?: number;
  ackCnt?: number;
  title?: string;
  parameter?: string;
  audit?: number;
  id?: number;
  sendStatus?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      action: 'Action',
      projectId: 'ProjectId',
      predictSendCnt: 'PredictSendCnt',
      uri: 'Uri',
      desc: 'Desc',
      auditMsg: 'AuditMsg',
      appName: 'AppName',
      appKey: 'AppKey',
      gmtCreateTime: 'GmtCreateTime',
      exipiredTime: 'ExipiredTime',
      ackCnt: 'AckCnt',
      title: 'Title',
      parameter: 'Parameter',
      audit: 'Audit',
      id: 'Id',
      sendStatus: 'SendStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      action: 'string',
      projectId: 'string',
      predictSendCnt: 'number',
      uri: 'string',
      desc: 'string',
      auditMsg: 'string',
      appName: 'string',
      appKey: 'string',
      gmtCreateTime: 'number',
      exipiredTime: 'number',
      ackCnt: 'number',
      title: 'string',
      parameter: 'string',
      audit: 'number',
      id: 'number',
      sendStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceAppUpdateFunnelEventsResponseBodyEventList extends $tea.Model {
  packageName?: string;
  deviceId?: string;
  targetVersionCode?: string;
  event?: string;
  reportTimestamp?: number;
  reportTime?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      packageName: 'PackageName',
      deviceId: 'DeviceId',
      targetVersionCode: 'TargetVersionCode',
      event: 'Event',
      reportTimestamp: 'ReportTimestamp',
      reportTime: 'ReportTime',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageName: 'string',
      deviceId: 'string',
      targetVersionCode: 'string',
      event: 'string',
      reportTimestamp: 'number',
      reportTime: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNamespaceStatisticsDataResponseBodyStatisticsSeries extends $tea.Model {
  data?: number[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNamespaceStatisticsDataResponseBodyStatistics extends $tea.Model {
  categories?: number[];
  series?: GetNamespaceStatisticsDataResponseBodyStatisticsSeries[];
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      series: 'Series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'number' },
      series: { 'type': 'array', 'itemType': GetNamespaceStatisticsDataResponseBodyStatisticsSeries },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("iovcc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async listDeviceBrandsWithOptions(request: ListDeviceBrandsRequest, runtime: $Util.RuntimeOptions): Promise<ListDeviceBrandsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListDeviceBrandsResponse>(await this.doRPCRequest("ListDeviceBrands", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new ListDeviceBrandsResponse({}));
  }

  async listDeviceBrands(request: ListDeviceBrandsRequest): Promise<ListDeviceBrandsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceBrandsWithOptions(request, runtime);
  }

  async listFunctionExecuteLogWithOptions(request: ListFunctionExecuteLogRequest, runtime: $Util.RuntimeOptions): Promise<ListFunctionExecuteLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFunctionExecuteLogResponse>(await this.doRPCRequest("ListFunctionExecuteLog", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListFunctionExecuteLogResponse({}));
  }

  async listFunctionExecuteLog(request: ListFunctionExecuteLogRequest): Promise<ListFunctionExecuteLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFunctionExecuteLogWithOptions(request, runtime);
  }

  async listDeviceModelsWithOptions(request: ListDeviceModelsRequest, runtime: $Util.RuntimeOptions): Promise<ListDeviceModelsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListDeviceModelsResponse>(await this.doRPCRequest("ListDeviceModels", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new ListDeviceModelsResponse({}));
  }

  async listDeviceModels(request: ListDeviceModelsRequest): Promise<ListDeviceModelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceModelsWithOptions(request, runtime);
  }

  async listMqttMessageLogsWithOptions(request: ListMqttMessageLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListMqttMessageLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListMqttMessageLogsResponse>(await this.doRPCRequest("ListMqttMessageLogs", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListMqttMessageLogsResponse({}));
  }

  async listMqttMessageLogs(request: ListMqttMessageLogsRequest): Promise<ListMqttMessageLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMqttMessageLogsWithOptions(request, runtime);
  }

  async deleteNamespaceWithOptions(request: DeleteNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNamespaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteNamespaceResponse>(await this.doRPCRequest("DeleteNamespace", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteNamespaceResponse({}));
  }

  async deleteNamespace(request: DeleteNamespaceRequest): Promise<DeleteNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNamespaceWithOptions(request, runtime);
  }

  async listOfflineMessagesWithOptions(request: ListOfflineMessagesRequest, runtime: $Util.RuntimeOptions): Promise<ListOfflineMessagesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListOfflineMessagesResponse>(await this.doRPCRequest("ListOfflineMessages", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListOfflineMessagesResponse({}));
  }

  async listOfflineMessages(request: ListOfflineMessagesRequest): Promise<ListOfflineMessagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOfflineMessagesWithOptions(request, runtime);
  }

  async pushMessageWithOptions(request: PushMessageRequest, runtime: $Util.RuntimeOptions): Promise<PushMessageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PushMessageResponse>(await this.doRPCRequest("PushMessage", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new PushMessageResponse({}));
  }

  async pushMessage(request: PushMessageRequest): Promise<PushMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushMessageWithOptions(request, runtime);
  }

  async deleteCustomizedFilterWithOptions(request: DeleteCustomizedFilterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomizedFilterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCustomizedFilterResponse>(await this.doRPCRequest("DeleteCustomizedFilter", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCustomizedFilterResponse({}));
  }

  async deleteCustomizedFilter(request: DeleteCustomizedFilterRequest): Promise<DeleteCustomizedFilterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomizedFilterWithOptions(request, runtime);
  }

  async describeMqttClientStatusWithOptions(request: DescribeMqttClientStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMqttClientStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMqttClientStatusResponse>(await this.doRPCRequest("DescribeMqttClientStatus", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMqttClientStatusResponse({}));
  }

  async describeMqttClientStatus(request: DescribeMqttClientStatusRequest): Promise<DescribeMqttClientStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMqttClientStatusWithOptions(request, runtime);
  }

  async deleteDeviceWithOptions(request: DeleteDeviceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDeviceResponse>(await this.doRPCRequest("DeleteDevice", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDeviceResponse({}));
  }

  async deleteDevice(request: DeleteDeviceRequest): Promise<DeleteDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDeviceWithOptions(request, runtime);
  }

  async updateDeviceModelWithOptions(request: UpdateDeviceModelRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDeviceModelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDeviceModelResponse>(await this.doRPCRequest("UpdateDeviceModel", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDeviceModelResponse({}));
  }

  async updateDeviceModel(request: UpdateDeviceModelRequest): Promise<UpdateDeviceModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDeviceModelWithOptions(request, runtime);
  }

  async updateApiGatewayAppStatusWithOptions(request: UpdateApiGatewayAppStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateApiGatewayAppStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateApiGatewayAppStatusResponse>(await this.doRPCRequest("UpdateApiGatewayAppStatus", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateApiGatewayAppStatusResponse({}));
  }

  async updateApiGatewayAppStatus(request: UpdateApiGatewayAppStatusRequest): Promise<UpdateApiGatewayAppStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateApiGatewayAppStatusWithOptions(request, runtime);
  }

  async listCameraShootingAttachmentsWithOptions(request: ListCameraShootingAttachmentsRequest, runtime: $Util.RuntimeOptions): Promise<ListCameraShootingAttachmentsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListCameraShootingAttachmentsResponse>(await this.doRPCRequest("ListCameraShootingAttachments", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListCameraShootingAttachmentsResponse({}));
  }

  async listCameraShootingAttachments(request: ListCameraShootingAttachmentsRequest): Promise<ListCameraShootingAttachmentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCameraShootingAttachmentsWithOptions(request, runtime);
  }

  async listAssistHistoriesWithOptions(request: ListAssistHistoriesRequest, runtime: $Util.RuntimeOptions): Promise<ListAssistHistoriesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListAssistHistoriesResponse>(await this.doRPCRequest("ListAssistHistories", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new ListAssistHistoriesResponse({}));
  }

  async listAssistHistories(request: ListAssistHistoriesRequest): Promise<ListAssistHistoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAssistHistoriesWithOptions(request, runtime);
  }

  async getDeviceSystemUpdateFunnelEventsWithOptions(request: GetDeviceSystemUpdateFunnelEventsRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceSystemUpdateFunnelEventsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDeviceSystemUpdateFunnelEventsResponse>(await this.doRPCRequest("GetDeviceSystemUpdateFunnelEvents", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetDeviceSystemUpdateFunnelEventsResponse({}));
  }

  async getDeviceSystemUpdateFunnelEvents(request: GetDeviceSystemUpdateFunnelEventsRequest): Promise<GetDeviceSystemUpdateFunnelEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceSystemUpdateFunnelEventsWithOptions(request, runtime);
  }

  async deleteAllCustomizedFiltersWithOptions(request: DeleteAllCustomizedFiltersRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAllCustomizedFiltersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAllCustomizedFiltersResponse>(await this.doRPCRequest("DeleteAllCustomizedFilters", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAllCustomizedFiltersResponse({}));
  }

  async deleteAllCustomizedFilters(request: DeleteAllCustomizedFiltersRequest): Promise<DeleteAllCustomizedFiltersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAllCustomizedFiltersWithOptions(request, runtime);
  }

  async generateAssistFileUploadUrlWithOptions(request: GenerateAssistFileUploadUrlRequest, runtime: $Util.RuntimeOptions): Promise<GenerateAssistFileUploadUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateAssistFileUploadUrlResponse>(await this.doRPCRequest("GenerateAssistFileUploadUrl", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateAssistFileUploadUrlResponse({}));
  }

  async generateAssistFileUploadUrl(request: GenerateAssistFileUploadUrlRequest): Promise<GenerateAssistFileUploadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateAssistFileUploadUrlWithOptions(request, runtime);
  }

  async describeAssistWSServerAddressWithOptions(request: DescribeAssistWSServerAddressRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAssistWSServerAddressResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeAssistWSServerAddressResponse>(await this.doRPCRequest("DescribeAssistWSServerAddress", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeAssistWSServerAddressResponse({}));
  }

  async describeAssistWSServerAddress(request: DescribeAssistWSServerAddressRequest): Promise<DescribeAssistWSServerAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAssistWSServerAddressWithOptions(request, runtime);
  }

  async findPrepublishesByVersionIdWithOptions(request: FindPrepublishesByVersionIdRequest, runtime: $Util.RuntimeOptions): Promise<FindPrepublishesByVersionIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FindPrepublishesByVersionIdResponse>(await this.doRPCRequest("FindPrepublishesByVersionId", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new FindPrepublishesByVersionIdResponse({}));
  }

  async findPrepublishesByVersionId(request: FindPrepublishesByVersionIdRequest): Promise<FindPrepublishesByVersionIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findPrepublishesByVersionIdWithOptions(request, runtime);
  }

  async findVersionMessagesWithOptions(request: FindVersionMessagesRequest, runtime: $Util.RuntimeOptions): Promise<FindVersionMessagesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FindVersionMessagesResponse>(await this.doRPCRequest("FindVersionMessages", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new FindVersionMessagesResponse({}));
  }

  async findVersionMessages(request: FindVersionMessagesRequest): Promise<FindVersionMessagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findVersionMessagesWithOptions(request, runtime);
  }

  async updateUpstreamAppServerWithOptions(request: UpdateUpstreamAppServerRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUpstreamAppServerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateUpstreamAppServerResponse>(await this.doRPCRequest("UpdateUpstreamAppServer", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateUpstreamAppServerResponse({}));
  }

  async updateUpstreamAppServer(request: UpdateUpstreamAppServerRequest): Promise<UpdateUpstreamAppServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUpstreamAppServerWithOptions(request, runtime);
  }

  async getVehicleTrackWithOptions(request: GetVehicleTrackRequest, runtime: $Util.RuntimeOptions): Promise<GetVehicleTrackResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetVehicleTrackResponse>(await this.doRPCRequest("GetVehicleTrack", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new GetVehicleTrackResponse({}));
  }

  async getVehicleTrack(request: GetVehicleTrackRequest): Promise<GetVehicleTrackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVehicleTrackWithOptions(request, runtime);
  }

  async createVersionTestWithOptions(request: CreateVersionTestRequest, runtime: $Util.RuntimeOptions): Promise<CreateVersionTestResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateVersionTestResponse>(await this.doRPCRequest("CreateVersionTest", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVersionTestResponse({}));
  }

  async createVersionTest(request: CreateVersionTestRequest): Promise<CreateVersionTestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVersionTestWithOptions(request, runtime);
  }

  async listDeployedFunctionsWithOptions(request: ListDeployedFunctionsRequest, runtime: $Util.RuntimeOptions): Promise<ListDeployedFunctionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDeployedFunctionsResponse>(await this.doRPCRequest("ListDeployedFunctions", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListDeployedFunctionsResponse({}));
  }

  async listDeployedFunctions(request: ListDeployedFunctionsRequest): Promise<ListDeployedFunctionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeployedFunctionsWithOptions(request, runtime);
  }

  async listDeviceModelWithOptions(request: ListDeviceModelRequest, runtime: $Util.RuntimeOptions): Promise<ListDeviceModelResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListDeviceModelResponse>(await this.doRPCRequest("ListDeviceModel", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new ListDeviceModelResponse({}));
  }

  async listDeviceModel(request: ListDeviceModelRequest): Promise<ListDeviceModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceModelWithOptions(request, runtime);
  }

  async createSchemaSubscribeWithOptions(request: CreateSchemaSubscribeRequest, runtime: $Util.RuntimeOptions): Promise<CreateSchemaSubscribeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSchemaSubscribeResponse>(await this.doRPCRequest("CreateSchemaSubscribe", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSchemaSubscribeResponse({}));
  }

  async createSchemaSubscribe(request: CreateSchemaSubscribeRequest): Promise<CreateSchemaSubscribeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSchemaSubscribeWithOptions(request, runtime);
  }

  async describeAssistRTMPServerAddressWithOptions(request: DescribeAssistRTMPServerAddressRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAssistRTMPServerAddressResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeAssistRTMPServerAddressResponse>(await this.doRPCRequest("DescribeAssistRTMPServerAddress", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeAssistRTMPServerAddressResponse({}));
  }

  async describeAssistRTMPServerAddress(request: DescribeAssistRTMPServerAddressRequest): Promise<DescribeAssistRTMPServerAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAssistRTMPServerAddressWithOptions(request, runtime);
  }

  async deleteShadowSchemaWithOptions(request: DeleteShadowSchemaRequest, runtime: $Util.RuntimeOptions): Promise<DeleteShadowSchemaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteShadowSchemaResponse>(await this.doRPCRequest("DeleteShadowSchema", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteShadowSchemaResponse({}));
  }

  async deleteShadowSchema(request: DeleteShadowSchemaRequest): Promise<DeleteShadowSchemaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteShadowSchemaWithOptions(request, runtime);
  }

  async describeProjectAppSecurityWithOptions(request: DescribeProjectAppSecurityRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProjectAppSecurityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeProjectAppSecurityResponse>(await this.doRPCRequest("DescribeProjectAppSecurity", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeProjectAppSecurityResponse({}));
  }

  async describeProjectAppSecurity(request: DescribeProjectAppSecurityRequest): Promise<DescribeProjectAppSecurityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProjectAppSecurityWithOptions(request, runtime);
  }

  async createDeviceBrandWithOptions(request: CreateDeviceBrandRequest, runtime: $Util.RuntimeOptions): Promise<CreateDeviceBrandResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDeviceBrandResponse>(await this.doRPCRequest("CreateDeviceBrand", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDeviceBrandResponse({}));
  }

  async createDeviceBrand(request: CreateDeviceBrandRequest): Promise<CreateDeviceBrandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDeviceBrandWithOptions(request, runtime);
  }

  async createMqttRootTopicWithOptions(request: CreateMqttRootTopicRequest, runtime: $Util.RuntimeOptions): Promise<CreateMqttRootTopicResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateMqttRootTopicResponse>(await this.doRPCRequest("CreateMqttRootTopic", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateMqttRootTopicResponse({}));
  }

  async createMqttRootTopic(request: CreateMqttRootTopicRequest): Promise<CreateMqttRootTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMqttRootTopicWithOptions(request, runtime);
  }

  async delayPublishOsVersionWithOptions(request: DelayPublishOsVersionRequest, runtime: $Util.RuntimeOptions): Promise<DelayPublishOsVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DelayPublishOsVersionResponse>(await this.doRPCRequest("DelayPublishOsVersion", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DelayPublishOsVersionResponse({}));
  }

  async delayPublishOsVersion(request: DelayPublishOsVersionRequest): Promise<DelayPublishOsVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.delayPublishOsVersionWithOptions(request, runtime);
  }

  async listPreChecksWithOptions(runtime: $Util.RuntimeOptions): Promise<ListPreChecksResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListPreChecksResponse>(await this.doRPCRequest("ListPreChecks", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListPreChecksResponse({}));
  }

  async listPreChecks(): Promise<ListPreChecksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPreChecksWithOptions(runtime);
  }

  async listAppsWithOptions(request: ListAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListAppsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAppsResponse>(await this.doRPCRequest("ListApps", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListAppsResponse({}));
  }

  async listApps(request: ListAppsRequest): Promise<ListAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppsWithOptions(request, runtime);
  }

  async deleteCameraShootingRecordWithOptions(request: DeleteCameraShootingRecordRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCameraShootingRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCameraShootingRecordResponse>(await this.doRPCRequest("DeleteCameraShootingRecord", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCameraShootingRecordResponse({}));
  }

  async deleteCameraShootingRecord(request: DeleteCameraShootingRecordRequest): Promise<DeleteCameraShootingRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCameraShootingRecordWithOptions(request, runtime);
  }

  async describeDeviceWithOptions(request: DescribeDeviceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDeviceResponse>(await this.doRPCRequest("DescribeDevice", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDeviceResponse({}));
  }

  async describeDevice(request: DescribeDeviceRequest): Promise<DescribeDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceWithOptions(request, runtime);
  }

  async addVersionGroupDevicesWithOptions(request: AddVersionGroupDevicesRequest, runtime: $Util.RuntimeOptions): Promise<AddVersionGroupDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddVersionGroupDevicesResponse>(await this.doRPCRequest("AddVersionGroupDevices", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddVersionGroupDevicesResponse({}));
  }

  async addVersionGroupDevices(request: AddVersionGroupDevicesRequest): Promise<AddVersionGroupDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addVersionGroupDevicesWithOptions(request, runtime);
  }

  async listProjectAppsWithOptions(request: ListProjectAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectAppsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListProjectAppsResponse>(await this.doRPCRequest("ListProjectApps", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListProjectAppsResponse({}));
  }

  async listProjectApps(request: ListProjectAppsRequest): Promise<ListProjectAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectAppsWithOptions(request, runtime);
  }

  async connectAssistDeviceWithOptions(request: ConnectAssistDeviceRequest, runtime: $Util.RuntimeOptions): Promise<ConnectAssistDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConnectAssistDeviceResponse>(await this.doRPCRequest("ConnectAssistDevice", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ConnectAssistDeviceResponse({}));
  }

  async connectAssistDevice(request: ConnectAssistDeviceRequest): Promise<ConnectAssistDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.connectAssistDeviceWithOptions(request, runtime);
  }

  async listApiGatewayAppsWithOptions(request: ListApiGatewayAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListApiGatewayAppsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListApiGatewayAppsResponse>(await this.doRPCRequest("ListApiGatewayApps", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListApiGatewayAppsResponse({}));
  }

  async listApiGatewayApps(request: ListApiGatewayAppsRequest): Promise<ListApiGatewayAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApiGatewayAppsWithOptions(request, runtime);
  }

  async deleteRpcServiceWithOptions(request: DeleteRpcServiceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRpcServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRpcServiceResponse>(await this.doRPCRequest("DeleteRpcService", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRpcServiceResponse({}));
  }

  async deleteRpcService(request: DeleteRpcServiceRequest): Promise<DeleteRpcServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRpcServiceWithOptions(request, runtime);
  }

  async findPrepublishPassedDevicesWithOptions(request: FindPrepublishPassedDevicesRequest, runtime: $Util.RuntimeOptions): Promise<FindPrepublishPassedDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FindPrepublishPassedDevicesResponse>(await this.doRPCRequest("FindPrepublishPassedDevices", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new FindPrepublishPassedDevicesResponse({}));
  }

  async findPrepublishPassedDevices(request: FindPrepublishPassedDevicesRequest): Promise<FindPrepublishPassedDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findPrepublishPassedDevicesWithOptions(request, runtime);
  }

  async deleteVersionBlackDevicesByIdWithOptions(request: DeleteVersionBlackDevicesByIdRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVersionBlackDevicesByIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVersionBlackDevicesByIdResponse>(await this.doRPCRequest("DeleteVersionBlackDevicesById", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVersionBlackDevicesByIdResponse({}));
  }

  async deleteVersionBlackDevicesById(request: DeleteVersionBlackDevicesByIdRequest): Promise<DeleteVersionBlackDevicesByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVersionBlackDevicesByIdWithOptions(request, runtime);
  }

  async describeOpenAccountWithOptions(request: DescribeOpenAccountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOpenAccountResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeOpenAccountResponse>(await this.doRPCRequest("DescribeOpenAccount", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeOpenAccountResponse({}));
  }

  async describeOpenAccount(request: DescribeOpenAccountRequest): Promise<DescribeOpenAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOpenAccountWithOptions(request, runtime);
  }

  async findCustomizedFiltersWithOptions(request: FindCustomizedFiltersRequest, runtime: $Util.RuntimeOptions): Promise<FindCustomizedFiltersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FindCustomizedFiltersResponse>(await this.doRPCRequest("FindCustomizedFilters", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new FindCustomizedFiltersResponse({}));
  }

  async findCustomizedFilters(request: FindCustomizedFiltersRequest): Promise<FindCustomizedFiltersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findCustomizedFiltersWithOptions(request, runtime);
  }

  async deployFunctionFileWithOptions(request: DeployFunctionFileRequest, runtime: $Util.RuntimeOptions): Promise<DeployFunctionFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeployFunctionFileResponse>(await this.doRPCRequest("DeployFunctionFile", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeployFunctionFileResponse({}));
  }

  async deployFunctionFile(request: DeployFunctionFileRequest): Promise<DeployFunctionFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deployFunctionFileWithOptions(request, runtime);
  }

  async listAssistActionDetailsWithOptions(request: ListAssistActionDetailsRequest, runtime: $Util.RuntimeOptions): Promise<ListAssistActionDetailsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListAssistActionDetailsResponse>(await this.doRPCRequest("ListAssistActionDetails", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new ListAssistActionDetailsResponse({}));
  }

  async listAssistActionDetails(request: ListAssistActionDetailsRequest): Promise<ListAssistActionDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAssistActionDetailsWithOptions(request, runtime);
  }

  async describeMqttTopicSubscriptionWithOptions(request: DescribeMqttTopicSubscriptionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMqttTopicSubscriptionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMqttTopicSubscriptionResponse>(await this.doRPCRequest("DescribeMqttTopicSubscription", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMqttTopicSubscriptionResponse({}));
  }

  async describeMqttTopicSubscription(request: DescribeMqttTopicSubscriptionRequest): Promise<DescribeMqttTopicSubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMqttTopicSubscriptionWithOptions(request, runtime);
  }

  async pushVersionMessageWithOptions(request: PushVersionMessageRequest, runtime: $Util.RuntimeOptions): Promise<PushVersionMessageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PushVersionMessageResponse>(await this.doRPCRequest("PushVersionMessage", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new PushVersionMessageResponse({}));
  }

  async pushVersionMessage(request: PushVersionMessageRequest): Promise<PushVersionMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushVersionMessageWithOptions(request, runtime);
  }

  async countDeviceModelsWithOptions(request: CountDeviceModelsRequest, runtime: $Util.RuntimeOptions): Promise<CountDeviceModelsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<CountDeviceModelsResponse>(await this.doRPCRequest("CountDeviceModels", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new CountDeviceModelsResponse({}));
  }

  async countDeviceModels(request: CountDeviceModelsRequest): Promise<CountDeviceModelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.countDeviceModelsWithOptions(request, runtime);
  }

  async createDeviceWithOptions(request: CreateDeviceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDeviceResponse>(await this.doRPCRequest("CreateDevice", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDeviceResponse({}));
  }

  async createDevice(request: CreateDeviceRequest): Promise<CreateDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDeviceWithOptions(request, runtime);
  }

  async createNamespaceWithOptions(request: CreateNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<CreateNamespaceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateNamespaceResponse>(await this.doRPCRequest("CreateNamespace", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateNamespaceResponse({}));
  }

  async createNamespace(request: CreateNamespaceRequest): Promise<CreateNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNamespaceWithOptions(request, runtime);
  }

  async findVersionDeviceGroupsWithOptions(request: FindVersionDeviceGroupsRequest, runtime: $Util.RuntimeOptions): Promise<FindVersionDeviceGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FindVersionDeviceGroupsResponse>(await this.doRPCRequest("FindVersionDeviceGroups", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new FindVersionDeviceGroupsResponse({}));
  }

  async findVersionDeviceGroups(request: FindVersionDeviceGroupsRequest): Promise<FindVersionDeviceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findVersionDeviceGroupsWithOptions(request, runtime);
  }

  async executeRemoteCommandWithOptions(request: ExecuteRemoteCommandRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteRemoteCommandResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExecuteRemoteCommandResponse>(await this.doRPCRequest("ExecuteRemoteCommand", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ExecuteRemoteCommandResponse({}));
  }

  async executeRemoteCommand(request: ExecuteRemoteCommandRequest): Promise<ExecuteRemoteCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeRemoteCommandWithOptions(request, runtime);
  }

  async createVersionDeviceGroupWithOptions(request: CreateVersionDeviceGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateVersionDeviceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateVersionDeviceGroupResponse>(await this.doRPCRequest("CreateVersionDeviceGroup", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVersionDeviceGroupResponse({}));
  }

  async createVersionDeviceGroup(request: CreateVersionDeviceGroupRequest): Promise<CreateVersionDeviceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVersionDeviceGroupWithOptions(request, runtime);
  }

  async describeAssistReportWithOptions(request: DescribeAssistReportRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAssistReportResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeAssistReportResponse>(await this.doRPCRequest("DescribeAssistReport", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeAssistReportResponse({}));
  }

  async describeAssistReport(request: DescribeAssistReportRequest): Promise<DescribeAssistReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAssistReportWithOptions(request, runtime);
  }

  async listConnectLogsWithOptions(request: ListConnectLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListConnectLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListConnectLogsResponse>(await this.doRPCRequest("ListConnectLogs", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListConnectLogsResponse({}));
  }

  async listConnectLogs(request: ListConnectLogsRequest): Promise<ListConnectLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConnectLogsWithOptions(request, runtime);
  }

  async listClientPluginsWithOptions(request: ListClientPluginsRequest, runtime: $Util.RuntimeOptions): Promise<ListClientPluginsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClientPluginsResponse>(await this.doRPCRequest("ListClientPlugins", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListClientPluginsResponse({}));
  }

  async listClientPlugins(request: ListClientPluginsRequest): Promise<ListClientPluginsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClientPluginsWithOptions(request, runtime);
  }

  async describeShadowSchemaWithOptions(request: DescribeShadowSchemaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeShadowSchemaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeShadowSchemaResponse>(await this.doRPCRequest("DescribeShadowSchema", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeShadowSchemaResponse({}));
  }

  async describeShadowSchema(request: DescribeShadowSchemaRequest): Promise<DescribeShadowSchemaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeShadowSchemaWithOptions(request, runtime);
  }

  async findVersionBlackDevicesWithOptions(request: FindVersionBlackDevicesRequest, runtime: $Util.RuntimeOptions): Promise<FindVersionBlackDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FindVersionBlackDevicesResponse>(await this.doRPCRequest("FindVersionBlackDevices", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new FindVersionBlackDevicesResponse({}));
  }

  async findVersionBlackDevices(request: FindVersionBlackDevicesRequest): Promise<FindVersionBlackDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findVersionBlackDevicesWithOptions(request, runtime);
  }

  async listFunctionFilesWithOptions(request: ListFunctionFilesRequest, runtime: $Util.RuntimeOptions): Promise<ListFunctionFilesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFunctionFilesResponse>(await this.doRPCRequest("ListFunctionFiles", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListFunctionFilesResponse({}));
  }

  async listFunctionFiles(request: ListFunctionFilesRequest): Promise<ListFunctionFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFunctionFilesWithOptions(request, runtime);
  }

  async updateNamespaceDataWithOptions(request: UpdateNamespaceDataRequest, runtime: $Util.RuntimeOptions): Promise<UpdateNamespaceDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateNamespaceDataResponse>(await this.doRPCRequest("UpdateNamespaceData", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateNamespaceDataResponse({}));
  }

  async updateNamespaceData(request: UpdateNamespaceDataRequest): Promise<UpdateNamespaceDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateNamespaceDataWithOptions(request, runtime);
  }

  async listEdgeDevicesWithOptions(request: ListEdgeDevicesRequest, runtime: $Util.RuntimeOptions): Promise<ListEdgeDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListEdgeDevicesResponse>(await this.doRPCRequest("ListEdgeDevices", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListEdgeDevicesResponse({}));
  }

  async listEdgeDevices(request: ListEdgeDevicesRequest): Promise<ListEdgeDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEdgeDevicesWithOptions(request, runtime);
  }

  async deleteCustomizedPropertyWithOptions(request: DeleteCustomizedPropertyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomizedPropertyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCustomizedPropertyResponse>(await this.doRPCRequest("DeleteCustomizedProperty", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCustomizedPropertyResponse({}));
  }

  async deleteCustomizedProperty(request: DeleteCustomizedPropertyRequest): Promise<DeleteCustomizedPropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomizedPropertyWithOptions(request, runtime);
  }

  async updateAppVersionReleaseNoteWithOptions(request: UpdateAppVersionReleaseNoteRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppVersionReleaseNoteResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAppVersionReleaseNoteResponse>(await this.doRPCRequest("UpdateAppVersionReleaseNote", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAppVersionReleaseNoteResponse({}));
  }

  async updateAppVersionReleaseNote(request: UpdateAppVersionReleaseNoteRequest): Promise<UpdateAppVersionReleaseNoteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppVersionReleaseNoteWithOptions(request, runtime);
  }

  async createTriggerWithOptions(request: CreateTriggerRequest, runtime: $Util.RuntimeOptions): Promise<CreateTriggerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateTriggerResponse>(await this.doRPCRequest("CreateTrigger", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateTriggerResponse({}));
  }

  async createTrigger(request: CreateTriggerRequest): Promise<CreateTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTriggerWithOptions(request, runtime);
  }

  async diagnosisVersionWithOptions(request: DiagnosisVersionRequest, runtime: $Util.RuntimeOptions): Promise<DiagnosisVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DiagnosisVersionResponse>(await this.doRPCRequest("DiagnosisVersion", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DiagnosisVersionResponse({}));
  }

  async diagnosisVersion(request: DiagnosisVersionRequest): Promise<DiagnosisVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.diagnosisVersionWithOptions(request, runtime);
  }

  async listShadowSchemaDeviceModelsWithOptions(request: ListShadowSchemaDeviceModelsRequest, runtime: $Util.RuntimeOptions): Promise<ListShadowSchemaDeviceModelsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListShadowSchemaDeviceModelsResponse>(await this.doRPCRequest("ListShadowSchemaDeviceModels", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new ListShadowSchemaDeviceModelsResponse({}));
  }

  async listShadowSchemaDeviceModels(request: ListShadowSchemaDeviceModelsRequest): Promise<ListShadowSchemaDeviceModelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listShadowSchemaDeviceModelsWithOptions(request, runtime);
  }

  async pushConfigInfoWithOptions(request: PushConfigInfoRequest, runtime: $Util.RuntimeOptions): Promise<PushConfigInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PushConfigInfoResponse>(await this.doRPCRequest("PushConfigInfo", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new PushConfigInfoResponse({}));
  }

  async pushConfigInfo(request: PushConfigInfoRequest): Promise<PushConfigInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushConfigInfoWithOptions(request, runtime);
  }

  async generateOssUploadMetaWithOptions(request: GenerateOssUploadMetaRequest, runtime: $Util.RuntimeOptions): Promise<GenerateOssUploadMetaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateOssUploadMetaResponse>(await this.doRPCRequest("GenerateOssUploadMeta", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateOssUploadMetaResponse({}));
  }

  async generateOssUploadMeta(request: GenerateOssUploadMetaRequest): Promise<GenerateOssUploadMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateOssUploadMetaWithOptions(request, runtime);
  }

  async addVersionBlackDevicesWithOptions(request: AddVersionBlackDevicesRequest, runtime: $Util.RuntimeOptions): Promise<AddVersionBlackDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddVersionBlackDevicesResponse>(await this.doRPCRequest("AddVersionBlackDevices", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddVersionBlackDevicesResponse({}));
  }

  async addVersionBlackDevices(request: AddVersionBlackDevicesRequest): Promise<AddVersionBlackDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addVersionBlackDevicesWithOptions(request, runtime);
  }

  async describeCustomizedFilterWithOptions(request: DescribeCustomizedFilterRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomizedFilterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCustomizedFilterResponse>(await this.doRPCRequest("DescribeCustomizedFilter", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCustomizedFilterResponse({}));
  }

  async describeCustomizedFilter(request: DescribeCustomizedFilterRequest): Promise<DescribeCustomizedFilterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomizedFilterWithOptions(request, runtime);
  }

  async describeDeviceIdByOuterInfoWithOptions(request: DescribeDeviceIdByOuterInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceIdByOuterInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeDeviceIdByOuterInfoResponse>(await this.doRPCRequest("DescribeDeviceIdByOuterInfo", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeDeviceIdByOuterInfoResponse({}));
  }

  async describeDeviceIdByOuterInfo(request: DescribeDeviceIdByOuterInfoRequest): Promise<DescribeDeviceIdByOuterInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceIdByOuterInfoWithOptions(request, runtime);
  }

  async createAppVersionWithOptions(request: CreateAppVersionRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAppVersionResponse>(await this.doRPCRequest("CreateAppVersion", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAppVersionResponse({}));
  }

  async createAppVersion(request: CreateAppVersionRequest): Promise<CreateAppVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppVersionWithOptions(request, runtime);
  }

  async countActivatedOrNewRegistrationDeviceWithOptions(request: CountActivatedOrNewRegistrationDeviceRequest, runtime: $Util.RuntimeOptions): Promise<CountActivatedOrNewRegistrationDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CountActivatedOrNewRegistrationDeviceResponse>(await this.doRPCRequest("CountActivatedOrNewRegistrationDevice", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CountActivatedOrNewRegistrationDeviceResponse({}));
  }

  async countActivatedOrNewRegistrationDevice(request: CountActivatedOrNewRegistrationDeviceRequest): Promise<CountActivatedOrNewRegistrationDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.countActivatedOrNewRegistrationDeviceWithOptions(request, runtime);
  }

  async listDevicesWithOptions(request: ListDevicesRequest, runtime: $Util.RuntimeOptions): Promise<ListDevicesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListDevicesResponse>(await this.doRPCRequest("ListDevices", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new ListDevicesResponse({}));
  }

  async listDevices(request: ListDevicesRequest): Promise<ListDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDevicesWithOptions(request, runtime);
  }

  async findVersionTestsWithOptions(request: FindVersionTestsRequest, runtime: $Util.RuntimeOptions): Promise<FindVersionTestsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FindVersionTestsResponse>(await this.doRPCRequest("FindVersionTests", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new FindVersionTestsResponse({}));
  }

  async findVersionTests(request: FindVersionTestsRequest): Promise<FindVersionTestsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findVersionTestsWithOptions(request, runtime);
  }

  async publishOsVersionWithOptions(request: PublishOsVersionRequest, runtime: $Util.RuntimeOptions): Promise<PublishOsVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PublishOsVersionResponse>(await this.doRPCRequest("PublishOsVersion", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new PublishOsVersionResponse({}));
  }

  async publishOsVersion(request: PublishOsVersionRequest): Promise<PublishOsVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishOsVersionWithOptions(request, runtime);
  }

  async createUpstreamAppKeyRelationsWithOptions(request: CreateUpstreamAppKeyRelationsRequest, runtime: $Util.RuntimeOptions): Promise<CreateUpstreamAppKeyRelationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUpstreamAppKeyRelationsResponse>(await this.doRPCRequest("CreateUpstreamAppKeyRelations", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUpstreamAppKeyRelationsResponse({}));
  }

  async createUpstreamAppKeyRelations(request: CreateUpstreamAppKeyRelationsRequest): Promise<CreateUpstreamAppKeyRelationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUpstreamAppKeyRelationsWithOptions(request, runtime);
  }

  async updateOsVersionReleaseNoteWithOptions(request: UpdateOsVersionReleaseNoteRequest, runtime: $Util.RuntimeOptions): Promise<UpdateOsVersionReleaseNoteResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateOsVersionReleaseNoteResponse>(await this.doRPCRequest("UpdateOsVersionReleaseNote", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateOsVersionReleaseNoteResponse({}));
  }

  async updateOsVersionReleaseNote(request: UpdateOsVersionReleaseNoteRequest): Promise<UpdateOsVersionReleaseNoteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateOsVersionReleaseNoteWithOptions(request, runtime);
  }

  async publishAppVersionWithOptions(request: PublishAppVersionRequest, runtime: $Util.RuntimeOptions): Promise<PublishAppVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PublishAppVersionResponse>(await this.doRPCRequest("PublishAppVersion", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new PublishAppVersionResponse({}));
  }

  async publishAppVersion(request: PublishAppVersionRequest): Promise<PublishAppVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishAppVersionWithOptions(request, runtime);
  }

  async publishMqttMessageWithOptions(request: PublishMqttMessageRequest, runtime: $Util.RuntimeOptions): Promise<PublishMqttMessageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PublishMqttMessageResponse>(await this.doRPCRequest("PublishMqttMessage", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new PublishMqttMessageResponse({}));
  }

  async publishMqttMessage(request: PublishMqttMessageRequest): Promise<PublishMqttMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishMqttMessageWithOptions(request, runtime);
  }

  async deleteVersionGroupDeviceWithOptions(request: DeleteVersionGroupDeviceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVersionGroupDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVersionGroupDeviceResponse>(await this.doRPCRequest("DeleteVersionGroupDevice", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVersionGroupDeviceResponse({}));
  }

  async deleteVersionGroupDevice(request: DeleteVersionGroupDeviceRequest): Promise<DeleteVersionGroupDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVersionGroupDeviceWithOptions(request, runtime);
  }

  async deleteFunctionFileWithOptions(request: DeleteFunctionFileRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFunctionFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFunctionFileResponse>(await this.doRPCRequest("DeleteFunctionFile", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFunctionFileResponse({}));
  }

  async deleteFunctionFile(request: DeleteFunctionFileRequest): Promise<DeleteFunctionFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFunctionFileWithOptions(request, runtime);
  }

  async addVersionWhiteDevicesWithOptions(request: AddVersionWhiteDevicesRequest, runtime: $Util.RuntimeOptions): Promise<AddVersionWhiteDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddVersionWhiteDevicesResponse>(await this.doRPCRequest("AddVersionWhiteDevices", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddVersionWhiteDevicesResponse({}));
  }

  async addVersionWhiteDevices(request: AddVersionWhiteDevicesRequest): Promise<AddVersionWhiteDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addVersionWhiteDevicesWithOptions(request, runtime);
  }

  async listAssistHistoryDetailsWithOptions(request: ListAssistHistoryDetailsRequest, runtime: $Util.RuntimeOptions): Promise<ListAssistHistoryDetailsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListAssistHistoryDetailsResponse>(await this.doRPCRequest("ListAssistHistoryDetails", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new ListAssistHistoryDetailsResponse({}));
  }

  async listAssistHistoryDetails(request: ListAssistHistoryDetailsRequest): Promise<ListAssistHistoryDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAssistHistoryDetailsWithOptions(request, runtime);
  }

  async createCustomizedFilterWithOptions(request: CreateCustomizedFilterRequest, runtime: $Util.RuntimeOptions): Promise<CreateCustomizedFilterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCustomizedFilterResponse>(await this.doRPCRequest("CreateCustomizedFilter", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCustomizedFilterResponse({}));
  }

  async createCustomizedFilter(request: CreateCustomizedFilterRequest): Promise<CreateCustomizedFilterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCustomizedFilterWithOptions(request, runtime);
  }

  async deleteUpstreamAppKeyRelationWithOptions(request: DeleteUpstreamAppKeyRelationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUpstreamAppKeyRelationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteUpstreamAppKeyRelationResponse>(await this.doRPCRequest("DeleteUpstreamAppKeyRelation", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteUpstreamAppKeyRelationResponse({}));
  }

  async deleteUpstreamAppKeyRelation(request: DeleteUpstreamAppKeyRelationRequest): Promise<DeleteUpstreamAppKeyRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUpstreamAppKeyRelationWithOptions(request, runtime);
  }

  async describeAppVersionWithOptions(request: DescribeAppVersionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAppVersionResponse>(await this.doRPCRequest("DescribeAppVersion", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAppVersionResponse({}));
  }

  async describeAppVersion(request: DescribeAppVersionRequest): Promise<DescribeAppVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppVersionWithOptions(request, runtime);
  }

  async listVehicleWithOptions(request: ListVehicleRequest, runtime: $Util.RuntimeOptions): Promise<ListVehicleResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListVehicleResponse>(await this.doRPCRequest("ListVehicle", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new ListVehicleResponse({}));
  }

  async listVehicle(request: ListVehicleRequest): Promise<ListVehicleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVehicleWithOptions(request, runtime);
  }

  async executeCameraShootingCommandWithOptions(request: ExecuteCameraShootingCommandRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteCameraShootingCommandResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExecuteCameraShootingCommandResponse>(await this.doRPCRequest("ExecuteCameraShootingCommand", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ExecuteCameraShootingCommandResponse({}));
  }

  async executeCameraShootingCommand(request: ExecuteCameraShootingCommandRequest): Promise<ExecuteCameraShootingCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeCameraShootingCommandWithOptions(request, runtime);
  }

  async deleteVersionDeviceGroupWithOptions(request: DeleteVersionDeviceGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVersionDeviceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVersionDeviceGroupResponse>(await this.doRPCRequest("DeleteVersionDeviceGroup", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVersionDeviceGroupResponse({}));
  }

  async deleteVersionDeviceGroup(request: DeleteVersionDeviceGroupRequest): Promise<DeleteVersionDeviceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVersionDeviceGroupWithOptions(request, runtime);
  }

  async listFunctionFilesByProjectIdWithOptions(request: ListFunctionFilesByProjectIdRequest, runtime: $Util.RuntimeOptions): Promise<ListFunctionFilesByProjectIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFunctionFilesByProjectIdResponse>(await this.doRPCRequest("ListFunctionFilesByProjectId", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListFunctionFilesByProjectIdResponse({}));
  }

  async listFunctionFilesByProjectId(request: ListFunctionFilesByProjectIdRequest): Promise<ListFunctionFilesByProjectIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFunctionFilesByProjectIdWithOptions(request, runtime);
  }

  async findVersionWhiteDevicesWithOptions(request: FindVersionWhiteDevicesRequest, runtime: $Util.RuntimeOptions): Promise<FindVersionWhiteDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FindVersionWhiteDevicesResponse>(await this.doRPCRequest("FindVersionWhiteDevices", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new FindVersionWhiteDevicesResponse({}));
  }

  async findVersionWhiteDevices(request: FindVersionWhiteDevicesRequest): Promise<FindVersionWhiteDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findVersionWhiteDevicesWithOptions(request, runtime);
  }

  async createUpstreamAppServerWithOptions(request: CreateUpstreamAppServerRequest, runtime: $Util.RuntimeOptions): Promise<CreateUpstreamAppServerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUpstreamAppServerResponse>(await this.doRPCRequest("CreateUpstreamAppServer", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUpstreamAppServerResponse({}));
  }

  async createUpstreamAppServer(request: CreateUpstreamAppServerRequest): Promise<CreateUpstreamAppServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUpstreamAppServerWithOptions(request, runtime);
  }

  async describeVersionDeviceGroupWithOptions(request: DescribeVersionDeviceGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVersionDeviceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVersionDeviceGroupResponse>(await this.doRPCRequest("DescribeVersionDeviceGroup", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVersionDeviceGroupResponse({}));
  }

  async describeVersionDeviceGroup(request: DescribeVersionDeviceGroupRequest): Promise<DescribeVersionDeviceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVersionDeviceGroupWithOptions(request, runtime);
  }

  async updateAppVersionWithOptions(request: UpdateAppVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAppVersionResponse>(await this.doRPCRequest("UpdateAppVersion", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAppVersionResponse({}));
  }

  async updateAppVersion(request: UpdateAppVersionRequest): Promise<UpdateAppVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppVersionWithOptions(request, runtime);
  }

  async createCustomizedPropertyWithOptions(request: CreateCustomizedPropertyRequest, runtime: $Util.RuntimeOptions): Promise<CreateCustomizedPropertyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCustomizedPropertyResponse>(await this.doRPCRequest("CreateCustomizedProperty", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCustomizedPropertyResponse({}));
  }

  async createCustomizedProperty(request: CreateCustomizedPropertyRequest): Promise<CreateCustomizedPropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCustomizedPropertyWithOptions(request, runtime);
  }

  async listSchemaSubscribesWithOptions(request: ListSchemaSubscribesRequest, runtime: $Util.RuntimeOptions): Promise<ListSchemaSubscribesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListSchemaSubscribesResponse>(await this.doRPCRequest("ListSchemaSubscribes", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new ListSchemaSubscribesResponse({}));
  }

  async listSchemaSubscribes(request: ListSchemaSubscribesRequest): Promise<ListSchemaSubscribesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSchemaSubscribesWithOptions(request, runtime);
  }

  async updateSchemaSubscribeWithOptions(request: UpdateSchemaSubscribeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSchemaSubscribeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSchemaSubscribeResponse>(await this.doRPCRequest("UpdateSchemaSubscribe", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSchemaSubscribeResponse({}));
  }

  async updateSchemaSubscribe(request: UpdateSchemaSubscribeRequest): Promise<UpdateSchemaSubscribeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSchemaSubscribeWithOptions(request, runtime);
  }

  async deleteAllVersionGroupDevicesWithOptions(request: DeleteAllVersionGroupDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAllVersionGroupDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAllVersionGroupDevicesResponse>(await this.doRPCRequest("DeleteAllVersionGroupDevices", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAllVersionGroupDevicesResponse({}));
  }

  async deleteAllVersionGroupDevices(request: DeleteAllVersionGroupDevicesRequest): Promise<DeleteAllVersionGroupDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAllVersionGroupDevicesWithOptions(request, runtime);
  }

  async deleteVersionWhiteDevicesByIdWithOptions(request: DeleteVersionWhiteDevicesByIdRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVersionWhiteDevicesByIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVersionWhiteDevicesByIdResponse>(await this.doRPCRequest("DeleteVersionWhiteDevicesById", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVersionWhiteDevicesByIdResponse({}));
  }

  async deleteVersionWhiteDevicesById(request: DeleteVersionWhiteDevicesByIdRequest): Promise<DeleteVersionWhiteDevicesByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVersionWhiteDevicesByIdWithOptions(request, runtime);
  }

  async updateOsVersionWithOptions(request: UpdateOsVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateOsVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateOsVersionResponse>(await this.doRPCRequest("UpdateOsVersion", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateOsVersionResponse({}));
  }

  async updateOsVersion(request: UpdateOsVersionRequest): Promise<UpdateOsVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateOsVersionWithOptions(request, runtime);
  }

  async generateOssPostPolicyWithOptions(request: GenerateOssPostPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GenerateOssPostPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateOssPostPolicyResponse>(await this.doRPCRequest("GenerateOssPostPolicy", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateOssPostPolicyResponse({}));
  }

  async generateOssPostPolicy(request: GenerateOssPostPolicyRequest): Promise<GenerateOssPostPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateOssPostPolicyWithOptions(request, runtime);
  }

  async findVersionGroupDevicesWithOptions(request: FindVersionGroupDevicesRequest, runtime: $Util.RuntimeOptions): Promise<FindVersionGroupDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FindVersionGroupDevicesResponse>(await this.doRPCRequest("FindVersionGroupDevices", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new FindVersionGroupDevicesResponse({}));
  }

  async findVersionGroupDevices(request: FindVersionGroupDevicesRequest): Promise<FindVersionGroupDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findVersionGroupDevicesWithOptions(request, runtime);
  }

  async deleteOpenAccountWithOptions(request: DeleteOpenAccountRequest, runtime: $Util.RuntimeOptions): Promise<DeleteOpenAccountResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DeleteOpenAccountResponse>(await this.doRPCRequest("DeleteOpenAccount", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new DeleteOpenAccountResponse({}));
  }

  async deleteOpenAccount(request: DeleteOpenAccountRequest): Promise<DeleteOpenAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteOpenAccountWithOptions(request, runtime);
  }

  async describeDefaultSchemaWithOptions(request: DescribeDefaultSchemaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDefaultSchemaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDefaultSchemaResponse>(await this.doRPCRequest("DescribeDefaultSchema", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDefaultSchemaResponse({}));
  }

  async describeDefaultSchema(request: DescribeDefaultSchemaRequest): Promise<DescribeDefaultSchemaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDefaultSchemaWithOptions(request, runtime);
  }

  async listUpstreamAppServersWithOptions(request: ListUpstreamAppServersRequest, runtime: $Util.RuntimeOptions): Promise<ListUpstreamAppServersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUpstreamAppServersResponse>(await this.doRPCRequest("ListUpstreamAppServers", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListUpstreamAppServersResponse({}));
  }

  async listUpstreamAppServers(request: ListUpstreamAppServersRequest): Promise<ListUpstreamAppServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUpstreamAppServersWithOptions(request, runtime);
  }

  async deleteVersionTestWithOptions(request: DeleteVersionTestRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVersionTestResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVersionTestResponse>(await this.doRPCRequest("DeleteVersionTest", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVersionTestResponse({}));
  }

  async deleteVersionTest(request: DeleteVersionTestRequest): Promise<DeleteVersionTestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVersionTestWithOptions(request, runtime);
  }

  async createUpstreamAppKeyRelationWithOptions(request: CreateUpstreamAppKeyRelationRequest, runtime: $Util.RuntimeOptions): Promise<CreateUpstreamAppKeyRelationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUpstreamAppKeyRelationResponse>(await this.doRPCRequest("CreateUpstreamAppKeyRelation", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUpstreamAppKeyRelationResponse({}));
  }

  async createUpstreamAppKeyRelation(request: CreateUpstreamAppKeyRelationRequest): Promise<CreateUpstreamAppKeyRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUpstreamAppKeyRelationWithOptions(request, runtime);
  }

  async findAppVersionsWithOptions(request: FindAppVersionsRequest, runtime: $Util.RuntimeOptions): Promise<FindAppVersionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FindAppVersionsResponse>(await this.doRPCRequest("FindAppVersions", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new FindAppVersionsResponse({}));
  }

  async findAppVersions(request: FindAppVersionsRequest): Promise<FindAppVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findAppVersionsWithOptions(request, runtime);
  }

  async listMqttRootTopicsWithOptions(request: ListMqttRootTopicsRequest, runtime: $Util.RuntimeOptions): Promise<ListMqttRootTopicsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListMqttRootTopicsResponse>(await this.doRPCRequest("ListMqttRootTopics", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListMqttRootTopicsResponse({}));
  }

  async listMqttRootTopics(request: ListMqttRootTopicsRequest): Promise<ListMqttRootTopicsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMqttRootTopicsWithOptions(request, runtime);
  }

  async listAssistDevicesWithOptions(request: ListAssistDevicesRequest, runtime: $Util.RuntimeOptions): Promise<ListAssistDevicesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListAssistDevicesResponse>(await this.doRPCRequest("ListAssistDevices", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new ListAssistDevicesResponse({}));
  }

  async listAssistDevices(request: ListAssistDevicesRequest): Promise<ListAssistDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAssistDevicesWithOptions(request, runtime);
  }

  async deleteUpstreamAppServerWithOptions(request: DeleteUpstreamAppServerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUpstreamAppServerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteUpstreamAppServerResponse>(await this.doRPCRequest("DeleteUpstreamAppServer", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteUpstreamAppServerResponse({}));
  }

  async deleteUpstreamAppServer(request: DeleteUpstreamAppServerRequest): Promise<DeleteUpstreamAppServerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUpstreamAppServerWithOptions(request, runtime);
  }

  async updateVersionDeviceGroupWithOptions(request: UpdateVersionDeviceGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateVersionDeviceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateVersionDeviceGroupResponse>(await this.doRPCRequest("UpdateVersionDeviceGroup", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateVersionDeviceGroupResponse({}));
  }

  async updateVersionDeviceGroup(request: UpdateVersionDeviceGroupRequest): Promise<UpdateVersionDeviceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVersionDeviceGroupWithOptions(request, runtime);
  }

  async listOpenAccountsWithOptions(request: ListOpenAccountsRequest, runtime: $Util.RuntimeOptions): Promise<ListOpenAccountsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListOpenAccountsResponse>(await this.doRPCRequest("ListOpenAccounts", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new ListOpenAccountsResponse({}));
  }

  async listOpenAccounts(request: ListOpenAccountsRequest): Promise<ListOpenAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOpenAccountsWithOptions(request, runtime);
  }

  async updateOsVersionStatusWithOptions(request: UpdateOsVersionStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateOsVersionStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateOsVersionStatusResponse>(await this.doRPCRequest("UpdateOsVersionStatus", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateOsVersionStatusResponse({}));
  }

  async updateOsVersionStatus(request: UpdateOsVersionStatusRequest): Promise<UpdateOsVersionStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateOsVersionStatusWithOptions(request, runtime);
  }

  async countProjectsWithOptions(runtime: $Util.RuntimeOptions): Promise<CountProjectsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<CountProjectsResponse>(await this.doRPCRequest("CountProjects", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CountProjectsResponse({}));
  }

  async countProjects(): Promise<CountProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.countProjectsWithOptions(runtime);
  }

  async listCommercialVehicleDevicesWithOptions(request: ListCommercialVehicleDevicesRequest, runtime: $Util.RuntimeOptions): Promise<ListCommercialVehicleDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListCommercialVehicleDevicesResponse>(await this.doRPCRequest("ListCommercialVehicleDevices", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListCommercialVehicleDevicesResponse({}));
  }

  async listCommercialVehicleDevices(request: ListCommercialVehicleDevicesRequest): Promise<ListCommercialVehicleDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCommercialVehicleDevicesWithOptions(request, runtime);
  }

  async listMessageReceiversWithOptions(request: ListMessageReceiversRequest, runtime: $Util.RuntimeOptions): Promise<ListMessageReceiversResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListMessageReceiversResponse>(await this.doRPCRequest("ListMessageReceivers", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListMessageReceiversResponse({}));
  }

  async listMessageReceivers(request: ListMessageReceiversRequest): Promise<ListMessageReceiversResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMessageReceiversWithOptions(request, runtime);
  }

  async countDevicesWithOptions(request: CountDevicesRequest, runtime: $Util.RuntimeOptions): Promise<CountDevicesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<CountDevicesResponse>(await this.doRPCRequest("CountDevices", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new CountDevicesResponse({}));
  }

  async countDevices(request: CountDevicesRequest): Promise<CountDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.countDevicesWithOptions(request, runtime);
  }

  async updateOsBlackWhiteVersionsWithOptions(request: UpdateOsBlackWhiteVersionsRequest, runtime: $Util.RuntimeOptions): Promise<UpdateOsBlackWhiteVersionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateOsBlackWhiteVersionsResponse>(await this.doRPCRequest("UpdateOsBlackWhiteVersions", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateOsBlackWhiteVersionsResponse({}));
  }

  async updateOsBlackWhiteVersions(request: UpdateOsBlackWhiteVersionsRequest): Promise<UpdateOsBlackWhiteVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateOsBlackWhiteVersionsWithOptions(request, runtime);
  }

  async getNamespaceDataWithOptions(request: GetNamespaceDataRequest, runtime: $Util.RuntimeOptions): Promise<GetNamespaceDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetNamespaceDataResponse>(await this.doRPCRequest("GetNamespaceData", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetNamespaceDataResponse({}));
  }

  async getNamespaceData(request: GetNamespaceDataRequest): Promise<GetNamespaceDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNamespaceDataWithOptions(request, runtime);
  }

  async updateOsVersionRemarkWithOptions(request: UpdateOsVersionRemarkRequest, runtime: $Util.RuntimeOptions): Promise<UpdateOsVersionRemarkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateOsVersionRemarkResponse>(await this.doRPCRequest("UpdateOsVersionRemark", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateOsVersionRemarkResponse({}));
  }

  async updateOsVersionRemark(request: UpdateOsVersionRemarkRequest): Promise<UpdateOsVersionRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateOsVersionRemarkWithOptions(request, runtime);
  }

  async queryPrepublishPassedDeviceCountWithOptions(request: QueryPrepublishPassedDeviceCountRequest, runtime: $Util.RuntimeOptions): Promise<QueryPrepublishPassedDeviceCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryPrepublishPassedDeviceCountResponse>(await this.doRPCRequest("QueryPrepublishPassedDeviceCount", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new QueryPrepublishPassedDeviceCountResponse({}));
  }

  async queryPrepublishPassedDeviceCount(request: QueryPrepublishPassedDeviceCountRequest): Promise<QueryPrepublishPassedDeviceCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPrepublishPassedDeviceCountWithOptions(request, runtime);
  }

  async createProjectWithOptions(request: CreateProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateProjectResponse>(await this.doRPCRequest("CreateProject", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateProjectResponse({}));
  }

  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProjectWithOptions(request, runtime);
  }

  async listNamespacesWithOptions(request: ListNamespacesRequest, runtime: $Util.RuntimeOptions): Promise<ListNamespacesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListNamespacesResponse>(await this.doRPCRequest("ListNamespaces", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListNamespacesResponse({}));
  }

  async listNamespaces(request: ListNamespacesRequest): Promise<ListNamespacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNamespacesWithOptions(request, runtime);
  }

  async listSupportFeaturesWithOptions(runtime: $Util.RuntimeOptions): Promise<ListSupportFeaturesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListSupportFeaturesResponse>(await this.doRPCRequest("ListSupportFeatures", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListSupportFeaturesResponse({}));
  }

  async listSupportFeatures(): Promise<ListSupportFeaturesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSupportFeaturesWithOptions(runtime);
  }

  async deleteMqttRootTopicWithOptions(request: DeleteMqttRootTopicRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMqttRootTopicResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteMqttRootTopicResponse>(await this.doRPCRequest("DeleteMqttRootTopic", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteMqttRootTopicResponse({}));
  }

  async deleteMqttRootTopic(request: DeleteMqttRootTopicRequest): Promise<DeleteMqttRootTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMqttRootTopicWithOptions(request, runtime);
  }

  async deleteVersionGroupDeviceByIdWithOptions(request: DeleteVersionGroupDeviceByIdRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVersionGroupDeviceByIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVersionGroupDeviceByIdResponse>(await this.doRPCRequest("DeleteVersionGroupDeviceById", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVersionGroupDeviceByIdResponse({}));
  }

  async deleteVersionGroupDeviceById(request: DeleteVersionGroupDeviceByIdRequest): Promise<DeleteVersionGroupDeviceByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVersionGroupDeviceByIdWithOptions(request, runtime);
  }

  async listClientPluginVersionsWithOptions(request: ListClientPluginVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListClientPluginVersionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClientPluginVersionsResponse>(await this.doRPCRequest("ListClientPluginVersions", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListClientPluginVersionsResponse({}));
  }

  async listClientPluginVersions(request: ListClientPluginVersionsRequest): Promise<ListClientPluginVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClientPluginVersionsWithOptions(request, runtime);
  }

  async findVersionMessageSendRecordsWithOptions(request: FindVersionMessageSendRecordsRequest, runtime: $Util.RuntimeOptions): Promise<FindVersionMessageSendRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FindVersionMessageSendRecordsResponse>(await this.doRPCRequest("FindVersionMessageSendRecords", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new FindVersionMessageSendRecordsResponse({}));
  }

  async findVersionMessageSendRecords(request: FindVersionMessageSendRecordsRequest): Promise<FindVersionMessageSendRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findVersionMessageSendRecordsWithOptions(request, runtime);
  }

  async generateSysAppDownloadInfoWithOptions(request: GenerateSysAppDownloadInfoRequest, runtime: $Util.RuntimeOptions): Promise<GenerateSysAppDownloadInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateSysAppDownloadInfoResponse>(await this.doRPCRequest("GenerateSysAppDownloadInfo", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateSysAppDownloadInfoResponse({}));
  }

  async generateSysAppDownloadInfo(request: GenerateSysAppDownloadInfoRequest): Promise<GenerateSysAppDownloadInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateSysAppDownloadInfoWithOptions(request, runtime);
  }

  async deleteTriggerWithOptions(request: DeleteTriggerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTriggerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteTriggerResponse>(await this.doRPCRequest("DeleteTrigger", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteTriggerResponse({}));
  }

  async deleteTrigger(request: DeleteTriggerRequest): Promise<DeleteTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTriggerWithOptions(request, runtime);
  }

  async describeDeviceInfoWithOptions(request: DescribeDeviceInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeDeviceInfoResponse>(await this.doRPCRequest("DescribeDeviceInfo", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeDeviceInfoResponse({}));
  }

  async describeDeviceInfo(request: DescribeDeviceInfoRequest): Promise<DescribeDeviceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceInfoWithOptions(request, runtime);
  }

  async createDeviceModelWithOptions(request: CreateDeviceModelRequest, runtime: $Util.RuntimeOptions): Promise<CreateDeviceModelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDeviceModelResponse>(await this.doRPCRequest("CreateDeviceModel", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDeviceModelResponse({}));
  }

  async createDeviceModel(request: CreateDeviceModelRequest): Promise<CreateDeviceModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDeviceModelWithOptions(request, runtime);
  }

  async updateAppVersionStatusWithOptions(request: UpdateAppVersionStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppVersionStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAppVersionStatusResponse>(await this.doRPCRequest("UpdateAppVersionStatus", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAppVersionStatusResponse({}));
  }

  async updateAppVersionStatus(request: UpdateAppVersionStatusRequest): Promise<UpdateAppVersionStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppVersionStatusWithOptions(request, runtime);
  }

  async updateShadowSchemaWithOptions(request: UpdateShadowSchemaRequest, runtime: $Util.RuntimeOptions): Promise<UpdateShadowSchemaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateShadowSchemaResponse>(await this.doRPCRequest("UpdateShadowSchema", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateShadowSchemaResponse({}));
  }

  async updateShadowSchema(request: UpdateShadowSchemaRequest): Promise<UpdateShadowSchemaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateShadowSchemaWithOptions(request, runtime);
  }

  async describeDeviceShadowWithOptions(request: DescribeDeviceShadowRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceShadowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDeviceShadowResponse>(await this.doRPCRequest("DescribeDeviceShadow", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDeviceShadowResponse({}));
  }

  async describeDeviceShadow(request: DescribeDeviceShadowRequest): Promise<DescribeDeviceShadowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceShadowWithOptions(request, runtime);
  }

  async listTriggersWithOptions(request: ListTriggersRequest, runtime: $Util.RuntimeOptions): Promise<ListTriggersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTriggersResponse>(await this.doRPCRequest("ListTriggers", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListTriggersResponse({}));
  }

  async listTriggers(request: ListTriggersRequest): Promise<ListTriggersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTriggersWithOptions(request, runtime);
  }

  async updateCustomizedFilterWithOptions(request: UpdateCustomizedFilterRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCustomizedFilterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateCustomizedFilterResponse>(await this.doRPCRequest("UpdateCustomizedFilter", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateCustomizedFilterResponse({}));
  }

  async updateCustomizedFilter(request: UpdateCustomizedFilterRequest): Promise<UpdateCustomizedFilterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCustomizedFilterWithOptions(request, runtime);
  }

  async createVersionPrepublishWithOptions(request: CreateVersionPrepublishRequest, runtime: $Util.RuntimeOptions): Promise<CreateVersionPrepublishResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateVersionPrepublishResponse>(await this.doRPCRequest("CreateVersionPrepublish", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVersionPrepublishResponse({}));
  }

  async createVersionPrepublish(request: CreateVersionPrepublishRequest): Promise<CreateVersionPrepublishResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVersionPrepublishWithOptions(request, runtime);
  }

  async updateAppVersionRemarkWithOptions(request: UpdateAppVersionRemarkRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppVersionRemarkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAppVersionRemarkResponse>(await this.doRPCRequest("UpdateAppVersionRemark", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAppVersionRemarkResponse({}));
  }

  async updateAppVersionRemark(request: UpdateAppVersionRemarkRequest): Promise<UpdateAppVersionRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppVersionRemarkWithOptions(request, runtime);
  }

  async describeDeviceModelWithOptions(request: DescribeDeviceModelRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceModelResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeDeviceModelResponse>(await this.doRPCRequest("DescribeDeviceModel", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeDeviceModelResponse({}));
  }

  async describeDeviceModel(request: DescribeDeviceModelRequest): Promise<DescribeDeviceModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceModelWithOptions(request, runtime);
  }

  async listDeviceTypesWithOptions(request: ListDeviceTypesRequest, runtime: $Util.RuntimeOptions): Promise<ListDeviceTypesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListDeviceTypesResponse>(await this.doRPCRequest("ListDeviceTypes", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new ListDeviceTypesResponse({}));
  }

  async listDeviceTypes(request: ListDeviceTypesRequest): Promise<ListDeviceTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceTypesWithOptions(request, runtime);
  }

  async generateSdkDownloadInfoWithOptions(request: GenerateSdkDownloadInfoRequest, runtime: $Util.RuntimeOptions): Promise<GenerateSdkDownloadInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateSdkDownloadInfoResponse>(await this.doRPCRequest("GenerateSdkDownloadInfo", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateSdkDownloadInfoResponse({}));
  }

  async generateSdkDownloadInfo(request: GenerateSdkDownloadInfoRequest): Promise<GenerateSdkDownloadInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateSdkDownloadInfoWithOptions(request, runtime);
  }

  async executeVehicleControlWithOptions(request: ExecuteVehicleControlRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteVehicleControlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExecuteVehicleControlResponse>(await this.doRPCRequest("ExecuteVehicleControl", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ExecuteVehicleControlResponse({}));
  }

  async executeVehicleControl(request: ExecuteVehicleControlRequest): Promise<ExecuteVehicleControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeVehicleControlWithOptions(request, runtime);
  }

  async describeApiGatewayAppSecurityWithOptions(request: DescribeApiGatewayAppSecurityRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApiGatewayAppSecurityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeApiGatewayAppSecurityResponse>(await this.doRPCRequest("DescribeApiGatewayAppSecurity", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeApiGatewayAppSecurityResponse({}));
  }

  async describeApiGatewayAppSecurity(request: DescribeApiGatewayAppSecurityRequest): Promise<DescribeApiGatewayAppSecurityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApiGatewayAppSecurityWithOptions(request, runtime);
  }

  async describeDeviceOnlineInfoWithOptions(request: DescribeDeviceOnlineInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceOnlineInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDeviceOnlineInfoResponse>(await this.doRPCRequest("DescribeDeviceOnlineInfo", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDeviceOnlineInfoResponse({}));
  }

  async describeDeviceOnlineInfo(request: DescribeDeviceOnlineInfoRequest): Promise<DescribeDeviceOnlineInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceOnlineInfoWithOptions(request, runtime);
  }

  async createRpcServiceWithOptions(request: CreateRpcServiceRequest, runtime: $Util.RuntimeOptions): Promise<CreateRpcServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRpcServiceResponse>(await this.doRPCRequest("CreateRpcService", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRpcServiceResponse({}));
  }

  async createRpcService(request: CreateRpcServiceRequest): Promise<CreateRpcServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRpcServiceWithOptions(request, runtime);
  }

  async deleteVersionWhiteDevicesWithOptions(request: DeleteVersionWhiteDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVersionWhiteDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVersionWhiteDevicesResponse>(await this.doRPCRequest("DeleteVersionWhiteDevices", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVersionWhiteDevicesResponse({}));
  }

  async deleteVersionWhiteDevices(request: DeleteVersionWhiteDevicesRequest): Promise<DeleteVersionWhiteDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVersionWhiteDevicesWithOptions(request, runtime);
  }

  async listProjectsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListProjectsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListProjectsResponse>(await this.doRPCRequest("ListProjects", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListProjectsResponse({}));
  }

  async listProjects(): Promise<ListProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectsWithOptions(runtime);
  }

  async generateFunctionFileUploadMetaWithOptions(request: GenerateFunctionFileUploadMetaRequest, runtime: $Util.RuntimeOptions): Promise<GenerateFunctionFileUploadMetaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateFunctionFileUploadMetaResponse>(await this.doRPCRequest("GenerateFunctionFileUploadMeta", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateFunctionFileUploadMetaResponse({}));
  }

  async generateFunctionFileUploadMeta(request: GenerateFunctionFileUploadMetaRequest): Promise<GenerateFunctionFileUploadMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateFunctionFileUploadMetaWithOptions(request, runtime);
  }

  async describeProjectWithOptions(request: DescribeProjectRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeProjectResponse>(await this.doRPCRequest("DescribeProject", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeProjectResponse({}));
  }

  async describeProject(request: DescribeProjectRequest): Promise<DescribeProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProjectWithOptions(request, runtime);
  }

  async describeMqttMessageWithOptions(request: DescribeMqttMessageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMqttMessageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMqttMessageResponse>(await this.doRPCRequest("DescribeMqttMessage", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMqttMessageResponse({}));
  }

  async describeMqttMessage(request: DescribeMqttMessageRequest): Promise<DescribeMqttMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMqttMessageWithOptions(request, runtime);
  }

  async listCameraShootingRecordsWithOptions(request: ListCameraShootingRecordsRequest, runtime: $Util.RuntimeOptions): Promise<ListCameraShootingRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListCameraShootingRecordsResponse>(await this.doRPCRequest("ListCameraShootingRecords", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListCameraShootingRecordsResponse({}));
  }

  async listCameraShootingRecords(request: ListCameraShootingRecordsRequest): Promise<ListCameraShootingRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCameraShootingRecordsWithOptions(request, runtime);
  }

  async deleteVersionBlackDevicesWithOptions(request: DeleteVersionBlackDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVersionBlackDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVersionBlackDevicesResponse>(await this.doRPCRequest("DeleteVersionBlackDevices", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVersionBlackDevicesResponse({}));
  }

  async deleteVersionBlackDevices(request: DeleteVersionBlackDevicesRequest): Promise<DeleteVersionBlackDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVersionBlackDevicesWithOptions(request, runtime);
  }

  async describeOsVersionWithOptions(request: DescribeOsVersionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOsVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeOsVersionResponse>(await this.doRPCRequest("DescribeOsVersion", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeOsVersionResponse({}));
  }

  async describeOsVersion(request: DescribeOsVersionRequest): Promise<DescribeOsVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOsVersionWithOptions(request, runtime);
  }

  async listRpcServicesWithOptions(request: ListRpcServicesRequest, runtime: $Util.RuntimeOptions): Promise<ListRpcServicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRpcServicesResponse>(await this.doRPCRequest("ListRpcServices", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListRpcServicesResponse({}));
  }

  async listRpcServices(request: ListRpcServicesRequest): Promise<ListRpcServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRpcServicesWithOptions(request, runtime);
  }

  async deleteSchemaSubscribeWithOptions(request: DeleteSchemaSubscribeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSchemaSubscribeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSchemaSubscribeResponse>(await this.doRPCRequest("DeleteSchemaSubscribe", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSchemaSubscribeResponse({}));
  }

  async deleteSchemaSubscribe(request: DeleteSchemaSubscribeRequest): Promise<DeleteSchemaSubscribeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSchemaSubscribeWithOptions(request, runtime);
  }

  async addUploadedFunctionFileInfoWithOptions(request: AddUploadedFunctionFileInfoRequest, runtime: $Util.RuntimeOptions): Promise<AddUploadedFunctionFileInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddUploadedFunctionFileInfoResponse>(await this.doRPCRequest("AddUploadedFunctionFileInfo", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddUploadedFunctionFileInfoResponse({}));
  }

  async addUploadedFunctionFileInfo(request: AddUploadedFunctionFileInfoRequest): Promise<AddUploadedFunctionFileInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUploadedFunctionFileInfoWithOptions(request, runtime);
  }

  async createProjectAppWithOptions(request: CreateProjectAppRequest, runtime: $Util.RuntimeOptions): Promise<CreateProjectAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateProjectAppResponse>(await this.doRPCRequest("CreateProjectApp", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateProjectAppResponse({}));
  }

  async createProjectApp(request: CreateProjectAppRequest): Promise<CreateProjectAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProjectAppWithOptions(request, runtime);
  }

  async listServicesWithOptions(runtime: $Util.RuntimeOptions): Promise<ListServicesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListServicesResponse>(await this.doRPCRequest("ListServices", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListServicesResponse({}));
  }

  async listServices(): Promise<ListServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServicesWithOptions(runtime);
  }

  async findOsVersionsWithOptions(request: FindOsVersionsRequest, runtime: $Util.RuntimeOptions): Promise<FindOsVersionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FindOsVersionsResponse>(await this.doRPCRequest("FindOsVersions", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new FindOsVersionsResponse({}));
  }

  async findOsVersions(request: FindOsVersionsRequest): Promise<FindOsVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findOsVersionsWithOptions(request, runtime);
  }

  async updateVersionPrepublishActiveStatusWithOptions(request: UpdateVersionPrepublishActiveStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateVersionPrepublishActiveStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateVersionPrepublishActiveStatusResponse>(await this.doRPCRequest("UpdateVersionPrepublishActiveStatus", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateVersionPrepublishActiveStatusResponse({}));
  }

  async updateVersionPrepublishActiveStatus(request: UpdateVersionPrepublishActiveStatusRequest): Promise<UpdateVersionPrepublishActiveStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVersionPrepublishActiveStatusWithOptions(request, runtime);
  }

  async createOsVersionWithOptions(request: CreateOsVersionRequest, runtime: $Util.RuntimeOptions): Promise<CreateOsVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateOsVersionResponse>(await this.doRPCRequest("CreateOsVersion", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateOsVersionResponse({}));
  }

  async createOsVersion(request: CreateOsVersionRequest): Promise<CreateOsVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOsVersionWithOptions(request, runtime);
  }

  async countDeviceBrandsWithOptions(request: CountDeviceBrandsRequest, runtime: $Util.RuntimeOptions): Promise<CountDeviceBrandsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<CountDeviceBrandsResponse>(await this.doRPCRequest("CountDeviceBrands", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new CountDeviceBrandsResponse({}));
  }

  async countDeviceBrands(request: CountDeviceBrandsRequest): Promise<CountDeviceBrandsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.countDeviceBrandsWithOptions(request, runtime);
  }

  async describeDeviceBrandWithOptions(request: DescribeDeviceBrandRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceBrandResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeDeviceBrandResponse>(await this.doRPCRequest("DescribeDeviceBrand", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeDeviceBrandResponse({}));
  }

  async describeDeviceBrand(request: DescribeDeviceBrandRequest): Promise<DescribeDeviceBrandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceBrandWithOptions(request, runtime);
  }

  async createShadowSchemaWithOptions(request: CreateShadowSchemaRequest, runtime: $Util.RuntimeOptions): Promise<CreateShadowSchemaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateShadowSchemaResponse>(await this.doRPCRequest("CreateShadowSchema", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateShadowSchemaResponse({}));
  }

  async createShadowSchema(request: CreateShadowSchemaRequest): Promise<CreateShadowSchemaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createShadowSchemaWithOptions(request, runtime);
  }

  async describeDeviceValiditySchemaWithOptions(request: DescribeDeviceValiditySchemaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceValiditySchemaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDeviceValiditySchemaResponse>(await this.doRPCRequest("DescribeDeviceValiditySchema", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDeviceValiditySchemaResponse({}));
  }

  async describeDeviceValiditySchema(request: DescribeDeviceValiditySchemaRequest): Promise<DescribeDeviceValiditySchemaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceValiditySchemaWithOptions(request, runtime);
  }

  async getOssUploadMetaWithOptions(request: GetOssUploadMetaRequest, runtime: $Util.RuntimeOptions): Promise<GetOssUploadMetaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetOssUploadMetaResponse>(await this.doRPCRequest("GetOssUploadMeta", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetOssUploadMetaResponse({}));
  }

  async getOssUploadMeta(request: GetOssUploadMetaRequest): Promise<GetOssUploadMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOssUploadMetaWithOptions(request, runtime);
  }

  async listUpstreamAppKeyRelationsWithOptions(request: ListUpstreamAppKeyRelationsRequest, runtime: $Util.RuntimeOptions): Promise<ListUpstreamAppKeyRelationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUpstreamAppKeyRelationsResponse>(await this.doRPCRequest("ListUpstreamAppKeyRelations", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListUpstreamAppKeyRelationsResponse({}));
  }

  async listUpstreamAppKeyRelations(request: ListUpstreamAppKeyRelationsRequest): Promise<ListUpstreamAppKeyRelationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUpstreamAppKeyRelationsWithOptions(request, runtime);
  }

  async listShadowSchemasWithOptions(request: ListShadowSchemasRequest, runtime: $Util.RuntimeOptions): Promise<ListShadowSchemasResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListShadowSchemasResponse>(await this.doRPCRequest("ListShadowSchemas", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListShadowSchemasResponse({}));
  }

  async listShadowSchemas(request: ListShadowSchemasRequest): Promise<ListShadowSchemasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listShadowSchemasWithOptions(request, runtime);
  }

  async deleteProjectAppWithOptions(request: DeleteProjectAppRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProjectAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteProjectAppResponse>(await this.doRPCRequest("DeleteProjectApp", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteProjectAppResponse({}));
  }

  async deleteProjectApp(request: DeleteProjectAppRequest): Promise<DeleteProjectAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProjectAppWithOptions(request, runtime);
  }

  async countYunIdInfoWithOptions(runtime: $Util.RuntimeOptions): Promise<CountYunIdInfoResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<CountYunIdInfoResponse>(await this.doRPCRequest("CountYunIdInfo", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CountYunIdInfoResponse({}));
  }

  async countYunIdInfo(): Promise<CountYunIdInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.countYunIdInfoWithOptions(runtime);
  }

  async findPrepublishesByParentIdWithOptions(request: FindPrepublishesByParentIdRequest, runtime: $Util.RuntimeOptions): Promise<FindPrepublishesByParentIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FindPrepublishesByParentIdResponse>(await this.doRPCRequest("FindPrepublishesByParentId", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new FindPrepublishesByParentIdResponse({}));
  }

  async findPrepublishesByParentId(request: FindPrepublishesByParentIdRequest): Promise<FindPrepublishesByParentIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findPrepublishesByParentIdWithOptions(request, runtime);
  }

  async getVehicleControlResultWithOptions(request: GetVehicleControlResultRequest, runtime: $Util.RuntimeOptions): Promise<GetVehicleControlResultResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetVehicleControlResultResponse>(await this.doRPCRequest("GetVehicleControlResult", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new GetVehicleControlResultResponse({}));
  }

  async getVehicleControlResult(request: GetVehicleControlResultRequest): Promise<GetVehicleControlResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVehicleControlResultWithOptions(request, runtime);
  }

  async updateTriggerWithOptions(request: UpdateTriggerRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTriggerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateTriggerResponse>(await this.doRPCRequest("UpdateTrigger", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateTriggerResponse({}));
  }

  async updateTrigger(request: UpdateTriggerRequest): Promise<UpdateTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTriggerWithOptions(request, runtime);
  }

  async listClientSdksWithOptions(request: ListClientSdksRequest, runtime: $Util.RuntimeOptions): Promise<ListClientSdksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClientSdksResponse>(await this.doRPCRequest("ListClientSdks", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListClientSdksResponse({}));
  }

  async listClientSdks(request: ListClientSdksRequest): Promise<ListClientSdksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClientSdksWithOptions(request, runtime);
  }

  async listVersionDeviceGroupsWithOptions(request: ListVersionDeviceGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListVersionDeviceGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListVersionDeviceGroupsResponse>(await this.doRPCRequest("ListVersionDeviceGroups", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListVersionDeviceGroupsResponse({}));
  }

  async listVersionDeviceGroups(request: ListVersionDeviceGroupsRequest): Promise<ListVersionDeviceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVersionDeviceGroupsWithOptions(request, runtime);
  }

  async getCommercialVehicleDeviceWithOptions(request: GetCommercialVehicleDeviceRequest, runtime: $Util.RuntimeOptions): Promise<GetCommercialVehicleDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetCommercialVehicleDeviceResponse>(await this.doRPCRequest("GetCommercialVehicleDevice", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetCommercialVehicleDeviceResponse({}));
  }

  async getCommercialVehicleDevice(request: GetCommercialVehicleDeviceRequest): Promise<GetCommercialVehicleDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCommercialVehicleDeviceWithOptions(request, runtime);
  }

  async submitAssistReportWithOptions(request: SubmitAssistReportRequest, runtime: $Util.RuntimeOptions): Promise<SubmitAssistReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitAssistReportResponse>(await this.doRPCRequest("SubmitAssistReport", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitAssistReportResponse({}));
  }

  async submitAssistReport(request: SubmitAssistReportRequest): Promise<SubmitAssistReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitAssistReportWithOptions(request, runtime);
  }

  async deleteVersionAllBlackDevicesWithOptions(request: DeleteVersionAllBlackDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVersionAllBlackDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVersionAllBlackDevicesResponse>(await this.doRPCRequest("DeleteVersionAllBlackDevices", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVersionAllBlackDevicesResponse({}));
  }

  async deleteVersionAllBlackDevices(request: DeleteVersionAllBlackDevicesRequest): Promise<DeleteVersionAllBlackDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVersionAllBlackDevicesWithOptions(request, runtime);
  }

  async listOpenAccountLinksWithOptions(request: ListOpenAccountLinksRequest, runtime: $Util.RuntimeOptions): Promise<ListOpenAccountLinksResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListOpenAccountLinksResponse>(await this.doRPCRequest("ListOpenAccountLinks", "2018-05-01", "HTTPS", "GET", "AK", "json", req, runtime), new ListOpenAccountLinksResponse({}));
  }

  async listOpenAccountLinks(request: ListOpenAccountLinksRequest): Promise<ListOpenAccountLinksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOpenAccountLinksWithOptions(request, runtime);
  }

  async addVersionWhiteDevicesByDeviceGroupsWithOptions(request: AddVersionWhiteDevicesByDeviceGroupsRequest, runtime: $Util.RuntimeOptions): Promise<AddVersionWhiteDevicesByDeviceGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddVersionWhiteDevicesByDeviceGroupsResponse>(await this.doRPCRequest("AddVersionWhiteDevicesByDeviceGroups", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddVersionWhiteDevicesByDeviceGroupsResponse({}));
  }

  async addVersionWhiteDevicesByDeviceGroups(request: AddVersionWhiteDevicesByDeviceGroupsRequest): Promise<AddVersionWhiteDevicesByDeviceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addVersionWhiteDevicesByDeviceGroupsWithOptions(request, runtime);
  }

  async findCustomizedPropertiesWithOptions(request: FindCustomizedPropertiesRequest, runtime: $Util.RuntimeOptions): Promise<FindCustomizedPropertiesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FindCustomizedPropertiesResponse>(await this.doRPCRequest("FindCustomizedProperties", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new FindCustomizedPropertiesResponse({}));
  }

  async findCustomizedProperties(request: FindCustomizedPropertiesRequest): Promise<FindCustomizedPropertiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findCustomizedPropertiesWithOptions(request, runtime);
  }

  async listMessageAcksWithOptions(request: ListMessageAcksRequest, runtime: $Util.RuntimeOptions): Promise<ListMessageAcksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListMessageAcksResponse>(await this.doRPCRequest("ListMessageAcks", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListMessageAcksResponse({}));
  }

  async listMessageAcks(request: ListMessageAcksRequest): Promise<ListMessageAcksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMessageAcksWithOptions(request, runtime);
  }

  async getCommercialVehicleTrackWithOptions(request: GetCommercialVehicleTrackRequest, runtime: $Util.RuntimeOptions): Promise<GetCommercialVehicleTrackResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetCommercialVehicleTrackResponse>(await this.doRPCRequest("GetCommercialVehicleTrack", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetCommercialVehicleTrackResponse({}));
  }

  async getCommercialVehicleTrack(request: GetCommercialVehicleTrackRequest): Promise<GetCommercialVehicleTrackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCommercialVehicleTrackWithOptions(request, runtime);
  }

  async listHostDevicesWithOptions(request: ListHostDevicesRequest, runtime: $Util.RuntimeOptions): Promise<ListHostDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListHostDevicesResponse>(await this.doRPCRequest("ListHostDevices", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListHostDevicesResponse({}));
  }

  async listHostDevices(request: ListHostDevicesRequest): Promise<ListHostDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHostDevicesWithOptions(request, runtime);
  }

  async listMqttClientSubscriptionsWithOptions(request: ListMqttClientSubscriptionsRequest, runtime: $Util.RuntimeOptions): Promise<ListMqttClientSubscriptionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListMqttClientSubscriptionsResponse>(await this.doRPCRequest("ListMqttClientSubscriptions", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListMqttClientSubscriptionsResponse({}));
  }

  async listMqttClientSubscriptions(request: ListMqttClientSubscriptionsRequest): Promise<ListMqttClientSubscriptionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMqttClientSubscriptionsWithOptions(request, runtime);
  }

  async invokeFunctionWithOptions(request: InvokeFunctionRequest, runtime: $Util.RuntimeOptions): Promise<InvokeFunctionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InvokeFunctionResponse>(await this.doRPCRequest("InvokeFunction", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new InvokeFunctionResponse({}));
  }

  async invokeFunction(request: InvokeFunctionRequest): Promise<InvokeFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.invokeFunctionWithOptions(request, runtime);
  }

  async deleteVersionAllWhiteDevicesWithOptions(request: DeleteVersionAllWhiteDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVersionAllWhiteDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVersionAllWhiteDevicesResponse>(await this.doRPCRequest("DeleteVersionAllWhiteDevices", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVersionAllWhiteDevicesResponse({}));
  }

  async deleteVersionAllWhiteDevices(request: DeleteVersionAllWhiteDevicesRequest): Promise<DeleteVersionAllWhiteDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVersionAllWhiteDevicesWithOptions(request, runtime);
  }

  async describeMessageWithOptions(request: DescribeMessageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMessageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMessageResponse>(await this.doRPCRequest("DescribeMessage", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMessageResponse({}));
  }

  async describeMessage(request: DescribeMessageRequest): Promise<DescribeMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMessageWithOptions(request, runtime);
  }

  async updateProjectWithOptions(request: UpdateProjectRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateProjectResponse>(await this.doRPCRequest("UpdateProject", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateProjectResponse({}));
  }

  async updateProject(request: UpdateProjectRequest): Promise<UpdateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProjectWithOptions(request, runtime);
  }

  async updateAppBlackWhiteVersionsWithOptions(request: UpdateAppBlackWhiteVersionsRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppBlackWhiteVersionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAppBlackWhiteVersionsResponse>(await this.doRPCRequest("UpdateAppBlackWhiteVersions", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAppBlackWhiteVersionsResponse({}));
  }

  async updateAppBlackWhiteVersions(request: UpdateAppBlackWhiteVersionsRequest): Promise<UpdateAppBlackWhiteVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppBlackWhiteVersionsWithOptions(request, runtime);
  }

  async getDeviceAppUpdateFunnelEventsWithOptions(request: GetDeviceAppUpdateFunnelEventsRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceAppUpdateFunnelEventsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDeviceAppUpdateFunnelEventsResponse>(await this.doRPCRequest("GetDeviceAppUpdateFunnelEvents", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetDeviceAppUpdateFunnelEventsResponse({}));
  }

  async getDeviceAppUpdateFunnelEvents(request: GetDeviceAppUpdateFunnelEventsRequest): Promise<GetDeviceAppUpdateFunnelEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceAppUpdateFunnelEventsWithOptions(request, runtime);
  }

  async getNamespaceStatisticsDataWithOptions(request: GetNamespaceStatisticsDataRequest, runtime: $Util.RuntimeOptions): Promise<GetNamespaceStatisticsDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetNamespaceStatisticsDataResponse>(await this.doRPCRequest("GetNamespaceStatisticsData", "2018-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetNamespaceStatisticsDataResponse({}));
  }

  async getNamespaceStatisticsData(request: GetNamespaceStatisticsDataRequest): Promise<GetNamespaceStatisticsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNamespaceStatisticsDataWithOptions(request, runtime);
  }

}
