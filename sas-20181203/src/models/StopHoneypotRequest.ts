// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopHoneypotRequest extends $dara.Model {
  /**
   * @remarks
   * The honeypot ID.
   * 
   * >  You can call the [ListHoneypot](~~ListHoneypot~~) operation to obtain IDs of honeypots.
   * 
   * This parameter is required.
   * 
   * @example
   * 444c699ac151b183b04b562b1dc02639d504c9d097246a322de75c963fe*****
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

