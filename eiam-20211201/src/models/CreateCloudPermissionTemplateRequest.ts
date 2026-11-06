// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudPermissionTemplateRequestApplicableScope extends $dara.Model {
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
   * The type of the applicable scope. Valid values: global and custom.
   * 
   * @example
   * global
   */
  scopeType?: string;
  /**
   * @remarks
   * The list of user IDs.
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

export class CreateCloudPermissionTemplateRequestCloudAccountResources extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud account resource.
   * 
   * @example
   * car_01l8a1l906kqtkacdfp5dxxxxx
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

export class CreateCloudPermissionTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether users are allowed to apply for the permission template. Default value: true.
   * 
   * @example
   * true
   */
  allowRequest?: boolean;
  /**
   * @remarks
   * The applicable scope of the permission template, including the scope type and specified users, groups, or organizational units.
   */
  applicableScope?: CreateCloudPermissionTemplateRequestApplicableScope;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
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
   * ca_01kmegjc11qa1txxxxx
   */
  cloudAccountId?: string;
  /**
   * @remarks
   * The list of cloud account resource policies.
   */
  cloudAccountResources?: CreateCloudPermissionTemplateRequestCloudAccountResources[];
  /**
   * @remarks
   * The name of the permission template. The name can be up to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * testName
   */
  cloudPermissionTemplateName?: string;
  /**
   * @remarks
   * The usage type of the permission template. Valid values:
   * - user: Privilege escalation for human users.
   * - application: Privilege escalation for M2M applications.
   * Default value: user.
   * 
   * @example
   * user
   */
  cloudPermissionTemplateUsageType?: string;
  /**
   * @remarks
   * The description of the permission template. The description can be up to 128 characters in length.
   * 
   * @example
   * this is a test.
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
      cloudPermissionTemplateName: 'CloudPermissionTemplateName',
      cloudPermissionTemplateUsageType: 'CloudPermissionTemplateUsageType',
      description: 'Description',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowRequest: 'boolean',
      applicableScope: CreateCloudPermissionTemplateRequestApplicableScope,
      clientToken: 'string',
      cloudAccountId: 'string',
      cloudAccountResources: { 'type': 'array', 'itemType': CreateCloudPermissionTemplateRequestCloudAccountResources },
      cloudPermissionTemplateName: 'string',
      cloudPermissionTemplateUsageType: 'string',
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

