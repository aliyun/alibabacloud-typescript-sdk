// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyShrinkRequest extends $dara.Model {
  definitionShrink?: string;
  description?: string;
  policyName?: string;
  policySetName?: string;
  static names(): { [key: string]: string } {
    return {
      definitionShrink: 'Definition',
      description: 'Description',
      policyName: 'PolicyName',
      policySetName: 'PolicySetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definitionShrink: 'string',
      description: 'string',
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

