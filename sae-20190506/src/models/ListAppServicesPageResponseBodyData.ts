// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAppServicesPageResponseBodyDataResult } from "./ListAppServicesPageResponseBodyDataResult";


export class ListAppServicesPageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries returned on each page. Valid values: 0 to 9999.
   * 
   * @example
   * 9999
   */
  pageSize?: string;
  /**
   * @remarks
   * The result returned.
   */
  result?: ListAppServicesPageResponseBodyDataResult[];
  /**
   * @remarks
   * The total number of returned pages.
   * 
   * @example
   * 1
   */
  totalSize?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      result: { 'type': 'array', 'itemType': ListAppServicesPageResponseBodyDataResult },
      totalSize: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

