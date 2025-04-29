// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSpotPriceHistoryResponseBodySpotPrices } from "./DescribeSpotPriceHistoryResponseBodySpotPrices";


export class DescribeSpotPriceHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance type of the preemptible instance.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The network type of the preemptible instance.
   * 
   * @example
   * 1000
   */
  nextOffset?: number;
  /**
   * @remarks
   * The instance type of the preemptible instance.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The zone ID of the preemptible instance.
   */
  spotPrices?: DescribeSpotPriceHistoryResponseBodySpotPrices;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      nextOffset: 'NextOffset',
      requestId: 'RequestId',
      spotPrices: 'SpotPrices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      nextOffset: 'number',
      requestId: 'string',
      spotPrices: DescribeSpotPriceHistoryResponseBodySpotPrices,
    };
  }

  validate() {
    if(this.spotPrices && typeof (this.spotPrices as any).validate === 'function') {
      (this.spotPrices as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

