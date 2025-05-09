// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDataQualityEvaluationTaskRequestDataQualityRules } from "./CreateDataQualityEvaluationTaskRequestDataQualityRules";
import { CreateDataQualityEvaluationTaskRequestHooks } from "./CreateDataQualityEvaluationTaskRequestHooks";
import { CreateDataQualityEvaluationTaskRequestNotifications } from "./CreateDataQualityEvaluationTaskRequestNotifications";
import { CreateDataQualityEvaluationTaskRequestTarget } from "./CreateDataQualityEvaluationTaskRequestTarget";
import { CreateDataQualityEvaluationTaskRequestTrigger } from "./CreateDataQualityEvaluationTaskRequestTrigger";


export class CreateDataQualityEvaluationTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The list of monitoring rules that are associated with the monitor. If you configure the ID of a monitoring rule by using the DataQualityRule.Id parameter, the system associates the rule with a created monitor. If you do not configure the ID of a monitoring rule, the system creates a new monitoring rule by using other fields and associates the rule with a created monitor.
   */
  dataQualityRules?: CreateDataQualityEvaluationTaskRequestDataQualityRules[];
  /**
   * @remarks
   * The data source ID. You can call the [ListDataSources](https://help.aliyun.com/document_detail/211431.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  dataSourceId?: number;
  /**
   * @remarks
   * The description of the monitor.
   * 
   * @example
   * OpenAPI create a data quality monitoring test
   */
  description?: string;
  /**
   * @remarks
   * The hook.
   */
  hooks?: CreateDataQualityEvaluationTaskRequestHooks[];
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
  notifications?: CreateDataQualityEvaluationTaskRequestNotifications;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You can use this parameter to specify the DataWorks workspace on which you want to perform the API operation.
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
   * The monitored object of the monitor.
   * 
   * This parameter is required.
   */
  target?: CreateDataQualityEvaluationTaskRequestTarget;
  /**
   * @remarks
   * The trigger configuration of the monitor.
   */
  trigger?: CreateDataQualityEvaluationTaskRequestTrigger;
  static names(): { [key: string]: string } {
    return {
      dataQualityRules: 'DataQualityRules',
      dataSourceId: 'DataSourceId',
      description: 'Description',
      hooks: 'Hooks',
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
      dataQualityRules: { 'type': 'array', 'itemType': CreateDataQualityEvaluationTaskRequestDataQualityRules },
      dataSourceId: 'number',
      description: 'string',
      hooks: { 'type': 'array', 'itemType': CreateDataQualityEvaluationTaskRequestHooks },
      name: 'string',
      notifications: CreateDataQualityEvaluationTaskRequestNotifications,
      projectId: 'number',
      runtimeConf: 'string',
      target: CreateDataQualityEvaluationTaskRequestTarget,
      trigger: CreateDataQualityEvaluationTaskRequestTrigger,
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

