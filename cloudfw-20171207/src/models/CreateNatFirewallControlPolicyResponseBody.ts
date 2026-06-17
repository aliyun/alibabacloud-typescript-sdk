// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNatFirewallControlPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the access control policy.
   * 
   * > To modify an access control policy, you must provide its unique ID. You can call the `DescribeNatFirewallControlPolicy` operation to obtain this ID.
   * 
   * @example
   * 6504d2fb-ab36-49c3-92a6-*****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0DC783F1-B3A7-578D-8A63-*****
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

