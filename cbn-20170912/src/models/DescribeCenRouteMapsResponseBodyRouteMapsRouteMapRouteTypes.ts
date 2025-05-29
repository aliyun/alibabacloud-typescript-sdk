// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenRouteMapsResponseBodyRouteMapsRouteMapRouteTypes extends $dara.Model {
  routeType?: string[];
  static names(): { [key: string]: string } {
    return {
      routeType: 'RouteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.routeType)) {
      $dara.Model.validateArray(this.routeType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

