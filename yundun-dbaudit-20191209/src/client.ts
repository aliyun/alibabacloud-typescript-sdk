// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class DescribeInstanceAttributeResponseBodyInstanceAttribute extends $dara.Model {
  /**
   * @example
   * API
   */
  description?: string;
  /**
   * @example
   * 1578067200000
   */
  expireTime?: number;
  /**
   * @example
   * dbaudit-cn-78v1gc****
   */
  instanceId?: string;
  /**
   * @example
   * RUNNING
   */
  instanceStatus?: string;
  /**
   * @example
   * tsiqvqjjlq-public.dbaudit.aliyuncs.com
   */
  internetEndpoint?: string;
  /**
   * @example
   * tsiqvqjjlq.dbaudit.aliyuncs.com
   */
  intranetEndpoint?: string;
  /**
   * @example
   * alpha.professional
   */
  licenseCode?: string;
  /**
   * @example
   * true
   */
  publicNetworkAccess?: boolean;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * alpha
   */
  seriesCode?: string;
  /**
   * @example
   * 1577437765000
   */
  startTime?: number;
  /**
   * @example
   * vpc-bp1c85tzgqu1bf5b****
   */
  vpcId?: string;
  /**
   * @example
   * vsw-bp1kep1f0k5fnyfs****
   */
  vswitchId?: string;
  whiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      internetEndpoint: 'InternetEndpoint',
      intranetEndpoint: 'IntranetEndpoint',
      licenseCode: 'LicenseCode',
      publicNetworkAccess: 'PublicNetworkAccess',
      regionId: 'RegionId',
      seriesCode: 'SeriesCode',
      startTime: 'StartTime',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      expireTime: 'number',
      instanceId: 'string',
      instanceStatus: 'string',
      internetEndpoint: 'string',
      intranetEndpoint: 'string',
      licenseCode: 'string',
      publicNetworkAccess: 'boolean',
      regionId: 'string',
      seriesCode: 'string',
      startTime: 'number',
      vpcId: 'string',
      vswitchId: 'string',
      whiteList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.whiteList)) {
      $dara.Model.validateArray(this.whiteList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStorageResponseBodyInstanceStorages extends $dara.Model {
  /**
   * @example
   * 6047313952768
   */
  storageCapacity?: number;
  /**
   * @example
   * dbaudit-audit-dbaudit-cn-78v1gc****
   */
  storageCategory?: string;
  /**
   * @example
   * dbaudit-cn-78v1gc****
   */
  storageSpace?: string;
  /**
   * @example
   * 180
   */
  storageTime?: number;
  /**
   * @example
   * 0
   */
  storageUsed?: number;
  static names(): { [key: string]: string } {
    return {
      storageCapacity: 'StorageCapacity',
      storageCategory: 'StorageCategory',
      storageSpace: 'StorageSpace',
      storageTime: 'StorageTime',
      storageUsed: 'StorageUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageCapacity: 'number',
      storageCategory: 'string',
      storageSpace: 'string',
      storageTime: 'number',
      storageUsed: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequestTag extends $dara.Model {
  /**
   * @example
   * test
   */
  key?: string;
  /**
   * @example
   * testapi
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

export class DescribeInstancesResponseBodyInstances extends $dara.Model {
  description?: string;
  /**
   * @example
   * 1578067200000
   */
  expireTime?: number;
  /**
   * @example
   * dbaudit-cn-78v1gc****
   */
  instanceId?: string;
  /**
   * @example
   * RUNNING
   */
  instanceStatus?: string;
  /**
   * @example
   * tsiqvqjjlq-public.dbaudit.aliyuncs.com
   */
  internetEndpoint?: string;
  /**
   * @example
   * tsiqvqjjlq.dbaudit.aliyuncs.com
   */
  intranetEndpoint?: string;
  /**
   * @example
   * alpha.professional
   */
  licenseCode?: string;
  /**
   * @example
   * true
   */
  publicNetworkAccess?: boolean;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * alpha
   */
  seriesCode?: string;
  /**
   * @example
   * 1577437765000
   */
  startTime?: number;
  /**
   * @example
   * vpc-bp1c85tzgqu1bf5b****
   */
  vpcId?: string;
  /**
   * @example
   * vsw-bp1kep1f0k5fnyfs****
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      internetEndpoint: 'InternetEndpoint',
      intranetEndpoint: 'IntranetEndpoint',
      licenseCode: 'LicenseCode',
      publicNetworkAccess: 'PublicNetworkAccess',
      regionId: 'RegionId',
      seriesCode: 'SeriesCode',
      startTime: 'StartTime',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      expireTime: 'number',
      instanceId: 'string',
      instanceStatus: 'string',
      internetEndpoint: 'string',
      intranetEndpoint: 'string',
      licenseCode: 'string',
      publicNetworkAccess: 'boolean',
      regionId: 'string',
      seriesCode: 'string',
      startTime: 'number',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @example
   * test
   */
  key?: string;
  /**
   * @example
   * testapi
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

export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  /**
   * @example
   * dbaudit-cn-78v1gc****
   */
  resourceId?: string;
  /**
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
   * @example
   * test
   */
  tagKey?: string;
  /**
   * @example
   * testapi
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearInstanceStorageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dbaudit-cn-78v1gc****
   */
  instanceId?: string;
  lang?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dbaudit-audit-dbaudit-cn-78v1gc****
   */
  storageCategory?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dbaudit-cn-78v1gc****
   */
  storageSpace?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      regionId: 'RegionId',
      storageCategory: 'StorageCategory',
      storageSpace: 'StorageSpace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      regionId: 'string',
      storageCategory: 'string',
      storageSpace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearInstanceStorageResponseBody extends $dara.Model {
  /**
   * @example
   * dbaudit-cn-78v1gc****
   */
  instanceId?: string;
  /**
   * @example
   * 482EF142-BFA5-43FF-B4B0-84A4B0763639
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

export class ClearInstanceStorageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ClearInstanceStorageResponseBody;
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
      body: ClearInstanceStorageResponseBody,
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

export class DescribeInstanceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dbaudit-cn-78v1gc****
   */
  instanceId?: string;
  lang?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponseBody extends $dara.Model {
  instanceAttribute?: DescribeInstanceAttributeResponseBodyInstanceAttribute;
  /**
   * @example
   * 28382024-466D-4641-A144-40FD0DD53766
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceAttribute: 'InstanceAttribute',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceAttribute: DescribeInstanceAttributeResponseBodyInstanceAttribute,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceAttribute && typeof (this.instanceAttribute as any).validate === 'function') {
      (this.instanceAttribute as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceAttributeResponseBody;
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
      body: DescribeInstanceAttributeResponseBody,
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

export class DescribeInstanceStorageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dbaudit-cn-78v1gc****
   */
  instanceId?: string;
  lang?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStorageResponseBody extends $dara.Model {
  instanceStorages?: DescribeInstanceStorageResponseBodyInstanceStorages[];
  /**
   * @example
   * 4226E2BB-EED8-4067-B31B-7F02966765B2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceStorages: 'InstanceStorages',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceStorages: { 'type': 'array', 'itemType': DescribeInstanceStorageResponseBodyInstanceStorages },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceStorages)) {
      $dara.Model.validateArray(this.instanceStorages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStorageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceStorageResponseBody;
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
      body: DescribeInstanceStorageResponseBody,
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

export class DescribeInstancesRequest extends $dara.Model {
  getCenterInstance?: boolean;
  /**
   * @example
   * dbaudit-cn-78v1gc****
   */
  instanceId?: string[];
  /**
   * @example
   * RUNNING
   */
  instanceStatus?: string;
  lang?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfm26ougij6****
   */
  resourceGroupId?: string;
  tag?: DescribeInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      getCenterInstance: 'GetCenterInstance',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      getCenterInstance: 'boolean',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      instanceStatus: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeInstancesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $dara.Model {
  instances?: DescribeInstancesResponseBodyInstances[];
  /**
   * @example
   * 12AA0353-F01D-43E2-A85C-9040F7A35D93
   */
  requestId?: string;
  /**
   * @example
   * 18
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstances },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstancesResponseBody;
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
      body: DescribeInstancesResponseBody,
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

export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @example
   * 52EcpzBpR86EEpcc.9xyfvym3cKAXsdV2SSFZnouWTRzf1
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * dbaudit-cn-78v1gc****
   */
  resourceId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * 52EcpzBpR86EEpcc.9xyfvym3cKAXsdV2SSFZnouWTRzf1
   */
  nextToken?: string;
  /**
   * @example
   * E6A08A8A-F962-4FAD-AF0C-86B393E1F9C1
   */
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  validate() {
    if(Array.isArray(this.tagResources)) {
      $dara.Model.validateArray(this.tagResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
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
      body: ListTagResourcesResponseBody,
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
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("yundun-dbaudit", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 清理SLS存储空间
   * 
   * @param request - ClearInstanceStorageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClearInstanceStorageResponse
   */
  async clearInstanceStorageWithOptions(request: ClearInstanceStorageRequest, runtime: $dara.RuntimeOptions): Promise<ClearInstanceStorageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.storageCategory)) {
      query["StorageCategory"] = request.storageCategory;
    }

    if (!$dara.isNull(request.storageSpace)) {
      query["StorageSpace"] = request.storageSpace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClearInstanceStorage",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ClearInstanceStorageResponse>(await this.callApi(params, req, runtime), new ClearInstanceStorageResponse({}));
    } else {
      return $dara.cast<ClearInstanceStorageResponse>(await this.execute(params, req, runtime), new ClearInstanceStorageResponse({}));
    }

  }

  /**
   * 清理SLS存储空间
   * 
   * @param request - ClearInstanceStorageRequest
   * @returns ClearInstanceStorageResponse
   */
  async clearInstanceStorage(request: ClearInstanceStorageRequest): Promise<ClearInstanceStorageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clearInstanceStorageWithOptions(request, runtime);
  }

  /**
   * 获取实例属性
   * 
   * @param request - DescribeInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceAttributeResponse
   */
  async describeInstanceAttributeWithOptions(request: DescribeInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<DescribeInstanceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceAttribute",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeInstanceAttributeResponse>(await this.callApi(params, req, runtime), new DescribeInstanceAttributeResponse({}));
    } else {
      return $dara.cast<DescribeInstanceAttributeResponse>(await this.execute(params, req, runtime), new DescribeInstanceAttributeResponse({}));
    }

  }

  /**
   * 获取实例属性
   * 
   * @param request - DescribeInstanceAttributeRequest
   * @returns DescribeInstanceAttributeResponse
   */
  async describeInstanceAttribute(request: DescribeInstanceAttributeRequest): Promise<DescribeInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * 获取存储大小
   * 
   * @param request - DescribeInstanceStorageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceStorageResponse
   */
  async describeInstanceStorageWithOptions(request: DescribeInstanceStorageRequest, runtime: $dara.RuntimeOptions): Promise<DescribeInstanceStorageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceStorage",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeInstanceStorageResponse>(await this.callApi(params, req, runtime), new DescribeInstanceStorageResponse({}));
    } else {
      return $dara.cast<DescribeInstanceStorageResponse>(await this.execute(params, req, runtime), new DescribeInstanceStorageResponse({}));
    }

  }

  /**
   * 获取存储大小
   * 
   * @param request - DescribeInstanceStorageRequest
   * @returns DescribeInstanceStorageResponse
   */
  async describeInstanceStorage(request: DescribeInstanceStorageRequest): Promise<DescribeInstanceStorageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceStorageWithOptions(request, runtime);
  }

  /**
   * 获取实例列表
   * 
   * @param request - DescribeInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstancesResponse
   */
  async describeInstancesWithOptions(request: DescribeInstancesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.getCenterInstance)) {
      query["GetCenterInstance"] = request.getCenterInstance;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceStatus)) {
      query["InstanceStatus"] = request.instanceStatus;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstances",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeInstancesResponse>(await this.callApi(params, req, runtime), new DescribeInstancesResponse({}));
    } else {
      return $dara.cast<DescribeInstancesResponse>(await this.execute(params, req, runtime), new DescribeInstancesResponse({}));
    }

  }

  /**
   * 获取实例列表
   * 
   * @param request - DescribeInstancesRequest
   * @returns DescribeInstancesResponse
   */
  async describeInstances(request: DescribeInstancesRequest): Promise<DescribeInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  /**
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2019-12-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
    } else {
      return $dara.cast<ListTagResourcesResponse>(await this.execute(params, req, runtime), new ListTagResourcesResponse({}));
    }

  }

  /**
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

}
