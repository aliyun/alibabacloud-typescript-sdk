// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupsWithAuthDetailsRequestResourceTypes extends $dara.Model {
  /**
   * @remarks
   * The resource type.
   * 
   * You can obtain the resource type from the **Resource type** column in [Services that work with Resource Group](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * instance
   */
  resourceTypeCode?: string;
  /**
   * @remarks
   * The service code.
   * 
   * You can obtain the code from the **Service code** column in [Services that work with Resource Group](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * ecs
   */
  service?: string;
  static names(): { [key: string]: string } {
    return {
      resourceTypeCode: 'ResourceTypeCode',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceTypeCode: 'string',
      service: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsWithAuthDetailsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsWithAuthDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The display name of the resource group. This parameter specifies a filter condition for the query. Fuzzy search is supported.
   * 
   * The display name can be a maximum of 50 characters in length.
   * 
   * @example
   * TestRG-BVT1
   */
  displayName?: string;
  /**
   * @remarks
   * Specifies whether to return the information of tags. Valid values:
   * 
   * *   false (default)
   * *   true
   * 
   * >  If you set a tag filter condition, the tag information is returned regardless of the `IncludeTags` value.
   * 
   * @example
   * true
   */
  includeTags?: boolean;
  /**
   * @remarks
   * The identifier of the resource group. This parameter specifies a filter condition for the query. Fuzzy search is supported.
   * 
   * The identifier can be a maximum of 50 characters in length and can contain letters, digits, and hyphens (-).
   * 
   * @example
   * prod-rg
   */
  name?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The IDs of the resource groups that you want to query.
   */
  resourceGroupIds?: string[];
  /**
   * @remarks
   * The ID of the region where the resource resides.
   * 
   * @example
   * cn-shenzhen
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The resource types.
   */
  resourceTypes?: ListResourceGroupsWithAuthDetailsRequestResourceTypes[];
  /**
   * @remarks
   * The status of the resource group. This parameter specifies a filter condition for the query. Valid values:
   * 
   * *   Creating: The resource group is being created.
   * *   OK: The resource group is created.
   * *   PendingDelete: The resource group is waiting to be deleted.
   * 
   * @example
   * OK
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: ListResourceGroupsWithAuthDetailsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      includeTags: 'IncludeTags',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupIds: 'ResourceGroupIds',
      resourceRegionId: 'ResourceRegionId',
      resourceTypes: 'ResourceTypes',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      includeTags: 'boolean',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupIds: { 'type': 'array', 'itemType': 'string' },
      resourceRegionId: 'string',
      resourceTypes: { 'type': 'array', 'itemType': ListResourceGroupsWithAuthDetailsRequestResourceTypes },
      status: 'string',
      tag: { 'type': 'array', 'itemType': ListResourceGroupsWithAuthDetailsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceGroupIds)) {
      $dara.Model.validateArray(this.resourceGroupIds);
    }
    if(Array.isArray(this.resourceTypes)) {
      $dara.Model.validateArray(this.resourceTypes);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

