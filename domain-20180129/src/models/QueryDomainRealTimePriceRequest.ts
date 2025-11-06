// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDomainRealTimePriceRequestDomainItem extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * renew
   */
  action?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx.com
   */
  domainName?: string;
  /**
   * @example
   * 1
   */
  period?: number;
  /**
   * @example
   * com
   */
  suffix?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      domainName: 'DomainName',
      period: 'Period',
      suffix: 'Suffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      domainName: 'string',
      period: 'number',
      suffix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainRealTimePriceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * USD
   */
  currency?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  domainItem?: QueryDomainRealTimePriceRequestDomainItem[];
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      domainItem: 'DomainItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      domainItem: { 'type': 'array', 'itemType': QueryDomainRealTimePriceRequestDomainItem },
    };
  }

  validate() {
    if(Array.isArray(this.domainItem)) {
      $dara.Model.validateArray(this.domainItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

