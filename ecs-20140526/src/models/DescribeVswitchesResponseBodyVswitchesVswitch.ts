// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVSwitchesResponseBodyVSwitchesVSwitch extends $dara.Model {
  availableIpAddressCount?: number;
  cidrBlock?: string;
  creationTime?: string;
  description?: string;
  isDefault?: boolean;
  resourceGroupId?: string;
  status?: string;
  vSwitchId?: string;
  vSwitchName?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableIpAddressCount: 'AvailableIpAddressCount',
      cidrBlock: 'CidrBlock',
      creationTime: 'CreationTime',
      description: 'Description',
      isDefault: 'IsDefault',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableIpAddressCount: 'number',
      cidrBlock: 'string',
      creationTime: 'string',
      description: 'string',
      isDefault: 'boolean',
      resourceGroupId: 'string',
      status: 'string',
      vSwitchId: 'string',
      vSwitchName: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

