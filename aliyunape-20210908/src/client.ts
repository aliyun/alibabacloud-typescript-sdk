// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class HistoricalRequest extends $tea.Model {
  endTime?: string;
  orderId?: string;
  pageNum?: number;
  pageSize?: number;
  startTime?: string;
  station?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      orderId: 'OrderId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      station: 'Station',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      orderId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      startTime: 'string',
      station: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HistoricalResponseBody extends $tea.Model {
  code?: string;
  data?: { [key: string]: any }[];
  message?: string;
  requestId?: string;
  rt?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      rt: 'Rt',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      message: 'string',
      requestId: 'string',
      rt: 'number',
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

export class StationDayRequest extends $tea.Model {
  orderId?: string;
  startForecast?: string;
  station?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      startForecast: 'StartForecast',
      station: 'Station',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      startForecast: 'string',
      station: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StationDayResponseBody extends $tea.Model {
  code?: string;
  data?: { [key: string]: any }[];
  message?: string;
  requestId?: string;
  rt?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      rt: 'Rt',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      message: 'string',
      requestId: 'string',
      rt: 'number',
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
  lat?: string;
  lon?: string;
  orderId?: string;
  startForecast?: string;
  static names(): { [key: string]: string } {
    return {
      lat: 'Lat',
      lon: 'Lon',
      orderId: 'OrderId',
      startForecast: 'StartForecast',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lat: 'string',
      lon: 'string',
      orderId: 'string',
      startForecast: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WeatherforecastResponseBody extends $tea.Model {
  code?: string;
  data?: { [key: string]: any }[];
  message?: string;
  requestId?: string;
  rt?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      rt: 'Rt',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      message: 'string',
      requestId: 'string',
      rt: 'number',
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

export class WeatherforecastTimeRequest extends $tea.Model {
  curHour?: string;
  lat?: string;
  lon?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      curHour: 'CurHour',
      lat: 'Lat',
      lon: 'Lon',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      curHour: 'string',
      lat: 'string',
      lon: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WeatherforecastTimeResponseBody extends $tea.Model {
  code?: string;
  data?: { [key: string]: any }[];
  message?: string;
  requestId?: string;
  rt?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      rt: 'Rt',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      message: 'string',
      requestId: 'string',
      rt: 'number',
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

export class WeathermonitorRequest extends $tea.Model {
  curHour?: string;
  orderId?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      curHour: 'CurHour',
      orderId: 'OrderId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      curHour: 'string',
      orderId: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WeathermonitorResponseBody extends $tea.Model {
  code?: string;
  data?: { [key: string]: any }[];
  message?: string;
  requestId?: string;
  rt?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      rt: 'Rt',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      message: 'string',
      requestId: 'string',
      rt: 'number',
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

}
