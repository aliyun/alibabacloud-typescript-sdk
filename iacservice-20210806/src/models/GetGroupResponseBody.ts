// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGroupResponseBodyGroupNotifyConfig extends $dara.Model {
  /**
   * @example
   * /
   */
  notifyPath?: string;
  /**
   * @example
   * DingDing
   */
  notifyType?: string;
  static names(): { [key: string]: string } {
    return {
      notifyPath: 'notifyPath',
      notifyType: 'notifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyPath: 'string',
      notifyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupResponseBodyGroupTriggerConfig extends $dara.Model {
  /**
   * @example
   * Cron
   */
  triggerStrategy?: string;
  /**
   * @example
   * 0 0 8 * * ?
   */
  triggerValue?: string;
  static names(): { [key: string]: string } {
    return {
      triggerStrategy: 'triggerStrategy',
      triggerValue: 'triggerValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      triggerStrategy: 'string',
      triggerValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupResponseBodyGroup extends $dara.Model {
  /**
   * @example
   * true
   */
  autoDestroy?: boolean;
  /**
   * @example
   * true
   */
  autoTrigger?: boolean;
  /**
   * @example
   * 2022-08-21T10:57:11Z
   */
  createTime?: string;
  /**
   * @example
   * OK
   */
  description?: string;
  /**
   * @example
   * true
   */
  forcedSetting?: boolean;
  /**
   * @example
   * g-14e80de4866bf7ffed0bab6154d738
   */
  groupId?: string;
  /**
   * @example
   * abc
   */
  name?: string;
  notifyConfig?: GetGroupResponseBodyGroupNotifyConfig[];
  notifyOperationTypes?: string[];
  /**
   * @example
   * p-4267dcfbf1b6d126edcadf0e949
   */
  projectId?: string;
  /**
   * @example
   * ramRoleName
   */
  ramRole?: string;
  reportExportField?: string[];
  /**
   * @example
   * /
   */
  reportExportPath?: string;
  /**
   * @example
   * 3
   */
  taskCnt?: number;
  /**
   * @example
   * 1.191.0
   */
  terraformProviderVersion?: string;
  triggerConfig?: GetGroupResponseBodyGroupTriggerConfig[];
  triggerResourceType?: string[];
  static names(): { [key: string]: string } {
    return {
      autoDestroy: 'autoDestroy',
      autoTrigger: 'autoTrigger',
      createTime: 'createTime',
      description: 'description',
      forcedSetting: 'forcedSetting',
      groupId: 'groupId',
      name: 'name',
      notifyConfig: 'notifyConfig',
      notifyOperationTypes: 'notifyOperationTypes',
      projectId: 'projectId',
      ramRole: 'ramRole',
      reportExportField: 'reportExportField',
      reportExportPath: 'reportExportPath',
      taskCnt: 'taskCnt',
      terraformProviderVersion: 'terraformProviderVersion',
      triggerConfig: 'triggerConfig',
      triggerResourceType: 'triggerResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDestroy: 'boolean',
      autoTrigger: 'boolean',
      createTime: 'string',
      description: 'string',
      forcedSetting: 'boolean',
      groupId: 'string',
      name: 'string',
      notifyConfig: { 'type': 'array', 'itemType': GetGroupResponseBodyGroupNotifyConfig },
      notifyOperationTypes: { 'type': 'array', 'itemType': 'string' },
      projectId: 'string',
      ramRole: 'string',
      reportExportField: { 'type': 'array', 'itemType': 'string' },
      reportExportPath: 'string',
      taskCnt: 'number',
      terraformProviderVersion: 'string',
      triggerConfig: { 'type': 'array', 'itemType': GetGroupResponseBodyGroupTriggerConfig },
      triggerResourceType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.notifyConfig)) {
      $dara.Model.validateArray(this.notifyConfig);
    }
    if(Array.isArray(this.notifyOperationTypes)) {
      $dara.Model.validateArray(this.notifyOperationTypes);
    }
    if(Array.isArray(this.reportExportField)) {
      $dara.Model.validateArray(this.reportExportField);
    }
    if(Array.isArray(this.triggerConfig)) {
      $dara.Model.validateArray(this.triggerConfig);
    }
    if(Array.isArray(this.triggerResourceType)) {
      $dara.Model.validateArray(this.triggerResourceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupResponseBody extends $dara.Model {
  group?: GetGroupResponseBodyGroup;
  /**
   * @example
   * B6ED9F71-7FA8-598E-B64D-4606FB3FCCC9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'group',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: GetGroupResponseBodyGroup,
      requestId: 'string',
    };
  }

  validate() {
    if(this.group && typeof (this.group as any).validate === 'function') {
      (this.group as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

