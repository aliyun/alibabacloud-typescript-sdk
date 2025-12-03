// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOrganizationalUnitIdByExternalIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the organizational unit.
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

