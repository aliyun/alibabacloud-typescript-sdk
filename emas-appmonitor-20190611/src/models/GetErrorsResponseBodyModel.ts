// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetErrorsResponseBodyModelItems } from "./GetErrorsResponseBodyModelItems";


export class GetErrorsResponseBodyModel extends $dara.Model {
  items?: GetErrorsResponseBodyModelItems[];
  /**
   * @example
   * 10
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  pages?: number;
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      pages: 'Pages',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetErrorsResponseBodyModelItems },
      pageNum: 'number',
      pageSize: 'number',
      pages: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

