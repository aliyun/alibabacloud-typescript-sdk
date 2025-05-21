// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcsResponseBodyVpcsVpcVSwitchs extends $dara.Model {
  /**
   * @remarks
   * The IPv4 CIDR block of the vSwitch.
   * 
   * @example
   * 172.17.0.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The time when the vSwitch was created.
   * 
   * @example
   * 1549012834000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the vSwitch was modified.
   * 
   * @example
   * 1731031910000
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether the vSwitch is the default vSwitch. Valid values: **true** **false**
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
   * cn-hangzhou-j
   */
  izNo?: string;
  /**
   * @remarks
   * The status of the vSwitch. Valid values:
   * 
   * *   Pending
   * *   Available
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
   * vsw-8vbxk6ij0yz16bu4l3ijj
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The name of the vSwitch.
   * 
   * @example
   * vs1
   */
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      isDefault: 'IsDefault',
      izNo: 'IzNo',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      isDefault: 'boolean',
      izNo: 'string',
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

