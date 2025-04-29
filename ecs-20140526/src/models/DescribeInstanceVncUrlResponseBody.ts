// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceVncUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The VNC logon address.
   * 
   * >  The VNC logon address returned is valid only for 15 seconds. If a connection is not established within 15 seconds after a successful call, the VNC logon address expires and you must call the DescribeInstanceVncUrl operation to obtain a new logon address.
   * 
   * @example
   * wss%3A%2F%2Fhz01-vncproxy.aliyun.com%2Fwebsockify%2F%3Fs%3DDvh%252FIA%252BYc73gWO48cBx2gBxUDVzaAnSKr74pq30mzqUYgeUMcB%252FbkNixDxdEA996
   */
  vncUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vncUrl: 'VncUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vncUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

