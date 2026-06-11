// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ActionIntegrationConfig } from "./ActionIntegrationConfig";
import { ArmsIntegrationConfig } from "./ArmsIntegrationConfig";
import { ConditionConfigUnified } from "./ConditionConfigUnified";
import { DatasourceConfigUnified } from "./DatasourceConfigUnified";
import { NotifyConfigUnified } from "./NotifyConfigUnified";
import { QueryConfigUnified } from "./QueryConfigUnified";
import { ScheduleConfigUnified } from "./ScheduleConfigUnified";


export class ManageAlertRulesUnifiedActionInput extends $dara.Model {
  /**
   * @remarks
   * The action to perform on the alert rule. For example, `create` or `update`.
   * 
   * This parameter is required.
   */
  action?: string;
  /**
   * @remarks
   * The action integration configuration for triggering automated workflows or actions in external systems.
   */
  actionIntegrationConfig?: ActionIntegrationConfig;
  /**
   * @remarks
   * A collection of key-value pairs attached to the alert as annotations. Use annotations to provide additional, non-identifying information, such as descriptions or runbook links.
   */
  annotations?: { [key: string]: string };
  /**
   * @remarks
   * Configuration for integrating with Application Real-Time Monitoring Service (ARMS).
   */
  armsIntegrationConfig?: ArmsIntegrationConfig;
  /**
   * @remarks
   * The condition configuration that specifies the trigger criteria for the alert.
   */
  conditionConfig?: ConditionConfigUnified;
  /**
   * @remarks
   * The content template for the alert notification. You can use variables to customize the message.
   */
  contentTemplate?: string;
  /**
   * @remarks
   * The data source configuration for the alert rule.
   */
  datasourceConfig?: DatasourceConfigUnified;
  /**
   * @remarks
   * The display name of the alert rule, as shown in the console.
   */
  displayName?: string;
  /**
   * @remarks
   * Specifies whether the alert rule is enabled. A value of `true` indicates the rule is active, and `false` indicates it is inactive. Default: `true`.
   */
  enabled?: boolean;
  /**
   * @remarks
   * A collection of key-value pairs attached to the alert rule as labels. Use labels for categorization and filtering.
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The notification configuration that specifies how and where to send alert notifications.
   */
  notifyConfig?: NotifyConfigUnified;
  /**
   * @remarks
   * The query configuration that defines the data for rule evaluation.
   */
  queryConfig?: QueryConfigUnified;
  /**
   * @remarks
   * The schedule configuration that determines how often the system evaluates the rule.
   */
  scheduleConfig?: ScheduleConfigUnified;
  /**
   * @remarks
   * The unique identifier (UUID) of the alert rule. This parameter is required when you update or delete an existing rule.
   */
  uuid?: string;
  /**
   * @remarks
   * A list of UUIDs. Use this parameter to perform bulk actions on multiple rules, such as batch deletion.
   */
  uuidList?: string[];
  /**
   * @remarks
   * The ID of the workspace that contains the alert rule.
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      actionIntegrationConfig: 'actionIntegrationConfig',
      annotations: 'annotations',
      armsIntegrationConfig: 'armsIntegrationConfig',
      conditionConfig: 'conditionConfig',
      contentTemplate: 'contentTemplate',
      datasourceConfig: 'datasourceConfig',
      displayName: 'displayName',
      enabled: 'enabled',
      labels: 'labels',
      notifyConfig: 'notifyConfig',
      queryConfig: 'queryConfig',
      scheduleConfig: 'scheduleConfig',
      uuid: 'uuid',
      uuidList: 'uuidList',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionIntegrationConfig: ActionIntegrationConfig,
      annotations: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      armsIntegrationConfig: ArmsIntegrationConfig,
      conditionConfig: ConditionConfigUnified,
      contentTemplate: 'string',
      datasourceConfig: DatasourceConfigUnified,
      displayName: 'string',
      enabled: 'boolean',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      notifyConfig: NotifyConfigUnified,
      queryConfig: QueryConfigUnified,
      scheduleConfig: ScheduleConfigUnified,
      uuid: 'string',
      uuidList: { 'type': 'array', 'itemType': 'string' },
      workspace: 'string',
    };
  }

  validate() {
    if(this.actionIntegrationConfig && typeof (this.actionIntegrationConfig as any).validate === 'function') {
      (this.actionIntegrationConfig as any).validate();
    }
    if(this.annotations) {
      $dara.Model.validateMap(this.annotations);
    }
    if(this.armsIntegrationConfig && typeof (this.armsIntegrationConfig as any).validate === 'function') {
      (this.armsIntegrationConfig as any).validate();
    }
    if(this.conditionConfig && typeof (this.conditionConfig as any).validate === 'function') {
      (this.conditionConfig as any).validate();
    }
    if(this.datasourceConfig && typeof (this.datasourceConfig as any).validate === 'function') {
      (this.datasourceConfig as any).validate();
    }
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(this.notifyConfig && typeof (this.notifyConfig as any).validate === 'function') {
      (this.notifyConfig as any).validate();
    }
    if(this.queryConfig && typeof (this.queryConfig as any).validate === 'function') {
      (this.queryConfig as any).validate();
    }
    if(this.scheduleConfig && typeof (this.scheduleConfig as any).validate === 'function') {
      (this.scheduleConfig as any).validate();
    }
    if(Array.isArray(this.uuidList)) {
      $dara.Model.validateArray(this.uuidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

