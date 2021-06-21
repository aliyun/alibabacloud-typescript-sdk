// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DescribeGeoipInstanceRequest extends $tea.Model {
  lang?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGeoipInstanceResponseBody extends $tea.Model {
  expireTimestamp?: number;
  versionCode?: string;
  maxQpd?: number;
  maxQps?: number;
  requestId?: string;
  instanceId?: string;
  productCode?: string;
  createTime?: string;
  queryCount?: number;
  expireTime?: string;
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      expireTimestamp: 'ExpireTimestamp',
      versionCode: 'VersionCode',
      maxQpd: 'MaxQpd',
      maxQps: 'MaxQps',
      requestId: 'RequestId',
      instanceId: 'InstanceId',
      productCode: 'ProductCode',
      createTime: 'CreateTime',
      queryCount: 'QueryCount',
      expireTime: 'ExpireTime',
      createTimestamp: 'CreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTimestamp: 'number',
      versionCode: 'string',
      maxQpd: 'number',
      maxQps: 'number',
      requestId: 'string',
      instanceId: 'string',
      productCode: 'string',
      createTime: 'string',
      queryCount: 'number',
      expireTime: 'string',
      createTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGeoipInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGeoipInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGeoipInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGeoipInstanceDataInfosRequest extends $tea.Model {
  lang?: string;
  instanceId?: string;
  locationDataType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      instanceId: 'InstanceId',
      locationDataType: 'LocationDataType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      instanceId: 'string',
      locationDataType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGeoipInstanceDataInfosResponseBody extends $tea.Model {
  requestId?: string;
  dataInfos?: DescribeGeoipInstanceDataInfosResponseBodyDataInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dataInfos: 'DataInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dataInfos: DescribeGeoipInstanceDataInfosResponseBodyDataInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGeoipInstanceDataInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGeoipInstanceDataInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGeoipInstanceDataInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGeoipInstanceDataUrlRequest extends $tea.Model {
  lang?: string;
  instanceId?: string;
  dataType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      instanceId: 'InstanceId',
      dataType: 'DataType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      instanceId: 'string',
      dataType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGeoipInstanceDataUrlResponseBody extends $tea.Model {
  requestId?: string;
  downloadUrl?: string;
  fixedDomainDownloadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      downloadUrl: 'DownloadUrl',
      fixedDomainDownloadUrl: 'FixedDomainDownloadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      downloadUrl: 'string',
      fixedDomainDownloadUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGeoipInstanceDataUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGeoipInstanceDataUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGeoipInstanceDataUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGeoipInstancesRequest extends $tea.Model {
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGeoipInstancesResponseBody extends $tea.Model {
  requestId?: string;
  geoipInstances?: DescribeGeoipInstancesResponseBodyGeoipInstances;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      geoipInstances: 'GeoipInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      geoipInstances: DescribeGeoipInstancesResponseBodyGeoipInstances,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGeoipInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGeoipInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGeoipInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGeoipInstanceStatisticsRequest extends $tea.Model {
  lang?: string;
  instanceId?: string;
  startDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      instanceId: 'InstanceId',
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      instanceId: 'string',
      startDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGeoipInstanceStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  statistics?: DescribeGeoipInstanceStatisticsResponseBodyStatistics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistics: DescribeGeoipInstanceStatisticsResponseBodyStatistics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGeoipInstanceStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGeoipInstanceStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGeoipInstanceStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpv4LocationRequest extends $tea.Model {
  lang?: string;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpv4LocationResponseBody extends $tea.Model {
  provinceEn?: string;
  requestId?: string;
  cityEn?: string;
  ip?: string;
  isp?: string;
  latitude?: string;
  city?: string;
  county?: string;
  longitude?: string;
  countryEn?: string;
  province?: string;
  country?: string;
  countryCode?: string;
  static names(): { [key: string]: string } {
    return {
      provinceEn: 'ProvinceEn',
      requestId: 'RequestId',
      cityEn: 'CityEn',
      ip: 'Ip',
      isp: 'Isp',
      latitude: 'Latitude',
      city: 'City',
      county: 'County',
      longitude: 'Longitude',
      countryEn: 'CountryEn',
      province: 'Province',
      country: 'Country',
      countryCode: 'CountryCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      provinceEn: 'string',
      requestId: 'string',
      cityEn: 'string',
      ip: 'string',
      isp: 'string',
      latitude: 'string',
      city: 'string',
      county: 'string',
      longitude: 'string',
      countryEn: 'string',
      province: 'string',
      country: 'string',
      countryCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpv4LocationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeIpv4LocationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeIpv4LocationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpv6LocationRequest extends $tea.Model {
  lang?: string;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpv6LocationResponseBody extends $tea.Model {
  provinceEn?: string;
  requestId?: string;
  cityEn?: string;
  ip?: string;
  isp?: string;
  latitude?: string;
  city?: string;
  county?: string;
  longitude?: string;
  countryEn?: string;
  province?: string;
  country?: string;
  countryCode?: string;
  static names(): { [key: string]: string } {
    return {
      provinceEn: 'ProvinceEn',
      requestId: 'RequestId',
      cityEn: 'CityEn',
      ip: 'Ip',
      isp: 'Isp',
      latitude: 'Latitude',
      city: 'City',
      county: 'County',
      longitude: 'Longitude',
      countryEn: 'CountryEn',
      province: 'Province',
      country: 'Country',
      countryCode: 'CountryCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      provinceEn: 'string',
      requestId: 'string',
      cityEn: 'string',
      ip: 'string',
      isp: 'string',
      latitude: 'string',
      city: 'string',
      county: 'string',
      longitude: 'string',
      countryEn: 'string',
      province: 'string',
      country: 'string',
      countryCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpv6LocationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeIpv6LocationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeIpv6LocationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGeoipInstanceDataInfosResponseBodyDataInfosDataInfo extends $tea.Model {
  type?: string;
  updateTimestamp?: number;
  updateTime?: string;
  version?: string;
  downloadCount?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      updateTimestamp: 'UpdateTimestamp',
      updateTime: 'UpdateTime',
      version: 'Version',
      downloadCount: 'DownloadCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      updateTimestamp: 'number',
      updateTime: 'string',
      version: 'string',
      downloadCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGeoipInstanceDataInfosResponseBodyDataInfos extends $tea.Model {
  dataInfo?: DescribeGeoipInstanceDataInfosResponseBodyDataInfosDataInfo[];
  static names(): { [key: string]: string } {
    return {
      dataInfo: 'DataInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInfo: { 'type': 'array', 'itemType': DescribeGeoipInstanceDataInfosResponseBodyDataInfosDataInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGeoipInstancesResponseBodyGeoipInstancesGeoipInstance extends $tea.Model {
  status?: string;
  expireTimestamp?: number;
  expireTime?: string;
  maxQps?: number;
  createTime?: string;
  maxQpd?: number;
  instanceId?: string;
  versionCode?: string;
  createTimestamp?: number;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      expireTimestamp: 'ExpireTimestamp',
      expireTime: 'ExpireTime',
      maxQps: 'MaxQps',
      createTime: 'CreateTime',
      maxQpd: 'MaxQpd',
      instanceId: 'InstanceId',
      versionCode: 'VersionCode',
      createTimestamp: 'CreateTimestamp',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      expireTimestamp: 'number',
      expireTime: 'string',
      maxQps: 'number',
      createTime: 'string',
      maxQpd: 'number',
      instanceId: 'string',
      versionCode: 'string',
      createTimestamp: 'number',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGeoipInstancesResponseBodyGeoipInstances extends $tea.Model {
  geoipInstance?: DescribeGeoipInstancesResponseBodyGeoipInstancesGeoipInstance[];
  static names(): { [key: string]: string } {
    return {
      geoipInstance: 'GeoipInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      geoipInstance: { 'type': 'array', 'itemType': DescribeGeoipInstancesResponseBodyGeoipInstancesGeoipInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGeoipInstanceStatisticsResponseBodyStatisticsStatistic extends $tea.Model {
  timestamp?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGeoipInstanceStatisticsResponseBodyStatistics extends $tea.Model {
  statistic?: DescribeGeoipInstanceStatisticsResponseBodyStatisticsStatistic[];
  static names(): { [key: string]: string } {
    return {
      statistic: 'Statistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statistic: { 'type': 'array', 'itemType': DescribeGeoipInstanceStatisticsResponseBodyStatisticsStatistic },
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
    this._endpoint = this.getEndpoint("geoip", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async describeGeoipInstanceWithOptions(request: DescribeGeoipInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGeoipInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGeoipInstanceResponse>(await this.doRPCRequest("DescribeGeoipInstance", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGeoipInstanceResponse({}));
  }

  async describeGeoipInstance(request: DescribeGeoipInstanceRequest): Promise<DescribeGeoipInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGeoipInstanceWithOptions(request, runtime);
  }

  async describeGeoipInstanceDataInfosWithOptions(request: DescribeGeoipInstanceDataInfosRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGeoipInstanceDataInfosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGeoipInstanceDataInfosResponse>(await this.doRPCRequest("DescribeGeoipInstanceDataInfos", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGeoipInstanceDataInfosResponse({}));
  }

  async describeGeoipInstanceDataInfos(request: DescribeGeoipInstanceDataInfosRequest): Promise<DescribeGeoipInstanceDataInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGeoipInstanceDataInfosWithOptions(request, runtime);
  }

  async describeGeoipInstanceDataUrlWithOptions(request: DescribeGeoipInstanceDataUrlRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGeoipInstanceDataUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGeoipInstanceDataUrlResponse>(await this.doRPCRequest("DescribeGeoipInstanceDataUrl", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGeoipInstanceDataUrlResponse({}));
  }

  async describeGeoipInstanceDataUrl(request: DescribeGeoipInstanceDataUrlRequest): Promise<DescribeGeoipInstanceDataUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGeoipInstanceDataUrlWithOptions(request, runtime);
  }

  async describeGeoipInstancesWithOptions(request: DescribeGeoipInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGeoipInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGeoipInstancesResponse>(await this.doRPCRequest("DescribeGeoipInstances", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGeoipInstancesResponse({}));
  }

  async describeGeoipInstances(request: DescribeGeoipInstancesRequest): Promise<DescribeGeoipInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGeoipInstancesWithOptions(request, runtime);
  }

  async describeGeoipInstanceStatisticsWithOptions(request: DescribeGeoipInstanceStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGeoipInstanceStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGeoipInstanceStatisticsResponse>(await this.doRPCRequest("DescribeGeoipInstanceStatistics", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGeoipInstanceStatisticsResponse({}));
  }

  async describeGeoipInstanceStatistics(request: DescribeGeoipInstanceStatisticsRequest): Promise<DescribeGeoipInstanceStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGeoipInstanceStatisticsWithOptions(request, runtime);
  }

  async describeIpv4LocationWithOptions(request: DescribeIpv4LocationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIpv4LocationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeIpv4LocationResponse>(await this.doRPCRequest("DescribeIpv4Location", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeIpv4LocationResponse({}));
  }

  async describeIpv4Location(request: DescribeIpv4LocationRequest): Promise<DescribeIpv4LocationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIpv4LocationWithOptions(request, runtime);
  }

  async describeIpv6LocationWithOptions(request: DescribeIpv6LocationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIpv6LocationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeIpv6LocationResponse>(await this.doRPCRequest("DescribeIpv6Location", "2020-01-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeIpv6LocationResponse({}));
  }

  async describeIpv6Location(request: DescribeIpv6LocationRequest): Promise<DescribeIpv6LocationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIpv6LocationWithOptions(request, runtime);
  }

}
