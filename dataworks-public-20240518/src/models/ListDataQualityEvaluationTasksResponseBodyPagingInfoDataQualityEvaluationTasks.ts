// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksHooks } from "./ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksHooks";
import { ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotifications } from "./ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotifications";
import { ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksTarget } from "./ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksTarget";
import { ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksTrigger } from "./ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksTrigger";


export class ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasks extends $dara.Model {
  dataSourceId?: number;
  /**
   * @remarks
   * The description of the data quality monitoring task. The description can be up to 65,535 characters in length.
   * 
   * @example
   * This is a daily run data quality evaluation plan
   */
  description?: string;
  /**
   * @remarks
   * The callback configurations of the task during the instance lifecycle. Blocking an auto triggered node is a type of callback event. Only this type is supported.
   */
  hooks?: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksHooks[];
  /**
   * @remarks
   * The ID of the data quality monitoring task.
   * 
   * @example
   * 10001
   */
  id?: number;
  /**
   * @remarks
   * The name of the data quality monitoring task. The name can be up to 255 characters in length and can contain digits, letters, and punctuation marks.
   * 
   * @example
   * Data quality verification task
   */
  name?: string;
  /**
   * @remarks
   * The configurations for alert notifications.
   */
  notifications?: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotifications;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The configuration of the data source. The value of the queue field is default, and that of the sqlEngine field can be set to SPARK_SQL, KYUUBI, PRESTO_SQL, or HIVE_SQL. The value default indicates the YARN queue for E-MapReduce (EMR) tasks.
   * 
   * @example
   * { "queue": "default", "sqlEngine": "SPARK-SQL" }
   */
  runtimeConf?: string;
  /**
   * @remarks
   * The monitored object of the task.
   */
  target?: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksTarget;
  /**
   * @remarks
   * The trigger configuration of the task.
   */
  trigger?: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksTrigger;
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
      hooks: { 'type': 'array', 'itemType': ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksHooks },
      id: 'number',
      name: 'string',
      notifications: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotifications,
      projectId: 'number',
      runtimeConf: 'string',
      target: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksTarget,
      trigger: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksTrigger,
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

