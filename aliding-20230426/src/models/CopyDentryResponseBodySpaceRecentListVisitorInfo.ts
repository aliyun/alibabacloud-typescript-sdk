// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyDentryResponseBodySpaceRecentListVisitorInfo extends $dara.Model {
  dentryActions?: string[];
  /**
   * @example
   * 1
   */
  roleCode?: string;
  spaceActions?: string[];
  static names(): { [key: string]: string } {
    return {
      dentryActions: 'DentryActions',
      roleCode: 'RoleCode',
      spaceActions: 'SpaceActions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryActions: { 'type': 'array', 'itemType': 'string' },
      roleCode: 'string',
      spaceActions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dentryActions)) {
      $dara.Model.validateArray(this.dentryActions);
    }
    if(Array.isArray(this.spaceActions)) {
      $dara.Model.validateArray(this.spaceActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

