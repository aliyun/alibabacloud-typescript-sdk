// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeSkillShrinkRequest extends $dara.Model {
  permissionCodesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      permissionCodesShrink: 'PermissionCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissionCodesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

