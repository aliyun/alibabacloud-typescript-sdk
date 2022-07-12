// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
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
  code?: number;
  ddosbgpInfo?: DescribeBgpPackByIpResponseBodyDdosbgpInfo;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ddosbgpInfo: 'DdosbgpInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      ddosbgpInfo: DescribeBgpPackByIpResponseBodyDdosbgpInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpPackByIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeBgpPackByIpResponseBody;
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
  internetIp?: string;
  static names(): { [key: string]: string } {
    return {
      begTime: 'BegTime',
      ddosRegionId: 'DdosRegionId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      internetIp: 'InternetIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begTime: 'number',
      ddosRegionId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      internetIp: 'string',
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
  statusCode: number;
  body: DescribeCapResponseBody;
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
  statusCode: number;
  body: DescribeDdosCountResponseBody;
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
  statusCode: number;
  body: DescribeDdosCreditResponseBody;
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
  internetIp?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      ddosRegionId: 'DdosRegionId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      internetIp: 'InternetIp',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      ddosRegionId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      internetIp: 'string',
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
  statusCode: number;
  body: DescribeDdosEventListResponseBody;
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
  statusCode: number;
  body: DescribeDdosThresholdResponseBody;
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
  statusCode: number;
  body: DescribeInstanceResponseBody;
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
      body: DescribeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceIpAddressRequest extends $tea.Model {
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

export class DescribeInstanceIpAddressResponseBody extends $tea.Model {
  instanceList?: DescribeInstanceIpAddressResponseBodyInstanceList[];
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
      instanceList: { 'type': 'array', 'itemType': DescribeInstanceIpAddressResponseBodyInstanceList },
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceIpAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceIpAddressResponseBody;
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
      body: DescribeInstanceIpAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpDdosThresholdRequest extends $tea.Model {
  ddosRegionId?: string;
  ddosType?: string;
  instanceId?: string;
  instanceType?: string;
  internetIp?: string;
  static names(): { [key: string]: string } {
    return {
      ddosRegionId: 'DdosRegionId',
      ddosType: 'DdosType',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      internetIp: 'InternetIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosRegionId: 'string',
      ddosType: 'string',
      instanceId: 'string',
      instanceType: 'string',
      internetIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpDdosThresholdResponseBody extends $tea.Model {
  requestId?: string;
  threshold?: DescribeIpDdosThresholdResponseBodyThreshold;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      threshold: DescribeIpDdosThresholdResponseBodyThreshold,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpDdosThresholdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeIpDdosThresholdResponseBody;
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
      body: DescribeIpDdosThresholdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpLocationServiceRequest extends $tea.Model {
  internetIp?: string;
  static names(): { [key: string]: string } {
    return {
      internetIp: 'InternetIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpLocationServiceResponseBody extends $tea.Model {
  instance?: DescribeIpLocationServiceResponseBodyInstance;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: DescribeIpLocationServiceResponseBodyInstance,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpLocationServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeIpLocationServiceResponseBody;
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
      body: DescribeIpLocationServiceResponseBody,
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
  statusCode: number;
  body: DescribeRegionsResponseBody;
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
  internetIp?: string;
  static names(): { [key: string]: string } {
    return {
      ddosRegionId: 'DdosRegionId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      internetIp: 'InternetIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosRegionId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      internetIp: 'string',
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
  statusCode: number;
  body: ModifyDdosStatusResponseBody;
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
  internetIp?: string;
  isAuto?: boolean;
  pps?: number;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      ddosRegionId: 'DdosRegionId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      internetIp: 'InternetIp',
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
      internetIp: 'string',
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
  statusCode: number;
  body: ModifyDefenseThresholdResponseBody;
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
  internetIp?: string;
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
      internetIp: 'InternetIp',
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
      internetIp: 'string',
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

export class DescribeInstanceIpAddressResponseBodyInstanceListIpAddressConfig extends $tea.Model {
  blackholeThreshold?: number;
  defenseBpsThreshold?: number;
  defensePpsThreshold?: number;
  elasticThreshold?: number;
  instanceIp?: string;
  ipStatus?: string;
  ipVersion?: string;
  isBgppack?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      blackholeThreshold: 'BlackholeThreshold',
      defenseBpsThreshold: 'DefenseBpsThreshold',
      defensePpsThreshold: 'DefensePpsThreshold',
      elasticThreshold: 'ElasticThreshold',
      instanceIp: 'InstanceIp',
      ipStatus: 'IpStatus',
      ipVersion: 'IpVersion',
      isBgppack: 'IsBgppack',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackholeThreshold: 'number',
      defenseBpsThreshold: 'number',
      defensePpsThreshold: 'number',
      elasticThreshold: 'number',
      instanceIp: 'string',
      ipStatus: 'string',
      ipVersion: 'string',
      isBgppack: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceIpAddressResponseBodyInstanceList extends $tea.Model {
  instanceId?: string;
  instanceName?: string;
  instanceStatus?: string;
  instanceType?: string;
  ipAddressConfig?: DescribeInstanceIpAddressResponseBodyInstanceListIpAddressConfig[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      ipAddressConfig: 'IpAddressConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      ipAddressConfig: { 'type': 'array', 'itemType': DescribeInstanceIpAddressResponseBodyInstanceListIpAddressConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpDdosThresholdResponseBodyThreshold extends $tea.Model {
  bps?: number;
  ddosType?: string;
  elasticBps?: number;
  instanceId?: string;
  internetIp?: string;
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
      internetIp: 'InternetIp',
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
      internetIp: 'string',
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

export class DescribeIpLocationServiceResponseBodyInstance extends $tea.Model {
  instanceId?: string;
  instanceName?: string;
  instanceType?: string;
  internetIp?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      internetIp: 'InternetIp',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      instanceType: 'string',
      internetIp: 'string',
      region: 'string',
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
    let query = { };
    if (!Util.isUnset(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBgpPackByIp",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBgpPackByIpResponse>(await this.callApi(params, req, runtime), new DescribeBgpPackByIpResponse({}));
  }

  async describeBgpPackByIp(request: DescribeBgpPackByIpRequest): Promise<DescribeBgpPackByIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBgpPackByIpWithOptions(request, runtime);
  }

  async describeCapWithOptions(request: DescribeCapRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCapResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.begTime)) {
      query["BegTime"] = request.begTime;
    }

    if (!Util.isUnset(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.internetIp)) {
      query["InternetIp"] = request.internetIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCap",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCapResponse>(await this.callApi(params, req, runtime), new DescribeCapResponse({}));
  }

  async describeCap(request: DescribeCapRequest): Promise<DescribeCapResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCapWithOptions(request, runtime);
  }

  async describeDdosCountWithOptions(request: DescribeDdosCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDdosCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDdosCount",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDdosCountResponse>(await this.callApi(params, req, runtime), new DescribeDdosCountResponse({}));
  }

  async describeDdosCount(request: DescribeDdosCountRequest): Promise<DescribeDdosCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDdosCountWithOptions(request, runtime);
  }

  async describeDdosCreditWithOptions(request: DescribeDdosCreditRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDdosCreditResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDdosCredit",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDdosCreditResponse>(await this.callApi(params, req, runtime), new DescribeDdosCreditResponse({}));
  }

  async describeDdosCredit(request: DescribeDdosCreditRequest): Promise<DescribeDdosCreditResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDdosCreditWithOptions(request, runtime);
  }

  async describeDdosEventListWithOptions(request: DescribeDdosEventListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDdosEventListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.internetIp)) {
      query["InternetIp"] = request.internetIp;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDdosEventList",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDdosEventListResponse>(await this.callApi(params, req, runtime), new DescribeDdosEventListResponse({}));
  }

  async describeDdosEventList(request: DescribeDdosEventListRequest): Promise<DescribeDdosEventListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDdosEventListWithOptions(request, runtime);
  }

  async describeDdosThresholdWithOptions(request: DescribeDdosThresholdRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDdosThresholdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!Util.isUnset(request.ddosType)) {
      query["DdosType"] = request.ddosType;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDdosThreshold",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDdosThresholdResponse>(await this.callApi(params, req, runtime), new DescribeDdosThresholdResponse({}));
  }

  async describeDdosThreshold(request: DescribeDdosThresholdRequest): Promise<DescribeDdosThresholdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDdosThresholdWithOptions(request, runtime);
  }

  async describeInstanceWithOptions(request: DescribeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!Util.isUnset(request.ddosStatus)) {
      query["DdosStatus"] = request.ddosStatus;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceIp)) {
      query["InstanceIp"] = request.instanceIp;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstance",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceResponse>(await this.callApi(params, req, runtime), new DescribeInstanceResponse({}));
  }

  async describeInstance(request: DescribeInstanceRequest): Promise<DescribeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceWithOptions(request, runtime);
  }

  async describeInstanceIpAddressWithOptions(request: DescribeInstanceIpAddressRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceIpAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!Util.isUnset(request.ddosStatus)) {
      query["DdosStatus"] = request.ddosStatus;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceIp)) {
      query["InstanceIp"] = request.instanceIp;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceIpAddress",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceIpAddressResponse>(await this.callApi(params, req, runtime), new DescribeInstanceIpAddressResponse({}));
  }

  async describeInstanceIpAddress(request: DescribeInstanceIpAddressRequest): Promise<DescribeInstanceIpAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceIpAddressWithOptions(request, runtime);
  }

  async describeIpDdosThresholdWithOptions(request: DescribeIpDdosThresholdRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIpDdosThresholdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!Util.isUnset(request.ddosType)) {
      query["DdosType"] = request.ddosType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.internetIp)) {
      query["InternetIp"] = request.internetIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeIpDdosThreshold",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeIpDdosThresholdResponse>(await this.callApi(params, req, runtime), new DescribeIpDdosThresholdResponse({}));
  }

  async describeIpDdosThreshold(request: DescribeIpDdosThresholdRequest): Promise<DescribeIpDdosThresholdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIpDdosThresholdWithOptions(request, runtime);
  }

  async describeIpLocationServiceWithOptions(request: DescribeIpLocationServiceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIpLocationServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.internetIp)) {
      query["InternetIp"] = request.internetIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeIpLocationService",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeIpLocationServiceResponse>(await this.callApi(params, req, runtime), new DescribeIpLocationServiceResponse({}));
  }

  async describeIpLocationService(request: DescribeIpLocationServiceRequest): Promise<DescribeIpLocationServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIpLocationServiceWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(runtime);
  }

  async modifyDdosStatusWithOptions(request: ModifyDdosStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDdosStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.internetIp)) {
      query["InternetIp"] = request.internetIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDdosStatus",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDdosStatusResponse>(await this.callApi(params, req, runtime), new ModifyDdosStatusResponse({}));
  }

  async modifyDdosStatus(request: ModifyDdosStatusRequest): Promise<ModifyDdosStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDdosStatusWithOptions(request, runtime);
  }

  async modifyDefenseThresholdWithOptions(request: ModifyDefenseThresholdRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDefenseThresholdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bps)) {
      query["Bps"] = request.bps;
    }

    if (!Util.isUnset(request.ddosRegionId)) {
      query["DdosRegionId"] = request.ddosRegionId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.internetIp)) {
      query["InternetIp"] = request.internetIp;
    }

    if (!Util.isUnset(request.isAuto)) {
      query["IsAuto"] = request.isAuto;
    }

    if (!Util.isUnset(request.pps)) {
      query["Pps"] = request.pps;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDefenseThreshold",
      version: "2017-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDefenseThresholdResponse>(await this.callApi(params, req, runtime), new ModifyDefenseThresholdResponse({}));
  }

  async modifyDefenseThreshold(request: ModifyDefenseThresholdRequest): Promise<ModifyDefenseThresholdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDefenseThresholdWithOptions(request, runtime);
  }

}
