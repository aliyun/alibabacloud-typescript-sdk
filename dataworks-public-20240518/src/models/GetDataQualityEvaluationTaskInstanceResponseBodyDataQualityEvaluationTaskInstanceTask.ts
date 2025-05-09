// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskHooks } from "./GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskHooks";
import { GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskNotifications } from "./GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskNotifications";
import { GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskTarget } from "./GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskTarget";
import { GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskTrigger } from "./GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskTrigger";


export class GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTask extends $dara.Model {
  /**
   * @remarks
   * The description of the monitor.
   * 
   * @example
   * OpenAPI quality monitoring test
   */
  description?: string;
  /**
   * @remarks
   * The hook.
   */
  hooks?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskHooks[];
  /**
   * @remarks
   * The ID of the data quality monitor.
   * 
   * @example
   * 28544990
   */
  id?: number;
  /**
   * @remarks
   * The name of the monitor.
   * 
   * @example
   * Data quality OpenAPI monitoring test
   */
  name?: string;
  /**
   * @remarks
   * The configurations of alert notifications.
   */
  notifications?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskNotifications;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * 20629
   */
  projectId?: number;
  /**
   * @remarks
   * Extended configuration, JSON-formatted string, takes effect only for EMR-type data quality monitoring.
   * 
   * - queue: the yarn queue used when performing EMR data quality verification. The default queue is the queue configured for this project.
   * - sqlEngine: SQL engine used when performing EMR data verification
   *   - HIVE_ SQL
   *   - SPARK_ SQL
   * 
   * @example
   * { "queue": "default" }
   */
  runtimeConf?: string;
  /**
   * @remarks
   * The monitored object of the monitor.
   */
  target?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskTarget;
  /**
   * @remarks
   * The trigger configuration of the monitor.
   */
  trigger?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskTrigger;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      hooks: 'Hooks',
      id: 'Id',
      name: 'Name',
      notifications: 'Notifications',
      projectId: 'ProjectId',
      runtimeConf: 'RuntimeConf',
      target: 'Target',
      trigger: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      hooks: { 'type': 'array', 'itemType': GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskHooks },
      id: 'number',
      name: 'string',
      notifications: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskNotifications,
      projectId: 'number',
      runtimeConf: 'string',
      target: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskTarget,
      trigger: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskTrigger,
    };
  }

  validate() {
    if(Array.isArray(this.hooks)) {
      $dara.Model.validateArray(this.hooks);
    }
    if(this.notifications && typeof (this.notifications as any).validate === 'function') {
      (this.notifications as any).validate();
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

