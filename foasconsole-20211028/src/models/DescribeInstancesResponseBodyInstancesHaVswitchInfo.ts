// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesHaVSwitchInfo extends $dara.Model {
  availableIpAddressCount?: number;
  description?: string;
  regionId?: string;
  vSwitchCidr?: string;
  vSwitchId?: string;
  vSwitchName?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableIpAddressCount: 'AvailableIpAddressCount',
      description: 'Description',
      regionId: 'RegionId',
      vSwitchCidr: 'VSwitchCidr',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableIpAddressCount: 'number',
      description: 'string',
      regionId: 'string',
      vSwitchCidr: 'string',
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

