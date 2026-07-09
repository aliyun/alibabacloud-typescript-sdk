// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ActionIntegrationConfig } from "./ActionIntegrationConfig";
import { ArmsIntegrationConfig } from "./ArmsIntegrationConfig";
import { ConditionConfigUnified } from "./ConditionConfigUnified";
import { DatasourceConfigUnified } from "./DatasourceConfigUnified";
import { NotifyConfigUnified } from "./NotifyConfigUnified";
import { QueryConfigUnified } from "./QueryConfigUnified";
import { ScheduleConfigUnified } from "./ScheduleConfigUnified";


export class AlertRuleV2 extends $dara.Model {
  /**
   * @remarks
   * Configuration for action integrations, such as webhooks, that execute when an alert is triggered.
   */
  actionIntegrationConfig?: ActionIntegrationConfig;
  /**
   * @remarks
   * A set of key-value pairs that serve as annotations, providing additional, non-identifying information, such as a description or a runbook link.
   */
  annotations?: { [key: string]: string };
  /**
   * @remarks
   * The configuration for integrating the alert rule with Application Real-Time Monitoring Service (ARMS).
   */
  armsIntegrationConfig?: ArmsIntegrationConfig;
  /**
   * @remarks
   * The configuration for the conditions that trigger an alert.
   */
  conditionConfig?: ConditionConfigUnified;
  /**
   * @remarks
   * The template for the alert notification content.
   */
  contentTemplate?: string;
  /**
   * @remarks
   * The time the alert rule was created.
   */
  createdAt?: string;
  /**
   * @remarks
   * The configuration for the data source to be evaluated.
   */
  datasourceConfig?: DatasourceConfigUnified;
  /**
   * @remarks
   * The data source type. Examples: `sls`, `prometheus`.
   */
  datasourceType?: string;
  /**
   * @remarks
   * The user-defined display name for the alert rule.
   */
  displayName?: string;
  /**
   * @remarks
   * Indicates whether the alert rule is active. Set to `true` to enable the rule, or `false` to disable it.
   */
  enabled?: boolean;
  /**
   * @remarks
   * A set of key-value pairs that serve as labels to filter and group alert rules.
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The configuration for sending notifications when an alert is triggered.
   */
  notifyConfig?: NotifyConfigUnified;
  /**
   * @remarks
   * The ID of the notification strategy to use for this alert rule.
   */
  notifyStrategyId?: string;
  /**
   * @remarks
   * Indicates whether the alert rule monitors all resources of the specified type. If `true`, the rule applies globally within the workspace.
   */
  observeResourceGlobalScope?: boolean;
  /**
   * @remarks
   * A list of specific resource IDs to monitor, used only when `observeResourceGlobalScope` is `false`.
   */
  observeResourceList?: string[];
  /**
   * @remarks
   * The type of resource that the alert rule monitors.
   */
  observeResourceType?: string;
  /**
   * @remarks
   * The partition key used to group alerts. Alerts with the same partition key are treated as a single incident.
   */
  partitionKey?: string;
  /**
   * @remarks
   * The configuration for querying and processing data from the data source.
   */
  queryConfig?: QueryConfigUnified;
  /**
   * @remarks
   * The configuration for how often the alert rule is evaluated.
   */
  scheduleConfig?: ScheduleConfigUnified;
  /**
   * @remarks
   * The severity level of the alert. Examples: `critical`, `warning`.
   */
  severityLevels?: string;
  /**
   * @remarks
   * The current status of the alert rule. Examples: `RUNNING`, `STOPPED`.
   */
  status?: string;
  /**
   * @remarks
   * The time the alert rule was last updated.
   */
  updatedAt?: string;
  /**
   * @remarks
   * The unique identifier for the alert rule.
   */
  uuid?: string;
  /**
   * @remarks
   * The ID of the workspace that contains the alert rule.
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      actionIntegrationConfig: 'actionIntegrationConfig',
      annotations: 'annotations',
      armsIntegrationConfig: 'armsIntegrationConfig',
      conditionConfig: 'conditionConfig',
      contentTemplate: 'contentTemplate',
      createdAt: 'createdAt',
      datasourceConfig: 'datasourceConfig',
      datasourceType: 'datasourceType',
      displayName: 'displayName',
      enabled: 'enabled',
      labels: 'labels',
      notifyConfig: 'notifyConfig',
      notifyStrategyId: 'notifyStrategyId',
      observeResourceGlobalScope: 'observeResourceGlobalScope',
      observeResourceList: 'observeResourceList',
      observeResourceType: 'observeResourceType',
      partitionKey: 'partitionKey',
      queryConfig: 'queryConfig',
      scheduleConfig: 'scheduleConfig',
      severityLevels: 'severityLevels',
      status: 'status',
      updatedAt: 'updatedAt',
      uuid: 'uuid',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionIntegrationConfig: ActionIntegrationConfig,
      annotations: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      armsIntegrationConfig: ArmsIntegrationConfig,
      conditionConfig: ConditionConfigUnified,
      contentTemplate: 'string',
      createdAt: 'string',
      datasourceConfig: DatasourceConfigUnified,
      datasourceType: 'string',
      displayName: 'string',
      enabled: 'boolean',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      notifyConfig: NotifyConfigUnified,
      notifyStrategyId: 'string',
      observeResourceGlobalScope: 'boolean',
      observeResourceList: { 'type': 'array', 'itemType': 'string' },
      observeResourceType: 'string',
      partitionKey: 'string',
      queryConfig: QueryConfigUnified,
      scheduleConfig: ScheduleConfigUnified,
      severityLevels: 'string',
      status: 'string',
      updatedAt: 'string',
      uuid: 'string',
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
    if(Array.isArray(this.observeResourceList)) {
      $dara.Model.validateArray(this.observeResourceList);
    }
    if(this.queryConfig && typeof (this.queryConfig as any).validate === 'function') {
      (this.queryConfig as any).validate();
    }
    if(this.scheduleConfig && typeof (this.scheduleConfig as any).validate === 'function') {
      (this.scheduleConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

