// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceAttributeResponseBodyMultiZone extends $dara.Model {
  availableIpCount?: number;
  cidr?: string;
  vSwitchIds?: string[];
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableIpCount: 'AvailableIpCount',
      cidr: 'Cidr',
      vSwitchIds: 'VSwitchIds',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableIpCount: 'number',
      cidr: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

