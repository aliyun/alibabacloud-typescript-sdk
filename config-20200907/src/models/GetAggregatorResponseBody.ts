// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAggregatorResponseBodyAggregator } from "./GetAggregatorResponseBodyAggregator";


export class GetAggregatorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the account group.
   */
  aggregator?: GetAggregatorResponseBodyAggregator;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 733DD93C-2277-4905-AE0C-0BA95C04B8BC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregator: 'Aggregator',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregator: GetAggregatorResponseBodyAggregator,
      requestId: 'string',
    };
  }

  validate() {
    if(this.aggregator && typeof (this.aggregator as any).validate === 'function') {
      (this.aggregator as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

