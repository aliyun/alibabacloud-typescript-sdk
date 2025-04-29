// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcAccessesResponseBodyVpcAccessAttributes } from "./DescribeVpcAccessesResponseBodyVpcAccessAttributes";


export class DescribeVpcAccessesResponseBody extends $dara.Model {
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
   * The number of entries returned on each page.
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
   * 8883AC74-259D-4C0B-99FC-0B7F9A588B2F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The information about the VPC access authorization. The information is an array consisting of VpcAccessAttribute data.
   */
  vpcAccessAttributes?: DescribeVpcAccessesResponseBodyVpcAccessAttributes;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpcAccessAttributes: 'VpcAccessAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vpcAccessAttributes: DescribeVpcAccessesResponseBodyVpcAccessAttributes,
    };
  }

  validate() {
    if(this.vpcAccessAttributes && typeof (this.vpcAccessAttributes as any).validate === 'function') {
      (this.vpcAccessAttributes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

