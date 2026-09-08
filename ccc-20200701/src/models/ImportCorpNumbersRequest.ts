// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportCorpNumbersRequest extends $dara.Model {
  /**
   * @remarks
   * The city.
   * 
   * @example
   * 西安
   */
  city?: string;
  /**
   * @remarks
   * The enterprise name.
   * 
   * @example
   * xxx公司
   */
  corpName?: string;
  /**
   * @remarks
   * The list of numbers.
   * 
   * This parameter is required.
   * 
   * @example
   * [\\"029xxxxxx\\"]
   */
  numberList?: string;
  /**
   * @remarks
   * The line information.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx通信-陕西线路
   */
  provider?: string;
  /**
   * @remarks
   * The province.
   * 
   * @example
   * 陕西
   */
  province?: string;
  /**
   * @remarks
   * The business tags.
   * 
   * @example
   * 无
   */
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

