// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceLinkedRoleTemplateResponseBodyServiceLinkedRoleTemplateRoleDescriptionsRoleDescription extends $dara.Model {
  description?: string;
  language?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      language: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleTemplateResponseBodyServiceLinkedRoleTemplateRoleDescriptions extends $dara.Model {
  roleDescription?: GetServiceLinkedRoleTemplateResponseBodyServiceLinkedRoleTemplateRoleDescriptionsRoleDescription[];
  static names(): { [key: string]: string } {
    return {
      roleDescription: 'RoleDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleDescription: { 'type': 'array', 'itemType': GetServiceLinkedRoleTemplateResponseBodyServiceLinkedRoleTemplateRoleDescriptionsRoleDescription },
    };
  }

  validate() {
    if(Array.isArray(this.roleDescription)) {
      $dara.Model.validateArray(this.roleDescription);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleTemplateResponseBodyServiceLinkedRoleTemplate extends $dara.Model {
  /**
   * @remarks
   * Indicates whether multiple roles are supported. Valid values:
   * 
   * - true: Multiple roles are supported.
   * - false: Multiple roles are not supported.
   * 
   * @example
   * false
   */
  multipleRolesAllowed?: boolean;
  roleDescriptions?: GetServiceLinkedRoleTemplateResponseBodyServiceLinkedRoleTemplateRoleDescriptions;
  /**
   * @remarks
   * The prefix of the role name.
   * 
   * @example
   * AliyunServiceRoleForPolarDB
   */
  roleNamePrefix?: string;
  /**
   * @remarks
   * The cloud service name.
   * 
   * @example
   * polardb.aliyuncs.com
   */
  serviceName?: string;
  /**
   * @remarks
   * The name of the system policy attached to the role.
   * 
   * @example
   * AliyunServiceRolePolicyForPolarDB
   */
  systemPolicyName?: string;
  static names(): { [key: string]: string } {
    return {
      multipleRolesAllowed: 'MultipleRolesAllowed',
      roleDescriptions: 'RoleDescriptions',
      roleNamePrefix: 'RoleNamePrefix',
      serviceName: 'ServiceName',
      systemPolicyName: 'SystemPolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multipleRolesAllowed: 'boolean',
      roleDescriptions: GetServiceLinkedRoleTemplateResponseBodyServiceLinkedRoleTemplateRoleDescriptions,
      roleNamePrefix: 'string',
      serviceName: 'string',
      systemPolicyName: 'string',
    };
  }

  validate() {
    if(this.roleDescriptions && typeof (this.roleDescriptions as any).validate === 'function') {
      (this.roleDescriptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The service-linked role template.
   */
  serviceLinkedRoleTemplate?: GetServiceLinkedRoleTemplateResponseBodyServiceLinkedRoleTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceLinkedRoleTemplate: 'ServiceLinkedRoleTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceLinkedRoleTemplate: GetServiceLinkedRoleTemplateResponseBodyServiceLinkedRoleTemplate,
    };
  }

  validate() {
    if(this.serviceLinkedRoleTemplate && typeof (this.serviceLinkedRoleTemplate as any).validate === 'function') {
      (this.serviceLinkedRoleTemplate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

