// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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
  statusCode: number;
  body: DeleteAppExpMetricRuleResponseBody;
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
      body: DeleteAppExpMetricRuleResponseBody,
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
  statusCode: number;
  body: DeleteAppFollowCallRuleResponseBody;
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
      body: DeleteAppFollowCallRuleResponseBody,
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
  requestId?: string;
  thresholdConfig?: DescribeAppConfigResponseBodyThresholdConfig;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      thresholdConfig: 'ThresholdConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      thresholdConfig: DescribeAppConfigResponseBodyThresholdConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAppConfigResponseBody;
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
      body: DescribeAppConfigResponseBody,
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
  statusCode: number;
  body: DescribeAppExpMetricRuleResponseBody;
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
      body: DescribeAppExpMetricRuleResponseBody,
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
  statusCode: number;
  body: DescribeAppExpMetricRuleListResponseBody;
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
      body: DescribeAppExpMetricRuleListResponseBody,
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
  statusCode: number;
  body: DescribeAppFollowCallRuleResponseBody;
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
      body: DescribeAppFollowCallRuleResponseBody,
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
  statusCode: number;
  body: DescribeAppFollowCallRuleListResponseBody;
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
      body: DescribeAppFollowCallRuleListResponseBody,
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
  requestId?: string;
  userDetailList?: DescribeCallResponseBodyUserDetailList[];
  static names(): { [key: string]: string } {
    return {
      callInfo: 'CallInfo',
      requestId: 'RequestId',
      userDetailList: 'UserDetailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callInfo: DescribeCallResponseBodyCallInfo,
      requestId: 'string',
      userDetailList: { 'type': 'array', 'itemType': DescribeCallResponseBodyUserDetailList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCallResponseBody;
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
      body: DescribeCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallInfoRequest extends $tea.Model {
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

export class DescribeCallInfoResponseBody extends $tea.Model {
  callInfo?: DescribeCallInfoResponseBodyCallInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callInfo: 'CallInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callInfo: DescribeCallInfoResponseBodyCallInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCallInfoResponseBody;
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
      body: DescribeCallInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallListRequest extends $tea.Model {
  appId?: string;
  callStatus?: string;
  channelId?: string;
  endTs?: number;
  orderBy?: string;
  pageNo?: number;
  pageSize?: number;
  queryMode?: string;
  startTs?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callStatus: 'CallStatus',
      channelId: 'ChannelId',
      endTs: 'EndTs',
      orderBy: 'OrderBy',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      queryMode: 'QueryMode',
      startTs: 'StartTs',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callStatus: 'string',
      channelId: 'string',
      endTs: 'number',
      orderBy: 'string',
      pageNo: 'number',
      pageSize: 'number',
      queryMode: 'string',
      startTs: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallListResponseBody extends $tea.Model {
  callList?: DescribeCallListResponseBodyCallList[];
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  totalCnt?: number;
  static names(): { [key: string]: string } {
    return {
      callList: 'CallList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCnt: 'TotalCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callList: { 'type': 'array', 'itemType': DescribeCallListResponseBodyCallList },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCnt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCallListResponseBody;
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
      body: DescribeCallListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallListTestRequest extends $tea.Model {
  appId?: string;
  endTs?: number;
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTs: 'EndTs',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTs: 'number',
      startTs: 'number',
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
  statusCode: number;
  body: DescribeCallListTestResponseBody;
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
      body: DescribeCallListTestResponseBody,
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
  statusCode: number;
  body: DescribeCallUserExpResponseBody;
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
      body: DescribeCallUserExpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallUserListRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  extDataType?: string;
  pageNo?: number;
  pageSize?: number;
  queryExpInfo?: boolean;
  roleType?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      extDataType: 'ExtDataType',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      queryExpInfo: 'QueryExpInfo',
      roleType: 'RoleType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      extDataType: 'string',
      pageNo: 'number',
      pageSize: 'number',
      queryExpInfo: 'boolean',
      roleType: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallUserListResponseBody extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  totalCnt?: number;
  userDetailList?: DescribeCallUserListResponseBodyUserDetailList[];
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCnt: 'TotalCnt',
      userDetailList: 'UserDetailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCnt: 'number',
      userDetailList: { 'type': 'array', 'itemType': DescribeCallUserListResponseBodyUserDetailList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallUserListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCallUserListResponseBody;
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
      body: DescribeCallUserListResponseBody,
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
  statusCode: number;
  body: DescribeChannelAreaDistributionStatDataResponseBody;
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
      body: DescribeChannelAreaDistributionStatDataResponseBody,
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
  requestId?: string;
  statList?: DescribeChannelDistributionStatDataResponseBodyStatList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statList: 'StatList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statList: { 'type': 'array', 'itemType': DescribeChannelDistributionStatDataResponseBodyStatList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelDistributionStatDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeChannelDistributionStatDataResponseBody;
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
      body: DescribeChannelDistributionStatDataResponseBody,
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
  joinFastSuccessRate?: string;
  joinSlowThreshold?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      joinFastSuccessRate: 'JoinFastSuccessRate',
      joinSlowThreshold: 'JoinSlowThreshold',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinFastSuccessRate: 'string',
      joinSlowThreshold: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelJoinInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeChannelJoinInfoResponseBody;
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
      body: DescribeChannelJoinInfoResponseBody,
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
  callInfo?: DescribeChannelOverallDataResponseBodyCallInfo;
  metricDatas?: DescribeChannelOverallDataResponseBodyMetricDatas[];
  overallData?: DescribeChannelOverallDataResponseBodyOverallData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callInfo: 'CallInfo',
      metricDatas: 'MetricDatas',
      overallData: 'OverallData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callInfo: DescribeChannelOverallDataResponseBodyCallInfo,
      metricDatas: { 'type': 'array', 'itemType': DescribeChannelOverallDataResponseBodyMetricDatas },
      overallData: DescribeChannelOverallDataResponseBodyOverallData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelOverallDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeChannelOverallDataResponseBody;
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
      body: DescribeChannelOverallDataResponseBody,
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
  requestId?: string;
  topPubUserDetailList?: DescribeChannelTopPubUserListResponseBodyTopPubUserDetailList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      topPubUserDetailList: 'TopPubUserDetailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      topPubUserDetailList: { 'type': 'array', 'itemType': DescribeChannelTopPubUserListResponseBodyTopPubUserDetailList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelTopPubUserListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeChannelTopPubUserListResponseBody;
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
      body: DescribeChannelTopPubUserListResponseBody,
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
  statusCode: number;
  body: DescribeChannelUserMetricsResponseBody;
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
      body: DescribeChannelUserMetricsResponseBody,
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
  statusCode: number;
  body: DescribeEndPointEventListResponseBody;
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
      body: DescribeEndPointEventListResponseBody,
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
  metrics?: string;
  pubCallIdList?: string;
  pubUserId?: string;
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      metrics: 'Metrics',
      pubCallIdList: 'PubCallIdList',
      pubUserId: 'PubUserId',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      metrics: 'string',
      pubCallIdList: 'string',
      pubUserId: 'string',
      subUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointMetricDataResponseBody extends $tea.Model {
  pubMetrics?: DescribeEndPointMetricDataResponseBodyPubMetrics[];
  requestId?: string;
  subMetrics?: DescribeEndPointMetricDataResponseBodySubMetrics[];
  static names(): { [key: string]: string } {
    return {
      pubMetrics: 'PubMetrics',
      requestId: 'RequestId',
      subMetrics: 'SubMetrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pubMetrics: { 'type': 'array', 'itemType': DescribeEndPointMetricDataResponseBodyPubMetrics },
      requestId: 'string',
      subMetrics: { 'type': 'array', 'itemType': DescribeEndPointMetricDataResponseBodySubMetrics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointMetricDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEndPointMetricDataResponseBody;
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
      body: DescribeEndPointMetricDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisFactorDistributionStatRequest extends $tea.Model {
  appId?: string;
  endTs?: number;
  startTs?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTs: 'EndTs',
      startTs: 'StartTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTs: 'number',
      startTs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisFactorDistributionStatResponseBody extends $tea.Model {
  requestId?: string;
  statList?: DescribeFaultDiagnosisFactorDistributionStatResponseBodyStatList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statList: 'StatList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statList: { 'type': 'array', 'itemType': DescribeFaultDiagnosisFactorDistributionStatResponseBodyStatList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisFactorDistributionStatResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeFaultDiagnosisFactorDistributionStatResponseBody;
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
      body: DescribeFaultDiagnosisFactorDistributionStatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisOverallDataRequest extends $tea.Model {
  appId?: string;
  endTs?: number;
  startTs?: number;
  statDim?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTs: 'EndTs',
      startTs: 'StartTs',
      statDim: 'StatDim',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTs: 'number',
      startTs: 'number',
      statDim: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisOverallDataResponseBody extends $tea.Model {
  metricData?: DescribeFaultDiagnosisOverallDataResponseBodyMetricData;
  overallData?: DescribeFaultDiagnosisOverallDataResponseBodyOverallData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metricData: 'MetricData',
      overallData: 'OverallData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricData: DescribeFaultDiagnosisOverallDataResponseBodyMetricData,
      overallData: DescribeFaultDiagnosisOverallDataResponseBodyOverallData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisOverallDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeFaultDiagnosisOverallDataResponseBody;
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
      body: DescribeFaultDiagnosisOverallDataResponseBody,
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
  faultType?: string;
  queryCallUserInfo?: boolean;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      faultType: 'FaultType',
      queryCallUserInfo: 'QueryCallUserInfo',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      faultType: 'string',
      queryCallUserInfo: 'boolean',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBody extends $tea.Model {
  callInfo?: DescribeFaultDiagnosisUserDetailResponseBodyCallInfo;
  factorList?: DescribeFaultDiagnosisUserDetailResponseBodyFactorList[];
  faultMetricData?: DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricData;
  networkOperators?: string[];
  requestId?: string;
  userDetail?: DescribeFaultDiagnosisUserDetailResponseBodyUserDetail;
  static names(): { [key: string]: string } {
    return {
      callInfo: 'CallInfo',
      factorList: 'FactorList',
      faultMetricData: 'FaultMetricData',
      networkOperators: 'NetworkOperators',
      requestId: 'RequestId',
      userDetail: 'UserDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callInfo: DescribeFaultDiagnosisUserDetailResponseBodyCallInfo,
      factorList: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorList },
      faultMetricData: DescribeFaultDiagnosisUserDetailResponseBodyFaultMetricData,
      networkOperators: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      userDetail: DescribeFaultDiagnosisUserDetailResponseBodyUserDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeFaultDiagnosisUserDetailResponseBody;
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
      body: DescribeFaultDiagnosisUserDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserListRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  endTs?: number;
  faultTypes?: string;
  pageNo?: number;
  pageSize?: number;
  startTs?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      endTs: 'EndTs',
      faultTypes: 'FaultTypes',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTs: 'StartTs',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      endTs: 'number',
      faultTypes: 'string',
      pageNo: 'number',
      pageSize: 'number',
      startTs: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserListResponseBody extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  totalCnt?: number;
  userList?: DescribeFaultDiagnosisUserListResponseBodyUserList[];
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCnt: 'TotalCnt',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCnt: 'number',
      userList: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserListResponseBodyUserList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeFaultDiagnosisUserListResponseBody;
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
      body: DescribeFaultDiagnosisUserListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIceDurPeriodByDaySubTypeRequest extends $tea.Model {
  endTs?: number;
  jobType?: string;
  startTs?: number;
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      endTs: 'EndTs',
      jobType: 'JobType',
      startTs: 'StartTs',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTs: 'number',
      jobType: 'string',
      startTs: 'number',
      timeZone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIceDurPeriodByDaySubTypeResponseBody extends $tea.Model {
  jobInfoList?: DescribeIceDurPeriodByDaySubTypeResponseBodyJobInfoList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobInfoList: 'JobInfoList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInfoList: { 'type': 'array', 'itemType': DescribeIceDurPeriodByDaySubTypeResponseBodyJobInfoList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIceDurPeriodByDaySubTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeIceDurPeriodByDaySubTypeResponseBody;
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
      body: DescribeIceDurPeriodByDaySubTypeResponseBody,
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
  jobInfoList?: DescribeIceDurSummaryOverviewResponseBodyJobInfoList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobInfoList: 'JobInfoList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInfoList: { 'type': 'array', 'itemType': DescribeIceDurSummaryOverviewResponseBodyJobInfoList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIceDurSummaryOverviewResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeIceDurSummaryOverviewResponseBody;
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
      body: DescribeIceDurSummaryOverviewResponseBody,
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
  callStatus?: string;
  pubUserDetailList?: DescribePubUserListBySubUserResponseBodyPubUserDetailList[];
  requestId?: string;
  subUserDetail?: DescribePubUserListBySubUserResponseBodySubUserDetail;
  static names(): { [key: string]: string } {
    return {
      callStatus: 'CallStatus',
      pubUserDetailList: 'PubUserDetailList',
      requestId: 'RequestId',
      subUserDetail: 'SubUserDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callStatus: 'string',
      pubUserDetailList: { 'type': 'array', 'itemType': DescribePubUserListBySubUserResponseBodyPubUserDetailList },
      requestId: 'string',
      subUserDetail: DescribePubUserListBySubUserResponseBodySubUserDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePubUserListBySubUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePubUserListBySubUserResponseBody;
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
      body: DescribePubUserListBySubUserResponseBody,
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
  audioData?: DescribeQoeMetricDataResponseBodyAudioData[];
  requestId?: string;
  videoData?: DescribeQoeMetricDataResponseBodyVideoData[];
  static names(): { [key: string]: string } {
    return {
      audioData: 'AudioData',
      requestId: 'RequestId',
      videoData: 'VideoData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioData: { 'type': 'array', 'itemType': DescribeQoeMetricDataResponseBodyAudioData },
      requestId: 'string',
      videoData: { 'type': 'array', 'itemType': DescribeQoeMetricDataResponseBodyVideoData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQoeMetricDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeQoeMetricDataResponseBody;
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
      body: DescribeQoeMetricDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityAreaDistributionStatDataRequest extends $tea.Model {
  appId?: string;
  endDate?: number;
  parentArea?: string;
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endDate: 'EndDate',
      parentArea: 'ParentArea',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endDate: 'number',
      parentArea: 'string',
      startDate: 'number',
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
  statusCode: number;
  body: DescribeQualityAreaDistributionStatDataResponseBody;
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
      body: DescribeQualityAreaDistributionStatDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityDistributionStatDataRequest extends $tea.Model {
  appId?: string;
  endDate?: number;
  startDate?: number;
  statDim?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endDate: 'EndDate',
      startDate: 'StartDate',
      statDim: 'StatDim',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endDate: 'number',
      startDate: 'number',
      statDim: 'string',
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
  statusCode: number;
  body: DescribeQualityDistributionStatDataResponseBody;
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
      body: DescribeQualityDistributionStatDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityOsSdkVersionDistributionStatDataRequest extends $tea.Model {
  appId?: string;
  endDate?: number;
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endDate: 'EndDate',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endDate: 'number',
      startDate: 'number',
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
  statusCode: number;
  body: DescribeQualityOsSdkVersionDistributionStatDataResponseBody;
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
      body: DescribeQualityOsSdkVersionDistributionStatDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityOverallDataRequest extends $tea.Model {
  appId?: string;
  endDate?: number;
  startDate?: number;
  types?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endDate: 'EndDate',
      startDate: 'StartDate',
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endDate: 'number',
      startDate: 'number',
      types: 'string',
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
  statusCode: number;
  body: DescribeQualityOverallDataResponseBody;
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
      body: DescribeQualityOverallDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelDetailsRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  endTime?: string;
  pageNo?: number;
  pageSize?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      endTime: 'EndTime',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      endTime: 'string',
      pageNo: 'number',
      pageSize: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelDetailsResponseBody extends $tea.Model {
  channelId?: string;
  channelInfo?: DescribeRtcChannelDetailsResponseBodyChannelInfo[];
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      channelInfo: 'ChannelInfo',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      channelInfo: { 'type': 'array', 'itemType': DescribeRtcChannelDetailsResponseBodyChannelInfo },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRtcChannelDetailsResponseBody;
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
      body: DescribeRtcChannelDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelListRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  endTime?: string;
  pageNo?: number;
  pageSize?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      endTime: 'EndTime',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      endTime: 'string',
      pageNo: 'number',
      pageSize: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelListResponseBody extends $tea.Model {
  channels?: DescribeRtcChannelListResponseBodyChannels[];
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  totalCnt?: number;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCnt: 'TotalCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': DescribeRtcChannelListResponseBodyChannels },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCnt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRtcChannelListResponseBody;
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
      body: DescribeRtcChannelListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricListRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  endTime?: string;
  pubUid?: string;
  startTime?: string;
  subUid?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      endTime: 'EndTime',
      pubUid: 'PubUid',
      startTime: 'StartTime',
      subUid: 'SubUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      endTime: 'string',
      pubUid: 'string',
      startTime: 'string',
      subUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricListResponseBody extends $tea.Model {
  metrics?: DescribeRtcChannelMetricListResponseBodyMetrics[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': DescribeRtcChannelMetricListResponseBodyMetrics },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRtcChannelMetricListResponseBody;
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
      body: DescribeRtcChannelMetricListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelUsersRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  pageNo?: number;
  pageSize?: number;
  timePoint?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      timePoint: 'TimePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      timePoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelUsersResponseBody extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  totalCnt?: number;
  userList?: DescribeRtcChannelUsersResponseBodyUserList;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCnt: 'TotalCnt',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCnt: 'number',
      userList: DescribeRtcChannelUsersResponseBodyUserList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRtcChannelUsersResponseBody;
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
      body: DescribeRtcChannelUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcRecordMetricDataRequest extends $tea.Model {
  appId?: string;
  endTime?: string;
  serviceArea?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      serviceArea: 'ServiceArea',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'string',
      serviceArea: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcRecordMetricDataResponseBody extends $tea.Model {
  requestId?: string;
  rtcRecordMetricData?: DescribeRtcRecordMetricDataResponseBodyRtcRecordMetricData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rtcRecordMetricData: 'RtcRecordMetricData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rtcRecordMetricData: { 'type': 'array', 'itemType': DescribeRtcRecordMetricDataResponseBodyRtcRecordMetricData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcRecordMetricDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRtcRecordMetricDataResponseBody;
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
      body: DescribeRtcRecordMetricDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcUserEventListRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  endTime?: string;
  startTime?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      endTime: 'EndTime',
      startTime: 'StartTime',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      endTime: 'string',
      startTime: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcUserEventListResponseBody extends $tea.Model {
  events?: DescribeRtcUserEventListResponseBodyEvents[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': DescribeRtcUserEventListResponseBodyEvents },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcUserEventListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRtcUserEventListResponseBody;
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
      body: DescribeRtcUserEventListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageAreaDistributionStatDataRequest extends $tea.Model {
  appId?: string;
  endDate?: string;
  parentArea?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endDate: 'EndDate',
      parentArea: 'ParentArea',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endDate: 'string',
      parentArea: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageAreaDistributionStatDataResponseBody extends $tea.Model {
  requestId?: string;
  usageAreaStatList?: DescribeUsageAreaDistributionStatDataResponseBodyUsageAreaStatList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      usageAreaStatList: 'UsageAreaStatList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      usageAreaStatList: { 'type': 'array', 'itemType': DescribeUsageAreaDistributionStatDataResponseBodyUsageAreaStatList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageAreaDistributionStatDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUsageAreaDistributionStatDataResponseBody;
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
      body: DescribeUsageAreaDistributionStatDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageDistributionStatDataRequest extends $tea.Model {
  appId?: string;
  endDate?: number;
  startDate?: number;
  statDim?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endDate: 'EndDate',
      startDate: 'StartDate',
      statDim: 'StatDim',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endDate: 'number',
      startDate: 'number',
      statDim: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageDistributionStatDataResponseBody extends $tea.Model {
  requestId?: string;
  usageStatList?: DescribeUsageDistributionStatDataResponseBodyUsageStatList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      usageStatList: 'UsageStatList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      usageStatList: { 'type': 'array', 'itemType': DescribeUsageDistributionStatDataResponseBodyUsageStatList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageDistributionStatDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUsageDistributionStatDataResponseBody;
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
      body: DescribeUsageDistributionStatDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOsSdkVersionDistributionStatDataRequest extends $tea.Model {
  appId?: string;
  endDate?: number;
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endDate: 'EndDate',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endDate: 'number',
      startDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOsSdkVersionDistributionStatDataResponseBody extends $tea.Model {
  requestId?: string;
  usageOsSdkVersionStatList?: DescribeUsageOsSdkVersionDistributionStatDataResponseBodyUsageOsSdkVersionStatList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      usageOsSdkVersionStatList: 'UsageOsSdkVersionStatList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      usageOsSdkVersionStatList: { 'type': 'array', 'itemType': DescribeUsageOsSdkVersionDistributionStatDataResponseBodyUsageOsSdkVersionStatList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOsSdkVersionDistributionStatDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUsageOsSdkVersionDistributionStatDataResponseBody;
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
      body: DescribeUsageOsSdkVersionDistributionStatDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOverallDataRequest extends $tea.Model {
  appId?: string;
  endDate?: number;
  startDate?: number;
  types?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endDate: 'EndDate',
      startDate: 'StartDate',
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endDate: 'number',
      startDate: 'number',
      types: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOverallDataResponseBody extends $tea.Model {
  requestId?: string;
  usageOverallData?: DescribeUsageOverallDataResponseBodyUsageOverallData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      usageOverallData: 'UsageOverallData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      usageOverallData: { 'type': 'array', 'itemType': DescribeUsageOverallDataResponseBodyUsageOverallData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOverallDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUsageOverallDataResponseBody;
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
      body: DescribeUsageOverallDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppExpMetricRuleRequest extends $tea.Model {
  appId?: string;
  rule?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      rule: 'string',
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
  statusCode: number;
  body: UpdateAppExpMetricRuleResponseBody;
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
      body: UpdateAppExpMetricRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppFollowCallRuleRequest extends $tea.Model {
  appId?: string;
  rule?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      rule: 'string',
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
  statusCode: number;
  body: UpdateAppFollowCallRuleResponseBody;
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
      body: UpdateAppFollowCallRuleResponseBody,
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

export class DescribeAppExpMetricRuleResponseBodyAppExpMetricRule extends $tea.Model {
  appId?: string;
  createdTs?: number;
  gmtCreateTs?: number;
  gmtModifiedTs?: number;
  modifiedTs?: number;
  rule?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createdTs: 'CreatedTs',
      gmtCreateTs: 'GmtCreateTs',
      gmtModifiedTs: 'GmtModifiedTs',
      modifiedTs: 'ModifiedTs',
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createdTs: 'number',
      gmtCreateTs: 'number',
      gmtModifiedTs: 'number',
      modifiedTs: 'number',
      rule: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppExpMetricRuleListResponseBodyAppExpMetricRuleList extends $tea.Model {
  appId?: string;
  createdTs?: number;
  gmtCreateTs?: number;
  gmtModifiedTs?: number;
  modifiedTs?: number;
  rule?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createdTs: 'CreatedTs',
      gmtCreateTs: 'GmtCreateTs',
      gmtModifiedTs: 'GmtModifiedTs',
      modifiedTs: 'ModifiedTs',
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createdTs: 'number',
      gmtCreateTs: 'number',
      gmtModifiedTs: 'number',
      modifiedTs: 'number',
      rule: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppFollowCallRuleResponseBodyAppFollowCallRule extends $tea.Model {
  appId?: string;
  createdTs?: number;
  gmtCreateTs?: number;
  gmtModifiedTs?: number;
  modifiedTs?: number;
  rule?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createdTs: 'CreatedTs',
      gmtCreateTs: 'GmtCreateTs',
      gmtModifiedTs: 'GmtModifiedTs',
      modifiedTs: 'ModifiedTs',
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createdTs: 'number',
      gmtCreateTs: 'number',
      gmtModifiedTs: 'number',
      modifiedTs: 'number',
      rule: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppFollowCallRuleListResponseBodyAppFollowCallRuleList extends $tea.Model {
  appId?: string;
  createdTs?: number;
  gmtCreateTs?: number;
  gmtModifiedTs?: number;
  modifiedTs?: number;
  rule?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createdTs: 'CreatedTs',
      gmtCreateTs: 'GmtCreateTs',
      gmtModifiedTs: 'GmtModifiedTs',
      modifiedTs: 'ModifiedTs',
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createdTs: 'number',
      gmtCreateTs: 'number',
      gmtModifiedTs: 'number',
      modifiedTs: 'number',
      rule: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallResponseBodyCallInfo extends $tea.Model {
  appId?: string;
  callStatus?: string;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callStatus: 'CallStatus',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callStatus: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallResponseBodyUserDetailListDurMetricStatData extends $tea.Model {
  pubAudio?: number;
  pubVideo1080?: number;
  pubVideo360?: number;
  pubVideo720?: number;
  pubVideoScreenShare?: number;
  subAudio?: number;
  subVideo1080?: number;
  subVideo360?: number;
  subVideo720?: number;
  subVideoScreenShare?: number;
  static names(): { [key: string]: string } {
    return {
      pubAudio: 'PubAudio',
      pubVideo1080: 'PubVideo1080',
      pubVideo360: 'PubVideo360',
      pubVideo720: 'PubVideo720',
      pubVideoScreenShare: 'PubVideoScreenShare',
      subAudio: 'SubAudio',
      subVideo1080: 'SubVideo1080',
      subVideo360: 'SubVideo360',
      subVideo720: 'SubVideo720',
      subVideoScreenShare: 'SubVideoScreenShare',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pubAudio: 'number',
      pubVideo1080: 'number',
      pubVideo360: 'number',
      pubVideo720: 'number',
      pubVideoScreenShare: 'number',
      subAudio: 'number',
      subVideo1080: 'number',
      subVideo360: 'number',
      subVideo720: 'number',
      subVideoScreenShare: 'number',
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

export class DescribeCallResponseBodyUserDetailList extends $tea.Model {
  callExp?: string;
  createdTs?: number;
  destroyedTs?: number;
  durMetricStatData?: DescribeCallResponseBodyUserDetailListDurMetricStatData;
  duration?: number;
  location?: string;
  locationCn?: string;
  locationEn?: string;
  network?: string;
  networkList?: string[];
  onlineDuration?: number;
  onlinePeriods?: DescribeCallResponseBodyUserDetailListOnlinePeriods[];
  os?: string;
  osList?: string[];
  roles?: string[];
  sdkVersion?: string;
  sdkVersionList?: string[];
  userId?: string;
  userIdAlias?: string;
  static names(): { [key: string]: string } {
    return {
      callExp: 'CallExp',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      durMetricStatData: 'DurMetricStatData',
      duration: 'Duration',
      location: 'Location',
      locationCn: 'LocationCn',
      locationEn: 'LocationEn',
      network: 'Network',
      networkList: 'NetworkList',
      onlineDuration: 'OnlineDuration',
      onlinePeriods: 'OnlinePeriods',
      os: 'Os',
      osList: 'OsList',
      roles: 'Roles',
      sdkVersion: 'SdkVersion',
      sdkVersionList: 'SdkVersionList',
      userId: 'UserId',
      userIdAlias: 'UserIdAlias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callExp: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      durMetricStatData: DescribeCallResponseBodyUserDetailListDurMetricStatData,
      duration: 'number',
      location: 'string',
      locationCn: 'string',
      locationEn: 'string',
      network: 'string',
      networkList: { 'type': 'array', 'itemType': 'string' },
      onlineDuration: 'number',
      onlinePeriods: { 'type': 'array', 'itemType': DescribeCallResponseBodyUserDetailListOnlinePeriods },
      os: 'string',
      osList: { 'type': 'array', 'itemType': 'string' },
      roles: { 'type': 'array', 'itemType': 'string' },
      sdkVersion: 'string',
      sdkVersionList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userIdAlias: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallInfoResponseBodyCallInfo extends $tea.Model {
  appId?: string;
  callStatus?: string;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callStatus: 'CallStatus',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callStatus: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallListResponseBodyCallList extends $tea.Model {
  appId?: string;
  badExpUserCnt?: number;
  callStatus?: string;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  duration?: number;
  userCnt?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      badExpUserCnt: 'BadExpUserCnt',
      callStatus: 'CallStatus',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
      userCnt: 'UserCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      badExpUserCnt: 'number',
      callStatus: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
      userCnt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallUserExpResponseBodyExpInfoList extends $tea.Model {
  callExp?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callExp: 'CallExp',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callExp: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallUserListResponseBodyUserDetailListDurMetricStatData extends $tea.Model {
  pubAudio?: number;
  pubVideo360?: number;
  pubVideo720?: number;
  pubVideoScreenShare?: number;
  subAudio?: number;
  subVideo1080?: number;
  subVideo360?: number;
  subVideo720?: number;
  subVideoScreenShare?: number;
  static names(): { [key: string]: string } {
    return {
      pubAudio: 'PubAudio',
      pubVideo360: 'PubVideo360',
      pubVideo720: 'PubVideo720',
      pubVideoScreenShare: 'PubVideoScreenShare',
      subAudio: 'SubAudio',
      subVideo1080: 'SubVideo1080',
      subVideo360: 'SubVideo360',
      subVideo720: 'SubVideo720',
      subVideoScreenShare: 'SubVideoScreenShare',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pubAudio: 'number',
      pubVideo360: 'number',
      pubVideo720: 'number',
      pubVideoScreenShare: 'number',
      subAudio: 'number',
      subVideo1080: 'number',
      subVideo360: 'number',
      subVideo720: 'number',
      subVideoScreenShare: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallUserListResponseBodyUserDetailListOnlinePeriods extends $tea.Model {
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

export class DescribeCallUserListResponseBodyUserDetailList extends $tea.Model {
  callExp?: string;
  createdTs?: number;
  destroyedTs?: number;
  durMetricStatData?: DescribeCallUserListResponseBodyUserDetailListDurMetricStatData;
  duration?: number;
  location?: string;
  locationCn?: string;
  locationEn?: string;
  network?: string;
  networkList?: string[];
  onlineDuration?: number;
  onlinePeriods?: DescribeCallUserListResponseBodyUserDetailListOnlinePeriods[];
  os?: string;
  osList?: string[];
  roles?: string[];
  sdkVersion?: string;
  sdkVersionList?: string[];
  userId?: string;
  userIdAlias?: string;
  static names(): { [key: string]: string } {
    return {
      callExp: 'CallExp',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      durMetricStatData: 'DurMetricStatData',
      duration: 'Duration',
      location: 'Location',
      locationCn: 'LocationCn',
      locationEn: 'LocationEn',
      network: 'Network',
      networkList: 'NetworkList',
      onlineDuration: 'OnlineDuration',
      onlinePeriods: 'OnlinePeriods',
      os: 'Os',
      osList: 'OsList',
      roles: 'Roles',
      sdkVersion: 'SdkVersion',
      sdkVersionList: 'SdkVersionList',
      userId: 'UserId',
      userIdAlias: 'UserIdAlias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callExp: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      durMetricStatData: DescribeCallUserListResponseBodyUserDetailListDurMetricStatData,
      duration: 'number',
      location: 'string',
      locationCn: 'string',
      locationEn: 'string',
      network: 'string',
      networkList: { 'type': 'array', 'itemType': 'string' },
      onlineDuration: 'number',
      onlinePeriods: { 'type': 'array', 'itemType': DescribeCallUserListResponseBodyUserDetailListOnlinePeriods },
      os: 'string',
      osList: { 'type': 'array', 'itemType': 'string' },
      roles: { 'type': 'array', 'itemType': 'string' },
      sdkVersion: 'string',
      sdkVersionList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userIdAlias: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelAreaDistributionStatDataResponseBodyAreaStatList extends $tea.Model {
  areaName?: string;
  callUserCount?: number;
  highQualityTransmissionRate?: string;
  pubUserCount?: number;
  subUserCount?: number;
  static names(): { [key: string]: string } {
    return {
      areaName: 'AreaName',
      callUserCount: 'CallUserCount',
      highQualityTransmissionRate: 'HighQualityTransmissionRate',
      pubUserCount: 'PubUserCount',
      subUserCount: 'SubUserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaName: 'string',
      callUserCount: 'number',
      highQualityTransmissionRate: 'string',
      pubUserCount: 'number',
      subUserCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelDistributionStatDataResponseBodyStatList extends $tea.Model {
  callUserCount?: number;
  callUserRatio?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      callUserCount: 'CallUserCount',
      callUserRatio: 'CallUserRatio',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callUserCount: 'number',
      callUserRatio: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelOverallDataResponseBodyCallInfo extends $tea.Model {
  appId?: string;
  callStatus?: string;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callStatus: 'CallStatus',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callStatus: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelOverallDataResponseBodyMetricDatasNodes extends $tea.Model {
  ext?: { [key: string]: any };
  x?: string;
  y?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      x: 'string',
      y: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelOverallDataResponseBodyMetricDatas extends $tea.Model {
  nodes?: DescribeChannelOverallDataResponseBodyMetricDatasNodes[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeChannelOverallDataResponseBodyMetricDatasNodes },
      type: 'string',
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
  createdTs?: number;
  destroyedTs?: number;
  duration?: number;
  location?: string;
  onlineDuration?: number;
  onlinePeriods?: DescribeChannelTopPubUserListResponseBodyTopPubUserDetailListOnlinePeriods[];
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
      location: 'Location',
      onlineDuration: 'OnlineDuration',
      onlinePeriods: 'OnlinePeriods',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
      location: 'string',
      onlineDuration: 'number',
      onlinePeriods: { 'type': 'array', 'itemType': DescribeChannelTopPubUserListResponseBodyTopPubUserDetailListOnlinePeriods },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserMetricsResponseBodyMetricDatasNodes extends $tea.Model {
  ext?: { [key: string]: any };
  x?: string;
  y?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      x: 'string',
      y: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserMetricsResponseBodyMetricDatas extends $tea.Model {
  nodes?: DescribeChannelUserMetricsResponseBodyMetricDatasNodes[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeChannelUserMetricsResponseBodyMetricDatasNodes },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserMetricsResponseBodyOverallData extends $tea.Model {
  totalBadExpNum?: number;
  totalJoinFailNum?: number;
  totalPubUserNum?: number;
  totalSubUserNum?: number;
  totalUserNum?: number;
  static names(): { [key: string]: string } {
    return {
      totalBadExpNum: 'TotalBadExpNum',
      totalJoinFailNum: 'TotalJoinFailNum',
      totalPubUserNum: 'TotalPubUserNum',
      totalSubUserNum: 'TotalSubUserNum',
      totalUserNum: 'TotalUserNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalBadExpNum: 'number',
      totalJoinFailNum: 'number',
      totalPubUserNum: 'number',
      totalSubUserNum: 'number',
      totalUserNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointEventListResponseBodyNodesEventDataItemsEventList extends $tea.Model {
  acs?: string;
  eventCode?: string;
  eventName?: string;
  eventType?: string;
  os?: string;
  sdk?: string;
  streamName?: string;
  streamType?: string;
  trackCode?: string;
  trackName?: string;
  ts?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      acs: 'Acs',
      eventCode: 'EventCode',
      eventName: 'EventName',
      eventType: 'EventType',
      os: 'Os',
      sdk: 'Sdk',
      streamName: 'StreamName',
      streamType: 'StreamType',
      trackCode: 'TrackCode',
      trackName: 'TrackName',
      ts: 'Ts',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acs: 'string',
      eventCode: 'string',
      eventName: 'string',
      eventType: 'string',
      os: 'string',
      sdk: 'string',
      streamName: 'string',
      streamType: 'string',
      trackCode: 'string',
      trackName: 'string',
      ts: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointEventListResponseBodyNodesEventDataItems extends $tea.Model {
  eventList?: DescribeEndPointEventListResponseBodyNodesEventDataItemsEventList[];
  ts?: number;
  static names(): { [key: string]: string } {
    return {
      eventList: 'EventList',
      ts: 'Ts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventList: { 'type': 'array', 'itemType': DescribeEndPointEventListResponseBodyNodesEventDataItemsEventList },
      ts: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointEventListResponseBodyNodes extends $tea.Model {
  eventDataItems?: DescribeEndPointEventListResponseBodyNodesEventDataItems[];
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      eventDataItems: 'EventDataItems',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventDataItems: { 'type': 'array', 'itemType': DescribeEndPointEventListResponseBodyNodesEventDataItems },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointMetricDataResponseBodyPubMetricsNodes extends $tea.Model {
  ext?: { [key: string]: any };
  x?: string;
  y?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      x: 'string',
      y: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointMetricDataResponseBodyPubMetrics extends $tea.Model {
  nodes?: DescribeEndPointMetricDataResponseBodyPubMetricsNodes[];
  type?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeEndPointMetricDataResponseBodyPubMetricsNodes },
      type: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointMetricDataResponseBodySubMetricsNodes extends $tea.Model {
  ext?: { [key: string]: any };
  x?: string;
  y?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      x: 'string',
      y: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointMetricDataResponseBodySubMetrics extends $tea.Model {
  nodes?: DescribeEndPointMetricDataResponseBodySubMetricsNodes[];
  type?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeEndPointMetricDataResponseBodySubMetricsNodes },
      type: 'string',
      userId: 'string',
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

export class DescribeFaultDiagnosisOverallDataResponseBodyMetricDataNodes extends $tea.Model {
  ext?: { [key: string]: any };
  x?: string;
  y?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      x: 'string',
      y: 'string',
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

export class DescribeFaultDiagnosisOverallDataResponseBodyOverallData extends $tea.Model {
  faultUserCount?: number;
  faultUserRatio?: number;
  totalUserCount?: number;
  static names(): { [key: string]: string } {
    return {
      faultUserCount: 'FaultUserCount',
      faultUserRatio: 'FaultUserRatio',
      totalUserCount: 'TotalUserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faultUserCount: 'number',
      faultUserRatio: 'number',
      totalUserCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyCallInfo extends $tea.Model {
  appId?: string;
  callStatus?: string;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callStatus: 'CallStatus',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callStatus: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatasEventDataItemsEventList extends $tea.Model {
  acs?: string;
  eventCode?: string;
  eventName?: string;
  eventType?: string;
  os?: string;
  sdk?: string;
  streamName?: string;
  streamType?: string;
  trackCode?: string;
  trackName?: string;
  ts?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      acs: 'Acs',
      eventCode: 'EventCode',
      eventName: 'EventName',
      eventType: 'EventType',
      os: 'Os',
      sdk: 'Sdk',
      streamName: 'StreamName',
      streamType: 'StreamType',
      trackCode: 'TrackCode',
      trackName: 'TrackName',
      ts: 'Ts',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acs: 'string',
      eventCode: 'string',
      eventName: 'string',
      eventType: 'string',
      os: 'string',
      sdk: 'string',
      streamName: 'string',
      streamType: 'string',
      trackCode: 'string',
      trackName: 'string',
      ts: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatasEventDataItems extends $tea.Model {
  eventList?: DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatasEventDataItemsEventList[];
  ts?: number;
  static names(): { [key: string]: string } {
    return {
      eventList: 'EventList',
      ts: 'Ts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventList: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatasEventDataItemsEventList },
      ts: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatas extends $tea.Model {
  eventDataItems?: DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatasEventDataItems[];
  role?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      eventDataItems: 'EventDataItems',
      role: 'Role',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventDataItems: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatasEventDataItems },
      role: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatasNodes extends $tea.Model {
  ext?: { [key: string]: any };
  x?: string;
  y?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      x: 'string',
      y: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatas extends $tea.Model {
  nodes?: DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatasNodes[];
  role?: string;
  type?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      role: 'Role',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatasNodes },
      role: 'string',
      type: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisUserDetailResponseBodyFactorList extends $tea.Model {
  factorId?: string;
  faultSource?: string;
  relatedEventDatas?: DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatas[];
  relatedMetricDatas?: DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatas[];
  static names(): { [key: string]: string } {
    return {
      factorId: 'FactorId',
      faultSource: 'FaultSource',
      relatedEventDatas: 'RelatedEventDatas',
      relatedMetricDatas: 'RelatedMetricDatas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      factorId: 'string',
      faultSource: 'string',
      relatedEventDatas: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedEventDatas },
      relatedMetricDatas: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyFactorListRelatedMetricDatas },
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
  createdTs?: number;
  destroyedTs?: number;
  duration?: number;
  location?: string;
  network?: string;
  onlineDuration?: number;
  onlinePeriods?: DescribeFaultDiagnosisUserDetailResponseBodyUserDetailOnlinePeriods[];
  os?: string;
  sdkVersion?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
      location: 'Location',
      network: 'Network',
      onlineDuration: 'OnlineDuration',
      onlinePeriods: 'OnlinePeriods',
      os: 'Os',
      sdkVersion: 'SdkVersion',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
      location: 'string',
      network: 'string',
      onlineDuration: 'number',
      onlinePeriods: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserDetailResponseBodyUserDetailOnlinePeriods },
      os: 'string',
      sdkVersion: 'string',
      userId: 'string',
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
  channelCreatedTs?: number;
  channelId?: string;
  createdTs?: number;
  destroyedTs?: number;
  faultList?: DescribeFaultDiagnosisUserListResponseBodyUserListFaultList[];
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      channelCreatedTs: 'ChannelCreatedTs',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      faultList: 'FaultList',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelCreatedTs: 'number',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      faultList: { 'type': 'array', 'itemType': DescribeFaultDiagnosisUserListResponseBodyUserListFaultList },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIceDurPeriodByDaySubTypeResponseBodyJobInfoListSubJobInfoList extends $tea.Model {
  subJobDuration?: number;
  subJobType?: string;
  static names(): { [key: string]: string } {
    return {
      subJobDuration: 'SubJobDuration',
      subJobType: 'SubJobType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subJobDuration: 'number',
      subJobType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIceDurPeriodByDaySubTypeResponseBodyJobInfoList extends $tea.Model {
  dateTs?: number;
  duration?: number;
  subJobInfoList?: DescribeIceDurPeriodByDaySubTypeResponseBodyJobInfoListSubJobInfoList[];
  static names(): { [key: string]: string } {
    return {
      dateTs: 'DateTs',
      duration: 'Duration',
      subJobInfoList: 'SubJobInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateTs: 'number',
      duration: 'number',
      subJobInfoList: { 'type': 'array', 'itemType': DescribeIceDurPeriodByDaySubTypeResponseBodyJobInfoListSubJobInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIceDurSummaryOverviewResponseBodyJobInfoList extends $tea.Model {
  duration?: number;
  jobType?: string;
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      jobType: 'JobType',
      timeRange: 'TimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      jobType: 'string',
      timeRange: 'string',
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
  callIdList?: string[];
  clientType?: string;
  createdTs?: number;
  destroyedTs?: number;
  duration?: number;
  location?: string;
  network?: string;
  networkList?: string[];
  onlineDuration?: number;
  onlinePeriods?: DescribePubUserListBySubUserResponseBodyPubUserDetailListOnlinePeriods[];
  os?: string;
  osList?: string[];
  roles?: string[];
  sdkVersion?: string;
  sdkVersionList?: string[];
  userId?: string;
  userIdAlias?: string;
  static names(): { [key: string]: string } {
    return {
      callIdList: 'CallIdList',
      clientType: 'ClientType',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
      location: 'Location',
      network: 'Network',
      networkList: 'NetworkList',
      onlineDuration: 'OnlineDuration',
      onlinePeriods: 'OnlinePeriods',
      os: 'Os',
      osList: 'OsList',
      roles: 'Roles',
      sdkVersion: 'SdkVersion',
      sdkVersionList: 'SdkVersionList',
      userId: 'UserId',
      userIdAlias: 'UserIdAlias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callIdList: { 'type': 'array', 'itemType': 'string' },
      clientType: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
      location: 'string',
      network: 'string',
      networkList: { 'type': 'array', 'itemType': 'string' },
      onlineDuration: 'number',
      onlinePeriods: { 'type': 'array', 'itemType': DescribePubUserListBySubUserResponseBodyPubUserDetailListOnlinePeriods },
      os: 'string',
      osList: { 'type': 'array', 'itemType': 'string' },
      roles: { 'type': 'array', 'itemType': 'string' },
      sdkVersion: 'string',
      sdkVersionList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userIdAlias: 'string',
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
  clientType?: string;
  createdTs?: number;
  destroyedTs?: number;
  duration?: number;
  location?: string;
  network?: string;
  networkList?: string[];
  onlineDuration?: number;
  onlinePeriods?: DescribePubUserListBySubUserResponseBodySubUserDetailOnlinePeriods[];
  os?: string;
  osList?: string[];
  roles?: string[];
  sdkVersion?: string;
  sdkVersionList?: string[];
  userId?: string;
  userIdAlias?: string;
  static names(): { [key: string]: string } {
    return {
      clientType: 'ClientType',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
      location: 'Location',
      network: 'Network',
      networkList: 'NetworkList',
      onlineDuration: 'OnlineDuration',
      onlinePeriods: 'OnlinePeriods',
      os: 'Os',
      osList: 'OsList',
      roles: 'Roles',
      sdkVersion: 'SdkVersion',
      sdkVersionList: 'SdkVersionList',
      userId: 'UserId',
      userIdAlias: 'UserIdAlias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientType: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
      location: 'string',
      network: 'string',
      networkList: { 'type': 'array', 'itemType': 'string' },
      onlineDuration: 'number',
      onlinePeriods: { 'type': 'array', 'itemType': DescribePubUserListBySubUserResponseBodySubUserDetailOnlinePeriods },
      os: 'string',
      osList: { 'type': 'array', 'itemType': 'string' },
      roles: { 'type': 'array', 'itemType': 'string' },
      sdkVersion: 'string',
      sdkVersionList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userIdAlias: 'string',
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
  nodes?: DescribeQoeMetricDataResponseBodyAudioDataNodes[];
  type?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeQoeMetricDataResponseBodyAudioDataNodes },
      type: 'string',
      userId: 'string',
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
  nodes?: DescribeQoeMetricDataResponseBodyVideoDataNodes[];
  type?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeQoeMetricDataResponseBodyVideoDataNodes },
      type: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityAreaDistributionStatDataResponseBodyQualityStatDataList extends $tea.Model {
  audioDelay?: number;
  audioHighQualityTransmissionRate?: string;
  audioSpeakOutDuration?: number;
  audioStuckRate?: string;
  callDurationRatio?: string;
  joinChannelSucFiveSecRate?: string;
  joinChannelSucRate?: string;
  name?: string;
  videoDelay?: number;
  videoFirstPicDuration?: number;
  videoHighQualityTransmissionRate?: string;
  videoStuckRate?: string;
  static names(): { [key: string]: string } {
    return {
      audioDelay: 'AudioDelay',
      audioHighQualityTransmissionRate: 'AudioHighQualityTransmissionRate',
      audioSpeakOutDuration: 'AudioSpeakOutDuration',
      audioStuckRate: 'AudioStuckRate',
      callDurationRatio: 'CallDurationRatio',
      joinChannelSucFiveSecRate: 'JoinChannelSucFiveSecRate',
      joinChannelSucRate: 'JoinChannelSucRate',
      name: 'Name',
      videoDelay: 'VideoDelay',
      videoFirstPicDuration: 'VideoFirstPicDuration',
      videoHighQualityTransmissionRate: 'VideoHighQualityTransmissionRate',
      videoStuckRate: 'VideoStuckRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioDelay: 'number',
      audioHighQualityTransmissionRate: 'string',
      audioSpeakOutDuration: 'number',
      audioStuckRate: 'string',
      callDurationRatio: 'string',
      joinChannelSucFiveSecRate: 'string',
      joinChannelSucRate: 'string',
      name: 'string',
      videoDelay: 'number',
      videoFirstPicDuration: 'number',
      videoHighQualityTransmissionRate: 'string',
      videoStuckRate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityDistributionStatDataResponseBodyQualityStatDataList extends $tea.Model {
  audioDelay?: number;
  audioHighQualityTransmissionRate?: string;
  audioSpeakOutDuration?: number;
  audioStuckRate?: string;
  callDurationRatio?: string;
  joinChannelSucFiveSecRate?: string;
  joinChannelSucRate?: string;
  name?: string;
  videoDelay?: number;
  videoFirstPicDuration?: number;
  videoHighQualityTransmissionRate?: string;
  videoStuckRate?: string;
  static names(): { [key: string]: string } {
    return {
      audioDelay: 'AudioDelay',
      audioHighQualityTransmissionRate: 'AudioHighQualityTransmissionRate',
      audioSpeakOutDuration: 'AudioSpeakOutDuration',
      audioStuckRate: 'AudioStuckRate',
      callDurationRatio: 'CallDurationRatio',
      joinChannelSucFiveSecRate: 'JoinChannelSucFiveSecRate',
      joinChannelSucRate: 'JoinChannelSucRate',
      name: 'Name',
      videoDelay: 'VideoDelay',
      videoFirstPicDuration: 'VideoFirstPicDuration',
      videoHighQualityTransmissionRate: 'VideoHighQualityTransmissionRate',
      videoStuckRate: 'VideoStuckRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioDelay: 'number',
      audioHighQualityTransmissionRate: 'string',
      audioSpeakOutDuration: 'number',
      audioStuckRate: 'string',
      callDurationRatio: 'string',
      joinChannelSucFiveSecRate: 'string',
      joinChannelSucRate: 'string',
      name: 'string',
      videoDelay: 'number',
      videoFirstPicDuration: 'number',
      videoHighQualityTransmissionRate: 'string',
      videoStuckRate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQualityOsSdkVersionDistributionStatDataResponseBodyQualityOsSdkVersionStatDataList extends $tea.Model {
  audioDelay?: number;
  audioHighQualityTransmissionRate?: string;
  audioSpeakOutDuration?: number;
  audioStuckRate?: string;
  callDurationRatio?: string;
  joinChannelSucFiveSecRate?: string;
  joinChannelSucRate?: string;
  name?: string;
  os?: string;
  videoDelay?: number;
  videoFirstPicDuration?: number;
  videoHighQualityTransmissionRate?: string;
  videoStuckRate?: string;
  static names(): { [key: string]: string } {
    return {
      audioDelay: 'AudioDelay',
      audioHighQualityTransmissionRate: 'AudioHighQualityTransmissionRate',
      audioSpeakOutDuration: 'AudioSpeakOutDuration',
      audioStuckRate: 'AudioStuckRate',
      callDurationRatio: 'CallDurationRatio',
      joinChannelSucFiveSecRate: 'JoinChannelSucFiveSecRate',
      joinChannelSucRate: 'JoinChannelSucRate',
      name: 'Name',
      os: 'Os',
      videoDelay: 'VideoDelay',
      videoFirstPicDuration: 'VideoFirstPicDuration',
      videoHighQualityTransmissionRate: 'VideoHighQualityTransmissionRate',
      videoStuckRate: 'VideoStuckRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioDelay: 'number',
      audioHighQualityTransmissionRate: 'string',
      audioSpeakOutDuration: 'number',
      audioStuckRate: 'string',
      callDurationRatio: 'string',
      joinChannelSucFiveSecRate: 'string',
      joinChannelSucRate: 'string',
      name: 'string',
      os: 'string',
      videoDelay: 'number',
      videoFirstPicDuration: 'number',
      videoHighQualityTransmissionRate: 'string',
      videoStuckRate: 'string',
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
  average?: string;
  nodes?: DescribeQualityOverallDataResponseBodyQualityOverallDataNodes[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      average: 'Average',
      nodes: 'Nodes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      average: 'string',
      nodes: { 'type': 'array', 'itemType': DescribeQualityOverallDataResponseBodyQualityOverallDataNodes },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelDetailsResponseBodyChannelInfo extends $tea.Model {
  deviceType?: string;
  joinTime?: string;
  leaveTime?: string;
  OS?: string;
  platform?: string;
  sdkVersion?: string;
  sid?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      deviceType: 'DeviceType',
      joinTime: 'JoinTime',
      leaveTime: 'LeaveTime',
      OS: 'OS',
      platform: 'Platform',
      sdkVersion: 'SdkVersion',
      sid: 'Sid',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceType: 'string',
      joinTime: 'string',
      leaveTime: 'string',
      OS: 'string',
      platform: 'string',
      sdkVersion: 'string',
      sid: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelListResponseBodyChannels extends $tea.Model {
  channelId?: string;
  endTime?: string;
  finished?: boolean;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      endTime: 'EndTime',
      finished: 'Finished',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      endTime: 'string',
      finished: 'boolean',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricListResponseBodyMetrics extends $tea.Model {
  KVs?: { [key: string]: any };
  mid?: number;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      KVs: 'KVs',
      mid: 'Mid',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      KVs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      mid: 'number',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelUsersResponseBodyUserListUserList extends $tea.Model {
  channel?: string;
  endTime?: string;
  location?: string;
  pubAudio?: number;
  pubContent?: number;
  pubVideo1080?: number;
  pubVideo360?: number;
  pubVideo720?: number;
  serviceArea?: string;
  startTime?: string;
  subAudio?: number;
  subContent?: number;
  subVideo1080?: number;
  subVideo360?: number;
  subVideo720?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      endTime: 'EndTime',
      location: 'Location',
      pubAudio: 'PubAudio',
      pubContent: 'PubContent',
      pubVideo1080: 'PubVideo1080',
      pubVideo360: 'PubVideo360',
      pubVideo720: 'PubVideo720',
      serviceArea: 'ServiceArea',
      startTime: 'StartTime',
      subAudio: 'SubAudio',
      subContent: 'SubContent',
      subVideo1080: 'SubVideo1080',
      subVideo360: 'SubVideo360',
      subVideo720: 'SubVideo720',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      endTime: 'string',
      location: 'string',
      pubAudio: 'number',
      pubContent: 'number',
      pubVideo1080: 'number',
      pubVideo360: 'number',
      pubVideo720: 'number',
      serviceArea: 'string',
      startTime: 'string',
      subAudio: 'number',
      subContent: 'number',
      subVideo1080: 'number',
      subVideo360: 'number',
      subVideo720: 'number',
      userId: 'string',
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

export class DescribeRtcRecordMetricDataResponseBodyRtcRecordMetricData extends $tea.Model {
  duration?: number;
  ratio?: string;
  serviceArea?: string;
  taskProfile?: string;
  timeStamp?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      ratio: 'Ratio',
      serviceArea: 'ServiceArea',
      taskProfile: 'TaskProfile',
      timeStamp: 'TimeStamp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      ratio: 'string',
      serviceArea: 'string',
      taskProfile: 'string',
      timeStamp: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcUserEventListResponseBodyEvents extends $tea.Model {
  category?: string;
  eventId?: number;
  eventTime?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      eventId: 'EventId',
      eventTime: 'EventTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      eventId: 'number',
      eventTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageAreaDistributionStatDataResponseBodyUsageAreaStatList extends $tea.Model {
  audioCallDuration?: number;
  name?: string;
  totalCallDuration?: number;
  videoCallDuration?: number;
  static names(): { [key: string]: string } {
    return {
      audioCallDuration: 'AudioCallDuration',
      name: 'Name',
      totalCallDuration: 'TotalCallDuration',
      videoCallDuration: 'VideoCallDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioCallDuration: 'number',
      name: 'string',
      totalCallDuration: 'number',
      videoCallDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageDistributionStatDataResponseBodyUsageStatList extends $tea.Model {
  audioCallDuration?: number;
  callDurationRatio?: string;
  name?: string;
  totalCallDuration?: number;
  videoCallDuration?: number;
  static names(): { [key: string]: string } {
    return {
      audioCallDuration: 'AudioCallDuration',
      callDurationRatio: 'CallDurationRatio',
      name: 'Name',
      totalCallDuration: 'TotalCallDuration',
      videoCallDuration: 'VideoCallDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioCallDuration: 'number',
      callDurationRatio: 'string',
      name: 'string',
      totalCallDuration: 'number',
      videoCallDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOsSdkVersionDistributionStatDataResponseBodyUsageOsSdkVersionStatList extends $tea.Model {
  audioCallDuration?: number;
  callDurationRatio?: string;
  name?: string;
  os?: string;
  totalCallDuration?: number;
  videoCallDuration?: number;
  static names(): { [key: string]: string } {
    return {
      audioCallDuration: 'AudioCallDuration',
      callDurationRatio: 'CallDurationRatio',
      name: 'Name',
      os: 'Os',
      totalCallDuration: 'TotalCallDuration',
      videoCallDuration: 'VideoCallDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioCallDuration: 'number',
      callDurationRatio: 'string',
      name: 'string',
      os: 'string',
      totalCallDuration: 'number',
      videoCallDuration: 'number',
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
  nodes?: DescribeUsageOverallDataResponseBodyUsageOverallDataNodes[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeUsageOverallDataResponseBodyUsageOverallDataNodes },
      type: 'string',
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
    let params = new $OpenApi.Params({
      action: "DeleteAppExpMetricRule",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/config/deleteAppExpMetricRule`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppExpMetricRuleResponse>(await this.callApi(params, req, runtime), new DeleteAppExpMetricRuleResponse({}));
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
    let params = new $OpenApi.Params({
      action: "DeleteAppFollowCallRule",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/config/deleteAppFollowCallRule`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppFollowCallRuleResponse>(await this.callApi(params, req, runtime), new DeleteAppFollowCallRuleResponse({}));
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
    let params = new $OpenApi.Params({
      action: "DescribeAppConfig",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/config/describeAppConfig`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppConfigResponse>(await this.callApi(params, req, runtime), new DescribeAppConfigResponse({}));
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
    let params = new $OpenApi.Params({
      action: "DescribeAppExpMetricRule",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/config/describeAppExpMetricRule`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppExpMetricRuleResponse>(await this.callApi(params, req, runtime), new DescribeAppExpMetricRuleResponse({}));
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
    let params = new $OpenApi.Params({
      action: "DescribeAppExpMetricRuleList",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/config/describeAppExpMetricRuleList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppExpMetricRuleListResponse>(await this.callApi(params, req, runtime), new DescribeAppExpMetricRuleListResponse({}));
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
    let params = new $OpenApi.Params({
      action: "DescribeAppFollowCallRule",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/config/describeAppFollowCallRule`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppFollowCallRuleResponse>(await this.callApi(params, req, runtime), new DescribeAppFollowCallRuleResponse({}));
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
    let params = new $OpenApi.Params({
      action: "DescribeAppFollowCallRuleList",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/config/describeAppFollowCallRuleList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeAppFollowCallRuleListResponse>(await this.callApi(params, req, runtime), new DescribeAppFollowCallRuleListResponse({}));
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
    let params = new $OpenApi.Params({
      action: "DescribeCall",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/call/describeCall`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeCallResponse>(await this.callApi(params, req, runtime), new DescribeCallResponse({}));
  }

  async describeCallInfo(request: DescribeCallInfoRequest): Promise<DescribeCallInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeCallInfoWithOptions(request, headers, runtime);
  }

  async describeCallInfoWithOptions(request: DescribeCallInfoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeCallInfoResponse> {
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
    let params = new $OpenApi.Params({
      action: "DescribeCallInfo",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/call/describeCallInfo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeCallInfoResponse>(await this.callApi(params, req, runtime), new DescribeCallInfoResponse({}));
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

    if (!Util.isUnset(request.callStatus)) {
      query["CallStatus"] = request.callStatus;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryMode)) {
      query["QueryMode"] = request.queryMode;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCallList",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/call/describeCallList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeCallListResponse>(await this.callApi(params, req, runtime), new DescribeCallListResponse({}));
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

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCallListTest",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/call/describeCallListTest`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeCallListTestResponse>(await this.callApi(params, req, runtime), new DescribeCallListTestResponse({}));
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
    let params = new $OpenApi.Params({
      action: "DescribeCallUserExp",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/call/describeCallUserExp`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeCallUserExpResponse>(await this.callApi(params, req, runtime), new DescribeCallUserExpResponse({}));
  }

  async describeCallUserList(request: DescribeCallUserListRequest): Promise<DescribeCallUserListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeCallUserListWithOptions(request, headers, runtime);
  }

  async describeCallUserListWithOptions(request: DescribeCallUserListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeCallUserListResponse> {
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

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryExpInfo)) {
      query["QueryExpInfo"] = request.queryExpInfo;
    }

    if (!Util.isUnset(request.roleType)) {
      query["RoleType"] = request.roleType;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCallUserList",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/call/describeCallUserList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeCallUserListResponse>(await this.callApi(params, req, runtime), new DescribeCallUserListResponse({}));
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
    let params = new $OpenApi.Params({
      action: "DescribeChannelAreaDistributionStatData",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/channel/describeChannelAreaDistributionStatData`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeChannelAreaDistributionStatDataResponse>(await this.callApi(params, req, runtime), new DescribeChannelAreaDistributionStatDataResponse({}));
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
    let params = new $OpenApi.Params({
      action: "DescribeChannelDistributionStatData",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/channel/describeChannelDistributionStatData`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeChannelDistributionStatDataResponse>(await this.callApi(params, req, runtime), new DescribeChannelDistributionStatDataResponse({}));
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
    let params = new $OpenApi.Params({
      action: "DescribeChannelJoinInfo",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/channel/describeChannelJoinInfo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeChannelJoinInfoResponse>(await this.callApi(params, req, runtime), new DescribeChannelJoinInfoResponse({}));
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
    let params = new $OpenApi.Params({
      action: "DescribeChannelOverallData",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/channel/describeChannelOverallData`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeChannelOverallDataResponse>(await this.callApi(params, req, runtime), new DescribeChannelOverallDataResponse({}));
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
    let params = new $OpenApi.Params({
      action: "DescribeChannelTopPubUserList",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/channel/describeChannelTopPubUserList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeChannelTopPubUserListResponse>(await this.callApi(params, req, runtime), new DescribeChannelTopPubUserListResponse({}));
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
    let params = new $OpenApi.Params({
      action: "DescribeChannelUserMetrics",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/channel/describeChannelUserMetrics`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeChannelUserMetricsResponse>(await this.callApi(params, req, runtime), new DescribeChannelUserMetricsResponse({}));
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
    let params = new $OpenApi.Params({
      action: "DescribeEndPointEventList",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/call/describeEndPointEventList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeEndPointEventListResponse>(await this.callApi(params, req, runtime), new DescribeEndPointEventListResponse({}));
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

    if (!Util.isUnset(request.metrics)) {
      query["Metrics"] = request.metrics;
    }

    if (!Util.isUnset(request.pubCallIdList)) {
      query["PubCallIdList"] = request.pubCallIdList;
    }

    if (!Util.isUnset(request.pubUserId)) {
      query["PubUserId"] = request.pubUserId;
    }

    if (!Util.isUnset(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEndPointMetricData",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/call/describeEndPointMetricData`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeEndPointMetricDataResponse>(await this.callApi(params, req, runtime), new DescribeEndPointMetricDataResponse({}));
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

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFaultDiagnosisFactorDistributionStat",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/diagnosis/describeFaultDiagnosisFactorDistributionStat`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeFaultDiagnosisFactorDistributionStatResponse>(await this.callApi(params, req, runtime), new DescribeFaultDiagnosisFactorDistributionStatResponse({}));
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

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    if (!Util.isUnset(request.statDim)) {
      query["StatDim"] = request.statDim;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFaultDiagnosisOverallData",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/diagnosis/describeFaultDiagnosisOverallData`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeFaultDiagnosisOverallDataResponse>(await this.callApi(params, req, runtime), new DescribeFaultDiagnosisOverallDataResponse({}));
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

    if (!Util.isUnset(request.faultType)) {
      query["FaultType"] = request.faultType;
    }

    if (!Util.isUnset(request.queryCallUserInfo)) {
      query["QueryCallUserInfo"] = request.queryCallUserInfo;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFaultDiagnosisUserDetail",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/diagnosis/describeFaultDiagnosisUserDetail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeFaultDiagnosisUserDetailResponse>(await this.callApi(params, req, runtime), new DescribeFaultDiagnosisUserDetailResponse({}));
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

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
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

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFaultDiagnosisUserList",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/diagnosis/describeFaultDiagnosisUserList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeFaultDiagnosisUserListResponse>(await this.callApi(params, req, runtime), new DescribeFaultDiagnosisUserListResponse({}));
  }

  async describeIceDurPeriodByDaySubType(request: DescribeIceDurPeriodByDaySubTypeRequest): Promise<DescribeIceDurPeriodByDaySubTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeIceDurPeriodByDaySubTypeWithOptions(request, headers, runtime);
  }

  async describeIceDurPeriodByDaySubTypeWithOptions(request: DescribeIceDurPeriodByDaySubTypeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeIceDurPeriodByDaySubTypeResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!Util.isUnset(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    if (!Util.isUnset(request.timeZone)) {
      query["TimeZone"] = request.timeZone;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeIceDurPeriodByDaySubType",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/ice/describeIceDurPeriodByDaySubType`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeIceDurPeriodByDaySubTypeResponse>(await this.callApi(params, req, runtime), new DescribeIceDurPeriodByDaySubTypeResponse({}));
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
    let params = new $OpenApi.Params({
      action: "DescribeIceDurSummaryOverview",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/ice/describeIceDurSummaryOverview`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeIceDurSummaryOverviewResponse>(await this.callApi(params, req, runtime), new DescribeIceDurSummaryOverviewResponse({}));
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
    let params = new $OpenApi.Params({
      action: "DescribePubUserListBySubUser",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/call/describePubUserListBySubUser`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribePubUserListBySubUserResponse>(await this.callApi(params, req, runtime), new DescribePubUserListBySubUserResponse({}));
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
    let params = new $OpenApi.Params({
      action: "DescribeQoeMetricData",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/call/describeQoeMetricData`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeQoeMetricDataResponse>(await this.callApi(params, req, runtime), new DescribeQoeMetricDataResponse({}));
  }

  async describeQualityAreaDistributionStatData(request: DescribeQualityAreaDistributionStatDataRequest): Promise<DescribeQualityAreaDistributionStatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeQualityAreaDistributionStatDataWithOptions(request, headers, runtime);
  }

  async describeQualityAreaDistributionStatDataWithOptions(request: DescribeQualityAreaDistributionStatDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeQualityAreaDistributionStatDataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.parentArea)) {
      query["ParentArea"] = request.parentArea;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeQualityAreaDistributionStatData",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/quality/describeQualityAreaDistributionStatData`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeQualityAreaDistributionStatDataResponse>(await this.callApi(params, req, runtime), new DescribeQualityAreaDistributionStatDataResponse({}));
  }

  async describeQualityDistributionStatData(request: DescribeQualityDistributionStatDataRequest): Promise<DescribeQualityDistributionStatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeQualityDistributionStatDataWithOptions(request, headers, runtime);
  }

  async describeQualityDistributionStatDataWithOptions(request: DescribeQualityDistributionStatDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeQualityDistributionStatDataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.statDim)) {
      query["StatDim"] = request.statDim;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeQualityDistributionStatData",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/quality/describeQualityDistributionStatData`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeQualityDistributionStatDataResponse>(await this.callApi(params, req, runtime), new DescribeQualityDistributionStatDataResponse({}));
  }

  async describeQualityOsSdkVersionDistributionStatData(request: DescribeQualityOsSdkVersionDistributionStatDataRequest): Promise<DescribeQualityOsSdkVersionDistributionStatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeQualityOsSdkVersionDistributionStatDataWithOptions(request, headers, runtime);
  }

  async describeQualityOsSdkVersionDistributionStatDataWithOptions(request: DescribeQualityOsSdkVersionDistributionStatDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeQualityOsSdkVersionDistributionStatDataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeQualityOsSdkVersionDistributionStatData",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/quality/describeQualityOsSdkVersionDistributionStatData`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeQualityOsSdkVersionDistributionStatDataResponse>(await this.callApi(params, req, runtime), new DescribeQualityOsSdkVersionDistributionStatDataResponse({}));
  }

  async describeQualityOverallData(request: DescribeQualityOverallDataRequest): Promise<DescribeQualityOverallDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeQualityOverallDataWithOptions(request, headers, runtime);
  }

  async describeQualityOverallDataWithOptions(request: DescribeQualityOverallDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeQualityOverallDataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.types)) {
      query["Types"] = request.types;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeQualityOverallData",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/quality/describeQualityOverallData`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeQualityOverallDataResponse>(await this.callApi(params, req, runtime), new DescribeQualityOverallDataResponse({}));
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

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRtcChannelDetails",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/channel/describeRtcChannelDetails`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeRtcChannelDetailsResponse>(await this.callApi(params, req, runtime), new DescribeRtcChannelDetailsResponse({}));
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

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRtcChannelList",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/channel/describeRtcChannelList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeRtcChannelListResponse>(await this.callApi(params, req, runtime), new DescribeRtcChannelListResponse({}));
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

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pubUid)) {
      query["PubUid"] = request.pubUid;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.subUid)) {
      query["SubUid"] = request.subUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRtcChannelMetricList",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/call/describeRtcChannelMetricList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeRtcChannelMetricListResponse>(await this.callApi(params, req, runtime), new DescribeRtcChannelMetricListResponse({}));
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

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.timePoint)) {
      query["TimePoint"] = request.timePoint;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRtcChannelUsers",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/channel/describeRtcChannelUsers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeRtcChannelUsersResponse>(await this.callApi(params, req, runtime), new DescribeRtcChannelUsersResponse({}));
  }

  async describeRtcRecordMetricData(request: DescribeRtcRecordMetricDataRequest): Promise<DescribeRtcRecordMetricDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRtcRecordMetricDataWithOptions(request, headers, runtime);
  }

  async describeRtcRecordMetricDataWithOptions(request: DescribeRtcRecordMetricDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeRtcRecordMetricDataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.serviceArea)) {
      query["ServiceArea"] = request.serviceArea;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRtcRecordMetricData",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/record/describeRtcRecordMetricData`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeRtcRecordMetricDataResponse>(await this.callApi(params, req, runtime), new DescribeRtcRecordMetricDataResponse({}));
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

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRtcUserEventList",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/call/describeRtcUserEventList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeRtcUserEventListResponse>(await this.callApi(params, req, runtime), new DescribeRtcUserEventListResponse({}));
  }

  async describeUsageAreaDistributionStatData(request: DescribeUsageAreaDistributionStatDataRequest): Promise<DescribeUsageAreaDistributionStatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeUsageAreaDistributionStatDataWithOptions(request, headers, runtime);
  }

  async describeUsageAreaDistributionStatDataWithOptions(request: DescribeUsageAreaDistributionStatDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeUsageAreaDistributionStatDataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.parentArea)) {
      query["ParentArea"] = request.parentArea;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUsageAreaDistributionStatData",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/usage/describeUsageAreaDistributionStatData`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeUsageAreaDistributionStatDataResponse>(await this.callApi(params, req, runtime), new DescribeUsageAreaDistributionStatDataResponse({}));
  }

  async describeUsageDistributionStatData(request: DescribeUsageDistributionStatDataRequest): Promise<DescribeUsageDistributionStatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeUsageDistributionStatDataWithOptions(request, headers, runtime);
  }

  async describeUsageDistributionStatDataWithOptions(request: DescribeUsageDistributionStatDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeUsageDistributionStatDataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.statDim)) {
      query["StatDim"] = request.statDim;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUsageDistributionStatData",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/usage/describeUsageDistributionStatData`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeUsageDistributionStatDataResponse>(await this.callApi(params, req, runtime), new DescribeUsageDistributionStatDataResponse({}));
  }

  async describeUsageOsSdkVersionDistributionStatData(request: DescribeUsageOsSdkVersionDistributionStatDataRequest): Promise<DescribeUsageOsSdkVersionDistributionStatDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeUsageOsSdkVersionDistributionStatDataWithOptions(request, headers, runtime);
  }

  async describeUsageOsSdkVersionDistributionStatDataWithOptions(request: DescribeUsageOsSdkVersionDistributionStatDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeUsageOsSdkVersionDistributionStatDataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUsageOsSdkVersionDistributionStatData",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/usage/describeUsageOsSdkVersionDistributionStatData`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeUsageOsSdkVersionDistributionStatDataResponse>(await this.callApi(params, req, runtime), new DescribeUsageOsSdkVersionDistributionStatDataResponse({}));
  }

  async describeUsageOverallData(request: DescribeUsageOverallDataRequest): Promise<DescribeUsageOverallDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeUsageOverallDataWithOptions(request, headers, runtime);
  }

  async describeUsageOverallDataWithOptions(request: DescribeUsageOverallDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeUsageOverallDataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.types)) {
      query["Types"] = request.types;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUsageOverallData",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/usage/describeUsageOverallData`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeUsageOverallDataResponse>(await this.callApi(params, req, runtime), new DescribeUsageOverallDataResponse({}));
  }

  async updateAppExpMetricRule(request: UpdateAppExpMetricRuleRequest): Promise<UpdateAppExpMetricRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAppExpMetricRuleWithOptions(request, headers, runtime);
  }

  async updateAppExpMetricRuleWithOptions(request: UpdateAppExpMetricRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateAppExpMetricRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.rule)) {
      query["Rule"] = request.rule;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAppExpMetricRule",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/config/updateAppExpMetricRule`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateAppExpMetricRuleResponse>(await this.callApi(params, req, runtime), new UpdateAppExpMetricRuleResponse({}));
  }

  async updateAppFollowCallRule(request: UpdateAppFollowCallRuleRequest): Promise<UpdateAppFollowCallRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAppFollowCallRuleWithOptions(request, headers, runtime);
  }

  async updateAppFollowCallRuleWithOptions(request: UpdateAppFollowCallRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateAppFollowCallRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.rule)) {
      query["Rule"] = request.rule;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAppFollowCallRule",
      version: "2020-12-14",
      protocol: "HTTPS",
      pathname: `/api/config/updateAppFollowCallRule`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateAppFollowCallRuleResponse>(await this.callApi(params, req, runtime), new UpdateAppFollowCallRuleResponse({}));
  }

}
