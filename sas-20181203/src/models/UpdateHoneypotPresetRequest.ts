// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHoneypotPresetRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the honeypot image.
   * 
   * @example
   * metabase
   */
  honeypotImageName?: string;
  /**
   * @remarks
   * The unique ID of the honeypot template.
   * >You can call the [ListHoneypotPreset](~~ListHoneypotPreset~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * f75eddce-e9d3-4a88-af95-b10b6f65xxxx
   */
  honeypotPresetId?: string;
  /**
   * @remarks
   * The language of the content in the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The custom parameters of the honeypot template. The value is a JSON string that contains the following fields:
   * - **portrait_option**: social tracing
   * - **burp**: Burp countermeasure
   * - **trojan_git**: Git countermeasure.
   * 
   * @example
   * {"portrait_option":true,"burp":"open"}
   */
  meta?: string;
  /**
   * @remarks
   * The custom name of the honeypot template.
   * 
   * @example
   * apc_web_python
   */
  presetName?: string;
  static names(): { [key: string]: string } {
    return {
      honeypotImageName: 'HoneypotImageName',
      honeypotPresetId: 'HoneypotPresetId',
      lang: 'Lang',
      meta: 'Meta',
      presetName: 'PresetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      honeypotImageName: 'string',
      honeypotPresetId: 'string',
      lang: 'string',
      meta: 'string',
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

