// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOrganizationRoleConfigResponseBodyResultAuthConfigList extends $dara.Model {
  /**
   * @remarks
   * Permission type:
   * - quick_monitor: Metric Monitoring
   * - subscription: Subscription Management
   * - offline_download: Self-service Data Retrieval
   * - resource_package: Resource Package Management
   * - organization_ask: Organization Access Key/Secret (AK/SK)
   * - developer_openapi: OpenAPI
   * - data_service: Data Service
   * - admin_authorize3rd: Embedded Analysis
   * - component_manage: Custom Component
   * - template_open: Custom Template
   * - custom_driver: Custom Driver (supported only in standalone deployment)
   * - open_platform_custom_plugin: Custom Plugin (supported only in standalone deployment)
   * - enterprise_safety: Enterprise Security
   * 
   * @example
   * quick_monitor
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

export class QueryOrganizationRoleConfigResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * List of role permission configurations.
   */
  authConfigList?: QueryOrganizationRoleConfigResponseBodyResultAuthConfigList[];
  /**
   * @remarks
   * Whether it is a predefined role. Possible values:
   * 
   * - true: Yes
   * - false: No
   * 
   * @example
   * true
   */
  isSystemRole?: boolean;
  /**
   * @remarks
   * Organization role ID, including predefined roles and custom roles:
   * 
   * - Organization Administrator (predefined role): 111111111
   * - Permission Administrator (predefined role): 111111112
   * - Regular User (predefined role): 111111113
   * - Custom Role: The corresponding role ID of the custom role
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
      authConfigList: { 'type': 'array', 'itemType': QueryOrganizationRoleConfigResponseBodyResultAuthConfigList },
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

export class QueryOrganizationRoleConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * BCE45E6D-9304-4F94-86BB-5A772B1615FF
   */
  requestId?: string;
  /**
   * @remarks
   * Details of the organization role configuration.
   */
  result?: QueryOrganizationRoleConfigResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * - true: The request was successful 
   * - false: The request failed
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
      result: QueryOrganizationRoleConfigResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

