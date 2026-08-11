// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceTypesResponseBodyResourceTypes extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Route Table
   */
  description?: string;
  /**
   * @remarks
   * The product name.
   * 
   * @example
   * VPC
   */
  product?: string;
  /**
   * @remarks
   * The product name.
   * 
   * @example
   * 专有网络VPC
   */
  productName?: string;
  /**
   * @remarks
   * The URL of the resource details page.
   * 
   * @example
   * https://vpc.console.aliyun.com/vpc/${RegionId}/route-tables/${RouteTableId}
   */
  resourceDetailPageUrl?: string;
  /**
   * @remarks
   * The URL of the resources page.
   * 
   * @example
   * https://vpc.console.aliyun.com/vpc/${RegionId}/route-tables
   */
  resourceListPageUrl?: string;
  /**
   * @remarks
   * The Alibaba Cloud resource type in the format of ALIYUN::\\<cloud service>::\\<resource type>.
   * 
   * @example
   * ALIYUN::VPC::VPC
   */
  resourceType?: string;
  /**
   * @remarks
   * The resource status.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The version from which the resource status takes effect.
   * 
   * @example
   * 1.0.0
   */
  statusStartVersion?: string;
  /**
   * @remarks
   * The product subcategory in Terraform.
   * 
   * @example
   * VPC
   */
  subcategory?: string;
  /**
   * @remarks
   * Specifies whether Terraformer is supported.
   * 
   * @example
   * true
   */
  supportTerraformer?: string;
  /**
   * @remarks
   * The Terraform Provider version.
   * 
   * @example
   * 1.248.0
   */
  terraformProviderVersion?: string;
  /**
   * @remarks
   * The resource type in Terraform.
   * 
   * @example
   * alicloud_route_table
   */
  terraformResourceType?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * Route Table
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      product: 'product',
      productName: 'productName',
      resourceDetailPageUrl: 'resourceDetailPageUrl',
      resourceListPageUrl: 'resourceListPageUrl',
      resourceType: 'resourceType',
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
      resourceType: 'string',
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
   * @remarks
   * The maximum number of entries per page. Valid values: 0 to 200. Default value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * LC4NJL3Ru2bIiRdnbADPQp4dD+2BRJj42DLT6GrZysw=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9bcaac3c-420d-4303-87ab-7638c07b0a0b
   */
  requestId?: string;
  /**
   * @remarks
   * The list of resources.
   */
  resourceTypes?: ListResourceTypesResponseBodyResourceTypes[];
  /**
   * @remarks
   * The total number of entries.
   * 
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

