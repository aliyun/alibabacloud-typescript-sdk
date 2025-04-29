// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceSlbConnectResponseBodyInstanceSlbConnect } from "./DescribeInstanceSlbConnectResponseBodyInstanceSlbConnect";


export class DescribeInstanceSlbConnectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of concurrent connections in the instance.
   */
  instanceSlbConnect?: DescribeInstanceSlbConnectResponseBodyInstanceSlbConnect;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E7FE7172-AA75-5880-B6F7-C00893E9BC06
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceSlbConnect: 'InstanceSlbConnect',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSlbConnect: DescribeInstanceSlbConnectResponseBodyInstanceSlbConnect,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceSlbConnect && typeof (this.instanceSlbConnect as any).validate === 'function') {
      (this.instanceSlbConnect as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

