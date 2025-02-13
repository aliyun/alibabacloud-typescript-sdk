// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CancelTaskResponseBody extends $tea.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelTaskResponseBody;
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
      body: CancelTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceRequest extends $tea.Model {
  /**
   * @example
   * {
   *      "AccountName": "cctest",
   *      "AccountPassword": "Aa1234****"
   * }
   */
  body?: { [key: string]: any };
  /**
   * @example
   * 1e810dfe1468721d0664a49b9d9f74f4
   */
  clientToken?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      clientToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceResponseBody extends $tea.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @example
   * cctest
   */
  resourceId?: string;
  /**
   * @example
   * Instance/r-8vbf5abe31c9c4d4/Account/cctest
   */
  resourcePath?: string;
  /**
   * @example
   * task-433aead756057fff8189a7ce5****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      resourceId: 'resourceId',
      resourcePath: 'resourcePath',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceId: 'string',
      resourcePath: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateResourceResponseBody;
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
      body: CreateResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceRequest extends $tea.Model {
  /**
   * @example
   * 1e810dfe1468721d0664a49b9d9f74f4
   */
  clientToken?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceResponseBody extends $tea.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @example
   * task-433aead756057fff8189a7ce5****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteResourceResponseBody;
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
      body: DeleteResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPriceRequest extends $tea.Model {
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * {
   *         "LoadBalancerName": "cc-test",
   *         "LoadBalancerSpec": "slb.s3.small",
   *         "InternetChargeType": "paybybandwidth",
   *         "AddressType": "internet",
   *         "PaymentType": "PayAsYouGo",
   *         "Bandwidth": 6
   *       }
   */
  resourceAttributes?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      regionId: 'regionId',
      resourceAttributes: 'resourceAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceAttributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPriceShrinkRequest extends $tea.Model {
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * {
   *         "LoadBalancerName": "cc-test",
   *         "LoadBalancerSpec": "slb.s3.small",
   *         "InternetChargeType": "paybybandwidth",
   *         "AddressType": "internet",
   *         "PaymentType": "PayAsYouGo",
   *         "Bandwidth": 6
   *       }
   */
  resourceAttributesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'regionId',
      resourceAttributesShrink: 'resourceAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceAttributesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPriceResponseBody extends $tea.Model {
  price?: GetPriceResponseBodyPrice;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      price: 'price',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: GetPriceResponseBodyPrice,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPriceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPriceResponseBody;
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
      body: GetPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @example
   * zh_CH
   */
  xAcsAcceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAcceptLanguage: 'x-acs-accept-language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAcceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeResponseBody extends $tea.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  resourceType?: GetResourceTypeResponseBodyResourceType;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceType: GetResourceTypeResponseBodyResourceType,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceTypeResponseBody;
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
      body: GetResourceTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcesRequest extends $tea.Model {
  filter?: { [key: string]: any };
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcesShrinkRequest extends $tea.Model {
  filterShrink?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      filterShrink: 'filter',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterShrink: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcesResponseBody extends $tea.Model {
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  resource?: GetResourcesResponseBodyResource;
  resources?: GetResourcesResponseBodyResources[];
  /**
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      resource: 'resource',
      resources: 'resources',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      resource: GetResourcesResponseBodyResource,
      resources: { 'type': 'array', 'itemType': GetResourcesResponseBodyResources },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourcesResponseBody;
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
      body: GetResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBody extends $tea.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  task?: GetTaskResponseBodyTask;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      task: 'task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      task: GetTaskResponseBodyTask,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTaskResponseBody;
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
      body: GetTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RegionId
   */
  attributeName?: string;
  filter?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      attributeName: 'attributeName',
      filter: 'filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeName: 'string',
      filter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RegionId
   */
  attributeName?: string;
  filterShrink?: string;
  static names(): { [key: string]: string } {
    return {
      attributeName: 'attributeName',
      filterShrink: 'filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeName: 'string',
      filterShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponseBody extends $tea.Model {
  dataSources?: ListDataSourcesResponseBodyDataSources[];
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSources: 'dataSources',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSources: { 'type': 'array', 'itemType': ListDataSourcesResponseBodyDataSources },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDataSourcesResponseBody;
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
      body: ListDataSourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @example
   * zh_CH
   */
  xAcsAcceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAcceptLanguage: 'x-acs-accept-language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAcceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsRequest extends $tea.Model {
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * ECS
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBody extends $tea.Model {
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * Redis
   */
  nextToken?: string;
  products?: ListProductsResponseBodyProducts[];
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      products: 'products',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      products: { 'type': 'array', 'itemType': ListProductsResponseBodyProducts },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProductsResponseBody;
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
      body: ListProductsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @example
   * zh_CH
   */
  xAcsAcceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAcceptLanguage: 'x-acs-accept-language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAcceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesRequest extends $tea.Model {
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * ECS::Disk
   */
  nextToken?: string;
  resourceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      resourceTypes: 'resourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesShrinkRequest extends $tea.Model {
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * ECS::Disk
   */
  nextToken?: string;
  resourceTypesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      resourceTypesShrink: 'resourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceTypesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesResponseBody extends $tea.Model {
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * ECS::Disk
   */
  nextToken?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  resourceTypes?: ListResourceTypesResponseBodyResourceTypes[];
  /**
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      resourceTypes: 'resourceTypes',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      resourceTypes: { 'type': 'array', 'itemType': ListResourceTypesResponseBodyResourceTypes },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourceTypesResponseBody;
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
      body: ListResourceTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceRequest extends $tea.Model {
  /**
   * @example
   * {
   *      "AccountPassword": "4321****",
   *      "Description": "cctest"
   * }
   */
  body?: { [key: string]: any };
  /**
   * @example
   * 1e810dfe1468721d0664a49b9d9f74f4
   */
  clientToken?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      clientToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceResponseBody extends $tea.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @example
   * task-433aead756057fff8189a7ce5****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateResourceResponseBody;
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
      body: UpdateResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPriceResponseBodyPriceModuleDetails extends $tea.Model {
  /**
   * @example
   * 0.02
   */
  costAfterDiscount?: number;
  /**
   * @example
   * 0.0
   */
  invoiceDiscount?: number;
  /**
   * @example
   * InstanceRent
   */
  moduleCode?: string;
  /**
   * @example
   * InstanceRent
   */
  moduleName?: string;
  /**
   * @example
   * 1000.0
   */
  originalCost?: number;
  /**
   * @example
   * 1.0
   */
  priceType?: string;
  static names(): { [key: string]: string } {
    return {
      costAfterDiscount: 'costAfterDiscount',
      invoiceDiscount: 'invoiceDiscount',
      moduleCode: 'moduleCode',
      moduleName: 'moduleName',
      originalCost: 'originalCost',
      priceType: 'priceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costAfterDiscount: 'number',
      invoiceDiscount: 'number',
      moduleCode: 'string',
      moduleName: 'string',
      originalCost: 'number',
      priceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPriceResponseBodyPricePromotionDetails extends $tea.Model {
  /**
   * @example
   * 37284
   */
  promotionDesc?: string;
  promotionId?: number;
  promotionName?: string;
  static names(): { [key: string]: string } {
    return {
      promotionDesc: 'promotionDesc',
      promotionId: 'promotionId',
      promotionName: 'promotionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionDesc: 'string',
      promotionId: 'number',
      promotionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPriceResponseBodyPrice extends $tea.Model {
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 0.0
   */
  discountPrice?: number;
  moduleDetails?: GetPriceResponseBodyPriceModuleDetails[];
  /**
   * @example
   * 760.0
   */
  originalPrice?: number;
  promotionDetails?: GetPriceResponseBodyPricePromotionDetails[];
  /**
   * @example
   * 0.0
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'currency',
      discountPrice: 'discountPrice',
      moduleDetails: 'moduleDetails',
      originalPrice: 'originalPrice',
      promotionDetails: 'promotionDetails',
      tradePrice: 'tradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      moduleDetails: { 'type': 'array', 'itemType': GetPriceResponseBodyPriceModuleDetails },
      originalPrice: 'number',
      promotionDetails: { 'type': 'array', 'itemType': GetPriceResponseBodyPricePromotionDetails },
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeResponseBodyResourceTypeHandlersCreate extends $tea.Model {
  permissions?: string[];
  static names(): { [key: string]: string } {
    return {
      permissions: 'permissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeResponseBodyResourceTypeHandlersDelete extends $tea.Model {
  permissions?: string[];
  static names(): { [key: string]: string } {
    return {
      permissions: 'permissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeResponseBodyResourceTypeHandlersGet extends $tea.Model {
  permissions?: string[];
  static names(): { [key: string]: string } {
    return {
      permissions: 'permissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeResponseBodyResourceTypeHandlersList extends $tea.Model {
  permissions?: string[];
  static names(): { [key: string]: string } {
    return {
      permissions: 'permissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeResponseBodyResourceTypeHandlersUpdate extends $tea.Model {
  permissions?: string[];
  static names(): { [key: string]: string } {
    return {
      permissions: 'permissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeResponseBodyResourceTypeHandlers extends $tea.Model {
  create?: GetResourceTypeResponseBodyResourceTypeHandlersCreate;
  delete?: GetResourceTypeResponseBodyResourceTypeHandlersDelete;
  get?: GetResourceTypeResponseBodyResourceTypeHandlersGet;
  list?: GetResourceTypeResponseBodyResourceTypeHandlersList;
  update?: GetResourceTypeResponseBodyResourceTypeHandlersUpdate;
  static names(): { [key: string]: string } {
    return {
      create: 'create',
      delete: 'delete',
      get: 'get',
      list: 'list',
      update: 'update',
    };
  }

  static types(): { [key: string]: any } {
    return {
      create: GetResourceTypeResponseBodyResourceTypeHandlersCreate,
      delete: GetResourceTypeResponseBodyResourceTypeHandlersDelete,
      get: GetResourceTypeResponseBodyResourceTypeHandlersGet,
      list: GetResourceTypeResponseBodyResourceTypeHandlersList,
      update: GetResourceTypeResponseBodyResourceTypeHandlersUpdate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeResponseBodyResourceTypeInfo extends $tea.Model {
  /**
   * @example
   * paid
   */
  chargeType?: string;
  /**
   * @example
   * region
   */
  deliveryScope?: string;
  /**
   * @example
   * An ECS instance is equivalent to a virtual machine, including the most basic computing components such as CPU, memory, operating system, network, and disk. You can easily customize and change the configuration of the instance. You have full control over the virtual machine.
   */
  description?: string;
  /**
   * @example
   * Instance
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      deliveryScope: 'deliveryScope',
      description: 'description',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      deliveryScope: 'string',
      description: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeResponseBodyResourceType extends $tea.Model {
  createOnlyProperties?: string[];
  deleteOnlyProperties?: string[];
  filterProperties?: string[];
  getOnlyProperties?: string[];
  getResponseProperties?: string[];
  handlers?: GetResourceTypeResponseBodyResourceTypeHandlers;
  info?: GetResourceTypeResponseBodyResourceTypeInfo;
  listOnlyProperties?: string[];
  listResponseProperties?: string[];
  /**
   * @example
   * /properties/InstanceId
   */
  primaryIdentifier?: string;
  /**
   * @example
   * ECS
   */
  product?: string;
  properties?: { [key: string]: any };
  publicProperties?: string[];
  readOnlyProperties?: string[];
  required?: string[];
  /**
   * @example
   * Instance
   */
  resourceType?: string;
  sensitiveInfoProperties?: string[];
  updateOnlyProperties?: string[];
  updateTypeProperties?: string[];
  static names(): { [key: string]: string } {
    return {
      createOnlyProperties: 'createOnlyProperties',
      deleteOnlyProperties: 'deleteOnlyProperties',
      filterProperties: 'filterProperties',
      getOnlyProperties: 'getOnlyProperties',
      getResponseProperties: 'getResponseProperties',
      handlers: 'handlers',
      info: 'info',
      listOnlyProperties: 'listOnlyProperties',
      listResponseProperties: 'listResponseProperties',
      primaryIdentifier: 'primaryIdentifier',
      product: 'product',
      properties: 'properties',
      publicProperties: 'publicProperties',
      readOnlyProperties: 'readOnlyProperties',
      required: 'required',
      resourceType: 'resourceType',
      sensitiveInfoProperties: 'sensitiveInfoProperties',
      updateOnlyProperties: 'updateOnlyProperties',
      updateTypeProperties: 'updateTypeProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createOnlyProperties: { 'type': 'array', 'itemType': 'string' },
      deleteOnlyProperties: { 'type': 'array', 'itemType': 'string' },
      filterProperties: { 'type': 'array', 'itemType': 'string' },
      getOnlyProperties: { 'type': 'array', 'itemType': 'string' },
      getResponseProperties: { 'type': 'array', 'itemType': 'string' },
      handlers: GetResourceTypeResponseBodyResourceTypeHandlers,
      info: GetResourceTypeResponseBodyResourceTypeInfo,
      listOnlyProperties: { 'type': 'array', 'itemType': 'string' },
      listResponseProperties: { 'type': 'array', 'itemType': 'string' },
      primaryIdentifier: 'string',
      product: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      publicProperties: { 'type': 'array', 'itemType': 'string' },
      readOnlyProperties: { 'type': 'array', 'itemType': 'string' },
      required: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      sensitiveInfoProperties: { 'type': 'array', 'itemType': 'string' },
      updateOnlyProperties: { 'type': 'array', 'itemType': 'string' },
      updateTypeProperties: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcesResponseBodyResource extends $tea.Model {
  /**
   * @example
   * {"Status":"Available","Description":"","AccountPrivilege":"RoleReadWrite","InstanceId":"r-8vbf5abe31c9c4d4","RegionId":"cn-zhangjiakou","AccountType":"Normal","TypeInfo":{},"AccountName":"cctest"}
   */
  resourceAttributes?: { [key: string]: any };
  /**
   * @example
   * cctest
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceAttributes: 'resourceAttributes',
      resourceId: 'resourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceAttributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcesResponseBodyResources extends $tea.Model {
  /**
   * @example
   * {"Status":"Available","Description":"","AccountPrivilege":"RoleReadWrite","InstanceId":"r-8vbf5abe31c9c4d4","RegionId":"cn-zhangjiakou","AccountType":"Normal","TypeInfo":{},"AccountName":"cctest"}
   */
  resourceAttributes?: { [key: string]: any };
  /**
   * @example
   * cctest
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceAttributes: 'resourceAttributes',
      resourceId: 'resourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceAttributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBodyTaskError extends $tea.Model {
  /**
   * @example
   * OperationFailure.OperationFailed
   */
  code?: string;
  /**
   * @example
   * {
   *      "requestId": "123****",
   *      "errorCode": "InvalidRamUser.NoPermission",
   *      "errorMsg": "Ram user is not authorized to perform the operation."
   * }
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBodyTask extends $tea.Model {
  /**
   * @example
   * 2022-10-09T00:46:03Z
   */
  createTime?: string;
  error?: GetTaskResponseBodyTaskError;
  /**
   * @example
   * ECS
   */
  product?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * i-8vbascjthm7kzhp3****
   */
  resourceId?: string;
  /**
   * @example
   * Instance/i-8vbascjthm7kzhp3****
   * Instance/r-8vbf5abe31c9c4d4/Account/cctest
   */
  resourcePath?: string;
  /**
   * @example
   * Instance
   */
  resourceType?: string;
  /**
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @example
   * Create
   */
  taskAction?: string;
  /**
   * @example
   * task-433aead756057fff8189a7ce5****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      error: 'error',
      product: 'product',
      regionId: 'regionId',
      resourceId: 'resourceId',
      resourcePath: 'resourcePath',
      resourceType: 'resourceType',
      status: 'status',
      taskAction: 'taskAction',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      error: GetTaskResponseBodyTaskError,
      product: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourcePath: 'string',
      resourceType: 'string',
      status: 'string',
      taskAction: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponseBodyDataSources extends $tea.Model {
  /**
   * @example
   * cn-beijing
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBodyProducts extends $tea.Model {
  /**
   * @example
   * ECS
   */
  productCode?: string;
  /**
   * @example
   * Elastic Compute Service
   */
  productName?: string;
  static names(): { [key: string]: string } {
    return {
      productCode: 'productCode',
      productName: 'productName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      productName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesResponseBodyResourceTypesHandlersCreate extends $tea.Model {
  permissions?: string[];
  static names(): { [key: string]: string } {
    return {
      permissions: 'permissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesResponseBodyResourceTypesHandlersDelete extends $tea.Model {
  permissions?: string[];
  static names(): { [key: string]: string } {
    return {
      permissions: 'permissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesResponseBodyResourceTypesHandlersGet extends $tea.Model {
  permissions?: string[];
  static names(): { [key: string]: string } {
    return {
      permissions: 'permissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesResponseBodyResourceTypesHandlersList extends $tea.Model {
  permissions?: string[];
  static names(): { [key: string]: string } {
    return {
      permissions: 'permissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesResponseBodyResourceTypesHandlersUpdate extends $tea.Model {
  permissions?: string[];
  static names(): { [key: string]: string } {
    return {
      permissions: 'permissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesResponseBodyResourceTypesHandlers extends $tea.Model {
  create?: ListResourceTypesResponseBodyResourceTypesHandlersCreate;
  delete?: ListResourceTypesResponseBodyResourceTypesHandlersDelete;
  get?: ListResourceTypesResponseBodyResourceTypesHandlersGet;
  list?: ListResourceTypesResponseBodyResourceTypesHandlersList;
  update?: ListResourceTypesResponseBodyResourceTypesHandlersUpdate;
  static names(): { [key: string]: string } {
    return {
      create: 'create',
      delete: 'delete',
      get: 'get',
      list: 'list',
      update: 'update',
    };
  }

  static types(): { [key: string]: any } {
    return {
      create: ListResourceTypesResponseBodyResourceTypesHandlersCreate,
      delete: ListResourceTypesResponseBodyResourceTypesHandlersDelete,
      get: ListResourceTypesResponseBodyResourceTypesHandlersGet,
      list: ListResourceTypesResponseBodyResourceTypesHandlersList,
      update: ListResourceTypesResponseBodyResourceTypesHandlersUpdate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesResponseBodyResourceTypesInfo extends $tea.Model {
  /**
   * @example
   * paid
   */
  chargeType?: string;
  /**
   * @example
   * region
   */
  deliveryScope?: string;
  /**
   * @example
   * An ECS instance is equivalent to a virtual machine, including the most basic computing components such as CPU, memory, operating system, network, and disk. You can easily customize and change the configuration of the instance. You have full control over the virtual machine.
   */
  description?: string;
  /**
   * @example
   * Instance
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      deliveryScope: 'deliveryScope',
      description: 'description',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      deliveryScope: 'string',
      description: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesResponseBodyResourceTypes extends $tea.Model {
  createOnlyProperties?: string[];
  deleteOnlyProperties?: string[];
  filterProperties?: string[];
  getOnlyProperties?: string[];
  getResponseProperties?: string[];
  handlers?: ListResourceTypesResponseBodyResourceTypesHandlers;
  info?: ListResourceTypesResponseBodyResourceTypesInfo;
  listOnlyProperties?: string[];
  listResponseProperties?: string[];
  /**
   * @example
   * /properties/InstanceId
   */
  primaryIdentifier?: string;
  /**
   * @example
   * ECS
   */
  product?: string;
  properties?: { [key: string]: any };
  publicProperties?: string[];
  readOnlyProperties?: string[];
  required?: string[];
  /**
   * @example
   * Instance
   */
  resourceType?: string;
  sensitiveInfoProperties?: string[];
  updateOnlyProperties?: string[];
  updateTypeProperties?: string[];
  static names(): { [key: string]: string } {
    return {
      createOnlyProperties: 'createOnlyProperties',
      deleteOnlyProperties: 'deleteOnlyProperties',
      filterProperties: 'filterProperties',
      getOnlyProperties: 'getOnlyProperties',
      getResponseProperties: 'getResponseProperties',
      handlers: 'handlers',
      info: 'info',
      listOnlyProperties: 'listOnlyProperties',
      listResponseProperties: 'listResponseProperties',
      primaryIdentifier: 'primaryIdentifier',
      product: 'product',
      properties: 'properties',
      publicProperties: 'publicProperties',
      readOnlyProperties: 'readOnlyProperties',
      required: 'required',
      resourceType: 'resourceType',
      sensitiveInfoProperties: 'sensitiveInfoProperties',
      updateOnlyProperties: 'updateOnlyProperties',
      updateTypeProperties: 'updateTypeProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createOnlyProperties: { 'type': 'array', 'itemType': 'string' },
      deleteOnlyProperties: { 'type': 'array', 'itemType': 'string' },
      filterProperties: { 'type': 'array', 'itemType': 'string' },
      getOnlyProperties: { 'type': 'array', 'itemType': 'string' },
      getResponseProperties: { 'type': 'array', 'itemType': 'string' },
      handlers: ListResourceTypesResponseBodyResourceTypesHandlers,
      info: ListResourceTypesResponseBodyResourceTypesInfo,
      listOnlyProperties: { 'type': 'array', 'itemType': 'string' },
      listResponseProperties: { 'type': 'array', 'itemType': 'string' },
      primaryIdentifier: 'string',
      product: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      publicProperties: { 'type': 'array', 'itemType': 'string' },
      readOnlyProperties: { 'type': 'array', 'itemType': 'string' },
      required: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      sensitiveInfoProperties: { 'type': 'array', 'itemType': 'string' },
      updateOnlyProperties: { 'type': 'array', 'itemType': 'string' },
      updateTypeProperties: { 'type': 'array', 'itemType': 'string' },
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
    this._endpoint = this.getEndpoint("cloudcontrol", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 取消任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelTaskResponse
   */
  async cancelTaskWithOptions(taskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CancelTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CancelTask",
      version: "2022-08-30",
      protocol: "HTTPS",
      pathname: `/api/v1/tasks/${OpenApiUtil.getEncodeParam(taskId)}/operation/cancel`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CancelTaskResponse>(await this.callApi(params, req, runtime), new CancelTaskResponse({}));
  }

  /**
   * 取消任务
   * @returns CancelTaskResponse
   */
  async cancelTask(taskId: string): Promise<CancelTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelTaskWithOptions(taskId, headers, runtime);
  }

  /**
   * 创建资源
   * 
   * @param requestPath - the whole path of resource string
   * @param request - CreateResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceResponse
   */
  async createResourceWithOptions(requestPath: string, request: CreateResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateResourceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateResource",
      version: "2022-08-30",
      protocol: "HTTPS",
      pathname: `${requestPath}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateResourceResponse>(await this.callApi(params, req, runtime), new CreateResourceResponse({}));
  }

  /**
   * 创建资源
   * 
   * @param requestPath - the whole path of resource string
   * @param request - CreateResourceRequest
   * @returns CreateResourceResponse
   */
  async createResource(requestPath: string, request: CreateResourceRequest): Promise<CreateResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceWithOptions(requestPath, request, headers, runtime);
  }

  /**
   * 删除资源
   * 
   * @param requestPath - the whole path of resource string
   * @param request - DeleteResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceResponse
   */
  async deleteResourceWithOptions(requestPath: string, request: DeleteResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteResourceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteResource",
      version: "2022-08-30",
      protocol: "HTTPS",
      pathname: `${requestPath}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteResourceResponse>(await this.callApi(params, req, runtime), new DeleteResourceResponse({}));
  }

  /**
   * 删除资源
   * 
   * @param requestPath - the whole path of resource string
   * @param request - DeleteResourceRequest
   * @returns DeleteResourceResponse
   */
  async deleteResource(requestPath: string, request: DeleteResourceRequest): Promise<DeleteResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceWithOptions(requestPath, request, headers, runtime);
  }

  /**
   * 查询价格
   * 
   * @param requestPath - the whole path of resource string
   * @param tmpReq - GetPriceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPriceResponse
   */
  async getPriceWithOptions(requestPath: string, tmpReq: GetPriceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetPriceResponse> {
    Util.validateModel(tmpReq);
    let request = new GetPriceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resourceAttributes)) {
      request.resourceAttributesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceAttributes, "resourceAttributes", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceAttributesShrink)) {
      query["resourceAttributes"] = request.resourceAttributesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPrice",
      version: "2022-08-30",
      protocol: "HTTPS",
      pathname: `${requestPath}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetPriceResponse>(await this.callApi(params, req, runtime), new GetPriceResponse({}));
  }

  /**
   * 查询价格
   * 
   * @param requestPath - the whole path of resource string
   * @param request - GetPriceRequest
   * @returns GetPriceResponse
   */
  async getPrice(requestPath: string, request: GetPriceRequest): Promise<GetPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPriceWithOptions(requestPath, request, headers, runtime);
  }

  /**
   * 获取资源元数据
   * 
   * @param requestPath - the whole path of resource string
   * @param headers - GetResourceTypeHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceTypeResponse
   */
  async getResourceTypeWithOptions(requestPath: string, headers: GetResourceTypeHeaders, runtime: $Util.RuntimeOptions): Promise<GetResourceTypeResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAcceptLanguage)) {
      realHeaders["x-acs-accept-language"] = Util.toJSONString(headers.xAcsAcceptLanguage);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "GetResourceType",
      version: "2022-08-30",
      protocol: "HTTPS",
      pathname: `${requestPath}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetResourceTypeResponse>(await this.callApi(params, req, runtime), new GetResourceTypeResponse({}));
  }

  /**
   * 获取资源元数据
   * 
   * @param requestPath - the whole path of resource string
   * @returns GetResourceTypeResponse
   */
  async getResourceType(requestPath: string): Promise<GetResourceTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetResourceTypeHeaders({ });
    return await this.getResourceTypeWithOptions(requestPath, headers, runtime);
  }

  /**
   * 查询资源
   * 
   * @param requestPath - the whole path of resource string
   * @param tmpReq - GetResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourcesResponse
   */
  async getResourcesWithOptions(requestPath: string, tmpReq: GetResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetResourcesResponse> {
    Util.validateModel(tmpReq);
    let request = new GetResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "filter", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.filterShrink)) {
      query["filter"] = request.filterShrink;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResources",
      version: "2022-08-30",
      protocol: "HTTPS",
      pathname: `${requestPath}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetResourcesResponse>(await this.callApi(params, req, runtime), new GetResourcesResponse({}));
  }

  /**
   * 查询资源
   * 
   * @param requestPath - the whole path of resource string
   * @param request - GetResourcesRequest
   * @returns GetResourcesResponse
   */
  async getResources(requestPath: string, request: GetResourcesRequest): Promise<GetResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourcesWithOptions(requestPath, request, headers, runtime);
  }

  /**
   * 查询任务
   * 
   * @remarks
   * GET /api/v1/tasks/{taskId}。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskResponse
   */
  async getTaskWithOptions(taskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTask",
      version: "2022-08-30",
      protocol: "HTTPS",
      pathname: `/api/v1/tasks/${OpenApiUtil.getEncodeParam(taskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTaskResponse>(await this.callApi(params, req, runtime), new GetTaskResponse({}));
  }

  /**
   * 查询任务
   * 
   * @remarks
   * GET /api/v1/tasks/{taskId}。
   * @returns GetTaskResponse
   */
  async getTask(taskId: string): Promise<GetTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskWithOptions(taskId, headers, runtime);
  }

  /**
   * 列举资源属性可选值
   * 
   * @param requestPath - the whole path of resource string
   * @param tmpReq - ListDataSourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourcesResponse
   */
  async listDataSourcesWithOptions(requestPath: string, tmpReq: ListDataSourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDataSourcesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListDataSourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "filter", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.attributeName)) {
      query["attributeName"] = request.attributeName;
    }

    if (!Util.isUnset(request.filterShrink)) {
      query["filter"] = request.filterShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDataSources",
      version: "2022-08-30",
      protocol: "HTTPS",
      pathname: `${requestPath}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDataSourcesResponse>(await this.callApi(params, req, runtime), new ListDataSourcesResponse({}));
  }

  /**
   * 列举资源属性可选值
   * 
   * @param requestPath - the whole path of resource string
   * @param request - ListDataSourcesRequest
   * @returns ListDataSourcesResponse
   */
  async listDataSources(requestPath: string, request: ListDataSourcesRequest): Promise<ListDataSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataSourcesWithOptions(requestPath, request, headers, runtime);
  }

  /**
   * 列举资源类型
   * 
   * @remarks
   * GET /api/v1/providers/{provider}/products。
   * 
   * @param request - ListProductsRequest
   * @param headers - ListProductsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProductsResponse
   */
  async listProductsWithOptions(provider: string, request: ListProductsRequest, headers: ListProductsHeaders, runtime: $Util.RuntimeOptions): Promise<ListProductsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAcceptLanguage)) {
      realHeaders["x-acs-accept-language"] = Util.toJSONString(headers.xAcsAcceptLanguage);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProducts",
      version: "2022-08-30",
      protocol: "HTTPS",
      pathname: `/api/v1/providers/${OpenApiUtil.getEncodeParam(provider)}/products`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProductsResponse>(await this.callApi(params, req, runtime), new ListProductsResponse({}));
  }

  /**
   * 列举资源类型
   * 
   * @remarks
   * GET /api/v1/providers/{provider}/products。
   * 
   * @param request - ListProductsRequest
   * @returns ListProductsResponse
   */
  async listProducts(provider: string, request: ListProductsRequest): Promise<ListProductsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListProductsHeaders({ });
    return await this.listProductsWithOptions(provider, request, headers, runtime);
  }

  /**
   * 列举资源类型
   * 
   * @remarks
   * GET /api/v1/providers/{provider}/products/{product}/resourceTypes。
   * 
   * @param tmpReq - ListResourceTypesRequest
   * @param headers - ListResourceTypesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceTypesResponse
   */
  async listResourceTypesWithOptions(provider: string, product: string, tmpReq: ListResourceTypesRequest, headers: ListResourceTypesHeaders, runtime: $Util.RuntimeOptions): Promise<ListResourceTypesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListResourceTypesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resourceTypes)) {
      request.resourceTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceTypes, "resourceTypes", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceTypesShrink)) {
      query["resourceTypes"] = request.resourceTypesShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAcceptLanguage)) {
      realHeaders["x-acs-accept-language"] = Util.toJSONString(headers.xAcsAcceptLanguage);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResourceTypes",
      version: "2022-08-30",
      protocol: "HTTPS",
      pathname: `/api/v1/providers/${OpenApiUtil.getEncodeParam(provider)}/products/${OpenApiUtil.getEncodeParam(product)}/resourceTypes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListResourceTypesResponse>(await this.callApi(params, req, runtime), new ListResourceTypesResponse({}));
  }

  /**
   * 列举资源类型
   * 
   * @remarks
   * GET /api/v1/providers/{provider}/products/{product}/resourceTypes。
   * 
   * @param request - ListResourceTypesRequest
   * @returns ListResourceTypesResponse
   */
  async listResourceTypes(provider: string, product: string, request: ListResourceTypesRequest): Promise<ListResourceTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListResourceTypesHeaders({ });
    return await this.listResourceTypesWithOptions(provider, product, request, headers, runtime);
  }

  /**
   * 更新资源
   * 
   * @param requestPath - the whole path of resource string
   * @param request - UpdateResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceResponse
   */
  async updateResourceWithOptions(requestPath: string, request: UpdateResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateResourceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateResource",
      version: "2022-08-30",
      protocol: "HTTPS",
      pathname: `${requestPath}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateResourceResponse>(await this.callApi(params, req, runtime), new UpdateResourceResponse({}));
  }

  /**
   * 更新资源
   * 
   * @param requestPath - the whole path of resource string
   * @param request - UpdateResourceRequest
   * @returns UpdateResourceResponse
   */
  async updateResource(requestPath: string, request: UpdateResourceRequest): Promise<UpdateResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceWithOptions(requestPath, request, headers, runtime);
  }

}
