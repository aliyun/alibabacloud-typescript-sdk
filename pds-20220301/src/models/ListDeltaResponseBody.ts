// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDeltaResponseBodyItems } from "./ListDeltaResponseBodyItems";


export class ListDeltaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cursor of the incremental information.
   * 
   * @example
   * 1WQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  cursor?: string;
  /**
   * @remarks
   * Indicates whether more information is returned.
   * 
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The incremental information returned.
   */
  items?: ListDeltaResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      cursor: 'cursor',
      hasMore: 'has_more',
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursor: 'string',
      hasMore: 'boolean',
      items: { 'type': 'array', 'itemType': ListDeltaResponseBodyItems },
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

