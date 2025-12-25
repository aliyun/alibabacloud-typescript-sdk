// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductsRequest extends $dara.Model {
  /**
   * @remarks
   * The language that you use, supporting English, Chinese, and Japanese. Valid values: en, zh, and jp, which indicate English, Chinese, and Japanese, respectively.
   * 
   * @example
   * cn
   */
  language?: string;
  /**
   * @remarks
   * The name of the product. Fuzzy search is supported. This parameter is optional.
   * 
   * @example
   * ecs
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

