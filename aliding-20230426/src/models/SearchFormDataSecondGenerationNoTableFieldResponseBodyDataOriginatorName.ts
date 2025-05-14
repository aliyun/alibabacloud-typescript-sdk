// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchFormDataSecondGenerationNoTableFieldResponseBodyDataOriginatorName extends $dara.Model {
  nameInChinese?: string;
  /**
   * @example
   * English
   */
  nameInEnglish?: string;
  static names(): { [key: string]: string } {
    return {
      nameInChinese: 'NameInChinese',
      nameInEnglish: 'NameInEnglish',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameInChinese: 'string',
      nameInEnglish: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

