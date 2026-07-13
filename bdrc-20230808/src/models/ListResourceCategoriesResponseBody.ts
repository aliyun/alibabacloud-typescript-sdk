// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceCategoriesResponseBodyDataContentResourceCount extends $dara.Model {
  /**
   * @remarks
   * The number of resources of each type.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The resource type.
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

export class ListResourceCategoriesResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * The applicable product type. If this parameter is empty, all products are matched.
   * 
   * @example
   * ecs
   */
  productType?: string;
  /**
   * @remarks
   * The resource category ID, which is globally unique.
   * 
   * @example
   * rc-123***7890
   */
  resourceCategoryId?: string;
  /**
   * @remarks
   * The resource name, which is unique within the namespace.
   * 
   * @example
   * My***ResourceCategory
   */
  resourceCategoryName?: string;
  /**
   * @remarks
   * The resource category type. Valid values:
   * 
   * - DEFAULT: default group created by the system, cannot be deleted.
   * 
   * - CUSTOM: custom group, can be deleted.
   * 
   * @example
   * CUSTOM
   */
  resourceCategoryType?: string;
  /**
   * @remarks
   * The number of resources of each type.
   */
  resourceCount?: ListResourceCategoriesResponseBodyDataContentResourceCount[];
  /**
   * @remarks
   * The resource matcher. If this parameter is empty, no resources are matched.
   * 
   * @example
   * {\\"type\\":\\"BOOL\\",\\"operator\\":\\"AND\\",\\"values\\":[{\\"type\\":\\"TAG\\",\\"key\\":\\"createdBy\\",\\"operator\\":\\"EQUAL\\",\\"values\\":[\\"me\\"]}]}
   */
  resourceMatcher?: string;
  /**
   * @remarks
   * The applicable resource type. If this parameter is empty, all resources are matched.
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
      resourceCount: { 'type': 'array', 'itemType': ListResourceCategoriesResponseBodyDataContentResourceCount },
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

export class ListResourceCategoriesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The collection of records returned in this request.
   */
  content?: ListResourceCategoriesResponseBodyDataContent[];
  /**
   * @remarks
   * The maximum number of records returned in this request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Indicates the position where the current call returns data from. An empty value indicates that all data has been read.
   * 
   * @example
   * eKDyCM0zFQ5op7jVMWmNNA==
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of data entries under the current request conditions. This parameter is optional and can be left unspecified by default.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': ListResourceCategoriesResponseBodyDataContent },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceCategoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListResourceCategoriesResponseBodyData;
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
      data: ListResourceCategoriesResponseBodyData,
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

