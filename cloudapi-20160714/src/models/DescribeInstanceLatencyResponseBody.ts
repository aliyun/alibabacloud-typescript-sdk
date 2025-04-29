// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceLatencyResponseBodyInstanceLatency } from "./DescribeInstanceLatencyResponseBodyInstanceLatency";


export class DescribeInstanceLatencyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of average latencies in the instance.
   */
  instanceLatency?: DescribeInstanceLatencyResponseBodyInstanceLatency;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ004
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceLatency: 'InstanceLatency',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceLatency: DescribeInstanceLatencyResponseBodyInstanceLatency,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceLatency && typeof (this.instanceLatency as any).validate === 'function') {
      (this.instanceLatency as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

