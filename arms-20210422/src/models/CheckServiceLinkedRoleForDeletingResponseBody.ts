// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CheckServiceLinkedRoleForDeletingResponseBodyRoleUsages extends $dara.Model {
  region?: string;
  resources?: string[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      resources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleForDeletingResponseBody extends $dara.Model {
  deletable?: boolean;
  requestId?: string;
  roleUsages?: CheckServiceLinkedRoleForDeletingResponseBodyRoleUsages[];
  static names(): { [key: string]: string } {
    return {
      deletable: 'Deletable',
      requestId: 'RequestId',
      roleUsages: 'RoleUsages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletable: 'boolean',
      requestId: 'string',
      roleUsages: { 'type': 'array', 'itemType': CheckServiceLinkedRoleForDeletingResponseBodyRoleUsages },
    };
  }

  validate() {
    if(Array.isArray(this.roleUsages)) {
      $dara.Model.validateArray(this.roleUsages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

