// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListQueueResponseBodyDataPageData } from "./ListQueueResponseBodyDataPageData";


export class ListQueueResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data returned on the current page.
   */
  pageData?: ListQueueResponseBodyDataPageData[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 3
   */
  pages?: number;
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 130
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageData: 'PageData',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      pages: 'Pages',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageData: { 'type': 'array', 'itemType': ListQueueResponseBodyDataPageData },
      pageNum: 'number',
      pageSize: 'number',
      pages: 'number',
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pageData)) {
      $dara.Model.validateArray(this.pageData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

