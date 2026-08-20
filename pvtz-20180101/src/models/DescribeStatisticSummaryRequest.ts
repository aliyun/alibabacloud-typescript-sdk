// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStatisticSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese.
   * 
   * - en: English.
   * 
   * Default value: en.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The user\\"s IP address.
   * 
   * @example
   * 127.0.XX.XX
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

