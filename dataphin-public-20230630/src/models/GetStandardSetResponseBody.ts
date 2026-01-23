// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStandardSetResponseBodyStandardSetInfoApprovalConfig extends $dara.Model {
  /**
   * @example
   * BY_DEFAULT
   */
  approvalType?: string;
  enableApproval?: boolean;
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

export class GetStandardSetResponseBodyStandardSetInfoCreator extends $dara.Model {
  /**
   * @example
   * 300000913
   */
  id?: string;
  /**
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
   * @example
   * 300000913
   */
  id?: string;
  /**
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
   * @example
   * 300000913
   */
  id?: string;
  /**
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
   * @example
   * 1121
   */
  id?: string;
  /**
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
   * @example
   * 300000913
   */
  id?: string;
  /**
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
   * @example
   * BY_DEFAULT
   */
  approvalType?: string;
  enableApproval?: boolean;
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

export class GetStandardSetResponseBodyStandardSetInfoVisibilityConfigSpecifiedUserList extends $dara.Model {
  /**
   * @example
   * 300000913
   */
  id?: string;
  /**
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
  specifiedUserList?: GetStandardSetResponseBodyStandardSetInfoVisibilityConfigSpecifiedUserList[];
  /**
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
  approvalConfig?: GetStandardSetResponseBodyStandardSetInfoApprovalConfig;
  /**
   * @example
   * CITY
   */
  code?: string;
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  createTime?: string;
  creator?: GetStandardSetResponseBodyStandardSetInfoCreator;
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
  directoryReference?: GetStandardSetResponseBodyStandardSetInfoDirectoryReference;
  /**
   * @example
   * 1234
   */
  id?: number;
  lastModifier?: GetStandardSetResponseBodyStandardSetInfoLastModifier;
  maintainerList?: GetStandardSetResponseBodyStandardSetInfoMaintainerList[];
  memberGroupList?: GetStandardSetResponseBodyStandardSetInfoMemberGroupList[];
  memberList?: GetStandardSetResponseBodyStandardSetInfoMemberList[];
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  modifyTime?: string;
  /**
   * @example
   * test
   */
  name?: string;
  offlineApprovalConfig?: GetStandardSetResponseBodyStandardSetInfoOfflineApprovalConfig;
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
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
  standardSetInfo?: GetStandardSetResponseBodyStandardSetInfo;
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

