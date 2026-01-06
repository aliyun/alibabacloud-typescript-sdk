// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOrganizationalUnitsForApplicationResponseBodyOrganizationalUnitsApplicationRoles extends $dara.Model {
  /**
   * @remarks
   * 应用角色标识。
   * 
   * @example
   * app_role_mkv7rgt4ds8d8v0qtzev2mxxxx
   */
  applicationRoleId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationRoleId: 'ApplicationRoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationRoleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitsForApplicationResponseBodyOrganizationalUnits extends $dara.Model {
  /**
   * @remarks
   * 应用角色列表。
   */
  applicationRoles?: ListOrganizationalUnitsForApplicationResponseBodyOrganizationalUnitsApplicationRoles[];
  /**
   * @remarks
   * The ID of the organization that is allowed to access the application.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationRoles: 'ApplicationRoles',
      organizationalUnitId: 'OrganizationalUnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationRoles: { 'type': 'array', 'itemType': ListOrganizationalUnitsForApplicationResponseBodyOrganizationalUnitsApplicationRoles },
      organizationalUnitId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationRoles)) {
      $dara.Model.validateArray(this.applicationRoles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitsForApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the organizations that are allowed to access the application.
   */
  organizationalUnits?: ListOrganizationalUnitsForApplicationResponseBodyOrganizationalUnits[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the returned entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      organizationalUnits: 'OrganizationalUnits',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnits: { 'type': 'array', 'itemType': ListOrganizationalUnitsForApplicationResponseBodyOrganizationalUnits },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.organizationalUnits)) {
      $dara.Model.validateArray(this.organizationalUnits);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

