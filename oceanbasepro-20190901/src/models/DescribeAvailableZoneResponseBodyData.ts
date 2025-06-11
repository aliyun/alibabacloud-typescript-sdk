// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableZoneResponseBodyDataAvailableZones } from "./DescribeAvailableZoneResponseBodyDataAvailableZones";


export class DescribeAvailableZoneResponseBodyData extends $dara.Model {
  availableZones?: DescribeAvailableZoneResponseBodyDataAvailableZones[];
  static names(): { [key: string]: string } {
    return {
      availableZones: 'AvailableZones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZones: { 'type': 'array', 'itemType': DescribeAvailableZoneResponseBodyDataAvailableZones },
    };
  }

  validate() {
    if(Array.isArray(this.availableZones)) {
      $dara.Model.validateArray(this.availableZones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

