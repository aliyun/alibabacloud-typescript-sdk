// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceSupportMaxPerformanceResponseBodyPerformances } from "./DescribeDbinstanceSupportMaxPerformanceResponseBodyPerformances";


export class DescribeDBInstanceSupportMaxPerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gp-bp***************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The queried performance metric.
   */
  performances?: DescribeDBInstanceSupportMaxPerformanceResponseBodyPerformances;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      performances: 'Performances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      performances: DescribeDBInstanceSupportMaxPerformanceResponseBodyPerformances,
      requestId: 'string',
    };
  }

  validate() {
    if(this.performances && typeof (this.performances as any).validate === 'function') {
      (this.performances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

