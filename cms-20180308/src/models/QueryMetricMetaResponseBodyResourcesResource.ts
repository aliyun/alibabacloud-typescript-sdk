// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMetricMetaResponseBodyResourcesResource extends $dara.Model {
  /**
   * @example
   * ECS.CPUUtilization
   */
  description?: string;
  /**
   * @example
   * instanceId
   */
  dimensions?: string;
  /**
   * @example
   * [{\\"name\\":\\"alertUnit\\",\\"value\\":\\"%\\"},{\\"name\\":\\"alertDefault\\",\\"value\\":\\"80\\"},{\\"name\\":\\"minAlertPeriod\\",\\"value\\":\\"60\\"},{\\"name\\":\\"metricCategory\\",\\"value\\":\\"instanceId\\"},{\\"name\\":\\"is_alarm\\",\\"value\\":\\"true\\"}]"
   */
  labels?: string;
  /**
   * @example
   * CPUUtilization
   */
  metric?: string;
  /**
   * @example
   * 60,300
   */
  periods?: string;
  /**
   * @example
   * acs_ecs_dashboard
   */
  project?: string;
  /**
   * @example
   * Average,Minimum,Maximum
   */
  statistics?: string;
  /**
   * @example
   * %
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      dimensions: 'Dimensions',
      labels: 'Labels',
      metric: 'Metric',
      periods: 'Periods',
      project: 'Project',
      statistics: 'Statistics',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      dimensions: 'string',
      labels: 'string',
      metric: 'string',
      periods: 'string',
      project: 'string',
      statistics: 'string',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

