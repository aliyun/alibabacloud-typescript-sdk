// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Definition } from "./Definition";


export class CreatePolicyRequest extends $dara.Model {
  definition?: Definition;
  description?: string;
  policyName?: string;
  policySetName?: string;
  static names(): { [key: string]: string } {
    return {
      definition: 'Definition',
      description: 'Description',
      policyName: 'PolicyName',
      policySetName: 'PolicySetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: Definition,
      description: 'string',
      policyName: 'string',
      policySetName: 'string',
    };
  }

  validate() {
    if(this.definition && typeof (this.definition as any).validate === 'function') {
      (this.definition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

