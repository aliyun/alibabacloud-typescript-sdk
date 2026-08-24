// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVulScanScheduledStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The matching mode for the effective scope. Valid values:
   * - **UserGroupAll**: The policy takes effect on all users under the current Alibaba Cloud account.
   * - **UserGroupNormal**: The policy takes effect only on users in specified user groups. In this case, UserGroupIds is required.
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
   * The end hour during which the scan can be triggered. The value is an integer hour. Valid values: 1 to 24, exclusive. The value must be greater than ScanBeginTime. This field is not a timestamp.
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
   * The interval number of the trigger cycle. This parameter works together with ScanFrequency to determine the trigger cycle. Valid values: 1 to 30. For example, if ScanFrequency is set to week and ScanInterval is set to 1, the scan is triggered once a week.
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
   * The ID of the vulnerability scheduled scan policy to modify. You can obtain the value from the following operations:
   * - [ListVulScanScheduledStrategies](~~ListVulScanScheduledStrategies~~): Lists vulnerability scheduled scan policies.
   * - [CreateVulScanScheduledStrategy](~~CreateVulScanScheduledStrategy~~): Creates a vulnerability scheduled scan policy.
   * 
   * This parameter is required.
   * 
   * @example
   * vul-scan-scheduled-strategy-8a3f6c2e91b7****
   */
  strategyId?: string;
  /**
   * @remarks
   * The policy name. The name can be up to 128 characters in length and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), and hyphens (-). Spaces are not supported.
   * 
   * @example
   * Weekly vulnerability scanning for R&D department
   */
  strategyName?: string;
  /**
   * @remarks
   * The collection of user group IDs for the effective scope. This parameter is required when the effective scope is UserGroupNormal and must not be specified when the effective scope is UserGroupAll. The collection must contain at least 1 and at most 100 entries, and duplicates are not allowed. The collection you specify fully replaces the existing user groups of the policy.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The list of exempted users. Users in this list are not scanned by this policy. The list can contain up to 1000 entries and duplicates are not allowed. This parameter performs a full overwrite. The list you specify replaces the existing list of the policy.
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
      strategyId: 'StrategyId',
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
      strategyId: 'string',
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

