// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSystemLogResponseBodySystemLog } from "./DescribeSystemLogResponseBodySystemLog";


export class DescribeSystemLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8BC3A33A-F832-58DB-952F-7682A25AD14C
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of details of the billing logs for the burstable clean bandwidth.
   */
  systemLog?: DescribeSystemLogResponseBodySystemLog[];
  /**
   * @remarks
   * The total number of billing logs for the burstable clean bandwidth.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      systemLog: 'SystemLog',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      systemLog: { 'type': 'array', 'itemType': DescribeSystemLogResponseBodySystemLog },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.systemLog)) {
      $dara.Model.validateArray(this.systemLog);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

