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


export class ManageAlertRulesUnifiedActionInputDrillTimeRange extends $dara.Model {
  /**
   * @remarks
   * The drill end time, in Unix milliseconds. Must be later than the start time, and the span from the start time cannot exceed 1 hour.
   * 
   * @example
   * 1783731600000
   */
  endTime?: number;
  /**
   * @remarks
   * The drill start time, in Unix milliseconds.
   * 
   * @example
   * 1783728000000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ManageAlertRulesUnifiedActionInput extends $dara.Model {
  /**
   * @remarks
   * The operation type.
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
   * 
   * @example
   * {"enabled":true,"actions":[]}
   */
  actionIntegrationConfig?: ActionIntegrationConfig;
  /**
   * @remarks
   * The annotations.
   * 
   * @example
   * {"summary":"CPU usage exceeds 90%"}
   */
  annotations?: { [key: string]: string };
  /**
   * @remarks
   * The ARMS integration configuration.
   * 
   * @example
   * {"enabled":false}
   */
  armsIntegrationConfig?: ArmsIntegrationConfig;
  /**
   * @remarks
   * The business source (optional). Examples include managed_service_for_prometheus, umodel, application_insights, cloud_monitoring, and sls. Pass as needed for CREATE, UPDATE, and PATCH.
   * 
   * @example
   * Sample value
   */
  bizSource?: string;
  /**
   * @remarks
   * The condition aggregation configuration.
   * 
   * @example
   * {"type":"PROMETHEUS_SIMPLE_CONDITION","durationSecs":0,"severity":"CRITICAL"}
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
   * The data source aggregation configuration.
   * 
   * @example
   * {"type":"PROMETHEUS","instanceId":"prom-cn-hangzhou-xxxxx"}
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
   * The alert drill time, in Unix milliseconds. Required by the backend when drillMode is ONE_SHOT. It cannot be later than the current time or earlier than 90 days ago.
   * 
   * @example
   * 1783728000000
   */
  drillEvalTime?: number;
  /**
   * @remarks
   * The alert drill mode. Required by the backend when action is DRILL_ALERT. ONE_SHOT specifies a single time point to simulate a complete lifecycle (three events: OCCURRED, PERSISTENT, and RECOVERED). TIME_TRAVEL specifies a time period to simulate round by round according to the rule scheduling interval (OCCURRED, PERSISTENT, ..., RECOVERED).
   * 
   * @example
   * ONE_SHOT
   */
  drillMode?: string;
  /**
   * @remarks
   * The alert drill time range, in Unix milliseconds. Required by the backend when drillMode is TIME_TRAVEL. The endTime must be later than the startTime and cannot be later than the current time. The span between endTime and startTime cannot exceed 1 hour (the backend returns 400 if exceeded). Simulates round by round according to the rule scheduling interval, with a maximum of 500 rounds (the backend returns 400 if exceeded).
   * 
   * @example
   * {"startTime":1783728000000,"endTime":1783731600000}
   */
  drillTimeRange?: ManageAlertRulesUnifiedActionInputDrillTimeRange;
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
   * 
   * @example
   * {"env":"production"}
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The notification aggregation configuration.
   * 
   * @example
   * {"type":"DIRECT_NOTIFY","channels":[{"type":"GROUP","identifiers":["<contact-group-id>"]}]}
   */
  notifyConfig?: NotifyConfigUnified;
  /**
   * @remarks
   * The observable resource configuration.
   * 
   * @example
   * {"relationType":"CLOUD_INSTANCE","resources":[]}
   */
  observeResourceConfig?: ObserveResourceConfig;
  /**
   * @remarks
   * **[Deprecated]** The monitored object instance ID. Use observeResourceConfig.resources for new integrations. Retained only for compatibility with legacy SDKs.
   * 
   * @example
   * example-id-001
   * 
   * @deprecated
   */
  observeResourceInstanceId?: string;
  /**
   * @remarks
   * **[Deprecated]** The monitored object resource type. Use observeResourceConfig.entityType for new integrations. Retained only for compatibility with legacy SDKs.
   * 
   * @example
   * default
   * 
   * @deprecated
   */
  observeResourceType?: string;
  /**
   * @remarks
   * The query aggregation configuration.
   * 
   * @example
   * {"type":"PROMETHEUS_SINGLE_QUERY","expr":"up > 0"}
   */
  queryConfig?: QueryConfigUnified;
  /**
   * @remarks
   * The root cause analysis (RCA) configuration (optional). Pass as needed for CREATE, UPDATE, and PATCH.
   * 
   * @example
   * {"enabled":false}
   */
  rcaConfig?: AlertRuleRcaConfig;
  /**
   * @remarks
   * The region ID. Aligned with V1 AlertRule.regionId. The gateway callerRegionId is used if not provided.
   * 
   * @example
   * example-id-001
   */
  regionId?: string;
  /**
   * @remarks
   * The scheduling aggregation configuration.
   * 
   * @example
   * {"type":"FIXED","intervalSecs":60}
   */
  scheduleConfig?: ScheduleConfigUnified;
  /**
   * @remarks
   * The rule UUID. Required for UPDATE and PATCH.
   * 
   * @example
   * xxx-xxx-xxx
   */
  uuid?: string;
  /**
   * @remarks
   * The list of rule UUIDs to be deleted (BATCH_DELETE).
   * 
   * @example
   * ["cms_v2_81d01768-fee9-459f-af49-ab2704f1db2b"]
   */
  uuidList?: string[];
  /**
   * @remarks
   * The workspace (for CREATE, UPDATE, and other actions).
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
      drillEvalTime: 'drillEvalTime',
      drillMode: 'drillMode',
      drillTimeRange: 'drillTimeRange',
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
      drillEvalTime: 'number',
      drillMode: 'string',
      drillTimeRange: ManageAlertRulesUnifiedActionInputDrillTimeRange,
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
    if(this.drillTimeRange && typeof (this.drillTimeRange as any).validate === 'function') {
      (this.drillTimeRange as any).validate();
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

