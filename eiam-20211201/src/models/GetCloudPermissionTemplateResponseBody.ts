// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCloudPermissionTemplateResponseBodyCloudPermissionTemplateApplicableScope extends $dara.Model {
  /**
   * @remarks
   * The list of specified group IDs. This parameter has a value only when ScopeType is set to custom.
   */
  groupIds?: string[];
  /**
   * @remarks
   * The list of specified organizational unit IDs. This parameter has a value only when ScopeType is set to custom.
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
   * The list of specified user IDs. This parameter has a value only when ScopeType is set to custom.
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

export class GetCloudPermissionTemplateResponseBodyCloudPermissionTemplateCloudPermissionTemplateCreator extends $dara.Model {
  /**
   * @remarks
   * The identity identifier of the creator.
   * 
   * @example
   * 8645321
   */
  creatorId?: string;
  /**
   * @remarks
   * The name of the creator.
   * 
   * @example
   * root
   */
  creatorName?: string;
  /**
   * @remarks
   * The type of the creator. Valid values: idaas_admin and idaas_user.
   * 
   * @example
   * idaas_user
   */
  creatorType?: string;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'CreatorId',
      creatorName: 'CreatorName',
      creatorType: 'CreatorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'string',
      creatorName: 'string',
      creatorType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudPermissionTemplateResponseBodyCloudPermissionTemplateCloudPermissionTemplateInitResult extends $dara.Model {
  /**
   * @remarks
   * The error code returned when initialization fails.
   * 
   * @example
   * CloudPermissionTemplate.AsyncInitError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when initialization fails.
   * 
   * @example
   * server error
   */
  errorMessage?: string;
  /**
   * @remarks
   * The initialization result. Valid values: success and failed.
   * 
   * @example
   * success
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      result: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudPermissionTemplateResponseBodyCloudPermissionTemplate extends $dara.Model {
  /**
   * @remarks
   * Specifies whether users are allowed to request the permission.
   * 
   * @example
   * true
   */
  allowRequest?: boolean;
  /**
   * @remarks
   * The applicable scope of the permission template.
   */
  applicableScope?: GetCloudPermissionTemplateResponseBodyCloudPermissionTemplateApplicableScope;
  /**
   * @remarks
   * The ID of the cloud account to which the template belongs.
   * 
   * @example
   * ca_01kq1us6frlbo3rr8m216vj3bkak2
   */
  cloudAccountId?: string;
  /**
   * @remarks
   * The creator information of the permission template.
   */
  cloudPermissionTemplateCreator?: GetCloudPermissionTemplateResponseBodyCloudPermissionTemplateCloudPermissionTemplateCreator;
  /**
   * @remarks
   * The unique identifier of the permission template.
   * 
   * @example
   * cpt_01l8dagf2iablhigj75l1n99xxxxx
   */
  cloudPermissionTemplateId?: string;
  /**
   * @remarks
   * The initialization result. This parameter is returned only when the status is init_failed.
   */
  cloudPermissionTemplateInitResult?: GetCloudPermissionTemplateResponseBodyCloudPermissionTemplateCloudPermissionTemplateInitResult;
  /**
   * @remarks
   * The name of the permission template.
   * 
   * @example
   * testName
   */
  cloudPermissionTemplateName?: string;
  /**
   * @remarks
   * The ID of the application to which the exclusive template belongs. This parameter is empty for shared templates.
   * 
   * @example
   * user_01kexamplexxxx
   */
  cloudPermissionTemplateOwnerId?: string;
  /**
   * @remarks
   * The owner type of the exclusive template. Valid values: application (M2M applications) and user (human users). This parameter is empty for shared templates.
   * 
   * @example
   * user
   */
  cloudPermissionTemplateOwnerType?: string;
  /**
   * @remarks
   * The sharing mode of the permission template. Valid values: shared and exclusive.
   * 
   * @example
   * shared
   */
  cloudPermissionTemplateSharingMode?: string;
  /**
   * @remarks
   * The usage type of the permission template. Valid values: user (privilege escalation for human users) and application (privilege escalation for M2M applications).
   * 
   * @example
   * user
   */
  cloudPermissionTemplateUsageType?: string;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1776239357000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the permission template.
   * 
   * @example
   * this is a test.
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ki6hd7ihir4ybawogqk6kqsfjm
   */
  instanceId?: string;
  /**
   * @remarks
   * The external unique identifier of the associated cloud role, which is the ARN of the role on the cloud provider side.
   * 
   * @example
   * acs:ram::123456:role/idaas-test
   */
  permissionEntityExternalId?: string;
  /**
   * @remarks
   * The ID of the associated CloudAccountRole.
   * 
   * @example
   * carole_01kmek49aqxxxx
   */
  permissionEntityId?: string;
  /**
   * @remarks
   * The permission entity type. Fixed value: cloud_account_role.
   * 
   * @example
   * cloud_account_role
   */
  permissionEntityType?: string;
  /**
   * @remarks
   * The status of the permission template. Valid values: initializing, init_failed, enabled, and disabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The last update time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1776239357000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      allowRequest: 'AllowRequest',
      applicableScope: 'ApplicableScope',
      cloudAccountId: 'CloudAccountId',
      cloudPermissionTemplateCreator: 'CloudPermissionTemplateCreator',
      cloudPermissionTemplateId: 'CloudPermissionTemplateId',
      cloudPermissionTemplateInitResult: 'CloudPermissionTemplateInitResult',
      cloudPermissionTemplateName: 'CloudPermissionTemplateName',
      cloudPermissionTemplateOwnerId: 'CloudPermissionTemplateOwnerId',
      cloudPermissionTemplateOwnerType: 'CloudPermissionTemplateOwnerType',
      cloudPermissionTemplateSharingMode: 'CloudPermissionTemplateSharingMode',
      cloudPermissionTemplateUsageType: 'CloudPermissionTemplateUsageType',
      createTime: 'CreateTime',
      description: 'Description',
      instanceId: 'InstanceId',
      permissionEntityExternalId: 'PermissionEntityExternalId',
      permissionEntityId: 'PermissionEntityId',
      permissionEntityType: 'PermissionEntityType',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowRequest: 'boolean',
      applicableScope: GetCloudPermissionTemplateResponseBodyCloudPermissionTemplateApplicableScope,
      cloudAccountId: 'string',
      cloudPermissionTemplateCreator: GetCloudPermissionTemplateResponseBodyCloudPermissionTemplateCloudPermissionTemplateCreator,
      cloudPermissionTemplateId: 'string',
      cloudPermissionTemplateInitResult: GetCloudPermissionTemplateResponseBodyCloudPermissionTemplateCloudPermissionTemplateInitResult,
      cloudPermissionTemplateName: 'string',
      cloudPermissionTemplateOwnerId: 'string',
      cloudPermissionTemplateOwnerType: 'string',
      cloudPermissionTemplateSharingMode: 'string',
      cloudPermissionTemplateUsageType: 'string',
      createTime: 'number',
      description: 'string',
      instanceId: 'string',
      permissionEntityExternalId: 'string',
      permissionEntityId: 'string',
      permissionEntityType: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(this.applicableScope && typeof (this.applicableScope as any).validate === 'function') {
      (this.applicableScope as any).validate();
    }
    if(this.cloudPermissionTemplateCreator && typeof (this.cloudPermissionTemplateCreator as any).validate === 'function') {
      (this.cloudPermissionTemplateCreator as any).validate();
    }
    if(this.cloudPermissionTemplateInitResult && typeof (this.cloudPermissionTemplateInitResult as any).validate === 'function') {
      (this.cloudPermissionTemplateInitResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudPermissionTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The permission template.
   */
  cloudPermissionTemplate?: GetCloudPermissionTemplateResponseBodyCloudPermissionTemplate;
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
      cloudPermissionTemplate: 'CloudPermissionTemplate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudPermissionTemplate: GetCloudPermissionTemplateResponseBodyCloudPermissionTemplate,
      requestId: 'string',
    };
  }

  validate() {
    if(this.cloudPermissionTemplate && typeof (this.cloudPermissionTemplate as any).validate === 'function') {
      (this.cloudPermissionTemplate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

