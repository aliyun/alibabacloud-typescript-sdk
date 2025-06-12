// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportCorpNumbersRequest extends $dara.Model {
  city?: string;
  corpName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [\\"02912345678\\"]
   */
  numberList?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  provider?: string;
  province?: string;
  tagList?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      corpName: 'CorpName',
      numberList: 'NumberList',
      provider: 'Provider',
      province: 'Province',
      tagList: 'TagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      corpName: 'string',
      numberList: 'string',
      provider: 'string',
      province: 'string',
      tagList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

