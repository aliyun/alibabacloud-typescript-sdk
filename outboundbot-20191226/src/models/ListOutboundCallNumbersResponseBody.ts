// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOutboundCallNumbersResponseBodyOutboundCallNumbersList extends $dara.Model {
  /**
   * @example
   * 10088
   */
  number?: string;
  /**
   * @example
   * fa0e21e9-caab-4629-9121-1e341243d599
   */
  outboundCallNumberId?: string;
  /**
   * @example
   * 10
   */
  rateLimitCount?: string;
  /**
   * @example
   * 100
   */
  rateLimitPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      outboundCallNumberId: 'OutboundCallNumberId',
      rateLimitCount: 'RateLimitCount',
      rateLimitPeriod: 'RateLimitPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      outboundCallNumberId: 'string',
      rateLimitCount: 'string',
      rateLimitPeriod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundCallNumbersResponseBodyOutboundCallNumbers extends $dara.Model {
  list?: ListOutboundCallNumbersResponseBodyOutboundCallNumbersList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListOutboundCallNumbersResponseBodyOutboundCallNumbersList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundCallNumbersResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  outboundCallNumbers?: ListOutboundCallNumbersResponseBodyOutboundCallNumbers;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      outboundCallNumbers: 'OutboundCallNumbers',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      outboundCallNumbers: ListOutboundCallNumbersResponseBodyOutboundCallNumbers,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.outboundCallNumbers && typeof (this.outboundCallNumbers as any).validate === 'function') {
      (this.outboundCallNumbers as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

