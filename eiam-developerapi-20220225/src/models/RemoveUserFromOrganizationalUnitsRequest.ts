// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveUserFromOrganizationalUnitsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [ou_wovwffm62xifdziem7an7xxxxx]
   */
  organizationalUnitIds?: string[];
  static names(): { [key: string]: string } {
    return {
      organizationalUnitIds: 'organizationalUnitIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnitIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.organizationalUnitIds)) {
      $dara.Model.validateArray(this.organizationalUnitIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

