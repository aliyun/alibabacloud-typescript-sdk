// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDnsFirewallPolicyResponseBody extends $dara.Model {
  /**
   * @example
   * 32314C1E-82CF-582C-853A-B1773F******
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

