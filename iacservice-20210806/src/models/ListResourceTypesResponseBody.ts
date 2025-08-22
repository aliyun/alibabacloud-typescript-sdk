// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceTypesResponseBodyResourceTypes extends $dara.Model {
  description?: string;
  /**
   * @example
   * VPC
   */
  product?: string;
  productName?: string;
  /**
   * @example
   * https://vpc.console.aliyun.com/vpc/${RegionId}/route-tables/${RouteTableId}
   */
  resourceDetailPageUrl?: string;
  /**
   * @example
   * https://vpc.console.aliyun.com/vpc/${RegionId}/route-tables
   */
  resourceListPageUrl?: string;
  /**
   * @example
   * Available
   */
  status?: string;
  /**
   * @example
   * 1.0.0
   */
  statusStartVersion?: string;
  /**
   * @example
   * VPC
   */
  subcategory?: string;
  /**
   * @example
   * true
   */
  supportTerraformer?: string;
  /**
   * @example
   * 1.248.0
   */
  terraformProviderVersion?: string;
  /**
   * @example
   * alicloud_route_table
   */
  terraformResourceType?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      product: 'product',
      productName: 'productName',
      resourceDetailPageUrl: 'resourceDetailPageUrl',
      resourceListPageUrl: 'resourceListPageUrl',
      status: 'status',
      statusStartVersion: 'statusStartVersion',
      subcategory: 'subcategory',
      supportTerraformer: 'supportTerraformer',
      terraformProviderVersion: 'terraformProviderVersion',
      terraformResourceType: 'terraformResourceType',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      product: 'string',
      productName: 'string',
      resourceDetailPageUrl: 'string',
      resourceListPageUrl: 'string',
      status: 'string',
      statusStartVersion: 'string',
      subcategory: 'string',
      supportTerraformer: 'string',
      terraformProviderVersion: 'string',
      terraformResourceType: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesResponseBody extends $dara.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * LC4NJL3Ru2bIiRdnbADPQp4dD+2BRJj42DLT6GrZysw=
   */
  nextToken?: string;
  /**
   * @example
   * 9bcaac3c-420d-4303-87ab-7638c07b0a0b
   */
  requestId?: string;
  resourceTypes?: ListResourceTypesResponseBodyResourceTypes[];
  /**
   * @example
   * 93
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

  validate() {
    if(Array.isArray(this.resourceTypes)) {
      $dara.Model.validateArray(this.resourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

