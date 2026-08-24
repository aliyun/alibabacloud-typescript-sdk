// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVulScanScheduledStrategyResponseBodyCustomMatchGroup extends $dara.Model {
  /**
   * @remarks
   * The collection of organizational structure nodes.
   */
  group?: string[];
  /**
   * @remarks
   * The identity provider ID.
   * 
   * @example
   * idp-7c3f9a2e5b18****
   */
  idpId?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      idpId: 'IdpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: { 'type': 'array', 'itemType': 'string' },
      idpId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.group)) {
      $dara.Model.validateArray(this.group);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulScanScheduledStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the policy was created, in seconds-level UNIX timestamp.
   * 
   * @example
   * 1786291200
   */
  createTime?: number;
  /**
   * @remarks
   * The effective scope specified by organizational structure. An empty list is returned if the scope is not configured by organizational structure.
   */
  customMatchGroup?: GetVulScanScheduledStrategyResponseBodyCustomMatchGroup[];
  /**
   * @remarks
   * The time when the policy last triggered a scan, in seconds-level UNIX timestamp. The value 0 is returned if the policy has never been triggered.
   * 
   * @example
   * 1786291200
   */
  lastTriggerTime?: number;
  /**
   * @remarks
   * The matching mode of the effective scope. Valid values:
   * - **UserGroupAll**: The policy takes effect on all users under the current Alibaba Cloud account.
   * - **UserGroupNormal**: The policy takes effect only on users in specified user groups.
   * 
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @remarks
   * The collection of user group IDs that the policy takes effect on. An empty list is returned when MatchMode is set to UserGroupAll.
   */
  matchTargetIds?: string[];
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
   * The request ID.
   * 
   * @example
   * 3D7EC0AF-DB2A-5D9C-90EC-F090A6BAAEA7
   */
  requestId?: string;
  /**
   * @remarks
   * The start hour during which the scan can be triggered. The value is a whole hour number. Valid values: 0 to 23, inclusive. This field is not a timestamp.
   * 
   * @example
   * 1
   */
  scanBeginTime?: number;
  /**
   * @remarks
   * The end hour during which the scan can be triggered. The value is a whole hour number. Valid values: 1 to 24, exclusive of the specified hour, and must be greater than ScanBeginTime. This field is not a timestamp.
   * 
   * @example
   * 6
   */
  scanEndTime?: number;
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
   * The interval number of the trigger cycle, which together with ScanFrequency determines the trigger cycle. Valid values: 1 to 30. For example, if ScanFrequency is set to week and ScanInterval is set to 1, the scan is triggered once a week.
   * 
   * @example
   * 1
   */
  scanInterval?: number;
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
   * The vulnerability scheduled scan policy ID.
   * 
   * @example
   * vul-scan-scheduled-strategy-8a3f6c2e91b7****
   */
  strategyId?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * Weekly vulnerability scanning for R&D Department
   */
  strategyName?: string;
  /**
   * @remarks
   * The list of exempted users. Users in this list are excluded from the scan of this policy. An empty list is returned if no exemption is configured.
   */
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      customMatchGroup: 'CustomMatchGroup',
      lastTriggerTime: 'LastTriggerTime',
      matchMode: 'MatchMode',
      matchTargetIds: 'MatchTargetIds',
      priority: 'Priority',
      requestId: 'RequestId',
      scanBeginTime: 'ScanBeginTime',
      scanEndTime: 'ScanEndTime',
      scanFrequency: 'ScanFrequency',
      scanInterval: 'ScanInterval',
      status: 'Status',
      strategyDescription: 'StrategyDescription',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      customMatchGroup: { 'type': 'array', 'itemType': GetVulScanScheduledStrategyResponseBodyCustomMatchGroup },
      lastTriggerTime: 'number',
      matchMode: 'string',
      matchTargetIds: { 'type': 'array', 'itemType': 'string' },
      priority: 'number',
      requestId: 'string',
      scanBeginTime: 'number',
      scanEndTime: 'number',
      scanFrequency: 'string',
      scanInterval: 'number',
      status: 'string',
      strategyDescription: 'string',
      strategyId: 'string',
      strategyName: 'string',
      whitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.customMatchGroup)) {
      $dara.Model.validateArray(this.customMatchGroup);
    }
    if(Array.isArray(this.matchTargetIds)) {
      $dara.Model.validateArray(this.matchTargetIds);
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

