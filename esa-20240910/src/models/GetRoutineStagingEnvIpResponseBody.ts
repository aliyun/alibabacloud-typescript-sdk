// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoutineStagingEnvIpResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IPv4 addresses.
   */
  IPV4?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EDBD3EB3-97DA-5465-AEF5-8DCA5DC5E395
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      IPV4: 'IPV4',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPV4: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.IPV4)) {
      $dara.Model.validateArray(this.IPV4);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

