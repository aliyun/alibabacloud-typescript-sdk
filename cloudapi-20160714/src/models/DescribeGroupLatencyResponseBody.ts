// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGroupLatencyResponseBodyLatencyPacket } from "./DescribeGroupLatencyResponseBodyLatencyPacket";


export class DescribeGroupLatencyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The latency information.
   */
  latencyPacket?: DescribeGroupLatencyResponseBodyLatencyPacket;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DC3AB0-421C-5371-8170-86AEABF77AD0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      latencyPacket: 'LatencyPacket',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latencyPacket: DescribeGroupLatencyResponseBodyLatencyPacket,
      requestId: 'string',
    };
  }

  validate() {
    if(this.latencyPacket && typeof (this.latencyPacket as any).validate === 'function') {
      (this.latencyPacket as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

