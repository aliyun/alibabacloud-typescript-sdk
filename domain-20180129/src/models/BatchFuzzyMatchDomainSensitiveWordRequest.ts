// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchFuzzyMatchDomainSensitiveWordRequest extends $dara.Model {
  /**
   * @remarks
   * Domain name keywords, separated by commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * example.com,aliyundoc.com
   */
  keyword?: string;
  /**
   * @remarks
   * Language of the error message returned by the API. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * User IP.
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

