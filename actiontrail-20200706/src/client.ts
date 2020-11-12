// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ListDeliveryHistoryJobsRequest extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeliveryHistoryJobsResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  deliveryHistoryJobs: ListDeliveryHistoryJobsResponseDeliveryHistoryJobs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      deliveryHistoryJobs: 'DeliveryHistoryJobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      deliveryHistoryJobs: { 'type': 'array', 'itemType': ListDeliveryHistoryJobsResponseDeliveryHistoryJobs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeliveryHistoryJobRequest extends $tea.Model {
  trailName: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      trailName: 'TrailName',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trailName: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeliveryHistoryJobResponse extends $tea.Model {
  requestId: string;
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

export class LookupEventsRequest extends $tea.Model {
  nextToken?: string;
  maxResults?: string;
  startTime?: string;
  endTime?: string;
  lookupAttribute?: LookupEventsRequestLookupAttribute[];
  direction?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      startTime: 'StartTime',
      endTime: 'EndTime',
      lookupAttribute: 'LookupAttribute',
      direction: 'Direction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'string',
      startTime: 'string',
      endTime: 'string',
      lookupAttribute: { 'type': 'array', 'itemType': LookupEventsRequestLookupAttribute },
      direction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupEventsResponse extends $tea.Model {
  requestId: string;
  nextToken: string;
  startTime: string;
  endTime: string;
  events: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nextToken: 'NextToken',
      startTime: 'StartTime',
      endTime: 'EndTime',
      events: 'Events',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nextToken: 'string',
      startTime: 'string',
      endTime: 'string',
      events: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeliveryHistoryJobsResponseDeliveryHistoryJobs extends $tea.Model {
  trailName: string;
  createdTime: string;
  updatedTime: string;
  homeRegion: string;
  static names(): { [key: string]: string } {
    return {
      trailName: 'TrailName',
      createdTime: 'CreatedTime',
      updatedTime: 'UpdatedTime',
      homeRegion: 'HomeRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trailName: 'string',
      createdTime: 'string',
      updatedTime: 'string',
      homeRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupEventsRequestLookupAttribute extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends RPC {

  constructor(config: $RPC.Config) {
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


  async listDeliveryHistoryJobsWithOptions(request: ListDeliveryHistoryJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListDeliveryHistoryJobsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListDeliveryHistoryJobsResponse>(await this.doRequest("ListDeliveryHistoryJobs", "HTTPS", "POST", "2020-07-06", "AK", null, $tea.toMap(request), runtime), new ListDeliveryHistoryJobsResponse({}));
  }

  async listDeliveryHistoryJobs(request: ListDeliveryHistoryJobsRequest): Promise<ListDeliveryHistoryJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeliveryHistoryJobsWithOptions(request, runtime);
  }

  async createDeliveryHistoryJobWithOptions(request: CreateDeliveryHistoryJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateDeliveryHistoryJobResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateDeliveryHistoryJobResponse>(await this.doRequest("CreateDeliveryHistoryJob", "HTTPS", "POST", "2020-07-06", "AK", null, $tea.toMap(request), runtime), new CreateDeliveryHistoryJobResponse({}));
  }

  async createDeliveryHistoryJob(request: CreateDeliveryHistoryJobRequest): Promise<CreateDeliveryHistoryJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDeliveryHistoryJobWithOptions(request, runtime);
  }

  async lookupEventsWithOptions(request: LookupEventsRequest, runtime: $Util.RuntimeOptions): Promise<LookupEventsResponse> {
    Util.validateModel(request);
    return $tea.cast<LookupEventsResponse>(await this.doRequest("LookupEvents", "HTTPS", "POST", "2020-07-06", "AK", null, $tea.toMap(request), runtime), new LookupEventsResponse({}));
  }

  async lookupEvents(request: LookupEventsRequest): Promise<LookupEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.lookupEventsWithOptions(request, runtime);
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

}
