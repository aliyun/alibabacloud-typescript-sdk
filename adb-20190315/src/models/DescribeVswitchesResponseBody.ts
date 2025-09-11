// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVSwitchesResponseBodyVSwitchesVSwitch extends $dara.Model {
  /**
   * @remarks
   * The ID of the Resource Access Management (RAM) user.
   * 
   * @example
   * 195813423043****
   */
  aliUid?: string;
  /**
   * @remarks
   * The ID of the user channel.
   * 
   * @example
   * 2****
   */
  bid?: string;
  /**
   * @remarks
   * The IPv4 CIDR block of the vSwitch.
   * 
   * @example
   * 172.16.0.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The time when the vSwitch was created.
   * 
   * @example
   * 2022-01-18T12:43:57Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the vSwitch was modified.
   * 
   * @example
   * 2022-01-22T12:43:57Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether the vSwitch is the default vSwitch. Valid values: **true**: The vSwitch is the default vSwitch. **false**: The vSwitch is not the default vSwitch.
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The zone ID of the vSwitch.
   * 
   * @example
   * cn-hangzhou-k
   */
  izNo?: string;
  /**
   * @remarks
   * The region ID of the vSwitch.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The state of the vSwitch. Valid values: **Pending**: the vSwitch is being configured. **Available**: the vSwitch is available.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-25bcdxs7pv1****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The name of the vSwitch.
   * 
   * @example
   * vswitch
   */
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bid: 'Bid',
      cidrBlock: 'CidrBlock',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      isDefault: 'IsDefault',
      izNo: 'IzNo',
      regionNo: 'RegionNo',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      bid: 'string',
      cidrBlock: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      isDefault: 'boolean',
      izNo: 'string',
      regionNo: 'string',
      status: 'string',
      vSwitchId: 'string',
      vSwitchName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseBodyVSwitches extends $dara.Model {
  /**
   * @remarks
   * The queried vSwitch.
   */
  vSwitch?: DescribeVSwitchesResponseBodyVSwitchesVSwitch[];
  static names(): { [key: string]: string } {
    return {
      vSwitch: 'VSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitch: { 'type': 'array', 'itemType': DescribeVSwitchesResponseBodyVSwitchesVSwitch },
    };
  }

  validate() {
    if(Array.isArray(this.vSwitch)) {
      $dara.Model.validateArray(this.vSwitch);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D65A809F-34CE-4550-9BC1-0ED21ETG380
   */
  requestId?: string;
  /**
   * @remarks
   * The queried vSwitches.
   */
  vSwitches?: DescribeVSwitchesResponseBodyVSwitches;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vSwitches: 'VSwitches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vSwitches: DescribeVSwitchesResponseBodyVSwitches,
    };
  }

  validate() {
    if(this.vSwitches && typeof (this.vSwitches as any).validate === 'function') {
      (this.vSwitches as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

