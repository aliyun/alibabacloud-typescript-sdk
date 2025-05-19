// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMetricLastRequest extends $dara.Model {
  /**
   * @example
   * 1000
   */
  cursor?: string;
  /**
   * @example
   * [{"instanceId":"XXX"}]
   */
  dimensions?: string;
  /**
   * @example
   * 2019-01-31 10:10:00
   */
  endTime?: string;
  /**
   * @example
   * {"groupby":["userId","instanceId"]}
   */
  express?: string;
  /**
   * @example
   * 1000
   */
  length?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CPUUtilization
   */
  metric?: string;
  /**
   * @example
   * 1
   */
  page?: string;
  /**
   * @example
   * 60
   */
  period?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acs_ecs_dashboard
   */
  project?: string;
  regionId?: string;
  /**
   * @example
   * 000
   */
  resourceOwnerId?: number;
  /**
   * @example
   * 2019-01-31 10:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      cursor: 'Cursor',
      dimensions: 'Dimensions',
      endTime: 'EndTime',
      express: 'Express',
      length: 'Length',
      metric: 'Metric',
      page: 'Page',
      period: 'Period',
      project: 'Project',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursor: 'string',
      dimensions: 'string',
      endTime: 'string',
      express: 'string',
      length: 'string',
      metric: 'string',
      page: 'string',
      period: 'string',
      project: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

