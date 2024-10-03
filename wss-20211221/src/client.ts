// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import GatewayClient from '@alicloud/gateway-pop';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DescribeDeliveryAddressResponseBody extends $tea.Model {
  addresses?: DescribeDeliveryAddressResponseBodyAddresses[];
  /**
   * @example
   * 72481C12-69AB-5CE1-8A35-A8EFA921****
   */
  requestId?: string;
  /**
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': DescribeDeliveryAddressResponseBodyAddresses },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeliveryAddressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDeliveryAddressResponseBody;
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
      body: DescribeDeliveryAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackageDeductionsRequest extends $tea.Model {
  instanceIds?: string[];
  packageIds?: string[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CorePackage
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      packageIds: 'PackageIds',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      packageIds: { 'type': 'array', 'itemType': 'string' },
      pageNum: 'number',
      pageSize: 'number',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackageDeductionsResponseBody extends $tea.Model {
  deductions?: DescribePackageDeductionsResponseBodyDeductions[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @example
   * 833C4D2C-09C7-5CE6-8159-06758B964970
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      deductions: 'Deductions',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deductions: { 'type': 'array', 'itemType': DescribePackageDeductionsResponseBodyDeductions },
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackageDeductionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePackageDeductionsResponseBody;
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
      body: DescribePackageDeductionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeliveryAddressResponseBodyAddressesArea extends $tea.Model {
  /**
   * @example
   * 33****
   */
  areaId?: number;
  areaName?: string;
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      areaName: 'AreaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'number',
      areaName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeliveryAddressResponseBodyAddressesCity extends $tea.Model {
  /**
   * @example
   * 33****
   */
  cityId?: number;
  cityName?: string;
  static names(): { [key: string]: string } {
    return {
      cityId: 'CityId',
      cityName: 'CityName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityId: 'number',
      cityName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeliveryAddressResponseBodyAddressesProvince extends $tea.Model {
  /**
   * @example
   * 330000
   */
  provinceId?: number;
  provinceName?: string;
  static names(): { [key: string]: string } {
    return {
      provinceId: 'ProvinceId',
      provinceName: 'ProvinceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      provinceId: 'number',
      provinceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeliveryAddressResponseBodyAddressesTown extends $tea.Model {
  /**
   * @example
   * 3001****
   */
  townId?: number;
  townName?: string;
  static names(): { [key: string]: string } {
    return {
      townId: 'TownId',
      townName: 'TownName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      townId: 'number',
      townName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeliveryAddressResponseBodyAddresses extends $tea.Model {
  area?: DescribeDeliveryAddressResponseBodyAddressesArea;
  city?: DescribeDeliveryAddressResponseBodyAddressesCity;
  /**
   * @example
   * Alice
   */
  contacts?: string;
  /**
   * @example
   * true
   */
  defaultAddress?: boolean;
  detail?: string;
  /**
   * @example
   * 1381111****
   */
  mobile?: string;
  /**
   * @example
   * 03****
   */
  postalCode?: string;
  province?: DescribeDeliveryAddressResponseBodyAddressesProvince;
  town?: DescribeDeliveryAddressResponseBodyAddressesTown;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      city: 'City',
      contacts: 'Contacts',
      defaultAddress: 'DefaultAddress',
      detail: 'Detail',
      mobile: 'Mobile',
      postalCode: 'PostalCode',
      province: 'Province',
      town: 'Town',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: DescribeDeliveryAddressResponseBodyAddressesArea,
      city: DescribeDeliveryAddressResponseBodyAddressesCity,
      contacts: 'string',
      defaultAddress: 'boolean',
      detail: 'string',
      mobile: 'string',
      postalCode: 'string',
      province: DescribeDeliveryAddressResponseBodyAddressesProvince,
      town: DescribeDeliveryAddressResponseBodyAddressesTown,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackageDeductionsResponseBodyDeductions extends $tea.Model {
  /**
   * @example
   * 4
   */
  cpu?: number;
  /**
   * @example
   * ecd-6wye9optu0kag****
   */
  desktopId?: string;
  /**
   * @example
   * DemoComputer
   */
  desktopName?: string;
  /**
   * @example
   * eds.enterprise_office.4c8g
   */
  desktopType?: string;
  /**
   * @example
   * 2024-07-31T03:00Z
   */
  endTime?: string;
  /**
   * @example
   * Deleted
   */
  instanceState?: string;
  /**
   * @example
   * 8192
   */
  memory?: number;
  /**
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceType?: string;
  /**
   * @example
   * 2024-07-31T02:00Z
   */
  staTime?: string;
  /**
   * @example
   * 4.0
   */
  usedCoreTime?: number;
  /**
   * @example
   * 3600
   */
  usedTime?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopType: 'DesktopType',
      endTime: 'EndTime',
      instanceState: 'InstanceState',
      memory: 'Memory',
      osType: 'OsType',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      staTime: 'StaTime',
      usedCoreTime: 'UsedCoreTime',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      desktopId: 'string',
      desktopName: 'string',
      desktopType: 'string',
      endTime: 'string',
      instanceState: 'string',
      memory: 'number',
      osType: 'string',
      regionId: 'string',
      resourceType: 'string',
      staTime: 'string',
      usedCoreTime: 'number',
      usedTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._productId = "wss";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("wss", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - DescribeDeliveryAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeliveryAddressResponse
   */
  async describeDeliveryAddressWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeDeliveryAddressResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeDeliveryAddress",
      version: "2021-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DescribeDeliveryAddressResponse>(await this.callApi(params, req, runtime), new DescribeDeliveryAddressResponse({}));
    } else {
      return $tea.cast<DescribeDeliveryAddressResponse>(await this.execute(params, req, runtime), new DescribeDeliveryAddressResponse({}));
    }

  }

  /**
   * @returns DescribeDeliveryAddressResponse
   */
  async describeDeliveryAddress(): Promise<DescribeDeliveryAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeliveryAddressWithOptions(runtime);
  }

  /**
   * 查询核时包抵扣明细
   * 
   * @param request - DescribePackageDeductionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePackageDeductionsResponse
   */
  async describePackageDeductionsWithOptions(request: DescribePackageDeductionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePackageDeductionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.packageIds)) {
      query["PackageIds"] = request.packageIds;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePackageDeductions",
      version: "2021-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DescribePackageDeductionsResponse>(await this.callApi(params, req, runtime), new DescribePackageDeductionsResponse({}));
    } else {
      return $tea.cast<DescribePackageDeductionsResponse>(await this.execute(params, req, runtime), new DescribePackageDeductionsResponse({}));
    }

  }

  /**
   * 查询核时包抵扣明细
   * 
   * @param request - DescribePackageDeductionsRequest
   * @returns DescribePackageDeductionsResponse
   */
  async describePackageDeductions(request: DescribePackageDeductionsRequest): Promise<DescribePackageDeductionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePackageDeductionsWithOptions(request, runtime);
  }

}
