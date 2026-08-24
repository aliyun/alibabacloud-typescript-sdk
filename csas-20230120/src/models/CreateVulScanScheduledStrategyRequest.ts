// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVulScanScheduledStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The matching mode for the effective scope. Valid values:
   * - **UserGroupAll**: The policy takes effect for all users under the current Alibaba Cloud account.
   * - **UserGroupNormal**: The policy takes effect only for users in specified user groups. In this case, UserGroupIds is required.
   * 
   * This parameter is required.
   * 
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @remarks
   * The policy priority. A smaller value indicates a higher priority. Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The start hour during which the scan can be triggered. The value is an integer hour. Valid values: 0 to 23, inclusive. This field is not a timestamp.
   * 
   * @example
   * 1
   */
  scanBeginTime?: string;
  /**
   * @remarks
   * The end hour during which the scan can be triggered. The value is an integer hour. Valid values: 1 to 24, exclusive of the specified hour. The value must be greater than ScanBeginTime. This field is not a timestamp.
   * 
   * @example
   * 6
   */
  scanEndTime?: string;
  /**
   * @remarks
   * The unit of the trigger cycle. Valid values:
   * - **day**: by day.
   * - **week**: by week.
   * 
   * @example
   * week
   */
  scanFrequency?: string;
  /**
   * @remarks
   * The interval number of the trigger cycle, which determines the trigger cycle together with ScanFrequency. Valid values: 1 to 30. For example, if ScanFrequency is set to week and ScanInterval is set to 1, the scan is triggered once a week.
   * 
   * @example
   * 1
   */
  scanInterval?: string;
  /**
   * @remarks
   * The enabling status. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The policy description.
   * 
   * @example
   * Execute vulnerability scanning on R&D department endpoints every Sunday at midnight
   */
  strategyDescription?: string;
  /**
   * @remarks
   * The policy name. The name can be up to 128 characters in length and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), and hyphens (-). Spaces are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * Weekly_Vulnerability_Scanning_RD_Dept
   */
  strategyName?: string;
  /**
   * @remarks
   * The IDs of the user groups for which the policy takes effect. This parameter is required when MatchMode is set to UserGroupNormal and must not be specified when MatchMode is set to UserGroupAll. The list must contain at least 1 and at most 100 entries. Duplicate entries are not allowed.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The list of exempt users. Users in this list are excluded from the scan of this policy. The list can contain up to 1000 entries. Duplicate entries are not allowed.
   */
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      matchMode: 'MatchMode',
      priority: 'Priority',
      scanBeginTime: 'ScanBeginTime',
      scanEndTime: 'ScanEndTime',
      scanFrequency: 'ScanFrequency',
      scanInterval: 'ScanInterval',
      status: 'Status',
      strategyDescription: 'StrategyDescription',
      strategyName: 'StrategyName',
      userGroupIds: 'UserGroupIds',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchMode: 'string',
      priority: 'number',
      scanBeginTime: 'string',
      scanEndTime: 'string',
      scanFrequency: 'string',
      scanInterval: 'string',
      status: 'string',
      strategyDescription: 'string',
      strategyName: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      whitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    if(Array.isArray(this.whitelist)) {
      $dara.Model.validateArray(this.whitelist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

