// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FuzzyMatchDomainSensitiveWordRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name keyword (a term contained in the domain name excluding its suffix). Separate multiple keywords with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * xxx**
   */
  keyword?: string;
  /**
   * @remarks
   * The language of the error message returned by the API. Valid values:  
   * - **zh**: Chinese  
   * - **en**: English  
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The User IP address. You can set this parameter to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

