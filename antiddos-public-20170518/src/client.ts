// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DescribeBgpPackByIpRequest extends $tea.Model {
  ddosRegionId?: string;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      ddosRegionId: 'DdosRegionId',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeCapRequest extends $tea.Model {
  begTime?: number;
  ddosRegionId?: string;
  instanceId?: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      begTime: 'BegTime',
      ddosRegionId: 'DdosRegionId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begTime: 'number',
      ddosRegionId: 'string',
      instanceId: 'string',
      instanceType: 'string',
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

export class DescribeDdosCountRequest extends $tea.Model {
  ddosRegionId?: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      ddosRegionId: 'DdosRegionId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  ddosRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ddosRegionId: 'DdosRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosCreditResponseBody extends $tea.Model {
  ddosCredit?: DescribeDdosCreditResponseBodyDdosCredit;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      ddosCredit: 'DdosCredit',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosCredit: DescribeDdosCreditResponseBodyDdosCredit,
      requestId: 'string',
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
  currentPage?: number;
  ddosRegionId?: string;
  instanceId?: string;
  instanceType?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      ddosRegionId: 'DdosRegionId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      ddosRegionId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosEventListResponseBody extends $tea.Model {
  ddosEventList?: DescribeDdosEventListResponseBodyDdosEventList;
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
      ddosEventList: DescribeDdosEventListResponseBodyDdosEventList,
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
  ddosRegionId?: string;
  ddosType?: string;
  instanceIds?: string[];
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      ddosRegionId: 'DdosRegionId',
      ddosType: 'DdosType',
      instanceIds: 'InstanceIds',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosRegionId: 'string',
      ddosType: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosThresholdResponseBody extends $tea.Model {
  requestId?: string;
  thresholds?: DescribeDdosThresholdResponseBodyThresholds;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      thresholds: 'Thresholds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      thresholds: DescribeDdosThresholdResponseBodyThresholds,
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

export class DescribeInstanceRequest extends $tea.Model {
  currentPage?: number;
  ddosRegionId?: string;
  ddosStatus?: string;
  instanceId?: string;
  instanceIp?: string;
  instanceName?: string;
  instanceType?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      ddosRegionId: 'DdosRegionId',
      ddosStatus: 'DdosStatus',
      instanceId: 'InstanceId',
      instanceIp: 'InstanceIp',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      ddosRegionId: 'string',
      ddosStatus: 'string',
      instanceId: 'string',
      instanceIp: 'string',
      instanceName: 'string',
      instanceType: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBody extends $tea.Model {
  instanceList?: DescribeInstanceResponseBodyInstanceList;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      instanceList: 'InstanceList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceList: DescribeInstanceResponseBodyInstanceList,
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  regions?: DescribeRegionsResponseBodyRegions;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: DescribeRegionsResponseBodyRegions,
      requestId: 'string',
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

export class ModifyDdosStatusRequest extends $tea.Model {
  ddosRegionId?: string;
  instanceId?: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      ddosRegionId: 'DdosRegionId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosRegionId: 'string',
      instanceId: 'string',
      instanceType: 'string',
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
  bps?: number;
  ddosRegionId?: string;
  instanceId?: string;
  instanceType?: string;
  isAuto?: boolean;
  pps?: number;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      ddosRegionId: 'DdosRegionId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      isAuto: 'IsAuto',
      pps: 'Pps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      ddosRegionId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      isAuto: 'boolean',
      pps: 'number',
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
  baseThreshold?: number;
  ddosbgpInstanceId?: string;
  elasticThreshold?: number;
  expireTime?: number;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      baseThreshold: 'BaseThreshold',
      ddosbgpInstanceId: 'DdosbgpInstanceId',
      elasticThreshold: 'ElasticThreshold',
      expireTime: 'ExpireTime',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseThreshold: 'number',
      ddosbgpInstanceId: 'string',
      elasticThreshold: 'number',
      expireTime: 'number',
      ip: 'string',
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
  blackholeCount?: number;
  defenseCount?: number;
  instacenCount?: number;
  static names(): { [key: string]: string } {
    return {
      blackholeCount: 'BlackholeCount',
      defenseCount: 'DefenseCount',
      instacenCount: 'InstacenCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackholeCount: 'number',
      defenseCount: 'number',
      instacenCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosCreditResponseBodyDdosCredit extends $tea.Model {
  blackholeTime?: number;
  score?: number;
  scoreLevel?: string;
  static names(): { [key: string]: string } {
    return {
      blackholeTime: 'BlackholeTime',
      score: 'Score',
      scoreLevel: 'ScoreLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackholeTime: 'number',
      score: 'number',
      scoreLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosEventListResponseBodyDdosEventListDdosEvent extends $tea.Model {
  ddosStatus?: string;
  ddosType?: string;
  delayTime?: number;
  endTime?: number;
  startTime?: number;
  unBlackholeTime?: number;
  static names(): { [key: string]: string } {
    return {
      ddosStatus: 'DdosStatus',
      ddosType: 'DdosType',
      delayTime: 'DelayTime',
      endTime: 'EndTime',
      startTime: 'StartTime',
      unBlackholeTime: 'UnBlackholeTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosStatus: 'string',
      ddosType: 'string',
      delayTime: 'number',
      endTime: 'number',
      startTime: 'number',
      unBlackholeTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosEventListResponseBodyDdosEventList extends $tea.Model {
  ddosEvent?: DescribeDdosEventListResponseBodyDdosEventListDdosEvent[];
  static names(): { [key: string]: string } {
    return {
      ddosEvent: 'DdosEvent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosEvent: { 'type': 'array', 'itemType': DescribeDdosEventListResponseBodyDdosEventListDdosEvent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosThresholdResponseBodyThresholdsThreshold extends $tea.Model {
  bps?: number;
  ddosType?: string;
  elasticBps?: number;
  instanceId?: string;
  isAuto?: boolean;
  maxBps?: number;
  maxPps?: number;
  pps?: number;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      ddosType: 'DdosType',
      elasticBps: 'ElasticBps',
      instanceId: 'InstanceId',
      isAuto: 'IsAuto',
      maxBps: 'MaxBps',
      maxPps: 'MaxPps',
      pps: 'Pps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      ddosType: 'string',
      elasticBps: 'number',
      instanceId: 'string',
      isAuto: 'boolean',
      maxBps: 'number',
      maxPps: 'number',
      pps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosThresholdResponseBodyThresholds extends $tea.Model {
  threshold?: DescribeDdosThresholdResponseBodyThresholdsThreshold[];
  static names(): { [key: string]: string } {
    return {
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      threshold: { 'type': 'array', 'itemType': DescribeDdosThresholdResponseBodyThresholdsThreshold },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyInstanceListInstance extends $tea.Model {
  blackholeThreshold?: number;
  defenseBpsThreshold?: number;
  defensePpsThreshold?: number;
  elasticThreshold?: number;
  instanceId?: string;
  instanceIp?: string;
  instanceName?: string;
  instanceStatus?: string;
  instanceType?: string;
  ipVersion?: string;
  isBgppack?: boolean;
  static names(): { [key: string]: string } {
    return {
      blackholeThreshold: 'BlackholeThreshold',
      defenseBpsThreshold: 'DefenseBpsThreshold',
      defensePpsThreshold: 'DefensePpsThreshold',
      elasticThreshold: 'ElasticThreshold',
      instanceId: 'InstanceId',
      instanceIp: 'InstanceIp',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      ipVersion: 'IpVersion',
      isBgppack: 'IsBgppack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackholeThreshold: 'number',
      defenseBpsThreshold: 'number',
      defensePpsThreshold: 'number',
      elasticThreshold: 'number',
      instanceId: 'string',
      instanceIp: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      ipVersion: 'string',
      isBgppack: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyInstanceList extends $tea.Model {
  instance?: DescribeInstanceResponseBodyInstanceListInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyInstanceListInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
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

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  region?: DescribeRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegion },
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

  async describeInstanceWithOptions(request: DescribeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceResponse>(await this.doRPCRequest("DescribeInstance", "2017-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceResponse({}));
  }

  async describeInstance(request: DescribeInstanceRequest): Promise<DescribeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2017-05-18", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(runtime);
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
