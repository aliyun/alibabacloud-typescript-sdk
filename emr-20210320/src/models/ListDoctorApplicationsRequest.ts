// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoctorApplicationsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of jobs that are submitted to YARN.
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
   * Specify the date in the ISO 8601 standard. For example, 2023-01-01 represents January 1, 2023.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-01-01
   */
  dateTime?: string;
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
   * 1.  startTime: the time when the job starts
   * 2.  endTime: the time when the job ends
   * 3.  vcoreUtilization: the vCPU utilization of the job
   * 4.  memUtilization: the memory usage of the job
   * 5.  vcoreSeconds: the aggregated number of vCPUs that are allocated to the job multiplied by the number of seconds the job has been running
   * 6.  memSeconds: the aggregated amount of memory that is allocated to the job multiplied by the number of seconds the job has been running
   * 7.  score: the score of the job
   * 
   * @example
   * score
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
      dateTime: 'DateTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      queues: 'Queues',
      regionId: 'RegionId',
      types: 'Types',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: { 'type': 'array', 'itemType': 'string' },
      clusterId: 'string',
      dateTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      orderType: 'string',
      queues: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      types: { 'type': 'array', 'itemType': 'string' },
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.appIds)) {
      $dara.Model.validateArray(this.appIds);
    }
    if(Array.isArray(this.queues)) {
      $dara.Model.validateArray(this.queues);
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

