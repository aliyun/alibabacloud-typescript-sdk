// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetVpcFirewallRuleHitCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A918B4F6-482F-5A91-8F65-AFFFF1FC04EA
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

