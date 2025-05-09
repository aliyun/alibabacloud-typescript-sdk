// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskHooks } from "./GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskHooks";
import { GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskNotifications } from "./GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskNotifications";
import { GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskTarget } from "./GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskTarget";
import { GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskTrigger } from "./GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskTrigger";


export class GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTask extends $dara.Model {
  /**
   * @remarks
   * The ID of the data source used for the monitor.
   * 
   * @example
   * 45238
   */
  dataSourceId?: number;
  /**
   * @remarks
   * The description of the monitor.
   * 
   * @example
   * The description of the quality monitoring task.
   */
  description?: string;
  /**
   * @remarks
   * The hook.
   */
  hooks?: GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskHooks[];
  /**
   * @remarks
   * The ID of the data quality monitor.
   * 
   * @example
   * 2178
   */
  id?: number;
  /**
   * @remarks
   * The name of the monitor.
   * 
   * This parameter is required.
   * 
   * @example
   * OpenAPI create a data quality monitoring test
   */
  name?: string;
  /**
   * @remarks
   * The configurations of alert notifications.
   */
  notifications?: GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskNotifications;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 2626
   */
  projectId?: number;
  /**
   * @remarks
   * Extended configuration, JSON-formatted string, takes effect only for EMR-type data quality monitoring.
   * 
   * - queue: the yarn queue used when performing EMR data quality verification. The default queue is the queue configured for this project.
   * - sqlEngine: SQL engine used when performing EMR data verification
   *     - HIVE_ SQL
   *     - SPARK_ SQL
   * 
   * @example
   * { "queue": "default", "sqlEngine": "SPARK_SQL" }
   */
  runtimeConf?: string;
  /**
   * @remarks
   * The monitored object of the monitor.
   */
  target?: GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskTarget;
  /**
   * @remarks
   * The trigger configuration of the monitor.
   */
  trigger?: GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskTrigger;
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
      trigger: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'number',
      description: 'string',
      hooks: { 'type': 'array', 'itemType': GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskHooks },
      id: 'number',
      name: 'string',
      notifications: GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskNotifications,
      projectId: 'number',
      runtimeConf: 'string',
      target: GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskTarget,
      trigger: GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskTrigger,
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

