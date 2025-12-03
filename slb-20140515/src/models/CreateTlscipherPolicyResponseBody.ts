// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTLSCipherPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D7A8875F-373A-5F48-8484-25B07A61F2AF
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * tls-bp14bb1e7dll4f****
   */
  TLSCipherPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      TLSCipherPolicyId: 'TLSCipherPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      TLSCipherPolicyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

