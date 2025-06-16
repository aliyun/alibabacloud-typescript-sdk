// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSnatTableEntriesResponseBodySnatTableEntries } from "./DescribeSnatTableEntriesResponseBodySnatTableEntries";


export class DescribeSnatTableEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of the returned page.
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
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6D7E89B1-1C5B-412B-8585-4908E222EED5
   */
  requestId?: string;
  /**
   * @remarks
   * Details of SNAT entries.
   */
  snatTableEntries?: DescribeSnatTableEntriesResponseBodySnatTableEntries;
  /**
   * @remarks
   * The number of returned entries.
   * 
   * @example
   * 1
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
      snatTableEntries: DescribeSnatTableEntriesResponseBodySnatTableEntries,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.snatTableEntries && typeof (this.snatTableEntries as any).validate === 'function') {
      (this.snatTableEntries as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

