// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAccessPointsResponseBodyAccessPoints } from "./DescribeAccessPointsResponseBodyAccessPoints";


export class DescribeAccessPointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the access point.
   */
  accessPoints?: DescribeAccessPointsResponseBodyAccessPoints[];
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * MTY4NzcxOTcwMjAzMDk2Nzc0MyM4MDM4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 6299428C-3861-435D-AE54-9B330A00****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of access points.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessPoints: 'AccessPoints',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPoints: { 'type': 'array', 'itemType': DescribeAccessPointsResponseBodyAccessPoints },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.accessPoints)) {
      $dara.Model.validateArray(this.accessPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

