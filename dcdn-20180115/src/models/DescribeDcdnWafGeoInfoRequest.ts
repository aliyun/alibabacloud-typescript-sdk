// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnWafGeoInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the information to return. Valid values:
   * 
   * *   cn: Chinese
   * *   en: English
   * 
   * This parameter is required.
   * 
   * @example
   * cn
   */
  language?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

