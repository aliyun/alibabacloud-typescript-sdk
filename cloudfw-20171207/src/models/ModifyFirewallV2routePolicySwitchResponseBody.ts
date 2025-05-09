// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFirewallV2RoutePolicySwitchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1F6D4A8D-EC01-5996-A61A-AA3B56490C00
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

