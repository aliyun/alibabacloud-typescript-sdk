// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstances } from "./DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstances";


export class DescribeGlobalAccelerationInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the GA instances.
   */
  globalAccelerationInstances?: DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstances;
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
   * The request ID.
   * 
   * @example
   * 6B4EE38D-C75B-4E1F-844E-863A94430676
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      globalAccelerationInstances: 'GlobalAccelerationInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalAccelerationInstances: DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstances,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.globalAccelerationInstances && typeof (this.globalAccelerationInstances as any).validate === 'function') {
      (this.globalAccelerationInstances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

