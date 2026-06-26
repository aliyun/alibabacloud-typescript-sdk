// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePolicyRequest extends $dara.Model {
  policyName?: string;
  policySetName?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
      policySetName: 'PolicySetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
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

