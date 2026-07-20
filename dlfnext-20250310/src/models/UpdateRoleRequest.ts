// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRoleRequest extends $dara.Model {
  description?: string;
  displayName?: string;
  rolePrincipal?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      displayName: 'displayName',
      rolePrincipal: 'rolePrincipal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      rolePrincipal: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

