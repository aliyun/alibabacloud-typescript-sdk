// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDataQualityEvaluationTaskRequestDataQualityRules } from "./UpdateDataQualityEvaluationTaskRequestDataQualityRules";
import { UpdateDataQualityEvaluationTaskRequestHooks } from "./UpdateDataQualityEvaluationTaskRequestHooks";
import { UpdateDataQualityEvaluationTaskRequestNotifications } from "./UpdateDataQualityEvaluationTaskRequestNotifications";
import { UpdateDataQualityEvaluationTaskRequestTarget } from "./UpdateDataQualityEvaluationTaskRequestTarget";
import { UpdateDataQualityEvaluationTaskRequestTrigger } from "./UpdateDataQualityEvaluationTaskRequestTrigger";


export class UpdateDataQualityEvaluationTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The list of monitoring rules that are associated with the monitor.
   */
  dataQualityRules?: UpdateDataQualityEvaluationTaskRequestDataQualityRules[];
  /**
   * @remarks
   * The data source ID. You can call the [ListDataSources](https://help.aliyun.com/document_detail/211431.html) operation to query the ID.
   * 
   * @example
   * 358750
   */
  dataSourceId?: number;
  /**
   * @remarks
   * The description of the monitor.
   * 
   * @example
   * OpenAPI data quality monitoring test.
   */
  description?: string;
  /**
   * @remarks
   * The hook.
   */
  hooks?: UpdateDataQualityEvaluationTaskRequestHooks[];
  /**
   * @remarks
   * The ID of the monitor.
   * 
   * This parameter is required.
   * 
   * @example
   * 7227061794
   */
  id?: number;
  /**
   * @remarks
   * The name of the monitor.
   * 
   * @example
   * OpenAPI data quality monitoring test.
   */
  name?: string;
  /**
   * @remarks
   * The configurations of alert notifications.
   */
  notifications?: UpdateDataQualityEvaluationTaskRequestNotifications;
  /**
   * @remarks
   * The ID of the DataWorks workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The extended configurations in JSON-formatted strings. You can use this parameter only for monitors that are used to monitor the quality of E-MapReduce (EMR) data.
   * 
   * *   queue: The Yarn queue used when a monitor checks the quality of EMR data. By default, the queue configured for the current workspace is used.
   * 
   * *   sqlEngine: The SQL engine used when a monitor checks the quality of EMR data.
   * 
   *     *   HIVE_SQL
   *     *   SPARK_SQL
   * 
   * @example
   * { "queue": "default", "sqlEngine": "SPARK_SQL" }
   */
  runtimeConf?: string;
  /**
   * @remarks
   * The monitored object of the data quality monitoring task.
   */
  target?: UpdateDataQualityEvaluationTaskRequestTarget;
  /**
   * @remarks
   * The trigger configuration of the monitor.
   */
  trigger?: UpdateDataQualityEvaluationTaskRequestTrigger;
  static names(): { [key: string]: string } {
    return {
      dataQualityRules: 'DataQualityRules',
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
      dataQualityRules: { 'type': 'array', 'itemType': UpdateDataQualityEvaluationTaskRequestDataQualityRules },
      dataSourceId: 'number',
      description: 'string',
      hooks: { 'type': 'array', 'itemType': UpdateDataQualityEvaluationTaskRequestHooks },
      id: 'number',
      name: 'string',
      notifications: UpdateDataQualityEvaluationTaskRequestNotifications,
      projectId: 'number',
      runtimeConf: 'string',
      target: UpdateDataQualityEvaluationTaskRequestTarget,
      trigger: UpdateDataQualityEvaluationTaskRequestTrigger,
    };
  }

  validate() {
    if(Array.isArray(this.dataQualityRules)) {
      $dara.Model.validateArray(this.dataQualityRules);
    }
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

