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
  actionIntegrationConfig?: ActionIntegrationConfig;
  /**
   * @remarks
   * The annotations.
   */
  annotations?: { [key: string]: string };
  armsIntegrationConfig?: ArmsIntegrationConfig;
  /**
   * @remarks
   * The business source. This field is read-only. Example values: managed_service_for_prometheus, umodel, application_insights, cloud_monitoring, and sls.
   */
  bizSource?: string;
  conditionConfig?: ConditionConfigUnified;
  /**
   * @remarks
   * The content template.
   */
  contentTemplate?: string;
  /**
   * @remarks
   * The creation time in ISO 8601 format. This field is read-only.
   */
  createdAt?: string;
  datasourceConfig?: DatasourceConfigUnified;
  /**
   * @remarks
   * The data source type. This field is read-only and derived.
   */
  datasourceType?: string;
  /**
   * @remarks
   * The display name.
   */
  displayName?: string;
  /**
   * @remarks
   * Specifies whether the alert rule is enabled.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The labels.
   */
  labels?: { [key: string]: string };
  notifyConfig?: NotifyConfigUnified;
  /**
   * @remarks
   * The notification strategy ID. This field is read-only and derived from the first item in the notification strategy list.
   */
  notifyStrategyId?: string;
  /**
   * @remarks
   * The observable resource configuration.
   */
  observeResourceConfig?: ObserveResourceConfig;
  /**
   * @remarks
   * **[Deprecated]** Indicates whether the rule applies to all resources of this type. This field is read-only and derived. Use observeResourceConfig.relationType set to ALL for equivalent semantics in new integrations.
   * 
   * @deprecated
   */
  observeResourceGlobalScope?: boolean;
  /**
   * @remarks
   * The list of observable resource IDs. This field is read-only and derived.
   */
  observeResourceList?: string[];
  /**
   * @remarks
   * **[Deprecated]** The observable resource type. This field is read-only and derived. Use observeResourceConfig.entityType instead for new integrations.
   * 
   * @deprecated
   */
  observeResourceType?: string;
  /**
   * @remarks
   * The partition key. This field is read-only and maintained by the system for rule routing and sharding.
   */
  partitionKey?: string;
  queryConfig?: QueryConfigUnified;
  /**
   * @remarks
   * The RCA (root cause analysis) configuration.
   */
  rcaConfig?: AlertRuleRcaConfig;
  /**
   * @remarks
   * The region ID. This field is aligned with V1 AlertRule.regionId. Priority: request body regionId > gateway callerRegionId.
   */
  regionId?: string;
  scheduleConfig?: ScheduleConfigUnified;
  /**
   * @remarks
   * The severity levels covered by this rule, separated by commas. This field is read-only and derived. The format is the same as the filter.severityLevels query parameter.
   */
  severityLevels?: string;
  /**
   * @remarks
   * The alert status. This field is read-only.
   */
  status?: string;
  /**
   * @remarks
   * The update time in ISO 8601 format. This field is read-only.
   */
  updatedAt?: string;
  /**
   * @remarks
   * The rule UUID. This field is system-generated and read-only.
   */
  uuid?: string;
  /**
   * @remarks
   * The workspace.
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

