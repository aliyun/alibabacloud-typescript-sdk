// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStandardSetRequestUpdateCommandApprovalConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BY_DEFAULT
   */
  approvalType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  enableApproval?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  isSubmitInBatch?: boolean;
  /**
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

export class UpdateStandardSetRequestUpdateCommandDirectoryReference extends $dara.Model {
  /**
   * @remarks
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

export class UpdateStandardSetRequestUpdateCommandOfflineApprovalConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BY_DEFAULT
   */
  approvalType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  enableApproval?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  isSubmitInBatch?: boolean;
  /**
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

export class UpdateStandardSetRequestUpdateCommandVisibilityConfig extends $dara.Model {
  specifiedUserList?: string[];
  /**
   * @remarks
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

export class UpdateStandardSetRequestUpdateCommand extends $dara.Model {
  approvalConfig?: UpdateStandardSetRequestUpdateCommandApprovalConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CITY
   */
  code?: string;
  /**
   * @example
   * 1001
   */
  defaultStandardTemplateId?: number;
  /**
   * @example
   * test
   */
  description?: string;
  directoryReference?: UpdateStandardSetRequestUpdateCommandDirectoryReference;
  maintainerList?: string[];
  memberGroupList?: string[];
  memberList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  offlineApprovalConfig?: UpdateStandardSetRequestUpdateCommandOfflineApprovalConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  standardSetId?: number;
  visibilityConfig?: UpdateStandardSetRequestUpdateCommandVisibilityConfig;
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
      standardSetId: 'StandardSetId',
      visibilityConfig: 'VisibilityConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalConfig: UpdateStandardSetRequestUpdateCommandApprovalConfig,
      code: 'string',
      defaultStandardTemplateId: 'number',
      description: 'string',
      directoryReference: UpdateStandardSetRequestUpdateCommandDirectoryReference,
      maintainerList: { 'type': 'array', 'itemType': 'string' },
      memberGroupList: { 'type': 'array', 'itemType': 'string' },
      memberList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      offlineApprovalConfig: UpdateStandardSetRequestUpdateCommandOfflineApprovalConfig,
      standardSetId: 'number',
      visibilityConfig: UpdateStandardSetRequestUpdateCommandVisibilityConfig,
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

export class UpdateStandardSetRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  updateCommand?: UpdateStandardSetRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommand: UpdateStandardSetRequestUpdateCommand,
    };
  }

  validate() {
    if(this.updateCommand && typeof (this.updateCommand as any).validate === 'function') {
      (this.updateCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

