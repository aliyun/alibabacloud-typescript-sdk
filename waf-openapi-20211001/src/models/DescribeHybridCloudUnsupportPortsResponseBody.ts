// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudUnsupportPortsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of ports for the HTTP protocol. The value is a string. Multiple ports are returned in the **port1,port2,port3** format.
   * 
   * @example
   * 80,8080
   */
  httpPorts?: string;
  /**
   * @remarks
   * The list of ports for the HTTPS protocol. The value is a string. Multiple ports are returned in the **port1,port2,port3** format.
   * 
   * @example
   * 443,8443,8021,3443,2443,9011
   */
  httpsPorts?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C2E97B3F-1623-4CDF-A7E2-FD9D****027A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      httpPorts: 'HttpPorts',
      httpsPorts: 'HttpsPorts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpPorts: 'string',
      httpsPorts: 'string',
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

