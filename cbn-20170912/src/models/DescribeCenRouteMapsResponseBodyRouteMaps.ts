// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCenRouteMapsResponseBodyRouteMapsRouteMap } from "./DescribeCenRouteMapsResponseBodyRouteMapsRouteMap";


export class DescribeCenRouteMapsResponseBodyRouteMaps extends $dara.Model {
  routeMap?: DescribeCenRouteMapsResponseBodyRouteMapsRouteMap[];
  static names(): { [key: string]: string } {
    return {
      routeMap: 'RouteMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeMap: { 'type': 'array', 'itemType': DescribeCenRouteMapsResponseBodyRouteMapsRouteMap },
    };
  }

  validate() {
    if(Array.isArray(this.routeMap)) {
      $dara.Model.validateArray(this.routeMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

