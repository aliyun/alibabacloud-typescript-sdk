// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDomainRealTimePriceResponseBodyModuleDomainPrices extends $dara.Model {
  /**
   * @example
   * renew
   */
  action?: string;
  /**
   * @example
   * 1
   */
  avail?: number;
  /**
   * @example
   * USD
   */
  currency?: string;
  /**
   * @example
   * xxx.com
   */
  domainName?: string;
  /**
   * @example
   * 1
   */
  period?: number;
  premium?: boolean;
  /**
   * @example
   * 16.22
   */
  price?: number;
  /**
   * @example
   * 不可续费
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      avail: 'Avail',
      currency: 'Currency',
      domainName: 'DomainName',
      period: 'Period',
      premium: 'Premium',
      price: 'Price',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      avail: 'number',
      currency: 'string',
      domainName: 'string',
      period: 'number',
      premium: 'boolean',
      price: 'number',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainRealTimePriceResponseBodyModule extends $dara.Model {
  domainPrices?: QueryDomainRealTimePriceResponseBodyModuleDomainPrices[];
  static names(): { [key: string]: string } {
    return {
      domainPrices: 'DomainPrices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainPrices: { 'type': 'array', 'itemType': QueryDomainRealTimePriceResponseBodyModuleDomainPrices },
    };
  }

  validate() {
    if(Array.isArray(this.domainPrices)) {
      $dara.Model.validateArray(this.domainPrices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainRealTimePriceResponseBody extends $dara.Model {
  /**
   * @example
   * 4000
   */
  dynamicCode?: string;
  /**
   * @example
   * 非法参数
   */
  dynamicMessage?: string;
  /**
   * @example
   * 3002
   */
  errorCode?: string;
  /**
   * @example
   * 非法参数
   */
  errorMsg?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  module?: QueryDomainRealTimePriceResponseBodyModule;
  /**
   * @example
   * A4A4F72C-8E8E-19D2-BCC1-21E41D334A75
   */
  requestId?: string;
  success?: boolean;
  synchro?: boolean;
  static names(): { [key: string]: string } {
    return {
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      httpStatusCode: 'HttpStatusCode',
      module: 'Module',
      requestId: 'RequestId',
      success: 'Success',
      synchro: 'Synchro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      httpStatusCode: 'number',
      module: QueryDomainRealTimePriceResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      synchro: 'boolean',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

