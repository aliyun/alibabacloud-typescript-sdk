// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOrganizationRolesResponseBodyResultAuthConfigList extends $dara.Model {
  /**
   * @remarks
   * Permission type:
   * - quick_monitor: Metric monitoring
   * - subscription: Subscription management
   * - offline_download: Self-service data retrieval
   * - resource_package: Resource package management
   * - organization_ask: Organization identification code (AK/SK)
   * - developer_openapi: OpenAPI
   * - data_service: Data service
   * - admin_authorize3rd: Embedded analysis
   * - component_manage: Custom component
   * - template_open: Custom template
   * - custom_driver: Custom driver (supported only in standalone deployment)
   * - open_platform_custom_plugin: Custom plugin (supported only in standalone deployment)
   * - enterprise_safety: Enterprise security
   * 
   * @example
   * enterprise_safety
   */
  authKey?: string;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationRolesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * List of role permission configurations.
   */
  authConfigList?: ListOrganizationRolesResponseBodyResultAuthConfigList[];
  /**
   * @remarks
   * Whether it is a predefined role. Possible values:
   * - true: Yes
   * - false: No
   * 
   * @example
   * true
   */
  isSystemRole?: boolean;
  /**
   * @remarks
   * Role ID.
   * 
   * @example
   * 111111111
   */
  roleId?: number;
  /**
   * @remarks
   * Role name.
   * 
   * @example
   * Organization Admin
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      authConfigList: 'AuthConfigList',
      isSystemRole: 'IsSystemRole',
      roleId: 'RoleId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfigList: { 'type': 'array', 'itemType': ListOrganizationRolesResponseBodyResultAuthConfigList },
      isSystemRole: 'boolean',
      roleId: 'number',
      roleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authConfigList)) {
      $dara.Model.validateArray(this.authConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationRolesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 7AAB95D7-2E11-4FE2-94BC-858E4FC0C976
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the list of organization roles.
   */
  result?: ListOrganizationRolesResponseBodyResult[];
  /**
   * @remarks
   * 是否请求成功。取值范围：
   * - true：请求成功
   * - false：请求失败
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListOrganizationRolesResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

