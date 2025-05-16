// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFixedPriceSelectedOrderRequest extends $dara.Model {
  /**
   * @example
   * DX123456
   */
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11935401
   */
  contactId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20.00
   */
  expectedPrice?: number;
  /**
   * @example
   * partnername
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contactId: 'ContactId',
      domainName: 'DomainName',
      expectedPrice: 'ExpectedPrice',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contactId: 'string',
      domainName: 'string',
      expectedPrice: 'number',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

