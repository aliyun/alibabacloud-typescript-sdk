// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityRuleTemplatesResponseBodyPagingInfoDataQualityRuleTemplatesSamplingConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the sampled metric.
   * - Count: number of table rows
   * - Min: minimum value of the field
   * - Max: The maximum value of the field.
   * - Avg: field mean
   * - DistinctCount: number of unique field values
   * - DistinctPercent: the ratio of the number of unique field values to the number of data rows.
   * - DuplicatedCount: number of duplicate field values
   * - DuplicatedPercent: the ratio of the number of duplicate field values to the number of data rows.
   * - TableSize: table size
   * - NullValueCount: number of rows with empty fields
   * - NullValuePercent: the proportion of fields that are empty.
   * - GroupCount: aggregate each value by field value and the corresponding number of data rows
   * - CountNotIn: the enumerated value does not match the number of rows.
   * - CountDistinctNotIn: the number of unique values that the enumerated values do not match.
   * - UserDefinedSql: use custom SQL to collect samples
   * 
   * @example
   * Max
   */
  metric?: string;
  /**
   * @remarks
   * Parameters required for sample collection
   * 
   * @example
   * {"Sql": "select count(1) from table;"}
   */
  metricParameters?: string;
  /**
   * @remarks
   * Before executing the sample statement, insert some runtime parameter setting statements, which can be up to 1000 characters in length. Currently, only MaxCompute are supported.
   * 
   * @example
   * SET odps.sql.udf.timeout=600s; 
   * SET odps.sql.python.version=cp27;
   */
  settingConfig?: string;
  static names(): { [key: string]: string } {
    return {
      metric: 'Metric',
      metricParameters: 'MetricParameters',
      settingConfig: 'SettingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metric: 'string',
      metricParameters: 'string',
      settingConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

