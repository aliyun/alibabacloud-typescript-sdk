// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcesResponseBodyResourcesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'tagKey',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListResourcesResponseBodyResources extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 365845
   */
  accountId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-05-03T02:22:59Z
   */
  createTime?: string;
  /**
   * @remarks
   * The dependent resources.
   */
  dependsOnResourceIds?: string[];
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * ECS
   */
  productCode?: string;
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
   * The property variables.
   * 
   * @example
   * {}
   */
  propertyVariables?: { [key: string]: any };
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource ARN.
   * 
   * @example
   * acs:vpc:cn-hangzhou:12345:test
   */
  resourceArn?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekzyqyghofqbxy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * i-efegsewrttfd
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * test
   */
  resourceName?: string;
  /**
   * @remarks
   * The URL of the resources page.
   * 
   * @example
   * https:://ecs.aliyncs.com
   */
  resourcePageUrl?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * Task
   */
  resourceType?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * enable
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListResourcesResponseBodyResourcesTags[];
  /**
   * @remarks
   * terraform arn
   * 
   * @example
   * alicloud_vpc
   */
  terraformArn?: string;
  /**
   * @remarks
   * terraform code
   * 
   * @example
   * alicloud_vpc
   */
  terraformCode?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      createTime: 'createTime',
      dependsOnResourceIds: 'dependsOnResourceIds',
      productCode: 'productCode',
      properties: 'properties',
      propertyVariables: 'propertyVariables',
      regionId: 'regionId',
      resourceArn: 'resourceArn',
      resourceGroupId: 'resourceGroupId',
      resourceId: 'resourceId',
      resourceName: 'resourceName',
      resourcePageUrl: 'resourcePageUrl',
      resourceType: 'resourceType',
      status: 'status',
      tags: 'tags',
      terraformArn: 'terraformArn',
      terraformCode: 'terraformCode',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      createTime: 'string',
      dependsOnResourceIds: { 'type': 'array', 'itemType': 'string' },
      productCode: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      propertyVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      resourceArn: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourcePageUrl: 'string',
      resourceType: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListResourcesResponseBodyResourcesTags },
      terraformArn: 'string',
      terraformCode: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dependsOnResourceIds)) {
      $dara.Model.validateArray(this.dependsOnResourceIds);
    }
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    if(this.propertyVariables) {
      $dara.Model.validateMap(this.propertyVariables);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The resource information.
   */
  resources?: ListResourcesResponseBodyResources[];
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of results per page. Default value: 20. Minimum value: 1. Maximum value: 200.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 67585D9B-EFA5-5E51-BAB1-8FF07DA1B36F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 9
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      resources: 'Resources',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resources: { 'type': 'array', 'itemType': ListResourcesResponseBodyResources },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

