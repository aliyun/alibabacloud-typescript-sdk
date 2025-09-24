// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCommodityListRequest extends $dara.Model {
  lang?: string;
  /**
   * @remarks
   * The code of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      productCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

