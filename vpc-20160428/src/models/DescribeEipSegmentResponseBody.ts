// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEipSegmentResponseBodyEipSegments } from "./DescribeEipSegmentResponseBodyEipSegments";


export class DescribeEipSegmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the contiguous EIP group.
   */
  eipSegments?: DescribeEipSegmentResponseBodyEipSegments;
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F7A6301A-64BA-41EC-8284-8F4838C15D1F
   */
  requestId?: string;
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
      eipSegments: 'EipSegments',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipSegments: DescribeEipSegmentResponseBodyEipSegments,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.eipSegments && typeof (this.eipSegments as any).validate === 'function') {
      (this.eipSegments as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

