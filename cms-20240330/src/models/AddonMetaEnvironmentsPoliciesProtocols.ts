// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddonMetaEnvironmentsPoliciesProtocols extends $dara.Model {
  description?: string;
  icon?: string;
  label?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      icon: 'icon',
      label: 'label',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      icon: 'string',
      label: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

