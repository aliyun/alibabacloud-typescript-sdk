// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityEvaluationTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of data quality rules associated with the data quality monitor. If DataQualityRule.Id is specified, the rule corresponding to that ID is associated with the newly created quality monitor. If not specified, a new rule is created from the other fields and associated with the newly created quality monitor.
   */
  dataQualityRulesShrink?: string;
  /**
   * @remarks
   * The ID of the data source. You can call [ListDataSources](https://help.aliyun.com/document_detail/211431.html) to obtain the ID of the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  dataSourceId?: number;
  /**
   * @remarks
   * The description of the quality monitoring task.
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
   * The name of the quality monitoring task.
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
   * This parameter specifies the DataWorks workspace used by this API call.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The extended configuration, a JSON-formatted string. This setting takes effect only for EMR-type data quality monitors.
   * - queue: The YARN queue used when running EMR data quality validation. The default is the queue configured for the current project.
   * - sqlEngine: The SQL engine used when running EMR data validation.
   *     + HIVE_SQL
   *     + SPARK_SQL
   * 
   * @example
   * { "queue": "default", "sqlEngine": "SPARK_SQL" }
   */
  runtimeConf?: string;
  /**
   * @remarks
   * The data quality monitoring object.
   * 
   * This parameter is required.
   */
  targetShrink?: string;
  /**
   * @remarks
   * The trigger configuration of the data quality validation task.
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

