// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAutoRepairPolicyResponseBody extends $dara.Model {
  /**
   * @example
   * r-xxxxxxx
   */
  policyId?: string;
  /**
   * @example
   * E368C761-F8F6-4A36-9B58-BD53D5******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'policy_id',
      requestId: 'request_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
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

