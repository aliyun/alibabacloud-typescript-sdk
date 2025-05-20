// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Story } from "./Story";


export class SearchStoriesResponseBody extends $dara.Model {
  items?: Story[];
  /**
   * @example
   * Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJ***
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
      items: { 'type': 'array', 'itemType': Story },
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

