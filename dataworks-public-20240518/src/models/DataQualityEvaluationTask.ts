// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataQualityEvaluationTaskHooks } from "./DataQualityEvaluationTaskHooks";
import { DataQualityEvaluationTaskNotifications } from "./DataQualityEvaluationTaskNotifications";
import { DataQualityEvaluationTaskTarget } from "./DataQualityEvaluationTaskTarget";
import { DataQualityEvaluationTaskTrigger } from "./DataQualityEvaluationTaskTrigger";


export class DataQualityEvaluationTask extends $dara.Model {
  /**
   * @example
   * 201
   */
  dataSourceId?: number;
  /**
   * @example
   * This is a daily run data quality evaluation plan.
   */
  description?: string;
  hooks?: DataQualityEvaluationTaskHooks[];
  /**
   * @example
   * 10001
   */
  id?: number;
  /**
   * @example
   * 质量校验任务
   */
  name?: string;
  notifications?: DataQualityEvaluationTaskNotifications[];
  /**
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @example
   * { "queue": "default", "sqlEngine": "SPARK_SQL" }
   */
  runtimeConf?: string;
  target?: DataQualityEvaluationTaskTarget;
  /**
   * @example
   * 10
   */
  tenantId?: number;
  trigger?: DataQualityEvaluationTaskTrigger;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      description: 'Description',
      hooks: 'Hooks',
      id: 'Id',
      name: 'Name',
      notifications: 'Notifications',
      projectId: 'ProjectId',
      runtimeConf: 'RuntimeConf',
      target: 'Target',
      tenantId: 'TenantId',
      trigger: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'number',
      description: 'string',
      hooks: { 'type': 'array', 'itemType': DataQualityEvaluationTaskHooks },
      id: 'number',
      name: 'string',
      notifications: { 'type': 'array', 'itemType': DataQualityEvaluationTaskNotifications },
      projectId: 'number',
      runtimeConf: 'string',
      target: DataQualityEvaluationTaskTarget,
      tenantId: 'number',
      trigger: DataQualityEvaluationTaskTrigger,
    };
  }

  validate() {
    if(Array.isArray(this.hooks)) {
      $dara.Model.validateArray(this.hooks);
    }
    if(Array.isArray(this.notifications)) {
      $dara.Model.validateArray(this.notifications);
    }
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    if(this.trigger && typeof (this.trigger as any).validate === 'function') {
      (this.trigger as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

