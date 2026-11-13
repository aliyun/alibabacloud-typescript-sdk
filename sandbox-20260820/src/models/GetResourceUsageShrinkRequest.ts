// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceUsageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query. This time is exclusive. Specify the time on the hour in UTC. The latest allowed end time is the start of the current hour. You can query data for a maximum of 7 days at a time. The end time must be later than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-11-05T02:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The granularity at which usage data is aggregated. Set this parameter to All to view the cumulative usage over the entire query interval, to Hour to view the hourly usage, or to Day to aggregate the usage every 24 hours from the start time. The last interval can be less than 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * Hour
   */
  granularity?: string;
  /**
   * @remarks
   * The grouping keys. You can group the results by any combination of teamID, templateID, and sandboxPlan. Each key can be specified only once. If you do not specify this parameter, the results are aggregated over the entire query scope.
   * 
   * @example
   * ["teamID"]
   */
  groupByShrink?: string;
  /**
   * @remarks
   * The sandbox edition to query. Valid values: eco, std, pro, and ent.
   * 
   * @example
   * pro
   */
  sandboxPlan?: string;
  /**
   * @remarks
   * The start time of the query. This time is inclusive. Specify the time on the hour in UTC, such as 00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-11-05T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the team to query. If you do not specify this parameter, the usage of the current account is queried.
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
   * The usage items to query. You can query 1 to 6 different usage items at a time. CPU usage items include cpuActive and cpuIdle. Memory usage items include memoryActive and memoryIdle. Disk usage items include disk and diskDeepSleep. The disk item includes the usage of disks in deep sleep mode.
   * 
   * This parameter is required.
   * 
   * @example
   * ["cpuActive"]
   */
  usageNamesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      granularity: 'granularity',
      groupByShrink: 'groupBy',
      sandboxPlan: 'sandboxPlan',
      startTime: 'startTime',
      teamID: 'teamID',
      templateID: 'templateID',
      usageNamesShrink: 'usageNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      granularity: 'string',
      groupByShrink: 'string',
      sandboxPlan: 'string',
      startTime: 'string',
      teamID: 'string',
      templateID: 'string',
      usageNamesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

