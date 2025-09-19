// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeHoneypotNodeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow the honeypot to access the Internet. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  allowHoneypotAccessInternet?: boolean;
  /**
   * @remarks
   * The language of the content within the request and response.
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the management node that you want to upgrade.
   * 
   * >  You can call the [ListHoneypotNode](~~ListHoneypotNode~~) operation to obtain the ID.
   * 
   * @example
   * a882e590-b87b-45a6-87b9-d0a3e5a0****
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      allowHoneypotAccessInternet: 'AllowHoneypotAccessInternet',
      lang: 'Lang',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowHoneypotAccessInternet: 'boolean',
      lang: 'string',
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

