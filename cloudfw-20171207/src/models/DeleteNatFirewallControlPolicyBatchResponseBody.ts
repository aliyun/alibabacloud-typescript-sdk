// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNatFirewallControlPolicyBatchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 450D47F5-956E-543E-8502-2F71C8C54E72
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

