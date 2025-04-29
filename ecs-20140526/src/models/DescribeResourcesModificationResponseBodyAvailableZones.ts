// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeResourcesModificationResponseBodyAvailableZonesAvailableZone } from "./DescribeResourcesModificationResponseBodyAvailableZonesAvailableZone";


export class DescribeResourcesModificationResponseBodyAvailableZones extends $dara.Model {
  availableZone?: DescribeResourcesModificationResponseBodyAvailableZonesAvailableZone[];
  static names(): { [key: string]: string } {
    return {
      availableZone: 'AvailableZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZone: { 'type': 'array', 'itemType': DescribeResourcesModificationResponseBodyAvailableZonesAvailableZone },
    };
  }

  validate() {
    if(Array.isArray(this.availableZone)) {
      $dara.Model.validateArray(this.availableZone);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

