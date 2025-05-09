// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcFirewallControlPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the access control policy.
   * 
   * @example
   * 00281255-d220-4db1-8f4f-c4df221ad84c
   */
  aclUuid?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
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

