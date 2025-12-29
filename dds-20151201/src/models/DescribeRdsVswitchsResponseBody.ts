// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRdsVSwitchsResponseBodyVSwitchesVSwitch extends $dara.Model {
  /**
   * @example
   * null
   */
  aliUid?: string;
  /**
   * @example
   * null
   */
  bid?: string;
  /**
   * @example
   * 192.**.**.0/24
   */
  cidrBlock?: string;
  /**
   * @example
   * null
   */
  gmtCreate?: string;
  /**
   * @example
   * null
   */
  gmtModified?: string;
  /**
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @example
   * cn-hangzhou-h
   */
  izNo?: string;
  /**
   * @example
   * null
   */
  regionNo?: string;
  /**
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * VSwitch ID。
   * 
   * @example
   * vsw-bp*******************
   */
  vSwitchId?: string;
  /**
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

export class DescribeRdsVSwitchsResponseBodyVSwitches extends $dara.Model {
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
   * @example
   * 60EEBD77-227C-5B39-86EA-D89163C5****
   */
  requestId?: string;
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

