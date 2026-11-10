// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGroupResponseBodyGroupNotifyConfig extends $dara.Model {
  /**
   * @remarks
   * The path configuration for notifications.
   * 
   * @example
   * /
   */
  notifyPath?: string;
  /**
   * @remarks
   * The notification type. Valid values:
   * - DingDing
   * 
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
   * @remarks
   * The trigger strategy. Valid values:
   * - ProviderNewVersion: Triggered when a new provider version is released.
   * - Cron: Triggered on a schedule.
   * 
   * @example
   * Cron
   */
  triggerStrategy?: string;
  /**
   * @remarks
   * The policy value for scheduled triggers. Specify a cron expression.
   * 
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
   * @remarks
   * Indicates whether automatic deletion is enabled.
   * 
   * @example
   * true
   */
  autoDestroy?: boolean;
  /**
   * @remarks
   * Indicates whether automatic triggering is enabled.
   * 
   * @example
   * true
   */
  autoTrigger?: boolean;
  /**
   * @remarks
   * The creation time. The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2022-08-21T10:57:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The group description.
   * 
   * @example
   * OK
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the group configuration is forcibly applied.
   * 
   * @example
   * true
   */
  forcedSetting?: boolean;
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * g-14e80de4866bf7ffed0bab6154d738
   */
  groupId?: string;
  /**
   * @remarks
   * The group name.
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @remarks
   * The notification configuration.
   */
  notifyConfig?: GetGroupResponseBodyGroupNotifyConfig[];
  /**
   * @remarks
   * The list of notification operation types.
   */
  notifyOperationTypes?: string[];
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * p-4267dcfbf1b6d126edcadf0e949
   */
  projectId?: string;
  /**
   * @remarks
   * The Resource Access Management (RAM) role. Length: 1 to 128 characters. The system assumes this role to execute the template when a new job is triggered. This parameter is required when the job is not triggered manually.
   * 
   * @example
   * ramRoleName
   */
  ramRole?: string;
  /**
   * @remarks
   * The list of report export fields.
   */
  reportExportField?: string[];
  /**
   * @remarks
   * The export path for execution reports. OSS paths are supported, such as https://<OSS bucket endpoint>/<path>.
   * 
   * @example
   * /
   */
  reportExportPath?: string;
  /**
   * @remarks
   * The number of tasks.
   * 
   * @example
   * 3
   */
  taskCnt?: number;
  /**
   * @remarks
   * The Terraform provider version. Select a Terraform provider version. Tasks in the group execute plans based on the specified Terraform provider version. The version configured on the task takes precedence. This setting may conflict with the Terraform provider version specified in the module.
   * 
   * @example
   * 1.191.0
   */
  terraformProviderVersion?: string;
  /**
   * @remarks
   * The trigger policy. This parameter cannot be empty when autoTrigger is set to true.
   */
  triggerConfig?: GetGroupResponseBodyGroupTriggerConfig[];
  /**
   * @remarks
   * The resource type for triggered execution. Valid values:
   * - Task: Regular task.
   * - SceneTestingTask: Scenario-based testing task.
   */
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
  /**
   * @remarks
   * The group.
   */
  group?: GetGroupResponseBodyGroup;
  /**
   * @remarks
   * The request ID.
   * 
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

