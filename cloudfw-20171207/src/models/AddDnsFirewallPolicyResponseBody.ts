// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDnsFirewallPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the access control list.
   * 
   * @example
   * f88dae6f-XXX-XXX-613de9ab2be8
   */
  aclUuid?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 71209DFE-XXX-XXX-52B4A4E9DA3B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclUuid: 'AclUuid',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUuid: 'string',
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

