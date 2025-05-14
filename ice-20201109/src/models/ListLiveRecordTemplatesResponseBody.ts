// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLiveRecordTemplatesResponseBodyRecordTemplateList } from "./ListLiveRecordTemplatesResponseBodyRecordTemplateList";


export class ListLiveRecordTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of recording templates.
   */
  recordTemplateList?: ListLiveRecordTemplatesResponseBodyRecordTemplateList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEA98A0C-7870-15FE-B96F-8880BB600A2C
   */
  requestId?: string;
  /**
   * @remarks
   * The sorting order. By default, the query results are sorted by creation time in descending order.
   * 
   * Valid values:
   * 
   * *   asc: sorts the query results in ascending order.
   * *   desc: sorts the query results in descending order.
   * 
   * @example
   * desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      recordTemplateList: 'RecordTemplateList',
      requestId: 'RequestId',
      sortBy: 'SortBy',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      recordTemplateList: { 'type': 'array', 'itemType': ListLiveRecordTemplatesResponseBodyRecordTemplateList },
      requestId: 'string',
      sortBy: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.recordTemplateList)) {
      $dara.Model.validateArray(this.recordTemplateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

