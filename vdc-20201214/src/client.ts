// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DescribeFaultDiagnosisOverallDataRequest extends $tea.Model {
  appId?: string;
  startTs?: number;
  endTs?: number;
  statDim?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      startTs: 'StartTs',
      endTs: 'EndTs',
      statDim: 'StatDim',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      startTs: 'number',
      endTs: 'number',
      statDim: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisOverallDataResponseBody extends $tea.Model {
  overallData?: DescribeFaultDiagnosisOverallDataResponseBodyOverallData;
  metricData?: DescribeFaultDiagnosisOverallDataResponseBodyMetricData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      overallData: 'OverallData',
      metricData: 'MetricData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overallData: DescribeFaultDiagnosisOverallDataResponseBodyOverallData,
      metricData: DescribeFaultDiagnosisOverallDataResponseBodyMetricData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisOverallDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFaultDiagnosisOverallDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFaultDiagnosisOverallDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelUsersRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  timePoint?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      timePoint: 'TimePoint',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      timePoint: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelUsersResponseBody extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  totalCnt?: number;
  userList?: DescribeRtcChannelUsersResponseBodyUserList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      totalCnt: 'TotalCnt',
      userList: 'UserList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      totalCnt: 'number',
      userList: DescribeRtcChannelUsersResponseBodyUserList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRtcChannelUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRtcChannelUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelOverallDataRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelOverallDataResponseBody extends $tea.Model {
  metricDatas?: DescribeChannelOverallDataResponseBodyMetricDatas[];
  overallData?: DescribeChannelOverallDataResponseBodyOverallData;
  callInfo?: DescribeChannelOverallDataResponseBodyCallInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metricDatas: 'MetricDatas',
      overallData: 'OverallData',
      callInfo: 'CallInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricDatas: { 'type': 'array', 'itemType': DescribeChannelOverallDataResponseBodyMetricDatas },
      overallData: DescribeChannelOverallDataResponseBodyOverallData,
      callInfo: DescribeChannelOverallDataResponseBodyCallInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelOverallDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeChannelOverallDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeChannelOverallDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOsSdkVersionDistributionStatDataRequest extends $tea.Model {
  startDate?: number;
  endDate?: number;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      startDate: 'StartDate',
      endDate: 'EndDate',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startDate: 'number',
      endDate: 'number',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOsSdkVersionDistributionStatDataResponseBody extends $tea.Model {
  usageOsSdkVersionStatList?: DescribeUsageOsSdkVersionDistributionStatDataResponseBodyUsageOsSdkVersionStatList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      usageOsSdkVersionStatList: 'UsageOsSdkVersionStatList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageOsSdkVersionStatList: { 'type': 'array', 'itemType': DescribeUsageOsSdkVersionDistributionStatDataResponseBodyUsageOsSdkVersionStatList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOsSdkVersionDistributionStatDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUsageOsSdkVersionDistributionStatDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUsageOsSdkVersionDistributionStatDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIceDurPeriodByDaySubTypeRequest extends $tea.Model {
  jobType?: string;
  startTs?: number;
  endTs?: number;
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      jobType: 'JobType',
      startTs: 'StartTs',
      endTs: 'EndTs',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobType: 'string',
      startTs: 'number',
      endTs: 'number',
      timeZone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIceDurPeriodByDaySubTypeResponseBody extends $tea.Model {
  requestId?: string;
  jobInfoList?: DescribeIceDurPeriodByDaySubTypeResponseBodyJobInfoList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      jobInfoList: 'JobInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      jobInfoList: { 'type': 'array', 'itemType': DescribeIceDurPeriodByDaySubTypeResponseBodyJobInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIceDurPeriodByDaySubTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeIceDurPeriodByDaySubTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeIceDurPeriodByDaySubTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallListRequest extends $tea.Model {
  appId?: string;
  startTs?: number;
  endTs?: number;
  channelId?: string;
  userId?: string;
  callStatus?: string;
  orderBy?: string;
  queryMode?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      startTs: 'StartTs',
      endTs: 'EndTs',
      channelId: 'ChannelId',
      userId: 'UserId',
      callStatus: 'CallStatus',
      orderBy: 'OrderBy',
      queryMode: 'QueryMode',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      startTs: 'number',
      endTs: 'number',
      channelId: 'string',
      userId: 'string',
      callStatus: 'string',
      orderBy: 'string',
      queryMode: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallListResponseBody extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  totalCnt?: number;
  callList?: DescribeCallListResponseBodyCallList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      totalCnt: 'TotalCnt',
      callList: 'CallList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      totalCnt: 'number',
      callList: { 'type': 'array', 'itemType': DescribeCallListResponseBodyCallList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCallListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCallListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityAreaDistributionStatDataRequest extends $tea.Model {
  startDate?: number;
  endDate?: number;
  parentArea?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      startDate: 'StartDate',
      endDate: 'EndDate',
      parentArea: 'ParentArea',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startDate: 'number',
      endDate: 'number',
      parentArea: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityAreaDistributionStatDataResponseBody extends $tea.Model {
  qualityStatDataList?: DescribeQualityAreaDistributionStatDataResponseBodyQualityStatDataList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      qualityStatDataList: 'QualityStatDataList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualityStatDataList: { 'type': 'array', 'itemType': DescribeQualityAreaDistributionStatDataResponseBodyQualityStatDataList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityAreaDistributionStatDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeQualityAreaDistributionStatDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeQualityAreaDistributionStatDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcUserEventListRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  uid?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      uid: 'Uid',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      uid: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcUserEventListResponseBody extends $tea.Model {
  requestId?: string;
  events?: DescribeRtcUserEventListResponseBodyEvents[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      events: 'Events',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      events: { 'type': 'array', 'itemType': DescribeRtcUserEventListResponseBodyEvents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcUserEventListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRtcUserEventListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRtcUserEventListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppExpMetricRuleRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppExpMetricRuleResponseBody extends $tea.Model {
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

export class DeleteAppExpMetricRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAppExpMetricRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAppExpMetricRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointEventListRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  userIdList?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      userIdList: 'UserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      userIdList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointEventListResponseBody extends $tea.Model {
  nodes?: DescribeEndPointEventListResponseBodyNodes[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeEndPointEventListResponseBodyNodes },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointEventListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEndPointEventListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEndPointEventListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityDistributionStatDataRequest extends $tea.Model {
  startDate?: number;
  endDate?: number;
  statDim?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      startDate: 'StartDate',
      endDate: 'EndDate',
      statDim: 'StatDim',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startDate: 'number',
      endDate: 'number',
      statDim: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityDistributionStatDataResponseBody extends $tea.Model {
  qualityStatDataList?: DescribeQualityDistributionStatDataResponseBodyQualityStatDataList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      qualityStatDataList: 'QualityStatDataList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualityStatDataList: { 'type': 'array', 'itemType': DescribeQualityDistributionStatDataResponseBodyQualityStatDataList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityDistributionStatDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeQualityDistributionStatDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeQualityDistributionStatDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallListTestRequest extends $tea.Model {
  appId?: string;
  startTs?: number;
  endTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      startTs: 'StartTs',
      endTs: 'EndTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      startTs: 'number',
      endTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallListTestResponseBody extends $tea.Model {
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

export class DescribeCallListTestResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCallListTestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCallListTestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  extDataType?: string;
  queryExpInfo?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      extDataType: 'ExtDataType',
      queryExpInfo: 'QueryExpInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      extDataType: 'string',
      queryExpInfo: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallResponseBody extends $tea.Model {
  callInfo?: DescribeCallResponseBodyCallInfo;
  userDetailList?: DescribeCallResponseBodyUserDetailList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callInfo: 'CallInfo',
      userDetailList: 'UserDetailList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callInfo: DescribeCallResponseBodyCallInfo,
      userDetailList: { 'type': 'array', 'itemType': DescribeCallResponseBodyUserDetailList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppFollowCallRuleListResponseBody extends $tea.Model {
  appFollowCallRuleList?: DescribeAppFollowCallRuleListResponseBodyAppFollowCallRuleList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appFollowCallRuleList: 'AppFollowCallRuleList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appFollowCallRuleList: { 'type': 'array', 'itemType': DescribeAppFollowCallRuleListResponseBodyAppFollowCallRuleList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppFollowCallRuleListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAppFollowCallRuleListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAppFollowCallRuleListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelAreaDistributionStatDataRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  parentArea?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      parentArea: 'ParentArea',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      parentArea: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelAreaDistributionStatDataResponseBody extends $tea.Model {
  areaStatList?: DescribeChannelAreaDistributionStatDataResponseBodyAreaStatList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      areaStatList: 'AreaStatList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaStatList: { 'type': 'array', 'itemType': DescribeChannelAreaDistributionStatDataResponseBodyAreaStatList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelAreaDistributionStatDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeChannelAreaDistributionStatDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeChannelAreaDistributionStatDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppExpMetricRuleRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppExpMetricRuleResponseBody extends $tea.Model {
  appExpMetricRule?: DescribeAppExpMetricRuleResponseBodyAppExpMetricRule;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appExpMetricRule: 'AppExpMetricRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appExpMetricRule: DescribeAppExpMetricRuleResponseBodyAppExpMetricRule,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppExpMetricRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAppExpMetricRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAppExpMetricRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelDetailsRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  startTime?: string;
  endTime?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelDetailsResponseBody extends $tea.Model {
  requestId?: string;
  pageNo?: number;
  pageSize?: number;
  totalSize?: number;
  channelId?: string;
  channelInfo?: DescribeRtcChannelDetailsResponseBodyChannelInfo[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
      channelId: 'ChannelId',
      channelInfo: 'ChannelInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      totalSize: 'number',
      channelId: 'string',
      channelInfo: { 'type': 'array', 'itemType': DescribeRtcChannelDetailsResponseBodyChannelInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRtcChannelDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRtcChannelDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIceDurSummaryOverviewRequest extends $tea.Model {
  curTs?: number;
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      curTs: 'CurTs',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      curTs: 'number',
      timeZone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIceDurSummaryOverviewResponseBody extends $tea.Model {
  requestId?: string;
  jobInfoList?: DescribeIceDurSummaryOverviewResponseBodyJobInfoList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      jobInfoList: 'JobInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      jobInfoList: { 'type': 'array', 'itemType': DescribeIceDurSummaryOverviewResponseBodyJobInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIceDurSummaryOverviewResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeIceDurSummaryOverviewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeIceDurSummaryOverviewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallUserExpRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallUserExpResponseBody extends $tea.Model {
  expInfoList?: DescribeCallUserExpResponseBodyExpInfoList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      expInfoList: 'ExpInfoList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expInfoList: { 'type': 'array', 'itemType': DescribeCallUserExpResponseBodyExpInfoList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallUserExpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCallUserExpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCallUserExpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelJoinInfoRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelJoinInfoResponseBody extends $tea.Model {
  joinSlowThreshold?: number;
  joinFastSuccessRate?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      joinSlowThreshold: 'JoinSlowThreshold',
      joinFastSuccessRate: 'JoinFastSuccessRate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinSlowThreshold: 'number',
      joinFastSuccessRate: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelJoinInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeChannelJoinInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeChannelJoinInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppFollowCallRuleRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppFollowCallRuleResponseBody extends $tea.Model {
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

export class DeleteAppFollowCallRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAppFollowCallRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAppFollowCallRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppExpMetricRuleListResponseBody extends $tea.Model {
  appExpMetricRuleList?: DescribeAppExpMetricRuleListResponseBodyAppExpMetricRuleList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appExpMetricRuleList: 'AppExpMetricRuleList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appExpMetricRuleList: { 'type': 'array', 'itemType': DescribeAppExpMetricRuleListResponseBodyAppExpMetricRuleList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppExpMetricRuleListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAppExpMetricRuleListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAppExpMetricRuleListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelTopPubUserListRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelTopPubUserListResponseBody extends $tea.Model {
  topPubUserDetailList?: DescribeChannelTopPubUserListResponseBodyTopPubUserDetailList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      topPubUserDetailList: 'TopPubUserDetailList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topPubUserDetailList: { 'type': 'array', 'itemType': DescribeChannelTopPubUserListResponseBodyTopPubUserDetailList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelTopPubUserListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeChannelTopPubUserListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeChannelTopPubUserListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppFollowCallRuleRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppFollowCallRuleResponseBody extends $tea.Model {
  appFollowCallRule?: DescribeAppFollowCallRuleResponseBodyAppFollowCallRule;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appFollowCallRule: 'AppFollowCallRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appFollowCallRule: DescribeAppFollowCallRuleResponseBodyAppFollowCallRule,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppFollowCallRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAppFollowCallRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAppFollowCallRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageDistributionStatDataRequest extends $tea.Model {
  startDate?: number;
  endDate?: number;
  statDim?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      startDate: 'StartDate',
      endDate: 'EndDate',
      statDim: 'StatDim',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startDate: 'number',
      endDate: 'number',
      statDim: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageDistributionStatDataResponseBody extends $tea.Model {
  usageStatList?: DescribeUsageDistributionStatDataResponseBodyUsageStatList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      usageStatList: 'UsageStatList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageStatList: { 'type': 'array', 'itemType': DescribeUsageDistributionStatDataResponseBodyUsageStatList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageDistributionStatDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUsageDistributionStatDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUsageDistributionStatDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageAreaDistributionStatDataRequest extends $tea.Model {
  startDate?: string;
  endDate?: string;
  parentArea?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      startDate: 'StartDate',
      endDate: 'EndDate',
      parentArea: 'ParentArea',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startDate: 'string',
      endDate: 'string',
      parentArea: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageAreaDistributionStatDataResponseBody extends $tea.Model {
  usageAreaStatList?: DescribeUsageAreaDistributionStatDataResponseBodyUsageAreaStatList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      usageAreaStatList: 'UsageAreaStatList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageAreaStatList: { 'type': 'array', 'itemType': DescribeUsageAreaDistributionStatDataResponseBodyUsageAreaStatList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageAreaDistributionStatDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUsageAreaDistributionStatDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUsageAreaDistributionStatDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointMetricDataRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  subUserId?: string;
  pubUserId?: string;
  pubCallIdList?: string;
  metrics?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      subUserId: 'SubUserId',
      pubUserId: 'PubUserId',
      pubCallIdList: 'PubCallIdList',
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      subUserId: 'string',
      pubUserId: 'string',
      pubCallIdList: 'string',
      metrics: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointMetricDataResponseBody extends $tea.Model {
  subMetrics?: DescribeEndPointMetricDataResponseBodySubMetrics[];
  pubMetrics?: DescribeEndPointMetricDataResponseBodyPubMetrics[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      subMetrics: 'SubMetrics',
      pubMetrics: 'PubMetrics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subMetrics: { 'type': 'array', 'itemType': DescribeEndPointMetricDataResponseBodySubMetrics },
      pubMetrics: { 'type': 'array', 'itemType': DescribeEndPointMetricDataResponseBodyPubMetrics },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointMetricDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEndPointMetricDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEndPointMetricDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppConfigRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppConfigResponseBody extends $tea.Model {
  thresholdConfig?: DescribeAppConfigResponseBodyThresholdConfig;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      thresholdConfig: 'ThresholdConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thresholdConfig: DescribeAppConfigResponseBodyThresholdConfig,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAppConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAppConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOverallDataRequest extends $tea.Model {
  startDate?: number;
  endDate?: number;
  types?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      startDate: 'StartDate',
      endDate: 'EndDate',
      types: 'Types',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startDate: 'number',
      endDate: 'number',
      types: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOverallDataResponseBody extends $tea.Model {
  usageOverallData?: DescribeUsageOverallDataResponseBodyUsageOverallData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      usageOverallData: 'UsageOverallData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageOverallData: { 'type': 'array', 'itemType': DescribeUsageOverallDataResponseBodyUsageOverallData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOverallDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUsageOverallDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUsageOverallDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppExpMetricRuleRequest extends $tea.Model {
  rule?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppExpMetricRuleResponseBody extends $tea.Model {
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

export class UpdateAppExpMetricRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAppExpMetricRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAppExpMetricRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  createdTs?: number;
  userId?: string;
  faultType?: string;
  queryCallUserInfo?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      userId: 'UserId',
      faultType: 'FaultType',
      queryCallUserInfo: 'QueryCallUserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      userId: 'string',
      faultType: 'string',
      queryCallUserInfo: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBody extends $tea.Model {
  callInfo?: DescribeFaultDiagnosisUserDetailResponseBodyCallInfo;
  userDetail?: DescribeFaultDiagnosisUserDetailResponseBodyUserDetail;
  faultMetricData?: DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricData;
  factorList?: DescribeFaultDiagnosisUserDetailResponseBodyFactorList[];
  networkOperators?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callInfo: 'CallInfo',
      userDetail: 'UserDetail',
      faultMetricData: 'FaultMetricData',
      factorList: 'FactorList',
      networkOperators: 'NetworkOperators',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callInfo: DescribeFaultDiagnosisUserDetailResponseBodyCallInfo,
      userDetail: DescribeFaultDiagnosisUserDetailResponseBodyUserDetail,
      faultMetricData: DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricData,
      factorList: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorList },
      networkOperators: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFaultDiagnosisUserDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFaultDiagnosisUserDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelDistributionStatDataRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  statDim?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      statDim: 'StatDim',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      statDim: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelDistributionStatDataResponseBody extends $tea.Model {
  statList?: DescribeChannelDistributionStatDataResponseBodyStatList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      statList: 'StatList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statList: { 'type': 'array', 'itemType': DescribeChannelDistributionStatDataResponseBodyStatList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelDistributionStatDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeChannelDistributionStatDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeChannelDistributionStatDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserMetricsRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserMetricsResponseBody extends $tea.Model {
  metricDatas?: DescribeChannelUserMetricsResponseBodyMetricDatas[];
  overallData?: DescribeChannelUserMetricsResponseBodyOverallData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metricDatas: 'MetricDatas',
      overallData: 'OverallData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricDatas: { 'type': 'array', 'itemType': DescribeChannelUserMetricsResponseBodyMetricDatas },
      overallData: DescribeChannelUserMetricsResponseBodyOverallData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserMetricsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeChannelUserMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeChannelUserMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisFactorDistributionStatRequest extends $tea.Model {
  appId?: string;
  startTs?: number;
  endTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      startTs: 'StartTs',
      endTs: 'EndTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      startTs: 'number',
      endTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisFactorDistributionStatResponseBody extends $tea.Model {
  statList?: DescribeFaultDiagnosisFactorDistributionStatResponseBodyStatList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      statList: 'StatList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statList: { 'type': 'array', 'itemType': DescribeFaultDiagnosisFactorDistributionStatResponseBodyStatList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisFactorDistributionStatResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFaultDiagnosisFactorDistributionStatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFaultDiagnosisFactorDistributionStatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelListRequest extends $tea.Model {
  appId?: string;
  startTime?: string;
  endTime?: string;
  channelId?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      channelId: 'ChannelId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      startTime: 'string',
      endTime: 'string',
      channelId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelListResponseBody extends $tea.Model {
  requestId?: string;
  pageNo?: number;
  pageSize?: number;
  totalCnt?: number;
  channels?: DescribeRtcChannelListResponseBodyChannels[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      totalCnt: 'TotalCnt',
      channels: 'Channels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      totalCnt: 'number',
      channels: { 'type': 'array', 'itemType': DescribeRtcChannelListResponseBodyChannels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRtcChannelListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRtcChannelListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserListRequest extends $tea.Model {
  appId?: string;
  startTs?: number;
  endTs?: number;
  channelId?: string;
  userId?: string;
  faultTypes?: string;
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      startTs: 'StartTs',
      endTs: 'EndTs',
      channelId: 'ChannelId',
      userId: 'UserId',
      faultTypes: 'FaultTypes',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      startTs: 'number',
      endTs: 'number',
      channelId: 'string',
      userId: 'string',
      faultTypes: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserListResponseBody extends $tea.Model {
  userList?: DescribeFaultDiagnosisUserListResponseBodyUserList[];
  pageNo?: number;
  pageSize?: number;
  totalCnt?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      userList: 'UserList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      totalCnt: 'TotalCnt',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userList: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserListResponseBodyUserList },
      pageNo: 'number',
      pageSize: 'number',
      totalCnt: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFaultDiagnosisUserListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFaultDiagnosisUserListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricListRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  pubUid?: string;
  subUid?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      pubUid: 'PubUid',
      subUid: 'SubUid',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      pubUid: 'string',
      subUid: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricListResponseBody extends $tea.Model {
  requestId?: string;
  metrics?: DescribeRtcChannelMetricListResponseBodyMetrics[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      metrics: { 'type': 'array', 'itemType': DescribeRtcChannelMetricListResponseBodyMetrics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRtcChannelMetricListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRtcChannelMetricListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQoeMetricDataRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQoeMetricDataResponseBody extends $tea.Model {
  videoData?: DescribeQoeMetricDataResponseBodyVideoData[];
  audioData?: DescribeQoeMetricDataResponseBodyAudioData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      videoData: 'VideoData',
      audioData: 'AudioData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoData: { 'type': 'array', 'itemType': DescribeQoeMetricDataResponseBodyVideoData },
      audioData: { 'type': 'array', 'itemType': DescribeQoeMetricDataResponseBodyAudioData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQoeMetricDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeQoeMetricDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeQoeMetricDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePubUserListBySubUserRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePubUserListBySubUserResponseBody extends $tea.Model {
  subUserDetail?: DescribePubUserListBySubUserResponseBodySubUserDetail;
  pubUserDetailList?: DescribePubUserListBySubUserResponseBodyPubUserDetailList[];
  callStatus?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      subUserDetail: 'SubUserDetail',
      pubUserDetailList: 'PubUserDetailList',
      callStatus: 'CallStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subUserDetail: DescribePubUserListBySubUserResponseBodySubUserDetail,
      pubUserDetailList: { 'type': 'array', 'itemType': DescribePubUserListBySubUserResponseBodyPubUserDetailList },
      callStatus: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePubUserListBySubUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePubUserListBySubUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePubUserListBySubUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppFollowCallRuleRequest extends $tea.Model {
  rule?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppFollowCallRuleResponseBody extends $tea.Model {
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

export class UpdateAppFollowCallRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAppFollowCallRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAppFollowCallRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityOsSdkVersionDistributionStatDataRequest extends $tea.Model {
  startDate?: number;
  endDate?: number;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      startDate: 'StartDate',
      endDate: 'EndDate',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startDate: 'number',
      endDate: 'number',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityOsSdkVersionDistributionStatDataResponseBody extends $tea.Model {
  qualityOsSdkVersionStatDataList?: DescribeQualityOsSdkVersionDistributionStatDataResponseBodyQualityOsSdkVersionStatDataList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      qualityOsSdkVersionStatDataList: 'QualityOsSdkVersionStatDataList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualityOsSdkVersionStatDataList: { 'type': 'array', 'itemType': DescribeQualityOsSdkVersionDistributionStatDataResponseBodyQualityOsSdkVersionStatDataList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityOsSdkVersionDistributionStatDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeQualityOsSdkVersionDistributionStatDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeQualityOsSdkVersionDistributionStatDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcRecordMetricDataRequest extends $tea.Model {
  startTime?: string;
  endTime?: string;
  serviceArea?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      serviceArea: 'ServiceArea',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      endTime: 'string',
      serviceArea: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcRecordMetricDataResponseBody extends $tea.Model {
  rtcRecordMetricData?: DescribeRtcRecordMetricDataResponseBodyRtcRecordMetricData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      rtcRecordMetricData: 'RtcRecordMetricData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rtcRecordMetricData: { 'type': 'array', 'itemType': DescribeRtcRecordMetricDataResponseBodyRtcRecordMetricData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcRecordMetricDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRtcRecordMetricDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRtcRecordMetricDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityOverallDataRequest extends $tea.Model {
  startDate?: number;
  endDate?: number;
  types?: string;
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      startDate: 'StartDate',
      endDate: 'EndDate',
      types: 'Types',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startDate: 'number',
      endDate: 'number',
      types: 'string',
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityOverallDataResponseBody extends $tea.Model {
  qualityOverallData?: DescribeQualityOverallDataResponseBodyQualityOverallData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      qualityOverallData: 'QualityOverallData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualityOverallData: { 'type': 'array', 'itemType': DescribeQualityOverallDataResponseBodyQualityOverallData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityOverallDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeQualityOverallDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeQualityOverallDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisOverallDataResponseBodyOverallData extends $tea.Model {
  faultUserCount?: number;
  totalUserCount?: number;
  faultUserRatio?: number;
  static names(): { [key: string]: string } {
    return {
      faultUserCount: 'FaultUserCount',
      totalUserCount: 'TotalUserCount',
      faultUserRatio: 'FaultUserRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faultUserCount: 'number',
      totalUserCount: 'number',
      faultUserRatio: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisOverallDataResponseBodyMetricDataNodes extends $tea.Model {
  x?: string;
  y?: string;
  ext?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
      ext: 'Ext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'string',
      y: 'string',
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisOverallDataResponseBodyMetricData extends $tea.Model {
  nodes?: DescribeFaultDiagnosisOverallDataResponseBodyMetricDataNodes[];
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeFaultDiagnosisOverallDataResponseBodyMetricDataNodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelUsersResponseBodyUserListUserList extends $tea.Model {
  userId?: string;
  channel?: string;
  startTime?: string;
  endTime?: string;
  serviceArea?: string;
  location?: string;
  subAudio?: number;
  pubAudio?: number;
  subVideo360?: number;
  pubVideo360?: number;
  subVideo720?: number;
  pubVideo720?: number;
  subVideo1080?: number;
  pubVideo1080?: number;
  subContent?: number;
  pubContent?: number;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      channel: 'Channel',
      startTime: 'StartTime',
      endTime: 'EndTime',
      serviceArea: 'ServiceArea',
      location: 'Location',
      subAudio: 'SubAudio',
      pubAudio: 'PubAudio',
      subVideo360: 'SubVideo360',
      pubVideo360: 'PubVideo360',
      subVideo720: 'SubVideo720',
      pubVideo720: 'PubVideo720',
      subVideo1080: 'SubVideo1080',
      pubVideo1080: 'PubVideo1080',
      subContent: 'SubContent',
      pubContent: 'PubContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      channel: 'string',
      startTime: 'string',
      endTime: 'string',
      serviceArea: 'string',
      location: 'string',
      subAudio: 'number',
      pubAudio: 'number',
      subVideo360: 'number',
      pubVideo360: 'number',
      subVideo720: 'number',
      pubVideo720: 'number',
      subVideo1080: 'number',
      pubVideo1080: 'number',
      subContent: 'number',
      pubContent: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelUsersResponseBodyUserList extends $tea.Model {
  userList?: DescribeRtcChannelUsersResponseBodyUserListUserList[];
  static names(): { [key: string]: string } {
    return {
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userList: { 'type': 'array', 'itemType': DescribeRtcChannelUsersResponseBodyUserListUserList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelOverallDataResponseBodyMetricDatasNodes extends $tea.Model {
  x?: string;
  y?: string;
  ext?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
      ext: 'Ext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'string',
      y: 'string',
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelOverallDataResponseBodyMetricDatas extends $tea.Model {
  type?: string;
  nodes?: DescribeChannelOverallDataResponseBodyMetricDatasNodes[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      nodes: { 'type': 'array', 'itemType': DescribeChannelOverallDataResponseBodyMetricDatasNodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelOverallDataResponseBodyOverallData extends $tea.Model {
  connAvgTime?: number;
  fiveSecJoinRate?: number;
  totalAudioStuckRate?: number;
  totalVideoStuckRate?: number;
  totalVideoVagueRate?: number;
  static names(): { [key: string]: string } {
    return {
      connAvgTime: 'ConnAvgTime',
      fiveSecJoinRate: 'FiveSecJoinRate',
      totalAudioStuckRate: 'TotalAudioStuckRate',
      totalVideoStuckRate: 'TotalVideoStuckRate',
      totalVideoVagueRate: 'TotalVideoVagueRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAvgTime: 'number',
      fiveSecJoinRate: 'number',
      totalAudioStuckRate: 'number',
      totalVideoStuckRate: 'number',
      totalVideoVagueRate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelOverallDataResponseBodyCallInfo extends $tea.Model {
  appId?: string;
  channelId?: string;
  callStatus?: string;
  createdTs?: number;
  destroyedTs?: number;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      callStatus: 'CallStatus',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      callStatus: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOsSdkVersionDistributionStatDataResponseBodyUsageOsSdkVersionStatList extends $tea.Model {
  name?: string;
  os?: string;
  audioCallDuration?: number;
  videoCallDuration?: number;
  totalCallDuration?: number;
  callDurationRatio?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      os: 'Os',
      audioCallDuration: 'AudioCallDuration',
      videoCallDuration: 'VideoCallDuration',
      totalCallDuration: 'TotalCallDuration',
      callDurationRatio: 'CallDurationRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      os: 'string',
      audioCallDuration: 'number',
      videoCallDuration: 'number',
      totalCallDuration: 'number',
      callDurationRatio: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIceDurPeriodByDaySubTypeResponseBodyJobInfoListSubJobInfoList extends $tea.Model {
  subJobType?: string;
  subJobDuration?: number;
  static names(): { [key: string]: string } {
    return {
      subJobType: 'SubJobType',
      subJobDuration: 'SubJobDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subJobType: 'string',
      subJobDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIceDurPeriodByDaySubTypeResponseBodyJobInfoList extends $tea.Model {
  duration?: number;
  dateTs?: number;
  subJobInfoList?: DescribeIceDurPeriodByDaySubTypeResponseBodyJobInfoListSubJobInfoList[];
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      dateTs: 'DateTs',
      subJobInfoList: 'SubJobInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      dateTs: 'number',
      subJobInfoList: { 'type': 'array', 'itemType': DescribeIceDurPeriodByDaySubTypeResponseBodyJobInfoListSubJobInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallListResponseBodyCallList extends $tea.Model {
  appId?: string;
  channelId?: string;
  callStatus?: string;
  createdTs?: number;
  destroyedTs?: number;
  duration?: number;
  userCnt?: number;
  badExpUserCnt?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      callStatus: 'CallStatus',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
      userCnt: 'UserCnt',
      badExpUserCnt: 'BadExpUserCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      callStatus: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
      userCnt: 'number',
      badExpUserCnt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityAreaDistributionStatDataResponseBodyQualityStatDataList extends $tea.Model {
  name?: string;
  callDurationRatio?: string;
  joinChannelSucRate?: string;
  joinChannelSucFiveSecRate?: string;
  audioSpeakOutDuration?: number;
  videoFirstPicDuration?: number;
  audioStuckRate?: string;
  videoStuckRate?: string;
  audioDelay?: number;
  videoDelay?: number;
  audioHighQualityTransmissionRate?: string;
  videoHighQualityTransmissionRate?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      callDurationRatio: 'CallDurationRatio',
      joinChannelSucRate: 'JoinChannelSucRate',
      joinChannelSucFiveSecRate: 'JoinChannelSucFiveSecRate',
      audioSpeakOutDuration: 'AudioSpeakOutDuration',
      videoFirstPicDuration: 'VideoFirstPicDuration',
      audioStuckRate: 'AudioStuckRate',
      videoStuckRate: 'VideoStuckRate',
      audioDelay: 'AudioDelay',
      videoDelay: 'VideoDelay',
      audioHighQualityTransmissionRate: 'AudioHighQualityTransmissionRate',
      videoHighQualityTransmissionRate: 'VideoHighQualityTransmissionRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      callDurationRatio: 'string',
      joinChannelSucRate: 'string',
      joinChannelSucFiveSecRate: 'string',
      audioSpeakOutDuration: 'number',
      videoFirstPicDuration: 'number',
      audioStuckRate: 'string',
      videoStuckRate: 'string',
      audioDelay: 'number',
      videoDelay: 'number',
      audioHighQualityTransmissionRate: 'string',
      videoHighQualityTransmissionRate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcUserEventListResponseBodyEvents extends $tea.Model {
  eventTime?: number;
  eventId?: number;
  category?: string;
  static names(): { [key: string]: string } {
    return {
      eventTime: 'EventTime',
      eventId: 'EventId',
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventTime: 'number',
      eventId: 'number',
      category: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointEventListResponseBodyNodesEventDataItemsEventList extends $tea.Model {
  eventName?: string;
  eventType?: string;
  ts?: number;
  static names(): { [key: string]: string } {
    return {
      eventName: 'EventName',
      eventType: 'EventType',
      ts: 'Ts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      eventType: 'string',
      ts: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointEventListResponseBodyNodesEventDataItems extends $tea.Model {
  ts?: number;
  eventList?: DescribeEndPointEventListResponseBodyNodesEventDataItemsEventList[];
  static names(): { [key: string]: string } {
    return {
      ts: 'Ts',
      eventList: 'EventList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ts: 'number',
      eventList: { 'type': 'array', 'itemType': DescribeEndPointEventListResponseBodyNodesEventDataItemsEventList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointEventListResponseBodyNodes extends $tea.Model {
  userId?: string;
  eventDataItems?: DescribeEndPointEventListResponseBodyNodesEventDataItems[];
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      eventDataItems: 'EventDataItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      eventDataItems: { 'type': 'array', 'itemType': DescribeEndPointEventListResponseBodyNodesEventDataItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityDistributionStatDataResponseBodyQualityStatDataList extends $tea.Model {
  name?: string;
  callDurationRatio?: string;
  joinChannelSucRate?: string;
  joinChannelSucFiveSecRate?: string;
  audioSpeakOutDuration?: number;
  videoFirstPicDuration?: number;
  audioStuckRate?: string;
  videoStuckRate?: string;
  audioDelay?: number;
  videoDelay?: number;
  audioHighQualityTransmissionRate?: string;
  videoHighQualityTransmissionRate?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      callDurationRatio: 'CallDurationRatio',
      joinChannelSucRate: 'JoinChannelSucRate',
      joinChannelSucFiveSecRate: 'JoinChannelSucFiveSecRate',
      audioSpeakOutDuration: 'AudioSpeakOutDuration',
      videoFirstPicDuration: 'VideoFirstPicDuration',
      audioStuckRate: 'AudioStuckRate',
      videoStuckRate: 'VideoStuckRate',
      audioDelay: 'AudioDelay',
      videoDelay: 'VideoDelay',
      audioHighQualityTransmissionRate: 'AudioHighQualityTransmissionRate',
      videoHighQualityTransmissionRate: 'VideoHighQualityTransmissionRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      callDurationRatio: 'string',
      joinChannelSucRate: 'string',
      joinChannelSucFiveSecRate: 'string',
      audioSpeakOutDuration: 'number',
      videoFirstPicDuration: 'number',
      audioStuckRate: 'string',
      videoStuckRate: 'string',
      audioDelay: 'number',
      videoDelay: 'number',
      audioHighQualityTransmissionRate: 'string',
      videoHighQualityTransmissionRate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallResponseBodyCallInfo extends $tea.Model {
  appId?: string;
  channelId?: string;
  callStatus?: string;
  createdTs?: number;
  destroyedTs?: number;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      callStatus: 'CallStatus',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      callStatus: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallResponseBodyUserDetailListOnlinePeriods extends $tea.Model {
  joinTs?: number;
  leaveTs?: number;
  static names(): { [key: string]: string } {
    return {
      joinTs: 'JoinTs',
      leaveTs: 'LeaveTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinTs: 'number',
      leaveTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallResponseBodyUserDetailListDurMetricStatData extends $tea.Model {
  pubAudio?: number;
  subAudio?: number;
  pubVideo360?: number;
  subVideo360?: number;
  pubVideo720?: number;
  subVideo720?: number;
  pubVideo1080?: number;
  subVideo1080?: number;
  pubVideoScreenShare?: number;
  subVideoScreenShare?: number;
  static names(): { [key: string]: string } {
    return {
      pubAudio: 'PubAudio',
      subAudio: 'SubAudio',
      pubVideo360: 'PubVideo360',
      subVideo360: 'SubVideo360',
      pubVideo720: 'PubVideo720',
      subVideo720: 'SubVideo720',
      pubVideo1080: 'PubVideo1080',
      subVideo1080: 'SubVideo1080',
      pubVideoScreenShare: 'PubVideoScreenShare',
      subVideoScreenShare: 'SubVideoScreenShare',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pubAudio: 'number',
      subAudio: 'number',
      pubVideo360: 'number',
      subVideo360: 'number',
      pubVideo720: 'number',
      subVideo720: 'number',
      pubVideo1080: 'number',
      subVideo1080: 'number',
      pubVideoScreenShare: 'number',
      subVideoScreenShare: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallResponseBodyUserDetailList extends $tea.Model {
  userId?: string;
  userIdAlias?: string;
  roles?: string[];
  location?: string;
  onlinePeriods?: DescribeCallResponseBodyUserDetailListOnlinePeriods[];
  createdTs?: number;
  destroyedTs?: number;
  onlineDuration?: number;
  duration?: number;
  sdkVersion?: string;
  sdkVersionList?: string[];
  os?: string;
  osList?: string[];
  network?: string;
  networkList?: string[];
  callExp?: string;
  durMetricStatData?: DescribeCallResponseBodyUserDetailListDurMetricStatData;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      userIdAlias: 'UserIdAlias',
      roles: 'Roles',
      location: 'Location',
      onlinePeriods: 'OnlinePeriods',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      onlineDuration: 'OnlineDuration',
      duration: 'Duration',
      sdkVersion: 'SdkVersion',
      sdkVersionList: 'SdkVersionList',
      os: 'Os',
      osList: 'OsList',
      network: 'Network',
      networkList: 'NetworkList',
      callExp: 'CallExp',
      durMetricStatData: 'DurMetricStatData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userIdAlias: 'string',
      roles: { 'type': 'array', 'itemType': 'string' },
      location: 'string',
      onlinePeriods: { 'type': 'array', 'itemType': DescribeCallResponseBodyUserDetailListOnlinePeriods },
      createdTs: 'number',
      destroyedTs: 'number',
      onlineDuration: 'number',
      duration: 'number',
      sdkVersion: 'string',
      sdkVersionList: { 'type': 'array', 'itemType': 'string' },
      os: 'string',
      osList: { 'type': 'array', 'itemType': 'string' },
      network: 'string',
      networkList: { 'type': 'array', 'itemType': 'string' },
      callExp: 'string',
      durMetricStatData: DescribeCallResponseBodyUserDetailListDurMetricStatData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppFollowCallRuleListResponseBodyAppFollowCallRuleList extends $tea.Model {
  appId?: string;
  rule?: string;
  createdTs?: number;
  modifiedTs?: number;
  gmtCreateTs?: number;
  gmtModifiedTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      rule: 'Rule',
      createdTs: 'CreatedTs',
      modifiedTs: 'ModifiedTs',
      gmtCreateTs: 'GmtCreateTs',
      gmtModifiedTs: 'GmtModifiedTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      rule: 'string',
      createdTs: 'number',
      modifiedTs: 'number',
      gmtCreateTs: 'number',
      gmtModifiedTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelAreaDistributionStatDataResponseBodyAreaStatList extends $tea.Model {
  areaName?: string;
  callUserCount?: number;
  pubUserCount?: number;
  subUserCount?: number;
  highQualityTransmissionRate?: string;
  static names(): { [key: string]: string } {
    return {
      areaName: 'AreaName',
      callUserCount: 'CallUserCount',
      pubUserCount: 'PubUserCount',
      subUserCount: 'SubUserCount',
      highQualityTransmissionRate: 'HighQualityTransmissionRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaName: 'string',
      callUserCount: 'number',
      pubUserCount: 'number',
      subUserCount: 'number',
      highQualityTransmissionRate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppExpMetricRuleResponseBodyAppExpMetricRule extends $tea.Model {
  appId?: string;
  rule?: string;
  createdTs?: number;
  modifiedTs?: number;
  gmtCreateTs?: number;
  gmtModifiedTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      rule: 'Rule',
      createdTs: 'CreatedTs',
      modifiedTs: 'ModifiedTs',
      gmtCreateTs: 'GmtCreateTs',
      gmtModifiedTs: 'GmtModifiedTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      rule: 'string',
      createdTs: 'number',
      modifiedTs: 'number',
      gmtCreateTs: 'number',
      gmtModifiedTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelDetailsResponseBodyChannelInfo extends $tea.Model {
  sid?: string;
  uid?: string;
  joinTime?: string;
  leaveTime?: string;
  sdkVersion?: string;
  platform?: string;
  OS?: string;
  deviceType?: string;
  static names(): { [key: string]: string } {
    return {
      sid: 'Sid',
      uid: 'Uid',
      joinTime: 'JoinTime',
      leaveTime: 'LeaveTime',
      sdkVersion: 'SdkVersion',
      platform: 'Platform',
      OS: 'OS',
      deviceType: 'DeviceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sid: 'string',
      uid: 'string',
      joinTime: 'string',
      leaveTime: 'string',
      sdkVersion: 'string',
      platform: 'string',
      OS: 'string',
      deviceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIceDurSummaryOverviewResponseBodyJobInfoList extends $tea.Model {
  jobType?: string;
  timeRange?: string;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      jobType: 'JobType',
      timeRange: 'TimeRange',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobType: 'string',
      timeRange: 'string',
      duration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallUserExpResponseBodyExpInfoList extends $tea.Model {
  userId?: string;
  callExp?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      callExp: 'CallExp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      callExp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppExpMetricRuleListResponseBodyAppExpMetricRuleList extends $tea.Model {
  appId?: string;
  rule?: string;
  createdTs?: number;
  modifiedTs?: number;
  gmtCreateTs?: number;
  gmtModifiedTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      rule: 'Rule',
      createdTs: 'CreatedTs',
      modifiedTs: 'ModifiedTs',
      gmtCreateTs: 'GmtCreateTs',
      gmtModifiedTs: 'GmtModifiedTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      rule: 'string',
      createdTs: 'number',
      modifiedTs: 'number',
      gmtCreateTs: 'number',
      gmtModifiedTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelTopPubUserListResponseBodyTopPubUserDetailListOnlinePeriods extends $tea.Model {
  joinTs?: number;
  leaveTs?: number;
  static names(): { [key: string]: string } {
    return {
      joinTs: 'JoinTs',
      leaveTs: 'LeaveTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinTs: 'number',
      leaveTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelTopPubUserListResponseBodyTopPubUserDetailList extends $tea.Model {
  userId?: string;
  location?: string;
  onlinePeriods?: DescribeChannelTopPubUserListResponseBodyTopPubUserDetailListOnlinePeriods[];
  createdTs?: number;
  destroyedTs?: number;
  onlineDuration?: number;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      location: 'Location',
      onlinePeriods: 'OnlinePeriods',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      onlineDuration: 'OnlineDuration',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      location: 'string',
      onlinePeriods: { 'type': 'array', 'itemType': DescribeChannelTopPubUserListResponseBodyTopPubUserDetailListOnlinePeriods },
      createdTs: 'number',
      destroyedTs: 'number',
      onlineDuration: 'number',
      duration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppFollowCallRuleResponseBodyAppFollowCallRule extends $tea.Model {
  appId?: string;
  rule?: string;
  createdTs?: number;
  modifiedTs?: number;
  gmtCreateTs?: number;
  gmtModifiedTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      rule: 'Rule',
      createdTs: 'CreatedTs',
      modifiedTs: 'ModifiedTs',
      gmtCreateTs: 'GmtCreateTs',
      gmtModifiedTs: 'GmtModifiedTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      rule: 'string',
      createdTs: 'number',
      modifiedTs: 'number',
      gmtCreateTs: 'number',
      gmtModifiedTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageDistributionStatDataResponseBodyUsageStatList extends $tea.Model {
  name?: string;
  audioCallDuration?: number;
  videoCallDuration?: number;
  totalCallDuration?: number;
  callDurationRatio?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      audioCallDuration: 'AudioCallDuration',
      videoCallDuration: 'VideoCallDuration',
      totalCallDuration: 'TotalCallDuration',
      callDurationRatio: 'CallDurationRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      audioCallDuration: 'number',
      videoCallDuration: 'number',
      totalCallDuration: 'number',
      callDurationRatio: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageAreaDistributionStatDataResponseBodyUsageAreaStatList extends $tea.Model {
  name?: string;
  audioCallDuration?: number;
  videoCallDuration?: number;
  totalCallDuration?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      audioCallDuration: 'AudioCallDuration',
      videoCallDuration: 'VideoCallDuration',
      totalCallDuration: 'TotalCallDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      audioCallDuration: 'number',
      videoCallDuration: 'number',
      totalCallDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointMetricDataResponseBodySubMetricsNodes extends $tea.Model {
  x?: string;
  y?: string;
  ext?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
      ext: 'Ext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'string',
      y: 'string',
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointMetricDataResponseBodySubMetrics extends $tea.Model {
  type?: string;
  userId?: string;
  nodes?: DescribeEndPointMetricDataResponseBodySubMetricsNodes[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      userId: 'UserId',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      userId: 'string',
      nodes: { 'type': 'array', 'itemType': DescribeEndPointMetricDataResponseBodySubMetricsNodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointMetricDataResponseBodyPubMetricsNodes extends $tea.Model {
  x?: string;
  y?: string;
  ext?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
      ext: 'Ext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'string',
      y: 'string',
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointMetricDataResponseBodyPubMetrics extends $tea.Model {
  type?: string;
  userId?: string;
  nodes?: DescribeEndPointMetricDataResponseBodyPubMetricsNodes[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      userId: 'UserId',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      userId: 'string',
      nodes: { 'type': 'array', 'itemType': DescribeEndPointMetricDataResponseBodyPubMetricsNodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppConfigResponseBodyThresholdConfig extends $tea.Model {
  joinSlowTime?: number;
  static names(): { [key: string]: string } {
    return {
      joinSlowTime: 'JoinSlowTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinSlowTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOverallDataResponseBodyUsageOverallDataNodes extends $tea.Model {
  x?: string;
  y?: string;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'string',
      y: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOverallDataResponseBodyUsageOverallData extends $tea.Model {
  type?: string;
  nodes?: DescribeUsageOverallDataResponseBodyUsageOverallDataNodes[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      nodes: { 'type': 'array', 'itemType': DescribeUsageOverallDataResponseBodyUsageOverallDataNodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyCallInfo extends $tea.Model {
  appId?: string;
  channelId?: string;
  callStatus?: string;
  createdTs?: number;
  destroyedTs?: number;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      callStatus: 'CallStatus',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      callStatus: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyUserDetailOnlinePeriods extends $tea.Model {
  joinTs?: number;
  leaveTs?: number;
  static names(): { [key: string]: string } {
    return {
      joinTs: 'JoinTs',
      leaveTs: 'LeaveTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinTs: 'number',
      leaveTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyUserDetail extends $tea.Model {
  userId?: string;
  location?: string;
  onlinePeriods?: DescribeFaultDiagnosisUserDetailResponseBodyUserDetailOnlinePeriods[];
  createdTs?: number;
  destroyedTs?: number;
  onlineDuration?: number;
  duration?: number;
  sdkVersion?: string;
  os?: string;
  network?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      location: 'Location',
      onlinePeriods: 'OnlinePeriods',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      onlineDuration: 'OnlineDuration',
      duration: 'Duration',
      sdkVersion: 'SdkVersion',
      os: 'Os',
      network: 'Network',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      location: 'string',
      onlinePeriods: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyUserDetailOnlinePeriods },
      createdTs: 'number',
      destroyedTs: 'number',
      onlineDuration: 'number',
      duration: 'number',
      sdkVersion: 'string',
      os: 'string',
      network: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricDataNodes extends $tea.Model {
  x?: string;
  y?: string;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'string',
      y: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricData extends $tea.Model {
  nodes?: DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricDataNodes[];
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricDataNodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatasNodes extends $tea.Model {
  x?: string;
  y?: string;
  ext?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
      ext: 'Ext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'string',
      y: 'string',
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatas extends $tea.Model {
  role?: string;
  userId?: string;
  type?: string;
  nodes?: DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatasNodes[];
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
      userId: 'UserId',
      type: 'Type',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: 'string',
      userId: 'string',
      type: 'string',
      nodes: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatasNodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatasEventDataItemsEventList extends $tea.Model {
  eventName?: string;
  eventType?: string;
  ts?: number;
  static names(): { [key: string]: string } {
    return {
      eventName: 'EventName',
      eventType: 'EventType',
      ts: 'Ts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      eventType: 'string',
      ts: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatasEventDataItems extends $tea.Model {
  ts?: number;
  eventList?: DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatasEventDataItemsEventList[];
  static names(): { [key: string]: string } {
    return {
      ts: 'Ts',
      eventList: 'EventList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ts: 'number',
      eventList: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatasEventDataItemsEventList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatas extends $tea.Model {
  userId?: string;
  role?: string;
  eventDataItems?: DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatasEventDataItems[];
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      role: 'Role',
      eventDataItems: 'EventDataItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      role: 'string',
      eventDataItems: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatasEventDataItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFactorList extends $tea.Model {
  factorId?: string;
  faultSource?: string;
  relatedMetricDatas?: DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatas[];
  relatedEventDatas?: DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatas[];
  static names(): { [key: string]: string } {
    return {
      factorId: 'FactorId',
      faultSource: 'FaultSource',
      relatedMetricDatas: 'RelatedMetricDatas',
      relatedEventDatas: 'RelatedEventDatas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      factorId: 'string',
      faultSource: 'string',
      relatedMetricDatas: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatas },
      relatedEventDatas: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatas },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelDistributionStatDataResponseBodyStatList extends $tea.Model {
  name?: string;
  callUserCount?: number;
  callUserRatio?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      callUserCount: 'CallUserCount',
      callUserRatio: 'CallUserRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      callUserCount: 'number',
      callUserRatio: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserMetricsResponseBodyMetricDatasNodes extends $tea.Model {
  x?: string;
  y?: string;
  ext?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
      ext: 'Ext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'string',
      y: 'string',
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserMetricsResponseBodyMetricDatas extends $tea.Model {
  type?: string;
  nodes?: DescribeChannelUserMetricsResponseBodyMetricDatasNodes[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      nodes: { 'type': 'array', 'itemType': DescribeChannelUserMetricsResponseBodyMetricDatasNodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserMetricsResponseBodyOverallData extends $tea.Model {
  totalUserNum?: number;
  totalPubUserNum?: number;
  totalSubUserNum?: number;
  totalJoinFailNum?: number;
  totalBadExpNum?: number;
  static names(): { [key: string]: string } {
    return {
      totalUserNum: 'TotalUserNum',
      totalPubUserNum: 'TotalPubUserNum',
      totalSubUserNum: 'TotalSubUserNum',
      totalJoinFailNum: 'TotalJoinFailNum',
      totalBadExpNum: 'TotalBadExpNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalUserNum: 'number',
      totalPubUserNum: 'number',
      totalSubUserNum: 'number',
      totalJoinFailNum: 'number',
      totalBadExpNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisFactorDistributionStatResponseBodyStatList extends $tea.Model {
  factorId?: string;
  userCount?: number;
  userRatio?: number;
  static names(): { [key: string]: string } {
    return {
      factorId: 'FactorId',
      userCount: 'UserCount',
      userRatio: 'UserRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      factorId: 'string',
      userCount: 'number',
      userRatio: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelListResponseBodyChannels extends $tea.Model {
  channelId?: string;
  startTime?: string;
  endTime?: string;
  finished?: boolean;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      finished: 'Finished',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      startTime: 'string',
      endTime: 'string',
      finished: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserListResponseBodyUserListFaultList extends $tea.Model {
  faultType?: string;
  static names(): { [key: string]: string } {
    return {
      faultType: 'FaultType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faultType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserListResponseBodyUserList extends $tea.Model {
  channelId?: string;
  userId?: string;
  createdTs?: number;
  destroyedTs?: number;
  channelCreatedTs?: number;
  faultList?: DescribeFaultDiagnosisUserListResponseBodyUserListFaultList[];
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      userId: 'UserId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      channelCreatedTs: 'ChannelCreatedTs',
      faultList: 'FaultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      userId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      channelCreatedTs: 'number',
      faultList: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserListResponseBodyUserListFaultList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricListResponseBodyMetrics extends $tea.Model {
  uid?: string;
  mid?: number;
  KVs?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      uid: 'Uid',
      mid: 'Mid',
      KVs: 'KVs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
      mid: 'number',
      KVs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQoeMetricDataResponseBodyVideoDataNodes extends $tea.Model {
  x?: string;
  y?: string;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'string',
      y: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQoeMetricDataResponseBodyVideoData extends $tea.Model {
  type?: string;
  userId?: string;
  nodes?: DescribeQoeMetricDataResponseBodyVideoDataNodes[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      userId: 'UserId',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      userId: 'string',
      nodes: { 'type': 'array', 'itemType': DescribeQoeMetricDataResponseBodyVideoDataNodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQoeMetricDataResponseBodyAudioDataNodes extends $tea.Model {
  x?: string;
  y?: string;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'string',
      y: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQoeMetricDataResponseBodyAudioData extends $tea.Model {
  type?: string;
  userId?: string;
  nodes?: DescribeQoeMetricDataResponseBodyAudioDataNodes[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      userId: 'UserId',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      userId: 'string',
      nodes: { 'type': 'array', 'itemType': DescribeQoeMetricDataResponseBodyAudioDataNodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePubUserListBySubUserResponseBodySubUserDetailOnlinePeriods extends $tea.Model {
  joinTs?: number;
  leaveTs?: number;
  static names(): { [key: string]: string } {
    return {
      joinTs: 'JoinTs',
      leaveTs: 'LeaveTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinTs: 'number',
      leaveTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePubUserListBySubUserResponseBodySubUserDetail extends $tea.Model {
  userId?: string;
  userIdAlias?: string;
  roles?: string[];
  location?: string;
  onlinePeriods?: DescribePubUserListBySubUserResponseBodySubUserDetailOnlinePeriods[];
  createdTs?: number;
  destroyedTs?: number;
  onlineDuration?: number;
  duration?: number;
  sdkVersion?: string;
  sdkVersionList?: string[];
  os?: string;
  osList?: string[];
  network?: string;
  networkList?: string[];
  clientType?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      userIdAlias: 'UserIdAlias',
      roles: 'Roles',
      location: 'Location',
      onlinePeriods: 'OnlinePeriods',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      onlineDuration: 'OnlineDuration',
      duration: 'Duration',
      sdkVersion: 'SdkVersion',
      sdkVersionList: 'SdkVersionList',
      os: 'Os',
      osList: 'OsList',
      network: 'Network',
      networkList: 'NetworkList',
      clientType: 'ClientType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userIdAlias: 'string',
      roles: { 'type': 'array', 'itemType': 'string' },
      location: 'string',
      onlinePeriods: { 'type': 'array', 'itemType': DescribePubUserListBySubUserResponseBodySubUserDetailOnlinePeriods },
      createdTs: 'number',
      destroyedTs: 'number',
      onlineDuration: 'number',
      duration: 'number',
      sdkVersion: 'string',
      sdkVersionList: { 'type': 'array', 'itemType': 'string' },
      os: 'string',
      osList: { 'type': 'array', 'itemType': 'string' },
      network: 'string',
      networkList: { 'type': 'array', 'itemType': 'string' },
      clientType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePubUserListBySubUserResponseBodyPubUserDetailListOnlinePeriods extends $tea.Model {
  joinTs?: number;
  leaveTs?: number;
  static names(): { [key: string]: string } {
    return {
      joinTs: 'JoinTs',
      leaveTs: 'LeaveTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinTs: 'number',
      leaveTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePubUserListBySubUserResponseBodyPubUserDetailList extends $tea.Model {
  userId?: string;
  userIdAlias?: string;
  roles?: string[];
  location?: string;
  onlinePeriods?: DescribePubUserListBySubUserResponseBodyPubUserDetailListOnlinePeriods[];
  createdTs?: number;
  destroyedTs?: number;
  onlineDuration?: number;
  duration?: number;
  sdkVersion?: string;
  sdkVersionList?: string[];
  os?: string;
  osList?: string[];
  network?: string;
  networkList?: string[];
  clientType?: string;
  callIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      userIdAlias: 'UserIdAlias',
      roles: 'Roles',
      location: 'Location',
      onlinePeriods: 'OnlinePeriods',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      onlineDuration: 'OnlineDuration',
      duration: 'Duration',
      sdkVersion: 'SdkVersion',
      sdkVersionList: 'SdkVersionList',
      os: 'Os',
      osList: 'OsList',
      network: 'Network',
      networkList: 'NetworkList',
      clientType: 'ClientType',
      callIdList: 'CallIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userIdAlias: 'string',
      roles: { 'type': 'array', 'itemType': 'string' },
      location: 'string',
      onlinePeriods: { 'type': 'array', 'itemType': DescribePubUserListBySubUserResponseBodyPubUserDetailListOnlinePeriods },
      createdTs: 'number',
      destroyedTs: 'number',
      onlineDuration: 'number',
      duration: 'number',
      sdkVersion: 'string',
      sdkVersionList: { 'type': 'array', 'itemType': 'string' },
      os: 'string',
      osList: { 'type': 'array', 'itemType': 'string' },
      network: 'string',
      networkList: { 'type': 'array', 'itemType': 'string' },
      clientType: 'string',
      callIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityOsSdkVersionDistributionStatDataResponseBodyQualityOsSdkVersionStatDataList extends $tea.Model {
  name?: string;
  os?: string;
  callDurationRatio?: string;
  joinChannelSucRate?: string;
  joinChannelSucFiveSecRate?: string;
  audioSpeakOutDuration?: number;
  videoFirstPicDuration?: number;
  audioStuckRate?: string;
  videoStuckRate?: string;
  audioDelay?: number;
  videoDelay?: number;
  audioHighQualityTransmissionRate?: string;
  videoHighQualityTransmissionRate?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      os: 'Os',
      callDurationRatio: 'CallDurationRatio',
      joinChannelSucRate: 'JoinChannelSucRate',
      joinChannelSucFiveSecRate: 'JoinChannelSucFiveSecRate',
      audioSpeakOutDuration: 'AudioSpeakOutDuration',
      videoFirstPicDuration: 'VideoFirstPicDuration',
      audioStuckRate: 'AudioStuckRate',
      videoStuckRate: 'VideoStuckRate',
      audioDelay: 'AudioDelay',
      videoDelay: 'VideoDelay',
      audioHighQualityTransmissionRate: 'AudioHighQualityTransmissionRate',
      videoHighQualityTransmissionRate: 'VideoHighQualityTransmissionRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      os: 'string',
      callDurationRatio: 'string',
      joinChannelSucRate: 'string',
      joinChannelSucFiveSecRate: 'string',
      audioSpeakOutDuration: 'number',
      videoFirstPicDuration: 'number',
      audioStuckRate: 'string',
      videoStuckRate: 'string',
      audioDelay: 'number',
      videoDelay: 'number',
      audioHighQualityTransmissionRate: 'string',
      videoHighQualityTransmissionRate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcRecordMetricDataResponseBodyRtcRecordMetricData extends $tea.Model {
  timeStamp?: string;
  serviceArea?: string;
  taskProfile?: string;
  type?: string;
  ratio?: string;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      serviceArea: 'ServiceArea',
      taskProfile: 'TaskProfile',
      type: 'Type',
      ratio: 'Ratio',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      serviceArea: 'string',
      taskProfile: 'string',
      type: 'string',
      ratio: 'string',
      duration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityOverallDataResponseBodyQualityOverallDataNodes extends $tea.Model {
  x?: string;
  y?: string;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'string',
      y: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityOverallDataResponseBodyQualityOverallData extends $tea.Model {
  type?: string;
  nodes?: DescribeQualityOverallDataResponseBodyQualityOverallDataNodes[];
  average?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      nodes: 'Nodes',
      average: 'Average',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      nodes: { 'type': 'array', 'itemType': DescribeQualityOverallDataResponseBodyQualityOverallDataNodes },
      average: 'string',
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
    this._endpoint = this.getEndpoint("vdc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async describeFaultDiagnosisOverallData(request: DescribeFaultDiagnosisOverallDataRequest): Promise<DescribeFaultDiagnosisOverallDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeFaultDiagnosisOverallDataWithOptions(request, headers, runtime);
  }

  async describeFaultDiagnosisOverallDataWithOptions(request: DescribeFaultDiagnosisOverallDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeFaultDiagnosisOverallDataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.statDim)) {
      query["StatDim"] = request.statDim;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeFaultDiagnosisOverallDataResponse>(await this.doROARequest("DescribeFaultDiagnosisOverallData", "2020-12-14", "HTTPS", "POST", "AK", `/api/diagnosis/describeFaultDiagnosisOverallData`, "json", req, runtime), new DescribeFaultDiagnosisOverallDataResponse({}));
  }

  async describeRtcChannelUsers(request: DescribeRtcChannelUsersRequest): Promise<DescribeRtcChannelUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRtcChannelUsersWithOptions(request, headers, runtime);
  }

  async describeRtcChannelUsersWithOptions(request: DescribeRtcChannelUsersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeRtcChannelUsersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.timePoint)) {
      query["TimePoint"] = request.timePoint;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeRtcChannelUsersResponse>(await this.doROARequest("DescribeRtcChannelUsers", "2020-12-14", "HTTPS", "POST", "AK", `/api/channel/describeRtcChannelUsers`, "json", req, runtime), new DescribeRtcChannelUsersResponse({}));
  }

  async describeChannelOverallData(request: DescribeChannelOverallDataRequest): Promise<DescribeChannelOverallDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeChannelOverallDataWithOptions(request, headers, runtime);
  }

  async describeChannelOverallDataWithOptions(request: DescribeChannelOverallDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeChannelOverallDataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!Util.isUnset(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeChannelOverallDataResponse>(await this.doROARequest("DescribeChannelOverallData", "2020-12-14", "HTTPS", "POST", "AK", `/api/channel/describeChannelOverallData`, "json", req, runtime), new DescribeChannelOverallDataResponse({}));
  }

  async describeUsageOsSdkVersionDistributionStatData(request: DescribeUsageOsSdkVersionDistributionStatDataRequest): Promise<DescribeUsageOsSdkVersionDistributionStatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeUsageOsSdkVersionDistributionStatDataWithOptions(request, headers, runtime);
  }

  async describeUsageOsSdkVersionDistributionStatDataWithOptions(request: DescribeUsageOsSdkVersionDistributionStatDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeUsageOsSdkVersionDistributionStatDataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeUsageOsSdkVersionDistributionStatDataResponse>(await this.doROARequest("DescribeUsageOsSdkVersionDistributionStatData", "2020-12-14", "HTTPS", "POST", "AK", `/api/usage/describeUsageOsSdkVersionDistributionStatData`, "json", req, runtime), new DescribeUsageOsSdkVersionDistributionStatDataResponse({}));
  }

  async describeIceDurPeriodByDaySubType(request: DescribeIceDurPeriodByDaySubTypeRequest): Promise<DescribeIceDurPeriodByDaySubTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeIceDurPeriodByDaySubTypeWithOptions(request, headers, runtime);
  }

  async describeIceDurPeriodByDaySubTypeWithOptions(request: DescribeIceDurPeriodByDaySubTypeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeIceDurPeriodByDaySubTypeResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.timeZone)) {
      query["TimeZone"] = request.timeZone;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeIceDurPeriodByDaySubTypeResponse>(await this.doROARequest("DescribeIceDurPeriodByDaySubType", "2020-12-14", "HTTPS", "POST", "AK", `/api/ice/describeIceDurPeriodByDaySubType`, "json", req, runtime), new DescribeIceDurPeriodByDaySubTypeResponse({}));
  }

  async describeCallList(request: DescribeCallListRequest): Promise<DescribeCallListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeCallListWithOptions(request, headers, runtime);
  }

  async describeCallListWithOptions(request: DescribeCallListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeCallListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.callStatus)) {
      query["CallStatus"] = request.callStatus;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.queryMode)) {
      query["QueryMode"] = request.queryMode;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeCallListResponse>(await this.doROARequest("DescribeCallList", "2020-12-14", "HTTPS", "POST", "AK", `/api/call/describeCallList`, "json", req, runtime), new DescribeCallListResponse({}));
  }

  async describeQualityAreaDistributionStatData(request: DescribeQualityAreaDistributionStatDataRequest): Promise<DescribeQualityAreaDistributionStatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeQualityAreaDistributionStatDataWithOptions(request, headers, runtime);
  }

  async describeQualityAreaDistributionStatDataWithOptions(request: DescribeQualityAreaDistributionStatDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeQualityAreaDistributionStatDataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.parentArea)) {
      query["ParentArea"] = request.parentArea;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeQualityAreaDistributionStatDataResponse>(await this.doROARequest("DescribeQualityAreaDistributionStatData", "2020-12-14", "HTTPS", "POST", "AK", `/api/quality/describeQualityAreaDistributionStatData`, "json", req, runtime), new DescribeQualityAreaDistributionStatDataResponse({}));
  }

  async describeRtcUserEventList(request: DescribeRtcUserEventListRequest): Promise<DescribeRtcUserEventListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRtcUserEventListWithOptions(request, headers, runtime);
  }

  async describeRtcUserEventListWithOptions(request: DescribeRtcUserEventListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeRtcUserEventListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeRtcUserEventListResponse>(await this.doROARequest("DescribeRtcUserEventList", "2020-12-14", "HTTPS", "POST", "AK", `/api/call/describeRtcUserEventList`, "json", req, runtime), new DescribeRtcUserEventListResponse({}));
  }

  async deleteAppExpMetricRule(request: DeleteAppExpMetricRuleRequest): Promise<DeleteAppExpMetricRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAppExpMetricRuleWithOptions(request, headers, runtime);
  }

  async deleteAppExpMetricRuleWithOptions(request: DeleteAppExpMetricRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteAppExpMetricRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeleteAppExpMetricRuleResponse>(await this.doROARequest("DeleteAppExpMetricRule", "2020-12-14", "HTTPS", "POST", "AK", `/api/config/deleteAppExpMetricRule`, "json", req, runtime), new DeleteAppExpMetricRuleResponse({}));
  }

  async describeEndPointEventList(request: DescribeEndPointEventListRequest): Promise<DescribeEndPointEventListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeEndPointEventListWithOptions(request, headers, runtime);
  }

  async describeEndPointEventListWithOptions(request: DescribeEndPointEventListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeEndPointEventListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!Util.isUnset(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    if (!Util.isUnset(request.userIdList)) {
      query["UserIdList"] = request.userIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeEndPointEventListResponse>(await this.doROARequest("DescribeEndPointEventList", "2020-12-14", "HTTPS", "POST", "AK", `/api/call/describeEndPointEventList`, "json", req, runtime), new DescribeEndPointEventListResponse({}));
  }

  async describeQualityDistributionStatData(request: DescribeQualityDistributionStatDataRequest): Promise<DescribeQualityDistributionStatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeQualityDistributionStatDataWithOptions(request, headers, runtime);
  }

  async describeQualityDistributionStatDataWithOptions(request: DescribeQualityDistributionStatDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeQualityDistributionStatDataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.statDim)) {
      query["StatDim"] = request.statDim;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeQualityDistributionStatDataResponse>(await this.doROARequest("DescribeQualityDistributionStatData", "2020-12-14", "HTTPS", "POST", "AK", `/api/quality/describeQualityDistributionStatData`, "json", req, runtime), new DescribeQualityDistributionStatDataResponse({}));
  }

  async describeCallListTest(request: DescribeCallListTestRequest): Promise<DescribeCallListTestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeCallListTestWithOptions(request, headers, runtime);
  }

  async describeCallListTestWithOptions(request: DescribeCallListTestRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeCallListTestResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeCallListTestResponse>(await this.doROARequest("DescribeCallListTest", "2020-12-14", "HTTPS", "POST", "AK", `/api/call/describeCallListTest`, "json", req, runtime), new DescribeCallListTestResponse({}));
  }

  async describeCall(request: DescribeCallRequest): Promise<DescribeCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeCallWithOptions(request, headers, runtime);
  }

  async describeCallWithOptions(request: DescribeCallRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeCallResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!Util.isUnset(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    if (!Util.isUnset(request.extDataType)) {
      query["ExtDataType"] = request.extDataType;
    }

    if (!Util.isUnset(request.queryExpInfo)) {
      query["QueryExpInfo"] = request.queryExpInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeCallResponse>(await this.doROARequest("DescribeCall", "2020-12-14", "HTTPS", "POST", "AK", `/api/call/describeCall`, "json", req, runtime), new DescribeCallResponse({}));
  }

  async describeAppFollowCallRuleList(): Promise<DescribeAppFollowCallRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAppFollowCallRuleListWithOptions(headers, runtime);
  }

  async describeAppFollowCallRuleListWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeAppFollowCallRuleListResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeAppFollowCallRuleListResponse>(await this.doROARequest("DescribeAppFollowCallRuleList", "2020-12-14", "HTTPS", "POST", "AK", `/api/config/describeAppFollowCallRuleList`, "json", req, runtime), new DescribeAppFollowCallRuleListResponse({}));
  }

  async describeChannelAreaDistributionStatData(request: DescribeChannelAreaDistributionStatDataRequest): Promise<DescribeChannelAreaDistributionStatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeChannelAreaDistributionStatDataWithOptions(request, headers, runtime);
  }

  async describeChannelAreaDistributionStatDataWithOptions(request: DescribeChannelAreaDistributionStatDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeChannelAreaDistributionStatDataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!Util.isUnset(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    if (!Util.isUnset(request.parentArea)) {
      query["ParentArea"] = request.parentArea;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeChannelAreaDistributionStatDataResponse>(await this.doROARequest("DescribeChannelAreaDistributionStatData", "2020-12-14", "HTTPS", "POST", "AK", `/api/channel/describeChannelAreaDistributionStatData`, "json", req, runtime), new DescribeChannelAreaDistributionStatDataResponse({}));
  }

  async describeAppExpMetricRule(request: DescribeAppExpMetricRuleRequest): Promise<DescribeAppExpMetricRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAppExpMetricRuleWithOptions(request, headers, runtime);
  }

  async describeAppExpMetricRuleWithOptions(request: DescribeAppExpMetricRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeAppExpMetricRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeAppExpMetricRuleResponse>(await this.doROARequest("DescribeAppExpMetricRule", "2020-12-14", "HTTPS", "POST", "AK", `/api/config/describeAppExpMetricRule`, "json", req, runtime), new DescribeAppExpMetricRuleResponse({}));
  }

  async describeRtcChannelDetails(request: DescribeRtcChannelDetailsRequest): Promise<DescribeRtcChannelDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRtcChannelDetailsWithOptions(request, headers, runtime);
  }

  async describeRtcChannelDetailsWithOptions(request: DescribeRtcChannelDetailsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeRtcChannelDetailsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeRtcChannelDetailsResponse>(await this.doROARequest("DescribeRtcChannelDetails", "2020-12-14", "HTTPS", "POST", "AK", `/api/channel/describeRtcChannelDetails`, "json", req, runtime), new DescribeRtcChannelDetailsResponse({}));
  }

  async describeIceDurSummaryOverview(request: DescribeIceDurSummaryOverviewRequest): Promise<DescribeIceDurSummaryOverviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeIceDurSummaryOverviewWithOptions(request, headers, runtime);
  }

  async describeIceDurSummaryOverviewWithOptions(request: DescribeIceDurSummaryOverviewRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeIceDurSummaryOverviewResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.curTs)) {
      query["CurTs"] = request.curTs;
    }

    if (!Util.isUnset(request.timeZone)) {
      query["TimeZone"] = request.timeZone;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeIceDurSummaryOverviewResponse>(await this.doROARequest("DescribeIceDurSummaryOverview", "2020-12-14", "HTTPS", "POST", "AK", `/api/ice/describeIceDurSummaryOverview`, "json", req, runtime), new DescribeIceDurSummaryOverviewResponse({}));
  }

  async describeCallUserExp(request: DescribeCallUserExpRequest): Promise<DescribeCallUserExpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeCallUserExpWithOptions(request, headers, runtime);
  }

  async describeCallUserExpWithOptions(request: DescribeCallUserExpRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeCallUserExpResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!Util.isUnset(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeCallUserExpResponse>(await this.doROARequest("DescribeCallUserExp", "2020-12-14", "HTTPS", "POST", "AK", `/api/call/describeCallUserExp`, "json", req, runtime), new DescribeCallUserExpResponse({}));
  }

  async describeChannelJoinInfo(request: DescribeChannelJoinInfoRequest): Promise<DescribeChannelJoinInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeChannelJoinInfoWithOptions(request, headers, runtime);
  }

  async describeChannelJoinInfoWithOptions(request: DescribeChannelJoinInfoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeChannelJoinInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!Util.isUnset(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeChannelJoinInfoResponse>(await this.doROARequest("DescribeChannelJoinInfo", "2020-12-14", "HTTPS", "POST", "AK", `/api/channel/describeChannelJoinInfo`, "json", req, runtime), new DescribeChannelJoinInfoResponse({}));
  }

  async deleteAppFollowCallRule(request: DeleteAppFollowCallRuleRequest): Promise<DeleteAppFollowCallRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAppFollowCallRuleWithOptions(request, headers, runtime);
  }

  async deleteAppFollowCallRuleWithOptions(request: DeleteAppFollowCallRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteAppFollowCallRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeleteAppFollowCallRuleResponse>(await this.doROARequest("DeleteAppFollowCallRule", "2020-12-14", "HTTPS", "POST", "AK", `/api/config/deleteAppFollowCallRule`, "json", req, runtime), new DeleteAppFollowCallRuleResponse({}));
  }

  async describeAppExpMetricRuleList(): Promise<DescribeAppExpMetricRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAppExpMetricRuleListWithOptions(headers, runtime);
  }

  async describeAppExpMetricRuleListWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeAppExpMetricRuleListResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeAppExpMetricRuleListResponse>(await this.doROARequest("DescribeAppExpMetricRuleList", "2020-12-14", "HTTPS", "POST", "AK", `/api/config/describeAppExpMetricRuleList`, "json", req, runtime), new DescribeAppExpMetricRuleListResponse({}));
  }

  async describeChannelTopPubUserList(request: DescribeChannelTopPubUserListRequest): Promise<DescribeChannelTopPubUserListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeChannelTopPubUserListWithOptions(request, headers, runtime);
  }

  async describeChannelTopPubUserListWithOptions(request: DescribeChannelTopPubUserListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeChannelTopPubUserListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!Util.isUnset(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeChannelTopPubUserListResponse>(await this.doROARequest("DescribeChannelTopPubUserList", "2020-12-14", "HTTPS", "POST", "AK", `/api/channel/describeChannelTopPubUserList`, "json", req, runtime), new DescribeChannelTopPubUserListResponse({}));
  }

  async describeAppFollowCallRule(request: DescribeAppFollowCallRuleRequest): Promise<DescribeAppFollowCallRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAppFollowCallRuleWithOptions(request, headers, runtime);
  }

  async describeAppFollowCallRuleWithOptions(request: DescribeAppFollowCallRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeAppFollowCallRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeAppFollowCallRuleResponse>(await this.doROARequest("DescribeAppFollowCallRule", "2020-12-14", "HTTPS", "POST", "AK", `/api/config/describeAppFollowCallRule`, "json", req, runtime), new DescribeAppFollowCallRuleResponse({}));
  }

  async describeUsageDistributionStatData(request: DescribeUsageDistributionStatDataRequest): Promise<DescribeUsageDistributionStatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeUsageDistributionStatDataWithOptions(request, headers, runtime);
  }

  async describeUsageDistributionStatDataWithOptions(request: DescribeUsageDistributionStatDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeUsageDistributionStatDataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.statDim)) {
      query["StatDim"] = request.statDim;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeUsageDistributionStatDataResponse>(await this.doROARequest("DescribeUsageDistributionStatData", "2020-12-14", "HTTPS", "POST", "AK", `/api/usage/describeUsageDistributionStatData`, "json", req, runtime), new DescribeUsageDistributionStatDataResponse({}));
  }

  async describeUsageAreaDistributionStatData(request: DescribeUsageAreaDistributionStatDataRequest): Promise<DescribeUsageAreaDistributionStatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeUsageAreaDistributionStatDataWithOptions(request, headers, runtime);
  }

  async describeUsageAreaDistributionStatDataWithOptions(request: DescribeUsageAreaDistributionStatDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeUsageAreaDistributionStatDataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.parentArea)) {
      query["ParentArea"] = request.parentArea;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeUsageAreaDistributionStatDataResponse>(await this.doROARequest("DescribeUsageAreaDistributionStatData", "2020-12-14", "HTTPS", "POST", "AK", `/api/usage/describeUsageAreaDistributionStatData`, "json", req, runtime), new DescribeUsageAreaDistributionStatDataResponse({}));
  }

  async describeEndPointMetricData(request: DescribeEndPointMetricDataRequest): Promise<DescribeEndPointMetricDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeEndPointMetricDataWithOptions(request, headers, runtime);
  }

  async describeEndPointMetricDataWithOptions(request: DescribeEndPointMetricDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeEndPointMetricDataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!Util.isUnset(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    if (!Util.isUnset(request.pubUserId)) {
      query["PubUserId"] = request.pubUserId;
    }

    if (!Util.isUnset(request.pubCallIdList)) {
      query["PubCallIdList"] = request.pubCallIdList;
    }

    if (!Util.isUnset(request.metrics)) {
      query["Metrics"] = request.metrics;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeEndPointMetricDataResponse>(await this.doROARequest("DescribeEndPointMetricData", "2020-12-14", "HTTPS", "POST", "AK", `/api/call/describeEndPointMetricData`, "json", req, runtime), new DescribeEndPointMetricDataResponse({}));
  }

  async describeAppConfig(request: DescribeAppConfigRequest): Promise<DescribeAppConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAppConfigWithOptions(request, headers, runtime);
  }

  async describeAppConfigWithOptions(request: DescribeAppConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeAppConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeAppConfigResponse>(await this.doROARequest("DescribeAppConfig", "2020-12-14", "HTTPS", "POST", "AK", `/api/config/describeAppConfig`, "json", req, runtime), new DescribeAppConfigResponse({}));
  }

  async describeUsageOverallData(request: DescribeUsageOverallDataRequest): Promise<DescribeUsageOverallDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeUsageOverallDataWithOptions(request, headers, runtime);
  }

  async describeUsageOverallDataWithOptions(request: DescribeUsageOverallDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeUsageOverallDataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.types)) {
      query["Types"] = request.types;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeUsageOverallDataResponse>(await this.doROARequest("DescribeUsageOverallData", "2020-12-14", "HTTPS", "POST", "AK", `/api/usage/describeUsageOverallData`, "json", req, runtime), new DescribeUsageOverallDataResponse({}));
  }

  async updateAppExpMetricRule(request: UpdateAppExpMetricRuleRequest): Promise<UpdateAppExpMetricRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAppExpMetricRuleWithOptions(request, headers, runtime);
  }

  async updateAppExpMetricRuleWithOptions(request: UpdateAppExpMetricRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateAppExpMetricRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateAppExpMetricRuleResponse>(await this.doROARequest("UpdateAppExpMetricRule", "2020-12-14", "HTTPS", "POST", "AK", `/api/config/updateAppExpMetricRule`, "json", req, runtime), new UpdateAppExpMetricRuleResponse({}));
  }

  async describeFaultDiagnosisUserDetail(request: DescribeFaultDiagnosisUserDetailRequest): Promise<DescribeFaultDiagnosisUserDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeFaultDiagnosisUserDetailWithOptions(request, headers, runtime);
  }

  async describeFaultDiagnosisUserDetailWithOptions(request: DescribeFaultDiagnosisUserDetailRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeFaultDiagnosisUserDetailResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.faultType)) {
      query["FaultType"] = request.faultType;
    }

    if (!Util.isUnset(request.queryCallUserInfo)) {
      query["QueryCallUserInfo"] = request.queryCallUserInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeFaultDiagnosisUserDetailResponse>(await this.doROARequest("DescribeFaultDiagnosisUserDetail", "2020-12-14", "HTTPS", "POST", "AK", `/api/diagnosis/describeFaultDiagnosisUserDetail`, "json", req, runtime), new DescribeFaultDiagnosisUserDetailResponse({}));
  }

  async describeChannelDistributionStatData(request: DescribeChannelDistributionStatDataRequest): Promise<DescribeChannelDistributionStatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeChannelDistributionStatDataWithOptions(request, headers, runtime);
  }

  async describeChannelDistributionStatDataWithOptions(request: DescribeChannelDistributionStatDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeChannelDistributionStatDataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!Util.isUnset(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    if (!Util.isUnset(request.statDim)) {
      query["StatDim"] = request.statDim;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeChannelDistributionStatDataResponse>(await this.doROARequest("DescribeChannelDistributionStatData", "2020-12-14", "HTTPS", "POST", "AK", `/api/channel/describeChannelDistributionStatData`, "json", req, runtime), new DescribeChannelDistributionStatDataResponse({}));
  }

  async describeChannelUserMetrics(request: DescribeChannelUserMetricsRequest): Promise<DescribeChannelUserMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeChannelUserMetricsWithOptions(request, headers, runtime);
  }

  async describeChannelUserMetricsWithOptions(request: DescribeChannelUserMetricsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeChannelUserMetricsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!Util.isUnset(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeChannelUserMetricsResponse>(await this.doROARequest("DescribeChannelUserMetrics", "2020-12-14", "HTTPS", "POST", "AK", `/api/channel/describeChannelUserMetrics`, "json", req, runtime), new DescribeChannelUserMetricsResponse({}));
  }

  async describeFaultDiagnosisFactorDistributionStat(request: DescribeFaultDiagnosisFactorDistributionStatRequest): Promise<DescribeFaultDiagnosisFactorDistributionStatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeFaultDiagnosisFactorDistributionStatWithOptions(request, headers, runtime);
  }

  async describeFaultDiagnosisFactorDistributionStatWithOptions(request: DescribeFaultDiagnosisFactorDistributionStatRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeFaultDiagnosisFactorDistributionStatResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeFaultDiagnosisFactorDistributionStatResponse>(await this.doROARequest("DescribeFaultDiagnosisFactorDistributionStat", "2020-12-14", "HTTPS", "POST", "AK", `/api/diagnosis/describeFaultDiagnosisFactorDistributionStat`, "json", req, runtime), new DescribeFaultDiagnosisFactorDistributionStatResponse({}));
  }

  async describeRtcChannelList(request: DescribeRtcChannelListRequest): Promise<DescribeRtcChannelListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRtcChannelListWithOptions(request, headers, runtime);
  }

  async describeRtcChannelListWithOptions(request: DescribeRtcChannelListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeRtcChannelListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeRtcChannelListResponse>(await this.doROARequest("DescribeRtcChannelList", "2020-12-14", "HTTPS", "POST", "AK", `/api/channel/describeRtcChannelList`, "json", req, runtime), new DescribeRtcChannelListResponse({}));
  }

  async describeFaultDiagnosisUserList(request: DescribeFaultDiagnosisUserListRequest): Promise<DescribeFaultDiagnosisUserListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeFaultDiagnosisUserListWithOptions(request, headers, runtime);
  }

  async describeFaultDiagnosisUserListWithOptions(request: DescribeFaultDiagnosisUserListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeFaultDiagnosisUserListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.faultTypes)) {
      query["FaultTypes"] = request.faultTypes;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeFaultDiagnosisUserListResponse>(await this.doROARequest("DescribeFaultDiagnosisUserList", "2020-12-14", "HTTPS", "POST", "AK", `/api/diagnosis/describeFaultDiagnosisUserList`, "json", req, runtime), new DescribeFaultDiagnosisUserListResponse({}));
  }

  async describeRtcChannelMetricList(request: DescribeRtcChannelMetricListRequest): Promise<DescribeRtcChannelMetricListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRtcChannelMetricListWithOptions(request, headers, runtime);
  }

  async describeRtcChannelMetricListWithOptions(request: DescribeRtcChannelMetricListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeRtcChannelMetricListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.pubUid)) {
      query["PubUid"] = request.pubUid;
    }

    if (!Util.isUnset(request.subUid)) {
      query["SubUid"] = request.subUid;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeRtcChannelMetricListResponse>(await this.doROARequest("DescribeRtcChannelMetricList", "2020-12-14", "HTTPS", "POST", "AK", `/api/call/describeRtcChannelMetricList`, "json", req, runtime), new DescribeRtcChannelMetricListResponse({}));
  }

  async describeQoeMetricData(request: DescribeQoeMetricDataRequest): Promise<DescribeQoeMetricDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeQoeMetricDataWithOptions(request, headers, runtime);
  }

  async describeQoeMetricDataWithOptions(request: DescribeQoeMetricDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeQoeMetricDataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!Util.isUnset(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeQoeMetricDataResponse>(await this.doROARequest("DescribeQoeMetricData", "2020-12-14", "HTTPS", "POST", "AK", `/api/call/describeQoeMetricData`, "json", req, runtime), new DescribeQoeMetricDataResponse({}));
  }

  async describePubUserListBySubUser(request: DescribePubUserListBySubUserRequest): Promise<DescribePubUserListBySubUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePubUserListBySubUserWithOptions(request, headers, runtime);
  }

  async describePubUserListBySubUserWithOptions(request: DescribePubUserListBySubUserRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribePubUserListBySubUserResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.createdTs)) {
      query["CreatedTs"] = request.createdTs;
    }

    if (!Util.isUnset(request.destroyedTs)) {
      query["DestroyedTs"] = request.destroyedTs;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribePubUserListBySubUserResponse>(await this.doROARequest("DescribePubUserListBySubUser", "2020-12-14", "HTTPS", "POST", "AK", `/api/call/describePubUserListBySubUser`, "json", req, runtime), new DescribePubUserListBySubUserResponse({}));
  }

  async updateAppFollowCallRule(request: UpdateAppFollowCallRuleRequest): Promise<UpdateAppFollowCallRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAppFollowCallRuleWithOptions(request, headers, runtime);
  }

  async updateAppFollowCallRuleWithOptions(request: UpdateAppFollowCallRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateAppFollowCallRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateAppFollowCallRuleResponse>(await this.doROARequest("UpdateAppFollowCallRule", "2020-12-14", "HTTPS", "POST", "AK", `/api/config/updateAppFollowCallRule`, "json", req, runtime), new UpdateAppFollowCallRuleResponse({}));
  }

  async describeQualityOsSdkVersionDistributionStatData(request: DescribeQualityOsSdkVersionDistributionStatDataRequest): Promise<DescribeQualityOsSdkVersionDistributionStatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeQualityOsSdkVersionDistributionStatDataWithOptions(request, headers, runtime);
  }

  async describeQualityOsSdkVersionDistributionStatDataWithOptions(request: DescribeQualityOsSdkVersionDistributionStatDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeQualityOsSdkVersionDistributionStatDataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeQualityOsSdkVersionDistributionStatDataResponse>(await this.doROARequest("DescribeQualityOsSdkVersionDistributionStatData", "2020-12-14", "HTTPS", "POST", "AK", `/api/quality/describeQualityOsSdkVersionDistributionStatData`, "json", req, runtime), new DescribeQualityOsSdkVersionDistributionStatDataResponse({}));
  }

  async describeRtcRecordMetricData(request: DescribeRtcRecordMetricDataRequest): Promise<DescribeRtcRecordMetricDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRtcRecordMetricDataWithOptions(request, headers, runtime);
  }

  async describeRtcRecordMetricDataWithOptions(request: DescribeRtcRecordMetricDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeRtcRecordMetricDataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.serviceArea)) {
      query["ServiceArea"] = request.serviceArea;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeRtcRecordMetricDataResponse>(await this.doROARequest("DescribeRtcRecordMetricData", "2020-12-14", "HTTPS", "POST", "AK", `/api/record/describeRtcRecordMetricData`, "json", req, runtime), new DescribeRtcRecordMetricDataResponse({}));
  }

  async describeQualityOverallData(request: DescribeQualityOverallDataRequest): Promise<DescribeQualityOverallDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeQualityOverallDataWithOptions(request, headers, runtime);
  }

  async describeQualityOverallDataWithOptions(request: DescribeQualityOverallDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeQualityOverallDataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.types)) {
      query["Types"] = request.types;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeQualityOverallDataResponse>(await this.doROARequest("DescribeQualityOverallData", "2020-12-14", "HTTPS", "POST", "AK", `/api/quality/describeQualityOverallData`, "json", req, runtime), new DescribeQualityOverallDataResponse({}));
  }

}
