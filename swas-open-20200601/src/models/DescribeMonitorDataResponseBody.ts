// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitorDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The monitoring data.
   * 
   * @example
   * []
   */
  datapoints?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nOc1nj4M9UaAZ/I8db***
   */
  nextToken?: string;
  /**
   * @remarks
   * The interval at which the monitoring data is queried. Valid values: 60, 300, and 900. Unit: seconds.
   * 
   * > If you set the MetricName request parameter to FLOW_USED, the value of Period is 3600 (one hour).
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
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datapoints: 'Datapoints',
      nextToken: 'NextToken',
      period: 'Period',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datapoints: 'string',
      nextToken: 'string',
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

