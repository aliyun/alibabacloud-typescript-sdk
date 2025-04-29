// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRouteTablesResponseBodyRouteTables } from "./DescribeRouteTablesResponseBodyRouteTables";


export class DescribeRouteTablesResponseBody extends $dara.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  routeTables?: DescribeRouteTablesResponseBodyRouteTables;
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
      routeTables: DescribeRouteTablesResponseBodyRouteTables,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.routeTables && typeof (this.routeTables as any).validate === 'function') {
      (this.routeTables as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

