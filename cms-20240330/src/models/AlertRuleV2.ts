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
  annotations?: { [key: string]: string };
  armsIntegrationConfig?: ArmsIntegrationConfig;
  bizSource?: string;
  conditionConfig?: ConditionConfigUnified;
  contentTemplate?: string;
  createdAt?: string;
  datasourceConfig?: DatasourceConfigUnified;
  datasourceType?: string;
  displayName?: string;
  enabled?: boolean;
  labels?: { [key: string]: string };
  notifyConfig?: NotifyConfigUnified;
  notifyStrategyId?: string;
  observeResourceConfig?: ObserveResourceConfig;
  /**
   * @deprecated
   */
  observeResourceGlobalScope?: boolean;
  observeResourceList?: string[];
  /**
   * @deprecated
   */
  observeResourceType?: string;
  partitionKey?: string;
  queryConfig?: QueryConfigUnified;
  rcaConfig?: AlertRuleRcaConfig;
  regionId?: string;
  scheduleConfig?: ScheduleConfigUnified;
  severityLevels?: string;
  status?: string;
  updatedAt?: string;
  uuid?: string;
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

