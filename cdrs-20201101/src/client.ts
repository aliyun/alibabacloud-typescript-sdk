// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddCdrsMonitorRequest extends $tea.Model {
  algorithmVendor?: string;
  batchIndicator?: number;
  corpId?: string;
  description?: string;
  monitorType?: string;
  notifierAppSecret?: string;
  notifierExtendValues?: string;
  notifierTimeOut?: number;
  notifierType?: string;
  notifierUrl?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmVendor: 'AlgorithmVendor',
      batchIndicator: 'BatchIndicator',
      corpId: 'CorpId',
      description: 'Description',
      monitorType: 'MonitorType',
      notifierAppSecret: 'NotifierAppSecret',
      notifierExtendValues: 'NotifierExtendValues',
      notifierTimeOut: 'NotifierTimeOut',
      notifierType: 'NotifierType',
      notifierUrl: 'NotifierUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmVendor: 'string',
      batchIndicator: 'number',
      corpId: 'string',
      description: 'string',
      monitorType: 'string',
      notifierAppSecret: 'string',
      notifierExtendValues: 'string',
      notifierTimeOut: 'number',
      notifierType: 'string',
      notifierUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCdrsMonitorResponseBody extends $tea.Model {
  code?: string;
  data?: AddCdrsMonitorResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AddCdrsMonitorResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCdrsMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddCdrsMonitorResponseBody;
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
      body: AddCdrsMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMonitorRequest extends $tea.Model {
  algorithmVendor?: string;
  batchIndicator?: number;
  corpId?: string;
  description?: string;
  monitorType?: string;
  notifierAppSecret?: string;
  notifierExtendValues?: string;
  notifierTimeOut?: number;
  notifierType?: string;
  notifierUrl?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmVendor: 'AlgorithmVendor',
      batchIndicator: 'BatchIndicator',
      corpId: 'CorpId',
      description: 'Description',
      monitorType: 'MonitorType',
      notifierAppSecret: 'NotifierAppSecret',
      notifierExtendValues: 'NotifierExtendValues',
      notifierTimeOut: 'NotifierTimeOut',
      notifierType: 'NotifierType',
      notifierUrl: 'NotifierUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmVendor: 'string',
      batchIndicator: 'number',
      corpId: 'string',
      description: 'string',
      monitorType: 'string',
      notifierAppSecret: 'string',
      notifierExtendValues: 'string',
      notifierTimeOut: 'number',
      notifierType: 'string',
      notifierUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMonitorResponseBody extends $tea.Model {
  code?: string;
  data?: AddMonitorResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AddMonitorResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddMonitorResponseBody;
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
      body: AddMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindDeviceRequest extends $tea.Model {
  corpId?: string;
  devices?: BindDeviceRequestDevices[];
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      devices: 'Devices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      devices: { 'type': 'array', 'itemType': BindDeviceRequestDevices },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindDeviceResponseBody extends $tea.Model {
  code?: string;
  data?: BindDeviceResponseBodyData[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': BindDeviceResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BindDeviceResponseBody;
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
      body: BindDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequest extends $tea.Model {
  aggregateSceneCode?: string;
  description?: string;
  icon?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      aggregateSceneCode: 'AggregateSceneCode',
      description: 'Description',
      icon: 'Icon',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregateSceneCode: 'string',
      description: 'string',
      icon: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBody extends $tea.Model {
  code?: string;
  corpId?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      corpId: 'CorpId',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      corpId: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateProjectResponseBody;
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
      body: CreateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectTrajectoryRegularPatternRequest extends $tea.Model {
  corpId?: string;
  idType?: string;
  idValue?: string;
  predictDate?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      idType: 'IdType',
      idValue: 'IdValue',
      predictDate: 'PredictDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      idType: 'string',
      idValue: 'string',
      predictDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectTrajectoryRegularPatternResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectTrajectoryRegularPatternResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetectTrajectoryRegularPatternResponseBody;
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
      body: DetectTrajectoryRegularPatternResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCdrsMonitorListRequest extends $tea.Model {
  corpId?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCdrsMonitorListResponseBody extends $tea.Model {
  code?: string;
  data?: GetCdrsMonitorListResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCdrsMonitorListResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCdrsMonitorListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCdrsMonitorListResponseBody;
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
      body: GetCdrsMonitorListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCdrsMonitorResultRequest extends $tea.Model {
  algorithmVendor?: string;
  corpId?: string;
  endTime?: number;
  minRecordId?: string;
  startTime?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmVendor: 'AlgorithmVendor',
      corpId: 'CorpId',
      endTime: 'EndTime',
      minRecordId: 'MinRecordId',
      startTime: 'StartTime',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmVendor: 'string',
      corpId: 'string',
      endTime: 'number',
      minRecordId: 'string',
      startTime: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCdrsMonitorResultResponseBody extends $tea.Model {
  code?: string;
  data?: GetCdrsMonitorResultResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCdrsMonitorResultResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCdrsMonitorResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCdrsMonitorResultResponseBody;
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
      body: GetCdrsMonitorResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorListRequest extends $tea.Model {
  corpId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorListResponseBody extends $tea.Model {
  code?: string;
  data?: GetMonitorListResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetMonitorListResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMonitorListResponseBody;
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
      body: GetMonitorListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorResultRequest extends $tea.Model {
  algorithmVendor?: string;
  corpId?: string;
  endTime?: number;
  minRecordId?: string;
  startTime?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmVendor: 'AlgorithmVendor',
      corpId: 'CorpId',
      endTime: 'EndTime',
      minRecordId: 'MinRecordId',
      startTime: 'StartTime',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmVendor: 'string',
      corpId: 'string',
      endTime: 'number',
      minRecordId: 'string',
      startTime: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorResultResponseBody extends $tea.Model {
  code?: string;
  data?: GetMonitorResultResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetMonitorResultResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMonitorResultResponseBody;
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
      body: GetMonitorResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAreaHotSpotMetricsRequest extends $tea.Model {
  corpId?: string;
  deviceId?: string;
  endTime?: string;
  pageNumber?: string;
  pageSize?: string;
  personId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      deviceId: 'DeviceId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      personId: 'PersonId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      deviceId: 'string',
      endTime: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      personId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAreaHotSpotMetricsResponseBody extends $tea.Model {
  code?: string;
  data?: ListAreaHotSpotMetricsResponseBodyData[];
  message?: string;
  pageNumber?: string;
  pageSize?: string;
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAreaHotSpotMetricsResponseBodyData },
      message: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAreaHotSpotMetricsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAreaHotSpotMetricsResponseBody;
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
      body: ListAreaHotSpotMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapAoisRequest extends $tea.Model {
  latitude?: string;
  longitude?: string;
  radius?: number;
  static names(): { [key: string]: string } {
    return {
      latitude: 'Latitude',
      longitude: 'Longitude',
      radius: 'Radius',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latitude: 'string',
      longitude: 'string',
      radius: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapAoisResponseBody extends $tea.Model {
  code?: string;
  data?: ListCityMapAoisResponseBodyData[];
  message?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListCityMapAoisResponseBodyData },
      message: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapAoisResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCityMapAoisResponseBody;
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
      body: ListCityMapAoisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapCameraResultsRequest extends $tea.Model {
  dataSourceIdList?: { [key: string]: any };
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceIdList: 'DataSourceIdList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceIdList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapCameraResultsShrinkRequest extends $tea.Model {
  dataSourceIdListShrink?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceIdListShrink: 'DataSourceIdList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceIdListShrink: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapCameraResultsResponseBody extends $tea.Model {
  code?: string;
  data?: ListCityMapCameraResultsResponseBodyData[];
  message?: string;
  pageNum?: string;
  pageSize?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListCityMapCameraResultsResponseBodyData },
      message: 'string',
      pageNum: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapCameraResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCityMapCameraResultsResponseBody;
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
      body: ListCityMapCameraResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapCameraStatisticsRequest extends $tea.Model {
  dataSourceIdList?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceIdList: 'DataSourceIdList',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceIdList: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapCameraStatisticsResponseBody extends $tea.Model {
  code?: string;
  data?: ListCityMapCameraStatisticsResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListCityMapCameraStatisticsResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapCameraStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCityMapCameraStatisticsResponseBody;
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
      body: ListCityMapCameraStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapImageDetailsRequest extends $tea.Model {
  dataSourceId?: string;
  recordNumber?: number;
  timeInterval?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      recordNumber: 'RecordNumber',
      timeInterval: 'TimeInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      recordNumber: 'number',
      timeInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapImageDetailsResponseBody extends $tea.Model {
  code?: string;
  data?: ListCityMapImageDetailsResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListCityMapImageDetailsResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapImageDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCityMapImageDetailsResponseBody;
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
      body: ListCityMapImageDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapPersonFlowRequest extends $tea.Model {
  endTime?: string;
  originDataSourceIdList?: { [key: string]: any };
  pageNumber?: number;
  pageSize?: number;
  range?: string;
  startTime?: string;
  targetDataSourceIdList?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      originDataSourceIdList: 'OriginDataSourceIdList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      range: 'Range',
      startTime: 'StartTime',
      targetDataSourceIdList: 'TargetDataSourceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      originDataSourceIdList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      pageNumber: 'number',
      pageSize: 'number',
      range: 'string',
      startTime: 'string',
      targetDataSourceIdList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapPersonFlowShrinkRequest extends $tea.Model {
  endTime?: string;
  originDataSourceIdListShrink?: string;
  pageNumber?: number;
  pageSize?: number;
  range?: string;
  startTime?: string;
  targetDataSourceIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      originDataSourceIdListShrink: 'OriginDataSourceIdList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      range: 'Range',
      startTime: 'StartTime',
      targetDataSourceIdListShrink: 'TargetDataSourceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      originDataSourceIdListShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      range: 'string',
      startTime: 'string',
      targetDataSourceIdListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapPersonFlowResponseBody extends $tea.Model {
  code?: string;
  data?: ListCityMapPersonFlowResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListCityMapPersonFlowResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapPersonFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCityMapPersonFlowResponseBody;
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
      body: ListCityMapPersonFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapRangeStatisticRequest extends $tea.Model {
  endTime?: string;
  latitude?: string;
  longitude?: string;
  pageNumber?: number;
  pageSize?: number;
  radius?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      latitude: 'Latitude',
      longitude: 'Longitude',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      radius: 'Radius',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      latitude: 'string',
      longitude: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      radius: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapRangeStatisticResponseBody extends $tea.Model {
  code?: string;
  data?: ListCityMapRangeStatisticResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListCityMapRangeStatisticResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapRangeStatisticResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCityMapRangeStatisticResponseBody;
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
      body: ListCityMapRangeStatisticResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpMetricsStatisticRequest extends $tea.Model {
  corpId?: string;
  deviceGroupList?: { [key: string]: any };
  deviceIdList?: { [key: string]: any };
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  qualitScore?: string;
  startTime?: string;
  tagCode?: string;
  userGroupList?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      deviceGroupList: 'DeviceGroupList',
      deviceIdList: 'DeviceIdList',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      qualitScore: 'QualitScore',
      startTime: 'StartTime',
      tagCode: 'TagCode',
      userGroupList: 'UserGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      deviceGroupList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      deviceIdList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      qualitScore: 'string',
      startTime: 'string',
      tagCode: 'string',
      userGroupList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpMetricsStatisticShrinkRequest extends $tea.Model {
  corpId?: string;
  deviceGroupListShrink?: string;
  deviceIdListShrink?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  qualitScore?: string;
  startTime?: string;
  tagCode?: string;
  userGroupListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      deviceGroupListShrink: 'DeviceGroupList',
      deviceIdListShrink: 'DeviceIdList',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      qualitScore: 'QualitScore',
      startTime: 'StartTime',
      tagCode: 'TagCode',
      userGroupListShrink: 'UserGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      deviceGroupListShrink: 'string',
      deviceIdListShrink: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      qualitScore: 'string',
      startTime: 'string',
      tagCode: 'string',
      userGroupListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpMetricsStatisticResponseBody extends $tea.Model {
  code?: string;
  data?: ListCorpMetricsStatisticResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListCorpMetricsStatisticResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpMetricsStatisticResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCorpMetricsStatisticResponseBody;
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
      body: ListCorpMetricsStatisticResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataStatisticsRequest extends $tea.Model {
  backCategory?: string;
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      backCategory: 'BackCategory',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backCategory: 'string',
      schema: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataStatisticsResponseBody extends $tea.Model {
  code?: string;
  data?: ListDataStatisticsResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListDataStatisticsResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDataStatisticsResponseBody;
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
      body: ListDataStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataStatisticsByDayRequest extends $tea.Model {
  corpId?: string;
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataStatisticsByDayResponseBody extends $tea.Model {
  code?: string;
  data?: ListDataStatisticsByDayResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListDataStatisticsByDayResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataStatisticsByDayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDataStatisticsByDayResponseBody;
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
      body: ListDataStatisticsByDayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceDetailRequest extends $tea.Model {
  corpId?: string;
  dataSourceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      dataSourceId: 'DataSourceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      dataSourceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceDetailResponseBody extends $tea.Model {
  code?: string;
  data?: ListDeviceDetailResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListDeviceDetailResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDeviceDetailResponseBody;
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
      body: ListDeviceDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceGenderStatisticsRequest extends $tea.Model {
  corpId?: string;
  dataSourceId?: string;
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      dataSourceId: 'DataSourceId',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      dataSourceId: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceGenderStatisticsResponseBody extends $tea.Model {
  code?: string;
  data?: ListDeviceGenderStatisticsResponseBodyData[];
  message?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListDeviceGenderStatisticsResponseBodyData },
      message: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceGenderStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDeviceGenderStatisticsResponseBody;
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
      body: ListDeviceGenderStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicePersonRequest extends $tea.Model {
  corpId?: string;
  dataSourceId?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: string;
  statisticsType?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      dataSourceId: 'DataSourceId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      statisticsType: 'StatisticsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      dataSourceId: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
      statisticsType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicePersonResponseBody extends $tea.Model {
  code?: string;
  data?: ListDevicePersonResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListDevicePersonResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicePersonResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDevicePersonResponseBody;
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
      body: ListDevicePersonResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicePersonStatisticsRequest extends $tea.Model {
  corpId?: string;
  dataSourceId?: string;
  endTime?: string;
  startTime?: string;
  statisticsType?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      dataSourceId: 'DataSourceId',
      endTime: 'EndTime',
      startTime: 'StartTime',
      statisticsType: 'StatisticsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      dataSourceId: 'string',
      endTime: 'string',
      startTime: 'string',
      statisticsType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicePersonStatisticsResponseBody extends $tea.Model {
  code?: string;
  data?: ListDevicePersonStatisticsResponseBodyData[];
  message?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListDevicePersonStatisticsResponseBodyData },
      message: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicePersonStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDevicePersonStatisticsResponseBody;
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
      body: ListDevicePersonStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceRelationRequest extends $tea.Model {
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceRelationResponseBody extends $tea.Model {
  code?: string;
  data?: ListDeviceRelationResponseBodyData[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListDeviceRelationResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDeviceRelationResponseBody;
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
      body: ListDeviceRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMapRouteDetailsRequest extends $tea.Model {
  routeList?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      routeList: 'RouteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMapRouteDetailsShrinkRequest extends $tea.Model {
  routeListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      routeListShrink: 'RouteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMapRouteDetailsResponseBody extends $tea.Model {
  code?: string;
  data?: ListMapRouteDetailsResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListMapRouteDetailsResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMapRouteDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMapRouteDetailsResponseBody;
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
      body: ListMapRouteDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonDetailsRequest extends $tea.Model {
  corpId?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  personId?: string;
  schema?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      personId: 'PersonId',
      schema: 'Schema',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      personId: 'string',
      schema: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonDetailsResponseBody extends $tea.Model {
  code?: string;
  data?: ListPersonDetailsResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListPersonDetailsResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPersonDetailsResponseBody;
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
      body: ListPersonDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonResultRequest extends $tea.Model {
  age?: string;
  corpId?: string;
  endTime?: string;
  gender?: string;
  pageNumber?: number;
  pageSize?: number;
  profession?: string;
  qualityScore?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      age: 'Age',
      corpId: 'CorpId',
      endTime: 'EndTime',
      gender: 'Gender',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      profession: 'Profession',
      qualityScore: 'QualityScore',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      age: 'string',
      corpId: 'string',
      endTime: 'string',
      gender: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      profession: 'string',
      qualityScore: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonResultResponseBody extends $tea.Model {
  code?: string;
  data?: ListPersonResultResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListPersonResultResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPersonResultResponseBody;
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
      body: ListPersonResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTagRequest extends $tea.Model {
  corpId?: string;
  pageNumber?: number;
  pageSize?: number;
  tagCode?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tagCode: 'TagCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      tagCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTagResponseBody extends $tea.Model {
  code?: string;
  data?: ListPersonTagResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListPersonTagResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPersonTagResponseBody;
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
      body: ListPersonTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTopRequest extends $tea.Model {
  corpId?: string;
  endTime?: string;
  personId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      endTime: 'EndTime',
      personId: 'PersonId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      endTime: 'string',
      personId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTopResponseBody extends $tea.Model {
  code?: string;
  data?: ListPersonTopResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListPersonTopResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTopResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPersonTopResponseBody;
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
      body: ListPersonTopResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTrackRequest extends $tea.Model {
  aggregateDimension?: string;
  corpId?: string;
  endTime?: string;
  imageSourceType?: string;
  pageNumber?: number;
  pageSize?: number;
  personId?: string;
  qualityScore?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      aggregateDimension: 'AggregateDimension',
      corpId: 'CorpId',
      endTime: 'EndTime',
      imageSourceType: 'ImageSourceType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      personId: 'PersonId',
      qualityScore: 'QualityScore',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregateDimension: 'string',
      corpId: 'string',
      endTime: 'string',
      imageSourceType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      personId: 'string',
      qualityScore: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTrackResponseBody extends $tea.Model {
  code?: string;
  data?: ListPersonTrackResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListPersonTrackResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTrackResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPersonTrackResponseBody;
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
      body: ListPersonTrackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRangeDeviceRequest extends $tea.Model {
  corpId?: string;
  dataSourceId?: string;
  pageNumber?: number;
  pageSize?: number;
  radius?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      dataSourceId: 'DataSourceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      radius: 'Radius',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      dataSourceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      radius: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRangeDeviceResponseBody extends $tea.Model {
  code?: string;
  data?: ListRangeDeviceResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListRangeDeviceResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRangeDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRangeDeviceResponseBody;
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
      body: ListRangeDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStorageStatisticsRequest extends $tea.Model {
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStorageStatisticsResponseBody extends $tea.Model {
  code?: string;
  data?: ListStorageStatisticsResponseBodyData[];
  message?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListStorageStatisticsResponseBodyData },
      message: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStorageStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListStorageStatisticsResponseBody;
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
      body: ListStorageStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStructureStatisticsRequest extends $tea.Model {
  backCategory?: string;
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      backCategory: 'BackCategory',
      corpId: 'CorpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backCategory: 'string',
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStructureStatisticsResponseBody extends $tea.Model {
  code?: string;
  data?: ListStructureStatisticsResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListStructureStatisticsResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStructureStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListStructureStatisticsResponseBody;
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
      body: ListStructureStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagMetricsRequest extends $tea.Model {
  aggregateType?: string;
  corpId?: string;
  endTime?: string;
  pageNumber?: string;
  pageSize?: string;
  startTime?: string;
  tagCode?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      aggregateType: 'AggregateType',
      corpId: 'CorpId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      tagCode: 'TagCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregateType: 'string',
      corpId: 'string',
      endTime: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      startTime: 'string',
      tagCode: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagMetricsShrinkRequest extends $tea.Model {
  aggregateType?: string;
  corpId?: string;
  endTime?: string;
  pageNumber?: string;
  pageSize?: string;
  startTime?: string;
  tagCodeShrink?: string;
  static names(): { [key: string]: string } {
    return {
      aggregateType: 'AggregateType',
      corpId: 'CorpId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      tagCodeShrink: 'TagCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregateType: 'string',
      corpId: 'string',
      endTime: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      startTime: 'string',
      tagCodeShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagMetricsResponseBody extends $tea.Model {
  code?: string;
  data?: ListTagMetricsResponseBodyData[];
  message?: string;
  pageNumber?: string;
  pageSize?: string;
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListTagMetricsResponseBodyData },
      message: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagMetricsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTagMetricsResponseBody;
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
      body: ListTagMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleDetailsRequest extends $tea.Model {
  corpId?: string;
  endTime?: string;
  pageNumber?: string;
  pageSize?: string;
  plateId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      plateId: 'PlateId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      endTime: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      plateId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleDetailsResponseBody extends $tea.Model {
  code?: string;
  data?: ListVehicleDetailsResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListVehicleDetailsResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListVehicleDetailsResponseBody;
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
      body: ListVehicleDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleResultsRequest extends $tea.Model {
  corpId?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: string;
  vehicleApplication?: string;
  vehicleClass?: string;
  vehicleColor?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      vehicleApplication: 'VehicleApplication',
      vehicleClass: 'VehicleClass',
      vehicleColor: 'VehicleColor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
      vehicleApplication: 'string',
      vehicleClass: 'string',
      vehicleColor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleResultsResponseBody extends $tea.Model {
  code?: string;
  data?: ListVehicleResultsResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListVehicleResultsResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListVehicleResultsResponseBody;
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
      body: ListVehicleResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleTagDistributeRequest extends $tea.Model {
  corpId?: string;
  endTime?: string;
  startTime?: string;
  tagCode?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      endTime: 'EndTime',
      startTime: 'StartTime',
      tagCode: 'TagCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      endTime: 'string',
      startTime: 'string',
      tagCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleTagDistributeResponseBody extends $tea.Model {
  code?: string;
  data?: ListVehicleTagDistributeResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListVehicleTagDistributeResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleTagDistributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListVehicleTagDistributeResponseBody;
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
      body: ListVehicleTagDistributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleTopRequest extends $tea.Model {
  corpId?: string;
  endTime?: string;
  pageNum?: string;
  pageSize?: string;
  plateId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      endTime: 'EndTime',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      plateId: 'PlateId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      endTime: 'string',
      pageNum: 'string',
      pageSize: 'string',
      plateId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleTopResponseBody extends $tea.Model {
  code?: string;
  data?: ListVehicleTopResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListVehicleTopResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleTopResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListVehicleTopResponseBody;
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
      body: ListVehicleTopResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleTrackRequest extends $tea.Model {
  corpId?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  plateId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      plateId: 'PlateId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      plateId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleTrackResponseBody extends $tea.Model {
  code?: string;
  data?: ListVehicleTrackResponseBodyData[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListVehicleTrackResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleTrackResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListVehicleTrackResponseBody;
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
      body: ListVehicleTrackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaginateDeviceRequest extends $tea.Model {
  corpId?: string;
  countTotalNum?: boolean;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      countTotalNum: 'CountTotalNum',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      countTotalNum: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaginateDeviceResponseBody extends $tea.Model {
  code?: string;
  data?: PaginateDeviceResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: PaginateDeviceResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaginateDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PaginateDeviceResponseBody;
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
      body: PaginateDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaginateProjectRequest extends $tea.Model {
  countTotalNum?: boolean;
  nameLike?: string;
  pageNumber?: number;
  pageSize?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      countTotalNum: 'CountTotalNum',
      nameLike: 'NameLike',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countTotalNum: 'boolean',
      nameLike: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaginateProjectResponseBody extends $tea.Model {
  code?: string;
  data?: PaginateProjectResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: PaginateProjectResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaginateProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PaginateProjectResponseBody;
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
      body: PaginateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictTrajectoryDestinationRequest extends $tea.Model {
  corpId?: string;
  idType?: string;
  idValue?: string;
  predictTimeSpan?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      idType: 'IdType',
      idValue: 'IdValue',
      predictTimeSpan: 'PredictTimeSpan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      idType: 'string',
      idValue: 'string',
      predictTimeSpan: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictTrajectoryDestinationResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictTrajectoryDestinationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PredictTrajectoryDestinationResponseBody;
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
      body: PredictTrajectoryDestinationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrajectoryByIdRequest extends $tea.Model {
  corpId?: string;
  deviceList?: QueryTrajectoryByIdRequestDeviceList[];
  endTime?: string;
  idList?: QueryTrajectoryByIdRequestIdList[];
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      deviceList: 'DeviceList',
      endTime: 'EndTime',
      idList: 'IdList',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      deviceList: { 'type': 'array', 'itemType': QueryTrajectoryByIdRequestDeviceList },
      endTime: 'string',
      idList: { 'type': 'array', 'itemType': QueryTrajectoryByIdRequestIdList },
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrajectoryByIdResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrajectoryByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTrajectoryByIdResponseBody;
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
      body: QueryTrajectoryByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallTrajectoryByCoordinateTimeRequest extends $tea.Model {
  corpId?: string;
  endTime?: string;
  outputIdCount?: number;
  outputIdTypeList?: string[];
  pointList?: RecallTrajectoryByCoordinateTimeRequestPointList[];
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      endTime: 'EndTime',
      outputIdCount: 'OutputIdCount',
      outputIdTypeList: 'OutputIdTypeList',
      pointList: 'PointList',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      endTime: 'string',
      outputIdCount: 'number',
      outputIdTypeList: { 'type': 'array', 'itemType': 'string' },
      pointList: { 'type': 'array', 'itemType': RecallTrajectoryByCoordinateTimeRequestPointList },
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallTrajectoryByCoordinateTimeResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallTrajectoryByCoordinateTimeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecallTrajectoryByCoordinateTimeResponseBody;
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
      body: RecallTrajectoryByCoordinateTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageRequest extends $tea.Model {
  corpId?: string;
  imageContent?: string;
  imageUrl?: string;
  recognizeType?: string;
  requireCropImage?: boolean;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      imageContent: 'ImageContent',
      imageUrl: 'ImageUrl',
      recognizeType: 'RecognizeType',
      requireCropImage: 'RequireCropImage',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      imageContent: 'string',
      imageUrl: 'string',
      recognizeType: 'string',
      requireCropImage: 'boolean',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageResponseBody extends $tea.Model {
  code?: string;
  data?: RecognizeImageResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RecognizeImageResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecognizeImageResponseBody;
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
      body: RecognizeImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAggregateObjectRequest extends $tea.Model {
  attributes?: string;
  corpId?: string;
  deviceList?: string;
  feature?: string;
  imageContent?: string;
  imageUrl?: string;
  objectType?: string;
  pageNumber?: number;
  pageSize?: number;
  requireTotalCount?: boolean;
  shotTimeEnd?: string;
  shotTimeStart?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      corpId: 'CorpId',
      deviceList: 'DeviceList',
      feature: 'Feature',
      imageContent: 'ImageContent',
      imageUrl: 'ImageUrl',
      objectType: 'ObjectType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requireTotalCount: 'RequireTotalCount',
      shotTimeEnd: 'ShotTimeEnd',
      shotTimeStart: 'ShotTimeStart',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'string',
      corpId: 'string',
      deviceList: 'string',
      feature: 'string',
      imageContent: 'string',
      imageUrl: 'string',
      objectType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requireTotalCount: 'boolean',
      shotTimeEnd: 'string',
      shotTimeStart: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAggregateObjectResponseBody extends $tea.Model {
  code?: string;
  data?: SearchAggregateObjectResponseBodyData;
  message?: string;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SearchAggregateObjectResponseBodyData,
      message: 'string',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAggregateObjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchAggregateObjectResponseBody;
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
      body: SearchAggregateObjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchObjectRequest extends $tea.Model {
  attributes?: string;
  corpId?: string;
  deviceList?: string;
  feature?: string;
  imageContent?: string;
  imageUrl?: string;
  objectType?: string;
  pageNumber?: number;
  pageSize?: number;
  shotTimeEnd?: string;
  shotTimeStart?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      corpId: 'CorpId',
      deviceList: 'DeviceList',
      feature: 'Feature',
      imageContent: 'ImageContent',
      imageUrl: 'ImageUrl',
      objectType: 'ObjectType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      shotTimeEnd: 'ShotTimeEnd',
      shotTimeStart: 'ShotTimeStart',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'string',
      corpId: 'string',
      deviceList: 'string',
      feature: 'string',
      imageContent: 'string',
      imageUrl: 'string',
      objectType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      shotTimeEnd: 'string',
      shotTimeStart: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchObjectResponseBody extends $tea.Model {
  code?: string;
  data?: SearchObjectResponseBodyData;
  message?: string;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SearchObjectResponseBodyData,
      message: 'string',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchObjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchObjectResponseBody;
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
      body: SearchObjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCdrsMonitorRequest extends $tea.Model {
  algorithmVendor?: string;
  corpId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmVendor: 'AlgorithmVendor',
      corpId: 'CorpId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmVendor: 'string',
      corpId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCdrsMonitorResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCdrsMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopCdrsMonitorResponseBody;
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
      body: StopCdrsMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMonitorRequest extends $tea.Model {
  algorithmVendor?: string;
  corpId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmVendor: 'AlgorithmVendor',
      corpId: 'CorpId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmVendor: 'string',
      corpId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMonitorResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopMonitorResponseBody;
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
      body: StopMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDeviceRequest extends $tea.Model {
  corpId?: string;
  deviceIds?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      deviceIds: 'DeviceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      deviceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDeviceResponseBody extends $tea.Model {
  code?: string;
  data?: UnbindDeviceResponseBodyData[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': UnbindDeviceResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnbindDeviceResponseBody;
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
      body: UnbindDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCdrsMonitorRequest extends $tea.Model {
  algorithmVendor?: string;
  attributeName?: string;
  attributeOperateType?: string;
  attributeValueList?: string;
  corpId?: string;
  description?: string;
  deviceList?: string;
  deviceOperateType?: string;
  notifierAppSecret?: string;
  notifierExtendValues?: string;
  notifierTimeOut?: number;
  notifierType?: string;
  notifierUrl?: string;
  picList?: string;
  picOperateType?: string;
  ruleExpression?: string;
  ruleName?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmVendor: 'AlgorithmVendor',
      attributeName: 'AttributeName',
      attributeOperateType: 'AttributeOperateType',
      attributeValueList: 'AttributeValueList',
      corpId: 'CorpId',
      description: 'Description',
      deviceList: 'DeviceList',
      deviceOperateType: 'DeviceOperateType',
      notifierAppSecret: 'NotifierAppSecret',
      notifierExtendValues: 'NotifierExtendValues',
      notifierTimeOut: 'NotifierTimeOut',
      notifierType: 'NotifierType',
      notifierUrl: 'NotifierUrl',
      picList: 'PicList',
      picOperateType: 'PicOperateType',
      ruleExpression: 'RuleExpression',
      ruleName: 'RuleName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmVendor: 'string',
      attributeName: 'string',
      attributeOperateType: 'string',
      attributeValueList: 'string',
      corpId: 'string',
      description: 'string',
      deviceList: 'string',
      deviceOperateType: 'string',
      notifierAppSecret: 'string',
      notifierExtendValues: 'string',
      notifierTimeOut: 'number',
      notifierType: 'string',
      notifierUrl: 'string',
      picList: 'string',
      picOperateType: 'string',
      ruleExpression: 'string',
      ruleName: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCdrsMonitorResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCdrsMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateCdrsMonitorResponseBody;
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
      body: UpdateCdrsMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMonitorRequest extends $tea.Model {
  algorithmVendor?: string;
  attributeName?: string;
  attributeOperateType?: string;
  attributeValueList?: string;
  corpId?: string;
  description?: string;
  deviceList?: string;
  deviceOperateType?: string;
  notifierAppSecret?: string;
  notifierExtendValues?: string;
  notifierTimeOut?: number;
  notifierType?: string;
  notifierUrl?: string;
  picExtendList?: string;
  picList?: string;
  picOperateType?: string;
  ruleExpression?: string;
  ruleName?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmVendor: 'AlgorithmVendor',
      attributeName: 'AttributeName',
      attributeOperateType: 'AttributeOperateType',
      attributeValueList: 'AttributeValueList',
      corpId: 'CorpId',
      description: 'Description',
      deviceList: 'DeviceList',
      deviceOperateType: 'DeviceOperateType',
      notifierAppSecret: 'NotifierAppSecret',
      notifierExtendValues: 'NotifierExtendValues',
      notifierTimeOut: 'NotifierTimeOut',
      notifierType: 'NotifierType',
      notifierUrl: 'NotifierUrl',
      picExtendList: 'PicExtendList',
      picList: 'PicList',
      picOperateType: 'PicOperateType',
      ruleExpression: 'RuleExpression',
      ruleName: 'RuleName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmVendor: 'string',
      attributeName: 'string',
      attributeOperateType: 'string',
      attributeValueList: 'string',
      corpId: 'string',
      description: 'string',
      deviceList: 'string',
      deviceOperateType: 'string',
      notifierAppSecret: 'string',
      notifierExtendValues: 'string',
      notifierTimeOut: 'number',
      notifierType: 'string',
      notifierUrl: 'string',
      picExtendList: 'string',
      picList: 'string',
      picOperateType: 'string',
      ruleExpression: 'string',
      ruleName: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMonitorResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateMonitorResponseBody;
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
      body: UpdateMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectRequest extends $tea.Model {
  aggregateSceneCode?: string;
  corpId?: string;
  description?: string;
  icon?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      aggregateSceneCode: 'AggregateSceneCode',
      corpId: 'CorpId',
      description: 'Description',
      icon: 'Icon',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregateSceneCode: 'string',
      corpId: 'string',
      description: 'string',
      icon: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateProjectResponseBody;
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
      body: UpdateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCdrsMonitorResponseBodyData extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMonitorResponseBodyData extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindDeviceRequestDevices extends $tea.Model {
  corpId?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindDeviceResponseBodyData extends $tea.Model {
  code?: string;
  deviceId?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      deviceId: 'DeviceId',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      deviceId: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCdrsMonitorListResponseBodyDataRecords extends $tea.Model {
  algorithmVendor?: string;
  attributes?: string;
  createDate?: string;
  description?: string;
  deviceList?: string;
  expression?: string;
  imageMatch?: string;
  modifiedDate?: string;
  monitorType?: string;
  notifierExtra?: string;
  notifierType?: string;
  ruleExpression?: string;
  ruleName?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmVendor: 'AlgorithmVendor',
      attributes: 'Attributes',
      createDate: 'CreateDate',
      description: 'Description',
      deviceList: 'DeviceList',
      expression: 'Expression',
      imageMatch: 'ImageMatch',
      modifiedDate: 'ModifiedDate',
      monitorType: 'MonitorType',
      notifierExtra: 'NotifierExtra',
      notifierType: 'NotifierType',
      ruleExpression: 'RuleExpression',
      ruleName: 'RuleName',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmVendor: 'string',
      attributes: 'string',
      createDate: 'string',
      description: 'string',
      deviceList: 'string',
      expression: 'string',
      imageMatch: 'string',
      modifiedDate: 'string',
      monitorType: 'string',
      notifierExtra: 'string',
      notifierType: 'string',
      ruleExpression: 'string',
      ruleName: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCdrsMonitorListResponseBodyData extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  records?: GetCdrsMonitorListResponseBodyDataRecords[];
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      records: 'Records',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': GetCdrsMonitorListResponseBodyDataRecords },
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCdrsMonitorResultResponseBodyDataRecordsExtendInfo extends $tea.Model {
  plateNo?: string;
  static names(): { [key: string]: string } {
    return {
      plateNo: 'PlateNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      plateNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCdrsMonitorResultResponseBodyDataRecords extends $tea.Model {
  extendInfo?: GetCdrsMonitorResultResponseBodyDataRecordsExtendInfo;
  gbId?: string;
  leftUpX?: string;
  leftUpY?: string;
  monitorPicUrl?: string;
  picUrl?: string;
  rightBottomX?: string;
  rightBottomY?: string;
  score?: string;
  shotTime?: string;
  targetPicUrl?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      extendInfo: 'ExtendInfo',
      gbId: 'GbId',
      leftUpX: 'LeftUpX',
      leftUpY: 'LeftUpY',
      monitorPicUrl: 'MonitorPicUrl',
      picUrl: 'PicUrl',
      rightBottomX: 'RightBottomX',
      rightBottomY: 'RightBottomY',
      score: 'Score',
      shotTime: 'ShotTime',
      targetPicUrl: 'TargetPicUrl',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendInfo: GetCdrsMonitorResultResponseBodyDataRecordsExtendInfo,
      gbId: 'string',
      leftUpX: 'string',
      leftUpY: 'string',
      monitorPicUrl: 'string',
      picUrl: 'string',
      rightBottomX: 'string',
      rightBottomY: 'string',
      score: 'string',
      shotTime: 'string',
      targetPicUrl: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCdrsMonitorResultResponseBodyData extends $tea.Model {
  maxId?: string;
  records?: GetCdrsMonitorResultResponseBodyDataRecords[];
  static names(): { [key: string]: string } {
    return {
      maxId: 'MaxId',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxId: 'string',
      records: { 'type': 'array', 'itemType': GetCdrsMonitorResultResponseBodyDataRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorListResponseBodyDataRecords extends $tea.Model {
  algorithmVendor?: string;
  attributes?: string;
  createDate?: string;
  description?: string;
  deviceList?: string;
  expression?: string;
  imageMatch?: string;
  modifiedDate?: string;
  monitorType?: string;
  notifierExtra?: string;
  notifierType?: string;
  ruleExpression?: string;
  ruleName?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmVendor: 'AlgorithmVendor',
      attributes: 'Attributes',
      createDate: 'CreateDate',
      description: 'Description',
      deviceList: 'DeviceList',
      expression: 'Expression',
      imageMatch: 'ImageMatch',
      modifiedDate: 'ModifiedDate',
      monitorType: 'MonitorType',
      notifierExtra: 'NotifierExtra',
      notifierType: 'NotifierType',
      ruleExpression: 'RuleExpression',
      ruleName: 'RuleName',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmVendor: 'string',
      attributes: 'string',
      createDate: 'string',
      description: 'string',
      deviceList: 'string',
      expression: 'string',
      imageMatch: 'string',
      modifiedDate: 'string',
      monitorType: 'string',
      notifierExtra: 'string',
      notifierType: 'string',
      ruleExpression: 'string',
      ruleName: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorListResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  records?: GetMonitorListResponseBodyDataRecords[];
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      records: 'Records',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': GetMonitorListResponseBodyDataRecords },
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorResultResponseBodyDataRecordsExtendInfo extends $tea.Model {
  plateNo?: string;
  static names(): { [key: string]: string } {
    return {
      plateNo: 'PlateNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      plateNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorResultResponseBodyDataRecords extends $tea.Model {
  extendInfo?: GetMonitorResultResponseBodyDataRecordsExtendInfo;
  gbId?: string;
  leftUpX?: string;
  leftUpY?: string;
  monitorPicUrl?: string;
  picUrl?: string;
  rightBottomX?: string;
  rightBottomY?: string;
  score?: string;
  shotTime?: string;
  targetPicUrl?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      extendInfo: 'ExtendInfo',
      gbId: 'GbId',
      leftUpX: 'LeftUpX',
      leftUpY: 'LeftUpY',
      monitorPicUrl: 'MonitorPicUrl',
      picUrl: 'PicUrl',
      rightBottomX: 'RightBottomX',
      rightBottomY: 'RightBottomY',
      score: 'Score',
      shotTime: 'ShotTime',
      targetPicUrl: 'TargetPicUrl',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendInfo: GetMonitorResultResponseBodyDataRecordsExtendInfo,
      gbId: 'string',
      leftUpX: 'string',
      leftUpY: 'string',
      monitorPicUrl: 'string',
      picUrl: 'string',
      rightBottomX: 'string',
      rightBottomY: 'string',
      score: 'string',
      shotTime: 'string',
      targetPicUrl: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorResultResponseBodyData extends $tea.Model {
  maxId?: string;
  records?: GetMonitorResultResponseBodyDataRecords[];
  static names(): { [key: string]: string } {
    return {
      maxId: 'MaxId',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxId: 'string',
      records: { 'type': 'array', 'itemType': GetMonitorResultResponseBodyDataRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAreaHotSpotMetricsResponseBodyData extends $tea.Model {
  coordinates?: string;
  deviceId?: string;
  intervalTime?: string;
  personId?: string;
  times?: string;
  static names(): { [key: string]: string } {
    return {
      coordinates: 'Coordinates',
      deviceId: 'DeviceId',
      intervalTime: 'IntervalTime',
      personId: 'PersonId',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coordinates: 'string',
      deviceId: 'string',
      intervalTime: 'string',
      personId: 'string',
      times: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapAoisResponseBodyData extends $tea.Model {
  id?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapCameraResultsResponseBodyData extends $tea.Model {
  corpId?: string;
  dataSourceId?: string;
  dataSourceName?: string;
  dataSourcePoi?: string;
  latitude?: string;
  longitude?: string;
  nearPoi?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      dataSourceId: 'DataSourceId',
      dataSourceName: 'DataSourceName',
      dataSourcePoi: 'DataSourcePoi',
      latitude: 'Latitude',
      longitude: 'Longitude',
      nearPoi: 'NearPoi',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      dataSourceId: 'string',
      dataSourceName: 'string',
      dataSourcePoi: 'string',
      latitude: 'string',
      longitude: 'string',
      nearPoi: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapCameraStatisticsResponseBodyData extends $tea.Model {
  adultValue?: string;
  childValue?: string;
  corpId?: string;
  dataSourceId?: string;
  dataSourceName?: string;
  latitude?: string;
  longitude?: string;
  manValue?: string;
  motorValue?: string;
  oldValue?: string;
  statisticTime?: string;
  womanValue?: string;
  static names(): { [key: string]: string } {
    return {
      adultValue: 'AdultValue',
      childValue: 'ChildValue',
      corpId: 'CorpId',
      dataSourceId: 'DataSourceId',
      dataSourceName: 'DataSourceName',
      latitude: 'Latitude',
      longitude: 'Longitude',
      manValue: 'ManValue',
      motorValue: 'MotorValue',
      oldValue: 'OldValue',
      statisticTime: 'StatisticTime',
      womanValue: 'WomanValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adultValue: 'string',
      childValue: 'string',
      corpId: 'string',
      dataSourceId: 'string',
      dataSourceName: 'string',
      latitude: 'string',
      longitude: 'string',
      manValue: 'string',
      motorValue: 'string',
      oldValue: 'string',
      statisticTime: 'string',
      womanValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapImageDetailsResponseBodyData extends $tea.Model {
  ageCodeReliability?: string;
  ageLowerLimit?: string;
  ageLowerLimitReliability?: string;
  ageUpLimit?: string;
  coatColor?: string;
  coatColorReliability?: string;
  dataSourceId?: string;
  faceTargetImageStoragePath?: string;
  gender?: string;
  genderCodeReliability?: string;
  leftTopX?: string;
  leftTopY?: string;
  motorTargetImageStoragePath?: string;
  personTargetImageStoragePath?: string;
  recordId?: string;
  rightBottomX?: string;
  rightBottomY?: string;
  shotTime?: string;
  sourceImageStoragePath?: string;
  trousersColor?: string;
  trousersColorReliability?: string;
  vehicleClass?: string;
  vehicleClassReliability?: string;
  vehicleColor?: string;
  vehicleColorReliability?: string;
  static names(): { [key: string]: string } {
    return {
      ageCodeReliability: 'AgeCodeReliability',
      ageLowerLimit: 'AgeLowerLimit',
      ageLowerLimitReliability: 'AgeLowerLimitReliability',
      ageUpLimit: 'AgeUpLimit',
      coatColor: 'CoatColor',
      coatColorReliability: 'CoatColorReliability',
      dataSourceId: 'DataSourceId',
      faceTargetImageStoragePath: 'FaceTargetImageStoragePath',
      gender: 'Gender',
      genderCodeReliability: 'GenderCodeReliability',
      leftTopX: 'LeftTopX',
      leftTopY: 'LeftTopY',
      motorTargetImageStoragePath: 'MotorTargetImageStoragePath',
      personTargetImageStoragePath: 'PersonTargetImageStoragePath',
      recordId: 'RecordId',
      rightBottomX: 'RightBottomX',
      rightBottomY: 'RightBottomY',
      shotTime: 'ShotTime',
      sourceImageStoragePath: 'SourceImageStoragePath',
      trousersColor: 'TrousersColor',
      trousersColorReliability: 'TrousersColorReliability',
      vehicleClass: 'VehicleClass',
      vehicleClassReliability: 'VehicleClassReliability',
      vehicleColor: 'VehicleColor',
      vehicleColorReliability: 'VehicleColorReliability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ageCodeReliability: 'string',
      ageLowerLimit: 'string',
      ageLowerLimitReliability: 'string',
      ageUpLimit: 'string',
      coatColor: 'string',
      coatColorReliability: 'string',
      dataSourceId: 'string',
      faceTargetImageStoragePath: 'string',
      gender: 'string',
      genderCodeReliability: 'string',
      leftTopX: 'string',
      leftTopY: 'string',
      motorTargetImageStoragePath: 'string',
      personTargetImageStoragePath: 'string',
      recordId: 'string',
      rightBottomX: 'string',
      rightBottomY: 'string',
      shotTime: 'string',
      sourceImageStoragePath: 'string',
      trousersColor: 'string',
      trousersColorReliability: 'string',
      vehicleClass: 'string',
      vehicleClassReliability: 'string',
      vehicleColor: 'string',
      vehicleColorReliability: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapPersonFlowResponseBodyData extends $tea.Model {
  flowDirection?: string;
  flowNumber?: string;
  originDataSourceId?: string;
  targetDataSourceId?: string;
  static names(): { [key: string]: string } {
    return {
      flowDirection: 'FlowDirection',
      flowNumber: 'FlowNumber',
      originDataSourceId: 'OriginDataSourceId',
      targetDataSourceId: 'TargetDataSourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowDirection: 'string',
      flowNumber: 'string',
      originDataSourceId: 'string',
      targetDataSourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapRangeStatisticResponseBodyData extends $tea.Model {
  adultValue?: string;
  childValue?: string;
  corpId?: string;
  dataSourceId?: string;
  dataSourceName?: string;
  latitude?: string;
  longitude?: string;
  manValue?: string;
  motorValue?: string;
  oldValue?: string;
  womanValue?: string;
  static names(): { [key: string]: string } {
    return {
      adultValue: 'AdultValue',
      childValue: 'ChildValue',
      corpId: 'CorpId',
      dataSourceId: 'DataSourceId',
      dataSourceName: 'DataSourceName',
      latitude: 'Latitude',
      longitude: 'Longitude',
      manValue: 'ManValue',
      motorValue: 'MotorValue',
      oldValue: 'OldValue',
      womanValue: 'WomanValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adultValue: 'string',
      childValue: 'string',
      corpId: 'string',
      dataSourceId: 'string',
      dataSourceName: 'string',
      latitude: 'string',
      longitude: 'string',
      manValue: 'string',
      motorValue: 'string',
      oldValue: 'string',
      womanValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpMetricsStatisticResponseBodyData extends $tea.Model {
  corpId?: string;
  dateId?: string;
  deviceGroupId?: string;
  deviceId?: string;
  personId?: string;
  tagCode?: string;
  tagMetrics?: string;
  tagValue?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      dateId: 'DateId',
      deviceGroupId: 'DeviceGroupId',
      deviceId: 'DeviceId',
      personId: 'PersonId',
      tagCode: 'TagCode',
      tagMetrics: 'TagMetrics',
      tagValue: 'TagValue',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      dateId: 'string',
      deviceGroupId: 'string',
      deviceId: 'string',
      personId: 'string',
      tagCode: 'string',
      tagMetrics: 'string',
      tagValue: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataStatisticsResponseBodyData extends $tea.Model {
  corpId?: string;
  number?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      number: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataStatisticsByDayResponseBodyData extends $tea.Model {
  bodyNumber?: number;
  corpId?: string;
  date?: string;
  faceNumber?: number;
  motorNumber?: number;
  nonMotorNumber?: number;
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      bodyNumber: 'BodyNumber',
      corpId: 'CorpId',
      date: 'Date',
      faceNumber: 'FaceNumber',
      motorNumber: 'MotorNumber',
      nonMotorNumber: 'NonMotorNumber',
      totalNumber: 'TotalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyNumber: 'number',
      corpId: 'string',
      date: 'string',
      faceNumber: 'number',
      motorNumber: 'number',
      nonMotorNumber: 'number',
      totalNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceDetailResponseBodyData extends $tea.Model {
  corpId?: string;
  dataSourceId?: string;
  dataSourceName?: string;
  dataSourcePoi?: string;
  latitude?: string;
  longitude?: string;
  nearPoi?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      dataSourceId: 'DataSourceId',
      dataSourceName: 'DataSourceName',
      dataSourcePoi: 'DataSourcePoi',
      latitude: 'Latitude',
      longitude: 'Longitude',
      nearPoi: 'NearPoi',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      dataSourceId: 'string',
      dataSourceName: 'string',
      dataSourcePoi: 'string',
      latitude: 'string',
      longitude: 'string',
      nearPoi: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceGenderStatisticsResponseBodyData extends $tea.Model {
  dataSourceId?: string;
  gender?: string;
  number?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      gender: 'Gender',
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      gender: 'string',
      number: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicePersonResponseBodyData extends $tea.Model {
  dataSourceId?: string;
  freqNum?: string;
  gender?: string;
  personId?: string;
  targetPicUrlPath?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      freqNum: 'FreqNum',
      gender: 'Gender',
      personId: 'PersonId',
      targetPicUrlPath: 'TargetPicUrlPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      freqNum: 'string',
      gender: 'string',
      personId: 'string',
      targetPicUrlPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicePersonStatisticsResponseBodyData extends $tea.Model {
  dataSourceId?: string;
  number?: string;
  shotTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      number: 'Number',
      shotTime: 'ShotTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      number: 'string',
      shotTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceRelationResponseBodyData extends $tea.Model {
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMapRouteDetailsResponseBodyData extends $tea.Model {
  destination?: string;
  origin?: string;
  route?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      destination: 'Destination',
      origin: 'Origin',
      route: 'Route',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destination: 'string',
      origin: 'string',
      route: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonDetailsResponseBodyData extends $tea.Model {
  address?: string;
  age?: string;
  bodySourceImage?: string;
  bodyTargetImage?: string;
  faceSourceImage?: string;
  faceTargetImage?: string;
  gender?: string;
  hotSpotAddress?: string;
  personId?: string;
  personType?: string;
  prefOutTime?: string;
  preferredColor?: string;
  profession?: string;
  transportation?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      age: 'Age',
      bodySourceImage: 'BodySourceImage',
      bodyTargetImage: 'BodyTargetImage',
      faceSourceImage: 'FaceSourceImage',
      faceTargetImage: 'FaceTargetImage',
      gender: 'Gender',
      hotSpotAddress: 'HotSpotAddress',
      personId: 'PersonId',
      personType: 'PersonType',
      prefOutTime: 'PrefOutTime',
      preferredColor: 'PreferredColor',
      profession: 'Profession',
      transportation: 'Transportation',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      age: 'string',
      bodySourceImage: 'string',
      bodyTargetImage: 'string',
      faceSourceImage: 'string',
      faceTargetImage: 'string',
      gender: 'string',
      hotSpotAddress: 'string',
      personId: 'string',
      personType: 'string',
      prefOutTime: 'string',
      preferredColor: 'string',
      profession: 'string',
      transportation: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonResultResponseBodyData extends $tea.Model {
  address?: string;
  age?: string;
  gender?: string;
  hotSpotAddress?: string;
  personId?: string;
  personType?: string;
  profession?: string;
  sourceUrl?: string;
  targetUrl?: string;
  transportation?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      age: 'Age',
      gender: 'Gender',
      hotSpotAddress: 'HotSpotAddress',
      personId: 'PersonId',
      personType: 'PersonType',
      profession: 'Profession',
      sourceUrl: 'SourceUrl',
      targetUrl: 'TargetUrl',
      transportation: 'Transportation',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      age: 'string',
      gender: 'string',
      hotSpotAddress: 'string',
      personId: 'string',
      personType: 'string',
      profession: 'string',
      sourceUrl: 'string',
      targetUrl: 'string',
      transportation: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTagResponseBodyData extends $tea.Model {
  corpId?: string;
  tagValue?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      tagValue: 'TagValue',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      tagValue: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTopResponseBodyData extends $tea.Model {
  corpId?: string;
  frequency?: string;
  passHour?: string;
  personId?: string;
  poiId?: string;
  poiName?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      frequency: 'Frequency',
      passHour: 'PassHour',
      personId: 'PersonId',
      poiId: 'PoiId',
      poiName: 'PoiName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      frequency: 'string',
      passHour: 'string',
      personId: 'string',
      poiId: 'string',
      poiName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTrackResponseBodyData extends $tea.Model {
  corpId?: string;
  dataSourceId?: string;
  dataSourceName?: string;
  latitude?: string;
  leftTopX?: string;
  leftTopY?: string;
  longitude?: string;
  personId?: string;
  picUrlPath?: string;
  rightBottomX?: string;
  rightBottomY?: string;
  shotTime?: string;
  sourceUrl?: string;
  tagAge?: string;
  tagGender?: string;
  targetPicUrlPath?: string;
  targetUrl?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      dataSourceId: 'DataSourceId',
      dataSourceName: 'DataSourceName',
      latitude: 'Latitude',
      leftTopX: 'LeftTopX',
      leftTopY: 'LeftTopY',
      longitude: 'Longitude',
      personId: 'PersonId',
      picUrlPath: 'PicUrlPath',
      rightBottomX: 'RightBottomX',
      rightBottomY: 'RightBottomY',
      shotTime: 'ShotTime',
      sourceUrl: 'SourceUrl',
      tagAge: 'TagAge',
      tagGender: 'TagGender',
      targetPicUrlPath: 'TargetPicUrlPath',
      targetUrl: 'TargetUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      dataSourceId: 'string',
      dataSourceName: 'string',
      latitude: 'string',
      leftTopX: 'string',
      leftTopY: 'string',
      longitude: 'string',
      personId: 'string',
      picUrlPath: 'string',
      rightBottomX: 'string',
      rightBottomY: 'string',
      shotTime: 'string',
      sourceUrl: 'string',
      tagAge: 'string',
      tagGender: 'string',
      targetPicUrlPath: 'string',
      targetUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRangeDeviceResponseBodyData extends $tea.Model {
  corpId?: string;
  dataSourceId?: string;
  dataSourceIdName?: string;
  dataSourceIdPoi?: string;
  distance?: string;
  latitude?: string;
  longitude?: string;
  nearPoi?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      dataSourceId: 'DataSourceId',
      dataSourceIdName: 'DataSourceIdName',
      dataSourceIdPoi: 'DataSourceIdPoi',
      distance: 'Distance',
      latitude: 'Latitude',
      longitude: 'Longitude',
      nearPoi: 'NearPoi',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      dataSourceId: 'string',
      dataSourceIdName: 'string',
      dataSourceIdPoi: 'string',
      distance: 'string',
      latitude: 'string',
      longitude: 'string',
      nearPoi: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStorageStatisticsResponseBodyData extends $tea.Model {
  corpId?: string;
  number?: string;
  totalStore?: string;
  unusedStore?: string;
  usedStore?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      number: 'Number',
      totalStore: 'TotalStore',
      unusedStore: 'UnusedStore',
      usedStore: 'UsedStore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      number: 'string',
      totalStore: 'string',
      unusedStore: 'string',
      usedStore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStructureStatisticsResponseBodyData extends $tea.Model {
  corpId?: string;
  number?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      number: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagMetricsResponseBodyData extends $tea.Model {
  corpId?: string;
  dateTime?: string;
  tagCode?: string;
  tagMetric?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      dateTime: 'DateTime',
      tagCode: 'TagCode',
      tagMetric: 'TagMetric',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      dateTime: 'string',
      tagCode: 'string',
      tagMetric: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleDetailsResponseBodyData extends $tea.Model {
  gender?: string;
  personId?: string;
  personType?: string;
  plateId?: string;
  popularAddress?: string;
  popularPoi?: string;
  prefOutTime?: string;
  sourceImageStoragePath?: string;
  sourceUrl?: string;
  targetImageStoragePath?: string;
  targetUrl?: string;
  vehicleApplication?: string;
  vehicleClass?: string;
  vehicleColor?: string;
  vehicleId?: string;
  static names(): { [key: string]: string } {
    return {
      gender: 'Gender',
      personId: 'PersonId',
      personType: 'PersonType',
      plateId: 'PlateId',
      popularAddress: 'PopularAddress',
      popularPoi: 'PopularPoi',
      prefOutTime: 'PrefOutTime',
      sourceImageStoragePath: 'SourceImageStoragePath',
      sourceUrl: 'SourceUrl',
      targetImageStoragePath: 'TargetImageStoragePath',
      targetUrl: 'TargetUrl',
      vehicleApplication: 'VehicleApplication',
      vehicleClass: 'VehicleClass',
      vehicleColor: 'VehicleColor',
      vehicleId: 'VehicleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gender: 'string',
      personId: 'string',
      personType: 'string',
      plateId: 'string',
      popularAddress: 'string',
      popularPoi: 'string',
      prefOutTime: 'string',
      sourceImageStoragePath: 'string',
      sourceUrl: 'string',
      targetImageStoragePath: 'string',
      targetUrl: 'string',
      vehicleApplication: 'string',
      vehicleClass: 'string',
      vehicleColor: 'string',
      vehicleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleResultsResponseBodyData extends $tea.Model {
  gender?: string;
  liveAddress?: string;
  personId?: string;
  plateId?: string;
  profession?: string;
  updateTime?: string;
  vehicleApplication?: string;
  vehicleClass?: string;
  vehicleId?: string;
  static names(): { [key: string]: string } {
    return {
      gender: 'Gender',
      liveAddress: 'LiveAddress',
      personId: 'PersonId',
      plateId: 'PlateId',
      profession: 'Profession',
      updateTime: 'UpdateTime',
      vehicleApplication: 'VehicleApplication',
      vehicleClass: 'VehicleClass',
      vehicleId: 'VehicleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gender: 'string',
      liveAddress: 'string',
      personId: 'string',
      plateId: 'string',
      profession: 'string',
      updateTime: 'string',
      vehicleApplication: 'string',
      vehicleClass: 'string',
      vehicleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleTagDistributeResponseBodyData extends $tea.Model {
  corpId?: string;
  tagValue?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      tagValue: 'TagValue',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      tagValue: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleTopResponseBodyData extends $tea.Model {
  corpId?: string;
  frequency?: string;
  passHour?: string;
  poiId?: string;
  poiName?: string;
  vehicleId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      frequency: 'Frequency',
      passHour: 'PassHour',
      poiId: 'PoiId',
      poiName: 'PoiName',
      vehicleId: 'VehicleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      frequency: 'string',
      passHour: 'string',
      poiId: 'string',
      poiName: 'string',
      vehicleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleTrackResponseBodyData extends $tea.Model {
  corpId?: string;
  dataSourceId?: string;
  dataSourceName?: string;
  latitude?: string;
  leftTopX?: string;
  leftTopY?: string;
  longitude?: string;
  passTime?: string;
  picUrlPath?: string;
  plateId?: string;
  rightBottomX?: string;
  rightBottomY?: string;
  sourceUrl?: string;
  targetPicUrlPath?: string;
  targetUrl?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      dataSourceId: 'DataSourceId',
      dataSourceName: 'DataSourceName',
      latitude: 'Latitude',
      leftTopX: 'LeftTopX',
      leftTopY: 'LeftTopY',
      longitude: 'Longitude',
      passTime: 'PassTime',
      picUrlPath: 'PicUrlPath',
      plateId: 'PlateId',
      rightBottomX: 'RightBottomX',
      rightBottomY: 'RightBottomY',
      sourceUrl: 'SourceUrl',
      targetPicUrlPath: 'TargetPicUrlPath',
      targetUrl: 'TargetUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      dataSourceId: 'string',
      dataSourceName: 'string',
      latitude: 'string',
      leftTopX: 'string',
      leftTopY: 'string',
      longitude: 'string',
      passTime: 'string',
      picUrlPath: 'string',
      plateId: 'string',
      rightBottomX: 'string',
      rightBottomY: 'string',
      sourceUrl: 'string',
      targetPicUrlPath: 'string',
      targetUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaginateDeviceResponseBodyDataRecords extends $tea.Model {
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaginateDeviceResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  records?: PaginateDeviceResponseBodyDataRecords[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      records: 'Records',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': PaginateDeviceResponseBodyDataRecords },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaginateProjectResponseBodyDataRecords extends $tea.Model {
  aggregateSceneCode?: string;
  corpId?: string;
  createdTime?: string;
  description?: string;
  icon?: string;
  modifiedTime?: string;
  name?: string;
  type?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregateSceneCode: 'AggregateSceneCode',
      corpId: 'CorpId',
      createdTime: 'CreatedTime',
      description: 'Description',
      icon: 'Icon',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregateSceneCode: 'string',
      corpId: 'string',
      createdTime: 'string',
      description: 'string',
      icon: 'string',
      modifiedTime: 'string',
      name: 'string',
      type: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaginateProjectResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  records?: PaginateProjectResponseBodyDataRecords[];
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      records: 'Records',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': PaginateProjectResponseBodyDataRecords },
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrajectoryByIdRequestDeviceList extends $tea.Model {
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrajectoryByIdRequestIdList extends $tea.Model {
  idType?: string;
  idValue?: string;
  static names(): { [key: string]: string } {
    return {
      idType: 'IdType',
      idValue: 'IdValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idType: 'string',
      idValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallTrajectoryByCoordinateTimeRequestPointList extends $tea.Model {
  deltaDistance?: number;
  endTime?: string;
  latitude?: number;
  longitude?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      deltaDistance: 'DeltaDistance',
      endTime: 'EndTime',
      latitude: 'Latitude',
      longitude: 'Longitude',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deltaDistance: 'number',
      endTime: 'string',
      latitude: 'number',
      longitude: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageResponseBodyDataBodyList extends $tea.Model {
  cropAlgorithmCode?: string;
  feature?: string;
  leftTopX?: number;
  leftTopY?: number;
  rightBottomX?: number;
  rightBottomY?: number;
  targetImageContent?: string;
  static names(): { [key: string]: string } {
    return {
      cropAlgorithmCode: 'CropAlgorithmCode',
      feature: 'Feature',
      leftTopX: 'LeftTopX',
      leftTopY: 'LeftTopY',
      rightBottomX: 'RightBottomX',
      rightBottomY: 'RightBottomY',
      targetImageContent: 'TargetImageContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cropAlgorithmCode: 'string',
      feature: 'string',
      leftTopX: 'number',
      leftTopY: 'number',
      rightBottomX: 'number',
      rightBottomY: 'number',
      targetImageContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageResponseBodyDataFaceList extends $tea.Model {
  cropAlgorithmCode?: string;
  faceKeyPointQuality?: number;
  faceQuality?: number;
  feature?: string;
  leftTopX?: number;
  leftTopY?: number;
  rightBottomX?: number;
  rightBottomY?: number;
  targetImageContent?: string;
  static names(): { [key: string]: string } {
    return {
      cropAlgorithmCode: 'CropAlgorithmCode',
      faceKeyPointQuality: 'FaceKeyPointQuality',
      faceQuality: 'FaceQuality',
      feature: 'Feature',
      leftTopX: 'LeftTopX',
      leftTopY: 'LeftTopY',
      rightBottomX: 'RightBottomX',
      rightBottomY: 'RightBottomY',
      targetImageContent: 'TargetImageContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cropAlgorithmCode: 'string',
      faceKeyPointQuality: 'number',
      faceQuality: 'number',
      feature: 'string',
      leftTopX: 'number',
      leftTopY: 'number',
      rightBottomX: 'number',
      rightBottomY: 'number',
      targetImageContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageResponseBodyData extends $tea.Model {
  bodyList?: RecognizeImageResponseBodyDataBodyList[];
  faceList?: RecognizeImageResponseBodyDataFaceList[];
  static names(): { [key: string]: string } {
    return {
      bodyList: 'BodyList',
      faceList: 'FaceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyList: { 'type': 'array', 'itemType': RecognizeImageResponseBodyDataBodyList },
      faceList: { 'type': 'array', 'itemType': RecognizeImageResponseBodyDataFaceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAggregateObjectResponseBodyDataBodyList extends $tea.Model {
  deviceID?: string;
  deviceLatitude?: number;
  deviceLongitude?: number;
  deviceName?: string;
  leftTopX?: number;
  leftTopY?: number;
  objectType?: string;
  personId?: string;
  rightBottomX?: number;
  rightBottomY?: number;
  score?: number;
  shotTime?: string;
  sourceImageUrl?: string;
  targetImageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      deviceID: 'DeviceID',
      deviceLatitude: 'DeviceLatitude',
      deviceLongitude: 'DeviceLongitude',
      deviceName: 'DeviceName',
      leftTopX: 'LeftTopX',
      leftTopY: 'LeftTopY',
      objectType: 'ObjectType',
      personId: 'PersonId',
      rightBottomX: 'RightBottomX',
      rightBottomY: 'RightBottomY',
      score: 'Score',
      shotTime: 'ShotTime',
      sourceImageUrl: 'SourceImageUrl',
      targetImageUrl: 'TargetImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceID: 'string',
      deviceLatitude: 'number',
      deviceLongitude: 'number',
      deviceName: 'string',
      leftTopX: 'number',
      leftTopY: 'number',
      objectType: 'string',
      personId: 'string',
      rightBottomX: 'number',
      rightBottomY: 'number',
      score: 'number',
      shotTime: 'string',
      sourceImageUrl: 'string',
      targetImageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAggregateObjectResponseBodyDataFaceList extends $tea.Model {
  deviceID?: string;
  deviceLatitude?: number;
  deviceLongitude?: number;
  deviceName?: string;
  leftTopX?: number;
  leftTopY?: number;
  objectType?: string;
  personId?: string;
  rightBottomX?: number;
  rightBottomY?: number;
  score?: number;
  shotTime?: string;
  sourceImageUrl?: string;
  targetImageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      deviceID: 'DeviceID',
      deviceLatitude: 'DeviceLatitude',
      deviceLongitude: 'DeviceLongitude',
      deviceName: 'DeviceName',
      leftTopX: 'LeftTopX',
      leftTopY: 'LeftTopY',
      objectType: 'ObjectType',
      personId: 'PersonId',
      rightBottomX: 'RightBottomX',
      rightBottomY: 'RightBottomY',
      score: 'Score',
      shotTime: 'ShotTime',
      sourceImageUrl: 'SourceImageUrl',
      targetImageUrl: 'TargetImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceID: 'string',
      deviceLatitude: 'number',
      deviceLongitude: 'number',
      deviceName: 'string',
      leftTopX: 'number',
      leftTopY: 'number',
      objectType: 'string',
      personId: 'string',
      rightBottomX: 'number',
      rightBottomY: 'number',
      score: 'number',
      shotTime: 'string',
      sourceImageUrl: 'string',
      targetImageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAggregateObjectResponseBodyDataMotorList extends $tea.Model {
  deviceID?: string;
  deviceLatitude?: number;
  deviceLongitude?: number;
  deviceName?: string;
  leftTopX?: number;
  leftTopY?: number;
  objectType?: string;
  personId?: string;
  rightBottomX?: number;
  rightBottomY?: number;
  score?: number;
  shotTime?: string;
  sourceImageUrl?: string;
  targetImageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      deviceID: 'DeviceID',
      deviceLatitude: 'DeviceLatitude',
      deviceLongitude: 'DeviceLongitude',
      deviceName: 'DeviceName',
      leftTopX: 'LeftTopX',
      leftTopY: 'LeftTopY',
      objectType: 'ObjectType',
      personId: 'PersonId',
      rightBottomX: 'RightBottomX',
      rightBottomY: 'RightBottomY',
      score: 'Score',
      shotTime: 'ShotTime',
      sourceImageUrl: 'SourceImageUrl',
      targetImageUrl: 'TargetImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceID: 'string',
      deviceLatitude: 'number',
      deviceLongitude: 'number',
      deviceName: 'string',
      leftTopX: 'number',
      leftTopY: 'number',
      objectType: 'string',
      personId: 'string',
      rightBottomX: 'number',
      rightBottomY: 'number',
      score: 'number',
      shotTime: 'string',
      sourceImageUrl: 'string',
      targetImageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAggregateObjectResponseBodyDataNonMotorList extends $tea.Model {
  deviceID?: string;
  deviceLatitude?: number;
  deviceLongitude?: number;
  deviceName?: string;
  leftTopX?: number;
  leftTopY?: number;
  objectType?: string;
  personId?: string;
  rightBottomX?: number;
  rightBottomY?: number;
  score?: number;
  shotTime?: string;
  sourceImageUrl?: string;
  targetImageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      deviceID: 'DeviceID',
      deviceLatitude: 'DeviceLatitude',
      deviceLongitude: 'DeviceLongitude',
      deviceName: 'DeviceName',
      leftTopX: 'LeftTopX',
      leftTopY: 'LeftTopY',
      objectType: 'ObjectType',
      personId: 'PersonId',
      rightBottomX: 'RightBottomX',
      rightBottomY: 'RightBottomY',
      score: 'Score',
      shotTime: 'ShotTime',
      sourceImageUrl: 'SourceImageUrl',
      targetImageUrl: 'TargetImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceID: 'string',
      deviceLatitude: 'number',
      deviceLongitude: 'number',
      deviceName: 'string',
      leftTopX: 'number',
      leftTopY: 'number',
      objectType: 'string',
      personId: 'string',
      rightBottomX: 'number',
      rightBottomY: 'number',
      score: 'number',
      shotTime: 'string',
      sourceImageUrl: 'string',
      targetImageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAggregateObjectResponseBodyData extends $tea.Model {
  bodyList?: SearchAggregateObjectResponseBodyDataBodyList[];
  faceList?: SearchAggregateObjectResponseBodyDataFaceList[];
  motorList?: SearchAggregateObjectResponseBodyDataMotorList[];
  nonMotorList?: SearchAggregateObjectResponseBodyDataNonMotorList[];
  static names(): { [key: string]: string } {
    return {
      bodyList: 'BodyList',
      faceList: 'FaceList',
      motorList: 'MotorList',
      nonMotorList: 'NonMotorList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyList: { 'type': 'array', 'itemType': SearchAggregateObjectResponseBodyDataBodyList },
      faceList: { 'type': 'array', 'itemType': SearchAggregateObjectResponseBodyDataFaceList },
      motorList: { 'type': 'array', 'itemType': SearchAggregateObjectResponseBodyDataMotorList },
      nonMotorList: { 'type': 'array', 'itemType': SearchAggregateObjectResponseBodyDataNonMotorList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchObjectResponseBodyDataBodyList extends $tea.Model {
  deviceID?: string;
  leftTopX?: number;
  leftTopY?: number;
  objectType?: string;
  rightBottomX?: number;
  rightBottomY?: number;
  score?: number;
  shotTime?: string;
  sourceImageUrl?: string;
  targetImageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      deviceID: 'DeviceID',
      leftTopX: 'LeftTopX',
      leftTopY: 'LeftTopY',
      objectType: 'ObjectType',
      rightBottomX: 'RightBottomX',
      rightBottomY: 'RightBottomY',
      score: 'Score',
      shotTime: 'ShotTime',
      sourceImageUrl: 'SourceImageUrl',
      targetImageUrl: 'TargetImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceID: 'string',
      leftTopX: 'number',
      leftTopY: 'number',
      objectType: 'string',
      rightBottomX: 'number',
      rightBottomY: 'number',
      score: 'number',
      shotTime: 'string',
      sourceImageUrl: 'string',
      targetImageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchObjectResponseBodyDataFaceList extends $tea.Model {
  deviceID?: string;
  leftTopX?: number;
  leftTopY?: number;
  objectType?: string;
  rightBottomX?: number;
  rightBottomY?: number;
  score?: number;
  shotTime?: string;
  sourceImageUrl?: string;
  targetImageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      deviceID: 'DeviceID',
      leftTopX: 'LeftTopX',
      leftTopY: 'LeftTopY',
      objectType: 'ObjectType',
      rightBottomX: 'RightBottomX',
      rightBottomY: 'RightBottomY',
      score: 'Score',
      shotTime: 'ShotTime',
      sourceImageUrl: 'SourceImageUrl',
      targetImageUrl: 'TargetImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceID: 'string',
      leftTopX: 'number',
      leftTopY: 'number',
      objectType: 'string',
      rightBottomX: 'number',
      rightBottomY: 'number',
      score: 'number',
      shotTime: 'string',
      sourceImageUrl: 'string',
      targetImageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchObjectResponseBodyDataMotorList extends $tea.Model {
  deviceID?: string;
  leftTopX?: number;
  leftTopY?: number;
  objectType?: string;
  rightBottomX?: number;
  rightBottomY?: number;
  score?: number;
  shotTime?: string;
  sourceImageUrl?: string;
  targetImageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      deviceID: 'DeviceID',
      leftTopX: 'LeftTopX',
      leftTopY: 'LeftTopY',
      objectType: 'ObjectType',
      rightBottomX: 'RightBottomX',
      rightBottomY: 'RightBottomY',
      score: 'Score',
      shotTime: 'ShotTime',
      sourceImageUrl: 'SourceImageUrl',
      targetImageUrl: 'TargetImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceID: 'string',
      leftTopX: 'number',
      leftTopY: 'number',
      objectType: 'string',
      rightBottomX: 'number',
      rightBottomY: 'number',
      score: 'number',
      shotTime: 'string',
      sourceImageUrl: 'string',
      targetImageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchObjectResponseBodyDataNonMotorList extends $tea.Model {
  deviceID?: string;
  leftTopX?: number;
  leftTopY?: number;
  objectType?: string;
  rightBottomX?: number;
  rightBottomY?: number;
  score?: number;
  shotTime?: string;
  sourceImageUrl?: string;
  targetImageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      deviceID: 'DeviceID',
      leftTopX: 'LeftTopX',
      leftTopY: 'LeftTopY',
      objectType: 'ObjectType',
      rightBottomX: 'RightBottomX',
      rightBottomY: 'RightBottomY',
      score: 'Score',
      shotTime: 'ShotTime',
      sourceImageUrl: 'SourceImageUrl',
      targetImageUrl: 'TargetImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceID: 'string',
      leftTopX: 'number',
      leftTopY: 'number',
      objectType: 'string',
      rightBottomX: 'number',
      rightBottomY: 'number',
      score: 'number',
      shotTime: 'string',
      sourceImageUrl: 'string',
      targetImageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchObjectResponseBodyData extends $tea.Model {
  bodyList?: SearchObjectResponseBodyDataBodyList[];
  faceList?: SearchObjectResponseBodyDataFaceList[];
  motorList?: SearchObjectResponseBodyDataMotorList[];
  nonMotorList?: SearchObjectResponseBodyDataNonMotorList[];
  static names(): { [key: string]: string } {
    return {
      bodyList: 'BodyList',
      faceList: 'FaceList',
      motorList: 'MotorList',
      nonMotorList: 'NonMotorList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyList: { 'type': 'array', 'itemType': SearchObjectResponseBodyDataBodyList },
      faceList: { 'type': 'array', 'itemType': SearchObjectResponseBodyDataFaceList },
      motorList: { 'type': 'array', 'itemType': SearchObjectResponseBodyDataMotorList },
      nonMotorList: { 'type': 'array', 'itemType': SearchObjectResponseBodyDataNonMotorList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDeviceResponseBodyData extends $tea.Model {
  code?: string;
  deviceId?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      deviceId: 'DeviceId',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      deviceId: 'string',
      message: 'string',
      success: 'boolean',
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
    this._endpoint = this.getEndpoint("cdrs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addCdrsMonitorWithOptions(request: AddCdrsMonitorRequest, runtime: $Util.RuntimeOptions): Promise<AddCdrsMonitorResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.algorithmVendor)) {
      body["AlgorithmVendor"] = request.algorithmVendor;
    }

    if (!Util.isUnset(request.batchIndicator)) {
      body["BatchIndicator"] = request.batchIndicator;
    }

    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.monitorType)) {
      body["MonitorType"] = request.monitorType;
    }

    if (!Util.isUnset(request.notifierAppSecret)) {
      body["NotifierAppSecret"] = request.notifierAppSecret;
    }

    if (!Util.isUnset(request.notifierExtendValues)) {
      body["NotifierExtendValues"] = request.notifierExtendValues;
    }

    if (!Util.isUnset(request.notifierTimeOut)) {
      body["NotifierTimeOut"] = request.notifierTimeOut;
    }

    if (!Util.isUnset(request.notifierType)) {
      body["NotifierType"] = request.notifierType;
    }

    if (!Util.isUnset(request.notifierUrl)) {
      body["NotifierUrl"] = request.notifierUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddCdrsMonitor",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddCdrsMonitorResponse>(await this.callApi(params, req, runtime), new AddCdrsMonitorResponse({}));
  }

  async addCdrsMonitor(request: AddCdrsMonitorRequest): Promise<AddCdrsMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCdrsMonitorWithOptions(request, runtime);
  }

  async addMonitorWithOptions(request: AddMonitorRequest, runtime: $Util.RuntimeOptions): Promise<AddMonitorResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.algorithmVendor)) {
      body["AlgorithmVendor"] = request.algorithmVendor;
    }

    if (!Util.isUnset(request.batchIndicator)) {
      body["BatchIndicator"] = request.batchIndicator;
    }

    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.monitorType)) {
      body["MonitorType"] = request.monitorType;
    }

    if (!Util.isUnset(request.notifierAppSecret)) {
      body["NotifierAppSecret"] = request.notifierAppSecret;
    }

    if (!Util.isUnset(request.notifierExtendValues)) {
      body["NotifierExtendValues"] = request.notifierExtendValues;
    }

    if (!Util.isUnset(request.notifierTimeOut)) {
      body["NotifierTimeOut"] = request.notifierTimeOut;
    }

    if (!Util.isUnset(request.notifierType)) {
      body["NotifierType"] = request.notifierType;
    }

    if (!Util.isUnset(request.notifierUrl)) {
      body["NotifierUrl"] = request.notifierUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddMonitor",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddMonitorResponse>(await this.callApi(params, req, runtime), new AddMonitorResponse({}));
  }

  async addMonitor(request: AddMonitorRequest): Promise<AddMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addMonitorWithOptions(request, runtime);
  }

  async bindDeviceWithOptions(request: BindDeviceRequest, runtime: $Util.RuntimeOptions): Promise<BindDeviceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.devices)) {
      body["Devices"] = request.devices;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BindDevice",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindDeviceResponse>(await this.callApi(params, req, runtime), new BindDeviceResponse({}));
  }

  async bindDevice(request: BindDeviceRequest): Promise<BindDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindDeviceWithOptions(request, runtime);
  }

  async createProjectWithOptions(request: CreateProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aggregateSceneCode)) {
      body["AggregateSceneCode"] = request.aggregateSceneCode;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.icon)) {
      body["Icon"] = request.icon;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateProject",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateProjectResponse>(await this.callApi(params, req, runtime), new CreateProjectResponse({}));
  }

  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProjectWithOptions(request, runtime);
  }

  async detectTrajectoryRegularPatternWithOptions(request: DetectTrajectoryRegularPatternRequest, runtime: $Util.RuntimeOptions): Promise<DetectTrajectoryRegularPatternResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.idType)) {
      body["IdType"] = request.idType;
    }

    if (!Util.isUnset(request.idValue)) {
      body["IdValue"] = request.idValue;
    }

    if (!Util.isUnset(request.predictDate)) {
      body["PredictDate"] = request.predictDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DetectTrajectoryRegularPattern",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectTrajectoryRegularPatternResponse>(await this.callApi(params, req, runtime), new DetectTrajectoryRegularPatternResponse({}));
  }

  async detectTrajectoryRegularPattern(request: DetectTrajectoryRegularPatternRequest): Promise<DetectTrajectoryRegularPatternResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectTrajectoryRegularPatternWithOptions(request, runtime);
  }

  async getCdrsMonitorListWithOptions(request: GetCdrsMonitorListRequest, runtime: $Util.RuntimeOptions): Promise<GetCdrsMonitorListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetCdrsMonitorList",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCdrsMonitorListResponse>(await this.callApi(params, req, runtime), new GetCdrsMonitorListResponse({}));
  }

  async getCdrsMonitorList(request: GetCdrsMonitorListRequest): Promise<GetCdrsMonitorListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCdrsMonitorListWithOptions(request, runtime);
  }

  async getCdrsMonitorResultWithOptions(request: GetCdrsMonitorResultRequest, runtime: $Util.RuntimeOptions): Promise<GetCdrsMonitorResultResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.algorithmVendor)) {
      body["AlgorithmVendor"] = request.algorithmVendor;
    }

    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.minRecordId)) {
      body["MinRecordId"] = request.minRecordId;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetCdrsMonitorResult",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCdrsMonitorResultResponse>(await this.callApi(params, req, runtime), new GetCdrsMonitorResultResponse({}));
  }

  async getCdrsMonitorResult(request: GetCdrsMonitorResultRequest): Promise<GetCdrsMonitorResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCdrsMonitorResultWithOptions(request, runtime);
  }

  async getMonitorListWithOptions(request: GetMonitorListRequest, runtime: $Util.RuntimeOptions): Promise<GetMonitorListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetMonitorList",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMonitorListResponse>(await this.callApi(params, req, runtime), new GetMonitorListResponse({}));
  }

  async getMonitorList(request: GetMonitorListRequest): Promise<GetMonitorListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMonitorListWithOptions(request, runtime);
  }

  async getMonitorResultWithOptions(request: GetMonitorResultRequest, runtime: $Util.RuntimeOptions): Promise<GetMonitorResultResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.algorithmVendor)) {
      body["AlgorithmVendor"] = request.algorithmVendor;
    }

    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.minRecordId)) {
      body["MinRecordId"] = request.minRecordId;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetMonitorResult",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMonitorResultResponse>(await this.callApi(params, req, runtime), new GetMonitorResultResponse({}));
  }

  async getMonitorResult(request: GetMonitorResultRequest): Promise<GetMonitorResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMonitorResultWithOptions(request, runtime);
  }

  async listAreaHotSpotMetricsWithOptions(request: ListAreaHotSpotMetricsRequest, runtime: $Util.RuntimeOptions): Promise<ListAreaHotSpotMetricsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.deviceId)) {
      body["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.personId)) {
      body["PersonId"] = request.personId;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListAreaHotSpotMetrics",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAreaHotSpotMetricsResponse>(await this.callApi(params, req, runtime), new ListAreaHotSpotMetricsResponse({}));
  }

  async listAreaHotSpotMetrics(request: ListAreaHotSpotMetricsRequest): Promise<ListAreaHotSpotMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAreaHotSpotMetricsWithOptions(request, runtime);
  }

  async listCityMapAoisWithOptions(request: ListCityMapAoisRequest, runtime: $Util.RuntimeOptions): Promise<ListCityMapAoisResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.latitude)) {
      body["Latitude"] = request.latitude;
    }

    if (!Util.isUnset(request.longitude)) {
      body["Longitude"] = request.longitude;
    }

    if (!Util.isUnset(request.radius)) {
      body["Radius"] = request.radius;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListCityMapAois",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCityMapAoisResponse>(await this.callApi(params, req, runtime), new ListCityMapAoisResponse({}));
  }

  async listCityMapAois(request: ListCityMapAoisRequest): Promise<ListCityMapAoisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCityMapAoisWithOptions(request, runtime);
  }

  async listCityMapCameraResultsWithOptions(tmpReq: ListCityMapCameraResultsRequest, runtime: $Util.RuntimeOptions): Promise<ListCityMapCameraResultsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListCityMapCameraResultsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.dataSourceIdList)) {
      request.dataSourceIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataSourceIdList, "DataSourceIdList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataSourceIdListShrink)) {
      body["DataSourceIdList"] = request.dataSourceIdListShrink;
    }

    if (!Util.isUnset(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListCityMapCameraResults",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCityMapCameraResultsResponse>(await this.callApi(params, req, runtime), new ListCityMapCameraResultsResponse({}));
  }

  async listCityMapCameraResults(request: ListCityMapCameraResultsRequest): Promise<ListCityMapCameraResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCityMapCameraResultsWithOptions(request, runtime);
  }

  async listCityMapCameraStatisticsWithOptions(request: ListCityMapCameraStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<ListCityMapCameraStatisticsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataSourceIdList)) {
      body["DataSourceIdList"] = request.dataSourceIdList;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListCityMapCameraStatistics",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCityMapCameraStatisticsResponse>(await this.callApi(params, req, runtime), new ListCityMapCameraStatisticsResponse({}));
  }

  async listCityMapCameraStatistics(request: ListCityMapCameraStatisticsRequest): Promise<ListCityMapCameraStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCityMapCameraStatisticsWithOptions(request, runtime);
  }

  async listCityMapImageDetailsWithOptions(request: ListCityMapImageDetailsRequest, runtime: $Util.RuntimeOptions): Promise<ListCityMapImageDetailsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataSourceId)) {
      body["DataSourceId"] = request.dataSourceId;
    }

    if (!Util.isUnset(request.recordNumber)) {
      body["RecordNumber"] = request.recordNumber;
    }

    if (!Util.isUnset(request.timeInterval)) {
      body["TimeInterval"] = request.timeInterval;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListCityMapImageDetails",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCityMapImageDetailsResponse>(await this.callApi(params, req, runtime), new ListCityMapImageDetailsResponse({}));
  }

  async listCityMapImageDetails(request: ListCityMapImageDetailsRequest): Promise<ListCityMapImageDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCityMapImageDetailsWithOptions(request, runtime);
  }

  async listCityMapPersonFlowWithOptions(tmpReq: ListCityMapPersonFlowRequest, runtime: $Util.RuntimeOptions): Promise<ListCityMapPersonFlowResponse> {
    Util.validateModel(tmpReq);
    let request = new ListCityMapPersonFlowShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.originDataSourceIdList)) {
      request.originDataSourceIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.originDataSourceIdList, "OriginDataSourceIdList", "json");
    }

    if (!Util.isUnset(tmpReq.targetDataSourceIdList)) {
      request.targetDataSourceIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.targetDataSourceIdList, "TargetDataSourceIdList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.originDataSourceIdListShrink)) {
      body["OriginDataSourceIdList"] = request.originDataSourceIdListShrink;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.range)) {
      body["Range"] = request.range;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.targetDataSourceIdListShrink)) {
      body["TargetDataSourceIdList"] = request.targetDataSourceIdListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListCityMapPersonFlow",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCityMapPersonFlowResponse>(await this.callApi(params, req, runtime), new ListCityMapPersonFlowResponse({}));
  }

  async listCityMapPersonFlow(request: ListCityMapPersonFlowRequest): Promise<ListCityMapPersonFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCityMapPersonFlowWithOptions(request, runtime);
  }

  async listCityMapRangeStatisticWithOptions(request: ListCityMapRangeStatisticRequest, runtime: $Util.RuntimeOptions): Promise<ListCityMapRangeStatisticResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.latitude)) {
      body["Latitude"] = request.latitude;
    }

    if (!Util.isUnset(request.longitude)) {
      body["Longitude"] = request.longitude;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.radius)) {
      body["Radius"] = request.radius;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListCityMapRangeStatistic",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCityMapRangeStatisticResponse>(await this.callApi(params, req, runtime), new ListCityMapRangeStatisticResponse({}));
  }

  async listCityMapRangeStatistic(request: ListCityMapRangeStatisticRequest): Promise<ListCityMapRangeStatisticResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCityMapRangeStatisticWithOptions(request, runtime);
  }

  async listCorpMetricsStatisticWithOptions(tmpReq: ListCorpMetricsStatisticRequest, runtime: $Util.RuntimeOptions): Promise<ListCorpMetricsStatisticResponse> {
    Util.validateModel(tmpReq);
    let request = new ListCorpMetricsStatisticShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.deviceGroupList)) {
      request.deviceGroupListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceGroupList, "DeviceGroupList", "json");
    }

    if (!Util.isUnset(tmpReq.deviceIdList)) {
      request.deviceIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceIdList, "DeviceIdList", "json");
    }

    if (!Util.isUnset(tmpReq.userGroupList)) {
      request.userGroupListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userGroupList, "UserGroupList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.deviceGroupListShrink)) {
      body["DeviceGroupList"] = request.deviceGroupListShrink;
    }

    if (!Util.isUnset(request.deviceIdListShrink)) {
      body["DeviceIdList"] = request.deviceIdListShrink;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.qualitScore)) {
      body["QualitScore"] = request.qualitScore;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tagCode)) {
      body["TagCode"] = request.tagCode;
    }

    if (!Util.isUnset(request.userGroupListShrink)) {
      body["UserGroupList"] = request.userGroupListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListCorpMetricsStatistic",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCorpMetricsStatisticResponse>(await this.callApi(params, req, runtime), new ListCorpMetricsStatisticResponse({}));
  }

  async listCorpMetricsStatistic(request: ListCorpMetricsStatisticRequest): Promise<ListCorpMetricsStatisticResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCorpMetricsStatisticWithOptions(request, runtime);
  }

  async listDataStatisticsWithOptions(request: ListDataStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<ListDataStatisticsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.backCategory)) {
      body["BackCategory"] = request.backCategory;
    }

    if (!Util.isUnset(request.schema)) {
      body["Schema"] = request.schema;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDataStatistics",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDataStatisticsResponse>(await this.callApi(params, req, runtime), new ListDataStatisticsResponse({}));
  }

  async listDataStatistics(request: ListDataStatisticsRequest): Promise<ListDataStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataStatisticsWithOptions(request, runtime);
  }

  async listDataStatisticsByDayWithOptions(request: ListDataStatisticsByDayRequest, runtime: $Util.RuntimeOptions): Promise<ListDataStatisticsByDayResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDataStatisticsByDay",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDataStatisticsByDayResponse>(await this.callApi(params, req, runtime), new ListDataStatisticsByDayResponse({}));
  }

  async listDataStatisticsByDay(request: ListDataStatisticsByDayRequest): Promise<ListDataStatisticsByDayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataStatisticsByDayWithOptions(request, runtime);
  }

  async listDeviceDetailWithOptions(request: ListDeviceDetailRequest, runtime: $Util.RuntimeOptions): Promise<ListDeviceDetailResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.dataSourceId)) {
      body["DataSourceId"] = request.dataSourceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDeviceDetail",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDeviceDetailResponse>(await this.callApi(params, req, runtime), new ListDeviceDetailResponse({}));
  }

  async listDeviceDetail(request: ListDeviceDetailRequest): Promise<ListDeviceDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceDetailWithOptions(request, runtime);
  }

  async listDeviceGenderStatisticsWithOptions(request: ListDeviceGenderStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<ListDeviceGenderStatisticsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.dataSourceId)) {
      body["DataSourceId"] = request.dataSourceId;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDeviceGenderStatistics",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDeviceGenderStatisticsResponse>(await this.callApi(params, req, runtime), new ListDeviceGenderStatisticsResponse({}));
  }

  async listDeviceGenderStatistics(request: ListDeviceGenderStatisticsRequest): Promise<ListDeviceGenderStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceGenderStatisticsWithOptions(request, runtime);
  }

  async listDevicePersonWithOptions(request: ListDevicePersonRequest, runtime: $Util.RuntimeOptions): Promise<ListDevicePersonResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.dataSourceId)) {
      body["DataSourceId"] = request.dataSourceId;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.statisticsType)) {
      body["StatisticsType"] = request.statisticsType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDevicePerson",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDevicePersonResponse>(await this.callApi(params, req, runtime), new ListDevicePersonResponse({}));
  }

  async listDevicePerson(request: ListDevicePersonRequest): Promise<ListDevicePersonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDevicePersonWithOptions(request, runtime);
  }

  async listDevicePersonStatisticsWithOptions(request: ListDevicePersonStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<ListDevicePersonStatisticsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.dataSourceId)) {
      body["DataSourceId"] = request.dataSourceId;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.statisticsType)) {
      body["StatisticsType"] = request.statisticsType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDevicePersonStatistics",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDevicePersonStatisticsResponse>(await this.callApi(params, req, runtime), new ListDevicePersonStatisticsResponse({}));
  }

  async listDevicePersonStatistics(request: ListDevicePersonStatisticsRequest): Promise<ListDevicePersonStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDevicePersonStatisticsWithOptions(request, runtime);
  }

  async listDeviceRelationWithOptions(request: ListDeviceRelationRequest, runtime: $Util.RuntimeOptions): Promise<ListDeviceRelationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceId)) {
      body["DeviceId"] = request.deviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDeviceRelation",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDeviceRelationResponse>(await this.callApi(params, req, runtime), new ListDeviceRelationResponse({}));
  }

  async listDeviceRelation(request: ListDeviceRelationRequest): Promise<ListDeviceRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceRelationWithOptions(request, runtime);
  }

  async listMapRouteDetailsWithOptions(tmpReq: ListMapRouteDetailsRequest, runtime: $Util.RuntimeOptions): Promise<ListMapRouteDetailsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListMapRouteDetailsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.routeList)) {
      request.routeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.routeList, "RouteList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.routeListShrink)) {
      body["RouteList"] = request.routeListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListMapRouteDetails",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMapRouteDetailsResponse>(await this.callApi(params, req, runtime), new ListMapRouteDetailsResponse({}));
  }

  async listMapRouteDetails(request: ListMapRouteDetailsRequest): Promise<ListMapRouteDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMapRouteDetailsWithOptions(request, runtime);
  }

  async listPersonDetailsWithOptions(request: ListPersonDetailsRequest, runtime: $Util.RuntimeOptions): Promise<ListPersonDetailsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.personId)) {
      body["PersonId"] = request.personId;
    }

    if (!Util.isUnset(request.schema)) {
      body["Schema"] = request.schema;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListPersonDetails",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPersonDetailsResponse>(await this.callApi(params, req, runtime), new ListPersonDetailsResponse({}));
  }

  async listPersonDetails(request: ListPersonDetailsRequest): Promise<ListPersonDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPersonDetailsWithOptions(request, runtime);
  }

  async listPersonResultWithOptions(request: ListPersonResultRequest, runtime: $Util.RuntimeOptions): Promise<ListPersonResultResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.age)) {
      body["Age"] = request.age;
    }

    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.gender)) {
      body["Gender"] = request.gender;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.profession)) {
      body["Profession"] = request.profession;
    }

    if (!Util.isUnset(request.qualityScore)) {
      body["QualityScore"] = request.qualityScore;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListPersonResult",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPersonResultResponse>(await this.callApi(params, req, runtime), new ListPersonResultResponse({}));
  }

  async listPersonResult(request: ListPersonResultRequest): Promise<ListPersonResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPersonResultWithOptions(request, runtime);
  }

  async listPersonTagWithOptions(request: ListPersonTagRequest, runtime: $Util.RuntimeOptions): Promise<ListPersonTagResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tagCode)) {
      body["TagCode"] = request.tagCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListPersonTag",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPersonTagResponse>(await this.callApi(params, req, runtime), new ListPersonTagResponse({}));
  }

  async listPersonTag(request: ListPersonTagRequest): Promise<ListPersonTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPersonTagWithOptions(request, runtime);
  }

  async listPersonTopWithOptions(request: ListPersonTopRequest, runtime: $Util.RuntimeOptions): Promise<ListPersonTopResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.personId)) {
      body["PersonId"] = request.personId;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListPersonTop",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPersonTopResponse>(await this.callApi(params, req, runtime), new ListPersonTopResponse({}));
  }

  async listPersonTop(request: ListPersonTopRequest): Promise<ListPersonTopResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPersonTopWithOptions(request, runtime);
  }

  async listPersonTrackWithOptions(request: ListPersonTrackRequest, runtime: $Util.RuntimeOptions): Promise<ListPersonTrackResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aggregateDimension)) {
      body["AggregateDimension"] = request.aggregateDimension;
    }

    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.imageSourceType)) {
      body["ImageSourceType"] = request.imageSourceType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.personId)) {
      body["PersonId"] = request.personId;
    }

    if (!Util.isUnset(request.qualityScore)) {
      body["QualityScore"] = request.qualityScore;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListPersonTrack",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPersonTrackResponse>(await this.callApi(params, req, runtime), new ListPersonTrackResponse({}));
  }

  async listPersonTrack(request: ListPersonTrackRequest): Promise<ListPersonTrackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPersonTrackWithOptions(request, runtime);
  }

  async listRangeDeviceWithOptions(request: ListRangeDeviceRequest, runtime: $Util.RuntimeOptions): Promise<ListRangeDeviceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.dataSourceId)) {
      body["DataSourceId"] = request.dataSourceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.radius)) {
      body["Radius"] = request.radius;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListRangeDevice",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRangeDeviceResponse>(await this.callApi(params, req, runtime), new ListRangeDeviceResponse({}));
  }

  async listRangeDevice(request: ListRangeDeviceRequest): Promise<ListRangeDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRangeDeviceWithOptions(request, runtime);
  }

  async listStorageStatisticsWithOptions(request: ListStorageStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<ListStorageStatisticsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListStorageStatistics",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListStorageStatisticsResponse>(await this.callApi(params, req, runtime), new ListStorageStatisticsResponse({}));
  }

  async listStorageStatistics(request: ListStorageStatisticsRequest): Promise<ListStorageStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStorageStatisticsWithOptions(request, runtime);
  }

  async listStructureStatisticsWithOptions(request: ListStructureStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<ListStructureStatisticsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.backCategory)) {
      body["BackCategory"] = request.backCategory;
    }

    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListStructureStatistics",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListStructureStatisticsResponse>(await this.callApi(params, req, runtime), new ListStructureStatisticsResponse({}));
  }

  async listStructureStatistics(request: ListStructureStatisticsRequest): Promise<ListStructureStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStructureStatisticsWithOptions(request, runtime);
  }

  async listTagMetricsWithOptions(tmpReq: ListTagMetricsRequest, runtime: $Util.RuntimeOptions): Promise<ListTagMetricsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListTagMetricsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tagCode)) {
      request.tagCodeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagCode, "TagCode", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aggregateType)) {
      body["AggregateType"] = request.aggregateType;
    }

    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tagCodeShrink)) {
      body["TagCode"] = request.tagCodeShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListTagMetrics",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagMetricsResponse>(await this.callApi(params, req, runtime), new ListTagMetricsResponse({}));
  }

  async listTagMetrics(request: ListTagMetricsRequest): Promise<ListTagMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagMetricsWithOptions(request, runtime);
  }

  async listVehicleDetailsWithOptions(request: ListVehicleDetailsRequest, runtime: $Util.RuntimeOptions): Promise<ListVehicleDetailsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.plateId)) {
      body["PlateId"] = request.plateId;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListVehicleDetails",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListVehicleDetailsResponse>(await this.callApi(params, req, runtime), new ListVehicleDetailsResponse({}));
  }

  async listVehicleDetails(request: ListVehicleDetailsRequest): Promise<ListVehicleDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVehicleDetailsWithOptions(request, runtime);
  }

  async listVehicleResultsWithOptions(request: ListVehicleResultsRequest, runtime: $Util.RuntimeOptions): Promise<ListVehicleResultsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.vehicleApplication)) {
      body["VehicleApplication"] = request.vehicleApplication;
    }

    if (!Util.isUnset(request.vehicleClass)) {
      body["VehicleClass"] = request.vehicleClass;
    }

    if (!Util.isUnset(request.vehicleColor)) {
      body["VehicleColor"] = request.vehicleColor;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListVehicleResults",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListVehicleResultsResponse>(await this.callApi(params, req, runtime), new ListVehicleResultsResponse({}));
  }

  async listVehicleResults(request: ListVehicleResultsRequest): Promise<ListVehicleResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVehicleResultsWithOptions(request, runtime);
  }

  async listVehicleTagDistributeWithOptions(request: ListVehicleTagDistributeRequest, runtime: $Util.RuntimeOptions): Promise<ListVehicleTagDistributeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tagCode)) {
      body["TagCode"] = request.tagCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListVehicleTagDistribute",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListVehicleTagDistributeResponse>(await this.callApi(params, req, runtime), new ListVehicleTagDistributeResponse({}));
  }

  async listVehicleTagDistribute(request: ListVehicleTagDistributeRequest): Promise<ListVehicleTagDistributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVehicleTagDistributeWithOptions(request, runtime);
  }

  async listVehicleTopWithOptions(request: ListVehicleTopRequest, runtime: $Util.RuntimeOptions): Promise<ListVehicleTopResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.plateId)) {
      body["PlateId"] = request.plateId;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListVehicleTop",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListVehicleTopResponse>(await this.callApi(params, req, runtime), new ListVehicleTopResponse({}));
  }

  async listVehicleTop(request: ListVehicleTopRequest): Promise<ListVehicleTopResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVehicleTopWithOptions(request, runtime);
  }

  async listVehicleTrackWithOptions(request: ListVehicleTrackRequest, runtime: $Util.RuntimeOptions): Promise<ListVehicleTrackResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.plateId)) {
      body["PlateId"] = request.plateId;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListVehicleTrack",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListVehicleTrackResponse>(await this.callApi(params, req, runtime), new ListVehicleTrackResponse({}));
  }

  async listVehicleTrack(request: ListVehicleTrackRequest): Promise<ListVehicleTrackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVehicleTrackWithOptions(request, runtime);
  }

  async paginateDeviceWithOptions(request: PaginateDeviceRequest, runtime: $Util.RuntimeOptions): Promise<PaginateDeviceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.countTotalNum)) {
      body["CountTotalNum"] = request.countTotalNum;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PaginateDevice",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PaginateDeviceResponse>(await this.callApi(params, req, runtime), new PaginateDeviceResponse({}));
  }

  async paginateDevice(request: PaginateDeviceRequest): Promise<PaginateDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.paginateDeviceWithOptions(request, runtime);
  }

  async paginateProjectWithOptions(request: PaginateProjectRequest, runtime: $Util.RuntimeOptions): Promise<PaginateProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.countTotalNum)) {
      body["CountTotalNum"] = request.countTotalNum;
    }

    if (!Util.isUnset(request.nameLike)) {
      body["NameLike"] = request.nameLike;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PaginateProject",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PaginateProjectResponse>(await this.callApi(params, req, runtime), new PaginateProjectResponse({}));
  }

  async paginateProject(request: PaginateProjectRequest): Promise<PaginateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.paginateProjectWithOptions(request, runtime);
  }

  async predictTrajectoryDestinationWithOptions(request: PredictTrajectoryDestinationRequest, runtime: $Util.RuntimeOptions): Promise<PredictTrajectoryDestinationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.idType)) {
      body["IdType"] = request.idType;
    }

    if (!Util.isUnset(request.idValue)) {
      body["IdValue"] = request.idValue;
    }

    if (!Util.isUnset(request.predictTimeSpan)) {
      body["PredictTimeSpan"] = request.predictTimeSpan;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PredictTrajectoryDestination",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PredictTrajectoryDestinationResponse>(await this.callApi(params, req, runtime), new PredictTrajectoryDestinationResponse({}));
  }

  async predictTrajectoryDestination(request: PredictTrajectoryDestinationRequest): Promise<PredictTrajectoryDestinationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.predictTrajectoryDestinationWithOptions(request, runtime);
  }

  async queryTrajectoryByIdWithOptions(request: QueryTrajectoryByIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryTrajectoryByIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.deviceList)) {
      body["DeviceList"] = request.deviceList;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.idList)) {
      body["IdList"] = request.idList;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryTrajectoryById",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTrajectoryByIdResponse>(await this.callApi(params, req, runtime), new QueryTrajectoryByIdResponse({}));
  }

  async queryTrajectoryById(request: QueryTrajectoryByIdRequest): Promise<QueryTrajectoryByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTrajectoryByIdWithOptions(request, runtime);
  }

  async recallTrajectoryByCoordinateTimeWithOptions(request: RecallTrajectoryByCoordinateTimeRequest, runtime: $Util.RuntimeOptions): Promise<RecallTrajectoryByCoordinateTimeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.outputIdCount)) {
      body["OutputIdCount"] = request.outputIdCount;
    }

    if (!Util.isUnset(request.outputIdTypeList)) {
      body["OutputIdTypeList"] = request.outputIdTypeList;
    }

    if (!Util.isUnset(request.pointList)) {
      body["PointList"] = request.pointList;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecallTrajectoryByCoordinateTime",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecallTrajectoryByCoordinateTimeResponse>(await this.callApi(params, req, runtime), new RecallTrajectoryByCoordinateTimeResponse({}));
  }

  async recallTrajectoryByCoordinateTime(request: RecallTrajectoryByCoordinateTimeRequest): Promise<RecallTrajectoryByCoordinateTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recallTrajectoryByCoordinateTimeWithOptions(request, runtime);
  }

  async recognizeImageWithOptions(request: RecognizeImageRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeImageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.imageContent)) {
      body["ImageContent"] = request.imageContent;
    }

    if (!Util.isUnset(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.recognizeType)) {
      body["RecognizeType"] = request.recognizeType;
    }

    if (!Util.isUnset(request.requireCropImage)) {
      body["RequireCropImage"] = request.requireCropImage;
    }

    if (!Util.isUnset(request.vendor)) {
      body["Vendor"] = request.vendor;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecognizeImage",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecognizeImageResponse>(await this.callApi(params, req, runtime), new RecognizeImageResponse({}));
  }

  async recognizeImage(request: RecognizeImageRequest): Promise<RecognizeImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeImageWithOptions(request, runtime);
  }

  async searchAggregateObjectWithOptions(request: SearchAggregateObjectRequest, runtime: $Util.RuntimeOptions): Promise<SearchAggregateObjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.attributes)) {
      body["Attributes"] = request.attributes;
    }

    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.deviceList)) {
      body["DeviceList"] = request.deviceList;
    }

    if (!Util.isUnset(request.feature)) {
      body["Feature"] = request.feature;
    }

    if (!Util.isUnset(request.imageContent)) {
      body["ImageContent"] = request.imageContent;
    }

    if (!Util.isUnset(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.objectType)) {
      body["ObjectType"] = request.objectType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.requireTotalCount)) {
      body["RequireTotalCount"] = request.requireTotalCount;
    }

    if (!Util.isUnset(request.shotTimeEnd)) {
      body["ShotTimeEnd"] = request.shotTimeEnd;
    }

    if (!Util.isUnset(request.shotTimeStart)) {
      body["ShotTimeStart"] = request.shotTimeStart;
    }

    if (!Util.isUnset(request.vendor)) {
      body["Vendor"] = request.vendor;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SearchAggregateObject",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchAggregateObjectResponse>(await this.callApi(params, req, runtime), new SearchAggregateObjectResponse({}));
  }

  async searchAggregateObject(request: SearchAggregateObjectRequest): Promise<SearchAggregateObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchAggregateObjectWithOptions(request, runtime);
  }

  async searchObjectWithOptions(request: SearchObjectRequest, runtime: $Util.RuntimeOptions): Promise<SearchObjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.attributes)) {
      body["Attributes"] = request.attributes;
    }

    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.deviceList)) {
      body["DeviceList"] = request.deviceList;
    }

    if (!Util.isUnset(request.feature)) {
      body["Feature"] = request.feature;
    }

    if (!Util.isUnset(request.imageContent)) {
      body["ImageContent"] = request.imageContent;
    }

    if (!Util.isUnset(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.objectType)) {
      body["ObjectType"] = request.objectType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.shotTimeEnd)) {
      body["ShotTimeEnd"] = request.shotTimeEnd;
    }

    if (!Util.isUnset(request.shotTimeStart)) {
      body["ShotTimeStart"] = request.shotTimeStart;
    }

    if (!Util.isUnset(request.vendor)) {
      body["Vendor"] = request.vendor;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SearchObject",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchObjectResponse>(await this.callApi(params, req, runtime), new SearchObjectResponse({}));
  }

  async searchObject(request: SearchObjectRequest): Promise<SearchObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchObjectWithOptions(request, runtime);
  }

  async stopCdrsMonitorWithOptions(request: StopCdrsMonitorRequest, runtime: $Util.RuntimeOptions): Promise<StopCdrsMonitorResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.algorithmVendor)) {
      body["AlgorithmVendor"] = request.algorithmVendor;
    }

    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StopCdrsMonitor",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopCdrsMonitorResponse>(await this.callApi(params, req, runtime), new StopCdrsMonitorResponse({}));
  }

  async stopCdrsMonitor(request: StopCdrsMonitorRequest): Promise<StopCdrsMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopCdrsMonitorWithOptions(request, runtime);
  }

  async stopMonitorWithOptions(request: StopMonitorRequest, runtime: $Util.RuntimeOptions): Promise<StopMonitorResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.algorithmVendor)) {
      body["AlgorithmVendor"] = request.algorithmVendor;
    }

    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StopMonitor",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopMonitorResponse>(await this.callApi(params, req, runtime), new StopMonitorResponse({}));
  }

  async stopMonitor(request: StopMonitorRequest): Promise<StopMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopMonitorWithOptions(request, runtime);
  }

  async unbindDeviceWithOptions(request: UnbindDeviceRequest, runtime: $Util.RuntimeOptions): Promise<UnbindDeviceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.deviceIds)) {
      body["DeviceIds"] = request.deviceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UnbindDevice",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindDeviceResponse>(await this.callApi(params, req, runtime), new UnbindDeviceResponse({}));
  }

  async unbindDevice(request: UnbindDeviceRequest): Promise<UnbindDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindDeviceWithOptions(request, runtime);
  }

  async updateCdrsMonitorWithOptions(request: UpdateCdrsMonitorRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCdrsMonitorResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.algorithmVendor)) {
      body["AlgorithmVendor"] = request.algorithmVendor;
    }

    if (!Util.isUnset(request.attributeName)) {
      body["AttributeName"] = request.attributeName;
    }

    if (!Util.isUnset(request.attributeOperateType)) {
      body["AttributeOperateType"] = request.attributeOperateType;
    }

    if (!Util.isUnset(request.attributeValueList)) {
      body["AttributeValueList"] = request.attributeValueList;
    }

    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.deviceList)) {
      body["DeviceList"] = request.deviceList;
    }

    if (!Util.isUnset(request.deviceOperateType)) {
      body["DeviceOperateType"] = request.deviceOperateType;
    }

    if (!Util.isUnset(request.notifierAppSecret)) {
      body["NotifierAppSecret"] = request.notifierAppSecret;
    }

    if (!Util.isUnset(request.notifierExtendValues)) {
      body["NotifierExtendValues"] = request.notifierExtendValues;
    }

    if (!Util.isUnset(request.notifierTimeOut)) {
      body["NotifierTimeOut"] = request.notifierTimeOut;
    }

    if (!Util.isUnset(request.notifierType)) {
      body["NotifierType"] = request.notifierType;
    }

    if (!Util.isUnset(request.notifierUrl)) {
      body["NotifierUrl"] = request.notifierUrl;
    }

    if (!Util.isUnset(request.picList)) {
      body["PicList"] = request.picList;
    }

    if (!Util.isUnset(request.picOperateType)) {
      body["PicOperateType"] = request.picOperateType;
    }

    if (!Util.isUnset(request.ruleExpression)) {
      body["RuleExpression"] = request.ruleExpression;
    }

    if (!Util.isUnset(request.ruleName)) {
      body["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCdrsMonitor",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCdrsMonitorResponse>(await this.callApi(params, req, runtime), new UpdateCdrsMonitorResponse({}));
  }

  async updateCdrsMonitor(request: UpdateCdrsMonitorRequest): Promise<UpdateCdrsMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCdrsMonitorWithOptions(request, runtime);
  }

  async updateMonitorWithOptions(request: UpdateMonitorRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMonitorResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.algorithmVendor)) {
      body["AlgorithmVendor"] = request.algorithmVendor;
    }

    if (!Util.isUnset(request.attributeName)) {
      body["AttributeName"] = request.attributeName;
    }

    if (!Util.isUnset(request.attributeOperateType)) {
      body["AttributeOperateType"] = request.attributeOperateType;
    }

    if (!Util.isUnset(request.attributeValueList)) {
      body["AttributeValueList"] = request.attributeValueList;
    }

    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.deviceList)) {
      body["DeviceList"] = request.deviceList;
    }

    if (!Util.isUnset(request.deviceOperateType)) {
      body["DeviceOperateType"] = request.deviceOperateType;
    }

    if (!Util.isUnset(request.notifierAppSecret)) {
      body["NotifierAppSecret"] = request.notifierAppSecret;
    }

    if (!Util.isUnset(request.notifierExtendValues)) {
      body["NotifierExtendValues"] = request.notifierExtendValues;
    }

    if (!Util.isUnset(request.notifierTimeOut)) {
      body["NotifierTimeOut"] = request.notifierTimeOut;
    }

    if (!Util.isUnset(request.notifierType)) {
      body["NotifierType"] = request.notifierType;
    }

    if (!Util.isUnset(request.notifierUrl)) {
      body["NotifierUrl"] = request.notifierUrl;
    }

    if (!Util.isUnset(request.picExtendList)) {
      body["PicExtendList"] = request.picExtendList;
    }

    if (!Util.isUnset(request.picList)) {
      body["PicList"] = request.picList;
    }

    if (!Util.isUnset(request.picOperateType)) {
      body["PicOperateType"] = request.picOperateType;
    }

    if (!Util.isUnset(request.ruleExpression)) {
      body["RuleExpression"] = request.ruleExpression;
    }

    if (!Util.isUnset(request.ruleName)) {
      body["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMonitor",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateMonitorResponse>(await this.callApi(params, req, runtime), new UpdateMonitorResponse({}));
  }

  async updateMonitor(request: UpdateMonitorRequest): Promise<UpdateMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMonitorWithOptions(request, runtime);
  }

  async updateProjectWithOptions(request: UpdateProjectRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aggregateSceneCode)) {
      body["AggregateSceneCode"] = request.aggregateSceneCode;
    }

    if (!Util.isUnset(request.corpId)) {
      body["CorpId"] = request.corpId;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.icon)) {
      body["Icon"] = request.icon;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateProject",
      version: "2020-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateProjectResponse>(await this.callApi(params, req, runtime), new UpdateProjectResponse({}));
  }

  async updateProject(request: UpdateProjectRequest): Promise<UpdateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProjectWithOptions(request, runtime);
  }

}
