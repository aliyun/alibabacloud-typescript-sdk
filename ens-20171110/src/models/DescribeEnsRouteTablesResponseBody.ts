// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsRouteTablesResponseBodyRouteTables } from "./DescribeEnsRouteTablesResponseBodyRouteTables";


export class DescribeEnsRouteTablesResponseBody extends $dara.Model {
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
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DC51ACB0-460D-5CA0-BA2D-E1F3B5547AE9
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the route tables.
   */
  routeTables?: DescribeEnsRouteTablesResponseBodyRouteTables[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      routeTables: 'RouteTables',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      routeTables: { 'type': 'array', 'itemType': DescribeEnsRouteTablesResponseBodyRouteTables },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.routeTables)) {
      $dara.Model.validateArray(this.routeTables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

