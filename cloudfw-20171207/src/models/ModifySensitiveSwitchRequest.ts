// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySensitiveSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The type of sensitive data.
   * 
   * @example
   * id_card
   */
  sensitiveCategory?: string;
  /**
   * @remarks
   * The status of the switch. Valid values:
   * 
   * - **1**: on.
   * 
   * - **0**: off.
   * 
   * @example
   * 1
   */
  switchStatus?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sensitiveCategory: 'SensitiveCategory',
      switchStatus: 'SwitchStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sensitiveCategory: 'string',
      switchStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

