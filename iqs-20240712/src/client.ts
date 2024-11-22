// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AgentBaseQuery extends $tea.Model {
  query?: string;
  static names(): { [key: string]: string } {
    return {
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommonAgentQuery extends $tea.Model {
  query?: string;
  querySceneEnumCode?: string;
  static names(): { [key: string]: string } {
    return {
      query: 'query',
      querySceneEnumCode: 'querySceneEnumCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
      querySceneEnumCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResult extends $tea.Model {
  data?: QueryResultData[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryResultData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BicyclingDirectionNovaRequest extends $tea.Model {
  /**
   * @example
   * 39.995197
   */
  destinationLatitude?: string;
  /**
   * @example
   * 116.46424
   */
  destinationLongitude?: string;
  /**
   * @example
   * 39.995197
   */
  originLatitude?: string;
  /**
   * @example
   * 117.466485
   */
  originLongitude?: string;
  static names(): { [key: string]: string } {
    return {
      destinationLatitude: 'destinationLatitude',
      destinationLongitude: 'destinationLongitude',
      originLatitude: 'originLatitude',
      originLongitude: 'originLongitude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationLatitude: 'string',
      destinationLongitude: 'string',
      originLatitude: 'string',
      originLongitude: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BicyclingDirectionNovaResponseBody extends $tea.Model {
  data?: BicyclingDirectionNovaResponseBodyData;
  /**
   * @example
   * success
   */
  errorCode?: number;
  /**
   * @example
   * <title>502 Bad Gateway</title>
   */
  errorMessage?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: BicyclingDirectionNovaResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BicyclingDirectionNovaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BicyclingDirectionNovaResponseBody;
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
      body: BicyclingDirectionNovaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommonQueryBySceneRequest extends $tea.Model {
  body?: CommonAgentQuery;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CommonAgentQuery,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommonQueryBySceneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryResult;
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
      body: QueryResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DrivingDirectionNovaRequest extends $tea.Model {
  carType?: string;
  /**
   * @example
   * 43.345456
   */
  destinationLatitude?: string;
  /**
   * @example
   * 116.46424
   */
  destinationLongitude?: string;
  /**
   * @example
   * 39.995197
   */
  originLatitude?: string;
  /**
   * @example
   * 116.466485
   */
  originLongitude?: string;
  plate?: string;
  static names(): { [key: string]: string } {
    return {
      carType: 'carType',
      destinationLatitude: 'destinationLatitude',
      destinationLongitude: 'destinationLongitude',
      originLatitude: 'originLatitude',
      originLongitude: 'originLongitude',
      plate: 'plate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carType: 'string',
      destinationLatitude: 'string',
      destinationLongitude: 'string',
      originLatitude: 'string',
      originLongitude: 'string',
      plate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DrivingDirectionNovaResponseBody extends $tea.Model {
  data?: DrivingDirectionNovaResponseBodyData;
  /**
   * @example
   * success
   */
  errorCode?: number;
  /**
   * @example
   * Access was denied, message: No such namespace namespaces/general-perf-cn-shenzhen-e-default.
   */
  errorMessage?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DrivingDirectionNovaResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DrivingDirectionNovaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DrivingDirectionNovaResponseBody;
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
      body: DrivingDirectionNovaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElectrobikeDirectionRequest extends $tea.Model {
  /**
   * @example
   * 39.896463
   */
  destinationLatitude?: string;
  /**
   * @example
   * 116.46424
   */
  destinationLongitude?: string;
  /**
   * @example
   * 39.995197
   */
  originLatitude?: string;
  /**
   * @example
   * 116.466485
   */
  originLongitude?: string;
  static names(): { [key: string]: string } {
    return {
      destinationLatitude: 'destinationLatitude',
      destinationLongitude: 'destinationLongitude',
      originLatitude: 'originLatitude',
      originLongitude: 'originLongitude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationLatitude: 'string',
      destinationLongitude: 'string',
      originLatitude: 'string',
      originLongitude: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElectrobikeDirectionResponseBody extends $tea.Model {
  data?: ElectrobikeDirectionResponseBodyData[];
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * Access was denied, message: Unauthorized.
   */
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ECB2144C-E277-5434-80E6-12D26678D364
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ElectrobikeDirectionResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElectrobikeDirectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ElectrobikeDirectionResponseBody;
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
      body: ElectrobikeDirectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElectrobikeDirectionNovaRequest extends $tea.Model {
  /**
   * @example
   * 40.234564
   */
  destinationLatitude?: string;
  /**
   * @example
   * 116.46424
   */
  destinationLongitude?: string;
  /**
   * @example
   * 39.995197
   */
  originLatitude?: string;
  /**
   * @example
   * 116.345456
   */
  originLongitude?: string;
  static names(): { [key: string]: string } {
    return {
      destinationLatitude: 'destinationLatitude',
      destinationLongitude: 'destinationLongitude',
      originLatitude: 'originLatitude',
      originLongitude: 'originLongitude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationLatitude: 'string',
      destinationLongitude: 'string',
      originLatitude: 'string',
      originLongitude: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElectrobikeDirectionNovaResponseBody extends $tea.Model {
  data?: ElectrobikeDirectionNovaResponseBodyData;
  /**
   * @example
   * success
   */
  errorCode?: number;
  /**
   * @example
   * <title>502 Bad Gateway</title>
   */
  errorMessage?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ElectrobikeDirectionNovaResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElectrobikeDirectionNovaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ElectrobikeDirectionNovaResponseBody;
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
      body: ElectrobikeDirectionNovaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeoCodeRequest extends $tea.Model {
  address?: string;
  city?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      city: 'city',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      city: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeoCodeResponseBody extends $tea.Model {
  data?: GeoCodeResponseBodyData[];
  /**
   * @example
   * success
   */
  errorCode?: number;
  /**
   * @example
   * Pop sign mismatch, please check log.
   */
  errorMessage?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GeoCodeResponseBodyData },
      errorCode: 'number',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeoCodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GeoCodeResponseBody;
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
      body: GeoCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NearbySearchNovaRequest extends $tea.Model {
  keywords?: string;
  /**
   * @example
   * 39.992873
   */
  latitude?: string;
  /**
   * @example
   * 116.310918
   */
  longitude?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 3000
   */
  radius?: number;
  /**
   * @example
   * 5
   */
  size?: number;
  /**
   * @example
   * GAS_STATION|RESTAURANT|HOTEL|ATTRACTION
   */
  types?: string;
  static names(): { [key: string]: string } {
    return {
      keywords: 'keywords',
      latitude: 'latitude',
      longitude: 'longitude',
      page: 'page',
      radius: 'radius',
      size: 'size',
      types: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywords: 'string',
      latitude: 'string',
      longitude: 'string',
      page: 'number',
      radius: 'number',
      size: 'number',
      types: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NearbySearchNovaResponseBody extends $tea.Model {
  data?: NearbySearchNovaResponseBodyData[];
  /**
   * @example
   * success
   */
  errorCode?: number;
  /**
   * @example
   * <title>502 Bad Gateway</title>
   */
  errorMessage?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': NearbySearchNovaResponseBodyData },
      errorCode: 'number',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NearbySearchNovaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: NearbySearchNovaResponseBody;
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
      body: NearbySearchNovaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlaceSearchNovaRequest extends $tea.Model {
  keywords?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  region?: string;
  /**
   * @example
   * 5
   */
  size?: number;
  /**
   * @example
   * GAS_STATION|RESTAURANT|HOTEL|ATTRACTION
   */
  types?: string;
  static names(): { [key: string]: string } {
    return {
      keywords: 'keywords',
      page: 'page',
      region: 'region',
      size: 'size',
      types: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywords: 'string',
      page: 'number',
      region: 'string',
      size: 'number',
      types: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlaceSearchNovaResponseBody extends $tea.Model {
  data?: PlaceSearchNovaResponseBodyData[];
  /**
   * @example
   * success
   */
  errorCode?: number;
  /**
   * @example
   * Access was denied, message: Unauthorized.
   */
  errorMessage?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': PlaceSearchNovaResponseBodyData },
      errorCode: 'number',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlaceSearchNovaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PlaceSearchNovaResponseBody;
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
      body: PlaceSearchNovaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RgeoCodeRequest extends $tea.Model {
  /**
   * @example
   * 39.989027
   */
  latitude?: string;
  /**
   * @example
   * 116.310918
   */
  longitude?: string;
  static names(): { [key: string]: string } {
    return {
      latitude: 'latitude',
      longitude: 'longitude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latitude: 'string',
      longitude: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RgeoCodeResponseBody extends $tea.Model {
  data?: RgeoCodeResponseBodyData;
  /**
   * @example
   * success
   */
  errorCode?: number;
  errorMessage?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RgeoCodeResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RgeoCodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RgeoCodeResponseBody;
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
      body: RgeoCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionRequest extends $tea.Model {
  destinationCity?: string;
  /**
   * @example
   * 40.345456
   */
  destinationLatitude?: string;
  /**
   * @example
   * 116.46424
   */
  destinationLongitude?: string;
  originCity?: string;
  /**
   * @example
   * 39.995197
   */
  originLatitude?: string;
  /**
   * @example
   * 116.466485
   */
  originLongitude?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCity: 'destinationCity',
      destinationLatitude: 'destinationLatitude',
      destinationLongitude: 'destinationLongitude',
      originCity: 'originCity',
      originLatitude: 'originLatitude',
      originLongitude: 'originLongitude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCity: 'string',
      destinationLatitude: 'string',
      destinationLongitude: 'string',
      originCity: 'string',
      originLatitude: 'string',
      originLongitude: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBody extends $tea.Model {
  data?: TransitIntegratedDirectionResponseBodyData;
  /**
   * @example
   * 400
   */
  errorCode?: number;
  /**
   * @example
   * <title>502 Bad Gateway</title>
   */
  errorMessage?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: TransitIntegratedDirectionResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TransitIntegratedDirectionResponseBody;
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
      body: TransitIntegratedDirectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WalkingDirectionNovaRequest extends $tea.Model {
  /**
   * @example
   * 40.345456
   */
  destinationLatitude?: string;
  /**
   * @example
   * 116.46424
   */
  destinationLongitude?: string;
  /**
   * @example
   * 39.995197
   */
  originLatitude?: string;
  /**
   * @example
   * 116.466485
   */
  originLongitude?: string;
  static names(): { [key: string]: string } {
    return {
      destinationLatitude: 'destinationLatitude',
      destinationLongitude: 'destinationLongitude',
      originLatitude: 'originLatitude',
      originLongitude: 'originLongitude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationLatitude: 'string',
      destinationLongitude: 'string',
      originLatitude: 'string',
      originLongitude: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WalkingDirectionNovaResponseBody extends $tea.Model {
  data?: WalkingDirectionNovaResponseBodyData;
  /**
   * @example
   * success
   */
  errorCode?: number;
  /**
   * @example
   * Access was denied
   */
  errorMessage?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: WalkingDirectionNovaResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WalkingDirectionNovaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: WalkingDirectionNovaResponseBody;
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
      body: WalkingDirectionNovaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResultDataImages extends $tea.Model {
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResultDataMetadata extends $tea.Model {
  businessArea?: string;
  dailyOpeningHours?: string;
  mainTag?: string;
  phone?: string;
  score?: string;
  weeklyOpeningDays?: string;
  static names(): { [key: string]: string } {
    return {
      businessArea: 'businessArea',
      dailyOpeningHours: 'dailyOpeningHours',
      mainTag: 'mainTag',
      phone: 'phone',
      score: 'score',
      weeklyOpeningDays: 'weeklyOpeningDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessArea: 'string',
      dailyOpeningHours: 'string',
      mainTag: 'string',
      phone: 'string',
      score: 'string',
      weeklyOpeningDays: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResultData extends $tea.Model {
  address?: string;
  cityCode?: string;
  cityName?: string;
  districtCode?: string;
  districtName?: string;
  id?: string;
  images?: QueryResultDataImages[];
  latitude?: string;
  longitude?: string;
  metadata?: QueryResultDataMetadata;
  name?: string;
  provinceCode?: string;
  provinceName?: string;
  typeCode?: string;
  types?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      cityCode: 'cityCode',
      cityName: 'cityName',
      districtCode: 'districtCode',
      districtName: 'districtName',
      id: 'id',
      images: 'images',
      latitude: 'latitude',
      longitude: 'longitude',
      metadata: 'metadata',
      name: 'name',
      provinceCode: 'provinceCode',
      provinceName: 'provinceName',
      typeCode: 'typeCode',
      types: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      cityCode: 'string',
      cityName: 'string',
      districtCode: 'string',
      districtName: 'string',
      id: 'string',
      images: { 'type': 'array', 'itemType': QueryResultDataImages },
      latitude: 'string',
      longitude: 'string',
      metadata: QueryResultDataMetadata,
      name: 'string',
      provinceCode: 'string',
      provinceName: 'string',
      typeCode: 'string',
      types: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BicyclingDirectionNovaResponseBodyDataPathsCost extends $tea.Model {
  /**
   * @example
   * 39233
   */
  durationSecond?: string;
  /**
   * @example
   * 20
   */
  taxiFee?: string;
  tollDistanceMeter?: string;
  tollRoads?: string;
  tolls?: string;
  trafficLights?: string;
  /**
   * @example
   * 4
   */
  transitFee?: string;
  static names(): { [key: string]: string } {
    return {
      durationSecond: 'durationSecond',
      taxiFee: 'taxiFee',
      tollDistanceMeter: 'tollDistanceMeter',
      tollRoads: 'tollRoads',
      tolls: 'tolls',
      trafficLights: 'trafficLights',
      transitFee: 'transitFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSecond: 'string',
      taxiFee: 'string',
      tollDistanceMeter: 'string',
      tollRoads: 'string',
      tolls: 'string',
      trafficLights: 'string',
      transitFee: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BicyclingDirectionNovaResponseBodyDataPathsStepsCost extends $tea.Model {
  /**
   * @example
   * 2000
   */
  durationSecond?: string;
  /**
   * @example
   * 20
   */
  taxiFee?: string;
  tollDistanceMeter?: string;
  tollRoads?: string;
  tolls?: string;
  trafficLights?: string;
  transitFee?: string;
  static names(): { [key: string]: string } {
    return {
      durationSecond: 'durationSecond',
      taxiFee: 'taxiFee',
      tollDistanceMeter: 'tollDistanceMeter',
      tollRoads: 'tollRoads',
      tolls: 'tolls',
      trafficLights: 'trafficLights',
      transitFee: 'transitFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSecond: 'string',
      taxiFee: 'string',
      tollDistanceMeter: 'string',
      tollRoads: 'string',
      tolls: 'string',
      trafficLights: 'string',
      transitFee: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BicyclingDirectionNovaResponseBodyDataPathsSteps extends $tea.Model {
  cost?: BicyclingDirectionNovaResponseBodyDataPathsStepsCost;
  instruction?: string;
  orientation?: string;
  polyline?: string;
  roadName?: string;
  /**
   * @example
   * 3000
   */
  stepDistanceMeter?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      instruction: 'instruction',
      orientation: 'orientation',
      polyline: 'polyline',
      roadName: 'roadName',
      stepDistanceMeter: 'stepDistanceMeter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: BicyclingDirectionNovaResponseBodyDataPathsStepsCost,
      instruction: 'string',
      orientation: 'string',
      polyline: 'string',
      roadName: 'string',
      stepDistanceMeter: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BicyclingDirectionNovaResponseBodyDataPaths extends $tea.Model {
  cost?: BicyclingDirectionNovaResponseBodyDataPathsCost;
  /**
   * @example
   * 96375
   */
  distanceMeter?: string;
  /**
   * @example
   * 300
   */
  durationSecond?: string;
  restriction?: string;
  steps?: BicyclingDirectionNovaResponseBodyDataPathsSteps[];
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      distanceMeter: 'distanceMeter',
      durationSecond: 'durationSecond',
      restriction: 'restriction',
      steps: 'steps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: BicyclingDirectionNovaResponseBodyDataPathsCost,
      distanceMeter: 'string',
      durationSecond: 'string',
      restriction: 'string',
      steps: { 'type': 'array', 'itemType': BicyclingDirectionNovaResponseBodyDataPathsSteps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BicyclingDirectionNovaResponseBodyData extends $tea.Model {
  count?: string;
  /**
   * @example
   * 39.995197
   */
  destinationLatitude?: string;
  /**
   * @example
   * 116.46424
   */
  destinationLongitude?: string;
  /**
   * @example
   * 39.995197
   */
  originLatitude?: string;
  /**
   * @example
   * 116.466485
   */
  originLongitude?: string;
  paths?: BicyclingDirectionNovaResponseBodyDataPaths[];
  /**
   * @example
   * 23
   */
  taxiCost?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      destinationLatitude: 'destinationLatitude',
      destinationLongitude: 'destinationLongitude',
      originLatitude: 'originLatitude',
      originLongitude: 'originLongitude',
      paths: 'paths',
      taxiCost: 'taxiCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      destinationLatitude: 'string',
      destinationLongitude: 'string',
      originLatitude: 'string',
      originLongitude: 'string',
      paths: { 'type': 'array', 'itemType': BicyclingDirectionNovaResponseBodyDataPaths },
      taxiCost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DrivingDirectionNovaResponseBodyDataPathsCost extends $tea.Model {
  /**
   * @example
   * 39233
   */
  durationSecond?: string;
  /**
   * @example
   * 20
   */
  taxiFee?: string;
  tollDistanceMeter?: string;
  tollRoads?: string;
  tolls?: string;
  /**
   * @example
   * 3
   */
  trafficLights?: string;
  /**
   * @example
   * 10
   */
  transitFee?: string;
  static names(): { [key: string]: string } {
    return {
      durationSecond: 'durationSecond',
      taxiFee: 'taxiFee',
      tollDistanceMeter: 'tollDistanceMeter',
      tollRoads: 'tollRoads',
      tolls: 'tolls',
      trafficLights: 'trafficLights',
      transitFee: 'transitFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSecond: 'string',
      taxiFee: 'string',
      tollDistanceMeter: 'string',
      tollRoads: 'string',
      tolls: 'string',
      trafficLights: 'string',
      transitFee: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DrivingDirectionNovaResponseBodyDataPathsStepsCost extends $tea.Model {
  /**
   * @example
   * 1234
   */
  durationSecond?: string;
  /**
   * @example
   * 20
   */
  taxiFee?: string;
  tollDistanceMeter?: string;
  tollRoads?: string;
  tolls?: string;
  trafficLights?: string;
  transitFee?: string;
  static names(): { [key: string]: string } {
    return {
      durationSecond: 'durationSecond',
      taxiFee: 'taxiFee',
      tollDistanceMeter: 'tollDistanceMeter',
      tollRoads: 'tollRoads',
      tolls: 'tolls',
      trafficLights: 'trafficLights',
      transitFee: 'transitFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSecond: 'string',
      taxiFee: 'string',
      tollDistanceMeter: 'string',
      tollRoads: 'string',
      tolls: 'string',
      trafficLights: 'string',
      transitFee: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DrivingDirectionNovaResponseBodyDataPathsSteps extends $tea.Model {
  cost?: DrivingDirectionNovaResponseBodyDataPathsStepsCost;
  instruction?: string;
  orientation?: string;
  polyline?: string;
  roadName?: string;
  /**
   * @example
   * 3000
   */
  stepDistanceMeter?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      instruction: 'instruction',
      orientation: 'orientation',
      polyline: 'polyline',
      roadName: 'roadName',
      stepDistanceMeter: 'stepDistanceMeter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: DrivingDirectionNovaResponseBodyDataPathsStepsCost,
      instruction: 'string',
      orientation: 'string',
      polyline: 'string',
      roadName: 'string',
      stepDistanceMeter: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DrivingDirectionNovaResponseBodyDataPaths extends $tea.Model {
  cost?: DrivingDirectionNovaResponseBodyDataPathsCost;
  /**
   * @example
   * 96375
   */
  distanceMeter?: string;
  /**
   * @example
   * 39223
   */
  durationSecond?: string;
  restriction?: string;
  steps?: DrivingDirectionNovaResponseBodyDataPathsSteps[];
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      distanceMeter: 'distanceMeter',
      durationSecond: 'durationSecond',
      restriction: 'restriction',
      steps: 'steps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: DrivingDirectionNovaResponseBodyDataPathsCost,
      distanceMeter: 'string',
      durationSecond: 'string',
      restriction: 'string',
      steps: { 'type': 'array', 'itemType': DrivingDirectionNovaResponseBodyDataPathsSteps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DrivingDirectionNovaResponseBodyData extends $tea.Model {
  count?: string;
  /**
   * @example
   * 40.345456
   */
  destinationLatitude?: string;
  /**
   * @example
   * 116.46424
   */
  destinationLongitude?: string;
  /**
   * @example
   * 39.995197
   */
  originLatitude?: string;
  /**
   * @example
   * 117.466485
   */
  originLongitude?: string;
  paths?: DrivingDirectionNovaResponseBodyDataPaths[];
  /**
   * @example
   * 20
   */
  taxiCost?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      destinationLatitude: 'destinationLatitude',
      destinationLongitude: 'destinationLongitude',
      originLatitude: 'originLatitude',
      originLongitude: 'originLongitude',
      paths: 'paths',
      taxiCost: 'taxiCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      destinationLatitude: 'string',
      destinationLongitude: 'string',
      originLatitude: 'string',
      originLongitude: 'string',
      paths: { 'type': 'array', 'itemType': DrivingDirectionNovaResponseBodyDataPaths },
      taxiCost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElectrobikeDirectionResponseBodyDataStepsCost extends $tea.Model {
  /**
   * @example
   * 2002
   */
  durationSecond?: string;
  taxiFee?: string;
  /**
   * @example
   * 1000
   */
  tollDistanceMeter?: string;
  /**
   * @example
   * xxx
   */
  tollRoads?: string;
  tolls?: string;
  /**
   * @example
   * 5
   */
  trafficLights?: string;
  transitFee?: string;
  static names(): { [key: string]: string } {
    return {
      durationSecond: 'durationSecond',
      taxiFee: 'taxiFee',
      tollDistanceMeter: 'tollDistanceMeter',
      tollRoads: 'tollRoads',
      tolls: 'tolls',
      trafficLights: 'trafficLights',
      transitFee: 'transitFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSecond: 'string',
      taxiFee: 'string',
      tollDistanceMeter: 'string',
      tollRoads: 'string',
      tolls: 'string',
      trafficLights: 'string',
      transitFee: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElectrobikeDirectionResponseBodyDataSteps extends $tea.Model {
  cost?: ElectrobikeDirectionResponseBodyDataStepsCost;
  instruction?: string;
  orientation?: string;
  roadName?: string;
  /**
   * @example
   * 500
   */
  stepDistanceMeter?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      instruction: 'instruction',
      orientation: 'orientation',
      roadName: 'roadName',
      stepDistanceMeter: 'stepDistanceMeter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: ElectrobikeDirectionResponseBodyDataStepsCost,
      instruction: 'string',
      orientation: 'string',
      roadName: 'string',
      stepDistanceMeter: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElectrobikeDirectionResponseBodyData extends $tea.Model {
  /**
   * @example
   * 445
   */
  distanceMeter?: string;
  /**
   * @example
   * 2345
   */
  durationSecond?: string;
  steps?: ElectrobikeDirectionResponseBodyDataSteps[];
  static names(): { [key: string]: string } {
    return {
      distanceMeter: 'distanceMeter',
      durationSecond: 'durationSecond',
      steps: 'steps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distanceMeter: 'string',
      durationSecond: 'string',
      steps: { 'type': 'array', 'itemType': ElectrobikeDirectionResponseBodyDataSteps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElectrobikeDirectionNovaResponseBodyDataPathsCost extends $tea.Model {
  /**
   * @example
   * 500
   */
  durationSecond?: string;
  /**
   * @example
   * 20
   */
  taxiFee?: string;
  tollDistanceMeter?: string;
  tollRoads?: string;
  tolls?: string;
  /**
   * @example
   * 4
   */
  trafficLights?: string;
  /**
   * @example
   * 4
   */
  transitFee?: string;
  static names(): { [key: string]: string } {
    return {
      durationSecond: 'durationSecond',
      taxiFee: 'taxiFee',
      tollDistanceMeter: 'tollDistanceMeter',
      tollRoads: 'tollRoads',
      tolls: 'tolls',
      trafficLights: 'trafficLights',
      transitFee: 'transitFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSecond: 'string',
      taxiFee: 'string',
      tollDistanceMeter: 'string',
      tollRoads: 'string',
      tolls: 'string',
      trafficLights: 'string',
      transitFee: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElectrobikeDirectionNovaResponseBodyDataPathsStepsCost extends $tea.Model {
  /**
   * @example
   * 2000
   */
  durationSecond?: string;
  /**
   * @example
   * 20
   */
  taxiFee?: string;
  tollDistanceMeter?: string;
  tollRoads?: string;
  tolls?: string;
  /**
   * @example
   * 5
   */
  trafficLights?: string;
  transitFee?: string;
  static names(): { [key: string]: string } {
    return {
      durationSecond: 'durationSecond',
      taxiFee: 'taxiFee',
      tollDistanceMeter: 'tollDistanceMeter',
      tollRoads: 'tollRoads',
      tolls: 'tolls',
      trafficLights: 'trafficLights',
      transitFee: 'transitFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSecond: 'string',
      taxiFee: 'string',
      tollDistanceMeter: 'string',
      tollRoads: 'string',
      tolls: 'string',
      trafficLights: 'string',
      transitFee: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElectrobikeDirectionNovaResponseBodyDataPathsSteps extends $tea.Model {
  cost?: ElectrobikeDirectionNovaResponseBodyDataPathsStepsCost;
  instruction?: string;
  orientation?: string;
  polyline?: string;
  roadName?: string;
  /**
   * @example
   * 3000
   */
  stepDistanceMeter?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      instruction: 'instruction',
      orientation: 'orientation',
      polyline: 'polyline',
      roadName: 'roadName',
      stepDistanceMeter: 'stepDistanceMeter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: ElectrobikeDirectionNovaResponseBodyDataPathsStepsCost,
      instruction: 'string',
      orientation: 'string',
      polyline: 'string',
      roadName: 'string',
      stepDistanceMeter: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElectrobikeDirectionNovaResponseBodyDataPaths extends $tea.Model {
  cost?: ElectrobikeDirectionNovaResponseBodyDataPathsCost;
  /**
   * @example
   * 12000
   */
  distanceMeter?: string;
  /**
   * @example
   * 300
   */
  durationSecond?: string;
  restriction?: string;
  steps?: ElectrobikeDirectionNovaResponseBodyDataPathsSteps[];
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      distanceMeter: 'distanceMeter',
      durationSecond: 'durationSecond',
      restriction: 'restriction',
      steps: 'steps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: ElectrobikeDirectionNovaResponseBodyDataPathsCost,
      distanceMeter: 'string',
      durationSecond: 'string',
      restriction: 'string',
      steps: { 'type': 'array', 'itemType': ElectrobikeDirectionNovaResponseBodyDataPathsSteps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElectrobikeDirectionNovaResponseBodyData extends $tea.Model {
  count?: string;
  /**
   * @example
   * 40.345456
   */
  destinationLatitude?: string;
  /**
   * @example
   * 116.46424
   */
  destinationLongitude?: string;
  /**
   * @example
   * 39.995197
   */
  originLatitude?: string;
  /**
   * @example
   * 116.345456
   */
  originLongitude?: string;
  paths?: ElectrobikeDirectionNovaResponseBodyDataPaths[];
  /**
   * @example
   * 20
   */
  taxiCost?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      destinationLatitude: 'destinationLatitude',
      destinationLongitude: 'destinationLongitude',
      originLatitude: 'originLatitude',
      originLongitude: 'originLongitude',
      paths: 'paths',
      taxiCost: 'taxiCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      destinationLatitude: 'string',
      destinationLongitude: 'string',
      originLatitude: 'string',
      originLongitude: 'string',
      paths: { 'type': 'array', 'itemType': ElectrobikeDirectionNovaResponseBodyDataPaths },
      taxiCost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeoCodeResponseBodyDataBuilding extends $tea.Model {
  /**
   * @example
   * timeliness_ms
   */
  name?: string;
  /**
   * @example
   * internal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeoCodeResponseBodyData extends $tea.Model {
  building?: GeoCodeResponseBodyDataBuilding;
  city?: string;
  cityCode?: string;
  district?: string;
  districtCode?: string;
  latitude?: string;
  level?: string;
  longitude?: string;
  /**
   * @example
   * 12201281024024
   */
  number?: string;
  province?: string;
  street?: string;
  static names(): { [key: string]: string } {
    return {
      building: 'building',
      city: 'city',
      cityCode: 'cityCode',
      district: 'district',
      districtCode: 'districtCode',
      latitude: 'latitude',
      level: 'level',
      longitude: 'longitude',
      number: 'number',
      province: 'province',
      street: 'street',
    };
  }

  static types(): { [key: string]: any } {
    return {
      building: GeoCodeResponseBodyDataBuilding,
      city: 'string',
      cityCode: 'string',
      district: 'string',
      districtCode: 'string',
      latitude: 'string',
      level: 'string',
      longitude: 'string',
      number: 'string',
      province: 'string',
      street: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NearbySearchNovaResponseBodyDataImages extends $tea.Model {
  /**
   * @example
   * test
   */
  title?: string;
  /**
   * @example
   * https://alidocs.dingtalk.com/i/team/nb9XJVAdyvMrOXyA/docs/b9XJlRRKq1BQaGyA
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NearbySearchNovaResponseBodyDataMetadata extends $tea.Model {
  /**
   * @example
   * 22.00
   */
  averageSpend?: string;
  businessArea?: string;
  /**
   * @example
   * 11:00-14:00 17:00-21:00
   */
  dailyOpeningHours?: string;
  mainTag?: string;
  /**
   * @example
   * 029-87983745
   */
  phone?: string;
  /**
   * @example
   * 4.5
   */
  score?: string;
  tag?: string;
  weeklyOpeningDays?: string;
  static names(): { [key: string]: string } {
    return {
      averageSpend: 'averageSpend',
      businessArea: 'businessArea',
      dailyOpeningHours: 'dailyOpeningHours',
      mainTag: 'mainTag',
      phone: 'phone',
      score: 'score',
      tag: 'tag',
      weeklyOpeningDays: 'weeklyOpeningDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageSpend: 'string',
      businessArea: 'string',
      dailyOpeningHours: 'string',
      mainTag: 'string',
      phone: 'string',
      score: 'string',
      tag: 'string',
      weeklyOpeningDays: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NearbySearchNovaResponseBodyData extends $tea.Model {
  address?: string;
  /**
   * @example
   * 010
   */
  cityCode?: string;
  cityName?: string;
  /**
   * @example
   * 445
   */
  distanceMeter?: string;
  districtCode?: string;
  districtName?: string;
  /**
   * @example
   * 34360
   */
  id?: string;
  images?: NearbySearchNovaResponseBodyDataImages[];
  /**
   * @example
   * 39.994135
   */
  latitude?: string;
  /**
   * @example
   * 108.970162
   */
  longitude?: string;
  metadata?: NearbySearchNovaResponseBodyDataMetadata;
  name?: string;
  /**
   * @example
   * 110000
   */
  provinceCode?: string;
  provinceName?: string;
  /**
   * @example
   * 110200
   */
  typeCode?: string;
  types?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      cityCode: 'cityCode',
      cityName: 'cityName',
      distanceMeter: 'distanceMeter',
      districtCode: 'districtCode',
      districtName: 'districtName',
      id: 'id',
      images: 'images',
      latitude: 'latitude',
      longitude: 'longitude',
      metadata: 'metadata',
      name: 'name',
      provinceCode: 'provinceCode',
      provinceName: 'provinceName',
      typeCode: 'typeCode',
      types: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      cityCode: 'string',
      cityName: 'string',
      distanceMeter: 'string',
      districtCode: 'string',
      districtName: 'string',
      id: 'string',
      images: { 'type': 'array', 'itemType': NearbySearchNovaResponseBodyDataImages },
      latitude: 'string',
      longitude: 'string',
      metadata: NearbySearchNovaResponseBodyDataMetadata,
      name: 'string',
      provinceCode: 'string',
      provinceName: 'string',
      typeCode: 'string',
      types: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlaceSearchNovaResponseBodyDataImages extends $tea.Model {
  /**
   * @example
   * test
   */
  title?: string;
  /**
   * @example
   * https://aos-comment.amap.com/B000A8UNZV/comment/f0a5ca9b58a31f63f8af51f459f75e4b_2048_2048_80.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlaceSearchNovaResponseBodyDataMetadata extends $tea.Model {
  /**
   * @example
   * 78
   */
  averageSpend?: string;
  businessArea?: string;
  dailyOpeningHours?: string;
  mainTag?: string;
  /**
   * @example
   * 010-83847583
   */
  phone?: string;
  /**
   * @example
   * [{\\"value\\":\\"nttd\\",\\"key\\":\\"owner\\"}]
   */
  tag?: string;
  weeklyOpeningDays?: string;
  static names(): { [key: string]: string } {
    return {
      averageSpend: 'averageSpend',
      businessArea: 'businessArea',
      dailyOpeningHours: 'dailyOpeningHours',
      mainTag: 'mainTag',
      phone: 'phone',
      tag: 'tag',
      weeklyOpeningDays: 'weeklyOpeningDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageSpend: 'string',
      businessArea: 'string',
      dailyOpeningHours: 'string',
      mainTag: 'string',
      phone: 'string',
      tag: 'string',
      weeklyOpeningDays: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlaceSearchNovaResponseBodyData extends $tea.Model {
  address?: string;
  /**
   * @example
   * 010
   */
  cityCode?: string;
  cityName?: string;
  /**
   * @example
   * 445
   */
  distanceMeter?: string;
  /**
   * @example
   * 110105
   */
  districtCode?: string;
  districtName?: string;
  /**
   * @example
   * 34360
   */
  id?: string;
  images?: PlaceSearchNovaResponseBodyDataImages[];
  /**
   * @example
   * 39.990039
   */
  latitude?: string;
  /**
   * @example
   * 116.482145
   */
  longitude?: string;
  metadata?: PlaceSearchNovaResponseBodyDataMetadata;
  /**
   * @example
   * hydro-project/hydro-res-auth
   */
  name?: string;
  /**
   * @example
   * 110000
   */
  provinceCode?: string;
  provinceName?: string;
  /**
   * @example
   * 110200
   */
  typeCode?: string;
  types?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      cityCode: 'cityCode',
      cityName: 'cityName',
      distanceMeter: 'distanceMeter',
      districtCode: 'districtCode',
      districtName: 'districtName',
      id: 'id',
      images: 'images',
      latitude: 'latitude',
      longitude: 'longitude',
      metadata: 'metadata',
      name: 'name',
      provinceCode: 'provinceCode',
      provinceName: 'provinceName',
      typeCode: 'typeCode',
      types: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      cityCode: 'string',
      cityName: 'string',
      distanceMeter: 'string',
      districtCode: 'string',
      districtName: 'string',
      id: 'string',
      images: { 'type': 'array', 'itemType': PlaceSearchNovaResponseBodyDataImages },
      latitude: 'string',
      longitude: 'string',
      metadata: PlaceSearchNovaResponseBodyDataMetadata,
      name: 'string',
      provinceCode: 'string',
      provinceName: 'string',
      typeCode: 'string',
      types: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RgeoCodeResponseBodyDataBuilding extends $tea.Model {
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RgeoCodeResponseBodyDataBusinessAreas extends $tea.Model {
  /**
   * @example
   * 110108
   */
  id?: string;
  /**
   * @example
   * 39.996850
   */
  latitude?: string;
  /**
   * @example
   * 116.294214
   */
  longitude?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      latitude: 'latitude',
      longitude: 'longitude',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      latitude: 'string',
      longitude: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RgeoCodeResponseBodyDataNeighborhood extends $tea.Model {
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RgeoCodeResponseBodyDataStreetNumber extends $tea.Model {
  direction?: string;
  /**
   * @example
   * 289.832
   */
  distanceMeter?: string;
  /**
   * @example
   * 39.986542
   */
  latitude?: string;
  /**
   * @example
   * 116.311943
   */
  longitude?: string;
  number?: string;
  street?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'direction',
      distanceMeter: 'distanceMeter',
      latitude: 'latitude',
      longitude: 'longitude',
      number: 'number',
      street: 'street',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      distanceMeter: 'string',
      latitude: 'string',
      longitude: 'string',
      number: 'string',
      street: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RgeoCodeResponseBodyData extends $tea.Model {
  building?: RgeoCodeResponseBodyDataBuilding;
  businessAreas?: RgeoCodeResponseBodyDataBusinessAreas[];
  city?: string;
  /**
   * @example
   * 010
   */
  cityCode?: string;
  country?: string;
  district?: string;
  /**
   * @example
   * 110108
   */
  districtCode?: string;
  formattedAddress?: string;
  neighborhood?: RgeoCodeResponseBodyDataNeighborhood;
  province?: string;
  streetNumber?: RgeoCodeResponseBodyDataStreetNumber;
  /**
   * @example
   * 110108015000
   */
  townCode?: string;
  townShip?: string;
  static names(): { [key: string]: string } {
    return {
      building: 'building',
      businessAreas: 'businessAreas',
      city: 'city',
      cityCode: 'cityCode',
      country: 'country',
      district: 'district',
      districtCode: 'districtCode',
      formattedAddress: 'formattedAddress',
      neighborhood: 'neighborhood',
      province: 'province',
      streetNumber: 'streetNumber',
      townCode: 'townCode',
      townShip: 'townShip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      building: RgeoCodeResponseBodyDataBuilding,
      businessAreas: { 'type': 'array', 'itemType': RgeoCodeResponseBodyDataBusinessAreas },
      city: 'string',
      cityCode: 'string',
      country: 'string',
      district: 'string',
      districtCode: 'string',
      formattedAddress: 'string',
      neighborhood: RgeoCodeResponseBodyDataNeighborhood,
      province: 'string',
      streetNumber: RgeoCodeResponseBodyDataStreetNumber,
      townCode: 'string',
      townShip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataCost extends $tea.Model {
  /**
   * @example
   * 1231
   */
  durationSecond?: string;
  /**
   * @example
   * 6
   */
  taxiFee?: string;
  tollDistanceMeter?: string;
  tollRoads?: string;
  /**
   * @example
   * 23
   */
  tolls?: string;
  trafficLights?: string;
  transitFee?: string;
  static names(): { [key: string]: string } {
    return {
      durationSecond: 'durationSecond',
      taxiFee: 'taxiFee',
      tollDistanceMeter: 'tollDistanceMeter',
      tollRoads: 'tollRoads',
      tolls: 'tolls',
      trafficLights: 'trafficLights',
      transitFee: 'transitFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSecond: 'string',
      taxiFee: 'string',
      tollDistanceMeter: 'string',
      tollRoads: 'string',
      tolls: 'string',
      trafficLights: 'string',
      transitFee: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsCost extends $tea.Model {
  /**
   * @example
   * 39233
   */
  durationSecond?: string;
  /**
   * @example
   * 20
   */
  taxiFee?: string;
  /**
   * @example
   * 2000
   */
  tollDistanceMeter?: string;
  tollRoads?: string;
  tolls?: string;
  trafficLights?: string;
  /**
   * @example
   * 4
   */
  transitFee?: string;
  static names(): { [key: string]: string } {
    return {
      durationSecond: 'durationSecond',
      taxiFee: 'taxiFee',
      tollDistanceMeter: 'tollDistanceMeter',
      tollRoads: 'tollRoads',
      tolls: 'tolls',
      trafficLights: 'trafficLights',
      transitFee: 'transitFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSecond: 'string',
      taxiFee: 'string',
      tollDistanceMeter: 'string',
      tollRoads: 'string',
      tolls: 'string',
      trafficLights: 'string',
      transitFee: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesArrivalStopExit extends $tea.Model {
  /**
   * @example
   * 900000028907015
   */
  id?: string;
  /**
   * @example
   * 116.468213,39.998876
   */
  location?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      location: 'location',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      location: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesArrivalStop extends $tea.Model {
  exit?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesArrivalStopExit;
  /**
   * @example
   * 100935
   */
  id?: string;
  /**
   * @example
   * 119.82416178385417,30.27139702690972
   */
  location?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      exit: 'exit',
      id: 'id',
      location: 'location',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exit: TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesArrivalStopExit,
      id: 'string',
      location: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesCost extends $tea.Model {
  /**
   * @example
   * 1521
   */
  durationSecond?: string;
  taxiFee?: string;
  tollDistanceMeter?: string;
  tollRoads?: string;
  tolls?: string;
  trafficLights?: string;
  transitFee?: string;
  static names(): { [key: string]: string } {
    return {
      durationSecond: 'durationSecond',
      taxiFee: 'taxiFee',
      tollDistanceMeter: 'tollDistanceMeter',
      tollRoads: 'tollRoads',
      tolls: 'tolls',
      trafficLights: 'trafficLights',
      transitFee: 'transitFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSecond: 'string',
      taxiFee: 'string',
      tollDistanceMeter: 'string',
      tollRoads: 'string',
      tolls: 'string',
      trafficLights: 'string',
      transitFee: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesDepartureStopEntrance extends $tea.Model {
  /**
   * @example
   * 99088345834
   */
  id?: string;
  /**
   * @example
   * 116.468213,39.998876
   */
  location?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      location: 'location',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      location: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesDepartureStop extends $tea.Model {
  entrance?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesDepartureStopEntrance;
  /**
   * @example
   * 60852
   */
  id?: string;
  /**
   * @example
   * 116.468213,39.998876
   */
  location?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      entrance: 'entrance',
      id: 'id',
      location: 'location',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entrance: TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesDepartureStopEntrance,
      id: 'string',
      location: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesPolyline extends $tea.Model {
  /**
   * @example
   * 116.471544,39.991835
   */
  polyline?: string;
  static names(): { [key: string]: string } {
    return {
      polyline: 'polyline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polyline: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesViaStops extends $tea.Model {
  id?: string;
  location?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      location: 'location',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      location: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslines extends $tea.Model {
  arrivalStop?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesArrivalStop;
  busTimeTips?: string;
  /**
   * @example
   * 0
   */
  bustimetag?: string;
  cost?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesCost;
  departureStop?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesDepartureStop;
  /**
   * @example
   * 13322
   */
  distanceMeter?: string;
  /**
   * @example
   * 2259
   */
  endTime?: string;
  /**
   * @example
   * 900000028907
   */
  id?: string;
  name?: string;
  polyline?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesPolyline;
  /**
   * @example
   * 0509
   */
  startTime?: string;
  type?: string;
  /**
   * @example
   * 8
   */
  viaNum?: string;
  viaStops?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesViaStops[];
  static names(): { [key: string]: string } {
    return {
      arrivalStop: 'arrivalStop',
      busTimeTips: 'busTimeTips',
      bustimetag: 'bustimetag',
      cost: 'cost',
      departureStop: 'departureStop',
      distanceMeter: 'distanceMeter',
      endTime: 'endTime',
      id: 'id',
      name: 'name',
      polyline: 'polyline',
      startTime: 'startTime',
      type: 'type',
      viaNum: 'viaNum',
      viaStops: 'viaStops',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalStop: TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesArrivalStop,
      busTimeTips: 'string',
      bustimetag: 'string',
      cost: TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesCost,
      departureStop: TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesDepartureStop,
      distanceMeter: 'string',
      endTime: 'string',
      id: 'string',
      name: 'string',
      polyline: TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesPolyline,
      startTime: 'string',
      type: 'string',
      viaNum: 'string',
      viaStops: { 'type': 'array', 'itemType': TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesViaStops },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsBus extends $tea.Model {
  buslines?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslines[];
  static names(): { [key: string]: string } {
    return {
      buslines: 'buslines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buslines: { 'type': 'array', 'itemType': TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslines },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsRailwayArrivalStop extends $tea.Model {
  /**
   * @example
   * 023
   */
  adcode?: string;
  /**
   * @remarks
   * end
   * 
   * @example
   * 1699410466578
   */
  end?: string;
  /**
   * @example
   * 8234837534
   */
  id?: string;
  /**
   * @example
   * 101.45625135633681,25.08939480251736
   */
  location?: string;
  name?: string;
  /**
   * @example
   * 2024-10-28 10:10:32
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      adcode: 'adcode',
      end: 'end',
      id: 'id',
      location: 'location',
      name: 'name',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adcode: 'string',
      end: 'string',
      id: 'string',
      location: 'string',
      name: 'string',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsRailwayDepartureStop extends $tea.Model {
  /**
   * @example
   * 029
   */
  adcode?: string;
  /**
   * @example
   * 100937
   */
  id?: string;
  /**
   * @example
   * 101.45625135633681,25.08939480251736
   */
  location?: string;
  name?: string;
  /**
   * @example
   * 1729440000000
   */
  start?: string;
  /**
   * @example
   * 2024-09-30 10:04:13
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      adcode: 'adcode',
      id: 'id',
      location: 'location',
      name: 'name',
      start: 'start',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adcode: 'string',
      id: 'string',
      location: 'string',
      name: 'string',
      start: 'string',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsRailwaySpaces extends $tea.Model {
  code?: string;
  /**
   * @example
   * 150
   */
  cost?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      cost: 'cost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      cost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsRailway extends $tea.Model {
  arrivalStop?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsRailwayArrivalStop;
  departureStop?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsRailwayDepartureStop;
  /**
   * @example
   * 398734
   */
  distanceMeter?: string;
  /**
   * @example
   * 434508
   */
  id?: string;
  name?: string;
  spaces?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsRailwaySpaces[];
  /**
   * @example
   * 2024-09-28 10:07:22
   */
  time?: string;
  trip?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      arrivalStop: 'arrivalStop',
      departureStop: 'departureStop',
      distanceMeter: 'distanceMeter',
      id: 'id',
      name: 'name',
      spaces: 'spaces',
      time: 'time',
      trip: 'trip',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalStop: TransitIntegratedDirectionResponseBodyDataPathsSegmentsRailwayArrivalStop,
      departureStop: TransitIntegratedDirectionResponseBodyDataPathsSegmentsRailwayDepartureStop,
      distanceMeter: 'string',
      id: 'string',
      name: 'string',
      spaces: { 'type': 'array', 'itemType': TransitIntegratedDirectionResponseBodyDataPathsSegmentsRailwaySpaces },
      time: 'string',
      trip: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsTaxi extends $tea.Model {
  /**
   * @example
   * xxx
   */
  destinationName?: string;
  /**
   * @example
   * 116.464297,39.896458
   */
  destinationPoint?: string;
  /**
   * @example
   * 1772
   */
  distanceMeter?: string;
  /**
   * @example
   * 720
   */
  driveTimeSecond?: string;
  originName?: string;
  /**
   * @example
   * 116.476597,39.893420
   */
  originPoint?: string;
  /**
   * @example
   * 13.5
   */
  price?: string;
  static names(): { [key: string]: string } {
    return {
      destinationName: 'destinationName',
      destinationPoint: 'destinationPoint',
      distanceMeter: 'distanceMeter',
      driveTimeSecond: 'driveTimeSecond',
      originName: 'originName',
      originPoint: 'originPoint',
      price: 'price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationName: 'string',
      destinationPoint: 'string',
      distanceMeter: 'string',
      driveTimeSecond: 'string',
      originName: 'string',
      originPoint: 'string',
      price: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsWalkingCost extends $tea.Model {
  /**
   * @example
   * 468
   */
  durationSecond?: string;
  taxiFee?: string;
  tollDistanceMeter?: string;
  tollRoads?: string;
  tolls?: string;
  trafficLights?: string;
  /**
   * @example
   * 3
   */
  transitFee?: string;
  static names(): { [key: string]: string } {
    return {
      durationSecond: 'durationSecond',
      taxiFee: 'taxiFee',
      tollDistanceMeter: 'tollDistanceMeter',
      tollRoads: 'tollRoads',
      tolls: 'tolls',
      trafficLights: 'trafficLights',
      transitFee: 'transitFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSecond: 'string',
      taxiFee: 'string',
      tollDistanceMeter: 'string',
      tollRoads: 'string',
      tolls: 'string',
      trafficLights: 'string',
      transitFee: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsWalkingStepsCost extends $tea.Model {
  /**
   * @example
   * 435
   */
  durationSecond?: string;
  taxiFee?: string;
  tollDistanceMeter?: string;
  tollRoads?: string;
  tolls?: string;
  trafficLights?: string;
  transitFee?: string;
  static names(): { [key: string]: string } {
    return {
      durationSecond: 'durationSecond',
      taxiFee: 'taxiFee',
      tollDistanceMeter: 'tollDistanceMeter',
      tollRoads: 'tollRoads',
      tolls: 'tolls',
      trafficLights: 'trafficLights',
      transitFee: 'transitFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSecond: 'string',
      taxiFee: 'string',
      tollDistanceMeter: 'string',
      tollRoads: 'string',
      tolls: 'string',
      trafficLights: 'string',
      transitFee: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsWalkingStepsPolyline extends $tea.Model {
  /**
   * @example
   * 116.467751,39.997631;116.467430,39.997631
   */
  polyline?: string;
  static names(): { [key: string]: string } {
    return {
      polyline: 'polyline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polyline: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsWalkingSteps extends $tea.Model {
  cost?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsWalkingStepsCost;
  instruction?: string;
  orientation?: string;
  polyline?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsWalkingStepsPolyline;
  roadName?: string;
  stepDistanceMeter?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      instruction: 'instruction',
      orientation: 'orientation',
      polyline: 'polyline',
      roadName: 'roadName',
      stepDistanceMeter: 'stepDistanceMeter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: TransitIntegratedDirectionResponseBodyDataPathsSegmentsWalkingStepsCost,
      instruction: 'string',
      orientation: 'string',
      polyline: TransitIntegratedDirectionResponseBodyDataPathsSegmentsWalkingStepsPolyline,
      roadName: 'string',
      stepDistanceMeter: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsWalking extends $tea.Model {
  cost?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsWalkingCost;
  /**
   * @example
   * 116.468208,39.998875
   */
  destination?: string;
  /**
   * @example
   * 546
   */
  distanceMeter?: string;
  /**
   * @example
   * 116.466568,39.995552
   */
  origin?: string;
  steps?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsWalkingSteps[];
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      destination: 'destination',
      distanceMeter: 'distanceMeter',
      origin: 'origin',
      steps: 'steps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: TransitIntegratedDirectionResponseBodyDataPathsSegmentsWalkingCost,
      destination: 'string',
      distanceMeter: 'string',
      origin: 'string',
      steps: { 'type': 'array', 'itemType': TransitIntegratedDirectionResponseBodyDataPathsSegmentsWalkingSteps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegments extends $tea.Model {
  bus?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsBus;
  railway?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsRailway;
  taxi?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsTaxi;
  walking?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsWalking;
  static names(): { [key: string]: string } {
    return {
      bus: 'bus',
      railway: 'railway',
      taxi: 'taxi',
      walking: 'walking',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bus: TransitIntegratedDirectionResponseBodyDataPathsSegmentsBus,
      railway: TransitIntegratedDirectionResponseBodyDataPathsSegmentsRailway,
      taxi: TransitIntegratedDirectionResponseBodyDataPathsSegmentsTaxi,
      walking: TransitIntegratedDirectionResponseBodyDataPathsSegmentsWalking,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPaths extends $tea.Model {
  cost?: TransitIntegratedDirectionResponseBodyDataPathsCost;
  /**
   * @example
   * 12000
   */
  distanceMeter?: string;
  nightflag?: string;
  segments?: TransitIntegratedDirectionResponseBodyDataPathsSegments[];
  /**
   * @example
   * 23435
   */
  walkingDistanceMeter?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      distanceMeter: 'distanceMeter',
      nightflag: 'nightflag',
      segments: 'segments',
      walkingDistanceMeter: 'walkingDistanceMeter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: TransitIntegratedDirectionResponseBodyDataPathsCost,
      distanceMeter: 'string',
      nightflag: 'string',
      segments: { 'type': 'array', 'itemType': TransitIntegratedDirectionResponseBodyDataPathsSegments },
      walkingDistanceMeter: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyData extends $tea.Model {
  cost?: TransitIntegratedDirectionResponseBodyDataCost;
  /**
   * @example
   * 5
   */
  count?: string;
  /**
   * @example
   * 39.995197
   */
  destinationLatitude?: string;
  /**
   * @example
   * 116.46424
   */
  destinationLongitude?: string;
  /**
   * @example
   * 445
   */
  distanceMeter?: string;
  /**
   * @example
   * 39.995197
   */
  originLatitude?: string;
  /**
   * @example
   * 116.466485
   */
  originLongitude?: string;
  paths?: TransitIntegratedDirectionResponseBodyDataPaths[];
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      count: 'count',
      destinationLatitude: 'destinationLatitude',
      destinationLongitude: 'destinationLongitude',
      distanceMeter: 'distanceMeter',
      originLatitude: 'originLatitude',
      originLongitude: 'originLongitude',
      paths: 'paths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: TransitIntegratedDirectionResponseBodyDataCost,
      count: 'string',
      destinationLatitude: 'string',
      destinationLongitude: 'string',
      distanceMeter: 'string',
      originLatitude: 'string',
      originLongitude: 'string',
      paths: { 'type': 'array', 'itemType': TransitIntegratedDirectionResponseBodyDataPaths },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WalkingDirectionNovaResponseBodyDataPathsCost extends $tea.Model {
  /**
   * @example
   * 1232
   */
  durationSecond?: string;
  /**
   * @example
   * 20
   */
  taxiFee?: string;
  tollDistanceMeter?: string;
  tollRoads?: string;
  tolls?: string;
  /**
   * @example
   * 3
   */
  trafficLights?: string;
  /**
   * @example
   * 10
   */
  transitFee?: string;
  static names(): { [key: string]: string } {
    return {
      durationSecond: 'durationSecond',
      taxiFee: 'taxiFee',
      tollDistanceMeter: 'tollDistanceMeter',
      tollRoads: 'tollRoads',
      tolls: 'tolls',
      trafficLights: 'trafficLights',
      transitFee: 'transitFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSecond: 'string',
      taxiFee: 'string',
      tollDistanceMeter: 'string',
      tollRoads: 'string',
      tolls: 'string',
      trafficLights: 'string',
      transitFee: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WalkingDirectionNovaResponseBodyDataPathsStepsCost extends $tea.Model {
  /**
   * @example
   * 13
   */
  durationSecond?: string;
  /**
   * @example
   * 20
   */
  taxiFee?: string;
  tollDistanceMeter?: string;
  tollRoads?: string;
  tolls?: string;
  trafficLights?: string;
  transitFee?: string;
  static names(): { [key: string]: string } {
    return {
      durationSecond: 'durationSecond',
      taxiFee: 'taxiFee',
      tollDistanceMeter: 'tollDistanceMeter',
      tollRoads: 'tollRoads',
      tolls: 'tolls',
      trafficLights: 'trafficLights',
      transitFee: 'transitFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSecond: 'string',
      taxiFee: 'string',
      tollDistanceMeter: 'string',
      tollRoads: 'string',
      tolls: 'string',
      trafficLights: 'string',
      transitFee: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WalkingDirectionNovaResponseBodyDataPathsSteps extends $tea.Model {
  cost?: WalkingDirectionNovaResponseBodyDataPathsStepsCost;
  instruction?: string;
  orientation?: string;
  polyline?: string;
  roadName?: string;
  /**
   * @example
   * 1665
   */
  stepDistanceMeter?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      instruction: 'instruction',
      orientation: 'orientation',
      polyline: 'polyline',
      roadName: 'roadName',
      stepDistanceMeter: 'stepDistanceMeter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: WalkingDirectionNovaResponseBodyDataPathsStepsCost,
      instruction: 'string',
      orientation: 'string',
      polyline: 'string',
      roadName: 'string',
      stepDistanceMeter: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WalkingDirectionNovaResponseBodyDataPaths extends $tea.Model {
  cost?: WalkingDirectionNovaResponseBodyDataPathsCost;
  /**
   * @example
   * 12000
   */
  distanceMeter?: string;
  /**
   * @example
   * 39223
   */
  durationSecond?: string;
  restriction?: string;
  steps?: WalkingDirectionNovaResponseBodyDataPathsSteps[];
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      distanceMeter: 'distanceMeter',
      durationSecond: 'durationSecond',
      restriction: 'restriction',
      steps: 'steps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: WalkingDirectionNovaResponseBodyDataPathsCost,
      distanceMeter: 'string',
      durationSecond: 'string',
      restriction: 'string',
      steps: { 'type': 'array', 'itemType': WalkingDirectionNovaResponseBodyDataPathsSteps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WalkingDirectionNovaResponseBodyData extends $tea.Model {
  count?: string;
  /**
   * @example
   * 40.020642
   */
  destinationLatitude?: string;
  /**
   * @example
   * 116.46424
   */
  destinationLongitude?: string;
  /**
   * @example
   * 39.995197
   */
  originLatitude?: string;
  /**
   * @example
   * 116.466485
   */
  originLongitude?: string;
  paths?: WalkingDirectionNovaResponseBodyDataPaths[];
  /**
   * @example
   * 8
   */
  taxiCost?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      destinationLatitude: 'destinationLatitude',
      destinationLongitude: 'destinationLongitude',
      originLatitude: 'originLatitude',
      originLongitude: 'originLongitude',
      paths: 'paths',
      taxiCost: 'taxiCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      destinationLatitude: 'string',
      destinationLongitude: 'string',
      originLatitude: 'string',
      originLongitude: 'string',
      paths: { 'type': 'array', 'itemType': WalkingDirectionNovaResponseBodyDataPaths },
      taxiCost: 'string',
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
    this._endpoint = this.getEndpoint("iqs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 根据起终点坐标检索符合条件的骑行路线规划方案
   * 
   * @param request - BicyclingDirectionNovaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BicyclingDirectionNovaResponse
   */
  async bicyclingDirectionNovaWithOptions(request: BicyclingDirectionNovaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BicyclingDirectionNovaResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.destinationLatitude)) {
      query["destinationLatitude"] = request.destinationLatitude;
    }

    if (!Util.isUnset(request.destinationLongitude)) {
      query["destinationLongitude"] = request.destinationLongitude;
    }

    if (!Util.isUnset(request.originLatitude)) {
      query["originLatitude"] = request.originLatitude;
    }

    if (!Util.isUnset(request.originLongitude)) {
      query["originLongitude"] = request.originLongitude;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BicyclingDirectionNova",
      version: "2024-07-12",
      protocol: "HTTPS",
      pathname: `/ipaas/v2/direction/bicycling`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BicyclingDirectionNovaResponse>(await this.callApi(params, req, runtime), new BicyclingDirectionNovaResponse({}));
  }

  /**
   * 根据起终点坐标检索符合条件的骑行路线规划方案
   * 
   * @param request - BicyclingDirectionNovaRequest
   * @returns BicyclingDirectionNovaResponse
   */
  async bicyclingDirectionNova(request: BicyclingDirectionNovaRequest): Promise<BicyclingDirectionNovaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.bicyclingDirectionNovaWithOptions(request, headers, runtime);
  }

  /**
   * 自然语言通用查询
   * 
   * @param request - CommonQueryBySceneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CommonQueryBySceneResponse
   */
  async commonQueryBySceneWithOptions(request: CommonQueryBySceneRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CommonQueryBySceneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CommonQueryByScene",
      version: "2024-07-12",
      protocol: "HTTPS",
      pathname: `/amap-function-call-agent/iqs-agent-service/v2/nl/common`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CommonQueryBySceneResponse>(await this.callApi(params, req, runtime), new CommonQueryBySceneResponse({}));
  }

  /**
   * 自然语言通用查询
   * 
   * @param request - CommonQueryBySceneRequest
   * @returns CommonQueryBySceneResponse
   */
  async commonQueryByScene(request: CommonQueryBySceneRequest): Promise<CommonQueryBySceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.commonQueryBySceneWithOptions(request, headers, runtime);
  }

  /**
   * 根据起终点坐标检索符合条件的驾车路线规划方案
   * 
   * @param request - DrivingDirectionNovaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DrivingDirectionNovaResponse
   */
  async drivingDirectionNovaWithOptions(request: DrivingDirectionNovaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DrivingDirectionNovaResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.carType)) {
      query["carType"] = request.carType;
    }

    if (!Util.isUnset(request.destinationLatitude)) {
      query["destinationLatitude"] = request.destinationLatitude;
    }

    if (!Util.isUnset(request.destinationLongitude)) {
      query["destinationLongitude"] = request.destinationLongitude;
    }

    if (!Util.isUnset(request.originLatitude)) {
      query["originLatitude"] = request.originLatitude;
    }

    if (!Util.isUnset(request.originLongitude)) {
      query["originLongitude"] = request.originLongitude;
    }

    if (!Util.isUnset(request.plate)) {
      query["plate"] = request.plate;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DrivingDirectionNova",
      version: "2024-07-12",
      protocol: "HTTPS",
      pathname: `/ipaas/v2/direction/driving`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DrivingDirectionNovaResponse>(await this.callApi(params, req, runtime), new DrivingDirectionNovaResponse({}));
  }

  /**
   * 根据起终点坐标检索符合条件的驾车路线规划方案
   * 
   * @param request - DrivingDirectionNovaRequest
   * @returns DrivingDirectionNovaResponse
   */
  async drivingDirectionNova(request: DrivingDirectionNovaRequest): Promise<DrivingDirectionNovaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.drivingDirectionNovaWithOptions(request, headers, runtime);
  }

  /**
   * 根据起终点坐标检索符合条件的电动车路线规划方案
   * 
   * @param request - ElectrobikeDirectionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ElectrobikeDirectionResponse
   */
  async electrobikeDirectionWithOptions(request: ElectrobikeDirectionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ElectrobikeDirectionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.destinationLatitude)) {
      query["destinationLatitude"] = request.destinationLatitude;
    }

    if (!Util.isUnset(request.destinationLongitude)) {
      query["destinationLongitude"] = request.destinationLongitude;
    }

    if (!Util.isUnset(request.originLatitude)) {
      query["originLatitude"] = request.originLatitude;
    }

    if (!Util.isUnset(request.originLongitude)) {
      query["originLongitude"] = request.originLongitude;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ElectrobikeDirection",
      version: "2024-07-12",
      protocol: "HTTPS",
      pathname: `/ipaas/v1/direction/electrobike`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ElectrobikeDirectionResponse>(await this.callApi(params, req, runtime), new ElectrobikeDirectionResponse({}));
  }

  /**
   * 根据起终点坐标检索符合条件的电动车路线规划方案
   * 
   * @param request - ElectrobikeDirectionRequest
   * @returns ElectrobikeDirectionResponse
   */
  async electrobikeDirection(request: ElectrobikeDirectionRequest): Promise<ElectrobikeDirectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.electrobikeDirectionWithOptions(request, headers, runtime);
  }

  /**
   * 电动车路线规划方案V2
   * 
   * @param request - ElectrobikeDirectionNovaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ElectrobikeDirectionNovaResponse
   */
  async electrobikeDirectionNovaWithOptions(request: ElectrobikeDirectionNovaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ElectrobikeDirectionNovaResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.destinationLatitude)) {
      query["destinationLatitude"] = request.destinationLatitude;
    }

    if (!Util.isUnset(request.destinationLongitude)) {
      query["destinationLongitude"] = request.destinationLongitude;
    }

    if (!Util.isUnset(request.originLatitude)) {
      query["originLatitude"] = request.originLatitude;
    }

    if (!Util.isUnset(request.originLongitude)) {
      query["originLongitude"] = request.originLongitude;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ElectrobikeDirectionNova",
      version: "2024-07-12",
      protocol: "HTTPS",
      pathname: `/ipaas/v2/direction/electrobike`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ElectrobikeDirectionNovaResponse>(await this.callApi(params, req, runtime), new ElectrobikeDirectionNovaResponse({}));
  }

  /**
   * 电动车路线规划方案V2
   * 
   * @param request - ElectrobikeDirectionNovaRequest
   * @returns ElectrobikeDirectionNovaResponse
   */
  async electrobikeDirectionNova(request: ElectrobikeDirectionNovaRequest): Promise<ElectrobikeDirectionNovaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.electrobikeDirectionNovaWithOptions(request, headers, runtime);
  }

  /**
   * 地理编码，将详细的结构化地址转换为高德经纬度坐标
   * 
   * @param request - GeoCodeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GeoCodeResponse
   */
  async geoCodeWithOptions(request: GeoCodeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GeoCodeResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.address)) {
      query["address"] = request.address;
    }

    if (!Util.isUnset(request.city)) {
      query["city"] = request.city;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GeoCode",
      version: "2024-07-12",
      protocol: "HTTPS",
      pathname: `/ipaas/v1/geocode/geo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GeoCodeResponse>(await this.callApi(params, req, runtime), new GeoCodeResponse({}));
  }

  /**
   * 地理编码，将详细的结构化地址转换为高德经纬度坐标
   * 
   * @param request - GeoCodeRequest
   * @returns GeoCodeResponse
   */
  async geoCode(request: GeoCodeRequest): Promise<GeoCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.geoCodeWithOptions(request, headers, runtime);
  }

  /**
   * 通过经纬度查询附近的地点
   * 
   * @param request - NearbySearchNovaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns NearbySearchNovaResponse
   */
  async nearbySearchNovaWithOptions(request: NearbySearchNovaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<NearbySearchNovaResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keywords)) {
      query["keywords"] = request.keywords;
    }

    if (!Util.isUnset(request.latitude)) {
      query["latitude"] = request.latitude;
    }

    if (!Util.isUnset(request.longitude)) {
      query["longitude"] = request.longitude;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.radius)) {
      query["radius"] = request.radius;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.types)) {
      query["types"] = request.types;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "NearbySearchNova",
      version: "2024-07-12",
      protocol: "HTTPS",
      pathname: `/ipaas/v2/pois/nearby`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<NearbySearchNovaResponse>(await this.callApi(params, req, runtime), new NearbySearchNovaResponse({}));
  }

  /**
   * 通过经纬度查询附近的地点
   * 
   * @param request - NearbySearchNovaRequest
   * @returns NearbySearchNovaResponse
   */
  async nearbySearchNova(request: NearbySearchNovaRequest): Promise<NearbySearchNovaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.nearbySearchNovaWithOptions(request, headers, runtime);
  }

  /**
   * 通过关键词搜索地点
   * 
   * @param request - PlaceSearchNovaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PlaceSearchNovaResponse
   */
  async placeSearchNovaWithOptions(request: PlaceSearchNovaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PlaceSearchNovaResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keywords)) {
      query["keywords"] = request.keywords;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.region)) {
      query["region"] = request.region;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.types)) {
      query["types"] = request.types;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PlaceSearchNova",
      version: "2024-07-12",
      protocol: "HTTPS",
      pathname: `/ipaas/v2/pois/place`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PlaceSearchNovaResponse>(await this.callApi(params, req, runtime), new PlaceSearchNovaResponse({}));
  }

  /**
   * 通过关键词搜索地点
   * 
   * @param request - PlaceSearchNovaRequest
   * @returns PlaceSearchNovaResponse
   */
  async placeSearchNova(request: PlaceSearchNovaRequest): Promise<PlaceSearchNovaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.placeSearchNovaWithOptions(request, headers, runtime);
  }

  /**
   * 逆地理编码，将经纬度转换为详细结构化的地址信息
   * 
   * @param request - RgeoCodeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RgeoCodeResponse
   */
  async rgeoCodeWithOptions(request: RgeoCodeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RgeoCodeResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.latitude)) {
      query["latitude"] = request.latitude;
    }

    if (!Util.isUnset(request.longitude)) {
      query["longitude"] = request.longitude;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RgeoCode",
      version: "2024-07-12",
      protocol: "HTTPS",
      pathname: `/ipaas/v1/geocode/regeo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RgeoCodeResponse>(await this.callApi(params, req, runtime), new RgeoCodeResponse({}));
  }

  /**
   * 逆地理编码，将经纬度转换为详细结构化的地址信息
   * 
   * @param request - RgeoCodeRequest
   * @returns RgeoCodeResponse
   */
  async rgeoCode(request: RgeoCodeRequest): Promise<RgeoCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rgeoCodeWithOptions(request, headers, runtime);
  }

  /**
   * 公共交通路线规划方案
   * 
   * @param request - TransitIntegratedDirectionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransitIntegratedDirectionResponse
   */
  async transitIntegratedDirectionWithOptions(request: TransitIntegratedDirectionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TransitIntegratedDirectionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.destinationCity)) {
      query["destinationCity"] = request.destinationCity;
    }

    if (!Util.isUnset(request.destinationLatitude)) {
      query["destinationLatitude"] = request.destinationLatitude;
    }

    if (!Util.isUnset(request.destinationLongitude)) {
      query["destinationLongitude"] = request.destinationLongitude;
    }

    if (!Util.isUnset(request.originCity)) {
      query["originCity"] = request.originCity;
    }

    if (!Util.isUnset(request.originLatitude)) {
      query["originLatitude"] = request.originLatitude;
    }

    if (!Util.isUnset(request.originLongitude)) {
      query["originLongitude"] = request.originLongitude;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TransitIntegratedDirection",
      version: "2024-07-12",
      protocol: "HTTPS",
      pathname: `/ipaas/v2/direction/transit/integrated`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TransitIntegratedDirectionResponse>(await this.callApi(params, req, runtime), new TransitIntegratedDirectionResponse({}));
  }

  /**
   * 公共交通路线规划方案
   * 
   * @param request - TransitIntegratedDirectionRequest
   * @returns TransitIntegratedDirectionResponse
   */
  async transitIntegratedDirection(request: TransitIntegratedDirectionRequest): Promise<TransitIntegratedDirectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.transitIntegratedDirectionWithOptions(request, headers, runtime);
  }

  /**
   * 根据起终点坐标检索符合条件的步行路线规划方案
   * 
   * @param request - WalkingDirectionNovaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns WalkingDirectionNovaResponse
   */
  async walkingDirectionNovaWithOptions(request: WalkingDirectionNovaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<WalkingDirectionNovaResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.destinationLatitude)) {
      query["destinationLatitude"] = request.destinationLatitude;
    }

    if (!Util.isUnset(request.destinationLongitude)) {
      query["destinationLongitude"] = request.destinationLongitude;
    }

    if (!Util.isUnset(request.originLatitude)) {
      query["originLatitude"] = request.originLatitude;
    }

    if (!Util.isUnset(request.originLongitude)) {
      query["originLongitude"] = request.originLongitude;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "WalkingDirectionNova",
      version: "2024-07-12",
      protocol: "HTTPS",
      pathname: `/ipaas/v2/direction/walking`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<WalkingDirectionNovaResponse>(await this.callApi(params, req, runtime), new WalkingDirectionNovaResponse({}));
  }

  /**
   * 根据起终点坐标检索符合条件的步行路线规划方案
   * 
   * @param request - WalkingDirectionNovaRequest
   * @returns WalkingDirectionNovaResponse
   */
  async walkingDirectionNova(request: WalkingDirectionNovaRequest): Promise<WalkingDirectionNovaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.walkingDirectionNovaWithOptions(request, headers, runtime);
  }

}
