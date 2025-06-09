// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetIssuesResponseBodyModelItems } from "./GetIssuesResponseBodyModelItems";


export class GetIssuesResponseBodyModel extends $dara.Model {
  items?: GetIssuesResponseBodyModelItems[];
  /**
   * @example
   * 2
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
   * 0
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
      items: { 'type': 'array', 'itemType': GetIssuesResponseBodyModelItems },
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

