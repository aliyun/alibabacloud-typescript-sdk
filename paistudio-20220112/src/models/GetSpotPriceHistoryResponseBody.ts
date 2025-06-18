// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SpotPriceItem } from "./SpotPriceItem";


export class GetSpotPriceHistoryResponseBody extends $dara.Model {
  /**
   * @example
   * 8BDA4440-DD3C-5F4B-BBDD-94A9CE1E75C7
   */
  requestId?: string;
  spotPriceHistory?: SpotPriceItem[];
  /**
   * @example
   * 194
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      spotPriceHistory: 'SpotPriceHistory',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      spotPriceHistory: { 'type': 'array', 'itemType': SpotPriceItem },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.spotPriceHistory)) {
      $dara.Model.validateArray(this.spotPriceHistory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

