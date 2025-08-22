// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceTypeResponseBodyResourceTypeOperations extends $dara.Model {
  /**
   * @example
   * CreateVSwitch
   */
  apiName?: string;
  /**
   * @example
   * 2016-04-28
   */
  apiVersion?: string;
  /**
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
   * @example
   * test
   */
  description?: string;
  operations?: GetResourceTypeResponseBodyResourceTypeOperations[];
  /**
   * @example
   * ECS
   */
  product?: string;
  productName?: string;
  /**
   * @example
   * vpc
   */
  productNameEn?: string;
  /**
   * @example
   * {}
   */
  properties?: { [key: string]: any };
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
   * 1.227.0
   */
  statusStartVersion?: string;
  /**
   * @example
   * network
   */
  subcategory?: string;
  /**
   * @example
   * true
   */
  supportExported?: boolean;
  /**
   * @example
   * 1.227.0
   */
  terraformProviderVersion?: string;
  /**
   * @example
   * alicloud_vpc
   */
  terraformResourceType?: string;
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
   * @example
   * 9bcaac3c-420d-4303-87ab-7638c07b0a0b
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

