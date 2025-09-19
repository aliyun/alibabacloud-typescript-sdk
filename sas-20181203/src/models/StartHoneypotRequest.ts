// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartHoneypotRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the honeypot.
   * 
   * >  You can call the [ListHoneypot](~~ListHoneypot~~) operation to query the IDs of honeypots.
   * 
   * This parameter is required.
   * 
   * @example
   * dba7d44775be8e0e5888ee3b1a62554a93d2512247cabc38ddeac17a3b3f****
   */
  honeypotId?: string;
  /**
   * @remarks
   * The language of the content in the request and response messages. Default value: **zh**. Valid values:
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

