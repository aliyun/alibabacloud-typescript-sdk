// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceStatusResponseBodyInstanceStatuses } from "./DescribeInstanceStatusResponseBodyInstanceStatuses";


export class DescribeInstanceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs and status of the ECS instances.
   */
  instanceStatuses?: DescribeInstanceStatusResponseBodyInstanceStatuses;
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
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of instances.
   * 
   * @example
   * 58
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceStatuses: 'InstanceStatuses',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceStatuses: DescribeInstanceStatusResponseBodyInstanceStatuses,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.instanceStatuses && typeof (this.instanceStatuses as any).validate === 'function') {
      (this.instanceStatuses as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

