// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZonesResponseBodyZonesZoneAvailableDedicatedHostTypes extends $dara.Model {
  dedicatedHostType?: string[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHostType: 'DedicatedHostType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dedicatedHostType)) {
      $dara.Model.validateArray(this.dedicatedHostType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

