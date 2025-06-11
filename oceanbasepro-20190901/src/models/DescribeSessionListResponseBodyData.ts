// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSessionListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The address of the client, with the format ip:port.
   * 
   * @example
   * 192.***.**.100:80
   */
  host?: string;
  /**
   * @remarks
   * The session ID of the proxy service.
   * 
   * @example
   * d2c90ad0-bc54-410f-bb89-2dcf14aa3c6d
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

