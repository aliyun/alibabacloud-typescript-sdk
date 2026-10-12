// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityEvaluationTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of data quality rules associated with the data quality monitoring task. If DataQualityRule.Id is specified, the rule corresponding to the ID is associated with the new quality monitoring task. If it is not specified, a new rule is created by using other fields and associated with the new quality monitoring task.
   */
  dataQualityRulesShrink?: string;
  /**
   * @remarks
   * The ID of the data source. You can call the [ListDataSources](https://help.aliyun.com/document_detail/211431.html) operation to query the ID of the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  dataSourceId?: number;
  /**
   * @remarks
   * The description of the data quality monitoring task.
   * 
   * @example
   * OpenAPI create a data quality monitoring test
   */
  description?: string;
  /**
   * @remarks
   * The hook settings.
   */
  hooksShrink?: string;
  /**
   * @remarks
   * The name of the data quality monitoring task.
   * 
   * This parameter is required.
   * 
   * @example
   * OpenAPI create a data quality monitoring test
   */
  name?: string;
  /**
   * @remarks
   * The notification subscription configuration.
   */
  notificationsShrink?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace Management page to obtain the ID.
   * 
   * This parameter is used to determine the DataWorks workspace used to invoke this API operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The extension configurations in JSON string format. This parameter takes effect only for EMR data quality monitoring tasks.
   * - queue: the YARN queue used to execute EMR data validation. Default value: the queue configured for the project.
   * - sqlEngine: the SQL engine used to execute EMR data validation. Valid values:
   *     + HIVE_SQL
   *     + SPARK_SQL
   * 
   * @example
   * { "queue": "default", "sqlEngine": "SPARK_SQL" }
   */
  runtimeConf?: string;
  /**
   * @remarks
   * The monitored object for the data quality monitoring task.
   * 
   * This parameter is required.
   */
  targetShrink?: string;
  /**
   * @remarks
   * The trigger configuration for the data quality check task.
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

