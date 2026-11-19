// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetricDataRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the time series query. This time is exclusive. Specify a UTC time accurate to seconds. The end time must be later than the start time. You can query metrics for a maximum of 7 days at a time. The time range must include at least one time point aligned with the period, and these time points cannot be later than the current time.
   * 
   * @example
   * 2026-11-05T00:02:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Groups metrics by a specific key. For example, you can group metrics by teamID to view the metrics of each team separately. You can combine up to four different grouping keys. The available keys vary by metric. If you do not specify this parameter, the overall results within the query scope are returned.
   * 
   * @example
   * ["teamID"]
   */
  groupBy?: string[];
  /**
   * @remarks
   * The names of the metrics to query. You can query 1 to 16 different metrics at a time. For available metrics and query scopes, refer to the metric catalog.
   * 
   * This parameter is required.
   * 
   * @example
   * ["cpuUsedCores"]
   */
  metricNames?: string[];
  /**
   * @remarks
   * The time interval for time series queries, in seconds. Valid values: 60, 300, 900, 1800, 3600, and 86400. A value of 60 corresponds to exact minutes, and 86400 corresponds to 00:00:00 UTC every day. The calculation duration of some statistical metrics varies with the interval.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * The ID of the sandbox to query. You must also specify the teamID and templateID to which the sandbox belongs, and select a metric that supports sandbox-level queries.
   * 
   * @example
   * sbx-62105527-699e-48df-ad3b-7425001ae4f2
   */
  sandboxID?: string;
  /**
   * @remarks
   * Queries the number of sandboxes by sandbox plan. This parameter applies only to the sandboxCount metric. Valid values: eco, std, pro, and ent.
   * 
   * @example
   * pro
   */
  sandboxPlan?: string;
  /**
   * @remarks
   * The start time of the time series query. This time is inclusive. Specify a UTC time accurate to seconds, and also specify the endTime parameter.
   * 
   * @example
   * 2026-11-05T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the team to query. If you leave this parameter empty, the metrics of the current account are queried.
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
   * The specific point in time to query. If you query metrics at a specific point in time, specify only this parameter. Specify a current or past UTC time accurate to seconds. If you omit all time parameters, the metrics at the current time are queried.
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

