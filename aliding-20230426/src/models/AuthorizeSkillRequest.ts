// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeSkillRequest extends $dara.Model {
  permissionCodes?: string[];
  static names(): { [key: string]: string } {
    return {
      permissionCodes: 'PermissionCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissionCodes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.permissionCodes)) {
      $dara.Model.validateArray(this.permissionCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

