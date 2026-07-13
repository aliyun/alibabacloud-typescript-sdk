// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceCategoryResponseBodyDataResourceCount extends $dara.Model {
  /**
   * @remarks
   * Number of resources by type.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * Resource type.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceCategoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Applicable product type. If empty, matches all products.
   * 
   * @example
   * ecs
   */
  productType?: string;
  /**
   * @remarks
   * Resource category ID, globally unique.
   * 
   * @example
   * rc-123***7890
   */
  resourceCategoryId?: string;
  /**
   * @remarks
   * Resource name, unique within the namespace.
   * 
   * @example
   * My***ResourceCategory
   */
  resourceCategoryName?: string;
  /**
   * @remarks
   * Resource category type. Valid values:
   * 
   * - DEFAULT: default group, created by the system, cannot be deleted.
   * 
   * - CUSTOM: custom group, can be deleted.
   * 
   * @example
   * CUSTOM
   */
  resourceCategoryType?: string;
  /**
   * @remarks
   * Number of resources by type.
   */
  resourceCount?: GetResourceCategoryResponseBodyDataResourceCount[];
  /**
   * @remarks
   * Resource matcher. If empty, no resources are matched.
   * 
   * @example
   * {\\"type\\":\\"BOOL\\",\\"operator\\":\\"AND\\",\\"values\\":[{\\"type\\":\\"TAG\\",\\"key\\":\\"createdBy\\",\\"operator\\":\\"EQUAL\\",\\"values\\":[\\"me\\"]}]}
   */
  resourceMatcher?: string;
  /**
   * @remarks
   * Applicable resource type. If empty, matches all resources.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      productType: 'ProductType',
      resourceCategoryId: 'ResourceCategoryId',
      resourceCategoryName: 'ResourceCategoryName',
      resourceCategoryType: 'ResourceCategoryType',
      resourceCount: 'ResourceCount',
      resourceMatcher: 'ResourceMatcher',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productType: 'string',
      resourceCategoryId: 'string',
      resourceCategoryName: 'string',
      resourceCategoryType: 'string',
      resourceCount: { 'type': 'array', 'itemType': GetResourceCategoryResponseBodyDataResourceCount },
      resourceMatcher: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceCount)) {
      $dara.Model.validateArray(this.resourceCount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceCategoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetResourceCategoryResponseBodyData;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * AE43C4CB-8074-5EBD-9806-8CA6D12800B1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetResourceCategoryResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

