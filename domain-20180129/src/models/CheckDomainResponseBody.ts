// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDomainResponseBodyStaticPriceInfoPriceInfo extends $dara.Model {
  action?: string;
  money?: number;
  period?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      money: 'money',
      period: 'period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      money: 'number',
      period: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDomainResponseBodyStaticPriceInfo extends $dara.Model {
  priceInfo?: CheckDomainResponseBodyStaticPriceInfoPriceInfo[];
  static names(): { [key: string]: string } {
    return {
      priceInfo: 'PriceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceInfo: { 'type': 'array', 'itemType': CheckDomainResponseBodyStaticPriceInfoPriceInfo },
    };
  }

  validate() {
    if(Array.isArray(this.priceInfo)) {
      $dara.Model.validateArray(this.priceInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDomainResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  avail?: string;
  /**
   * @example
   * test**.xin
   */
  domainName?: string;
  /**
   * @example
   * true
   */
  dynamicCheck?: boolean;
  /**
   * @example
   * true
   */
  premium?: string;
  /**
   * @example
   * 1286
   */
  price?: number;
  /**
   * @example
   * In use
   */
  reason?: string;
  /**
   * @example
   * BA7A4FD4-EB9A-4A20-BB0C-9AEB15634DC1
   */
  requestId?: string;
  staticPriceInfo?: CheckDomainResponseBodyStaticPriceInfo;
  static names(): { [key: string]: string } {
    return {
      avail: 'Avail',
      domainName: 'DomainName',
      dynamicCheck: 'DynamicCheck',
      premium: 'Premium',
      price: 'Price',
      reason: 'Reason',
      requestId: 'RequestId',
      staticPriceInfo: 'StaticPriceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avail: 'string',
      domainName: 'string',
      dynamicCheck: 'boolean',
      premium: 'string',
      price: 'number',
      reason: 'string',
      requestId: 'string',
      staticPriceInfo: CheckDomainResponseBodyStaticPriceInfo,
    };
  }

  validate() {
    if(this.staticPriceInfo && typeof (this.staticPriceInfo as any).validate === 'function') {
      (this.staticPriceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

