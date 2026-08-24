// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirusScanScheduledStrategiesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in paging. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page in paging. Valid values: 1 to 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The collection of scan performance modes. Duplicate values are not allowed.
   */
  performanceModes?: string[];
  /**
   * @remarks
   * The collection of scan path scopes. Duplicate values are not allowed.
   */
  scanModes?: string[];
  /**
   * @remarks
   * Filters policies by enabled status. Valid values:
   * - **Enabled**: enabled.
   * - **Disabled**: disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The collection of virus scheduled scan policy IDs. Duplicate values are not allowed.
   */
  strategyIds?: string[];
  /**
   * @remarks
   * The policy name. Fuzzy match is supported. The name can be up to 128 characters in length and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * Weekly_Scan_DevTeam
   */
  strategyName?: string;
  /**
   * @remarks
   * The user group ID. This parameter is used to filter policies whose effective scope includes the specified user group. You can obtain the value from:
   * - [ListUserGroups](~~ListUserGroups~~): lists user groups.
   * 
   * @example
   * usergroup-9d4f2a7b3c1e****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      performanceModes: 'PerformanceModes',
      scanModes: 'ScanModes',
      status: 'Status',
      strategyIds: 'StrategyIds',
      strategyName: 'StrategyName',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      performanceModes: { 'type': 'array', 'itemType': 'string' },
      scanModes: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      strategyIds: { 'type': 'array', 'itemType': 'string' },
      strategyName: 'string',
      userGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.performanceModes)) {
      $dara.Model.validateArray(this.performanceModes);
    }
    if(Array.isArray(this.scanModes)) {
      $dara.Model.validateArray(this.scanModes);
    }
    if(Array.isArray(this.strategyIds)) {
      $dara.Model.validateArray(this.strategyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

