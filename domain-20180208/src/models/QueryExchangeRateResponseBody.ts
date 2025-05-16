// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryExchangeRateResponseBody extends $dara.Model {
  /**
   * @example
   * 7.12
   */
  exchangeRate?: number;
  /**
   * @example
   * D200000-C0B9-4CD3-B92A-9B44A000000
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exchangeRate: 'ExchangeRate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exchangeRate: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

