// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZonesResponseBodyZonesZoneDedicatedHostGenerations extends $dara.Model {
  dedicatedHostGeneration?: string[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHostGeneration: 'DedicatedHostGeneration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostGeneration: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dedicatedHostGeneration)) {
      $dara.Model.validateArray(this.dedicatedHostGeneration);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

