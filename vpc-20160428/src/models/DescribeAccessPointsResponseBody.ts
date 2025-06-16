// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAccessPointsResponseBodyAccessPointSet } from "./DescribeAccessPointsResponseBodyAccessPointSet";


export class DescribeAccessPointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the access point.
   */
  accessPointSet?: DescribeAccessPointsResponseBodyAccessPointSet;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Maximum value: **50**. Default value: **10**.
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
   * 3E85D803-C7CF-4BCD-9CFE-6DBA1DFFA027
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessPointSet: 'AccessPointSet',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointSet: DescribeAccessPointsResponseBodyAccessPointSet,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.accessPointSet && typeof (this.accessPointSet as any).validate === 'function') {
      (this.accessPointSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

