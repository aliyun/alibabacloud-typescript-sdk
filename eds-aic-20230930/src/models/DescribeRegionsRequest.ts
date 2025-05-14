// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * The display language of the console. Valid values:
   * 
   * *   cn: Simplified Chinese
   * *   en: English
   * 
   * @example
   * en
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The sales mode.
   * 
   * Valid values:
   * 
   * *   Instance: the instance group mode. [Default]
   * *   Node: the matrix mode. [Whitelist required]
   * 
   * @example
   * Instance
   */
  saleMode?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      saleMode: 'SaleMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      saleMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

