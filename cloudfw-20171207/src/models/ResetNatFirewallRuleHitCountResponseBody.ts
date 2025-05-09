// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetNatFirewallRuleHitCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5CAA0FFD-4B94-5BB9-8B0A-ECFC86A0E666
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

