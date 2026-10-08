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
   * @remarks
   * Indicates whether the domain name can be registered. Valid values:  
   * - **1**: Registrable.  
   * - **3**: Pre-registration.  
   * - **4**: Deletion reservation available.  
   * - **0**: Not registrable.  
   * - **-1**: Abnormal.  
   * - **-2**: Registration paused.  
   * - **-3**: Blacklisted.
   * 
   * @example
   * 1
   */
  avail?: string;
  /**
   * @remarks
   * The queried domain name.
   * 
   * @example
   * test**.xin
   */
  domainName?: string;
  /**
   * @remarks
   * Indicates whether dynamic pricing is enabled. Valid values:  
   * - **true**: Yes.  
   * - **false**: No.
   * 
   * @example
   * true
   */
  dynamicCheck?: boolean;
  /**
   * @remarks
   * Indicates whether the domain name is a premium term. Valid values:  
   * - **true**: Yes.  
   * - **false**: No.
   * 
   * @example
   * true
   */
  premium?: string;
  /**
   * @remarks
   * Registration price for premium domain names.
   * 
   * @example
   * 1286
   */
  price?: number;
  /**
   * @remarks
   * The reason for non-registrability returned by the domain name registry.  
   * > The reason may vary depending on the domain name registry.
   * 
   * @example
   * In use
   */
  reason?: string;
  /**
   * @remarks
   * Unique request access token.
   * 
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

