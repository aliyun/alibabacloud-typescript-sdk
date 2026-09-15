// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHoneypotRequest extends $dara.Model {
  /**
   * @remarks
   * The honeypot image ID.
   * > You can obtain this value from the **HoneypotImageId** field returned by the [ListAvailableHoneypot](~~ListAvailableHoneypot~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * sha256:ebc4c102ac407d53733c2373e8888a733ddce86f163ccbe7492ae1cbf26****
   */
  honeypotImageId?: string;
  /**
   * @remarks
   * The honeypot image name.
   * > You can obtain this value from the **HoneypotImageName** field returned by the [ListAvailableHoneypot](~~ListAvailableHoneypot~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * HoneyPotImageName
   */
  honeypotImageName?: string;
  /**
   * @remarks
   * The custom name of the honeypot.
   * 
   * This parameter is required.
   * 
   * @example
   * ruoyi
   */
  honeypotName?: string;
  /**
   * @remarks
   * The custom configuration of the honeypot in JSON format. The following fields are included:
   * 
   * - **trojan_git**: The Git counter-intelligence method. Valid values:
   *     -   **zip**: Git source code package.
   *     -  **web**: .git folder leak.
   *     -  **close**: Shutdown.
   * - **trojan_git_addr**: The Git counter-intelligence endpoint.
   * - **trojan_git.zip**: The Git counter-intelligence trojan package.
   * - **burp**: The Burp counter-intelligence method. Valid values:
   *      - **open**: Enabled.
   *     - **close**: Shutdown.
   * - **portrait_option**: The tracing configuration. Valid values:
   *     - **false**: Shutdown.
   *     - **true**: Enabled.
   * 
   * @example
   * {\\"trojan_git\\":\\"close\\",\\"burp\\":\\"close\\",\\"portrait_option\\":\\"false\\"}
   */
  meta?: string;
  /**
   * @remarks
   * The ID of the honeypot management node.
   * > Call the [ListHoneypotNode](~~ListHoneypotNode~~) operation to obtain this value.
   * 
   * This parameter is required.
   * 
   * @example
   * a882e590-b87b-45a6-87b9-d0a3e5a0****
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      honeypotImageId: 'HoneypotImageId',
      honeypotImageName: 'HoneypotImageName',
      honeypotName: 'HoneypotName',
      meta: 'Meta',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      honeypotImageId: 'string',
      honeypotImageName: 'string',
      honeypotName: 'string',
      meta: 'string',
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

