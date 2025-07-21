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

export class QueryInvalidAddressResponseBodyData extends $dara.Model {
  mailDetail?: QueryInvalidAddressResponseBodyDataMailDetail[];
  static names(): { [key: string]: string } {
    return {
      mailDetail: 'mailDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mailDetail: { 'type': 'array', 'itemType': QueryInvalidAddressResponseBodyDataMailDetail },
    };
  }

  validate() {
    if(Array.isArray(this.mailDetail)) {
      $dara.Model.validateArray(this.mailDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInvalidAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * Next request starting position.
   * 
   * @example
   * 2
   */
  nextStart?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 95A7D497-F8DD-4834-B81E-C1783236E55F
   */
  requestId?: string;
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  /**
   * @remarks
   * Records.
   */
  data?: QueryInvalidAddressResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      nextStart: 'NextStart',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextStart: 'string',
      requestId: 'string',
      totalCount: 'number',
      data: QueryInvalidAddressResponseBodyData,
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

