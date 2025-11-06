// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDomainRealTimePriceShrinkRequest extends $dara.Model {
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
  domainItemShrink?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      domainItemShrink: 'DomainItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      domainItemShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

