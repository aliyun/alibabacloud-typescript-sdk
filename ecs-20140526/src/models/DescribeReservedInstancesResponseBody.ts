// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeReservedInstancesResponseBodyReservedInstances } from "./DescribeReservedInstancesResponseBodyReservedInstances";


export class DescribeReservedInstancesResponseBody extends $dara.Model {
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
   * E572643C-6A29-49D6-9D4E-6CFA4E063A3E
   */
  requestId?: string;
  /**
   * @remarks
   * Details about the reserved instances.
   */
  reservedInstances?: DescribeReservedInstancesResponseBodyReservedInstances;
  /**
   * @remarks
   * The total number of reserved instances.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      reservedInstances: 'ReservedInstances',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      reservedInstances: DescribeReservedInstancesResponseBodyReservedInstances,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.reservedInstances && typeof (this.reservedInstances as any).validate === 'function') {
      (this.reservedInstances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

