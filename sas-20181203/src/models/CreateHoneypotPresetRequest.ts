// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHoneypotPresetRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the honeypot image.
   * 
   * This parameter is required.
   * 
   * @example
   * webmin
   */
  honeypotImageName?: string;
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
  /**
   * @remarks
   * The custom configurations of the honeypot template. The value is a JSON string that contains the following fields:
   * 
   * *   **portrait_option**: Social Source Tracing
   * *   **burp**: Burp-specific Defense
   * *   **trojan_git**: Git-specific Defense
   * 
   * This parameter is required.
   * 
   * @example
   * {"burp":"close","trojan_git":"close","portrait_option":"true"}
   */
  meta?: string;
  /**
   * @remarks
   * The ID of the management node to which you want to deploy honeypots.
   * 
   * > You can call the [ListHoneypotNode](~~ListHoneypotNode~~) operation to query the IDs of management nodes.
   * 
   * This parameter is required.
   * 
   * @example
   * 9373fe59-74d5-4505-bb24-c85352fb****
   */
  nodeId?: string;
  /**
   * @remarks
   * The custom name of the honeypot template.
   * 
   * This parameter is required.
   * 
   * @example
   * WebMin-online
   */
  presetName?: string;
  static names(): { [key: string]: string } {
    return {
      honeypotImageName: 'HoneypotImageName',
      lang: 'Lang',
      meta: 'Meta',
      nodeId: 'NodeId',
      presetName: 'PresetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      honeypotImageName: 'string',
      lang: 'string',
      meta: 'string',
      nodeId: 'string',
      presetName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

