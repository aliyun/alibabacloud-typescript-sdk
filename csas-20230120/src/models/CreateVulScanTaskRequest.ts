// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVulScanTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The task expiration time, in seconds-level UNIX timestamp. After this time is reached, endpoints no longer pull and execute this task, and incomplete scans are not continued.
   * 
   * @example
   * 1786291200
   */
  endTimestamp?: number;
  /**
   * @remarks
   * The matching mode for the effective scope. Valid values:
   * 
   * - **UserGroupAll**: Takes effect for all users under the current Alibaba Cloud account.
   * - **UserGroupNormal**: Takes effect only for users in specified user groups. In this case, UserGroupIds is required.
   * 
   * This parameter is required.
   * 
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @remarks
   * The task description.
   * 
   * @example
   * Execute a vulnerability scanning on R&D department endpoints
   */
  taskDescription?: string;
  /**
   * @remarks
   * The task name. The name can be up to 128 characters in length and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), and hyphens (-). Spaces are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * R&D Department Vulnerability Scanning
   */
  taskName?: string;
  /**
   * @remarks
   * The collection of user group IDs for which the task takes effect. This parameter is required when MatchMode is set to UserGroupNormal and cannot be specified when MatchMode is set to UserGroupAll. The collection must contain at least 1 and at most 100 entries. Duplicate values are not allowed.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The list of exempt usernames. Users in this list are excluded from this scan. The list can contain up to 1000 entries. Duplicate values are not allowed.
   */
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      matchMode: 'MatchMode',
      taskDescription: 'TaskDescription',
      taskName: 'TaskName',
      userGroupIds: 'UserGroupIds',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'number',
      matchMode: 'string',
      taskDescription: 'string',
      taskName: 'string',
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

