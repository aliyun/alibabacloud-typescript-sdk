// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGroupRequestNotifyConfig extends $dara.Model {
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

export class UpdateGroupRequestTriggerConfig extends $dara.Model {
  /**
   * @remarks
   * The trigger strategy. Valid values:
   * 
   * - ProviderNewVersion: triggered when a new Provider version is released.
   * - Cron: triggered on a schedule.
   * 
   * @example
   * Cron
   */
  triggerStrategy?: string;
  /**
   * @remarks
   * The policy value that must be maintained for scheduled triggers. This value is a cron expression.
   * 
   * @example
   * 0 0 * * * ？
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

export class UpdateGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically delete the group.
   * 
   * @example
   * true
   */
  autoDestroy?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the automatic trigger policy. Valid values: - **true**: enabled. - **false**: disabled.
   * 
   * @example
   * true
   */
  autoTrigger?: boolean;
  /**
   * @remarks
   * The idempotency token. Format: [0-9a-zA-Z-]{1,64}. We recommend that you use a UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @remarks
   * The group description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to forcibly use the group configuration.
   * 
   * @example
   * true
   */
  forcedSetting?: boolean;
  /**
   * @remarks
   * The group name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The notification configuration.
   */
  notifyConfig?: UpdateGroupRequestNotifyConfig[];
  /**
   * @remarks
   * The list of notification operation types.
   */
  notifyOperationTypes?: string[];
  /**
   * @remarks
   * The RAM role (1-128 characters). The system assumes this role to execute the template when a new job is triggered. This parameter is required when the job trigger method is not manual.
   * 
   * @example
   * {}
   */
  ramRole?: string;
  /**
   * @remarks
   * The list of export fields for the report.
   */
  reportExportField?: string[];
  /**
   * @remarks
   * The export path for the execution report. OSS paths are supported.
   * 
   * @example
   * /
   */
  reportExportPath?: string;
  /**
   * @remarks
   * The Terraform Provider version. Select a Terraform Provider version. Nodes in the group execute plans based on the specified Terraform Provider version. The version configured on a node takes higher priority.
   * 
   * @example
   * 1.183.0
   */
  terraformProviderVersion?: string;
  /**
   * @remarks
   * The trigger policy. This parameter cannot be empty when autoTrigger is set to true.
   */
  triggerConfig?: UpdateGroupRequestTriggerConfig[];
  /**
   * @remarks
   * The resource type that triggers execution. Valid values:
   * 
   * - Task: regular node.
   * - SceneTestingTask: scenario-based testing node.
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
      notifyConfig: { 'type': 'array', 'itemType': UpdateGroupRequestNotifyConfig },
      notifyOperationTypes: { 'type': 'array', 'itemType': 'string' },
      ramRole: 'string',
      reportExportField: { 'type': 'array', 'itemType': 'string' },
      reportExportPath: 'string',
      terraformProviderVersion: 'string',
      triggerConfig: { 'type': 'array', 'itemType': UpdateGroupRequestTriggerConfig },
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

