// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationProvisioningScopeResponseBody extends $dara.Model {
  groupIds?: string[];
  /**
   * @remarks
   * The IDs of organizational units.
   * 
   * @example
   * [ou_xxx001]
   */
  organizationalUnitIds?: string[];
  static names(): { [key: string]: string } {
    return {
      groupIds: 'groupIds',
      organizationalUnitIds: 'organizationalUnitIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupIds: { 'type': 'array', 'itemType': 'string' },
      organizationalUnitIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    if(Array.isArray(this.organizationalUnitIds)) {
      $dara.Model.validateArray(this.organizationalUnitIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

