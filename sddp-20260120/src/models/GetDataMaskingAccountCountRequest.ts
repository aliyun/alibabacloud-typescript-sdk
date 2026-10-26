// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataMaskingAccountCountRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response description. Valid values: zh: Chinese. en: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The list of cloud product type identifiers. Separate multiple values with commas (,). For column encryption scenarios, the values are 5 (RDS), 8 (PolarDB), and 27 (PolarDB-X 2.0).
   * 
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

