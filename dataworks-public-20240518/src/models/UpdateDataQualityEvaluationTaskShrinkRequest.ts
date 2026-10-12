// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataQualityEvaluationTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of data quality rules associated with data quality monitoring.
   */
  dataQualityRulesShrink?: string;
  /**
   * @remarks
   * The data source ID. You can call the [ListDataSources](https://help.aliyun.com/document_detail/211431.html) operation to obtain the data source ID.
   * 
   * @example
   * 358750
   */
  dataSourceId?: number;
  /**
   * @remarks
   * The description of the quality monitoring task.
   * 
   * @example
   * OpenAPI data quality monitoring test.
   */
  description?: string;
  /**
   * @remarks
   * The hook settings.
   */
  hooksShrink?: string;
  /**
   * @remarks
   * The ID of the data quality monitoring task.
   * 
   * This parameter is required.
   * 
   * @example
   * 7227061794
   */
  id?: number;
  /**
   * @remarks
   * The name of the quality monitoring task.
   * 
   * @example
   * OpenAPI data quality monitoring test.
   */
  name?: string;
  /**
   * @remarks
   * The notification subscription configuration.
   */
  notificationsShrink?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The extension configuration. This parameter is a character string in JSON format and takes effect only for EMR data quality monitoring.
   * - queue: the YARN queue used when you execute EMR data validation. Default value: the queue configured for the current project.
   * - sqlEngine: the SQL DPI engine used when you execute EMR data validation. Valid values:
   *   + HIVE_SQL
   *   + SPARK_SQL
   * 
   * @example
   * { "queue": "default", "sqlEngine": "SPARK_SQL" }
   */
  runtimeConf?: string;
  /**
   * @remarks
   * The monitored object for data quality monitoring.
   */
  targetShrink?: string;
  /**
   * @remarks
   * The trigger configuration of the data quality check task.
   */
  triggerShrink?: string;
  static names(): { [key: string]: string } {
    return {
      dataQualityRulesShrink: 'DataQualityRules',
      dataSourceId: 'DataSourceId',
      description: 'Description',
      hooksShrink: 'Hooks',
      id: 'Id',
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
      id: 'number',
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

