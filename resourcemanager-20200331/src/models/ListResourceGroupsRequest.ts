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
   * The display name of the resource group. This parameter specifies a filter condition for the query. Fuzzy match is supported.
   * 
   * The display name can be a maximum of 50 characters in length.
   * 
   * @example
   * my-project
   */
  displayName?: string;
  /**
   * @remarks
   * Specifies whether to return the information of tags. Valid values:
   * 
   * *   false (default value)
   * *   true
   * 
   * >  If you configure the Tag parameter, the system returns the information of tags regardless of the setting of the `IncludeTags` parameter.
   * 
   * @example
   * false
   */
  includeTags?: boolean;
  /**
   * @remarks
   * The identifier of the resource group. This parameter specifies a filter condition for the query. Fuzzy match is supported.
   * 
   * The identifier can be a maximum of 50 characters in length and can contain letters, digits, and hyphens (-).
   * 
   * @example
   * my-project
   */
  name?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group. This parameter specifies a filter condition for the query.
   * 
   * The ID can be a maximum of 18 characters in length and must start with `rg-`.
   * 
   * >  This parameter is incorporated into the `ResourceGroupIds` parameter. If you configure both the `ResourceGroupId` and `ResourceGroupIds` parameters, the value of the `ResourceGroupIds` parameter prevails.
   * 
   * @example
   * rg-9gLOoK****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The IDs of the resource groups. This parameter specifies a filter condition for the query.
   * 
   * You can specify a maximum of 100 resource group IDs.
   * 
   * >  If you configure both the `ResourceGroupId` and `ResourceGroupIds` parameters, the value of the `ResourceGroupIds` parameter prevails.
   */
  resourceGroupIds?: string[];
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
   * The tag. This parameter specifies a filter condition for the query.
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

