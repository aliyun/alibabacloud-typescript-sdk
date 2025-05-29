// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRdsVpcsResponseBodyVpcsVpcVSwitchs extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the vSwitch.
   * 
   * @example
   * 10.**.**.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * An invalid parameter. It is no longer returned when you call this operation.
   * 
   * @example
   * null
   */
  gmtCreate?: string;
  /**
   * @remarks
   * An invalid parameter. It is no longer returned when you call this operation.
   * 
   * @example
   * null
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether the vSwitch is the default vSwitch. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The ID of the zone to which the vSwitch belongs.
   * 
   * @example
   * cn-hangzhou-i
   */
  izNo?: string;
  /**
   * @remarks
   * The state of the vSwitch. If **Available** is returned, the vSwitch is available.
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
   * vsw-bp*******************
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The name of the vSwitch.
   * 
   * @example
   * vsw-name
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

