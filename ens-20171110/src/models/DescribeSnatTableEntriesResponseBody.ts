// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSnatTableEntriesResponseBodySnatTableEntries } from "./DescribeSnatTableEntriesResponseBodySnatTableEntries";


export class DescribeSnatTableEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the SNAT entries.
   */
  snatTableEntries?: DescribeSnatTableEntriesResponseBodySnatTableEntries[];
  /**
   * @remarks
   * The number of SNAT entries that are returned.
   * 
   * @example
   * 7
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      snatTableEntries: 'SnatTableEntries',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      snatTableEntries: { 'type': 'array', 'itemType': DescribeSnatTableEntriesResponseBodySnatTableEntries },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.snatTableEntries)) {
      $dara.Model.validateArray(this.snatTableEntries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

