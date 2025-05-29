// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePublishedRouteEntriesResponseBodyPublishedRouteEntries } from "./DescribePublishedRouteEntriesResponseBodyPublishedRouteEntries";


export class DescribePublishedRouteEntriesResponseBody extends $dara.Model {
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * A list of routes.
   */
  publishedRouteEntries?: DescribePublishedRouteEntriesResponseBodyPublishedRouteEntries;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FF1A7B2A-677F-4F71-96EA-6002B329F437
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      publishedRouteEntries: 'PublishedRouteEntries',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      publishedRouteEntries: DescribePublishedRouteEntriesResponseBodyPublishedRouteEntries,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.publishedRouteEntries && typeof (this.publishedRouteEntries as any).validate === 'function') {
      (this.publishedRouteEntries as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

