// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHopsNextHop } from "./DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHopsNextHop";


export class DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHops extends $dara.Model {
  nextHop?: DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHopsNextHop[];
  static names(): { [key: string]: string } {
    return {
      nextHop: 'NextHop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextHop: { 'type': 'array', 'itemType': DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHopsNextHop },
    };
  }

  validate() {
    if(Array.isArray(this.nextHop)) {
      $dara.Model.validateArray(this.nextHop);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

