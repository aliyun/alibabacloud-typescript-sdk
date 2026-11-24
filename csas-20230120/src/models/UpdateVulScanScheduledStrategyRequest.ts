// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVulScanScheduledStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The matching mode for the effective scope. Valid values:
   * - **UserGroupAll**: Applies to all users under the current Alibaba Cloud account.
   * - **UserGroupNormal**: Applies only to users in specified user groups. If this value is specified, UserGroupIds is required.
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
   * The start hour when a scan can be triggered. The value must be an integer on the hour. Valid values: 0 to 23, inclusive. This field is not a timestamp.
   * 
   * @example
   * 1
   */
  scanBeginTime?: string;
  /**
   * @remarks
   * The end hour when a scan can be triggered. The value must be an integer on the hour. Valid values: 1 to 24, exclusive. The value must be greater than the value of ScanBeginTime. This field is not a timestamp.
   * 
   * @example
   * 6
   */
  scanEndTime?: string;
  /**
   * @remarks
   * The unit of the trigger cycle. Valid values:
   * - **day**: Day.
   * - **week**: Week.
   * 
   * @example
   * week
   */
  scanFrequency?: string;
  /**
   * @remarks
   * The interval of the trigger cycle. This parameter and ScanFrequency determine the trigger cycle. Valid values: 1 to 30. For example, if ScanFrequency is set to week and ScanInterval is set to 1, a scan is performed once a week.
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
   * Execute vulnerability scanning on R&D department endpoints every Sunday morning
   */
  strategyDescription?: string;
  /**
   * @remarks
   * The ID of the scheduled vulnerability scan policy to be modified. You can obtain the value from the following operations:
   * - [ListVulScanScheduledStrategies](~~ListVulScanScheduledStrategies~~): Queries scheduled vulnerability scan policies.
   * - [CreateVulScanScheduledStrategy](~~CreateVulScanScheduledStrategy~~): Creates a scheduled vulnerability scan policy.
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
   * Weekly vulnerability scanning for the R&D department
   */
  strategyName?: string;
  /**
   * @remarks
   * The IDs of the user groups to which the policy applies. This parameter is required when MatchMode is set to UserGroupNormal and cannot be specified when MatchMode is set to UserGroupAll. You can specify 1 to 100 user group IDs, and the IDs cannot be duplicated. The specified IDs overwrite the existing user groups of the policy.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The user whitelist. Users in the whitelist are excluded from the scan of this policy. The whitelist can contain up to 1,000 users and cannot contain duplicates. This parameter overwrites the existing whitelist of the policy.
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

