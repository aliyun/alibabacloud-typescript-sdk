// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPagesResponseBodyPages } from "./ListPagesResponseBodyPages";


export class ListPagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The custom error pages. Each element in the array contains error page-specific information.
   */
  pages?: ListPagesResponseBodyPages[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @remarks
   * The number of custom error pages after filtering.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @remarks
   * The number of custom error pages that you created.
   * 
   * @example
   * 10
   */
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pages: 'Pages',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      pages: { 'type': 'array', 'itemType': ListPagesResponseBodyPages },
      requestId: 'string',
      totalCount: 'number',
      usage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pages)) {
      $dara.Model.validateArray(this.pages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

