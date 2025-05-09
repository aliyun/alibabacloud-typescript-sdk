// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataQualityRuleTemplateSamplingConfig extends $dara.Model {
  /**
   * @example
   * Min
   */
  metric?: string;
  /**
   * @example
   * { "SQL": "SELECT min(id) from table;" }
   */
  metricParameters?: string;
  /**
   * @example
   * SET odps.sql.udf.timeout=600s;
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

