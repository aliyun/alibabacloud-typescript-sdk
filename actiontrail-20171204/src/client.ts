// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateTrailRequest extends $tea.Model {
  name?: string;
  ossBucketName?: string;
  ossKeyPrefix?: string;
  roleName?: string;
  slsProjectArn?: string;
  slsWriteRoleArn?: string;
  eventRW?: string;
  trailRegion?: string;
  mnsTopicArn?: string;
  isOrganizationTrail?: boolean;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ossBucketName: 'OssBucketName',
      ossKeyPrefix: 'OssKeyPrefix',
      roleName: 'RoleName',
      slsProjectArn: 'SlsProjectArn',
      slsWriteRoleArn: 'SlsWriteRoleArn',
      eventRW: 'EventRW',
      trailRegion: 'TrailRegion',
      mnsTopicArn: 'MnsTopicArn',
      isOrganizationTrail: 'IsOrganizationTrail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ossBucketName: 'string',
      ossKeyPrefix: 'string',
      roleName: 'string',
      slsProjectArn: 'string',
      slsWriteRoleArn: 'string',
      eventRW: 'string',
      trailRegion: 'string',
      mnsTopicArn: 'string',
      isOrganizationTrail: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrailResponseBody extends $tea.Model {
  mnsTopicArn?: string;
  slsProjectArn?: string;
  roleName?: string;
  eventRW?: string;
  requestId?: string;
  homeRegion?: string;
  ossKeyPrefix?: string;
  ossBucketName?: string;
  slsWriteRoleArn?: string;
  trailRegion?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      mnsTopicArn: 'MnsTopicArn',
      slsProjectArn: 'SlsProjectArn',
      roleName: 'RoleName',
      eventRW: 'EventRW',
      requestId: 'RequestId',
      homeRegion: 'HomeRegion',
      ossKeyPrefix: 'OssKeyPrefix',
      ossBucketName: 'OssBucketName',
      slsWriteRoleArn: 'SlsWriteRoleArn',
      trailRegion: 'TrailRegion',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mnsTopicArn: 'string',
      slsProjectArn: 'string',
      roleName: 'string',
      eventRW: 'string',
      requestId: 'string',
      homeRegion: 'string',
      ossKeyPrefix: 'string',
      ossBucketName: 'string',
      slsWriteRoleArn: 'string',
      trailRegion: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTrailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTrailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrailRequest extends $tea.Model {
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

export class DeleteTrailResponseBody extends $tea.Model {
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

export class DeleteTrailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteTrailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteTrailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeRegionsResponseBodyRegions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: DescribeRegionsResponseBodyRegions,
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

export class DescribeTrailsRequest extends $tea.Model {
  includeShadowTrails?: boolean;
  nameList?: string;
  includeOrganizationTrail?: boolean;
  static names(): { [key: string]: string } {
    return {
      includeShadowTrails: 'IncludeShadowTrails',
      nameList: 'NameList',
      includeOrganizationTrail: 'IncludeOrganizationTrail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeShadowTrails: 'boolean',
      nameList: 'string',
      includeOrganizationTrail: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrailsResponseBody extends $tea.Model {
  requestId?: string;
  trailList?: DescribeTrailsResponseBodyTrailList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trailList: 'TrailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trailList: { 'type': 'array', 'itemType': DescribeTrailsResponseBodyTrailList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTrailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTrailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrailStatusRequest extends $tea.Model {
  name?: string;
  isOrganizationTrail?: boolean;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      isOrganizationTrail: 'IsOrganizationTrail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      isOrganizationTrail: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrailStatusResponseBody extends $tea.Model {
  requestId?: string;
  startLoggingTime?: string;
  latestDeliveryError?: string;
  stopLoggingTime?: string;
  isLogging?: boolean;
  latestDeliveryTime?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      startLoggingTime: 'StartLoggingTime',
      latestDeliveryError: 'LatestDeliveryError',
      stopLoggingTime: 'StopLoggingTime',
      isLogging: 'IsLogging',
      latestDeliveryTime: 'LatestDeliveryTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      startLoggingTime: 'string',
      latestDeliveryError: 'string',
      stopLoggingTime: 'string',
      isLogging: 'boolean',
      latestDeliveryTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrailStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTrailStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTrailStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupEventsRequest extends $tea.Model {
  event?: string;
  request?: string;
  eventType?: string;
  serviceName?: string;
  eventName?: string;
  user?: string;
  resourceType?: string;
  resourceName?: string;
  eventRW?: string;
  eventAccessKeyId?: string;
  nextToken?: string;
  maxResults?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      request: 'Request',
      eventType: 'EventType',
      serviceName: 'ServiceName',
      eventName: 'EventName',
      user: 'User',
      resourceType: 'ResourceType',
      resourceName: 'ResourceName',
      eventRW: 'EventRW',
      eventAccessKeyId: 'EventAccessKeyId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'string',
      request: 'string',
      eventType: 'string',
      serviceName: 'string',
      eventName: 'string',
      user: 'string',
      resourceType: 'string',
      resourceName: 'string',
      eventRW: 'string',
      eventAccessKeyId: 'string',
      nextToken: 'string',
      maxResults: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupEventsResponseBody extends $tea.Model {
  endTime?: string;
  nextToken?: string;
  requestId?: string;
  events?: { [key: string]: any }[];
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      events: 'Events',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      nextToken: 'string',
      requestId: 'string',
      events: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: LookupEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: LookupEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartLoggingRequest extends $tea.Model {
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

export class StartLoggingResponseBody extends $tea.Model {
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

export class StartLoggingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartLoggingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartLoggingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopLoggingRequest extends $tea.Model {
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

export class StopLoggingResponseBody extends $tea.Model {
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

export class StopLoggingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopLoggingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopLoggingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrailRequest extends $tea.Model {
  name?: string;
  ossBucketName?: string;
  ossKeyPrefix?: string;
  roleName?: string;
  slsProjectArn?: string;
  slsWriteRoleArn?: string;
  eventRW?: string;
  trailRegion?: string;
  mnsTopicArn?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ossBucketName: 'OssBucketName',
      ossKeyPrefix: 'OssKeyPrefix',
      roleName: 'RoleName',
      slsProjectArn: 'SlsProjectArn',
      slsWriteRoleArn: 'SlsWriteRoleArn',
      eventRW: 'EventRW',
      trailRegion: 'TrailRegion',
      mnsTopicArn: 'MnsTopicArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ossBucketName: 'string',
      ossKeyPrefix: 'string',
      roleName: 'string',
      slsProjectArn: 'string',
      slsWriteRoleArn: 'string',
      eventRW: 'string',
      trailRegion: 'string',
      mnsTopicArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrailResponseBody extends $tea.Model {
  mnsTopicArn?: string;
  slsProjectArn?: string;
  roleName?: string;
  eventRW?: string;
  requestId?: string;
  homeRegion?: string;
  ossKeyPrefix?: string;
  ossBucketName?: string;
  slsWriteRoleArn?: string;
  trailRegion?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      mnsTopicArn: 'MnsTopicArn',
      slsProjectArn: 'SlsProjectArn',
      roleName: 'RoleName',
      eventRW: 'EventRW',
      requestId: 'RequestId',
      homeRegion: 'HomeRegion',
      ossKeyPrefix: 'OssKeyPrefix',
      ossBucketName: 'OssBucketName',
      slsWriteRoleArn: 'SlsWriteRoleArn',
      trailRegion: 'TrailRegion',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mnsTopicArn: 'string',
      slsProjectArn: 'string',
      roleName: 'string',
      eventRW: 'string',
      requestId: 'string',
      homeRegion: 'string',
      ossKeyPrefix: 'string',
      ossBucketName: 'string',
      slsWriteRoleArn: 'string',
      trailRegion: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateTrailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateTrailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
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

export class DescribeTrailsResponseBodyTrailList extends $tea.Model {
  trailRegion?: string;
  status?: string;
  updateTime?: string;
  homeRegion?: string;
  createTime?: string;
  ossKeyPrefix?: string;
  eventRW?: string;
  startLoggingTime?: string;
  mnsTopicArn?: string;
  roleName?: string;
  slsProjectArn?: string;
  isOrganizationTrail?: boolean;
  slsWriteRoleArn?: string;
  stopLoggingTime?: string;
  name?: string;
  ossBucketName?: string;
  static names(): { [key: string]: string } {
    return {
      trailRegion: 'TrailRegion',
      status: 'Status',
      updateTime: 'UpdateTime',
      homeRegion: 'HomeRegion',
      createTime: 'CreateTime',
      ossKeyPrefix: 'OssKeyPrefix',
      eventRW: 'EventRW',
      startLoggingTime: 'StartLoggingTime',
      mnsTopicArn: 'MnsTopicArn',
      roleName: 'RoleName',
      slsProjectArn: 'SlsProjectArn',
      isOrganizationTrail: 'IsOrganizationTrail',
      slsWriteRoleArn: 'SlsWriteRoleArn',
      stopLoggingTime: 'StopLoggingTime',
      name: 'Name',
      ossBucketName: 'OssBucketName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trailRegion: 'string',
      status: 'string',
      updateTime: 'string',
      homeRegion: 'string',
      createTime: 'string',
      ossKeyPrefix: 'string',
      eventRW: 'string',
      startLoggingTime: 'string',
      mnsTopicArn: 'string',
      roleName: 'string',
      slsProjectArn: 'string',
      isOrganizationTrail: 'boolean',
      slsWriteRoleArn: 'string',
      stopLoggingTime: 'string',
      name: 'string',
      ossBucketName: 'string',
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
    this._endpointMap = {
      'ap-northeast-2-pop': "actiontrail.ap-northeast-1.aliyuncs.com",
      'cn-beijing-finance-1': "actiontrail.aliyuncs.com",
      'cn-beijing-finance-pop': "actiontrail.aliyuncs.com",
      'cn-beijing-gov-1': "actiontrail.aliyuncs.com",
      'cn-beijing-nu16-b01': "actiontrail.aliyuncs.com",
      'cn-edge-1': "actiontrail.aliyuncs.com",
      'cn-fujian': "actiontrail.aliyuncs.com",
      'cn-haidian-cm12-c01': "actiontrail.aliyuncs.com",
      'cn-hangzhou-bj-b01': "actiontrail.aliyuncs.com",
      'cn-hangzhou-finance': "actiontrail.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "actiontrail.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "actiontrail.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "actiontrail.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "actiontrail.aliyuncs.com",
      'cn-hangzhou-test-306': "actiontrail.aliyuncs.com",
      'cn-hongkong-finance-pop': "actiontrail.aliyuncs.com",
      'cn-qingdao-nebula': "actiontrail.aliyuncs.com",
      'cn-shanghai-et15-b01': "actiontrail.aliyuncs.com",
      'cn-shanghai-et2-b01': "actiontrail.aliyuncs.com",
      'cn-shanghai-inner': "actiontrail.aliyuncs.com",
      'cn-shanghai-internal-test-1': "actiontrail.aliyuncs.com",
      'cn-shenzhen-finance-1': "actiontrail.aliyuncs.com",
      'cn-shenzhen-inner': "actiontrail.aliyuncs.com",
      'cn-shenzhen-st4-d01': "actiontrail.aliyuncs.com",
      'cn-shenzhen-su18-b01': "actiontrail.aliyuncs.com",
      'cn-wuhan': "actiontrail.aliyuncs.com",
      'cn-yushanfang': "actiontrail.aliyuncs.com",
      'cn-zhangbei-na61-b01': "actiontrail.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "actiontrail.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "actiontrail.aliyuncs.com",
      'eu-west-1-oxs': "actiontrail.ap-northeast-1.aliyuncs.com",
      'rus-west-1-pop': "actiontrail.ap-northeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("actiontrail", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createTrailWithOptions(request: CreateTrailRequest, runtime: $Util.RuntimeOptions): Promise<CreateTrailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateTrailResponse>(await this.doRPCRequest("CreateTrail", "2017-12-04", "HTTPS", "POST", "AK", "json", req, runtime), new CreateTrailResponse({}));
  }

  async createTrail(request: CreateTrailRequest): Promise<CreateTrailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTrailWithOptions(request, runtime);
  }

  async deleteTrailWithOptions(request: DeleteTrailRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTrailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteTrailResponse>(await this.doRPCRequest("DeleteTrail", "2017-12-04", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteTrailResponse({}));
  }

  async deleteTrail(request: DeleteTrailRequest): Promise<DeleteTrailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTrailWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2017-12-04", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(runtime);
  }

  async describeTrailsWithOptions(request: DescribeTrailsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTrailsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTrailsResponse>(await this.doRPCRequest("DescribeTrails", "2017-12-04", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTrailsResponse({}));
  }

  async describeTrails(request: DescribeTrailsRequest): Promise<DescribeTrailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTrailsWithOptions(request, runtime);
  }

  async getTrailStatusWithOptions(request: GetTrailStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetTrailStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTrailStatusResponse>(await this.doRPCRequest("GetTrailStatus", "2017-12-04", "HTTPS", "POST", "AK", "json", req, runtime), new GetTrailStatusResponse({}));
  }

  async getTrailStatus(request: GetTrailStatusRequest): Promise<GetTrailStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTrailStatusWithOptions(request, runtime);
  }

  async lookupEventsWithOptions(request: LookupEventsRequest, runtime: $Util.RuntimeOptions): Promise<LookupEventsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<LookupEventsResponse>(await this.doRPCRequest("LookupEvents", "2017-12-04", "HTTPS", "POST", "AK", "json", req, runtime), new LookupEventsResponse({}));
  }

  async lookupEvents(request: LookupEventsRequest): Promise<LookupEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.lookupEventsWithOptions(request, runtime);
  }

  async startLoggingWithOptions(request: StartLoggingRequest, runtime: $Util.RuntimeOptions): Promise<StartLoggingResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<StartLoggingResponse>(await this.doRPCRequest("StartLogging", "2017-12-04", "HTTPS", "GET", "AK", "json", req, runtime), new StartLoggingResponse({}));
  }

  async startLogging(request: StartLoggingRequest): Promise<StartLoggingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startLoggingWithOptions(request, runtime);
  }

  async stopLoggingWithOptions(request: StopLoggingRequest, runtime: $Util.RuntimeOptions): Promise<StopLoggingResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<StopLoggingResponse>(await this.doRPCRequest("StopLogging", "2017-12-04", "HTTPS", "GET", "AK", "json", req, runtime), new StopLoggingResponse({}));
  }

  async stopLogging(request: StopLoggingRequest): Promise<StopLoggingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopLoggingWithOptions(request, runtime);
  }

  async updateTrailWithOptions(request: UpdateTrailRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTrailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateTrailResponse>(await this.doRPCRequest("UpdateTrail", "2017-12-04", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateTrailResponse({}));
  }

  async updateTrail(request: UpdateTrailRequest): Promise<UpdateTrailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTrailWithOptions(request, runtime);
  }

}
