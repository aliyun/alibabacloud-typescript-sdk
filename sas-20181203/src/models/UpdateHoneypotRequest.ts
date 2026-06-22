// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHoneypotRequest extends $dara.Model {
  /**
   * @remarks
   * The honeypot ID.
   * > You can call the [ListHoneypot](~~ListHoneypot~~) operation to obtain this value.
   * 
   * This parameter is required.
   * 
   * @example
   * 945607c2ae2a1a737c04599d6608065688bfc6048d9b9d306ce8dc8191c*****
   */
  honeypotId?: string;
  /**
   * @remarks
   * The custom name of the honeypot.
   * 
   * @example
   * ExtMail
   */
  honeypotName?: string;
  /**
   * @remarks
   * The language of the content in the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The custom configuration of the honeypot.
   * >The value of this parameter is obtained from the **Template** field returned by the [ListAvailableHoneypot](~~ListAvailableHoneypot~~) operation.
   * 
   * @example
   * {\\"burp\\":\\"open\\",\\"webshell\\":\\"open\\",\\"trojan_git\\":\\"close\\",\\"portrait_option\\":\\"true\\"}
   */
  meta?: string;
  static names(): { [key: string]: string } {
    return {
      honeypotId: 'HoneypotId',
      honeypotName: 'HoneypotName',
      lang: 'Lang',
      meta: 'Meta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      honeypotId: 'string',
      honeypotName: 'string',
      lang: 'string',
      meta: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

