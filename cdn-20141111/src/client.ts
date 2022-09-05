// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddCdnDomainRequest extends $tea.Model {
  cdnType?: string;
  checkUrl?: string;
  domainName?: string;
  ownerAccount?: string;
  ownerId?: number;
  priorities?: string;
  region?: string;
  resourceGroupId?: string;
  scope?: string;
  securityToken?: string;
  sourcePort?: number;
  sourceType?: string;
  sources?: string;
  topLevelDomain?: string;
  static names(): { [key: string]: string } {
    return {
      cdnType: 'CdnType',
      checkUrl: 'CheckUrl',
      domainName: 'DomainName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      priorities: 'Priorities',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      scope: 'Scope',
      securityToken: 'SecurityToken',
      sourcePort: 'SourcePort',
      sourceType: 'SourceType',
      sources: 'Sources',
      topLevelDomain: 'TopLevelDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdnType: 'string',
      checkUrl: 'string',
      domainName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      priorities: 'string',
      region: 'string',
      resourceGroupId: 'string',
      scope: 'string',
      securityToken: 'string',
      sourcePort: 'number',
      sourceType: 'string',
      sources: 'string',
      topLevelDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCdnDomainResponseBody extends $tea.Model {
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

export class AddCdnDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddCdnDomainResponseBody;
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
      body: AddCdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainDetailRequest extends $tea.Model {
  domainName?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainDetailResponseBody extends $tea.Model {
  getDomainDetailModel?: DescribeCdnDomainDetailResponseBodyGetDomainDetailModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      getDomainDetailModel: 'GetDomainDetailModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      getDomainDetailModel: DescribeCdnDomainDetailResponseBodyGetDomainDetailModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCdnDomainDetailResponseBody;
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
      body: DescribeCdnDomainDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainLogsRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  logDay?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  securityToken?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      logDay: 'LogDay',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      logDay: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainLogsResponseBody extends $tea.Model {
  domainLogModel?: DescribeCdnDomainLogsResponseBodyDomainLogModel;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainLogModel: 'DomainLogModel',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainLogModel: DescribeCdnDomainLogsResponseBodyDomainLogModel,
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

export class DescribeCdnDomainLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCdnDomainLogsResponseBody;
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
      body: DescribeCdnDomainLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnServiceRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnServiceResponseBody extends $tea.Model {
  changingAffectTime?: string;
  changingChargeType?: string;
  instanceId?: string;
  internetChargeType?: string;
  openingTime?: string;
  operationLocks?: DescribeCdnServiceResponseBodyOperationLocks;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changingAffectTime: 'ChangingAffectTime',
      changingChargeType: 'ChangingChargeType',
      instanceId: 'InstanceId',
      internetChargeType: 'InternetChargeType',
      openingTime: 'OpeningTime',
      operationLocks: 'OperationLocks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changingAffectTime: 'string',
      changingChargeType: 'string',
      instanceId: 'string',
      internetChargeType: 'string',
      openingTime: 'string',
      operationLocks: DescribeCdnServiceResponseBodyOperationLocks,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCdnServiceResponseBody;
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
      body: DescribeCdnServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataRequest extends $tea.Model {
  domainName?: string;
  domainType?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  ownerId?: number;
  startTime?: string;
  timeMerge?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      domainType: 'DomainType',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      timeMerge: 'TimeMerge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      domainType: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      ownerId: 'number',
      startTime: 'string',
      timeMerge: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataResponseBody extends $tea.Model {
  bpsDataPerInterval?: DescribeDomainBpsDataResponseBodyBpsDataPerInterval;
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  ispName?: string;
  ispNameEn?: string;
  locationName?: string;
  locationNameEn?: string;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bpsDataPerInterval: 'BpsDataPerInterval',
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      ispName: 'IspName',
      ispNameEn: 'IspNameEn',
      locationName: 'LocationName',
      locationNameEn: 'LocationNameEn',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsDataPerInterval: DescribeDomainBpsDataResponseBodyBpsDataPerInterval,
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      ispName: 'string',
      ispNameEn: 'string',
      locationName: 'string',
      locationNameEn: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainBpsDataResponseBody;
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
      body: DescribeDomainBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataByTimeStampRequest extends $tea.Model {
  domainName?: string;
  ispNames?: string;
  locationNames?: string;
  ownerId?: number;
  timePoint?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ispNames: 'IspNames',
      locationNames: 'LocationNames',
      ownerId: 'OwnerId',
      timePoint: 'TimePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ispNames: 'string',
      locationNames: 'string',
      ownerId: 'number',
      timePoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataByTimeStampResponseBody extends $tea.Model {
  bpsDataList?: DescribeDomainBpsDataByTimeStampResponseBodyBpsDataList;
  domainName?: string;
  requestId?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      bpsDataList: 'BpsDataList',
      domainName: 'DomainName',
      requestId: 'RequestId',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsDataList: DescribeDomainBpsDataByTimeStampResponseBodyBpsDataList,
      domainName: 'string',
      requestId: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataByTimeStampResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainBpsDataByTimeStampResponseBody;
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
      body: DescribeDomainBpsDataByTimeStampResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainFileSizeProportionDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  ownerId?: number;
  securityToken?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      ownerId: 'number',
      securityToken: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainFileSizeProportionDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  fileSizeProportionDataInterval?: DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataInterval;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      fileSizeProportionDataInterval: 'FileSizeProportionDataInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      fileSizeProportionDataInterval: DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainFileSizeProportionDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainFileSizeProportionDataResponseBody;
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
      body: DescribeDomainFileSizeProportionDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainFlowDataRequest extends $tea.Model {
  domainName?: string;
  domainType?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  ownerId?: number;
  startTime?: string;
  timeMerge?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      domainType: 'DomainType',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      timeMerge: 'TimeMerge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      domainType: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      ownerId: 'number',
      startTime: 'string',
      timeMerge: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainFlowDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  flowDataPerInterval?: DescribeDomainFlowDataResponseBodyFlowDataPerInterval;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      flowDataPerInterval: 'FlowDataPerInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      flowDataPerInterval: DescribeDomainFlowDataResponseBodyFlowDataPerInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainFlowDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainFlowDataResponseBody;
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
      body: DescribeDomainFlowDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHitRateDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  interval?: string;
  ownerId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      ownerId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHitRateDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  hitRateInterval?: DescribeDomainHitRateDataResponseBodyHitRateInterval;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      hitRateInterval: 'HitRateInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      hitRateInterval: DescribeDomainHitRateDataResponseBodyHitRateInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHitRateDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainHitRateDataResponseBody;
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
      body: DescribeDomainHitRateDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHttpCodeDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  ownerId?: number;
  startTime?: string;
  timeMerge?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      timeMerge: 'TimeMerge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      ownerId: 'number',
      startTime: 'string',
      timeMerge: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHttpCodeDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  httpCodeData?: DescribeDomainHttpCodeDataResponseBodyHttpCodeData;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      httpCodeData: 'HttpCodeData',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      httpCodeData: DescribeDomainHttpCodeDataResponseBodyHttpCodeData,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHttpCodeDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainHttpCodeDataResponseBody;
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
      body: DescribeDomainHttpCodeDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainISPDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  ownerId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      ownerId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainISPDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  value?: DescribeDomainISPDataResponseBodyValue;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      value: DescribeDomainISPDataResponseBodyValue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainISPDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainISPDataResponseBody;
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
      body: DescribeDomainISPDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsDataRequest extends $tea.Model {
  domainName?: string;
  domainType?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  ownerId?: number;
  startTime?: string;
  timeMerge?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      domainType: 'DomainType',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      timeMerge: 'TimeMerge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      domainType: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      ownerId: 'number',
      startTime: 'string',
      timeMerge: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  qpsDataInterval?: DescribeDomainQpsDataResponseBodyQpsDataInterval;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      qpsDataInterval: 'QpsDataInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      qpsDataInterval: DescribeDomainQpsDataResponseBodyQpsDataInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainQpsDataResponseBody;
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
      body: DescribeDomainQpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRegionDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  ownerId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      ownerId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRegionDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  value?: DescribeDomainRegionDataResponseBodyValue;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      value: DescribeDomainRegionDataResponseBodyValue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRegionDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainRegionDataResponseBody;
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
      body: DescribeDomainRegionDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainReqHitRateDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  interval?: string;
  ownerId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      ownerId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainReqHitRateDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  reqHitRateInterval?: DescribeDomainReqHitRateDataResponseBodyReqHitRateInterval;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      reqHitRateInterval: 'ReqHitRateInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      reqHitRateInterval: DescribeDomainReqHitRateDataResponseBodyReqHitRateInterval,
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainReqHitRateDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainReqHitRateDataResponseBody;
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
      body: DescribeDomainReqHitRateDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcBpsDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  fixTimeGap?: string;
  interval?: string;
  ownerId?: number;
  startTime?: string;
  timeMerge?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      fixTimeGap: 'FixTimeGap',
      interval: 'Interval',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      timeMerge: 'TimeMerge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      fixTimeGap: 'string',
      interval: 'string',
      ownerId: 'number',
      startTime: 'string',
      timeMerge: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcBpsDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
  srcBpsDataPerInterval?: DescribeDomainSrcBpsDataResponseBodySrcBpsDataPerInterval;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      srcBpsDataPerInterval: 'SrcBpsDataPerInterval',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      srcBpsDataPerInterval: DescribeDomainSrcBpsDataResponseBodySrcBpsDataPerInterval,
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainSrcBpsDataResponseBody;
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
      body: DescribeDomainSrcBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcFlowDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  fixTimeGap?: string;
  interval?: string;
  ownerId?: number;
  startTime?: string;
  timeMerge?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      fixTimeGap: 'FixTimeGap',
      interval: 'Interval',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      timeMerge: 'TimeMerge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      fixTimeGap: 'string',
      interval: 'string',
      ownerId: 'number',
      startTime: 'string',
      timeMerge: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcFlowDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
  srcFlowDataPerInterval?: DescribeDomainSrcFlowDataResponseBodySrcFlowDataPerInterval;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      srcFlowDataPerInterval: 'SrcFlowDataPerInterval',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      srcFlowDataPerInterval: DescribeDomainSrcFlowDataResponseBodySrcFlowDataPerInterval,
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcFlowDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainSrcFlowDataResponseBody;
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
      body: DescribeDomainSrcFlowDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainUvDataRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  ownerId?: number;
  securityToken?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      ownerId: 'number',
      securityToken: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainUvDataResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  uvDataInterval?: DescribeDomainUvDataResponseBodyUvDataInterval;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      uvDataInterval: 'UvDataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      uvDataInterval: DescribeDomainUvDataResponseBodyUvDataInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainUvDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainUvDataResponseBody;
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
      body: DescribeDomainUvDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsBySourceRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  sources?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      sources: 'Sources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      sources: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsBySourceResponseBody extends $tea.Model {
  domainsList?: DescribeDomainsBySourceResponseBodyDomainsList;
  requestId?: string;
  sources?: string;
  static names(): { [key: string]: string } {
    return {
      domainsList: 'DomainsList',
      requestId: 'RequestId',
      sources: 'Sources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainsList: DescribeDomainsBySourceResponseBodyDomainsList,
      requestId: 'string',
      sources: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsBySourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainsBySourceResponseBody;
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
      body: DescribeDomainsBySourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsUsageByDayRequest extends $tea.Model {
  domainName?: string;
  endTime?: string;
  ownerId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      ownerId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsUsageByDayResponseBody extends $tea.Model {
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  usageByDays?: DescribeDomainsUsageByDayResponseBodyUsageByDays;
  usageTotal?: DescribeDomainsUsageByDayResponseBodyUsageTotal;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      usageByDays: 'UsageByDays',
      usageTotal: 'UsageTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      usageByDays: DescribeDomainsUsageByDayResponseBodyUsageByDays,
      usageTotal: DescribeDomainsUsageByDayResponseBodyUsageTotal,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsUsageByDayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainsUsageByDayResponseBody;
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
      body: DescribeDomainsUsageByDayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRefreshQuotaRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRefreshQuotaResponseBody extends $tea.Model {
  blockQuota?: string;
  blockRemain?: string;
  dirQuota?: string;
  dirRemain?: string;
  preloadQuota?: string;
  preloadRemain?: string;
  requestId?: string;
  urlQuota?: string;
  urlRemain?: string;
  static names(): { [key: string]: string } {
    return {
      blockQuota: 'BlockQuota',
      blockRemain: 'BlockRemain',
      dirQuota: 'DirQuota',
      dirRemain: 'DirRemain',
      preloadQuota: 'PreloadQuota',
      preloadRemain: 'PreloadRemain',
      requestId: 'RequestId',
      urlQuota: 'UrlQuota',
      urlRemain: 'UrlRemain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockQuota: 'string',
      blockRemain: 'string',
      dirQuota: 'string',
      dirRemain: 'string',
      preloadQuota: 'string',
      preloadRemain: 'string',
      requestId: 'string',
      urlQuota: 'string',
      urlRemain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRefreshQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRefreshQuotaResponseBody;
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
      body: DescribeRefreshQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopDomainsByFlowRequest extends $tea.Model {
  endTime?: string;
  limit?: number;
  ownerId?: number;
  product?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      limit: 'Limit',
      ownerId: 'OwnerId',
      product: 'Product',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      limit: 'number',
      ownerId: 'number',
      product: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopDomainsByFlowResponseBody extends $tea.Model {
  domainCount?: number;
  domainOnlineCount?: number;
  endTime?: string;
  requestId?: string;
  startTime?: string;
  topDomains?: DescribeTopDomainsByFlowResponseBodyTopDomains;
  static names(): { [key: string]: string } {
    return {
      domainCount: 'DomainCount',
      domainOnlineCount: 'DomainOnlineCount',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      topDomains: 'TopDomains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainCount: 'number',
      domainOnlineCount: 'number',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      topDomains: DescribeTopDomainsByFlowResponseBodyTopDomains,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopDomainsByFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTopDomainsByFlowResponseBody;
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
      body: DescribeTopDomainsByFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserDomainsRequest extends $tea.Model {
  cdnType?: string;
  checkDomainShow?: boolean;
  domainName?: string;
  domainSearchType?: string;
  domainStatus?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  securityToken?: string;
  sources?: string;
  static names(): { [key: string]: string } {
    return {
      cdnType: 'CdnType',
      checkDomainShow: 'CheckDomainShow',
      domainName: 'DomainName',
      domainSearchType: 'DomainSearchType',
      domainStatus: 'DomainStatus',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      securityToken: 'SecurityToken',
      sources: 'Sources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdnType: 'string',
      checkDomainShow: 'boolean',
      domainName: 'string',
      domainSearchType: 'string',
      domainStatus: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      securityToken: 'string',
      sources: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserDomainsResponseBody extends $tea.Model {
  domains?: DescribeUserDomainsResponseBodyDomains;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: DescribeUserDomainsResponseBodyDomains,
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

export class DescribeUserDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUserDomainsResponseBody;
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
      body: DescribeUserDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenCdnServiceRequest extends $tea.Model {
  internetChargeType?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      internetChargeType: 'InternetChargeType',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetChargeType: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenCdnServiceResponseBody extends $tea.Model {
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

export class OpenCdnServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OpenCdnServiceResponseBody;
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
      body: OpenCdnServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushObjectCacheRequest extends $tea.Model {
  area?: string;
  objectPath?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      objectPath: 'ObjectPath',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      objectPath: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushObjectCacheResponseBody extends $tea.Model {
  pushTaskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pushTaskId: 'PushTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushTaskId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushObjectCacheResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PushObjectCacheResponseBody;
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
      body: PushObjectCacheResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshObjectCachesRequest extends $tea.Model {
  objectPath?: string;
  objectType?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      objectPath: 'ObjectPath',
      objectType: 'ObjectType',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectPath: 'string',
      objectType: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshObjectCachesResponseBody extends $tea.Model {
  refreshTaskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      refreshTaskId: 'RefreshTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refreshTaskId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshObjectCachesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RefreshObjectCachesResponseBody;
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
      body: RefreshObjectCachesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestDescribeDomainBpsDataRequest extends $tea.Model {
  domainName?: string;
  domainType?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  startTime?: string;
  timeMerge?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      domainType: 'DomainType',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      startTime: 'StartTime',
      timeMerge: 'TimeMerge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      domainType: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      startTime: 'string',
      timeMerge: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestDescribeDomainBpsDataResponseBody extends $tea.Model {
  bpsDataPerInterval?: TestDescribeDomainBpsDataResponseBodyBpsDataPerInterval;
  dataInterval?: string;
  domainName?: string;
  endTime?: string;
  ispName?: string;
  ispNameEn?: string;
  locationName?: string;
  locationNameEn?: string;
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bpsDataPerInterval: 'BpsDataPerInterval',
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      ispName: 'IspName',
      ispNameEn: 'IspNameEn',
      locationName: 'LocationName',
      locationNameEn: 'LocationNameEn',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsDataPerInterval: TestDescribeDomainBpsDataResponseBodyBpsDataPerInterval,
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      ispName: 'string',
      ispNameEn: 'string',
      locationName: 'string',
      locationNameEn: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestDescribeDomainBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TestDescribeDomainBpsDataResponseBody;
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
      body: TestDescribeDomainBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModelsSourceModel extends $tea.Model {
  content?: string;
  enabled?: string;
  port?: number;
  priority?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      enabled: 'Enabled',
      port: 'Port',
      priority: 'Priority',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      enabled: 'string',
      port: 'number',
      priority: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModels extends $tea.Model {
  sourceModel?: DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModelsSourceModel[];
  static names(): { [key: string]: string } {
    return {
      sourceModel: 'SourceModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceModel: { 'type': 'array', 'itemType': DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModelsSourceModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSources extends $tea.Model {
  source?: string[];
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainDetailResponseBodyGetDomainDetailModel extends $tea.Model {
  cdnType?: string;
  cname?: string;
  description?: string;
  domainName?: string;
  domainStatus?: string;
  gmtCreated?: string;
  gmtModified?: string;
  httpsCname?: string;
  region?: string;
  resourceGroupId?: string;
  scope?: string;
  serverCertificateStatus?: string;
  sourceModels?: DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModels;
  sourcePort?: number;
  sourceType?: string;
  sources?: DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSources;
  static names(): { [key: string]: string } {
    return {
      cdnType: 'CdnType',
      cname: 'Cname',
      description: 'Description',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      httpsCname: 'HttpsCname',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      scope: 'Scope',
      serverCertificateStatus: 'ServerCertificateStatus',
      sourceModels: 'SourceModels',
      sourcePort: 'SourcePort',
      sourceType: 'SourceType',
      sources: 'Sources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdnType: 'string',
      cname: 'string',
      description: 'string',
      domainName: 'string',
      domainStatus: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      httpsCname: 'string',
      region: 'string',
      resourceGroupId: 'string',
      scope: 'string',
      serverCertificateStatus: 'string',
      sourceModels: DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModels,
      sourcePort: 'number',
      sourceType: 'string',
      sources: DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainLogsResponseBodyDomainLogModelDomainLogDetailsDomainLogDetail extends $tea.Model {
  endTime?: string;
  logName?: string;
  logPath?: string;
  logSize?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      logName: 'LogName',
      logPath: 'LogPath',
      logSize: 'LogSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      logName: 'string',
      logPath: 'string',
      logSize: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainLogsResponseBodyDomainLogModelDomainLogDetails extends $tea.Model {
  domainLogDetail?: DescribeCdnDomainLogsResponseBodyDomainLogModelDomainLogDetailsDomainLogDetail[];
  static names(): { [key: string]: string } {
    return {
      domainLogDetail: 'DomainLogDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainLogDetail: { 'type': 'array', 'itemType': DescribeCdnDomainLogsResponseBodyDomainLogModelDomainLogDetailsDomainLogDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDomainLogsResponseBodyDomainLogModel extends $tea.Model {
  domainLogDetails?: DescribeCdnDomainLogsResponseBodyDomainLogModelDomainLogDetails;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      domainLogDetails: 'DomainLogDetails',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainLogDetails: DescribeCdnDomainLogsResponseBodyDomainLogModelDomainLogDetails,
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnServiceResponseBodyOperationLocksLockReason extends $tea.Model {
  lockReason?: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnServiceResponseBodyOperationLocks extends $tea.Model {
  lockReason?: DescribeCdnServiceResponseBodyOperationLocksLockReason[];
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: { 'type': 'array', 'itemType': DescribeCdnServiceResponseBodyOperationLocksLockReason },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataResponseBodyBpsDataPerIntervalDataModule extends $tea.Model {
  domesticL2Value?: string;
  domesticValue?: string;
  dynamicDomesticValue?: string;
  dynamicOverseasValue?: string;
  dynamicValue?: string;
  l2Value?: string;
  overseasL2Value?: string;
  overseasValue?: string;
  staticDomesticValue?: string;
  staticOverseasValue?: string;
  staticValue?: string;
  timeStamp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      domesticL2Value: 'DomesticL2Value',
      domesticValue: 'DomesticValue',
      dynamicDomesticValue: 'DynamicDomesticValue',
      dynamicOverseasValue: 'DynamicOverseasValue',
      dynamicValue: 'DynamicValue',
      l2Value: 'L2Value',
      overseasL2Value: 'OverseasL2Value',
      overseasValue: 'OverseasValue',
      staticDomesticValue: 'StaticDomesticValue',
      staticOverseasValue: 'StaticOverseasValue',
      staticValue: 'StaticValue',
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domesticL2Value: 'string',
      domesticValue: 'string',
      dynamicDomesticValue: 'string',
      dynamicOverseasValue: 'string',
      dynamicValue: 'string',
      l2Value: 'string',
      overseasL2Value: 'string',
      overseasValue: 'string',
      staticDomesticValue: 'string',
      staticOverseasValue: 'string',
      staticValue: 'string',
      timeStamp: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataResponseBodyBpsDataPerInterval extends $tea.Model {
  dataModule?: DescribeDomainBpsDataResponseBodyBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainBpsDataResponseBodyBpsDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataByTimeStampResponseBodyBpsDataListBpsDataModel extends $tea.Model {
  bps?: number;
  ispName?: string;
  locationName?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      ispName: 'IspName',
      locationName: 'LocationName',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      ispName: 'string',
      locationName: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBpsDataByTimeStampResponseBodyBpsDataList extends $tea.Model {
  bpsDataModel?: DescribeDomainBpsDataByTimeStampResponseBodyBpsDataListBpsDataModel[];
  static names(): { [key: string]: string } {
    return {
      bpsDataModel: 'BpsDataModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsDataModel: { 'type': 'array', 'itemType': DescribeDomainBpsDataByTimeStampResponseBodyBpsDataListBpsDataModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataIntervalUsageDataValueFileSizeProportionData extends $tea.Model {
  fileSize?: string;
  proportion?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'FileSize',
      proportion: 'Proportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'string',
      proportion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataIntervalUsageDataValue extends $tea.Model {
  fileSizeProportionData?: DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataIntervalUsageDataValueFileSizeProportionData[];
  static names(): { [key: string]: string } {
    return {
      fileSizeProportionData: 'FileSizeProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSizeProportionData: { 'type': 'array', 'itemType': DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataIntervalUsageDataValueFileSizeProportionData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataIntervalUsageData extends $tea.Model {
  timeStamp?: string;
  value?: DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataIntervalUsageDataValue;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataIntervalUsageDataValue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataInterval extends $tea.Model {
  usageData?: DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataIntervalUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeDomainFileSizeProportionDataResponseBodyFileSizeProportionDataIntervalUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainFlowDataResponseBodyFlowDataPerIntervalDataModule extends $tea.Model {
  domesticValue?: string;
  dynamicDomesticValue?: string;
  dynamicOverseasValue?: string;
  dynamicValue?: string;
  overseasValue?: string;
  staticDomesticValue?: string;
  staticOverseasValue?: string;
  staticValue?: string;
  timeStamp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      domesticValue: 'DomesticValue',
      dynamicDomesticValue: 'DynamicDomesticValue',
      dynamicOverseasValue: 'DynamicOverseasValue',
      dynamicValue: 'DynamicValue',
      overseasValue: 'OverseasValue',
      staticDomesticValue: 'StaticDomesticValue',
      staticOverseasValue: 'StaticOverseasValue',
      staticValue: 'StaticValue',
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domesticValue: 'string',
      dynamicDomesticValue: 'string',
      dynamicOverseasValue: 'string',
      dynamicValue: 'string',
      overseasValue: 'string',
      staticDomesticValue: 'string',
      staticOverseasValue: 'string',
      staticValue: 'string',
      timeStamp: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainFlowDataResponseBodyFlowDataPerInterval extends $tea.Model {
  dataModule?: DescribeDomainFlowDataResponseBodyFlowDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainFlowDataResponseBodyFlowDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHitRateDataResponseBodyHitRateIntervalDataModule extends $tea.Model {
  timeStamp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHitRateDataResponseBodyHitRateInterval extends $tea.Model {
  dataModule?: DescribeDomainHitRateDataResponseBodyHitRateIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainHitRateDataResponseBodyHitRateIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValueCodeProportionData extends $tea.Model {
  code?: string;
  count?: string;
  proportion?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      proportion: 'Proportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'string',
      proportion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValue extends $tea.Model {
  codeProportionData?: DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValueCodeProportionData[];
  static names(): { [key: string]: string } {
    return {
      codeProportionData: 'CodeProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeProportionData: { 'type': 'array', 'itemType': DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValueCodeProportionData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageData extends $tea.Model {
  timeStamp?: string;
  value?: DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValue;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageDataValue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainHttpCodeDataResponseBodyHttpCodeData extends $tea.Model {
  usageData?: DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeDomainHttpCodeDataResponseBodyHttpCodeDataUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainISPDataResponseBodyValueISPProportionData extends $tea.Model {
  avgObjectSize?: string;
  avgResponseRate?: string;
  avgResponseTime?: string;
  bps?: string;
  byteHitRate?: string;
  bytesProportion?: string;
  ISP?: string;
  ispEname?: string;
  proportion?: string;
  qps?: string;
  reqErrRate?: string;
  reqHitRate?: string;
  totalBytes?: string;
  totalQuery?: string;
  static names(): { [key: string]: string } {
    return {
      avgObjectSize: 'AvgObjectSize',
      avgResponseRate: 'AvgResponseRate',
      avgResponseTime: 'AvgResponseTime',
      bps: 'Bps',
      byteHitRate: 'ByteHitRate',
      bytesProportion: 'BytesProportion',
      ISP: 'ISP',
      ispEname: 'IspEname',
      proportion: 'Proportion',
      qps: 'Qps',
      reqErrRate: 'ReqErrRate',
      reqHitRate: 'ReqHitRate',
      totalBytes: 'TotalBytes',
      totalQuery: 'TotalQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgObjectSize: 'string',
      avgResponseRate: 'string',
      avgResponseTime: 'string',
      bps: 'string',
      byteHitRate: 'string',
      bytesProportion: 'string',
      ISP: 'string',
      ispEname: 'string',
      proportion: 'string',
      qps: 'string',
      reqErrRate: 'string',
      reqHitRate: 'string',
      totalBytes: 'string',
      totalQuery: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainISPDataResponseBodyValue extends $tea.Model {
  ISPProportionData?: DescribeDomainISPDataResponseBodyValueISPProportionData[];
  static names(): { [key: string]: string } {
    return {
      ISPProportionData: 'ISPProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ISPProportionData: { 'type': 'array', 'itemType': DescribeDomainISPDataResponseBodyValueISPProportionData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsDataResponseBodyQpsDataIntervalDataModule extends $tea.Model {
  accDomesticValue?: string;
  accOverseasValue?: string;
  accValue?: string;
  domesticValue?: string;
  dynamicDomesticValue?: string;
  dynamicOverseasValue?: string;
  dynamicValue?: string;
  overseasValue?: string;
  staticDomesticValue?: string;
  staticOverseasValue?: string;
  staticValue?: string;
  timeStamp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      accDomesticValue: 'AccDomesticValue',
      accOverseasValue: 'AccOverseasValue',
      accValue: 'AccValue',
      domesticValue: 'DomesticValue',
      dynamicDomesticValue: 'DynamicDomesticValue',
      dynamicOverseasValue: 'DynamicOverseasValue',
      dynamicValue: 'DynamicValue',
      overseasValue: 'OverseasValue',
      staticDomesticValue: 'StaticDomesticValue',
      staticOverseasValue: 'StaticOverseasValue',
      staticValue: 'StaticValue',
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accDomesticValue: 'string',
      accOverseasValue: 'string',
      accValue: 'string',
      domesticValue: 'string',
      dynamicDomesticValue: 'string',
      dynamicOverseasValue: 'string',
      dynamicValue: 'string',
      overseasValue: 'string',
      staticDomesticValue: 'string',
      staticOverseasValue: 'string',
      staticValue: 'string',
      timeStamp: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsDataResponseBodyQpsDataInterval extends $tea.Model {
  dataModule?: DescribeDomainQpsDataResponseBodyQpsDataIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainQpsDataResponseBodyQpsDataIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRegionDataResponseBodyValueRegionProportionData extends $tea.Model {
  avgObjectSize?: string;
  avgResponseRate?: string;
  avgResponseTime?: string;
  bps?: string;
  byteHitRate?: string;
  bytesProportion?: string;
  proportion?: string;
  qps?: string;
  region?: string;
  regionEname?: string;
  reqErrRate?: string;
  reqHitRate?: string;
  totalBytes?: string;
  totalQuery?: string;
  static names(): { [key: string]: string } {
    return {
      avgObjectSize: 'AvgObjectSize',
      avgResponseRate: 'AvgResponseRate',
      avgResponseTime: 'AvgResponseTime',
      bps: 'Bps',
      byteHitRate: 'ByteHitRate',
      bytesProportion: 'BytesProportion',
      proportion: 'Proportion',
      qps: 'Qps',
      region: 'Region',
      regionEname: 'RegionEname',
      reqErrRate: 'ReqErrRate',
      reqHitRate: 'ReqHitRate',
      totalBytes: 'TotalBytes',
      totalQuery: 'TotalQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgObjectSize: 'string',
      avgResponseRate: 'string',
      avgResponseTime: 'string',
      bps: 'string',
      byteHitRate: 'string',
      bytesProportion: 'string',
      proportion: 'string',
      qps: 'string',
      region: 'string',
      regionEname: 'string',
      reqErrRate: 'string',
      reqHitRate: 'string',
      totalBytes: 'string',
      totalQuery: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRegionDataResponseBodyValue extends $tea.Model {
  regionProportionData?: DescribeDomainRegionDataResponseBodyValueRegionProportionData[];
  static names(): { [key: string]: string } {
    return {
      regionProportionData: 'RegionProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionProportionData: { 'type': 'array', 'itemType': DescribeDomainRegionDataResponseBodyValueRegionProportionData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainReqHitRateDataResponseBodyReqHitRateIntervalDataModule extends $tea.Model {
  timeStamp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainReqHitRateDataResponseBodyReqHitRateInterval extends $tea.Model {
  dataModule?: DescribeDomainReqHitRateDataResponseBodyReqHitRateIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainReqHitRateDataResponseBodyReqHitRateIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcBpsDataResponseBodySrcBpsDataPerIntervalDataModule extends $tea.Model {
  timeStamp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcBpsDataResponseBodySrcBpsDataPerInterval extends $tea.Model {
  dataModule?: DescribeDomainSrcBpsDataResponseBodySrcBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainSrcBpsDataResponseBodySrcBpsDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcFlowDataResponseBodySrcFlowDataPerIntervalDataModule extends $tea.Model {
  timeStamp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSrcFlowDataResponseBodySrcFlowDataPerInterval extends $tea.Model {
  dataModule?: DescribeDomainSrcFlowDataResponseBodySrcFlowDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDomainSrcFlowDataResponseBodySrcFlowDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainUvDataResponseBodyUvDataIntervalUsageData extends $tea.Model {
  timeStamp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainUvDataResponseBodyUvDataInterval extends $tea.Model {
  usageData?: DescribeDomainUvDataResponseBodyUvDataIntervalUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeDomainUvDataResponseBodyUvDataIntervalUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfosDomainInfo extends $tea.Model {
  createTime?: string;
  domainCname?: string;
  domainName?: string;
  status?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      domainCname: 'DomainCname',
      domainName: 'DomainName',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      domainCname: 'string',
      domainName: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfos extends $tea.Model {
  domainInfo?: DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfosDomainInfo[];
  static names(): { [key: string]: string } {
    return {
      domainInfo: 'domainInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainInfo: { 'type': 'array', 'itemType': DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfosDomainInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomains extends $tea.Model {
  domainNames?: string[];
  static names(): { [key: string]: string } {
    return {
      domainNames: 'domainNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsBySourceResponseBodyDomainsListDomainsData extends $tea.Model {
  domainInfos?: DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfos;
  domains?: DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomains;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      domainInfos: 'DomainInfos',
      domains: 'Domains',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainInfos: DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfos,
      domains: DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomains,
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsBySourceResponseBodyDomainsList extends $tea.Model {
  domainsData?: DescribeDomainsBySourceResponseBodyDomainsListDomainsData[];
  static names(): { [key: string]: string } {
    return {
      domainsData: 'DomainsData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainsData: { 'type': 'array', 'itemType': DescribeDomainsBySourceResponseBodyDomainsListDomainsData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsUsageByDayResponseBodyUsageByDaysUsageByDay extends $tea.Model {
  bytesHitRate?: string;
  maxBps?: string;
  maxBpsTime?: string;
  maxSrcBps?: string;
  maxSrcBpsTime?: string;
  qps?: string;
  requestHitRate?: string;
  timeStamp?: string;
  totalAccess?: string;
  totalTraffic?: string;
  static names(): { [key: string]: string } {
    return {
      bytesHitRate: 'BytesHitRate',
      maxBps: 'MaxBps',
      maxBpsTime: 'MaxBpsTime',
      maxSrcBps: 'MaxSrcBps',
      maxSrcBpsTime: 'MaxSrcBpsTime',
      qps: 'Qps',
      requestHitRate: 'RequestHitRate',
      timeStamp: 'TimeStamp',
      totalAccess: 'TotalAccess',
      totalTraffic: 'TotalTraffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytesHitRate: 'string',
      maxBps: 'string',
      maxBpsTime: 'string',
      maxSrcBps: 'string',
      maxSrcBpsTime: 'string',
      qps: 'string',
      requestHitRate: 'string',
      timeStamp: 'string',
      totalAccess: 'string',
      totalTraffic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsUsageByDayResponseBodyUsageByDays extends $tea.Model {
  usageByDay?: DescribeDomainsUsageByDayResponseBodyUsageByDaysUsageByDay[];
  static names(): { [key: string]: string } {
    return {
      usageByDay: 'UsageByDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageByDay: { 'type': 'array', 'itemType': DescribeDomainsUsageByDayResponseBodyUsageByDaysUsageByDay },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsUsageByDayResponseBodyUsageTotal extends $tea.Model {
  bytesHitRate?: string;
  maxBps?: string;
  maxBpsTime?: string;
  maxSrcBps?: string;
  maxSrcBpsTime?: string;
  requestHitRate?: string;
  totalAccess?: string;
  totalTraffic?: string;
  static names(): { [key: string]: string } {
    return {
      bytesHitRate: 'BytesHitRate',
      maxBps: 'MaxBps',
      maxBpsTime: 'MaxBpsTime',
      maxSrcBps: 'MaxSrcBps',
      maxSrcBpsTime: 'MaxSrcBpsTime',
      requestHitRate: 'RequestHitRate',
      totalAccess: 'TotalAccess',
      totalTraffic: 'TotalTraffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytesHitRate: 'string',
      maxBps: 'string',
      maxBpsTime: 'string',
      maxSrcBps: 'string',
      maxSrcBpsTime: 'string',
      requestHitRate: 'string',
      totalAccess: 'string',
      totalTraffic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopDomainsByFlowResponseBodyTopDomainsTopDomain extends $tea.Model {
  domainName?: string;
  maxBps?: number;
  maxBpsTime?: string;
  rank?: number;
  totalAccess?: number;
  totalTraffic?: string;
  trafficPercent?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      maxBps: 'MaxBps',
      maxBpsTime: 'MaxBpsTime',
      rank: 'Rank',
      totalAccess: 'TotalAccess',
      totalTraffic: 'TotalTraffic',
      trafficPercent: 'TrafficPercent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      maxBps: 'number',
      maxBpsTime: 'string',
      rank: 'number',
      totalAccess: 'number',
      totalTraffic: 'string',
      trafficPercent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopDomainsByFlowResponseBodyTopDomains extends $tea.Model {
  topDomain?: DescribeTopDomainsByFlowResponseBodyTopDomainsTopDomain[];
  static names(): { [key: string]: string } {
    return {
      topDomain: 'TopDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topDomain: { 'type': 'array', 'itemType': DescribeTopDomainsByFlowResponseBodyTopDomainsTopDomain },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserDomainsResponseBodyDomainsPageDataSources extends $tea.Model {
  source?: string[];
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserDomainsResponseBodyDomainsPageData extends $tea.Model {
  cdnType?: string;
  cname?: string;
  description?: string;
  domainName?: string;
  domainStatus?: string;
  gmtCreated?: string;
  gmtModified?: string;
  resourceGroupId?: string;
  sandbox?: string;
  sourceType?: string;
  sources?: DescribeUserDomainsResponseBodyDomainsPageDataSources;
  sslProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      cdnType: 'CdnType',
      cname: 'Cname',
      description: 'Description',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      resourceGroupId: 'ResourceGroupId',
      sandbox: 'Sandbox',
      sourceType: 'SourceType',
      sources: 'Sources',
      sslProtocol: 'SslProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdnType: 'string',
      cname: 'string',
      description: 'string',
      domainName: 'string',
      domainStatus: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      resourceGroupId: 'string',
      sandbox: 'string',
      sourceType: 'string',
      sources: DescribeUserDomainsResponseBodyDomainsPageDataSources,
      sslProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserDomainsResponseBodyDomains extends $tea.Model {
  pageData?: DescribeUserDomainsResponseBodyDomainsPageData[];
  static names(): { [key: string]: string } {
    return {
      pageData: 'PageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageData: { 'type': 'array', 'itemType': DescribeUserDomainsResponseBodyDomainsPageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestDescribeDomainBpsDataResponseBodyBpsDataPerIntervalDataModule extends $tea.Model {
  domesticL2Value?: string;
  domesticValue?: string;
  dynamicDomesticValue?: string;
  dynamicOverseasValue?: string;
  dynamicValue?: string;
  l2Value?: string;
  overseasL2Value?: string;
  overseasValue?: string;
  staticDomesticValue?: string;
  staticOverseasValue?: string;
  staticValue?: string;
  timeStamp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      domesticL2Value: 'DomesticL2Value',
      domesticValue: 'DomesticValue',
      dynamicDomesticValue: 'DynamicDomesticValue',
      dynamicOverseasValue: 'DynamicOverseasValue',
      dynamicValue: 'DynamicValue',
      l2Value: 'L2Value',
      overseasL2Value: 'OverseasL2Value',
      overseasValue: 'OverseasValue',
      staticDomesticValue: 'StaticDomesticValue',
      staticOverseasValue: 'StaticOverseasValue',
      staticValue: 'StaticValue',
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domesticL2Value: 'string',
      domesticValue: 'string',
      dynamicDomesticValue: 'string',
      dynamicOverseasValue: 'string',
      dynamicValue: 'string',
      l2Value: 'string',
      overseasL2Value: 'string',
      overseasValue: 'string',
      staticDomesticValue: 'string',
      staticOverseasValue: 'string',
      staticValue: 'string',
      timeStamp: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestDescribeDomainBpsDataResponseBodyBpsDataPerInterval extends $tea.Model {
  dataModule?: TestDescribeDomainBpsDataResponseBodyBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': TestDescribeDomainBpsDataResponseBodyBpsDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this._endpointMap = {
      'ap-northeast-1': "cdn.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "cdn.ap-southeast-1.aliyuncs.com",
      'ap-southeast-1': "cdn.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "cdn.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "cdn.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "cdn.ap-southeast-1.aliyuncs.com",
      'eu-central-1': "cdn.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "cdn.ap-southeast-1.aliyuncs.com",
      'me-east-1': "cdn.ap-southeast-1.aliyuncs.com",
      'us-east-1': "cdn.ap-southeast-1.aliyuncs.com",
      'us-west-1': "cdn.ap-southeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cdn", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addCdnDomainWithOptions(request: AddCdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<AddCdnDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cdnType)) {
      query["CdnType"] = request.cdnType;
    }

    if (!Util.isUnset(request.checkUrl)) {
      query["CheckUrl"] = request.checkUrl;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.priorities)) {
      query["Priorities"] = request.priorities;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.sourcePort)) {
      query["SourcePort"] = request.sourcePort;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.sources)) {
      query["Sources"] = request.sources;
    }

    if (!Util.isUnset(request.topLevelDomain)) {
      query["TopLevelDomain"] = request.topLevelDomain;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddCdnDomain",
      version: "2014-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddCdnDomainResponse>(await this.callApi(params, req, runtime), new AddCdnDomainResponse({}));
  }

  async addCdnDomain(request: AddCdnDomainRequest): Promise<AddCdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCdnDomainWithOptions(request, runtime);
  }

  async describeCdnDomainDetailWithOptions(request: DescribeCdnDomainDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnDomainDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCdnDomainDetail",
      version: "2014-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCdnDomainDetailResponse>(await this.callApi(params, req, runtime), new DescribeCdnDomainDetailResponse({}));
  }

  async describeCdnDomainDetail(request: DescribeCdnDomainDetailRequest): Promise<DescribeCdnDomainDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnDomainDetailWithOptions(request, runtime);
  }

  async describeCdnDomainLogsWithOptions(request: DescribeCdnDomainLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnDomainLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.logDay)) {
      query["LogDay"] = request.logDay;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCdnDomainLogs",
      version: "2014-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCdnDomainLogsResponse>(await this.callApi(params, req, runtime), new DescribeCdnDomainLogsResponse({}));
  }

  async describeCdnDomainLogs(request: DescribeCdnDomainLogsRequest): Promise<DescribeCdnDomainLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnDomainLogsWithOptions(request, runtime);
  }

  async describeCdnServiceWithOptions(request: DescribeCdnServiceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCdnServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCdnService",
      version: "2014-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCdnServiceResponse>(await this.callApi(params, req, runtime), new DescribeCdnServiceResponse({}));
  }

  async describeCdnService(request: DescribeCdnServiceRequest): Promise<DescribeCdnServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCdnServiceWithOptions(request, runtime);
  }

  async describeDomainBpsDataWithOptions(request: DescribeDomainBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainBpsDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.domainType)) {
      query["DomainType"] = request.domainType;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!Util.isUnset(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.timeMerge)) {
      query["TimeMerge"] = request.timeMerge;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainBpsData",
      version: "2014-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainBpsDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainBpsDataResponse({}));
  }

  async describeDomainBpsData(request: DescribeDomainBpsDataRequest): Promise<DescribeDomainBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainBpsDataWithOptions(request, runtime);
  }

  async describeDomainBpsDataByTimeStampWithOptions(request: DescribeDomainBpsDataByTimeStampRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainBpsDataByTimeStampResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ispNames)) {
      query["IspNames"] = request.ispNames;
    }

    if (!Util.isUnset(request.locationNames)) {
      query["LocationNames"] = request.locationNames;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.timePoint)) {
      query["TimePoint"] = request.timePoint;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainBpsDataByTimeStamp",
      version: "2014-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainBpsDataByTimeStampResponse>(await this.callApi(params, req, runtime), new DescribeDomainBpsDataByTimeStampResponse({}));
  }

  async describeDomainBpsDataByTimeStamp(request: DescribeDomainBpsDataByTimeStampRequest): Promise<DescribeDomainBpsDataByTimeStampResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainBpsDataByTimeStampWithOptions(request, runtime);
  }

  async describeDomainFileSizeProportionDataWithOptions(request: DescribeDomainFileSizeProportionDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainFileSizeProportionDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainFileSizeProportionData",
      version: "2014-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainFileSizeProportionDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainFileSizeProportionDataResponse({}));
  }

  async describeDomainFileSizeProportionData(request: DescribeDomainFileSizeProportionDataRequest): Promise<DescribeDomainFileSizeProportionDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainFileSizeProportionDataWithOptions(request, runtime);
  }

  async describeDomainFlowDataWithOptions(request: DescribeDomainFlowDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainFlowDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.domainType)) {
      query["DomainType"] = request.domainType;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!Util.isUnset(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.timeMerge)) {
      query["TimeMerge"] = request.timeMerge;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainFlowData",
      version: "2014-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainFlowDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainFlowDataResponse({}));
  }

  async describeDomainFlowData(request: DescribeDomainFlowDataRequest): Promise<DescribeDomainFlowDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainFlowDataWithOptions(request, runtime);
  }

  async describeDomainHitRateDataWithOptions(request: DescribeDomainHitRateDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainHitRateDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainHitRateData",
      version: "2014-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainHitRateDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainHitRateDataResponse({}));
  }

  async describeDomainHitRateData(request: DescribeDomainHitRateDataRequest): Promise<DescribeDomainHitRateDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainHitRateDataWithOptions(request, runtime);
  }

  async describeDomainHttpCodeDataWithOptions(request: DescribeDomainHttpCodeDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainHttpCodeDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!Util.isUnset(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.timeMerge)) {
      query["TimeMerge"] = request.timeMerge;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainHttpCodeData",
      version: "2014-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainHttpCodeDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainHttpCodeDataResponse({}));
  }

  async describeDomainHttpCodeData(request: DescribeDomainHttpCodeDataRequest): Promise<DescribeDomainHttpCodeDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainHttpCodeDataWithOptions(request, runtime);
  }

  async describeDomainISPDataWithOptions(request: DescribeDomainISPDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainISPDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainISPData",
      version: "2014-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainISPDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainISPDataResponse({}));
  }

  async describeDomainISPData(request: DescribeDomainISPDataRequest): Promise<DescribeDomainISPDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainISPDataWithOptions(request, runtime);
  }

  async describeDomainQpsDataWithOptions(request: DescribeDomainQpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainQpsDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.domainType)) {
      query["DomainType"] = request.domainType;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!Util.isUnset(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.timeMerge)) {
      query["TimeMerge"] = request.timeMerge;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainQpsData",
      version: "2014-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainQpsDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainQpsDataResponse({}));
  }

  async describeDomainQpsData(request: DescribeDomainQpsDataRequest): Promise<DescribeDomainQpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainQpsDataWithOptions(request, runtime);
  }

  async describeDomainRegionDataWithOptions(request: DescribeDomainRegionDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainRegionDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainRegionData",
      version: "2014-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainRegionDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainRegionDataResponse({}));
  }

  async describeDomainRegionData(request: DescribeDomainRegionDataRequest): Promise<DescribeDomainRegionDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainRegionDataWithOptions(request, runtime);
  }

  async describeDomainReqHitRateDataWithOptions(request: DescribeDomainReqHitRateDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainReqHitRateDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainReqHitRateData",
      version: "2014-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainReqHitRateDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainReqHitRateDataResponse({}));
  }

  async describeDomainReqHitRateData(request: DescribeDomainReqHitRateDataRequest): Promise<DescribeDomainReqHitRateDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainReqHitRateDataWithOptions(request, runtime);
  }

  async describeDomainSrcBpsDataWithOptions(request: DescribeDomainSrcBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainSrcBpsDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.fixTimeGap)) {
      query["FixTimeGap"] = request.fixTimeGap;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.timeMerge)) {
      query["TimeMerge"] = request.timeMerge;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainSrcBpsData",
      version: "2014-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainSrcBpsDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainSrcBpsDataResponse({}));
  }

  async describeDomainSrcBpsData(request: DescribeDomainSrcBpsDataRequest): Promise<DescribeDomainSrcBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainSrcBpsDataWithOptions(request, runtime);
  }

  async describeDomainSrcFlowDataWithOptions(request: DescribeDomainSrcFlowDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainSrcFlowDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.fixTimeGap)) {
      query["FixTimeGap"] = request.fixTimeGap;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.timeMerge)) {
      query["TimeMerge"] = request.timeMerge;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainSrcFlowData",
      version: "2014-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainSrcFlowDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainSrcFlowDataResponse({}));
  }

  async describeDomainSrcFlowData(request: DescribeDomainSrcFlowDataRequest): Promise<DescribeDomainSrcFlowDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainSrcFlowDataWithOptions(request, runtime);
  }

  async describeDomainUvDataWithOptions(request: DescribeDomainUvDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainUvDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainUvData",
      version: "2014-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainUvDataResponse>(await this.callApi(params, req, runtime), new DescribeDomainUvDataResponse({}));
  }

  async describeDomainUvData(request: DescribeDomainUvDataRequest): Promise<DescribeDomainUvDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainUvDataWithOptions(request, runtime);
  }

  async describeDomainsBySourceWithOptions(request: DescribeDomainsBySourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainsBySourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.sources)) {
      query["Sources"] = request.sources;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainsBySource",
      version: "2014-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainsBySourceResponse>(await this.callApi(params, req, runtime), new DescribeDomainsBySourceResponse({}));
  }

  async describeDomainsBySource(request: DescribeDomainsBySourceRequest): Promise<DescribeDomainsBySourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainsBySourceWithOptions(request, runtime);
  }

  async describeDomainsUsageByDayWithOptions(request: DescribeDomainsUsageByDayRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainsUsageByDayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainsUsageByDay",
      version: "2014-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainsUsageByDayResponse>(await this.callApi(params, req, runtime), new DescribeDomainsUsageByDayResponse({}));
  }

  async describeDomainsUsageByDay(request: DescribeDomainsUsageByDayRequest): Promise<DescribeDomainsUsageByDayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainsUsageByDayWithOptions(request, runtime);
  }

  async describeRefreshQuotaWithOptions(request: DescribeRefreshQuotaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRefreshQuotaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRefreshQuota",
      version: "2014-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRefreshQuotaResponse>(await this.callApi(params, req, runtime), new DescribeRefreshQuotaResponse({}));
  }

  async describeRefreshQuota(request: DescribeRefreshQuotaRequest): Promise<DescribeRefreshQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRefreshQuotaWithOptions(request, runtime);
  }

  async describeTopDomainsByFlowWithOptions(request: DescribeTopDomainsByFlowRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTopDomainsByFlowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTopDomainsByFlow",
      version: "2014-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTopDomainsByFlowResponse>(await this.callApi(params, req, runtime), new DescribeTopDomainsByFlowResponse({}));
  }

  async describeTopDomainsByFlow(request: DescribeTopDomainsByFlowRequest): Promise<DescribeTopDomainsByFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTopDomainsByFlowWithOptions(request, runtime);
  }

  async describeUserDomainsWithOptions(request: DescribeUserDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserDomainsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cdnType)) {
      query["CdnType"] = request.cdnType;
    }

    if (!Util.isUnset(request.checkDomainShow)) {
      query["CheckDomainShow"] = request.checkDomainShow;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.domainSearchType)) {
      query["DomainSearchType"] = request.domainSearchType;
    }

    if (!Util.isUnset(request.domainStatus)) {
      query["DomainStatus"] = request.domainStatus;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!Util.isUnset(request.sources)) {
      query["Sources"] = request.sources;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserDomains",
      version: "2014-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserDomainsResponse>(await this.callApi(params, req, runtime), new DescribeUserDomainsResponse({}));
  }

  async describeUserDomains(request: DescribeUserDomainsRequest): Promise<DescribeUserDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserDomainsWithOptions(request, runtime);
  }

  async openCdnServiceWithOptions(request: OpenCdnServiceRequest, runtime: $Util.RuntimeOptions): Promise<OpenCdnServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OpenCdnService",
      version: "2014-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenCdnServiceResponse>(await this.callApi(params, req, runtime), new OpenCdnServiceResponse({}));
  }

  async openCdnService(request: OpenCdnServiceRequest): Promise<OpenCdnServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openCdnServiceWithOptions(request, runtime);
  }

  async pushObjectCacheWithOptions(request: PushObjectCacheRequest, runtime: $Util.RuntimeOptions): Promise<PushObjectCacheResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.area)) {
      query["Area"] = request.area;
    }

    if (!Util.isUnset(request.objectPath)) {
      query["ObjectPath"] = request.objectPath;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PushObjectCache",
      version: "2014-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PushObjectCacheResponse>(await this.callApi(params, req, runtime), new PushObjectCacheResponse({}));
  }

  async pushObjectCache(request: PushObjectCacheRequest): Promise<PushObjectCacheResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushObjectCacheWithOptions(request, runtime);
  }

  async refreshObjectCachesWithOptions(request: RefreshObjectCachesRequest, runtime: $Util.RuntimeOptions): Promise<RefreshObjectCachesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.objectPath)) {
      query["ObjectPath"] = request.objectPath;
    }

    if (!Util.isUnset(request.objectType)) {
      query["ObjectType"] = request.objectType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefreshObjectCaches",
      version: "2014-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefreshObjectCachesResponse>(await this.callApi(params, req, runtime), new RefreshObjectCachesResponse({}));
  }

  async refreshObjectCaches(request: RefreshObjectCachesRequest): Promise<RefreshObjectCachesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshObjectCachesWithOptions(request, runtime);
  }

  async testDescribeDomainBpsDataWithOptions(request: TestDescribeDomainBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<TestDescribeDomainBpsDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.domainType)) {
      query["DomainType"] = request.domainType;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ispNameEn)) {
      query["IspNameEn"] = request.ispNameEn;
    }

    if (!Util.isUnset(request.locationNameEn)) {
      query["LocationNameEn"] = request.locationNameEn;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.timeMerge)) {
      query["TimeMerge"] = request.timeMerge;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TestDescribeDomainBpsData",
      version: "2014-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TestDescribeDomainBpsDataResponse>(await this.callApi(params, req, runtime), new TestDescribeDomainBpsDataResponse({}));
  }

  async testDescribeDomainBpsData(request: TestDescribeDomainBpsDataRequest): Promise<TestDescribeDomainBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.testDescribeDomainBpsDataWithOptions(request, runtime);
  }

}
