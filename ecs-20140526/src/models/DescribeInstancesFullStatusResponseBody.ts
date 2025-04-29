// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesFullStatusResponseBodyInstanceFullStatusSet } from "./DescribeInstancesFullStatusResponseBodyInstanceFullStatusSet";


export class DescribeInstancesFullStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried instances.
   * 
   * >  If no instances exist, this parameter is empty.
   */
  instanceFullStatusSet?: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSet;
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
   * 1
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
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceFullStatusSet: 'InstanceFullStatusSet',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceFullStatusSet: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSet,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.instanceFullStatusSet && typeof (this.instanceFullStatusSet as any).validate === 'function') {
      (this.instanceFullStatusSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

