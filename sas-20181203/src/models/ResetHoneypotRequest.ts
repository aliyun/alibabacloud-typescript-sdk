// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetHoneypotRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the honeypot.
   * 
   * >  You can call the [ListHoneypot](~~ListHoneypot~~) operation to query the IDs of honeypots.
   * 
   * This parameter is required.
   * 
   * @example
   * 945607c2ae2a1a737c04599d6608065688bfc6048d9b9d306ce8dc8191c*****
   */
  honeypotId?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      honeypotId: 'HoneypotId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      honeypotId: 'string',
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

