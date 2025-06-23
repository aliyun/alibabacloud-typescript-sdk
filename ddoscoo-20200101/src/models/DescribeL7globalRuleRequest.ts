// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeL7GlobalRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

