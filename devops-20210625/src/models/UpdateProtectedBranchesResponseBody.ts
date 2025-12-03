// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProtectedBranchesResponseBodyResultMergeRequestSetting extends $dara.Model {
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

export class UpdateProtectedBranchesResponseBodyResultTestSettingDTOCheckConfigCheckItems extends $dara.Model {
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

export class UpdateProtectedBranchesResponseBodyResultTestSettingDTOCheckConfig extends $dara.Model {
  checkItems?: UpdateProtectedBranchesResponseBodyResultTestSettingDTOCheckConfigCheckItems[];
  static names(): { [key: string]: string } {
    return {
      checkItems: 'checkItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItems: { 'type': 'array', 'itemType': UpdateProtectedBranchesResponseBodyResultTestSettingDTOCheckConfigCheckItems },
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

export class UpdateProtectedBranchesResponseBodyResultTestSettingDTOCheckTaskQualityConfig extends $dara.Model {
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

export class UpdateProtectedBranchesResponseBodyResultTestSettingDTOCodeGuidelinesDetection extends $dara.Model {
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

export class UpdateProtectedBranchesResponseBodyResultTestSettingDTOSensitiveInfoDetection extends $dara.Model {
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

export class UpdateProtectedBranchesResponseBodyResultTestSettingDTO extends $dara.Model {
  checkConfig?: UpdateProtectedBranchesResponseBodyResultTestSettingDTOCheckConfig;
  checkTaskQualityConfig?: UpdateProtectedBranchesResponseBodyResultTestSettingDTOCheckTaskQualityConfig;
  codeGuidelinesDetection?: UpdateProtectedBranchesResponseBodyResultTestSettingDTOCodeGuidelinesDetection;
  /**
   * @example
   * false
   */
  isRequired?: boolean;
  sensitiveInfoDetection?: UpdateProtectedBranchesResponseBodyResultTestSettingDTOSensitiveInfoDetection;
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
      checkConfig: UpdateProtectedBranchesResponseBodyResultTestSettingDTOCheckConfig,
      checkTaskQualityConfig: UpdateProtectedBranchesResponseBodyResultTestSettingDTOCheckTaskQualityConfig,
      codeGuidelinesDetection: UpdateProtectedBranchesResponseBodyResultTestSettingDTOCodeGuidelinesDetection,
      isRequired: 'boolean',
      sensitiveInfoDetection: UpdateProtectedBranchesResponseBodyResultTestSettingDTOSensitiveInfoDetection,
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

export class UpdateProtectedBranchesResponseBodyResult extends $dara.Model {
  allowMergeRoles?: number[];
  allowMergeUserIds?: number[];
  allowPushRoles?: number[];
  allowPushUserIds?: number[];
  /**
   * @example
   * master
   */
  branch?: string;
  /**
   * @example
   * 123456
   */
  id?: number;
  mergeRequestSetting?: UpdateProtectedBranchesResponseBodyResultMergeRequestSetting;
  testSettingDTO?: UpdateProtectedBranchesResponseBodyResultTestSettingDTO;
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
      mergeRequestSetting: UpdateProtectedBranchesResponseBodyResultMergeRequestSetting,
      testSettingDTO: UpdateProtectedBranchesResponseBodyResultTestSettingDTO,
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

export class UpdateProtectedBranchesResponseBody extends $dara.Model {
  /**
   * @example
   * SYSTEM_UNKNOWN_ERROR
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * A35869D5-BB29-5F84-A4DD-B09985EA2AFA
   */
  requestId?: string;
  result?: UpdateProtectedBranchesResponseBodyResult;
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
      result: UpdateProtectedBranchesResponseBodyResult,
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

