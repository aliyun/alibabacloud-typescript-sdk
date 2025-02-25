// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CreateMultiOrderRequestOrderItemsComponents extends $dara.Model {
  /**
   * @example
   * RegionId
   */
  key?: string;
  /**
   * @example
   * cn-shanghai
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMultiOrderRequestOrderItems extends $dara.Model {
  /**
   * @example
   * 1
   */
  amount?: number;
  /**
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @example
   * false
   */
  autoRenew?: boolean;
  components?: CreateMultiOrderRequestOrderItemsComponents[];
  /**
   * @example
   * 1
   */
  period?: number;
  /**
   * @example
   * Year
   */
  periodUnit?: string;
  /**
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  promotionId?: string;
  resourceIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DurationPackage
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      components: 'Components',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      autoPay: 'boolean',
      autoRenew: 'boolean',
      components: { 'type': 'array', 'itemType': CreateMultiOrderRequestOrderItemsComponents },
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMultiOrderShrinkRequestOrderItemsComponents extends $dara.Model {
  /**
   * @example
   * RegionId
   */
  key?: string;
  /**
   * @example
   * cn-shanghai
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMultiOrderShrinkRequestOrderItems extends $dara.Model {
  /**
   * @example
   * 1
   */
  amount?: number;
  /**
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @example
   * false
   */
  autoRenew?: boolean;
  components?: CreateMultiOrderShrinkRequestOrderItemsComponents[];
  /**
   * @example
   * 1
   */
  period?: number;
  /**
   * @example
   * Year
   */
  periodUnit?: string;
  /**
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  promotionId?: string;
  resourceIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DurationPackage
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      components: 'Components',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      autoPay: 'boolean',
      autoRenew: 'boolean',
      components: { 'type': 'array', 'itemType': CreateMultiOrderShrinkRequestOrderItemsComponents },
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeliveryAddressResponseBodyAddressesArea extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeliveryAddressResponseBodyAddressesCity extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeliveryAddressResponseBodyAddressesProvince extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeliveryAddressResponseBodyAddressesTown extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeliveryAddressResponseBodyAddresses extends $dara.Model {
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

  validate() {
    if(this.area && typeof (this.area as any).validate === 'function') {
      (this.area as any).validate();
    }
    if(this.city && typeof (this.city as any).validate === 'function') {
      (this.city as any).validate();
    }
    if(this.province && typeof (this.province as any).validate === 'function') {
      (this.province as any).validate();
    }
    if(this.town && typeof (this.town as any).validate === 'function') {
      (this.town as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackageDeductionsResponseBodyDeductions extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMultiOrderRequest extends $dara.Model {
  orderItems?: CreateMultiOrderRequestOrderItems[];
  /**
   * @example
   * create
   */
  orderType?: string;
  properties?: { [key: string]: string };
  resellerOwnerUid?: number;
  static names(): { [key: string]: string } {
    return {
      orderItems: 'OrderItems',
      orderType: 'OrderType',
      properties: 'Properties',
      resellerOwnerUid: 'ResellerOwnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderItems: { 'type': 'array', 'itemType': CreateMultiOrderRequestOrderItems },
      orderType: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      resellerOwnerUid: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.orderItems)) {
      $dara.Model.validateArray(this.orderItems);
    }
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMultiOrderShrinkRequest extends $dara.Model {
  orderItems?: CreateMultiOrderShrinkRequestOrderItems[];
  /**
   * @example
   * create
   */
  orderType?: string;
  propertiesShrink?: string;
  resellerOwnerUid?: number;
  static names(): { [key: string]: string } {
    return {
      orderItems: 'OrderItems',
      orderType: 'OrderType',
      propertiesShrink: 'Properties',
      resellerOwnerUid: 'ResellerOwnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderItems: { 'type': 'array', 'itemType': CreateMultiOrderShrinkRequestOrderItems },
      orderType: 'string',
      propertiesShrink: 'string',
      resellerOwnerUid: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.orderItems)) {
      $dara.Model.validateArray(this.orderItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMultiOrderResponseBody extends $dara.Model {
  orderIds?: number[];
  /**
   * @example
   * 833C4D2C-09C7-5CE6-8159-06758B964970
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderIds: 'OrderIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderIds: { 'type': 'array', 'itemType': 'number' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.orderIds)) {
      $dara.Model.validateArray(this.orderIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMultiOrderResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMultiOrderResponseBody;
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
      body: CreateMultiOrderResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeliveryAddressResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeliveryAddressResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackageDeductionsRequest extends $dara.Model {
  endTime?: number;
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
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceIds: 'InstanceIds',
      packageIds: 'PackageIds',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      resourceType: 'ResourceType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      packageIds: { 'type': 'array', 'itemType': 'string' },
      pageNum: 'number',
      pageSize: 'number',
      resourceType: 'string',
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.packageIds)) {
      $dara.Model.validateArray(this.packageIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackageDeductionsResponseBody extends $dara.Model {
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
  totalUsedCoreTime?: number;
  totalUsedTime?: number;
  static names(): { [key: string]: string } {
    return {
      deductions: 'Deductions',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalUsedCoreTime: 'TotalUsedCoreTime',
      totalUsedTime: 'TotalUsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deductions: { 'type': 'array', 'itemType': DescribePackageDeductionsResponseBodyDeductions },
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalUsedCoreTime: 'number',
      totalUsedTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.deductions)) {
      $dara.Model.validateArray(this.deductions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackageDeductionsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstancePropertiesRequest extends $dara.Model {
  /**
   * @example
   * mdp-0c62ayep0nk4v****
   */
  instanceId?: string;
  instanceIds?: string[];
  /**
   * @example
   * PackageUsedUpStrategy
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DurationPackage
   */
  resourceType?: string;
  /**
   * @example
   * Postpaid
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceIds: 'InstanceIds',
      key: 'Key',
      resourceType: 'ResourceType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      key: 'string',
      resourceType: 'string',
      value: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstancePropertiesResponseBody extends $dara.Model {
  /**
   * @example
   * 833C4D2C-09C7-5CE6-8159-06758B964970
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstancePropertiesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyInstancePropertiesResponseBody;
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
      body: ModifyInstancePropertiesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("wss", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * @param tmpReq - CreateMultiOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMultiOrderResponse
   */
  async createMultiOrderWithOptions(tmpReq: CreateMultiOrderRequest, runtime: $dara.RuntimeOptions): Promise<CreateMultiOrderResponse> {
    tmpReq.validate();
    let request = new CreateMultiOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.properties)) {
      request.propertiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.properties, "Properties", "json");
    }

    let query = { };
    if (!$dara.isNull(request.orderItems)) {
      query["OrderItems"] = request.orderItems;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.propertiesShrink)) {
      query["Properties"] = request.propertiesShrink;
    }

    if (!$dara.isNull(request.resellerOwnerUid)) {
      query["ResellerOwnerUid"] = request.resellerOwnerUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMultiOrder",
      version: "2021-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateMultiOrderResponse>(await this.callApi(params, req, runtime), new CreateMultiOrderResponse({}));
    } else {
      return $dara.cast<CreateMultiOrderResponse>(await this.execute(params, req, runtime), new CreateMultiOrderResponse({}));
    }

  }

  /**
   * @param request - CreateMultiOrderRequest
   * @returns CreateMultiOrderResponse
   */
  async createMultiOrder(request: CreateMultiOrderRequest): Promise<CreateMultiOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMultiOrderWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDeliveryAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeliveryAddressResponse
   */
  async describeDeliveryAddressWithOptions(runtime: $dara.RuntimeOptions): Promise<DescribeDeliveryAddressResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDeliveryAddressResponse>(await this.callApi(params, req, runtime), new DescribeDeliveryAddressResponse({}));
    } else {
      return $dara.cast<DescribeDeliveryAddressResponse>(await this.execute(params, req, runtime), new DescribeDeliveryAddressResponse({}));
    }

  }

  /**
   * @returns DescribeDeliveryAddressResponse
   */
  async describeDeliveryAddress(): Promise<DescribeDeliveryAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeliveryAddressWithOptions(runtime);
  }

  /**
   * 查询核时包抵扣明细
   * 
   * @param request - DescribePackageDeductionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePackageDeductionsResponse
   */
  async describePackageDeductionsWithOptions(request: DescribePackageDeductionsRequest, runtime: $dara.RuntimeOptions): Promise<DescribePackageDeductionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.packageIds)) {
      query["PackageIds"] = request.packageIds;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribePackageDeductionsResponse>(await this.callApi(params, req, runtime), new DescribePackageDeductionsResponse({}));
    } else {
      return $dara.cast<DescribePackageDeductionsResponse>(await this.execute(params, req, runtime), new DescribePackageDeductionsResponse({}));
    }

  }

  /**
   * 查询核时包抵扣明细
   * 
   * @param request - DescribePackageDeductionsRequest
   * @returns DescribePackageDeductionsResponse
   */
  async describePackageDeductions(request: DescribePackageDeductionsRequest): Promise<DescribePackageDeductionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePackageDeductionsWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyInstancePropertiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstancePropertiesResponse
   */
  async modifyInstancePropertiesWithOptions(request: ModifyInstancePropertiesRequest, runtime: $dara.RuntimeOptions): Promise<ModifyInstancePropertiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceProperties",
      version: "2021-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyInstancePropertiesResponse>(await this.callApi(params, req, runtime), new ModifyInstancePropertiesResponse({}));
    } else {
      return $dara.cast<ModifyInstancePropertiesResponse>(await this.execute(params, req, runtime), new ModifyInstancePropertiesResponse({}));
    }

  }

  /**
   * @param request - ModifyInstancePropertiesRequest
   * @returns ModifyInstancePropertiesResponse
   */
  async modifyInstanceProperties(request: ModifyInstancePropertiesRequest): Promise<ModifyInstancePropertiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstancePropertiesWithOptions(request, runtime);
  }

}
