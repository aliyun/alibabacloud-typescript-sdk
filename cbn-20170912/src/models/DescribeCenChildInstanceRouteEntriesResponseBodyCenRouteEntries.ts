// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntry } from "./DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntry";


export class DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntries extends $dara.Model {
  cenRouteEntry?: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntry[];
  static names(): { [key: string]: string } {
    return {
      cenRouteEntry: 'CenRouteEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenRouteEntry: { 'type': 'array', 'itemType': DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntry },
    };
  }

  validate() {
    if(Array.isArray(this.cenRouteEntry)) {
      $dara.Model.validateArray(this.cenRouteEntry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

