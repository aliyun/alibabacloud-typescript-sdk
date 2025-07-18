// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDynamicDisposalProcessesResponseBodyDisposalProcessesDeviceBasicInfo extends $dara.Model {
  /**
   * @remarks
   * CPU model.
   * 
   * @example
   * Intel(R) Core(TM) i5-10210U CPU @ 1.60GHz
   */
  cpu?: string;
  /**
   * @remarks
   * Device ID.
   * 
   * @example
   * A84D0AF0-1ACC-02B8-6A07-FC898F71BE09
   */
  devTag?: string;
  /**
   * @remarks
   * Device operating system type. Values:
   * - **Windows**：Windows system.
   * - **macOS**：macOS system.
   * - **Linux**：Linux system.
   * - **Android**：Android system.
   * - **iOS**：iOS system.
   * - **Windows_Wuying**：Wuying cloud desktop system.
   * 
   * @example
   * windows
   */
  devType?: string;
  /**
   * @remarks
   * Device disk model.
   * 
   * @example
   * KXG6AZNV512G TOSHIBA
   */
  disk?: string;
  /**
   * @remarks
   * Device name.
   * 
   * @example
   * DESKTOP-ERLV3AK
   */
  hostname?: string;
  /**
   * @remarks
   * Device MAC address.
   * 
   * @example
   * CE:3B:**:**:FD:FB
   */
  mac?: string;
  /**
   * @remarks
   * Device memory capacity. Unit: GB.
   * 
   * @example
   * 2
   */
  memory?: string;
  /**
   * @remarks
   * Operating system version
   * 
   * @example
   * 1
   */
  osVersion?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      devTag: 'DevTag',
      devType: 'DevType',
      disk: 'Disk',
      hostname: 'Hostname',
      mac: 'Mac',
      memory: 'Memory',
      osVersion: 'OsVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'string',
      devTag: 'string',
      devType: 'string',
      disk: 'string',
      hostname: 'string',
      mac: 'string',
      memory: 'string',
      osVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDynamicDisposalProcessesResponseBodyDisposalProcessesDeviceStatusInfo extends $dara.Model {
  /**
   * @remarks
   * Client version.
   * 
   * @example
   * 4.5.1
   */
  appVersion?: string;
  /**
   * @remarks
   * Department to which the user belongs.
   * 
   * @example
   * IT运维部
   */
  department?: string;
  /**
   * @remarks
   * Office data protection status. Values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * - **Unprovisioned**: Not configured.
   * - **Unauthorized**: Unauthorized.
   * 
   * @example
   * enabled
   */
  dlpStatus?: string;
  /**
   * @remarks
   * Public IP address.
   * 
   * @example
   * 120.26.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * Internet behavior management enablement status.
   * 
   * @example
   * enabled
   */
  laStatus?: string;
  /**
   * @remarks
   * Login status.
   * 
   * @example
   * online
   */
  loginStatus?: string;
  /**
   * @remarks
   * Network access control status. Values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * - **Unprovisioned**: Not configured.
   * 
   * @example
   * enabled
   */
  nacStatus?: string;
  /**
   * @remarks
   * Private IP address.
   * 
   * @example
   * 172.20.XX.XX
   */
  privateIp?: string;
  /**
   * @remarks
   * Unique ID of the SASE user.
   * 
   * @example
   * su_dfsdfsdgasgsgag
   */
  saseUserId?: string;
  /**
   * @remarks
   * Username.
   * 
   * @example
   * test
   */
  username?: string;
  /**
   * @remarks
   * Identified office area name.
   * 
   * @example
   * office
   */
  workshop?: string;
  /**
   * @remarks
   * ZTNA enablement status.
   * 
   * @example
   * enabled
   */
  ztnaStatus?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      department: 'Department',
      dlpStatus: 'DlpStatus',
      internetIp: 'InternetIp',
      laStatus: 'LaStatus',
      loginStatus: 'LoginStatus',
      nacStatus: 'NacStatus',
      privateIp: 'PrivateIp',
      saseUserId: 'SaseUserId',
      username: 'Username',
      workshop: 'Workshop',
      ztnaStatus: 'ZtnaStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      department: 'string',
      dlpStatus: 'string',
      internetIp: 'string',
      laStatus: 'string',
      loginStatus: 'string',
      nacStatus: 'string',
      privateIp: 'string',
      saseUserId: 'string',
      username: 'string',
      workshop: 'string',
      ztnaStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDynamicDisposalProcessesResponseBodyDisposalProcesses extends $dara.Model {
  /**
   * @remarks
   * User\\"s department.
   * 
   * @example
   * IT
   */
  department?: string;
  /**
   * @remarks
   * Device ID.
   * 
   * @example
   * FD7554AD-4CDE-6359-6B49-4FE950606C2C
   */
  devTag?: string;
  /**
   * @remarks
   * Basic device information.
   */
  deviceBasicInfo?: ListDynamicDisposalProcessesResponseBodyDisposalProcessesDeviceBasicInfo;
  /**
   * @remarks
   * 设备状态信息。
   */
  deviceStatusInfo?: ListDynamicDisposalProcessesResponseBodyDisposalProcessesDeviceStatusInfo;
  /**
   * @remarks
   * List of disposal actions.
   */
  disposalActions?: string[];
  /**
   * @remarks
   * Disposal process ID.
   * 
   * @example
   * dp-xxxxxxxx
   */
  disposalProcessId?: string;
  /**
   * @remarks
   * Disposal time, in seconds since the epoch.
   * 
   * @example
   * 1743059249
   */
  disposalTime?: string;
  /**
   * @remarks
   * Dynamic policy ID.
   * 
   * @example
   * dynamic-policy-xxxxxxxx
   */
  dynamicPolicyId?: string;
  /**
   * @remarks
   * Dynamic policy name.
   * 
   * @example
   * 动态策略1
   */
  dynamicPolicyName?: string;
  /**
   * @remarks
   * Terminal device name. Length: 1~128 characters, supporting Chinese and uppercase/lowercase English letters, and can include numbers, half-width periods (.), commas (,), semicolons (;), hyphens (-), underscores (_), slashes (/), at (@) symbols, and spaces. Entering an underscore (_) alone will additionally query all terminal devices with 4-byte UTF-8 characters in their names.
   * 
   * @example
   * WANGCHENCHENNBB
   */
  hostname?: string;
  /**
   * @remarks
   * Recovery type.
   * - **auto**：Automatic recovery.
   * - **console**：Console recovery.
   * - **auth**：Certification and reporting recovery.
   * 
   * @example
   * auto
   */
  recoveryType?: string;
  /**
   * @remarks
   * Rule content.
   * 
   * @example
   * {
   *   "Combinator": "OR",
   *   "Rules": [
   *     {
   *       "Operator": "version_gt",
   *       "Values": [
   *         "1"
   *       ],
   *       "RuleType": "device_info",
   *       "Id": "1",
   *       "RuleSubType": "basic_info",
   *       "Name": "app_version"
   *     }
   *   ]
   * }
   */
  ruleContent?: any;
  /**
   * @remarks
   * SASE用户ID。
   * 
   * @example
   * asdqwedg-xzczvzdaf-asfafs
   */
  saseUserId?: string;
  /**
   * @remarks
   * Disposal status. Values:
   * - **disposal**: In the disposal state.
   * - **finished**: Already automatically recovered.
   * - **recovery**: Recovered by authentication and reporting or console recovery.
   * 
   * @example
   * disposal
   */
  status?: string;
  /**
   * @remarks
   * Username.
   * 
   * @example
   * xiaoming
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      department: 'Department',
      devTag: 'DevTag',
      deviceBasicInfo: 'DeviceBasicInfo',
      deviceStatusInfo: 'DeviceStatusInfo',
      disposalActions: 'DisposalActions',
      disposalProcessId: 'DisposalProcessId',
      disposalTime: 'DisposalTime',
      dynamicPolicyId: 'DynamicPolicyId',
      dynamicPolicyName: 'DynamicPolicyName',
      hostname: 'Hostname',
      recoveryType: 'RecoveryType',
      ruleContent: 'RuleContent',
      saseUserId: 'SaseUserId',
      status: 'Status',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      department: 'string',
      devTag: 'string',
      deviceBasicInfo: ListDynamicDisposalProcessesResponseBodyDisposalProcessesDeviceBasicInfo,
      deviceStatusInfo: ListDynamicDisposalProcessesResponseBodyDisposalProcessesDeviceStatusInfo,
      disposalActions: { 'type': 'array', 'itemType': 'string' },
      disposalProcessId: 'string',
      disposalTime: 'string',
      dynamicPolicyId: 'string',
      dynamicPolicyName: 'string',
      hostname: 'string',
      recoveryType: 'string',
      ruleContent: 'any',
      saseUserId: 'string',
      status: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(this.deviceBasicInfo && typeof (this.deviceBasicInfo as any).validate === 'function') {
      (this.deviceBasicInfo as any).validate();
    }
    if(this.deviceStatusInfo && typeof (this.deviceStatusInfo as any).validate === 'function') {
      (this.deviceStatusInfo as any).validate();
    }
    if(Array.isArray(this.disposalActions)) {
      $dara.Model.validateArray(this.disposalActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDynamicDisposalProcessesResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of disposal processes.
   */
  disposalProcesses?: ListDynamicDisposalProcessesResponseBodyDisposalProcesses[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * BE4FB974-11BC-5453-9BE1-1606A73EACA6
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of dynamic disposal processes.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      disposalProcesses: 'DisposalProcesses',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disposalProcesses: { 'type': 'array', 'itemType': ListDynamicDisposalProcessesResponseBodyDisposalProcesses },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.disposalProcesses)) {
      $dara.Model.validateArray(this.disposalProcesses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

