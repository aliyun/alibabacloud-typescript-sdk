// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDynamicDisposalProcessesResponseBodyDisposalProcessesDeviceBasicInfo } from "./ListDynamicDisposalProcessesResponseBodyDisposalProcessesDeviceBasicInfo";
import { ListDynamicDisposalProcessesResponseBodyDisposalProcessesDeviceStatusInfo } from "./ListDynamicDisposalProcessesResponseBodyDisposalProcessesDeviceStatusInfo";


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

