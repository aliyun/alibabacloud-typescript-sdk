// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataMaskingAccountCountRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 5
   */
  productIds?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      productIds: 'ProductIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      productIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

