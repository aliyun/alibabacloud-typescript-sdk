// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolicySetRequest extends $dara.Model {
  description?: string;
  policySetName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      policySetName: 'PolicySetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

