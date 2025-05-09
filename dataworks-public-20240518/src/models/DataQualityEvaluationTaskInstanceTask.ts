// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataQualityEvaluationTaskInstanceTaskHooks } from "./DataQualityEvaluationTaskInstanceTaskHooks";
import { DataQualityEvaluationTaskInstanceTaskNotifications } from "./DataQualityEvaluationTaskInstanceTaskNotifications";
import { DataQualityEvaluationTaskInstanceTaskTarget } from "./DataQualityEvaluationTaskInstanceTaskTarget";
import { DataQualityEvaluationTaskInstanceTaskTrigger } from "./DataQualityEvaluationTaskInstanceTaskTrigger";


export class DataQualityEvaluationTaskInstanceTask extends $dara.Model {
  /**
   * @example
   * 201
   */
  dataSourceId?: number;
  hooks?: DataQualityEvaluationTaskInstanceTaskHooks[];
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
  notifications?: DataQualityEvaluationTaskInstanceTaskNotifications[];
  projectId?: number;
  /**
   * @example
   * { "queue": "default", "sqlEngine": "SPARK_SQL" }
   */
  runtimeConf?: string;
  target?: DataQualityEvaluationTaskInstanceTaskTarget;
  tenantId?: number;
  trigger?: DataQualityEvaluationTaskInstanceTaskTrigger;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
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
      hooks: { 'type': 'array', 'itemType': DataQualityEvaluationTaskInstanceTaskHooks },
      id: 'number',
      name: 'string',
      notifications: { 'type': 'array', 'itemType': DataQualityEvaluationTaskInstanceTaskNotifications },
      projectId: 'number',
      runtimeConf: 'string',
      target: DataQualityEvaluationTaskInstanceTaskTarget,
      tenantId: 'number',
      trigger: DataQualityEvaluationTaskInstanceTaskTrigger,
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

