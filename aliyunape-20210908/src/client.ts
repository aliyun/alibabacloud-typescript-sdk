// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ExecuteRequest extends $tea.Model {
  userId?: number;
  serviceParam?: { [key: string]: string };
  extendParam?: { [key: string]: string };
  orderId?: string;
  appName?: string;
  requestId?: string;
  channel?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      serviceParam: 'ServiceParam',
      extendParam: 'ExtendParam',
      orderId: 'OrderId',
      appName: 'AppName',
      requestId: 'RequestId',
      channel: 'Channel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'number',
      serviceParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      extendParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      orderId: 'string',
      appName: 'string',
      requestId: 'string',
      channel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteShrinkRequest extends $tea.Model {
  userId?: number;
  serviceParamShrink?: string;
  extendParamShrink?: string;
  orderId?: string;
  appName?: string;
  requestId?: string;
  channel?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      serviceParamShrink: 'ServiceParam',
      extendParamShrink: 'ExtendParam',
      orderId: 'OrderId',
      appName: 'AppName',
      requestId: 'RequestId',
      channel: 'Channel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'number',
      serviceParamShrink: 'string',
      extendParamShrink: 'string',
      orderId: 'string',
      appName: 'string',
      requestId: 'string',
      channel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteResponseBody extends $tea.Model {
  rt?: number;
  message?: string;
  requestId?: string;
  data?: { [key: string]: any }[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      rt: 'Rt',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rt: 'number',
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExecuteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExecuteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WeathermonitorProvinceHourRequest extends $tea.Model {
  userId?: number;
  serviceParam?: { [key: string]: string };
  extendParam?: { [key: string]: string };
  orderId?: string;
  appName?: string;
  requestId?: string;
  channel?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      serviceParam: 'ServiceParam',
      extendParam: 'ExtendParam',
      orderId: 'OrderId',
      appName: 'AppName',
      requestId: 'RequestId',
      channel: 'Channel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'number',
      serviceParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      extendParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      orderId: 'string',
      appName: 'string',
      requestId: 'string',
      channel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WeathermonitorProvinceHourShrinkRequest extends $tea.Model {
  userId?: number;
  serviceParamShrink?: string;
  extendParamShrink?: string;
  orderId?: string;
  appName?: string;
  requestId?: string;
  channel?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      serviceParamShrink: 'ServiceParam',
      extendParamShrink: 'ExtendParam',
      orderId: 'OrderId',
      appName: 'AppName',
      requestId: 'RequestId',
      channel: 'Channel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'number',
      serviceParamShrink: 'string',
      extendParamShrink: 'string',
      orderId: 'string',
      appName: 'string',
      requestId: 'string',
      channel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WeathermonitorProvinceHourResponseBody extends $tea.Model {
  rt?: number;
  message?: string;
  requestId?: string;
  data?: { [key: string]: any }[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      rt: 'Rt',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rt: 'number',
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WeathermonitorProvinceHourResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: WeathermonitorProvinceHourResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: WeathermonitorProvinceHourResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WeathermonitorRequest extends $tea.Model {
  userId?: number;
  orderId?: string;
  requestId?: string;
  pageSize?: number;
  curHour?: string;
  pageNum?: number;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      orderId: 'OrderId',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      curHour: 'CurHour',
      pageNum: 'PageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'number',
      orderId: 'string',
      requestId: 'string',
      pageSize: 'number',
      curHour: 'string',
      pageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WeathermonitorResponseBody extends $tea.Model {
  rt?: number;
  message?: string;
  requestId?: string;
  data?: { [key: string]: any }[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      rt: 'Rt',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rt: 'number',
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WeathermonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: WeathermonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: WeathermonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WeatherforecastTimeRequest extends $tea.Model {
  userId?: number;
  orderId?: string;
  requestId?: string;
  lon?: string;
  curHour?: string;
  lat?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      orderId: 'OrderId',
      requestId: 'RequestId',
      lon: 'Lon',
      curHour: 'CurHour',
      lat: 'Lat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'number',
      orderId: 'string',
      requestId: 'string',
      lon: 'string',
      curHour: 'string',
      lat: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WeatherforecastTimeResponseBody extends $tea.Model {
  rt?: number;
  message?: string;
  requestId?: string;
  data?: { [key: string]: any }[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      rt: 'Rt',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rt: 'number',
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WeatherforecastTimeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: WeatherforecastTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: WeatherforecastTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StationDayRequest extends $tea.Model {
  userId?: number;
  orderId?: string;
  requestId?: string;
  startForecast?: string;
  station?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      orderId: 'OrderId',
      requestId: 'RequestId',
      startForecast: 'StartForecast',
      station: 'Station',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'number',
      orderId: 'string',
      requestId: 'string',
      startForecast: 'string',
      station: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StationDayResponseBody extends $tea.Model {
  rt?: number;
  message?: string;
  requestId?: string;
  data?: { [key: string]: any }[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      rt: 'Rt',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rt: 'number',
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StationDayResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StationDayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StationDayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WeatherforecastRequest extends $tea.Model {
  userId?: number;
  orderId?: string;
  requestId?: string;
  startForecast?: string;
  lon?: string;
  lat?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      orderId: 'OrderId',
      requestId: 'RequestId',
      startForecast: 'StartForecast',
      lon: 'Lon',
      lat: 'Lat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'number',
      orderId: 'string',
      requestId: 'string',
      startForecast: 'string',
      lon: 'string',
      lat: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WeatherforecastResponseBody extends $tea.Model {
  rt?: number;
  message?: string;
  requestId?: string;
  data?: { [key: string]: any }[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      rt: 'Rt',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rt: 'number',
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WeatherforecastResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: WeatherforecastResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: WeatherforecastResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HistoricalRequest extends $tea.Model {
  userId?: number;
  orderId?: string;
  requestId?: string;
  station?: string;
  pageSize?: number;
  startTime?: number;
  endTime?: number;
  pageNum?: number;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      orderId: 'OrderId',
      requestId: 'RequestId',
      station: 'Station',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNum: 'PageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'number',
      orderId: 'string',
      requestId: 'string',
      station: 'string',
      pageSize: 'number',
      startTime: 'number',
      endTime: 'number',
      pageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HistoricalResponseBody extends $tea.Model {
  rt?: number;
  message?: string;
  requestId?: string;
  data?: { [key: string]: any }[];
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      rt: 'Rt',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rt: 'number',
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HistoricalResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: HistoricalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: HistoricalResponseBody,
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
    this._endpoint = this.getEndpoint("aliyunape", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async executeWithOptions(tmpReq: ExecuteRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteResponse> {
    Util.validateModel(tmpReq);
    let request = new ExecuteShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.serviceParam)) {
      request.serviceParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.serviceParam, "ServiceParam", "json");
    }

    if (!Util.isUnset(tmpReq.extendParam)) {
      request.extendParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extendParam, "ExtendParam", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExecuteResponse>(await this.doRPCRequest("Execute", "2021-09-08", "HTTPS", "POST", "AK", "json", req, runtime), new ExecuteResponse({}));
  }

  async execute(request: ExecuteRequest): Promise<ExecuteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeWithOptions(request, runtime);
  }

  async weathermonitorProvinceHourWithOptions(tmpReq: WeathermonitorProvinceHourRequest, runtime: $Util.RuntimeOptions): Promise<WeathermonitorProvinceHourResponse> {
    Util.validateModel(tmpReq);
    let request = new WeathermonitorProvinceHourShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.serviceParam)) {
      request.serviceParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.serviceParam, "ServiceParam", "json");
    }

    if (!Util.isUnset(tmpReq.extendParam)) {
      request.extendParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extendParam, "ExtendParam", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<WeathermonitorProvinceHourResponse>(await this.doRPCRequest("WeathermonitorProvinceHour", "2021-09-08", "HTTPS", "POST", "AK", "json", req, runtime), new WeathermonitorProvinceHourResponse({}));
  }

  async weathermonitorProvinceHour(request: WeathermonitorProvinceHourRequest): Promise<WeathermonitorProvinceHourResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.weathermonitorProvinceHourWithOptions(request, runtime);
  }

  async weathermonitorWithOptions(request: WeathermonitorRequest, runtime: $Util.RuntimeOptions): Promise<WeathermonitorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<WeathermonitorResponse>(await this.doRPCRequest("Weathermonitor", "2021-09-08", "HTTPS", "POST", "AK", "json", req, runtime), new WeathermonitorResponse({}));
  }

  async weathermonitor(request: WeathermonitorRequest): Promise<WeathermonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.weathermonitorWithOptions(request, runtime);
  }

  async weatherforecastTimeWithOptions(request: WeatherforecastTimeRequest, runtime: $Util.RuntimeOptions): Promise<WeatherforecastTimeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<WeatherforecastTimeResponse>(await this.doRPCRequest("WeatherforecastTime", "2021-09-08", "HTTPS", "POST", "AK", "json", req, runtime), new WeatherforecastTimeResponse({}));
  }

  async weatherforecastTime(request: WeatherforecastTimeRequest): Promise<WeatherforecastTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.weatherforecastTimeWithOptions(request, runtime);
  }

  async stationDayWithOptions(request: StationDayRequest, runtime: $Util.RuntimeOptions): Promise<StationDayResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StationDayResponse>(await this.doRPCRequest("StationDay", "2021-09-08", "HTTPS", "POST", "AK", "json", req, runtime), new StationDayResponse({}));
  }

  async stationDay(request: StationDayRequest): Promise<StationDayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stationDayWithOptions(request, runtime);
  }

  async weatherforecastWithOptions(request: WeatherforecastRequest, runtime: $Util.RuntimeOptions): Promise<WeatherforecastResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<WeatherforecastResponse>(await this.doRPCRequest("Weatherforecast", "2021-09-08", "HTTPS", "POST", "AK", "json", req, runtime), new WeatherforecastResponse({}));
  }

  async weatherforecast(request: WeatherforecastRequest): Promise<WeatherforecastResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.weatherforecastWithOptions(request, runtime);
  }

  async historicalWithOptions(request: HistoricalRequest, runtime: $Util.RuntimeOptions): Promise<HistoricalResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<HistoricalResponse>(await this.doRPCRequest("Historical", "2021-09-08", "HTTPS", "POST", "AK", "json", req, runtime), new HistoricalResponse({}));
  }

  async historical(request: HistoricalRequest): Promise<HistoricalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.historicalWithOptions(request, runtime);
  }

}
