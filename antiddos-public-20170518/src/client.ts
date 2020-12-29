// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DescribeBgpPackByIpRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  ddosRegionId?: string;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      ddosRegionId: 'DdosRegionId',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      ddosRegionId: 'string',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpPackByIpResponseBody extends $tea.Model {
  ddosbgpInfo?: DescribeBgpPackByIpResponseBodyDdosbgpInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ddosbgpInfo: 'DdosbgpInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosbgpInfo: DescribeBgpPackByIpResponseBodyDdosbgpInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpPackByIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBgpPackByIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBgpPackByIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpPackElasticThresholdRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  ddosRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      ddosRegionId: 'DdosRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      ddosRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpPackElasticThresholdResponseBody extends $tea.Model {
  maxThreshold?: number;
  requestId?: string;
  openable?: boolean;
  static names(): { [key: string]: string } {
    return {
      maxThreshold: 'MaxThreshold',
      requestId: 'RequestId',
      openable: 'Openable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxThreshold: 'number',
      requestId: 'string',
      openable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpPackElasticThresholdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBgpPackElasticThresholdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBgpPackElasticThresholdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  ddosRegionId?: string;
  instanceType?: string;
  instanceId?: string;
  begTime?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      ddosRegionId: 'DdosRegionId',
      instanceType: 'InstanceType',
      instanceId: 'InstanceId',
      begTime: 'BegTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      ddosRegionId: 'string',
      instanceType: 'string',
      instanceId: 'string',
      begTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapResponseBody extends $tea.Model {
  capUrl?: DescribeCapResponseBodyCapUrl;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      capUrl: 'CapUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capUrl: DescribeCapResponseBodyCapUrl,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCapResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCapResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCreditInfoRequest extends $tea.Model {
  sourceIp?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCreditInfoResponseBody extends $tea.Model {
  punishTimes?: number;
  lastOrderTime?: number;
  lastLoginTime?: number;
  requestId?: string;
  userLevel?: string;
  blackTimes?: number;
  newCreatetime?: string;
  duration?: number;
  productid?: string[];
  static names(): { [key: string]: string } {
    return {
      punishTimes: 'PunishTimes',
      lastOrderTime: 'LastOrderTime',
      lastLoginTime: 'LastLoginTime',
      requestId: 'RequestId',
      userLevel: 'UserLevel',
      blackTimes: 'BlackTimes',
      newCreatetime: 'NewCreatetime',
      duration: 'Duration',
      productid: 'Productid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      punishTimes: 'number',
      lastOrderTime: 'number',
      lastLoginTime: 'number',
      requestId: 'string',
      userLevel: 'string',
      blackTimes: 'number',
      newCreatetime: 'string',
      duration: 'number',
      productid: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCreditInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCreditInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCreditInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosCountRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  ddosRegionId?: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      ddosRegionId: 'DdosRegionId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      ddosRegionId: 'string',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosCountResponseBody extends $tea.Model {
  ddosCount?: DescribeDdosCountResponseBodyDdosCount;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ddosCount: 'DdosCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosCount: DescribeDdosCountResponseBodyDdosCount,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDdosCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDdosCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosCreditRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  ddosRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      ddosRegionId: 'DdosRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      ddosRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosCreditResponseBody extends $tea.Model {
  requestId?: string;
  ddosCredit?: DescribeDdosCreditResponseBodyDdosCredit;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ddosCredit: 'DdosCredit',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ddosCredit: DescribeDdosCreditResponseBodyDdosCredit,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosCreditResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDdosCreditResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDdosCreditResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosEventListRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  ddosRegionId?: string;
  instanceType?: string;
  instanceId?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      ddosRegionId: 'DdosRegionId',
      instanceType: 'InstanceType',
      instanceId: 'InstanceId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      ddosRegionId: 'string',
      instanceType: 'string',
      instanceId: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosEventListResponseBody extends $tea.Model {
  ddosEventList?: DescribeDdosEventListResponseBodyDdosEventList[];
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      ddosEventList: 'DdosEventList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosEventList: { 'type': 'array', 'itemType': DescribeDdosEventListResponseBodyDdosEventList },
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosEventListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDdosEventListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDdosEventListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosThresholdRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  ddosRegionId?: string;
  ddosType?: string;
  instanceType?: string;
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      ddosRegionId: 'DdosRegionId',
      ddosType: 'DdosType',
      instanceType: 'InstanceType',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      ddosRegionId: 'string',
      ddosType: 'string',
      instanceType: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosThresholdResponseBody extends $tea.Model {
  requestId?: string;
  thresholds?: DescribeDdosThresholdResponseBodyThresholds[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      thresholds: 'Thresholds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      thresholds: { 'type': 'array', 'itemType': DescribeDdosThresholdResponseBodyThresholds },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosThresholdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDdosThresholdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDdosThresholdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexibleProtectionFlowRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  days?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      days: 'Days',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      days: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexibleProtectionFlowResponseBody extends $tea.Model {
  requestId?: string;
  flows?: DescribeFlexibleProtectionFlowResponseBodyFlows[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      flows: 'Flows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      flows: { 'type': 'array', 'itemType': DescribeFlexibleProtectionFlowResponseBodyFlows },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexibleProtectionFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlexibleProtectionFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlexibleProtectionFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowgraphRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  eagleEyeTraceId?: string;
  eagleEyeRpcId?: string;
  eagleEyeUserData?: string;
  ddosRegionId?: string;
  instanceType?: string;
  instanceId?: string;
  days?: number;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      eagleEyeTraceId: 'eagleEyeTraceId',
      eagleEyeRpcId: 'eagleEyeRpcId',
      eagleEyeUserData: 'eagleEyeUserData',
      ddosRegionId: 'DdosRegionId',
      instanceType: 'InstanceType',
      instanceId: 'InstanceId',
      days: 'Days',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      eagleEyeTraceId: 'string',
      eagleEyeRpcId: 'string',
      eagleEyeUserData: 'string',
      ddosRegionId: 'string',
      instanceType: 'string',
      instanceId: 'string',
      days: 'number',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowgraphResponseBody extends $tea.Model {
  flowgraphs?: DescribeFlowgraphResponseBodyFlowgraphs[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      flowgraphs: 'Flowgraphs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowgraphs: { 'type': 'array', 'itemType': DescribeFlowgraphResponseBodyFlowgraphs },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowgraphResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowgraphResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowgraphResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionDdosThresholdRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  ddosRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      ddosRegionId: 'DdosRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      ddosRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionDdosThresholdResponseBody extends $tea.Model {
  requestId?: string;
  regionDdosThreshold?: DescribeRegionDdosThresholdResponseBodyRegionDdosThreshold;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regionDdosThreshold: 'RegionDdosThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regionDdosThreshold: DescribeRegionDdosThresholdResponseBodyRegionDdosThreshold,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionDdosThresholdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionDdosThresholdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionDdosThresholdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeRegionsResponseBodyRegions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficInfoRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficInfoResponseBody extends $tea.Model {
  requestId?: string;
  trafficInfo?: DescribeTrafficInfoResponseBodyTrafficInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficInfo: 'TrafficInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficInfo: DescribeTrafficInfoResponseBodyTrafficInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTrafficInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTrafficInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDdosStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  ddosRegionId?: string;
  instanceType?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      ddosRegionId: 'DdosRegionId',
      instanceType: 'InstanceType',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      ddosRegionId: 'string',
      instanceType: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDdosStatusResponseBody extends $tea.Model {
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

export class ModifyDdosStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDdosStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDdosStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseThresholdRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  ddosRegionId?: string;
  instanceType?: string;
  instanceId?: string;
  bps?: number;
  pps?: number;
  isAuto?: boolean;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      ddosRegionId: 'DdosRegionId',
      instanceType: 'InstanceType',
      instanceId: 'InstanceId',
      bps: 'Bps',
      pps: 'Pps',
      isAuto: 'IsAuto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      ddosRegionId: 'string',
      instanceType: 'string',
      instanceId: 'string',
      bps: 'number',
      pps: 'number',
      isAuto: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDefenseThresholdResponseBody extends $tea.Model {
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

export class ModifyDefenseThresholdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDefenseThresholdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDefenseThresholdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpPackByIpResponseBodyDdosbgpInfo extends $tea.Model {
  expireTime?: number;
  elasticThreshold?: number;
  ip?: string;
  baseThreshold?: number;
  ddosbgpInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      elasticThreshold: 'ElasticThreshold',
      ip: 'Ip',
      baseThreshold: 'BaseThreshold',
      ddosbgpInstanceId: 'DdosbgpInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
      elasticThreshold: 'number',
      ip: 'string',
      baseThreshold: 'number',
      ddosbgpInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapResponseBodyCapUrl extends $tea.Model {
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

export class DescribeDdosCountResponseBodyDdosCount extends $tea.Model {
  defenseCount?: number;
  blackholeCount?: number;
  instacenCount?: number;
  static names(): { [key: string]: string } {
    return {
      defenseCount: 'DefenseCount',
      blackholeCount: 'BlackholeCount',
      instacenCount: 'InstacenCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseCount: 'number',
      blackholeCount: 'number',
      instacenCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosCreditResponseBodyDdosCredit extends $tea.Model {
  score?: number;
  scoreLevel?: string;
  blackholeTime?: number;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      scoreLevel: 'ScoreLevel',
      blackholeTime: 'BlackholeTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      scoreLevel: 'string',
      blackholeTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosEventListResponseBodyDdosEventList extends $tea.Model {
  ddosType?: string;
  endTime?: number;
  startTime?: number;
  delayTime?: number;
  ddosStatus?: string;
  unBlackholeTime?: number;
  static names(): { [key: string]: string } {
    return {
      ddosType: 'DdosType',
      endTime: 'EndTime',
      startTime: 'StartTime',
      delayTime: 'DelayTime',
      ddosStatus: 'DdosStatus',
      unBlackholeTime: 'UnBlackholeTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosType: 'string',
      endTime: 'number',
      startTime: 'number',
      delayTime: 'number',
      ddosStatus: 'string',
      unBlackholeTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosThresholdResponseBodyThresholds extends $tea.Model {
  ddosType?: string;
  isAuto?: boolean;
  maxBps?: number;
  elasticBps?: number;
  instanceId?: string;
  bps?: number;
  pps?: number;
  maxPps?: number;
  static names(): { [key: string]: string } {
    return {
      ddosType: 'DdosType',
      isAuto: 'IsAuto',
      maxBps: 'MaxBps',
      elasticBps: 'ElasticBps',
      instanceId: 'InstanceId',
      bps: 'Bps',
      pps: 'Pps',
      maxPps: 'MaxPps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosType: 'string',
      isAuto: 'boolean',
      maxBps: 'number',
      elasticBps: 'number',
      instanceId: 'string',
      bps: 'number',
      pps: 'number',
      maxPps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlexibleProtectionFlowResponseBodyFlows extends $tea.Model {
  usedFlow?: number;
  time?: number;
  addFlow?: number;
  useableFlow?: number;
  static names(): { [key: string]: string } {
    return {
      usedFlow: 'UsedFlow',
      time: 'Time',
      addFlow: 'AddFlow',
      useableFlow: 'UseableFlow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usedFlow: 'number',
      time: 'number',
      addFlow: 'number',
      useableFlow: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowgraphResponseBodyFlowgraphs extends $tea.Model {
  time?: number;
  bps?: number;
  pps?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      bps: 'Bps',
      pps: 'Pps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      bps: 'number',
      pps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionDdosThresholdResponseBodyRegionDdosThreshold extends $tea.Model {
  elasticThreshold?: number;
  baseThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      elasticThreshold: 'ElasticThreshold',
      baseThreshold: 'BaseThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticThreshold: 'number',
      baseThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  regionEnName?: string;
  regionName?: string;
  regionNo?: string;
  regionNoAlias?: string;
  static names(): { [key: string]: string } {
    return {
      regionEnName: 'RegionEnName',
      regionName: 'RegionName',
      regionNo: 'RegionNo',
      regionNoAlias: 'RegionNoAlias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionEnName: 'string',
      regionName: 'string',
      regionNo: 'string',
      regionNoAlias: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficInfoResponseBodyTrafficInfo extends $tea.Model {
  lastUsedTraffic?: number;
  addTraffic?: number;
  usableTraffic?: number;
  static names(): { [key: string]: string } {
    return {
      lastUsedTraffic: 'LastUsedTraffic',
      addTraffic: 'AddTraffic',
      usableTraffic: 'UsableTraffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastUsedTraffic: 'number',
      addTraffic: 'number',
      usableTraffic: 'number',
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
    this._endpoint = this.getEndpoint("antiddos-public", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async describeBgpPackByIpWithOptions(request: DescribeBgpPackByIpRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBgpPackByIpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBgpPackByIpResponse>(await this.doRPCRequest("DescribeBgpPackByIp", "2017-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBgpPackByIpResponse({}));
  }

  async describeBgpPackByIp(request: DescribeBgpPackByIpRequest): Promise<DescribeBgpPackByIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBgpPackByIpWithOptions(request, runtime);
  }

  async describeBgpPackElasticThresholdWithOptions(request: DescribeBgpPackElasticThresholdRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBgpPackElasticThresholdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBgpPackElasticThresholdResponse>(await this.doRPCRequest("DescribeBgpPackElasticThreshold", "2017-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBgpPackElasticThresholdResponse({}));
  }

  async describeBgpPackElasticThreshold(request: DescribeBgpPackElasticThresholdRequest): Promise<DescribeBgpPackElasticThresholdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBgpPackElasticThresholdWithOptions(request, runtime);
  }

  async describeCapWithOptions(request: DescribeCapRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCapResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCapResponse>(await this.doRPCRequest("DescribeCap", "2017-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCapResponse({}));
  }

  async describeCap(request: DescribeCapRequest): Promise<DescribeCapResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCapWithOptions(request, runtime);
  }

  async describeCreditInfoWithOptions(request: DescribeCreditInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCreditInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCreditInfoResponse>(await this.doRPCRequest("DescribeCreditInfo", "2017-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCreditInfoResponse({}));
  }

  async describeCreditInfo(request: DescribeCreditInfoRequest): Promise<DescribeCreditInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCreditInfoWithOptions(request, runtime);
  }

  async describeDdosCountWithOptions(request: DescribeDdosCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDdosCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDdosCountResponse>(await this.doRPCRequest("DescribeDdosCount", "2017-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDdosCountResponse({}));
  }

  async describeDdosCount(request: DescribeDdosCountRequest): Promise<DescribeDdosCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDdosCountWithOptions(request, runtime);
  }

  async describeDdosCreditWithOptions(request: DescribeDdosCreditRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDdosCreditResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDdosCreditResponse>(await this.doRPCRequest("DescribeDdosCredit", "2017-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDdosCreditResponse({}));
  }

  async describeDdosCredit(request: DescribeDdosCreditRequest): Promise<DescribeDdosCreditResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDdosCreditWithOptions(request, runtime);
  }

  async describeDdosEventListWithOptions(request: DescribeDdosEventListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDdosEventListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDdosEventListResponse>(await this.doRPCRequest("DescribeDdosEventList", "2017-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDdosEventListResponse({}));
  }

  async describeDdosEventList(request: DescribeDdosEventListRequest): Promise<DescribeDdosEventListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDdosEventListWithOptions(request, runtime);
  }

  async describeDdosThresholdWithOptions(request: DescribeDdosThresholdRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDdosThresholdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDdosThresholdResponse>(await this.doRPCRequest("DescribeDdosThreshold", "2017-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDdosThresholdResponse({}));
  }

  async describeDdosThreshold(request: DescribeDdosThresholdRequest): Promise<DescribeDdosThresholdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDdosThresholdWithOptions(request, runtime);
  }

  async describeFlexibleProtectionFlowWithOptions(request: DescribeFlexibleProtectionFlowRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlexibleProtectionFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlexibleProtectionFlowResponse>(await this.doRPCRequest("DescribeFlexibleProtectionFlow", "2017-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlexibleProtectionFlowResponse({}));
  }

  async describeFlexibleProtectionFlow(request: DescribeFlexibleProtectionFlowRequest): Promise<DescribeFlexibleProtectionFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlexibleProtectionFlowWithOptions(request, runtime);
  }

  async describeFlowgraphWithOptions(request: DescribeFlowgraphRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowgraphResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlowgraphResponse>(await this.doRPCRequest("DescribeFlowgraph", "2017-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlowgraphResponse({}));
  }

  async describeFlowgraph(request: DescribeFlowgraphRequest): Promise<DescribeFlowgraphResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowgraphWithOptions(request, runtime);
  }

  async describeRegionDdosThresholdWithOptions(request: DescribeRegionDdosThresholdRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionDdosThresholdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionDdosThresholdResponse>(await this.doRPCRequest("DescribeRegionDdosThreshold", "2017-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionDdosThresholdResponse({}));
  }

  async describeRegionDdosThreshold(request: DescribeRegionDdosThresholdRequest): Promise<DescribeRegionDdosThresholdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionDdosThresholdWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2017-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeTrafficInfoWithOptions(request: DescribeTrafficInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTrafficInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTrafficInfoResponse>(await this.doRPCRequest("DescribeTrafficInfo", "2017-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTrafficInfoResponse({}));
  }

  async describeTrafficInfo(request: DescribeTrafficInfoRequest): Promise<DescribeTrafficInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTrafficInfoWithOptions(request, runtime);
  }

  async modifyDdosStatusWithOptions(request: ModifyDdosStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDdosStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDdosStatusResponse>(await this.doRPCRequest("ModifyDdosStatus", "2017-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDdosStatusResponse({}));
  }

  async modifyDdosStatus(request: ModifyDdosStatusRequest): Promise<ModifyDdosStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDdosStatusWithOptions(request, runtime);
  }

  async modifyDefenseThresholdWithOptions(request: ModifyDefenseThresholdRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDefenseThresholdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDefenseThresholdResponse>(await this.doRPCRequest("ModifyDefenseThreshold", "2017-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDefenseThresholdResponse({}));
  }

  async modifyDefenseThreshold(request: ModifyDefenseThresholdRequest): Promise<ModifyDefenseThresholdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDefenseThresholdWithOptions(request, runtime);
  }

}
