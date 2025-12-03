// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetUserPrimaryOrganizationalUnitRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationalUnitId: 'organizationalUnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnitId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

