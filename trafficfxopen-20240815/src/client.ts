// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ConvertUrlHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * token
   * 
   * This parameter is required.
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsImtpZCI6ImRpc3RyaWJ1dGlvbl9rZXlpZCJ9.eyJqdGkiOiI2cDQwZDctSDQ0dUJicEJkYTZadzdBIiwiaWF0IjoxNzI0MzE2MzM1LCJleHAiOjE3MjQzMjM1MzUsIm5iZiI6MTcyNDMxNjI3NSwiYXBwS2V5IjoiNjE3NzgxZDQxM2FmNGRlZGFiNzkifQ.XtjSM7qVbESvt7n31RtD5Pp6854IVyGMEco4aEruMDMkrXHkcdZejyecKFx3RdsCldZPgvowc5EOl44c3JJfm6DENH4M6BRBSc90eqXYcD_xVJ9FhDWzK9O6OnkvR7HX1t-qqMdikLviM1w1G0DGMLaasvZ8MPMewL8k6NnvOSGePwUhb-m5IZ14VYv7BPO2dp8Jh00qNSJQrmNiWWzJUtK_xllNr3LKQ7cIVtPgFUckvRDw9Hal5oACXSRdkZFOAGlFSjpB_BbTpe5vc-AJ8K89nRD53sIy9YyVQClV_HH7PrXxFFJgReGvNsnP1h9gf55q86IzOQBkj9vGm2zXdw
   * 
   * **if can be null:**
   * false
   */
  xAcsAirticketAccessToken?: string;
  /**
   * @example
   * en_US
   * 
   * **if can be null:**
   * true
   */
  xAcsAirticketLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAirticketAccessToken: 'xAcsAirticketAccessToken',
      xAcsAirticketLanguage: 'xAcsAirticketLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAirticketAccessToken: 'string',
      xAcsAirticketLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertUrlRequest extends $tea.Model {
  /**
   * @example
   * +86
   */
  countryCallingCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https%3A%2F%2Fmarket.wapa.taobao.com%2Fapp%2Ftrip%2Frx-traffic%2Fpages%2Fota%3F_F_sht_sm%3D12345678%26leaveFlightNo%3DCZ6132%26arrCityCode%3DDLC%26arrCityName%3D%25E5%25A4%25A7%25E8%25BF%259E%26leaveCabinClass%3D0%26itemParams%3DmQZ4eyJhZHRQcmljZSI6MzEyLCJhZnRlclByb21vdGlvbgUamFNlYXJjaCI6dHJ1ZSwiYWdlbnRJZCI6IjUwNTUiLCJhdmVyYWdlUAFFdFNob3ciOmZhbHNlLCJjYWJpbiI6IloiLCJjaGlsZAVODWgUZmlyc3RDASJkQ2xhc3MiOiJBTExfQ0FCSU4iLCJpbmZhbnQNMMgxNDAsIml0ZW1JZCI6IjEyZDJhZTdiMzk0ZjQ5MWY5MjE2ZjQzMzBjYjdkY2E5XzY2IiwFL_BCVHlwZSI6MSwibGVhdmVGbGlnaHRObyI6IkNaNjEzMiIsInByZVF1ZXJ5VGltZXN0YW1wIjoxNzI1MzQyMzI0MDU3LAEiEFRyYWNlBXscMjEwM2EzNDAVJDQwNDM3MjEyNmQzZTY4IgFQLjgBFCI6MCwicyU9GFNlZ21lbnQB53hbe1wiYXJyQ2l0eUNvZGVcIjpcIkRMQ1wiLFwiZGVwMhgACEJKUxEYCERhdAksODIwMjQtMTAtMTRcIn1dIgFiDGxlY3QJ3xhIYXNTdG9wNYMAcwUcBGVkRoAAGEFpcnBvcnRCgwBqmwA-MwAIUEtYEZ6qtgAgIDA4OjMwOjAwBTwoam91cm5leVNlcVwhLyhcIm1hcmtldGluZwnRBE5vJSEpshHxFHVwcGx5QVWIFCxbNTQ0NyULBRoQT2ZmZXJRrx0TsExpbmtlZElkIjoiYTAzOTk4MzZkZGUzNDBhMTlhZGQ2NzU4ZDZkNjQ1YjEifQ%253D%253D%26depCityName%3D%25E5%258C%2597%25E4%25BA%25AC%26leaveDate%3D2024-10-14%26fpt%3Dta.fx%2528017595%2529017595%26_fli_webview%3Dfalse%26ttid%3Ddidi.000017598%26depCityCode%3DBJS
   */
  jumpUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  phone?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  scene?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  source?: string;
  /**
   * @example
   * 2215112050977
   */
  thirdId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456789
   */
  uid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  xenv?: string;
  static names(): { [key: string]: string } {
    return {
      countryCallingCode: 'countryCallingCode',
      jumpUrl: 'jumpUrl',
      phone: 'phone',
      scene: 'scene',
      source: 'source',
      thirdId: 'thirdId',
      uid: 'uid',
      xenv: 'xenv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countryCallingCode: 'string',
      jumpUrl: 'string',
      phone: 'string',
      scene: 'string',
      source: 'string',
      thirdId: 'string',
      uid: 'string',
      xenv: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertUrlResponseBody extends $tea.Model {
  data?: ConvertUrlResponseBodyData;
  /**
   * @example
   * success
   */
  errorCode?: string;
  errorData?: ConvertUrlResponseBodyErrorData;
  errorMsg?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6BD708D6-1A8C-5CF9-85B8-D620F314F1F0
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorData: 'errorData',
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ConvertUrlResponseBodyData,
      errorCode: 'string',
      errorData: ConvertUrlResponseBodyErrorData,
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConvertUrlResponseBody;
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
      body: ConvertUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  appSecret?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'appKey',
      appSecret: 'appSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      appSecret: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenResponseBody extends $tea.Model {
  data?: GetTokenResponseBodyData;
  /**
   * @example
   * success
   */
  errorCode?: string;
  errorData?: GetTokenResponseBodyErrorData;
  errorMsg?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6BD708D6-1A8C-5CF9-85B8-D620F314F1F0
   */
  requestId?: string;
  /**
   * @example
   * confirmed
   */
  status?: number;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorData: 'errorData',
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetTokenResponseBodyData,
      errorCode: 'string',
      errorData: GetTokenResponseBodyErrorData,
      errorMsg: 'string',
      requestId: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTokenResponseBody;
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
      body: GetTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * token
   * 
   * This parameter is required.
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsImtpZCI6ImRpc3RyaWJ1dGlvbl9rZXlpZCJ9.eyJqdGkiOiI2cDQwZDctSDQ0dUJicEJkYTZadzdBIiwiaWF0IjoxNzI0MzE2MzM1LCJleHAiOjE3MjQzMjM1MzUsIm5iZiI6MTcyNDMxNjI3NSwiYXBwS2V5IjoiNjE3NzgxZDQxM2FmNGRlZGFiNzkifQ.XtjSM7qVbESvt7n31RtD5Pp6854IVyGMEco4aEruMDMkrXHkcdZejyecKFx3RdsCldZPgvowc5EOl44c3JJfm6DENH4M6BRBSc90eqXYcD_xVJ9FhDWzK9O6OnkvR7HX1t-qqMdikLviM1w1G0DGMLaasvZ8MPMewL8k6NnvOSGePwUhb-m5IZ14VYv7BPO2dp8Jh00qNSJQrmNiWWzJUtK_xllNr3LKQ7cIVtPgFUckvRDw9Hal5oACXSRdkZFOAGlFSjpB_BbTpe5vc-AJ8K89nRD53sIy9YyVQClV_HH7PrXxFFJgReGvNsnP1h9gf55q86IzOQBkj9vGm2zXdw
   */
  xAcsAirticketAccessToken?: string;
  /**
   * @example
   * en_US
   */
  xAcsAirticketLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAirticketAccessToken: 'xAcsAirticketAccessToken',
      xAcsAirticketLanguage: 'xAcsAirticketLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAirticketAccessToken: 'string',
      xAcsAirticketLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchRequest extends $tea.Model {
  scene?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {
   *   "cabinClass": "ALL_CABIN",
   *   "passengerTypeQuantity": {
   *     "ADT": 1,
   *     "INFANT": 0,
   *     "CHD": 0
   *   },
   *   "searchMode": 0,
   *   "searchOdInfoList": [
   *     {
   *       "arrCityCode": "BJS",
   *       "depCityCode": "JNG",
   *       "depDate": "2024-08-14 00:00:00"
   *     }
   *   ],
   *   "searchSource": "gd",
   *   "tripType": 1
   * }
   */
  searchParam?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * “1”
   */
  source?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * “1”
   */
  terminal?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * “121343”
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      scene: 'scene',
      searchParam: 'searchParam',
      source: 'source',
      terminal: 'terminal',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: 'string',
      searchParam: 'string',
      source: 'string',
      terminal: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResponseBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  data?: string;
  /**
   * @example
   * success
   */
  errorCode?: string;
  errorData?: SearchResponseBodyErrorData;
  errorMsg?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 71ad3e90-53f8-445b-be9d-df91039cba47
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorData: 'errorData',
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'string',
      errorData: SearchResponseBodyErrorData,
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchResponseBody;
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
      body: SearchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertUrlResponseBodyDataStatus extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  errorMsg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      errorMsg: 'errorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertUrlResponseBodyData extends $tea.Model {
  /**
   * @example
   * wx6a96c49f29850eb5
   */
  appId?: string;
  /**
   * @example
   * https://fx.wapa.taobao.com/connect?return_url=https%3A%2F%2Fmarket.wapa.taobao.com%2Fapp%2Ftrip%2Frx-traffic%2Fpages%2Fota%3F_F_sht_sm%3D12345678%26leaveFlightNo%3DCZ6132%26arrCityCode%3DDLC%26arrCityName%3D%25E5%25A4%25A7%25E8%25BF%259E%26leaveCabinClass%3D0%26itemParams%3DmQZ4eyJhZHRQcmljZSI6MzEyLCJhZnRlclByb21vdGlvbgUamFNlYXJjaCI6dHJ1ZSwiYWdlbnRJZCI6IjUwNTUiLCJhdmVyYWdlUAFFdFNob3ciOmZhbHNlLCJjYWJpbiI6IloiLCJjaGlsZAVODWgUZmlyc3RDASJkQ2xhc3MiOiJBTExfQ0FCSU4iLCJpbmZhbnQNMMgxNDAsIml0ZW1JZCI6IjEyZDJhZTdiMzk0ZjQ5MWY5MjE2ZjQzMzBjYjdkY2E5XzY2IiwFL_BCVHlwZSI6MSwibGVhdmVGbGlnaHRObyI6IkNaNjEzMiIsInByZVF1ZXJ5VGltZXN0YW1wIjoxNzI1MzQyMzI0MDU3LAEiEFRyYWNlBXscMjEwM2EzNDAVJDQwNDM3MjEyNmQzZTY4IgFQLjgBFCI6MCwicyU9GFNlZ21lbnQB53hbe1wiYXJyQ2l0eUNvZGVcIjpcIkRMQ1wiLFwiZGVwMhgACEJKUxEYCERhdAksODIwMjQtMTAtMTRcIn1dIgFiDGxlY3QJ3xhIYXNTdG9wNYMAcwUcBGVkRoAAGEFpcnBvcnRCgwBqmwA-MwAIUEtYEZ6qtgAgIDA4OjMwOjAwBTwoam91cm5leVNlcVwhLyhcIm1hcmtldGluZwnRBE5vJSEpshHxFHVwcGx5QVWIFCxbNTQ0NyULBRoQT2ZmZXJRrx0TsExpbmtlZElkIjoiYTAzOTk4MzZkZGUzNDBhMTlhZGQ2NzU4ZDZkNjQ1YjEifQ%253D%253D%26depCityName%3D%25E5%258C%2597%25E4%25BA%25AC%26leaveDate%3D2024-10-14%26fpt%3Dta.fx%2528017595%2529017595%26_fli_webview%3Dfalse%26ttid%3Ddidi.000017598%26depCityCode%3DBJS&fliggy_scene=didi
   */
  authUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * **if can be null:**
   * false
   */
  status?: ConvertUrlResponseBodyDataStatus;
  /**
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      authUrl: 'authUrl',
      status: 'status',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      authUrl: 'string',
      status: ConvertUrlResponseBodyDataStatus,
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConvertUrlResponseBodyErrorData extends $tea.Model {
  /**
   * @example
   * 1001
   */
  rawErrorCode?: string;
  rawErrorMsg?: string;
  static names(): { [key: string]: string } {
    return {
      rawErrorCode: 'rawErrorCode',
      rawErrorMsg: 'rawErrorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rawErrorCode: 'string',
      rawErrorMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenResponseBodyData extends $tea.Model {
  /**
   * @example
   * 7200
   */
  expireTime?: string;
  /**
   * @example
   * 1724130275
   */
  generateTime?: string;
  /**
   * @remarks
   * token
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsImtpZCI6ImRpc3RyaWJ1dGlvbl9rZXlpZCJ9.eyJqdGkiOiI2cDQwZDctSDQ0dUJicEJkYTZadzdBIiwiaWF0IjoxNzI0MzE2MzM1LCJleHAiOjE3MjQzMjM1MzUsIm5iZiI6MTcyNDMxNjI3NSwiYXBwS2V5IjoiNjE3NzgxZDQxM2FmNGRlZGFiNzkifQ.XtjSM7qVbESvt7n31RtD5Pp6854IVyGMEco4aEruMDMkrXHkcdZejyecKFx3RdsCldZPgvowc5EOl44c3JJfm6DENH4M6BRBSc90eqXYcD_xVJ9FhDWzK9O6OnkvR7HX1t-qqMdikLviM1w1G0DGMLaasvZ8MPMewL8k6NnvOSGePwUhb-m5IZ14VYv7BPO2dp8Jh00qNSJQrmNiWWzJUtK_xllNr3LKQ7cIVtPgFUckvRDw9Hal5oACXSRdkZFOAGlFSjpB_BbTpe5vc-AJ8K89nRD53sIy9YyVQClV_HH7PrXxFFJgReGvNsnP1h9gf55q86IzOQBkj9vGm2zXdw
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'expireTime',
      generateTime: 'generateTime',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'string',
      generateTime: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenResponseBodyErrorData extends $tea.Model {
  /**
   * @example
   * 1001
   */
  rawErrorCode?: string;
  rawErrorMsg?: string;
  static names(): { [key: string]: string } {
    return {
      rawErrorCode: 'rawErrorCode',
      rawErrorMsg: 'rawErrorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rawErrorCode: 'string',
      rawErrorMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResponseBodyErrorData extends $tea.Model {
  /**
   * @example
   * 1001
   */
  rawErrorCode?: string;
  rawErrorMsg?: string;
  static names(): { [key: string]: string } {
    return {
      rawErrorCode: 'rawErrorCode',
      rawErrorMsg: 'rawErrorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rawErrorCode: 'string',
      rawErrorMsg: 'string',
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
    this._endpoint = this.getEndpoint("trafficfxopen", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  /**
   * 转换联登链接
   * 
   * @param request - ConvertUrlRequest
   * @param headers - ConvertUrlHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConvertUrlResponse
   */
  async convertUrlWithOptions(request: ConvertUrlRequest, headers: ConvertUrlHeaders, runtime: $Util.RuntimeOptions): Promise<ConvertUrlResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.countryCallingCode)) {
      body["countryCallingCode"] = request.countryCallingCode;
    }

    if (!Util.isUnset(request.jumpUrl)) {
      body["jumpUrl"] = request.jumpUrl;
    }

    if (!Util.isUnset(request.phone)) {
      body["phone"] = request.phone;
    }

    if (!Util.isUnset(request.scene)) {
      body["scene"] = request.scene;
    }

    if (!Util.isUnset(request.source)) {
      body["source"] = request.source;
    }

    if (!Util.isUnset(request.thirdId)) {
      body["thirdId"] = request.thirdId;
    }

    if (!Util.isUnset(request.uid)) {
      body["uid"] = request.uid;
    }

    if (!Util.isUnset(request.xenv)) {
      body["xenv"] = request.xenv;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAirticketAccessToken)) {
      realHeaders["xAcsAirticketAccessToken"] = Util.toJSONString(headers.xAcsAirticketAccessToken);
    }

    if (!Util.isUnset(headers.xAcsAirticketLanguage)) {
      realHeaders["xAcsAirticketLanguage"] = Util.toJSONString(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ConvertUrl",
      version: "2024-08-15",
      protocol: "HTTPS",
      pathname: `/v1/distribution/trade/convertUrl`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConvertUrlResponse>(await this.callApi(params, req, runtime), new ConvertUrlResponse({}));
  }

  /**
   * 转换联登链接
   * 
   * @param request - ConvertUrlRequest
   * @returns ConvertUrlResponse
   */
  async convertUrl(request: ConvertUrlRequest): Promise<ConvertUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ConvertUrlHeaders({ });
    return await this.convertUrlWithOptions(request, headers, runtime);
  }

  /**
   * 创建token
   * 
   * @param request - GetTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTokenResponse
   */
  async getTokenWithOptions(request: GetTokenRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTokenResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appKey)) {
      query["appKey"] = request.appKey;
    }

    if (!Util.isUnset(request.appSecret)) {
      query["appSecret"] = request.appSecret;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetToken",
      version: "2024-08-15",
      protocol: "HTTPS",
      pathname: `/v1/distribution/trade/getToken`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTokenResponse>(await this.callApi(params, req, runtime), new GetTokenResponse({}));
  }

  /**
   * 创建token
   * 
   * @param request - GetTokenRequest
   * @returns GetTokenResponse
   */
  async getToken(request: GetTokenRequest): Promise<GetTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTokenWithOptions(request, headers, runtime);
  }

  /**
   * 分销报价接口
   * 
   * @param request - SearchRequest
   * @param headers - SearchHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchResponse
   */
  async searchWithOptions(request: SearchRequest, headers: SearchHeaders, runtime: $Util.RuntimeOptions): Promise<SearchResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.scene)) {
      body["scene"] = request.scene;
    }

    if (!Util.isUnset(request.searchParam)) {
      body["searchParam"] = request.searchParam;
    }

    if (!Util.isUnset(request.source)) {
      body["source"] = request.source;
    }

    if (!Util.isUnset(request.terminal)) {
      body["terminal"] = request.terminal;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAirticketAccessToken)) {
      realHeaders["xAcsAirticketAccessToken"] = Util.toJSONString(headers.xAcsAirticketAccessToken);
    }

    if (!Util.isUnset(headers.xAcsAirticketLanguage)) {
      realHeaders["xAcsAirticketLanguage"] = Util.toJSONString(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "Search",
      version: "2024-08-15",
      protocol: "HTTPS",
      pathname: `/v1/distribution/trade/search`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchResponse>(await this.callApi(params, req, runtime), new SearchResponse({}));
  }

  /**
   * 分销报价接口
   * 
   * @param request - SearchRequest
   * @returns SearchResponse
   */
  async search(request: SearchRequest): Promise<SearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new SearchHeaders({ });
    return await this.searchWithOptions(request, headers, runtime);
  }

}
