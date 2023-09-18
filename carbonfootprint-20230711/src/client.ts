// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AllowResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllowResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AllowResponseBody;
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
      body: AllowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryDataRequest extends $tea.Model {
  endTime?: string;
  group?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      group: 'Group',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      group: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryDataResponseBody extends $tea.Model {
  data?: GetSummaryDataResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetSummaryDataResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSummaryDataResponseBody;
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
      body: GetSummaryDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCarbonTrackRequest extends $tea.Model {
  endTime?: string;
  group?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      group: 'Group',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      group: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCarbonTrackResponseBody extends $tea.Model {
  data?: QueryCarbonTrackResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryCarbonTrackResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCarbonTrackResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryCarbonTrackResponseBody;
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
      body: QueryCarbonTrackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyResponseBody extends $tea.Model {
  data?: VerifyResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: VerifyResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: VerifyResponseBody;
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
      body: VerifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryDataResponseBodyData extends $tea.Model {
  lastMonthConsumptionConversion?: string;
  lastYearConsumptionConversion?: string;
  lastYearConsumptionConversionSum?: string;
  latestDataTime?: string;
  thisMonthConsumptionConversion?: string;
  thisYearConsumptionConversion?: string;
  totalCarbonConsumptionConversion?: string;
  static names(): { [key: string]: string } {
    return {
      lastMonthConsumptionConversion: 'LastMonthConsumptionConversion',
      lastYearConsumptionConversion: 'LastYearConsumptionConversion',
      lastYearConsumptionConversionSum: 'LastYearConsumptionConversionSum',
      latestDataTime: 'LatestDataTime',
      thisMonthConsumptionConversion: 'ThisMonthConsumptionConversion',
      thisYearConsumptionConversion: 'ThisYearConsumptionConversion',
      totalCarbonConsumptionConversion: 'TotalCarbonConsumptionConversion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastMonthConsumptionConversion: 'string',
      lastYearConsumptionConversion: 'string',
      lastYearConsumptionConversionSum: 'string',
      latestDataTime: 'string',
      thisMonthConsumptionConversion: 'string',
      thisYearConsumptionConversion: 'string',
      totalCarbonConsumptionConversion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCarbonTrackResponseBodyData extends $tea.Model {
  productCode?: string;
  quotaValue?: number;
  region?: string;
  statisticsDate?: number;
  subUid?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      quotaValue: 'QuotaValue',
      region: 'Region',
      statisticsDate: 'StatisticsDate',
      subUid: 'SubUid',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      quotaValue: 'number',
      region: 'string',
      statisticsDate: 'number',
      subUid: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyResponseBodyData extends $tea.Model {
  allowedUids?: string[];
  static names(): { [key: string]: string } {
    return {
      allowedUids: 'AllowedUids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedUids: { 'type': 'array', 'itemType': 'string' },
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
    this._endpoint = this.getEndpoint("carbonfootprint", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async allowWithOptions(runtime: $Util.RuntimeOptions): Promise<AllowResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "Allow",
      version: "2023-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AllowResponse>(await this.callApi(params, req, runtime), new AllowResponse({}));
  }

  async allow(): Promise<AllowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allowWithOptions(runtime);
  }

  async getSummaryDataWithOptions(request: GetSummaryDataRequest, runtime: $Util.RuntimeOptions): Promise<GetSummaryDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.group)) {
      query["Group"] = request.group;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSummaryData",
      version: "2023-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSummaryDataResponse>(await this.callApi(params, req, runtime), new GetSummaryDataResponse({}));
  }

  async getSummaryData(request: GetSummaryDataRequest): Promise<GetSummaryDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSummaryDataWithOptions(request, runtime);
  }

  async queryCarbonTrackWithOptions(request: QueryCarbonTrackRequest, runtime: $Util.RuntimeOptions): Promise<QueryCarbonTrackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.group)) {
      query["Group"] = request.group;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryCarbonTrack",
      version: "2023-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryCarbonTrackResponse>(await this.callApi(params, req, runtime), new QueryCarbonTrackResponse({}));
  }

  async queryCarbonTrack(request: QueryCarbonTrackRequest): Promise<QueryCarbonTrackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryCarbonTrackWithOptions(request, runtime);
  }

  async verifyWithOptions(runtime: $Util.RuntimeOptions): Promise<VerifyResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "Verify",
      version: "2023-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyResponse>(await this.callApi(params, req, runtime), new VerifyResponse({}));
  }

  async verify(): Promise<VerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyWithOptions(runtime);
  }

}
