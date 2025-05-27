// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendCardSmsRequestCardObjects extends $dara.Model {
  /**
   * @remarks
   * The URL to which the message is redirected if the message fails to be rendered.
   * 
   * @example
   * https://alibaba.com
   */
  customUrl?: string;
  /**
   * @remarks
   * The variables. Special characters, such as $ and {}, do not need to be entered.
   * 
   * @example
   * {\\"param3\\":\\"three\\",\\"param1\\":\\"one\\",\\"param2\\":\\"two\\"}
   */
  dyncParams?: string;
  /**
   * @remarks
   * The mobile phone number.
   * 
   * @example
   * 1390000****
   */
  mobile?: string;
  static names(): { [key: string]: string } {
    return {
      customUrl: 'customUrl',
      dyncParams: 'dyncParams',
      mobile: 'mobile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customUrl: 'string',
      dyncParams: 'string',
      mobile: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

