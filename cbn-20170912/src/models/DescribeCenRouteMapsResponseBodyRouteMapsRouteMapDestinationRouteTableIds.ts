// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationRouteTableIds extends $dara.Model {
  destinationRouteTableId?: string[];
  static names(): { [key: string]: string } {
    return {
      destinationRouteTableId: 'DestinationRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationRouteTableId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.destinationRouteTableId)) {
      $dara.Model.validateArray(this.destinationRouteTableId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

