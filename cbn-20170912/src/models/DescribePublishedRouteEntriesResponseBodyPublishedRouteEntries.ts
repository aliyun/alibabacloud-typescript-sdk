// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePublishedRouteEntriesResponseBodyPublishedRouteEntriesPublishedRouteEntry } from "./DescribePublishedRouteEntriesResponseBodyPublishedRouteEntriesPublishedRouteEntry";


export class DescribePublishedRouteEntriesResponseBodyPublishedRouteEntries extends $dara.Model {
  publishedRouteEntry?: DescribePublishedRouteEntriesResponseBodyPublishedRouteEntriesPublishedRouteEntry[];
  static names(): { [key: string]: string } {
    return {
      publishedRouteEntry: 'PublishedRouteEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publishedRouteEntry: { 'type': 'array', 'itemType': DescribePublishedRouteEntriesResponseBodyPublishedRouteEntriesPublishedRouteEntry },
    };
  }

  validate() {
    if(Array.isArray(this.publishedRouteEntry)) {
      $dara.Model.validateArray(this.publishedRouteEntry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

