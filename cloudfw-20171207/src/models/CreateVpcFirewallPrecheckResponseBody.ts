// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcFirewallPrecheckResponseBody extends $dara.Model {
  /**
   * @example
   * 4197
   */
  precheckId?: string;
  /**
   * @example
   * C5BE1AA4-934A-5085-89CC-9AD1CAC3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      precheckId: 'PrecheckId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      precheckId: 'string',
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

