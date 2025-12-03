// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProtectedBranchesRequestMergeRequestSetting extends $dara.Model {
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

export class UpdateProtectedBranchesRequestTestSettingDTOCheckConfigCheckItems extends $dara.Model {
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

export class UpdateProtectedBranchesRequestTestSettingDTOCheckConfig extends $dara.Model {
  checkItems?: UpdateProtectedBranchesRequestTestSettingDTOCheckConfigCheckItems[];
  static names(): { [key: string]: string } {
    return {
      checkItems: 'checkItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItems: { 'type': 'array', 'itemType': UpdateProtectedBranchesRequestTestSettingDTOCheckConfigCheckItems },
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

export class UpdateProtectedBranchesRequestTestSettingDTOCheckTaskQualityConfig extends $dara.Model {
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
   * bz-task-quality
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

export class UpdateProtectedBranchesRequestTestSettingDTOCodeGuidelinesDetection extends $dara.Model {
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

export class UpdateProtectedBranchesRequestTestSettingDTOSensitiveInfoDetection extends $dara.Model {
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

export class UpdateProtectedBranchesRequestTestSettingDTO extends $dara.Model {
  checkConfig?: UpdateProtectedBranchesRequestTestSettingDTOCheckConfig;
  checkTaskQualityConfig?: UpdateProtectedBranchesRequestTestSettingDTOCheckTaskQualityConfig;
  codeGuidelinesDetection?: UpdateProtectedBranchesRequestTestSettingDTOCodeGuidelinesDetection;
  /**
   * @example
   * false
   */
  isRequired?: boolean;
  sensitiveInfoDetection?: UpdateProtectedBranchesRequestTestSettingDTOSensitiveInfoDetection;
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
      checkConfig: UpdateProtectedBranchesRequestTestSettingDTOCheckConfig,
      checkTaskQualityConfig: UpdateProtectedBranchesRequestTestSettingDTOCheckTaskQualityConfig,
      codeGuidelinesDetection: UpdateProtectedBranchesRequestTestSettingDTOCodeGuidelinesDetection,
      isRequired: 'boolean',
      sensitiveInfoDetection: UpdateProtectedBranchesRequestTestSettingDTOSensitiveInfoDetection,
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

export class UpdateProtectedBranchesRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
   */
  accessToken?: string;
  allowMergeRoles?: number[];
  allowMergeUserIds?: string[];
  allowPushRoles?: number[];
  allowPushUserIds?: string[];
  /**
   * @example
   * master
   */
  branch?: string;
  /**
   * @example
   * 19224
   */
  id?: number;
  mergeRequestSetting?: UpdateProtectedBranchesRequestMergeRequestSetting;
  testSettingDTO?: UpdateProtectedBranchesRequestTestSettingDTO;
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      allowMergeRoles: 'allowMergeRoles',
      allowMergeUserIds: 'allowMergeUserIds',
      allowPushRoles: 'allowPushRoles',
      allowPushUserIds: 'allowPushUserIds',
      branch: 'branch',
      id: 'id',
      mergeRequestSetting: 'mergeRequestSetting',
      testSettingDTO: 'testSettingDTO',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      allowMergeRoles: { 'type': 'array', 'itemType': 'number' },
      allowMergeUserIds: { 'type': 'array', 'itemType': 'string' },
      allowPushRoles: { 'type': 'array', 'itemType': 'number' },
      allowPushUserIds: { 'type': 'array', 'itemType': 'string' },
      branch: 'string',
      id: 'number',
      mergeRequestSetting: UpdateProtectedBranchesRequestMergeRequestSetting,
      testSettingDTO: UpdateProtectedBranchesRequestTestSettingDTO,
      organizationId: 'string',
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

