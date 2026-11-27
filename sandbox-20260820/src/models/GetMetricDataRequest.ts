// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetricDataRequest extends $dara.Model {
  /**
   * @remarks
   * The end time for a time-series query, exclusive. Specify a UTC time in whole seconds, which must be later than startTime. You can query data for up to 7 days at a time. The time range must include at least one time point aligned with period, and these time points cannot be later than the current time.
   * 
   * @example
   * 2026-11-05T00:02:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * For example, grouping by teamID allows you to view the metrics of each team separately. You can combine up to four different grouping keys. The available keys vary by metric. If not specified, the overall results for the query scope are returned.
   * 
   * @example
   * ["teamID"]
   */
  groupBy?: string[];
  /**
   * @remarks
   * Specifies 1 to 16 different metric names in each request. For available metrics and their applicable scopes, see the monitoring metrics folder.
   * 
   * This parameter is required.
   * 
   * @example
   * ["cpuUsedCores"]
   */
  metricNames?: string[];
  /**
   * @remarks
   * Required for both single-point and time-series queries. In a time-series query, this parameter specifies the interval between adjacent data points in seconds. Valid values: 60, 300, 900, 1800, 3600, and 86400.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * The ID of the sandbox to query. You must also specify the teamID and templateID to which the sandbox belongs, and select a metric that supports querying by sandbox.
   * 
   * @example
   * sbx-62105527-699e-48df-ad3b-7425001ae4f2
   */
  sandboxID?: string;
  /**
   * @remarks
   * Queries the number of sandboxes by sandbox edition. This parameter applies only to sandboxCount. Valid values: eco, std, pro, and ent.
   * 
   * @example
   * pro
   */
  sandboxPlan?: string;
  /**
   * @remarks
   * The start time for a time-series query, inclusive. Specify a UTC time accurate to seconds as shown in the example, and also specify endTime.
   * 
   * @example
   * 2026-11-05T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * Required when you query by team. If omitted, the metrics of the current account are queried. Account quotas and team quotas must be queried separately.
   * 
   * @example
   * 70d1c834-0333-58d8-97ac-5336eb9179eb
   */
  teamID?: string;
  /**
   * @remarks
   * The ID of the template to query. You must also specify the teamID to which the template belongs.
   * 
   * @example
   * 4hrtmghh2nzrsdh6yr65
   */
  templateID?: string;
  /**
   * @remarks
   * The point in time for a single-point query. Specify the current or a past UTC time, accurate to seconds. If time, startTime, and endTime are omitted, the current time is queried.
   * 
   * @example
   * 2026-11-05T00:01:00Z
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      groupBy: 'groupBy',
      metricNames: 'metricNames',
      period: 'period',
      sandboxID: 'sandboxID',
      sandboxPlan: 'sandboxPlan',
      startTime: 'startTime',
      teamID: 'teamID',
      templateID: 'templateID',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      groupBy: { 'type': 'array', 'itemType': 'string' },
      metricNames: { 'type': 'array', 'itemType': 'string' },
      period: 'number',
      sandboxID: 'string',
      sandboxPlan: 'string',
      startTime: 'string',
      teamID: 'string',
      templateID: 'string',
      time: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupBy)) {
      $dara.Model.validateArray(this.groupBy);
    }
    if(Array.isArray(this.metricNames)) {
      $dara.Model.validateArray(this.metricNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

