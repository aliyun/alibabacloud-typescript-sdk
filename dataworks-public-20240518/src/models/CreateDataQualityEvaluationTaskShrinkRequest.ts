// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityEvaluationTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of monitoring rules that are associated with the monitor. If you configure the ID of a monitoring rule by using the DataQualityRule.Id parameter, the system associates the rule with a created monitor. If you do not configure the ID of a monitoring rule, the system creates a new monitoring rule by using other fields and associates the rule with a created monitor.
   */
  dataQualityRulesShrink?: string;
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
  hooksShrink?: string;
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
  notificationsShrink?: string;
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
  targetShrink?: string;
  /**
   * @remarks
   * The trigger configuration of the monitor.
   */
  triggerShrink?: string;
  static names(): { [key: string]: string } {
    return {
      dataQualityRulesShrink: 'DataQualityRules',
      dataSourceId: 'DataSourceId',
      description: 'Description',
      hooksShrink: 'Hooks',
      name: 'Name',
      notificationsShrink: 'Notifications',
      projectId: 'ProjectId',
      runtimeConf: 'RuntimeConf',
      targetShrink: 'Target',
      triggerShrink: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityRulesShrink: 'string',
      dataSourceId: 'number',
      description: 'string',
      hooksShrink: 'string',
      name: 'string',
      notificationsShrink: 'string',
      projectId: 'number',
      runtimeConf: 'string',
      targetShrink: 'string',
      triggerShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

