// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceTypeResponseBodyResourceTypeOperations extends $dara.Model {
  /**
   * @remarks
   * The API name.
   * 
   * @example
   * CreateVSwitch
   */
  apiName?: string;
  /**
   * @remarks
   * The API version.
   * 
   * @example
   * 2016-04-28
   */
  apiVersion?: string;
  /**
   * @remarks
   * The operation type. Valid values: Write, Read.
   * 
   * @example
   * Write
   */
  operationType?: string;
  /**
   * @remarks
   * serviceCode
   * 
   * @example
   * Vpc
   */
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'apiName',
      apiVersion: 'apiVersion',
      operationType: 'operationType',
      serviceCode: 'serviceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      apiVersion: 'string',
      operationType: 'string',
      serviceCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeResponseBodyResourceType extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The collection of APIs associated with the resource.
   */
  operations?: GetResourceTypeResponseBodyResourceTypeOperations[];
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * ECS
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
   * The English name of the product.
   * 
   * @example
   * vpc
   */
  productNameEn?: string;
  /**
   * @remarks
   * The resource properties.
   * 
   * @example
   * {}
   */
  properties?: { [key: string]: any };
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
   * The Alibaba Cloud resource type, in the format of ALIYUN::<cloud service>::<resource type>.
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
   * The version from which the status takes effect.
   * 
   * @example
   * 1.227.0
   */
  statusStartVersion?: string;
  /**
   * @remarks
   * The product category in Terraform.
   * 
   * @example
   * network
   */
  subcategory?: string;
  /**
   * @remarks
   * Indicates whether export is supported.
   * 
   * @example
   * true
   */
  supportExported?: boolean;
  /**
   * @remarks
   * The Terraform provider version.
   * 
   * @example
   * 1.227.0
   */
  terraformProviderVersion?: string;
  /**
   * @remarks
   * The resource code in Terraform.
   * 
   * @example
   * alicloud_vpc
   */
  terraformResourceType?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * 路由表
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      operations: 'operations',
      product: 'product',
      productName: 'productName',
      productNameEn: 'productNameEn',
      properties: 'properties',
      resourceDetailPageUrl: 'resourceDetailPageUrl',
      resourceListPageUrl: 'resourceListPageUrl',
      resourceType: 'resourceType',
      status: 'status',
      statusStartVersion: 'statusStartVersion',
      subcategory: 'subcategory',
      supportExported: 'supportExported',
      terraformProviderVersion: 'terraformProviderVersion',
      terraformResourceType: 'terraformResourceType',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      operations: { 'type': 'array', 'itemType': GetResourceTypeResponseBodyResourceTypeOperations },
      product: 'string',
      productName: 'string',
      productNameEn: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceDetailPageUrl: 'string',
      resourceListPageUrl: 'string',
      resourceType: 'string',
      status: 'string',
      statusStartVersion: 'string',
      subcategory: 'string',
      supportExported: 'boolean',
      terraformProviderVersion: 'string',
      terraformResourceType: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.operations)) {
      $dara.Model.validateArray(this.operations);
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

export class GetResourceTypeResponseBody extends $dara.Model {
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
   * The detailed information about the resource type.
   */
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

  validate() {
    if(this.resourceType && typeof (this.resourceType as any).validate === 'function') {
      (this.resourceType as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

