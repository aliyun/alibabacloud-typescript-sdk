// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BusinessResultServiceRequest extends $tea.Model {
  actionCode?: string;
  bussinessCode?: string;
  errCode?: string;
  errMessage?: string;
  requestId?: string;
  result?: { [key: string]: any };
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      actionCode: 'ActionCode',
      bussinessCode: 'BussinessCode',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCode: 'string',
      bussinessCode: 'string',
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BusinessResultServiceShrinkRequest extends $tea.Model {
  actionCode?: string;
  bussinessCode?: string;
  errCode?: string;
  errMessage?: string;
  requestId?: string;
  resultShrink?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      actionCode: 'ActionCode',
      bussinessCode: 'BussinessCode',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      resultShrink: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCode: 'string',
      bussinessCode: 'string',
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      resultShrink: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BusinessResultServiceResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  data?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BusinessResultServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BusinessResultServiceResponseBody;
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
      body: BusinessResultServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserInvestigationInfoQueryTaskRequest extends $tea.Model {
  dataType?: string;
  employeeId?: string;
  endTime?: number;
  ossFileName?: string;
  startTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'dataType',
      employeeId: 'employeeId',
      endTime: 'endTime',
      ossFileName: 'ossFileName',
      startTime: 'startTime',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      employeeId: 'string',
      endTime: 'number',
      ossFileName: 'string',
      startTime: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserInvestigationInfoQueryTaskResponseBody extends $tea.Model {
  code?: string;
  data?: CreateUserInvestigationInfoQueryTaskResponseBodyData;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateUserInvestigationInfoQueryTaskResponseBodyData,
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserInvestigationInfoQueryTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateUserInvestigationInfoQueryTaskResponseBody;
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
      body: CreateUserInvestigationInfoQueryTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindInstanceInfoRequest extends $tea.Model {
  bussinessCode?: string;
  domain?: string;
  endTime?: number;
  extras?: { [key: string]: any };
  ip?: string;
  needDNS?: boolean;
  startTime?: number;
  url?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bussinessCode: 'bussinessCode',
      domain: 'domain',
      endTime: 'endTime',
      extras: 'extras',
      ip: 'ip',
      needDNS: 'needDNS',
      startTime: 'startTime',
      url: 'url',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bussinessCode: 'string',
      domain: 'string',
      endTime: 'number',
      extras: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      ip: 'string',
      needDNS: 'boolean',
      startTime: 'number',
      url: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindInstanceInfoShrinkRequest extends $tea.Model {
  bussinessCode?: string;
  domain?: string;
  endTime?: number;
  extrasShrink?: string;
  ip?: string;
  needDNS?: boolean;
  startTime?: number;
  url?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bussinessCode: 'bussinessCode',
      domain: 'domain',
      endTime: 'endTime',
      extrasShrink: 'extras',
      ip: 'ip',
      needDNS: 'needDNS',
      startTime: 'startTime',
      url: 'url',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bussinessCode: 'string',
      domain: 'string',
      endTime: 'number',
      extrasShrink: 'string',
      ip: 'string',
      needDNS: 'boolean',
      startTime: 'number',
      url: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindInstanceInfoResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  data?: FindInstanceInfoResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: FindInstanceInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindInstanceInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FindInstanceInfoResponseBody;
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
      body: FindInstanceInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUserAvailbleResourcesRequest extends $tea.Model {
  bussinessCode?: string;
  currPage?: number;
  pageSize?: number;
  resourceType?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bussinessCode: 'bussinessCode',
      currPage: 'currPage',
      pageSize: 'pageSize',
      resourceType: 'resourceType',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bussinessCode: 'string',
      currPage: 'number',
      pageSize: 'number',
      resourceType: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUserAvailbleResourcesResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  data?: FindUserAvailbleResourcesResponseBodyData;
  maxResults?: number;
  message?: string;
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: FindUserAvailbleResourcesResponseBodyData,
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUserAvailbleResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FindUserAvailbleResourcesResponseBody;
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
      body: FindUserAvailbleResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PunishResourceSearchRequest extends $tea.Model {
  actionCodes?: string[];
  bussinessCodes?: string[];
  class?: string;
  domain?: string;
  endDate?: number;
  instanceId?: string;
  ip?: string;
  page?: number;
  pageSize?: number;
  sourceCodes?: string[];
  startDate?: number;
  status?: string;
  url?: string;
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      actionCodes: 'ActionCodes',
      bussinessCodes: 'BussinessCodes',
      class: 'Class',
      domain: 'Domain',
      endDate: 'EndDate',
      instanceId: 'InstanceId',
      ip: 'Ip',
      page: 'Page',
      pageSize: 'PageSize',
      sourceCodes: 'SourceCodes',
      startDate: 'StartDate',
      status: 'Status',
      url: 'Url',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCodes: { 'type': 'array', 'itemType': 'string' },
      bussinessCodes: { 'type': 'array', 'itemType': 'string' },
      class: 'string',
      domain: 'string',
      endDate: 'number',
      instanceId: 'string',
      ip: 'string',
      page: 'number',
      pageSize: 'number',
      sourceCodes: { 'type': 'array', 'itemType': 'string' },
      startDate: 'number',
      status: 'string',
      url: 'string',
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PunishResourceSearchShrinkRequest extends $tea.Model {
  actionCodesShrink?: string;
  bussinessCodesShrink?: string;
  class?: string;
  domain?: string;
  endDate?: number;
  instanceId?: string;
  ip?: string;
  page?: number;
  pageSize?: number;
  sourceCodesShrink?: string;
  startDate?: number;
  status?: string;
  url?: string;
  userIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      actionCodesShrink: 'ActionCodes',
      bussinessCodesShrink: 'BussinessCodes',
      class: 'Class',
      domain: 'Domain',
      endDate: 'EndDate',
      instanceId: 'InstanceId',
      ip: 'Ip',
      page: 'Page',
      pageSize: 'PageSize',
      sourceCodesShrink: 'SourceCodes',
      startDate: 'StartDate',
      status: 'Status',
      url: 'Url',
      userIdsShrink: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCodesShrink: 'string',
      bussinessCodesShrink: 'string',
      class: 'string',
      domain: 'string',
      endDate: 'number',
      instanceId: 'string',
      ip: 'string',
      page: 'number',
      pageSize: 'number',
      sourceCodesShrink: 'string',
      startDate: 'number',
      status: 'string',
      url: 'string',
      userIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PunishResourceSearchResponseBody extends $tea.Model {
  code?: string;
  dataList?: PunishResourceSearchResponseBodyDataList[];
  message?: string;
  success?: string;
  totalCount?: number;
  viewCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataList: 'DataList',
      message: 'Message',
      success: 'Success',
      totalCount: 'TotalCount',
      viewCount: 'ViewCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataList: { 'type': 'array', 'itemType': PunishResourceSearchResponseBodyDataList },
      message: 'string',
      success: 'string',
      totalCount: 'number',
      viewCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PunishResourceSearchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PunishResourceSearchResponseBody;
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
      body: PunishResourceSearchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RiskEventSyncRequest extends $tea.Model {
  deleted?: boolean;
  discoveryTime?: number;
  eventName?: string;
  eventNumber?: string;
  relevanceBu?: string;
  riskDetail?: string;
  riskEffectType?: string;
  riskLevel?: string;
  riskType?: string;
  source?: string;
  submitter?: string;
  static names(): { [key: string]: string } {
    return {
      deleted: 'Deleted',
      discoveryTime: 'DiscoveryTime',
      eventName: 'EventName',
      eventNumber: 'EventNumber',
      relevanceBu: 'RelevanceBu',
      riskDetail: 'RiskDetail',
      riskEffectType: 'RiskEffectType',
      riskLevel: 'RiskLevel',
      riskType: 'RiskType',
      source: 'Source',
      submitter: 'Submitter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleted: 'boolean',
      discoveryTime: 'number',
      eventName: 'string',
      eventNumber: 'string',
      relevanceBu: 'string',
      riskDetail: 'string',
      riskEffectType: 'string',
      riskLevel: 'string',
      riskType: 'string',
      source: 'string',
      submitter: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RiskEventSyncResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  data?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RiskEventSyncResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RiskEventSyncResponseBody;
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
      body: RiskEventSyncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPunishEventsRequest extends $tea.Model {
  aliUid?: string;
  bussinessCodes?: string[];
  caseCodes?: string[];
  eventCodes?: string[];
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bussinessCodes: 'BussinessCodes',
      caseCodes: 'CaseCodes',
      eventCodes: 'EventCodes',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      bussinessCodes: { 'type': 'array', 'itemType': 'string' },
      caseCodes: { 'type': 'array', 'itemType': 'string' },
      eventCodes: { 'type': 'array', 'itemType': 'string' },
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPunishEventsShrinkRequest extends $tea.Model {
  aliUid?: string;
  bussinessCodesShrink?: string;
  caseCodesShrink?: string;
  eventCodesShrink?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bussinessCodesShrink: 'BussinessCodes',
      caseCodesShrink: 'CaseCodes',
      eventCodesShrink: 'EventCodes',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      bussinessCodesShrink: 'string',
      caseCodesShrink: 'string',
      eventCodesShrink: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPunishEventsResponseBody extends $tea.Model {
  code?: string;
  dataList?: SearchPunishEventsResponseBodyDataList[];
  message?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataList: 'DataList',
      message: 'Message',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataList: { 'type': 'array', 'itemType': SearchPunishEventsResponseBodyDataList },
      message: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPunishEventsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchPunishEventsResponseBody;
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
      body: SearchPunishEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPunishRecordsRequest extends $tea.Model {
  actionCodes?: string[];
  aliUid?: string;
  bussinessCodes?: string;
  caseCodes?: string[];
  domain?: string;
  endTime?: number;
  eventCodes?: string[];
  ip?: string;
  page?: string;
  pageSize?: string;
  punishStatus?: string[];
  resourceId?: string;
  sourceCodes?: string[];
  startTime?: number;
  url?: string;
  urlFuzzy?: string;
  static names(): { [key: string]: string } {
    return {
      actionCodes: 'ActionCodes',
      aliUid: 'AliUid',
      bussinessCodes: 'BussinessCodes',
      caseCodes: 'CaseCodes',
      domain: 'Domain',
      endTime: 'EndTime',
      eventCodes: 'EventCodes',
      ip: 'Ip',
      page: 'Page',
      pageSize: 'PageSize',
      punishStatus: 'PunishStatus',
      resourceId: 'ResourceId',
      sourceCodes: 'SourceCodes',
      startTime: 'StartTime',
      url: 'Url',
      urlFuzzy: 'UrlFuzzy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCodes: { 'type': 'array', 'itemType': 'string' },
      aliUid: 'string',
      bussinessCodes: 'string',
      caseCodes: { 'type': 'array', 'itemType': 'string' },
      domain: 'string',
      endTime: 'number',
      eventCodes: { 'type': 'array', 'itemType': 'string' },
      ip: 'string',
      page: 'string',
      pageSize: 'string',
      punishStatus: { 'type': 'array', 'itemType': 'string' },
      resourceId: 'string',
      sourceCodes: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
      url: 'string',
      urlFuzzy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPunishRecordsShrinkRequest extends $tea.Model {
  actionCodesShrink?: string;
  aliUid?: string;
  bussinessCodes?: string;
  caseCodesShrink?: string;
  domain?: string;
  endTime?: number;
  eventCodesShrink?: string;
  ip?: string;
  page?: string;
  pageSize?: string;
  punishStatusShrink?: string;
  resourceId?: string;
  sourceCodesShrink?: string;
  startTime?: number;
  url?: string;
  urlFuzzy?: string;
  static names(): { [key: string]: string } {
    return {
      actionCodesShrink: 'ActionCodes',
      aliUid: 'AliUid',
      bussinessCodes: 'BussinessCodes',
      caseCodesShrink: 'CaseCodes',
      domain: 'Domain',
      endTime: 'EndTime',
      eventCodesShrink: 'EventCodes',
      ip: 'Ip',
      page: 'Page',
      pageSize: 'PageSize',
      punishStatusShrink: 'PunishStatus',
      resourceId: 'ResourceId',
      sourceCodesShrink: 'SourceCodes',
      startTime: 'StartTime',
      url: 'Url',
      urlFuzzy: 'UrlFuzzy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCodesShrink: 'string',
      aliUid: 'string',
      bussinessCodes: 'string',
      caseCodesShrink: 'string',
      domain: 'string',
      endTime: 'number',
      eventCodesShrink: 'string',
      ip: 'string',
      page: 'string',
      pageSize: 'string',
      punishStatusShrink: 'string',
      resourceId: 'string',
      sourceCodesShrink: 'string',
      startTime: 'number',
      url: 'string',
      urlFuzzy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPunishRecordsResponseBody extends $tea.Model {
  code?: string;
  dataList?: SearchPunishRecordsResponseBodyDataList[];
  message?: string;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataList: 'DataList',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataList: { 'type': 'array', 'itemType': SearchPunishRecordsResponseBodyDataList },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPunishRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchPunishRecordsResponseBody;
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
      body: SearchPunishRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPunishRequestRequest extends $tea.Model {
  antiStatuses?: string[];
  bussinessCodes?: string[];
  class?: string;
  endDate?: number;
  eventCodes?: string[];
  extRequestId?: string;
  id?: number;
  idType?: string;
  instanceId?: string;
  page?: number;
  pageSize?: number;
  punishDomain?: string;
  punishIp?: string;
  punishStatuses?: string[];
  punishUrl?: string;
  punishUrlFull?: string;
  sourceCodes?: string[];
  startDate?: number;
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      antiStatuses: 'AntiStatuses',
      bussinessCodes: 'BussinessCodes',
      class: 'Class',
      endDate: 'EndDate',
      eventCodes: 'EventCodes',
      extRequestId: 'ExtRequestId',
      id: 'Id',
      idType: 'IdType',
      instanceId: 'InstanceId',
      page: 'Page',
      pageSize: 'PageSize',
      punishDomain: 'PunishDomain',
      punishIp: 'PunishIp',
      punishStatuses: 'PunishStatuses',
      punishUrl: 'PunishUrl',
      punishUrlFull: 'PunishUrlFull',
      sourceCodes: 'SourceCodes',
      startDate: 'StartDate',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antiStatuses: { 'type': 'array', 'itemType': 'string' },
      bussinessCodes: { 'type': 'array', 'itemType': 'string' },
      class: 'string',
      endDate: 'number',
      eventCodes: { 'type': 'array', 'itemType': 'string' },
      extRequestId: 'string',
      id: 'number',
      idType: 'string',
      instanceId: 'string',
      page: 'number',
      pageSize: 'number',
      punishDomain: 'string',
      punishIp: 'string',
      punishStatuses: { 'type': 'array', 'itemType': 'string' },
      punishUrl: 'string',
      punishUrlFull: 'string',
      sourceCodes: { 'type': 'array', 'itemType': 'string' },
      startDate: 'number',
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPunishRequestShrinkRequest extends $tea.Model {
  antiStatusesShrink?: string;
  bussinessCodesShrink?: string;
  class?: string;
  endDate?: number;
  eventCodesShrink?: string;
  extRequestId?: string;
  id?: number;
  idType?: string;
  instanceId?: string;
  page?: number;
  pageSize?: number;
  punishDomain?: string;
  punishIp?: string;
  punishStatusesShrink?: string;
  punishUrl?: string;
  punishUrlFull?: string;
  sourceCodesShrink?: string;
  startDate?: number;
  userIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      antiStatusesShrink: 'AntiStatuses',
      bussinessCodesShrink: 'BussinessCodes',
      class: 'Class',
      endDate: 'EndDate',
      eventCodesShrink: 'EventCodes',
      extRequestId: 'ExtRequestId',
      id: 'Id',
      idType: 'IdType',
      instanceId: 'InstanceId',
      page: 'Page',
      pageSize: 'PageSize',
      punishDomain: 'PunishDomain',
      punishIp: 'PunishIp',
      punishStatusesShrink: 'PunishStatuses',
      punishUrl: 'PunishUrl',
      punishUrlFull: 'PunishUrlFull',
      sourceCodesShrink: 'SourceCodes',
      startDate: 'StartDate',
      userIdsShrink: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antiStatusesShrink: 'string',
      bussinessCodesShrink: 'string',
      class: 'string',
      endDate: 'number',
      eventCodesShrink: 'string',
      extRequestId: 'string',
      id: 'number',
      idType: 'string',
      instanceId: 'string',
      page: 'number',
      pageSize: 'number',
      punishDomain: 'string',
      punishIp: 'string',
      punishStatusesShrink: 'string',
      punishUrl: 'string',
      punishUrlFull: 'string',
      sourceCodesShrink: 'string',
      startDate: 'number',
      userIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPunishRequestResponseBody extends $tea.Model {
  class?: string;
  code?: string;
  count?: number;
  dataList?: SearchPunishRequestResponseBodyDataList[];
  message?: string;
  success?: boolean;
  totalCount?: number;
  viewCount?: number;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
      code: 'Code',
      count: 'Count',
      dataList: 'DataList',
      message: 'Message',
      success: 'Success',
      totalCount: 'TotalCount',
      viewCount: 'ViewCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
      code: 'string',
      count: 'number',
      dataList: { 'type': 'array', 'itemType': SearchPunishRequestResponseBodyDataList },
      message: 'string',
      success: 'boolean',
      totalCount: 'number',
      viewCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPunishRequestResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchPunishRequestResponseBody;
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
      body: SearchPunishRequestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserInvestigationInfoQueryTaskResponseBodyData extends $tea.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
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

export class FindInstanceInfoResponseBodyDataPegInstanceInfoListUserInfo extends $tea.Model {
  gcLevel?: string;
  hitWhiteReason?: string;
  userId?: string;
  userSite?: string;
  whiteUser?: boolean;
  static names(): { [key: string]: string } {
    return {
      gcLevel: 'GcLevel',
      hitWhiteReason: 'HitWhiteReason',
      userId: 'UserId',
      userSite: 'UserSite',
      whiteUser: 'WhiteUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gcLevel: 'string',
      hitWhiteReason: 'string',
      userId: 'string',
      userSite: 'string',
      whiteUser: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindInstanceInfoResponseBodyDataPegInstanceInfoList extends $tea.Model {
  bussinessCode?: string;
  coordinate?: { [key: string]: any };
  idType?: string;
  instanceId?: string;
  serviceCreatedTime?: string;
  userId?: string;
  userInfo?: FindInstanceInfoResponseBodyDataPegInstanceInfoListUserInfo;
  static names(): { [key: string]: string } {
    return {
      bussinessCode: 'BussinessCode',
      coordinate: 'Coordinate',
      idType: 'IdType',
      instanceId: 'InstanceId',
      serviceCreatedTime: 'ServiceCreatedTime',
      userId: 'UserId',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bussinessCode: 'string',
      coordinate: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      idType: 'string',
      instanceId: 'string',
      serviceCreatedTime: 'string',
      userId: 'string',
      userInfo: FindInstanceInfoResponseBodyDataPegInstanceInfoListUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindInstanceInfoResponseBodyData extends $tea.Model {
  pegInstanceInfoList?: FindInstanceInfoResponseBodyDataPegInstanceInfoList[];
  static names(): { [key: string]: string } {
    return {
      pegInstanceInfoList: 'PegInstanceInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pegInstanceInfoList: { 'type': 'array', 'itemType': FindInstanceInfoResponseBodyDataPegInstanceInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUserAvailbleResourcesResponseBodyDataPegCoordinates extends $tea.Model {
  bussinessCode?: string;
  chargeType?: string;
  coordinate?: { [key: string]: any };
  idType?: string;
  instanceId?: string;
  region?: string;
  releaseTime?: string;
  resCreateTime?: string;
  resourceStatus?: string;
  resourceType?: string;
  serviceCreatedTime?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bussinessCode: 'BussinessCode',
      chargeType: 'ChargeType',
      coordinate: 'Coordinate',
      idType: 'IdType',
      instanceId: 'InstanceId',
      region: 'Region',
      releaseTime: 'ReleaseTime',
      resCreateTime: 'ResCreateTime',
      resourceStatus: 'ResourceStatus',
      resourceType: 'ResourceType',
      serviceCreatedTime: 'ServiceCreatedTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bussinessCode: 'string',
      chargeType: 'string',
      coordinate: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      idType: 'string',
      instanceId: 'string',
      region: 'string',
      releaseTime: 'string',
      resCreateTime: 'string',
      resourceStatus: 'string',
      resourceType: 'string',
      serviceCreatedTime: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUserAvailbleResourcesResponseBodyDataUserInfo extends $tea.Model {
  gcLevel?: string;
  hitWhiteReason?: string;
  userId?: string;
  userSite?: string;
  whiteUser?: boolean;
  static names(): { [key: string]: string } {
    return {
      gcLevel: 'GcLevel',
      hitWhiteReason: 'HitWhiteReason',
      userId: 'UserId',
      userSite: 'UserSite',
      whiteUser: 'WhiteUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gcLevel: 'string',
      hitWhiteReason: 'string',
      userId: 'string',
      userSite: 'string',
      whiteUser: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUserAvailbleResourcesResponseBodyData extends $tea.Model {
  pegCoordinates?: FindUserAvailbleResourcesResponseBodyDataPegCoordinates[];
  userInfo?: FindUserAvailbleResourcesResponseBodyDataUserInfo;
  static names(): { [key: string]: string } {
    return {
      pegCoordinates: 'PegCoordinates',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pegCoordinates: { 'type': 'array', 'itemType': FindUserAvailbleResourcesResponseBodyDataPegCoordinates },
      userInfo: FindUserAvailbleResourcesResponseBodyDataUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PunishResourceSearchResponseBodyDataList extends $tea.Model {
  actionCode?: string;
  bussinessCode?: string;
  class?: string;
  coordinate?: string;
  creator?: string;
  deleted?: boolean;
  domain?: string;
  extras?: string;
  gmtCreated?: string;
  gmtModified?: string;
  id?: number;
  instanceId?: string;
  ip?: string;
  modifier?: string;
  objectId?: string;
  objectType?: string;
  objectValue?: string;
  punishFrom?: string;
  reason?: string;
  requestId?: number;
  sourceCode?: string;
  status?: string;
  url?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      actionCode: 'ActionCode',
      bussinessCode: 'BussinessCode',
      class: 'Class',
      coordinate: 'Coordinate',
      creator: 'Creator',
      deleted: 'Deleted',
      domain: 'Domain',
      extras: 'Extras',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      id: 'Id',
      instanceId: 'InstanceId',
      ip: 'Ip',
      modifier: 'Modifier',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
      objectValue: 'ObjectValue',
      punishFrom: 'PunishFrom',
      reason: 'Reason',
      requestId: 'RequestId',
      sourceCode: 'SourceCode',
      status: 'Status',
      url: 'Url',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCode: 'string',
      bussinessCode: 'string',
      class: 'string',
      coordinate: 'string',
      creator: 'string',
      deleted: 'boolean',
      domain: 'string',
      extras: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      id: 'number',
      instanceId: 'string',
      ip: 'string',
      modifier: 'string',
      objectId: 'string',
      objectType: 'string',
      objectValue: 'string',
      punishFrom: 'string',
      reason: 'string',
      requestId: 'number',
      sourceCode: 'string',
      status: 'string',
      url: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPunishEventsResponseBodyDataList extends $tea.Model {
  bussinessCode?: string;
  caseCode?: string;
  recordsCount?: number;
  resourceId?: string;
  tipsCode?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bussinessCode: 'BussinessCode',
      caseCode: 'CaseCode',
      recordsCount: 'RecordsCount',
      resourceId: 'ResourceId',
      tipsCode: 'TipsCode',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bussinessCode: 'string',
      caseCode: 'string',
      recordsCount: 'number',
      resourceId: 'string',
      tipsCode: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPunishRecordsResponseBodyDataList extends $tea.Model {
  actionCode?: string;
  antiStatus?: string;
  bussinessCode?: string;
  caseCode?: string;
  createTime?: string;
  domain?: string;
  eventCode?: string;
  ip?: string;
  punishStatus?: string;
  reason?: string;
  resourceId?: string;
  tipsCode?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      actionCode: 'ActionCode',
      antiStatus: 'AntiStatus',
      bussinessCode: 'BussinessCode',
      caseCode: 'CaseCode',
      createTime: 'CreateTime',
      domain: 'Domain',
      eventCode: 'EventCode',
      ip: 'Ip',
      punishStatus: 'PunishStatus',
      reason: 'Reason',
      resourceId: 'ResourceId',
      tipsCode: 'TipsCode',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCode: 'string',
      antiStatus: 'string',
      bussinessCode: 'string',
      caseCode: 'string',
      createTime: 'string',
      domain: 'string',
      eventCode: 'string',
      ip: 'string',
      punishStatus: 'string',
      reason: 'string',
      resourceId: 'string',
      tipsCode: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPunishRequestResponseBodyDataList extends $tea.Model {
  antiPunishRespTime?: string;
  antiPunishTime?: string;
  antiResult?: string;
  antiStatus?: string;
  bussinessCode?: string;
  caseCode?: string;
  caseExtendCode?: string;
  caseSubCode?: string;
  class?: string;
  creator?: string;
  deleted?: boolean;
  eventCode?: string;
  expectedRemoveTime?: string;
  extRequestId?: string;
  gmtCreated?: string;
  gmtModified?: string;
  id?: number;
  idType?: string;
  instanceId?: string;
  ipString?: string;
  modifier?: string;
  punishDomain?: string;
  punishIp?: string;
  punishRequest?: string;
  punishRespTime?: string;
  punishResult?: string;
  punishStatus?: string;
  punishTime?: string;
  punishUrl?: string;
  reason?: string;
  sourceCode?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      antiPunishRespTime: 'AntiPunishRespTime',
      antiPunishTime: 'AntiPunishTime',
      antiResult: 'AntiResult',
      antiStatus: 'AntiStatus',
      bussinessCode: 'BussinessCode',
      caseCode: 'CaseCode',
      caseExtendCode: 'CaseExtendCode',
      caseSubCode: 'CaseSubCode',
      class: 'Class',
      creator: 'Creator',
      deleted: 'Deleted',
      eventCode: 'EventCode',
      expectedRemoveTime: 'ExpectedRemoveTime',
      extRequestId: 'ExtRequestId',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      id: 'Id',
      idType: 'IdType',
      instanceId: 'InstanceId',
      ipString: 'IpString',
      modifier: 'Modifier',
      punishDomain: 'PunishDomain',
      punishIp: 'PunishIp',
      punishRequest: 'PunishRequest',
      punishRespTime: 'PunishRespTime',
      punishResult: 'PunishResult',
      punishStatus: 'PunishStatus',
      punishTime: 'PunishTime',
      punishUrl: 'PunishUrl',
      reason: 'Reason',
      sourceCode: 'SourceCode',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antiPunishRespTime: 'string',
      antiPunishTime: 'string',
      antiResult: 'string',
      antiStatus: 'string',
      bussinessCode: 'string',
      caseCode: 'string',
      caseExtendCode: 'string',
      caseSubCode: 'string',
      class: 'string',
      creator: 'string',
      deleted: 'boolean',
      eventCode: 'string',
      expectedRemoveTime: 'string',
      extRequestId: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      id: 'number',
      idType: 'string',
      instanceId: 'string',
      ipString: 'string',
      modifier: 'string',
      punishDomain: 'string',
      punishIp: 'string',
      punishRequest: 'string',
      punishRespTime: 'string',
      punishResult: 'string',
      punishStatus: 'string',
      punishTime: 'string',
      punishUrl: 'string',
      reason: 'string',
      sourceCode: 'string',
      userId: 'string',
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
    this._endpoint = this.getEndpoint("buss", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @summary 处罚请求异步接口回调
   *
   * @param tmpReq BusinessResultServiceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BusinessResultServiceResponse
   */
  async businessResultServiceWithOptions(tmpReq: BusinessResultServiceRequest, runtime: $Util.RuntimeOptions): Promise<BusinessResultServiceResponse> {
    Util.validateModel(tmpReq);
    let request = new BusinessResultServiceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.result)) {
      request.resultShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.result, "Result", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BusinessResultService",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BusinessResultServiceResponse>(await this.callApi(params, req, runtime), new BusinessResultServiceResponse({}));
  }

  /**
   * @summary 处罚请求异步接口回调
   *
   * @param request BusinessResultServiceRequest
   * @return BusinessResultServiceResponse
   */
  async businessResultService(request: BusinessResultServiceRequest): Promise<BusinessResultServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.businessResultServiceWithOptions(request, runtime);
  }

  /**
   * @summary 协查中心查询任务接口
   *
   * @param request CreateUserInvestigationInfoQueryTaskRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateUserInvestigationInfoQueryTaskResponse
   */
  async createUserInvestigationInfoQueryTaskWithOptions(request: CreateUserInvestigationInfoQueryTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserInvestigationInfoQueryTaskResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateUserInvestigationInfoQueryTask",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateUserInvestigationInfoQueryTaskResponse>(await this.callApi(params, req, runtime), new CreateUserInvestigationInfoQueryTaskResponse({}));
  }

  /**
   * @summary 协查中心查询任务接口
   *
   * @param request CreateUserInvestigationInfoQueryTaskRequest
   * @return CreateUserInvestigationInfoQueryTaskResponse
   */
  async createUserInvestigationInfoQueryTask(request: CreateUserInvestigationInfoQueryTaskRequest): Promise<CreateUserInvestigationInfoQueryTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserInvestigationInfoQueryTaskWithOptions(request, runtime);
  }

  /**
   * @summary 反查资源
   *
   * @param tmpReq FindInstanceInfoRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return FindInstanceInfoResponse
   */
  async findInstanceInfoWithOptions(tmpReq: FindInstanceInfoRequest, runtime: $Util.RuntimeOptions): Promise<FindInstanceInfoResponse> {
    Util.validateModel(tmpReq);
    let request = new FindInstanceInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extras)) {
      request.extrasShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extras, "extras", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FindInstanceInfo",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FindInstanceInfoResponse>(await this.callApi(params, req, runtime), new FindInstanceInfoResponse({}));
  }

  /**
   * @summary 反查资源
   *
   * @param request FindInstanceInfoRequest
   * @return FindInstanceInfoResponse
   */
  async findInstanceInfo(request: FindInstanceInfoRequest): Promise<FindInstanceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findInstanceInfoWithOptions(request, runtime);
  }

  /**
   * @summary 根据用户id查询对应产品下全部可用资产信息接口
   *
   * @param request FindUserAvailbleResourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return FindUserAvailbleResourcesResponse
   */
  async findUserAvailbleResourcesWithOptions(request: FindUserAvailbleResourcesRequest, runtime: $Util.RuntimeOptions): Promise<FindUserAvailbleResourcesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FindUserAvailbleResources",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FindUserAvailbleResourcesResponse>(await this.callApi(params, req, runtime), new FindUserAvailbleResourcesResponse({}));
  }

  /**
   * @summary 根据用户id查询对应产品下全部可用资产信息接口
   *
   * @param request FindUserAvailbleResourcesRequest
   * @return FindUserAvailbleResourcesResponse
   */
  async findUserAvailbleResources(request: FindUserAvailbleResourcesRequest): Promise<FindUserAvailbleResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findUserAvailbleResourcesWithOptions(request, runtime);
  }

  /**
   * @summary 处罚资源搜索
   *
   * @param tmpReq PunishResourceSearchRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return PunishResourceSearchResponse
   */
  async punishResourceSearchWithOptions(tmpReq: PunishResourceSearchRequest, runtime: $Util.RuntimeOptions): Promise<PunishResourceSearchResponse> {
    Util.validateModel(tmpReq);
    let request = new PunishResourceSearchShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.actionCodes)) {
      request.actionCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.actionCodes, "ActionCodes", "json");
    }

    if (!Util.isUnset(tmpReq.bussinessCodes)) {
      request.bussinessCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bussinessCodes, "BussinessCodes", "json");
    }

    if (!Util.isUnset(tmpReq.sourceCodes)) {
      request.sourceCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceCodes, "SourceCodes", "json");
    }

    if (!Util.isUnset(tmpReq.userIds)) {
      request.userIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userIds, "UserIds", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PunishResourceSearch",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PunishResourceSearchResponse>(await this.callApi(params, req, runtime), new PunishResourceSearchResponse({}));
  }

  /**
   * @summary 处罚资源搜索
   *
   * @param request PunishResourceSearchRequest
   * @return PunishResourceSearchResponse
   */
  async punishResourceSearch(request: PunishResourceSearchRequest): Promise<PunishResourceSearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.punishResourceSearchWithOptions(request, runtime);
  }

  /**
   * @summary 风险事件同步
   *
   * @param request RiskEventSyncRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RiskEventSyncResponse
   */
  async riskEventSyncWithOptions(request: RiskEventSyncRequest, runtime: $Util.RuntimeOptions): Promise<RiskEventSyncResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deleted)) {
      body["Deleted"] = request.deleted;
    }

    if (!Util.isUnset(request.discoveryTime)) {
      body["DiscoveryTime"] = request.discoveryTime;
    }

    if (!Util.isUnset(request.eventName)) {
      body["EventName"] = request.eventName;
    }

    if (!Util.isUnset(request.eventNumber)) {
      body["EventNumber"] = request.eventNumber;
    }

    if (!Util.isUnset(request.relevanceBu)) {
      body["RelevanceBu"] = request.relevanceBu;
    }

    if (!Util.isUnset(request.riskDetail)) {
      body["RiskDetail"] = request.riskDetail;
    }

    if (!Util.isUnset(request.riskEffectType)) {
      body["RiskEffectType"] = request.riskEffectType;
    }

    if (!Util.isUnset(request.riskLevel)) {
      body["RiskLevel"] = request.riskLevel;
    }

    if (!Util.isUnset(request.riskType)) {
      body["RiskType"] = request.riskType;
    }

    if (!Util.isUnset(request.source)) {
      body["Source"] = request.source;
    }

    if (!Util.isUnset(request.submitter)) {
      body["Submitter"] = request.submitter;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RiskEventSync",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RiskEventSyncResponse>(await this.callApi(params, req, runtime), new RiskEventSyncResponse({}));
  }

  /**
   * @summary 风险事件同步
   *
   * @param request RiskEventSyncRequest
   * @return RiskEventSyncResponse
   */
  async riskEventSync(request: RiskEventSyncRequest): Promise<RiskEventSyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.riskEventSyncWithOptions(request, runtime);
  }

  /**
   * @summary 管控事件查询
   *
   * @param tmpReq SearchPunishEventsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SearchPunishEventsResponse
   */
  async searchPunishEventsWithOptions(tmpReq: SearchPunishEventsRequest, runtime: $Util.RuntimeOptions): Promise<SearchPunishEventsResponse> {
    Util.validateModel(tmpReq);
    let request = new SearchPunishEventsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.bussinessCodes)) {
      request.bussinessCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bussinessCodes, "BussinessCodes", "json");
    }

    if (!Util.isUnset(tmpReq.caseCodes)) {
      request.caseCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.caseCodes, "CaseCodes", "json");
    }

    if (!Util.isUnset(tmpReq.eventCodes)) {
      request.eventCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.eventCodes, "EventCodes", "json");
    }

    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.bussinessCodesShrink)) {
      query["BussinessCodes"] = request.bussinessCodesShrink;
    }

    if (!Util.isUnset(request.caseCodesShrink)) {
      query["CaseCodes"] = request.caseCodesShrink;
    }

    if (!Util.isUnset(request.eventCodesShrink)) {
      query["EventCodes"] = request.eventCodesShrink;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchPunishEvents",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchPunishEventsResponse>(await this.callApi(params, req, runtime), new SearchPunishEventsResponse({}));
  }

  /**
   * @summary 管控事件查询
   *
   * @param request SearchPunishEventsRequest
   * @return SearchPunishEventsResponse
   */
  async searchPunishEvents(request: SearchPunishEventsRequest): Promise<SearchPunishEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchPunishEventsWithOptions(request, runtime);
  }

  /**
   * @summary 管控事件查询
   *
   * @param tmpReq SearchPunishRecordsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SearchPunishRecordsResponse
   */
  async searchPunishRecordsWithOptions(tmpReq: SearchPunishRecordsRequest, runtime: $Util.RuntimeOptions): Promise<SearchPunishRecordsResponse> {
    Util.validateModel(tmpReq);
    let request = new SearchPunishRecordsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.actionCodes)) {
      request.actionCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.actionCodes, "ActionCodes", "json");
    }

    if (!Util.isUnset(tmpReq.caseCodes)) {
      request.caseCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.caseCodes, "CaseCodes", "json");
    }

    if (!Util.isUnset(tmpReq.eventCodes)) {
      request.eventCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.eventCodes, "EventCodes", "json");
    }

    if (!Util.isUnset(tmpReq.punishStatus)) {
      request.punishStatusShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.punishStatus, "PunishStatus", "json");
    }

    if (!Util.isUnset(tmpReq.sourceCodes)) {
      request.sourceCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceCodes, "SourceCodes", "json");
    }

    let query = { };
    if (!Util.isUnset(request.actionCodesShrink)) {
      query["ActionCodes"] = request.actionCodesShrink;
    }

    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.bussinessCodes)) {
      query["BussinessCodes"] = request.bussinessCodes;
    }

    if (!Util.isUnset(request.caseCodesShrink)) {
      query["CaseCodes"] = request.caseCodesShrink;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.eventCodesShrink)) {
      query["EventCodes"] = request.eventCodesShrink;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.punishStatusShrink)) {
      query["PunishStatus"] = request.punishStatusShrink;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.sourceCodesShrink)) {
      query["SourceCodes"] = request.sourceCodesShrink;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    if (!Util.isUnset(request.urlFuzzy)) {
      query["UrlFuzzy"] = request.urlFuzzy;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchPunishRecords",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchPunishRecordsResponse>(await this.callApi(params, req, runtime), new SearchPunishRecordsResponse({}));
  }

  /**
   * @summary 管控事件查询
   *
   * @param request SearchPunishRecordsRequest
   * @return SearchPunishRecordsResponse
   */
  async searchPunishRecords(request: SearchPunishRecordsRequest): Promise<SearchPunishRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchPunishRecordsWithOptions(request, runtime);
  }

  /**
   * @summary 处罚记录查询
   *
   * @param tmpReq SearchPunishRequestRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SearchPunishRequestResponse
   */
  async searchPunishRequestWithOptions(tmpReq: SearchPunishRequestRequest, runtime: $Util.RuntimeOptions): Promise<SearchPunishRequestResponse> {
    Util.validateModel(tmpReq);
    let request = new SearchPunishRequestShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.antiStatuses)) {
      request.antiStatusesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.antiStatuses, "AntiStatuses", "json");
    }

    if (!Util.isUnset(tmpReq.bussinessCodes)) {
      request.bussinessCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bussinessCodes, "BussinessCodes", "json");
    }

    if (!Util.isUnset(tmpReq.eventCodes)) {
      request.eventCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.eventCodes, "EventCodes", "json");
    }

    if (!Util.isUnset(tmpReq.punishStatuses)) {
      request.punishStatusesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.punishStatuses, "PunishStatuses", "json");
    }

    if (!Util.isUnset(tmpReq.sourceCodes)) {
      request.sourceCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceCodes, "SourceCodes", "json");
    }

    if (!Util.isUnset(tmpReq.userIds)) {
      request.userIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userIds, "UserIds", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchPunishRequest",
      version: "2022-08-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchPunishRequestResponse>(await this.callApi(params, req, runtime), new SearchPunishRequestResponse({}));
  }

  /**
   * @summary 处罚记录查询
   *
   * @param request SearchPunishRequestRequest
   * @return SearchPunishRequestResponse
   */
  async searchPunishRequest(request: SearchPunishRequestRequest): Promise<SearchPunishRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchPunishRequestWithOptions(request, runtime);
  }

}
