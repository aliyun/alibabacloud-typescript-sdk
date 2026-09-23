// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PatchOrganizationalUnitParentIdRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the parent organizational unit.
   * 
   * This parameter is required.
   * 
   * @example
   * ou_001
   */
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      parentId: 'parentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

