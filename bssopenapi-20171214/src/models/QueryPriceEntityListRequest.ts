// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPriceEntityListRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  commodityCode?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

