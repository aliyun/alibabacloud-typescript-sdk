// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProtectdBranchResponseBodyResultMergeRequestSetting extends $dara.Model {
  allowMergeRequestRoles?: number[];
  defaultAssignees?: string[];
  /**
   * @example
   * true
   */
  isAllowSelfApproval?: boolean;
  /**
   * @example
   * true
   */
  isRequireDiscussionProcessed?: boolean;
  /**
   * @example
   * true
   */
  isRequired?: boolean;
  /**
   * @example
   * false
   */
  isResetApprovalWhenNewPush?: boolean;
  /**
   * @example
   * 1
   */
  minimumApproval?: number;
  /**
   * @example
   * general
   */
  mrMode?: string;
  /**
   * @example
   * **.java
   */
  whiteList?: string;
  static names(): { [key: string]: string } {
    return {
      allowMergeRequestRoles: 'allowMergeRequestRoles',
      defaultAssignees: 'defaultAssignees',
      isAllowSelfApproval: 'isAllowSelfApproval',
      isRequireDiscussionProcessed: 'isRequireDiscussionProcessed',
      isRequired: 'isRequired',
      isResetApprovalWhenNewPush: 'isResetApprovalWhenNewPush',
      minimumApproval: 'minimumApproval',
      mrMode: 'mrMode',
      whiteList: 'whiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowMergeRequestRoles: { 'type': 'array', 'itemType': 'number' },
      defaultAssignees: { 'type': 'array', 'itemType': 'string' },
      isAllowSelfApproval: 'boolean',
      isRequireDiscussionProcessed: 'boolean',
      isRequired: 'boolean',
      isResetApprovalWhenNewPush: 'boolean',
      minimumApproval: 'number',
      mrMode: 'string',
      whiteList: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowMergeRequestRoles)) {
      $dara.Model.validateArray(this.allowMergeRequestRoles);
    }
    if(Array.isArray(this.defaultAssignees)) {
      $dara.Model.validateArray(this.defaultAssignees);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProtectdBranchResponseBodyResultTestSettingDTOCheckConfigCheckItems extends $dara.Model {
  /**
   * @example
   * false
   */
  isRequired?: boolean;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      isRequired: 'isRequired',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isRequired: 'boolean',
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

export class CreateProtectdBranchResponseBodyResultTestSettingDTOCheckConfig extends $dara.Model {
  checkItems?: CreateProtectdBranchResponseBodyResultTestSettingDTOCheckConfigCheckItems[];
  static names(): { [key: string]: string } {
    return {
      checkItems: 'checkItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItems: { 'type': 'array', 'itemType': CreateProtectdBranchResponseBodyResultTestSettingDTOCheckConfigCheckItems },
    };
  }

  validate() {
    if(Array.isArray(this.checkItems)) {
      $dara.Model.validateArray(this.checkItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProtectdBranchResponseBodyResultTestSettingDTOCheckTaskQualityConfig extends $dara.Model {
  /**
   * @example
   * 123456
   */
  bizNo?: string;
  /**
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @example
   * test_task_quality
   */
  message?: string;
  /**
   * @example
   * biz-task-quality
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      bizNo: 'bizNo',
      enabled: 'enabled',
      message: 'message',
      taskName: 'taskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizNo: 'string',
      enabled: 'boolean',
      message: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProtectdBranchResponseBodyResultTestSettingDTOCodeGuidelinesDetection extends $dara.Model {
  /**
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @example
   * test_code_guide_lines
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProtectdBranchResponseBodyResultTestSettingDTOSensitiveInfoDetection extends $dara.Model {
  /**
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @example
   * test_code_sensitive_info
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProtectdBranchResponseBodyResultTestSettingDTO extends $dara.Model {
  checkConfig?: CreateProtectdBranchResponseBodyResultTestSettingDTOCheckConfig;
  checkTaskQualityConfig?: CreateProtectdBranchResponseBodyResultTestSettingDTOCheckTaskQualityConfig;
  codeGuidelinesDetection?: CreateProtectdBranchResponseBodyResultTestSettingDTOCodeGuidelinesDetection;
  /**
   * @example
   * false
   */
  isRequired?: boolean;
  sensitiveInfoDetection?: CreateProtectdBranchResponseBodyResultTestSettingDTOSensitiveInfoDetection;
  static names(): { [key: string]: string } {
    return {
      checkConfig: 'checkConfig',
      checkTaskQualityConfig: 'checkTaskQualityConfig',
      codeGuidelinesDetection: 'codeGuidelinesDetection',
      isRequired: 'isRequired',
      sensitiveInfoDetection: 'sensitiveInfoDetection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkConfig: CreateProtectdBranchResponseBodyResultTestSettingDTOCheckConfig,
      checkTaskQualityConfig: CreateProtectdBranchResponseBodyResultTestSettingDTOCheckTaskQualityConfig,
      codeGuidelinesDetection: CreateProtectdBranchResponseBodyResultTestSettingDTOCodeGuidelinesDetection,
      isRequired: 'boolean',
      sensitiveInfoDetection: CreateProtectdBranchResponseBodyResultTestSettingDTOSensitiveInfoDetection,
    };
  }

  validate() {
    if(this.checkConfig && typeof (this.checkConfig as any).validate === 'function') {
      (this.checkConfig as any).validate();
    }
    if(this.checkTaskQualityConfig && typeof (this.checkTaskQualityConfig as any).validate === 'function') {
      (this.checkTaskQualityConfig as any).validate();
    }
    if(this.codeGuidelinesDetection && typeof (this.codeGuidelinesDetection as any).validate === 'function') {
      (this.codeGuidelinesDetection as any).validate();
    }
    if(this.sensitiveInfoDetection && typeof (this.sensitiveInfoDetection as any).validate === 'function') {
      (this.sensitiveInfoDetection as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProtectdBranchResponseBodyResult extends $dara.Model {
  allowMergeRoles?: number[];
  allowMergeUserIds?: number[];
  allowPushRoles?: number[];
  allowPushUserIds?: number[];
  /**
   * @example
   * protectBranch
   */
  branch?: string;
  /**
   * @example
   * 5240
   */
  id?: number;
  mergeRequestSetting?: CreateProtectdBranchResponseBodyResultMergeRequestSetting;
  testSettingDTO?: CreateProtectdBranchResponseBodyResultTestSettingDTO;
  static names(): { [key: string]: string } {
    return {
      allowMergeRoles: 'allowMergeRoles',
      allowMergeUserIds: 'allowMergeUserIds',
      allowPushRoles: 'allowPushRoles',
      allowPushUserIds: 'allowPushUserIds',
      branch: 'branch',
      id: 'id',
      mergeRequestSetting: 'mergeRequestSetting',
      testSettingDTO: 'testSettingDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowMergeRoles: { 'type': 'array', 'itemType': 'number' },
      allowMergeUserIds: { 'type': 'array', 'itemType': 'number' },
      allowPushRoles: { 'type': 'array', 'itemType': 'number' },
      allowPushUserIds: { 'type': 'array', 'itemType': 'number' },
      branch: 'string',
      id: 'number',
      mergeRequestSetting: CreateProtectdBranchResponseBodyResultMergeRequestSetting,
      testSettingDTO: CreateProtectdBranchResponseBodyResultTestSettingDTO,
    };
  }

  validate() {
    if(Array.isArray(this.allowMergeRoles)) {
      $dara.Model.validateArray(this.allowMergeRoles);
    }
    if(Array.isArray(this.allowMergeUserIds)) {
      $dara.Model.validateArray(this.allowMergeUserIds);
    }
    if(Array.isArray(this.allowPushRoles)) {
      $dara.Model.validateArray(this.allowPushRoles);
    }
    if(Array.isArray(this.allowPushUserIds)) {
      $dara.Model.validateArray(this.allowPushUserIds);
    }
    if(this.mergeRequestSetting && typeof (this.mergeRequestSetting as any).validate === 'function') {
      (this.mergeRequestSetting as any).validate();
    }
    if(this.testSettingDTO && typeof (this.testSettingDTO as any).validate === 'function') {
      (this.testSettingDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProtectdBranchResponseBody extends $dara.Model {
  /**
   * @example
   * Openapi.RequestError
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * C2F153F6-BB43-50C4-9F4F-40593203E19A
   */
  requestId?: string;
  result?: CreateProtectdBranchResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: CreateProtectdBranchResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

