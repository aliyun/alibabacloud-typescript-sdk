// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllPublicMediaTagsResponseBodyMediaTagListOptions extends $dara.Model {
  /**
   * @remarks
   * The option name in Chinese.
   */
  optionChineseName?: string;
  /**
   * @remarks
   * The option name in English.
   * 
   * @example
   * Angry
   */
  optionEnglishName?: string;
  /**
   * @remarks
   * The option ID.
   * 
   * @example
   * Angry
   */
  optionId?: string;
  static names(): { [key: string]: string } {
    return {
      optionChineseName: 'OptionChineseName',
      optionEnglishName: 'OptionEnglishName',
      optionId: 'OptionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optionChineseName: 'string',
      optionEnglishName: 'string',
      optionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

