// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDisksResponseBodyDisks } from "./DescribeDisksResponseBodyDisks";


export class DescribeDisksResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the disks.
   */
  disks?: DescribeDisksResponseBodyDisks;
  /**
   * @remarks
   * The returned pagination token which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * >  This parameter will be removed in the future. We recommend that you use `NextToken` and `MaxResults` for a paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * >  This parameter will be removed in the future. We recommend that you use `NextToken` and `MaxResults` for a paged query.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      disks: 'Disks',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disks: DescribeDisksResponseBodyDisks,
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.disks && typeof (this.disks as any).validate === 'function') {
      (this.disks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

