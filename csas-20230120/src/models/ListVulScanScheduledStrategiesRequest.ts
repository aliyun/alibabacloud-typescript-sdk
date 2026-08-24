// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVulScanScheduledStrategiesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paging query. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Filters by the matching mode of the effective scope. Valid values:
   * - **UserGroupAll**: Takes effect for all users under the current Alibaba Cloud account.
   * - **UserGroupNormal**: Takes effect only for users in specified user groups.
   * 
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @remarks
   * The number of entries per page in a paging query. Valid values: 1 to 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters by enabled status. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The IDs of scheduled vulnerability scan policies used for filtering. A maximum of 100 IDs can be specified. Duplicate IDs are not allowed.
   */
  strategyIds?: string[];
  /**
   * @remarks
   * The policy name. Fuzzy match is supported. The name can be up to 128 characters in length.
   * 
   * @example
   * Weekly vulnerability scanning for R&D department
   */
  strategyName?: string;
  /**
   * @remarks
   * The user group ID. Used to filter records whose effective scope includes the specified user group. You can obtain the value from the following operation:
   * - [ListUserGroups](~~ListUserGroups~~): lists user groups.
   * 
   * @example
   * usergroup-9d4f2a7b3c1e****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      matchMode: 'MatchMode',
      pageSize: 'PageSize',
      status: 'Status',
      strategyIds: 'StrategyIds',
      strategyName: 'StrategyName',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      matchMode: 'string',
      pageSize: 'number',
      status: 'string',
      strategyIds: { 'type': 'array', 'itemType': 'string' },
      strategyName: 'string',
      userGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.strategyIds)) {
      $dara.Model.validateArray(this.strategyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

