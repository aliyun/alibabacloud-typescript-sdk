// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTransitRoutersResponseBodyTransitRouters } from "./ListTransitRoutersResponseBodyTransitRouters";


export class ListTransitRoutersResponseBody extends $dara.Model {
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
   * The ID of the request.
   * 
   * @example
   * 68521297-5FA6-46CB-B4EB-658F1C68C8CC
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * A list of transit routers.
   */
  transitRouters?: ListTransitRoutersResponseBodyTransitRouters[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      transitRouters: 'TransitRouters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      transitRouters: { 'type': 'array', 'itemType': ListTransitRoutersResponseBodyTransitRouters },
    };
  }

  validate() {
    if(Array.isArray(this.transitRouters)) {
      $dara.Model.validateArray(this.transitRouters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

