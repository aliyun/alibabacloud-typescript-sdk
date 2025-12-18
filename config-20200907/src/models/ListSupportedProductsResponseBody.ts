// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSupportedProductsResponseBodyProductsResourceTypeList extends $dara.Model {
  /**
   * @remarks
   * The identifier of the resource type.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The English name of the resource type.
   * 
   * @example
   * Ecs Instance
   */
  typeNameEn?: string;
  /**
   * @remarks
   * The Chinese name of the resource type.
   * 
   * @example
   * ECS实例
   */
  typeNameZh?: string;
  /**
   * @remarks
   * The URL of the resource type in the console.
   * 
   * @example
   * https://ecs.console.aliyun.com/#/server/@{ResourceId}/detail?regionId=@{RegionId}
   */
  typePageLink?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      typeNameEn: 'TypeNameEn',
      typeNameZh: 'TypeNameZh',
      typePageLink: 'TypePageLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      typeNameEn: 'string',
      typeNameZh: 'string',
      typePageLink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupportedProductsResponseBodyProducts extends $dara.Model {
  /**
   * @remarks
   * The English name of the Alibaba Cloud service.
   * 
   * @example
   * Elastic Compute Service
   */
  productNameEn?: string;
  /**
   * @remarks
   * The Chinese name of the Alibaba Cloud service.
   * 
   * @example
   * 云服务器ECS
   */
  productNameZh?: string;
  /**
   * @remarks
   * The resource types that are supported by Cloud Config.
   */
  resourceTypeList?: ListSupportedProductsResponseBodyProductsResourceTypeList[];
  static names(): { [key: string]: string } {
    return {
      productNameEn: 'ProductNameEn',
      productNameZh: 'ProductNameZh',
      resourceTypeList: 'ResourceTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productNameEn: 'string',
      productNameZh: 'string',
      resourceTypeList: { 'type': 'array', 'itemType': ListSupportedProductsResponseBodyProductsResourceTypeList },
    };
  }

  validate() {
    if(Array.isArray(this.resourceTypeList)) {
      $dara.Model.validateArray(this.resourceTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupportedProductsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return for a single request. Valid values: 1 to 500.
   * 
   * @example
   * 100
   */
  maxResults?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * D3AjqMNSy0ls7zBNCf3a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The cloud services that are supported by Cloud Config.
   */
  products?: ListSupportedProductsResponseBodyProducts[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 610B0276-ABEE-57DF-9C13-C2324FADA9D7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      products: 'Products',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'string',
      nextToken: 'string',
      products: { 'type': 'array', 'itemType': ListSupportedProductsResponseBodyProducts },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.products)) {
      $dara.Model.validateArray(this.products);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

