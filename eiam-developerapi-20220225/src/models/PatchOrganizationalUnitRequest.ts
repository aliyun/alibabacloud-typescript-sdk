// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PatchOrganizationalUnitRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the organizational unit.
   * 
   * @example
   * test organizational unit
   */
  description?: string;
  /**
   * @remarks
   * The name of the organizational unit.
   * 
   * @example
   * name001
   */
  organizationalUnitName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      organizationalUnitName: 'organizationalUnitName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      organizationalUnitName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

