// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationChildInstanceTypes extends $dara.Model {
  destinationChildInstanceType?: string[];
  static names(): { [key: string]: string } {
    return {
      destinationChildInstanceType: 'DestinationChildInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationChildInstanceType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.destinationChildInstanceType)) {
      $dara.Model.validateArray(this.destinationChildInstanceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

