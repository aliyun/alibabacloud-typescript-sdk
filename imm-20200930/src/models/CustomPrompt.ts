// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CustomPrompt extends $dara.Model {
  roleDefinition?: string;
  static names(): { [key: string]: string } {
    return {
      roleDefinition: 'RoleDefinition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleDefinition: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

