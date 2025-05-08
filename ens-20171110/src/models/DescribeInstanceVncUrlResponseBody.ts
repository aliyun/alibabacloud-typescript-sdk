// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceVncUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The URL of the VNC management terminal.
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

