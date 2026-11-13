// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResourceUsageGroupsItemsBuckets extends $dara.Model {
  /**
   * @remarks
   * The end time of this usage statistics period, exclusive.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-11-05T01:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The cumulative usage within this time period. The unit is specified by unit.
   * 
   * This parameter is required.
   * 
   * @example
   * 3600
   */
  quantity?: number;
  /**
   * @remarks
   * The start time of this usage statistics period, inclusive.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-11-05T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      quantity: 'quantity',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      quantity: 'number',
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

export class ResourceUsageGroupsItems extends $dara.Model {
  /**
   * @remarks
   * The hourly or daily usage arranged in chronological order. Only time periods with records are returned. This field is omitted when granularity is set to All.
   * 
   * @example
   * [{"startTime":"2026-11-05T00:00:00Z","endTime":"2026-11-05T01:00:00Z","quantity":3600},{"startTime":"2026-11-05T01:00:00Z","endTime":"2026-11-05T02:00:00Z","quantity":1800}]
   */
  buckets?: ResourceUsageGroupsItemsBuckets[];
  /**
   * @remarks
   * The cumulative usage of this usage item over the entire query interval. This field is omitted if there are no usage records for the item within the interval.
   * 
   * @example
   * 5400
   */
  total?: number;
  /**
   * @remarks
   * The unit of usage. The unit is CoreSecond for CPU, and GiBSecond for memory and cloud disks.
   * 
   * This parameter is required.
   * 
   * @example
   * CoreSecond
   */
  unit?: string;
  /**
   * @remarks
   * The name of the usage item specified in the request.
   * 
   * This parameter is required.
   * 
   * @example
   * cpuActive
   */
  usageName?: string;
  static names(): { [key: string]: string } {
    return {
      buckets: 'buckets',
      total: 'total',
      unit: 'unit',
      usageName: 'usageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buckets: { 'type': 'array', 'itemType': ResourceUsageGroupsItemsBuckets },
      total: 'number',
      unit: 'string',
      usageName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.buckets)) {
      $dara.Model.validateArray(this.buckets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceUsageGroups extends $dara.Model {
  /**
   * @remarks
   * The team, template, or sandbox version corresponding to the usage of this group.
   * 
   * This parameter is required.
   * 
   * @example
   * {"teamID":"70d1c834-0333-58d8-97ac-5336eb9179eb"}
   */
  dimensions?: { [key: string]: string };
  /**
   * @remarks
   * The query result for each requested usage item in this group.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"usageName":"cpuActive","unit":"CoreSecond","total":5400,"buckets":[{"startTime":"2026-11-05T00:00:00Z","endTime":"2026-11-05T01:00:00Z","quantity":3600},{"startTime":"2026-11-05T01:00:00Z","endTime":"2026-11-05T02:00:00Z","quantity":1800}]}]
   */
  items?: ResourceUsageGroupsItems[];
  static names(): { [key: string]: string } {
    return {
      dimensions: 'dimensions',
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      items: { 'type': 'array', 'itemType': ResourceUsageGroupsItems },
    };
  }

  validate() {
    if(this.dimensions) {
      $dara.Model.validateMap(this.dimensions);
    }
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceUsage extends $dara.Model {
  /**
   * @remarks
   * The end time of the requested interval, exclusive.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-11-05T02:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The aggregation granularity used for this query. Valid values: All, Hour, and Day.
   * 
   * This parameter is required.
   * 
   * @example
   * Hour
   */
  granularity?: string;
  /**
   * @remarks
   * The grouping key used for this query. An empty array is returned when no grouping is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * ["teamID"]
   */
  groupBy?: string[];
  /**
   * @remarks
   * The usage for each group. If no grouping is applied, the usage for the entire query range is returned. An empty array is returned if there are no usage records within the query range.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"dimensions":{"teamID":"70d1c834-0333-58d8-97ac-5336eb9179eb"},"items":[{"usageName":"cpuActive","unit":"CoreSecond","total":5400,"buckets":[{"startTime":"2026-11-05T00:00:00Z","endTime":"2026-11-05T01:00:00Z","quantity":3600},{"startTime":"2026-11-05T01:00:00Z","endTime":"2026-11-05T02:00:00Z","quantity":1800}]}]}]
   */
  groups?: ResourceUsageGroups[];
  /**
   * @remarks
   * The start time of the requested interval, inclusive.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-11-05T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      granularity: 'granularity',
      groupBy: 'groupBy',
      groups: 'groups',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      granularity: 'string',
      groupBy: { 'type': 'array', 'itemType': 'string' },
      groups: { 'type': 'array', 'itemType': ResourceUsageGroups },
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupBy)) {
      $dara.Model.validateArray(this.groupBy);
    }
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

