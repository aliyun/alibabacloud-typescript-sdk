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
  actionIntegrationConfig?: ActionIntegrationConfig;
  /**
   * @remarks
   * 注解
   */
  annotations?: { [key: string]: string };
  armsIntegrationConfig?: ArmsIntegrationConfig;
  conditionConfig?: ConditionConfigUnified;
  /**
   * @remarks
   * 内容模板
   */
  contentTemplate?: string;
  /**
   * @remarks
   * 创建时间（只读），ISO 8601
   */
  createdAt?: string;
  datasourceConfig?: DatasourceConfigUnified;
  /**
   * @remarks
   * 显示名称
   */
  displayName?: string;
  /**
   * @remarks
   * 是否启用
   */
  enabled?: boolean;
  /**
   * @remarks
   * 标签
   */
  labels?: { [key: string]: string };
  notifyConfig?: NotifyConfigUnified;
  queryConfig?: QueryConfigUnified;
  scheduleConfig?: ScheduleConfigUnified;
  /**
   * @remarks
   * 告警状态（只读）
   */
  status?: string;
  /**
   * @remarks
   * 更新时间（只读），ISO 8601
   */
  updatedAt?: string;
  /**
   * @remarks
   * 规则 UUID（系统生成，只读）
   */
  uuid?: string;
  /**
   * @remarks
   * 工作空间
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
      displayName: 'displayName',
      enabled: 'enabled',
      labels: 'labels',
      notifyConfig: 'notifyConfig',
      queryConfig: 'queryConfig',
      scheduleConfig: 'scheduleConfig',
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
      displayName: 'string',
      enabled: 'boolean',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      notifyConfig: NotifyConfigUnified,
      queryConfig: QueryConfigUnified,
      scheduleConfig: ScheduleConfigUnified,
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

