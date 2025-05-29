// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRouteServicesInCenResponseBodyRouteServiceEntriesRouteServiceEntry } from "./DescribeRouteServicesInCenResponseBodyRouteServiceEntriesRouteServiceEntry";


export class DescribeRouteServicesInCenResponseBodyRouteServiceEntries extends $dara.Model {
  routeServiceEntry?: DescribeRouteServicesInCenResponseBodyRouteServiceEntriesRouteServiceEntry[];
  static names(): { [key: string]: string } {
    return {
      routeServiceEntry: 'RouteServiceEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeServiceEntry: { 'type': 'array', 'itemType': DescribeRouteServicesInCenResponseBodyRouteServiceEntriesRouteServiceEntry },
    };
  }

  validate() {
    if(Array.isArray(this.routeServiceEntry)) {
      $dara.Model.validateArray(this.routeServiceEntry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

