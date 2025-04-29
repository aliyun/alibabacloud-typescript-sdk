// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceDropPacketResponseBodyInstanceDropPacket } from "./DescribeInstanceDropPacketResponseBodyInstanceDropPacket";


export class DescribeInstanceDropPacketResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of dropped packets in the instance.
   */
  instanceDropPacket?: DescribeInstanceDropPacketResponseBodyInstanceDropPacket;
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
      instanceDropPacket: 'InstanceDropPacket',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceDropPacket: DescribeInstanceDropPacketResponseBodyInstanceDropPacket,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceDropPacket && typeof (this.instanceDropPacket as any).validate === 'function') {
      (this.instanceDropPacket as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

