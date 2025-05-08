// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEpnInstancesResponseBodyEPNInstances } from "./DescribeEpnInstancesResponseBodyEpninstances";


export class DescribeEpnInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of EPN instances.
   */
  EPNInstances?: DescribeEpnInstancesResponseBodyEPNInstances;
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
   * 40
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A1707FC0-430C-423A-B624-284046B20399
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      EPNInstances: 'EPNInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstances: DescribeEpnInstancesResponseBodyEPNInstances,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.EPNInstances && typeof (this.EPNInstances as any).validate === 'function') {
      (this.EPNInstances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

