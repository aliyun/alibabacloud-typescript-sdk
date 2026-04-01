// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceMonitorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The monitoring frequency. Unit: seconds.
   * 
   * @example
   * 60
   */
  period?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30829FD4-1A84-4C2A-A625-2EADECB95CA3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      period: 'Period',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      period: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

