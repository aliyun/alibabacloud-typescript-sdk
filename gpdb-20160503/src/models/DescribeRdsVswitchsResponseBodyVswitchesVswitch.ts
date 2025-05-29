// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRdsVSwitchsResponseBodyVSwitchesVSwitch extends $dara.Model {
  /**
   * @remarks
   * An invalid parameter. It is no longer returned when you call this operation.
   * 
   * @example
   * null
   */
  aliUid?: string;
  /**
   * @remarks
   * An invalid parameter. It is no longer returned when you call this operation.
   * 
   * @example
   * null
   */
  bid?: string;
  /**
   * @remarks
   * The CIDR block of the vSwitch.
   * 
   * @example
   * 192.**.**.0/24
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
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou-h
   */
  izNo?: string;
  /**
   * @remarks
   * An invalid parameter. It is no longer returned when you call this operation.
   * 
   * @example
   * null
   */
  regionNo?: string;
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
   * The ID of the vSwitch.
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

