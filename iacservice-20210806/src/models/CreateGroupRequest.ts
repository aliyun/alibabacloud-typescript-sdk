// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupRequestNotifyConfig extends $dara.Model {
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
   * The notification type. Valid values: DingDing.
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

export class CreateGroupRequestTriggerConfig extends $dara.Model {
  /**
   * @remarks
   * The trigger policy. Valid values:
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
   * 0 0 19 * * ？
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

export class CreateGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete the group after creation.
   * 
   * @example
   * true
   */
  autoDestroy?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the automatic trigger policy. Valid values: **true**: Enabled. **false**: Disabled.
   * 
   * @example
   * true
   */
  autoTrigger?: boolean;
  /**
   * @remarks
   * The idempotency token. Format: [0-9a-zA-Z-]{1,64}. A UUID is recommended.
   * 
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the group.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to force the use of the group configuration.
   * 
   * @example
   * true
   */
  forcedSetting?: boolean;
  /**
   * @remarks
   * The name of the group.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The notification configuration.
   */
  notifyConfig?: CreateGroupRequestNotifyConfig[];
  /**
   * @remarks
   * The list of notification operation types.
   */
  notifyOperationTypes?: string[];
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * p-433aead7560571a87349d054b4
   */
  projectId?: string;
  /**
   * @remarks
   * The RAM role. Length: 1 to 128 characters. The system assumes this role to execute the template when a new job is triggered. This parameter is required when the job trigger method is not manual.
   * 
   * @example
   * ramName
   */
  ramRole?: string;
  /**
   * @remarks
   * The list of export fields for the report.
   */
  reportExportField?: string[];
  /**
   * @remarks
   * The export address for the execution report. OSS addresses are supported. Format: https://<OSS bucket endpoint>/<path>.
   * 
   * @example
   * https://test.oss-cn-hangzhou.aliyuncs.com/test/test
   */
  reportExportPath?: string;
  /**
   * @remarks
   * The Terraform provider version. Select a Terraform provider version. The version configured on the task takes precedence.
   * 
   * @example
   * 1.189.0
   */
  terraformProviderVersion?: string;
  /**
   * @remarks
   * The trigger policy. This parameter is required when autoTrigger is set to true.
   */
  triggerConfig?: CreateGroupRequestTriggerConfig[];
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
      clientToken: 'clientToken',
      description: 'description',
      forcedSetting: 'forcedSetting',
      name: 'name',
      notifyConfig: 'notifyConfig',
      notifyOperationTypes: 'notifyOperationTypes',
      projectId: 'projectId',
      ramRole: 'ramRole',
      reportExportField: 'reportExportField',
      reportExportPath: 'reportExportPath',
      terraformProviderVersion: 'terraformProviderVersion',
      triggerConfig: 'triggerConfig',
      triggerResourceType: 'triggerResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDestroy: 'boolean',
      autoTrigger: 'boolean',
      clientToken: 'string',
      description: 'string',
      forcedSetting: 'boolean',
      name: 'string',
      notifyConfig: { 'type': 'array', 'itemType': CreateGroupRequestNotifyConfig },
      notifyOperationTypes: { 'type': 'array', 'itemType': 'string' },
      projectId: 'string',
      ramRole: 'string',
      reportExportField: { 'type': 'array', 'itemType': 'string' },
      reportExportPath: 'string',
      terraformProviderVersion: 'string',
      triggerConfig: { 'type': 'array', 'itemType': CreateGroupRequestTriggerConfig },
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

