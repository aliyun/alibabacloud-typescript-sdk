// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSpotAdviceResponseBodyAvailableSpotZonesAvailableSpotZone } from "./DescribeSpotAdviceResponseBodyAvailableSpotZonesAvailableSpotZone";


export class DescribeSpotAdviceResponseBodyAvailableSpotZones extends $dara.Model {
  availableSpotZone?: DescribeSpotAdviceResponseBodyAvailableSpotZonesAvailableSpotZone[];
  static names(): { [key: string]: string } {
    return {
      availableSpotZone: 'AvailableSpotZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableSpotZone: { 'type': 'array', 'itemType': DescribeSpotAdviceResponseBodyAvailableSpotZonesAvailableSpotZone },
    };
  }

  validate() {
    if(Array.isArray(this.availableSpotZone)) {
      $dara.Model.validateArray(this.availableSpotZone);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

