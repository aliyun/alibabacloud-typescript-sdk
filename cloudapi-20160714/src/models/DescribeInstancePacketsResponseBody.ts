// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancePacketsResponseBodyInstancePackets } from "./DescribeInstancePacketsResponseBodyInstancePackets";


export class DescribeInstancePacketsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of inbound and outbound data packets in the instance.
   */
  instancePackets?: DescribeInstancePacketsResponseBodyInstancePackets;
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
      instancePackets: 'InstancePackets',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instancePackets: DescribeInstancePacketsResponseBodyInstancePackets,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instancePackets && typeof (this.instancePackets as any).validate === 'function') {
      (this.instancePackets as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

