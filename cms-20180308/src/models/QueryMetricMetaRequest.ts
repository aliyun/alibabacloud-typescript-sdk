// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMetricMetaRequest extends $dara.Model {
  /**
   * @example
   * [{\\"name\\":\\"alertUnit\\",\\"value\\":\\"%\\"}]
   */
  labels?: string;
  /**
   * @example
   * CPUUtilization
   */
  metric?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * acs_ecs_dashboard
   */
  project?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      metric: 'Metric',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: 'string',
      metric: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      project: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

