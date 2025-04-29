// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoInstanceTypes extends $dara.Model {
  supportedInstanceType?: string[];
  static names(): { [key: string]: string } {
    return {
      supportedInstanceType: 'supportedInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedInstanceType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedInstanceType)) {
      $dara.Model.validateArray(this.supportedInstanceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

