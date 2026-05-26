// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePolicySetRequest extends $dara.Model {
  /**
   * @example
   * default-policy-set
   */
  policySetName?: string;
  static names(): { [key: string]: string } {
    return {
      policySetName: 'PolicySetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policySetName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

