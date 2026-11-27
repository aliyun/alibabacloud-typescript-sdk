// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResourceUsageGroupsItemsBuckets extends $dara.Model {
  /**
   * @remarks
   * The end time of the usage statistics for this bucket, exclusive.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-11-05T01:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The accumulated usage during this time bucket. The unit is specified in the unit field.
   * 
   * This parameter is required.
   * 
   * @example
   * 3600
   */
  quantity?: number;
  /**
   * @remarks
   * The start time of the usage statistics for this bucket, inclusive.
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
   * The hourly or daily time buckets with usage data, returned in chronological order. An empty array is returned if no buckets are available. This field is omitted if the granularity is All.
   * 
   * @example
   * [{"startTime":"2026-11-05T00:00:00Z","endTime":"2026-11-05T01:00:00Z","quantity":3600},{"startTime":"2026-11-05T01:00:00Z","endTime":"2026-11-05T02:00:00Z","quantity":1800}]
   */
  buckets?: ResourceUsageGroupsItemsBuckets[];
  /**
   * @remarks
   * The accumulated usage for the entire query interval. This field is omitted if no accumulated value is available. A value of 0 indicates that the accumulated usage is zero.
   * 
   * @example
   * 5400
   */
  total?: number;
  /**
   * @remarks
   * The unit of usage. The unit is CoreSecond for CPU, and GiBSecond for memory and disks.
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
   * activeVCPU
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
   * The team, template, snapshot, or sandbox version corresponding to the usage in this group.
   * 
   * This parameter is required.
   * 
   * @example
   * {"teamID":"70d1c834-0333-58d8-97ac-5336eb9179eb"}
   */
  dimensions?: { [key: string]: string };
  /**
   * @remarks
   * The query results for each requested usage item in this group.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"usageName":"activeVCPU","unit":"CoreSecond","total":5400,"buckets":[{"startTime":"2026-11-05T00:00:00Z","endTime":"2026-11-05T01:00:00Z","quantity":3600},{"startTime":"2026-11-05T01:00:00Z","endTime":"2026-11-05T02:00:00Z","quantity":1800}]}]
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
   * The grouping keys used for this query. This is an empty array if no grouping is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * ["teamID"]
   */
  groupBy?: string[];
  /**
   * @remarks
   * The usage for each group. If no grouping is applied, the usage is aggregated across the entire query range. An empty array is returned if no matching groups are found.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"dimensions":{"teamID":"70d1c834-0333-58d8-97ac-5336eb9179eb"},"items":[{"usageName":"activeVCPU","unit":"CoreSecond","total":5400,"buckets":[{"startTime":"2026-11-05T00:00:00Z","endTime":"2026-11-05T01:00:00Z","quantity":3600},{"startTime":"2026-11-05T01:00:00Z","endTime":"2026-11-05T02:00:00Z","quantity":1800}]}]}]
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

