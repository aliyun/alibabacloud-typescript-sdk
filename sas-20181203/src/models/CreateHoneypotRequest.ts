// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHoneypotRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the honeypot image.
   * 
   * > You can call the [ListAvailableHoneypot](~~ListAvailableHoneypot~~) operation to query the IDs of images from the **HoneypotImageId** response parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * sha256:ebc4c102ac407d53733c2373e8888a733ddce86f163ccbe7492ae1cbf26****
   */
  honeypotImageId?: string;
  /**
   * @remarks
   * The name of the honeypot image.
   * 
   * > You can call the [ListAvailableHoneypot](~~ListAvailableHoneypot~~) operation to query the names of images from the **HoneypotImageName** response parameter.
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
   * The custom configuration of the honeypot in the JSON format. The value contains the following fields:
   * 
   * *   **trojan_git**: Git-specific Defense. Valid values:
   * 
   *     *   **zip**: Git Source Code Package
   *     *   **web**: Git Directory Leak
   *     *   **close**: Disabled
   * 
   * *   **trojan_git_addr**: Git Trojan Address.
   * 
   * *   **trojan_git.zip**: Git Trojan.
   * 
   * *   **burp**: Burp-specific Defense. Valid values:
   * 
   *     *   **open**: Enable
   *     *   **close**: Disable
   * 
   * *   **portrait_option**: Source Tracing Configuration. Valid values:
   * 
   *     *   **false**: Disable
   *     *   **true**: Enable
   * 
   * @example
   * {\\"trojan_git\\":\\"close\\",\\"burp\\":\\"close\\",\\"portrait_option\\":\\"false\\"}
   */
  meta?: string;
  /**
   * @remarks
   * The ID of the management node.
   * 
   * > You can call the [ListHoneypotNode](~~ListHoneypotNode~~) operation to query the IDs of management nodes.
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

