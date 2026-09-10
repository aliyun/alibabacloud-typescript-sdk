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
   * The ARMS integration configuration.
   */
  armsIntegrationConfig?: ArmsIntegrationConfig;
  /**
   * @remarks
   * The business source. This value is read-only. Example values: managed_service_for_prometheus, umodel, application_insights, cloud_monitoring, and sls.
   * 
   * @example
   * Sample value
   */
  bizSource?: string;
  /**
   * @remarks
   * The detection condition configuration. Supported types: Prometheus simple, UModel, APM simple, and APM composite.
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
   * The creation time in ISO 8601 format. This value is read-only.
   * 
   * @example
   * 1751595283143
   */
  createdAt?: string;
  /**
   * @remarks
   * The datasource configuration. This is a unified object shared by PROMETHEUS, UMODEL, and APM. Fields are selected based on the type.
   */
  datasourceConfig?: DatasourceConfigUnified;
  /**
   * @remarks
   * The datasource type. This value is read-only and derived.
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
   * The notification configuration. Currently, only DIRECT_NOTIFY is supported, which corresponds to DirectNotifyConfig.
   */
  notifyConfig?: NotifyConfigUnified;
  /**
   * @remarks
   * The notification policy ID. This value is read-only and derived from the first entry in the notification policy list.
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
   * **[Deprecated]** Indicates whether the rule applies to all resources of this type. This value is read-only and derived. For new integrations, use observeResourceConfig.relationType and check whether it is set to ALL for equivalent semantics.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  observeResourceGlobalScope?: boolean;
  /**
   * @remarks
   * The list of observable resource IDs. This value is read-only and derived.
   */
  observeResourceList?: string[];
  /**
   * @remarks
   * **[Deprecated]** The observable resource type. This value is read-only and derived. Use observeResourceConfig.entityType instead for new integrations.
   * 
   * @example
   * default
   * 
   * @deprecated
   */
  observeResourceType?: string;
  /**
   * @remarks
   * The partition key. This value is read-only and maintained by the system for rule routing and sharding.
   * 
   * @example
   * Sample value
   */
  partitionKey?: string;
  /**
   * @remarks
   * The query configuration. Valid types: PROMETHEUS_SINGLE_QUERY, UMODEL_METRICSET_QUERY, and APM_MULTI_QUERY.
   */
  queryConfig?: QueryConfigUnified;
  /**
   * @remarks
   * The RCA (root cause analysis) configuration.
   */
  rcaConfig?: AlertRuleRcaConfig;
  /**
   * @remarks
   * The region ID, aligned with V1 AlertRule.regionId. Priority: the regionId in the request body takes precedence over the gateway callerRegionId.
   * 
   * @example
   * example-id-001
   */
  regionId?: string;
  /**
   * @remarks
   * The scheduling configuration. Currently, only the FIXED type is supported.
   */
  scheduleConfig?: ScheduleConfigUnified;
  /**
   * @remarks
   * The severity levels covered by this rule, in comma-separated format. This value is read-only and derived. The format is consistent with the filter.severityLevels query parameter.
   * 
   * @example
   * 1
   */
  severityLevels?: string;
  /**
   * @remarks
   * The alert status. This value is read-only.
   * 
   * @example
   * Alarm
   */
  status?: string;
  /**
   * @remarks
   * The update time in ISO 8601 format. This value is read-only.
   * 
   * @example
   * 1764556086388
   */
  updatedAt?: string;
  /**
   * @remarks
   * The rule UUID. This value is system-generated and read-only.
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

