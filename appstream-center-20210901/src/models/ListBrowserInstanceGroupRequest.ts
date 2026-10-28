// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBrowserInstanceGroupRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. Do not specify this parameter in customer-facing scenarios.
   * 
   * @example
   * -
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Do not specify this parameter in customer-facing scenarios.
   * 
   * @example
   * -
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

export class ListBrowserInstanceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the browser group set. This parameter is used to query the valid members of the set by exact match.
   * 
   * @example
   * set-3jm9d0abc00example
   */
  appInstanceGroupSetId?: string;
  /**
   * @remarks
   * Filters cloud browser groups by business region.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The ID of the cloud browser group. This parameter is used for exact match.
   * 
   * @example
   * big-0c7loey7fzjq****
   */
  browserInstanceGroupId?: string;
  /**
   * @remarks
   * The name of the browser group. Fuzzy match is supported.
   * 
   * @example
   * Office
   */
  browserInstanceGroupName?: string;
  /**
   * @remarks
   * Filters cloud browser groups by name or ID based on partial match.
   * 
   * @example
   * Office
   */
  cloudBrowserName?: string;
  /**
   * @remarks
   * Excludes cloud browser groups that are authorized to the specified user groups.
   * 
   * **if can be null:**
   * true
   */
  excludedUserGroupIds?: string[];
  /**
   * @remarks
   * Filters cloud browser groups by the ID of the office network to which they belong.
   * 
   * @example
   * cn-hangzhou+dir-843734****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters cloud browser groups by status.
   * 
   * **Limit:** You can specify only one status at a time.
   */
  status?: string[];
  /**
   * @remarks
   * The tag filtering parameter. This parameter is not supported in customer-facing scenarios. Do not specify this parameter.
   */
  tag?: ListBrowserInstanceGroupRequestTag[];
  /**
   * @remarks
   * Filters cloud browser groups by browser version. Valid values:
   * 
   * - `Basic`: Basic Edition.
   * - `Pro`: Premium Edition.
   * 
   * Use `Pro` when you query MAU browser groups.
   * 
   * @example
   * Pro
   */
  tier?: string;
  /**
   * @remarks
   * Filters cloud browser groups by the IDs of authorized user groups.
   * 
   * **if can be null:**
   * true
   */
  userGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupSetId: 'AppInstanceGroupSetId',
      bizRegionId: 'BizRegionId',
      browserInstanceGroupId: 'BrowserInstanceGroupId',
      browserInstanceGroupName: 'BrowserInstanceGroupName',
      cloudBrowserName: 'CloudBrowserName',
      excludedUserGroupIds: 'ExcludedUserGroupIds',
      officeSiteId: 'OfficeSiteId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      tag: 'Tag',
      tier: 'Tier',
      userGroupIds: 'UserGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupSetId: 'string',
      bizRegionId: 'string',
      browserInstanceGroupId: 'string',
      browserInstanceGroupName: 'string',
      cloudBrowserName: 'string',
      excludedUserGroupIds: { 'type': 'array', 'itemType': 'string' },
      officeSiteId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListBrowserInstanceGroupRequestTag },
      tier: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.excludedUserGroupIds)) {
      $dara.Model.validateArray(this.excludedUserGroupIds);
    }
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

