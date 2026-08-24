// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAntiVirusRealTimeDefenceStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The action to take on high-risk virus files. Valid values:
   * - **Quarantine**: Quarantines quarantined file.
   * - **Notify**: Reports an alert only without taking action on quarantined file. Quarantine is returned if no real-time defense policy has been configured.
   * 
   * @example
   * Quarantine
   */
  highRiskOperation?: string;
  /**
   * @remarks
   * The action to take on low-risk virus files. Valid values:
   * - **Quarantine**: Quarantines quarantined file.
   * - **Notify**: Reports an alert only without taking action on quarantined file.
   * - **None**: Takes no action. None is returned if no real-time defense policy has been configured.
   * 
   * @example
   * None
   */
  lowRiskOperation?: string;
  /**
   * @remarks
   * The matching mode for the effective scope. Valid values:
   * - **UserGroupAll**: Applies to all users under the current Alibaba Cloud account.
   * - **UserGroupNormal**: Applies only to users in specified user groups. An empty string is returned if no real-time defense policy has been configured.
   * 
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @remarks
   * The action to take on medium-risk virus files. Valid values:
   * - **Quarantine**: Quarantines quarantined file.
   * - **Notify**: Reports an alert only without taking action on quarantined file. Notify is returned if no real-time defense policy has been configured.
   * 
   * @example
   * Notify
   */
  midRiskOperation?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3D7EC0AF-DB2A-5D9C-90EC-F090A6BAAEA7
   */
  requestId?: string;
  /**
   * @remarks
   * The collection of virus types to be handled by real-time defense. An empty list is returned if no real-time defense policy has been configured.
   */
  scanTargets?: string[];
  /**
   * @remarks
   * The enabling status. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled. This value is returned if no real-time defense policy has been configured.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The real-time defense policy ID. An empty string is returned if no real-time defense policy has been configured.
   * 
   * @example
   * av-rtd-2f5c8e1a7b94****
   */
  strategyId?: string;
  /**
   * @remarks
   * The collection of user group IDs to which the policy applies. An empty list is returned when MatchMode is set to UserGroupAll.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The exception user list. Users in this list are excluded from real-time defense. An empty list is returned if no exception users are configured.
   */
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      highRiskOperation: 'HighRiskOperation',
      lowRiskOperation: 'LowRiskOperation',
      matchMode: 'MatchMode',
      midRiskOperation: 'MidRiskOperation',
      requestId: 'RequestId',
      scanTargets: 'ScanTargets',
      status: 'Status',
      strategyId: 'StrategyId',
      userGroupIds: 'UserGroupIds',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      highRiskOperation: 'string',
      lowRiskOperation: 'string',
      matchMode: 'string',
      midRiskOperation: 'string',
      requestId: 'string',
      scanTargets: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      strategyId: 'string',
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

