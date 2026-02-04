// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceMonitorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The collection frequency of the monitoring data. Unit: second.
   * 
   * @example
   * 5
   */
  interval?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 276F582D-C6B2-519C-A5ED-2A92BB15EC07
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      interval: 'Interval',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interval: 'string',
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

