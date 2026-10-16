// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupsRequestTag extends $dara.Model {
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

export class ListResourceGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The display name of the resource group. This parameter is used as a filter condition. Fuzzy match is supported.
   * 
   * The value cannot exceed 50 characters in length.
   * 
   * @example
   * my-project
   */
  displayName?: string;
  /**
   * @remarks
   * Specifies whether to return tag information. Valid values:
   * 
   * - false (default): Tag information is not returned.
   * 
   * - true: Tag information is returned.
   * > If you specify tag-based filter conditions, tag information is always returned regardless of the value of IncludeTags.
   * 
   * @example
   * false
   */
  includeTags?: boolean;
  /**
   * @remarks
   * The unique identifier of the resource group. This parameter is used as a filter condition. Fuzzy match is supported.
   * 
   * The value cannot exceed 50 characters in length and can contain letters, digits, and hyphens (-).
   * 
   * @example
   * my-project
   */
  name?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource group ID. This parameter is used as a filter condition.
   * 
   * The value cannot exceed 18 characters in length and must start with `rg-`.
   * 
   * > This parameter has been incorporated into the ResourceGroupIds parameter. If you set both ResourceGroupId and ResourceGroupIds, the value of ResourceGroupIds takes precedence.
   * 
   * @example
   * rg-9gLOoK****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of resource group IDs. This parameter is used as a filter condition.
   * 
   * You can specify up to 100 resource group IDs.
   * 
   * > If you set both ResourceGroupId and ResourceGroupIds, the value of ResourceGroupIds takes precedence.
   */
  resourceGroupIds?: string[];
  /**
   * @remarks
   * The resource group status. This parameter is used as a filter condition. Valid values:
   * 
   * - Creating: The resource group is being created.
   * - OK: The resource group is created.
   * - PendingDelete: The resource group is pending deletion.
   * 
   * @example
   * OK
   */
  status?: string;
  /**
   * @remarks
   * The tags. This parameter is used as a filter condition.
   * 
   * You can specify up to 20 tags.
   */
  tag?: ListResourceGroupsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      includeTags: 'IncludeTags',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      resourceGroupIds: 'ResourceGroupIds',
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
      resourceGroupId: 'string',
      resourceGroupIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      tag: { 'type': 'array', 'itemType': ListResourceGroupsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceGroupIds)) {
      $dara.Model.validateArray(this.resourceGroupIds);
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

