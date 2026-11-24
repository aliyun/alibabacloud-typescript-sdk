// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSoftwarelibDistributeTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the terminal devices. Duplicate IDs are not allowed. A single ID can be up to 1,000 characters in length. This parameter is required when MatchMode is set to DevTagNormal. If MatchMode is set to other values, this parameter must not be specified. Otherwise, the request is rejected.
   */
  devTags?: string[];
  /**
   * @remarks
   * The IDs of the device groups. Duplicate IDs are not allowed. This parameter is required when MatchMode is set to DeviceGroupNormal. If MatchMode is set to other values, this parameter must not be specified. Otherwise, the request is rejected. You can obtain the values by calling the [ListDeviceGroups](~~ListDeviceGroups~~) operation.
   */
  deviceGroupIds?: string[];
  /**
   * @remarks
   * The execution mode. Valid values:
   * - **Once**: Immediate execution.
   * - **Schedule**: Scheduled execution.
   * 
   * @example
   * Once
   */
  executeMode?: string;
  /**
   * @remarks
   * The scheduled execution parameters. The value is a JSON-formatted string.
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
   * The execution cycle of the task. The value is a JSON-formatted string. The validType field specifies the cycle type. Valid values:
   * - **Once**: Single execution.
   * - **Interval**: Interval-based execution.
   * - **Weekly**: Weekly execution.
   * 
   * @example
   * {"validType":"Once"}
   */
  executePeriod?: string;
  /**
   * @remarks
   * The expiration type. Valid values:
   * - **Expire**: The task expires at the time specified by GmtExpired.
   * - **Never**: The task never expires.
   * 
   * @example
   * Expire
   */
  expireMode?: string;
  /**
   * @remarks
   * The expiration time of the task. The value is a UNIX timestamp in milliseconds. This parameter takes effect only when ExpireMode is set to Expire.
   * 
   * @example
   * 1786945543000
   */
  gmtExpired?: string;
  /**
   * @remarks
   * The target type for policy matching. Valid values:
   * - **UserGroupAll**: All users.
   * - **UserGroupNormal**: Specified user groups.
   * - **DevTagNormal**: Specified devices.
   * - **DeviceGroupNormal**: Specified device groups.
   * - **DevTagAll**: All devices.
   * - **None**: Not configured.
   * 
   * @example
   * UserGroupAll
   */
  matchMode?: string;
  /**
   * @remarks
   * The name of the task. The name must be 1 to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test_task
   */
  name?: string;
  /**
   * @remarks
   * The number of retries after the task fails.
   * 
   * @example
   * 5
   */
  retryTimes?: string;
  /**
   * @remarks
   * The name of the administrator account used to execute the task in Windows. The name can be up to 128 characters in length.
   * 
   * @example
   * admin
   */
  runAsAccount?: string;
  /**
   * @remarks
   * The ID of the software in the software library. You can obtain the value by calling the [ListSoftwarelibSoftware](~~ListSoftwarelibSoftware~~) operation.
   * 
   * @example
   * softwarelib-software-9f9de7b5a16f****
   */
  softwareId?: string;
  /**
   * @remarks
   * The name of the software. The name can be up to 128 characters in length.
   * 
   * @example
   * test software
   */
  softwareName?: string;
  /**
   * @remarks
   * The operating system to which the task applies. Only a single value is supported. Valid values:
   * - **Windows**: Windows.
   * - **Mac(Apple)**: macOS on Apple silicon.
   * - **Mac(Intel)**: macOS on Intel processors.
   * 
   * @example
   * Mac(Apple)
   */
  supportOs?: string;
  /**
   * @remarks
   * The type of the task. Valid values:
   * - **server**: Tasks delivered from the console.
   * - **client**: Tasks initiated by the client.
   * 
   * @example
   * server
   */
  taskType?: string;
  /**
   * @remarks
   * The timeout period for task execution. Unit: seconds. For example, a value of 3600 indicates 1 hour.
   * 
   * @example
   * 3600
   */
  timeout?: string;
  /**
   * @remarks
   * The IDs of the user groups. Duplicate IDs are not allowed. This parameter is required and must contain at least one ID when MatchMode is set to UserGroupNormal. If MatchMode is set to other values, this parameter must not be specified. Otherwise, the request is rejected. You can obtain the values by calling the [ListUserGroups](~~ListUserGroups~~) operation.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The ID of the software version to be distributed. When you create a software version, you can obtain the value from the VersionId response parameter of the [CreateSoftwarelibVersion](~~CreateSoftwarelibVersion~~) operation. For more information about how to view and manage software versions, see [Software management](https://www.alibabacloud.com/help/en/sase/user-guide/software-management).
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

