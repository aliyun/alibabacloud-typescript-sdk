// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcesResponseBodyResourcesTags extends $dara.Model {
  /**
   * @example
   * test
   */
  tagKey?: string;
  /**
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
   * @example
   * 365845
   */
  accountId?: string;
  /**
   * @example
   * 2024-05-03T02:22:59Z
   */
  createTime?: string;
  dependsOnResourceIds?: string[];
  /**
   * @example
   * ECS
   */
  productCode?: string;
  /**
   * @example
   * {}
   */
  properties?: { [key: string]: any };
  /**
   * @example
   * {}
   */
  propertyVariables?: { [key: string]: any };
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * acs:vpc:cn-hangzhou:12345:test
   */
  resourceArn?: string;
  /**
   * @example
   * rg-aekzyqyghofqbxy
   */
  resourceGroupId?: string;
  /**
   * @example
   * i-efegsewrttfd
   */
  resourceId?: string;
  /**
   * @example
   * test
   */
  resourceName?: string;
  resourcePageUrl?: string;
  /**
   * @example
   * Task
   */
  resourceType?: string;
  /**
   * @example
   * enable
   */
  status?: string;
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
  resources?: ListResourcesResponseBodyResources[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 67585D9B-EFA5-5E51-BAB1-8FF07DA1B36F
   */
  requestId?: string;
  /**
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

