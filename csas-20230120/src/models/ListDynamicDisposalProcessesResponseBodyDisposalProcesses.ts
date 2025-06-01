// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDynamicDisposalProcessesResponseBodyDisposalProcessesDeviceBasicInfo } from "./ListDynamicDisposalProcessesResponseBodyDisposalProcessesDeviceBasicInfo";
import { ListDynamicDisposalProcessesResponseBodyDisposalProcessesDeviceStatusInfo } from "./ListDynamicDisposalProcessesResponseBodyDisposalProcessesDeviceStatusInfo";


export class ListDynamicDisposalProcessesResponseBodyDisposalProcesses extends $dara.Model {
  department?: string;
  /**
   * @example
   * FD7554AD-4CDE-6359-6B49-4FE950606C2C
   */
  devTag?: string;
  deviceBasicInfo?: ListDynamicDisposalProcessesResponseBodyDisposalProcessesDeviceBasicInfo;
  deviceStatusInfo?: ListDynamicDisposalProcessesResponseBodyDisposalProcessesDeviceStatusInfo;
  disposalActions?: string[];
  /**
   * @example
   * dp-xxxxxxxx
   */
  disposalProcessId?: string;
  /**
   * @example
   * 1743059249
   */
  disposalTime?: string;
  /**
   * @example
   * dynamic-policy-xxxxxxxx
   */
  dynamicPolicyId?: string;
  dynamicPolicyName?: string;
  /**
   * @example
   * WANGCHENCHENNBB
   */
  hostname?: string;
  /**
   * @example
   * auto
   */
  recoveryType?: string;
  /**
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
   * @example
   * asdqwedg-xzczvzdaf-asfafs
   */
  saseUserId?: string;
  /**
   * @example
   * disposal
   */
  status?: string;
  /**
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

