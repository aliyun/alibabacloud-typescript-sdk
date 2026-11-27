// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceUsageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query. This time is exclusive. Specify a full hour in UTC. The latest allowed time is the start of the current hour. You can query a maximum of 7 days at a time. The end time must be later than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-11-05T02:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The granularity for aggregating usage. Set to All to view the cumulative usage for the entire query interval. Set to Hour to view hourly usage. Set to Day to aggregate usage every 24 hours from the start time. The last interval can be less than 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * Hour
   */
  granularity?: string;
  /**
   * @remarks
   * Specifies the keys by which to group the results. You can use any combination of teamID, templateID, snapshotID, and sandboxPlan. Each key can be specified only once. If this parameter is not specified, the results are aggregated for the entire query range. If you group by snapshotID, only the usage associated with snapshots is returned.
   * 
   * @example
   * ["teamID"]
   */
  groupByShrink?: string;
  /**
   * @remarks
   * The sandbox plan to query. Valid values: eco, std, pro, and ent.
   * 
   * @example
   * pro
   */
  sandboxPlan?: string;
  /**
   * @remarks
   * The ID of the snapshot for which you want to query historical usage.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  snapshotID?: string;
  /**
   * @remarks
   * The start time of the query. This time is inclusive. Specify a full hour in UTC, such as 00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-11-05T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * Specifies the team ID. Required when querying by team. If this parameter is omitted, the usage of the current account is queried.
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
   * Specifies 1 to 8 different usage item names for each request. For available usage items, refer to the resource usage metrics catalog.
   * 
   * This parameter is required.
   * 
   * @example
   * ["activeVCPU"]
   */
  usageNamesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      granularity: 'granularity',
      groupByShrink: 'groupBy',
      sandboxPlan: 'sandboxPlan',
      snapshotID: 'snapshotID',
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
      snapshotID: 'string',
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

