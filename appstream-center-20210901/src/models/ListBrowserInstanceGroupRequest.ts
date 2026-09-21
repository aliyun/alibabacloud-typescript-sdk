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
   * The browser group set ID for exact match queries of active members in the set.
   * 
   * @example
   * set-3jm9d0abc00example
   */
  appInstanceGroupSetId?: string;
  /**
   * @remarks
   * Filters browser groups by business region.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The cloud browser group ID for exact match queries.
   * 
   * @example
   * big-0c7loey7fzjq****
   */
  browserInstanceGroupId?: string;
  /**
   * @remarks
   * The browser group name. Fuzzy match is supported.
   * 
   * @example
   * Office
   */
  browserInstanceGroupName?: string;
  /**
   * @remarks
   * Performs a contains match by browser group name or ID.
   * 
   * @example
   * Office
   */
  cloudBrowserName?: string;
  /**
   * @remarks
   * Excludes browser groups that are authorized to the specified user groups.
   * 
   * **if can be null:**
   * true
   */
  excludedUserGroupIds?: string[];
  /**
   * @remarks
   * Filters browser groups by office network ID.
   * 
   * @example
   * cn-hangzhou+dir-843734****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The page number, starting from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters by browser group status.
   * 
   * **Limit:** Only one status value can be specified at a time.
   */
  status?: string[];
  /**
   * @remarks
   * The tag filter parameters. This parameter is not supported in customer-facing scenarios. Do not specify this parameter.
   */
  tag?: ListBrowserInstanceGroupRequestTag[];
  /**
   * @remarks
   * Filters by version of the browser.
   * 
   * - `Basic`: Basic Edition.
   * - `Pro`: Premium Edition.
   * 
   * Use `Pro` to query MAU browser groups.
   * 
   * @example
   * Pro
   */
  tier?: string;
  /**
   * @remarks
   * Filters by authorized user group IDs.
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

