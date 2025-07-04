// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVSwitchListResponseBodyVSwitches extends $dara.Model {
  availableIpAddressCount?: string;
  cidrBlock?: string;
  description?: string;
  gmtCreate?: string;
  isDefault?: string;
  izNo?: string;
  shareType?: string;
  status?: string;
  vSwitchId?: string;
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      availableIpAddressCount: 'AvailableIpAddressCount',
      cidrBlock: 'CidrBlock',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      isDefault: 'IsDefault',
      izNo: 'IzNo',
      shareType: 'ShareType',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableIpAddressCount: 'string',
      cidrBlock: 'string',
      description: 'string',
      gmtCreate: 'string',
      isDefault: 'string',
      izNo: 'string',
      shareType: 'string',
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

