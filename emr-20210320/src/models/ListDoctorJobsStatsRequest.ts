// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoctorJobsStatsRequestEndRange extends $dara.Model {
  /**
   * @remarks
   * The end of the time range during which jobs ended. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1680019200000
   */
  endTime?: number;
  /**
   * @remarks
   * The beginning of the time range during which jobs ended. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1675180800000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorJobsStatsRequestStartRange extends $dara.Model {
  /**
   * @remarks
   * The end of the time range during which jobs were submitted. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. Unit: milliseconds.
   * 
   * @example
   * 1666406820000
   */
  endTime?: number;
  /**
   * @remarks
   * The beginning of the time range during which jobs were submitted. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. Unit: milliseconds.
   * 
   * @example
   * 1679036826987
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDoctorJobsStatsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  clusterId?: string;
  /**
   * @remarks
   * The range of end time. You can filter jobs whose end time falls within the specified time range.
   */
  endRange?: ListDoctorJobsStatsRequestEndRange;
  /**
   * @remarks
   * The fields that are used for grouping data.
   * 
   * Currently, only the first value is used for grouping data. Combinations of multiple values will be supported in the future.
   * 
   * @example
   * null
   */
  groupBy?: string[];
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the request to retrieve a new page of results.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
  /**
   * @remarks
   * The field that you use to sort the query results. Valid values:
   * 
   * *   vcoreSeconds: the aggregated number of vCPUs that are allocated to the job multiplied by the number of seconds the job has been running
   * *   memSeconds: the aggregated amount of memory that is allocated to the job multiplied by the number of seconds the job has been running
   * 
   * @example
   * vcoreSeconds
   */
  orderBy?: string;
  /**
   * @remarks
   * The order in which you want to sort the query results. Valid values:
   * 
   * *   ASC: in ascending order
   * *   DESC: in descending order
   * 
   * @example
   * ASC
   */
  orderType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The range of start time. You can filter jobs whose start time falls within the specified time range.
   */
  startRange?: ListDoctorJobsStatsRequestStartRange;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      endRange: 'EndRange',
      groupBy: 'GroupBy',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      regionId: 'RegionId',
      startRange: 'StartRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      endRange: ListDoctorJobsStatsRequestEndRange,
      groupBy: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      orderType: 'string',
      regionId: 'string',
      startRange: ListDoctorJobsStatsRequestStartRange,
    };
  }

  validate() {
    if(this.endRange && typeof (this.endRange as any).validate === 'function') {
      (this.endRange as any).validate();
    }
    if(Array.isArray(this.groupBy)) {
      $dara.Model.validateArray(this.groupBy);
    }
    if(this.startRange && typeof (this.startRange as any).validate === 'function') {
      (this.startRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

