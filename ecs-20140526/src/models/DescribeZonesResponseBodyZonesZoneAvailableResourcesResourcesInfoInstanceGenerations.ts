// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZonesResponseBodyZonesZoneAvailableResourcesResourcesInfoInstanceGenerations extends $dara.Model {
  supportedInstanceGeneration?: string[];
  static names(): { [key: string]: string } {
    return {
      supportedInstanceGeneration: 'supportedInstanceGeneration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedInstanceGeneration: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedInstanceGeneration)) {
      $dara.Model.validateArray(this.supportedInstanceGeneration);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

