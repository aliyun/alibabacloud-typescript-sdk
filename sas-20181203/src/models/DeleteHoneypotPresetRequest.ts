// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHoneypotPresetRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the honeypot template.
   * >Call the [ListHoneypotPreset](~~ListHoneypotPreset~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 84104b7b-a2bc-41df-a190-12298f99xxxx
   */
  honeypotPresetId?: string;
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
  static names(): { [key: string]: string } {
    return {
      honeypotPresetId: 'HoneypotPresetId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      honeypotPresetId: 'string',
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

