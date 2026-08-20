// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncOrgStructureRequestDepartments extends $dara.Model {
  /**
   * @remarks
   * The department ID. This is an external identifier. The client is responsible for ensuring uniqueness.
   * 
   * @example
   * exampleDeptId
   */
  deptId?: string;
  /**
   * @remarks
   * The department name.
   * 
   * @example
   * string_value
   */
  deptName?: string;
  /**
   * @remarks
   * The sort order. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The parent department ID. A value of null indicates a top-level department or root department.
   * 
   * @example
   * exampleParentDeptId
   */
  parentDeptId?: string;
  static names(): { [key: string]: string } {
    return {
      deptId: 'deptId',
      deptName: 'deptName',
      order: 'order',
      parentDeptId: 'parentDeptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptId: 'string',
      deptName: 'string',
      order: 'number',
      parentDeptId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncOrgStructureRequestMembers extends $dara.Model {
  /**
   * @remarks
   * The user identifier. In the SAML scenario, this is an email address or UPN, which must match rbj_user_account.account_id.
   * 
   * @example
   * exampleAccountId
   */
  accountId?: string;
  /**
   * @remarks
   * The department ID to which the member belongs. This value must correspond to a deptId in the departments list.
   * 
   * @example
   * exampleDeptId
   */
  deptId?: string;
  /**
   * @remarks
   * The username for display purposes. This parameter is optional.
   * 
   * @example
   * SampleName.pdf
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      deptId: 'deptId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      deptId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncOrgStructureRequest extends $dara.Model {
  /**
   * @remarks
   * The enterprise identifier. This value must match the corpId returned by listAvailableConfigs.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleCorpId
   */
  corpId?: string;
  /**
   * @remarks
   * The department list. At least one root department must be included.
   * 
   * This parameter is required.
   */
  departments?: SyncOrgStructureRequestDepartments[];
  /**
   * @remarks
   * The member list. This parameter is required when syncMembers is set to true.
   */
  members?: SyncOrgStructureRequestMembers[];
  /**
   * @remarks
   * The platform type. Valid values: saml, oauth2, or custom.
   * 
   * This parameter is required.
   * 
   * @example
   * saml
   */
  platformType?: string;
  /**
   * @remarks
   * The SSO configuration ID. For SAML/OAuth2, this parameter is optional. If not specified, the value is automatically derived based on corpId. If multiple IdPs use the same corpId, you must explicitly specify this parameter. Otherwise, an AMBIGUOUS error is returned. This parameter is not required for custom.
   * 
   * @example
   * exampleSsoSettingsId
   */
  ssoSettingsId?: string;
  /**
   * @remarks
   * Specifies whether to synchronize member relationships. In custom mode, this parameter is forced to false.
   * 
   * @example
   * false
   */
  syncMembers?: boolean;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corpId',
      departments: 'departments',
      members: 'members',
      platformType: 'platformType',
      ssoSettingsId: 'ssoSettingsId',
      syncMembers: 'syncMembers',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      departments: { 'type': 'array', 'itemType': SyncOrgStructureRequestDepartments },
      members: { 'type': 'array', 'itemType': SyncOrgStructureRequestMembers },
      platformType: 'string',
      ssoSettingsId: 'string',
      syncMembers: 'boolean',
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.departments)) {
      $dara.Model.validateArray(this.departments);
    }
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

