// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchFormDatasResponseBodyDataOriginatorUserName extends $dara.Model {
  nameInChinese?: string;
  /**
   * @example
   * EngilishName
   */
  nameInEnglish?: string;
  /**
   * @example
   * ZH-CN
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      nameInChinese: 'NameInChinese',
      nameInEnglish: 'NameInEnglish',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameInChinese: 'string',
      nameInEnglish: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

