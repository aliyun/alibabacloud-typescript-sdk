// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAntiVirusRealTimeDefenceStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The action to take on high-risk virus files. Required when configuring the real-time defense policy for the first time. Valid values:
   * - **Quarantine**: Quarantines quarantined file.
   * - **Notify**: Reports an alert only without taking action on quarantined file.
   * 
   * @example
   * Quarantine
   */
  highRiskOperation?: string;
  /**
   * @remarks
   * The action to take on low-risk virus files. Required when configuring the real-time defense policy for the first time. Valid values:
   * - **Quarantine**: Quarantines quarantined file.
   * - **Notify**: Reports an alert only without taking action on quarantined file.
   * - **None**: Takes no action.
   * 
   * @example
   * None
   */
  lowRiskOperation?: string;
  /**
   * @remarks
   * The matching mode for the effective scope. Required when configuring the real-time defense policy for the first time. Valid values:
   * - **UserGroupAll**: Applies to all users under the current Alibaba Cloud account.
   * - **UserGroupNormal**: Applies only to users in specified user groups. UserGroupIds is required in this case.
   * 
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @remarks
   * The maximum percentage of endpoint CPU that real-time defense can consume. Valid values: 0 to 100. When configuring for the first time, the value is stored as 0 but takes effect as 30.
   * 
   * @example
   * 30
   */
  maxCpuUsage?: number;
  /**
   * @remarks
   * The action to take on medium-risk virus files. Required when configuring the real-time defense policy for the first time. Valid values:
   * - **Quarantine**: Quarantines quarantined file.
   * - **Notify**: Reports an alert only without taking action on quarantined file.
   * 
   * @example
   * Notify
   */
  midRiskOperation?: string;
  /**
   * @remarks
   * The collection of virus types to be handled by real-time defense. Duplicates are not allowed. Required when configuring the real-time defense policy for the first time. When the policy already exists, this parameter performs a full replacement. The collection you pass in replaces the existing configuration.
   */
  scanTargets?: string[];
  /**
   * @remarks
   * The enabling status. Required when configuring the real-time defense policy for the first time. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The collection of user group IDs to which the policy applies. Required when MatchMode is set to UserGroupNormal. Not allowed when MatchMode is set to UserGroupAll. At least 1 and at most 100 entries are allowed. Duplicates are not allowed. When MatchMode is UserGroupNormal, you must pass in the complete user group collection on every call, even when modifying only other parameters.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The exception user list. Users in this list are excluded from real-time defense. A maximum of 1000 entries are allowed. Duplicates are not allowed. This parameter performs a full replacement. The list you pass in replaces the existing list.
   */
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      highRiskOperation: 'HighRiskOperation',
      lowRiskOperation: 'LowRiskOperation',
      matchMode: 'MatchMode',
      maxCpuUsage: 'MaxCpuUsage',
      midRiskOperation: 'MidRiskOperation',
      scanTargets: 'ScanTargets',
      status: 'Status',
      userGroupIds: 'UserGroupIds',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      highRiskOperation: 'string',
      lowRiskOperation: 'string',
      matchMode: 'string',
      maxCpuUsage: 'number',
      midRiskOperation: 'string',
      scanTargets: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      whitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.scanTargets)) {
      $dara.Model.validateArray(this.scanTargets);
    }
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

