// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOrganizationalUnitParentsResponseBodyParents extends $dara.Model {
  /**
   * @remarks
   * The organization ID.
   * 
   * @example
   * ou_4lag76zc2km5ssg5vsmm2xxxx
   */
  organizationalUnitId?: string;
  /**
   * @remarks
   * The parent organization ID.
   * 
   * @example
   * ou_x3beoyepv2ls5iwuge3xhjxxxx
   */
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationalUnitId: 'OrganizationalUnitId',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnitId: 'string',
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

export class ListOrganizationalUnitParentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The parent organizations.
   */
  parents?: ListOrganizationalUnitParentsResponseBodyParents[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parents: 'Parents',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parents: { 'type': 'array', 'itemType': ListOrganizationalUnitParentsResponseBodyParents },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parents)) {
      $dara.Model.validateArray(this.parents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

