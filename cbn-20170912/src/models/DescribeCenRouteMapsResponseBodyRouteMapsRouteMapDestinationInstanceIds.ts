// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapDestinationInstanceIds extends $dara.Model {
  destinationInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      destinationInstanceId: 'DestinationInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.destinationInstanceId)) {
      $dara.Model.validateArray(this.destinationInstanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

