// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceMonitorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The collection frequency of monitoring data for the instance. Valid value: **5**. Unit: seconds.
   * 
   * @example
   * 5
   */
  granularity?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EFD65226-08CC-4C4D-B6A4-CB3C382F67B0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      granularity: 'Granularity',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      granularity: 'string',
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

