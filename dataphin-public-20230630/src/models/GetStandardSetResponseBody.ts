// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStandardSetResponseBodyStandardSetInfoApprovalConfig extends $dara.Model {
  /**
   * @remarks
   * The approval flow type. Valid values: BY_DEFAULT (default approval type) and BY_TEMPLATE (based on an approval template).
   * 
   * @example
   * BY_DEFAULT
   */
  approvalType?: string;
  /**
   * @remarks
   * Specifies whether to enable approval.
   */
  enableApproval?: boolean;
  /**
   * @remarks
   * Specifies whether to submit approvals in batches.
   */
  isSubmitInBatch?: boolean;
  /**
   * @remarks
   * The ID of the approval template. This parameter takes effect only when the approval flow type is set to BY_TEMPLATE.
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

export class GetStandardSetResponseBodyStandardSetInfoCreator extends $dara.Model {
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 300000913
   */
  id?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * susan
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStandardSetResponseBodyStandardSetInfoDirectoryReference extends $dara.Model {
  /**
   * @remarks
   * The folder.
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

export class GetStandardSetResponseBodyStandardSetInfoLastModifier extends $dara.Model {
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 300000913
   */
  id?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * susan
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStandardSetResponseBodyStandardSetInfoMaintainerList extends $dara.Model {
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 300000913
   */
  id?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * susan
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStandardSetResponseBodyStandardSetInfoMemberGroupList extends $dara.Model {
  /**
   * @remarks
   * The ID of the user group.
   * 
   * @example
   * 1121
   */
  id?: string;
  /**
   * @remarks
   * The name of the user group.
   * 
   * @example
   * testGroup
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStandardSetResponseBodyStandardSetInfoMemberList extends $dara.Model {
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 300000913
   */
  id?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * susan
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStandardSetResponseBodyStandardSetInfoOfflineApprovalConfig extends $dara.Model {
  /**
   * @remarks
   * The approval flow type. Valid values: BY_DEFAULT (default approval type) and BY_TEMPLATE (based on an approval template).
   * 
   * @example
   * BY_DEFAULT
   */
  approvalType?: string;
  /**
   * @remarks
   * Specifies whether to enable approval.
   */
  enableApproval?: boolean;
  /**
   * @remarks
   * Specifies whether to submit approvals in batches.
   */
  isSubmitInBatch?: boolean;
  /**
   * @remarks
   * The ID of the approval template. This parameter takes effect only when the approval flow type is set to BY_TEMPLATE.
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

export class GetStandardSetResponseBodyStandardSetInfoVisibilityConfigSpecifiedUserList extends $dara.Model {
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 300000913
   */
  id?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * susan
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStandardSetResponseBodyStandardSetInfoVisibilityConfig extends $dara.Model {
  /**
   * @remarks
   * The list of specified users who have visibility. This parameter takes effect only when the visibility type is set to SPECIFIED.
   */
  specifiedUserList?: GetStandardSetResponseBodyStandardSetInfoVisibilityConfigSpecifiedUserList[];
  /**
   * @remarks
   * The visibility type. Valid values: PUBLIC (public), PRIVATE (private, visible only to standard set members and administrators), and SPECIFIED (specified users).
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
      specifiedUserList: { 'type': 'array', 'itemType': GetStandardSetResponseBodyStandardSetInfoVisibilityConfigSpecifiedUserList },
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

export class GetStandardSetResponseBodyStandardSetInfo extends $dara.Model {
  /**
   * @remarks
   * The online approval configuration.
   */
  approvalConfig?: GetStandardSetResponseBodyStandardSetInfoApprovalConfig;
  /**
   * @remarks
   * The code of the standard set.
   * 
   * @example
   * CITY
   */
  code?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The creator.
   */
  creator?: GetStandardSetResponseBodyStandardSetInfoCreator;
  /**
   * @remarks
   * The default standard template ID.
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
   * The parent folder.
   */
  directoryReference?: GetStandardSetResponseBodyStandardSetInfoDirectoryReference;
  /**
   * @remarks
   * The ID of the standard set.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The last modifier.
   */
  lastModifier?: GetStandardSetResponseBodyStandardSetInfoLastModifier;
  /**
   * @remarks
   * The maintainers and owners.
   */
  maintainerList?: GetStandardSetResponseBodyStandardSetInfoMaintainerList[];
  /**
   * @remarks
   * The member groups.
   */
  memberGroupList?: GetStandardSetResponseBodyStandardSetInfoMemberGroupList[];
  /**
   * @remarks
   * The members.
   */
  memberList?: GetStandardSetResponseBodyStandardSetInfoMemberList[];
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  modifyTime?: string;
  /**
   * @remarks
   * The name of the standard set.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The offline approval configuration.
   */
  offlineApprovalConfig?: GetStandardSetResponseBodyStandardSetInfoOfflineApprovalConfig;
  /**
   * @remarks
   * The visibility configuration.
   */
  visibilityConfig?: GetStandardSetResponseBodyStandardSetInfoVisibilityConfig;
  static names(): { [key: string]: string } {
    return {
      approvalConfig: 'ApprovalConfig',
      code: 'Code',
      createTime: 'CreateTime',
      creator: 'Creator',
      defaultStandardTemplateId: 'DefaultStandardTemplateId',
      description: 'Description',
      directoryReference: 'DirectoryReference',
      id: 'Id',
      lastModifier: 'LastModifier',
      maintainerList: 'MaintainerList',
      memberGroupList: 'MemberGroupList',
      memberList: 'MemberList',
      modifyTime: 'ModifyTime',
      name: 'Name',
      offlineApprovalConfig: 'OfflineApprovalConfig',
      visibilityConfig: 'VisibilityConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalConfig: GetStandardSetResponseBodyStandardSetInfoApprovalConfig,
      code: 'string',
      createTime: 'string',
      creator: GetStandardSetResponseBodyStandardSetInfoCreator,
      defaultStandardTemplateId: 'number',
      description: 'string',
      directoryReference: GetStandardSetResponseBodyStandardSetInfoDirectoryReference,
      id: 'number',
      lastModifier: GetStandardSetResponseBodyStandardSetInfoLastModifier,
      maintainerList: { 'type': 'array', 'itemType': GetStandardSetResponseBodyStandardSetInfoMaintainerList },
      memberGroupList: { 'type': 'array', 'itemType': GetStandardSetResponseBodyStandardSetInfoMemberGroupList },
      memberList: { 'type': 'array', 'itemType': GetStandardSetResponseBodyStandardSetInfoMemberList },
      modifyTime: 'string',
      name: 'string',
      offlineApprovalConfig: GetStandardSetResponseBodyStandardSetInfoOfflineApprovalConfig,
      visibilityConfig: GetStandardSetResponseBodyStandardSetInfoVisibilityConfig,
    };
  }

  validate() {
    if(this.approvalConfig && typeof (this.approvalConfig as any).validate === 'function') {
      (this.approvalConfig as any).validate();
    }
    if(this.creator && typeof (this.creator as any).validate === 'function') {
      (this.creator as any).validate();
    }
    if(this.directoryReference && typeof (this.directoryReference as any).validate === 'function') {
      (this.directoryReference as any).validate();
    }
    if(this.lastModifier && typeof (this.lastModifier as any).validate === 'function') {
      (this.lastModifier as any).validate();
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

export class GetStandardSetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The backend exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * The standard set details.
   */
  standardSetInfo?: GetStandardSetResponseBodyStandardSetInfo;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      standardSetInfo: 'StandardSetInfo',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      standardSetInfo: GetStandardSetResponseBodyStandardSetInfo,
      success: 'boolean',
    };
  }

  validate() {
    if(this.standardSetInfo && typeof (this.standardSetInfo as any).validate === 'function') {
      (this.standardSetInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

