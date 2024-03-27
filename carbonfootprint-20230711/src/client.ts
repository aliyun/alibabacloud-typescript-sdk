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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AllowResponseBody;
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
  uids?: string[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      group: 'Group',
      startTime: 'StartTime',
      uids: 'Uids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      group: 'string',
      startTime: 'string',
      uids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryDataShrinkRequest extends $tea.Model {
  endTime?: string;
  group?: string;
  startTime?: string;
  uidsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      group: 'Group',
      startTime: 'StartTime',
      uidsShrink: 'Uids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      group: 'string',
      startTime: 'string',
      uidsShrink: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSummaryDataResponseBody;
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
  filterRDAccount?: number;
  group?: string;
  startTime?: string;
  topNum?: number;
  uids?: string[];
  useCode?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      filterRDAccount: 'FilterRDAccount',
      group: 'Group',
      startTime: 'StartTime',
      topNum: 'TopNum',
      uids: 'Uids',
      useCode: 'UseCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      filterRDAccount: 'number',
      group: 'string',
      startTime: 'string',
      topNum: 'number',
      uids: { 'type': 'array', 'itemType': 'string' },
      useCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCarbonTrackShrinkRequest extends $tea.Model {
  endTime?: string;
  filterRDAccount?: number;
  group?: string;
  startTime?: string;
  topNum?: number;
  uidsShrink?: string;
  useCode?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      filterRDAccount: 'FilterRDAccount',
      group: 'Group',
      startTime: 'StartTime',
      topNum: 'TopNum',
      uidsShrink: 'Uids',
      useCode: 'UseCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      filterRDAccount: 'number',
      group: 'string',
      startTime: 'string',
      topNum: 'number',
      uidsShrink: 'string',
      useCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryCarbonTrackResponseBody;
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

export class QueryMultiAccountCarbonTrackRequest extends $tea.Model {
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMultiAccountCarbonTrackResponseBody extends $tea.Model {
  data?: QueryMultiAccountCarbonTrackResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryMultiAccountCarbonTrackResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMultiAccountCarbonTrackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMultiAccountCarbonTrackResponseBody;
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
      body: QueryMultiAccountCarbonTrackResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyResponseBody;
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
  aircraftConsumptionConversion?: string;
  carConsumptionConversion?: string;
  lastMonthConsumptionConversion?: string;
  lastYearConsumptionConversion?: string;
  lastYearConsumptionConversionSum?: string;
  latestDataTime?: string;
  thisMonthConsumptionConversion?: string;
  thisYearConsumptionConversion?: string;
  totalCarbonConsumptionConversion?: string;
  treeConsumptionConversion?: string;
  static names(): { [key: string]: string } {
    return {
      aircraftConsumptionConversion: 'AircraftConsumptionConversion',
      carConsumptionConversion: 'CarConsumptionConversion',
      lastMonthConsumptionConversion: 'LastMonthConsumptionConversion',
      lastYearConsumptionConversion: 'LastYearConsumptionConversion',
      lastYearConsumptionConversionSum: 'LastYearConsumptionConversionSum',
      latestDataTime: 'LatestDataTime',
      thisMonthConsumptionConversion: 'ThisMonthConsumptionConversion',
      thisYearConsumptionConversion: 'ThisYearConsumptionConversion',
      totalCarbonConsumptionConversion: 'TotalCarbonConsumptionConversion',
      treeConsumptionConversion: 'TreeConsumptionConversion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aircraftConsumptionConversion: 'string',
      carConsumptionConversion: 'string',
      lastMonthConsumptionConversion: 'string',
      lastYearConsumptionConversion: 'string',
      lastYearConsumptionConversionSum: 'string',
      latestDataTime: 'string',
      thisMonthConsumptionConversion: 'string',
      thisYearConsumptionConversion: 'string',
      totalCarbonConsumptionConversion: 'string',
      treeConsumptionConversion: 'string',
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

export class QueryMultiAccountCarbonTrackResponseBodyData extends $tea.Model {
  carbonActualEmission?: string;
  month?: string;
  productCode?: string;
  region?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      carbonActualEmission: 'CarbonActualEmission',
      month: 'Month',
      productCode: 'ProductCode',
      region: 'Region',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonActualEmission: 'string',
      month: 'string',
      productCode: 'string',
      region: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyResponseBodyDataAllMultiAccountUids extends $tea.Model {
  accountId?: string;
  displayName?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      displayName: 'displayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      displayName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyResponseBodyData extends $tea.Model {
  allowedUids?: string[];
  accountType?: number;
  allMultiAccountUids?: VerifyResponseBodyDataAllMultiAccountUids[];
  code?: string;
  message?: string;
  multiAccountsAllow?: number;
  static names(): { [key: string]: string } {
    return {
      allowedUids: 'AllowedUids',
      accountType: 'accountType',
      allMultiAccountUids: 'allMultiAccountUids',
      code: 'code',
      message: 'message',
      multiAccountsAllow: 'multiAccountsAllow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedUids: { 'type': 'array', 'itemType': 'string' },
      accountType: 'number',
      allMultiAccountUids: { 'type': 'array', 'itemType': VerifyResponseBodyDataAllMultiAccountUids },
      code: 'string',
      message: 'string',
      multiAccountsAllow: 'number',
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

  async getSummaryDataWithOptions(tmpReq: GetSummaryDataRequest, runtime: $Util.RuntimeOptions): Promise<GetSummaryDataResponse> {
    Util.validateModel(tmpReq);
    let request = new GetSummaryDataShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.uids)) {
      request.uidsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.uids, "Uids", "json");
    }

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

    if (!Util.isUnset(request.uidsShrink)) {
      query["Uids"] = request.uidsShrink;
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

  async queryCarbonTrackWithOptions(tmpReq: QueryCarbonTrackRequest, runtime: $Util.RuntimeOptions): Promise<QueryCarbonTrackResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryCarbonTrackShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.uids)) {
      request.uidsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.uids, "Uids", "json");
    }

    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.filterRDAccount)) {
      query["FilterRDAccount"] = request.filterRDAccount;
    }

    if (!Util.isUnset(request.group)) {
      query["Group"] = request.group;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.topNum)) {
      query["TopNum"] = request.topNum;
    }

    if (!Util.isUnset(request.uidsShrink)) {
      query["Uids"] = request.uidsShrink;
    }

    if (!Util.isUnset(request.useCode)) {
      query["UseCode"] = request.useCode;
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

  async queryMultiAccountCarbonTrackWithOptions(request: QueryMultiAccountCarbonTrackRequest, runtime: $Util.RuntimeOptions): Promise<QueryMultiAccountCarbonTrackResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryMultiAccountCarbonTrack",
      version: "2023-07-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMultiAccountCarbonTrackResponse>(await this.callApi(params, req, runtime), new QueryMultiAccountCarbonTrackResponse({}));
  }

  async queryMultiAccountCarbonTrack(request: QueryMultiAccountCarbonTrackRequest): Promise<QueryMultiAccountCarbonTrackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMultiAccountCarbonTrackWithOptions(request, runtime);
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
