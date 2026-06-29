// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStandardSetRequestCreateCommandApprovalConfig extends $dara.Model {
  /**
   * @remarks
   * The approval process type. Valid values:
   * - BY_DEFAULT: the default approval type.
   * - BY_TEMPLATE: approval based on an approval template.
   * 
   * This parameter is required.
   * 
   * @example
   * BY_DEFAULT
   */
  approvalType?: string;
  /**
   * @remarks
   * Specifies whether to enable approval.
   * 
   * This parameter is required.
   */
  enableApproval?: boolean;
  /**
   * @remarks
   * Specifies whether to submit approvals in batches.
   * 
   * This parameter is required.
   */
  isSubmitInBatch?: boolean;
  /**
   * @remarks
   * The ID of the approval template. This parameter takes effect only when the approval process type is set to BY_TEMPLATE.
   * 
   * @example
   * 1121
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      approvalType: 'ApprovalType',
      enableApproval: 'EnableApproval',
      isSubmitInBatch: 'IsSubmitInBatch',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalType: 'string',
      enableApproval: 'boolean',
      isSubmitInBatch: 'boolean',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStandardSetRequestCreateCommandDirectoryReference extends $dara.Model {
  /**
   * @remarks
   * The directory to which the standard set belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * /dir1
   */
  directory?: string;
  static names(): { [key: string]: string } {
    return {
      directory: 'Directory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStandardSetRequestCreateCommandOfflineApprovalConfig extends $dara.Model {
  /**
   * @remarks
   * The approval process type. Valid values:
   * - BY_DEFAULT: the default approval type.
   * - BY_TEMPLATE: approval based on an approval template.
   * 
   * This parameter is required.
   * 
   * @example
   * BY_DEFAULT
   */
  approvalType?: string;
  /**
   * @remarks
   * Specifies whether to enable approval.
   * 
   * This parameter is required.
   */
  enableApproval?: boolean;
  /**
   * @remarks
   * Specifies whether to submit approvals in batches.
   * 
   * This parameter is required.
   */
  isSubmitInBatch?: boolean;
  /**
   * @remarks
   * The ID of the approval template. This parameter takes effect only when the approval process type is set to BY_TEMPLATE.
   * 
   * @example
   * 1121
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      approvalType: 'ApprovalType',
      enableApproval: 'EnableApproval',
      isSubmitInBatch: 'IsSubmitInBatch',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalType: 'string',
      enableApproval: 'boolean',
      isSubmitInBatch: 'boolean',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStandardSetRequestCreateCommandVisibilityConfig extends $dara.Model {
  /**
   * @remarks
   * The list of specified users who can view the standard set. This parameter takes effect only when the visibility type is set to SPECIFIED.
   */
  specifiedUserList?: string[];
  /**
   * @remarks
   * The visibility type. Valid values:
   * - PUBLIC: visible to all users.
   * - PRIVATE: visible only to standard set members and administrators.
   * - SPECIFIED: visible only to specified users.
   * 
   * This parameter is required.
   * 
   * @example
   * PUBLIC
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      specifiedUserList: 'SpecifiedUserList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specifiedUserList: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.specifiedUserList)) {
      $dara.Model.validateArray(this.specifiedUserList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStandardSetRequestCreateCommand extends $dara.Model {
  /**
   * @remarks
   * The approval configuration for going online.
   */
  approvalConfig?: CreateStandardSetRequestCreateCommandApprovalConfig;
  /**
   * @remarks
   * The code of the standard set.
   * 
   * This parameter is required.
   * 
   * @example
   * CITY
   */
  code?: string;
  /**
   * @remarks
   * The ID of the default standard template.
   * 
   * @example
   * 1001
   */
  defaultStandardTemplateId?: number;
  /**
   * @remarks
   * The description of the standard set.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The directory to which the standard set belongs.
   */
  directoryReference?: CreateStandardSetRequestCreateCommandDirectoryReference;
  /**
   * @remarks
   * The list of maintainers.
   */
  maintainerList?: string[];
  /**
   * @remarks
   * The list of member groups.
   */
  memberGroupList?: string[];
  /**
   * @remarks
   * The list of members.
   */
  memberList?: string[];
  /**
   * @remarks
   * The name of the standard set.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The approval configuration for going offline.
   */
  offlineApprovalConfig?: CreateStandardSetRequestCreateCommandOfflineApprovalConfig;
  /**
   * @remarks
   * The visibility configuration.
   */
  visibilityConfig?: CreateStandardSetRequestCreateCommandVisibilityConfig;
  static names(): { [key: string]: string } {
    return {
      approvalConfig: 'ApprovalConfig',
      code: 'Code',
      defaultStandardTemplateId: 'DefaultStandardTemplateId',
      description: 'Description',
      directoryReference: 'DirectoryReference',
      maintainerList: 'MaintainerList',
      memberGroupList: 'MemberGroupList',
      memberList: 'MemberList',
      name: 'Name',
      offlineApprovalConfig: 'OfflineApprovalConfig',
      visibilityConfig: 'VisibilityConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalConfig: CreateStandardSetRequestCreateCommandApprovalConfig,
      code: 'string',
      defaultStandardTemplateId: 'number',
      description: 'string',
      directoryReference: CreateStandardSetRequestCreateCommandDirectoryReference,
      maintainerList: { 'type': 'array', 'itemType': 'string' },
      memberGroupList: { 'type': 'array', 'itemType': 'string' },
      memberList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      offlineApprovalConfig: CreateStandardSetRequestCreateCommandOfflineApprovalConfig,
      visibilityConfig: CreateStandardSetRequestCreateCommandVisibilityConfig,
    };
  }

  validate() {
    if(this.approvalConfig && typeof (this.approvalConfig as any).validate === 'function') {
      (this.approvalConfig as any).validate();
    }
    if(this.directoryReference && typeof (this.directoryReference as any).validate === 'function') {
      (this.directoryReference as any).validate();
    }
    if(Array.isArray(this.maintainerList)) {
      $dara.Model.validateArray(this.maintainerList);
    }
    if(Array.isArray(this.memberGroupList)) {
      $dara.Model.validateArray(this.memberGroupList);
    }
    if(Array.isArray(this.memberList)) {
      $dara.Model.validateArray(this.memberList);
    }
    if(this.offlineApprovalConfig && typeof (this.offlineApprovalConfig as any).validate === 'function') {
      (this.offlineApprovalConfig as any).validate();
    }
    if(this.visibilityConfig && typeof (this.visibilityConfig as any).validate === 'function') {
      (this.visibilityConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStandardSetRequest extends $dara.Model {
  /**
   * @remarks
   * The create instruction.
   * 
   * This parameter is required.
   */
  createCommand?: CreateStandardSetRequestCreateCommand;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateStandardSetRequestCreateCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.createCommand && typeof (this.createCommand as any).validate === 'function') {
      (this.createCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

