// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class SearchObjectRequest extends $tea.Model {
  corpId?: string;
  objectType?: string;
  vendor?: string;
  feature?: string;
  imageContent?: string;
  imageUrl?: string;
  deviceList?: string;
  attributes?: string;
  shotTimeStart?: string;
  shotTimeEnd?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      objectType: 'ObjectType',
      vendor: 'Vendor',
      feature: 'Feature',
      imageContent: 'ImageContent',
      imageUrl: 'ImageUrl',
      deviceList: 'DeviceList',
      attributes: 'Attributes',
      shotTimeStart: 'ShotTimeStart',
      shotTimeEnd: 'ShotTimeEnd',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      objectType: 'string',
      vendor: 'string',
      feature: 'string',
      imageContent: 'string',
      imageUrl: 'string',
      deviceList: 'string',
      attributes: 'string',
      shotTimeStart: 'string',
      shotTimeEnd: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchObjectResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  pageSize?: number;
  total?: number;
  data?: SearchObjectResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      total: 'Total',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      total: 'number',
      data: SearchObjectResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchObjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchObjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchObjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAreaHotSpotMetricsRequest extends $tea.Model {
  corpId?: string;
  personId?: string;
  deviceId?: string;
  startTime?: string;
  endTime?: string;
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      personId: 'PersonId',
      deviceId: 'DeviceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      personId: 'string',
      deviceId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAreaHotSpotMetricsResponseBody extends $tea.Model {
  totalCount?: string;
  requestId?: string;
  message?: string;
  pageSize?: string;
  pageNumber?: string;
  data?: ListAreaHotSpotMetricsResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'string',
      requestId: 'string',
      message: 'string',
      pageSize: 'string',
      pageNumber: 'string',
      data: { 'type': 'array', 'itemType': ListAreaHotSpotMetricsResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAreaHotSpotMetricsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAreaHotSpotMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAreaHotSpotMetricsResponseBody,
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
  message?: string;
  requestId?: string;
  data?: BindDeviceResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': BindDeviceResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BindDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCdrsMonitorResultRequest extends $tea.Model {
  corpId?: string;
  taskId?: string;
  minRecordId?: string;
  startTime?: number;
  endTime?: number;
  algorithmVendor?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      taskId: 'TaskId',
      minRecordId: 'MinRecordId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      algorithmVendor: 'AlgorithmVendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      taskId: 'string',
      minRecordId: 'string',
      startTime: 'number',
      endTime: 'number',
      algorithmVendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCdrsMonitorResultResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetCdrsMonitorResultResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetCdrsMonitorResultResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCdrsMonitorResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCdrsMonitorResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCdrsMonitorResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleDetailsRequest extends $tea.Model {
  corpId?: string;
  plateId?: string;
  startTime?: string;
  endTime?: string;
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      plateId: 'PlateId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      plateId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleDetailsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListVehicleDetailsResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListVehicleDetailsResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVehicleDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVehicleDetailsResponseBody,
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
  message?: string;
  requestId?: string;
  data?: GetCdrsMonitorListResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetCdrsMonitorListResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCdrsMonitorListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCdrsMonitorListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCdrsMonitorListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMonitorRequest extends $tea.Model {
  corpId?: string;
  taskId?: string;
  ruleName?: string;
  deviceOperateType?: string;
  deviceList?: string;
  picOperateType?: string;
  picList?: string;
  attributeOperateType?: string;
  attributeName?: string;
  attributeValueList?: string;
  description?: string;
  ruleExpression?: string;
  algorithmVendor?: string;
  notifierType?: string;
  notifierUrl?: string;
  notifierAppSecret?: string;
  notifierTimeOut?: number;
  notifierExtendValues?: string;
  picExtendList?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      taskId: 'TaskId',
      ruleName: 'RuleName',
      deviceOperateType: 'DeviceOperateType',
      deviceList: 'DeviceList',
      picOperateType: 'PicOperateType',
      picList: 'PicList',
      attributeOperateType: 'AttributeOperateType',
      attributeName: 'AttributeName',
      attributeValueList: 'AttributeValueList',
      description: 'Description',
      ruleExpression: 'RuleExpression',
      algorithmVendor: 'AlgorithmVendor',
      notifierType: 'NotifierType',
      notifierUrl: 'NotifierUrl',
      notifierAppSecret: 'NotifierAppSecret',
      notifierTimeOut: 'NotifierTimeOut',
      notifierExtendValues: 'NotifierExtendValues',
      picExtendList: 'PicExtendList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      taskId: 'string',
      ruleName: 'string',
      deviceOperateType: 'string',
      deviceList: 'string',
      picOperateType: 'string',
      picList: 'string',
      attributeOperateType: 'string',
      attributeName: 'string',
      attributeValueList: 'string',
      description: 'string',
      ruleExpression: 'string',
      algorithmVendor: 'string',
      notifierType: 'string',
      notifierUrl: 'string',
      notifierAppSecret: 'string',
      notifierTimeOut: 'number',
      notifierExtendValues: 'string',
      picExtendList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMonitorResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateMonitorResponseBody,
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
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListDataStatisticsResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListDataStatisticsResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDataStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDataStatisticsResponseBody,
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
  message?: string;
  requestId?: string;
  data?: UnbindDeviceResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': UnbindDeviceResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnbindDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnbindDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonDetailsRequest extends $tea.Model {
  corpId?: string;
  personId?: string;
  startTime?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      personId: 'PersonId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      personId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      schema: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonDetailsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListPersonDetailsResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListPersonDetailsResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPersonDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPersonDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleTagDistributeRequest extends $tea.Model {
  corpId?: string;
  tagCode?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      tagCode: 'TagCode',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      tagCode: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleTagDistributeResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListVehicleTagDistributeResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListVehicleTagDistributeResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleTagDistributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVehicleTagDistributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVehicleTagDistributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicePersonStatisticsRequest extends $tea.Model {
  dataSourceId?: string;
  statisticsType?: string;
  startTime?: string;
  endTime?: string;
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      statisticsType: 'StatisticsType',
      startTime: 'StartTime',
      endTime: 'EndTime',
      corpId: 'CorpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      statisticsType: 'string',
      startTime: 'string',
      endTime: 'string',
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicePersonStatisticsResponseBody extends $tea.Model {
  totalCount?: number;
  message?: string;
  requestId?: string;
  data?: ListDevicePersonStatisticsResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListDevicePersonStatisticsResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicePersonStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDevicePersonStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDevicePersonStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMonitorRequest extends $tea.Model {
  corpId?: string;
  monitorType?: string;
  description?: string;
  batchIndicator?: number;
  algorithmVendor?: string;
  notifierType?: string;
  notifierUrl?: string;
  notifierAppSecret?: string;
  notifierTimeOut?: number;
  notifierExtendValues?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      monitorType: 'MonitorType',
      description: 'Description',
      batchIndicator: 'BatchIndicator',
      algorithmVendor: 'AlgorithmVendor',
      notifierType: 'NotifierType',
      notifierUrl: 'NotifierUrl',
      notifierAppSecret: 'NotifierAppSecret',
      notifierTimeOut: 'NotifierTimeOut',
      notifierExtendValues: 'NotifierExtendValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      monitorType: 'string',
      description: 'string',
      batchIndicator: 'number',
      algorithmVendor: 'string',
      notifierType: 'string',
      notifierUrl: 'string',
      notifierAppSecret: 'string',
      notifierTimeOut: 'number',
      notifierExtendValues: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMonitorResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: AddMonitorResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: AddMonitorResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaginateDeviceRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  countTotalNum?: boolean;
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      countTotalNum: 'CountTotalNum',
      corpId: 'CorpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      countTotalNum: 'boolean',
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaginateDeviceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: PaginateDeviceResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: PaginateDeviceResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaginateDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PaginateDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PaginateDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCdrsMonitorRequest extends $tea.Model {
  taskId?: string;
  algorithmVendor?: string;
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      algorithmVendor: 'AlgorithmVendor',
      corpId: 'CorpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      algorithmVendor: 'string',
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCdrsMonitorResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCdrsMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopCdrsMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopCdrsMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallTrajectoryByCoordinateTimeRequest extends $tea.Model {
  startTime?: string;
  endTime?: string;
  corpId?: string;
  outputIdCount?: number;
  pointList?: RecallTrajectoryByCoordinateTimeRequestPointList[];
  outputIdTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      corpId: 'CorpId',
      outputIdCount: 'OutputIdCount',
      pointList: 'PointList',
      outputIdTypeList: 'OutputIdTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      endTime: 'string',
      corpId: 'string',
      outputIdCount: 'number',
      pointList: { 'type': 'array', 'itemType': RecallTrajectoryByCoordinateTimeRequestPointList },
      outputIdTypeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallTrajectoryByCoordinateTimeResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallTrajectoryByCoordinateTimeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecallTrajectoryByCoordinateTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecallTrajectoryByCoordinateTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapPersonFlowRequest extends $tea.Model {
  originDataSourceIdList?: { [key: string]: any };
  pageNumber?: number;
  pageSize?: number;
  targetDataSourceIdList?: { [key: string]: any };
  endTime?: string;
  startTime?: string;
  range?: string;
  static names(): { [key: string]: string } {
    return {
      originDataSourceIdList: 'OriginDataSourceIdList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      targetDataSourceIdList: 'TargetDataSourceIdList',
      endTime: 'EndTime',
      startTime: 'StartTime',
      range: 'Range',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originDataSourceIdList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      pageNumber: 'number',
      pageSize: 'number',
      targetDataSourceIdList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      endTime: 'string',
      startTime: 'string',
      range: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapPersonFlowShrinkRequest extends $tea.Model {
  originDataSourceIdListShrink?: string;
  pageNumber?: number;
  pageSize?: number;
  targetDataSourceIdListShrink?: string;
  endTime?: string;
  startTime?: string;
  range?: string;
  static names(): { [key: string]: string } {
    return {
      originDataSourceIdListShrink: 'OriginDataSourceIdList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      targetDataSourceIdListShrink: 'TargetDataSourceIdList',
      endTime: 'EndTime',
      startTime: 'StartTime',
      range: 'Range',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originDataSourceIdListShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      targetDataSourceIdListShrink: 'string',
      endTime: 'string',
      startTime: 'string',
      range: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapPersonFlowResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListCityMapPersonFlowResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListCityMapPersonFlowResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapPersonFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCityMapPersonFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCityMapPersonFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCdrsMonitorRequest extends $tea.Model {
  corpId?: string;
  monitorType?: string;
  description?: string;
  batchIndicator?: number;
  algorithmVendor?: string;
  notifierType?: string;
  notifierUrl?: string;
  notifierAppSecret?: string;
  notifierTimeOut?: number;
  notifierExtendValues?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      monitorType: 'MonitorType',
      description: 'Description',
      batchIndicator: 'BatchIndicator',
      algorithmVendor: 'AlgorithmVendor',
      notifierType: 'NotifierType',
      notifierUrl: 'NotifierUrl',
      notifierAppSecret: 'NotifierAppSecret',
      notifierTimeOut: 'NotifierTimeOut',
      notifierExtendValues: 'NotifierExtendValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      monitorType: 'string',
      description: 'string',
      batchIndicator: 'number',
      algorithmVendor: 'string',
      notifierType: 'string',
      notifierUrl: 'string',
      notifierAppSecret: 'string',
      notifierTimeOut: 'number',
      notifierExtendValues: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCdrsMonitorResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: AddCdrsMonitorResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: AddCdrsMonitorResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCdrsMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddCdrsMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddCdrsMonitorResponseBody,
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
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListMapRouteDetailsResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListMapRouteDetailsResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMapRouteDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMapRouteDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMapRouteDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTopRequest extends $tea.Model {
  corpId?: string;
  personId?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      personId: 'PersonId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      personId: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTopResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListPersonTopResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListPersonTopResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTopResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPersonTopResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPersonTopResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorResultRequest extends $tea.Model {
  corpId?: string;
  taskId?: string;
  minRecordId?: string;
  startTime?: number;
  endTime?: number;
  algorithmVendor?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      taskId: 'TaskId',
      minRecordId: 'MinRecordId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      algorithmVendor: 'AlgorithmVendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      taskId: 'string',
      minRecordId: 'string',
      startTime: 'number',
      endTime: 'number',
      algorithmVendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorResultResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetMonitorResultResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetMonitorResultResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMonitorResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMonitorResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapAoisRequest extends $tea.Model {
  radius?: number;
  latitude?: string;
  longitude?: string;
  static names(): { [key: string]: string } {
    return {
      radius: 'Radius',
      latitude: 'Latitude',
      longitude: 'Longitude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      radius: 'number',
      latitude: 'string',
      longitude: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapAoisResponseBody extends $tea.Model {
  totalCount?: number;
  message?: string;
  requestId?: string;
  data?: ListCityMapAoisResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListCityMapAoisResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapAoisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCityMapAoisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCityMapAoisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageRequest extends $tea.Model {
  corpId?: string;
  vendor?: string;
  imageContent?: string;
  imageUrl?: string;
  recognizeType?: string;
  requireCropImage?: boolean;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      vendor: 'Vendor',
      imageContent: 'ImageContent',
      imageUrl: 'ImageUrl',
      recognizeType: 'RecognizeType',
      requireCropImage: 'RequireCropImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      vendor: 'string',
      imageContent: 'string',
      imageUrl: 'string',
      recognizeType: 'string',
      requireCropImage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: RecognizeImageResponseBodyData;
  code?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: RecognizeImageResponseBodyData,
      code: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecognizeImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecognizeImageResponseBody,
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
  message?: string;
  requestId?: string;
  data?: GetMonitorListResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetMonitorListResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMonitorListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMonitorListResponseBody,
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
  message?: string;
  requestId?: string;
  data?: ListDeviceRelationResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListDeviceRelationResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDeviceRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDeviceRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTrackRequest extends $tea.Model {
  corpId?: string;
  personId?: string;
  startTime?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  imageSourceType?: string;
  aggregateDimension?: string;
  qualityScore?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      personId: 'PersonId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      imageSourceType: 'ImageSourceType',
      aggregateDimension: 'AggregateDimension',
      qualityScore: 'QualityScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      personId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      imageSourceType: 'string',
      aggregateDimension: 'string',
      qualityScore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTrackResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListPersonTrackResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListPersonTrackResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTrackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPersonTrackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPersonTrackResponseBody,
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
  totalCount?: number;
  pageNum?: string;
  requestId?: string;
  message?: string;
  pageSize?: string;
  data?: ListCityMapCameraResultsResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageNum: 'string',
      requestId: 'string',
      message: 'string',
      pageSize: 'string',
      data: { 'type': 'array', 'itemType': ListCityMapCameraResultsResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapCameraResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCityMapCameraResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCityMapCameraResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrajectoryByIdRequest extends $tea.Model {
  startTime?: string;
  endTime?: string;
  corpId?: string;
  idList?: QueryTrajectoryByIdRequestIdList[];
  deviceList?: QueryTrajectoryByIdRequestDeviceList[];
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      corpId: 'CorpId',
      idList: 'IdList',
      deviceList: 'DeviceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      endTime: 'string',
      corpId: 'string',
      idList: { 'type': 'array', 'itemType': QueryTrajectoryByIdRequestIdList },
      deviceList: { 'type': 'array', 'itemType': QueryTrajectoryByIdRequestDeviceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrajectoryByIdResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrajectoryByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTrajectoryByIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTrajectoryByIdResponseBody,
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
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListCityMapImageDetailsResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListCityMapImageDetailsResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapImageDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCityMapImageDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCityMapImageDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequest extends $tea.Model {
  name?: string;
  icon?: string;
  description?: string;
  aggregateSceneCode?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      icon: 'Icon',
      description: 'Description',
      aggregateSceneCode: 'AggregateSceneCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      icon: 'string',
      description: 'string',
      aggregateSceneCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBody extends $tea.Model {
  corpId?: string;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      message: 'string',
      requestId: 'string',
      code: 'string',
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

export class ListVehicleTopRequest extends $tea.Model {
  corpId?: string;
  plateId?: string;
  startTime?: string;
  endTime?: string;
  pageSize?: string;
  pageNum?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      plateId: 'PlateId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNum: 'PageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      plateId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageSize: 'string',
      pageNum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleTopResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListVehicleTopResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListVehicleTopResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleTopResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVehicleTopResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVehicleTopResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataStatisticsByDayRequest extends $tea.Model {
  corpId?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataStatisticsByDayResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListDataStatisticsByDayResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListDataStatisticsByDayResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataStatisticsByDayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDataStatisticsByDayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDataStatisticsByDayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleResultsRequest extends $tea.Model {
  corpId?: string;
  vehicleColor?: string;
  vehicleClass?: string;
  vehicleApplication?: string;
  startTime?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      vehicleColor: 'VehicleColor',
      vehicleClass: 'VehicleClass',
      vehicleApplication: 'VehicleApplication',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      vehicleColor: 'string',
      vehicleClass: 'string',
      vehicleApplication: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleResultsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListVehicleResultsResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListVehicleResultsResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVehicleResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVehicleResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAggregateObjectRequest extends $tea.Model {
  corpId?: string;
  objectType?: string;
  vendor?: string;
  feature?: string;
  imageContent?: string;
  imageUrl?: string;
  deviceList?: string;
  attributes?: string;
  shotTimeStart?: string;
  shotTimeEnd?: string;
  pageNumber?: number;
  pageSize?: number;
  requireTotalCount?: boolean;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      objectType: 'ObjectType',
      vendor: 'Vendor',
      feature: 'Feature',
      imageContent: 'ImageContent',
      imageUrl: 'ImageUrl',
      deviceList: 'DeviceList',
      attributes: 'Attributes',
      shotTimeStart: 'ShotTimeStart',
      shotTimeEnd: 'ShotTimeEnd',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requireTotalCount: 'RequireTotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      objectType: 'string',
      vendor: 'string',
      feature: 'string',
      imageContent: 'string',
      imageUrl: 'string',
      deviceList: 'string',
      attributes: 'string',
      shotTimeStart: 'string',
      shotTimeEnd: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requireTotalCount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAggregateObjectResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  pageSize?: number;
  total?: number;
  data?: SearchAggregateObjectResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      total: 'Total',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      total: 'number',
      data: SearchAggregateObjectResponseBodyData,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAggregateObjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchAggregateObjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchAggregateObjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpMetricsStatisticRequest extends $tea.Model {
  corpId?: string;
  tagCode?: string;
  startTime?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  userGroupList?: { [key: string]: any };
  deviceGroupList?: { [key: string]: any };
  deviceIdList?: { [key: string]: any };
  qualitScore?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      tagCode: 'TagCode',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      userGroupList: 'UserGroupList',
      deviceGroupList: 'DeviceGroupList',
      deviceIdList: 'DeviceIdList',
      qualitScore: 'QualitScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      tagCode: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      userGroupList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      deviceGroupList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      deviceIdList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      qualitScore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpMetricsStatisticShrinkRequest extends $tea.Model {
  corpId?: string;
  tagCode?: string;
  startTime?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  userGroupListShrink?: string;
  deviceGroupListShrink?: string;
  deviceIdListShrink?: string;
  qualitScore?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      tagCode: 'TagCode',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      userGroupListShrink: 'UserGroupList',
      deviceGroupListShrink: 'DeviceGroupList',
      deviceIdListShrink: 'DeviceIdList',
      qualitScore: 'QualitScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      tagCode: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      userGroupListShrink: 'string',
      deviceGroupListShrink: 'string',
      deviceIdListShrink: 'string',
      qualitScore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpMetricsStatisticResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListCorpMetricsStatisticResponseBodyData[];
  code?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListCorpMetricsStatisticResponseBodyData },
      code: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpMetricsStatisticResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCorpMetricsStatisticResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCorpMetricsStatisticResponseBody,
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
  message?: string;
  requestId?: string;
  data?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectTrajectoryRegularPatternResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectTrajectoryRegularPatternResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectTrajectoryRegularPatternResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleTrackRequest extends $tea.Model {
  corpId?: string;
  plateId?: string;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      plateId: 'PlateId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      plateId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleTrackResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListVehicleTrackResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListVehicleTrackResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleTrackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVehicleTrackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVehicleTrackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStructureStatisticsRequest extends $tea.Model {
  corpId?: string;
  backCategory?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      backCategory: 'BackCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      backCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStructureStatisticsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListStructureStatisticsResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListStructureStatisticsResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStructureStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListStructureStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListStructureStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMonitorRequest extends $tea.Model {
  taskId?: string;
  algorithmVendor?: string;
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      algorithmVendor: 'AlgorithmVendor',
      corpId: 'CorpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      algorithmVendor: 'string',
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMonitorResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopMonitorResponseBody,
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
  message?: string;
  requestId?: string;
  data?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PredictTrajectoryDestinationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PredictTrajectoryDestinationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PredictTrajectoryDestinationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRangeDeviceRequest extends $tea.Model {
  radius?: number;
  dataSourceId?: string;
  pageNumber?: number;
  pageSize?: number;
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      radius: 'Radius',
      dataSourceId: 'DataSourceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      corpId: 'CorpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      radius: 'number',
      dataSourceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRangeDeviceResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListRangeDeviceResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListRangeDeviceResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRangeDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRangeDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRangeDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapRangeStatisticRequest extends $tea.Model {
  radius?: number;
  latitude?: string;
  longitude?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      radius: 'Radius',
      latitude: 'Latitude',
      longitude: 'Longitude',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      radius: 'number',
      latitude: 'string',
      longitude: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapRangeStatisticResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListCityMapRangeStatisticResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListCityMapRangeStatisticResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapRangeStatisticResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCityMapRangeStatisticResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCityMapRangeStatisticResponseBody,
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
  totalCount?: number;
  message?: string;
  requestId?: string;
  data?: ListStorageStatisticsResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListStorageStatisticsResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStorageStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListStorageStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListStorageStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaginateProjectRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  countTotalNum?: boolean;
  type?: string;
  nameLike?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      countTotalNum: 'CountTotalNum',
      type: 'Type',
      nameLike: 'NameLike',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      countTotalNum: 'boolean',
      type: 'string',
      nameLike: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaginateProjectResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: PaginateProjectResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: PaginateProjectResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaginateProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PaginateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PaginateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapCameraStatisticsRequest extends $tea.Model {
  endTime?: string;
  startTime?: string;
  dataSourceIdList?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      dataSourceIdList: 'DataSourceIdList',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      dataSourceIdList: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapCameraStatisticsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListCityMapCameraStatisticsResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListCityMapCameraStatisticsResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapCameraStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCityMapCameraStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCityMapCameraStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCdrsMonitorRequest extends $tea.Model {
  corpId?: string;
  taskId?: string;
  ruleName?: string;
  deviceOperateType?: string;
  deviceList?: string;
  picOperateType?: string;
  picList?: string;
  attributeOperateType?: string;
  attributeName?: string;
  attributeValueList?: string;
  description?: string;
  ruleExpression?: string;
  algorithmVendor?: string;
  notifierType?: string;
  notifierUrl?: string;
  notifierAppSecret?: string;
  notifierTimeOut?: number;
  notifierExtendValues?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      taskId: 'TaskId',
      ruleName: 'RuleName',
      deviceOperateType: 'DeviceOperateType',
      deviceList: 'DeviceList',
      picOperateType: 'PicOperateType',
      picList: 'PicList',
      attributeOperateType: 'AttributeOperateType',
      attributeName: 'AttributeName',
      attributeValueList: 'AttributeValueList',
      description: 'Description',
      ruleExpression: 'RuleExpression',
      algorithmVendor: 'AlgorithmVendor',
      notifierType: 'NotifierType',
      notifierUrl: 'NotifierUrl',
      notifierAppSecret: 'NotifierAppSecret',
      notifierTimeOut: 'NotifierTimeOut',
      notifierExtendValues: 'NotifierExtendValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      taskId: 'string',
      ruleName: 'string',
      deviceOperateType: 'string',
      deviceList: 'string',
      picOperateType: 'string',
      picList: 'string',
      attributeOperateType: 'string',
      attributeName: 'string',
      attributeValueList: 'string',
      description: 'string',
      ruleExpression: 'string',
      algorithmVendor: 'string',
      notifierType: 'string',
      notifierUrl: 'string',
      notifierAppSecret: 'string',
      notifierTimeOut: 'number',
      notifierExtendValues: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCdrsMonitorResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCdrsMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateCdrsMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateCdrsMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonResultRequest extends $tea.Model {
  corpId?: string;
  age?: string;
  gender?: string;
  profession?: string;
  startTime?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  qualityScore?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      age: 'Age',
      gender: 'Gender',
      profession: 'Profession',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      qualityScore: 'QualityScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      age: 'string',
      gender: 'string',
      profession: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      qualityScore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonResultResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListPersonResultResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListPersonResultResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPersonResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPersonResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagMetricsRequest extends $tea.Model {
  corpId?: string;
  tagCode?: { [key: string]: any };
  aggregateType?: string;
  startTime?: string;
  endTime?: string;
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      tagCode: 'TagCode',
      aggregateType: 'AggregateType',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      tagCode: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      aggregateType: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagMetricsShrinkRequest extends $tea.Model {
  corpId?: string;
  tagCodeShrink?: string;
  aggregateType?: string;
  startTime?: string;
  endTime?: string;
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      tagCodeShrink: 'TagCode',
      aggregateType: 'AggregateType',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      tagCodeShrink: 'string',
      aggregateType: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagMetricsResponseBody extends $tea.Model {
  totalCount?: string;
  requestId?: string;
  message?: string;
  pageSize?: string;
  pageNumber?: string;
  data?: ListTagMetricsResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'string',
      requestId: 'string',
      message: 'string',
      pageSize: 'string',
      pageNumber: 'string',
      data: { 'type': 'array', 'itemType': ListTagMetricsResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagMetricsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTagRequest extends $tea.Model {
  corpId?: string;
  tagCode?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      tagCode: 'TagCode',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      tagCode: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTagResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListPersonTagResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListPersonTagResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPersonTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPersonTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectRequest extends $tea.Model {
  corpId?: string;
  icon?: string;
  name?: string;
  description?: string;
  aggregateSceneCode?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      icon: 'Icon',
      name: 'Name',
      description: 'Description',
      aggregateSceneCode: 'AggregateSceneCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      icon: 'string',
      name: 'string',
      description: 'string',
      aggregateSceneCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
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

export class ListDevicePersonRequest extends $tea.Model {
  dataSourceId?: string;
  statisticsType?: string;
  startTime?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      statisticsType: 'StatisticsType',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      corpId: 'CorpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      statisticsType: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicePersonResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListDevicePersonResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListDevicePersonResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicePersonResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDevicePersonResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDevicePersonResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceDetailRequest extends $tea.Model {
  dataSourceId?: string;
  pageNumber?: number;
  pageSize?: number;
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      corpId: 'CorpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceDetailResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  data?: ListDeviceDetailResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListDeviceDetailResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDeviceDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDeviceDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceGenderStatisticsRequest extends $tea.Model {
  dataSourceId?: string;
  startTime?: string;
  endTime?: string;
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      corpId: 'CorpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      startTime: 'string',
      endTime: 'string',
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceGenderStatisticsResponseBody extends $tea.Model {
  totalCount?: number;
  message?: string;
  requestId?: string;
  data?: ListDeviceGenderStatisticsResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListDeviceGenderStatisticsResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceGenderStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDeviceGenderStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDeviceGenderStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchObjectResponseBodyDataBodyList extends $tea.Model {
  sourceImageUrl?: string;
  deviceID?: string;
  objectType?: string;
  targetImageUrl?: string;
  rightBottomY?: number;
  leftTopY?: number;
  score?: number;
  shotTime?: string;
  rightBottomX?: number;
  leftTopX?: number;
  static names(): { [key: string]: string } {
    return {
      sourceImageUrl: 'SourceImageUrl',
      deviceID: 'DeviceID',
      objectType: 'ObjectType',
      targetImageUrl: 'TargetImageUrl',
      rightBottomY: 'RightBottomY',
      leftTopY: 'LeftTopY',
      score: 'Score',
      shotTime: 'ShotTime',
      rightBottomX: 'RightBottomX',
      leftTopX: 'LeftTopX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceImageUrl: 'string',
      deviceID: 'string',
      objectType: 'string',
      targetImageUrl: 'string',
      rightBottomY: 'number',
      leftTopY: 'number',
      score: 'number',
      shotTime: 'string',
      rightBottomX: 'number',
      leftTopX: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchObjectResponseBodyDataFaceList extends $tea.Model {
  sourceImageUrl?: string;
  deviceID?: string;
  objectType?: string;
  targetImageUrl?: string;
  rightBottomY?: number;
  leftTopY?: number;
  score?: number;
  shotTime?: string;
  rightBottomX?: number;
  leftTopX?: number;
  static names(): { [key: string]: string } {
    return {
      sourceImageUrl: 'SourceImageUrl',
      deviceID: 'DeviceID',
      objectType: 'ObjectType',
      targetImageUrl: 'TargetImageUrl',
      rightBottomY: 'RightBottomY',
      leftTopY: 'LeftTopY',
      score: 'Score',
      shotTime: 'ShotTime',
      rightBottomX: 'RightBottomX',
      leftTopX: 'LeftTopX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceImageUrl: 'string',
      deviceID: 'string',
      objectType: 'string',
      targetImageUrl: 'string',
      rightBottomY: 'number',
      leftTopY: 'number',
      score: 'number',
      shotTime: 'string',
      rightBottomX: 'number',
      leftTopX: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchObjectResponseBodyDataMotorList extends $tea.Model {
  sourceImageUrl?: string;
  deviceID?: string;
  objectType?: string;
  targetImageUrl?: string;
  rightBottomY?: number;
  leftTopY?: number;
  score?: number;
  shotTime?: string;
  rightBottomX?: number;
  leftTopX?: number;
  static names(): { [key: string]: string } {
    return {
      sourceImageUrl: 'SourceImageUrl',
      deviceID: 'DeviceID',
      objectType: 'ObjectType',
      targetImageUrl: 'TargetImageUrl',
      rightBottomY: 'RightBottomY',
      leftTopY: 'LeftTopY',
      score: 'Score',
      shotTime: 'ShotTime',
      rightBottomX: 'RightBottomX',
      leftTopX: 'LeftTopX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceImageUrl: 'string',
      deviceID: 'string',
      objectType: 'string',
      targetImageUrl: 'string',
      rightBottomY: 'number',
      leftTopY: 'number',
      score: 'number',
      shotTime: 'string',
      rightBottomX: 'number',
      leftTopX: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchObjectResponseBodyDataNonMotorList extends $tea.Model {
  sourceImageUrl?: string;
  deviceID?: string;
  objectType?: string;
  targetImageUrl?: string;
  rightBottomY?: number;
  leftTopY?: number;
  score?: number;
  shotTime?: string;
  rightBottomX?: number;
  leftTopX?: number;
  static names(): { [key: string]: string } {
    return {
      sourceImageUrl: 'SourceImageUrl',
      deviceID: 'DeviceID',
      objectType: 'ObjectType',
      targetImageUrl: 'TargetImageUrl',
      rightBottomY: 'RightBottomY',
      leftTopY: 'LeftTopY',
      score: 'Score',
      shotTime: 'ShotTime',
      rightBottomX: 'RightBottomX',
      leftTopX: 'LeftTopX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceImageUrl: 'string',
      deviceID: 'string',
      objectType: 'string',
      targetImageUrl: 'string',
      rightBottomY: 'number',
      leftTopY: 'number',
      score: 'number',
      shotTime: 'string',
      rightBottomX: 'number',
      leftTopX: 'number',
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

export class ListAreaHotSpotMetricsResponseBodyData extends $tea.Model {
  coordinates?: string;
  deviceId?: string;
  times?: string;
  intervalTime?: string;
  personId?: string;
  static names(): { [key: string]: string } {
    return {
      coordinates: 'Coordinates',
      deviceId: 'DeviceId',
      times: 'Times',
      intervalTime: 'IntervalTime',
      personId: 'PersonId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coordinates: 'string',
      deviceId: 'string',
      times: 'string',
      intervalTime: 'string',
      personId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindDeviceRequestDevices extends $tea.Model {
  deviceId?: string;
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      corpId: 'CorpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindDeviceResponseBodyData extends $tea.Model {
  deviceId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
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
  picUrl?: string;
  rightBottomY?: string;
  score?: string;
  monitorPicUrl?: string;
  rightBottomX?: string;
  extendInfo?: GetCdrsMonitorResultResponseBodyDataRecordsExtendInfo;
  gbId?: string;
  leftUpY?: string;
  leftUpX?: string;
  shotTime?: string;
  taskId?: string;
  targetPicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      picUrl: 'PicUrl',
      rightBottomY: 'RightBottomY',
      score: 'Score',
      monitorPicUrl: 'MonitorPicUrl',
      rightBottomX: 'RightBottomX',
      extendInfo: 'ExtendInfo',
      gbId: 'GbId',
      leftUpY: 'LeftUpY',
      leftUpX: 'LeftUpX',
      shotTime: 'ShotTime',
      taskId: 'TaskId',
      targetPicUrl: 'TargetPicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picUrl: 'string',
      rightBottomY: 'string',
      score: 'string',
      monitorPicUrl: 'string',
      rightBottomX: 'string',
      extendInfo: GetCdrsMonitorResultResponseBodyDataRecordsExtendInfo,
      gbId: 'string',
      leftUpY: 'string',
      leftUpX: 'string',
      shotTime: 'string',
      taskId: 'string',
      targetPicUrl: 'string',
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

export class ListVehicleDetailsResponseBodyData extends $tea.Model {
  vehicleApplication?: string;
  sourceUrl?: string;
  gender?: string;
  vehicleColor?: string;
  vehicleId?: string;
  sourceImageStoragePath?: string;
  personType?: string;
  popularPoi?: string;
  popularAddress?: string;
  plateId?: string;
  targetUrl?: string;
  vehicleClass?: string;
  prefOutTime?: string;
  personId?: string;
  targetImageStoragePath?: string;
  static names(): { [key: string]: string } {
    return {
      vehicleApplication: 'VehicleApplication',
      sourceUrl: 'SourceUrl',
      gender: 'Gender',
      vehicleColor: 'VehicleColor',
      vehicleId: 'VehicleId',
      sourceImageStoragePath: 'SourceImageStoragePath',
      personType: 'PersonType',
      popularPoi: 'PopularPoi',
      popularAddress: 'PopularAddress',
      plateId: 'PlateId',
      targetUrl: 'TargetUrl',
      vehicleClass: 'VehicleClass',
      prefOutTime: 'PrefOutTime',
      personId: 'PersonId',
      targetImageStoragePath: 'TargetImageStoragePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vehicleApplication: 'string',
      sourceUrl: 'string',
      gender: 'string',
      vehicleColor: 'string',
      vehicleId: 'string',
      sourceImageStoragePath: 'string',
      personType: 'string',
      popularPoi: 'string',
      popularAddress: 'string',
      plateId: 'string',
      targetUrl: 'string',
      vehicleClass: 'string',
      prefOutTime: 'string',
      personId: 'string',
      targetImageStoragePath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCdrsMonitorListResponseBodyDataRecords extends $tea.Model {
  status?: string;
  ruleExpression?: string;
  imageMatch?: string;
  monitorType?: string;
  createDate?: string;
  ruleName?: string;
  notifierType?: string;
  description?: string;
  expression?: string;
  notifierExtra?: string;
  attributes?: string;
  deviceList?: string;
  taskId?: string;
  modifiedDate?: string;
  algorithmVendor?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      ruleExpression: 'RuleExpression',
      imageMatch: 'ImageMatch',
      monitorType: 'MonitorType',
      createDate: 'CreateDate',
      ruleName: 'RuleName',
      notifierType: 'NotifierType',
      description: 'Description',
      expression: 'Expression',
      notifierExtra: 'NotifierExtra',
      attributes: 'Attributes',
      deviceList: 'DeviceList',
      taskId: 'TaskId',
      modifiedDate: 'ModifiedDate',
      algorithmVendor: 'AlgorithmVendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      ruleExpression: 'string',
      imageMatch: 'string',
      monitorType: 'string',
      createDate: 'string',
      ruleName: 'string',
      notifierType: 'string',
      description: 'string',
      expression: 'string',
      notifierExtra: 'string',
      attributes: 'string',
      deviceList: 'string',
      taskId: 'string',
      modifiedDate: 'string',
      algorithmVendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCdrsMonitorListResponseBodyData extends $tea.Model {
  records?: GetCdrsMonitorListResponseBodyDataRecords[];
  pageNo?: number;
  totalPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      pageNo: 'PageNo',
      totalPage: 'TotalPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': GetCdrsMonitorListResponseBodyDataRecords },
      pageNo: 'number',
      totalPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
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

export class UnbindDeviceResponseBodyData extends $tea.Model {
  deviceId?: string;
  success?: boolean;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonDetailsResponseBodyData extends $tea.Model {
  updateTime?: string;
  gender?: string;
  bodyTargetImage?: string;
  preferredColor?: string;
  hotSpotAddress?: string;
  age?: string;
  personType?: string;
  transportation?: string;
  profession?: string;
  address?: string;
  faceSourceImage?: string;
  faceTargetImage?: string;
  prefOutTime?: string;
  bodySourceImage?: string;
  personId?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      gender: 'Gender',
      bodyTargetImage: 'BodyTargetImage',
      preferredColor: 'PreferredColor',
      hotSpotAddress: 'HotSpotAddress',
      age: 'Age',
      personType: 'PersonType',
      transportation: 'Transportation',
      profession: 'Profession',
      address: 'Address',
      faceSourceImage: 'FaceSourceImage',
      faceTargetImage: 'FaceTargetImage',
      prefOutTime: 'PrefOutTime',
      bodySourceImage: 'BodySourceImage',
      personId: 'PersonId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'string',
      gender: 'string',
      bodyTargetImage: 'string',
      preferredColor: 'string',
      hotSpotAddress: 'string',
      age: 'string',
      personType: 'string',
      transportation: 'string',
      profession: 'string',
      address: 'string',
      faceSourceImage: 'string',
      faceTargetImage: 'string',
      prefOutTime: 'string',
      bodySourceImage: 'string',
      personId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleTagDistributeResponseBodyData extends $tea.Model {
  value?: string;
  corpId?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      corpId: 'CorpId',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      corpId: 'string',
      tagValue: 'string',
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
  records?: PaginateDeviceResponseBodyDataRecords[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': PaginateDeviceResponseBodyDataRecords },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallTrajectoryByCoordinateTimeRequestPointList extends $tea.Model {
  endTime?: string;
  startTime?: string;
  longitude?: number;
  latitude?: number;
  deltaDistance?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      longitude: 'Longitude',
      latitude: 'Latitude',
      deltaDistance: 'DeltaDistance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      longitude: 'number',
      latitude: 'number',
      deltaDistance: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapPersonFlowResponseBodyData extends $tea.Model {
  flowNumber?: string;
  originDataSourceId?: string;
  targetDataSourceId?: string;
  flowDirection?: string;
  static names(): { [key: string]: string } {
    return {
      flowNumber: 'FlowNumber',
      originDataSourceId: 'OriginDataSourceId',
      targetDataSourceId: 'TargetDataSourceId',
      flowDirection: 'FlowDirection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowNumber: 'string',
      originDataSourceId: 'string',
      targetDataSourceId: 'string',
      flowDirection: 'string',
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

export class ListMapRouteDetailsResponseBodyData extends $tea.Model {
  type?: string;
  destination?: string;
  origin?: string;
  route?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      destination: 'Destination',
      origin: 'Origin',
      route: 'Route',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      destination: 'string',
      origin: 'string',
      route: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTopResponseBodyData extends $tea.Model {
  frequency?: string;
  poiId?: string;
  corpId?: string;
  passHour?: string;
  poiName?: string;
  personId?: string;
  static names(): { [key: string]: string } {
    return {
      frequency: 'Frequency',
      poiId: 'PoiId',
      corpId: 'CorpId',
      passHour: 'PassHour',
      poiName: 'PoiName',
      personId: 'PersonId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frequency: 'string',
      poiId: 'string',
      corpId: 'string',
      passHour: 'string',
      poiName: 'string',
      personId: 'string',
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
  picUrl?: string;
  rightBottomY?: string;
  score?: string;
  monitorPicUrl?: string;
  rightBottomX?: string;
  extendInfo?: GetMonitorResultResponseBodyDataRecordsExtendInfo;
  gbId?: string;
  leftUpY?: string;
  leftUpX?: string;
  shotTime?: string;
  taskId?: string;
  targetPicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      picUrl: 'PicUrl',
      rightBottomY: 'RightBottomY',
      score: 'Score',
      monitorPicUrl: 'MonitorPicUrl',
      rightBottomX: 'RightBottomX',
      extendInfo: 'ExtendInfo',
      gbId: 'GbId',
      leftUpY: 'LeftUpY',
      leftUpX: 'LeftUpX',
      shotTime: 'ShotTime',
      taskId: 'TaskId',
      targetPicUrl: 'TargetPicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picUrl: 'string',
      rightBottomY: 'string',
      score: 'string',
      monitorPicUrl: 'string',
      rightBottomX: 'string',
      extendInfo: GetMonitorResultResponseBodyDataRecordsExtendInfo,
      gbId: 'string',
      leftUpY: 'string',
      leftUpX: 'string',
      shotTime: 'string',
      taskId: 'string',
      targetPicUrl: 'string',
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

export class ListCityMapAoisResponseBodyData extends $tea.Model {
  value?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageResponseBodyDataBodyList extends $tea.Model {
  cropAlgorithmCode?: string;
  rightBottomY?: number;
  feature?: string;
  leftTopY?: number;
  targetImageContent?: string;
  leftTopX?: number;
  rightBottomX?: number;
  static names(): { [key: string]: string } {
    return {
      cropAlgorithmCode: 'CropAlgorithmCode',
      rightBottomY: 'RightBottomY',
      feature: 'Feature',
      leftTopY: 'LeftTopY',
      targetImageContent: 'TargetImageContent',
      leftTopX: 'LeftTopX',
      rightBottomX: 'RightBottomX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cropAlgorithmCode: 'string',
      rightBottomY: 'number',
      feature: 'string',
      leftTopY: 'number',
      targetImageContent: 'string',
      leftTopX: 'number',
      rightBottomX: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageResponseBodyDataFaceList extends $tea.Model {
  cropAlgorithmCode?: string;
  feature?: string;
  rightBottomY?: number;
  leftTopY?: number;
  targetImageContent?: string;
  faceQuality?: number;
  rightBottomX?: number;
  leftTopX?: number;
  faceKeyPointQuality?: number;
  static names(): { [key: string]: string } {
    return {
      cropAlgorithmCode: 'CropAlgorithmCode',
      feature: 'Feature',
      rightBottomY: 'RightBottomY',
      leftTopY: 'LeftTopY',
      targetImageContent: 'TargetImageContent',
      faceQuality: 'FaceQuality',
      rightBottomX: 'RightBottomX',
      leftTopX: 'LeftTopX',
      faceKeyPointQuality: 'FaceKeyPointQuality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cropAlgorithmCode: 'string',
      feature: 'string',
      rightBottomY: 'number',
      leftTopY: 'number',
      targetImageContent: 'string',
      faceQuality: 'number',
      rightBottomX: 'number',
      leftTopX: 'number',
      faceKeyPointQuality: 'number',
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

export class GetMonitorListResponseBodyDataRecords extends $tea.Model {
  status?: string;
  ruleExpression?: string;
  imageMatch?: string;
  monitorType?: string;
  createDate?: string;
  ruleName?: string;
  notifierType?: string;
  description?: string;
  expression?: string;
  notifierExtra?: string;
  attributes?: string;
  deviceList?: string;
  taskId?: string;
  modifiedDate?: string;
  algorithmVendor?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      ruleExpression: 'RuleExpression',
      imageMatch: 'ImageMatch',
      monitorType: 'MonitorType',
      createDate: 'CreateDate',
      ruleName: 'RuleName',
      notifierType: 'NotifierType',
      description: 'Description',
      expression: 'Expression',
      notifierExtra: 'NotifierExtra',
      attributes: 'Attributes',
      deviceList: 'DeviceList',
      taskId: 'TaskId',
      modifiedDate: 'ModifiedDate',
      algorithmVendor: 'AlgorithmVendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      ruleExpression: 'string',
      imageMatch: 'string',
      monitorType: 'string',
      createDate: 'string',
      ruleName: 'string',
      notifierType: 'string',
      description: 'string',
      expression: 'string',
      notifierExtra: 'string',
      attributes: 'string',
      deviceList: 'string',
      taskId: 'string',
      modifiedDate: 'string',
      algorithmVendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorListResponseBodyData extends $tea.Model {
  records?: GetMonitorListResponseBodyDataRecords[];
  totalPage?: number;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      totalPage: 'TotalPage',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': GetMonitorListResponseBodyDataRecords },
      totalPage: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
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

export class ListPersonTrackResponseBodyData extends $tea.Model {
  sourceUrl?: string;
  rightBottomY?: string;
  dataSourceName?: string;
  picUrlPath?: string;
  dataSourceId?: string;
  rightBottomX?: string;
  targetPicUrlPath?: string;
  leftTopY?: string;
  targetUrl?: string;
  corpId?: string;
  longitude?: string;
  latitude?: string;
  shotTime?: string;
  personId?: string;
  leftTopX?: string;
  tagGender?: string;
  tagAge?: string;
  static names(): { [key: string]: string } {
    return {
      sourceUrl: 'SourceUrl',
      rightBottomY: 'RightBottomY',
      dataSourceName: 'DataSourceName',
      picUrlPath: 'PicUrlPath',
      dataSourceId: 'DataSourceId',
      rightBottomX: 'RightBottomX',
      targetPicUrlPath: 'TargetPicUrlPath',
      leftTopY: 'LeftTopY',
      targetUrl: 'TargetUrl',
      corpId: 'CorpId',
      longitude: 'Longitude',
      latitude: 'Latitude',
      shotTime: 'ShotTime',
      personId: 'PersonId',
      leftTopX: 'LeftTopX',
      tagGender: 'TagGender',
      tagAge: 'TagAge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceUrl: 'string',
      rightBottomY: 'string',
      dataSourceName: 'string',
      picUrlPath: 'string',
      dataSourceId: 'string',
      rightBottomX: 'string',
      targetPicUrlPath: 'string',
      leftTopY: 'string',
      targetUrl: 'string',
      corpId: 'string',
      longitude: 'string',
      latitude: 'string',
      shotTime: 'string',
      personId: 'string',
      leftTopX: 'string',
      tagGender: 'string',
      tagAge: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapCameraResultsResponseBodyData extends $tea.Model {
  dataSourceName?: string;
  dataSourceId?: string;
  corpId?: string;
  longitude?: string;
  latitude?: string;
  dataSourcePoi?: string;
  nearPoi?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceName: 'DataSourceName',
      dataSourceId: 'DataSourceId',
      corpId: 'CorpId',
      longitude: 'Longitude',
      latitude: 'Latitude',
      dataSourcePoi: 'DataSourcePoi',
      nearPoi: 'NearPoi',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceName: 'string',
      dataSourceId: 'string',
      corpId: 'string',
      longitude: 'string',
      latitude: 'string',
      dataSourcePoi: 'string',
      nearPoi: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrajectoryByIdRequestIdList extends $tea.Model {
  idValue?: string;
  idType?: string;
  static names(): { [key: string]: string } {
    return {
      idValue: 'IdValue',
      idType: 'IdType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idValue: 'string',
      idType: 'string',
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

export class ListCityMapImageDetailsResponseBodyData extends $tea.Model {
  motorTargetImageStoragePath?: string;
  rightBottomY?: string;
  dataSourceId?: string;
  recordId?: string;
  vehicleColor?: string;
  sourceImageStoragePath?: string;
  ageUpLimit?: string;
  coatColor?: string;
  rightBottomX?: string;
  trousersColorReliability?: string;
  ageLowerLimit?: string;
  leftTopY?: string;
  shotTime?: string;
  personTargetImageStoragePath?: string;
  vehicleClassReliability?: string;
  genderCodeReliability?: string;
  gender?: string;
  trousersColor?: string;
  ageCodeReliability?: string;
  faceTargetImageStoragePath?: string;
  vehicleClass?: string;
  vehicleColorReliability?: string;
  leftTopX?: string;
  ageLowerLimitReliability?: string;
  coatColorReliability?: string;
  static names(): { [key: string]: string } {
    return {
      motorTargetImageStoragePath: 'MotorTargetImageStoragePath',
      rightBottomY: 'RightBottomY',
      dataSourceId: 'DataSourceId',
      recordId: 'RecordId',
      vehicleColor: 'VehicleColor',
      sourceImageStoragePath: 'SourceImageStoragePath',
      ageUpLimit: 'AgeUpLimit',
      coatColor: 'CoatColor',
      rightBottomX: 'RightBottomX',
      trousersColorReliability: 'TrousersColorReliability',
      ageLowerLimit: 'AgeLowerLimit',
      leftTopY: 'LeftTopY',
      shotTime: 'ShotTime',
      personTargetImageStoragePath: 'PersonTargetImageStoragePath',
      vehicleClassReliability: 'VehicleClassReliability',
      genderCodeReliability: 'GenderCodeReliability',
      gender: 'Gender',
      trousersColor: 'TrousersColor',
      ageCodeReliability: 'AgeCodeReliability',
      faceTargetImageStoragePath: 'FaceTargetImageStoragePath',
      vehicleClass: 'VehicleClass',
      vehicleColorReliability: 'VehicleColorReliability',
      leftTopX: 'LeftTopX',
      ageLowerLimitReliability: 'AgeLowerLimitReliability',
      coatColorReliability: 'CoatColorReliability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      motorTargetImageStoragePath: 'string',
      rightBottomY: 'string',
      dataSourceId: 'string',
      recordId: 'string',
      vehicleColor: 'string',
      sourceImageStoragePath: 'string',
      ageUpLimit: 'string',
      coatColor: 'string',
      rightBottomX: 'string',
      trousersColorReliability: 'string',
      ageLowerLimit: 'string',
      leftTopY: 'string',
      shotTime: 'string',
      personTargetImageStoragePath: 'string',
      vehicleClassReliability: 'string',
      genderCodeReliability: 'string',
      gender: 'string',
      trousersColor: 'string',
      ageCodeReliability: 'string',
      faceTargetImageStoragePath: 'string',
      vehicleClass: 'string',
      vehicleColorReliability: 'string',
      leftTopX: 'string',
      ageLowerLimitReliability: 'string',
      coatColorReliability: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleTopResponseBodyData extends $tea.Model {
  frequency?: string;
  poiId?: string;
  corpId?: string;
  vehicleId?: string;
  passHour?: string;
  poiName?: string;
  static names(): { [key: string]: string } {
    return {
      frequency: 'Frequency',
      poiId: 'PoiId',
      corpId: 'CorpId',
      vehicleId: 'VehicleId',
      passHour: 'PassHour',
      poiName: 'PoiName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frequency: 'string',
      poiId: 'string',
      corpId: 'string',
      vehicleId: 'string',
      passHour: 'string',
      poiName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataStatisticsByDayResponseBodyData extends $tea.Model {
  nonMotorNumber?: number;
  faceNumber?: number;
  motorNumber?: number;
  corpId?: string;
  date?: string;
  bodyNumber?: number;
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      nonMotorNumber: 'NonMotorNumber',
      faceNumber: 'FaceNumber',
      motorNumber: 'MotorNumber',
      corpId: 'CorpId',
      date: 'Date',
      bodyNumber: 'BodyNumber',
      totalNumber: 'TotalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonMotorNumber: 'number',
      faceNumber: 'number',
      motorNumber: 'number',
      corpId: 'string',
      date: 'string',
      bodyNumber: 'number',
      totalNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleResultsResponseBodyData extends $tea.Model {
  vehicleApplication?: string;
  profession?: string;
  updateTime?: string;
  gender?: string;
  plateId?: string;
  vehicleClass?: string;
  liveAddress?: string;
  vehicleId?: string;
  personId?: string;
  static names(): { [key: string]: string } {
    return {
      vehicleApplication: 'VehicleApplication',
      profession: 'Profession',
      updateTime: 'UpdateTime',
      gender: 'Gender',
      plateId: 'PlateId',
      vehicleClass: 'VehicleClass',
      liveAddress: 'LiveAddress',
      vehicleId: 'VehicleId',
      personId: 'PersonId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vehicleApplication: 'string',
      profession: 'string',
      updateTime: 'string',
      gender: 'string',
      plateId: 'string',
      vehicleClass: 'string',
      liveAddress: 'string',
      vehicleId: 'string',
      personId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAggregateObjectResponseBodyDataBodyList extends $tea.Model {
  deviceID?: string;
  objectType?: string;
  deviceName?: string;
  rightBottomY?: number;
  score?: number;
  rightBottomX?: number;
  deviceLongitude?: number;
  sourceImageUrl?: string;
  targetImageUrl?: string;
  leftTopY?: number;
  shotTime?: string;
  personId?: string;
  leftTopX?: number;
  deviceLatitude?: number;
  static names(): { [key: string]: string } {
    return {
      deviceID: 'DeviceID',
      objectType: 'ObjectType',
      deviceName: 'DeviceName',
      rightBottomY: 'RightBottomY',
      score: 'Score',
      rightBottomX: 'RightBottomX',
      deviceLongitude: 'DeviceLongitude',
      sourceImageUrl: 'SourceImageUrl',
      targetImageUrl: 'TargetImageUrl',
      leftTopY: 'LeftTopY',
      shotTime: 'ShotTime',
      personId: 'PersonId',
      leftTopX: 'LeftTopX',
      deviceLatitude: 'DeviceLatitude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceID: 'string',
      objectType: 'string',
      deviceName: 'string',
      rightBottomY: 'number',
      score: 'number',
      rightBottomX: 'number',
      deviceLongitude: 'number',
      sourceImageUrl: 'string',
      targetImageUrl: 'string',
      leftTopY: 'number',
      shotTime: 'string',
      personId: 'string',
      leftTopX: 'number',
      deviceLatitude: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAggregateObjectResponseBodyDataFaceList extends $tea.Model {
  deviceID?: string;
  objectType?: string;
  deviceName?: string;
  rightBottomY?: number;
  score?: number;
  rightBottomX?: number;
  deviceLongitude?: number;
  sourceImageUrl?: string;
  targetImageUrl?: string;
  leftTopY?: number;
  shotTime?: string;
  personId?: string;
  leftTopX?: number;
  deviceLatitude?: number;
  static names(): { [key: string]: string } {
    return {
      deviceID: 'DeviceID',
      objectType: 'ObjectType',
      deviceName: 'DeviceName',
      rightBottomY: 'RightBottomY',
      score: 'Score',
      rightBottomX: 'RightBottomX',
      deviceLongitude: 'DeviceLongitude',
      sourceImageUrl: 'SourceImageUrl',
      targetImageUrl: 'TargetImageUrl',
      leftTopY: 'LeftTopY',
      shotTime: 'ShotTime',
      personId: 'PersonId',
      leftTopX: 'LeftTopX',
      deviceLatitude: 'DeviceLatitude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceID: 'string',
      objectType: 'string',
      deviceName: 'string',
      rightBottomY: 'number',
      score: 'number',
      rightBottomX: 'number',
      deviceLongitude: 'number',
      sourceImageUrl: 'string',
      targetImageUrl: 'string',
      leftTopY: 'number',
      shotTime: 'string',
      personId: 'string',
      leftTopX: 'number',
      deviceLatitude: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAggregateObjectResponseBodyDataMotorList extends $tea.Model {
  deviceID?: string;
  objectType?: string;
  deviceName?: string;
  rightBottomY?: number;
  score?: number;
  rightBottomX?: number;
  deviceLongitude?: number;
  sourceImageUrl?: string;
  targetImageUrl?: string;
  leftTopY?: number;
  shotTime?: string;
  personId?: string;
  leftTopX?: number;
  deviceLatitude?: number;
  static names(): { [key: string]: string } {
    return {
      deviceID: 'DeviceID',
      objectType: 'ObjectType',
      deviceName: 'DeviceName',
      rightBottomY: 'RightBottomY',
      score: 'Score',
      rightBottomX: 'RightBottomX',
      deviceLongitude: 'DeviceLongitude',
      sourceImageUrl: 'SourceImageUrl',
      targetImageUrl: 'TargetImageUrl',
      leftTopY: 'LeftTopY',
      shotTime: 'ShotTime',
      personId: 'PersonId',
      leftTopX: 'LeftTopX',
      deviceLatitude: 'DeviceLatitude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceID: 'string',
      objectType: 'string',
      deviceName: 'string',
      rightBottomY: 'number',
      score: 'number',
      rightBottomX: 'number',
      deviceLongitude: 'number',
      sourceImageUrl: 'string',
      targetImageUrl: 'string',
      leftTopY: 'number',
      shotTime: 'string',
      personId: 'string',
      leftTopX: 'number',
      deviceLatitude: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAggregateObjectResponseBodyDataNonMotorList extends $tea.Model {
  deviceID?: string;
  objectType?: string;
  deviceName?: string;
  rightBottomY?: number;
  score?: number;
  rightBottomX?: number;
  deviceLongitude?: number;
  sourceImageUrl?: string;
  targetImageUrl?: string;
  leftTopY?: number;
  shotTime?: string;
  personId?: string;
  leftTopX?: number;
  deviceLatitude?: number;
  static names(): { [key: string]: string } {
    return {
      deviceID: 'DeviceID',
      objectType: 'ObjectType',
      deviceName: 'DeviceName',
      rightBottomY: 'RightBottomY',
      score: 'Score',
      rightBottomX: 'RightBottomX',
      deviceLongitude: 'DeviceLongitude',
      sourceImageUrl: 'SourceImageUrl',
      targetImageUrl: 'TargetImageUrl',
      leftTopY: 'LeftTopY',
      shotTime: 'ShotTime',
      personId: 'PersonId',
      leftTopX: 'LeftTopX',
      deviceLatitude: 'DeviceLatitude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceID: 'string',
      objectType: 'string',
      deviceName: 'string',
      rightBottomY: 'number',
      score: 'number',
      rightBottomX: 'number',
      deviceLongitude: 'number',
      sourceImageUrl: 'string',
      targetImageUrl: 'string',
      leftTopY: 'number',
      shotTime: 'string',
      personId: 'string',
      leftTopX: 'number',
      deviceLatitude: 'number',
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

export class ListCorpMetricsStatisticResponseBodyData extends $tea.Model {
  dateId?: string;
  deviceGroupId?: string;
  deviceId?: string;
  tagCode?: string;
  userGroupId?: string;
  corpId?: string;
  tagMetrics?: string;
  tagValue?: string;
  personId?: string;
  static names(): { [key: string]: string } {
    return {
      dateId: 'DateId',
      deviceGroupId: 'DeviceGroupId',
      deviceId: 'DeviceId',
      tagCode: 'TagCode',
      userGroupId: 'UserGroupId',
      corpId: 'CorpId',
      tagMetrics: 'TagMetrics',
      tagValue: 'TagValue',
      personId: 'PersonId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateId: 'string',
      deviceGroupId: 'string',
      deviceId: 'string',
      tagCode: 'string',
      userGroupId: 'string',
      corpId: 'string',
      tagMetrics: 'string',
      tagValue: 'string',
      personId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVehicleTrackResponseBodyData extends $tea.Model {
  sourceUrl?: string;
  rightBottomY?: string;
  dataSourceName?: string;
  picUrlPath?: string;
  dataSourceId?: string;
  rightBottomX?: string;
  targetPicUrlPath?: string;
  plateId?: string;
  leftTopY?: string;
  targetUrl?: string;
  corpId?: string;
  longitude?: string;
  latitude?: string;
  leftTopX?: string;
  passTime?: string;
  static names(): { [key: string]: string } {
    return {
      sourceUrl: 'SourceUrl',
      rightBottomY: 'RightBottomY',
      dataSourceName: 'DataSourceName',
      picUrlPath: 'PicUrlPath',
      dataSourceId: 'DataSourceId',
      rightBottomX: 'RightBottomX',
      targetPicUrlPath: 'TargetPicUrlPath',
      plateId: 'PlateId',
      leftTopY: 'LeftTopY',
      targetUrl: 'TargetUrl',
      corpId: 'CorpId',
      longitude: 'Longitude',
      latitude: 'Latitude',
      leftTopX: 'LeftTopX',
      passTime: 'PassTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceUrl: 'string',
      rightBottomY: 'string',
      dataSourceName: 'string',
      picUrlPath: 'string',
      dataSourceId: 'string',
      rightBottomX: 'string',
      targetPicUrlPath: 'string',
      plateId: 'string',
      leftTopY: 'string',
      targetUrl: 'string',
      corpId: 'string',
      longitude: 'string',
      latitude: 'string',
      leftTopX: 'string',
      passTime: 'string',
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

export class ListRangeDeviceResponseBodyData extends $tea.Model {
  dataSourceIdPoi?: string;
  distance?: string;
  dataSourceId?: string;
  corpId?: string;
  longitude?: string;
  dataSourceIdName?: string;
  latitude?: string;
  nearPoi?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceIdPoi: 'DataSourceIdPoi',
      distance: 'Distance',
      dataSourceId: 'DataSourceId',
      corpId: 'CorpId',
      longitude: 'Longitude',
      dataSourceIdName: 'DataSourceIdName',
      latitude: 'Latitude',
      nearPoi: 'NearPoi',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceIdPoi: 'string',
      distance: 'string',
      dataSourceId: 'string',
      corpId: 'string',
      longitude: 'string',
      dataSourceIdName: 'string',
      latitude: 'string',
      nearPoi: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapRangeStatisticResponseBodyData extends $tea.Model {
  adultValue?: string;
  childValue?: string;
  oldValue?: string;
  manValue?: string;
  dataSourceName?: string;
  dataSourceId?: string;
  corpId?: string;
  motorValue?: string;
  longitude?: string;
  latitude?: string;
  womanValue?: string;
  static names(): { [key: string]: string } {
    return {
      adultValue: 'AdultValue',
      childValue: 'ChildValue',
      oldValue: 'OldValue',
      manValue: 'ManValue',
      dataSourceName: 'DataSourceName',
      dataSourceId: 'DataSourceId',
      corpId: 'CorpId',
      motorValue: 'MotorValue',
      longitude: 'Longitude',
      latitude: 'Latitude',
      womanValue: 'WomanValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adultValue: 'string',
      childValue: 'string',
      oldValue: 'string',
      manValue: 'string',
      dataSourceName: 'string',
      dataSourceId: 'string',
      corpId: 'string',
      motorValue: 'string',
      longitude: 'string',
      latitude: 'string',
      womanValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStorageStatisticsResponseBodyData extends $tea.Model {
  usedStore?: string;
  unusedStore?: string;
  corpId?: string;
  number?: string;
  totalStore?: string;
  static names(): { [key: string]: string } {
    return {
      usedStore: 'UsedStore',
      unusedStore: 'UnusedStore',
      corpId: 'CorpId',
      number: 'Number',
      totalStore: 'TotalStore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usedStore: 'string',
      unusedStore: 'string',
      corpId: 'string',
      number: 'string',
      totalStore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaginateProjectResponseBodyDataRecords extends $tea.Model {
  type?: string;
  modifiedTime?: string;
  description?: string;
  aggregateSceneCode?: string;
  corpId?: string;
  userId?: string;
  icon?: string;
  name?: string;
  createdTime?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      modifiedTime: 'ModifiedTime',
      description: 'Description',
      aggregateSceneCode: 'AggregateSceneCode',
      corpId: 'CorpId',
      userId: 'UserId',
      icon: 'Icon',
      name: 'Name',
      createdTime: 'CreatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      modifiedTime: 'string',
      description: 'string',
      aggregateSceneCode: 'string',
      corpId: 'string',
      userId: 'string',
      icon: 'string',
      name: 'string',
      createdTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaginateProjectResponseBodyData extends $tea.Model {
  records?: PaginateProjectResponseBodyDataRecords[];
  totalPage?: number;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      totalPage: 'TotalPage',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': PaginateProjectResponseBodyDataRecords },
      totalPage: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCityMapCameraStatisticsResponseBodyData extends $tea.Model {
  oldValue?: string;
  dataSourceName?: string;
  dataSourceId?: string;
  statisticTime?: string;
  adultValue?: string;
  childValue?: string;
  manValue?: string;
  corpId?: string;
  motorValue?: string;
  longitude?: string;
  latitude?: string;
  womanValue?: string;
  static names(): { [key: string]: string } {
    return {
      oldValue: 'OldValue',
      dataSourceName: 'DataSourceName',
      dataSourceId: 'DataSourceId',
      statisticTime: 'StatisticTime',
      adultValue: 'AdultValue',
      childValue: 'ChildValue',
      manValue: 'ManValue',
      corpId: 'CorpId',
      motorValue: 'MotorValue',
      longitude: 'Longitude',
      latitude: 'Latitude',
      womanValue: 'WomanValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oldValue: 'string',
      dataSourceName: 'string',
      dataSourceId: 'string',
      statisticTime: 'string',
      adultValue: 'string',
      childValue: 'string',
      manValue: 'string',
      corpId: 'string',
      motorValue: 'string',
      longitude: 'string',
      latitude: 'string',
      womanValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonResultResponseBodyData extends $tea.Model {
  sourceUrl?: string;
  profession?: string;
  updateTime?: string;
  gender?: string;
  targetUrl?: string;
  address?: string;
  hotSpotAddress?: string;
  age?: string;
  personId?: string;
  personType?: string;
  transportation?: string;
  static names(): { [key: string]: string } {
    return {
      sourceUrl: 'SourceUrl',
      profession: 'Profession',
      updateTime: 'UpdateTime',
      gender: 'Gender',
      targetUrl: 'TargetUrl',
      address: 'Address',
      hotSpotAddress: 'HotSpotAddress',
      age: 'Age',
      personId: 'PersonId',
      personType: 'PersonType',
      transportation: 'Transportation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceUrl: 'string',
      profession: 'string',
      updateTime: 'string',
      gender: 'string',
      targetUrl: 'string',
      address: 'string',
      hotSpotAddress: 'string',
      age: 'string',
      personId: 'string',
      personType: 'string',
      transportation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagMetricsResponseBodyData extends $tea.Model {
  tagMetric?: string;
  tagCode?: string;
  corpId?: string;
  tagValue?: string;
  dateTime?: string;
  static names(): { [key: string]: string } {
    return {
      tagMetric: 'TagMetric',
      tagCode: 'TagCode',
      corpId: 'CorpId',
      tagValue: 'TagValue',
      dateTime: 'DateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagMetric: 'string',
      tagCode: 'string',
      corpId: 'string',
      tagValue: 'string',
      dateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTagResponseBodyData extends $tea.Model {
  value?: string;
  corpId?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      corpId: 'CorpId',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      corpId: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicePersonResponseBodyData extends $tea.Model {
  targetPicUrlPath?: string;
  gender?: string;
  dataSourceId?: string;
  freqNum?: string;
  personId?: string;
  static names(): { [key: string]: string } {
    return {
      targetPicUrlPath: 'TargetPicUrlPath',
      gender: 'Gender',
      dataSourceId: 'DataSourceId',
      freqNum: 'FreqNum',
      personId: 'PersonId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetPicUrlPath: 'string',
      gender: 'string',
      dataSourceId: 'string',
      freqNum: 'string',
      personId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceDetailResponseBodyData extends $tea.Model {
  dataSourceName?: string;
  dataSourceId?: string;
  corpId?: string;
  longitude?: string;
  latitude?: string;
  dataSourcePoi?: string;
  nearPoi?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceName: 'DataSourceName',
      dataSourceId: 'DataSourceId',
      corpId: 'CorpId',
      longitude: 'Longitude',
      latitude: 'Latitude',
      dataSourcePoi: 'DataSourcePoi',
      nearPoi: 'NearPoi',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceName: 'string',
      dataSourceId: 'string',
      corpId: 'string',
      longitude: 'string',
      latitude: 'string',
      dataSourcePoi: 'string',
      nearPoi: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceGenderStatisticsResponseBodyData extends $tea.Model {
  gender?: string;
  dataSourceId?: string;
  number?: string;
  static names(): { [key: string]: string } {
    return {
      gender: 'Gender',
      dataSourceId: 'DataSourceId',
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gender: 'string',
      dataSourceId: 'string',
      number: 'string',
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

  async searchObjectWithOptions(request: SearchObjectRequest, runtime: $Util.RuntimeOptions): Promise<SearchObjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchObjectResponse>(await this.doRPCRequest("SearchObject", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new SearchObjectResponse({}));
  }

  async searchObject(request: SearchObjectRequest): Promise<SearchObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchObjectWithOptions(request, runtime);
  }

  async listAreaHotSpotMetricsWithOptions(request: ListAreaHotSpotMetricsRequest, runtime: $Util.RuntimeOptions): Promise<ListAreaHotSpotMetricsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAreaHotSpotMetricsResponse>(await this.doRPCRequest("ListAreaHotSpotMetrics", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListAreaHotSpotMetricsResponse({}));
  }

  async listAreaHotSpotMetrics(request: ListAreaHotSpotMetricsRequest): Promise<ListAreaHotSpotMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAreaHotSpotMetricsWithOptions(request, runtime);
  }

  async bindDeviceWithOptions(request: BindDeviceRequest, runtime: $Util.RuntimeOptions): Promise<BindDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindDeviceResponse>(await this.doRPCRequest("BindDevice", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new BindDeviceResponse({}));
  }

  async bindDevice(request: BindDeviceRequest): Promise<BindDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindDeviceWithOptions(request, runtime);
  }

  async getCdrsMonitorResultWithOptions(request: GetCdrsMonitorResultRequest, runtime: $Util.RuntimeOptions): Promise<GetCdrsMonitorResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetCdrsMonitorResultResponse>(await this.doRPCRequest("GetCdrsMonitorResult", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetCdrsMonitorResultResponse({}));
  }

  async getCdrsMonitorResult(request: GetCdrsMonitorResultRequest): Promise<GetCdrsMonitorResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCdrsMonitorResultWithOptions(request, runtime);
  }

  async listVehicleDetailsWithOptions(request: ListVehicleDetailsRequest, runtime: $Util.RuntimeOptions): Promise<ListVehicleDetailsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListVehicleDetailsResponse>(await this.doRPCRequest("ListVehicleDetails", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListVehicleDetailsResponse({}));
  }

  async listVehicleDetails(request: ListVehicleDetailsRequest): Promise<ListVehicleDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVehicleDetailsWithOptions(request, runtime);
  }

  async getCdrsMonitorListWithOptions(request: GetCdrsMonitorListRequest, runtime: $Util.RuntimeOptions): Promise<GetCdrsMonitorListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetCdrsMonitorListResponse>(await this.doRPCRequest("GetCdrsMonitorList", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetCdrsMonitorListResponse({}));
  }

  async getCdrsMonitorList(request: GetCdrsMonitorListRequest): Promise<GetCdrsMonitorListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCdrsMonitorListWithOptions(request, runtime);
  }

  async updateMonitorWithOptions(request: UpdateMonitorRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMonitorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateMonitorResponse>(await this.doRPCRequest("UpdateMonitor", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateMonitorResponse({}));
  }

  async updateMonitor(request: UpdateMonitorRequest): Promise<UpdateMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMonitorWithOptions(request, runtime);
  }

  async listDataStatisticsWithOptions(request: ListDataStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<ListDataStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDataStatisticsResponse>(await this.doRPCRequest("ListDataStatistics", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListDataStatisticsResponse({}));
  }

  async listDataStatistics(request: ListDataStatisticsRequest): Promise<ListDataStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataStatisticsWithOptions(request, runtime);
  }

  async unbindDeviceWithOptions(request: UnbindDeviceRequest, runtime: $Util.RuntimeOptions): Promise<UnbindDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnbindDeviceResponse>(await this.doRPCRequest("UnbindDevice", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new UnbindDeviceResponse({}));
  }

  async unbindDevice(request: UnbindDeviceRequest): Promise<UnbindDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindDeviceWithOptions(request, runtime);
  }

  async listPersonDetailsWithOptions(request: ListPersonDetailsRequest, runtime: $Util.RuntimeOptions): Promise<ListPersonDetailsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPersonDetailsResponse>(await this.doRPCRequest("ListPersonDetails", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListPersonDetailsResponse({}));
  }

  async listPersonDetails(request: ListPersonDetailsRequest): Promise<ListPersonDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPersonDetailsWithOptions(request, runtime);
  }

  async listVehicleTagDistributeWithOptions(request: ListVehicleTagDistributeRequest, runtime: $Util.RuntimeOptions): Promise<ListVehicleTagDistributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListVehicleTagDistributeResponse>(await this.doRPCRequest("ListVehicleTagDistribute", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListVehicleTagDistributeResponse({}));
  }

  async listVehicleTagDistribute(request: ListVehicleTagDistributeRequest): Promise<ListVehicleTagDistributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVehicleTagDistributeWithOptions(request, runtime);
  }

  async listDevicePersonStatisticsWithOptions(request: ListDevicePersonStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<ListDevicePersonStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDevicePersonStatisticsResponse>(await this.doRPCRequest("ListDevicePersonStatistics", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListDevicePersonStatisticsResponse({}));
  }

  async listDevicePersonStatistics(request: ListDevicePersonStatisticsRequest): Promise<ListDevicePersonStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDevicePersonStatisticsWithOptions(request, runtime);
  }

  async addMonitorWithOptions(request: AddMonitorRequest, runtime: $Util.RuntimeOptions): Promise<AddMonitorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddMonitorResponse>(await this.doRPCRequest("AddMonitor", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddMonitorResponse({}));
  }

  async addMonitor(request: AddMonitorRequest): Promise<AddMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addMonitorWithOptions(request, runtime);
  }

  async paginateDeviceWithOptions(request: PaginateDeviceRequest, runtime: $Util.RuntimeOptions): Promise<PaginateDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PaginateDeviceResponse>(await this.doRPCRequest("PaginateDevice", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new PaginateDeviceResponse({}));
  }

  async paginateDevice(request: PaginateDeviceRequest): Promise<PaginateDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.paginateDeviceWithOptions(request, runtime);
  }

  async stopCdrsMonitorWithOptions(request: StopCdrsMonitorRequest, runtime: $Util.RuntimeOptions): Promise<StopCdrsMonitorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopCdrsMonitorResponse>(await this.doRPCRequest("StopCdrsMonitor", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new StopCdrsMonitorResponse({}));
  }

  async stopCdrsMonitor(request: StopCdrsMonitorRequest): Promise<StopCdrsMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopCdrsMonitorWithOptions(request, runtime);
  }

  async recallTrajectoryByCoordinateTimeWithOptions(request: RecallTrajectoryByCoordinateTimeRequest, runtime: $Util.RuntimeOptions): Promise<RecallTrajectoryByCoordinateTimeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecallTrajectoryByCoordinateTimeResponse>(await this.doRPCRequest("RecallTrajectoryByCoordinateTime", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new RecallTrajectoryByCoordinateTimeResponse({}));
  }

  async recallTrajectoryByCoordinateTime(request: RecallTrajectoryByCoordinateTimeRequest): Promise<RecallTrajectoryByCoordinateTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recallTrajectoryByCoordinateTimeWithOptions(request, runtime);
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

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListCityMapPersonFlowResponse>(await this.doRPCRequest("ListCityMapPersonFlow", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListCityMapPersonFlowResponse({}));
  }

  async listCityMapPersonFlow(request: ListCityMapPersonFlowRequest): Promise<ListCityMapPersonFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCityMapPersonFlowWithOptions(request, runtime);
  }

  async addCdrsMonitorWithOptions(request: AddCdrsMonitorRequest, runtime: $Util.RuntimeOptions): Promise<AddCdrsMonitorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddCdrsMonitorResponse>(await this.doRPCRequest("AddCdrsMonitor", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddCdrsMonitorResponse({}));
  }

  async addCdrsMonitor(request: AddCdrsMonitorRequest): Promise<AddCdrsMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCdrsMonitorWithOptions(request, runtime);
  }

  async listMapRouteDetailsWithOptions(tmpReq: ListMapRouteDetailsRequest, runtime: $Util.RuntimeOptions): Promise<ListMapRouteDetailsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListMapRouteDetailsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.routeList)) {
      request.routeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.routeList, "RouteList", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListMapRouteDetailsResponse>(await this.doRPCRequest("ListMapRouteDetails", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListMapRouteDetailsResponse({}));
  }

  async listMapRouteDetails(request: ListMapRouteDetailsRequest): Promise<ListMapRouteDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMapRouteDetailsWithOptions(request, runtime);
  }

  async listPersonTopWithOptions(request: ListPersonTopRequest, runtime: $Util.RuntimeOptions): Promise<ListPersonTopResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPersonTopResponse>(await this.doRPCRequest("ListPersonTop", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListPersonTopResponse({}));
  }

  async listPersonTop(request: ListPersonTopRequest): Promise<ListPersonTopResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPersonTopWithOptions(request, runtime);
  }

  async getMonitorResultWithOptions(request: GetMonitorResultRequest, runtime: $Util.RuntimeOptions): Promise<GetMonitorResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMonitorResultResponse>(await this.doRPCRequest("GetMonitorResult", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetMonitorResultResponse({}));
  }

  async getMonitorResult(request: GetMonitorResultRequest): Promise<GetMonitorResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMonitorResultWithOptions(request, runtime);
  }

  async listCityMapAoisWithOptions(request: ListCityMapAoisRequest, runtime: $Util.RuntimeOptions): Promise<ListCityMapAoisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListCityMapAoisResponse>(await this.doRPCRequest("ListCityMapAois", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListCityMapAoisResponse({}));
  }

  async listCityMapAois(request: ListCityMapAoisRequest): Promise<ListCityMapAoisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCityMapAoisWithOptions(request, runtime);
  }

  async recognizeImageWithOptions(request: RecognizeImageRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecognizeImageResponse>(await this.doRPCRequest("RecognizeImage", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new RecognizeImageResponse({}));
  }

  async recognizeImage(request: RecognizeImageRequest): Promise<RecognizeImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeImageWithOptions(request, runtime);
  }

  async getMonitorListWithOptions(request: GetMonitorListRequest, runtime: $Util.RuntimeOptions): Promise<GetMonitorListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMonitorListResponse>(await this.doRPCRequest("GetMonitorList", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetMonitorListResponse({}));
  }

  async getMonitorList(request: GetMonitorListRequest): Promise<GetMonitorListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMonitorListWithOptions(request, runtime);
  }

  async listDeviceRelationWithOptions(request: ListDeviceRelationRequest, runtime: $Util.RuntimeOptions): Promise<ListDeviceRelationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDeviceRelationResponse>(await this.doRPCRequest("ListDeviceRelation", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListDeviceRelationResponse({}));
  }

  async listDeviceRelation(request: ListDeviceRelationRequest): Promise<ListDeviceRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceRelationWithOptions(request, runtime);
  }

  async listPersonTrackWithOptions(request: ListPersonTrackRequest, runtime: $Util.RuntimeOptions): Promise<ListPersonTrackResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPersonTrackResponse>(await this.doRPCRequest("ListPersonTrack", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListPersonTrackResponse({}));
  }

  async listPersonTrack(request: ListPersonTrackRequest): Promise<ListPersonTrackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPersonTrackWithOptions(request, runtime);
  }

  async listCityMapCameraResultsWithOptions(tmpReq: ListCityMapCameraResultsRequest, runtime: $Util.RuntimeOptions): Promise<ListCityMapCameraResultsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListCityMapCameraResultsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.dataSourceIdList)) {
      request.dataSourceIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataSourceIdList, "DataSourceIdList", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListCityMapCameraResultsResponse>(await this.doRPCRequest("ListCityMapCameraResults", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListCityMapCameraResultsResponse({}));
  }

  async listCityMapCameraResults(request: ListCityMapCameraResultsRequest): Promise<ListCityMapCameraResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCityMapCameraResultsWithOptions(request, runtime);
  }

  async queryTrajectoryByIdWithOptions(request: QueryTrajectoryByIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryTrajectoryByIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTrajectoryByIdResponse>(await this.doRPCRequest("QueryTrajectoryById", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTrajectoryByIdResponse({}));
  }

  async queryTrajectoryById(request: QueryTrajectoryByIdRequest): Promise<QueryTrajectoryByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTrajectoryByIdWithOptions(request, runtime);
  }

  async listCityMapImageDetailsWithOptions(request: ListCityMapImageDetailsRequest, runtime: $Util.RuntimeOptions): Promise<ListCityMapImageDetailsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListCityMapImageDetailsResponse>(await this.doRPCRequest("ListCityMapImageDetails", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListCityMapImageDetailsResponse({}));
  }

  async listCityMapImageDetails(request: ListCityMapImageDetailsRequest): Promise<ListCityMapImageDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCityMapImageDetailsWithOptions(request, runtime);
  }

  async createProjectWithOptions(request: CreateProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateProjectResponse>(await this.doRPCRequest("CreateProject", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateProjectResponse({}));
  }

  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProjectWithOptions(request, runtime);
  }

  async listVehicleTopWithOptions(request: ListVehicleTopRequest, runtime: $Util.RuntimeOptions): Promise<ListVehicleTopResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListVehicleTopResponse>(await this.doRPCRequest("ListVehicleTop", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListVehicleTopResponse({}));
  }

  async listVehicleTop(request: ListVehicleTopRequest): Promise<ListVehicleTopResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVehicleTopWithOptions(request, runtime);
  }

  async listDataStatisticsByDayWithOptions(request: ListDataStatisticsByDayRequest, runtime: $Util.RuntimeOptions): Promise<ListDataStatisticsByDayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDataStatisticsByDayResponse>(await this.doRPCRequest("ListDataStatisticsByDay", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListDataStatisticsByDayResponse({}));
  }

  async listDataStatisticsByDay(request: ListDataStatisticsByDayRequest): Promise<ListDataStatisticsByDayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataStatisticsByDayWithOptions(request, runtime);
  }

  async listVehicleResultsWithOptions(request: ListVehicleResultsRequest, runtime: $Util.RuntimeOptions): Promise<ListVehicleResultsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListVehicleResultsResponse>(await this.doRPCRequest("ListVehicleResults", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListVehicleResultsResponse({}));
  }

  async listVehicleResults(request: ListVehicleResultsRequest): Promise<ListVehicleResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVehicleResultsWithOptions(request, runtime);
  }

  async searchAggregateObjectWithOptions(request: SearchAggregateObjectRequest, runtime: $Util.RuntimeOptions): Promise<SearchAggregateObjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchAggregateObjectResponse>(await this.doRPCRequest("SearchAggregateObject", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new SearchAggregateObjectResponse({}));
  }

  async searchAggregateObject(request: SearchAggregateObjectRequest): Promise<SearchAggregateObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchAggregateObjectWithOptions(request, runtime);
  }

  async listCorpMetricsStatisticWithOptions(tmpReq: ListCorpMetricsStatisticRequest, runtime: $Util.RuntimeOptions): Promise<ListCorpMetricsStatisticResponse> {
    Util.validateModel(tmpReq);
    let request = new ListCorpMetricsStatisticShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.userGroupList)) {
      request.userGroupListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userGroupList, "UserGroupList", "json");
    }

    if (!Util.isUnset(tmpReq.deviceGroupList)) {
      request.deviceGroupListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceGroupList, "DeviceGroupList", "json");
    }

    if (!Util.isUnset(tmpReq.deviceIdList)) {
      request.deviceIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deviceIdList, "DeviceIdList", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListCorpMetricsStatisticResponse>(await this.doRPCRequest("ListCorpMetricsStatistic", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListCorpMetricsStatisticResponse({}));
  }

  async listCorpMetricsStatistic(request: ListCorpMetricsStatisticRequest): Promise<ListCorpMetricsStatisticResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCorpMetricsStatisticWithOptions(request, runtime);
  }

  async detectTrajectoryRegularPatternWithOptions(request: DetectTrajectoryRegularPatternRequest, runtime: $Util.RuntimeOptions): Promise<DetectTrajectoryRegularPatternResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectTrajectoryRegularPatternResponse>(await this.doRPCRequest("DetectTrajectoryRegularPattern", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new DetectTrajectoryRegularPatternResponse({}));
  }

  async detectTrajectoryRegularPattern(request: DetectTrajectoryRegularPatternRequest): Promise<DetectTrajectoryRegularPatternResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectTrajectoryRegularPatternWithOptions(request, runtime);
  }

  async listVehicleTrackWithOptions(request: ListVehicleTrackRequest, runtime: $Util.RuntimeOptions): Promise<ListVehicleTrackResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListVehicleTrackResponse>(await this.doRPCRequest("ListVehicleTrack", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListVehicleTrackResponse({}));
  }

  async listVehicleTrack(request: ListVehicleTrackRequest): Promise<ListVehicleTrackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVehicleTrackWithOptions(request, runtime);
  }

  async listStructureStatisticsWithOptions(request: ListStructureStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<ListStructureStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListStructureStatisticsResponse>(await this.doRPCRequest("ListStructureStatistics", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListStructureStatisticsResponse({}));
  }

  async listStructureStatistics(request: ListStructureStatisticsRequest): Promise<ListStructureStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStructureStatisticsWithOptions(request, runtime);
  }

  async stopMonitorWithOptions(request: StopMonitorRequest, runtime: $Util.RuntimeOptions): Promise<StopMonitorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopMonitorResponse>(await this.doRPCRequest("StopMonitor", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new StopMonitorResponse({}));
  }

  async stopMonitor(request: StopMonitorRequest): Promise<StopMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopMonitorWithOptions(request, runtime);
  }

  async predictTrajectoryDestinationWithOptions(request: PredictTrajectoryDestinationRequest, runtime: $Util.RuntimeOptions): Promise<PredictTrajectoryDestinationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PredictTrajectoryDestinationResponse>(await this.doRPCRequest("PredictTrajectoryDestination", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new PredictTrajectoryDestinationResponse({}));
  }

  async predictTrajectoryDestination(request: PredictTrajectoryDestinationRequest): Promise<PredictTrajectoryDestinationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.predictTrajectoryDestinationWithOptions(request, runtime);
  }

  async listRangeDeviceWithOptions(request: ListRangeDeviceRequest, runtime: $Util.RuntimeOptions): Promise<ListRangeDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRangeDeviceResponse>(await this.doRPCRequest("ListRangeDevice", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListRangeDeviceResponse({}));
  }

  async listRangeDevice(request: ListRangeDeviceRequest): Promise<ListRangeDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRangeDeviceWithOptions(request, runtime);
  }

  async listCityMapRangeStatisticWithOptions(request: ListCityMapRangeStatisticRequest, runtime: $Util.RuntimeOptions): Promise<ListCityMapRangeStatisticResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListCityMapRangeStatisticResponse>(await this.doRPCRequest("ListCityMapRangeStatistic", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListCityMapRangeStatisticResponse({}));
  }

  async listCityMapRangeStatistic(request: ListCityMapRangeStatisticRequest): Promise<ListCityMapRangeStatisticResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCityMapRangeStatisticWithOptions(request, runtime);
  }

  async listStorageStatisticsWithOptions(request: ListStorageStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<ListStorageStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListStorageStatisticsResponse>(await this.doRPCRequest("ListStorageStatistics", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListStorageStatisticsResponse({}));
  }

  async listStorageStatistics(request: ListStorageStatisticsRequest): Promise<ListStorageStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStorageStatisticsWithOptions(request, runtime);
  }

  async paginateProjectWithOptions(request: PaginateProjectRequest, runtime: $Util.RuntimeOptions): Promise<PaginateProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PaginateProjectResponse>(await this.doRPCRequest("PaginateProject", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new PaginateProjectResponse({}));
  }

  async paginateProject(request: PaginateProjectRequest): Promise<PaginateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.paginateProjectWithOptions(request, runtime);
  }

  async listCityMapCameraStatisticsWithOptions(request: ListCityMapCameraStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<ListCityMapCameraStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListCityMapCameraStatisticsResponse>(await this.doRPCRequest("ListCityMapCameraStatistics", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListCityMapCameraStatisticsResponse({}));
  }

  async listCityMapCameraStatistics(request: ListCityMapCameraStatisticsRequest): Promise<ListCityMapCameraStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCityMapCameraStatisticsWithOptions(request, runtime);
  }

  async updateCdrsMonitorWithOptions(request: UpdateCdrsMonitorRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCdrsMonitorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateCdrsMonitorResponse>(await this.doRPCRequest("UpdateCdrsMonitor", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateCdrsMonitorResponse({}));
  }

  async updateCdrsMonitor(request: UpdateCdrsMonitorRequest): Promise<UpdateCdrsMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCdrsMonitorWithOptions(request, runtime);
  }

  async listPersonResultWithOptions(request: ListPersonResultRequest, runtime: $Util.RuntimeOptions): Promise<ListPersonResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPersonResultResponse>(await this.doRPCRequest("ListPersonResult", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListPersonResultResponse({}));
  }

  async listPersonResult(request: ListPersonResultRequest): Promise<ListPersonResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPersonResultWithOptions(request, runtime);
  }

  async listTagMetricsWithOptions(tmpReq: ListTagMetricsRequest, runtime: $Util.RuntimeOptions): Promise<ListTagMetricsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListTagMetricsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tagCode)) {
      request.tagCodeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagCode, "TagCode", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagMetricsResponse>(await this.doRPCRequest("ListTagMetrics", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagMetricsResponse({}));
  }

  async listTagMetrics(request: ListTagMetricsRequest): Promise<ListTagMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagMetricsWithOptions(request, runtime);
  }

  async listPersonTagWithOptions(request: ListPersonTagRequest, runtime: $Util.RuntimeOptions): Promise<ListPersonTagResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPersonTagResponse>(await this.doRPCRequest("ListPersonTag", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListPersonTagResponse({}));
  }

  async listPersonTag(request: ListPersonTagRequest): Promise<ListPersonTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPersonTagWithOptions(request, runtime);
  }

  async updateProjectWithOptions(request: UpdateProjectRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateProjectResponse>(await this.doRPCRequest("UpdateProject", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateProjectResponse({}));
  }

  async updateProject(request: UpdateProjectRequest): Promise<UpdateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProjectWithOptions(request, runtime);
  }

  async listDevicePersonWithOptions(request: ListDevicePersonRequest, runtime: $Util.RuntimeOptions): Promise<ListDevicePersonResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDevicePersonResponse>(await this.doRPCRequest("ListDevicePerson", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListDevicePersonResponse({}));
  }

  async listDevicePerson(request: ListDevicePersonRequest): Promise<ListDevicePersonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDevicePersonWithOptions(request, runtime);
  }

  async listDeviceDetailWithOptions(request: ListDeviceDetailRequest, runtime: $Util.RuntimeOptions): Promise<ListDeviceDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDeviceDetailResponse>(await this.doRPCRequest("ListDeviceDetail", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListDeviceDetailResponse({}));
  }

  async listDeviceDetail(request: ListDeviceDetailRequest): Promise<ListDeviceDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceDetailWithOptions(request, runtime);
  }

  async listDeviceGenderStatisticsWithOptions(request: ListDeviceGenderStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<ListDeviceGenderStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDeviceGenderStatisticsResponse>(await this.doRPCRequest("ListDeviceGenderStatistics", "2020-11-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListDeviceGenderStatisticsResponse({}));
  }

  async listDeviceGenderStatistics(request: ListDeviceGenderStatisticsRequest): Promise<ListDeviceGenderStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceGenderStatisticsWithOptions(request, runtime);
  }

}
