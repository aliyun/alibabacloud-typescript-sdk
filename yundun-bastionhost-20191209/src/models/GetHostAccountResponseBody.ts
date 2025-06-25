// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetHostAccountResponseBodyHostAccount } from "./GetHostAccountResponseBodyHostAccount";


export class GetHostAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the host account that was queried.
   */
  hostAccount?: GetHostAccountResponseBodyHostAccount;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccount: 'HostAccount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccount: GetHostAccountResponseBodyHostAccount,
      requestId: 'string',
    };
  }

  validate() {
    if(this.hostAccount && typeof (this.hostAccount as any).validate === 'function') {
      (this.hostAccount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

