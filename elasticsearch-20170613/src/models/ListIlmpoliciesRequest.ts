// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListILMPoliciesRequest extends $dara.Model {
  /**
   * @example
   * policy-1
   */
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'policyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

