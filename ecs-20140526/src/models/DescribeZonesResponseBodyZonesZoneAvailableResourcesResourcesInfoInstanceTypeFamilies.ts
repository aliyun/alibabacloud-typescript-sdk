// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoInstanceTypeFamilies extends $dara.Model {
  supportedInstanceTypeFamily?: string[];
  static names(): { [key: string]: string } {
    return {
      supportedInstanceTypeFamily: 'supportedInstanceTypeFamily',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedInstanceTypeFamily: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedInstanceTypeFamily)) {
      $dara.Model.validateArray(this.supportedInstanceTypeFamily);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

