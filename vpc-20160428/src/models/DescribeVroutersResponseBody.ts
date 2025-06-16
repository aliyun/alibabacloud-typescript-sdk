// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVRoutersResponseBodyVRouters } from "./DescribeVroutersResponseBodyVrouters";


export class DescribeVRoutersResponseBody extends $dara.Model {
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
   * The number of entries returned per page.
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
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The details about the vRouters.
   */
  VRouters?: DescribeVRoutersResponseBodyVRouters;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      VRouters: 'VRouters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      VRouters: DescribeVRoutersResponseBodyVRouters,
    };
  }

  validate() {
    if(this.VRouters && typeof (this.VRouters as any).validate === 'function') {
      (this.VRouters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

