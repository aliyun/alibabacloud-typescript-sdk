// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationRegionIds extends $dara.Model {
  destinationRegionId?: string[];
  static names(): { [key: string]: string } {
    return {
      destinationRegionId: 'DestinationRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationRegionId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.destinationRegionId)) {
      $dara.Model.validateArray(this.destinationRegionId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

