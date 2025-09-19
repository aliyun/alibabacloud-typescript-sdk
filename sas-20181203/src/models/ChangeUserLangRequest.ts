// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeUserLangRequest extends $dara.Model {
  /**
   * @remarks
   * The new language. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  userLang?: string;
  static names(): { [key: string]: string } {
    return {
      userLang: 'UserLang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userLang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

