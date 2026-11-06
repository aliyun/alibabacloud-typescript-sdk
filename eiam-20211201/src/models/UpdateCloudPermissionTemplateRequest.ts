// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudPermissionTemplateRequestApplicableScope extends $dara.Model {
  /**
   * @remarks
   * The list of group IDs.
   * 
   * @example
   * group_d6sbsusdfa4h66ec3il7yxxxx
   */
  groupIds?: string[];
  /**
   * @remarks
   * The list of organizational unit IDs.
   * 
   * @example
   * ou_d6sbsuudfgf4h66ec3il7yxxxx
   */
  organizationalUnitIds?: string[];
  /**
   * @remarks
   * The application scope type. Valid values: global and custom.
   * 
   * @example
   * global
   */
  scopeType?: string;
  /**
   * @remarks
   * The list of account IDs.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      groupIds: 'GroupIds',
      organizationalUnitIds: 'OrganizationalUnitIds',
      scopeType: 'ScopeType',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupIds: { 'type': 'array', 'itemType': 'string' },
      organizationalUnitIds: { 'type': 'array', 'itemType': 'string' },
      scopeType: 'string',
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    if(Array.isArray(this.organizationalUnitIds)) {
      $dara.Model.validateArray(this.organizationalUnitIds);
    }
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudPermissionTemplateRequestCloudAccountResources extends $dara.Model {
  /**
   * @remarks
   * The cloud account resource ID.
   * 
   * @example
   * car_01lap4os3aaerckla05vftnsl8edo
   */
  cloudAccountResourceId?: string;
  static names(): { [key: string]: string } {
    return {
      cloudAccountResourceId: 'CloudAccountResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAccountResourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudPermissionTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether users are allowed to apply.
   * 
   * @example
   * true
   */
  allowRequest?: boolean;
  /**
   * @remarks
   * The applicable scope of the permission template, including the scope type and specified users, groups, or organizational units.
   */
  applicableScope?: UpdateCloudPermissionTemplateRequestApplicableScope;
  /**
   * @remarks
   * The idempotency token.
   * 
   * @example
   * client-token-example
   */
  clientToken?: string;
  /**
   * @remarks
   * The cloud account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ac_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  cloudAccountId?: string;
  /**
   * @remarks
   * The list of cloud account resources.
   */
  cloudAccountResources?: UpdateCloudPermissionTemplateRequestCloudAccountResources[];
  /**
   * @remarks
   * The permission template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cpt_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  cloudPermissionTemplateId?: string;
  /**
   * @remarks
   * The name of the permission template. The name can be up to 128 characters in length.
   * 
   * @example
   * dev-default
   */
  cloudPermissionTemplateName?: string;
  /**
   * @remarks
   * The description of the permission template. The description can be up to 128 characters in length.
   * 
   * @example
   * instance_for_test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the IDaaS EIAM instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      allowRequest: 'AllowRequest',
      applicableScope: 'ApplicableScope',
      clientToken: 'ClientToken',
      cloudAccountId: 'CloudAccountId',
      cloudAccountResources: 'CloudAccountResources',
      cloudPermissionTemplateId: 'CloudPermissionTemplateId',
      cloudPermissionTemplateName: 'CloudPermissionTemplateName',
      description: 'Description',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowRequest: 'boolean',
      applicableScope: UpdateCloudPermissionTemplateRequestApplicableScope,
      clientToken: 'string',
      cloudAccountId: 'string',
      cloudAccountResources: { 'type': 'array', 'itemType': UpdateCloudPermissionTemplateRequestCloudAccountResources },
      cloudPermissionTemplateId: 'string',
      cloudPermissionTemplateName: 'string',
      description: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    if(this.applicableScope && typeof (this.applicableScope as any).validate === 'function') {
      (this.applicableScope as any).validate();
    }
    if(Array.isArray(this.cloudAccountResources)) {
      $dara.Model.validateArray(this.cloudAccountResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

