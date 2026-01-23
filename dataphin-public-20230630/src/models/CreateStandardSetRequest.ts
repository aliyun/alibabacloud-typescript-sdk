// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStandardSetRequestCreateCommandApprovalConfig extends $dara.Model {
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

export class CreateStandardSetRequestCreateCommandDirectoryReference extends $dara.Model {
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

export class CreateStandardSetRequestCreateCommandOfflineApprovalConfig extends $dara.Model {
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

export class CreateStandardSetRequestCreateCommandVisibilityConfig extends $dara.Model {
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

export class CreateStandardSetRequestCreateCommand extends $dara.Model {
  approvalConfig?: CreateStandardSetRequestCreateCommandApprovalConfig;
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
  directoryReference?: CreateStandardSetRequestCreateCommandDirectoryReference;
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
  offlineApprovalConfig?: CreateStandardSetRequestCreateCommandOfflineApprovalConfig;
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
   * This parameter is required.
   */
  createCommand?: CreateStandardSetRequestCreateCommand;
  /**
   * @remarks
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

