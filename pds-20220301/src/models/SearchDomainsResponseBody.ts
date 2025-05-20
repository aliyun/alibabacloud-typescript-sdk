// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Domain } from "./Domain";


export class SearchDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried domains.
   */
  items?: Domain[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If next_marker is empty, no next page exists.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': Domain },
      nextMarker: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

