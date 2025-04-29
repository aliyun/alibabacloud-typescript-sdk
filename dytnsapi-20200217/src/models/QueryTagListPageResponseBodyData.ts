// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryTagListPageResponseBodyDataRecords } from "./QueryTagListPageResponseBodyDataRecords";


export class QueryTagListPageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 11
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 24
   */
  pageSize?: number;
  /**
   * @remarks
   * The retruned data.
   */
  records?: QueryTagListPageResponseBodyDataRecords[];
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 32
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of returned pages.
   * 
   * @example
   * 91
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      records: 'Records',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': QueryTagListPageResponseBodyDataRecords },
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

