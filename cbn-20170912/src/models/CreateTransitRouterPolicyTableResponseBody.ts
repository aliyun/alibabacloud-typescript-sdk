// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouterPolicyTableResponseBody extends $dara.Model {
  /**
   * @example
   * ptbl-44m0p68spvlrqq****
   */
  policyTableId?: string;
  /**
   * @example
   * 2BFA6822-240E-4E27-B4C8-AA400EF7474D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyTableId: 'PolicyTableId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyTableId: 'string',
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

