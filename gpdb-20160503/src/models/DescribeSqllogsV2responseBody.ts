// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSQLLogsV2ResponseBodyItems } from "./DescribeSqllogsV2responseBodyItems";


export class DescribeSQLLogsV2ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * account name invalid
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The queried SQL execution logs.
   */
  items?: DescribeSQLLogsV2ResponseBodyItems[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 1
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A7941C94-B92F-46A0-BD3E-2D**********
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      items: { 'type': 'array', 'itemType': DescribeSQLLogsV2ResponseBodyItems },
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
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

