// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySensitiveSwitchRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * id_card
   */
  sensitiveCategory?: string;
  /**
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

