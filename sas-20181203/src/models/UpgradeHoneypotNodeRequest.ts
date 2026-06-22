// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeHoneypotNodeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow the honeypot to access the Internet. Valid values:
   * - **true**: Allowed.
   * - **false**: Not allowed.
   * 
   * @example
   * true
   */
  allowHoneypotAccessInternet?: boolean;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the management node to upgrade.
   * >You can call the [ListHoneypotNode](~~ListHoneypotNode~~) operation to obtain this parameter.
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

