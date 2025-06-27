// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGtmInstancesResponseBodyGtmInstances } from "./DescribeGtmInstancesResponseBodyGtmInstances";


export class DescribeGtmInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of queried instances.
   */
  gtmInstances?: DescribeGtmInstancesResponseBodyGtmInstances;
  /**
   * @remarks
   * The returned page number.
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 193B0163-7F93-42DF-AB05-ACEEB7D22707
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      gtmInstances: 'GtmInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gtmInstances: DescribeGtmInstancesResponseBodyGtmInstances,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(this.gtmInstances && typeof (this.gtmInstances as any).validate === 'function') {
      (this.gtmInstances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

