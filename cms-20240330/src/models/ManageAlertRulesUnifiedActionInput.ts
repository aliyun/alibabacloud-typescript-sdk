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


export class ManageAlertRulesUnifiedActionInput extends $dara.Model {
  /**
   * @remarks
   * The action type.
   * 
   * This parameter is required.
   * 
   * @example
   * CREATE
   */
  action?: string;
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
   * The business source (optional). Examples: managed_service_for_prometheus, umodel, application_insights, cloud_monitoring, sls. Provide as needed for CREATE/UPDATE/PATCH.
   * 
   * @example
   * Sample value
   */
  bizSource?: string;
  /**
   * @remarks
   * The aggregated condition configuration.
   */
  conditionConfig?: ConditionConfigUnified;
  /**
   * @remarks
   * The content template.
   * 
   * @example
   * Instance {{instance}} CPU usage exceeds {{threshold}}%
   */
  contentTemplate?: string;
  /**
   * @remarks
   * The aggregated data source configuration.
   */
  datasourceConfig?: DatasourceConfigUnified;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * Specifies whether the rule is enabled.
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
   * The aggregated notification configuration.
   */
  notifyConfig?: NotifyConfigUnified;
  /**
   * @remarks
   * The observable resource configuration.
   */
  observeResourceConfig?: ObserveResourceConfig;
  /**
   * @remarks
   * **[Deprecated]** The monitored object instance ID. Use observeResourceConfig.resources instead. Retained only for backward compatibility with legacy SDKs.
   * 
   * @example
   * example-id-001
   * 
   * @deprecated
   */
  observeResourceInstanceId?: string;
  /**
   * @remarks
   * **[Deprecated]** The monitored object resource type. Use observeResourceConfig.entityType instead. Retained only for backward compatibility with legacy SDKs.
   * 
   * @example
   * default
   * 
   * @deprecated
   */
  observeResourceType?: string;
  /**
   * @remarks
   * The aggregated query configuration.
   */
  queryConfig?: QueryConfigUnified;
  /**
   * @remarks
   * The root cause analysis (RCA) configuration (optional). Provide as needed for CREATE/UPDATE/PATCH.
   */
  rcaConfig?: AlertRuleRcaConfig;
  /**
   * @remarks
   * The region ID. Aligned with V1 AlertRule.regionId. If not provided, the gateway callerRegionId is used.
   * 
   * @example
   * example-id-001
   */
  regionId?: string;
  /**
   * @remarks
   * The aggregated schedule configuration.
   */
  scheduleConfig?: ScheduleConfigUnified;
  /**
   * @remarks
   * The UUID of the rule. Required for UPDATE/PATCH.
   * 
   * @example
   * xxx-xxx-xxx
   */
  uuid?: string;
  /**
   * @remarks
   * The list of rule UUIDs to delete (BATCH_DELETE).
   */
  uuidList?: string[];
  /**
   * @remarks
   * The workspace. Required for CREATE/UPDATE and other actions.
   * 
   * @example
   * workspace-test
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      actionIntegrationConfig: 'actionIntegrationConfig',
      annotations: 'annotations',
      armsIntegrationConfig: 'armsIntegrationConfig',
      bizSource: 'bizSource',
      conditionConfig: 'conditionConfig',
      contentTemplate: 'contentTemplate',
      datasourceConfig: 'datasourceConfig',
      displayName: 'displayName',
      enabled: 'enabled',
      labels: 'labels',
      notifyConfig: 'notifyConfig',
      observeResourceConfig: 'observeResourceConfig',
      observeResourceInstanceId: 'observeResourceInstanceId',
      observeResourceType: 'observeResourceType',
      queryConfig: 'queryConfig',
      rcaConfig: 'rcaConfig',
      regionId: 'regionId',
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
      bizSource: 'string',
      conditionConfig: ConditionConfigUnified,
      contentTemplate: 'string',
      datasourceConfig: DatasourceConfigUnified,
      displayName: 'string',
      enabled: 'boolean',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      notifyConfig: NotifyConfigUnified,
      observeResourceConfig: ObserveResourceConfig,
      observeResourceInstanceId: 'string',
      observeResourceType: 'string',
      queryConfig: QueryConfigUnified,
      rcaConfig: AlertRuleRcaConfig,
      regionId: 'string',
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
    if(this.observeResourceConfig && typeof (this.observeResourceConfig as any).validate === 'function') {
      (this.observeResourceConfig as any).validate();
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
    if(Array.isArray(this.uuidList)) {
      $dara.Model.validateArray(this.uuidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

