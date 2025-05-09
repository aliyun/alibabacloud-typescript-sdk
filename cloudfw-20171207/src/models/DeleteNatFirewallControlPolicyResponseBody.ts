// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNatFirewallControlPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 31306869-C4BC-56F3-BBE6-C377CF9C8E1C
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

