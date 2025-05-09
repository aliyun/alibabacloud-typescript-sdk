// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNatFirewallControlPolicyPositionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 60617208-F5F7-5B44-BB1E-3AC1B6FCD627
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

