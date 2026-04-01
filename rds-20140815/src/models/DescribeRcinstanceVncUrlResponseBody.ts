// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceVncUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The VNC logon address.
   * 
   * >  The address returned is valid only for 15 seconds. If you do not use the returned address to establish a connection within 15 seconds, the address expires and you must call the operation again to obtain a new address.
   * 
   * @example
   * https://g.alicdn.com/aliyun/ecs-console-vnc2/0.0.8/index.html?vncUrl=****&instanceId=i-2vcb1qjj8z5dl8iw****&isWindows=false
   */
  loginUrl?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F2911788-25E8-42E5-A3A3-1B38D263F01E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loginUrl: 'LoginUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginUrl: 'string',
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

