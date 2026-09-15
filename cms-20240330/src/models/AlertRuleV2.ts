// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ActionIntegrationConfig } from "./ActionIntegrationConfig";
import { ArmsIntegrationConfig } from "./ArmsIntegrationConfig";
import { ConditionConfigUnified } from "./ConditionConfigUnified";
import { DatasourceConfigUnified } from "./DatasourceConfigUnified";
import { NotifyConfigUnified } from "./NotifyConfigUnified";
import { ObserveResourceConfig } from "./ObserveResourceConfig";
import { QueryConfigUnified } from "./QueryConfigUnified";
import { AlertRuleRcaConfig } from "./AlertRuleRcaConfig";
import { ScheduleConfigUnified } from "./ScheduleConfigUnified";


export class AlertRuleV2 extends $dara.Model {
  /**
   * @remarks
   * The action integration configuration.
   */
  actionIntegrationConfig?: ActionIntegrationConfig;
  /**
   * @remarks
   * The annotations.
   */
  annotations?: { [key: string]: string };
  /**
   * @remarks
   * The Application Real-Time Monitoring Service (ARMS) integration configuration.
   */
  armsIntegrationConfig?: ArmsIntegrationConfig;
  /**
   * @remarks
   * The business source (read-only), such as managed_service_for_prometheus, umodel, application_insights, cloud_monitoring, or sls.
   * 
   * @example
   * 示例值
   */
  bizSource?: string;
  /**
   * @remarks
   * The detection condition configuration aggregation (Prometheus simple, UModel, APM simple, or APM composite).
   */
  conditionConfig?: ConditionConfigUnified;
  /**
   * @remarks
   * The content template.
   * 
   * @example
   * Alert triggered: ${metricName} current value ${currentValue} exceeds threshold ${threshold}
   */
  contentTemplate?: string;
  /**
   * @remarks
   * The creation time (read-only), in ISO 8601 format.
   * 
   * @example
   * 1751595283143
   */
  createdAt?: string;
  /**
   * @remarks
   * The datasource config aggregation (PROMETHEUS, UMODEL, and APM share a single object. Fields are selected based on the type).
   */
  datasourceConfig?: DatasourceConfigUnified;
  /**
   * @remarks
   * The data source type (read-only, derived).
   * 
   * @example
   * default
   */
  datasourceType?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * CPU usage alert 95%
   */
  displayName?: string;
  /**
   * @remarks
   * Specifies whether the alert rule is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The labels.
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The rule manager (read-only). An empty value indicates a user-created rule. A non-empty value indicates the rule is created and managed by the corresponding cloud service.
   * 
   * @example
   * integrationCenter
   */
  managedBy?: string;
  /**
   * @remarks
   * The notification configuration aggregation (currently only DIRECT_NOTIFY, corresponding to DirectNotifyConfig).
   */
  notifyConfig?: NotifyConfigUnified;
  /**
   * @remarks
   * The notification policy ID (read-only, derived). The value is the first entry in the notification policy list.
   * 
   * @example
   * example-id-001
   */
  notifyStrategyId?: string;
  /**
   * @remarks
   * The observable resource configuration.
   */
  observeResourceConfig?: ObserveResourceConfig;
  /**
   * @remarks
   * **[Deprecated]** Specifies whether the rule takes effect on all resources of this type (read-only, derived). For new integrations, use observeResourceConfig.relationType and check whether the value is ALL for equivalent semantics.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  observeResourceGlobalScope?: boolean;
  /**
   * @remarks
   * The list of observable resource IDs (read-only, derived).
   */
  observeResourceList?: string[];
  /**
   * @remarks
   * **[Deprecated]** The observable resource type (read-only, derived). For new integrations, use observeResourceConfig.entityType instead.
   * 
   * @example
   * default
   * 
   * @deprecated
   */
  observeResourceType?: string;
  /**
   * @remarks
   * The partition key (read-only). Maintained by the system for rule routing and sharding.
   * 
   * @example
   * 示例值
   */
  partitionKey?: string;
  /**
   * @remarks
   * The query configuration aggregation (PROMETHEUS_SINGLE_QUERY, UMODEL_METRICSET_QUERY, or APM_MULTI_QUERY).
   */
  queryConfig?: QueryConfigUnified;
  /**
   * @remarks
   * The root cause analysis (RCA) configuration.
   */
  rcaConfig?: AlertRuleRcaConfig;
  /**
   * @remarks
   * The region ID, aligned with V1 AlertRule.regionId. Priority: regionId in the request body takes precedence over callerRegionId from the gateway.
   * 
   * @example
   * example-id-001
   */
  regionId?: string;
  /**
   * @remarks
   * The scheduling configuration aggregation (currently only FIXED is supported).
   */
  scheduleConfig?: ScheduleConfigUnified;
  /**
   * @remarks
   * The severity levels covered by this rule, separated by commas (read-only, derived). The format is consistent with the filter.severityLevels query parameter.
   * 
   * @example
   * 1
   */
  severityLevels?: string;
  /**
   * @remarks
   * The alert status (read-only).
   * 
   * @example
   * Alarm
   */
  status?: string;
  /**
   * @remarks
   * The update time (read-only), in ISO 8601 format.
   * 
   * @example
   * 1764556086388
   */
  updatedAt?: string;
  /**
   * @remarks
   * The rule UUID (system-generated, read-only).
   * 
   * @example
   * xxxxx-xxxx-xxxx
   */
  uuid?: string;
  /**
   * @remarks
   * The workspace.
   * 
   * @example
   * workspace-test
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      actionIntegrationConfig: 'actionIntegrationConfig',
      annotations: 'annotations',
      armsIntegrationConfig: 'armsIntegrationConfig',
      bizSource: 'bizSource',
      conditionConfig: 'conditionConfig',
      contentTemplate: 'contentTemplate',
      createdAt: 'createdAt',
      datasourceConfig: 'datasourceConfig',
      datasourceType: 'datasourceType',
      displayName: 'displayName',
      enabled: 'enabled',
      labels: 'labels',
      managedBy: 'managedBy',
      notifyConfig: 'notifyConfig',
      notifyStrategyId: 'notifyStrategyId',
      observeResourceConfig: 'observeResourceConfig',
      observeResourceGlobalScope: 'observeResourceGlobalScope',
      observeResourceList: 'observeResourceList',
      observeResourceType: 'observeResourceType',
      partitionKey: 'partitionKey',
      queryConfig: 'queryConfig',
      rcaConfig: 'rcaConfig',
      regionId: 'regionId',
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
      bizSource: 'string',
      conditionConfig: ConditionConfigUnified,
      contentTemplate: 'string',
      createdAt: 'string',
      datasourceConfig: DatasourceConfigUnified,
      datasourceType: 'string',
      displayName: 'string',
      enabled: 'boolean',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      managedBy: 'string',
      notifyConfig: NotifyConfigUnified,
      notifyStrategyId: 'string',
      observeResourceConfig: ObserveResourceConfig,
      observeResourceGlobalScope: 'boolean',
      observeResourceList: { 'type': 'array', 'itemType': 'string' },
      observeResourceType: 'string',
      partitionKey: 'string',
      queryConfig: QueryConfigUnified,
      rcaConfig: AlertRuleRcaConfig,
      regionId: 'string',
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
    if(this.observeResourceConfig && typeof (this.observeResourceConfig as any).validate === 'function') {
      (this.observeResourceConfig as any).validate();
    }
    if(Array.isArray(this.observeResourceList)) {
      $dara.Model.validateArray(this.observeResourceList);
    }
    if(this.queryConfig && typeof (this.queryConfig as any).validate === 'function') {
      (this.queryConfig as any).validate();
    }
    if(this.rcaConfig && typeof (this.rcaConfig as any).validate === 'function') {
      (this.rcaConfig as any).validate();
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

