// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProtectedBranchesResponseBodyResultAllowMergeUsers extends $dara.Model {
  /**
   * @example
   * https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100
   */
  avatar?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * 19238
   */
  id?: number;
  name?: string;
  /**
   * @example
   * codeup-test
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'avatar',
      email: 'email',
      id: 'id',
      name: 'name',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      email: 'string',
      id: 'number',
      name: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProtectedBranchesResponseBodyResultAllowPushUsers extends $dara.Model {
  /**
   * @example
   * https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100
   */
  avatar?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * 19238
   */
  id?: number;
  name?: string;
  /**
   * @example
   * codeup-test
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'avatar',
      email: 'email',
      id: 'id',
      name: 'name',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      email: 'string',
      id: 'number',
      name: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProtectedBranchesResponseBodyResultMergeRequestSettingDefaultAssignees extends $dara.Model {
  /**
   * @example
   * https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100
   */
  avatar?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * 19238
   */
  id?: number;
  name?: string;
  /**
   * @example
   * codeup-test
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'avatar',
      email: 'email',
      id: 'id',
      name: 'name',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      email: 'string',
      id: 'number',
      name: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProtectedBranchesResponseBodyResultMergeRequestSetting extends $dara.Model {
  allowMergeRequestRoles?: number[];
  defaultAssignees?: ListProtectedBranchesResponseBodyResultMergeRequestSettingDefaultAssignees[];
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
      defaultAssignees: { 'type': 'array', 'itemType': ListProtectedBranchesResponseBodyResultMergeRequestSettingDefaultAssignees },
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

export class ListProtectedBranchesResponseBodyResultTestSettingDTOCheckConfigCheckItems extends $dara.Model {
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

export class ListProtectedBranchesResponseBodyResultTestSettingDTOCheckConfig extends $dara.Model {
  checkItems?: ListProtectedBranchesResponseBodyResultTestSettingDTOCheckConfigCheckItems[];
  static names(): { [key: string]: string } {
    return {
      checkItems: 'checkItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItems: { 'type': 'array', 'itemType': ListProtectedBranchesResponseBodyResultTestSettingDTOCheckConfigCheckItems },
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

export class ListProtectedBranchesResponseBodyResultTestSettingDTOCheckTaskQualityConfig extends $dara.Model {
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

export class ListProtectedBranchesResponseBodyResultTestSettingDTOCodeGuidelinesDetection extends $dara.Model {
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

export class ListProtectedBranchesResponseBodyResultTestSettingDTOSensitiveInfoDetection extends $dara.Model {
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

export class ListProtectedBranchesResponseBodyResultTestSettingDTO extends $dara.Model {
  checkConfig?: ListProtectedBranchesResponseBodyResultTestSettingDTOCheckConfig;
  checkTaskQualityConfig?: ListProtectedBranchesResponseBodyResultTestSettingDTOCheckTaskQualityConfig;
  codeGuidelinesDetection?: ListProtectedBranchesResponseBodyResultTestSettingDTOCodeGuidelinesDetection;
  /**
   * @example
   * false
   */
  isRequired?: boolean;
  sensitiveInfoDetection?: ListProtectedBranchesResponseBodyResultTestSettingDTOSensitiveInfoDetection;
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
      checkConfig: ListProtectedBranchesResponseBodyResultTestSettingDTOCheckConfig,
      checkTaskQualityConfig: ListProtectedBranchesResponseBodyResultTestSettingDTOCheckTaskQualityConfig,
      codeGuidelinesDetection: ListProtectedBranchesResponseBodyResultTestSettingDTOCodeGuidelinesDetection,
      isRequired: 'boolean',
      sensitiveInfoDetection: ListProtectedBranchesResponseBodyResultTestSettingDTOSensitiveInfoDetection,
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

export class ListProtectedBranchesResponseBodyResult extends $dara.Model {
  allowMergeRoles?: number[];
  allowMergeUserIds?: number[];
  allowMergeUsers?: ListProtectedBranchesResponseBodyResultAllowMergeUsers[];
  allowPushRoles?: number[];
  allowPushUserIds?: number[];
  allowPushUsers?: ListProtectedBranchesResponseBodyResultAllowPushUsers[];
  /**
   * @example
   * protectedBranch
   */
  branch?: string;
  /**
   * @example
   * 2022-03-18 14:24:54
   */
  createdAt?: string;
  /**
   * @example
   * 19285
   */
  id?: number;
  matches?: string[];
  mergeRequestSetting?: ListProtectedBranchesResponseBodyResultMergeRequestSetting;
  testSettingDTO?: ListProtectedBranchesResponseBodyResultTestSettingDTO;
  /**
   * @example
   * 2022-03-18 14:24:54
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      allowMergeRoles: 'allowMergeRoles',
      allowMergeUserIds: 'allowMergeUserIds',
      allowMergeUsers: 'allowMergeUsers',
      allowPushRoles: 'allowPushRoles',
      allowPushUserIds: 'allowPushUserIds',
      allowPushUsers: 'allowPushUsers',
      branch: 'branch',
      createdAt: 'createdAt',
      id: 'id',
      matches: 'matches',
      mergeRequestSetting: 'mergeRequestSetting',
      testSettingDTO: 'testSettingDTO',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowMergeRoles: { 'type': 'array', 'itemType': 'number' },
      allowMergeUserIds: { 'type': 'array', 'itemType': 'number' },
      allowMergeUsers: { 'type': 'array', 'itemType': ListProtectedBranchesResponseBodyResultAllowMergeUsers },
      allowPushRoles: { 'type': 'array', 'itemType': 'number' },
      allowPushUserIds: { 'type': 'array', 'itemType': 'number' },
      allowPushUsers: { 'type': 'array', 'itemType': ListProtectedBranchesResponseBodyResultAllowPushUsers },
      branch: 'string',
      createdAt: 'string',
      id: 'number',
      matches: { 'type': 'array', 'itemType': 'string' },
      mergeRequestSetting: ListProtectedBranchesResponseBodyResultMergeRequestSetting,
      testSettingDTO: ListProtectedBranchesResponseBodyResultTestSettingDTO,
      updatedAt: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowMergeRoles)) {
      $dara.Model.validateArray(this.allowMergeRoles);
    }
    if(Array.isArray(this.allowMergeUserIds)) {
      $dara.Model.validateArray(this.allowMergeUserIds);
    }
    if(Array.isArray(this.allowMergeUsers)) {
      $dara.Model.validateArray(this.allowMergeUsers);
    }
    if(Array.isArray(this.allowPushRoles)) {
      $dara.Model.validateArray(this.allowPushRoles);
    }
    if(Array.isArray(this.allowPushUserIds)) {
      $dara.Model.validateArray(this.allowPushUserIds);
    }
    if(Array.isArray(this.allowPushUsers)) {
      $dara.Model.validateArray(this.allowPushUsers);
    }
    if(Array.isArray(this.matches)) {
      $dara.Model.validateArray(this.matches);
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

export class ListProtectedBranchesResponseBody extends $dara.Model {
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
   * 313A1BF6-63B7-52D4-A098-952221A65254
   */
  requestId?: string;
  result?: ListProtectedBranchesResponseBodyResult[];
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
      result: { 'type': 'array', 'itemType': ListProtectedBranchesResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

