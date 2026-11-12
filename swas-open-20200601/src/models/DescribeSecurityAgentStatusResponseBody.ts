// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityAgentStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the Security Center agent. Valid values:
   * 
   * - pause: The Security Center agent suspends protection for your server.
   * 
   * - online: The Security Center agent is protecting your server.
   * 
   * - offline: The Security Center agent does not protect your server.
   * 
   * @example
   * online
   */
  clientStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientStatus: 'ClientStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientStatus: 'string',
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

