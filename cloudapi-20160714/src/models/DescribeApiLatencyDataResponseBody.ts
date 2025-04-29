// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiLatencyDataResponseBodyCallLatencys } from "./DescribeApiLatencyDataResponseBodyCallLatencys";


export class DescribeApiLatencyDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned information about API call latency. It is an array consisting of MonitorItem data.
   */
  callLatencys?: DescribeApiLatencyDataResponseBodyCallLatencys;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ001
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callLatencys: 'CallLatencys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callLatencys: DescribeApiLatencyDataResponseBodyCallLatencys,
      requestId: 'string',
    };
  }

  validate() {
    if(this.callLatencys && typeof (this.callLatencys as any).validate === 'function') {
      (this.callLatencys as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

