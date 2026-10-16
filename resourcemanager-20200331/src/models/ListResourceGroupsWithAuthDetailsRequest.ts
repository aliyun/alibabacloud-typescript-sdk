// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupsWithAuthDetailsRequestResourceTypes extends $dara.Model {
  /**
   * @remarks
   * The resource type.
   * 
   * You can obtain the resource type from the **Resource Type** column in [Cloud services that support resource groups](https://help.aliyun.com/document_detail/94479.html).
   * 
   * @example
   * instance
   */
  resourceTypeCode?: string;
  /**
   * @remarks
   * The cloud service code.
   * 
   * You can obtain the cloud service code from the **Cloud Service Code** column in [Cloud services that support resource groups](https://help.aliyun.com/document_detail/94479.html).
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
   * The display name of the resource group. This parameter is used as a filter condition. Fuzzy match is supported.
   * 
   * The name can be up to 50 characters in length.
   * 
   * @example
   * TestRG-BVT1
   */
  displayName?: string;
  /**
   * @remarks
   * Specifies whether to return tag information. Valid values:
   * 
   * - false (default): Does not return tag information.
   * 
   * - true: Returns tag information.
   * > If you specify tag-based filter conditions, tag information is always returned regardless of the value of `IncludeTags`.
   * 
   * @example
   * true
   */
  includeTags?: boolean;
  /**
   * @remarks
   * The unique identifier of the resource group. This parameter is used as a filter condition. Fuzzy match is supported.
   * 
   * The identifier can be up to 50 characters in length and can contain letters, digits, and hyphens (-).
   * 
   * @example
   * prod-rg
   */
  name?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of resource group IDs.
   */
  resourceGroupIds?: string[];
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * @example
   * cn-shenzhen
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The list of resource types.
   */
  resourceTypes?: ListResourceGroupsWithAuthDetailsRequestResourceTypes[];
  /**
   * @remarks
   * The status of the resource group. This parameter is used as a filter condition. Valid values:
   * 
   * - Creating: Being created.
   * - OK: Created.
   * - PendingDelete: Pending deletion.
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

