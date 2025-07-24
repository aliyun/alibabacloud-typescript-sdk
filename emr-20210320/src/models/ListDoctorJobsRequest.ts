// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoctorJobsRequestEndRange extends $dara.Model {
  /**
   * @remarks
   * The end of the time range during which jobs ended. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. Unit: milliseconds.
   * 
   * @example
   * 1666865137099
   */
  endTime?: number;
  /**
   * @remarks
   * The beginning of the time range during which jobs ended. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. Unit: milliseconds.
   * 
   * @example
   * 1679135111960
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

export class ListDoctorJobsRequestStartRange extends $dara.Model {
  /**
   * @remarks
   * The end of the time range during which jobs were submitted. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. Unit: milliseconds.
   * 
   * @example
   * 1683340662020
   */
  endTime?: number;
  /**
   * @remarks
   * The beginning of the time range during which jobs were submitted. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. Unit: milliseconds.
   * 
   * @example
   * 1683340662016
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

export class ListDoctorJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the jobs that are submitted to YARN.
   * 
   * @example
   * null
   */
  appIds?: string[];
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
  endRange?: ListDoctorJobsRequestEndRange;
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
   * *   ASC: the ascending order
   * *   DESC: the descending order
   * 
   * @example
   * ASC
   */
  orderType?: string;
  /**
   * @remarks
   * The YARN queues to which the jobs are submitted.
   * 
   * @example
   * null
   */
  queues?: string[];
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
  startRange?: ListDoctorJobsRequestStartRange;
  /**
   * @remarks
   * The YARN engines to which the jobs are submitted.
   * 
   * @example
   * null
   */
  types?: string[];
  /**
   * @remarks
   * The users who submit the jobs.
   * 
   * @example
   * null
   */
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      clusterId: 'ClusterId',
      endRange: 'EndRange',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      queues: 'Queues',
      regionId: 'RegionId',
      startRange: 'StartRange',
      types: 'Types',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: { 'type': 'array', 'itemType': 'string' },
      clusterId: 'string',
      endRange: ListDoctorJobsRequestEndRange,
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      orderType: 'string',
      queues: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      startRange: ListDoctorJobsRequestStartRange,
      types: { 'type': 'array', 'itemType': 'string' },
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.appIds)) {
      $dara.Model.validateArray(this.appIds);
    }
    if(this.endRange && typeof (this.endRange as any).validate === 'function') {
      (this.endRange as any).validate();
    }
    if(Array.isArray(this.queues)) {
      $dara.Model.validateArray(this.queues);
    }
    if(this.startRange && typeof (this.startRange as any).validate === 'function') {
      (this.startRange as any).validate();
    }
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

