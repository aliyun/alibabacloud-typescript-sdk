// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVulScanScheduledStrategyResponseBodyCustomMatchGroup extends $dara.Model {
  /**
   * @remarks
   * The organizational structure nodes.
   */
  group?: string[];
  /**
   * @remarks
   * The ID of the identity source.
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

export class UpdateVulScanScheduledStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the policy was created. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1786291200
   */
  createTime?: number;
  /**
   * @remarks
   * The effective scope specified by organizational structure. If no organizational structure is configured, an empty list is returned.
   */
  customMatchGroup?: UpdateVulScanScheduledStrategyResponseBodyCustomMatchGroup[];
  /**
   * @remarks
   * The time when the policy last triggered a scan. The value is a UNIX timestamp in seconds. If the policy has never triggered a scan, 0 is returned.
   * 
   * @example
   * 1786291200
   */
  lastTriggerTime?: number;
  /**
   * @remarks
   * The matching mode for the effective scope. Valid values:
   * - **UserGroupAll**: Applies to all users under the current Alibaba Cloud account.
   * - **UserGroupNormal**: Applies only to users in specified user groups.
   * 
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @remarks
   * The IDs of the user groups to which the policy applies. If MatchMode is set to UserGroupAll, an empty list is returned.
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
   * The ID of the request.
   * 
   * @example
   * 3D7EC0AF-DB2A-5D9C-90EC-F090A6BAAEA7
   */
  requestId?: string;
  /**
   * @remarks
   * The start hour when a scan can be triggered. The value must be an integer on the hour. Valid values: 0 to 23, inclusive. This field is not a timestamp.
   * 
   * @example
   * 1
   */
  scanBeginTime?: number;
  /**
   * @remarks
   * The end hour when a scan can be triggered. The value must be an integer on the hour. Valid values: 1 to 24, exclusive. The value must be greater than the value of ScanBeginTime. This field is not a timestamp.
   * 
   * @example
   * 6
   */
  scanEndTime?: number;
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
   * Execute vulnerability scanning on R&D department endpoints every Sunday morning
   */
  strategyDescription?: string;
  /**
   * @remarks
   * The ID of the scheduled vulnerability scan policy.
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
   * Weekly vulnerability scanning for the R&D department
   */
  strategyName?: string;
  /**
   * @remarks
   * The user whitelist. Users in the whitelist are excluded from the scan of this policy. If no whitelist is configured, an empty list is returned.
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
      customMatchGroup: { 'type': 'array', 'itemType': UpdateVulScanScheduledStrategyResponseBodyCustomMatchGroup },
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

