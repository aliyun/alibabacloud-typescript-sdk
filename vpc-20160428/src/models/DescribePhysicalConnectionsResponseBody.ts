// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePhysicalConnectionsResponseBodyPhysicalConnectionSet } from "./DescribePhysicalConnectionsResponseBodyPhysicalConnectionSet";


export class DescribePhysicalConnectionsResponseBody extends $dara.Model {
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
   * The number of entries per page. Default value: **10**. Valid values: **1** to **50**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of Express Connect circuits.
   */
  physicalConnectionSet?: DescribePhysicalConnectionsResponseBodyPhysicalConnectionSet;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0E6D0EC4-7C91-53E2-9F65-64BF713114B0
   */
  requestId?: string;
  /**
   * @remarks
   * The number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      physicalConnectionSet: 'PhysicalConnectionSet',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      physicalConnectionSet: DescribePhysicalConnectionsResponseBodyPhysicalConnectionSet,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.physicalConnectionSet && typeof (this.physicalConnectionSet as any).validate === 'function') {
      (this.physicalConnectionSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

