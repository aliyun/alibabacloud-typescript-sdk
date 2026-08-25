// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSoftwarelibDistributeTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The collection of terminal device IDs. Duplicate values are not allowed. Each ID must not exceed 1000 characters in length. This parameter is required when MatchMode is set to DevTagNormal. This parameter is not allowed when MatchMode is set to other values. Otherwise, the request is rejected.
   */
  devTags?: string[];
  /**
   * @remarks
   * The collection of device group IDs. Duplicate values are not allowed. This parameter is required when MatchMode is set to DeviceGroupNormal. This parameter is not allowed when MatchMode is set to other values. Otherwise, the request is rejected. You can call [ListDeviceGroups](~~ListDeviceGroups~~) to obtain the values.
   */
  deviceGroupIds?: string[];
  /**
   * @remarks
   * The execution mode. Valid values:
   * - **Once**: immediate execution.
   * - **Schedule**: scheduled execution.
   * 
   * @example
   * Once
   */
  executeMode?: string;
  /**
   * @remarks
   * The scheduling execution parameters in JSON format.
   * 
   * @example
   * {
   *     "template_code": "software_install",
   *     "software_url": "https://****",
   *     "md5": "87ccfcce1956e9f2385137f690d7fb64",
   *     "install_check_switch": false,
   *     "software_name": "",
   *     "software_name_en": "",
   *     "speed_limit": 0,
   *     "software_id": "softwarelib-software-18a2417da2779e65"
   * }
   */
  executeParameters?: string;
  /**
   * @remarks
   * The task execution cycle in JSON format. The validType field specifies the cycle type. Valid values:
   * - **Once**: one-time execution.
   * - **Interval**: execution at intervals.
   * - **Weekly**: weekly execution.
   * 
   * @example
   * {"validType":"Once"}
   */
  executePeriod?: string;
  /**
   * @remarks
   * The expiration type. Valid values:
   * - **Expire**: expires at the time specified by GmtExpired.
   * - **Never**: never expires.
   * 
   * @example
   * Expire
   */
  expireMode?: string;
  /**
   * @remarks
   * The task expiration time as a millisecond-level UNIX timestamp. This parameter takes effect only when ExpireMode is set to Expire.
   * 
   * @example
   * 1786945543000
   */
  gmtExpired?: string;
  /**
   * @remarks
   * The policy matching target type. Valid values:
   * - **UserGroupAll**: all users.
   * - **UserGroupNormal**: specified user groups.
   * - **DevTagNormal**: specified devices.
   * - **DeviceGroupNormal**: specified device groups.
   * - **DevTagAll**: all devices.
   * - **None**: not configured.
   * 
   * @example
   * UserGroupAll
   */
  matchMode?: string;
  /**
   * @remarks
   * The task name. The name must be 1 to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test_task
   */
  name?: string;
  /**
   * @remarks
   * The number of retries after a task failure.
   * 
   * @example
   * 5
   */
  retryTimes?: string;
  /**
   * @remarks
   * The administrator account name used to run the task on Windows. The name must not exceed 128 characters in length.
   * 
   * @example
   * admin
   */
  runAsAccount?: string;
  /**
   * @remarks
   * The software ID in the software library. You can call [ListSoftwarelibSoftware](~~ListSoftwarelibSoftware~~) to obtain the value.
   * 
   * @example
   * softwarelib-software-9f9de7b5a16f****
   */
  softwareId?: string;
  /**
   * @remarks
   * The software name. The name must not exceed 128 characters in length.
   * 
   * @example
   * test software
   */
  softwareName?: string;
  /**
   * @remarks
   * The operating system to which the task applies. Only a single value is supported. Valid values:
   * - **Windows**: Windows.
   * - **Mac(Apple)**: macOS with Apple silicon.
   * - **Mac(Intel)**: macOS with Intel processors.
   * 
   * @example
   * Mac(Apple)
   */
  supportOs?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * - **server**: a task delivered from the console.
   * - **client**: a task initiated from the client.
   * 
   * @example
   * server
   */
  taskType?: string;
  /**
   * @remarks
   * The task execution timeout period. Unit: seconds. For example, a value of 3600 indicates 1 hour.
   * 
   * @example
   * 3600
   */
  timeout?: string;
  /**
   * @remarks
   * The collection of user group IDs. Duplicate values are not allowed. This parameter is required and must contain at least one value when MatchMode is set to UserGroupNormal. This parameter is not allowed when MatchMode is set to other values. Otherwise, the request is rejected. You can call [ListUserGroups](~~ListUserGroups~~) to obtain the values.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The ID of the software version to distribute. You can call [ListSoftwarelibVersion](~~ListSoftwarelibVersion~~) to obtain the value.
   * 
   * @example
   * softwarelib-version-30925615d2e4****
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      devTags: 'DevTags',
      deviceGroupIds: 'DeviceGroupIds',
      executeMode: 'ExecuteMode',
      executeParameters: 'ExecuteParameters',
      executePeriod: 'ExecutePeriod',
      expireMode: 'ExpireMode',
      gmtExpired: 'GmtExpired',
      matchMode: 'MatchMode',
      name: 'Name',
      retryTimes: 'RetryTimes',
      runAsAccount: 'RunAsAccount',
      softwareId: 'SoftwareId',
      softwareName: 'SoftwareName',
      supportOs: 'SupportOs',
      taskType: 'TaskType',
      timeout: 'Timeout',
      userGroupIds: 'UserGroupIds',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devTags: { 'type': 'array', 'itemType': 'string' },
      deviceGroupIds: { 'type': 'array', 'itemType': 'string' },
      executeMode: 'string',
      executeParameters: 'string',
      executePeriod: 'string',
      expireMode: 'string',
      gmtExpired: 'string',
      matchMode: 'string',
      name: 'string',
      retryTimes: 'string',
      runAsAccount: 'string',
      softwareId: 'string',
      softwareName: 'string',
      supportOs: 'string',
      taskType: 'string',
      timeout: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      versionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.devTags)) {
      $dara.Model.validateArray(this.devTags);
    }
    if(Array.isArray(this.deviceGroupIds)) {
      $dara.Model.validateArray(this.deviceGroupIds);
    }
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

