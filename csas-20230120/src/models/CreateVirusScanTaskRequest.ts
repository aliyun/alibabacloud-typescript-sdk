// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVirusScanTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The task expiration time, in seconds-level UNIX timestamp. After this time, endpoints no longer pull and execute this task. If this parameter is not specified or the specified time is earlier than the current time, the value defaults to the current time plus 24 hours.
   * 
   * @example
   * 1786377600
   */
  endTime?: number;
  /**
   * @remarks
   * The action to take on high-risk virus files. Valid values:
   * - **Quarantine**: quarantine quarantined file.
   * - **Notify**: report an alert only without taking action on quarantined file.
   * 
   * This parameter is required.
   * 
   * @example
   * Quarantine
   */
  highRiskOperation?: string;
  /**
   * @remarks
   * The action to take on low-risk virus files. Valid values:
   * - **Quarantine**: quarantine quarantined file.
   * - **Notify**: report an alert only without taking action on quarantined file.
   * - **None**: take no action.
   * 
   * This parameter is required.
   * 
   * @example
   * None
   */
  lowRiskOperation?: string;
  /**
   * @remarks
   * The matching mode for the effective scope. Valid values:
   * - **UserGroupAll**: applies to all users under the current Alibaba Cloud account.
   * - **UserGroupNormal**: applies only to users in specified user groups. UserGroupIds is required when this value is specified.
   * 
   * This parameter is required.
   * 
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @remarks
   * The maximum percentage of endpoint CPU usage during scanning. Valid values: 0 to 100. If this parameter is not specified or is set to 0, the default value is determined by PerformanceMode: 50 for SecurityFirst, 30 for Balance, and 15 for ExperienceFirst.
   * 
   * @example
   * 30
   */
  maxCpuUsage?: number;
  /**
   * @remarks
   * The action to take on medium-risk virus files. Valid values:
   * - **Quarantine**: quarantine quarantined file.
   * - **Notify**: report an alert only without taking action on quarantined file.
   * 
   * This parameter is required.
   * 
   * @example
   * Notify
   */
  midRiskOperation?: string;
  /**
   * @remarks
   * The scan performance pattern. Valid values:
   * - **SecurityFirst**: security first. The default CPU usage limit is 50%.
   * - **Balance**: balanced. The default CPU usage limit is 30%.
   * - **ExperienceFirst**: experience first. The default CPU usage limit is 15%.
   * 
   * This parameter is required.
   * 
   * @example
   * Balance
   */
  performanceMode?: string;
  /**
   * @remarks
   * The scan path scope. Valid values:
   * - **Quick**: quick scan. Only system critical directories and common risk locations are scanned.
   * - **Full**: full disk scan.
   * - **Custom**: custom path scan. ScanPath is required when this value is specified.
   * 
   * This parameter is required.
   * 
   * @example
   * Quick
   */
  scanMode?: string;
  /**
   * @remarks
   * The collection of custom scan paths. This parameter is required when ScanMode is set to Custom and cannot be specified when ScanMode is set to Quick or Full. A maximum of 100 paths can be specified. Duplicate values are not allowed.
   */
  scanPath?: string[];
  /**
   * @remarks
   * The collection of virus types to be handled in this scan. At least one type must be specified. Duplicate values are not allowed.
   * 
   * This parameter is required.
   */
  scanTargets?: string[];
  /**
   * @remarks
   * The task description. The description can be up to 128 characters in length and can contain Chinese characters, uppercase and lowercase letters, digits, spaces, periods (.), commas (,), semicolons (;), forward slashes (/), at signs (@), hyphens (-), and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * Full scan for R&D department
   */
  taskDescription?: string;
  /**
   * @remarks
   * The collection of user group IDs to which the task applies. This parameter is required when MatchMode is set to UserGroupNormal and cannot be specified when MatchMode is set to UserGroupAll. At least 1 and at most 100 IDs can be specified. Duplicate values are not allowed.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The list of exempt users. Users in this list do not execute this scan task. A maximum of 1000 users can be specified. Duplicate values are not allowed.
   */
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      highRiskOperation: 'HighRiskOperation',
      lowRiskOperation: 'LowRiskOperation',
      matchMode: 'MatchMode',
      maxCpuUsage: 'MaxCpuUsage',
      midRiskOperation: 'MidRiskOperation',
      performanceMode: 'PerformanceMode',
      scanMode: 'ScanMode',
      scanPath: 'ScanPath',
      scanTargets: 'ScanTargets',
      taskDescription: 'TaskDescription',
      userGroupIds: 'UserGroupIds',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      highRiskOperation: 'string',
      lowRiskOperation: 'string',
      matchMode: 'string',
      maxCpuUsage: 'number',
      midRiskOperation: 'string',
      performanceMode: 'string',
      scanMode: 'string',
      scanPath: { 'type': 'array', 'itemType': 'string' },
      scanTargets: { 'type': 'array', 'itemType': 'string' },
      taskDescription: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      whitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.scanPath)) {
      $dara.Model.validateArray(this.scanPath);
    }
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

