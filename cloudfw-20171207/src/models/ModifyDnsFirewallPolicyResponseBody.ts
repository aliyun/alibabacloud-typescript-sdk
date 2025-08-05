// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDnsFirewallPolicyResponseBody extends $dara.Model {
  /**
   * @example
   * 9C50C2A9-4BBB-5504-8ADA-C41A79****
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

