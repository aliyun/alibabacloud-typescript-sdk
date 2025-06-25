// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetHostResponseBodyHost } from "./GetHostResponseBodyHost";


export class GetHostResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned information about the host.
   */
  host?: GetHostResponseBodyHost;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: GetHostResponseBodyHost,
      requestId: 'string',
    };
  }

  validate() {
    if(this.host && typeof (this.host as any).validate === 'function') {
      (this.host as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

