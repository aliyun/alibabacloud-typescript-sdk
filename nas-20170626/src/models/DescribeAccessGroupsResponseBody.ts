// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAccessGroupsResponseBodyAccessGroups } from "./DescribeAccessGroupsResponseBodyAccessGroups";


export class DescribeAccessGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried permission groups.
   */
  accessGroups?: DescribeAccessGroupsResponseBodyAccessGroups;
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
   * The number of permission groups returned per page.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2514F97E-FFF0-4A1F-BF04-729CEAC6****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of permission groups.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessGroups: 'AccessGroups',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroups: DescribeAccessGroupsResponseBodyAccessGroups,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.accessGroups && typeof (this.accessGroups as any).validate === 'function') {
      (this.accessGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

