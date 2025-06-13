// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserBuyStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Bid。
   * 
   * @example
   * 26842
   */
  bid?: number;
  /**
   * @example
   * True
   */
  buy?: boolean;
  /**
   * @example
   * False
   */
  indebt?: boolean;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      buy: 'Buy',
      indebt: 'Indebt',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'number',
      buy: 'boolean',
      indebt: 'boolean',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

