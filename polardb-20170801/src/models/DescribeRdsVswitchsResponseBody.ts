// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRdsVSwitchsResponseBodyVSwitchesVSwitch extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 175358919****
   */
  aliUid?: string;
  /**
   * @remarks
   * Identifies the cloud service type, such as Alibaba Finance Cloud, Alibaba Gov Cloud, or public cloud.
   * 
   * @example
   * 26842
   */
  bid?: string;
  /**
   * @remarks
   * The CIDR block of the vSwitch.
   * 
   * @example
   * 192.168.8.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The time when the vSwitch was created.
   * 
   * @example
   * 2024-12-23 10:15:38
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the vSwitch was last modified.
   * 
   * @example
   * 2025-04-30T09:41:14+08:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether the vSwitch is the default vSwitch. Valid values:
   * 
   * - **true**: The vSwitch is the default vSwitch.
   * 
   * - **false**: The vSwitch is not the default vSwitch.
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The ID of the zone to which the vSwitch belongs.
   * 
   * @example
   * ch-hangzhou-g
   */
  izNo?: string;
  /**
   * @remarks
   * The ID of the region to which the vSwitch belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The status of the vSwitch. Valid values: ***Pending***\\*: The vSwitch is being configured.\\* **Available**: The vSwitch is available.
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
   * vsw-**************
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The name of the vSwitch.
   * 
   * @example
   * sw01
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

export class DescribeRdsVSwitchsResponseBodyVSwitches extends $dara.Model {
  /**
   * @remarks
   * The vSwitch information.
   */
  vSwitch?: DescribeRdsVSwitchsResponseBodyVSwitchesVSwitch[];
  static names(): { [key: string]: string } {
    return {
      vSwitch: 'VSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitch: { 'type': 'array', 'itemType': DescribeRdsVSwitchsResponseBodyVSwitchesVSwitch },
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

export class DescribeRdsVSwitchsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A0450B18-BBD4-5DF9-8E71-610F1A921CDE
   */
  requestId?: string;
  /**
   * @remarks
   * The vSwitch information.
   */
  vSwitches?: DescribeRdsVSwitchsResponseBodyVSwitches;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vSwitches: 'VSwitches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vSwitches: DescribeRdsVSwitchsResponseBodyVSwitches,
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

