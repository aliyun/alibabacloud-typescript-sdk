// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCenRouteMapsResponseBodyRouteMaps } from "./DescribeCenRouteMapsResponseBodyRouteMaps";


export class DescribeCenRouteMapsResponseBody extends $dara.Model {
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
   * The request ID.
   * 
   * @example
   * 24CE1987-D1D1-5324-9BAD-2750B60E6ABB
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the routing policy.
   */
  routeMaps?: DescribeCenRouteMapsResponseBodyRouteMaps;
  /**
   * @remarks
   * The total number of entries returned.
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
      routeMaps: 'RouteMaps',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      routeMaps: DescribeCenRouteMapsResponseBodyRouteMaps,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.routeMaps && typeof (this.routeMaps as any).validate === 'function') {
      (this.routeMaps as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

