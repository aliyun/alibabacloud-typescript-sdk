// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInvalidAddressResponseBodyDataMailDetail extends $dara.Model {
  /**
   * @remarks
   * Update time.
   * 
   * @example
   * 2021-04-28T17:11Z
   */
  lastUpdateTime?: string;
  /**
   * @remarks
   * Recipient address.
   * 
   * @example
   * toaddress@example.com
   */
  toAddress?: string;
  /**
   * @remarks
   * Update time (in timestamp format).
   * 
   * @example
   * 1619601108
   */
  utcLastUpdateTime?: number;
  static names(): { [key: string]: string } {
    return {
      lastUpdateTime: 'LastUpdateTime',
      toAddress: 'ToAddress',
      utcLastUpdateTime: 'UtcLastUpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastUpdateTime: 'string',
      toAddress: 'string',
      utcLastUpdateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

