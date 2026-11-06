// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudPermissionTemplatesResponseBodyCloudPermissionTemplatesApplicableScope extends $dara.Model {
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
   * custom
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

export class ListCloudPermissionTemplatesResponseBodyCloudPermissionTemplatesCloudPermissionTemplateCreator extends $dara.Model {
  /**
   * @remarks
   * The identity identifier of the creator.
   * 
   * @example
   * user_01kmek49aq4r8gxxxx
   */
  creatorId?: string;
  /**
   * @remarks
   * The name of the creator.
   * 
   * @example
   * Zhang San
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

export class ListCloudPermissionTemplatesResponseBodyCloudPermissionTemplatesCloudPermissionTemplateInitResult extends $dara.Model {
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
   * Permission template initialization failed. Try again later
   */
  errorMessage?: string;
  /**
   * @remarks
   * The initialization result. Valid values: success and failed.
   * 
   * @example
   * failed
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

export class ListCloudPermissionTemplatesResponseBodyCloudPermissionTemplates extends $dara.Model {
  /**
   * @remarks
   * Specifies whether users are allowed to apply for the permission template.
   */
  allowRequest?: boolean;
  /**
   * @remarks
   * The applicable scope of the permission template.
   */
  applicableScope?: ListCloudPermissionTemplatesResponseBodyCloudPermissionTemplatesApplicableScope;
  /**
   * @remarks
   * The ID of the cloud account to which the template belongs.
   * 
   * @example
   * ca_01kmegjc11qa1txxxxx
   */
  cloudAccountId?: string;
  /**
   * @remarks
   * The creator information of the permission template.
   */
  cloudPermissionTemplateCreator?: ListCloudPermissionTemplatesResponseBodyCloudPermissionTemplatesCloudPermissionTemplateCreator;
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
  cloudPermissionTemplateInitResult?: ListCloudPermissionTemplatesResponseBodyCloudPermissionTemplatesCloudPermissionTemplateInitResult;
  /**
   * @remarks
   * The name of the permission template.
   * 
   * @example
   * AdminAccessTemplate
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
   * 1649830225000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the permission template.
   * 
   * @example
   * Administrator permission template for managing cloud accounts
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The external unique identifier of the associated cloud role, which is the role ARN on the cloud provider side.
   * 
   * @example
   * ReadOnlyAccess
   */
  permissionEntityExternalId?: string;
  /**
   * @remarks
   * The ID of the associated CloudAccountRole.
   * 
   * @example
   * carole_01kmek49aq4r8gxxxx
   */
  permissionEntityId?: string;
  /**
   * @remarks
   * The type of the permission entity. Fixed value: cloud_account_role.
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
   * 1649830227000
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
      applicableScope: ListCloudPermissionTemplatesResponseBodyCloudPermissionTemplatesApplicableScope,
      cloudAccountId: 'string',
      cloudPermissionTemplateCreator: ListCloudPermissionTemplatesResponseBodyCloudPermissionTemplatesCloudPermissionTemplateCreator,
      cloudPermissionTemplateId: 'string',
      cloudPermissionTemplateInitResult: ListCloudPermissionTemplatesResponseBodyCloudPermissionTemplatesCloudPermissionTemplateInitResult,
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

export class ListCloudPermissionTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of cloud permission templates.
   */
  cloudPermissionTemplates?: ListCloudPermissionTemplatesResponseBodyCloudPermissionTemplates[];
  /**
   * @remarks
   * The maximum number of items per page for a paged query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token returned by the current call for the next query.
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of items.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cloudPermissionTemplates: 'CloudPermissionTemplates',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudPermissionTemplates: { 'type': 'array', 'itemType': ListCloudPermissionTemplatesResponseBodyCloudPermissionTemplates },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cloudPermissionTemplates)) {
      $dara.Model.validateArray(this.cloudPermissionTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

