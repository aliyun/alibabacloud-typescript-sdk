// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetHostShareKeyResponseBodyHostShareKey } from "./GetHostShareKeyResponseBodyHostShareKey";


export class GetHostShareKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned information about the shared key.
   */
  hostShareKey?: GetHostShareKeyResponseBodyHostShareKey;
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
      hostShareKey: 'HostShareKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostShareKey: GetHostShareKeyResponseBodyHostShareKey,
      requestId: 'string',
    };
  }

  validate() {
    if(this.hostShareKey && typeof (this.hostShareKey as any).validate === 'function') {
      (this.hostShareKey as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

