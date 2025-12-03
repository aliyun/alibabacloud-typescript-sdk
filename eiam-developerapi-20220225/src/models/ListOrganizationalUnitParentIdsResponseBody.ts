// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOrganizationalUnitParentIdsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the parent organizational units. The IDs of the organizational unit are ordered based on their levels from high to low. Only the IDs of the organizational units within the authorization scope are displayed.
   * 
   * @example
   * [ou_xxx001]
   */
  parentIds?: string[];
  static names(): { [key: string]: string } {
    return {
      parentIds: 'parentIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.parentIds)) {
      $dara.Model.validateArray(this.parentIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

